# Newsroom & Announcement Publishing System — developer handback

Implements the *KAKR Newsroom & Announcement Publishing System Developer Handoff*
(2026-08-06).

**Status: feature-complete and verified against a production build. Not yet signed
off.** Three things must happen before this goes to production — see
[Blockers](#blockers-before-production) below.

## Build and verification

A clean `npm run build` with no dev server running:

```
Content validation passed: 6 article(s), 3 published, 0 warning(s).
Prerendered 60 routes — 0 errors, 0 500s
Σ Total size: 60.9 MB (22.6 MB gzip)
exit 0
```

Verified against `node .output/server/index.mjs` in production mode:

- All 13 public routes return 200, including every article page, RSS and the
  generated sitemap.
- The published gate holds: an archived slug and an unknown slug both 404
  identically, so existence is never disclosed.
- `/blog/<published-slug>` 301s to its article; `/blog/<archived-slug>` 301s to
  `/newsroom`.
- Hydration is clean — no mismatch errors, and the announcement bar, cards and
  filter counts all survive hydration.
- The announcement bar sits flush against the header (measured gap: 0 px) both
  before and after dismissal; dismissal persists across reload and does not
  suppress a *different* announcement.

Full detail in `qa-results.md`.

### Three defects found and fixed during that verification

1. **Header left a gap after the bar was dismissed.** Tailwind's `transition-all`
   on `<header>` was transitioning the inherited custom property that `top`
   resolves against, so the header stuck 56 px down. Scoped to
   `transition-[padding-top]`.
2. **A dismissed bar still reserved 48 px on reload.** The component set
   `data-announce` imperatively while `useHead` re-applied it declaratively on
   hydration, and unhead won. The attribute is now derived reactively from one
   source of truth.
3. **Title, canonical and `og:title` lagged one navigation behind** on browser
   back/forward. `setSEO` leaves competing static entries under the same dedupe
   keys; the reactive ones now carry `tagPriority: 'high'`.

## Documents

| Document | What it covers |
|---|---|
| `route-map.md` | Every route, redirect, and the deferred `/blog` retirement plan |
| `content-schema.md` | The collection, every field, and the build-time validation rules |
| `publishing-sop.md` | For the content owner: publish, schedule, feature, announce, correct, archive, roll back |
| `editor-access.md` | OAuth setup, MFA enforcement, granting access, account recovery |
| `content-migration-audit.md` | All five legacy items classified with reasoning |
| `qa-results.md` | What was tested, what passed, what was not run |

## What was built

One reusable publishing system. Not a hard-coded announcement.

**One content collection** (`content/newsroom/`) powers the article pages, the
Newsroom landing page, `/updates`, `/tutorials`, the homepage cards, the
announcement bar, RSS, the sitemap and related-article links. There is no second
dataset. The previous hard-coded `data/articles.ts` system and its components have
been deleted.

**One gate.** `server/utils/newsroom.ts` is the only place that applies
`status === 'published' AND published_at <= now`. Every public surface reads
through it.

**The collection is never queried from the browser.** `@nuxt/content` can answer
queries client-side, but it does so from a compressed dump of the *entire*
collection — which would make drafts, in-review items and archived articles
downloadable by anyone who opened any page. All reads go through server endpoints
instead. This also means the schedule is compared against server time, so a
visitor cannot bring a scheduled article forward by changing their clock.

**Scheduling works without a developer.** Newsroom routes are served with `swr:
300` rather than prerendered, so an article scheduled for a future time appears on
its own within about five minutes. They were deliberately removed from the
prerender list, because a prerendered page freezes `published_at <= now` at build
time.

**The build refuses bad content.** `npm run validate:content` runs before every
build and fails on missing fields, duplicate slugs, invalid enums, non-UTC
timestamps, missing image alt text, product updates without an availability label,
announcements without a destination, broken internal links, and a `# ` heading in
a body. Verified by deliberately corrupting content — every rule fired.

### Files

```
content.config.ts                          typed collection schema
content/newsroom/*.md                       6 articles (3 published, 3 archived)
shared/newsroom.ts                          controlled vocabularies + helpers
modules/newsroom-reading-time.ts            computes reading time at parse time

server/utils/newsroom.ts                    THE published gate
server/api/newsroom/cards.get.ts            card list
server/api/newsroom/article.get.ts          one article
server/api/admin/auth.get.ts                CMS OAuth step 1
server/api/admin/callback.get.ts            CMS OAuth step 2
server/routes/newsroom/rss.xml.get.ts       RSS
server/routes/newsroom/sitemap.xml.get.ts   generated sitemap
server/middleware/blog-redirect.ts          /blog/<slug> → /newsroom/<slug>

composables/useNewsroom.ts                  shared query layer
composables/useNewsroomAnalytics.ts         the 8 events, with a property allow-list

components/site/AnnouncementBar.vue
components/newsroom/{NewsCard,CategoryFilter,LatestNewsSection}.vue
assets/css/newsroom-category.css            shared by /updates and /tutorials

pages/newsroom/index.vue
pages/newsroom/[...slug].vue
pages/{updates,tutorials,resources}.vue     rewired to the collection
pages/blog/index.vue                        compatibility page

public/admin/{index.html,config.yml}        the editor
public/uploads/newsroom/2026/08/            hero and social images

scripts/validate-content.mjs                build gate
scripts/sync-decap.mjs                      self-hosts the editor bundle
scripts/generate-newsroom-art.mjs           generates compliant hero/social images
```

Deleted: `data/articles.ts`, `composables/useArticles.ts`, `types/article.ts`,
`components/Resource{Card,Filters,EmptyState}.vue`, `pages/blog/[slug].vue`.

### Analytics

All eight events from handoff §10 are implemented in
`composables/useNewsroomAnalytics.ts` against the existing GA4 `gtag`. Property
names match the specification exactly. Enforcement, not convention: a property
allow-list drops anything not on it, values are length-capped, and `destination`
is reduced to a path so query strings cannot leak into an analytics vendor.

## Blockers before production

### 1. Block `/__nuxt_content/` at the Cloud Run / Docker edge

The production build is verified — see "Build and verification" below. The one
genuine blocker left is a framework-level content-database exposure documented in
full in `content-schema.md`.

Short version: `@nuxt/content` publishes an unauthenticated copy of the entire
collection at `/__nuxt_content/newsroom/sql_dump.txt`. On a production build it
returned HTTP 200 with all three archived articles and the internal
`PENDING — required before production deploy` reviewer notes. It would equally
expose a future-scheduled article before its publish time.

- **Vercel: already fixed** in `vercel.json`.
- **Cloud Run / Docker: not fixed.** Needs a Cloud Armor rule or an nginx sidecar
  denying `/__nuxt_content/*`. It cannot be fixed inside the app — four in-app
  approaches were tried and each either failed silently or broke the build; the
  evidence table is in `content-schema.md`.

Verify with:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://kakr.ai/__nuxt_content/newsroom/sql_dump.txt
```

Anything other than 404 or a redirect means it is still open.

### 1a. Pre-existing issues surfaced, not caused by this work

**Seven prerender 404s.** Routes listed in `nitro.prerender.routes` with no
corresponding page: `/plans-pricing`, `/press2`, and five `/industry/*` paths.
Warnings only (`failOnError: false`). Left alone — pruning them touches unrelated
routing. Worth a separate ticket.

**Duplicate translation keys.** Every locale block in `AppHeader.vue` defined
`blog:` twice (10 keys at `HEAD`, before this work), which esbuild flagged on every
build. Both copies became dead when the menus moved to Newsroom, so they were
removed and the warning is gone.

**The build machine is out of disk.** `C:` had **0.2 GB free**. Nitro's bundling
stage writes there and died with exit 1 and no diagnostic — which produced several
confusing "failures" that were nothing to do with the code. Clearing the
regenerable npm cache (8.9 GB) restored it to 8.3 GB free and the build succeeded
immediately. Worth watching on any machine that builds this project.

### 2. The seed article needs its approvals

`why-every-ai-agent-needs-mission-control` is published in the repository with
`reviewers.technical`, `.security` and `.brand` all set to
`PENDING — required before production deploy`.

It was written to make **no unverified capability claims** — it is a threat model
and positioning piece, with an explicit "What this article claims, and what it does
not" section stating it is not a feature list and directing readers to confirm
availability. It carries no availability label, as the handoff specifies.

Even so, handoff §4's claims gate means it must not reach production until the
named technical and brand reviewers approve the exact wording. To hold it back,
change **Status** to *Needs technical review* in `/admin` — one field, no code.

### 3. The `/admin` GitHub OAuth app does not exist yet

`/admin` returns a clear 503 until `DECAP_GITHUB_CLIENT_ID` and
`DECAP_GITHUB_CLIENT_SECRET` are set. Follow `editor-access.md` §1–2. **Enable
organisation-wide two-factor enforcement before granting the first editor
access** — that is the MFA requirement in handoff §6, and GitHub is the identity
provider.

## Known limitations and deferred work

**Hero and social images are compliant placeholders, not final art.** Generated by
`scripts/generate-newsroom-art.mjs` as restrained geometric brand graphics — no
stock photography, no robot faces, no cryptocurrency coins, as handoff §9
requires. They meet every hard requirement (1600×900 16:9 WebP at 11–12 KB, well
under the 300 KB budget; 1200×630 social cards with safe margins; KAKR
black/green). The existing repository images could not be reused: the runtime
authorization diagram is 4678×620 at 1 MB. Replace with real art direction when
design has it; the specs are in the script header.

**The availability label on the Playground article needs confirmation.**
`pteri-playground-overview` carries `availability: GA`, meaning the Playground is
generally available. Nobody verified that against the product. Confirm or correct
it in `/admin`.

**The `/blog` link and traffic audit has not been done.** Handoff §2 says to
retire `/blog` only after checking inbound links and analytics — that needs Search
Console and GA4 data nobody has provided. `/blog` stays live and canonicalises to
`/newsroom`; article URLs under it already 301. The procedure is in
`route-map.md`.

**Three legacy articles are archived on my recommendation, not on editorial
authority.** The Litecoin-era items are `status: archived` with the reasoning in
`content-migration-audit.md`. If editorial disagrees, restoring any of them is one
Status change in `/admin`.

**No screenshots.** The browser pane in this environment could not composite
frames, so the desktop/mobile screenshots Appendix B asks for were not captured.
Everything was verified through the DOM, the accessibility tree and HTTP
responses instead. Capture them from staging once it is up.

**Cross-browser, screen-reader, Lighthouse and GA4 DebugView passes are
outstanding.** See `qa-results.md` for exactly what was and was not run.

**`useSEO`'s fallback copy is stale.** `composables/useSEO.ts` still has
Web3/Litecoin/BaaS default title and description text, used only when a page sets
neither. No newsroom page can hit it — they all set both — but it is the kind of
obsolete positioning the handoff wants gone. Flagging rather than changing it,
because global SEO defaults are a brand-review decision, not a developer one.

**A system-incident banner does not exist.** The announcement bar renders an
`incident` slot above itself with the correct stacking, so adding a status-page
banner later is a matter of passing it in rather than restacking z-indexes. The
handoff only required the bar to stack correctly below one.

**The chat layout has no announcement bar.** `layouts/chatLayout.vue` is currently
unused by any page, so every public page gets the bar via the default layout.

## Handback items still owed

Per Appendix B, and dependent on a deployed environment:

- Staging URL and production URL
- Pull request or change summary (the change is currently uncommitted on `main`)
- Desktop/mobile screenshots
- SEO/social/RSS validator output against a public URL
- Analytics test evidence from GA4 DebugView
- Accessibility, broken-link and performance results
- The owner-training screen-share, in which Harvin personally creates a draft,
  previews it, publishes it, changes the homepage announcement, corrects the
  article and rolls it back
