<template>
  <!-- Section with a subtle gradient background -->
  <div class="relative overflow-hidden w-full">
    <div class="absolute inset-0 bg-radial-gradient opacity-20"></div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">


      <!-- Carousel Wrapper -->
      <ClientOnly>
        <!-- ================================================================== -->
        <!-- START: THE FIx-->
        <!-- ================================================================== -->
        <Swiper
          v-if="items && items.length"
          class="!overflow-visible"
          :modules="modules"
          :slides-per-view="1"
          :space-between="24"
          :keyboard="{ enabled: true }"
          :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }"
          :navigation="{ prevEl: prevEl, nextEl: nextEl }"
          :pagination="{ el: paginationEl, clickable: true }"
          :breakpoints="{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 }
          }"
          @before-init="onBeforeInit"
        >
          <!-- The v-for loop is now on the SwiperSlide component, which is the standard and correct way. -->
          <!-- The v-if on the Swiper component itself helps ensure it only renders when ready. -->
          <SwiperSlide v-for="article in items" :key="article.title">
            <!-- Modern Article Card -->
            <article class="group article-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <!-- Image Container -->
                <div class="overflow-hidden rounded-lg mb-5">
                  <img
                    :src="article.image"
                    :alt="article.title"
                    class="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <!-- Text Content -->
                <div class="flex flex-col flex-grow">
                  <div class="flex-grow">
                    <div class="flex items-center gap-3 mb-3">
                      <span v-for="tag in article.tags || ['Article']" :key="tag" class="tag">
                        {{ tag }}
                      </span>
                      <span class="ml-auto text-xs text-gray-400">{{ article.meta }}</span>
                    </div>

                    <h3 class="text-lg font-semibold leading-tight text-white mb-2">
                      <a :href="article.href" :target="article.external ? '_blank' : undefined" class="link-hover">
                        {{ article.title }}
                      </a>
                    </h3>

                    <p class="text-sm text-gray-400 line-clamp-3">
                      {{ article.excerpt }}
                    </p>
                  </div>

                  <!-- Read More Button -->
                  <div class="mt-6">
                    <a :href="article.href" :target="article.external ? '_blank' : undefined" class="read-more-btn">
                      {{ translations.readMore }}
                      <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
        <!-- ================================================================== -->
        <!-- END: THE FIX -->
        <!-- ================================================================== -->

        <!-- Custom Controls -->
        <div class="mt-10 flex items-center justify-between">
          <!-- Navigation Buttons -->
          <div class="flex gap-3">
            <button ref="prevEl" class="nav-btn" aria-label="Previous slide" type="button">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button ref="nextEl" class="nav-btn" aria-label="Next slide" type="button">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <!-- Pagination -->
          <div ref="paginationEl" class="swiper-pagination !relative !bottom-auto !top-auto !w-auto"></div>
        </div>

        <!-- Fallback Skeleton Loader -->
        <template #fallback>
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="i in 3" :key="i" class="animate-pulse rounded-xl bg-gray-800/50 h-96"/>
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, A11y, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useI18n } from '#imports'
import { computed } from 'vue'

const { locale } = useI18n()

type Article = {
  title: string
  excerpt: string
  image: string
  href: string
  external?: boolean
  tags?: string[]
  meta?: string
}

const props = withDefaults(defineProps<{ articles?: Article[] }>(), {
  articles: undefined
})

