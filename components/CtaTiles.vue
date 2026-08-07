<!-- components/CtaTiles.vue -->
<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="border-t border-neutral-200 dark:border-neutral-800 my-6"></div>

    <div class="grid gap-4 sm:gap-6 md:grid-cols-2">
      <a v-for="(t, i) in items"
        :key="t.to"
        :to="t.to"
        class="group relative overflow-hidden rounded-lg sm:rounded-xl border transition
               focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
               active:scale-[.995]
               dark:focus-visible:ring-sky-400 focus-visible:ring-sky-500"
        :class="[ i === 0 ? lightTileClass : darkTileClass ]"
      >
        <div class="p-6 sm:p-8">
          <h3 class="text-2xl sm:text-4xl font-semibold tracking-tight">
            {{ t.label }}
          </h3>
        </div>

        <!-- Arrow -->
        <span
          class="absolute right-5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center
                 rounded-md text-xl sm:text-2xl transition-transform group-hover:translate-x-1"
          :class="i === 0 ? 'text-neutral-900 dark:text-neutral-200' : 'text-white/90'"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-[1.2em] w-[1.2em]">
            <path d="M5 12h13m-4-4 4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>

        <!-- Subtle sheen on dark tile -->
        <div
          v-if="i === 1"
          class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-[.07] transition
                 bg-gradient-to-r from-white to-transparent"
        />
      </a>
    </div>

    <div class="border-b border-neutral-200 dark:border-neutral-800 my-6"></div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import { computed } from 'vue'

const { locale } = useI18n()

// Hardcoded translations
const translations = computed(() => {
  const lang = locale.value
  
  const t = {
    'en': {
      requestDemo: 'Request a Demo',
      startBuilding: 'Start Building'
    },
    'de': {
      requestDemo: 'Demo anfordern',
      startBuilding: 'Mit dem Aufbau beginnen'
    },
    'es': {
      requestDemo: 'Solicitar una Demo',
      startBuilding: 'Comenzar a Construir'
    },
    'ja': {
      requestDemo: 'デモをリクエスト',
      startBuilding: '構築を開始'
    },
    'ar': {
      requestDemo: 'طلب عرض توضيحي',
      startBuilding: 'ابدأ البناء'
    }
  }
  
  return t[lang as keyof typeof t] || t['en']
})

const items = computed(() => [
  { label: translations.value.requestDemo, to: '/contact' },
  { label: translations.value.startBuilding, to: '/pricing' }
])

// Keep long class strings here (no ternary soup in the template)
const lightTileClass =
  'bg-neutral-200/70 border-neutral-300 hover:bg-neutral-200 ' +
  'dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700'

const darkTileClass =
  'bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800 ' +
  'dark:bg-neutral-900 dark:hover:bg-neutral-800'
</script>
