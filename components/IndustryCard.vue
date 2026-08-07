<template>
  <article
    :class="[
      'group rounded-xl border bg-white/90 dark:bg-neutral-900/70',
      'border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition',
      spanFull ? 'md:col-span-2' : ''
    ]"
  >
    <figure class="overflow-hidden rounded-t-xl">
      <img
        :src="image"
        :alt="title"
        class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
    </figure>

    <div class="p-6">
      <div class="mb-3 flex items-center gap-3">
        <span class="text-2xl select-none">{{ icon }}</span>
        <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
          {{ title }}
        </h3>
      </div>

      <p class="text-neutral-700 dark:text-neutral-300 mb-4">
        {{ description }}
      </p>

      <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 mb-6">
        <li v-for="(f, idx) in features" :key="idx" class="flex gap-2">
          <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500"></span>
          <span>{{ f }}</span>
        </li>
      </ul>

      <a :href="ctaHref || '#'"
        class="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white hover:opacity-80"
      >
        {{ cta }}
        <span class="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon: string
  title: string
  description: string
  features: string[]
  cta: string
  ctaHref?: string
  image: string
  spanFull?: boolean
}>(), {
  spanFull: false
})
</script>
