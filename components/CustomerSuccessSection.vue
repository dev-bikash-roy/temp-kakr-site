<template>
  <section class="bg-slate-50 section-py dark:bg-slate-800/50 lg:section-py">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Customer Success
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
          See how organizations like yours are achieving results with Kakr Labs solutions.
        </p>
      </div>
      
      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <slot></slot>
      </div>
      
      <div v-if="showDisclaimer" class="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
        Replace with real testimonials as available.
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  showDisclaimer: {
    type: Boolean,
    default: true
  }
})
</script>
