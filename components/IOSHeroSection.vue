<template>
  <section class="relative overflow-hidden section-py" style="background: radial-gradient(ellipse at 50% 0%, #0a1628 0%, #050d1a 60%, #020810 100%);">
    <!-- bg texture -->
    <div class="absolute inset-0 pointer-events-none" style="background-image: url('/hero-bg.svg'); background-size: cover; opacity: 0.04;"></div>
    <!-- cyan glow left/right -->
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 pointer-events-none" style="background: radial-gradient(ellipse, rgba(6,182,212,0.18) 0%, transparent 70%); filter: blur(40px);"></div>
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 pointer-events-none" style="background: radial-gradient(ellipse, rgba(6,182,212,0.18) 0%, transparent 70%); filter: blur(40px);"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-6 sm:mb-12" data-aos="fade-up">
        <p class="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">{{ t.eyebrow }}</p>
        <h2 class="text-4xl sm:text-6xl md:text-7xl font-bold mb-4" style="background: linear-gradient(90deg, #22d3ee 0%, #4ade80 60%, #22d3ee 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          {{ t.headline }}
        </h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto">
          {{ t.subtitle }}
        </p>
      </div>

      <!-- Carousel -->
      <div class="relative flex items-center justify-center" data-aos="fade-up" data-aos-delay="100" @mouseenter="isHovered = true" @mouseleave="isHovered = false">

        <!-- Prev arrow -->
        <button @click="prev" class="absolute left-0 sm:left-4 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);" aria-label="Previous">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        </button>

        <!-- Phones strip -->
        <div class="flex items-end justify-center gap-3 sm:gap-4 w-full overflow-hidden px-12 sm:px-16" style="height: 480px;">
          <div
            v-for="(offset, i) in visibleOffsets"
            :key="offset"
            class="flex-shrink-0 rounded-3xl overflow-hidden phone-card"
            :style="phoneStyle(offset)"
          >
            <Transition name="slide-fade" mode="out-in">
              <img
                :key="getIndex(offset)"
                :src="images[getIndex(offset)]"
                alt="PTERI App Screenshot"
                class="w-full h-full object-cover"
                style="border-radius: inherit;"
              />
            </Transition>
          </div>
        </div>

        <!-- Next arrow -->
        <button @click="next" class="absolute right-0 sm:right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);" aria-label="Next">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      <!-- Dots -->
      <div class="flex justify-center gap-2 mt-4 sm:mt-6">
        <button
          v-for="(_, i) in images"
          :key="i"
          @click="goTo(i)"
          class="rounded-full transition-all duration-300"
          :style="i === current ? 'width:24px; height:6px; background:#22d3ee;' : 'width:6px; height:6px; background:rgba(255,255,255,0.2);'"
          :aria-label="`Go to slide ${i+1}`"
        />
      </div>

      <!-- Features + CTA -->
      <div class="mt-8 sm:mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400 mb-6 sm:mb-10">
          <span v-for="f in t.features" :key="f" class="flex items-center gap-1.5">
            <svg class="w-4 h-4 flex-shrink-0" style="color:#22d3ee;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            {{ f }}
          </span>
        </div>

        <!-- Download options (store cards) -->
        <!-- Download options (store cards) -->
        <div class="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">

          <!-- App Store -->
          <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank"
             class="group flex items-center gap-3 rounded-xl px-4 py-2.5 bg-white/[0.03] border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
              <svg class="w-4 h-4 text-white" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
            </span>
            <span class="text-white font-semibold text-sm leading-none">{{ t.downloadIos }}</span>
          </a>

          <!-- Google Play -->
          <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank"
             class="group flex items-center gap-3 rounded-xl px-4 py-2.5 bg-white/[0.03] border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
              <svg class="w-4 h-4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M104.6 13c-4.7 5-7.5 12.8-7.5 23v441.9c0 10.2 2.8 18 7.5 23l255.3-255.4z"/>
                <path fill="#EA4335" d="M325.3 234.3L104.6 13c1.4-1.5 3-2.7 4.7-3.6L389 172.6z"/>
                <path fill="#FBBC04" d="M446.8 189.3c11.6 6.7 19.7 18.3 19.7 22.7v88c0 4.4-8.1 16-19.7 22.7l-57.8 33.2-83.7-83.3 83.7-83.3z"/>
                <path fill="#34A853" d="M104.6 499c1.4 1.5 3 2.7 4.7 3.6L389 339.4l-63.7-63.7z"/>
              </svg>
            </span>
            <span class="text-white font-semibold text-sm leading-none">{{ t.downloadAndroid }}</span>
          </a>

          <!-- Web Wallet -->
          <a href="https://pteri.kakr.org" target="_blank"
             class="group flex items-center gap-3 rounded-xl px-4 py-2.5 bg-white/[0.03] border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
              <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4.5" width="18" height="15" rx="2" stroke-width="1.75"/>
                <path stroke-linecap="round" stroke-width="1.75" d="M3 8.5h18"/>
                <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>
                <circle cx="8.2" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>
              </svg>
            </span>
            <span class="text-white font-semibold text-sm leading-none">{{ t.tryWeb }}</span>
          </a>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const t = computed(() => {
  const translations = {
    en: {
      eyebrow: 'AUTHORITY IN YOUR CONTROL',
      headline: 'Approve Sensitive Actions From a Trusted Device',
      subtitle: 'The PTERI App lets users authenticate, control credentials, review delegated authority, approve sensitive actions, and access supported payment and privacy capabilities.',
      tagline: 'No passwords. No OTPs. True self-custody with FIDO2 and verifiable authorization evidence.',
      features: ['Biometric approval', 'Customer-controlled keys', 'Delegated authority', 'Private verification'],
      downloadAndroid: 'Download for Android',
      downloadIos: 'Download for iOS',
      tryWeb: 'Open Web App',
      iosSub: 'iPhone & iPad',
      androidSub: 'Android devices',
      webTitle: 'Web Wallet',
      webSub: 'No install needed',
    },
    de: {
      eyebrow: 'AUTORITÄT IN IHRER KONTROLLE',
      headline: 'Sensible Aktionen von einem vertrauenswürdigen Gerät genehmigen',
      subtitle: 'Mit der PTERI App können Nutzer sich authentifizieren, Anmeldedaten kontrollieren, delegierte Autorität überprüfen, sensible Aktionen genehmigen und auf unterstützte Zahlungs- und Datenschutzfunktionen zugreifen.',
      tagline: 'Keine Passwörter. Keine OTPs. Echte Selbstverwahrung mit FIDO2 und verifizierbarem Autorisierungsnachweis.',
      features: ['Biometrische Genehmigung', 'Kundenkontrollierte Schlüssel', 'Delegierte Autorität', 'Private Verifizierung'],
      downloadAndroid: 'Für Android herunterladen',
      downloadIos: 'Für iOS herunterladen',
      tryWeb: 'Web-App öffnen',
      iosSub: 'iPhone & iPad',
      androidSub: 'Android-Geräte',
      webTitle: 'Web-Wallet',
      webSub: 'Keine Installation nötig',
    },
    es: {
      eyebrow: 'AUTORIDAD BAJO TU CONTROL',
      headline: 'Aprueba Acciones Sensibles Desde un Dispositivo de Confianza',
      subtitle: 'La app PTERI permite a los usuarios autenticarse, controlar credenciales, revisar la autoridad delegada, aprobar acciones sensibles y acceder a capacidades de pago y privacidad compatibles.',
      tagline: 'Sin contraseñas. Sin OTPs. Verdadera autocustodia con FIDO2 y evidencia de autorización verificable.',
      features: ['Aprobación biométrica', 'Claves controladas por el cliente', 'Autoridad delegada', 'Verificación privada'],
      downloadAndroid: 'Descargar para Android',
      downloadIos: 'Descargar para iOS',
      tryWeb: 'Abrir app web',
      iosSub: 'iPhone y iPad',
      androidSub: 'Dispositivos Android',
      webTitle: 'Web Wallet',
      webSub: 'Sin instalación',
    },
    ja: {
      eyebrow: 'あなたの手にある権限',
      headline: '信頼できるデバイスから重要な操作を承認',
      subtitle: 'PTERIアプリを使えば、認証、資格情報の管理、委任された権限の確認、重要な操作の承認、対応する決済・プライバシー機能へのアクセスが可能です。',
      tagline: 'パスワード不要。OTP不要。FIDO2と検証可能な認可証拠による真のセルフカストディ。',
      features: ['生体認証による承認', '顧客管理型の鍵', '委任された権限', 'プライベートな検証'],
      downloadAndroid: 'Androidでダウンロード',
      downloadIos: 'iOSでダウンロード',
      tryWeb: 'Webアプリを開く',
      iosSub: 'iPhone・iPad',
      androidSub: 'Androidデバイス',
      webTitle: 'Webウォレット',
      webSub: 'インストール不要',
    },
    ar: {
      eyebrow: 'السلطة بين يديك',
      headline: 'اعتمد الإجراءات الحساسة من جهاز موثوق',
      subtitle: 'يتيح تطبيق PTERI للمستخدمين المصادقة، والتحكم في بيانات الاعتماد، ومراجعة السلطة المفوَّضة، واعتماد الإجراءات الحساسة، والوصول إلى إمكانيات الدفع والخصوصية المدعومة.',
      tagline: 'لا كلمات مرور. لا OTPs. حضانة ذاتية حقيقية مع FIDO2 وأدلة تفويض قابلة للتحقق.',
      features: ['اعتماد بيومتري', 'مفاتيح يتحكم بها العميل', 'سلطة مفوَّضة', 'تحقق خاص'],
      downloadAndroid: 'تحميل لـ Android',
      downloadIos: 'تحميل لـ iOS',
      tryWeb: 'فتح التطبيق على الويب',
      iosSub: 'iPhone و iPad',
      androidSub: 'أجهزة Android',
      webTitle: 'محفظة الويب',
      webSub: 'لا يتطلب تثبيت',
    },
  }
  return translations[locale.value] || translations.en
})

