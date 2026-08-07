# Editor access, MFA, and account recovery

The `/admin` editor authenticates against GitHub, because the content lives in the
KAKR repository and every publish is a commit. There is no separate CMS user
database, no second set of passwords, and no third-party CMS subscription.

## One-time setup (developer / CTO)

### 1. Create the GitHub OAuth app

At **https://github.com/settings/developers → OAuth Apps → New OAuth App**, or
under the organisation's settings if the repository is org-owned:

| Field | Value |
|---|---|
| Application name | KAKR Newsroom Editor |
| Homepage URL | `https://kakr.ai` |
| Authorization callback URL | `https://kakr.ai/api/admin/callback` |

The callback URL must match exactly, including scheme and no trailing slash.

### 2. Set the environment variables

On the production environment (and separately on staging, with its own OAuth app
and its own callback URL):

```
DECAP_GITHUB_CLIENT_ID=<Client ID from the OAuth app>
DECAP_GITHUB_CLIENT_SECRET=<Client secret from the OAuth app>
DECAP_REPO=dev-bikash-roy/kakr-ai
SITE_URL=https://kakr.ai
```

`DECAP_GITHUB_CLIENT_SECRET` is a **secret**. Store it in the platform's secret
manager. It is only ever read server-side — Nuxt keeps non-`public` runtime config
off the client, so it never reaches a browser bundle. Do not add it to
`.env.example`, a Dockerfile, or CI logs.

Until both values are set, `/admin` returns a clear 503 rather than failing
obscurely.

### 3. Enforce MFA

The handoff requires an approved identity account **with MFA**. GitHub is the
identity provider here, so MFA is enforced at GitHub:

- **Organisation-owned repo (recommended):** Organisation settings →
  Authentication security → **Require two-factor authentication for everyone in
  the organisation**. This is the enforcement point. Do this before granting the
  first editor access.
- **Personal repo:** each collaborator must enable 2FA on their own account. This
  cannot be centrally enforced, which is one reason to move the repository into an
  organisation.

### 4. Grant an editor access

Add the person to the repository with the **Write** role — the minimum that allows
committing content and opening pull requests. Do not grant Admin.

`server/api/admin/callback.get.ts` verifies push access before the editor UI loads.
Someone without write access gets a clear message and never sees unpublished
drafts.

### 5. Protect the branch

Branch protection on `main` is what makes the editorial workflow meaningful:

- Require a pull request before merging.
- Require the content-validation status check to pass.
- Require at least one approving review for changes that touch technical or
  security claims.

## How sign-in works

```
/admin  ──►  /api/admin/auth  ──►  github.com/login/oauth/authorize
                                            │
                                            ▼  (editor signs in + MFA)
/admin  ◄──  /api/admin/callback  ◄─────────┘
             │  1. verifies the CSRF state cookie
             │  2. exchanges the code for a token using the server-side secret
             │  3. confirms the account has push access to DECAP_REPO
             └─ hands the token to the editor window via postMessage
```

Decap's GitHub backend normally relies on a hosted OAuth service (Netlify's).
KAKR is not on Netlify, so these two routes are that service, self-hosted, which
keeps the client secret on KAKR infrastructure.

Security properties worth knowing:

- The client secret never leaves the server.
- A single-use `state` cookie is verified with a timing-safe comparison.
- The token is posted only to KAKR's own origin.
- GitHub's error text is logged server-side, never echoed to the browser, because
  it can name configuration details.
- The callback response is `Cache-Control: no-store` and `noindex`.
- The token GitHub issues is the editor's own, scoped to what that person can
  already reach. Revoking their repository access revokes their editing ability.

## Account recovery

### "I've lost access to my GitHub account"

1. Recover the GitHub account itself, using GitHub's recovery flow and your saved
   2FA recovery codes. KAKR cannot recover a GitHub account on your behalf.
2. If the account is unrecoverable: create a new GitHub account, enable 2FA, and
   have an org owner grant it **Write** access to the repository. Remove the old
   account.
3. No content is at risk in either case. Everything is in git, and drafts live on
   review branches.

**Save your GitHub 2FA recovery codes somewhere outside your laptop.** They are the
only self-service route back in.

### "I've lost my 2FA device"

Use a saved recovery code, or ask an organisation owner. Owners cannot disable
another member's 2FA, but they can remove and re-add the account once it is
recovered.

### "The last person with admin access has left"

This is the real single point of failure. Mitigate it now:

- Keep at least **two** organisation owners.
- Store the OAuth app credentials in the shared secret manager, not on one
  person's machine.
- Record who holds GitHub organisation ownership in the internal runbook.

### "/admin says the sign-in service is not configured"

`DECAP_GITHUB_CLIENT_ID` or `DECAP_GITHUB_CLIENT_SECRET` is missing or empty in
the environment. A developer needs to check the deployment's environment
variables. Publishing is blocked until it is fixed; the public site is unaffected.

### "/admin shows 'The editor bundle is missing'"

`public/admin/vendor/` was not populated. A developer runs `npm run cms:sync` and
redeploys. It runs automatically on `npm install` and `npm run build`, so this
should only happen after an unusual deployment. The public site is unaffected.

## Offboarding an editor

Remove their repository access in GitHub. That is sufficient — it invalidates
their ability to commit, and the OAuth check on sign-in will reject them.
