<template>
  <section ref="wrap" class="py-28 sm:section-py">
    <div class="max-w-5xl mx-auto px-6">
      <p
        class="mx-auto text-center leading-tight font-semibold text-slate-700 dark:text-slate-200"
        :class="[
          'text-3xl sm:text-5xl md:text-6xl',
          // tighten letter spacing on large sizes for that premium look
          'tracking-[-0.02em] md:tracking-[-0.03em]'
        ]"
      >
        <span
          v-for="(token, i) in tokens"
          :key="i + '-' + token.t"
          class="inline-block will-change-transform"
          :class="[
            'opacity-0 translate-y-3',
            inView ? 'reveal-in' : 'reveal-out',
            token.h ? 'highlight' : ''   // highlight selected words
          ]"
          :style="{
            '--i': i,
          }"
        >
          <!-- preserve spaces/newlines -->
          <template v-if="token.t === '\\n'"><br class="hidden sm:block" /></template>
          <template v-else>{{ token.t }}</template>
          <!-- trailing space on non-linebreak tokens -->
          <span v-if="token.t !== '\\n'">&nbsp;</span>
        </span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">

/**
 * Props:
 *  - text: full sentence with \n where you want line breaks
 *  - highlight: array of words to highlight (exact word match, case sensitive)
 *  - rootMargin: when to trigger (default '0px 0px -20% 0px' so it starts a bit early)
 *  - once: animate only once (default true)
 */
const props = withDefaults(defineProps<{
  text: string,
  highlight?: string[],
  rootMargin?: string,
  once?: boolean
}>(), {
  highlight: () => [],
  rootMargin: '0px 0px -20% 0px',
  once: true
})

const wrap = ref<HTMLElement | null>(null)
const inView = ref(false)
let observer: IntersectionObserver | null = null

const tokens = computed(() => {
  // Split into words and manual linebreak markers
  // You can put "\n" in the input text to force a new line at that point.
  const raw = props.text
    .replace(/\s+/g, ' ')      // normalize spaces
    .replace(/\\n/g, ' \n ')   // space around \n so we keep indices simple
    .trim()
    .split(' ')

  return raw.map(w => ({
    t: w === '\n' ? '\n' : w,
    h: props.highlight?.includes(w) ?? false
  }))
})

onMounted(() => {
  const el = wrap.value
  if (!el) return

  // Respect reduced motion
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    inView.value = true
    return
  }

  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      inView.value = true
      if (props.once) observer?.disconnect()
    } else if (!props.once) {
      inView.value = false
    }
  }, { root: null, rootMargin: props.rootMargin, threshold: 0.2 })

  observer.observe(el)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
/* Stagger reveal using CSS variable --i (index) */
.reveal-in {
  animation: wordIn 600ms cubic-bezier(.2,.65,.2,1) forwards;
  animation-delay: calc(var(--i) * 40ms);
}
.reveal-out {
  /* optional if you want reverse on scroll-out when once=false */
  animation: wordOut 300ms ease-out forwards;
  animation-delay: 0ms;
}

@keyframes wordIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0px); }
}
@keyframes wordOut {
  from { opacity: 1; transform: translateY(0px); }
  to   { opacity: 0; transform: translateY(6px); }
}

/* Subtle gradient fade for highlighted words */
.highlight {
  background: linear-gradient(180deg, rgba(148,163,184,.0) 40%, rgba(99,102,241,.12) 100%);
  border-radius: .25rem;
  padding-inline: .125rem;
}
</style>
