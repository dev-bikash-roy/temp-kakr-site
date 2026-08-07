/**
 * The eight newsroom analytics events from handoff §10.
 *
 * Every payload is typed and every property is a slug, a category, a placement
 * or a count. Handoff §10 forbids credentials, draft contents, reviewer
 * information, email addresses and personal identifiers in these payloads —
 * `scrub()` below is the enforcement point rather than a convention, so a
 * future caller cannot accidentally widen a payload.
 */

type Placement = 'announcement-bar' | 'homepage' | 'newsroom' | 'updates' | 'tutorials' | 'article-related' | 'blog'

interface NewsroomEvents {
  announcement_view: { announcement_id: string; article_slug: string; placement: Placement }
  announcement_click: { announcement_id: string; article_slug: string; destination: string }
  announcement_dismiss: { announcement_id: string }
  newsroom_filter: { category: string }
  news_card_click: { article_slug: string; category: string; placement: Placement; card_position: number }
  article_view: { article_slug: string; category: string; author: string; published_at: string }
  article_cta_click: { article_slug: string; cta_label: string; destination: string }
  article_share: { article_slug: string; channel: 'x' | 'copy-link' }
}

/**
 * Allow-list of property names that may ever leave the browser. Anything else a
 * caller passes is dropped rather than forwarded, and strings are length-capped
 * so a long free-text field can never become a payload smuggling channel.
 */
const ALLOWED_PROPERTIES = new Set([
  'announcement_id',
  'article_slug',
  'placement',
  'destination',
  'category',
  'card_position',
  'author',
  'published_at',
  'cta_label',
  'channel',
])

const MAX_VALUE_LENGTH = 160

function scrub(payload: Record<string, unknown>): Record<string, string | number> {
  const safe: Record<string, string | number> = {}

  for (const [key, value] of Object.entries(payload)) {
    if (!ALLOWED_PROPERTIES.has(key)) continue
    if (typeof value === 'number' && Number.isFinite(value)) {
      safe[key] = value
      continue
    }
    if (typeof value !== 'string') continue

    // Destinations are recorded as paths only. A full URL could carry query
    // parameters that were never meant for an analytics vendor.
    const normalized = key === 'destination' ? toPathOnly(value) : value
    safe[key] = normalized.slice(0, MAX_VALUE_LENGTH)
  }

  return safe
}

function toPathOnly(value: string): string {
  try {
    // Relative values have no origin to strip; the base is only there to parse.
    const url = new URL(value, 'https://kakr.ai')
    return url.origin === 'https://kakr.ai' ? url.pathname : `${url.origin}${url.pathname}`
  } catch {
    return value
  }
}

export function useNewsroomAnalytics() {
  function track<K extends keyof NewsroomEvents>(event: K, payload: NewsroomEvents[K]): void {
    if (!import.meta.client) return

    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
    if (typeof gtag !== 'function') return

    gtag('event', event, scrub(payload as Record<string, unknown>))
  }

  return { track }
}
