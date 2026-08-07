// SEO Constants and Utility Functions

// Default SEO configurations for different page types
export const SEO_DEFAULTS = {
  HOMEPAGE: {
    title: 'Kakr Labs - Enterprise Web3 Infrastructure on Litecoin Blockchain',
    description: 'Enterprise-grade Web3 infrastructure built on the secure Litecoin blockchain. Offering BaaS, APIs, SDKs, and wallet-approved 2FA for secure, scalable blockchain applications.',
    keywords: ['Litecoin', 'blockchain infrastructure', 'Web3', 'BaaS', 'enterprise blockchain', 'API', 'SDK', 'Pteri platform', 'MCP', 'decentralized 2FA', 'privacy-focused transaction controls'],
    type: 'website' as const
  },

  ABOUT: {
    title: 'About Kakr Labs - Leading Web3 Infrastructure Provider',
    description: 'Learn about Kakr Labs, the leading provider of enterprise Web3 infrastructure on Litecoin blockchain. Our mission, team, and commitment to secure blockchain solutions.',
    keywords: ['about Kakr Labs', 'Web3 company', 'blockchain team', 'Litecoin infrastructure', 'enterprise blockchain'],
    type: 'website' as const
  },

  CONTACT: {
    title: 'Contact Kakr Labs - Get Started with Web3 Infrastructure',
    description: 'Contact Kakr Labs for enterprise Web3 infrastructure solutions. Get started with our BaaS, APIs, SDKs, and secure 2FA on Litecoin blockchain.',
    keywords: ['contact Kakr Labs', 'Web3 support', 'blockchain consultation', 'enterprise solutions'],
    type: 'website' as const
  },

  SERVICES: {
    title: 'Web3 Infrastructure Services - Kakr Labs',
    description: 'Comprehensive Web3 infrastructure services including BaaS, APIs, SDKs, and wallet-approved 2FA. Built on secure Litecoin blockchain for enterprise applications.',
    keywords: ['Web3 services', 'blockchain infrastructure', 'BaaS', 'blockchain API', 'Web3 SDK'],
    type: 'service' as const
  },

  INDUSTRY: {
    title: 'Industry Solutions - Enterprise Web3 Infrastructure',
    description: 'Industry-specific Web3 infrastructure solutions for financial services, healthcare, government, retail, and technology sectors on Litecoin blockchain.',
    keywords: ['industry blockchain solutions', 'enterprise Web3', 'sector-specific blockchain', 'industry infrastructure'],
    type: 'website' as const
  }
}

// Industry-specific SEO configurations
export const INDUSTRY_SEO = {
  FINANCIAL_SERVICES: {
    title: 'Financial Services Web3 Infrastructure - Kakr Labs',
    description: 'Secure Web3 infrastructure for financial services. Enterprise-grade blockchain solutions with compliance, security, and scalability on Litecoin.',
    keywords: ['financial services blockchain', 'fintech Web3', 'banking infrastructure', 'financial compliance blockchain'],
    type: 'service' as const
  },

  HEALTHCARE: {
    title: 'Healthcare Web3 Infrastructure - Secure Medical Blockchain',
    description: 'HIPAA-compliant Web3 infrastructure for healthcare. Secure patient data management and medical record systems on Litecoin blockchain.',
    keywords: ['healthcare blockchain', 'medical Web3', 'HIPAA compliant blockchain', 'healthcare infrastructure'],
    type: 'service' as const
  },

  GOVERNMENT: {
    title: 'Government Web3 Infrastructure - Public Sector Blockchain',
    description: 'Secure Web3 infrastructure for government and public sector. Transparent, auditable blockchain solutions for civic applications on Litecoin.',
    keywords: ['government blockchain', 'public sector Web3', 'civic blockchain', 'government infrastructure'],
    type: 'service' as const
  },

  RETAIL: {
    title: 'Retail & E-commerce Web3 Infrastructure - Kakr Labs',
    description: 'Web3 infrastructure for retail and e-commerce. Secure payment processing, loyalty programs, and supply chain solutions on Litecoin blockchain.',
    keywords: ['retail blockchain', 'e-commerce Web3', 'retail infrastructure', 'blockchain payments'],
    type: 'service' as const
  },

  TECHNOLOGY: {
    title: 'Technology & SaaS Web3 Infrastructure - Developer Solutions',
    description: 'Web3 infrastructure for technology companies and SaaS platforms. Developer-friendly APIs, SDKs, and blockchain integration tools.',
    keywords: ['technology blockchain', 'SaaS Web3', 'developer infrastructure', 'blockchain integration'],
    type: 'service' as const
  }
}

