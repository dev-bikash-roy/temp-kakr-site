<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:section-py">
    <h2 class="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6">{{ translations.ourPlatforms }}</h2>

    <!-- Rows -->
    <ul class="divide-y divide-slate-200 dark:divide-slate-800">
      <li
        v-for="(item, i) in items"
        :key="item.titleKey"
        :ref="el => (rowRefs[i] = el)"
        class="py-6 sm:py-8 lg:py-10 group"
      >
        <div class="w-full text-left">
          <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] xl:text-[88px] leading-tight sm:leading-none font-semibold tracking-[-0.02em] text-slate-900 dark:text-white">
              {{ getTranslation(item.id, 'title') }}
            </h3>
            <div class="flex items-center gap-3 sm:gap-4 sm:ml-auto">
              <button
                v-if="item.demoUrl"
                @click="openDemo(item)"
                class="px-3 sm:px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
                :aria-label="getTranslation(locale, 'viewDemo').replace('{title}', getTranslation(item.id, 'title'))"
              >
                <svg class="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ getTranslation(locale, 'demo') }}
              </button>
              <span class="text-slate-400 text-xs sm:text-sm">/0.{{ i+1 }}</span>
            </div>
          </div>
          <p class="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {{ getTranslation(item.id, 'subtitle') }}
          </p>
        </div>
      </li>
    </ul>

    <!-- Demo Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showModal"
          class="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 sm:p-4"
          @click="closeModal"
        >
          <div 
            class="relative w-full max-w-7xl bg-slate-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto"
            @click.stop
          >
            <!-- Close Button -->
            <button
              @click="closeModal"
              class="absolute top-2 sm:top-4 right-2 sm:right-4 z-[100000] p-2 sm:p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors shadow-lg"
              :aria-label="getTranslation(locale, 'closeDemo')"
            >
              <svg class="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Demo Content -->
            <div v-if="currentDemo" class="p-2 sm:p-4 lg:p-6">
              <div 
                :id="`demo-container-${currentDemo.titleKey.replace(/\./g, '-')}`"
                class="sl-embed-container" 
                style="position:relative;display:flex;align-items:center;justify-content:center;border: 1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px"
              >
                <div 
                  v-if="!demoStarted"
                  class="sl-preview-heading" 
                  style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(40, 37, 54, 0.9);z-index:999999;font-family:Poppins, Arial, sans-serif;font-size:clamp(16px, 4vw, 28px);font-weight:500;line-height:normal;text-align:center;border-radius:10px;padding:20px;"
                >
                  <div class="sl-heading-text" style="color:#fff;margin-bottom:clamp(15px, 3vw, 24px);text-shadow: 0px 1px 2px rgba(26, 19, 72, 0.40);max-width:90%;padding:0 10px;">
                    {{ getTranslation(currentDemo.id, 'demoTitle') }}
                  </div>
                  <button 
                    ref="playButton"
                    @click="playStorylineDemo"
                    class="sl-preview-cta" 
                    style="background-color:#9939EB;border:none;border-radius:8px;box-shadow:0px 0px 15px rgba(26, 19, 72, 0.45);color:#FFFFFF;display:inline-block;font-family:Poppins, Arial, sans-serif;font-size:clamp(14px, 3vw, 20px);font-weight:600;height:clamp(36px, 8vw, 50px);line-height:1.2;padding:0 clamp(12px, 3vw, 20px);text-overflow:ellipsis;transform:translateZ(0);transition:background 0.4s;white-space:nowrap;width:auto;z-index:999999;cursor:pointer"
                  >
                    {{ getTranslation(locale, 'viewDemoButton') }}
                  </button>
                </div>
                <div class="sl-embed" data-sl-demo-type="image" :style="`position:relative;padding-bottom:calc(${currentDemo.aspectRatio}% + 25px);width:100%;height:0;transform:scale(1);overflow:hidden;`">
                  <div 
                    v-if="!demoStarted"
                    class="sl-preview" 
                    :style="`width:100%;height:100%;z-index:99999;position:absolute;background:url('${currentDemo.posterUrl}') no-repeat;background-size:100% 100%;border-radius:inherit;filter:blur(0px)`"
                  ></div>
                  <iframe 
                    ref="demoIframe" 
                    class="sl-demo" 
                    src="" 
                    name="sl-embed" 
                    allow="fullscreen" 
                    allowfullscreen 
                    :style="demoStarted ? 'display:block;position:absolute;top:0;left:0;width:100%;height:100%;border:none;' : 'display:none;position:absolute;top:0;left:0;width:100%;height:100%;border:none;'"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

