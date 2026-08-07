# Route and redirect map — Newsroom

## Public routes

| Route | Serves | Rendering | Notes |
|---|---|---|---|
| `/newsroom` | Unified landing page with category filters and pagination | SSR + `swr: 300` | Canonical content hub. Filter and page state live in the query string. |
| `/newsroom/<slug>` | Individual article | SSR + `swr: 300` | Canonical article URL. 404s for draft, in-review, scheduled-future and archived items. |
| `/newsroom?category=<c>` | Category view of the landing page | SSR + `swr: 300` | Real crawlable URL; self-canonicalising. `c` ∈ `product-update`, `announcement`, `security-ai`, `engineering`, `tutorial`, `company`. |
| `/newsroom?page=<n>` | Pagination beyond the first 12 items | SSR + `swr: 300` | Distinct `<title>` per page. |
| `/updates` | Product Updates category view | SSR + `swr: 300` | Live URL preserved. Reads the shared collection. |
| `/tutorials` | Tutorials category view | SSR + `swr: 300` | Credible coming-soon state until tutorials exist. |
| `/blog` | Legacy Blog compatibility page | SSR + `swr: 300` | Preserved deliberately. `rel=canonical` → `/newsroom`. Becomes a 301 once the link/traffic audit below is signed off. |
| `/resources` | Broader resources directory | Prerendered | Retained per handoff §2; leads with a prominent Newsroom tile. |
| `/newsroom/rss.xml` | RSS 2.0 feed | SSR + `swr: 300` | Published items only. |
| `/newsroom/sitemap.xml` | Generated child sitemap | SSR + `swr: 300` | Registered in `/sitemap_index.xml`. |
| `/admin` | Protected editor | Static, `ssr: false` | `noindex` via meta tag, `X-Robots-Tag` header and robots.txt. `/admin` 301s to `/admin/`. |

### Why the newsroom routes are not prerendered

They gate on `published_at <= now`. A prerendered page freezes that comparison at
build time, so a scheduled article would stay invisible until someone triggered
another deployment — which defeats scheduling. `swr: 300` keeps them close to
static in cost while re-evaluating the schedule at most five minutes late.

`/blog`, `/updates` and `/tutorials` were removed from the `nitro.prerender.routes`
list for the same reason.

## Server endpoints

| Endpoint | Purpose |
|---|---|
| `GET /api/newsroom/cards` | Published article cards, without bodies. The only path pages use to read the list. |
| `GET /api/newsroom/article?slug=<slug>` | One published article including its rendered body. 404 for anything not publicly published. |
| `GET /api/admin/auth` | Starts the GitHub OAuth flow for the editor. |
| `GET /api/admin/callback` | Exchanges the OAuth code for a token, verifies repository write access, hands the token to the editor window. |

Public pages never query the content collection directly from the browser — see
`content-schema.md` for why that matters.

## Redirects

| From | To | Code | Implemented in |
|---|---|---|---|
| `/blog/<slug>` where `<slug>` is published | `/newsroom/<slug>` | 301 | `server/middleware/blog-redirect.ts` |
| `/blog/<slug>` where `<slug>` is archived or unknown | `/newsroom` | 301 | same |
| `/<locale>/blog/<slug>` | `/<locale>/newsroom/<slug>` | 301 | same (locale prefix preserved) |
| `/admin` | `/admin/` | 301 | Nitro static handler |

Old article slugs that redirect today:

- `what-is-runtime-authorization-for-ai-agents` → `/newsroom/what-is-runtime-authorization-for-ai-agents`
- `pteri-playground-overview` → `/newsroom/pteri-playground-overview`
- `pteri-litecoin-announcement` → `/newsroom`
- `beyond-smart-contracts-litecoin-infrastructure` → `/newsroom`
- `why-proof-of-work-still-matters` → `/newsroom`

## Deferred: retiring /blog

Handoff §2 says to preserve `/blog` initially and 301 it to `/newsroom` only
after inbound links and analytics have been checked. **That audit has not been
done** — it needs data nobody has handed over yet. Before flipping it:

1. Pull inbound referrers and organic landing data for `/blog` and `/blog/*` from
   Search Console and GA4 for at least the last 12 months.
2. Check for external links from press coverage, partner sites and the X account.
3. Update any internal links still pointing at `/blog` (none remain in the
   codebase — the nav and footer now point at `/newsroom`).
4. Then replace `pages/blog/index.vue` with a route rule:
   `'/blog': { redirect: { to: '/newsroom', statusCode: 301 } }`.

Article URLs under `/blog/` already 301, so this last step only concerns the
`/blog` index itself.

## Sitemap composition

`/sitemap_index.xml` references two children:

- `/sitemap.xml` — hand-maintained static file for marketing and product pages.
  `/newsroom*`, `/updates`, `/tutorials` and `/blog` were removed from it to
  avoid duplicate and competing entries.
- `/newsroom/sitemap.xml` — generated from the collection at request time, so a
  newly published article appears without anyone editing XML.
