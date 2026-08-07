import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { AVAILABILITY_LABELS, NEWSROOM_CATEGORIES, NEWSROOM_STATUSES } from './shared/newsroom'

/**
 * ONE collection powers every newsroom surface.
 *
 * The Newsroom landing page, /updates, /tutorials, the homepage "Latest from
 * KAKR" cards, the global announcement bar, RSS, the sitemap and related-article
 * links all read from this collection. There is deliberately no second dataset:
 * a single published record must update every surface at once.
 *
 * Schema mirrors the Newsroom & Announcement Publishing System handoff §5.
 * Any field added here must also be exposed in public/admin/config.yml so an
 * editor can set it without touching frontmatter.
 */

const ctaSchema = z.object({
  label: z.string(),
  url: z.string(),
})

/**
 * Announcement-bar payload. Lives on the article rather than in a separate
 * singleton so that "publish the article" and "announce the article" cannot
 * drift apart, and so `destination` defaults to a real article page instead of
 * an editor-typed URL that can rot.
 */
const announcementSchema = z.object({
  enabled: z.boolean().default(false),
  /**
   * Dismissal key. Changing this re-shows the bar to everyone who dismissed the
   * previous version. Left blank the runtime derives `<slug>::<starts_at>`, so
   * simply rescheduling an announcement already counts as a new one.
   */
  id: z.string().optional(),
  label: z.string().default('NEW'),
  /** Short bar title. Falls back to the article title when blank. */
  short_title: z.string().optional(),
  /** Overrides the article's own URL. Leave blank for the normal case. */
  destination: z.string().optional(),
  starts_at: z.string().optional(),
  ends_at: z.string().optional(),
  /** Highest wins when several announcements are live at once. */
  priority: z.number().default(0),
  dismissible: z.boolean().default(true),
})

/** Handoff §4 claims gate. Publishing is blocked until the required reviews pass. */
const reviewersSchema = z.object({
  technical: z.string().optional(),
  security: z.string().optional(),
  brand: z.string().optional(),
  legal: z.string().optional(),
})

const seoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  canonical: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    newsroom: defineCollection({
      type: 'page',
      /**
       * SECURITY: this collection must never be reachable from the browser.
       *
       * @nuxt/content publishes every collection as a static, unauthenticated
       * `/__nuxt_content/<name>/sql_dump.txt` so the browser can query locally.
       * That dump contains *every* record — verified on a production build: it
       * served all three archived articles and the internal "PENDING — required
       * before production deploy" reviewer notes. Handoff §7 and §12 forbid it.
       *
       * There is no supported per-collection opt-out in @nuxt/content 3.15.1:
       * `defineCollection()` discards a `private` key and `resolveCollection()`
       * hard-codes `private: name === 'info'`. The dump also cannot simply be
       * deleted — the server's own `queryCollection()` seeds its database from it.
       *
       * External access is therefore rejected by
       * `server/middleware/block-content-dump.ts`, which admits only the server's
       * in-process calls. Block `/__nuxt_content/` at the CDN or ingress as well.
       * See docs/newsroom/content-schema.md.
       */
      source: {
        include: 'newsroom/**/*.md',
        prefix: '/newsroom',
      },
      schema: z.object({
        title: z.string(),
        /**
         * Canonical URL segment. Must equal the filename — enforced by
         * `scripts/validate-content.mjs` — so the CMS filename template and the
         * frontmatter can never disagree about where an article lives.
         */
        slug: z.string(),
        summary: z.string(),
        category: z.enum([...NEWSROOM_CATEGORIES]),
        status: z.enum([...NEWSROOM_STATUSES]).default('draft'),

        published_at: z.string(),
        updated_at: z.string().optional(),

        author_name: z.string().default('KAKR Labs'),
        author_role: z.string().optional(),

        hero_image: z.string().optional(),
        hero_alt: z.string().optional(),
        hero_caption: z.string().optional(),
        social_image: z.string().optional(),

        featured: z.boolean().default(false),
        featured_rank: z.number().optional(),

        announcement: announcementSchema.optional(),
        availability: z.enum([...AVAILABILITY_LABELS]).optional(),
        reviewers: reviewersSchema.optional(),
        seo: seoSchema.optional(),

        cta_primary: ctaSchema.optional(),
        cta_secondary: ctaSchema.optional(),

        tags: z.array(z.string()).default([]),
        /** Curated slugs. Never auto-filled — handoff §5 forbids unrelated fillers. */
        related: z.array(z.string()).default([]),

        /**
         * Computed from the body at parse time by `modules/newsroom-reading-time.ts`.
         * Not an editor field — it exists in the schema so card queries can read
         * it without pulling every article body into the list payload.
         */
        reading_time: z.number().default(1),
        /** Plain-text word count, same provenance as `reading_time`. */
        word_count: z.number().default(0),
        /**
         * Editorial override for the computed word-count estimate. Only set this
         * when the automatic number is misleading (heavy code or diagrams).
         */
        reading_time_override: z.number().optional(),

        /**
         * Marks pre-2026 material whose positioning no longer reflects the
         * product. Renders a "From the Archive" banner and is excluded from the
         * homepage cards and the announcement bar. This is a *label* on a live
         * article — distinct from `status: archived`, which unpublishes entirely.
         */
        archive_label: z.boolean().default(false),
        archive_note: z.string().optional(),

        /**
         * Original post on X or another external channel. Rendered as a
         * secondary "Original post" link only. Handoff §1: a card must never use
         * X as its sole destination, so this can never replace the article body.
         */
        external_url: z.string().optional(),
      }),
    }),
  },
})
