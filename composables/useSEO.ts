import type { UseSeoMetaInput } from '@unhead/vue'
import { unref } from 'vue'
import type { MaybeRef } from 'vue'
import type {
  SEOConfig,
  OpenGraphConfig,
  TwitterCardConfig,
  OrganizationSchema,
  WebsiteSchema,
  ServiceSchema,
  BreadcrumbSchema,
  ContactPoint,
  PostalAddress,
  SearchAction,
  Offer
} from '~/types/seo'

// All interfaces are now imported from types/seo.ts
const DEFAULT_SITE_URL = 'https://kakr.ai'

type MaybeReactiveSEOConfig = Partial<{
  [K in keyof SEOConfig]: MaybeRef<SEOConfig[K]>
}>

/**
 * Canonical origin for the deployment currently being served.
 *
 * Only `www.kakr.ai` is folded into the apex. Every other configured host is
 * honoured as-is.
 *
 * This used to rewrite `localhost`, `127.0.0.1` and any `*.vercel.app` host to
 * `https://kakr.ai`, which meant a staging or preview deployment emitted
 * canonical, og:url and twitter URLs pointing at production. That makes it
 * impossible to test SEO and social previews on a temporary domain, and if the
 * temporary site is ever crawled it feeds canonical signals to the live site.
 *
 * Non-production deployments are kept out of search by `noindex` instead — see
 * `server/middleware/preview-noindex.ts` — which is the correct tool for it.
 */
function normalizeSiteUrl(url: string): string {
  const normalizedUrl = url.replace(/\/$/, '')

  try {
    const { hostname } = new URL(normalizedUrl)
    if (hostname === 'www.kakr.ai') return DEFAULT_SITE_URL
  } catch {
    return DEFAULT_SITE_URL
  }

  return normalizedUrl
}

function normalizePath(path: string): string {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
}

function resolveSEOConfig(config: MaybeReactiveSEOConfig = {}): Partial<SEOConfig> {
  return Object.entries(config).reduce<Partial<SEOConfig>>((resolved, [key, value]) => {
    ;(resolved as Record<string, unknown>)[key] = unref(value as MaybeRef<unknown>)
    return resolved
  }, {})
}

function getImageMimeType(imageUrl: string): string {
  const cleanUrl = imageUrl.split('?')[0]?.toLowerCase() || ''

  if (cleanUrl.endsWith('.jpg') || cleanUrl.endsWith('.jpeg')) {
    return 'image/jpeg'
  }

  if (cleanUrl.endsWith('.webp')) {
    return 'image/webp'
  }

  return 'image/png'
}

// Default SEO Configuration
const defaultSEO: SEOConfig = {
  title: 'Kakr Labs - Enterprise Web3 Infrastructure',
  description: 'Enterprise-grade Web3 infrastructure built on the secure Litecoin blockchain. Offering BaaS, APIs, SDKs, and wallet-approved 2FA for secure, scalable blockchain applications.',
  image: '/home-og.png',
  type: 'website',
  keywords: ['Litecoin', 'blockchain infrastructure', 'Web3', 'BaaS', 'enterprise blockchain', 'API', 'SDK', 'Pteri platform', 'MCP', 'decentralized 2FA', 'privacy-focused transaction controls']
}

// SEO Validation Functions
export function validateTitle(title: string): { isValid: boolean; message?: string } {
  if (!title) {
    return { isValid: false, message: 'Title is required' }
  }
  return { isValid: true }
}

export function validateDescription(description: string): { isValid: boolean; message?: string } {
  if (!description) {
    return { isValid: false, message: 'Description is required' }
  }
  return { isValid: true }
}

export function validateImage(imageUrl: string): { isValid: boolean; message?: string } {
  if (!imageUrl) {
    return { isValid: false, message: 'Image URL is required' }
  }

  // Check if it's a valid URL format
  try {
    new URL(imageUrl.startsWith('/') ? `https://example.com${imageUrl}` : imageUrl)
    return { isValid: true }
  } catch {
    return { isValid: false, message: 'Invalid image URL format' }
  }
}

