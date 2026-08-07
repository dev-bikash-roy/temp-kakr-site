export default defineEventHandler(async (event) => {
  const url = event.node.req.url || ''
  
  console.log('[Geo-Redirect] Processing URL:', url)
  
  // Skip if already on a localized path or if it's an API/asset request
  if (
    url.startsWith('/de') || 
    url.startsWith('/es') || 
    url.startsWith('/ja') || 
    url.startsWith('/ar') ||
    url.startsWith('/api/') ||
    url.startsWith('/_nuxt') ||
    url.startsWith('/api-hub') ||
    url.startsWith('/test-geo') ||
    url.includes('.')
  ) {
    console.log('[Geo-Redirect] Skipping - already localized or asset')
    return
  }

  // Check if user has already been geo-redirected (using a specific cookie)
  const cookies = parseCookies(event)
  console.log('[Geo-Redirect] Cookies:', cookies)
  
  if (cookies.geo_redirected === 'true') {
    console.log('[Geo-Redirect] Already geo-redirected, skipping')
    return
  }

  // Get country from various headers (Cloudflare, Vercel, etc.)
  const headers = event.node.req.headers
  let country: string | null = 
    (headers['cf-ipcountry'] as string) || // Cloudflare
    (headers['x-vercel-ip-country'] as string) || // Vercel
    (headers['x-country-code'] as string) || // Generic
    null

  // For local development: try to detect country from public IP using a free API
  if (!country && process.env.NODE_ENV === 'development') {
    try {
      // In local dev, just fetch the public IP directly
      const response = await $fetch<{ countryCode: string }>('http://ip-api.com/json/?fields=countryCode', {
        timeout: 3000 // 3 second timeout
      })
      country = response.countryCode
      console.log(`[Geo-Redirect] Detected country from public IP: ${country}`)
    } catch (error) {
      // Silently fail - geo-redirect is optional
      console.log('[Geo-Redirect] Could not detect country from IP:', error)
    }
  }

  if (!country) {
    console.log('[Geo-Redirect] No country detected')
    return
  }

  // Map countries to locales
  const countryToLocale: Record<string, string> = {
    'JP': 'ja', // Japan
    'DE': 'de', // Germany
    'AT': 'de', // Austria
    'CH': 'de', // Switzerland
    'ES': 'es', // Spain
    'MX': 'es', // Mexico
    'AR': 'es', // Argentina
    'CO': 'es', // Colombia
    'CL': 'es', // Chile
    'PE': 'es', // Peru
    'VE': 'es', // Venezuela
    'SA': 'ar', // Saudi Arabia
    'AE': 'ar', // UAE
    'EG': 'ar', // Egypt
    'JO': 'ar', // Jordan
    'KW': 'ar', // Kuwait
    'QA': 'ar', // Qatar
    'BH': 'ar', // Bahrain
    'OM': 'ar', // Oman
    'LB': 'ar', // Lebanon
    'IQ': 'ar', // Iraq
    'SY': 'ar', // Syria
    'YE': 'ar', // Yemen
  }

  const targetLocale = countryToLocale[country]
  
  if (targetLocale && url === '/') {
    console.log(`[Geo-Redirect] Redirecting to /${targetLocale} based on country: ${country}`)
    
    // Set a cookie to prevent future geo-redirects
    setCookie(event, 'geo_redirected', 'true', {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
      sameSite: 'lax'
    })
    
    // Redirect to localized version
    return sendRedirect(event, `/${targetLocale}`, 302)
  }
  
  console.log('[Geo-Redirect] No redirect needed')
})
