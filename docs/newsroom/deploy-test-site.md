# Deploying the Newsroom to a temporary test site (Vercel)

Gets the whole system onto a public `*.vercel.app` URL so the Newsroom,
announcement bar, `/admin` editor, RSS, SEO and mobile can all be tested for real.

Nothing here touches production. Free tier, no card required.

---

## Before you start

The test site is deliberately **not indexable**. Any deployment whose `SITE_URL`
is not `kakr.ai` is served with `X-Robots-Tag: noindex, nofollow` and a matching
`noindex` meta tag, so Google cannot index the test copy or confuse it with the
live site. That is automatic — you do not have to remember it.

---

## Step 1 — Push the branch

Everything is currently uncommitted. From the project directory:

```bash
git checkout -b newsroom-publishing-system
git add -A
git commit -m "Add KAKR Newsroom and announcement publishing system"
git push -u origin newsroom-publishing-system
```

## Step 2 — Create the Vercel project

1. Go to **vercel.com** → sign in **with GitHub**.
2. **Add New… → Project** → import `dev-bikash-roy/kakr-ai`.
3. Vercel detects Nuxt automatically. **Leave every build setting at its default**
   — the repo's own `build` script already runs content validation, the CMS
   bundle sync and `nuxt build`.
4. Set **Production Branch** to `newsroom-publishing-system` (Settings → Git), so
   the test site tracks this branch rather than `main`.
5. **Deploy.**

First build takes roughly 4–8 minutes (it prerenders 60 routes and optimises
images).

## Step 3 — Note the URL, then set **both** site-URL variables

Vercel gives you something like `https://kakr-ai-abc123.vercel.app`.

Go to **Settings → Environment Variables** and add **both**, to the same value —
your URL with no trailing slash:

| Name | Why both are needed |
|---|---|
| `SITE_URL` | Read at **build** time. 60 routes are prerendered, and their canonical and Open Graph tags are baked in during the build. Without this they would be wrong on every static page. |
| `NUXT_PUBLIC_SITE_URL` | Read at **run** time. Covers the server-rendered newsroom routes, the RSS feed, the generated sitemap and the `/admin` OAuth callback URL. |

Then **Deployments → … → Redeploy**. The redeploy is required — `SITE_URL` only
takes effect through a fresh build.

Verified locally: with only `SITE_URL` set at runtime the canonicals still pointed
at the build-time host, and `NUXT_PUBLIC_SITE_URL` corrected them. Setting both
covers the static and dynamic halves of the site.

## Step 4 — Check the site works

Replace `TEST` with your URL:

```bash
curl -s -o /dev/null -w '%{http_code}\n' TEST/newsroom
```

Then open in a browser and confirm:

- `TEST/` — announcement bar across the top, "Latest from KAKR" just above the FAQ
- `TEST/newsroom` — three cards, working category filters
- `TEST/newsroom/why-every-ai-agent-needs-mission-control` — full article, TOC
- `TEST/updates`, `TEST/tutorials`, `TEST/blog`, `TEST/resources`
- `TEST/newsroom/rss.xml` — three items
- `TEST/newsroom/sitemap.xml`
- `TEST/blog/what-is-runtime-authorization-for-ai-agents` — should 301 to
  `/newsroom/…`

### If the newsroom pages return 500

The likely cause is the `/__nuxt_content/:path*` redirect in `vercel.json`. It is
there to close the content-database leak described in `content-schema.md`, but the
server may need that path internally on Vercel's runtime.

Test by temporarily removing that one redirect block from `vercel.json`, pushing,
and redeploying. If the 500s clear, the leak fix needs a different approach on
Vercel — tell me and I will rework it. Everything else is unaffected.

## Step 5 — Turn on `/admin`

Until this is done `/admin` shows a clear 503. The public site works regardless.

### 5a. Create a **separate** GitHub OAuth app for the test site

**github.com/settings/developers → OAuth Apps → New OAuth App**

