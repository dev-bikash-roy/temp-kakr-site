<template>
  <div class="feature-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-800/50">
    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full" :class="iconBgClass">
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </slot>
    </div>
    <h3 class="mb-3 text-xl font-semibold text-slate-900 dark:text-white">{{ title }}</h3>
    <p class="mb-4 text-slate-600 dark:text-slate-300">{{ description }}</p>
    <ul v-if="features && features.length" class="mb-4 space-y-2">
      <li v-for="(feature, index) in features" :key="index" class="flex items-start">
        <svg class="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-sm text-slate-600 dark:text-slate-300">{{ feature }}</span>
      </li>
    </ul>
    <a v-if="linkText && linkUrl" :href="linkUrl" class="mt-2 inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">
      {{ linkText }}
      <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => []
  },
  linkText: {
    type: String,
    default: ''
  },
  linkUrl: {
    type: String,
    default: ''
  },
  iconBgClass: {
    type: String,
    default: 'bg-gradient-to-br from-emerald-500 to-teal-600'
  }
})
</script>
