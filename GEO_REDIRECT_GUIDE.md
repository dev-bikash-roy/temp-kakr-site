# Geo-Location Based Redirect Guide

## Overview
Your site now automatically redirects users to their appropriate language version based on their geographic location.

## How It Works

### 1. Server Middleware (`server/middleware/geo-redirect.ts`)
- Detects user's country from request headers
- Maps countries to appropriate locales (e.g., Japan → `/ja`)
- Only redirects on the root path (`/`)
- Respects the `i18n_redirected` cookie to avoid redirect loops

### 2. Supported Headers
The middleware checks multiple headers for maximum compatibility:
- `cf-ipcountry` - Cloudflare
- `x-vercel-ip-country` - Vercel
- `x-country-code` - Generic/other platforms

### 3. Country to Locale Mapping

| Locale | Countries |
|--------|-----------|
| **Japanese (ja)** | Japan (JP) |
| **German (de)** | Germany (DE), Austria (AT), Switzerland (CH) |
| **Spanish (es)** | Spain (ES), Mexico (MX), Argentina (AR), Colombia (CO), Chile (CL), Peru (PE), Venezuela (VE) |
| **Arabic (ar)** | Saudi Arabia (SA), UAE (AE), Egypt (EG), Jordan (JO), Kuwait (KW), Qatar (QA), Bahrain (BH), Oman (OM), Lebanon (LB), Iraq (IQ), Syria (SY), Yemen (YE) |
| **English (en)** | All other countries (default) |

## Testing with VPN

### Step 1: Clear Cookies
Before testing, clear your browser cookies or use incognito/private mode to ensure the redirect happens.

### Step 2: Connect to VPN
Connect your VPN to one of these countries:
- 🇯🇵 Japan → Should redirect to `/ja`
- 🇩🇪 Germany → Should redirect to `/de`
- 🇪🇸 Spain → Should redirect to `/es`
- 🇸🇦 Saudi Arabia → Should redirect to `/ar`

### Step 3: Visit Homepage
Navigate to: `https://www.kakr.ai/`

You should be automatically redirected to the appropriate language version.

### Step 4: Use Test Page
Visit `/test-geo` to see:
- Current locale
- Detected headers
- Cookie status
- Quick navigation links

## Local Development Testing

When testing locally, the geo-headers won't be present. To simulate:

1. Use browser extensions like "ModHeader" to add custom headers:
   - Header: `x-country-code`
   - Value: `JP` (or `DE`, `ES`, `SA`)

2. Or modify the middleware temporarily to force a country:
```typescript
const country = 'JP' // Force Japan for testing
```

## Deployment Platforms

### Vercel
✅ Works automatically - uses `x-vercel-ip-country` header

### Cloudflare
✅ Works automatically - uses `cf-ipcountry` header

### Other Platforms
May need to configure geo-location headers. Check your platform's documentation for:
- IP geolocation
- Country detection
- Custom header configuration

## Customization

### Add More Countries
Edit `server/middleware/geo-redirect.ts`:

```typescript
const countryToLocale: Record<string, string> = {
  'JP': 'ja',
  'FR': 'fr', // Add French
  'IT': 'it', // Add Italian
  // ... add more
}
```

### Change Redirect Behavior
Modify the redirect logic:
- Change from 302 (temporary) to 301 (permanent)
- Redirect on all pages instead of just root
- Add exceptions for specific paths

### Disable Geo-Redirect
To temporarily disable, rename or delete:
```
server/middleware/geo-redirect.ts
```

## Troubleshooting

### Redirect Not Working
1. Check if cookies are enabled
2. Verify VPN is actually changing your IP location
3. Check browser console for errors
4. Visit `/test-geo` to see detected headers

### Stuck in Wrong Language
1. Clear cookies (especially `i18n_redirected`)
2. Use the language switcher in the header
3. Manually navigate to desired locale (e.g., `/ja`)

### Testing Locally
Local development won't have geo-headers. Deploy to staging or use header modification tools.

## Notes

- First-time visitors get redirected based on location
- Cookie prevents repeated redirects on subsequent visits
- Users can manually switch languages anytime
- Browser language detection still works as fallback
- Geo-redirect only happens on the root path (`/`)
