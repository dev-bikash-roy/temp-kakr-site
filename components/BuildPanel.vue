<template>
  <!-- Full-width light background like the reference -->
  <section class="w-full bg-neutral-100 py-14 sm:section-py">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-6 lg:grid-cols-2">
        <!-- Left: video card -->
        <figure
          class="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
        >
          <video
            class="w-full h-full object-cover"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
          >
            <source src="/kakrlabs-banner-img.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>

        <!-- Right: content card -->
        <div
          class="rounded-xl border border-neutral-200 bg-white shadow-sm p-8 md:p-12
                 flex items-center justify-center text-center"
        >
          <div class="max-w-2xl">
            <!-- Big, visible heading -->
            <h2
              class="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-neutral-900"
            >
              {{ title }}
            </h2>

            <p class="mt-6 text-lg text-neutral-700">
              {{ description }}
            </p>

            <a :href="ctaHref"
              class="inline-block mt-8 rounded-md border px-5 py-2 text-sm font-medium
                     border-neutral-400 text-neutral-800 hover:bg-neutral-100"
            >
              {{ ctaLabel }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import { computed } from 'vue'

const { locale } = useI18n()

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}>(), {
  ctaHref: '/kakr-explained'
})

// Hardcoded translations
const translations = computed(() => {
  const lang = locale.value
  
  const t = {
    'en': {
      title: 'Build on Litecoin',
      description: 'Create powerful blockchain applications with our comprehensive developer tools and APIs.',
      ctaLabel: 'Learn More'
    },
    'de': {
      title: 'Auf Litecoin aufbauen',
      description: 'Erstellen Sie leistungsstarke Blockchain-Anwendungen mit unseren umfassenden Entwicklertools und APIs.',
      ctaLabel: 'Mehr erfahren'
    },
    'es': {
      title: 'Construir en Litecoin',
      description: 'Crea potentes aplicaciones blockchain con nuestras herramientas y APIs integrales para desarrolladores.',
      ctaLabel: 'Saber más'
    },
    'ja': {
      title: 'Litecoin上で構築',
      description: '包括的な開発者ツールとAPIで強力なブロックチェーンアプリケーションを作成します。',
      ctaLabel: '詳細を見る'
    },
    'ar': {
      title: 'البناء على Litecoin',
      description: 'أنشئ تطبيقات blockchain قوية باستخدام أدوات المطورين وواجهات برمجة التطبيقات الشاملة لدينا.',
      ctaLabel: 'اعرف المزيد'
    }
  }
  
  return t[lang as keyof typeof t] || t['en']
})

const title = computed(() => props.title || translations.value.title)
const description = computed(() => props.description || translations.value.description)
const ctaLabel = computed(() => props.ctaLabel || translations.value.ctaLabel)
</script>
