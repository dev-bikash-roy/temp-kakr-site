<template>
  <div class="testimonial-card rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800/50">
    <div class="mb-4 flex items-center">
      <div v-if="avatarUrl" class="mr-4 h-12 w-12 overflow-hidden rounded-full">
        <img :src="avatarUrl" :alt="name" class="h-full w-full object-cover" />
      </div>
      <div v-else class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-lg font-bold text-white">
        {{ initials }}
      </div>
      <div>
        <div class="text-base font-semibold text-slate-900 dark:text-white">{{ name }}</div>
        <div class="text-sm text-slate-600 dark:text-slate-400">{{ role }}</div>
      </div>
    </div>
    <div class="relative">
      <svg class="absolute -left-2 -top-2 h-8 w-8 text-emerald-500/20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p class="text-slate-600 dark:text-slate-300">{{ quote }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    default: ''
  }
})

const initials = computed(() => {
  return props.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()
})
</script>
