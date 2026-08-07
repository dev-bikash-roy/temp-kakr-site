<template>
  <section class="section-py bg-dark-900 border-t border-slate-800">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto text-center mb-12" data-aos="fade-up">
         <!-- Title -->
         <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
           {{ content.title }}
         </h2>
         <p class="text-xl sm:text-2xl font-medium text-slate-300 mb-12 max-w-3xl mx-auto">
           AI systems act in the real world.<br/>
           Kakr secures those actions with cryptographically verifiable proof.
         </p>
      </div>

      <!-- Image (Below Title as requested) -->
      <div class="relative w-full" data-aos="fade-up" data-aos-delay="100">
        <LocalizedImage
          src="/energy-proof-3.png.png"
          alt="AI Energy and Proof Diagram"
          img-class="w-full h-auto mx-auto relative z-10"
          :locale-map="{
            ja: '/energy-proof-jp.webp',
            de: '/energy-proof-german.jpg',
            es: '/energy-proof-spanish.jpg',
            ar: '/energy-proof-arabic.jpg'
          }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const content = computed(() => {
  const translations = {
    en: { title: 'AI, Energy, and Proof' },
    de: { title: 'KI, Energie und Beweis' },
    es: { title: 'IA, Energía y Prueba' },
    ja: { title: 'AI、エネルギー、そして証明' }
  }
  return translations[locale.value] || translations.en
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
