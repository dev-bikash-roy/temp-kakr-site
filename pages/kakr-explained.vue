<template>
  <main class="bg-white dark:bg-dark-900 text-neutral-900 dark:bg-black dark:text-neutral-100 font-sans selection:bg-green-200 dark:selection:bg-green-800/50 transition-colors duration-500 overflow-x-hidden">

<!-- HERO -->
<section
  class="relative overflow-hidden py-24 sm:py-28 pb-44 bg-gradient-to-b from-white to-neutral-50 dark:from-black dark:to-neutral-900"
>
  <!-- Subtle grid -->
  <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

  <!-- Floating soft orbs -->
  <!-- Floating soft orbs -->
  <div class="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
  <div class="pointer-events-none absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-emerald-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

  <!-- Content -->
  <div class="relative mx-auto max-w-4xl px-6 sm:px-8 text-center z-10">
    <div data-aos="fade-up">
      <div class="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-full mb-6">
        <span class="w-2 h-2 bg-green-500 rounded-full"></span>
        <span class="text-green-700 dark:text-green-300 text-sm font-medium">{{ explainedTranslations.hero.series }}</span>
      </div>

      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
        <span class="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent">
          {{ explainedTranslations.hero.titlePrefix }}
        </span>
        <span class="sr-only">{{ ' ' + explainedTranslations.hero.titleSuffix }}</span>
        <span class="type-line">
          <span class="text-neutral-900 dark:text-neutral-100" ref="typedTarget"></span>
          <span class="type-cursor" aria-hidden="true">|</span>
        </span>
      </h1>

      <p
        class="mt-6 text-lg sm:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        {{ explainedTranslations.hero.subtitle }}
      </p>

      <div
        class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        data-aos="zoom-in"
        data-aos-delay="180"
      >
        <a
          href="https://docs.kakr.ai/" target="_blank" rel="noopener"
          class="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 transition-all duration-300"
        >
          {{ explainedTranslations.hero.startBuilding }}
          <svg class="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M6 12h12"/>
          </svg>
        </a>

        <a
          href="/contact"
          class="inline-flex items-center px-8 py-4 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300"
        >
          {{ explainedTranslations.hero.contactUs }}
        </a>
      </div>
    </div>
  </div>

  <!-- Full-width video pinned to bottom of hero -->
  <div class="inset-x-0 bottom-0 overflow-hidden">
    <div class="relative">
      <!-- gradient fade so text reads clearly above -->
      <div class="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-transparent to-black/0 dark:to-black/0"></div>
      <div class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-t from-white/0 to-white dark:from-neutral-900/0 dark:to-neutral-950"></div>

      <div class="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <img
            src="/Pteri-Flowchart.png"
            alt="Pteri Platform Architecture Flowchart"
            class="w-full h-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- OVERVIEW SECTION -->
    <section class="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-neutral-50 dark:from-black dark:to-neutral-900">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6" data-aos="fade-up-right">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">{{ explainedTranslations.overview.title }}</h2>
          <p class="text-lg leading-relaxed text-neutral-400 font-light">
            {{ explainedTranslations.overview.text1 }}
          </p>
          <div class="bg-white dark:bg-dark-900/60 dark:bg-neutral-900/60 backdrop-blur-sm rounded-xl p-5 border border-neutral-200/50 dark:border-neutral-800/50 mt-6" data-aos="fade-up" data-aos-delay="150">
            <p class="text-sm italic text-neutral-600 dark:text-neutral-400">
              {{ explainedTranslations.overview.text2 }}
            </p>
          </div>
        </div>
        <div data-aos="fade-left">
          <img src="/images/blockchain-infrastructure.png" alt="Blockchain Bridge" class="rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>

    <!-- MAIN PRODUCTS -->
    <section class="py-20 px-6 sm:px-8 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent" data-aos="fade-up">{{ explainedTranslations.mainProducts.title }}</h2>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
          {{ explainedTranslations.mainProducts.subtitle }}
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div
            v-for="(product, index) in mainProducts"
            :key="index"
            class="group relative bg-white dark:bg-dark-900 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200/50 dark:border-neutral-800/50 hover:border-green-300/60 dark:hover:border-green-700/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            data-aos="fade-up"
            :data-aos-delay="100 + (index * 100)"
          >
            <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{{ product.title }}</h3>
            <p class="text-neutral-400 mb-4 text-sm leading-relaxed">{{ product.description }}</p>
            <img :src="product.image" :alt="product.title" class="w-full h-36 object-cover rounded-xl mt-4 border border-neutral-200/30 dark:border-neutral-800/30" />
          </div>
        </div>
      </div>
    </section>

    <!-- BENEFITS & IMPACT -->
    <section class="py-20 px-6 sm:px-8 lg:px-12 bg-neutral-50 dark:bg-neutral-900">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent" data-aos="fade-up">{{ explainedTranslations.benefits.title }}</h2>
        <p class="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 px-4" data-aos="fade-up" data-aos-delay="100">
          {{ explainedTranslations.benefits.text1 }}
        </p>
        <div class="bg-white dark:bg-dark-900/60 dark:bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 dark:border-neutral-800/50 mx-4" data-aos="fade-up" data-aos-delay="200">
          <p class="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {{ explainedTranslations.benefits.text2 }}
          </p>
        </div>
        <img src="/images/digital-economy.png" alt="Digital Economy" class="rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 mx-auto mt-8 w-full max-w-3xl hover:scale-105 transition-transform duration-500" data-aos="zoom-in" data-aos-delay="300" />
      </div>
    </section>

    <!-- BACKGROUND & MISSION -->
    <section class="py-20 px-6 sm:px-8 lg:px-12">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">{{ explainedTranslations.background.title }}</h2>
          <p class="text-lg leading-relaxed text-neutral-400 mt-6 font-light">
            {{ explainedTranslations.background.text1 }}
          </p>
          <blockquote class="bg-green-50 dark:bg-green-950/30 p-5 rounded-xl border-l-4 border-green-500 mt-6">
            <p class="font-semibold text-green-800 dark:text-green-300">{{ explainedTranslations.background.quote }}</p>
          </blockquote>
          <p class="text-lg leading-relaxed text-neutral-400 mt-6 font-light">
            {{ explainedTranslations.background.text2 }}
          </p>
        </div>
        <div data-aos="fade-left" data-aos-delay="150">
          <img src="/images/web3-mission.png" alt="Mission" class="rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>

    <!-- DETAILED PRODUCTS TABLE -->
    <section class="py-20 px-6 sm:px-8 lg:px-12 bg-neutral-50 dark:bg-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent" data-aos="fade-up">{{ explainedTranslations.deepDive.title }}</h2>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          {{ explainedTranslations.deepDive.subtitle }}
        </p>

        <div
          v-for="(product, index) in detailedProducts"
          :key="index"
          class="mb-12 group"
          data-aos="fade-up"
          :data-aos-delay="100 + (index * 100)"
        >
          <div class="bg-white dark:bg-dark-900 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg hover:shadow-xl transition-all duration-500">
            <div class="flex flex-col lg:flex-row gap-8">
              <div class="lg:w-1/3">
                <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{{ product.name }}</h3>
                <p class="text-neutral-700 dark:text-neutral-300 mb-4">{{ product.description }}</p>
                <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover rounded-xl border border-neutral-200/30 dark:border-neutral-800/30 mt-4" />
              </div>
              <div class="lg:w-2/3 grid md:grid-cols-3 gap-6">
                <div class="space-y-2">
                  <h4 class="font-semibold text-green-600 dark:text-green-400">{{ explainedTranslations.deepDive.labels.keyFeatures }}</h4>
                  <ul class="text-sm text-neutral-400 space-y-2">
                    <li v-for="(feature, idx) in product.features" :key="idx" class="flex items-start gap-2">
                      <span class="inline-block w-1 h-1 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                      {{ feature }}
                    </li>
                  </ul>
                </div>
                <div class="space-y-2">
                  <h4 class="font-semibold text-green-700 dark:text-green-500">{{ explainedTranslations.deepDive.labels.useCases }}</h4>
                  <ul class="text-sm text-neutral-400 space-y-2">
                    <li v-for="(use, idx) in product.useCases" :key="idx" class="flex items-start gap-2">
                      <span class="inline-block w-1 h-1 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                      {{ use }}
                    </li>
                  </ul>
                </div>
                <div class="space-y-2">
                  <h4 class="font-semibold text-green-800 dark:text-green-600">{{ explainedTranslations.deepDive.labels.technicalAdvantages }}</h4>
                  <ul class="text-sm text-neutral-400 space-y-2">
                    <li v-for="(adv, idx) in product.advantages" :key="idx" class="flex items-start gap-2">
                      <span class="inline-block w-1 h-1 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                      {{ adv }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pteri Intelligence -->
        <div class="mt-16 bg-white dark:bg-dark-900 dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200/50 dark:border-neutral-800/50 shadow-xl" data-aos="zoom-in">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-3">{{ explainedTranslations.intelligence.title }}</h3>
              <p class="text-neutral-700 dark:text-neutral-300 mb-4">{{ explainedTranslations.intelligence.subtitle }}</p>
              <ul class="text-sm text-neutral-700 dark:text-neutral-300 space-y-2 mb-4">
                <li v-for="(bullet, idx) in explainedTranslations.intelligence.bullets" :key="idx">{{ bullet }}</li>
              </ul>
              <p class="text-sm italic text-neutral-600 dark:text-neutral-400">
                {{ explainedTranslations.intelligence.footer }}
              </p>
            </div>
            <img src="https://placehold.co/400x300/ec4899/ffffff?text=Pteri+Intelligence" alt="AI Agent" class="rounded-xl shadow-md border border-neutral-200/50 dark:border-neutral-800/50" />
          </div>
        </div>

        <div class="mt-8 text-center text-sm text-neutral-600 dark:text-neutral-400" data-aos="fade-up" data-aos-delay="150">
          These products emphasize user empowerment by enforcing self-custody and data privacy, allowing developers to build without prior blockchain expertise. For instance, the LiaaS Playground enables no-code prototyping, while customer-controlled payment credentials keep transaction management in the user's hands, addressing real-world commerce needs.
        </div>
      </div>
    </section>

    <!-- TECHNICAL FOUNDATIONS -->
    <section class="py-20 px-6 sm:px-8 lg:px-12 bg-neutral-950 border-t border-white/5">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="flip-left">
          <img src="/images/technical-foundations.png" alt="Technical Foundations" class="rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="space-y-6" data-aos="fade-left" data-aos-delay="150">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">{{ explainedTranslations.technical.title }}</h2>
          <p class="text-lg leading-relaxed text-neutral-400 font-light">
            {{ explainedTranslations.technical.text1 }}
          </p>
          <p class="text-lg leading-relaxed text-neutral-400 font-light">
            {{ explainedTranslations.technical.text2 }}
          </p>
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="bg-white dark:bg-dark-900/60 dark:bg-neutral-900/60 backdrop-blur-sm rounded-xl p-4 border border-neutral-200/50 dark:border-neutral-800/50" data-aos="fade-up">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400">12+</div>
              <div class="text-sm text-neutral-600 dark:text-neutral-400">{{ explainedTranslations.technical.stats.uptime }}</div>
            </div>
            <div class="bg-white dark:bg-dark-900/60 dark:bg-neutral-900/60 backdrop-blur-sm rounded-xl p-4 border border-neutral-200/50 dark:border-neutral-800/50" data-aos="fade-up" data-aos-delay="100">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400">$0.04</div>
              <div class="text-sm text-neutral-600 dark:text-neutral-400">{{ explainedTranslations.technical.stats.fee }}</div>
            </div>
            <div class="bg-white dark:bg-dark-900/60 dark:bg-neutral-900/60 backdrop-blur-sm rounded-xl p-4 border border-neutral-200/50 dark:border-neutral-800/50" data-aos="fade-up" data-aos-delay="200">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400">1M+</div>
              <div class="text-sm text-neutral-600 dark:text-neutral-400">{{ explainedTranslations.technical.stats.tx }}</div>
            </div>
            <div class="bg-white dark:bg-dark-900/60 dark:bg-neutral-900/60 backdrop-blur-sm rounded-xl p-4 border border-neutral-200/50 dark:border-neutral-800/50" data-aos="fade-up" data-aos-delay="300">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400">AI</div>
              <div class="text-sm text-neutral-600 dark:text-neutral-400">{{ explainedTranslations.technical.stats.mcp }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- PARTNERSHIPS -->
<section class="py-20 px-6 sm:px-8 lg:px-12">
  <div class="max-w-7xl mx-auto text-center">
    <h2
      class="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent"
      data-aos="fade-up"
    >
      {{ explainedTranslations.partnerships.title }}
    </h2>
    <p
      class="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-12"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {{ explainedTranslations.partnerships.subtitle }}
    </p>

    <!-- Logo Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
      <a
        href="https://www.ibm.com/partnerplus"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center justify-center w-full h-32 bg-white dark:bg-dark-900 dark:bg-white dark:bg-dark-900/5 rounded-lg border border-neutral-200 dark:border-white/5 hover:border-green-500/50 dark:hover:border-white/20 transition-all duration-300 shadow-sm"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <img
          src="/images/ibm-partner-logo.png"
          alt="IBM Partner Plus"
          class="max-h-20 w-auto object-contain transition duration-300"
          loading="lazy"
        />
      </a>

      <a
        href="https://www.microsoft.com/startups"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center justify-center w-full h-32 bg-white dark:bg-dark-900/5 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src="/images/microsoft-startups.png"
          alt="Microsoft Startups"
          class="max-h-20 w-auto object-contain transition duration-300"
          loading="lazy"
        />
      </a>

      <a
        href="https://openai.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center justify-center w-full h-32 bg-white dark:bg-dark-900/5 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <img
          src="/openai-white.png"
          alt="OpenAI Partner"
          class="max-h-20 w-auto object-contain transition duration-300"
          loading="lazy"
        />
      </a>

      <a
        href="https://startup.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center justify-center w-full h-32 bg-white dark:bg-dark-900/5 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <img
          src="/images/google-startups-logo.png"
          alt="Google Startups"
          class="max-h-20 w-auto object-contain transition duration-300"
          loading="lazy"
        />
      </a>
    </div>

    <!-- Optional caption -->
    <p
      class="mt-10 text-sm text-neutral-500 dark:text-neutral-400"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      {{ explainedTranslations.partnerships.disclaimer }}
    </p>
  </div>
</section>


    <!-- SOCIETAL IMPACT -->
    <section class="py-20 px-6 sm:px-8 lg:px-12 bg-neutral-50 dark:bg-black">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">{{ explainedTranslations.societal.title }}</h2>
          <p class="text-lg leading-relaxed text-neutral-400 mt-6 font-light">
            {{ explainedTranslations.societal.text1 }}
          </p>
          <div class="bg-white dark:bg-dark-900/60 dark:bg-neutral-900/60 backdrop-blur-sm rounded-xl p-5 border border-neutral-200/50 dark:border-neutral-800/50 mt-6">
            <p class="text-sm text-neutral-700 dark:text-neutral-300">
              {{ explainedTranslations.societal.text2 }}
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150">
          <img src="/images/global-impact.png" alt="Societal Impact" class="rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>

    <!-- FOOTER CTA -->
    <section class="relative py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-green-600 via-green-700 to-green-800 overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_70%)] -z-10"></div>
      <div class="max-w-4xl mx-auto text-center text-white space-y-6" data-aos="zoom-in-up">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{{ explainedTranslations.footer.title }}</h2>
        <p class="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
          {{ explainedTranslations.footer.subtitle }}
        </p>
        <div class="pt-4">
          <a
            href="https://docs.kakr.ai/" target="_blank" rel="noopener"
            class="inline-block px-8 py-4 rounded-full bg-white dark:bg-dark-900 text-green-600 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {{ explainedTranslations.footer.cta }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useHead, useSEO } from '#imports'

// ---------------- SEO ----------------
const url = 'https://www.kakr.ai/explained'
const ogImage = 'https://www.kakr.ai/images/og/kakr-explained-og.jpg'

const { setSEO } = useSEO()

setSEO({
  title: 'Kakr Labs Explained | Litecoin-Powered Web3 Platforms & AI',
  description: 'Dive into Kakr Labs: Litecoin-based Web3 platforms, decentralized 2FA, AI (MCP), and enterprise-grade data. Consistently high uptime, low fees, customer-controlled payment credentials.',
  keywords: ['Kakr Labs', 'Litecoin', 'PTERI', 'Web3', 'decentralized 2FA', 'MCP', 'customer-controlled payment credentials', 'blockchain security', 'enterprise'],
  image: ogImage,
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': url + '#org',
          name: 'Kakr Labs',
          url,
          logo: 'https://www.kakr.ai/images/logo.png',
          sameAs: [
            'https://x.com/kakrlabs',
            'https://www.linkedin.com/company/kakr-labs'
          ]
        },
        {
          '@type': 'WebPage',
          name: 'Kakr Labs Explained',
          url,
          description: 'Overview of Kakr Labs platforms on Litecoin: decentralized 2FA, AI (MCP), data pipelines.',
          isPartOf: { '@id': url + '#org' }
        }
      ]
    }
  ]
})

