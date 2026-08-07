import { computed } from 'vue'

const DEFAULT_SITE_URL = 'https://kakr.ai'

function normalizeSiteUrl(url: string): string {
  const normalizedUrl = url.replace(/\/$/, '')

  try {
    const { hostname } = new URL(normalizedUrl)

    if (
      hostname === 'www.kakr.ai' ||
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.endsWith('.vercel.app')
    ) {
      return DEFAULT_SITE_URL
    }
  } catch {
    return DEFAULT_SITE_URL
  }

  return normalizedUrl
}

function normalizePath(path: string): string {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
}

export default defineNuxtPlugin(() => {
  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()
  const baseUrl = normalizeSiteUrl((runtimeConfig.public?.siteUrl as string) || DEFAULT_SITE_URL)

  const canonicalUrl = computed(() => `${baseUrl}${normalizePath(route.path)}`)

  useHead({
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl,
        key: 'canonical'
      }
    ]
  })
})
