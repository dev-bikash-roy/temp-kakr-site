import type { H3Event } from 'h3'
import { queryCollection } from '@nuxt/content/server'

/**
 * Server-side newsroom reads. This is the ONLY place the collection is queried.
 *
 * Everything public — the API routes the pages fetch, the RSS feed, the sitemap
 * source and the /blog redirect — comes through here, for two reasons:
 *
 * 1. The published gate (`status = published` AND `published_at <= now`) is
 *    applied once, in one function. Handoff §12 requires that drafts and
 *    future-scheduled items never appear publicly; one gate is auditable, five
 *    copies of the condition are not.
 *
 * 2. `@nuxt/content` can answer queries in the browser, but it does that by
 *    shipping a compressed dump of the entire collection to the client. That dump
 *    contains every record — drafts, items in review, and archived material —
 *    regardless of what the page renders. Querying only on the server means an
 *    unpublished article never leaves the server at all.
 *
 * `now` is server time, so a visitor cannot bring a scheduled article forward by
 * changing their system clock.
 */

/** Card-level fields. Deliberately excludes `body` — lists never need it. */
const CARD_FIELDS = [
  'path',
  'title',
  'slug',
  'summary',
  'category',
  'status',
  'published_at',
  'updated_at',
  'author_name',
  'author_role',
  'hero_image',
  'hero_alt',
  'social_image',
  'featured',
  'featured_rank',
  'availability',
  'tags',
  'related',
  'archive_label',
  'archive_note',
  'external_url',
  'announcement',
  'reading_time',
  'word_count',
  'reading_time_override',
] as const

function publishedQuery(event: H3Event) {
  // ISO-8601 UTC strings compare lexicographically in the same order they compare
  // chronologically, which is why the validator insists on Z-suffixed timestamps.
  return queryCollection(event, 'newsroom')
    .where('status', '=', 'published')
    .where('published_at', '<=', new Date().toISOString())
    .order('published_at', 'DESC')
}

/** Every published article, newest first, without bodies. */
export async function getPublishedCards(event: H3Event) {
  return publishedQuery(event)
    .select(...CARD_FIELDS)
    .all()
}

/** One published article including its rendered body, or null. */
export async function getPublishedArticle(event: H3Event, slug: string) {
  if (!slug || !/^[a-z0-9][a-z0-9-]*$/.test(slug)) return null

  const article = await publishedQuery(event).where('slug', '=', slug).first()
  return article ?? null
}