// Hardcoded translations
const translations = computed(() => {
  const lang = locale.value
  
  const t = {
    'en': {
      readMore: 'Read More',
      insight: 'Insight',
      product: 'Product',
      release: 'Release',
      perspective: 'Perspective',
      readTime: (minutes: number) => `${minutes} min read`,
      beyondSmartContracts: {
        title: "Beyond Smart Contracts: Litecoin's Future with Kakr",
        excerpt: "Transforming Litecoin into a dynamic platform for apps, DeFi, and NFTs. Join us in shaping the future of blockchain technology."
      },
      unlockBlockchain: {
        title: "Playground: Simple, Fast, and Friendly",
        excerpt: "Discover how Kakr's Playground makes blockchain development accessible to everyone. Build, test, and deploy with ease."
      },
      unveilingPteri: {
        title: "Unveiling Pteri: Litecoin's Gateway to Web3",
        excerpt: "Introducing Pteri, the revolutionary platform bringing Web3 capabilities to Litecoin. Experience the next generation of blockchain innovation."
      },
      transformingEnergy: {
        title: 'Transforming Energy Trading with Blockchain',
        excerpt: 'Explore how blockchain technology is revolutionizing the energy sector, enabling peer-to-peer trading and sustainable solutions.'
      }
    },
    'de': {
      readMore: 'Mehr lesen',
      insight: 'Einblick',
      product: 'Produkt',
      release: 'Veröffentlichung',
      perspective: 'Perspektive',
      readTime: (minutes: number) => `${minutes} Min. Lesezeit`,
      beyondSmartContracts: {
        title: 'Jenseits von Smart Contracts: Litecoins Zukunft mit Kakr',
        excerpt: 'Litecoin in eine dynamische Plattform für Apps, DeFi und NFTs verwandeln. Gestalten Sie mit uns die Zukunft der Blockchain-Technologie.'
      },
      unlockBlockchain: {
        title: 'Playground: Einfach, Schnell und Benutzerfreundlich',
        excerpt: 'Entdecken Sie, wie Kakrs Playground die Blockchain-Entwicklung für alle zugänglich macht. Erstellen, testen und bereitstellen Sie mit Leichtigkeit.'
      },
      unveilingPteri: {
        title: 'Pteri enthüllt: Litecoins Tor zu Web3',
        excerpt: 'Wir stellen Pteri vor, die revolutionäre Plattform, die Web3-Funktionen zu Litecoin bringt. Erleben Sie die nächste Generation der Blockchain-Innovation.'
      },
      transformingEnergy: {
        title: 'Energiehandel mit Blockchain transformieren',
        excerpt: 'Erfahren Sie, wie Blockchain-Technologie den Energiesektor revolutioniert und Peer-to-Peer-Handel sowie nachhaltige Lösungen ermöglicht.'
      }
    },
    'es': {
      readMore: 'Leer más',
      insight: 'Perspectiva',
      product: 'Producto',
      release: 'Lanzamiento',
      perspective: 'Visión',
      readTime: (minutes: number) => `${minutes} min de lectura`,
      beyondSmartContracts: {
        title: 'Más allá de los Contratos Inteligentes: El Futuro de Litecoin con Kakr',
        excerpt: 'Transformando Litecoin en una plataforma dinámica para aplicaciones, DeFi y NFTs. Únete a nosotros para dar forma al futuro de la tecnología blockchain.'
      },
      unlockBlockchain: {
        title: 'Playground: Simple, Rápido y Amigable',
        excerpt: 'Descubre cómo el Playground de Kakr hace que el desarrollo blockchain sea accesible para todos. Construye, prueba y despliega con facilidad.'
      },
      unveilingPteri: {
        title: 'Presentando Pteri: La Puerta de Litecoin a Web3',
        excerpt: 'Presentamos Pteri, la plataforma revolucionaria que trae capacidades Web3 a Litecoin. Experimenta la próxima generación de innovación blockchain.'
      },
      transformingEnergy: {
        title: 'Transformando el Comercio de Energía con Blockchain',
        excerpt: 'Explora cómo la tecnología blockchain está revolucionando el sector energético, permitiendo el comercio entre pares y soluciones sostenibles.'
      }
    },
    'ja': {
      readMore: '続きを読む',
      insight: 'インサイト',
      product: '製品',
      release: 'リリース',
      perspective: '展望',
      readTime: (minutes: number) => `${minutes}分で読む`,
      beyondSmartContracts: {
        title: 'スマートコントラクトを超えて：Kakrによるライトコインの未来',
        excerpt: 'ライトコインをアプリ、DeFi、NFTのための動的なプラットフォームに変革。ブロックチェーン技術の未来を一緒に形作りましょう。'
      },
      unlockBlockchain: {
        title: 'Playground：シンプル、高速、フレンドリー',
        excerpt: 'KakrのPlaygroundがブロックチェーン開発を誰にでもアクセス可能にする方法を発見してください。簡単に構築、テスト、デプロイできます。'
      },
      unveilingPteri: {
        title: 'Pteriの発表：ライトコインのWeb3へのゲートウェイ',
        excerpt: 'ライトコインにWeb3機能をもたらす革新的なプラットフォーム、Pteriをご紹介します。次世代のブロックチェーンイノベーションを体験してください。'
      },
      transformingEnergy: {
        title: 'ブロックチェーンでエネルギー取引を変革',
        excerpt: 'ブロックチェーン技術がエネルギーセクターをどのように革新し、ピアツーピア取引と持続可能なソリューションを可能にしているかを探ります。'
      }
    },
    'ar': {
      readMore: 'اقرأ المزيد',
      insight: 'رؤية',
      product: 'منتج',
      release: 'إصدار',
      perspective: 'منظور',
      readTime: (minutes: number) => `${minutes} دقائق للقراءة`,
      beyondSmartContracts: {
        title: 'ما وراء العقود الذكية: مستقبل لايتكوين مع Kakr',
        excerpt: 'تحويل لايتكوين إلى منصة ديناميكية للتطبيقات والتمويل اللامركزي والرموز غير القابلة للاستبدال. انضم إلينا في تشكيل مستقبل تقنية البلوكشين.'
      },
      unlockBlockchain: {
        title: 'Playground: بسيط وسريع وودود',
        excerpt: 'اكتشف كيف يجعل Playground من Kakr تطوير البلوكشين متاحًا للجميع. قم بالبناء والاختبار والنشر بسهولة.'
      },
      unveilingPteri: {
        title: 'الكشف عن Pteri: بوابة لايتكوين إلى Web3',
        excerpt: 'نقدم Pteri، المنصة الثورية التي تجلب قدرات Web3 إلى لايتكوين. اختبر الجيل القادم من ابتكار البلوكشين.'
      },
      transformingEnergy: {
        title: 'تحويل تجارة الطاقة باستخدام البلوكشين',
        excerpt: 'استكشف كيف تُحدث تقنية البلوكشين ثورة في قطاع الطاقة، مما يتيح التداول من نظير إلى نظير والحلول المستدامة.'
      }
    }
  }
  
  return t[lang as keyof typeof t] || t['en']
})

