<template>
  <main class="min-h-screen bg-black font-inter">
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-white/5" style="padding: 9rem 0 4rem">
      <div
        class="absolute inset-0 z-0 pointer-events-none"
        style="background: radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16, 185, 129, 0.15) 0%, transparent 65%)"
      />
      <div class="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <span class="newsroom__eyebrow" data-aos="fade-up">KAKR Newsroom</span>
        <h1 class="newsroom__h1" data-aos="fade-up" data-aos-delay="80">
          News, product updates, and ideas from KAKR Labs.
        </h1>
        <p class="newsroom__lede" data-aos="fade-up" data-aos-delay="160">
          Follow PTERI releases, AI-agent security research, engineering decisions, tutorials, and company
          announcements.
        </p>
      </div>
    </section>

    <!-- Filters + grid -->
    <section class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12">
      <NewsroomCategoryFilter :active="activeCategory" :counts="counts" base-path="/newsroom" />

      <div v-if="visibleArticles.length" class="newsroom__grid">
        <NewsroomNewsCard
          v-for="(card, index) in visibleArticles"
          :key="card.slug"
          :card="card"
          placement="newsroom"
          :position="index + 1"
          :eager="index < 3"
          :delay="(index % 3) * 70"
        />
      </div>

      <!--
        Empty state is honest about which of the two situations this is: an
        unpopulated category, or a newsroom with nothing published yet. Neither
        gets filled with placeholder cards (handoff §3.2).
      -->
      <div v-else class="newsroom__empty">
        <p class="newsroom__empty-title">
          {{ allArticles.length ? 'Nothing in this category yet.' : 'The first KAKR articles are on their way.' }}
        </p>
        <p class="newsroom__empty-body">
          {{
            allArticles.length
              ? 'Browse everything in the Newsroom, or check another category.'
              : 'In the meantime, the product documentation and API reference are the fastest way to get started.'
          }}
        </p>
        <div class="newsroom__empty-actions">
          <NuxtLink v-if="allArticles.length" to="/newsroom" class="newsroom__btn newsroom__btn--primary">
            View all articles
          </NuxtLink>
          <a
            v-else
            href="https://docs.kakr.ai/"
            target="_blank"
            rel="noopener noreferrer"
            class="newsroom__btn newsroom__btn--primary"
          >
            View Documentation
          </a>
        </div>
      </div>

      <!--
        Pagination rather than a JS "Load More": page 2 is a real crawlable URL,
        and the back button behaves the way visitors expect (handoff §3.3).
      -->
      <nav v-if="totalPages > 1" class="newsroom__pagination" aria-label="Newsroom pagination">
        <NuxtLink
          v-if="currentPage > 1"
          :to="pageLink(currentPage - 1)"
          class="newsroom__page newsroom__page--nav"
          rel="prev"
        >
          <span aria-hidden="true">←</span> Previous
        </NuxtLink>

        <NuxtLink
          v-for="page in totalPages"
          :key="page"
          :to="pageLink(page)"
          class="newsroom__page"
          :class="{ 'newsroom__page--active': page === currentPage }"
          :aria-current="page === currentPage ? 'page' : undefined"
          :aria-label="`Page ${page}`"
        >
          {{ page }}
        </NuxtLink>

        <NuxtLink
          v-if="currentPage < totalPages"
          :to="pageLink(currentPage + 1)"
          class="newsroom__page newsroom__page--nav"
          rel="next"
        >
          Next <span aria-hidden="true">→</span>
        </NuxtLink>
      </nav>

      <p class="newsroom__feed">
        <a href="/newsroom/rss.xml" class="newsroom__feed-link">Subscribe via RSS</a>
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useNewsroomList } from '~/composables/useNewsroom'
import { useSEO } from '~/composables/useSEO'
import {
  CATEGORY_FILTERS,
  NEWSROOM_DESCRIPTION,
  NEWSROOM_PAGE_SIZE,
  categoryLabel,
  type NewsroomCategory,
} from '~~/shared/newsroom'

definePageMeta({ layout: 'default' })

const route = useRoute()
const { all: allArticles, byCategory } = await useNewsroomList()

const VALID_CATEGORIES = CATEGORY_FILTERS.map(option => option.value)

/**
 * Derived straight from the URL rather than held in local state. That is what
 * makes refresh, back, forward and shared links all agree (handoff §3.3), and it
 * means the server renders the same grid the visitor asked for.
 */
const activeCategory = computed<NewsroomCategory | 'all'>(() => {
  const requested = route.query.category
  const value = Array.isArray(requested) ? requested[0] : requested
  return VALID_CATEGORIES.includes(value as NewsroomCategory) ? (value as NewsroomCategory) : 'all'
})

const currentPage = computed(() => {
  const raw = Number(Array.isArray(route.query.page) ? route.query.page[0] : route.query.page)
  if (!Number.isInteger(raw) || raw < 1) return 1
  return Math.min(raw, Math.max(1, totalPages.value))
})

const filtered = computed(() => byCategory(activeCategory.value))
const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / NEWSROOM_PAGE_SIZE)))

