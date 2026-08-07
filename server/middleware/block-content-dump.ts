/**
 * Closes @nuxt/content's public content-database surface to outside requests.
 *
 * ## The problem
 *
 * @nuxt/content prerenders every collection to
 * `/__nuxt_content/<collection>/sql_dump.txt` (plus .br/.gz) and exposes a query
 * endpoint at `/__nuxt_content/<collection>/query`. On a production build of this
 * site, the dump URL returned HTTP 200 with a 14.7 KB gzipped copy of the *entire*
 * collection — including all three archived articles and the internal
 * "PENDING — required before production deploy" reviewer notes, none of which
 * appear on any page. Handoff §7 and §12 forbid exposing drafts, archived content
 * and private review data.
 *
 * ## Why it cannot simply be deleted or blocked outright
 *
 * These are not client-only artefacts. `queryCollection(event, ...)` on the server
 * issues an internal request to `/__nuxt_content/<collection>/query`, which seeds
 * its database from the dump. Deleting the dump made every newsroom route return
 * 500; blocking the path unconditionally made prerendering fail on all 60 routes.
 *
 * ## What this does
 *
 * Allows the server's own internal calls and rejects everything arriving over the
 * network. Nitro's internal `$fetch` goes through this middleware but is not a
 * real socket connection, so the absence of a remote address is the discriminator.
 *
 * ## Still recommended
 *
 * Block `/__nuxt_content/` at the CDN, ingress or reverse proxy as well. On a
 * CDN-backed deployment `.output/public` can be served by the edge without Nitro
 * seeing the request at all, in which case this middleware never runs.
 */
export default defineEventHandler(event => {
  if (!event.path.startsWith('/__nuxt_content/')) return

  // A real client connection always has a remote address. Nitro's in-process
  // fetch uses a mock request with no socket, so this admits the server's own
  // content queries while rejecting anything that arrived over the network.
  const remoteAddress = event.node.req?.socket?.remoteAddress
  if (!remoteAddress) return

  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
})
