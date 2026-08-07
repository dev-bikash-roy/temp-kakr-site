<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden">
    <!-- Hero Section -->
    <section class="section-py">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6"
               data-aos="zoom-in">
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span class="text-blue-700 dark:text-blue-300 text-sm font-medium">{{ platformsTranslations.hero.badge }}</span>
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" data-aos="fade-up">
            {{ platformsTranslations.hero.titlePrefix }} <br>
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <span aria-live="polite">{{ typedText }}</span><span class="caret" aria-hidden="true"></span>
            </span>
          </h1>
          
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="120">
            {{ platformsTranslations.hero.subtitle }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="220">
           <a href="https://pteri.org/Register" target="_blank">
            <button class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
              {{ platformsTranslations.hero.explore }}
              <svg class="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </a>
          <a href="https://pteri.org/Pricing" target="_blank">
            <button class="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
              {{ platformsTranslations.hero.pilot }}
            </button>
          </a>
          </div>
        </div>
        
        <!-- Feature Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="bg-white dark:bg-dark-900 dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200/50 dark:border-gray-800/50 hover:shadow-md transition-shadow"
               data-aos="fade-right">
            <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.994a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ platformsTranslations.features.security.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ platformsTranslations.features.security.desc }}</p>
          </div>
          
          <div class="bg-white dark:bg-dark-900 dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200/50 dark:border-gray-800/50 hover:shadow-md transition-shadow"
               data-aos="fade-up" data-aos-delay="100">
            <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ platformsTranslations.features.speed.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ platformsTranslations.features.speed.desc }}</p>
          </div>
          
          <div class="bg-white dark:bg-dark-900 dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200/50 dark:border-gray-800/50 hover:shadow-md transition-shadow"
               data-aos="fade-left">
            <div class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ platformsTranslations.features.compliance.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ platformsTranslations.features.compliance.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Showcase -->
    <section class="py-20 bg-white dark:bg-dark-900 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-24">
          <h2 class="text-4xl font-bold mb-4" data-aos="fade-up">{{ platformsTranslations.showcase.title }}</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="120">{{ platformsTranslations.showcase.subtitle }}</p>
        </div>
        
        <div class="space-y-24">
          <!-- PTERI App -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
            <div class="order-2 lg:order-1" data-aos="fade-right">
              <div class="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
                <span class="text-blue-700 dark:text-blue-300 text-sm font-medium">{{ platformsTranslations.wallet.badge }}</span>
              </div>
              <h3 class="text-3xl font-bold mb-4">{{ platformsTranslations.wallet.title }}</h3>
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {{ platformsTranslations.wallet.desc }}
              </p>
              <ul class="space-y-3 mb-8">
                <li v-for="(bullet, index) in platformsTranslations.wallet.bullets" :key="index" class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">{{ bullet }}</span>
                </li>
              </ul>
              <div class="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://pteri.org/Register"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {{ platformsTranslations.wallet.cta }}
                </a>
              </div>
            </div>
            <div class="order-1 lg:order-2" data-aos="fade-left">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img src="/pteri-flowchart3.jpg" alt="PTERI App" class="relative w-full rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Platform Showcase Continued -->
    <section class="py-20 bg-white dark:bg-dark-900 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="space-y-24">
          <!-- PTERI Playground -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
            <div class="order-1 lg:order-1" data-aos="fade-right">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img src="/images/pteri-playground2.png" alt="PTERI Playground" class="relative w-full rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
            <div class="order-2 lg:order-2" data-aos="fade-left">
              <div class="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
                <span class="text-emerald-700 dark:text-emerald-300 text-sm font-medium">{{ platformsTranslations.playground.badge }}</span>
              </div>
              <h3 class="text-3xl font-bold mb-4">{{ platformsTranslations.playground.title }}</h3>
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {{ platformsTranslations.playground.desc }}
              </p>
              <ul class="space-y-3 mb-8">
                <li v-for="(bullet, index) in platformsTranslations.playground.bullets" :key="index" class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">{{ bullet }}</span>
                </li>
              </ul>
              <div class="flex flex-col sm:flex-row gap-4">
<div class="flex flex-wrap gap-3">
  <a
    href="https://playground.pteri.org/"
    target="_blank"
    rel="noopener"
    role="button"
    class="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
  >
    {{ platformsTranslations.playground.cta1 }}
  </a>

  <a
    href="https://docs.kakr.ai/"
    target="_blank"
    rel="noopener"
    role="button"
    class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
  >
    {{ platformsTranslations.playground.cta2 }}
  </a>