// ---------------- Typing Effect (responsive + reduced-motion aware) ----------------
const typedTarget = ref<HTMLElement | null>(null)
let typingTimer: number | undefined
let pauseTimer: number | undefined

const phrases = computed(() => [
  explainedTranslations.value.hero.titleSuffix,
  explainedTranslations.value.hero.typing1,
  explainedTranslations.value.hero.typing2
])
const typeSpeed = 60
const eraseSpeed = 40
const holdTime = 1200

function startTyping() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!typedTarget.value) return

  // Reduced motion: show first phrase statically
  if (reduced) {
    typedTarget.value.textContent = phrases.value[0]
    const cursor = (typedTarget.value.nextElementSibling as HTMLElement | null)
    if (cursor) cursor.style.display = 'none'
    return
  }

  let phraseIndex = 0
  let charIndex = 0
  let typing = true

  const tick = () => {
    if (!typedTarget.value) return

    const current = phrases.value[phraseIndex]
    if (typing) {
      // type
      typedTarget.value.textContent = current.slice(0, charIndex + 1)
      charIndex++
      if (charIndex === current.length) {
        typing = false
        pauseTimer = window.setTimeout(() => {
          typingTimer = window.setInterval(tick, eraseSpeed) as unknown as number
        }, holdTime) as unknown as number
        window.clearInterval(typingTimer)
        return
      }
    } else {
      // erase
      typedTarget.value.textContent = current.slice(0, charIndex - 1)
      charIndex--
      if (charIndex === 0) {
        typing = true
        phraseIndex = (phraseIndex + 1) % phrases.value.length
      }
    }
  }

  typingTimer = window.setInterval(tick, typeSpeed) as unknown as number
}