// Structured Data Generation Functions
export function generateOrganizationSchema(data: Partial<OrganizationSchema> = {}): OrganizationSchema {
  const baseSchema: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kakr Labs',
    url: DEFAULT_SITE_URL,
    logo: `${DEFAULT_SITE_URL}/kakrlabs-logo.png`,
    description: 'Enterprise-grade Web3 infrastructure built on the secure Litecoin blockchain with BaaS, APIs, SDKs, and wallet-approved 2FA.',
    sameAs: [
      'https://twitter.com/kakrlabs',
      'https://www.linkedin.com/company/kakrlabs',
      'https://medium.com/@kakrlabs'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${DEFAULT_SITE_URL}/contact`
    }
  }

  return { ...baseSchema, ...data }
}

export function generateWebsiteSchema(data: Partial<WebsiteSchema> = {}): WebsiteSchema {
  const baseSchema: WebsiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kakr Labs',
    url: DEFAULT_SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${DEFAULT_SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  return { ...baseSchema, ...data }
}

export function generateServiceSchema(serviceName: string, serviceDescription: string, additionalData: Partial<ServiceSchema> = {}): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: generateOrganizationSchema(),
    serviceType: 'Blockchain Infrastructure Service',
    areaServed: 'Worldwide',
    ...additionalData
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}

export interface ArticleSchemaInput {
  headline: string
  description: string
  image: string
  url: string
  datePublished: string
  dateModified?: string
  authorName: string
  isTechArticle?: boolean
}

export function generateArticleSchema(data: ArticleSchemaInput, baseUrl: string = DEFAULT_SITE_URL): Record<string, any> {
  const image = data.image.startsWith('/') ? `${baseUrl}${data.image}` : data.image
  return {
    '@context': 'https://schema.org',
    '@type': data.isTechArticle ? 'TechArticle' : 'Article',
    headline: data.headline,
    description: data.description,
    image,
    url: data.url,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      '@type': 'Person',
      name: data.authorName
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kakr Labs',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/kakrlabs-logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url
    }
  }
}

// Meta Tag Generation Functions
export function generateOpenGraphTags(config: Partial<OpenGraphConfig>, baseUrl: string = DEFAULT_SITE_URL): Record<string, string> {
  const ogConfig: OpenGraphConfig = {
    title: config.title || defaultSEO.title || 'Kakr Labs',
    description: config.description || defaultSEO.description || 'Enterprise Web3 Infrastructure',
    image: config.image || defaultSEO.image || '/images/og-images/homepage.jpg',
    type: config.type || 'website',
    url: config.url || baseUrl,
    siteName: config.siteName || 'Kakr Labs',
    locale: config.locale || 'en_US'
  }

  return {
    'og:title': ogConfig.title,
    'og:description': ogConfig.description,
    'og:image': ogConfig.image.startsWith('/') ? `${baseUrl}${ogConfig.image}` : ogConfig.image,
    'og:image:secure_url': ogConfig.image.startsWith('/') ? `${baseUrl}${ogConfig.image}` : ogConfig.image,
    'og:image:type': getImageMimeType(ogConfig.image),
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:type': ogConfig.type,
    'og:url': ogConfig.url,
    'og:site_name': ogConfig.siteName || 'Kakr Labs',
    'og:locale': ogConfig.locale || 'en_US'
  }
}

export function generateTwitterCardTags(config: Partial<TwitterCardConfig>, baseUrl: string = DEFAULT_SITE_URL): Record<string, string> {
  const twitterConfig: TwitterCardConfig = {
    card: config.card || 'summary_large_image',
    title: config.title || defaultSEO.title || 'Kakr Labs',
    description: config.description || defaultSEO.description || 'Enterprise Web3 Infrastructure',
    image: config.image || defaultSEO.image || '/images/og-images/homepage.jpg',
    site: config.site || '@kakrlabs',
    creator: config.creator || '@kakrlabs'
  }

  return {
    'twitter:card': twitterConfig.card,
    'twitter:title': twitterConfig.title,
    'twitter:description': twitterConfig.description,
    'twitter:image': twitterConfig.image.startsWith('/') ? `${baseUrl}${twitterConfig.image}` : twitterConfig.image,
    'twitter:site': twitterConfig.site || '@kakrlabs',
    'twitter:creator': twitterConfig.creator || '@kakrlabs'
  }
}

// Main SEO Composable
export function useSEO(initialConfig: MaybeReactiveSEOConfig = {}) {
  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()
  // Canonical URLs follow the host this deployment is actually served from, so a
  // staging or temporary domain does not point its canonicals at production.
  const configuredUrl = (runtimeConfig.public?.siteUrl as string) || DEFAULT_SITE_URL
  const baseUrl = normalizeSiteUrl(configuredUrl)

  /** Only kakr.ai is indexable. Every other host is staging, preview or local. */
  const isProductionHost = (() => {
    try {
      return new URL(baseUrl).hostname === 'kakr.ai'
    } catch {
      return false
    }
  })()

  // Get current page SEO configuration with fallbacks
  function getSEOWithFallbacks(pageSEO: MaybeReactiveSEOConfig = {}): SEOConfig {
    const resolvedPageSEO = resolveSEOConfig(pageSEO)
    const config = {
      ...defaultSEO,
      ...resolvedPageSEO
    }

    // Validate and apply fallbacks
    const titleValidation = validateTitle(config.title || '')
    if (!titleValidation.isValid) {
      console.warn(`SEO Title validation failed: ${titleValidation.message}`)
      config.title = defaultSEO.title
    }

    const descValidation = validateDescription(config.description || '')
    if (!descValidation.isValid) {
      console.warn(`SEO Description validation failed: ${descValidation.message}`)
      config.description = defaultSEO.description
    }

    const imageValidation = validateImage(config.image || '')
    if (!imageValidation.isValid) {
      console.warn(`SEO Image validation failed: ${imageValidation.message}`)
      config.image = defaultSEO.image
    }

    return config
  }

  // Set SEO for current page
  function setSEO(config: MaybeReactiveSEOConfig = {}) {
    const seoConfig = getSEOWithFallbacks(config)
    const cleanPath = normalizePath(route.path)
    const currentUrl = `${baseUrl}${cleanPath}`

    // Generate meta tags
    const openGraphTags = generateOpenGraphTags({
      title: seoConfig.title,
      description: seoConfig.description,
      image: seoConfig.image,
      type: seoConfig.type,
      url: currentUrl
    }, baseUrl)

    const twitterTags = generateTwitterCardTags({
      title: seoConfig.title,
      description: seoConfig.description,
      image: seoConfig.image
    }, baseUrl)

    // Prepare meta array
    const metaTags: Array<{ name?: string; property?: string; content: string; key?: string }> = [
      { name: 'description', content: seoConfig.description!, key: 'description' },
      // A non-production host is never indexable, whatever the page asked for.
      // This has to agree with the X-Robots-Tag set in
      // server/middleware/preview-noindex.ts — emitting `index, follow` here
      // while the header says `noindex` is a conflicting signal.
      {
        name: 'robots',
        content: seoConfig.noindex || !isProductionHost ? 'noindex, nofollow' : 'index, follow',
        key: 'robots',
      }
    ]

    // Add keywords if provided
    if (seoConfig.keywords && seoConfig.keywords.length > 0) {
      metaTags.push({ name: 'keywords', content: seoConfig.keywords.join(', '), key: 'keywords' })
    }

    // Add author if provided
    if (seoConfig.author) {
      metaTags.push({ name: 'author', content: seoConfig.author, key: 'author' })
    }

    // Add Open Graph tags
    Object.entries(openGraphTags).forEach(([key, value]) => {
      metaTags.push({ property: key, content: value || '' })
    })

    // Add Twitter tags
    Object.entries(twitterTags).forEach(([key, value]) => {
      metaTags.push({ name: key, content: value || '' })
    })

    // Prepare link tags
    const linkTags: Array<{ rel: string; href: string; key?: string }> = []
    const canonicalUrl = `${baseUrl}${cleanPath}`

    if (seoConfig.canonical) {
      const canonical = seoConfig.canonical.startsWith('/')
        ? `${baseUrl}${normalizePath(seoConfig.canonical)}`
        : seoConfig.canonical
      linkTags.push({ rel: 'canonical', href: canonical, key: 'canonical' })
    } else {
      linkTags.push({ rel: 'canonical', href: canonicalUrl, key: 'canonical' })
    }

    // Prepare structured data scripts
    const scripts: Array<{ type: string; innerHTML: string }> = []

    if (seoConfig.structuredData && seoConfig.structuredData.length > 0) {
      seoConfig.structuredData.forEach(schema => {
        scripts.push({
          type: 'application/ld+json',
          innerHTML: JSON.stringify(schema)
        })
      })
    }

    // Apply SEO using Nuxt's useHead + useSeoMeta for reliable SSG output
    useHead({
      title: seoConfig.title,
      meta: metaTags,
      link: linkTags,
      script: scripts
    })

    // Also use useSeoMeta for guaranteed OG/Twitter tag rendering in SSG
    const imageAbsolute = (seoConfig.image || defaultSEO.image || '').startsWith('/')
      ? `${baseUrl}${seoConfig.image || defaultSEO.image}`
      : (seoConfig.image || defaultSEO.image || '')

    useSeoMeta({
      ogTitle: seoConfig.title,
      ogDescription: seoConfig.description,
      ogImage: imageAbsolute,
      ogImageWidth: '1200',
      ogImageHeight: '630',
      ogType: (seoConfig.type as any) || 'website',
      ogUrl: currentUrl,
      twitterCard: 'summary_large_image',
      twitterTitle: seoConfig.title,
      twitterDescription: seoConfig.description,
      twitterImage: imageAbsolute,
    })

    // Override the keyed global og:image tags with page-specific values
    useHead({
      meta: [
        { property: 'og:image', content: imageAbsolute, key: 'og-image' },
        { property: 'og:image:secure_url', content: imageAbsolute, key: 'og-image-secure' },
        { property: 'og:image:width', content: '1200', key: 'og-image-width' },
        { property: 'og:image:height', content: '630', key: 'og-image-height' },
        { property: 'og:image:type', content: getImageMimeType(imageAbsolute), key: 'og-image-type' },
        { name: 'twitter:image', content: imageAbsolute, key: 'twitter-image' },
      ]
    })
  }

  // Generate structured data for different types
  function generateStructuredData(type: string, data: any = {}): Record<string, any> {
    switch (type.toLowerCase()) {
      case 'organization':
        return generateOrganizationSchema(data)
      case 'website':
        return generateWebsiteSchema(data)
      case 'service':
        return generateServiceSchema(data.name || 'Blockchain Service', data.description || 'Enterprise blockchain service', data)
      case 'breadcrumb':
        return generateBreadcrumbSchema(data.breadcrumbs || [])
      default:
        console.warn(`Unknown structured data type: ${type}`)
        return {}
    }
  }

  // Get current page SEO configuration
  function getPageSEO(): SEOConfig {
    return getSEOWithFallbacks()
  }

  // Utility function to create page-specific SEO
  function createPageSEO(pageConfig: MaybeReactiveSEOConfig) {
    return () => setSEO(pageConfig)
  }

  if (Object.keys(initialConfig).length > 0) {
    setSEO(initialConfig)
  }

  return {
    setSEO,
    generateStructuredData,
    getPageSEO,
    createPageSEO,
    getSEOWithFallbacks,
    validateTitle,
    validateDescription,
    validateImage,
    generateOrganizationSchema,
    generateWebsiteSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
    generateOpenGraphTags,
    generateTwitterCardTags
  }
}

// Types are exported from types/seo.ts