| Field | Value |
|---|---|
| Application name | `KAKR Newsroom Editor (TEST)` |
| Homepage URL | your `https://…vercel.app` URL |
| Authorization callback URL | your URL + `/api/admin/callback` |

The callback must match exactly — same scheme, no trailing slash. Register
**Generate a new client secret** and copy both values.

Keep this app separate from the production one. Deleting it later revokes test
access without touching production.

### 5b. Add the credentials to Vercel

**Settings → Environment Variables**:

| Name | Value |
|---|---|
| `DECAP_GITHUB_CLIENT_ID` | the Client ID |
| `DECAP_GITHUB_CLIENT_SECRET` | the client secret — mark it **Sensitive** |
| `DECAP_REPO` | `dev-bikash-roy/kakr-ai` |

Redeploy.

By this point the full environment-variable set is:

```
SITE_URL=https://YOUR-TEST-URL.vercel.app
NUXT_PUBLIC_SITE_URL=https://YOUR-TEST-URL.vercel.app
DECAP_GITHUB_CLIENT_ID=...
DECAP_GITHUB_CLIENT_SECRET=...      (Sensitive)
DECAP_REPO=dev-bikash-roy/kakr-ai
GOOGLE_ANALYTICS_ID=...             (optional — omit to keep test traffic out of GA)
```

The secret is only ever read server-side. Nuxt keeps non-`public` runtime config
out of the browser bundle, so it never reaches a client.

### 5c. Point the editor at the test site

`public/admin/config.yml` currently has:

```yaml
backend:
  branch: main
  base_url: https://kakr.ai
```

For the test site, change these to your test branch and URL:

```yaml
backend:
  branch: newsroom-publishing-system
  base_url: https://YOUR-TEST-URL.vercel.app
```

Commit and push. **Change both back before production.**

## Step 6 — Test the editor

Open `TEST/admin`, click **Login with GitHub**, authorise.

Then run the exercise the handoff asks for:

1. **Create a draft** — New article, fill the required fields, Save. It should
   appear under *Drafts* and be invisible on the public site.
2. **Preview** — open the deploy-preview link (see the note below).
3. **Publish** — drag to *Ready*, click Publish. Within a couple of minutes it
   should appear on `/newsroom`, its category page and the RSS feed.
4. **Change the announcement** — open the article, tick *Show this article in the
   announcement bar*, publish. The bar at the top of every page should change.
5. **Correct it** — edit the headline, set *Last updated*, publish.
6. **Roll it back** — set **Status** to *Archived* and publish; confirm it
   disappears from every surface. Or revert the commit in GitHub.

Also worth testing:

- **Scheduling** — set the publish date 10 minutes ahead with Status = Published.
  It must stay invisible (and out of RSS) until that time, then appear on its own.
- **Announcement dismissal** — dismiss the bar, reload; it stays gone. Publish a
  *different* announcement; it should appear even though you dismissed the last.

### About the Preview button

Vercel builds a deploy preview for every pull request, and the editorial workflow
creates a PR per draft. Open the PR in GitHub and use Vercel's preview link — that
renders the real KAKR article template.

Decap's own inline preview pane is deliberately disabled: it renders Decap's
approximation rather than the KAKR template, and showing an editor something that
does not match what ships is worse than showing nothing.

---

## Known differences from production

| | Test site | Production |
|---|---|---|
| Indexable | No — `noindex` everywhere | Yes |
| Canonical host | the `.vercel.app` URL | `kakr.ai` |
| Runtime | Vercel serverless | Cloud Run / Docker |
| Content DB leak | blocked by `vercel.json` | **still open on Cloud Run** — see `content-schema.md` |
| OAuth app | separate TEST app | production app |

The runtime difference is the one to keep in mind: if Cloud Run is the real
production target, a Vercel test validates the application but not the exact
serving environment.

---

## Tearing it down

Delete the Vercel project, delete the TEST OAuth app in GitHub, and delete the
branch. Nothing else is affected.
