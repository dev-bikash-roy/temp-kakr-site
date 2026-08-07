// X (Twitter) sharing + copy-link helpers with UTM attribution,
// per KAKR_RESOURCES_CONTENT_HUB_DEVELOPER_BRIEF.md Section 12.

export interface ShareUtmOptions {
  campaign: string
  content: string
  paid?: boolean
}

function withUtm(url: string, { campaign, content, paid }: ShareUtmOptions): string {
  const u = new URL(url)
  u.searchParams.set('utm_source', 'x')
  u.searchParams.set('utm_medium', paid ? 'paid_social' : 'organic_social')
  u.searchParams.set('utm_campaign', campaign)
  u.searchParams.set('utm_content', content)
  return u.toString()
}

export function useShare() {
  function buildShareUrl(canonicalUrl: string, utm: ShareUtmOptions): string {
    return withUtm(canonicalUrl, utm)
  }

  function xIntentUrl(text: string, url: string, hashtags?: string[]): string {
    const params = new URLSearchParams({ text, url })
    if (hashtags?.length) params.set('hashtags', hashtags.join(','))
    return `https://twitter.com/intent/tweet?${params.toString()}`
  }

  async function copyLink(url: string): Promise<boolean> {
    // navigator.clipboard requires a secure context (HTTPS or localhost) —
    // on a plain-HTTP staging domain it's undefined and writeText() throws,
    // silently doing nothing from the user's point of view. Fall back to
    // the older execCommand approach so "Copy Link" still works there.
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url)
        return true
      }
      throw new Error('Clipboard API unavailable')
    } catch {
      try {
        const textarea = document.createElement('textarea')
        textarea.value = url
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        const ok = document.execCommand('copy')
        document.body.removeChild(textarea)
        return ok
      } catch {
        return false
      }
    }
  }

  return { buildShareUrl, xIntentUrl, copyLink }
}
