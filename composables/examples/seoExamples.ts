// SEO Composable Usage Examples
// This file demonstrates how to use the useSEO composable in different scenarios

import { useSEO } from '~/composables/useSEO'
import { SEO_DEFAULTS, INDUSTRY_SEO, SERVICE_SEO } from '~/composables/seoUtils'

// Example 1: Basic homepage SEO setup
export function setupHomepageSEO() {
  const { setSEO, generateStructuredData } = useSEO()

  setSEO({
    title: SEO_DEFAULTS.HOMEPAGE.title,
    description: SEO_DEFAULTS.HOMEPAGE.description,
    keywords: SEO_DEFAULTS.HOMEPAGE.keywords,
    type: 'website',
    structuredData: [
      generateStructuredData('organization'),
      generateStructuredData('website')
    ]
  })
}

// Example 2: Service page SEO setup
export function setupServicePageSEO(serviceName: string, serviceDescription: string) {
  const { setSEO, generateStructuredData } = useSEO()

  setSEO({
    title: `${serviceName} - Kakr Labs`,
    description: serviceDescription,
    keywords: ['Web3', 'blockchain', serviceName.toLowerCase(), 'enterprise'],
    type: 'service',
    structuredData: [
      generateStructuredData('organization'),
      generateStructuredData('service', {
        name: serviceName,
        description: serviceDescription
      })
    ]
  })
}

// Example 3: Industry page SEO setup
export function setupIndustryPageSEO(industry: 'financial-services' | 'healthcare' | 'government' | 'retail' | 'technology') {
  const { setSEO, generateStructuredData } = useSEO()

  const industryConfig = {
    'financial-services': INDUSTRY_SEO.FINANCIAL_SERVICES,
    'healthcare': INDUSTRY_SEO.HEALTHCARE,
    'government': INDUSTRY_SEO.GOVERNMENT,
    'retail': INDUSTRY_SEO.RETAIL,
    'technology': INDUSTRY_SEO.TECHNOLOGY
  }[industry]

  setSEO({
    title: industryConfig.title,
    description: industryConfig.description,
    keywords: industryConfig.keywords,
    type: industryConfig.type,
    structuredData: [
      generateStructuredData('organization'),
      generateStructuredData('service', {
        name: `${industry} Solutions`,
        description: industryConfig.description
      })
    ]
  })
}

// Example 4: Contact page SEO setup
export function setupContactPageSEO() {
  const { setSEO, generateStructuredData } = useSEO()

  setSEO({
    title: SEO_DEFAULTS.CONTACT.title,
    description: SEO_DEFAULTS.CONTACT.description,
    keywords: SEO_DEFAULTS.CONTACT.keywords,
    type: 'website',
    structuredData: [
      generateStructuredData('organization')
    ]
  })
}

// Example 5: Blog article SEO setup
export function setupArticleSEO(articleTitle: string, articleDescription: string, publishDate: string, author: string = 'Kakr Labs') {
  const { setSEO, generateStructuredData } = useSEO()

  setSEO({
    title: `${articleTitle} - Kakr Labs Blog`,
    description: articleDescription,
    keywords: ['blockchain', 'Web3', 'Litecoin', 'technology'],
    type: 'article',
    author,
    publishedTime: publishDate,
    structuredData: [
      generateStructuredData('organization'),
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: articleTitle,
        description: articleDescription,
        author: {
          '@type': 'Organization',
          name: author
        },
        publisher: generateStructuredData('organization'),
        datePublished: publishDate,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.kakr.ai'
        }
      }
    ]
  })
}

// Example 6: Custom SEO with breadcrumbs
export function setupPageWithBreadcrumbs(
  pageTitle: string,
  pageDescription: string,
  breadcrumbs: Array<{ name: string; url: string }>
) {
  const { setSEO, generateStructuredData } = useSEO()

  setSEO({
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    structuredData: [
      generateStructuredData('organization'),
      generateStructuredData('breadcrumb', { breadcrumbs })
    ]
  })
}

// Example 7: Product/Service specific SEO
export function setupProductSEO(productName: string, productDescription: string, price?: string) {
  const { setSEO, generateStructuredData } = useSEO()

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    description: productDescription,
    brand: generateStructuredData('organization'),
    manufacturer: generateStructuredData('organization')
  }

  if (price) {
    (productSchema as any).offers = {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: generateStructuredData('organization')
    }
  }

  setSEO({
    title: `${productName} - Kakr Labs`,
    description: productDescription,
    keywords: [productName.toLowerCase(), 'Web3', 'blockchain', 'enterprise'],
    type: 'product',
    structuredData: [
      generateStructuredData('organization'),
      productSchema
    ]
  })
}

// Example 8: Validation example
export function validateAndSetSEO(config: any) {
  const { setSEO, validateTitle, validateDescription, validateImage } = useSEO()

  // Validate inputs
  const titleValidation = validateTitle(config.title)
  const descValidation = validateDescription(config.description)
  const imageValidation = validateImage(config.image)

  if (!titleValidation.isValid) {
    console.warn('Title validation failed:', titleValidation.message)
    return false
  }

  if (!descValidation.isValid) {
    console.warn('Description validation failed:', descValidation.message)
    return false
  }

  if (!imageValidation.isValid) {
    console.warn('Image validation failed:', imageValidation.message)
    return false
  }

  // If all validations pass, set SEO
  setSEO(config)
  return true
}