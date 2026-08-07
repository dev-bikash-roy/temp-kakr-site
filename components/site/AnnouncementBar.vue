<template>
  <!--
    Handoff §1 stacking order, top to bottom:
      1. system-incident alert  (the <slot name="incident"> below)
      2. editorial announcement bar  (this component)
      3. shared sticky navigation header  (AppHeader, offset by --kakr-announce-h)
  -->
  <!--
    Rendered whenever an announcement is live, regardless of dismissal. Visibility
    is controlled entirely by the `data-announce` attribute and CSS below, not by
    `v-if` — gating the DOM on `hidden` would mean the server (which cannot read
    localStorage) and the client disagree about the markup, which is a hydration
    mismatch.
  -->
  <div v-if="announcement" class="kakr-announce-stack">
    <!--
      An incident alert always outranks editorial copy. Nothing fills this slot
      today; it exists so that adding a status-page banner later is a matter of
      passing it in rather than restacking z-indexes under time pressure.
    -->
    <slot name="incident" />

    <aside class="kakr-announce" aria-label="Site announcement">
      <NuxtLink
        :to="announcement.destination"
        class="kakr-announce__link"
        @click="onClick"
      >
        <span class="kakr-announce__label">{{ announcement.label }}</span>
        <span class="kakr-announce__sep" aria-hidden="true">•</span>
        <span class="kakr-announce__title">{{ announcement.title }}</span>
        <span class="kakr-announce__sep kakr-announce__sep--wide" aria-hidden="true">•</span>
        <span class="kakr-announce__cta">Read the story <span aria-hidden="true">→</span></span>
      </NuxtLink>

      <button
        v-if="announcement.dismissible"
        type="button"
        class="kakr-announce__close"
        :aria-label="`Dismiss announcement: ${announcement.title}`"
        @click="onDismiss"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useNewsroomList } from '~/composables/useNewsroom'
import { useNewsroomAnalytics } from '~/composables/useNewsroomAnalytics'

const DISMISS_KEY = 'kakr:announcements-dismissed'
/** Keeps the stored list from growing without bound over years of announcements. */
const DISMISS_HISTORY_LIMIT = 20

const route = useRoute()
const { activeAnnouncement } = await useNewsroomList()
const { track } = useNewsroomAnalytics()

/**
 * Handoff §1: hide the editorial bar on the editor. /admin is served as a static
 * file today so this layout never renders there, but the guard means the rule
 * still holds if /admin ever becomes a Nuxt route.
 */
const onAdmin = computed(() => /^\/(?:[a-z]{2}\/)?admin(?:\/|$)/.test(route.path))

const announcement = computed(() => (onAdmin.value ? null : activeAnnouncement.value))