type Item = {
  id: string
  titleKey: string
  subtitleKey: string
  blurbKey: string
  video: string
  poster?: string
  demoUrl?: string
  demoTitleKey: string
  demoWidth?: number
  demoHeight?: number
  posterUrl?: string
  aspectRatio?: number
}

const texts: any = {
  en: {
    ourPlatforms: 'Our Platforms',
    demo: 'Demo',
    viewDemo: 'View {title} demo',
    viewDemoButton: 'VIEW DEMO',
    closeDemo: 'Close demo',
    pteriWallet: { title: 'PTERI App', subtitle: 'Self-custody, white-label wallet solution', demoTitle: 'Take a tour of Pteri Explorer' },
    pteriAuth: { title: 'PTERI Authentication', subtitle: 'Standard-based decentralized authentication', demoTitle: 'Take a tour of APIs & DaaS' },
    pteriIdentity: { title: 'PTERI Identity', subtitle: 'Full identity verification stack', demoTitle: 'Take a tour of Pteri Identity' },
    pteriInfrastructure: { title: 'PTERI Infrastructure', subtitle: 'Dedicated nodes and scalable APIs', demoTitle: 'Take a tour of Pteri Infrastructure' }
  },
  de: {
    ourPlatforms: 'Unsere Plattformen',
    demo: 'Demo',
    viewDemo: '{title} Demo ansehen',
    viewDemoButton: 'DEMO ANSEHEN',
    closeDemo: 'Demo schließen',
    pteriWallet: { title: 'PTERI App', subtitle: 'Selbstverwahrungs-Wallet mit kostenlosem On-Chain-2FA und extrem niedrigen Gebühren.', demoTitle: 'Machen Sie eine Tour durch Pteri Explorer' },
    pteriAuth: { title: 'PTERI Authentifizierung', subtitle: 'Standardbasierte dezentrale Authentifizierung', demoTitle: 'Machen Sie eine Tour durch Pteri Auth' },
    pteriIdentity: { title: 'PTERI Identität', subtitle: 'Vollständiger Stack zur Identitätsprüfung', demoTitle: 'Machen Sie eine Tour durch Pteri Identity' },
    pteriInfrastructure: { title: 'PTERI Infrastruktur', subtitle: 'Dedizierte Knoten und skalierbare APIs', demoTitle: 'Machen Sie eine Tour durch Pteri Infrastructure' }
  },
  es: {
    ourPlatforms: 'Nuestras Plataformas',
    demo: 'Demo',
    viewDemo: 'Ver demo de {title}',
    viewDemoButton: 'VER DEMO',
    closeDemo: 'Cerrar demo',
    pteriWallet: { title: 'PTERI App', subtitle: 'Wallet de autocustodia con 2FA en cadena gratuito y tarifas ultra bajas.', demoTitle: 'Haga un recorrido por Pteri Explorer' },
    pteriAuth: { title: 'Autenticación PTERI', subtitle: 'Autenticación descentralizada basada en estándares', demoTitle: 'Haga un recorrido por Pteri Auth' },
    pteriIdentity: { title: 'Identidad PTERI', subtitle: 'Pila completa de verificación de identidad', demoTitle: 'Haga un recorrido por Pteri Identity' },
    pteriInfrastructure: { title: 'Infraestructura PTERI', subtitle: 'Nodos dedicados y APIs escalables', demoTitle: 'Haga un recorrido por Pteri Infrastructure' }
  },
  ja: {
    ourPlatforms: '当社のプラットフォーム',
    demo: 'デモ',
    viewDemo: '{title} デモを見る',
    viewDemoButton: 'デモを見る',
    closeDemo: 'デモを閉じる',
    pteriWallet: { title: 'PTERIアプリ', subtitle: '無料のオンチェーン2FAと超低手数料を備えた自己管理型ウォレット。', demoTitle: 'Pteri Explorerのツアーに参加' },
    pteriAuth: { title: 'PTERI認証', subtitle: '標準ベースの分散型認証', demoTitle: 'Pteri Authのツアーに参加' },
    pteriIdentity: { title: 'PTERIアイデンティティ', subtitle: '完全な本人確認スタック', demoTitle: 'Pteri Identityのツアーに参加' },
    pteriInfrastructure: { title: 'PTERIインフラストラクチャ', subtitle: '専用ノードとスケーラブルなAPI', demoTitle: 'Pteri Infrastructureのツアーに参加' }
  },
  ar: {
    ourPlatforms: 'منصاتنا',
    demo: 'عرض توضيحي',
    viewDemo: 'عرض توضيحي لـ {title}',
    viewDemoButton: 'عرض العرض التوضيحي',
    closeDemo: 'إغلاق العرض التوضيحي',
    pteriWallet: { title: 'تطبيق PTERI', subtitle: 'محفظة ذاتية الحفظ مع مصادقة ثنائية مجانية على السلسلة ورسوم منخفضة جداً.', demoTitle: 'خذ جولة في Pteri Explorer' },
    pteriAuth: { title: 'مصادقة PTERI', subtitle: 'مصادقة لامركزية قائمة على المعايير', demoTitle: 'خذ جولة في Pteri Auth' },
    pteriIdentity: { title: 'هوية PTERI', subtitle: 'مجموعة كاملة للتحقق من الهوية', demoTitle: 'خذ جولة في Pteri Identity' },
    pteriInfrastructure: { title: 'بنية PTERI التحتية', subtitle: 'عقد مخصصة وواجهات برمجة تطبيقات قابلة للتطوير', demoTitle: 'خذ جولة في Pteri Infrastructure' }
  }
}

