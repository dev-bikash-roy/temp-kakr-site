<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-6">Geo-Location Test Page</h1>
    
    <div class="bg-gray-100 p-6 rounded-lg mb-6">
      <h2 class="text-xl font-semibold mb-4">Current Locale Information</h2>
      <p><strong>Current Locale:</strong> {{ locale }}</p>
      <p><strong>Available Locales:</strong> {{ locales.map(l => l.code).join(', ') }}</p>
      <p><strong>Cookie Value:</strong> {{ cookieValue }}</p>
    </div>

    <div class="bg-blue-50 p-6 rounded-lg mb-6">
      <h2 class="text-xl font-semibold mb-4">Detected Headers (Server-Side)</h2>
      <pre class="bg-white dark:bg-dark-900 p-4 rounded overflow-auto text-sm">{{ JSON.stringify(headers, null, 2) }}</pre>
    </div>

    <div class="bg-yellow-50 p-6 rounded-lg mb-6">
      <h2 class="text-xl font-semibold mb-4">Your IP Information</h2>
      <div v-if="ipInfo">
        <p><strong>IP Address:</strong> {{ ipInfo.query }}</p>
        <p><strong>Country:</strong> {{ ipInfo.country }} ({{ ipInfo.countryCode }})</p>
        <p><strong>City:</strong> {{ ipInfo.city }}</p>
        <p><strong>ISP:</strong> {{ ipInfo.isp }}</p>
        <p class="mt-2 text-sm text-gray-600">This shows your actual public IP (VPN should change this)</p>
      </div>
      <div v-else class="text-gray-500">Loading IP information...</div>
    </div>

    <div class="bg-red-50 p-6 rounded-lg mb-6">
      <h2 class="text-xl font-semibold mb-4">Manual Testing</h2>
      <p class="mb-4">Clear cookies and click a button to simulate geo-redirect:</p>
      <div class="flex gap-2 flex-wrap mb-4">
        <button @click="clearAndRedirect('JP')" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Test Japan (JP) → /ja
        </button>
        <button @click="clearAndRedirect('DE')" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Test Germany (DE) → /de
        </button>
        <button @click="clearAndRedirect('ES')" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Test Spain (ES) → /es
        </button>
        <button @click="clearAndRedirect('SA')" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Test Saudi Arabia (SA) → /ar
        </button>
      </div>
      <button @click="clearCookies" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
        Clear Cookies Only
      </button>
    </div>

    <div class="bg-green-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Testing Instructions</h2>
      <ol class="list-decimal list-inside space-y-2">
        <li>Clear your cookies (or use incognito mode)</li>
        <li>Connect to a VPN (Japan, Germany, Spain, or Saudi Arabia)</li>
        <li>Visit the homepage: <code class="bg-white dark:bg-dark-900 px-2 py-1 rounded">{{ siteUrl }}</code></li>
        <li>You should be automatically redirected to the appropriate language version</li>
        <li><strong>Note:</strong> In development, the middleware will try to detect your country from your public IP</li>
      </ol>
      
      <div class="mt-4">
        <p class="font-semibold mb-2">Quick Links:</p>
        <div class="flex gap-2 flex-wrap">
          <a href="/" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Home (EN)</a>
          <a href="/ja" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">日本語</a>
          <a href="/de" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Deutsch</a>
          <a href="/es" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Español</a>
          <a href="/ar" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">العربية</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

// Get cookie value
const cookieValue = useCookie('i18n_redirected').value || 'Not set'

// Server-side headers detection
const headers = await useRequestHeaders(['cf-ipcountry', 'x-vercel-ip-country', 'x-country-code', 'x-forwarded-for', 'x-real-ip'])

// Get IP information
const ipInfo = ref(null)
onMounted(async () => {
  try {
    const response = await fetch('http://ip-api.com/json/?fields=status,message,country,countryCode,city,query,isp')
    ipInfo.value = await response.json()
  } catch (error) {
    console.error('Failed to fetch IP info:', error)
  }
})

const clearCookies = () => {
  // Clear both cookies
  document.cookie = 'i18n_redirected=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  document.cookie = 'geo_redirected=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  alert('Cookies cleared! Now visit the homepage to test geo-redirect.')
  window.location.reload()
}

const clearAndRedirect = async (countryCode: string) => {
  // Clear cookies
  document.cookie = 'i18n_redirected=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  document.cookie = 'geo_redirected=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  
  alert(`Cookies cleared. Now visit homepage with VPN set to ${countryCode}`)
  window.location.href = '/'
}
</script>
