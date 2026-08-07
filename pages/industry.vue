<template>
  <div class="min-h-screen bg-black bg-black dark:bg-neutral-950 text-white dark:text-neutral-100 transition-colors duration-500">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950" data-reveal>
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 dark:opacity-20"></div>
      <!-- Floating gradient orbs -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-700"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white  mb-8 leading-tight">
            {{ industryTranslations.hero.titlePrefix }}
            <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              <span aria-live="polite" class="inline-flex items-baseline">
                {{ typedText }}
                <span class="ml-0.5 caret" aria-hidden="true"></span>
              </span>
            </span>
          </h1>

          <p class="text-xl text-white/70 dark:text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto" data-reveal style="--delay:120ms" v-html="industryTranslations.hero.subtitle"></p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" data-reveal style="--delay:220ms">
            <a href="https://docs.kakr.ai/docs/use-cases" target="_blank" class="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-300 group">
              {{ industryTranslations.hero.tryApi }}
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            <a href="/contact" class="inline-flex items-center px-8 py-4 rounded-full border-2 border-white/15 dark:border-gray-700 text-white/90 dark:text-white/80 font-semibold hover:border-gray-400 dark:hover:border-gray-600 hover:bg-white/3 dark:hover:bg-neutral-900 transition-all duration-300">
              {{ industryTranslations.hero.contactSales }}
            </a>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto" data-reveal style="--delay:320ms">
            <div class="text-center group">
              <div class="text-sm font-bold text-white mb-1">{{ industryTranslations.hero.stats.uptime }}</div>
            </div>
            <div class="text-center group">
              <div class="text-sm font-bold text-white mb-1">{{ industryTranslations.hero.stats.cost }}</div>
            </div>
            <div class="text-center group">
              <div class="text-sm font-bold text-white mb-1">{{ industryTranslations.hero.stats.stronger }}</div>
            </div>
            <div class="text-center group">
              <div class="text-sm font-bold text-white mb-1">{{ industryTranslations.hero.stats.pilot }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video -->
   <!-- PTERI Wallet GIF Section -->
<section class="w-full bg-black" data-reveal>
  <div class="w-full h-auto">
    <img 
      src="/Pteri-Flowchart.png" 
      alt="PTERI Wallet Demo" 
      class="w-full h-auto object-cover"
      loading="lazy"
    />
  </div>
</section>


    <!-- Why Kakr Labs -->
    <section class="py-24 bg-black dark:bg-neutral-950" data-reveal>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-white  mb-8">
            {{ industryTranslations.whyKakr.title }}
          </h2>
          <p class="text-lg text-white/70 dark:text-white/80 leading-relaxed">
            {{ industryTranslations.whyKakr.description }}
          </p>
        </div>

        <!-- Partner Logos -->
        <div class="flex flex-wrap justify-center items-center gap-16 mb-16" data-reveal style="--delay:120ms">
          <a href="https://www.microsoft.com/startups" target="_blank" rel="noopener noreferrer" class="transition hover:opacity-80 flex items-center justify-center">
            <img src="/images/microsoft-startups.png" alt="Microsoft for Startups" class="h-20 w-auto object-contain max-w-[180px]" />
          </a>
          <a href="https://www.ibm.com/partnerplus" target="_blank" rel="noopener noreferrer" class="transition hover:opacity-80 flex items-center justify-center">
            <img src="/images/ibm-partner-logo.png" alt="IBM Partner Plus" class="h-20 w-auto object-contain max-w-[180px]" />
          </a>
          <a href="https://startup.google.com/" target="_blank" rel="noopener noreferrer" class="transition hover:opacity-80 flex items-center justify-center">
            <img src="/images/google-startups-logo.png" alt="Google Startups" class="h-20 w-auto object-contain max-w-[180px]" />
          </a>
          <!-- Removed: this slot rendered a Google Gemini logo (hotlinked from
               Wikipedia) with alt="OpenAI Partner" — it asserted an OpenAI
               partnership that is not supported anywhere in this repo, while
               displaying a different company's mark. -->
        </div>

        <div class="text-center">
          <p class="text-sm text-white/50 dark:text-white/60">{{ industryTranslations.whyKakr.hostedOn }}</p>
        </div>
      </div>
    </section>

    <!-- Industries Grid -->
    <section id="solutions" class="py-24 bg-white/3 dark:bg-neutral-900/50" data-reveal>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white  mb-6">{{ industryTranslations.industries.title }}</h2>
          <p class="text-xl text-white/70 dark:text-white/80 max-w-3xl mx-auto">
            {{ industryTranslations.industries.description }}
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article 
            v-for="(item, idx) in industryTranslations.industries.items" 
            :key="idx"
            class="group rounded-xl border bg-black/90 dark:bg-neutral-900/70 border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition"
          >
            <figure class="overflow-hidden rounded-t-xl">
              <img :src="item.image" :alt="item.title" class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
            </figure>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">{{ item.title }}</h3>
              <p class="text-neutral-700 dark:text-neutral-300 mb-4">{{ item.description }}</p>
              <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 mb-6">
                <li v-for="(point, pIdx) in item.points" :key="pIdx" class="flex gap-2">
                  <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 shrink-0"></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
              <a href="/solutions" class="inline-flex items-center gap-2 text-sm font-medium text-neutral-900  hover:opacity-80">
                {{ item.linkText }} <span class="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-24 bg-black dark:bg-neutral-950" data-reveal>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white  mb-6">{{ industryTranslations.comparison.title }}</h2>
          <p class="text-xl text-white/70 dark:text-white/80 max-w-3xl mx-auto">{{ industryTranslations.comparison.description }}</p>
        </div>

        <div class="overflow-hidden rounded-3xl border border-white/10 dark:border-gray-800 shadow-2xl bg-black dark:bg-neutral-900">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-white/3 dark:bg-neutral-900/50">
                <tr>
                  <th class="px-8 py-6 text-left text-lg font-semibold text-white ">{{ industryTranslations.comparison.headers[0] }}</th>
                  <th class="px-8 py-6 text-center text-lg font-semibold text-white ">{{ industryTranslations.comparison.headers[1] }}</th>
                  <th class="px-8 py-6 text-center text-lg font-semibold text-white ">{{ industryTranslations.comparison.headers[2] }}</th>
                  <th class="px-8 py-6 text-center text-lg font-semibold text-white ">{{ industryTranslations.comparison.headers[3] }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                <tr class="hover:bg-white/3 dark:hover:bg-neutral-900/50 transition-colors">
                  <td class="px-8 py-6 text-base font-medium text-white ">{{ industryTranslations.comparison.rows[0].name }}</td>
                  <td class="px-8 py-6 text-center">
                    <span class="inline-flex items-center text-green-600 dark:text-green-400">
                      <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      {{ industryTranslations.comparison.rows[0].pteri }}
                    </span>
                  </td>
                  <td class="px-8 py-6 text-center">
                    <span class="inline-flex items-center text-red-600 dark:text-red-400">
                      <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      {{ industryTranslations.comparison.rows[0].sms }}
                    </span>
                  </td>
                  <td class="px-8 py-6 text-center">
                    <span class="inline-flex items-center text-red-600 dark:text-red-400">
                      <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      {{ industryTranslations.comparison.rows[0].app }}
                    </span>
                  </td>
                </tr>

                <tr class="hover:bg-white/3 dark:hover:bg-neutral-900/50 transition-colors">
                  <td class="px-8 py-6 text-base font-medium text-white ">{{ industryTranslations.comparison.rows[1].name }}</td>
                  <td class="px-8 py-6 text-center">
                    <span class="inline-flex items-center text-green-600 dark:text-green-400">
                      <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      {{ industryTranslations.comparison.rows[1].pteri }}
                    </span>
                  </td>
                  <td class="px-8 py-6 text-center">
                    <span class="inline-flex items-center text-red-600 dark:text-red-400">
                      <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      {{ industryTranslations.comparison.rows[1].sms }}
                    </span>
                  </td>
                  <td class="px-8 py-6 text-center">
                    <span class="inline-flex items-center text-red-600 dark:text-red-400">
                      <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    {{ industryTranslations.comparison.rows[1].app }}
                    </span>
                  </td>
                </tr>

                <tr class="hover:bg-white/3 dark:hover:bg-neutral-900/50 transition-colors">
                  <td class="px-8 py-6 text-base font-medium text-white ">{{ industryTranslations.comparison.rows[2].name }}</td>
                  <td class="px-8 py-6 text-center">
                    <span class="inline-flex items-center text-green-600 dark:text-green-400">
                      <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      {{ industryTranslations.comparison.rows[2].pteri }}
                    </span>
                  </td>
                  <td class="px-8 py-6 text-center">
                    <span class="inline-flex items-center text-red-600 dark:text-red-400">
                      <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      {{ industryTranslations.comparison.rows[2].sms }}
                    </span>
                  </td>
                  <td class="px-8 py-6 text-center">
                    <span class="inline-flex items-center text-yellow-600 dark:text-yellow-400">
                      <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                      {{ industryTranslations.comparison.rows[2].app }}
                    </span>
                  </td>
                </tr>

                <tr class="hover:bg-white/3 dark:hover:bg-neutral-900/50 transition-colors">
                  <td class="px-8 py-6 text-base font-medium text-white ">{{ industryTranslations.comparison.rows[3].name }}</td>
                  <td class="px-8 py-6 text-center">
                    <span class="text-green-600 dark:text-green-400 font-semibold text-lg">{{ industryTranslations.comparison.rows[3].pteri }}</span>
                  </td>
                  <td class="px-8 py-6 text-center">
                    <span class="text-red-600 dark:text-red-400 font-semibold text-lg">{{ industryTranslations.comparison.rows[3].sms }}</span>
                  </td>
                  <td class="px-8 py-6 text-center">
                    <span class="text-yellow-600 dark:text-yellow-400 font-semibold text-lg">{{ industryTranslations.comparison.rows[3].app }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials section removed: the three entries were attributed quotes
         from named individuals at named organizations ("Sarah Chen, CTO,
         FinGlobal Bank" etc.) using placehold.co initial avatars, carrying
         unverifiable outcome figures (92% fraud reduction, 60% cost saving,
         2M+ transactions, "zero breaches"). Fabricated endorsements cannot be
         published. Restore this section only with real, approved customer
         quotes and real headshots. -->

    <!-- CTA -->
    <section id="contact" class="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden" data-reveal>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_70%)] -z-10"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="mb-8">
          <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">{{ industryTranslations.cta.title }}</h2>
          <p class="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            {{ industryTranslations.cta.description }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a href="https://pteri.org/Register" target="_blank" class="inline-flex items-center px-10 py-5 rounded-2xl bg-black text-blue-600 font-semibold shadow-xl hover:shadow-2xl hover:bg-white/3 transform hover:-translate-y-1 transition-all duration-300 group">
            {{ industryTranslations.cta.startTrial }}
            <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
          <a href="mailto:contact@kakr.ai" class="inline-flex items-center px-10 py-5 rounded-2xl border-2 border-white/30 text-white font-semibold hover:border-white hover:bg-black/10 transition-all duration-300">
            {{ industryTranslations.cta.scheduleDemo }}
          </a>
        </div>

        <div class="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 inline-block">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">24/7</div>
              <div class="text-blue-100">{{ industryTranslations.cta.support }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">SLA</div>
              <div class="text-blue-100">{{ industryTranslations.cta.uptime }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">30+</div>
              <div class="text-blue-100">{{ industryTranslations.cta.integrations }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '#imports'
import { useSEO } from '~/composables/useSEO'

definePageMeta({
  layout: 'default'
})

const { locale } = useI18n()

const { setSEO } = useSEO()

setSEO({
  title: 'Industry-Specific Blockchain Security Solutions | Kakr Labs',
  description: 'Enterprise-grade security solutions for finance, healthcare, telecom, and more. Built on Litecoin\'s secure, proof-of-work blockchain.',
  keywords: ['blockchain security', 'industry solutions', '2FA', 'Litecoin', 'PTERI', 'fintech', 'healthcare', 'government', 'telecom'],
  image: '/api-page-og.png'
})

const industryTranslations = computed(() => {
  const texts: any = {
    en: {
      hero: {
        titlePrefix: 'Blockchain-Powered Security for',
        subtitle: 'In a digital world where <span class="font-semibold text-white ">SIM-swap attacks</span> and <span class="font-semibold text-white ">credential breaches</span> keep growing, Kakr Labs delivers identity and authorization security built on proof-of-work infrastructure.',
        tryApi: 'Try 2FA API Free',
        contactSales: 'Contact Sales',
        stats: {
          uptime: 'Proof-of-work network running since 2011',
          cost: 'Low-cost settlement',
          stronger: 'Phishing-resistant authentication',
          pilot: 'Pilot programs available'
        }
      },
      typing: ['Every Industry','Finance','Healthcare','Government','Telecom','Education','SaaS'],
      whyKakr: {
        title: 'Why Kakr Labs for Your Industry?',
        description: 'Our PTERI Developer Suite delivers wallet-based authentication, decentralized 2FA, and BaaS, eliminating centralized risks like phishing and SMS vulnerabilities. We provide developer-friendly tools for industries that need strong security controls and predictable costs.',
        hostedOn: 'Hosted on Google Cloud | Powered by Litecoin PoW'
      },
      industries: {
        title: 'Industries We Serve',
        description: 'Transform your operations with Litecoin-backed solutions tailored to your industry\'s unique challenges.',
        items: [
          {
            image: '/images/Finance-Fintech.png',
            title: 'Finance & Fintech',
            description: 'Secure transactions and client data with wallet-based logins and immutable records.',
            points: ['Reduce SIM-swap exposure with cryptographic 2FA', 'Audit trails and evidence to support PCI DSS and NYDFS programs', 'Low-fee micropayments for global reach'],
            linkText: 'Finance Solutions'
          },
          {
            image: '/images/icons/healthcare.png',
            title: 'Healthcare',
            description: 'Protect patient data and comply with HIPAA using customer-controlled credentials and tamper-proof proofs.',
            points: ['EPCS-aligned prescribing workflows', 'Secure BYOD access with wallet 2FA', 'Scalable APIs for healthtech integrations'],
            linkText: 'Healthcare Solutions'
          },
          {
            image: '/images/Government.png',
            title: 'Government & Public Sector',
            description: 'Ensure standards-aligned identity and verifiable claims for public trust.',
            points: ['NIST-compliant access controls', 'Immutable audit trails for transparency', 'PTERI ID (2026) for KYC and citizen services'],
            linkText: 'Government Solutions'
          },
          {
            image: '/images/telecom-security.png',
            title: 'Telecom & eSIM',
            description: 'Stop SIM-swap fraud with eSIM proofs and wallet-anchored identities.',
            points: ['Cryptographic subscriber authentication', 'Cost-efficient settlement', 'Seamless integration via REST/SDKs'],
            linkText: 'Telecom Solutions'
          },
          {
            image: '/images/education-tech.png',
            title: 'Education',
            description: 'Secure student portals and reduce IT costs with passwordless 2FA.',
            points: ['No SMS fees or password resets', 'GDPR-compliant data protection', 'PTERI Playground for easy app development'],
            linkText: 'Education Solutions'
          },
          {
            image: '/images/tech-innovation.png',
            title: 'Technology & SaaS',
            description: 'Replace outdated OTP apps with blockchain-grade authentication.',
            points: ['REST APIs and SDKs (Swift, Kotlin, JS) for rapid integration', 'Privacy-focused controls for user data security', 'Scalable BaaS for DApp innovation'],
            linkText: 'Tech Solutions'
          },
          {
            image: '/images/legal-services.png',
            title: 'Legal & Professional Services',
            description: 'Safeguard sensitive filings with decentralized access and proofs.',
            points: ['Immutable records for audits and compliance', 'Evidence and audit trails that support SOC 2 and ISO 27001 readiness work', 'Cost-effective at cents per transaction'],
            linkText: 'Legal Solutions'
          }
        ]
      },
      comparison: {
        title: 'Why Choose PTERI 2FA Over Traditional Methods?',
        description: 'Our wallet-based 2FA on Litecoin outshines SMS and app-based solutions, offering unmatched security and affordability.',
        headers: ['Capability', 'PTERI 2FA (Litecoin)', 'SMS / Email OTP', 'Authenticator Apps'],
        rows: [
          { name: 'Cloud-Free, Self-Custody', pteri: 'Full Control', sms: 'Cloud Dependent', app: 'Centralized' },
          { name: 'Phishing/SIM-Swap Resistant', pteri: 'Cryptographic Proof', sms: 'Vulnerable', app: 'Phishable' },
          { name: 'On-Chain Verifiable Proofs', pteri: 'Immutable', sms: 'No Verification', app: 'Offline Only' },
          { name: 'Average Per-Event Cost', pteri: 'Low', sms: 'High (SMS fees)', app: 'Medium' }
        ]
      },
      cta: {
        title: 'Ready to Transform Your Industry?',
        description: 'Launch with our free 2FA API or explore a 3-month pilot at 50% off to experience Litecoin-powered security.',
        startTrial: 'Start Free Trial',
        scheduleDemo: 'Schedule Demo',
        support: 'Support',
        uptime: 'Uptime SLA',
        integrations: 'Integrations'
      }
    },
    de: {
      hero: {
        titlePrefix: 'Blockchain-gestützte Sicherheit für',
        subtitle: 'In einer digitalen Welt, in der <span class="font-semibold text-white ">SIM-Swap-Angriffe</span> und <span class="font-semibold text-white ">Zugangsdaten-Verletzungen</span> weiter zunehmen, liefert Kakr Labs Identitäts- und Autorisierungssicherheit auf Proof-of-Work-Infrastruktur.',
        tryApi: '2FA API kostenlos testen',
        contactSales: 'Vertrieb kontaktieren',
        stats: {
          uptime: 'Proof-of-Work-Netzwerk seit 2011 in Betrieb',
          cost: 'Kostengünstige Abwicklung',
          stronger: 'Phishing-resistente Authentifizierung',
          pilot: 'Pilotprojekte verfügbar'
        }
      },
      typing: ['Jede Branche', 'Finanzen', 'Gesundheitswesen', 'Regierung', 'Telekom', 'Bildung', 'SaaS'],
      whyKakr: {
        title: 'Warum Kakr Labs für Ihre Branche?',
        description: 'Unsere PTERI Developer Suite bietet Wallet-basierte Authentifizierung, dezentrale 2FA und BaaS und eliminiert zentralisierte Risiken wie Phishing und SMS-Schwachstellen. Wir bieten entwicklerfreundliche Tools für Branchen, die starke Sicherheitskontrollen und planbare Kosten benötigen.',
        hostedOn: 'Gehostet auf Google Cloud | Angetrieben von Litecoin PoW'
      },
      industries: {
        title: 'Branchen, die wir bedienen',
        description: 'Transformieren Sie Ihre Abläufe mit Litecoin-gestützten Lösungen, die auf die einzigartigen Herausforderungen Ihrer Branche zugeschnitten sind.',
        items: [
          {
            image: '/images/Finance-Fintech.png',
            title: 'Finanzen & Fintech',
            description: 'Sichern Sie Transaktionen und Kundendaten mit Wallet-basierten Logins und unveränderlichen Aufzeichnungen.',
            points: ['Reduzieren Sie das SIM-Swap-Risiko mit kryptografischer 2FA', 'Audit-Trails und Nachweise zur Unterstützung von PCI-DSS- und NYDFS-Programmen', 'Mikrozahlungen mit geringen Gebühren für globale Reichweite'],
            linkText: 'Finanzlösungen'
          },
          {
            image: '/images/icons/healthcare.png',
            title: 'Gesundheitswesen',
            description: 'Schützen Sie Patientendaten und erfüllen Sie HIPAA mit kundengesteuerten Zugangsdaten und manipulationssicheren Nachweisen.',
            points: ['EPCS-konforme Verschreibungsabläufe', 'Sicherer BYOD-Zugriff mit Wallet-2FA', 'Skalierbare APIs für Healthtech-Integrationen'],
            linkText: 'Gesundheitslösungen'
          },
          {
            image: '/images/Government.png',
            title: 'Regierung & Öffentlicher Sektor',
            description: 'Gewährleisten Sie standardkonforme Identität und überprüfbare Ansprüche für öffentliches Vertrauen.',
            points: ['NIST-konforme Zugriffskontrollen', 'Unveränderliche Audit-Trails für Transparenz', 'PTERI ID (2026) für KYC und Bürgerdienste'],
            linkText: 'Regierungslösungen'
          },
          {
            image: '/images/telecom-security.png',
            title: 'Telekom & eSIM',
            description: 'Stoppen Sie SIM-Swap-Betrug mit eSIM-Nachweisen und Wallet-verankerten Identitäten.',
            points: ['Kryptographische Teilnehmerauthentifizierung', 'Kosteneffiziente Abwicklung', 'Nahtlose Integration über REST/SDKs'],
            linkText: 'Telekom-Lösungen'
          },
          {
            image: '/images/education-tech.png',
            title: 'Bildung',
            description: 'Sichern Sie Studentenportale und senken Sie IT-Kosten mit passwortloser 2FA.',
            points: ['Keine SMS-Gebühren oder Passwort-Resets', 'DSGVO-konformer Datenschutz', 'PTERI Playground für einfache App-Entwicklung'],
            linkText: 'Bildungslösungen'
          },
          {
            image: '/images/tech-innovation.png',
            title: 'Technologie & SaaS',
            description: 'Ersetzen Sie veraltete OTP-Apps durch Authentifizierung auf Blockchain-Niveau.',
            points: ['REST-APIs und SDKs (Swift, Kotlin, JS) für schnelle Integration', 'Datenschutzorientierte Kontrollen für Benutzerdatensicherheit', 'Skalierbares BaaS für DApp-Innovation'],
            linkText: 'Tech-Lösungen'
          },
          {
            image: '/images/legal-services.png',
            title: 'Recht & Professionelle Dienstleistungen',
            description: 'Schützen Sie sensible Einreichungen mit dezentralem Zugriff und Nachweisen.',
            points: ['Unveränderliche Aufzeichnungen für Audits und Compliance', 'Nachweise und Audit-Trails zur Unterstützung Ihrer SOC 2- und ISO 27001-Vorbereitung', 'Kostengünstig bei Cent pro Transaktion'],
            linkText: 'Rechtslösungen'
          }
        ]
      },
      comparison: {
        title: 'Warum PTERI 2FA gegenüber traditionellen Methoden wählen?',
        description: 'Unsere Wallet-basierte 2FA auf Litecoin übertrifft SMS- und App-basierte Lösungen und bietet unübertroffene Sicherheit und Erschwinglichkeit.',
        headers: ['Fähigkeit', 'PTERI 2FA (Litecoin)', 'SMS / E-Mail OTP', 'Authenticator Apps'],
        rows: [
          { name: 'Cloud-frei, Selbstverwahrung', pteri: 'Volle Kontrolle', sms: 'Cloud-abhängig', app: 'Zentralisiert' },
          { name: 'Phishing/SIM-Swap-resistent', pteri: 'Kryptographischer Nachweis', sms: 'Anfällig', app: 'Phishbar' },
          { name: 'On-Chain Überprüfbare Nachweise', pteri: 'Unveränderlich', sms: 'Keine Überprüfung', app: 'Nur offline' },
          { name: 'Durchschnittliche Kosten pro Ereignis', pteri: 'Niedrig (~0,002 LTC)', sms: 'Hoch (SMS-Gebühren)', app: 'Mittel' }
        ]
      },
      cta: {
        title: 'Bereit, Ihre Branche zu transformieren?',
        description: 'Starten Sie mit unserer kostenlosen 2FA-API oder erkunden Sie einen 3-monatigen Piloten mit 50% Rabatt, um Litecoin-gestützte Sicherheit zu erleben.',
        startTrial: 'Kostenlos starten',
        scheduleDemo: 'Demo planen',
        support: 'Support',
        uptime: 'Verfügbarkeit SLA',
        integrations: 'Integrationen'
      }
    },
    es: {
      hero: {
        titlePrefix: 'Seguridad impulsada por Blockchain para',
        subtitle: 'En un mundo digital donde los <span class="font-semibold text-white ">ataques de intercambio de SIM</span> y las <span class="font-semibold text-white ">filtraciones de credenciales</span> siguen creciendo, Kakr Labs ofrece seguridad de identidad y autorización sobre infraestructura de prueba de trabajo.',
        tryApi: 'Prueba API 2FA Gratis',
        contactSales: 'Contactar Ventas',
        stats: {
          uptime: 'Red de prueba de trabajo en funcionamiento desde 2011',
          cost: 'Liquidación de bajo costo',
          stronger: 'Autenticación resistente al phishing',
          pilot: 'Programas piloto disponibles'
        }
      },
      typing: ['Cada Industria', 'Finanzas', 'Salud', 'Gobierno', 'Telecom', 'Educación', 'SaaS'],
      whyKakr: {
        title: '¿Por qué Kakr Labs para su industria?',
        description: 'Nuestra suite de desarrolladores PTERI ofrece autenticación basada en billetera, 2FA descentralizado y BaaS, eliminando riesgos centralizados como phishing y vulnerabilidades de SMS. Proporcionamos herramientas amigables para desarrolladores para industrias que necesitan controles de seguridad sólidos y costos predecibles.',
        hostedOn: 'Alojado en Google Cloud | Impulsado por Litecoin PoW'
      },
      industries: {
        title: 'Industrias que servimos',
        description: 'Transforme sus operaciones con soluciones respaldadas por Litecoin adaptadas a los desafíos únicos de su industria.',
        items: [
          {
            image: '/images/Finance-Fintech.png',
            title: 'Finanzas y Fintech',
            description: 'Asegure transacciones y datos de clientes con inicios de sesión basados en billetera y registros inmutables.',
            points: ['Reduzca la exposición al intercambio de SIM con 2FA criptográfico', 'Registros de auditoría y evidencia para apoyar programas PCI DSS y NYDFS', 'Micropagos de tarifas bajas para alcance global'],
            linkText: 'Soluciones Financieras'
          },
          {
            image: '/images/icons/healthcare.png',
            title: 'Salud',
            description: 'Proteja los datos de los pacientes y cumpla con HIPAA utilizando credenciales controladas por el usuario y pruebas a prueba de manipulaciones.',
            points: ['Flujos de trabajo de prescripción alineados con EPCS', 'Acceso seguro BYOD con billetera 2FA', 'APIs escalables para integraciones de tecnología de la salud'],
            linkText: 'Soluciones de Salud'
          },
          {
            image: '/images/Government.png',
            title: 'Gobierno y Sector Público',
            description: 'Garantice una identidad alineada con los estándares y reclamos verificables para la confianza pública.',
            points: ['Controles de acceso compatibles con NIST', 'Pistas de auditoría inmutables para transparencia', 'PTERI ID (2026) para KYC y servicios ciudadanos'],
            linkText: 'Soluciones Gubernamentales'
          },
          {
            image: '/images/telecom-security.png',
            title: 'Telecomunicaciones y eSIM',
            description: 'Detenga el fraude de intercambio de SIM con pruebas eSIM e identidades ancladas en billetera.',
            points: ['Autenticación criptográfica de suscriptores', 'Liquidación rentable', 'Integración perfecta a través de REST/SDKs'],
            linkText: 'Soluciones de Telecomunicaciones'
          },
          {
            image: '/images/education-tech.png',
            title: 'Educación',
            description: 'Asegure los portales de estudiantes y reduzca los costos de TI con 2FA sin contraseña.',
            points: ['Sin tarifas de SMS ni restablecimientos de contraseña', 'Protección de datos compatible con GDPR', 'PTERI Playground para un fácil desarrollo de aplicaciones'],
            linkText: 'Soluciones Educativas'
          },
          {
            image: '/images/tech-innovation.png',
            title: 'Tecnología y SaaS',
            description: 'Reemplace las aplicaciones OTP obsoletas con autenticación de grado blockchain.',
            points: ['APIs REST y SDKs (Swift, Kotlin, JS) para una integración rápida', 'Controles enfocados en la privacidad para la seguridad de los datos del usuario', 'BaaS escalable para la innovación de DApp'],
            linkText: 'Soluciones Tecnológicas'
          },
          {
            image: '/images/legal-services.png',
            title: 'Servicios Legales y Profesionales',
            description: 'Proteja las presentaciones confidenciales con acceso descentralizado y pruebas.',
            points: ['Registros inmutables para auditorías y cumplimiento', 'Evidencia y registros de auditoría que respaldan su preparación para SOC 2 e ISO 27001', 'Rentable a centavos por transacción'],
            linkText: 'Soluciones Legales'
          }
        ]
      },
      comparison: {
        title: '¿Por qué elegir PTERI 2FA sobre métodos tradicionales?',
        description: 'Nuestro 2FA basado en billetera en Litecoin supera a las soluciones basadas en SMS y aplicaciones, ofreciendo seguridad y asequibilidad inigualables.',
        headers: ['Capacidad', 'PTERI 2FA (Litecoin)', 'SMS / Email OTP', 'Apps de Autenticación'],
        rows: [
          { name: 'Sin nube, autocustodia', pteri: 'Control total', sms: 'Dependiente de la nube', app: 'Centralizado' },
          { name: 'Resistente a Phishing/SIM-Swap', pteri: 'Prueba criptográfica', sms: 'Vulnerable', app: 'Phishable' },
          { name: 'Pruebas verificables en cadena', pteri: 'Inmutable', sms: 'Sin verificación', app: 'Solo fuera de línea' },
          { name: 'Costo promedio por evento', pteri: 'Bajo', sms: 'Alto (tarifas SMS)', app: 'Medio' }
        ]
      },
      cta: {
        title: '¿Listo para transformar su industria?',
        description: 'Comience con nuestra API 2FA gratuita o explore un piloto de 3 meses con un 50% de descuento para experimentar la seguridad impulsada por Litecoin.',
        startTrial: 'Comenzar Prueba Gratuita',
        scheduleDemo: 'Programar Demo',
        support: 'Soporte',
        uptime: 'SLA de tiempo de actividad',
        integrations: 'Integraciones'
      }
    },
    ja: {
      hero: {
        titlePrefix: 'ブロックチェーンで守るセキュリティ:',
        subtitle: 'デジタル社会では<span class="font-semibold text-white ">SIMスワップ攻撃</span>と<span class="font-semibold text-white ">認証情報の侵害</span>が増え続けています。Kakr Labsはプルーフ・オブ・ワーク基盤の上にアイデンティティと認可のセキュリティを提供します。',
        tryApi: '2FA APIを無料で試す',
        contactSales: '営業に問い合わせる',
        stats: {
          uptime: '2011年から稼働するプルーフ・オブ・ワークネットワーク',
          cost: '低コストな決済',
          stronger: 'フィッシング耐性のある認証',
          pilot: 'パイロットプログラムをご利用いただけます'
        }
      },
      typing: ['あらゆる業界', '金融', 'ヘルスケア', '行政', '通信', '教育', 'SaaS'],
      whyKakr: {
        title: 'なぜ御社の業界にKakr Labsなのか',
        description: 'PTERI Developer Suiteは、ウォレットベースの認証、分散型2FA、BaaSを提供し、フィッシングやSMSの脆弱性といった中央集権的なリスクを排除します。強固なセキュリティ管理と予測可能なコストを必要とする業界に、開発者向けのツールをお届けします。',
        hostedOn: 'Google Cloudでホスティング | Litecoin PoWで駆動'
      },
      industries: {
        title: '対応業界',
        description: '業界固有の課題に合わせたLitecoinベースのソリューションで、業務を変革します。',
        items: [
          {
            image: '/images/Finance-Fintech.png',
            title: '金融・フィンテック',
            description: 'ウォレットベースのログインと改ざん不可能な記録で、取引と顧客データを保護します。',
            points: ['暗号技術による2FAでSIMスワップのリスクを低減', 'PCI DSSおよびNYDFSプログラムを支援する監査証跡と証拠', '低手数料のマイクロペイメントでグローバルに展開'],
            linkText: '金融向けソリューション'
          },
          {
            image: '/images/icons/healthcare.png',
            title: 'ヘルスケア',
            description: '顧客管理型の認証情報と改ざん検知可能な証跡により、患者データを保護しHIPAAに対応します。',
            points: ['EPCSに準拠した処方ワークフロー', 'ウォレット2FAによる安全なBYODアクセス', 'ヘルステック連携に対応するスケーラブルなAPI'],
            linkText: 'ヘルスケア向けソリューション'
          },
          {
            image: '/images/Government.png',
            title: '行政・公共部門',
            description: '標準に沿ったアイデンティティと検証可能なクレームで、市民の信頼を確保します。',
            points: ['NISTに準拠したアクセス制御', '透明性を担保する改ざん不可能な監査ログ', 'KYCと市民サービスに向けたPTERI ID(2026年)'],
            linkText: '行政向けソリューション'
          },
          {
            image: '/images/telecom-security.png',
            title: '通信・eSIM',
            description: 'eSIM証明とウォレットに紐づくアイデンティティで、SIMスワップ詐欺を防ぎます。',
            points: ['暗号技術による加入者認証', '低コストな決済', 'REST/SDKによるシームレスな統合'],
            linkText: '通信向けソリューション'
          },
          {
            image: '/images/education-tech.png',
            title: '教育',
            description: 'パスワードレス2FAで学生ポータルを保護し、ITコストを削減します。',
            points: ['SMS料金やパスワードリセットが不要', 'GDPRに準拠したデータ保護', 'アプリ開発を容易にするPTERI Playground'],
            linkText: '教育向けソリューション'
          },
          {
            image: '/images/tech-innovation.png',
            title: 'テクノロジー・SaaS',
            description: '旧来のOTPアプリを、ブロックチェーン水準の認証に置き換えます。',
            points: ['迅速な統合を実現するREST APIとSDK(Swift、Kotlin、JS)', 'ユーザーデータを守るプライバシー重視の管理機能', 'DAppイノベーションを支えるスケーラブルなBaaS'],
            linkText: 'テクノロジー向けソリューション'
          },
          {
            image: '/images/legal-services.png',
            title: '法務・専門サービス',
            description: '分散型アクセスと証明により、機密性の高い書類を保護します。',
            points: ['監査とコンプライアンスに対応する改ざん不可能な記録', 'SOC 2やISO 27001の準備作業を支援する証跡と監査ログ', '1トランザクションあたり数セントの低コスト'],
            linkText: '法務向けソリューション'
          }
        ]
      },
      comparison: {
        title: '従来の方式ではなくPTERI 2FAを選ぶ理由',
        description: 'Litecoin上で動作するウォレットベースの2FAは、SMSやアプリ方式を上回り、比類のないセキュリティと低コストを実現します。',
        headers: ['機能', 'PTERI 2FA (Litecoin)', 'SMS / メール OTP', '認証アプリ'],
        rows: [
          { name: 'クラウド不要・自己管理', pteri: '完全な管理権', sms: 'クラウド依存', app: '中央集権型' },
          { name: 'フィッシング・SIMスワップ耐性', pteri: '暗号学的証明', sms: '脆弱', app: 'フィッシング可能' },
          { name: 'オンチェーンで検証可能な証明', pteri: '改ざん不可能', sms: '検証不可', app: 'オフラインのみ' },
          { name: '1件あたりの平均コスト', pteri: '低', sms: '高 (SMS料金)', app: '中' }
        ]
      },
      cta: {
        title: '御社の業界を変革する準備はできましたか',
        description: '無料の2FA APIから始めるか、50%オフの3か月パイロットで、Litecoinを活用したセキュリティをご体験ください。',
        startTrial: '無料トライアルを開始',
        scheduleDemo: 'デモを予約',
        support: 'サポート',
        uptime: '稼働率SLA',
        integrations: '連携'
      }
    },
    ar: {
      hero: {
        titlePrefix: 'أمان مدعوم بتقنية Blockchain لـ',
        subtitle: 'في عالم رقمي تتزايد فيه <span class="font-semibold text-white ">هجمات تبديل بطاقة SIM</span> و<span class="font-semibold text-white ">اختراقات بيانات الاعتماد</span>، تقدم Kakr Labs أمان الهوية والتفويض على بنية تحتية قائمة على إثبات العمل.',
        tryApi: 'جرب واجهة 2FA API مجاناً',
        contactSales: 'تواصل مع فريق المبيعات',
        stats: {
          uptime: 'شبكة إثبات عمل تعمل منذ 2011',
          cost: 'تسوية منخفضة التكلفة',
          stronger: 'مصادقة مقاومة للتصيد',
          pilot: 'برامج تجريبية متاحة'
        }
      },
      typing: ['كل صناعة', 'التمويل', 'الرعاية الصحية', 'القطاع الحكومي', 'الاتصالات', 'التعليم', 'SaaS'],
      whyKakr: {
        title: 'لماذا Kakr Labs لقطاعك',
        description: 'توفر مجموعة PTERI للمطورين مصادقة قائمة على المحفظة ومصادقة ثنائية لامركزية وخدمة BaaS، مما يلغي المخاطر المركزية مثل التصيد وثغرات الرسائل النصية. نقدم أدوات صديقة للمطورين للقطاعات التي تحتاج إلى ضوابط أمنية قوية وتكاليف قابلة للتوقع.',
        hostedOn: 'مستضاف على Google Cloud | مدعوم بـ Litecoin PoW'
      },
      industries: {
        title: 'القطاعات التي نخدمها',
        description: 'طور عملياتك بحلول مدعومة من Litecoin ومصممة لتحديات قطاعك الفريدة.',
        items: [
          {
            image: '/images/Finance-Fintech.png',
            title: 'التمويل والتقنية المالية',
            description: 'أمن المعاملات وبيانات العملاء عبر تسجيل دخول قائم على المحفظة وسجلات غير قابلة للتغيير.',
            points: ['تقليل التعرض لتبديل بطاقة SIM بالمصادقة الثنائية التشفيرية', 'سجلات تدقيق وأدلة تدعم برامج PCI DSS و NYDFS', 'مدفوعات صغيرة منخفضة الرسوم للوصول العالمي'],
            linkText: 'حلول التمويل'
          },
          {
            image: '/images/icons/healthcare.png',
            title: 'الرعاية الصحية',
            description: 'احم بيانات المرضى وامتثل لمعيار HIPAA باستخدام بيانات اعتماد يتحكم بها العميل وإثباتات مقاومة للتلاعب.',
            points: ['سير عمل للوصفات الطبية متوافق مع EPCS', 'وصول آمن للأجهزة الشخصية مع مصادقة المحفظة الثنائية', 'واجهات برمجية قابلة للتوسع لتكاملات التقنية الصحية'],
            linkText: 'حلول الرعاية الصحية'
          },
          {
            image: '/images/Government.png',
            title: 'القطاع الحكومي والعام',
            description: 'اضمن هوية متوافقة مع المعايير ومطالبات قابلة للتحقق لتعزيز الثقة العامة.',
            points: ['ضوابط وصول متوافقة مع NIST', 'سجلات تدقيق غير قابلة للتغيير لتحقيق الشفافية', 'PTERI ID (2026) لخدمات اعرف عميلك وخدمات المواطنين'],
            linkText: 'الحلول الحكومية'
          },
          {
            image: '/images/telecom-security.png',
            title: 'الاتصالات و eSIM',
            description: 'أوقف الاحتيال عبر تبديل بطاقة SIM بإثباتات eSIM وهويات مرتبطة بالمحفظة.',
            points: ['مصادقة تشفيرية للمشتركين', 'تسوية فعّالة من حيث التكلفة', 'تكامل سلس عبر REST/SDKs'],
            linkText: 'حلول الاتصالات'
          },
          {
            image: '/images/education-tech.png',
            title: 'التعليم',
            description: 'أمن بوابات الطلاب واخفض تكاليف تقنية المعلومات بمصادقة ثنائية بدون كلمات مرور.',
            points: ['لا رسوم رسائل نصية ولا إعادة تعيين كلمات المرور', 'حماية بيانات متوافقة مع GDPR', 'PTERI Playground لتطوير التطبيقات بسهولة'],
            linkText: 'حلول التعليم'
          },
          {
            image: '/images/tech-innovation.png',
            title: 'التقنية و SaaS',
            description: 'استبدل تطبيقات كلمات المرور المؤقتة القديمة بمصادقة بمستوى blockchain.',
            points: ['واجهات REST ومجموعات تطوير (Swift، Kotlin، JS) للتكامل السريع', 'ضوابط تركز على الخصوصية لحماية بيانات المستخدمين', 'خدمة BaaS قابلة للتوسع لابتكارات DApp'],
            linkText: 'الحلول التقنية'
          },
          {
            image: '/images/legal-services.png',
            title: 'الخدمات القانونية والمهنية',
            description: 'احم الملفات الحساسة عبر وصول لامركزي وإثباتات موثوقة.',
            points: ['سجلات غير قابلة للتغيير لعمليات التدقيق والامتثال', 'أدلة وسجلات تدقيق تدعم استعدادك لـ SOC 2 و ISO 27001', 'تكلفة اقتصادية بسنتات قليلة لكل عملية'],
            linkText: 'الحلول القانونية'
          }
        ]
      },
      comparison: {
        title: 'لماذا تختار PTERI 2FA بدلاً من الطرق التقليدية',
        description: 'تتفوق المصادقة الثنائية القائمة على المحفظة على Litecoin على حلول الرسائل النصية والتطبيقات، وتوفر أماناً وتكلفة لا مثيل لهما.',
        headers: ['القدرة', 'PTERI 2FA (Litecoin)', 'SMS / بريد إلكتروني OTP', 'تطبيقات المصادقة'],
        rows: [
          { name: 'بدون سحابة، حفظ ذاتي', pteri: 'تحكم كامل', sms: 'يعتمد على السحابة', app: 'مركزي' },
          { name: 'مقاوم للتصيد وتبديل بطاقة SIM', pteri: 'إثبات تشفيري', sms: 'معرض للخطر', app: 'قابل للتصيد' },
          { name: 'إثباتات قابلة للتحقق على السلسلة', pteri: 'غير قابل للتغيير', sms: 'بلا تحقق', app: 'دون اتصال فقط' },
          { name: 'متوسط التكلفة لكل حدث', pteri: 'منخفض', sms: 'مرتفع (رسوم الرسائل)', app: 'متوسط' }
        ]
      },
      cta: {
        title: 'هل أنت مستعد لتحويل قطاعك',
        description: 'ابدأ مع واجهة 2FA API المجانية أو استكشف برنامجاً تجريبياً لمدة 3 أشهر بخصم 50% لتجربة الأمان المدعوم بـ Litecoin.',
        startTrial: 'ابدأ التجربة المجانية',
        scheduleDemo: 'حدد موعد عرض توضيحي',
        support: 'الدعم',
        uptime: 'اتفاقية مستوى خدمة مدة التشغيل',
        integrations: 'التكاملات'
      }
    }
  }
  return texts[locale.value] || texts.en
})

/* --------------------------
   Typewriter (responsive)
--------------------------- */
const typedText = ref('')
let phraseIdx = 0, charIdx = 0, deleting = false, timer: number | undefined

// Watch for locale changes to reset typewriter
watch(locale, () => {
  phraseIdx = 0
  charIdx = 0
  deleting = false
  if (timer) window.clearTimeout(timer)
  typeLoop()
})

function typeLoop() {
  const phrases = industryTranslations.value.typing
  const current = phrases[phraseIdx]
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) { typedText.value = current; return }
  if (!deleting) {
    typedText.value = current.slice(0, ++charIdx)
    if (charIdx === current.length) return void (timer = window.setTimeout(() => { deleting = true; typeLoop() }, 1200))
  } else {
    typedText.value = current.slice(0, --charIdx)
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length }
  }
  timer = window.setTimeout(typeLoop, deleting ? 55 : 80)
}

/* --------------------------
   Scroll reveal (global)
--------------------------- */
function setupReveal() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  if (reduced) { els.forEach(el => el.classList.add('revealed')); return () => {} }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); io.unobserve(entry.target) }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
  els.forEach(el => io.observe(el))
  return () => io.disconnect()
}



onMounted(() => {
  typeLoop()
  const cleanup = setupReveal()
  onUnmounted(() => {
    if (timer) window.clearTimeout(timer)
    cleanup && cleanup()
  })
})
</script>

<style scoped>
/* Typewriter caret */
@keyframes caretBlink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
.caret { width:1px; height:1.1em; background:currentColor; display:inline-block; transform:translateY(0.1em); animation:caretBlink 1s steps(1) infinite }

/* Reveal animation */
.reveal { opacity:0; transform:translateY(30px); transition:opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1); transition-delay:var(--delay,0ms) }
.revealed { opacity:1; transform:translateY(0) }

/* Smooth scroll */
html { scroll-behavior:smooth }

/* Focus ring */
a:focus-visible, button:focus-visible { outline:2px solid #3b82f6; outline-offset:3px; border-radius:0.75rem }

/* Small tweaks for mobile */
@media (max-width:640px){ .caret{height:1em} }
</style>

