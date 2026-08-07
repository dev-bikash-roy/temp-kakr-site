// SEO Type Definitions

// Base SEO Configuration
export interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article' | 'product' | 'service'
  structuredData?: Record<string, any>[]
  canonical?: string
  noindex?: boolean
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

// Meta Tag Types
export interface MetaTag {
  name?: string
  property?: string
  content: string
  httpEquiv?: string
}

export interface LinkTag {
  rel: string
  href: string
  type?: string
  sizes?: string
  crossorigin?: string
}

export interface ScriptTag {
  type: string
  innerHTML: string
  src?: string
  async?: boolean
  defer?: boolean
}

// Open Graph Types
export interface OpenGraphConfig {
  title: string
  description: string
  image: string
  type: string
  url: string
  siteName?: string
  locale?: string
  article?: OpenGraphArticle
  profile?: OpenGraphProfile
}

export interface OpenGraphArticle {
  publishedTime?: string
  modifiedTime?: string
  expirationTime?: string
  author?: string[]
  section?: string
  tag?: string[]
}

export interface OpenGraphProfile {
  firstName?: string
  lastName?: string
  username?: string
  gender?: string
}

// Twitter Card Types
export interface TwitterCardConfig {
  card: 'summary' | 'summary_large_image' | 'app' | 'player'
  title: string
  description: string
  image: string
  site?: string
  creator?: string
  app?: TwitterApp
  player?: TwitterPlayer
}

export interface TwitterApp {
  name: {
    iphone?: string
    ipad?: string
    googleplay?: string
  }
  id: {
    iphone?: string
    ipad?: string
    googleplay?: string
  }
  url: {
    iphone?: string
    ipad?: string
    googleplay?: string
  }
}

export interface TwitterPlayer {
  url: string
  width: number
  height: number
  stream?: string
}

// Schema.org Types
export interface BaseSchema {
  '@context': 'https://schema.org'
  '@type': string
}

export interface OrganizationSchema extends BaseSchema {
  '@type': 'Organization'
  name: string
  url: string
  logo?: string
  description?: string
  sameAs?: string[]
  contactPoint?: ContactPoint | ContactPoint[]
  address?: PostalAddress
  telephone?: string
  email?: string
  foundingDate?: string
  founder?: Person | Person[]
  numberOfEmployees?: number
  industry?: string
}

export interface Person extends BaseSchema {
  '@type': 'Person'
  name: string
  jobTitle?: string
  url?: string
  image?: string
  sameAs?: string[]
  worksFor?: OrganizationSchema
}

export interface ContactPoint {
  '@type': 'ContactPoint'
  contactType: string
  url?: string
  telephone?: string
  email?: string
  areaServed?: string
  availableLanguage?: string[]
  hoursAvailable?: OpeningHoursSpecification[]
}

export interface PostalAddress extends BaseSchema {
  '@type': 'PostalAddress'
  streetAddress?: string
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
  addressCountry?: string
}

export interface OpeningHoursSpecification extends BaseSchema {
  '@type': 'OpeningHoursSpecification'
  dayOfWeek: string[]
  opens: string
  closes: string
}

export interface WebsiteSchema extends BaseSchema {
  '@type': 'WebSite'
  name: string
  url: string
  description?: string
  publisher?: OrganizationSchema
  potentialAction?: SearchAction
  inLanguage?: string
}

export interface SearchAction {
  '@type': 'SearchAction'
  target: string
  'query-input': string
}

export interface ServiceSchema extends BaseSchema {
  '@type': 'Service'
  name: string
  description: string
  provider: OrganizationSchema
  serviceType?: string
  areaServed?: string | string[]
  offers?: Offer | Offer[]
  category?: string
  audience?: Audience
}

export interface Offer extends BaseSchema {
  '@type': 'Offer'
  name?: string
  description?: string
  price?: string
  priceCurrency?: string
  availability?: string
  validFrom?: string
  validThrough?: string
  seller?: OrganizationSchema
}

export interface Audience extends BaseSchema {
  '@type': 'Audience'
  audienceType?: string
  name?: string
}

export interface BreadcrumbSchema extends BaseSchema {
  '@type': 'BreadcrumbList'
  itemListElement: BreadcrumbItem[]
}

export interface BreadcrumbItem {
  '@type': 'ListItem'
  position: number
  name: string
  item: string
}

export interface ArticleSchema extends BaseSchema {
  '@type': 'Article'
  headline: string
  description?: string
  image?: string | string[]
  author: Person | Person[]
  publisher: OrganizationSchema
  datePublished: string
  dateModified?: string
  mainEntityOfPage?: string
  articleSection?: string
  wordCount?: number
}

export interface ProductSchema extends BaseSchema {
  '@type': 'Product'
  name: string
  description: string
  image?: string | string[]
  brand?: OrganizationSchema
  manufacturer?: OrganizationSchema
  offers?: Offer | Offer[]
  aggregateRating?: AggregateRating
  review?: Review | Review[]
}

export interface AggregateRating extends BaseSchema {
  '@type': 'AggregateRating'
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}

export interface Review extends BaseSchema {
  '@type': 'Review'
  reviewRating: Rating
  author: Person
  datePublished?: string
  reviewBody?: string
}

export interface Rating extends BaseSchema {
  '@type': 'Rating'
  ratingValue: number
  bestRating?: number
  worstRating?: number
}

// Validation Types
export interface ValidationResult {
  isValid: boolean
  message?: string
  warnings?: string[]
}

export interface SEOValidation {
  title: ValidationResult
  description: ValidationResult
  image: ValidationResult
  keywords: ValidationResult
  structuredData: ValidationResult
  overall: ValidationResult
}

// Page Type Definitions
export type PageType = 
  | 'homepage'
  | 'about'
  | 'contact'
  | 'service'
  | 'product'
  | 'article'
  | 'industry'
  | 'blog'
  | 'documentation'
  | 'pricing'
  | 'legal'

// Industry Type Definitions
export type IndustryType =
  | 'financial-services'
  | 'healthcare'
  | 'government'
  | 'retail'
  | 'technology'
  | 'telecom'
  | 'education'
  | 'manufacturing'

// Service Type Definitions
export type ServiceType =
  | 'baas'
  | 'api'
  | 'sdk'
  | 'two-fa'
  | 'infrastructure'
  | 'consulting'
  | 'support'

// SEO Configuration by Context
export interface ContextualSEO {
  pageType: PageType
  industryType?: IndustryType
  serviceType?: ServiceType
  config: SEOConfig
}

// Analytics and Tracking Types
export interface AnalyticsConfig {
  googleAnalytics?: {
    measurementId: string
    config?: Record<string, any>
  }
  googleTagManager?: {
    containerId: string
  }
  facebookPixel?: {
    pixelId: string
  }
  linkedInInsight?: {
    partnerId: string
  }
}

// Search Console Types
export interface SearchConsoleConfig {
  siteUrl: string
  verificationMeta?: string
  verificationFile?: string
}

// Sitemap Types
export interface SitemapEntry {
  url: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  images?: SitemapImage[]
}

export interface SitemapImage {
  url: string
  caption?: string
  title?: string
  license?: string
}

// Robots.txt Types
export interface RobotsConfig {
  userAgent: string
  allow?: string[]
  disallow?: string[]
  crawlDelay?: number
  sitemap?: string[]
}

// All types are already exported above with their interface declarations