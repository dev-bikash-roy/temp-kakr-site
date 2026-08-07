<template>
  <section class="section-py sm:section-py bg-white dark:bg-slate-950 overflow-hidden relative">
    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left" data-aos="fade-right">
          <h2 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">{{ content.titlePrefix }}</span>
            <br />
            <span class="text-slate-900 dark:text-white">{{ content.titleSuffix }}</span>
          </h2>
          <p class="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {{ content.description }}
          </p>
          
          <!-- Download Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
             <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="block sm:inline-block transition-transform hover:scale-105 w-full sm:w-auto">
                <img src="/playstore.png" alt="Get it on Google Play" class="h-12 sm:h-14 w-full sm:w-auto rounded-lg" />
             </a>
             <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="block sm:inline-block transition-transform hover:scale-105 w-full sm:w-auto">
                <img src="/ios.png" alt="Download on the App Store" class="h-12 sm:h-14 w-full sm:w-auto rounded-lg" />
             </a>
          </div>
        </div>

        <!-- Right: Screenshot Carousel -->
        <div class="relative flex justify-center" data-aos="fade-left">
          <!-- Decorative blob -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="relative w-[280px] sm:w-[320px]">
            <!-- Slides -->
            <div class="overflow-hidden rounded-3xl shadow-2xl">
              <div
                class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
              >
                <img
                  v-for="(img, i) in screenshots"
                  :key="i"
                  :src="img"
                  :alt="`Pteri screenshot ${i + 1}`"
                  class="w-full flex-shrink-0 object-cover"
                />
              </div>
            </div>

            <!-- Dot indicators -->
            <div class="flex justify-center gap-2 mt-5">
              <button
                v-for="(_, i) in screenshots"
                :key="i"
                @click="activeSlide = i"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="activeSlide === i ? 'bg-purple-500 w-5' : 'bg-slate-400 dark:bg-slate-600'"
              />
            </div>

            <!-- Prev / Next -->
            <button
              @click="prev"
              class="absolute left-[-18px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-700 dark:text-white hover:bg-purple-50 dark:hover:bg-slate-700 transition"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              @click="next"
              class="absolute right-[-18px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-700 dark:text-white hover:bg-purple-50 dark:hover:bg-slate-700 transition"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const screenshots = [
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.47.png',
  '/pteri-new-ss/pteri-2.webp',
  '/pteri-new-ss/pteri-3.webp',
  '/pteri-new-ss/pteri-4.webp',
  '/pteri-new-ss/pteri-5.webp',
  '/pteri-new-ss/pteri-6.webp',
  '/pteri-new-ss/pteri-7.webp',
]

const activeSlide = ref(0)

function next() {
  activeSlide.value = (activeSlide.value + 1) % screenshots.length
}
function prev() {
  activeSlide.value = (activeSlide.value - 1 + screenshots.length) % screenshots.length
}

let timer
onMounted(() => { timer = setInterval(next, 3500) })
onUnmounted(() => clearInterval(timer))

const content = computed(() => {
  const translations = {
    en: {
      titlePrefix: 'Hola, Pteri!',
      titleSuffix: 'Best in Class',
      description: 'A self-custody Litecoin wallet built for the agentic era.'
    },
    de: {
      titlePrefix: 'Hola, Pteri!',
      titleSuffix: 'Klassenbester',
      description: 'Erleben Sie das sicherste und benutzerfreundlichste Litecoin-Wallet.'
    },
    es: {
      titlePrefix: '¡Hola, Pteri!',
      titleSuffix: 'El mejor de su clase',
      description: 'Experimenta la billetera Litecoin más segura y fácil de usar.'
    },
    ja: {
      titlePrefix: 'Hola, Pteri!',
      titleSuffix: 'クラス最高',
      description: '最も安全で使いやすいLitecoinウォレットを体験してください。'
    }
  }
  return translations[locale.value] || translations.en
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
