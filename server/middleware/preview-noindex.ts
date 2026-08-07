/**
 * Keeps non-production deployments out of search engines.
 *
 * Any deployment whose configured `SITE_URL` is not `kakr.ai` is treated as a
 * staging, preview or temporary environment and served with
 * `X-Robots-Tag: noindex, nofollow`.
 *
 * `noindex` is used rather than a `Disallow` in robots.txt on purpose: a
 * disallow only stops crawling, and a URL that is disallowed but linked from
 * elsewhere can still appear in results — with the added problem that the
 * crawler is then forbidden from reading the very `noindex` that would have
 * removed it. Letting crawlers in and telling them not to index is the reliable
 * combination.
 *
 * This only sets a header. It never throws and never short-circuits a request,
 * so it is safe during prerendering.
 */
export default defineEventHandler(event => {
  const siteUrl = (useRuntimeConfig(event).public.siteUrl as string) || ''

  let isProduction = false
  try {
    isProduction = new URL(siteUrl).hostname === 'kakr.ai'
  } catch {
    // An unparseable SITE_URL is not production.
  }

  if (isProduction) return

  setResponseHeader(event, 'X-Robots-Tag', 'noindex, nofollow')
})
