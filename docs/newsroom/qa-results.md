# QA results

Recorded against a **production build** (`npm run build` → `node
.output/server/index.mjs`, Nuxt 3.21.2, Node 24.14.1) unless stated otherwise.
Build result: 60 routes prerendered, 0 errors, exit 0.

Legend: **PASS** verified directly · **PARTIAL** verified in part · **NOT RUN**
blocked or needs a real environment.

## Routes

| Check | Result | Evidence |
|---|---|---|
| `/newsroom` renders | PASS | 200; 3 server-rendered cards in the HTML source |
| `/newsroom/<slug>` renders | PASS | 200 for all 3 published slugs |
| `/updates` category view | PASS | 200, reads the shared collection |
| `/tutorials` coming-soon state | PASS | 200, credible empty state, no placeholder cards |
| `/blog` compatibility page | PASS | 200, `rel=canonical` → `/newsroom` |
| `/resources` directory | PASS | 200, Newsroom tile leads |
| `/admin` editor | PASS | 301 → `/admin/`, 200, Decap boots to "Login with GitHub" |
| `/newsroom/rss.xml` | PASS | 200, `application/rss+xml` |
| `/newsroom/sitemap.xml` | PASS | 200, `application/xml`, 9 URLs |
| `/api/newsroom/cards` | PASS | 200, 3 cards |

## The published gate (the thing that must not fail)

| Check | Result | Evidence |
|---|---|---|
| Archived articles absent from `/newsroom` | PASS | 0 occurrences of the 3 archived titles in the HTML |
| Archived articles absent from RSS | PASS | 3 `<item>`s, none archived |
| Archived articles absent from the sitemap | PASS | 9 URLs, none archived |
| Archived article page 404s | PASS | `/api/newsroom/article?slug=why-proof-of-work-still-matters` → 404 |
| Unknown slug 404s identically | PASS | Same 404 shape — existence is not disclosed |
| Future-scheduled article hidden | PASS | Observed live: the seed article at `2026-08-07T09:00Z` was correctly excluded while server time was `2026-08-06T20:10Z`, then appeared once its time had passed |
| Server time, not client time | PASS | Gate runs in `server/utils/newsroom.ts`; the browser never queries the collection |
| Collection never queried client-side by app code | PASS | All reads go through `/api/newsroom/*` |
| Collection not reachable via the framework's own endpoint | **FAIL — open** | `/__nuxt_content/newsroom/sql_dump.txt` returns 200 with the entire collection, including archived articles and reviewer notes. Fixed on Vercel; **still open on Cloud Run / Docker.** See `content-schema.md` → "Open security item" |

## Announcement bar

| Check | Result | Evidence |
|---|---|---|
| Renders from CMS data, not hard-coded | PASS | Title/label come from the article's `announcement` block |
| Server-rendered | PASS | Present in HTML source with correct title |
| Stacks above the header | PASS | `--kakr-announce-h: 48px`; header `top: 48px`; bar `z-index: 1000` vs header `999` |
| Height within limits | PASS | 48px ≥640px, 56px below — both under the 48/72px caps |
| Separate keyboard focus for link and close | PASS | Two focusable elements, distinct focus rings |
| Accessible name on dismiss | PASS | `aria-label="Dismiss announcement: Why Every AI Agent Needs Mission Control"` |
| Pre-paint dismissal check | PASS | Inline script sets `data-announce` before first paint — no flash, no layout shift |
| Reduced motion | PASS | No marquee/pulse anywhere; all transitions disabled under `prefers-reduced-motion` |
| Hidden on `/admin` | PASS | `/admin` is static and outside the layout; route guard also present |
| Dismissal persists per ID | PASS | Full cycle exercised in the browser: dismiss → bar hidden, `--kakr-announce-h` 0, header at 0; reload → still hidden, `data-announce="off"` both pre-paint and post-hydration; with only a *previous* announcement's ID stored → the current one appears normally |
| Header sits flush under the bar | PASS | Measured gap 0 px at both 48 px (desktop) and 56 px (mobile) bar heights, and 0 px after dismissal |
| No hydration mismatch | PASS | Clean console; the only error is a pre-existing reCAPTCHA `frame-ancestors` report-only CSP notice |

## Homepage

| Check | Result | Evidence |
|---|---|---|
| "Latest from KAKR" immediately before FAQ | PASS | Inserted directly above the FAQ section in `pages/index.vue` |
| One featured + two newest | PASS | 3 cards; `news-card--featured` present on the lead |
| Correct selection | PASS | Featured = runtime authorization (rank 1); then mission control; then the archive-labelled playground |
| Card fields | PASS | Category, image, title, excerpt, date, reading time all render |
| Three-column desktop / single mobile | PASS | CSS grid breakpoints at 768px and 1024px |
| Section hidden below 3 articles | PASS | Gated on `HOMEPAGE_MIN_ARTICLES` |

## Article page