const translations = computed(() => {
  return texts[locale.value] || texts.en
})

const getTranslation = (id: string, key: string) => {
  const current = translations.value
  const fallback = texts.en

  // If accessing top-level string like "demo"
  if (current[id] && typeof current[id] === 'string') {
    return current[id]
  }
  return current[id]?.[key] || fallback[id]?.[key] || ''
}

const items = ref<Item[]>([
  {
    id: 'pteriWallet',
    titleKey: 'hoverVideoList.pteriWallet.title',
    subtitleKey: 'hoverVideoList.pteriWallet.subtitle',
    blurbKey: 'hoverVideoList.pteriWallet.blurb',
    video: '/videos/foundry-preview.mp4',
    poster: '/videos/foundry-preview.jpg',
    demoUrl: 'https://app.storylane.io/demo/hsjskm1iokbu?embed=inline_overlay',
    demoTitleKey: 'hoverVideoList.pteriWallet.demoTitle',
    demoWidth: 2560,
    demoHeight: 1184,
    posterUrl: 'https://storylane-prod-uploads.s3.us-east-2.amazonaws.com/company/company_b6d39447-3cef-413f-85d5-fb51b8204a3b/demo/demo_hsjskm1iokbu/1734534000000/cover.png',
    aspectRatio: 46.25
  },
  {
    id: 'pteriAuth',
    titleKey: 'hoverVideoList.pteriAuth.title',
    subtitleKey: 'hoverVideoList.pteriAuth.subtitle',
    blurbKey: 'hoverVideoList.pteriAuth.blurb',
    video: '/videos/aip-preview.mp4',
    poster: '/videos/aip-preview.jpg',
    demoUrl: 'https://app.storylane.io/demo/u5zxxniybw26?embed=inline_overlay',
    demoTitleKey: 'hoverVideoList.pteriAuth.demoTitle',
    demoWidth: 576,
    demoHeight: 1280,
    posterUrl: 'https://storylane-prod-uploads.s3.us-east-2.amazonaws.com/company/company_b6d39447-3cef-413f-85d5-fb51b8204a3b/images/-xyeRNP2uBXgqPywYgWj.png',
    aspectRatio: 222.22
  },
  {
    id: 'pteriIdentity',
    titleKey: 'hoverVideoList.pteriIdentity.title',
    subtitleKey: 'hoverVideoList.pteriIdentity.subtitle',
    blurbKey: 'hoverVideoList.pteriIdentity.blurb',
    video: '/videos/foundry-preview.mp4',
    poster: '/videos/foundry-preview.jpg',
    demoUrl: 'https://app.storylane.io/demo/xecpivgcdcoe?embed=inline_overlay',
    demoTitleKey: 'hoverVideoList.pteriIdentity.demoTitle',
    demoWidth: 2560,
    demoHeight: 1184,
    posterUrl: 'https://storylane-prod-uploads.s3.us-east-2.amazonaws.com/company/company_b6d39447-3cef-413f-85d5-fb51b8204a3b/project/project_0b6f5876-b4fc-4a33-91e6-9a1bc5c8aed5/page/1761753532939.png',
    aspectRatio: 46.25
  },
  {
    id: 'pteriInfrastructure',
    titleKey: 'hoverVideoList.pteriInfrastructure.title',
    subtitleKey: 'hoverVideoList.pteriInfrastructure.subtitle',
    blurbKey: 'hoverVideoList.pteriInfrastructure.blurb',
    video: '/videos/gotham-preview.mp4',
    poster: '/videos/gotham-preview.jpg',
    demoUrl: 'https://app.storylane.io/demo/lmhnv2kfxnf0?embed=inline_overlay',
    demoTitleKey: 'hoverVideoList.pteriInfrastructure.demoTitle',
    demoWidth: 2527,
    demoHeight: 1178,
    posterUrl: 'https://storylane-prod-uploads.s3.us-east-2.amazonaws.com/company/company_b6d39447-3cef-413f-85d5-fb51b8204a3b/project/project_c838d539-5c24-4b02-b1ae-5b8f52f05c8f/page/1761932618770.png',
    aspectRatio: 46.62
  }
])