</div>

              </div>
            </div>
          </div>
          
          <!-- PTERI Intelligence -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
            <div class="order-2 lg:order-1" data-aos="fade-right">
              <div class="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full mb-6">
                <span class="text-indigo-700 dark:text-indigo-300 text-sm font-medium">{{ platformsTranslations.intelligence.badge }}</span>
              </div>
              <h3 class="text-3xl font-bold mb-4">{{ platformsTranslations.intelligence.title }}</h3>
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {{ platformsTranslations.intelligence.desc }}
              </p>
              <ul class="space-y-3 mb-8">
                <li v-for="(bullet, index) in platformsTranslations.intelligence.bullets" :key="index" class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">{{ bullet }}</span>
                </li>
              </ul>
              <div class="flex flex-col sm:flex-row gap-4">
<div class="flex flex-wrap gap-3">
  <a
    href="https://playground.pteri.org/Chat/Pteri-intelligence"
    target="_blank"
    rel="noopener"
    role="button"
    class="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
  >
    {{ platformsTranslations.intelligence.cta1 }}
  </a>

  <a
    href="https://docs.kakr.ai/"
    target="_blank"
    rel="noopener"
    role="button"
    class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
  >
    {{ platformsTranslations.intelligence.cta2 }}
  </a>
</div>

              </div>
            </div>
            <div class="order-1 lg:order-2" data-aos="fade-left">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img src="/images/pteri-inteligence.png" alt="PTERI Intelligence" class="relative w-full rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
          
          <!-- PTERI Data -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
            <div class="order-1 lg:order-1" data-aos="fade-right">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img src="/pteri-data.png" alt="PTERI Data" class="relative w-full rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
            <div class="order-2 lg:order-2" data-aos="fade-left">
              <div class="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-900/30 px-4 py-2 rounded-full mb-6">
                <span class="text-orange-700 dark:text-orange-300 text-sm font-medium">{{ platformsTranslations.data.badge }}</span>
              </div>
              <h3 class="text-3xl font-bold mb-4">{{ platformsTranslations.data.title }}</h3>
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {{ platformsTranslations.data.desc }}
              </p>
              <ul class="space-y-3 mb-8">
                <li v-for="(bullet, index) in platformsTranslations.data.bullets" :key="index" class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">{{ bullet }}</span>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Storylane Demo Section -->
    <section class="section-py bg-gray-100">
      <StorylaneDemoSection />
    </section>

    <!-- Comparison Section -->
    <section class="section-py bg-gray-50 dark:bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4" data-aos="fade-up">{{ platformsTranslations.comparison.title }}</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="120">{{ platformsTranslations.comparison.subtitle }}</p>
        </div>
        
        <div class="bg-white dark:bg-dark-900 dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden" data-aos="zoom-in">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th class="px-8 py-6 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                  <th class="px-8 py-6 text-center text-sm font-semibold text-gray-900 dark:text-white">Kakr PTERI Platforms</th>
                  <th class="px-8 py-6 text-center text-sm font-semibold text-gray-900 dark:text-white">Traditional Systems</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <td class="px-8 py-6 text-sm font-medium text-gray-900 dark:text-white">Security</td>
                  <td class="px-8 py-6 text-center">
                    <span class="inline-flex items-center text-green-600 dark:text-green-400">
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                      Decentralized, customer-controlled keys
                    </span>
                  </td>
                  <td class="px-8 py-6 text-center">
                    <span class="inline-flex items-center text-red-600 dark:text-red-400">
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                      Centralized, breach-prone
                    </span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <td class="px-8 py-6 text-sm font-medium text-gray-900 dark:text-white">Cost</td>
                  <td class="px-8 py-6 text-center"><span class="text-green-600 dark:text-green-400 font-medium">Low per-transaction fees</span></td>
                  <td class="px-8 py-6 text-center"><span class="text-red-600 dark:text-red-400 font-medium">High SMS/processing costs</span></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <td class="px-8 py-6 text-sm font-medium text-gray-900 dark:text-white">Uptime</td>
                  <td class="px-8 py-6 text-center"><span class="text-green-600 dark:text-green-400 font-medium">Running since 2011</span></td>
                  <td class="px-8 py-6 text-center"><span class="text-red-600 dark:text-red-400 font-medium">Frequent outages</span></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <td class="px-8 py-6 text-sm font-medium text-gray-900 dark:text-white">Compliance</td>
                  <td class="px-8 py-6 text-center"><span class="text-green-600 dark:text-green-400 font-medium">Automated, exportable audit trails</span></td>
                  <td class="px-8 py-6 text-center"><span class="text-red-600 dark:text-red-400 font-medium">Limited standards</span></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <td class="px-8 py-6 text-sm font-medium text-gray-900 dark:text-white">Integration</td>
                  <td class="px-8 py-6 text-center"><span class="text-green-600 dark:text-green-400 font-medium">REST/GraphQL, SDKs, no-code</span></td>
                  <td class="px-8 py-6 text-center"><span class="text-red-600 dark:text-red-400 font-medium">Complex, siloed setups</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials removed: entries were fabricated (placeholder personas and
         invented outcome quotes). Restore only with real, approved customer
         quotes, real names/roles, and permission to publish. -->

    <!-- CTA Section -->
    <section class="section-py bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-6" data-aos="fade-up">{{ platformsTranslations.cta.title }}</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="120">
          {{ platformsTranslations.cta.subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="zoom-in">
          <div class="flex flex-wrap gap-3">
  <a
    href="https://pteri.org/Register"
    target="_blank"
    rel="noopener"
    role="button"
    class="px-8 py-4 bg-white dark:bg-dark-900 text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
  >
    {{ platformsTranslations.cta.btn1 }}
  </a>

  <a
    href="/contact"
    role="button"
    class="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white dark:bg-dark-900/10 transition-all"
  >
    {{ platformsTranslations.cta.btn2 }}
  </a>
</div>

        </div>
        <div class="mt-12 grid grid-cols-3 gap-8 text-white/90" data-aos="fade-up" data-aos-delay="200">
          <div v-for="(stat, index) in platformsTranslations.cta.stats" :key="index">
            <div class="text-3xl font-bold">{{ stat.value }}</div>
            <div class="text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'

const { locale } = useI18n()

definePageMeta({
  layout: 'default'
})

import { useSEO } from '~/composables/useSEO'

const { setSEO } = useSEO()

setSEO({
  title: 'PTERI Platforms - Enterprise Web3 Solutions on Litecoin | Kakr Labs',
  description: 'Explore the PTERI platform suite: Passwordless 2FA Wallet, AI Playground, and Data solutions. Built on Litecoin\'s secure, proof-of-work blockchain.',
  keywords: ['PTERI Wallet', 'PTERI Playground', 'PTERI Intelligence', 'blockchain platforms', 'Litecoin', 'Web3', '2FA', 'MCP', 'enterprise blockchain', 'decentralized security'],
  image: 'https://www.kakr.ai/Pteri-Flowchart.png'
})

const platformsTranslations = computed(() => {
  const texts = {
    en: {
      hero: {
        badge: 'Enterprise Platforms',
        titlePrefix: 'Next-Generation Web3',
        subtitle: 'Kakr Labs delivers cutting-edge platforms on Litecoin\'s proof-of-work blockchain, processing transactions with low per-transaction fees.',
        explore: 'Explore Platforms',
        pilot: '3-Month Pilot (50% Off)'
      },
      features: {
        security: { title: 'Enterprise Grade Security', desc: 'Decentralized, phishing-resistant with customer-controlled keys' },
        speed: { title: 'Lightning Fast & Low Cost', desc: 'Low per-transaction fees with 2.5-minute confirmations' },
        compliance: { title: 'Compliance Ready', desc: 'Controls and audit evidence to support GDPR, HIPAA, and NYDFS programs' }
      },
      showcase: {
        title: 'Our Platform Suite',
        subtitle: 'Powerful, modular solutions designed for enterprise adoption'
      },
      wallet: {
        badge: 'PTERI App',
        title: 'Passwordless, Phishing-Resistant 2FA',
        desc: 'A decentralized wallet with free 2FA (wallet message-signing from BIP-39). Protect logins and transactions with cryptographic proofs and low per-transaction fees.',
        bullets: [
          'Decentralized 2FA for phishing resistance',
          'SDKs: Swift, Kotlin, JavaScript, Python',
          'Ideal for Finance, Telecom, SaaS',
          'Strong cryptographic encryption with customer-controlled keys',
          'Zero data storage for complete privacy',
          'Wallet-controlled keys for true ownership'
        ],
        desc2: 'Built on Litecoin\'s proven, proof-of-work-secured blockchain, our wallet solution provides enterprise-grade security without compromising user experience.',
        desc3: 'Seamless integration with our comprehensive SDKs and APIs allows developers to implement passwordless authentication in days, not months.',
        cta: 'Try PTERI Free'
      },
      playground: {
        badge: 'PTERI Playground',
        title: 'Build Web3 Apps with Ease',
        desc: 'Use natural language to create wallets, manage transactions, and deploy DApps on the Litecoin network.',
        bullets: [
          'AI assistance for instant scaffolding',
          'No node maintenance required',
          'Perfect for startups & education'
        ],
        cta1: 'Explore Playground',
        cta2: 'View Docs →'
      },
      intelligence: {
        badge: 'PTERI Intelligence',
        title: 'Natural Language Control with MCP',
        desc: 'Deploy and control LLMs on your private network with Model Context Protocol (MCP) servers.',
        bullets: [
          'Privacy-focused transaction controls',
          'Natural language API interactions',
          'Suitable for enterprise & government'
        ],
        cta1: 'Intelligence Solutions',
        cta2: 'Documentation →'
      },
      data: {
        badge: 'PTERI Data',
        title: 'Backbone for Your Operational Data',
        desc: 'Transform raw data into actionable intelligence with model-driven pipelines.',
        bullets: [
          'REST/GraphQL APIs for seamless data flow',
          'Scalable for mission-critical ops',
          'Governance built-in'
        ]
      },
      storylane: {
        title: 'Experience Pteri Explorer',
        subtitle: 'Take an interactive tour of our platform'
      },
      comparison: {
        title: 'Why Choose Kakr Platforms?',
        subtitle: 'The clear advantage over traditional systems'
      },
      cta: {
        title: 'Ready to Transform Your Operations?',
        subtitle: 'Start with our free PTERI App or explore a 3-month pilot at 50% off.',
        btn1: 'Start Free Trial',
        btn2: 'Schedule Demo',
        stats: [
          { value: '24/7', label: 'Support' },
          { value: 'SLA', label: 'Availability' },
          { value: '30+', label: 'Integrations' }
        ]
      },
      typing: ['Platforms', 'Security', 'Identity', 'Data', 'Automation']
    },
    de: {
      hero: {
        badge: 'Unternehmensplattformen',
        titlePrefix: 'Web3 der nächsten Generation',
        subtitle: 'Kakr Labs liefert hochmoderne Plattformen auf der Proof-of-Work-Blockchain von Litecoin - in Betrieb seit 2011, die Millionen von Transaktionen mit niedrigen Transaktionsgebühren antreibt.',
        explore: 'Plattformen erkunden',
        pilot: '3-Monats-Pilot (50% Rabatt)'
      },
      features: {
        security: { title: 'Sicherheit auf Unternehmensniveau', desc: 'Dezentralisiert, phishing-resistent mit kundengesteuerten Schlüsseln' },
        speed: { title: 'Blitzschnell & Kostengünstig', desc: 'Niedrige Transaktionsgebühren mit 2,5-Minuten-Bestätigungen' },
        compliance: { title: 'Compliance-bereit', desc: 'Kontrollen und Audit-Nachweise für DSGVO-, HIPAA- und NYDFS-Programme' }
      },
      showcase: {
        title: 'Unsere Plattform-Suite',
        subtitle: 'Leistungsstarke, modulare Lösungen für die Unternehmensakzeptanz'
      },
      wallet: {
        badge: 'PTERI App',
        title: 'Passwortlose, Phishing-resistente 2FA',
        desc: 'Eine dezentrale Wallet mit kostenloser 2FA (Wallet-Nachrichtensignierung von BIP-39). Schützen Sie Logins und Transaktionen mit kryptografischen Beweisen und niedrigen Transaktionsgebühren.',
        bullets: [
          'Dezentrale 2FA für Phishing-Resistenz',
          'SDKs: Swift, Kotlin, JavaScript, Python',
          'Ideal für Finanzen, Telekommunikation, SaaS',
          'Verschlüsselung auf Militärniveau mit kundengesteuerten Schlüsseln',
          'Null Datenspeicherung für vollständige Privatsphäre',
          'Wallet-kontrollierte Schlüssel für echtes Eigentum'
        ],
        desc2: 'Aufgebaut auf der bewährten Blockchain von Litecoin, in Betrieb seit 2011, bietet unsere Wallet-Lösung Sicherheit auf Unternehmensniveau, ohne die Benutzererfahrung zu beeinträchtigen.',
        desc3: 'Die nahtlose Integration mit unseren umfassenden SDKs und APIs ermöglicht es Entwicklern, passwortlose Authentifizierung in Tagen statt Monaten zu implementieren.',
        cta: 'PTERI kostenlos testen'
      },
      playground: {
        badge: 'PTERI Playground',
        title: 'Web3-Apps einfach erstellen',
        desc: 'Verwenden Sie natürliche Sprache, um Wallets zu erstellen, Transaktionen zu verwalten und DApps im Litecoin-Netzwerk bereitzustellen.',
        bullets: [
          'KI-Unterstützung für sofortiges Gerüst',
          'Keine Knotenwartung erforderlich',
          'Perfekt für Startups & Bildung'
        ],
        cta1: 'Playground erkunden',
        cta2: 'Dokumentation ansehen →'
      },
      intelligence: {
        badge: 'PTERI Intelligence',
        title: 'Natürliche Sprachsteuerung mit MCP',
        desc: 'Bereitstellung und Steuerung von LLMs in Ihrem privaten Netzwerk mit Model Context Protocol (MCP)-Servern.',
        bullets: [
          'Datenschutzorientierte Transaktionskontrollen',
          'API-Interaktionen in natürlicher Sprache',
          'Geeignet für Unternehmen & Regierungen'
        ],
        cta1: 'Intelligence-Lösungen',
        cta2: 'Dokumentation →'
      },
      data: {
        badge: 'PTERI Data',
        title: 'Rückgrat für Ihre Betriebsdaten',
        desc: 'Verwandeln Sie Rohdaten mit modellgesteuerten Pipelines in umsetzbare Informationen.',
        bullets: [
          'REST/GraphQL-APIs für nahtlosen Datenfluss',
          'Skalierbar für geschäftskritische Operationen',
          'Governance integriert'
        ]
      },
      storylane: {
        title: 'Pteri Explorer erleben',
        subtitle: 'Machen Sie eine interaktive Tour durch unsere Plattform'
      },
      comparison: {
        title: 'Warum Kakr-Plattformen wählen?',
        subtitle: 'Der klare Vorteil gegenüber herkömmlichen Systemen'
      },
      cta: {
        title: 'Bereit, Ihre Abläufe zu transformieren?',
        subtitle: 'Beginnen Sie mit unserer kostenlosen PTERI App oder erkunden Sie einen 3-monatigen Pilotversuch mit 50% Rabatt.',
        btn1: 'Kostenlose Testversion starten',
        btn2: 'Demo vereinbaren',
        stats: [
          { value: '24/7', label: 'Support' },
          { value: 'SLA', label: 'Verfügbarkeit' },
          { value: '30+', label: 'Integrationen' }
        ]
      },
      typing: ['Plattformen', 'Sicherheit', 'Identität', 'Daten', 'Automatisierung']
    },
    es: {
      hero: {
        badge: 'Plataformas Empresariales',
        titlePrefix: 'Web3 de Próxima Generación',
        subtitle: 'Kakr Labs ofrece plataformas de vanguardia en la cadena de bloques de prueba de trabajo de Litecoin, en marcha desde 2011, impulsando millones de transacciones con tarifas bajas por transacción.',
        explore: 'Explorar Plataformas',
        pilot: 'Piloto de 3 Meses (50% Dto)'
      },
      features: {
        security: { title: 'Seguridad de Grado Empresarial', desc: 'Descentralizada, resistente al phishing con claves controladas por el cliente' },
        speed: { title: 'Ultrarrápido y Bajo Costo', desc: 'Tarifas bajas por transacción con confirmaciones de 2.5 minutos' },
        compliance: { title: 'Listo para el Cumplimiento', desc: 'Controles y evidencia de auditoría para programas de GDPR, HIPAA y NYDFS' }
      },
      showcase: {
        title: 'Nuestra Suite de Plataformas',
        subtitle: 'Soluciones potentes y modulares diseñadas para la adopción empresarial'
      },
      wallet: {
        badge: 'PTERI App',
        title: '2FA Sin Contraseña, Resistente al Phishing',
        desc: 'Una billetera descentralizada con 2FA gratuito (firma de mensajes de billetera de BIP-39). Proteja inicios de sesión y transacciones con pruebas criptográficas y tarifas bajas por transacción.',
        bullets: [
          '2FA descentralizado para resistencia al phishing',
          'SDKs: Swift, Kotlin, JavaScript, Python',
          'Ideal para Finanzas, Telecomunicaciones, SaaS',
          'Cifrado de grado militar con claves controladas por el cliente',
          'Cero almacenamiento de datos para privacidad total',
          'Claves controladas por la billetera para verdadera propiedad'
        ],
        desc2: 'Construido sobre la probada cadena de bloques de Litecoin, en marcha desde 2011, nuestra solución de billetera proporciona seguridad de grado empresarial sin comprometer la experiencia del usuario.',
        desc3: 'La integración perfecta con nuestros completos SDKs y APIs permite a los desarrolladores implementar autenticación sin contraseña en días, no meses.',
        cta: 'Prueba PTERI Gratis'
      },
      playground: {
        badge: 'PTERI Playground',
        title: 'Construye Apps Web3 con Facilidad',
        desc: 'Use lenguaje natural para crear billeteras, gestionar transacciones y desplegar DApps en la red Litecoin.',
        bullets: [
          'Asistencia de IA para andamiaje instantáneo',
          'No requiere mantenimiento de nodos',
          'Perfecto para startups y educación'
        ],
        cta1: 'Explorar Playground',
        cta2: 'Ver Documentación →'
      },
      intelligence: {
        badge: 'PTERI Intelligence',
        title: 'Control de Lenguaje Natural con MCP',
        desc: 'Despliegue y controle LLMs en su red privada con servidores Model Context Protocol (MCP).',
        bullets: [
          'Controles de transacciones enfocados en la privacidad',
          'Interacciones de API en lenguaje natural',
          'Adecuado para empresas y gobiernos'
        ],
        cta1: 'Soluciones de Inteligencia',
        cta2: 'Documentación →'
      },
      data: {
        badge: 'PTERI Data',
        title: 'Columna Vertebral para sus Datos Operativos',
        desc: 'Transforme datos sin procesar en inteligencia accionable con tuberías impulsadas por modelos.',
        bullets: [
          'APIs REST/GraphQL para flujo de datos fluido',
          'Escalable para operaciones de misión crítica',
          'Gobernanza incorporada'
        ]
      },
      storylane: {
        title: 'Experimente Pteri Explorer',
        subtitle: 'Realice un recorrido interactivo por nuestra plataforma'
      },
      comparison: {
        title: '¿Por qué elegir Plataformas Kakr?',
        subtitle: 'La clara ventaja sobre los sistemas tradicionales'
      },
      cta: {
        title: '¿Listo para Transformar sus Operaciones?',
        subtitle: 'Comience con nuestra PTERI App gratuita o explore un piloto de 3 meses con 50% de descuento.',
        btn1: 'Iniciar Prueba Gratuita',
        btn2: 'Programar Demo',
        stats: [
          { value: '24/7', label: 'Soporte' },
          { value: 'SLA', label: 'Disponibilidad' },
          { value: '30+', label: 'Integraciones' }
        ]
      },
      typing: ['Plataformas', 'Seguridad', 'Identidad', 'Datos', 'Automatización']
    },
    ja: {
      hero: {
        badge: 'エンタープライズプラットフォーム',
        titlePrefix: '次世代Web3',
        subtitle: 'Kakr Labsは、ライトコインのプルーフ・オブ・ワーク・ブロックチェーン上で最先端のプラットフォームを提供します。2011年から稼働を続けており、低いトランザクション手数料で数百万のトランザクションを処理しています。',
        explore: 'プラットフォームを探索',
        pilot: '3ヶ月パイロット（50%オフ）'
      },
      features: {
        security: { title: 'エンタープライズグレードのセキュリティ', desc: '分散型、顧客管理型キーによるフィッシング耐性' },
        speed: { title: '超高速＆低コスト', desc: '2.5分の承認時間と低いトランザクション手数料' },
        compliance: { title: 'コンプライアンス対応', desc: 'GDPR、HIPAA、NYDFSプログラムを支援する統制と監査証跡' }
      },
      showcase: {
        title: '当社のプラットフォームスイート',
        subtitle: 'エンタープライズ採用のために設計された強力でモジュール式のソリューション'
      },
      wallet: {
        badge: 'PTERI App',
        title: 'パスワードレス、フィッシング耐性2FA',
        desc: 'BIP-39からのウォレットメッセージ署名による無料の2FAを備えた分散型ウォレット。暗号証明と低いトランザクション手数料でログインとトランザクションを保護します。',
        bullets: [
          'フィッシング耐性のための分散型2FA',
          'SDKs: Swift、Kotlin、JavaScript、Python',
          '金融、通信、SaaSに最適',
          '顧客管理型キーによる軍事グレードの暗号化',
          '完全なプライバシーのためのデータ保管ゼロ',
          '真の所有権のためのウォレット制御キー'
        ],
        desc2: '2011年から稼働を続けるライトコインの実績あるブロックチェーン上に構築された当社のウォレットソリューションは、ユーザーエクスペリエンスを損なうことなくエンタープライズグレードのセキュリティを提供します。',
        desc3: '包括的なSDKとAPIによりシームレスな統合が可能で、開発者は数ヶ月ではなく数日でパスワードレス認証を実装できます。',
        cta: 'PTERIを無料で試す'
      },
      playground: {
        badge: 'PTERI Playground',
        title: 'Web3アプリを簡単に構築',
        desc: '自然言語を使用してウォレットを作成し、トランザクションを管理し、ライトコインネットワーク上にDAppsをデプロイします。',
        bullets: [
          '即座のスキャフォールディングのためのAIアシスタンス',
          'ノードメンテナンス不要',
          'スタートアップと教育に最適'
        ],
        cta1: 'Playgroundを探索',
        cta2: 'ドキュメントを見る →'
      },
      intelligence: {
        badge: 'PTERI Intelligence',
        title: 'MCPによる自然言語制御',
        desc: 'Model Context Protocol（MCP）サーバーを使用してプライベートネットワーク上でLLMをデプロイおよび制御します。',
        bullets: [
          'プライバシー重視のトランザクション管理',
          '自然言語APIインタラクション',
          '企業や政府に適しています'
        ],
        cta1: 'Intelligenceソリューション',
        cta2: 'ドキュメント →'
      },
      data: {
        badge: 'PTERI Data',
        title: '運用データのバックボーン',
        desc: 'モデル駆動型パイプラインで生データを実用的なインテリジェンスに変換します。',
        bullets: [
          'シームレスなデータフローのためのREST/GraphQL API',
          'ミッションクリティカルな運用に対応可能',
          'ガバナンスが組み込まれています'
        ]
      },
      storylane: {
        title: 'Pteri Explorerを体験',
        subtitle: 'プラットフォームのインタラクティブツアーをお楽しみください'
      },
      comparison: {
        title: 'なぜKakrプラットフォームを選ぶのか？',
        subtitle: '従来のシステムに対する明確な優位性'
      },
      cta: {
        title: '運用を変革する準備はできていますか？',
        subtitle: '無料のPTERI Appで開始するか、50%オフの3ヶ月パイロットを探索してください。',
        btn1: '無料トライアルを開始',
        btn2: 'デモをスケジュール',
        stats: [
          { value: '24/7', label: 'サポート' },
          { value: 'SLA', label: '可用性' },
          { value: '30+', label: '統合' }
        ]
      },
      typing: ['プラットフォーム', 'セキュリティ', 'アイデンティティ', 'データ', '自動化']
    },
    ar: {
      hero: {
        badge: 'منصات المؤسسات',
        titlePrefix: 'Web3 من الجيل القادم',
        subtitle: 'تقدم Kakr Labs منصات متطورة على blockchain Litecoin القائم على إثبات العمل - يعمل منذ 2011، تشغيل ملايين المعاملات برسوم منخفضة لكل معاملة.',
        explore: 'استكشاف المنصات',
        pilot: 'تجريبي لمدة 3 أشهر (خصم 50٪)'
      },
      features: {
        security: { title: 'أمان على مستوى المؤسسات', desc: 'لامركزي، مقاوم للتصيد مع مفاتيح يتحكم بها العميل' },
        speed: { title: 'سريع للغاية ومنخفض التكلفة', desc: 'رسوم منخفضة لكل معاملة مع تأكيدات 2.5 دقيقة' },
        compliance: { title: 'جاهز للامتثال', desc: 'ضوابط وأدلة تدقيق لدعم برامج GDPR وHIPAA وNYDFS' }
      },
      showcase: {
        title: 'مجموعة منصاتنا',
        subtitle: 'حلول قوية ومعيارية مصممة لاعتماد المؤسسات'
      },
      wallet: {
        badge: 'تطبيق PTERI',
        title: '2FA بدون كلمة مرور، مقاوم للتصيد',
        desc: 'محفظة لامركزية مع 2FA مجاني (توقيع رسالة المحفظة من BIP-39). حماية تسجيلات الدخول والمعاملات بإثباتات تشفير ورسوم منخفضة لكل معاملة.',
        bullets: [
          '2FA لامركزي لمقاومة التصيد',
          'SDKs: Swift، Kotlin، JavaScript، Python',
          'مثالي للتمويل والاتصالات و SaaS',
          'تشفير من الدرجة العسكرية مع مفاتيح يتحكم بها العميل',
          'صفر تخزين بيانات للخصوصية الكاملة',
          'مفاتيح يتحكم فيها المحفظة للملكية الحقيقية'
        ],
        desc2: 'مبني على blockchain Litecoin المثبت الذي يعمل منذ 2011، يوفر حل المحفظة لدينا أمانًا على مستوى المؤسسات.',
        desc3: 'التكامل سلس مع SDKs و APIs الشاملة لدينا، مما يسمح للمطورين بتنفيذ المصادقة بدون كلمة مرور في أيام بدلاً من أشهر.',
        cta: 'جرب PTERI مجانًا'
      },
      playground: {
        badge: 'PTERI Playground',
        title: 'بناء تطبيقات Web3 بسهولة',
        desc: 'استخدم اللغة الطبيعية لإنشاء المحافظ وإدارة المعاملات ونشر DApps على شبكة Litecoin.',
        bullets: [
          'مساعدة الذكاء الاصطناعي للسقالات الفورية',
          'لا حاجة لصيانة العقدة',
          'مثالي للشركات الناشئة والتعليم'
        ],
        cta1: 'استكشاف Playground',
        cta2: 'عرض المستندات →'
      },
      intelligence: {
        badge: 'PTERI Intelligence',
        title: 'التحكم باللغة الطبيعية مع MCP',
        desc: 'نشر والتحكم في LLMs على شبكتك الخاصة مع خوادم Model Context Protocol (MCP).',
        bullets: [
          'ضوابط معاملات تركز على الخصوصية',
          'تفاعلات API باللغة الطبيعية',
          'مناسب للمؤسسات والحكومات'
        ],
        cta1: 'حلول Intelligence',
        cta2: 'التوثيق →'
      },
      data: {
        badge: 'PTERI Data',
        title: 'العمود الفقري لبياناتك التشغيلية',
        desc: 'تحويل البيانات الخام إلى ذكاء قابل للتنفيذ مع خطوط أنابيب مدفوعة بالنماذج.',
        bullets: [
          'واجهات برمجة تطبيقات REST/GraphQL لتدفق البيانات السلس',
          'قابل للتطوير للعمليات الحرجة',
          'الحوكمة مدمجة'
        ]
      },
      storylane: {
        title: 'تجربة Pteri Explorer',
        subtitle: 'قم بجولة تفاعلية في منصتنا'
      },
      comparison: {
        title: 'لماذا تختار منصات Kakr؟',
        subtitle: 'الميزة الواضحة على الأنظمة التقليدية'
      },
      cta: {
        title: 'هل أنت مستعد لتحويل عملياتك؟',
        subtitle: 'ابدأ بتطبيق PTERI المجاني أو استكشف تجريبي لمدة 3 أشهر بخصم 50٪.',
        btn1: 'بدء تجربة مجانية',
        btn2: 'جدولة عرض توضيحي',
        stats: [
          { value: '24/7', label: 'الدعم' },
          { value: 'SLA', label: 'التوافر' },
          { value: '30+', label: 'التكاملات' }
        ]
      },
      typing: ['المنصات', 'الأمان', 'الهوية', 'البيانات', 'الأتمتة']
    }
  }
  return texts[locale.value] || texts.en
})

// SEO handled by useSEO above

/* Typewriter (responsive + reduced motion aware) */
const words = computed(() => platformsTranslations.value.typing)
const typedText = ref('')
let i = 0, j = 0, deleting = false, t

function type() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const w = words.value[i]
  if (reduced) { typedText.value = w; return }
  if (!deleting) {
    typedText.value = w.slice(0, ++j)
    if (j === w.length) return void (t = setTimeout(() => { deleting = true; type() }, 1200))
  } else {
    typedText.value = w.slice(0, --j)
    if (j === 0) { deleting = false; i = (i + 1) % words.value.length }
  }
  t = setTimeout(type, deleting ? 55 : 85)
}

/* Tiny AOS (no dependency) */
function setupAOS() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const els = Array.from(document.querySelectorAll('[data-aos]'))
  if (reduced) { els.forEach(el => el.classList.add('aos-animate')); return () => {} }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate')
        io.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
  els.forEach(el => io.observe(el))
  return () => io.disconnect()
}