onMounted(async () => {
  // Start typing after mount
  startTyping()

  // Lazy-load AOS (only on client)
  const AOS = (await import('aos')).default
  AOS.init({
    offset: 80,
    duration: 550,
    easing: 'ease-out-quad',
    once: true
  })
})

onBeforeUnmount(() => {
  if (typingTimer) window.clearInterval(typingTimer)
  if (pauseTimer) window.clearTimeout(pauseTimer)
})

// ---------------- Translations ----------------
const { locale } = useI18n()

const explainedTranslations = computed(() => {
  const texts: any = {
    en: {
      hero: {
        series: 'Kakr Labs • Series',
        titlePrefix: 'Kakr Labs',
        titleSuffix: 'Explained',
        typing1: 'Built on Litecoin',
        typing2: 'Decentralized by Design',
        subtitle: 'A visionary series revealing who we are, what we build, and the principles powering the next evolution of Web3.',
        startBuilding: 'Start Building',
        contactUs: 'Contact Us'
      },
      overview: {
        title: 'Overview',
        text1: 'Kakr Labs is a company specializing in Litecoin-based blockchain solutions, providing infrastructure that aims to bridge traditional business needs with decentralized technology. Founded with a focus on Litecoin\'s reliability, it develops tools to enable secure applications without the complexities often associated with blockchain.',
        text2: 'Kakr Labs represents an innovative player in the Web3 space, dedicated to harnessing the Litecoin blockchain to deliver practical, enterprise-ready solutions that empower users and businesses alike. As a startup rooted in decentralized principles, Kakr Labs focuses on creating infrastructure that simplifies blockchain adoption while maintaining high standards of security, scalability, and regulatory compliance.'
      },
      mainProducts: {
        title: 'Main Products',
        subtitle: 'Their offerings include the Pteri Platform for blockchain infrastructure APIs, PTERI App for self-custody, and LiaaS for easy Web3 integration - all designed to leverage Litecoin’s low-cost, high-uptime network. These products support features like decentralized 2FA and privacy payments, helping users maintain control over their data.',
        items: [
          { title: 'Pteri Platform', description: 'Blockchain infrastructure APIs hosted on Microsoft Azure for Litecoin.' },
          { title: 'PTERI App', description: 'Self-custody wallet for secure Litecoin transactions with customer-controlled payment credentials.' },
          { title: 'LiaaS', description: 'Unified developer tooling with zero node maintenance and 30+ protocols.' },
          { title: 'Decentralized 2FA', description: 'Wallet-based authentication with message signing - no SMS vulnerabilities.' }
        ]
      },
      benefits: {
        title: 'Benefits and Impact',
        text1: 'By prioritizing user sovereignty and regulatory compliance, Kakr Labs could contribute to a more inclusive digital economy, though success depends on wider Litecoin adoption and market conditions.',
        text2: 'Kakr Labs represents an innovative player in the Web3 space, dedicated to harnessing the Litecoin blockchain to deliver practical, enterprise-ready solutions that empower users and businesses alike. As a startup rooted in decentralized principles, Kakr Labs focuses on creating infrastructure that simplifies blockchain adoption while maintaining high standards of security, scalability, and regulatory compliance. This explanation delves into the company\'s background, core offerings, technical foundations, partnerships, and potential societal contributions, drawing from official sources and industry insights to provide a comprehensive view.'
      },
      background: {
        title: 'Background and Mission',
        text1: 'Established as a Web3 innovator, Kakr Labs emerged with the goal of addressing key pain points in blockchain development, such as high costs, complexity, and centralization risks. The company positions itself as the pioneer in building enterprise-grade tools exclusively on the Litecoin mainnet, a network launched in 2011 as a Bitcoin fork with enhanced efficiency features like 2.5-minute block times and low transaction fees averaging just $0.04 USD. Litecoin, often dubbed the "silver to Bitcoin\'s gold," is recognized as a digital commodity by U.S. regulators, providing a stable, non-security foundation that avoids the pitfalls of more speculative chains.',
        quote: '“Lead the Web 3.0 evolution by simplifying blockchain development while preserving decentralization.”',
        text2: 'This involves removing centralized failure points through user-controlled tools, such as wallet-approved authentication, and promoting a "no accounts, no storage" model to ensure privacy and user control. By focusing on Litecoin\'s proven track record-over 12 years of continuous uptime, support for 250 million addresses, and millions of daily transactions-Kakr Labs aims to make its identity and authorization security infrastructure accessible to enterprises modernizing their authentication systems.'
      },
      deepDive: {
        title: 'Product Deep Dive',
        subtitle: 'Technical specifications, use cases, and advantages of each core offering.',
        items: [
          {
            name: 'Pteri Platform',
            description: 'Blockchain infrastructure APIs hosted on Microsoft Azure, the first of their kind for Litecoin.',
            features: ['AI-powered Model Context Protocol (MCP) APIs', 'Natural language transaction management via LiaaS Playground', 'ETF-ready compliance'],
            useCases: ['Enterprise Web3 app development', 'Scalable infrastructure'],
            advantages: ['Closed-source for reliability', 'Zero downtime', 'Integrates with Azure for global scalability']
          },
          {
            name: 'PTERI App',
            description: 'Self-custody wallet solution (integrating former Cyto Wallet capabilities) for secure Litecoin transactions.',
            features: ['BIP39 seed phrases', 'Customer-Controlled Payment Credentials', 'Real-time balances; decentralized 2FA'],
            useCases: ['Personal and business payments', 'Privacy-focused asset management'],
            advantages: ['User-controlled keys', 'Phishing-resistant', 'Low fees and high uptime']
          },
          {
            name: 'LiaaS (Litecoin as a Service)',
            description: 'Unified developer tooling for blockchain interactions.',
            features: ['Supports 30+ protocols/languages', 'Wallet creation, token issuance, NFT minting', 'Zero node maintenance'],
            useCases: ['DApp building', 'Digital asset management', 'Micropayments'],
            advantages: ['Instant integration', 'Cents-per-transaction fees']
          },
          {
            name: 'Decentralized 2FA',
            description: 'Wallet-based authentication system.',
            features: ['Message signing for logins', 'OTP from seeds', 'No SMS/email vulnerabilities'],
            useCases: ['Secure account protection', 'Enterprise authentication'],
            advantages: ['Blockchain-secured', 'Resistant to phishing', 'Compliant with standards']
          }
        ],
        labels: {
          keyFeatures: 'Key Features',
          useCases: 'Use Cases',
          technicalAdvantages: 'Technical Advantages'
        }
      },
      intelligence: {
        title: 'Pteri Intelligence',
        subtitle: 'AI agent for natural language blockchain tasks.',
        bullets: [
          '• Handles wallet creation, token issuance, balance checks',
          '• Automated workflows via MCP',
          '• Rapid prototyping for non-experts'
        ],
        footer: 'Powered by Gemini; privacy-gated on Litecoin.'
      },
      technical: {
        title: 'Technical Foundations and Innovations',
        text1: 'Built on Litecoin\'s Proof-of-Work consensus-identical to Bitcoin\'s for security-Kakr Labs\' infrastructure boasts zero downtime and double-spend resistance. Innovations like the MCP API allow natural language commands for complex operations, reducing development time significantly. The company avoids token-based models, opting for a service-first approach to ensure sustainability.',
        text2: 'Security features, such as decentralized 2FA, replace vulnerable methods like SMS, using wallet signatures for authentication. This setup supports scalable applications, with Litecoin\'s network handling over a million daily transactions efficiently.',
        stats: {
          uptime: 'Years Uptime',
          fee: 'Avg. Fee',
          tx: 'Daily TX',
          mcp: 'MCP APIs'
        }
      },
      partnerships: {
        title: 'Strategic Partnerships',
        subtitle: 'Kakr Labs partners with leading technology providers to deliver compliant, high-availability solutions at enterprise scale.',
        disclaimer: 'Logos are trademarks of their respective owners and are used for identification only.'
      },
      societal: {
        title: 'Societal Impact and Challenges',
        text1: 'Kakr Labs contributes to a more inclusive Web3 by enabling low-barrier tools that promote financial access, such as micropayments in emerging markets and transparent records via SDRs. Customer-controlled payment credentials help address surveillance concerns, while the focus on commodity status aids institutional adoption.',
        text2: 'However, challenges include competition from Ethereum-centric platforms and the need for broader interoperability. Future outlooks point to AI-blockchain fusion and DeFi expansions, potentially amplifying its role in a decentralized economy.'
      },
      footer: {
        title: 'Ready to Build the Future?',
        subtitle: 'Join thousands of developers and enterprises already leveraging Kakr Labs to deploy secure, scalable Web3 solutions on Litecoin.',
        cta: 'Start Building Now'
      }
    },
    de: {
      hero: {
        series: 'Kakr Labs • Serie',
        titlePrefix: 'Kakr Labs',
        titleSuffix: 'Erklärt',
        typing1: 'Auf Litecoin gebaut',
        typing2: 'Dezentralisiert durch Design',
        subtitle: 'Eine visionäre Serie, die enthüllt, wer wir sind, was wir bauen und die Prinzipien, die die nächste Evolution von Web3 antreiben.',
        startBuilding: 'Jetzt bauen',
        contactUs: 'Kontaktieren Sie uns'
      },
      overview: {
        title: 'Überblick',
        text1: 'Kakr Labs ist ein Unternehmen, das sich auf Litecoin-basierte Blockchain-Lösungen spezialisiert hat und Infrastruktur bereitstellt, die traditionelle Geschäftsanforderungen mit dezentraler Technologie verbindet. Gegründet mit Fokus auf die Zuverlässigkeit von Litecoin, entwickelt es Tools, um sichere Anwendungen ohne die oft mit Blockchain verbundene Komplexität zu ermöglichen.',
        text2: 'Kakr Labs ist ein innovativer Akteur im Web3-Bereich, der sich der Nutzung der Litecoin-Blockchain widmet, um praktische, unternehmensgerechte Lösungen zu liefern, die Benutzer und Unternehmen gleichermaßen stärken. Als Startup, das auf dezentralen Prinzipien basiert, konzentriert sich Kakr Labs auf die Schaffung einer Infrastruktur, die die Blockchain-Adoption vereinfacht und gleichzeitig hohe Standards für Sicherheit, Skalierbarkeit und regulatorische Compliance aufrechterhält.'
      },
      mainProducts: {
        title: 'Hauptprodukte',
        subtitle: 'Das Angebot umfasst die Pteri-Plattform für Blockchain-Infrastruktur-APIs, PTERI App für Self-Custody und LiaaS für einfache Web3-Integration – alle entwickelt, um das kostengünstige, hochverfügbare Netzwerk von Litecoin zu nutzen. Diese Produkte unterstützen Funktionen wie dezentrale 2FA und private Zahlungen und helfen Benutzern, die Kontrolle über ihre Daten zu behalten.',
        items: [
          { title: 'Pteri Plattform', description: 'Blockchain-Infrastruktur-APIs gehostet auf Microsoft Azure für Litecoin.' },
          { title: 'PTERI App', description: 'Self-Custody-Wallet für sichere Litecoin-Transaktionen mit kundengesteuerten Zahlungsberechtigungen.' },
          { title: 'LiaaS', description: 'Einheitliche Entwickler-Tools ohne Node-Wartung und mit 30+ Protokollen.' },
          { title: 'Dezentrale 2FA', description: 'Wallet-basierte Authentifizierung mit Nachrichtensignierung – keine SMS-Schwachstellen.' }
        ]
      },
      benefits: {
        title: 'Vorteile und Auswirkungen',
        text1: 'Durch die Priorisierung von Benutzersouveränität und regulatorischer Compliance könnte Kakr Labs zu einer inklusiveren digitalen Wirtschaft beitragen, obwohl der Erfolg von einer breiteren Litecoin-Adoption und den Marktbedingungen abhängt.',
        text2: 'Kakr Labs ist ein innovativer Akteur im Web3-Bereich, der sich der Nutzung der Litecoin-Blockchain widmet, um praktische, unternehmensgerechte Lösungen zu liefern. Diese Erklärung befasst sich mit dem Hintergrund des Unternehmens, den Kernangeboten, den technischen Grundlagen, Partnerschaften und potenziellen gesellschaftlichen Beiträgen.'
      },
      background: {
        title: 'Hintergrund und Mission',
        text1: 'Als Web3-Innovator gegründet, entstand Kakr Labs mit dem Ziel, wichtige Probleme in der Blockchain-Entwicklung wie hohe Kosten, Komplexität und Zentralisierungsrisiken anzugehen. Das Unternehmen positioniert sich als Pionier beim Aufbau von Enterprise-Grade-Tools exklusiv auf dem Litecoin-Mainnet, einem Netzwerk, das 2011 als Bitcoin-Fork mit verbesserten Effizienzfunktionen wie 2,5-Minuten-Blockzeiten und niedrigen Transaktionsgebühren von durchschnittlich nur 0,04 USD gestartet wurde.',
        quote: '„Die Web 3.0-Evolution anführen, indem Blockchain-Entwicklung vereinfacht wird, während Dezentralisierung gewahrt bleibt.“',
        text2: 'Dies beinhaltet das Entfernen zentraler Fehlerquellen durch benutzergesteuerte Tools wie Wallet-genehmigte Authentifizierung und die Förderung eines Modells „keine Konten, keine Speicherung“ zur Gewährleistung von Privatsphäre und Souveränität. Durch den Fokus auf Litecoins bewährte Erfolgsbilanz – über 12 Jahre durchgehender Betriebszeit – zielt Kakr Labs darauf ab, Web3 für Unternehmen zugänglich zu machen.'
      },
      deepDive: {
        title: 'Produkt-Deep-Dive',
        subtitle: 'Technische Spezifikationen, Anwendungsfälle und Vorteile jedes Kernangebots.',
        items: [
          {
            name: 'Pteri Plattform',
            description: 'Blockchain-Infrastruktur-APIs gehostet auf Microsoft Azure, die ersten ihrer Art für Litecoin.',
            features: ['KI-gestützte Model Context Protocol (MCP) APIs', 'Natürliches Sprachmanagement für Transaktionen via LiaaS Playground', 'ETF-bereite Compliance'],
            useCases: ['Enterprise Web3 App-Entwicklung', 'Skalierbare Infrastruktur'],
            advantages: ['Closed-Source für Zuverlässigkeit', 'Null Ausfallzeit', 'Integriert mit Azure für globale Skalierbarkeit']
          },
          {
            name: 'PTERI App',
            description: 'Self-Custody-Wallet-Lösung für sichere Litecoin-Transaktionen.',
            features: ['BIP39 Seed-Phrasen', 'Kundengesteuerte Zahlungsberechtigungen', 'Echtzeit-Guthaben; dezentrale 2FA'],
            useCases: ['Persönliche und geschäftliche Zahlungen', 'Datenschutzorientierte Vermögensverwaltung'],
            advantages: ['Benutzerkontrollierte Schlüssel', 'Phishing-resistent', 'Niedrige Gebühren und hohe Uptime']
          },
          {
            name: 'LiaaS (Litecoin as a Service)',
            description: 'Einheitliche Entwickler-Tools für Blockchain-Interaktionen.',
            features: ['Unterstützt 30+ Protokolle/Sprachen', 'Wallet-Erstellung, Token-Ausgabe', 'Null Node-Wartung'],
            useCases: ['DApp-Entwicklung', 'Verwaltung digitaler Vermögenswerte', 'Mikrozahlungen'],
            advantages: ['Sofortige Integration', 'Gebühren im Cent-Bereich']
          },
          {
            name: 'Dezentrale 2FA',
            description: 'Wallet-basiertes Authentifizierungssystem.',
            features: ['Nachrichtensignierung für Logins', 'OTP aus Seeds', 'Keine SMS/E-Mail-Schwachstellen'],
            useCases: ['Sicherer Kontoschutz', 'Unternehmensauthentifizierung'],
            advantages: ['Blockchain-gesichert', 'Resistent gegen Phishing', 'Konform mit Standards']
          }
        ],
        labels: {
          keyFeatures: 'Hauptmerkmale',
          useCases: 'Anwendungsfälle',
          technicalAdvantages: 'Technische Vorteile'
        }
      },
      intelligence: {
        title: 'Pteri Intelligence',
        subtitle: 'KI-Agent für natürlichsprachliche Blockchain-Aufgaben.',
        bullets: [
          '• Handhabt Wallet-Erstellung, Token-Ausgabe, Guthabenprüfungen',
          '• Automatisierte Workflows via MCP',
          '• Schnelles Prototyping für Nicht-Experten'
        ],
        footer: 'Angetrieben von Gemini; datenschutzgeschützt auf Litecoin.'
      },
      technical: {
        title: 'Technische Grundlagen und Innovationen',
        text1: 'Aufgebaut auf dem Proof-of-Work-Konsens von Litecoin – identisch mit Bitcoin für Sicherheit – bietet die Infrastruktur von Kakr Labs null Ausfallzeiten und Resistenz gegen Double-Spending. Innovationen wie die MCP-API ermöglichen natürlichsprachliche Befehle für komplexe Operationen.',
        text2: 'Sicherheitsfunktionen wie dezentrale 2FA ersetzen anfällige Methoden wie SMS durch Wallet-Signaturen. Dieses Setup unterstützt skalierbare Anwendungen, wobei das Litecoin-Netzwerk täglich über eine Million Transaktionen effizient abwickelt.',
        stats: {
          uptime: 'Jahre Uptime',
          fee: 'Ø Gebühr',
          tx: 'Tägl. TX',
          mcp: 'MCP APIs'
        }
      },
      partnerships: {
        title: 'Strategische Partnerschaften',
        subtitle: 'Kakr Labs arbeitet mit führenden Technologieanbietern zusammen, um konforme, hochverfügbare Lösungen im Unternehmensmaßstab bereitzustellen.',
        disclaimer: 'Logos sind Marken ihrer jeweiligen Eigentümer und dienen nur zur Identifikation.'
      },
      societal: {
        title: 'Gesellschaftliche Auswirkungen und Herausforderungen',
        text1: 'Kakr Labs trägt zu einem inklusiveren Web3 bei, indem es Tools mit niedrigen Barrieren ermöglicht, die den finanziellen Zugang fördern, wie Mikrozahlungen in Schwellenländern. Kundengesteuerte Zahlungsberechtigungen adressieren Überwachungsbedenken.',
        text2: 'Herausforderungen sind jedoch der Wettbewerb durch Ethereum-zentrierte Plattformen und der Bedarf an breiterer Interoperabilität. Zukunftsaussichten deuten auf eine Fusion von KI und Blockchain hin.'
      },
      footer: {
        title: 'Bereit, die Zukunft zu bauen?',
        subtitle: 'Schließen Sie sich Tausenden von Entwicklern und Unternehmen an, die Kakr Labs bereits nutzen, um sichere, skalierbare Web3-Lösungen auf Litecoin bereitzustellen.',
        cta: 'Jetzt bauen'
      }
    },
    es: {
      hero: {
        series: 'Kakr Labs • Serie',
        titlePrefix: 'Kakr Labs',
        titleSuffix: 'Explicado',
        typing1: 'Construido en Litecoin',
        typing2: 'Descentralizado por Diseño',
        subtitle: 'Una serie visionaria que revela quiénes somos, qué construimos y los principios que impulsan la próxima evolución de Web3.',
        startBuilding: 'Empezar a Construir',
        contactUs: 'Contáctenos'
      },
      overview: {
        title: 'Visión General',
        text1: 'Kakr Labs es una empresa especializada en soluciones blockchain basadas en Litecoin, proporcionando infraestructura que busca unir las necesidades comerciales tradicionales con la tecnología descentralizada. Fundada con un enfoque en la fiabilidad de Litecoin, desarrolla herramientas para permitir aplicaciones seguras sin las complejidades a menudo asociadas con blockchain.',
        text2: 'Kakr Labs representa un jugador innovador en el espacio Web3, dedicado a aprovechar la blockchain de Litecoin para ofrecer soluciones prácticas y listas para empresas. Como startup arraigada en principios descentralizados, Kakr Labs se centra en crear infraestructura que simplifica la adopción de blockchain manteniendo altos estándares de seguridad y cumplimiento.'
      },
      mainProducts: {
        title: 'Productos Principales',
        subtitle: 'Sus ofertas incluyen la Plataforma Pteri para APIs de infraestructura blockchain, PTERI App para autocustodia y LiaaS para una fácil integración Web3 - todos diseñados para aprovechar la red de bajo costo y alto tiempo de actividad de Litecoin.',
        items: [
          { title: 'Plataforma Pteri', description: 'APIs de infraestructura blockchain alojadas en Microsoft Azure para Litecoin.' },
          { title: 'Billetera Pteri', description: 'Billetera de autocustodia para transacciones seguras de Litecoin con credenciales de pago controladas por el cliente.' },
          { title: 'LiaaS', description: 'Herramientas unificadas para desarrolladores sin mantenimiento de nodos y más de 30 protocolos.' },
          { title: '2FA Descentralizado', description: 'Autenticación basada en billetera con firma de mensajes - sin vulnerabilidades de SMS.' }
        ]
      },
      benefits: {
        title: 'Beneficios e Impacto',
        text1: 'Al priorizar la soberanía del usuario y el cumplimiento normativo, Kakr Labs podría contribuir a una economía digital más inclusiva, aunque el éxito depende de una mayor adopción de Litecoin y las condiciones del mercado.',
        text2: 'Kakr Labs representa un jugador innovador en el espacio Web3. Esta explicación profundiza en los antecedentes de la empresa, ofertas principales, fundamentos técnicos, asociaciones y posibles contribuciones sociales.'
      },
      background: {
        title: 'Antecedentes y Misión',
        text1: 'Establecido como un innovador de Web3, Kakr Labs surgió con el objetivo de abordar puntos débiles clave en el desarrollo de blockchain, como altos costos, complejidad y riesgos de centralización. La empresa se posiciona como pionera en la construcción de herramientas de grado empresarial exclusivamente en la red principal de Litecoin.',
        quote: '“Liderar la evolución de la Web 3.0 simplificando el desarrollo de blockchain mientras se preserva la descentralización.”',
        text2: 'Esto implica retirar puntos de falla centralizados a través de herramientas controladas por el usuario y promover un modelo de "sin cuentas, sin almacenamiento". Al centrarse en el historial probado de Litecoin - más de 12 años de funcionamiento continuo - Kakr Labs tiene como objetivo hacer que Web3 sea accesible para las empresas.'
      },
      deepDive: {
        title: 'Análisis Profundo del Producto',
        subtitle: 'Especificaciones técnicas, casos de uso y ventajas de cada oferta principal.',
        items: [
          {
            name: 'Plataforma Pteri',
            description: 'APIs de infraestructura blockchain alojadas en Microsoft Azure, las primeras de su tipo para Litecoin.',
            features: ['APIs de Protocolo de Contexto de Modelo (MCP) impulsadas por IA', 'Gestión de transacciones en lenguaje natural', 'Cumplimiento listo para ETF'],
            useCases: ['Desarrollo de aplicaciones Web3 empresariales', 'Infraestructura escalable'],
            advantages: ['Código cerrado para fiabilidad', 'Cero tiempo de inactividad', 'Integrado con Azure']
          },
          {
            name: 'Billetera Pteri',
            description: 'Solución de billetera de autocustodia para transacciones seguras de Litecoin.',
            features: ['Frases semilla BIP39', 'Credenciales de pago controladas por el cliente', 'Saldos en tiempo real; 2FA descentralizado'],
            useCases: ['Pagos personales y comerciales', 'Gestión de activos centrada en la privacidad'],
            advantages: ['Claves controladas por el usuario', 'Resistente al phishing', 'Bajas tarifas']
          },
          {
            name: 'LiaaS (Litecoin as a Service)',
            description: 'Herramientas unificadas para desarrolladores para interacciones blockchain.',
            features: ['Soporta más de 30 protocolos/idiomas', 'Creación de billeteras, emisión de tokens', 'Cero mantenimiento de nodos'],
            useCases: ['Construcción de DApps', 'Gestión de activos digitales', 'Micropagos'],
            advantages: ['Integración instantánea', 'Tarifas de centavos por transacción']
          },
          {
            name: '2FA Descentralizado',
            description: 'Sistema de autenticación basado en billetera.',
            features: ['Firma de mensajes para inicios de sesión', 'OTP desde semillas', 'Sin vulnerabilidades de SMS/correo electrónico'],
            useCases: ['Protección segura de cuentas', 'Autenticación empresarial'],
            advantages: ['Asegurado por blockchain', 'Resistente al phishing', 'Cumple con estándares']
          }
        ],
        labels: {
          keyFeatures: 'Características Clave',
          useCases: 'Casos de Uso',
          technicalAdvantages: 'Ventajas Técnicas'
        }
      },
      intelligence: {
        title: 'Inteligencia Pteri',
        subtitle: 'Agente de IA para tareas de blockchain en lenguaje natural.',
        bullets: [
          '• Maneja creación de billeteras, emisión de tokens, verificación de saldos',
          '• Flujos de trabajo automatizados vía MCP',
          '• Prototipado rápido para no expertos'
        ],
        footer: 'Impulsado por Gemini; con privacidad en Litecoin.'
      },
      technical: {
        title: 'Fundamentos Técnicos e Innovaciones',
        text1: 'Construido sobre el consenso Proof-of-Work de Litecoin - idéntico al de Bitcoin para seguridad - la infraestructura de Kakr Labs cuenta con cero tiempo de inactividad. Innovaciones como la API MCP permiten comandos en lenguaje natural para operaciones complejas.',
        text2: 'Las características de seguridad, como el 2FA descentralizado, reemplazan métodos vulnerables como SMS mediante firmas de billetera. Esta configuración admite aplicaciones escalables, con la red de Litecoin manejando más de un millón de transacciones diarias de manera eficiente.',
        stats: {
          uptime: 'Años Actividad',
          fee: 'Tarifa Prom.',
          tx: 'TX Diarias',
          mcp: 'APIs MCP'
        }
      },
      partnerships: {
        title: 'Asociaciones Estratégicas',
        subtitle: 'Kakr Labs se asocia con proveedores de tecnología líderes para ofrecer soluciones compatibles y de alta disponibilidad a escala empresarial.',
        disclaimer: 'Los logotipos son marcas comerciales de sus respectivos propietarios y se utilizan solo para identificación.'
      },
      societal: {
        title: 'Impacto Social y Desafíos',
        text1: 'Kakr Labs contribuye a un Web3 más inclusivo al permitir herramientas de baja barrera que promueven el acceso financiero. Las credenciales de pago controladas por el cliente abordan las preocupaciones de vigilancia.',
        text2: 'Sin embargo, los desafíos incluyen la competencia de plataformas centradas en Ethereum. Las perspectivas futuras apuntan a la fusión de IA y blockchain.'
      },
      footer: {
        title: '¿Listo para Construir el Futuro?',
        subtitle: 'Únase a miles de desarrolladores y empresas que ya aprovechan Kakr Labs para implementar soluciones Web3 seguras y escalables en Litecoin.',
        cta: 'Empezar a Construir Ahora'
      }
    },
    ja: {
      hero: {
        series: 'Kakr Labs • シリーズ',
        titlePrefix: 'Kakr Labs',
        titleSuffix: '解説',
        typing1: 'Litecoin上に構築',
        typing2: 'デザインによる分散化',
        subtitle: '私たちが誰で、何を構築し、Web3の次の進化を支える原則を明らかにするビジョナリーシリーズ。',
        startBuilding: '構築を開始',
        contactUs: 'お問い合わせ'
      },
      overview: {
        title: '概要',
        text1: 'Kakr Labsは、Litecoinベースのブロックチェーンソリューションを専門とする企業であり、従来のビジネスニーズと分散型技術を橋渡しするインフラストラクチャを提供しています。Litecoinの信頼性に焦点を当てて設立され、ブロックチェーンによくある複雑さなしに安全なアプリケーションを可能にするツールを開発しています。',
        text2: 'Kakr LabsはWeb3スペースにおける革新的なプレーヤーであり、Litecoinブロックチェーンを活用して、ユーザーと企業の両方に力を与える実用的でエンタープライズ対応のソリューションを提供することに専念しています。分散型の原則に根ざしたスタートアップとして、セキュリティ、スケーラビリティ、規制遵守の高い基準を維持しながら、ブロックチェーンの採用を簡素化するインフラストラクチャの作成に注力しています。'
      },
      mainProducts: {
        title: '主な製品',
        subtitle: '提供製品には、ブロックチェーンインフラAPI用のPteriプラットフォーム、セルフカストディ用のPTERIアプリ、簡単なWeb3統合のためのLiaaSが含まれ、すべてLitecoinの低コストで高稼働時間のネットワークを活用するように設計されています。',
        items: [
          { title: 'Pteri プラットフォーム', description: 'Litecoin向けにMicrosoft AzureでホストされるブロックチェーンインフラAPI。' },
          { title: 'Pteri ウォレット', description: '顧客管理型の決済認証情報を備えた安全なLitecoinトランザクションのためのセルフカストディウォレット。' },
          { title: 'LiaaS', description: 'ノードメンテナンスゼロ、30以上のプロトコルを備えた統合開発者ツール。' },
          { title: '分散型 2FA', description: 'メッセージ署名によるウォレットベースの認証 - SMSの脆弱性なし。' }
        ]
      },
      benefits: {
        title: '利点と影響',
        text1: 'ユーザーの主権と規制遵守を優先することで、Kakr Labsはより包括的なデジタル経済に貢献する可能性がありますが、成功はLitecoinの広範な採用と市場状況に依存します。',
        text2: 'Kakr LabsはWeb3スペースにおける革新的なプレーヤーです。この説明では、会社の背景、中核となる提供物、技術的基盤、パートナーシップ、および潜在的な社会的貢献について掘り下げています。'
      },
      background: {
        title: '背景とミッション',
        text1: 'Web3のイノベーターとして設立されたKakr Labsは、高コスト、複雑さ、中央集権化のリスクなど、ブロックチェーン開発における主要な問題点に対処することを目標に登場しました。同社は、Litecoinメインネット上でエンタープライズグレードのツールを独占的に構築するパイオニアとして位置付けています。',
        quote: '「分散化を維持しながらブロックチェーン開発を簡素化し、Web 3.0の進化をリードする。」',
        text2: 'これには、ウォレット承認認証などのユーザー制御ツールによる中央集権的な障害点の解消や、プライバシーと主権を確保するための「アカウントなし、ストレージなし」モデルの推進が含まれます。Litecoinの実績ある記録（12年以上の継続的な稼働）に焦点を当てることで、Kakr Labsは企業がWeb3にアクセスできるようにすることを目指しています。'
      },
      deepDive: {
        title: '製品詳細',
        subtitle: '各中核製品の技術仕様、ユースケース、および利点。',
        items: [
          {
            name: 'Pteri プラットフォーム',
            description: 'Microsoft AzureでホストされるブロックチェーンインフラAPI。Litecoin初。',
            features: ['AI駆動のModel Context Protocol (MCP) API', 'LiaaS Playgroundによる自然言語トランザクション管理', 'ETF対応コンプライアンス'],
            useCases: ['エンタープライズWeb3アプリ開発', 'スケーラブルなインフラストラクチャ'],
            advantages: ['信頼性のためのクローズドソース', 'ゼロダウンタイム', 'Azureとの統合']
          },
          {
            name: 'Pteri ウォレット',
            description: '安全なLitecoinトランザクションのためのセルフカストディウォレットソリューション。',
            features: ['BIP39シードフレーズ', '顧客管理型の決済認証情報', 'リアルタイム残高; 分散型2FA'],
            useCases: ['個人およびビジネス決済', 'プライバシー重視の資産管理'],
            advantages: ['ユーザー制御の鍵', 'フィッシング耐性', '低手数料と高稼働時間']
          },
          {
            name: 'LiaaS (Litecoin as a Service)',
            description: 'ブロックチェーン相互作用のための統合開発者ツール。',
            features: ['30以上のプロトコル/言語をサポート', 'ウォレット作成、トークン発行', 'ゼロノードメンテナンス'],
            useCases: ['DApp構築', 'デジタル資産管理', 'マイクロペイメント'],
            advantages: ['即時統合', 'トランザクションあたり数セントの手数料']
          },
          {
            name: '分散型 2FA',
            description: 'ウォレットベースの認証システム。',
            features: ['ログインのためのメッセージ署名', 'シードからのOTP', 'SMS/メールの脆弱性なし'],
            useCases: ['安全なアカウント保護', 'エンタープライズ認証'],
            advantages: ['ブロックチェーンによる保護', 'フィッシング耐性', '標準準拠']
          }
        ],
        labels: {
          keyFeatures: '主な機能',
          useCases: 'ユースケース',
          technicalAdvantages: '技術的利点'
        }
      },
      intelligence: {
        title: 'Pteri インテリジェンス',
        subtitle: '自然言語ブロックチェーンタスクのためのAIエージェント。',
        bullets: [
          '• ウォレット作成、トークン発行、残高確認を処理',
          '• MCPによる自動化ワークフロー',
          '• 非専門家のための迅速なプロトタイピング'
        ],
        footer: 'Geminiによって駆動; Litecoin上でプライバシー保護。'
      },
      technical: {
        title: '技術的基盤とイノベーション',
        text1: 'LitecoinのProof-of-Workコンセンサス（セキュリティのためにBitcoinと同一）に基づいて構築されたKakr Labsのインフラストラクチャは、ゼロダウンタイムと二重支払い耐性を誇ります。MCP APIなどのイノベーションにより、複雑な操作のための自然言語コマンドが可能になります。',
        text2: '分散型2FAなどのセキュリティ機能は、SMSなどの脆弱な方法をウォレット署名に置き換えます。このセットアップはスケーラブルなアプリケーションをサポートし、Litecoinネットワークは毎日100万件以上のトランザクションを効率的に処理します。',
        stats: {
          uptime: '年稼働時間',
          fee: '平均手数料',
          tx: '日次TX',
          mcp: 'MCP API'
        }
      },
      partnerships: {
        title: '戦略的パートナーシップ',
        subtitle: 'Kakr Labsは主要なテクノロジープロバイダーと提携し、エンタープライズ規模でコンプライアンスに準拠した高可用性ソリューションを提供しています。',
        disclaimer: 'ロゴはそれぞれの所有者の商標であり、識別のためにのみ使用されています。'
      },
      societal: {
        title: '社会的影響と課題',
        text1: 'Kakr Labsは、新興市場でのマイクロペイメントなどの金融アクセスを促進する低障壁ツールを可能にすることで、より包括的なWeb3に貢献しています。顧客管理型の決済認証情報は監視の懸念に対処します。',
        text2: 'しかし、課題にはEthereum中心のプラットフォームとの競争や、より広範な相互運用性の必要性が含まれます。将来の見通しは、AIとブロックチェーンの融合を示唆しています。'
      },
      footer: {
        title: '未来を築く準備はできましたか？',
        subtitle: 'すでにKakr Labsを活用してLitecoin上で安全でスケーラブルなWeb3ソリューションを展開している何千もの開発者や企業に参加しましょう。',
        cta: '今すぐ構築を開始'
      }
    },
    ar: {
      hero: {
        series: 'Kakr Labs • سلسلة',
        titlePrefix: 'Kakr Labs',
        titleSuffix: 'موضح',
        typing1: 'مبني على Litecoin',
        typing2: 'لامركزي بالتصميم',
        subtitle: 'سلسلة رؤيوية تكشف من نحن، وماذا نبني، والمبادئ التي تدعم التطور القادم لـ Web3.',
        startBuilding: 'ابدأ البناء',
        contactUs: 'اتصل بنا'
      },
      overview: {
        title: 'نظرة عامة',
        text1: 'Kakr Labs هي شركة متخصصة في حلول البلوك تشين القائمة على Litecoin، وتوفر بنية تحتية تهدف إلى سد الفجوة بين احتياجات الأعمال التقليدية والتكنولوجيا اللامركزية. تأسست مع التركيز على موثوقية Litecoin، وتقوم بتطوير أدوات لتمكين التطبيقات الآمنة دون التعقيدات المرتبطة غالبًا بالبلوك تشين.',
        text2: 'تمثل Kakr Labs لاعبًا مبتكرًا في مساحة Web3، مكرسة لتسخير بلوك تشين Litecoin لتقديم حلول عملية وجاهزة للمؤسسات تمكن المستخدمين والشركات على حد سواء. كشركة ناشئة متجذرة في المبادئ اللامركزية، تركز Kakr Labs على إنشاء بنية تحتية تبسط اعتماد البلوك تشين مع الحفاظ على معايير عالية من الأمان وقابلية التوسع والامتثال التنظيمي.'
      },
      mainProducts: {
        title: 'المنتجات الرئيسية',
        subtitle: 'تشمل عروضهم منصة Pteri لواجهات برمجة تطبيقات البنية التحتية للبلوك تشين، وتطبيق PTERI للحفظ الذاتي، و LiaaS لسهولة تكامل Web3 - وكلها مصممة للاستفادة من شبكة Litecoin منخفضة التكلفة وعالية وقت التشغيل.',
        items: [
          { title: 'منصة Pteri', description: 'واجهات برمجة تطبيقات البنية التحتية للبلوك تشين مستضافة على Microsoft Azure لـ Litecoin.' },
          { title: 'محفظة Pteri', description: 'محفظة الحفظ الذاتي لمعاملات Litecoin الآمنة مع بيانات اعتماد دفع يتحكم فيها العميل.' },
          { title: 'LiaaS', description: 'أدوات مطور موحدة مع صيانة صفرية للعقد و 30+ بروتوكول.' },
          { title: '2FA اللامركزي', description: 'مصادقة قائمة على المحفظة مع توقيع الرسائل - لا ثغرات SMS.' }
        ]
      },
      benefits: {
        title: 'الفوائد والتأثير',
        text1: 'من خلال إعطاء الأولوية لسيادة المستخدم والامتثال التنظيمي، يمكن أن تساهم Kakr Labs في اقتصاد رقمي أكثر شمولاً، على الرغم من أن النجاح يعتمد على اعتماد Litecoin الأوسع وظروف السوق.',
        text2: 'تمثل Kakr Labs لاعبًا مبتكرًا في مساحة Web3. يتعمق هذا الشرح في خلفية الشركة، والعروض الأساسية، والأسس التقنية، والشراكات، والمساهمات المجتمعية المحتملة.'
      },
      background: {
        title: 'الخلفية والمهمة',
        text1: 'تأسست Kakr Labs كمبتكر في Web3، وظهرت بهدف معالجة نقاط الألم الرئيسية في تطوير البلوك تشين، مثل التكاليف المرتفعة والتعقيد ومخاطر المركزية. تضع الشركة نفسها كرائد في بناء أدوات من الدرجة المؤسسية حصريًا على شبكة Litecoin الرئيسية.',
        quote: '“قيادة تطور Web 3.0 من خلال تبسيط تطوير البلوك تشين مع الحفاظ على اللامركزية.”',
        text2: 'يتضمن ذلك القضاء على نقاط الفشل المركزية من خلال أدوات يتحكم فيها المستخدم، مثل المصادقة المعتمدة من المحفظة، وتعزيز نموذج "لا حسابات، لا تخزين" لضمان الخصوصية والسيادة. من خلال التركيز على سجل Litecoin المثبت - أكثر من 12 عامًا من التشغيل المستمر - تهدف Kakr Labs إلى جعل Web3 متاحًا للمؤسسات.'
      },
      deepDive: {
        title: 'تعمق في المنتج',
        subtitle: 'المواصفات الفنية، وحالات الاستخدام، ومزايا كل عرض أساسي.',
        items: [
          {
            name: 'منصة Pteri',
            description: 'واجهات برمجة تطبيقات البنية التحتية للبلوك تشين مستضافة على Microsoft Azure، وهي الأولى من نوعها لـ Litecoin.',
            features: ['واجهات برمجة تطبيقات بروتوكول سياق النموذج (MCP) المدعومة بالذكاء الاصطناعي', 'إدارة المعاملات باللغة الطبيعية عبر LiaaS Playground', 'امتثال جاهز لـ ETF'],
            useCases: ['تطوير تطبيقات Web3 للمؤسسات', 'بنية تحتية قابلة للتوسع'],
            advantages: ['مغلق المصدر للموثوقية', 'وقت توقف صفري', 'يتكامل مع Azure لقابلية التوسع العالمية']
          },
          {
            name: 'محفظة Pteri',
            description: 'حل محفظة الحفظ الذاتي لمعاملات Litecoin الآمنة.',
            features: ['عبارات أولية BIP39', 'بيانات اعتماد دفع يتحكم فيها العميل', 'أرصدة في الوقت الفعلي؛ 2FA لا مركزي'],
            useCases: ['المدفوعات الشخصية والتجارية', 'إدارة الأصول التي تركز على الخصوصية'],
            advantages: ['مفاتيح يتحكم فيها المستخدم', 'مقاوم للتصيد', 'رسوم منخفضة ووقت تشغيل مرتفع']
          },
          {
            name: 'LiaaS (Litecoin as a Service)',
            description: 'أدوات مطور موحدة لتفاعلات البلوك تشين.',
            features: ['يدعم 30+ بروتوكول/لغة', 'إنشاء المحفظة، إصدار الرموز', 'صيانة صفرية للعقد'],
            useCases: ['بناء التطبيقات اللامركزية', 'إدارة الأصول الرقمية', 'المدفوعات الصغيرة'],
            advantages: ['تكامل فوري', 'رسوم سنتات لكل معاملة']
          },
          {
            name: '2FA اللامركزي',
            description: 'نظام مصادقة قائم على المحفظة.',
            features: ['توقيع الرسائل لتسجيل الدخول', 'OTP من البذور', 'لا ثغرات SMS/البريد الإلكتروني'],
            useCases: ['حماية آمنة للحساب', 'مصادقة المؤسسة'],
            advantages: ['مؤمن بالبلوك تشين', 'مقاوم للتصيد', 'متوافق مع المعايير']
          }
        ],
        labels: {
          keyFeatures: 'الميزات الرئيسية',
          useCases: 'حالات الاستخدام',
          technicalAdvantages: 'المزايا التقنية'
        }
      },
      intelligence: {
        title: 'ذكاء Pteri',
        subtitle: 'وكيل الذكاء الاصطناعي لمهام البلوك تشين باللغة الطبيعية.',
        bullets: [
          '• يعالج إنشاء المحفظة، إصدار الرموز، التحقق من الرصيد',
          '• سير عمل مؤتمت عبر MCP',
          '• نماذج أولية سريعة لغير الخبراء'
        ],
        footer: 'مدعوم من Gemini؛ محمي الخصوصية على Litecoin.'
      },
      technical: {
        title: 'الأسس التقنية والابتكارات',
        text1: 'مبنية على إجماع إثبات العمل في Litecoin - مطابق لـ Bitcoin للأمان - تفتخر بنية Kakr Labs التحتية بوقت توقف صفري ومقاومة للإنفاق المزدوج. تسمح الابتكارات مثل واجهة برمجة تطبيقات MCP بأوامر اللغة الطبيعية للعمليات المعقدة.',
        text2: 'ميزات الأمان، مثل 2FA اللامركزي، تستبدل الطرق الضعيفة مثل SMS بتوقيعات المحفظة. يدعم هذا الإعداد التطبيقات القابلة للتوسع، حيث تتعامل شبكة Litecoin مع أكثر من مليون معاملة يومية بكفاءة.',
        stats: {
          uptime: 'سنوات تشغيل',
          fee: 'متوسط الرسوم',
          tx: 'معاملات يومية',
          mcp: 'واجهات MCP'
        }
      },
      partnerships: {
        title: 'شراكات استراتيجية',
        subtitle: 'تتعاون Kakr Labs مع مزودي التكنولوجيا الرائدين لتقديم حلول متوافقة وعالية التوافر على نطاق المؤسسة.',
        disclaimer: 'الشعارات هي علامات تجارية لأصحابها وتستخدم للتعريف فقط.'
      },
      societal: {
        title: 'التأثير المجتمعي والتحديات',
        text1: 'تساهم Kakr Labs في Web3 أكثر شمولاً من خلال تمكين أدوات منخفضة الحواجز تعزز الوصول المالي. تعالج بيانات اعتماد الدفع التي يتحكم فيها العميل مخاوف المراقبة.',
        text2: 'ومع ذلك، تشمل التحديات المنافسة من المنصات التي تركز على Ethereum. تشير التوقعات المستقبلية إلى اندماج الذكاء الاصطناعي والبلوك تشين.'
      },
      footer: {
        title: 'هل أنت مستعد لبناء المستقبل؟',
        subtitle: 'انضم إلى الآلاف من المطورين والشركات التي تستفيد بالفعل من Kakr Labs لنشر حلول Web3 آمنة وقابلة للتوسع على Litecoin.',
        cta: 'ابدأ البناء الآن'
      }
    }
  }
  return texts[locale.value] || texts.en
})

