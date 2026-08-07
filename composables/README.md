# SEO Composables Documentation

This directory contains comprehensive SEO management utilities for the Kakr Labs website, built on Nuxt.js.

## Files Overview

- **`useSEO.ts`** - Main SEO composable with comprehensive SEO management functions
- **`seoUtils.ts`** - SEO constants, configurations, and utility functions
- **`examples/seoExamples.ts`** - Usage examples for different page types
- **`../types/seo.ts`** - TypeScript type definitions for SEO system

## Quick Start

### Basic Usage

```typescript
// In any Vue component or page
<script setup>
import { useSEO } from '~/composables/useSEO'

const { setSEO, generateStructuredData } = useSEO()

// Set basic SEO for the page
setSEO({
  title: 'My Page Title - Kakr Labs',
  description: 'Description of my page content for search engines',
  keywords: ['blockchain', 'Web3', 'enterprise'],
  type: 'website'
})
</script>
```

### Advanced Usage with Structured Data

```typescript
<script setup>
import { useSEO } from '~/composables/useSEO'

const { setSEO, generateStructuredData } = useSEO()

setSEO({
  title: 'Financial Services - Kakr Labs',
  description: 'Enterprise blockchain solutions for financial services',
  keywords: ['fintech', 'blockchain', 'financial services'],
  type: 'service',
  structuredData: [
    generateStructuredData('organization'),
    generateStructuredData('service', {
      name: 'Financial Services Solutions',
      description: 'Enterprise blockchain infrastructure for financial institutions'
    })
  ]
})
</script>
```

## Core Functions

### `setSEO(config: SEOConfig)`

Sets comprehensive SEO configuration for the current page including:
- Meta tags (title, description, keywords)
- Open Graph tags for social media
- Twitter Card tags
- Canonical URLs
- Structured data (JSON-LD)

### `generateStructuredData(type: string, data?: any)`

Generates structured data schemas for different content types:
- `'organization'` - Company/organization schema
- `'website'` - Website schema with search functionality
- `'service'` - Service/product schema
- `'breadcrumb'` - Breadcrumb navigation schema

### Validation Functions

- `validateTitle(title: string)` - Validates title length (30-60 characters)
- `validateDescription(description: string)` - Validates description length (120-160 characters)
- `validateImage(imageUrl: string)` - Validates image URL format

## Pre-configured SEO Templates

### Default Configurations

```typescript
import { SEO_DEFAULTS } from '~/composables/seoUtils'

// Available templates:
SEO_DEFAULTS.HOMEPAGE
SEO_DEFAULTS.ABOUT
SEO_DEFAULTS.CONTACT
SEO_DEFAULTS.SERVICES
SEO_DEFAULTS.INDUSTRY
```

### Industry-Specific Configurations

```typescript
import { INDUSTRY_SEO } from '~/composables/seoUtils'

// Available industry templates:
INDUSTRY_SEO.FINANCIAL_SERVICES
INDUSTRY_SEO.HEALTHCARE
INDUSTRY_SEO.GOVERNMENT
INDUSTRY_SEO.RETAIL
INDUSTRY_SEO.TECHNOLOGY
```

### Service-Specific Configurations

```typescript
import { SERVICE_SEO } from '~/composables/seoUtils'

// Available service templates:
SERVICE_SEO.BAAS
SERVICE_SEO.API
SERVICE_SEO.SDK
SERVICE_SEO.TWO_FA
```

## Page Type Examples

### Homepage

```typescript
import { setupHomepageSEO } from '~/composables/examples/seoExamples'

// In pages/index.vue
onMounted(() => {
  setupHomepageSEO()
})
```

### Service Pages

```typescript
import { setupServicePageSEO } from '~/composables/examples/seoExamples'

// In pages/services/[service].vue
onMounted(() => {
  setupServicePageSEO('Blockchain API', 'RESTful APIs for blockchain integration')
})
```

