import { defineEventHandler, getRequestHeader, getCookie, sendRedirect } from 'h3'

// Map Country Codes (Alpha-2) to Locales
const COUNTRY_TO_LOCALE: Record<string, string> = {
    // German (DACH)
    'DE': 'de', 'AT': 'de', 'CH': 'de', 'LI': 'de',

    // Japanese
    'JP': 'ja',

    // Spanish (Spain + Latin America)
    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es',
    'VE': 'es', 'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es',
    'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es',
    'NI': 'es', 'CR': 'es', 'PA': 'es', 'UY': 'es',

    // Arabic (Middle East / Gulf)
    'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'QA': 'ar', 'KW': 'ar',
    'OM': 'ar', 'BH': 'ar', 'LB': 'ar', 'JO': 'ar', 'IQ': 'ar'
}

export default defineEventHandler((event) => {
    const reqUrl = event.node.req.url

    // Only redirect from the root path '/' to avoid loops or interfering with deep links
    if (reqUrl !== '/') {
        return
    }

    // 1. Priority: User Preference (Cookie)
    // If the user has already selected a language (cookie exists), respect it and do nothing.
    const i18nCookie = getCookie(event, 'i18n_redirected')
    if (i18nCookie) {
        return
    }

    // 2. Priority: IP Geolocation (Vercel Header)
    const countryCode = getRequestHeader(event, 'x-vercel-ip-country')

    if (countryCode) {
        const targetLocale = COUNTRY_TO_LOCALE[countryCode.toUpperCase()]

        if (targetLocale) {
            // Temporary redirect (302) to allow for future changes
            return sendRedirect(event, `/${targetLocale}`, 302)
        }
    }
})