const t = (key: string) => {
  const keys = key.split('.')
  let value = explainedTranslations.value
  for (const k of keys) {
    if (value && value[k]) {
      value = value[k]
    } else {
      return key
    }
  }
  return value
}

// ---------------- Page Data ----------------
const mainProducts = computed(() => explainedTranslations.value.mainProducts.items.map((item: any, index: number) => ({
  ...item,
  image: [
    'https://placehold.co/400x200/4f46e5/ffffff?text=Pteri+Platform',
    'https://placehold.co/400x200/7c3aed/ffffff?text=Pteri+Wallet',
    'https://placehold.co/400x200/ec4899/ffffff?text=LiaaS',
    'https://placehold.co/400x200/f43f5e/ffffff?text=Decentralized+2FA'
  ][index]
})))

const detailedProducts = computed(() => explainedTranslations.value.deepDive.items.map((item: any, index: number) => ({
  ...item,
  image: [
    'https://placehold.co/400x200/4f46e5/ffffff?text=Pteri+Platform',
    'https://placehold.co/400x200/7c3aed/ffffff?text=Pteri+Wallet',
    'https://placehold.co/400x200/ec4899/ffffff?text=LiaaS',
    'https://placehold.co/400x200/f43f5e/ffffff?text=2FA'
  ][index]
})))

