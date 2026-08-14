<template>
  <div class="min-h-screen bg-black text-slate-300 font-inter">
    <!-- HERO -->
    <section class="relative pt-36 pb-12">
      <div class="absolute inset-0 pointer-events-none" style="background-image: url('/hero-bg.svg'); background-size: cover; opacity: 0.15;"></div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          {{ $t('pteri.hero.title') }}
        </h1>
      </div>
    </section>

    <!-- Custom Cards Section -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

      <!-- OVERVIEW -->
      <section class="mb-12" data-aos="fade-up">
        <div class="bg-[#0f0f0f] rounded-3xl p-8 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
          <h2 class="text-2xl font-bold text-white mb-6 relative z-10">{{ $t('pteri.overview.title') }}</h2>
          <div class="grid md:grid-cols-2 gap-10 relative z-10">
            <div>
              <p class="text-slate-400 leading-relaxed mb-4" style="white-space: pre-line;">{{ $t('pteri.overview.col1') }}</p>
            </div>
            <div>
              <p class="text-slate-400 leading-relaxed mb-4 font-medium">
                <span class="text-white">{{ $t('pteri.overview.col2Highlight') }}</span><br/>
                {{ $t('pteri.overview.col2') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- APIs -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-white mb-6 pl-4">{{ $t('pteri.apis.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div v-for="(api, i) in apiCards" :key="api.title" class="bg-[#0f0f0f] rounded-3xl p-8 border border-white/5 shadow-2xl group hover:border-white/20 transition-all flex flex-col justify-between min-h-[220px]" data-aos="fade-up" :data-aos-delay="i * 60">
            <div>
              <h3 class="font-bold text-white text-lg mb-4">{{ api.title }}</h3>
              <ul class="space-y-2">
                <li v-for="pt in api.points" :key="pt" class="flex items-center gap-2 text-sm text-slate-400">
                  <span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                  {{ pt }}
                </li>
              </ul>
            </div>
            <div class="flex justify-end mt-6">
              <div class="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <span v-html="api.svg"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-[#0f0f0f] rounded-[1.2rem] p-6 border border-white/5 flex flex-col gap-3 cursor-pointer hover:border-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28" height="28"><path fill="#1565c0" d="M6,42V14l18-8l18,8v28H6z"/><path fill="#1976d2" d="M24,6L6,14v2l18-8l18,8v-2L24,6z"/><rect x="10" y="20" width="8" height="6" rx="1" fill="#90caf9"/><rect x="20" y="20" width="8" height="6" rx="1" fill="#90caf9"/><rect x="30" y="20" width="8" height="6" rx="1" fill="#90caf9"/><rect x="18" y="30" width="12" height="12" rx="1" fill="#fff"/></svg>
            <div>
              <h4 class="font-bold text-white text-sm">{{ $t('pteri.apis.blockchainService.title') }}</h4>
              <p class="text-[11px] text-slate-500 mt-1 leading-snug">{{ $t('pteri.apis.blockchainService.description') }}</p>
            </div>
          </div>
          <div class="bg-[#0f0f0f] rounded-[1.2rem] p-6 border border-white/5 flex flex-col gap-3 cursor-pointer hover:border-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28" height="28"><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg>
            <div>
              <h4 class="font-bold text-white text-sm">{{ $t('pteri.apis.controlService.title') }}</h4>
              <p class="text-[11px] text-slate-500 mt-1 leading-snug">{{ $t('pteri.apis.controlService.description') }}</p>
            </div>
          </div>
          <div class="bg-[#0f0f0f] rounded-[1.2rem] p-6 border border-white/5 flex flex-col gap-3 cursor-pointer hover:border-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28" height="28"><circle cx="24" cy="24" r="20" fill="#b0bec5"/><circle cx="24" cy="24" r="16" fill="#78909c"/><text x="24" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#fff" font-family="Arial">Ł</text></svg>
            <div>
              <h4 class="font-bold text-white text-sm">{{ $t('pteri.apis.custodyProtocol.title') }}</h4>
              <p class="text-[11px] text-slate-500 mt-1 leading-snug">{{ $t('pteri.apis.custodyProtocol.description') }}</p>
            </div>
          </div>
          <div class="bg-[#0f0f0f] rounded-[1.2rem] p-6 border border-white/5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-white/20 transition-all gap-2 min-h-[140px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
            <h4 class="font-bold text-white text-sm">{{ $t('pteri.apis.developerTools') }}</h4>
          </div>
        </div>
      </section>

    </div>

    <!-- 6 CORE MODULES -->
    <section class="py-24 border-t" style="border-color: rgba(255,255,255,0.06);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16" data-aos="fade-up">
          <p class="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">{{ $t('pteri.coreModules.label') }}</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-white">{{ $t('pteri.coreModules.title') }}</h2>
        </div>
        <div class="space-y-0">
          <div v-for="(mod, i) in modules" :key="mod.title" class="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t" style="border-color: rgba(255,255,255,0.06);" data-aos="fade-up" :data-aos-delay="i * 50">
            <div class="md:col-span-1 flex items-start">
              <span class="text-sm font-bold" style="color: rgba(255,255,255,0.2);">0{{ i + 1 }}</span>
            </div>
            <div class="md:col-span-3">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
                  <span v-html="mod.svg"></span>
                </div>
                <h3 class="font-bold text-white text-base leading-snug">{{ mod.title }}</h3>
              </div>
              <p class="text-sm text-slate-500 pl-11">{{ mod.sub }}</p>
            </div>
            <div class="md:col-span-4">
              <p class="text-sm text-slate-400 leading-relaxed">{{ mod.desc }}</p>
            </div>
            <div class="md:col-span-4">
              <ul class="space-y-2">
                <li v-for="pt in mod.points" :key="pt" class="flex items-start gap-2 text-sm text-slate-400">
                  <span class="w-1.5 h-1.5 mt-1.5 rounded-full bg-slate-500 flex-shrink-0"></span>
                  {{ pt }}
                </li>
              </ul>
            </div>
          </div>
          <div class="border-t" style="border-color: rgba(255,255,255,0.06);"></div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="py-24 border-t" style="border-color: rgba(255,255,255,0.06);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-14 text-center" data-aos="fade-up">
          <p class="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">{{ $t('pteri.howItWorks.label') }}</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-white">{{ $t('pteri.howItWorks.title') }}</h2>
        </div>
        <div class="relative mt-16 max-w-5xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
          <div class="hidden sm:block absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start relative z-10 gap-8 sm:gap-4">
            <div v-for="step in howItWorks" :key="step.label" class="flex flex-col items-center text-center w-full sm:w-40 group cursor-default">
              <div class="w-20 h-20 rounded-[1.5rem] bg-[#0f0f0f] border border-white/10 flex items-center justify-center shadow-xl mb-5 relative group-hover:-translate-y-2 group-hover:border-white/30 transition-all duration-300 overflow-hidden">
                <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span v-html="step.svg" class="relative z-10 group-hover:scale-110 transition-transform duration-300 block"></span>
              </div>
              <p class="text-sm font-bold text-white leading-relaxed">{{ step.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="py-28 border-t" style="border-color: rgba(255,255,255,0.06);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl" data-aos="fade-up">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{{ $t('pteri.cta.title') }}</h2>
          <p class="text-slate-400 mb-10 leading-relaxed max-w-xl">{{ $t('pteri.cta.description') }}</p>
          <div class="flex flex-wrap gap-3">
            <a href="https://pteri.org/Register" target="_blank" class="px-6 py-3 rounded-xl font-bold text-sm text-black bg-white hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">{{ $t('pteri.cta.getApiKey') }}</a>
            <a href="https://pteri.kakr.org" target="_blank" class="px-6 py-3 rounded-xl font-bold text-sm" style="background: transparent; border: 1px solid rgba(255,255,255,0.12); color: #94a3b8;">{{ $t('pteri.cta.pteriWallet') }}</a>
            <a href="/contact?intent=demo" class="px-6 py-3 rounded-xl font-bold text-sm" style="background: transparent; border: 1px solid rgba(255,255,255,0.12); color: #94a3b8;">{{ $t('pteri.cta.bookDemo') }}</a>
            <a href="https://docs.kakr.ai" target="_blank" class="px-6 py-3 rounded-xl font-bold text-sm" style="background: transparent; border: 1px solid rgba(255,255,255,0.12); color: #94a3b8;">{{ $t('pteri.cta.viewDocs') }}</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { t } = useI18n()

const { setSEO } = useSEO()
setSEO({
  title: 'PTERI | Identity and Authorization Security for Humans and AI',
  description: 'Bring cryptographically verifiable identity and authorization security to your existing infrastructure with PTERI. Customer-controlled keys and Litecoin-powered cryptographic trust for identity, payments, and AI agents.',
  image: '/platform-og.png',
})

const apiCards = computed(() => [
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"><circle cx="24" cy="24" r="20" fill="#669df6"/><path fill="#317be4" d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33C37.97,18,42,22.03,42,27z"/><polygon fill="#fff" points="27,14 26,13 22,13 21,14 15,14 15,16 18,16 30,16 33,16 33,14"/><path fill="#fff" d="M16,18v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V18H16z M24,21c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S22.9,21,24,21z M28,31h-8v-2c0-1.33,2.67-2,4-2s4,0.67,4,2V31z"/></svg>`,
    title: t('pteri.apis.items.0.title'), points: [t('pteri.apis.items.0.points.0'), t('pteri.apis.items.0.points.1')]
  },
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg>`,
    title: t('pteri.apis.items.1.title'), points: [t('pteri.apis.items.1.points.0')]
  },
  {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>`,
    title: t('pteri.apis.items.2.title'), points: [t('pteri.apis.items.2.points.0'), t('pteri.apis.items.2.points.1')]
  },
])

const moduleIcons: Record<number, string> = {
  0: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18"><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg>`,
  1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18"><circle cx="24" cy="24" r="20" fill="#669df6"/><path fill="#317be4" d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33C37.97,18,42,22.03,42,27z"/><polygon fill="#fff" points="27,14 26,13 22,13 21,14 15,14 15,16 18,16 30,16 33,16 33,14"/><path fill="#fff" d="M16,18v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V18H16z M24,21c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S22.9,21,24,21z M28,31h-8v-2c0-1.33,2.67-2,4-2s4,0.67,4,2V31z"/></svg>`,
  2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18"><circle cx="24" cy="24" r="20" fill="#b0bec5"/><circle cx="24" cy="24" r="16" fill="#78909c"/><text x="24" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#fff" font-family="Arial">Ł</text></svg>`,
  3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18"><path fill="#00BCD4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"/><path fill="#006064" d="M24,7c-9.4,0-17,7.6-17,17s7.6,17,17,17s17-7.6,17-17S33.4,7,24,7z"/><circle cx="24" cy="24" r="6" fill="#00BCD4"/><circle cx="24" cy="24" r="3" fill="#fff"/></svg>`,
  4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18"><path fill="#1565c0" d="M6,42V14l18-8l18,8v28H6z"/><path fill="#1976d2" d="M24,6L6,14v2l18-8l18,8v-2L24,6z"/><rect x="10" y="20" width="8" height="6" rx="1" fill="#90caf9"/><rect x="20" y="20" width="8" height="6" rx="1" fill="#90caf9"/><rect x="30" y="20" width="8" height="6" rx="1" fill="#90caf9"/><rect x="18" y="30" width="12" height="12" rx="1" fill="#fff"/></svg>`,
  5: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>`,
}

const modules = computed(() => [
  { svg: moduleIcons[0], title: t('pteri.coreModules.items.0.title'), sub: t('pteri.coreModules.items.0.sub'), desc: t('pteri.coreModules.items.0.desc'), points: [t('pteri.coreModules.items.0.points.0'), t('pteri.coreModules.items.0.points.1'), t('pteri.coreModules.items.0.points.2')] },
  { svg: moduleIcons[1], title: t('pteri.coreModules.items.1.title'), sub: t('pteri.coreModules.items.1.sub'), desc: t('pteri.coreModules.items.1.desc'), points: [t('pteri.coreModules.items.1.points.0'), t('pteri.coreModules.items.1.points.1'), t('pteri.coreModules.items.1.points.2')] },
  { svg: moduleIcons[2], title: t('pteri.coreModules.items.2.title'), sub: t('pteri.coreModules.items.2.sub'), desc: t('pteri.coreModules.items.2.desc'), points: [t('pteri.coreModules.items.2.points.0'), t('pteri.coreModules.items.2.points.1'), t('pteri.coreModules.items.2.points.2')] },
  { svg: moduleIcons[3], title: t('pteri.coreModules.items.3.title'), sub: t('pteri.coreModules.items.3.sub'), desc: t('pteri.coreModules.items.3.desc'), points: [t('pteri.coreModules.items.3.points.0'), t('pteri.coreModules.items.3.points.1'), t('pteri.coreModules.items.3.points.2')] },
  { svg: moduleIcons[4], title: t('pteri.coreModules.items.4.title'), sub: t('pteri.coreModules.items.4.sub'), desc: t('pteri.coreModules.items.4.desc'), points: [t('pteri.coreModules.items.4.points.0'), t('pteri.coreModules.items.4.points.1'), t('pteri.coreModules.items.4.points.2')] },
  { svg: moduleIcons[5], title: t('pteri.coreModules.items.5.title'), sub: t('pteri.coreModules.items.5.sub'), desc: t('pteri.coreModules.items.5.desc'), points: [t('pteri.coreModules.items.5.points.0'), t('pteri.coreModules.items.5.points.1'), t('pteri.coreModules.items.5.points.2')] },
])

const howItWorksIcons: Record<number, string> = {
  0: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32"><rect x="14" y="4" width="20" height="40" rx="4" fill="#546e7a"/><rect x="16" y="6" width="16" height="28" rx="2" fill="#37474f"/><circle cx="24" cy="38" r="2" fill="#90a4ae"/><rect x="20" y="8" width="8" height="2" rx="1" fill="#546e7a"/></svg>`,
  1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32"><circle cx="24" cy="24" r="20" fill="#669df6"/><path fill="#317be4" d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33C37.97,18,42,22.03,42,27z"/><polygon fill="#fff" points="27,14 26,13 22,13 21,14 15,14 15,16 18,16 30,16 33,16 33,14"/><path fill="#fff" d="M16,18v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V18H16z M24,21c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S22.9,21,24,21z M28,31h-8v-2c0-1.33,2.67-2,4-2s4,0.67,4,2V31z"/></svg>`,
  2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>`,
  3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32"><circle cx="24" cy="24" r="20" fill="#b0bec5"/><circle cx="24" cy="24" r="16" fill="#78909c"/><text x="24" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#fff" font-family="Arial">Ł</text></svg>`,
  4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32"><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg>`,
}

const howItWorks = computed(() => [
  { svg: howItWorksIcons[0], label: t('pteri.howItWorks.steps.0.label') },
  { svg: howItWorksIcons[1], label: t('pteri.howItWorks.steps.1.label') },
  { svg: howItWorksIcons[2], label: t('pteri.howItWorks.steps.2.label') },
  { svg: howItWorksIcons[3], label: t('pteri.howItWorks.steps.3.label') },
  { svg: howItWorksIcons[4], label: t('pteri.howItWorks.steps.4.label') },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.font-inter {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
</style>


