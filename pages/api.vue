<script setup>
// This file is intentionally empty.
// The API Hub page has been moved to /api-hub to avoid conflict with Nuxt's reserved /api server route.
import { navigateTo } from '#app'
navigateTo('/api-hub', { redirectCode: 301 })
</script>
