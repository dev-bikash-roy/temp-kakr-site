import { queryCollection } from '@nuxt/content/server'

/**
 * `/blog/<slug>` compatibility.
 *
 * Handoff §2 keeps `/blog` itself live until inbound links and analytics have
 * been reviewed, but article *pages* move to the canonical `/newsroom/<slug>`
 * immediately — otherwise the same article would be reachable at two URLs and
 * split its own search signal.
 *
 * Every old article URL therefore 301s: to its newsroom page when that article is
 * published, and to the Newsroom landing page when it is not (an archived or
 * removed item still lands somewhere useful rather than on a 404).
 *
 * `/blog` with no slug is deliberately left alone — pages/blog/index.vue still
 * serves it.
 */

/** Matches `/blog/<slug>` and the i18n-prefixed `/<locale>/blog/<slug>`. */
const BLOG_ARTICLE_PATH = /^\/(?:([a-z]{2})\/)?blog\/([^/?#]+)\/?$/

export default defineEventHandler(async event => {
  const path = event.path.split('?')[0]

  const match = BLOG_ARTICLE_PATH.exec(path)
  if (!match) return

  const [, locale, rawSlug] = match
  const slug = decodeURIComponent(rawSlug)
  const prefix = locale ? `/${locale}` : ''

  let target = `${prefix}/newsroom`

  try {
    const article = await queryCollection(event, 'newsroom')
      .where('slug', '=', slug)
      .where('status', '=', 'published')
      .where('published_at', '<=', new Date().toISOString())
      .select('slug')
      .first()

    if (article) target = `${prefix}/newsroom/${article.slug}`
  } catch {
    // A collection query failure must not turn an inbound link into a 500. The
    // Newsroom landing page is always a valid destination.
  }

  await sendRedirect(event, target, 301)
})