// Service-specific SEO configurations
export const SERVICE_SEO = {
  BAAS: {
    title: 'Blockchain as a Service (BaaS) - Kakr Labs',
    description: 'Enterprise Blockchain as a Service on Litecoin. Scalable, secure BaaS platform with APIs, SDKs, and managed infrastructure for Web3 applications.',
    keywords: ['Blockchain as a Service', 'BaaS platform', 'enterprise blockchain', 'managed blockchain'],
    type: 'service' as const
  },

  API: {
    title: 'Web3 APIs - Blockchain Development APIs - Kakr Labs',
    description: 'Comprehensive Web3 APIs for blockchain development. RESTful and GraphQL APIs for Litecoin blockchain integration and application development.',
    keywords: ['Web3 API', 'blockchain API', 'Litecoin API', 'blockchain development'],
    type: 'service' as const
  },

  SDK: {
    title: 'Web3 SDKs - Blockchain Development Kits - Kakr Labs',
    description: 'Developer-friendly Web3 SDKs for multiple programming languages. Build blockchain applications with our comprehensive development kits.',
    keywords: ['Web3 SDK', 'blockchain SDK', 'development kit', 'blockchain tools'],
    type: 'service' as const
  },

  TWO_FA: {
    title: 'Wallet-Approved 2FA - Secure Blockchain Authentication',
    description: 'Revolutionary wallet-approved 2FA system. Secure, decentralized two-factor authentication without data exploitation on Litecoin blockchain.',
    keywords: ['wallet 2FA', 'blockchain authentication', 'decentralized 2FA', 'secure authentication'],
    type: 'service' as const
  }
}

// Social media and sharing configurations
export const SOCIAL_CONFIG = {
  TWITTER: {
    site: '@kakrlabs',
    creator: '@kakrlabs'
  },

  FACEBOOK: {
    appId: '', // Add Facebook App ID if available
    pages: '' // Add Facebook Page ID if available
  },

  LINKEDIN: {
    company: 'kakrlabs'
  }
}

// Image configurations for different contexts
export const IMAGE_CONFIG = {
  DEFAULT_OG: '/kakr-og.jpg',
  HOMEPAGE_OG: '/homepage-og.jpg',
  SERVICES_OG: '/services-og.jpg',
  INDUSTRY_OG: '/industry-og.jpg',
  CONTACT_OG: '/contact-og.jpg',

  // Image dimensions for validation
  OG_DIMENSIONS: {
    width: 1200,
    height: 630
  },

  TWITTER_DIMENSIONS: {
    width: 1200,
    height: 600
  }
}

// URL and canonical configurations
export const URL_CONFIG = {
  BASE_URL: 'https://kakr.ai',
  SITEMAP_URL: 'https://kakr.ai/sitemap.xml',
  ROBOTS_URL: 'https://kakr.ai/robots.txt'
}

// Schema.org type mappings
export const SCHEMA_TYPES = {
  ORGANIZATION: 'Organization',
  WEBSITE: 'WebSite',
  SERVICE: 'Service',
  BREADCRUMB: 'BreadcrumbList',
  ARTICLE: 'Article',
  PRODUCT: 'Product',
  LOCAL_BUSINESS: 'LocalBusiness',
  CONTACT_POINT: 'ContactPoint'
}

// Utility functions for SEO optimization
export function sanitizeTitle(title: string): string {
  return title
    .replace(/[<>]/g, '') // Remove HTML brackets
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim()
}

export function sanitizeDescription(description: string): string {
  return description
    .replace(/[<>]/g, '') // Remove HTML brackets
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .trim()
}

export function generateCanonicalUrl(path: string, baseUrl: string = URL_CONFIG.BASE_URL): string {
  // Remove trailing slash and ensure proper URL format
  const cleanPath = path.replace(/\/$/, '') || '/'
  return `${baseUrl}${cleanPath}`
}

export function extractKeywords(text: string, maxKeywords: number = 10): string[] {
  // Simple keyword extraction - can be enhanced with more sophisticated algorithms
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3)

  // Remove duplicates and return top keywords
  const uniqueWords = [...new Set(words)]
  return uniqueWords.slice(0, maxKeywords)
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text

  // Find the last space before the limit to avoid cutting words
  const truncated = text.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')

  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...'
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function formatImageUrl(imageUrl: string, baseUrl: string = URL_CONFIG.BASE_URL): string {
  if (isValidUrl(imageUrl)) {
    return imageUrl
  }

  // Handle relative URLs
  if (imageUrl.startsWith('/')) {
    return `${baseUrl}${imageUrl}`
  }

  return `${baseUrl}/${imageUrl}`
}

// Page type detection utilities
export function getPageType(path: string): string {
  if (path === '/' || path === '') return 'homepage'
  if (path.includes('/blog/') || path.includes('/article/')) return 'article'
  if (path.includes('/product/') || path.includes('/service/')) return 'service'
  if (path.includes('/industry/')) return 'industry'
  if (path.includes('/contact')) return 'contact'
  if (path.includes('/about')) return 'about'

  return 'website'
}

export function getSEOConfigByPageType(pageType: string): any {
  switch (pageType) {
    case 'homepage':
      return SEO_DEFAULTS.HOMEPAGE
    case 'about':
      return SEO_DEFAULTS.ABOUT
    case 'contact':
      return SEO_DEFAULTS.CONTACT
    case 'service':
      return SEO_DEFAULTS.SERVICES
    case 'industry':
      return SEO_DEFAULTS.INDUSTRY
    default:
      return SEO_DEFAULTS.HOMEPAGE
  }
}

// All configurations and utilities are already exported above
