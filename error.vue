<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden">
    <!-- Background styling similar to index.vue hero -->
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-emerald-50/30"></div>
        <div class="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-100/20 blur-[100px] rounded-full"></div>
        <div class="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-50/20 blur-[100px] rounded-full"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <!-- Logo or Icon -->
        <div class="mb-8">
            <div class="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
               <span class="text-4xl">⚠️</span>
            </div>
        </div>

        <h1 class="text-6xl font-bold text-slate-900 mb-4 tracking-tight">
          {{ error?.statusCode === 404 ? '404' : 'Error' }}
        </h1>

        <h2 class="text-2xl font-semibold text-slate-800 mb-6">
          {{ errorMessage }}
        </h2>

        <p class="text-slate-600 text-lg mb-10 leading-relaxed">
           {{ errorDescription }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button @click="handleError" class="btn-primary-mint w-full sm:w-auto min-w-[160px]">
            Return Home
          </button>
          <a href="/contact" class="btn-secondary-mint w-full sm:w-auto min-w-[160px] text-center">
            Contact Support
          </a>
        </div>
    </div>
    
    <!-- Tech/Footer info -->
    <div class="absolute bottom-8 text-center w-full text-slate-400 text-sm">
      <p>&copy; {{ new Date().getFullYear() }} Kakr Labs. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  error: Object
})

const handleError = () => {
  clearError({ redirect: '/' })
}

const errorMessage = computed(() => {
  if (props.error?.statusCode === 404) return 'Page Not Found'
  if (props.error?.statusCode === 499) return 'Connection Closed'
  return 'Something went wrong'
})

const errorDescription = computed(() => {
  if (props.error?.statusCode === 404) {
      return "The page you're looking for doesn't exist or has been moved. Check the URL or return to the homepage."
  }
  if (props.error?.statusCode === 499) {
      return "The request was closed before it could be completed. This can happen due to slow connections or timeouts. Please try again."
  }
  return "An unexpected error occurred. Our team has been notified. Please try again later or contact support if the problem persists."
})

// Force static title to avoid "499 - ..." in search results
useHead({
  title: computed(() => {
      if (props.error?.statusCode === 404) return 'Page Not Found | Kakr Labs'
      return 'Error | Kakr Labs'
  }),
  meta: [
      { name: 'robots', content: 'noindex, follow' } // Don't index error pages
  ]
})
</script>

<style scoped>
.btn-primary-mint {
  @apply bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all duration-200 px-6 py-3 cursor-pointer;
}
.btn-secondary-mint {
  @apply bg-white text-slate-900 font-bold border border-slate-200 rounded-lg hover:bg-slate-50 transition-all duration-200 px-6 py-3 cursor-pointer;
}
</style>