const partners = [
  { name: 'Microsoft', logo: 'https://placehold.co/100x100/ffffff/5e5e5e?text=MS', role: 'Azure Hosting & Infrastructure Scale' },
  { name: 'IBM', logo: 'https://placehold.co/100x100/ffffff/5e5e5e?text=IBM', role: 'Hybrid Cloud Integration' },
  { name: 'Google', logo: 'https://placehold.co/100x100/ffffff/5e5e5e?text=G', role: 'SDK Development' },
  { name: 'OpenAI', logo: 'https://placehold.co/100x100/ffffff/5e5e5e?text=OAI', role: 'AI-Powered Intelligence' }
]
</script>

<!-- Import AOS CSS globally (unscoped) -->

<style scoped>
/* Scroll Reveal (fallback for non-AOS elements if you still use data-reveal) */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0ms);
}
.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Typing line & cursor */
.type-line {
  display: inline-flex;
  align-items: baseline;
  gap: .25rem;
}
.type-cursor {
  display: inline-block;
  width: 1ch;
  opacity: 1;
  animation: blink 1s steps(1, end) infinite;
}
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* Reduced motion: stop decorations */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse { animation: none !important; }
  .type-cursor { animation: none !important; opacity: .6; }
}

/* Gradient text helpers */
:global(.bg-clip-text) {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
