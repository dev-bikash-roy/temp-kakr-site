<template>
  <section class="section-py relative overflow-hidden" style="background: radial-gradient(ellipse at 50% 0%, #0a1628 0%, #050d1a 60%, #020810 100%);">
    <!-- BG image overlay -->
    <div class="absolute inset-0 pointer-events-none" style="background-image: url('/hero-bg.svg'); background-size: cover; background-position: center; opacity: 0.04;"></div>
    <!-- Glow effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full opacity-30" style="background: radial-gradient(ellipse 60% 40% at 50% 0%, rgba(6,182,212,0.12) 0%, transparent 70%);"></div>
      <div class="hidden sm:block absolute top-1/4 right-0 w-96 h-96 opacity-10" style="background: radial-gradient(circle, rgba(34,197,94,0.3) 0%, transparent 70%);"></div>
      <div class="hidden sm:block absolute bottom-1/4 left-0 w-96 h-96 opacity-10" style="background: radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%);"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style="background: linear-gradient(90deg, #22d3ee 0%, #4ade80 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          {{ sectionHeader.title }}
        </h2>
        <p class="text-base sm:text-lg text-slate-300 max-w-2xl lg:max-w-none lg:whitespace-nowrap mx-auto">
          {{ sectionHeader.subtitle }}
        </p>
      </div>

      <!-- -- MOBILE: app-style 3D stack carousel -- -->
      <div class="sm:hidden" data-aos="fade-up">

        <!-- Card stack viewport -->
        <div
          class="relative mx-auto"
          style="height: 420px; perspective: 1000px;"
          ref="carouselRef"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
        >
          <div
            v-for="(product, i) in products"
            :key="product.id"
            class="absolute inset-x-0 mx-4 rounded-3xl card-glass overflow-hidden transition-all duration-500 ease-out"
            :style="getCardStyle(i)"
          >
            <!-- Cyan top glow line -->
            <div class="absolute top-0 left-8 right-8 h-px" style="background: linear-gradient(90deg, transparent, rgba(6,182,212,0.8), transparent);"></div>

            <div class="p-6 flex flex-col gap-4 h-full">
              <!-- Icon + title row -->
              <div class="flex items-center gap-3">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 icon-glass icon-glass--active">
                  <span v-html="product.svg"></span>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-bold text-white text-lg leading-tight truncate">{{ getTranslation(product.id, 'title') }}</h3>
                  <p class="text-xs text-cyan-400 mt-0.5">{{ getTranslation(product.id, 'shortDesc') }}</p>
                </div>
                <span v-if="product.featured" class="badge-popular flex-shrink-0">HOT</span>
              </div>

              <!-- Description -->
              <p class="text-sm text-slate-300 leading-relaxed line-clamp-3">{{ getTranslation(product.id, 'description') }}</p>

              <!-- Feature pills -->
              <div class="flex flex-wrap gap-2">
                <span v-for="(f, fi) in getTranslation(product.id, 'features')" :key="fi" class="feature-tag">{{ f }}</span>
              </div>

              <!-- CTAs -->
              <div class="flex gap-3 mt-auto">
                <a v-if="product.showExplore !== false" :href="product.link" :target="product.external ? '_blank' : '_self'" class="btn-primary flex-1 justify-center text-sm py-3">
                  {{ sectionHeader.explore }}
                  <svg class="w-4 h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="display:inline-block;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <a v-if="product.showDocs !== false" :href="product.docsLink || 'https://docs.kakr.ai'" target="_blank" class="btn-secondary flex-1 justify-center text-sm py-3">
                  {{ sectionHeader.docs }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Progress dots + counter -->
        <div class="flex items-center justify-center gap-3 mt-6">
          <button
            @click="prevSlide"
            class="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-cyan-500/50 transition-all active:scale-95"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          </button>

          <div class="flex items-center gap-1.5">
            <button
              v-for="(_, i) in products"
              :key="i"
              @click="activeSlide = i"
              class="rounded-full transition-all duration-400"
              :style="i === activeSlide
                ? 'width:24px; height:7px; background: linear-gradient(90deg,#06b6d4,#4ade80);'
                : 'width:7px; height:7px; background:rgba(255,255,255,0.18);'"
            />
          </div>

          <button
            @click="nextSlide"
            class="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-cyan-500/50 transition-all active:scale-95"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>

        <p class="text-center text-white/30 text-xs mt-2">{{ activeSlide + 1 }} of {{ products.length }}</p>
      </div>

      <!-- -- DESKTOP: static grid (no tab click behavior) -- -->
      <div class="hidden sm:block">
        <!-- Cards Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="100">
          <div
            v-for="(product, idx) in products"
            :key="product.id"
            class="group relative rounded-2xl p-6 card-glass"
            data-aos="fade-up"
            :data-aos-delay="idx * 60"
          >
            <!-- Top glow line -->
            <div class="absolute top-0 left-6 right-6 h-px" style="background: linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent);"></div>

            <!-- Icon -->
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 icon-glass">
              <span v-html="product.svg"></span>
            </div>

            <!-- Title & short desc -->
            <h3 class="font-bold text-lg mb-1 text-slate-200">{{ getTranslation(product.id, 'title') }}</h3>
            <p class="text-sm text-slate-400 mb-3">{{ getTranslation(product.id, 'shortDesc') }}</p>

            <!-- Description -->
            <p class="text-xs text-slate-400 leading-relaxed mb-4">{{ getTranslation(product.id, 'description') }}</p>

            <!-- Feature tags -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span v-for="(f, i) in getTranslation(product.id, 'features')" :key="i" class="feature-tag">{{ f }}</span>
            </div>

            <!-- CTAs -->
            <div class="flex gap-2">
              <a
                v-if="product.showExplore !== false"
                :href="product.link"
                :target="product.external ? '_blank' : '_self'"
                class="btn-demo"
              >
                {{ sectionHeader.explore }}
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a v-if="product.showDocs !== false" :href="product.docsLink || 'https://docs.kakr.ai'" target="_blank" class="btn-demo">
                {{ sectionHeader.docs }}
              </a>
            </div>

            <span v-if="product.featured" class="absolute top-4 right-4 badge-popular">POPULAR</span>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="mt-6 rounded-2xl p-8 text-center relative overflow-hidden panel-glass" data-aos="fade-up" data-aos-delay="200">
          <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%);"></div>
          <div class="relative z-10">
            <h3 class="text-xl md:text-2xl font-bold text-white mb-3">{{ sectionHeader.ctaTitle }}</h3>
            <p class="text-slate-400 mb-6 max-w-xl mx-auto">{{ sectionHeader.ctaSubtitle }}</p>
            <a href="/contact" class="btn-primary inline-flex">
              {{ sectionHeader.ctaButton }}
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const sectionHeader = computed(() => {
  const t: Record<string, any> = {
    en: { title: 'PTERI Platform', subtitle: 'One unified cryptographic trust layer for identity, authentication, payments, and AI agents', explore: 'Explore', docs: 'Docs', ctaTitle: 'Need a custom solution for your organization?', ctaSubtitle: 'Our team can tailor the PTERI platform to your specific infrastructure needs.', ctaButton: 'Contact Sales' },
    de: { title: 'PTERI Plattform', subtitle: 'Eine einheitliche kryptografische Vertrauensschicht für Identität, Authentifizierung, Zahlungen und KI-Agenten', explore: 'Erkunden', docs: 'Doku', ctaTitle: 'Benötigen Sie eine maßgeschneiderte Lösung?', ctaSubtitle: 'Unser Team kann die PTERI-Plattform an Ihre spezifischen Infrastrukturanforderungen anpassen.', ctaButton: 'Vertrieb kontaktieren' },
    es: { title: 'Plataforma PTERI', subtitle: 'Una capa de confianza criptográfica unificada para identidad, autenticación, pagos y agentes de IA', explore: 'Explorar', docs: 'Docs', ctaTitle: '¿Necesita una solución personalizada?', ctaSubtitle: 'Nuestro equipo puede adaptar la plataforma PTERI a sus necesidades de infraestructura.', ctaButton: 'Contactar ventas' },
    ja: { title: 'PTERIプラットフォーム', subtitle: 'アイデンティティ、認証、決済、AIエージェントのための統合暗号信頼レイヤー', explore: '詳細', docs: 'ドキュメント', ctaTitle: 'カスタムソリューションが必要ですか？', ctaSubtitle: '私たちのチームはPTERIプラットフォームをお客様のインフラニーズに合わせてカスタマイズします。', ctaButton: '営業に連絡' },
    ar: { title: 'منصة PTERI', subtitle: 'طبقة ثقة تشفيرية موحدة للهوية والمصادقة والمدفوعات ووكلاء الذكاء الاصطناعي', explore: 'استكشاف', docs: 'التوثيق', ctaTitle: 'هل تحتاج إلى حل مخصص لمؤسستك؟', ctaSubtitle: 'يمكن لفريقنا تخصيص منصة PTERI لتلبية احتياجات البنية التحتية الخاصة بك.', ctaButton: 'تواصل مع المبيعات' },
  }
  return t[locale.value] || t.en
})