const visibleArticles = computed(() => {
  const start = (currentPage.value - 1) * NEWSROOM_PAGE_SIZE
  return filtered.value.slice(start, start + NEWSROOM_PAGE_SIZE)
})

const counts = computed(() => {
  const tally: Record<string, number> = { all: allArticles.value.length }
  for (const option of CATEGORY_FILTERS) {
    if (option.value === 'all') continue
    tally[option.value] = byCategory(option.value).length
  }
  return tally
})

function pageLink(page: number) {
  const query: Record<string, string> = {}
  if (activeCategory.value !== 'all') query.category = activeCategory.value
  if (page > 1) query.page = String(page)
  return { path: '/newsroom', query }
}

const { setSEO } = useSEO()

/**
 * Filtered and paginated views canonicalise to their own URL so each is indexable
 * in its own right, and pages beyond the first are titled distinctly to avoid
 * duplicate-title warnings.
 */
const seoTitle = computed(() => {
  const parts = ['Newsroom']
  if (activeCategory.value !== 'all') parts[0] = categoryLabel(activeCategory.value)
  if (currentPage.value > 1) parts.push(`Page ${currentPage.value}`)
  return `${parts.join(' — ')} | KAKR Labs`
})

const canonicalPath = computed(() => {
  const params = new URLSearchParams()
  if (activeCategory.value !== 'all') params.set('category', activeCategory.value)
  if (currentPage.value > 1) params.set('page', String(currentPage.value))
  const query = params.toString()
  return query ? `/newsroom?${query}` : '/newsroom'
})

setSEO({
  title: seoTitle,
  description: NEWSROOM_DESCRIPTION,
  image: '/og/og-newsroom.png',
})

/**
 * The title, canonical and social tags vary with the `category` and `page` query
 * parameters, but `setSEO` above resolves its refs once during setup and cannot
 * follow a client-side filter change.
 *
 * `tagPriority: 'high'` is what makes these win. Registering later is not enough:
 * `setSEO` leaves static entries under the same dedupe keys, and on `popstate`
 * unhead was resolving the stale one — which left the title, canonical and
 * og:title exactly one navigation behind when using browser back and forward.
 */
const canonicalHref = computed(() => `https://kakr.ai${canonicalPath.value}`)

useHead(
  {
    title: seoTitle,
    link: computed(() => [
      { rel: 'canonical', href: canonicalHref.value, key: 'canonical' },
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'KAKR Newsroom',
        href: '/newsroom/rss.xml',
      },
    ]),
    meta: computed(() => [
      // Keyed so these replace the entries setSEO wrote rather than duplicating.
      { property: 'og:title', content: seoTitle.value, key: 'og-title' },
      { property: 'og:url', content: canonicalHref.value, key: 'og-url' },
      { name: 'twitter:title', content: seoTitle.value, key: 'twitter-title' },
    ]),
  },
  { tagPriority: 'high' },
)
</script>

<style scoped>
.newsroom__eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 1rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.1);
  color: #34d399;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.newsroom__h1 {
  margin-top: 1.5rem;
  max-width: 46rem;
  color: #ffffff;
  font-size: clamp(2.25rem, 5.5vw, 3.75rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
}

.newsroom__lede {
  margin-top: 1.25rem;
  max-width: 40rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.0625rem;
  line-height: 1.7;
}

.newsroom__grid {
  display: grid;
  gap: 1.5rem;
  margin-top: 2.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .newsroom__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .newsroom__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.newsroom__empty {
  margin-top: 2.5rem;
  padding: 3rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  text-align: center;
}

.newsroom__empty-title {
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;
}

.newsroom__empty-body {
  margin: 0.5rem auto 0;
  max-width: 30rem;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.875rem;
  line-height: 1.7;
}

.newsroom__empty-actions {
  margin-top: 1.5rem;
}

.newsroom__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.newsroom__btn--primary {
  background: #10b981;
  color: #000000;
}

.newsroom__btn--primary:hover {
  background: #34d399;
}

.newsroom__btn:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 3px;
}

.newsroom__pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
}

.newsroom__page {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  min-width: 40px;
  min-height: 40px;
  padding-inline: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.625rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.8125rem;
  font-weight: 600;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
}

.newsroom__page:hover {
  border-color: rgba(52, 211, 153, 0.35);
  color: #ffffff;
}

.newsroom__page:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 2px;
}

.newsroom__page--active {
  border-color: rgba(16, 185, 129, 0.5);
  background: rgba(16, 185, 129, 0.12);
  color: #6ee7b7;
}

.newsroom__feed {
  margin-top: 2.5rem;
  text-align: center;
}

.newsroom__feed-link {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8125rem;
  font-weight: 600;
  transition: color 0.2s ease;
}

.newsroom__feed-link:hover {
  color: #34d399;
}

.newsroom__feed-link:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 3px;
  border-radius: 0.25rem;
}

@media (prefers-reduced-motion: reduce) {
  .newsroom__btn,
  .newsroom__page,
  .newsroom__feed-link {
    transition: none;
  }
}
</style>
