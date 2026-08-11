import { computed, type ComputedRef } from 'vue'
import type { NewsroomCategory } from '~~/shared/newsroom'
import { announcementId, estimateReadingTime } from '~~/shared/newsroom'

/**
 * The single gate between the `newsroom` collection and every public surface.
 *
 * Handoff §7: the Newsroom landing page, /updates, /tutorials, the homepage
 * cards, the announcement bar, RSS, the sitemap and related-article links all
 * read through here. Nothing else may query the collection directly, because
 * this is the one place that enforces `status === 'published'` and
 * `published_at <= now`. A second query path is a second chance to leak a draft.
 */

export interface NewsroomAnnouncement {
  enabled: boolean
  id?: string
  label: string
  short_title?: string
  destination?: string
  starts_at?: string
  ends_at?: string
  priority: number
  dismissible: boolean
}

/** Card-level shape: everything the lists need, and no article bodies. */
export interface NewsroomCard {
  path: string
  title: string
  slug: string
  summary: string
  category: NewsroomCategory
  status: string
  published_at: string
  updated_at?: string
  author_name: string
  author_role?: string
  hero_image?: string
  hero_alt?: string
  social_image?: string
  featured: boolean
  featured_rank?: number
  availability?: string
  tags: string[]
  related: string[]
  archive_label: boolean
  archive_note?: string
  external_url?: string
  announcement?: NewsroomAnnouncement
  reading_time: number
  word_count: number
  reading_time_override?: number
}

/**
 * Shared published-card list. Fetched once per request, shared by every surface.
 *
 * Two deliberate choices here.
 *
 * **It reads `/api/newsroom/cards`, not `queryCollection`.** `@nuxt/content`
 * answers in-browser queries from a compressed dump of the *entire* collection,
 * which would hand drafts, in-review items and archived articles to anyone who
 * opened the page. Going through a server-gated endpoint means unpublished
 * records never leave the server, and `published_at <= now` is compared against
 * server time rather than the visitor's clock.
 *
 * **It uses `useState`, not `useAsyncData`.** With `useAsyncData` the resolved
 * array did not survive into the hydration payload on these routes: the inline
 * `__NUXT_DATA__` carried the key with a `null` value, and because the key was
 * *present*, Nuxt treated it as already fetched and never refetched — so every
 * newsroom surface hydrated empty even though the server-rendered HTML was
 * correct. `useState` serialises through `payload.state`, which transfers
 * reliably, and the `loaded` flag makes the single fetch explicit.
 */
export async function useNewsroomCards() {
  const cards = useState<NewsroomCard[]>('newsroom-cards', () => [])
  /**
   * Separate flag rather than `cards.value.length`, so a genuinely empty newsroom
   * is distinguishable from "not fetched yet" and does not refetch forever.
   */
  const loaded = useState<boolean>('newsroom-cards-loaded', () => false)

  /**
   * `useRequestFetch()`, not bare `$fetch`.
   *
   * A relative `$fetch` on the server only resolves internally when it can see
   * the current request. Under Vercel's ISR renderer it cannot, so it fell back
   * to an absolute `http://localhost:3000/...` and the function died with
   * FUNCTION_INVOCATION_FAILED on every newsroom route. `useRequestFetch` is
   * bound to the active request and dispatches to the handler in-process.
   */
  const request = useRequestFetch()

  if (!loaded.value) {
    cards.value = await request<NewsroomCard[]>('/api/newsroom/cards')
    loaded.value = true
  }

  async function refresh() {
    cards.value = await request<NewsroomCard[]>('/api/newsroom/cards')
    loaded.value = true
  }

  return { data: cards, refresh }
}

/** Reading time an article should display: editorial override wins. */
export function displayReadingTime(card: Pick<NewsroomCard, 'reading_time' | 'reading_time_override' | 'word_count'>): number {
  if (card.reading_time_override && card.reading_time_override > 0) return card.reading_time_override
  if (card.reading_time && card.reading_time > 0) return card.reading_time
  return estimateReadingTime(card.word_count ?? 0)
}

/** Canonical on-site URL for an article. Never an external destination. */
export function articleUrl(card: Pick<NewsroomCard, 'slug'>): string {
  return `/newsroom/${card.slug}`
}

/**
 * Async because it awaits the shared card list — callers must
 * `await useNewsroomList()` in their setup so the component suspends until the
 * data is there. On the client the awaited fetch resolves immediately from
 * hydrated state.
 */
