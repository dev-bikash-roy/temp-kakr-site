import { randomBytes } from 'node:crypto'

/**
 * Step 1 of the Decap CMS GitHub sign-in.
 *
 * Decap's GitHub backend needs an OAuth service to trade an authorization code
 * for a token, because that exchange requires a client secret. Netlify hosts one
 * for sites on Netlify; KAKR is not, so this pair of routes is that service.
 *
 * The whole point is that `DECAP_GITHUB_CLIENT_SECRET` stays on the server —
 * handoff §7 forbids CMS secrets and repository credentials in client bundles.
 * The browser only ever sees the resulting user token, which is what Decap needs
 * to commit on the editor's own behalf, and which GitHub scopes to that editor's
 * actual repository permissions.
 */

export const OAUTH_STATE_COOKIE = 'kakr_cms_oauth_state'

export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)
  const clientId = config.decapGithubClientId as string

  if (!clientId || !(config.decapGithubClientSecret as string)) {
    throw createError({
      statusCode: 503,
      statusMessage:
        'The CMS sign-in service is not configured. Set DECAP_GITHUB_CLIENT_ID and DECAP_GITHUB_CLIENT_SECRET.',
    })
  }

  // Single-use CSRF token, verified in the callback. Without it an attacker could
  // feed the callback a code obtained in their own OAuth flow.
  const state = randomBytes(32).toString('hex')

  setCookie(event, OAUTH_STATE_COOKIE, state, {
    httpOnly: true,
    sameSite: 'lax',
    secure: !import.meta.dev,
    path: '/api/admin',
    maxAge: 600,
  })

  const siteUrl = ((config.public.siteUrl as string) || 'https://kakr.ai').replace(/\/$/, '')

  const authorize = new URL('https://github.com/login/oauth/authorize')
  authorize.searchParams.set('client_id', clientId)
  authorize.searchParams.set('redirect_uri', `${siteUrl}/api/admin/callback`)
  // `repo` is the narrowest scope that still allows commits to a private
  // repository. GitHub has no per-repository OAuth scope; access is bounded by
  // what the signed-in editor can already reach.
  authorize.searchParams.set('scope', 'repo,user:email')
  authorize.searchParams.set('state', state)

  await sendRedirect(event, authorize.toString(), 302)
})
