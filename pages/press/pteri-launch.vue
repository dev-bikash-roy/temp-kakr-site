<template>
  <div class="bg-white dark:bg-dark-900">
    
    <!-- 1. HEADER -->
    <section class="pt-32 pb-12 border-b border-slate-200 dark:border-white/10">
      <div class="container-custom">
        <div class="text-sm text-slate-500 dark:text-slate-400 mb-4">Official Press Release</div>
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
          Kakr Labs Announces PTERI Platform for Cryptographic Trust Infrastructure
        </h1>
        <div class="text-slate-600 dark:text-slate-400 mt-4">January 10, 2026</div>
      </div>
    </section>

    <!-- 2. PRESS BODY -->
    <section class="py-16">
      <div class="container-custom">
        <div class="max-w-3xl prose prose-lg prose-slate">
          
          <p>
            <strong>New York, NY – January 10, 2026</strong> – Kakr Labs today announced the launch of PTERI, a universal trust system that unifies cryptographic identity, authentication, payments, AI agents, and APIs into one decentralized infrastructure.
          </p>

          <p>
            PTERI addresses the fundamental challenge facing modern digital systems: the inability to verify identity and intent without relying on centralized intermediaries or exposing sensitive data. By leveraging energy-backed cryptographic proof and decentralized verification, PTERI enables organizations to build trust into their systems by design rather than as an afterthought.
          </p>

          <p>
            "Traditional security models rely on assumptions that fail at scale," said [Founder Name], CEO of Kakr Labs. "PTERI replaces guessing with deterministic proof, enabling AI agents, Web3 applications, and legacy Web2 systems to operate under verifiable trust at machine speed."
          </p>

          <p>
            The PTERI platform provides developers with API-first access to:
          </p>

          <ul>
            <li>Cryptographic identity verification without storing personal data</li>
            <li>Authentication based on signed messages rather than passwords</li>
            <li>Self-custodial payment settlement on Litecoin</li>
            <li>AI agent authorization with cryptographic proof of intent</li>
            <li>Wallet-as-a-Service, Authentication-as-a-Service, and Blockchain-as-a-Service</li>
          </ul>

          <p>
            PTERI is built on the principle that trust infrastructure should be decentralized, verifiable, and energy-backed. By anchoring digital transactions to physical reality through proof-of-work, the platform creates an immutable, timestamped record that cannot be retroactively altered.
          </p>

          <p>
            Organizations can integrate PTERI through REST APIs, SDKs for JavaScript, Python, and Go, and a developer playground for testing. The platform is designed for high-throughput enterprise applications requiring fast settlement and cryptographic verification.
          </p>

          <p>
            For more information about PTERI and Kakr Labs, visit <a href="https://www.kakr.ai" target="_blank">www.kakr.ai</a> or <a href="https://pteri.org/Register" target="_blank">pteri.org</a>.
          </p>

        </div>
      </div>
    </section>

    <!-- 3. ABOUT KAKR LABS -->
    <section class="py-16 bg-slate-50 dark:bg-dark-800 border-t border-slate-200 dark:border-white/10">
      <div class="container-custom">
        <div class="max-w-3xl">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">About Kakr Labs</h2>
          <p class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Kakr Labs builds cryptographic trust infrastructure for AI, Web3, and legacy Web2 systems using energy-backed verification and decentralized design principles. The company focuses on identity, authentication, payments, and APIs designed for autonomous systems.
          </p>
        </div>
      </div>
    </section>

    <!-- 4. NAVIGATION LINKS -->
    <section class="py-12 border-t border-slate-200 dark:border-white/10">
      <div class="container-custom">
        <div class="flex gap-8 text-slate-600 dark:text-slate-400">
          <a href="/press" class="hover:text-slate-900 dark:text-white">← Back to Press</a>
          <a href="/" class="hover:text-slate-900 dark:text-white">Home</a>
          <a href="/pteri" class="hover:text-slate-900 dark:text-white">PTERI</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useSEO } from '~/composables/useSEO'

// SEO
useSEO({
  title: 'Kakr Labs Announces PTERI Platform for Cryptographic Trust Infrastructure | Kakr Labs Press Release',
  description: 'Official press release from Kakr Labs announcing the launch of PTERI, a universal trust system that unifies cryptographic identity, authentication, payments, AI agents, and APIs.',
  image: '/og/og-press-pteri-launch.png',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: 'Kakr Labs Announces PTERI Platform for Cryptographic Trust Infrastructure',
      datePublished: '2026-01-10',
      publisher: {
        '@type': 'Organization',
        name: 'Kakr Labs',
        url: 'https://www.kakr.ai'
      },
      description: 'Official press release from Kakr Labs announcing the launch of PTERI, a universal trust system that unifies cryptographic identity, authentication, payments, AI agents, and APIs.'
    }
  ]
})
</script>

<style scoped>
.container-custom {
  @apply max-w-5xl mx-auto px-6 sm:px-8 lg:px-12;
}

.prose {
  @apply text-slate-700 dark:text-slate-300;
}

.prose p {
  @apply mb-6;
}

.prose ul {
  @apply mb-6 ml-6 list-disc;
}

.prose li {
  @apply mb-2;
}

.prose a {
  @apply text-emerald-600 hover:text-emerald-700 underline;
}

.prose strong {
  @apply font-semibold text-slate-900 dark:text-white;
}
</style>
