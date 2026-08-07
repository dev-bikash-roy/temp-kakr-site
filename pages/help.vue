<template>
  <main class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Hero -->
    <section class="px-6 py-16 sm:py-20 text-center">
      <div class="mx-auto max-w-5xl">
        <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-white ">
          Kakr Labs Help Center
        </h1>
        <p class="mt-4 text-lg text-white/70  max-w-3xl mx-auto">
          Explore our documentation, quick‑start guides and FAQs for the PTERI App,
          decentralized two‑factor authentication, Blockchain‑as‑a‑Service, pricing and
          developer tooling. Need assistance? Our support team is ready to help.
        </p>

        <!-- Search -->
        <div class="mt-8">
          <label for="help-search" class="sr-only">Search help</label>
          <div class="relative">
            <input
              id="help-search"
              v-model="query"
              type="search"
              placeholder="Search FAQs, guides, and troubleshooting…"
              class="w-full rounded-2xl border border-white/10  bg-black px-5 py-4 pr-12 text-white  shadow-sm outline-none ring-0 focus:border-indigo-400"
            />
            <div class="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <span aria-hidden="true">⌘K</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick links -->
    <section class="px-6 pb-6">
      <div class="mx-auto max-w-6xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a v-for="item in quickLinks"
          :key="item.title"
          :to="item.link"
          target="_blank"
          class="group block rounded-2xl border border-white/10  bg-black p-5 transition hover:border-indigo-300 hover:shadow-md"
        >
          <p class="text-base font-semibold text-white  group-hover:text-green-700">{{ item.title }}</p>
          <p class="mt-1 text-sm text-white/70 ">{{ item.desc }}</p>
          <div class="mt-3 text-sm text-green-700">Learn more →</div>
        </a>
      </div>
    </section>

    <!-- Popular guides -->
    <section class="px-6 py-8 bg-black/60 border-y border-white/8 ">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-xl font-semibold text-white ">Popular guides</h2>
        <ul class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="g in popularGuides" :key="g.title">
            <a :href="g.link" target="_blank" class="group block rounded-xl border border-white/10  bg-black p-4 hover:border-indigo-300 hover:shadow-sm">
              <p class="font-medium text-white  group-hover:text-green-700">{{ g.title }}</p>
              <p class="mt-1 text-sm text-white/70 ">{{ g.desc }}</p>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- FAQs -->
    <section class="px-6 py-10">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-xl font-semibold text-white ">FAQs</h2>
        <div class="mt-4 divide-y divide-slate-200 rounded-xl border border-white/10  bg-black">
          <details
            v-for="(item, idx) in filteredFaqs"
            :key="idx"
            class="group p-5"
          >
            <summary class="flex cursor-pointer list-none items-center justify-between">
              <span class="font-medium text-white ">{{ item.q }}</span>
              <span class="ml-4 text-white/60">⌄</span>
            </summary>
            <div class="prose prose-slate max-w-none pt-3">
              <p v-html="item.a"></p>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="px-6 py-12">
      <div class="mx-auto max-w-4xl rounded-2xl border border-white/10  bg-black p-6">
        <h2 class="text-xl font-semibold text-white ">Still need help?</h2>
        <p class="mt-1 text-white/70 ">Our team replies quickly on business days.</p>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <a href="mailto:contact@kakr.ai" class="flex items-center justify-between rounded-xl border border-white/10  p-4 hover:border-indigo-300 hover:shadow-sm">
            <div>
              <p class="font-medium text-white ">Contact support</p>
              <p class="text-sm text-white/70 ">Open a ticket or email contact@kakr.ai</p>
            </div>
            <span aria-hidden="true">→</span>
          </a>
          <a href="https://pteri.org/Register" target="_blank" class="flex items-center justify-between rounded-xl border border-white/10  p-4 hover:border-indigo-300 hover:shadow-sm">
            <div>
              <p class="font-medium text-white ">Start free</p>
              <p class="text-sm text-white/70 ">Try the 2FA API or infrastructure API pilot (50% off for 3 months)</p>
            </div>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const query = ref('')

