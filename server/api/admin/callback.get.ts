import { timingSafeEqual } from 'node:crypto'
import { OAUTH_STATE_COOKIE } from './auth.get'

/**
 * Step 2 of the Decap CMS GitHub sign-in: exchange the authorization code for a
 * token and hand it to the opener window in the shape Decap expects.
 *
 * Three checks happen before any token is released:
 *   1. the `state` cookie matches the returned `state` (CSRF);
 *   2. GitHub accepts the code and returns a token;
 *   3. the resulting user has push access to the content repository.
 *
 * (3) matters because the OAuth app will happily authenticate any GitHub account.
 * Without it, an unauthorised person reaching /admin would sign in successfully
 * and only discover they cannot save when a commit failed — and the editor UI,
 * including unpublished drafts they can read, would have loaded for them first.
 */

interface TokenResponse {
  access_token?: string
  scope?: string
  error?: string
  error_description?: string
}

/**
 * Decap's OAuth popup protocol is a three-step handshake, and the order matters:
 *
 *   1. the popup announces itself with `authorizing:<provider>`
 *   2. the editor answers with a message, revealing its origin
 *   3. the popup replies with `authorization:<provider>:<result>:<json>`
 *
 * Sending the payload first — which is what this did originally — means the
 * editor is not listening yet and simply discards it. The popup then sat on
 * "Completing sign-in…" while the editor stayed on the login screen.
 */
function responsePage(payload: string, targetOrigin: string) {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Signing in…</title>
<style>body{background:#050505;color:#e5e5e5;font:15px/1.6 system-ui,sans-serif;display:grid;place-items:center;height:100vh;margin:0}</style>
</head>
<body>
<p>Completing sign-in…</p>
<script>
  (function () {
    var payload = ${JSON.stringify(payload)};
    var target = ${JSON.stringify(targetOrigin)};

    if (!window.opener) {
      document.body.textContent = 'This page must be opened from the KAKR editor.';
      return;
    }

    function handleReply(event) {
      // Only the editor on our own origin may receive the token.
      if (event.origin !== target) return;
      window.removeEventListener('message', handleReply, false);
      window.opener.postMessage(payload, target);
      setTimeout(function () { window.close(); }, 600);
    }

    window.addEventListener('message', handleReply, false);

    // Step 1. Must come first — this is what makes the editor start listening.
    window.opener.postMessage('authorizing:github', target);
  })();
</script>
</body>
</html>`
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a)
  const right = Buffer.from(b)
  if (left.length !== right.length) return false
  return timingSafeEqual(left, right)
}

export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)
  const siteUrl = ((config.public.siteUrl as string) || 'https://kakr.ai').replace(/\/$/, '')
  const origin = new URL(siteUrl).origin

  // Never cached, and never indexed — this response carries a credential.
  setResponseHeader(event, 'Cache-Control', 'no-store')
  setResponseHeader(event, 'X-Robots-Tag', 'noindex, nofollow')
  setResponseHeader(event, 'Content-Type', 'text/html; charset=utf-8')

  const fail = (message: string) => responsePage(`authorization:github:error:${JSON.stringify({ message })}`, origin)

  const { code, state, error: oauthError } = getQuery(event)

  if (oauthError) {
    return fail('GitHub declined the sign-in request.')
  }

  const expectedState = getCookie(event, OAUTH_STATE_COOKIE)
  deleteCookie(event, OAUTH_STATE_COOKIE, { path: '/api/admin' })

  if (typeof state !== 'string' || !expectedState || !safeEqual(state, expectedState)) {
    return fail('Sign-in request could not be verified. Please start again from /admin.')
  }

  if (typeof code !== 'string' || !code) {
    return fail('GitHub did not return an authorization code.')
  }

  let token: string
  try {
    const tokenResponse = await $fetch<TokenResponse>('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: {
        client_id: config.decapGithubClientId,
        client_secret: config.decapGithubClientSecret,
        code,
        redirect_uri: `${siteUrl}/api/admin/callback`,
      },
    })

    if (!tokenResponse.access_token) {
      // GitHub's own error text is not echoed to the browser; it can name the
      // client_id and other configuration details.
      console.error('[cms-auth] token exchange failed:', tokenResponse.error, tokenResponse.error_description)
      return fail('GitHub did not issue an access token.')
    }

    token = tokenResponse.access_token
  } catch (cause) {
    console.error('[cms-auth] token exchange threw:', cause)
    return fail('Could not reach GitHub to complete sign-in.')
  }

  // Authorisation check: push access to the content repository.
  const repo = config.public.decapRepo as string
  try {
    const permissions = await $fetch<{ permissions?: { push?: boolean; maintain?: boolean; admin?: boolean } }>(
      `https://api.github.com/repos/${repo}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'User-Agent': 'kakr-cms-auth',
        },
      },
    )

    const permission = permissions.permissions
    if (!permission?.push && !permission?.maintain && !permission?.admin) {
      return fail('Your GitHub account does not have write access to the KAKR content repository.')
    }
  } catch {
    return fail('Your GitHub account does not have access to the KAKR content repository.')
  }

  return responsePage(
    `authorization:github:success:${JSON.stringify({ token, provider: 'github' })}`,
    origin,
  )
})