function readDismissed(): string[] {
  if (!import.meta.client) return []
  try {
    const raw = localStorage.getItem(DISMISS_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}

/**
 * Dismissal state. Initialised synchronously during setup on the client, so the
 * very first client render already knows the answer and `data-announce` never
 * flickers back to "on" for a frame. Safe to do here only because the markup does
 * not depend on it — see the template comment.
 */
const hidden = ref(import.meta.client && announcement.value ? readDismissed().includes(announcement.value.id) : false)

/**
 * Pre-paint dismissal check.
 *
 * The bar is server-rendered because the announcement data is available at SSR
 * and a client-only bar would push the whole page down after hydration. But
 * dismissal lives in localStorage, which SSR cannot see. This inline script runs
 * before first paint, so a returning visitor who already dismissed this exact
 * announcement never sees it flash — `--kakr-announce-h` is zeroed and the bar is
 * display:none'd by the attribute selector in the stylesheet below.
 *
 * Only the announcement ID crosses into the script, and it is JSON-encoded.
 */
useHead(() => {
  const current = announcement.value
  if (!current) return {}

  return {
    // Declarative and reactive. It must not be set imperatively as well:
    // unhead re-applies htmlAttrs on every head update, so a `setAttribute` call
    // would be silently reverted — which is exactly how a dismissed bar ended up
    // still reserving 48px of layout after a reload.
    htmlAttrs: { 'data-announce': hidden.value ? 'off' : 'on' },
    script: [
      {
        key: 'kakr-announce-dismiss-check',
        innerHTML: `(function(){try{var id=${JSON.stringify(current.id)};var raw=localStorage.getItem(${JSON.stringify(DISMISS_KEY)});var list=raw?JSON.parse(raw):[];if(Array.isArray(list)&&list.indexOf(id)!==-1){document.documentElement.setAttribute('data-announce','off')}}catch(e){}})();`,
      },
    ],
  }
})

onMounted(() => {
  reportView()

  // A different announcement can win the bar during a client-side navigation, so
  // the dismissal check has to re-run rather than only happening on first mount.
  watch(
    () => announcement.value?.id,
    () => {
      hidden.value = announcement.value ? readDismissed().includes(announcement.value.id) : false
      reportView()
    },
  )
})

function reportView() {
  const current = announcement.value
  if (!current || hidden.value) return

  track('announcement_view', {
    announcement_id: current.id,
    article_slug: current.slug,
    placement: 'announcement-bar',
  })
}

function onClick() {
  const current = announcement.value
  if (!current) return
  track('announcement_click', {
    announcement_id: current.id,
    article_slug: current.slug,
    destination: current.destination,
  })
}

function onDismiss() {
  const current = announcement.value
  if (!current) return

  try {
    // Dismissal is recorded per ID, so publishing a new announcement shows it
    // again even to someone who closed the previous one (handoff §3.1).
    const next = [...new Set([...readDismissed(), current.id])].slice(-DISMISS_HISTORY_LIMIT)
    localStorage.setItem(DISMISS_KEY, JSON.stringify(next))
  } catch {
    // Private-mode or storage-quota failure: still hide it for this page view.
  }

  // Flipping the ref is enough: the reactive `useHead` above rewrites
  // `data-announce`, and the CSS hides the bar and zeroes --kakr-announce-h.
  hidden.value = true
  track('announcement_dismiss', { announcement_id: current.id })
}
</script>

<style>
/*
  Not scoped: --kakr-announce-h is consumed by AppHeader (fixed positioning) and
  by the layout wrapper's padding, so it has to live on :root.

  Heights are declared in CSS rather than measured in JS. A measured height would
  be a second source of truth and a guaranteed layout shift on slow devices.
  Handoff §3.1 caps these at 48px desktop and 72px mobile.
*/
:root {
  --kakr-announce-h: 0px;
}

html[data-announce='on'] {
  --kakr-announce-h: 56px;
}

@media (min-width: 640px) {
  html[data-announce='on'] {
    --kakr-announce-h: 48px;
  }
}

/* Zeroed by the pre-paint script for a visitor who already dismissed this ID. */
html[data-announce='off'] .kakr-announce-stack {
  display: none;
}

.kakr-announce-stack {
  position: fixed;
  inset-inline: 0;
  top: 0;
  /* Above the header (z-999) so its dropdowns cannot overlap the bar. */
  z-index: 1000;
}

.kakr-announce {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 56px;
  padding-inline: 0.75rem;
  background: linear-gradient(90deg, #04160f 0%, #06251a 50%, #04160f 100%);
  border-bottom: 1px solid rgba(16, 185, 129, 0.28);
}

@media (min-width: 640px) {
  .kakr-announce {
    height: 48px;
    padding-inline: 1.5rem;
  }
}

.kakr-announce__link {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 0;
  height: 100%;
  color: #ffffff;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: color 0.2s ease;
}

.kakr-announce__link:hover .kakr-announce__cta {
  color: #6ee7b7;
}

/* The bar link and the close button are separate focus stops with separate
   accessible names (handoff §3.1). */
.kakr-announce__link:focus-visible,
.kakr-announce__close:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: -2px;
  border-radius: 0.375rem;
}

.kakr-announce__label {
  flex: none;
  padding: 0.125rem 0.5rem;
  border: 1px solid rgba(16, 185, 129, 0.4);
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.14);
  color: #6ee7b7;
  font-size: 0.625rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.kakr-announce__sep {
  flex: none;
  color: rgba(255, 255, 255, 0.3);
}

/* Mobile truncates to one readable line plus the arrow, so the second separator
   is dropped rather than competing for width. */
.kakr-announce__sep--wide {
  display: none;
}

.kakr-announce__title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.kakr-announce__cta {
  flex: none;
  color: #34d399;
  transition: color 0.2s ease;
}

@media (min-width: 640px) {
  .kakr-announce__sep--wide {
    display: inline;
  }

  .kakr-announce__link {
    font-size: 0.875rem;
  }
}

.kakr-announce__close {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  /* 44px keeps the tap target at the accessible minimum on touch devices. */
  width: 44px;
  height: 44px;
  margin-inline-start: -0.25rem;
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s ease, background-color 0.2s ease;
}

.kakr-announce__close:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.kakr-announce__close svg {
  width: 1rem;
  height: 1rem;
}

@media (min-width: 640px) {
  .kakr-announce__close {
    width: 32px;
    height: 32px;
  }
}

/* Handoff §3.1: no marquee, no pulsing, no continuous animation anywhere in the
   bar. The only transitions are hover colours, and those go too. */
@media (prefers-reduced-motion: reduce) {
  .kakr-announce__link,
  .kakr-announce__cta,
  .kakr-announce__close {
    transition: none;
  }
}
</style>