const activeSlide = ref(0)
const carouselRef = ref<HTMLElement | null>(null)
let touchStartX = 0

const prevSlide = () => { activeSlide.value = (activeSlide.value - 1 + products.length) % products.length }
const nextSlide = () => { activeSlide.value = (activeSlide.value + 1) % products.length }

const onTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX }
const onTouchEnd = (e: TouchEvent) => {
  const diff = touchStartX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 40) diff > 0 ? nextSlide() : prevSlide()
}

// Fade style card positioning
const getCardStyle = (i: number) => {
  const isActive = i === activeSlide.value

  return `
    transform: scale(${isActive ? 1 : 0.96});
    opacity: ${isActive ? 1 : 0};
    z-index: ${isActive ? 10 : 0};
    pointer-events: ${isActive ? 'auto' : 'none'};
  `
}

onMounted(() => {
  // keyboard nav
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide()
    if (e.key === 'ArrowLeft') prevSlide()
  })
})

const products = [
  { id: 'identity', link: '/platform#authority', external: false, featured: true, docsLink: 'https://docs.kakr.ai/docs/platform-capabilities/2.1-pteri-wallet-self-custody-identity',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="26" height="26"><circle cx="24" cy="24" r="20" fill="#669df6"/><path fill="#317be4" d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33C37.97,18,42,22.03,42,27z"/><polygon fill="#fff" points="27,14 26,13 22,13 21,14 15,14 15,16 18,16 30,16 33,16 33,14"/><path fill="#fff" d="M16,18v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V18H16z M24,21c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S22.9,21,24,21z M28,31h-8v-2c0-1.33,2.67-2,4-2s4,0.67,4,2V31z"/></svg>` },
  { id: 'intelligence', link: 'https://pteri.org/chat/pteri-intelligence', external: true, featured: false, docsLink: 'https://docs.kakr.ai/docs/ai-agents-and-mcp-integration/5.3-pteri-intelligence-and-mcp',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="26" height="26"><path fill="#00BCD4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"/><path fill="#006064" d="M24,7c-9.4,0-17,7.6-17,17s7.6,17,17,17s17-7.6,17-17S33.4,7,24,7z"/><path fill="#00BCD4" d="M24,14c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S29.5,14,24,14z"/><circle cx="24" cy="24" r="4" fill="#fff"/><path fill="#fff" d="M24,10v4M24,34v4M10,24h4M34,24h4" stroke="#fff" stroke-width="2"/></svg>` },
  { id: 'infrastructure', link: '/api-hub', external: false, featured: false, docsLink: 'https://docs.kakr.ai/docs/api-reference/6.1-api-reference-standard-pteri',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="26" height="26"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>` },
  { id: 'authentication', link: '/platform#authentication', external: false, featured: false, showExplore: false, docsLink: 'https://docs.kakr.ai/docs/platform-capabilities/2.3-identity-and-authentication',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="26" height="26"><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg>` },
  { id: 'iot', link: '', external: false, featured: false, docsLink: 'https://docs.kakr.ai/docs/threat-model-and-cryptography/9.6-security-as-a-property-of-architecture', showDocs: true, showExplore: false,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="26" height="26"><rect x="6" y="14" width="36" height="24" rx="3" fill="#546e7a"/><rect x="9" y="17" width="30" height="18" rx="2" fill="#37474f"/><circle cx="16" cy="26" r="3" fill="#4caf50"/><circle cx="24" cy="26" r="3" fill="#ff9800"/><circle cx="32" cy="26" r="3" fill="#2196f3"/><rect x="20" y="38" width="8" height="4" fill="#546e7a"/><rect x="14" y="42" width="20" height="2" rx="1" fill="#546e7a"/></svg>` },
  { id: 'enterprise', link: '', external: false, featured: false, docsLink: 'https://docs.kakr.ai/docs/api-reference/6.2-api-reference-enterprise#need-enterprise-access', showDocs: true, showExplore: false,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="26" height="26"><path fill="#1565c0" d="M6,42V14l18-8l18,8v28H6z"/><path fill="#1976d2" d="M24,6L6,14v2l18-8l18,8v-2L24,6z"/><rect x="10" y="20" width="8" height="6" rx="1" fill="#90caf9"/><rect x="20" y="20" width="8" height="6" rx="1" fill="#90caf9"/><rect x="30" y="20" width="8" height="6" rx="1" fill="#90caf9"/><rect x="10" y="30" width="8" height="6" rx="1" fill="#90caf9"/><rect x="30" y="30" width="8" height="6" rx="1" fill="#90caf9"/><rect x="18" y="30" width="12" height="12" rx="1" fill="#fff"/></svg>` },
]


const translations = computed(() => {
  const texts: Record<string, any> = {
    en: {
      identity: { title: 'PTERI Identity', shortDesc: 'Verifiable identity (DID)', description: 'Verifiable identity (DID) management for users and devices. Secure your ecosystem with user- or organization-controlled identity principles, ensuring privacy and compliance by design.', features: ['KYC / AML Integration', 'Global Compliance', 'Customer-Controlled Identity'] },
      authentication: { title: 'PTERI Authentication', shortDesc: 'Passwordless auth & FIDO2', description: 'Next-generation authentication that replaces passwords with cryptographic proof. Built on FIDO2 standards and zero-knowledge proofs to provide seamless, secure access.', features: ['Biometric Login', 'Hardware Key Support', 'Zero-Knowledge Proofs'] },
      infrastructure: { title: 'PTERI APIs', shortDesc: 'Developer tools & SDKs', description: 'Enterprise-grade blockchain infrastructure and developer tools. Access reliable nodes, indexers, and storage solutions backed by high-availability SLAs.', features: ['High Availability', 'Instant Finality', 'WebSocket Events'] },
      intelligence: { title: 'PTERI Intelligence', shortDesc: 'AI Security & Data Privacy', description: 'AI-driven security insights and privacy-preserving data computation. Detect anomalies and secure AI agents acting on decentralized networks.', features: ['Threat Detection', 'Private Computation', 'AI Agent Identifiers'] },
      iot: { title: 'PTERI IoT Security', shortDesc: 'Device hardening protocols', description: 'End-to-end encryption and identity management for IoT fleets. Prevent unauthorized access and ensure firmware integrity across millions of devices.', features: ['Firmware Signing', 'Device Attestation', 'Automated Rotation'] },
      enterprise: { title: 'PTERI Enterprise', shortDesc: 'Full product suite & SLAs', description: 'Custom implementation, dedicated support, and SLA-backed guarantees for high-scale organizations.', features: ['24/7 Priority Support', 'Dedicated Instances', 'Audit Logging'] }
    },
    de: {
      identity: { title: 'PTERI Identität', shortDesc: 'Dezentrale Identität (DID)', description: 'Dezentrales Identitätsmanagement für Benutzer und Geräte.', features: ['KYC / AML', 'Compliance', 'Kundenkontrolliert'] },
      authentication: { title: 'PTERI Authentifizierung', shortDesc: 'Passwortlos & FIDO2', description: 'Passwortlose Authentifizierung der nächsten Generation.', features: ['Biometrie', 'Hardwareschlüssel', 'Zero-Knowledge'] },
      infrastructure: { title: 'PTERI APIs', shortDesc: 'Entwicklertools', description: 'Blockchain-Infrastruktur für Unternehmen.', features: ['Hohe Verfügbarkeit', 'Sofortige Finalität', 'Websockets'] },
      intelligence: { title: 'PTERI Intelligenz', shortDesc: 'KI-Sicherheit', description: 'KI-gesteuerte Sicherheitsanalysen.', features: ['Bedrohungserkennung', 'Privates Rechnen', 'KI-Agenten'] },
      iot: { title: 'PTERI IoT', shortDesc: 'Gerätesicherheit', description: 'Dauerhafte Verschlüsselung für IoT.', features: ['Firmware-Signierung', 'Geräteattestierung', 'Rotation'] },
      enterprise: { title: 'PTERI Enterprise', shortDesc: 'Komplettlösung', description: 'Maßgeschneiderte Implementierung für Großunternehmen.', features: ['24/7 Support', 'Dedizierte Instanzen', 'Audit-Logs'] }
    },
    es: {
      identity: { title: 'Identidad PTERI', shortDesc: 'Identidad descentralizada', description: 'Gestión de identidad descentralizada para usuarios y dispositivos.', features: ['KYC / AML', 'Cumplimiento', 'Autosoberana'] },
      authentication: { title: 'Autenticación PTERI', shortDesc: 'Sin contraseña & FIDO2', description: 'Autenticación de próxima generación sin contraseñas.', features: ['Biometría', 'Llaves de hardware', 'Zero-Knowledge'] },
      infrastructure: { title: 'APIs PTERI', shortDesc: 'Herramientas de desarrollo', description: 'Infraestructura blockchain de grado empresarial.', features: ['Alta disponibilidad', 'Finalidad instantánea', 'Websockets'] },
      intelligence: { title: 'Inteligencia PTERI', shortDesc: 'Seguridad IA', description: 'Análisis de seguridad impulsado por IA.', features: ['Detección de amenazas', 'Computación privada', 'Agentes IA'] },
      iot: { title: 'Seguridad IoT', shortDesc: 'Protocolos de dispositivos', description: 'Cifrado de extremo a extremo para IoT.', features: ['Firma de firmware', 'Atestación de dispositivos', 'Rotación'] },
      enterprise: { title: 'Empresa PTERI', shortDesc: 'Suite completa', description: 'Implementación personalizada para grandes organizaciones.', features: ['Soporte 24/7', 'Instancias dedicadas', 'Registros de auditoría'] }
    },
    ja: {
      identity: { title: 'PTERIアイデンティティ', shortDesc: '分散型ID (DID)', description: 'ユーザーとデバイスの分散型IDマネジメント。', features: ['KYC / AML', 'グローバルコンプライアンス', '自己主権ID'] },
      authentication: { title: 'PTERI認証', shortDesc: 'パスワードレス & FIDO2', description: 'パスワードを暗号証明で置き換える次世代認証。', features: ['生体認証', 'ハードウェアキー', 'ゼロ知識証明'] },
      infrastructure: { title: 'PTERI APIs', shortDesc: '開発者ツール', description: 'エンタープライズ向けブロックチェーンインフラ。', features: ['高可用性', '即時ファイナリティ', 'Webソケット'] },
      intelligence: { title: 'PTERIインテリジェンス', shortDesc: 'AIセキュリティ', description: 'AI駆動のセキュリティ分析とプライバシー保護。', features: ['脅威検出', 'プライベート計算', 'AIエージェントID'] },
      iot: { title: 'PTERI IoTセキュリティ', shortDesc: 'デバイス保護', description: 'IoTデバイスのエンドツーエンド暗号化と管理。', features: ['ファームウェア署名', 'デバイス認証', '自動ローテーション'] },
      enterprise: { title: 'PTERIエンタープライズ', shortDesc: '完全スイート', description: '大規模組織向けカスタム実装とSLA保証。', features: ['24/7優先サポート', '専用インスタンス', '監査ログ'] }
    },
    ar: {
      identity: { title: 'هوية PTERI', shortDesc: 'هوية لامركزية', description: 'إدارة الهوية اللامركزية للمستخدمين والأجهزة.', features: ['KYC / AML', 'الامتثال العالمي', 'الهوية ذاتية السيادة'] },
      authentication: { title: 'مصادقة PTERI', shortDesc: 'بدون كلمة مرور', description: 'مصادقة الجيل التالي تستبدل كلمات المرور بإثباتات تشفيرية.', features: ['تسجيل دخول بيومتري', 'دعم المفاتيح المادية', 'إثباتات المعرفة الصفرية'] },
      infrastructure: { title: 'PTERI APIs', shortDesc: 'أدوات المطورين', description: 'بنية تحتية للبلوكتشين على مستوى المؤسسات.', features: ['توفر عالٍ', 'إنهاء فوري', 'أحداث WebSocket'] },
      intelligence: { title: 'ذكاء PTERI', shortDesc: 'أمن الذكاء الاصطناعي', description: 'رؤى أمنية مدعومة بالذكاء الاصطناعي وحماية الخصوصية.', features: ['كشف التهديدات', 'الحوسبة الخاصة', 'معرفات وكلاء الذكاء الاصطناعي'] },
      iot: { title: 'أمن IoT', shortDesc: 'بروتوكولات الأجهزة', description: 'تشفير شامل وإدارة هوية لأجهزة IoT.', features: ['توقيع البرامج الثابتة', 'تصديق الأجهزة', 'التدوير التلقائي'] },
      enterprise: { title: 'مؤسسة PTERI', shortDesc: 'حزمة كاملة', description: 'تنفيذ مخصص مع ضمانات SLA للمؤسسات الكبيرة.', features: ['دعم 24/7', 'خوادم مخصصة', 'سجلات التدقيق'] }
    }
  }
  return texts[locale.value] || texts.en
})

const getTranslation = (productId: string, key: string) => {
  return translations.value[productId]?.[key] || ''
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fadeIn 0.35s ease-out forwards; }

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.transition-all { transition-property: all; }
.duration-400 { transition-duration: 400ms; }

/* Glassmorphism cards */
.card-glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05);
  transition: all 0.3s ease;
}
.card-glass:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(6, 182, 212, 0.25);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(6,182,212,0.06), inset 0 1px 0 rgba(255,255,255,0.08);
  transform: translateY(-2px);
}
.card-glass--active {
  background: rgba(6, 182, 212, 0.07) !important;
  border-color: rgba(6, 182, 212, 0.5) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 30px rgba(6,182,212,0.1), inset 0 1px 0 rgba(6,182,212,0.15) !important;
}

/* Panel glass */
.panel-glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05);
}

/* Icon containers */
.icon-glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}
.icon-glass--active {
  background: rgba(6, 182, 212, 0.12) !important;
  border-color: rgba(6, 182, 212, 0.35) !important;
}

/* Try Demo button on cards */
.btn-demo {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: all 0.25s ease;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  backdrop-filter: blur(8px);
}
.btn-demo:hover {
  background: rgba(6, 182, 212, 0.12);
  border-color: rgba(6, 182, 212, 0.4);
  color: #22d3ee;
  box-shadow: 0 0 12px rgba(6,182,212,0.15);
}
.btn-demo--active {
  background: rgba(6, 182, 212, 0.12) !important;
  border-color: rgba(6, 182, 212, 0.4) !important;
  color: #22d3ee !important;
}

/* Primary CTA button */
.btn-primary {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #000000;
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  border: 1px solid rgba(52, 211, 153, 0.5);
  box-shadow: 0 0 16px rgba(52, 211, 153, 0.3);
  transition: all 0.25s ease;
}
.btn-primary:hover {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 0 28px rgba(52, 211, 153, 0.5);
  transform: translateY(-1px);
}

/* Secondary button */
.btn-secondary {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.25s ease;
}
.btn-secondary:hover {
  color: white;
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

/* Feature tags */
.feature-tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(6, 182, 212, 0.08);
  color: #67e8f9;
  border: 1px solid rgba(6, 182, 212, 0.2);
  backdrop-filter: blur(4px);
}

/* Popular badge */
.badge-popular {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.12);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.3);
  letter-spacing: 0.08em;
}
</style>
