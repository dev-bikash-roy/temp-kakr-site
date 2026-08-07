import { getPublishedCards } from '~~/server/utils/newsroom'
import { categoryLabel } from '~~/shared/newsroom'

/**
 * `/newsroom/rss.xml`
 *
 * Handoff §9: generated from published public items only — drafts, items in
 * review, future-scheduled items and archived content are excluded. That is
 * guaranteed by going through `getPublishedCards`, the same gate the pages use,
 * rather than reading the collection again here.
 */

/** XML text escaping. Applied to every interpolated value without exception. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function rfc822(iso: string): string {
  const date = new Date(iso)
  return Number.isNaN(date.getTime()) ? new Date().toUTCString() : date.toUTCString()
}

export default defineEventHandler(async event => {
  const siteUrl = (useRuntimeConfig(event).public.siteUrl as string) || 'https://kakr.ai'
  const base = siteUrl.replace(/\/$/, '')

  const cards = await getPublishedCards(event)

  const items = cards
    .map(card => {
      const url = `${base}/newsroom/${card.slug}`
      const image = card.social_image || card.hero_image

      return `    <item>
      <title>${esc(card.title)}</title>
      <link>${esc(url)}</link>
      <guid isPermaLink="true">${esc(url)}</guid>
      <description>${esc(card.summary ?? '')}</description>
      <category>${esc(categoryLabel(card.category))}</category>
      <dc:creator>${esc(card.author_name ?? 'KAKR Labs')}</dc:creator>
      <pubDate>${rfc822(card.published_at)}</pubDate>${
        image ? `\n      <enclosure url="${esc(base + image)}" type="${image.endsWith('.webp') ? 'image/webp' : 'image/png'}" length="0" />` : ''
      }
    </item>`
    })
    .join('\n')

  // lastBuildDate reflects the newest published item rather than "now", so a
  // rebuild with no new content does not look like new content to a reader.
  const lastBuild = cards[0]?.published_at ? rfc822(cards[0].published_at) : new Date().toUTCString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>KAKR Newsroom</title>
    <link>${esc(base)}/newsroom</link>
    <atom:link href="${esc(base)}/newsroom/rss.xml" rel="self" type="application/rss+xml" />
    <description>Product releases, security research, engineering insights, and practical guidance for building accountable AI systems.</description>
    <language>en-US</language>
    <copyright>Kakr Labs</copyright>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>
`

  setResponseHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')
  setResponseHeader(event, 'Cache-Control', 'public, max-age=0, s-maxage=300, stale-while-revalidate=600')

  return xml
})