onMounted(() => {
  type()
  const cleanup = setupAOS()
  onUnmounted(() => {
    if (t) clearTimeout(t)
    cleanup && cleanup()
  })
})
</script>

<style scoped>
/* Prevent horizontal scroll */
* { max-width: 100%; }

/* Typewriter caret */
.caret { display:inline-block; width:1px; height:1em; background: currentColor; margin-left:2px; transform: translateY(0.15em); animation: caretBlink 1s steps(1,end) infinite }
@keyframes caretBlink { 0%,49% {opacity:1} 50%,100% {opacity:0} }

/* AOS base (initial state) */
[data-aos] { opacity:0; transition-property: opacity, transform; transition-timing-function: cubic-bezier(0.16,1,0.3,1) }
[data-aos][data-aos-delay="100"]{ transition-delay:100ms }
[data-aos][data-aos-delay="120"]{ transition-delay:120ms }
[data-aos][data-aos-delay="200"]{ transition-delay:200ms }

[data-aos="fade-up"]    { transform: translateY(28px); transition-duration: 800ms }
[data-aos="fade-right"] { transform: translateX(-28px); transition-duration: 800ms }
[data-aos="fade-left"]  { transform: translateX(28px); transition-duration: 800ms }
[data-aos="zoom-in"]    { transform: scale(0.96); transition-duration: 600ms }

.aos-animate { opacity:1; transform:none }

/* Smooth scroll + focus styles */
html { scroll-behavior:smooth }
button:focus-visible, a:focus-visible { outline:2px solid #3b82f6; outline-offset:3px; border-radius:0.75rem }

/* Mobile font helpers (optional) */
@media (max-width: 768px) {
  .text-7xl { font-size: 2.5rem }
  .text-6xl { font-size: 2.25rem }
  .text-5xl { font-size: 2rem }
  .text-4xl { font-size: 1.75rem }
}
</style>
