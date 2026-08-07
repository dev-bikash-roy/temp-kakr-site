/**
 * Runtime backend settings for the Decap editor.
 *
 * `public/admin/config.yml` is a static file, so it cannot know which deployment
 * is serving it. Hardcoding `repo` and `branch` there means a test deployment
 * commits into the production repository — the editor would appear to work while
 * writing content to the wrong place, and the test site would never update.
 *
 * The editor fetches these three values before initialising, so one build works
 * unchanged on production, staging and any temporary domain. Set `DECAP_REPO`,
 * `DECAP_BRANCH` and `SITE_URL` per environment.
 *
 * None of this is secret — `repo` and `branch` are visible in the editor anyway.
 * The OAuth client secret is never exposed here; it stays in
 * `server/api/admin/callback.get.ts`.
 */
export default defineEventHandler(event => {
  const config = useRuntimeConfig(event)

  // `base_url` is the origin hosting the OAuth endpoints, which is always the
  // deployment serving the editor.
  const siteUrl = ((config.public.siteUrl as string) || 'https://kakr.ai').replace(/\/$/, '')

  setResponseHeader(event, 'Cache-Control', 'no-store')

  return {
    repo: config.public.decapRepo as string,
    branch: config.public.decapBranch as string,
    base_url: siteUrl,
    // Lets the editor show a clear message instead of failing at sign-in.
    auth_configured: Boolean(config.decapGithubClientId && config.decapGithubClientSecret),
  }
})