const images = [
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.47.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.28.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.10.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.07.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.17.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.24.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.29.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.29.04.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.29.25.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.30.10.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-02 at 22.08.25.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-02 at 22.08.33.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-27 at 01.17.18.png',
]

// offsets relative to center: -2, -1, 0, 1, 2
const visibleOffsets = [-2, -1, 0, 1, 2]

const current = ref(0)
const direction = ref(1) // 1 = forward, -1 = backward
const isHovered = ref(false)

function getIndex(offset) {
  return (current.value + offset + images.length * 10) % images.length
}

function phoneStyle(offset) {
  const abs = Math.abs(offset)
  const heights = { 0: 420, 1: 340, 2: 260 }
  const widths  = { 0: 200, 1: 160, 2: 124 }
  const opacities = { 0: 1, 1: 0.75, 2: 0.45 }
  const h = heights[abs] ?? 220
  const w = widths[abs] ?? 110
  const op = opacities[abs] ?? 0.3
  const border = offset === 0
    ? '2px solid rgba(6,182,212,0.6)'
    : '1px solid rgba(255,255,255,0.08)'
  const shadow = offset === 0
    ? '0 0 40px rgba(6,182,212,0.25), 0 20px 60px rgba(0,0,0,0.6)'
    : '0 8px 32px rgba(0,0,0,0.4)'
  return `width:${w}px; height:${h}px; opacity:${op}; border:${border}; box-shadow:${shadow}; z-index:${10 - abs};`
}

function next() {
  direction.value = 1
  current.value = (current.value + 1) % images.length
}
function prev() {
  direction.value = -1
  current.value = (current.value - 1 + images.length) % images.length
}
function goTo(i) {
  direction.value = i > current.value ? 1 : -1
  current.value = i
}

let timer
function startTimer() {
  timer = setInterval(() => {
    if (!isHovered.value) next()
  }, 3500)
}

onMounted(() => { startTimer() })
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
/* Each phone card animates its own size/opacity/shadow smoothly */
.phone-card {
  position: relative;
  transition:
    width 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.5s ease,
    box-shadow 0.5s ease,
    border-color 0.5s ease;
}

/* Slide-fade transition for the image inside each phone */
.slide-fade-enter-active {
  transition: opacity 0.4s ease;
}
.slide-fade-leave-active {
  transition: opacity 0.25s ease;
  position: absolute;
  inset: 0;
}
.slide-fade-enter-from {
  opacity: 0;
}
.slide-fade-leave-to {
  opacity: 0;
}
</style>
