<template>
  <section class="bg-white section-py dark:bg-slate-900 lg:section-py">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Why Kakr Labs for {{ industry }}?
        </h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {{ description }}
        </p>
        <div class="mt-8">
          <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/kakrplatforminc1697572308188.pteri-node-offer?tab=overview" class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:shadow-emerald-800/30">
            Try 2FA API
          </a>
        </div>
      </div>
      
      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  industry: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
