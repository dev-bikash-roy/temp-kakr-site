import { getPublishedArticle } from '~~/server/utils/newsroom'

/**
 * One published article, including its rendered body.
 *
 * A draft, an item in review, a future-scheduled item and a slug that does not
 * exist all produce the same 404. Distinguishing them would confirm to an
 * unauthenticated caller that an unpublished article exists at that slug
 * (handoff §12).
 */
export default defineEventHandler(async event => {
  const { slug } = getQuery(event)

  const article = await getPublishedArticle(event, typeof slug === 'string' ? slug : '')

  if (!article) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found' })
  }

  setResponseHeader(event, 'Cache-Control', 'public, max-age=0, s-maxage=300, stale-while-revalidate=600')

  return article
})