const rowRefs = ref<HTMLElement[]>([])
const showModal = ref(false)
const currentDemo = ref<Item | null>(null)
const demoIframe = ref<HTMLIFrameElement | null>(null)
const playButton = ref<HTMLButtonElement | null>(null)
const demoStarted = ref(false)

const openDemo = (item: Item) => {
  currentDemo.value = item
  showModal.value = true
  demoStarted.value = false
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  demoStarted.value = false
  currentDemo.value = null
  document.body.style.overflow = ''
  
  // Reset iframe
  if (demoIframe.value) {
    demoIframe.value.src = ''
  }
}

const playStorylineDemo = () => {
  if (typeof window !== 'undefined' && (window as any).Storylane && currentDemo.value && playButton.value) {
    demoStarted.value = true
    
    try {
      (window as any).Storylane.Play({
        type: 'preview_embed',
        demo_type: 'image',
        width: currentDemo.value.demoWidth,
        height: currentDemo.value.demoHeight,
        element: playButton.value,
        demo_url: currentDemo.value.demoUrl
      })
    } catch (error) {
      console.error('Error playing Storylane demo:', error)
      // Fallback: open in new tab
      window.open(currentDemo.value.demoUrl.replace('?embed=inline_overlay', ''), '_blank')
      closeModal()
    }
  }
}

// Handle escape key to close modal
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && showModal.value) {
    closeModal()
  }
}

onMounted(() => {
  // Load Storylane script
  if (typeof window !== 'undefined' && !(window as any).Storylane) {
    const script = document.createElement('script')
    script.src = 'https://js.storylane.io/js/v2/storylane.js'
    script.async = true
    document.head.appendChild(script)
  }
  
  // Add escape key listener
  window.addEventListener('keydown', handleEscape)
})

// Cleanup

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.sl-heading-text {
  max-width: 90%;
}

@media (min-width: 1024px) {
  .sl-heading-text {
    max-width: 53%;
  }
}

/* Smooth modal animations */
.modal-enter-active {
  transition: all 0.3s ease-out;
}

.modal-leave-active {
  transition: all 0.2s ease-in;
}

.modal-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Ensure modal is above everything */
.fixed.z-\[99999\] {
  z-index: 99999 !important;
}
</style>