// Quick links with correct URLs
const quickLinks = [
  {
    title: 'PTERI App',
    desc: 'Self‑custody wallet with customer-controlled credentials & decentralized 2FA.',
    link: 'https://docs.kakr.ai/docs/platform-capabilities/2.3-identity-and-authentication'
  },
  {
    title: '2FA API',
    desc: 'Lightweight, privacy‑first 2FA. Quickstart & code samples.',
    link: 'https://docs.kakr.ai/docs/sdks-and-integration-guides/litecoin-liaas-api-api-clients'
  },
  {
    title: 'Blockchain Infrastructure',
    desc: 'Blockchain‑as‑a‑Service endpoints, auth & usage limits.',
    link: 'https://docs.kakr.ai/docs/sdks-and-integration-guides/litecoin-liaas-api-api-clients'
  },
  {
    title: 'Developer Docs',
    desc: 'SDKs, endpoints, schemas, and best practices.',
    link: 'https://docs.kakr.ai/'
  },
  {
    title: 'Pricing & Billing',
    desc: 'Free tier, credits, invoicing, and limits.',
    link: 'https://docs.kakr.ai/docs/product-and-access/13.1-pricing-plans'
  },
  {
    title: 'System Status',
    desc: 'Real‑time uptime & incident history.',
    link: 'https://kakrlabs1.statuspage.io'
  }
]

// Popular guides with links
const popularGuides = [
  {
    title: 'PTERI App Quickstart',
    desc: 'Create, restore, and secure your wallet.',
    link: 'https://docs.kakr.ai/docs/sdks-and-integration-guides/litecoin-liaas-api-api-clients'
  },
  {
    title: '2FA API in 5 minutes',
    desc: 'Drop‑in TOTP with minimal state.',
    link: 'https://docs.kakr.ai/docs/sdks-and-integration-guides/litecoin-liaas-api-api-clients'
  },
  {
    title: 'Blockchain Infrastructure Getting Started',
    desc: 'Authenticate, call endpoints, and monitor usage.',
    link: 'https://docs.kakr.ai/docs/sdks-and-integration-guides/litecoin-liaas-api-api-clients'
  },
  {
    title: 'Payment Privacy Controls',
    desc: 'Policy-gated transaction privacy controls and notes.',
    link: 'https://docs.kakr.ai/docs/payments-and-identity-verification'
  },
  {
    title: 'Security & Compliance',
    desc: 'GDPR and HIPAA‑aligned controls and audit evidence.',
    link: 'https://www.kakr.org/compliance-infrastructure'
  },
  {
    title: 'Pricing model explained',
    desc: 'Free tier, credits, and overage handling.',
    link: 'https://docs.kakr.ai/docs/product-and-access/13.1-pricing-plans'
  }
]

const faqs = [
  { q: 'Do you store private keys or seed phrases?', a: 'No. The PTERI App is self-custody.' },
  { q: 'What data do you collect?', a: 'Minimal data: email, wallet addresses, and anonymized usage metrics.' },
  { q: 'How private are transactions?', a: 'Transaction privacy controls are policy-gated and available when required.' },
  { q: 'Is your 2FA stronger than authenticator apps?', a: 'Yes. Decentralized architecture makes it more resilient.' },
  { q: 'Where are services hosted?', a: 'On Microsoft Azure and IBM. No ad networks or data brokers.' },
  { q: 'How do I contact support?', a: 'Email contact@kakr.ai or use the contact form.' }
]

const filteredFaqs = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return faqs
  return faqs.filter(item =>
    item.q.toLowerCase().includes(q) ||
    item.a.toLowerCase().includes(q)
  )
})

const { setSEO } = useSEO()

setSEO({
  title: 'Help Center - Kakr Labs Support & Documentation',
  description: 'Get help with the PTERI App, 2FA API, blockchain infrastructure APIs, and more. Browse guides, FAQs, and troubleshooting resources for Kakr Labs Web3 infrastructure.',
  image: '/help-og.png',
  keywords: ['kakr labs help', 'pteri wallet support', '2fa api docs', 'baas help', 'web3 support', 'blockchain documentation'],
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a
        }
      }))
    }
  ]
})
</script>

