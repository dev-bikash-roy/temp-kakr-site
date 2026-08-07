import { getPublishedCards } from '~~/server/utils/newsroom'
import { CATEGORY_FILTERS } from '~~/shared/newsroom'

/**
 * `/newsroom/sitemap.xml` — a dedicated child sitemap for newsroom URLs.
 *
 * The site's main sitemap is a hand-maintained static file in public/, which
 * cannot list article URLs that an editor creates without a developer. This route
 * is generated from the collection, so a newly published article is in the sitemap
 * on its next crawl with nobody editing XML. It is registered in
 * public/sitemap_index.xml.
 *
 * Only published items appear — same gate as the pages and the RSS feed.
 */

function esc(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/** Sitemaps take W3C dates; the date portion of the ISO timestamp is enough. */
function w3c(iso?: string): string {
  const date = new Date(iso ?? '')
  return Number.isNaN(date.getTime()) ? '' : date.toISOString().slice(0, 10)
}

export default defineEventHandler(async event => {
  const siteUrl = (useRuntimeConfig(event).public.siteUrl as string) || 'https://kakr.ai'
  const base = siteUrl.replace(/\/$/, '')

  const cards = await getPublishedCards(event)
  const newest = cards[0]?.updated_at || cards[0]?.published_at

  const entries: { loc: string; lastmod?: string; priority: string; changefreq: string }[] = [
    { loc: `${base}/newsroom`, lastmod: w3c(newest), priority: '0.9', changefreq: 'daily' },
    { loc: `${base}/updates`, lastmod: w3c(newest), priority: '0.7', changefreq: 'weekly' },
    { loc: `${base}/tutorials`, lastmod: w3c(newest), priority: '0.7', changefreq: 'weekly' },
  ]

  // Category views are real crawlable URLs, but only when they have content —
  // listing an empty filter would be a soft 404 in the index.
  for (const filter of CATEGORY_FILTERS) {
    if (filter.value === 'all') continue
    if (!cards.some(card => card.category === filter.value)) continue
    entries.push({
      loc: `${base}/newsroom?category=${filter.value}`,
      lastmod: w3c(newest),
      priority: '0.6',
      changefreq: 'weekly',
    })
  }

  for (const card of cards) {
    entries.push({
      loc: `${base}/newsroom/${card.slug}`,
      lastmod: w3c(card.updated_at || card.published_at),
      priority: card.featured ? '0.8' : '0.7',
      changefreq: 'monthly',
    })
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    entry =>
      `  <url><loc>${esc(entry.loc)}</loc>${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}<priority>${entry.priority}</priority><changefreq>${entry.changefreq}</changefreq></url>`,
  )
  .join('\n')}
</urlset>
`

  setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setResponseHeader(event, 'Cache-Control', 'public, max-age=0, s-maxage=300, stale-while-revalidate=600')

  return xml
})
