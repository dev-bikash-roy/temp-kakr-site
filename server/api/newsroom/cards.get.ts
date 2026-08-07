import { getPublishedCards } from '~~/server/utils/newsroom'

/**
 * Published article cards for every newsroom surface.
 *
 * Returns only what a card needs and only what is actually published — see
 * server/utils/newsroom.ts for why the collection is never queried from the
 * browser.
 */
export default defineEventHandler(async event => {
  const cards = await getPublishedCards(event)

  // Short shared cache. Matches the SWR window on the newsroom routes so a
  // scheduled article appears within minutes without a deployment.
  setResponseHeader(event, 'Cache-Control', 'public, max-age=0, s-maxage=300, stale-while-revalidate=600')

  return cards
})