### Industry Pages

```typescript
import { setupIndustryPageSEO } from '~/composables/examples/seoExamples'

// In pages/industry/financial-services.vue
onMounted(() => {
  setupIndustryPageSEO('financial-services')
})
```

### Blog Articles

```typescript
import { setupArticleSEO } from '~/composables/examples/seoExamples'

// In pages/blog/[slug].vue
onMounted(() => {
  setupArticleSEO(
    'The Future of Web3 Infrastructure',
    'Exploring the next generation of blockchain infrastructure solutions',
    '2024-01-15',
    'Kakr Labs Team'
  )
})
```

## Structured Data Schemas

The system automatically generates Schema.org compliant JSON-LD markup:

### Organization Schema
- Company information
- Contact details
- Social media profiles
- Logo and branding

### Website Schema
- Site information
- Search functionality
- Navigation structure

### Service Schema
- Service descriptions
- Provider information
- Pricing (when applicable)

### Breadcrumb Schema
- Navigation hierarchy
- Page relationships

## Best Practices

### Title Tags
- Keep between 30-60 characters
- Include primary keyword
- End with brand name
- Be descriptive and unique

### Meta Descriptions
- Keep between 120-160 characters
- Include call-to-action
- Summarize page content
- Include relevant keywords naturally

### Keywords
- Use 3-7 relevant keywords
- Focus on user intent
- Include brand terms
- Avoid keyword stuffing

### Images
- Use descriptive alt attributes
- Optimize for social sharing (1200x630px for OG images)
- Ensure fast loading times
- Use WebP format when possible

### Structured Data
- Always include Organization schema
- Add relevant content-specific schemas
- Validate using Google's Rich Results Test
- Keep data accurate and up-to-date

## Validation and Testing

### Development Validation
The system includes built-in validation that warns about:
- Title length issues
- Description length problems
- Invalid image URLs
- Missing required fields

### Testing Tools
- Google Rich Results Test
- Facebook Sharing Debugger
- Twitter Card Validator
- Schema.org Validator

### Monitoring
- Google Search Console integration
- Core Web Vitals tracking
- Search performance monitoring
- Rich results appearance tracking

## Configuration

### Global Settings
Global SEO settings are configured in `nuxt.config.ts` and can be overridden per page.

### Environment Variables
Set these in your `.env` file:
```
NUXT_PUBLIC_SITE_URL=https://www.kakrlabs.com
NUXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Social Media
Configure social media handles in `seoUtils.ts`:
```typescript
export const SOCIAL_CONFIG = {
  TWITTER: {
    site: '@kakrlabs',
    creator: '@kakrlabs'
  }
}
```

## Troubleshooting

### Common Issues

1. **Missing structured data**: Ensure you're calling `generateStructuredData()` and including it in `structuredData` array
2. **Invalid meta tags**: Check validation functions and ensure required fields are provided
3. **Social sharing not working**: Verify Open Graph image URLs are absolute and accessible
4. **Search Console errors**: Use validation functions and test with Google's tools

### Debug Mode
Enable debug logging by setting:
```typescript
// In development
if (process.dev) {
  console.log('SEO Config:', seoConfig)
}
```

## Migration Guide

If migrating from manual SEO implementation:

1. Replace manual `useHead()` calls with `setSEO()`
2. Convert existing meta tags to `SEOConfig` objects
3. Add structured data using `generateStructuredData()`
4. Use pre-configured templates where applicable
5. Validate all pages using the built-in validation functions

## Performance Considerations

- Structured data is generated at build time when possible
- Images are optimized and served from CDN
- Meta tags are minimal and focused
- Validation only runs in development mode
- Caching is implemented for repeated schema generation

## Support

For questions or issues with the SEO system:
1. Check this documentation
2. Review the examples in `examples/seoExamples.ts`
3. Validate your implementation using Google's tools
4. Test social sharing with platform debuggers