const defaultArticles = computed((): Article[] => {
  const t = translations.value
  return [
    {
      title: t.beyondSmartContracts.title,
      excerpt: t.beyondSmartContracts.excerpt,
      image: 'https://pbs.twimg.com/media/GT1rPgwWMAAHmX1?format=jpg&name=small',
      href: 'https://x.com/kakrlabs/status/1818729044147683558',
      external: true,
      tags: [t.insight],
      meta: t.readTime(5)
    },
    {
      title: t.unlockBlockchain.title,
      excerpt: t.unlockBlockchain.excerpt,
      image: 'https://pbs.twimg.com/media/GXOcrbhWQAAoFjU?format=jpg&name=small',
      href: 'https://x.com/kakrlabs/status/1833992654117634324',
      external: true,
      tags: [t.product],
      meta: t.readTime(4)
    },
    {
      title: t.unveilingPteri.title,
      excerpt: t.unveilingPteri.excerpt,
      image: 'https://pbs.twimg.com/media/GNfyC6CX0AEdgeL?format=jpg&name=small',
      href: 'https://x.com/kakrlabs/status/1815452241274585205',
      external: true,
      tags: [t.release],
      meta: t.readTime(3)
    },
    {
      title: t.transformingEnergy.title,
      excerpt: t.transformingEnergy.excerpt,
      image: 'https://pbs.twimg.com/media/GbOprA9WEAAPm0e?format=jpg&name=small',
      href: 'https://x.com/kakrlabs/status/1852011319823671485',
      external: true,
      tags: [t.perspective],
      meta: t.readTime(6)
    }
  ]
})

const items = computed(() => props.articles || defaultArticles.value)

// Swiper module and element configuration
const prevEl = ref<HTMLElement | null>(null)
const nextEl = ref<HTMLElement | null>(null)
const paginationEl = ref<HTMLElement | null>(null)
const modules = [Navigation, Pagination, Autoplay, A11y, Keyboard]

function onBeforeInit(swiper: any) {
  if (swiper.params.navigation) {
    swiper.params.navigation.prevEl = prevEl.value
    swiper.params.navigation.nextEl = nextEl.value
  }
  if (swiper.params.pagination) {
    swiper.params.pagination.el = paginationEl.value
  }
}
</script>

<style scoped>
/* Styles are unchanged */
.bg-radial-gradient {
  background-image: radial-gradient(circle at top, rgba(124, 58, 237, 0.5), transparent 40%);
}
.article-card {
  @apply relative h-full rounded-xl bg-gray-800/50 ring-1 ring-white/10 shadow-lg transition-all duration-300 ease-in-out;
}
.article-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
.card-content {
  @apply relative z-10 flex h-full flex-col rounded-xl p-5;
}
.card-glow {
  @apply absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100;
  background: radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.2), transparent 80%);
}
.tag {
  @apply inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/20;
}
.link-hover {
  @apply relative;
}
.link-hover::after {
  @apply content-[''] absolute bottom-0 left-0 h-0.5 w-full scale-x-0 rounded-full bg-indigo-400 transition-transform duration-300 ease-out;
  transform-origin: left;
}
.group:hover .link-hover::after {
  transform: scaleX(1);
}
.read-more-btn {
  @apply inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition-colors duration-300 hover:text-white;
}
.nav-btn {
  @apply inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-gray-400 ring-1 ring-white/10 transition-all duration-300 hover:bg-gray-700 hover:text-white hover:ring-white/20;
}
.nav-btn:disabled {
  @apply opacity-50 cursor-not-allowed;
}
:deep(.swiper-pagination) {
  @apply flex items-center gap-2;
}
:deep(.swiper-pagination-bullet) {
  @apply h-2 w-2 rounded-full bg-gray-600 opacity-100 transition-all duration-300 ease-in-out;
}
:deep(.swiper-pagination-bullet-active) {
  @apply w-4 bg-indigo-400;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