| Check | Result | Evidence |
|---|---|---|
| Exactly one `<h1>` | PASS | 1 occurrence; a `# ` in the body fails the build |
| Header fields | PASS | Category, title, summary, author, role, date, reading time |
| Hero 16:9 with alt | PASS | `aspect-ratio: 16/9`, `object-fit: cover`, alt required by the validator |
| Table of contents past threshold | PASS | 7 TOC links on the 959-word seed article; suppressed on short articles |
| Code blocks render and scroll | PASS | Shiki-highlighted `<pre>` with `overflow-x: auto` |
| Tables render and scroll | PASS | `<table>` in an `overflow-x: auto` block |
| Availability only on product updates | PASS | Shown on the playground article, absent on the engineering one |
| "From the Archive" banner | PASS | Renders above the H1 with the archive note |
| "Original post" is secondary only | PASS | Never a card destination |
| Reading time computed from body | PASS | 959 words → 5 min; 585 → 3 min; 254 → 1 min |

## SEO, social, feeds

| Check | Result | Evidence |
|---|---|---|
| Canonical URL | PASS | `https://kakr.ai/newsroom/<slug>`, absolute |
| Open Graph | PASS | `og:title`, `og:type=article`, `og:url`, `og:image` (absolute, 1200×630) |
| X card | PASS | `twitter:card=summary_large_image`, title, image |
| Structured data | PASS | `Article` on the seed; `TechArticle` on engineering; `BreadcrumbList` on both |
| Filtered/paginated views self-canonicalise | PASS | Reactive canonical follows the query string |
| RSS excludes non-public items | PASS | See the published-gate table |
| Sitemap registered in the index | PASS | `/sitemap_index.xml` references the generated child |
| `/blog` no longer indexed separately | PASS | Removed from `sitemap.xml`; canonicals to `/newsroom` |
| Social preview validated in X/LinkedIn debuggers | NOT RUN | Requires a public URL |

## Redirects and links

| Check | Result | Evidence |
|---|---|---|
| `/blog/<published-slug>` → article | PASS | 301 → `/newsroom/what-is-runtime-authorization-for-ai-agents` |
| `/blog/<archived-slug>` → Newsroom | PASS | 301 → `/newsroom` |
| Internal links validated at build | PASS | Validator rejects paths absent from `pages/` or the collection |
| Site-wide broken-link crawl | NOT RUN | Needs a deployed URL |

## Content validation gate

**PASS.** Tested by deliberately corrupting content; every rule fired with a
specific message. Verified catches: invalid category, non-Z timestamp, missing
hero alt, missing availability on a product update, invalid announcement
timestamp, non-existent related slug, `# ` heading in body, broken CTA path,
broken body link, broken newsroom link. Clean content passes with 0 warnings
across 6 articles.

## Editor

| Check | Result | Evidence |
|---|---|---|
| `/admin` loads the editor | PASS | Decap 3.15.1 boots, config validates, "Login with GitHub" shown |
| Self-hosted bundle | PASS | 95 files, 5.5 MB from `node_modules`, no CDN |
| `noindex` | PASS | Meta tag + `X-Robots-Tag: noindex, nofollow, noarchive` + robots.txt |
| `Cache-Control: no-store` | PASS | Confirmed on `/admin/` |
| Secret stays server-side | PASS | Only in non-`public` runtime config |
| Full sign-in → publish cycle | NOT RUN | Needs the GitHub OAuth app and a deployed URL |

## Mobile (375x812)

| Check | Result | Evidence |
|---|---|---|
| Bar height within cap | PASS | 56 px, under the 72 px mobile cap |
| Header flush under bar | PASS | Bar bottom 56, header top 56 |
| Dismiss tap target | PASS | 44x44 px |
| Title truncates to one line | PASS | `text-overflow: ellipsis`; second separator hidden |
| Cards single column | PASS | |
| No horizontal overflow | PASS | `scrollWidth` 375 = viewport |

## Filters and history

| Check | Result | Evidence |
|---|---|---|
| Filter state in the URL | PASS | `/newsroom?category=engineering` |
| Cards and active filter follow back/forward | PASS | 3 → 1 → 3 → 1 across click, back, forward |
| Head tags follow back/forward | PASS | Fixed via `tagPriority: 'high'`; previously lagged one navigation |
| Client-side card click loads the article | PASS | Article body renders without a full page load |

## Not yet run

These need a deployed environment:

- **Cross-browser:** Chrome, Firefox, Safari, iOS Safari, Android Chrome.
- **Screenshots** — desktop and mobile of the bar, homepage cards, Newsroom,
  article page. The local browser pane could not composite frames in this
  environment, so no screenshots were captured.
- **Analytics event verification** in GA4 DebugView. Events are implemented and
  property names match handoff §10, with an allow-list that drops anything not on
  it, but no event has been observed landing in GA4.
- **Lighthouse / Core Web Vitals.**
- **Screen-reader pass** with a real screen reader.
- **Full editor workflow** — draft, preview, review, schedule, publish, archive,
  rollback — end to end.
