<template>
  <section class="relative section-py sm:section-py overflow-hidden" style="background: radial-gradient(ellipse at 50% 0%, #0a1628 0%, #050d1a 60%, #020810 100%);">
    <!-- bg texture -->
    <div class="absolute inset-0 pointer-events-none" style="background-image: url('/hero-bg.svg'); background-size: cover; opacity: 0.04;"></div>
    <!-- cyan glows — hidden on mobile for perf -->
    <div class="hidden sm:block absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style="background: radial-gradient(ellipse, rgba(6,182,212,0.18) 0%, transparent 70%); filter: blur(80px);"></div>
    <div class="hidden sm:block absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none" style="background: radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, transparent 70%); filter: blur(80px);"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-14" data-aos="fade-up">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-5" style="background: linear-gradient(90deg, #22d3ee 0%, #4ade80 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          {{ content.title }}
        </h2>
        <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {{ content.description }}
        </p>
      </div>

      <!-- Main Panel -->
      <div class="main-panel rounded-3xl p-4 sm:p-10" data-aos="fade-up" data-aos-delay="100">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">

          <!-- Google Cloud — unified dark bg -->
          <a href="https://cloud.google.com/partners" target="_blank" rel="noopener" class="partner-tile group flex items-center justify-center p-3 sm:p-4 rounded-2xl min-h-[80px] sm:min-h-[110px]" style="background: #0d1117;">
            <img src="/google-partner-new-logo.jpg" alt="Google Cloud Partner" class="max-h-12 sm:max-h-20 max-w-[120px] sm:max-w-[180px] object-contain rounded-lg" loading="lazy" />
          </a>

          <!-- Gemini — unified dark bg -->
          <a href="https://gemini.google.com" target="_blank" rel="noopener" class="partner-tile group flex items-center justify-center p-3 sm:p-6 rounded-2xl min-h-[80px] sm:min-h-[110px]" style="background: #0d1117;">
            <img src="/gemini-partner.png" alt="Gemini" class="max-h-10 sm:max-h-14 max-w-[110px] sm:max-w-[160px] object-contain" loading="lazy" />
          </a>

          <!-- Microsoft for Startups — unified dark bg -->
          <a href="https://www.microsoft.com/startups" target="_blank" rel="noopener" class="partner-tile group flex items-center justify-center p-3 sm:p-6 rounded-2xl min-h-[80px] sm:min-h-[110px]" style="background: #0d1117;">
            <img src="/images/microsoft-startups.png" alt="Microsoft for Startups" class="max-h-10 sm:max-h-14 max-w-[110px] sm:max-w-[160px] object-contain" loading="lazy" />
          </a>

          <!-- Litecoin — unified dark bg -->
          <a href="https://litecoin.org" target="_blank" rel="noopener" class="partner-tile group flex items-center justify-center p-3 sm:p-6 rounded-2xl min-h-[80px] sm:min-h-[110px]" style="background: #0d1117;">
            <img src="/litecoin-ltc-logo.png" alt="Litecoin" class="h-10 w-10 sm:h-14 sm:w-14 object-contain" loading="lazy" />
          </a>

          <!-- IBM Partner Plus — unified dark bg -->
          <a href="https://www.ibm.com/partnerplus" target="_blank" rel="noopener" class="partner-tile group flex items-center justify-center p-3 sm:p-6 rounded-2xl min-h-[80px] sm:min-h-[110px] col-span-2 sm:col-span-1" style="background: #0d1117;">
            <img src="/images/ibm-partner-logo.png" alt="IBM Partner Plus" class="max-h-12 sm:max-h-20 max-w-[130px] sm:max-w-[180px] object-contain" loading="lazy" />
          </a>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '#imports'

const { locale } = useI18n()

const content = computed(() => {
  const t = {
    en: { title: 'Infrastructure and Technology Ecosystem', description: 'PTERI is developed using established cloud, security, and open infrastructure technologies.' },
    de: { title: 'Infrastruktur- und Technologie-Ökosystem', description: 'PTERI wird mithilfe etablierter Cloud-, Sicherheits- und offener Infrastrukturtechnologien entwickelt.' },
    es: { title: 'Ecosistema de Infraestructura y Tecnología', description: 'PTERI está desarrollado utilizando tecnologías establecidas de nube, seguridad e infraestructura abierta.' },
    ja: { title: 'インフラストラクチャと技術エコシステム', description: 'PTERIは、確立されたクラウド、セキュリティ、オープンインフラストラクチャ技術を使用して開発されています。' },
    ar: { title: 'نظام البيئة للبنية التحتية والتكنولوجيا', description: 'تم تطوير PTERI باستخدام تقنيات سحابية وأمنية وبنية تحتية مفتوحة راسخة.' }
  }
  return t[locale.value] || t.en
})

const cards = []

</script>

<style scoped>
.main-panel {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(6, 182, 212, 0.15);
  box-shadow: 0 0 60px rgba(6, 182, 212, 0.06), inset 0 1px 0 rgba(255,255,255,0.04);
}

.partner-tile,
.partner-tile-featured {
  border: 1px solid rgba(255, 255, 255, 0.10);
  transition: all 0.25s ease;
}
.partner-tile:hover,
.partner-tile-featured:hover {
  border-color: rgba(6, 182, 212, 0.45);
  box-shadow: 0 0 18px rgba(6, 182, 212, 0.15);
  transform: translateY(-2px);
}

</style>

