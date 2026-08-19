<template>
  <div class="bg-white dark:bg-dark-900">
    
    <!-- 1. HERO -->
    <section class="pt-32 pb-12 border-b border-slate-200 dark:border-white/10">
      <div class="container-custom">
        <div class="text-sm text-slate-500 dark:text-slate-400 mb-4">Official Press Release</div>
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight max-w-4xl">
          Kakr Labs Announces Collaboration with Google Cloud to Advance Decentralized Trust Infrastructure for AI Systems
        </h1>
        <div class="text-slate-600 dark:text-slate-400 mt-4">January 13, 2026</div>
      </div>
    </section>

    <!-- 2. PRESS BODY -->
    <section class="py-16">
      <div class="container-custom">
        <div class="max-w-3xl prose prose-lg prose-slate">
          
          <p>
            <strong>New York, NY – January 13, 2026</strong> – Kakr Labs today announced a strategic collaboration with Google Cloud to integrate PTERI's cryptographic trust infrastructure into enterprise AI workflows, enabling organizations to verify AI agent actions with energy-backed proof rather than assumptions.
          </p>

          <p>
            The collaboration addresses a critical challenge in enterprise AI deployment: the inability to cryptographically verify agent identity, intent, and authorization at machine speed. By combining Google Cloud's infrastructure with PTERI's decentralized verification system, organizations can now deploy AI agents that operate under deterministic trust rather than probabilistic risk models.
          </p>

          <p>
            "AI systems require trust infrastructure that matches their operational speed," said [CEO Name], CEO of Kakr Labs. "Traditional security models rely on centralized intermediaries and post-facto auditing. PTERI enables real-time cryptographic verification of AI agent actions, anchored to physical reality through proof-of-work."
          </p>

          <p>
            Through this collaboration, Google Cloud customers will gain access to:
          </p>

          <ul>
            <li>Cryptographic identity verification for AI agents without storing credentials</li>
            <li>Signed authorization for autonomous actions with immutable audit trails</li>
            <li>Payment settlement for AI-initiated transactions</li>
            <li>API-first integration with existing enterprise systems</li>
            <li>Energy-backed verification that cannot be retroactively altered</li>
          </ul>

          <p>
            "Google Cloud is committed to providing enterprises with the infrastructure needed to deploy AI systems responsibly," said [Google Cloud Representative Name], [Title] at Google Cloud. "Kakr Labs' approach to cryptographic verification aligns with our vision for secure, scalable AI deployment."
          </p>

          <p>
            PTERI's trust infrastructure is built on the principle that digital verification should be decentralized, deterministic, and energy-backed. By anchoring cryptographic proofs to Litecoin's proof-of-work blockchain, the system creates an immutable record that enterprises can independently verify without relying on centralized authorities.
          </p>

          <p>
            The collaboration will initially focus on three enterprise use cases:
          </p>

          <ul>
            <li><strong>AI Agent Authorization:</strong> Cryptographic signing of autonomous actions with verifiable intent</li>
            <li><strong>Identity Verification:</strong> Zero-knowledge proofs for compliance without exposing personal data</li>
            <li><strong>Payment Settlement:</strong> Self-custodial transactions for AI-initiated commerce</li>
          </ul>

          <p>
            Organizations interested in deploying PTERI on Google Cloud can access technical documentation at <a href="https://docs.kakr.ai" target="_blank">docs.kakr.ai</a> or contact Kakr Labs directly through <a href="https://www.kakr.ai/contact" target="_blank">kakr.ai/contact</a>.
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
  title: 'Kakr Labs Announces Collaboration with Google Cloud to Advance Decentralized Trust Infrastructure for AI Systems | Kakr Labs Press Release',
  description: 'Official press release from Kakr Labs announcing its collaboration with Google Cloud to advance decentralized trust infrastructure for AI systems.',
  image: '/og/og-press-google-cloud.png',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: 'Kakr Labs Announces Collaboration with Google Cloud to Advance Decentralized Trust Infrastructure for AI Systems',
      datePublished: '2026-01-13',
      publisher: {
        '@type': 'Organization',
        name: 'Kakr Labs',
        url: 'https://www.kakr.ai'
      },
      description: 'Official press release from Kakr Labs announcing its collaboration with Google Cloud to advance decentralized trust infrastructure for AI systems.'
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
