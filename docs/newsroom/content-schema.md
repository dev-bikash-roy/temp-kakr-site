# Content schema — the `newsroom` collection

One `@nuxt/content` collection powers every newsroom surface. There is
deliberately no second dataset: a single published record updates its article
page, its Newsroom card, its category view, the homepage cards, the announcement
bar, RSS, the sitemap and its metadata at once.

- **Schema definition:** `content.config.ts`
- **Files:** `content/newsroom/<slug>.md`
- **Controlled vocabularies:** `shared/newsroom.ts`
- **Editor field mapping:** `public/admin/config.yml`
- **Build-time validation:** `scripts/validate-content.mjs`

## Architecture

```
content/newsroom/*.md          markdown + frontmatter, committed to git
        │
        ▼
@nuxt/content collection       typed, validated at parse time
        │
        ▼
server/utils/newsroom.ts       THE published gate — status + published_at <= now
        │
        ├─► /api/newsroom/cards       list surfaces (no article bodies)
        ├─► /api/newsroom/article     one article incl. body
        ├─► /newsroom/rss.xml
        ├─► /newsroom/sitemap.xml
        └─► server/middleware/blog-redirect.ts
                │
                ▼
composables/useNewsroom.ts     shared client/SSR layer, one fetch per request
        │
        ├─► pages/newsroom/index.vue        components/newsroom/NewsCard.vue
        ├─► pages/newsroom/[...slug].vue    components/newsroom/CategoryFilter.vue
        ├─► pages/updates.vue               components/newsroom/LatestNewsSection.vue
        ├─► pages/tutorials.vue             components/site/AnnouncementBar.vue
        ├─► pages/blog/index.vue
        └─► pages/resources.vue
```

### Two rules that keep drafts private

**1. One gate.** `server/utils/newsroom.ts` is the only place that applies
`status === 'published' AND published_at <= now`. Every public surface goes
through it. A second query path would be a second chance to leak a draft.

**2. The collection is never queried from the browser.** Application code reads
only the server endpoints above, so `published_at` is compared against **server**
time and a visitor cannot bring a scheduled article forward by changing their
system clock.

That is the application-level half. The framework-level half is an open item —
see below.

## ⚠️ Open security item: `/__nuxt_content/` must be blocked at the edge

**Severity: medium. Must be closed before production.**

`@nuxt/content` publishes each collection as a static, unauthenticated file at
`/__nuxt_content/<collection>/sql_dump.txt` (plus `.br` / `.gz`) so browsers can
query content locally.

This is not theoretical. On a production build of this site the URL returned
**HTTP 200 with a 14.7 KB gzipped copy of the entire collection**, verified to
contain:

- all three archived articles (`status: archived`), which appear on no page,
- the internal `PENDING — required before production deploy` reviewer notes,
- and it would equally contain any future-scheduled article and its full body
  before its publish time.

