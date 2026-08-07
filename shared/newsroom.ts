/**
 * Newsroom vocabulary shared by pages, components, the RSS route, the sitemap
 * source and the build-time validator. Kept free of Vue and Nitro imports so it
 * can be loaded from a plain Node script.
 */

/**
 * The controlled vocabularies live here rather than in content.config.ts, and
 * content.config.ts imports *from* this file.
 *
 * The dependency has to point this way round: content.config.ts imports
 * `@nuxt/content`, and Nuxt forbids app-side code from reaching a module
 * entry-point. Importing content.config.ts from a composable therefore fails the
 * build. This module stays free of Vue, Nitro and Nuxt imports so the app, the
 * content config and the plain-Node validator can all read it.
 */

/** Handoff §5 — `category` enum. */
export const NEWSROOM_CATEGORIES = [
  'product-update',
  'announcement',
  'security-ai',
  'engineering',
  'tutorial',
  'company',
] as const

/** Handoff §5 — `status` workflow states. Only `published` reaches public surfaces. */
export const NEWSROOM_STATUSES = [
  'draft',
  'technical-review',
  'security-review',
  'brand-review',
  'scheduled',
  'published',
  'archived',
] as const

/** Handoff §5 — `availability`. Required for product updates, forbidden elsewhere. */
export const AVAILABILITY_LABELS = [
  'GA',
  'public-beta',
  'private-beta',
  'testing',
  'coming-soon',
] as const

export type NewsroomCategory = (typeof NEWSROOM_CATEGORIES)[number]
export type NewsroomStatus = (typeof NEWSROOM_STATUSES)[number]
export type AvailabilityLabel = (typeof AVAILABILITY_LABELS)[number]

/** Order here is the order of the filter row on /newsroom (handoff §3.3). */
export const CATEGORY_LABELS: Record<NewsroomCategory, string> = {
  'product-update': 'Product Updates',
  announcement: 'Announcements',
  'security-ai': 'Security & AI',
  engineering: 'Engineering',
  tutorial: 'Tutorials',
  company: 'Company',
}

export const CATEGORY_FILTERS: { value: NewsroomCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'product-update', label: 'Product Updates' },
  { value: 'announcement', label: 'Announcements' },
  { value: 'security-ai', label: 'Security & AI' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'tutorial', label: 'Tutorials' },
  { value: 'company', label: 'Company' },
]

/** Handoff: product updates must carry an accurate availability label. */
export const AVAILABILITY_DISPLAY: Record<AvailabilityLabel, string> = {
  GA: 'Generally Available',
  'public-beta': 'Public Beta',
  'private-beta': 'Private Beta',
  testing: 'Testing',
  'coming-soon': 'Coming Soon',
}

export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category as NewsroomCategory] ?? category
}

export function availabilityLabel(value?: string | null): string | null {
  if (!value) return null
  return AVAILABILITY_DISPLAY[value as AvailabilityLabel] ?? value
}

/**
 * Handoff §8: "Do not enable Latest from KAKR until at least three reviewed
 * items exist." Once the section is live it renders whatever legitimately
 * exists — it never pads to three (handoff §3.2).
 */
export const HOMEPAGE_MIN_ARTICLES = 3

/** Items shown before pagination kicks in on /newsroom (handoff §3.3). */
export const NEWSROOM_PAGE_SIZE = 12

export const NEWSROOM_TITLE = 'KAKR Newsroom'
export const NEWSROOM_DESCRIPTION =
  'Follow PTERI releases, AI-agent security research, engineering decisions, tutorials, and company announcements.'

/** ~200 wpm, floor of one minute. */
export function estimateReadingTime(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 200))
}

/**
 * Stable dismissal key for an announcement. Falls back to `slug::starts_at` so
 * that rescheduling an announcement re-shows it without the editor having to
 * remember to bump an ID field.
 */
export function announcementId(slug: string, announcement?: { id?: string; starts_at?: string }): string {
  if (announcement?.id) return announcement.id
  return `${slug}::${announcement?.starts_at ?? 'default'}`
}

export function formatArticleDate(iso?: string): string {
  if (!iso) return ''
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  // Fixed UTC formatting so SSR output and client hydration always agree.
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