export async function useNewsroomList() {
  const { data: cards, refresh } = await useNewsroomCards()

  const all: ComputedRef<NewsroomCard[]> = computed(() => cards.value ?? [])

  function byCategory(category: NewsroomCategory | 'all'): NewsroomCard[] {
    if (category === 'all') return all.value
    return all.value.filter(card => card.category === category)
  }

  /**
   * Homepage card set: one manually chosen featured article plus the newest
   * others (handoff §3.2).
   *
   * `all` is already limited to published records, which is the exclusion list
   * §3.2 actually specifies (unpublished, scheduled-future, archived, expired).
   * Archive-*labelled* articles are published records and may appear as cards —
   * they carry a visible "From the Archive" badge — but they can never be the
   * lead feature, because historical positioning should not be the first thing a
   * homepage visitor reads.
   */
  function homepageSelection(limit = 3): { featured: NewsroomCard | null; rest: NewsroomCard[] } {
    const featured =
      all.value
        .filter(card => card.featured && !card.archive_label)
        .sort((a, b) => (a.featured_rank ?? Number.MAX_SAFE_INTEGER) - (b.featured_rank ?? Number.MAX_SAFE_INTEGER))[0] ?? null

    const rest = all.value.filter(card => card.slug !== featured?.slug).slice(0, Math.max(0, limit - (featured ? 1 : 0)))

    return { featured, rest }
  }

  /**
   * Highest-priority announcement whose window contains "now"; newest
   * `published_at` breaks ties (handoff §3.1). Archive-labelled articles can
   * never take the bar.
   */
  const activeAnnouncement = computed(() => {
    const now = Date.now()

    const live = all.value
      .filter(card => card.announcement?.enabled && !card.archive_label)
      .filter(card => {
        const { starts_at, ends_at } = card.announcement!
        if (starts_at && new Date(starts_at).getTime() > now) return false
        if (ends_at && new Date(ends_at).getTime() <= now) return false
        return true
      })
      .sort((a, b) => {
        const byPriority = (b.announcement!.priority ?? 0) - (a.announcement!.priority ?? 0)
        if (byPriority !== 0) return byPriority
        return new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      })

    const winner = live[0]
    if (!winner) return null

    const announcement = winner.announcement!
    return {
      id: announcementId(winner.slug, announcement),
      label: announcement.label || 'NEW',
      title: announcement.short_title || winner.title,
      destination: announcement.destination || articleUrl(winner),
      dismissible: announcement.dismissible !== false,
      slug: winner.slug,
    }
  })

  return { all, byCategory, homepageSelection, activeAnnouncement, refresh }
}

/**
 * Full article including body. Returns `null` for anything not publicly
 * published so the page can raise its own 404, and — as with the card list — the
 * gating happens server-side.
 *
 * Uses `useState` + a loaded flag rather than `useAsyncData` for the same reason
 * the card list does: with `payloadExtraction: false`, `useAsyncData` carries the
 * key in `__NUXT_DATA__` with a null value on the first SSR pass, the client sees
 * the key as "already fetched", never re-requests, and `data.value` stays null —
 * causing every hard refresh to 404. `useState` serialises through
 * `payload.state`, which survives the transfer reliably.
 */
export async function useNewsroomArticle(slug: string) {
  // Key is slug-scoped so navigating between articles doesn't reuse stale data.
  const article = useState<Record<string, unknown> | null>(`newsroom-article-${slug}`, () => null)
  const loaded = useState<boolean>(`newsroom-article-${slug}-loaded`, () => false)

  /**
   * `useRequestFetch()`, not bare `$fetch` — same reason as the card list.
   * A relative fetch on the server must be dispatched in-process via the active
   * H3 event; without this, Vercel's ISR renderer resolves to localhost and fails.
   */
  const request = useRequestFetch()

  if (!loaded.value) {
    try {
      article.value = await request<Record<string, unknown>>('/api/newsroom/article', { query: { slug } })
    } catch (error) {
      const status = (error as { statusCode?: number; response?: { status?: number } })?.statusCode
        ?? (error as { response?: { status?: number } })?.response?.status

      // A genuine 404 means "no such published article" — article stays null.
      if (status === 404) {
        article.value = null
      } else {
        // Any other failure (DB error, cold start, etc.) must surface as a real
        // error rather than a misleading 404, so we re-throw. The page will catch
        // this via the error ref check and show the correct status code.
        loaded.value = true
        throw error
      }
    }
    loaded.value = true
  }

  return { data: article }
}

/**
 * Curated `related` slugs first; falls back to same-category articles. Never
 * pads with unrelated items (handoff §5).
 */
export function relatedArticles(article: { slug: string; category: string; related?: string[] }, cards: NewsroomCard[], max = 3): NewsroomCard[] {
  const pool = cards.filter(card => card.slug !== article.slug)

  if (article.related?.length) {
    const curated = article.related
      .map(slug => pool.find(card => card.slug === slug))
      .filter((card): card is NewsroomCard => Boolean(card))
    if (curated.length) return curated.slice(0, max)
  }

  return pool.filter(card => card.category === article.category).slice(0, max)
}

/** Previous/next within the full published timeline. */
export function adjacentArticles(slug: string, cards: NewsroomCard[]): { prev: NewsroomCard | null; next: NewsroomCard | null } {
  const index = cards.findIndex(card => card.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    // `cards` is newest-first, so the visually "previous" article is the newer one.
    prev: index > 0 ? cards[index - 1] : null,
    next: index < cards.length - 1 ? cards[index + 1] : null,
  }
}