Handoff §7 ("do not expose … private preview data") and §12 ("drafts and
future-scheduled content never appear publicly") both forbid this.

### Why it is not fixed in application code

Four in-app approaches were tried and rejected on evidence:

| Approach | Result |
|---|---|
| `private: true` on the collection | Silently ignored. `defineCollection()` discards the key and `resolveCollection()` hard-codes `private: name === 'info'`. No per-collection opt-out exists in 3.15.1. |
| Delete the dump after build | Broke the site. Every newsroom route returned 500 — the server's own `queryCollection()` seeds its database through this route. |
| Nitro middleware blocking `/__nuxt_content/**` | Broke the build. It also intercepts the server's internal calls, so prerendering failed on all 60 routes. |
| Route rule `prerender: false` (via `nuxt.config` and via a `modules:done` hook) | Did remove the static file, but the build then died silently after prerendering, exit 1 with no diagnostic. Reverted. |

`server/middleware/block-content-dump.ts` is retained. It rejects **external**
requests to the `/__nuxt_content/<collection>/query` endpoint while admitting the
server's in-process calls (which have no socket). It cannot protect
`sql_dump.txt`, because static assets are served before middleware runs.

### The fix

Block the path at the edge, where static assets are actually served.

**Vercel** — already applied in `vercel.json`:

```json
{ "source": "/__nuxt_content/:path*", "destination": "/newsroom", "permanent": false }
```

**Cloud Run / Docker** — not yet applied. The container serves everything through
Nitro, so this needs a rule in front of it. Either:

- a Cloud Armor policy denying `/__nuxt_content/*` on the load balancer, or
- an nginx/Envoy sidecar with `location /__nuxt_content/ { return 404; }`.

The server's own content queries are in-process and never traverse the edge, so
blocking it externally is safe.

### How to verify it is closed

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://kakr.ai/__nuxt_content/newsroom/sql_dump.txt
```

Anything other than 404 or a redirect means the collection is still downloadable.
Re-run this after any `@nuxt/content` upgrade.

## Fields

Required fields are marked ✔. "Editor" is the label shown in `/admin`.

| Field | Type | ✔ | Editor label | Notes |
|---|---|:-:|---|---|
| `title` | string | ✔ | Headline | The article H1 and card title. |
| `slug` | lowercase slug | ✔ | URL slug | **Must equal the filename** — enforced by the validator. Immutable after publication unless a redirect is added. |
| `summary` | string, 140–220 chars | ✔ | Summary | Cards, article intro, meta description fallback. Length enforced in the editor and warned on at build. |
| `category` | enum | ✔ | Category | `product-update`, `announcement`, `security-ai`, `engineering`, `tutorial`, `company`. |
| `status` | enum | ✔ | Status | `draft`, `technical-review`, `security-review`, `brand-review`, `scheduled`, `published`, `archived`. Only `published` is public. |
| `published_at` | ISO-8601 UTC | ✔ | Publish date and time (UTC) | Must end in `Z`. Set in the future + `published` to schedule. |
| `updated_at` | ISO-8601 UTC | | Last updated (UTC) | Set when a live article is materially revised. |
| `author_name` | string | ✔ | Author name | Defaults to `KAKR Labs`. |
| `author_role` | string | | Author role | e.g. "Security Research". |
| `hero_image` | asset path | | Hero image | 1600×900, 16:9. Required for featured articles. |
| `hero_alt` | string | | Hero image description | **Required whenever `hero_image` is set** — build fails otherwise. |
| `hero_caption` | string | | Hero caption | |
| `social_image` | asset path | | Social sharing image | 1200×630. Required before promotion. |
| `featured` | boolean | | Feature this on the homepage | The large lead card. Requires a hero image. |
| `featured_rank` | int | | Feature order | Lower wins when several are featured. |
| `announcement` | object | | Announcement bar | See below. |
| `availability` | enum | | Availability | `GA`, `public-beta`, `private-beta`, `testing`, `coming-soon`. **Required for `product-update`, rejected on every other category.** |
| `reviewers` | object | | Approvals | `technical`, `security`, `brand`, `legal`. Free text: name and date, or a link to the review record. |
| `seo` | object | | Search engine settings | `title`, `description`, `canonical`. All optional; fall back to headline and summary. |
| `cta_primary` | object | | Primary button | `label` + `url`. On-site paths are validated at build. |
| `cta_secondary` | object | | Secondary button | Same shape. |
| `tags` | string[] | | Tags | Shown at the foot of the article. |
| `related` | string[] | | Related articles | Curated slugs. Validated. Empty falls back to same-category suggestions — never padded with unrelated items. |
| `archive_label` | boolean | | Show a "From the Archive" banner | See below. |
| `archive_note` | string | | Archive note | Explains why it is historical and what is current. |
| `external_url` | url | | Original post elsewhere | Rendered as a secondary "Original post" link only. **Can never replace the article body.** |
| `reading_time_override` | int | | Reading time override | Leave blank; see below. |
| `body` | Markdown/MDC | ✔ | Article | Start headings at `##`. A `# ` in the body fails the build. |
| `reading_time` | int | — | *(not an editor field)* | Computed at parse time. |
| `word_count` | int | — | *(not an editor field)* | Computed at parse time. |

### `announcement`

| Sub-field | Type | Notes |
|---|---|---|
| `enabled` | boolean | Only one announcement shows at a time. |
| `label` | string | Badge text, default `NEW`. |
| `short_title` | string | Shorter headline for the bar. Falls back to `title`. |
| `starts_at` | ISO-8601 UTC | **Required when enabled.** Also seeds the dismissal ID. |
| `ends_at` | ISO-8601 UTC | Optional. Must be after `starts_at`. |
| `priority` | int | Highest wins; newest `published_at` breaks ties. |
| `dismissible` | boolean | Default true. |
| `destination` | path/url | Leave blank — defaults to the article's own page. |
| `id` | string | Override the dismissal key. Leave blank. |

Dismissal is stored per announcement ID in `localStorage` under
`kakr:announcements-dismissed` (capped at 20 entries), so a new announcement
appears even to someone who dismissed the previous one. Leaving `id` blank makes
the ID `<slug>::<starts_at>`, which means simply rescheduling an announcement
re-shows it.

Enabling an announcement on a non-published or archive-labelled article fails the
build.

### `status: archived` vs `archive_label: true`

Two different mechanisms, easy to confuse:

- **`status: archived`** — unpublished. Gone from every public surface, RSS, the
  sitemap and search. Kept in the repository, restorable with one Status change.
- **`archive_label: true`** — a *published* article flagged as historical. Renders
  a "From the Archive" banner, appears in listings with a badge, but can never be
  the homepage lead feature or take the announcement bar.

### Reading time

Computed from the body at parse time by `modules/newsroom-reading-time.ts`
(~200 wpm, minimum one minute, code blocks excluded from the word count) and
stored as `reading_time`. It is a stored field rather than a render-time
calculation because card queries deliberately do not select article bodies —
pulling every body into the list payload just to count words would dominate the
page weight. `reading_time_override` wins when set.

## Build-time validation

`npm run validate:content` runs before `nuxt build` and `nuxt generate`. It fails
the build on:

- missing `title`, `slug`, `summary`, `category`, `status` or `published_at`
- a `slug` that does not match its filename, or is not lowercase-hyphenated
- duplicate slugs
- an invalid `category`, `status` or `availability`
- a `published_at` / `updated_at` / `announcement.*_at` that is not Z-suffixed UTC
- `hero_image` set without `hero_alt`
- a `hero_image` or `social_image` that does not exist in `public/`
- a published `product-update` with no `availability`
- `availability` set on any other category
- `featured: true` without a hero image
- an enabled announcement that is unpublished, archive-labelled, missing
  `starts_at`, or has `ends_at` before `starts_at`
- a CTA missing a label or URL
- a `related` slug that does not exist, or self-reference
- an internal link in the body or a CTA pointing at a path that is not a route in
  `pages/` or an article in the collection
- a `# ` heading in the body (the title is already the page H1)

It warns without failing on: a summary outside 140–220 characters, a published
article with no hero or social image, and a published article with no primary CTA.

Timestamp strictness is not pedantry: the published gate compares `published_at`
as a **string** in SQL, so mixed formats would make the comparison silently
wrong, which is exactly how a scheduled article leaks early.
