<template>
  <div class="min-h-screen bg-black bg-black text-white ">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div class="absolute inset-0 opacity-[0.03]" style="background-size: 40px 40px; background-image: linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px);"></div>
      
      <div class="container mx-auto max-w-6xl relative z-10">
        <div class="text-center space-y-6">
          <div class="inline-block px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-700 text-sm font-bold mb-4">
            ?? BLOCKCHAIN INFRASTRUCTURE SOLUTION
          </div>
          <h1 class="text-5xl md:text-7xl font-black leading-tight text-white ">
            Enterprise-Grade<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Developer-Friendly
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-white/90  max-w-4xl mx-auto leading-relaxed font-semibold">
            Web3-Native Infrastructure
          </p>
          <p class="text-lg text-white/70  max-w-3xl mx-auto">
            Lightning-fast RPC endpoints, decentralized authentication integration, and reliable enterprise infrastructure - all running on Kakr Labs' secure, closed-source backend built on customer-controlled keys and credentials.
          </p>
          <div class="flex flex-wrap gap-4 justify-center pt-6">
            <a href="https://pteri.org/Register" target="_blank" class="btn-primary">
              Get API Key
            </a>
            <a href="https://docs.kakr.ai" target="_blank" class="px-8 py-4 bg-black border-2 border-white/10  hover:border-green-500 text-white  rounded-lg font-bold text-lg transition-all">
              View Docs
            </a>
            <a href="/contact" class="px-8 py-4 bg-black border-2 border-white/10  hover:border-green-500 text-white  rounded-lg font-bold text-lg transition-all">
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="py-20 px-4 bg-black">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-12 text-white ">
          Blockchain Infra <span class="text-red-600">Shouldn't Be Hard</span>
        </h2>
        <p class="text-xl text-center text-white/90  mb-12 font-semibold">
          Developers shouldn't worry about:
        </p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <div v-for="problem in problems" :key="problem" class="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-white/90  font-medium">? {{ problem }}</p>
          </div>
        </div>

        <div class="text-center space-y-6">
          <p class="text-xl text-white/70 ">
            Running nodes is expensive, slow, unreliable - and takes time away from building.
          </p>
          <p class="text-2xl font-bold text-green-600">
            Let Kakr Labs handle the infrastructure.
          </p>
          <p class="text-xl text-white  font-semibold">
            So you can focus on your product.
          </p>
        </div>
      </div>
    </section>

    <!-- What We Provide -->
    <section class="py-20 px-4 bg-black">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-6 text-white ">
          What Kakr Labs Infrastructure Provides
        </h2>
        <p class="text-xl text-center text-white/70  mb-16 max-w-4xl mx-auto">
          Kakr Labs offers a complete, secure, enterprise-ready <span class="text-green-600 font-bold">Litecoin infrastructure layer</span>, including:
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="feature in infrastructureFeatures" :key="feature.title" class="bg-black border border-white/10  rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all text-center">
            <component :is="feature.icon" class="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-2 text-white ">{{ feature.title }}</h3>
            <p class="text-white/70 ">{{ feature.description }}</p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-lg text-white/70 ">
            All of this runs on <span class="text-green-600 font-bold">secure, closed-source, horizontally scalable clusters</span>.
          </p>
        </div>
      </div>
    </section>

    <!-- Why Litecoin -->
    <section class="py-20 px-4 bg-black">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-12 text-white ">
          Why <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Litecoin</span>?
        </h2>
        <p class="text-xl text-center text-white/90  mb-12">
          Your infrastructure is built on Litecoin because:
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="reason in litecoinReasons" :key="reason.title" class="bg-black border border-white/10  rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all text-center">
            <component :is="reason.icon" class="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 class="text-lg font-bold mb-2 text-white ">{{ reason.title }}</h3>
            <p class="text-sm text-white/70 ">{{ reason.description }}</p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-xl font-bold text-white ">
            No other blockchain combines reliability, privacy, and simplicity like Litecoin.
          </p>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 px-4 bg-black">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-16 text-white ">
          How Kakr Labs Infra Works
        </h2>

        <div class="bg-black border border-slate-700 rounded-xl p-8">
          <div class="space-y-4 font-mono text-sm">
            <div v-for="(step, index) in workflow" :key="index" class="flex items-center gap-4">
              <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                {{ index + 1 }}
              </div>
              <div class="flex-1">
                <p class="text-green-400">{{ step }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <p class="text-2xl font-bold text-white ">
            Built for high availability, low maintenance overhead, and no server-held shared secrets.
          </p>
        </div>
      </div>
    </section>

    <!-- Developer Experience -->
    <section class="py-20 px-4 bg-black">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-16 text-white ">
          Developer Experience (DX)
        </h2>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 class="text-2xl font-bold mb-4 text-green-600">Copy-Paste Integration</h3>
            <p class="text-white/70  mb-4">Simple requests like:</p>
            <pre class="bg-black p-6 rounded-lg overflow-x-auto"><code class="text-sm text-green-400">POST /v1/litecoin/getBalance
{
  "address": "ltc1q..."
}</code></pre>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4 text-green-600">SDK Support</h3>
            <div class="flex flex-wrap gap-3 mb-6">
              <span v-for="sdk in sdks" :key="sdk" class="px-4 py-2 bg-black border border-white/10  rounded-lg text-sm font-mono text-white ">{{ sdk }}</span>
            </div>

            <h3 class="text-xl font-bold mb-2 text-green-600">AI-Generated Calls</h3>
            <p class="text-white/70  text-sm mb-2">"Show me how to broadcast a transaction."</p>
            <p class="text-green-600 text-sm font-semibold">? Instant code sample.</p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="dx in developerFeatures" :key="dx.title" class="bg-black border border-white/10  rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all">
            <h3 class="text-lg font-bold mb-2 text-white ">{{ dx.title }}</h3>
            <p class="text-sm text-white/70 ">{{ dx.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Better -->
    <section class="py-20 px-4 bg-black">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-16 text-white ">
          Why Kakr Labs Is Better Than <br/>Running Your Own Node
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="benefit in benefits" :key="benefit.title" class="bg-green-50 border border-green-200 rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all">
            <div class="text-2xl mb-2 text-green-600">?</div>
            <h3 class="text-lg font-bold mb-2 text-white ">{{ benefit.title }}</h3>
            <p class="text-sm text-white/70 ">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="py-20 px-4 bg-black">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-16 text-white ">Use Cases</h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(useCase, index) in useCases" :key="index" class="bg-black border border-white/10  rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all">
            <div class="text-2xl font-bold text-green-600 mb-2">{{ index + 1 }}.</div>
            <h3 class="text-xl font-bold mb-2 text-white ">{{ useCase.title }}</h3>
            <p class="text-white/70 ">{{ useCase.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enterprise Features -->
    <section class="py-20 px-4 bg-black">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-16 text-white ">Enterprise Features</h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="feature in enterpriseFeatures" :key="feature.title" class="bg-black border border-white/10  rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all">
            <div class="text-3xl mb-3">{{ feature.icon }}</div>
            <h3 class="text-xl font-bold mb-2 text-white ">{{ feature.title }}</h3>
            <p class="text-white/70 ">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="py-20 px-4 bg-black">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-16 text-white ">Pricing</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- PTERI Identity Card -->
          <div class="relative bg-black border border-white/10  rounded-2xl p-8 hover:border-green-500 hover:shadow-lg transition-all duration-300 group flex flex-col">
            <div class="mb-6">
              <h3 class="text-2xl font-bold mb-2 text-white ">PTERI Identity</h3>
              <p class="text-white/50  text-sm mb-4">Best for: Auth</p>
            </div>
            
            <div class="mb-8">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-bold text-white ">$999</span>
                <span class="text-white/50  font-medium">/ month</span>
              </div>
              <p class="text-xs text-green-600 mt-2">Identity + signatures billing</p>
            </div>

            <ul class="space-y-3 mb-8 flex-1 text-sm text-white/90 ">
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>Passwordless authentication</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>Cryptographic identity</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>API-first integration</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>Standard Support</span>
              </li>
            </ul>

            <a href="https://pteri.org/Register" target="_blank" class="w-full py-3 rounded-lg border-2 border-white/10  hover:bg-black hover:border-green-500 text-white  font-bold transition-all text-center block">
              Get Started
            </a>
          </div>

          <!-- PTERI BaaS Card (Most Popular) -->
          <div class="relative bg-black border-2 border-green-500 rounded-2xl p-8 shadow-xl shadow-green-500/10 transition-all duration-300 flex flex-col transform md:-translate-y-4">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              Most Popular
            </div>
            
            <div class="mb-6 mt-2">
              <h3 class="text-2xl font-bold mb-2 text-white ">PTERI BaaS</h3>
              <p class="text-white/50  text-sm mb-4">Best for: Settle</p>
            </div>
            
            <div class="mb-8">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-bold text-green-600">$1,999</span>
                <span class="text-white  font-medium">/ month</span>
              </div>
              <p class="text-xs text-white/50  mt-2">Settlement-based billing</p>
            </div>

            <ul class="space-y-3 mb-8 flex-1 text-sm text-white  font-medium">
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>Cryptographic settlement</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>Litecoin-backed infrastructure</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>Predictable transaction costs</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>Enhanced Support</span>
              </li>
            </ul>

            <a href="https://pteri.org/Register" target="_blank" class="btn-primary w-full text-center block">
              Get Started
            </a>
          </div>

          <!-- PTERI Enterprise Card -->
          <div class="relative bg-black border border-white/10  rounded-2xl p-8 hover:border-green-500 hover:shadow-lg transition-all duration-300 group flex flex-col">
            <div class="mb-6">
              <h3 class="text-2xl font-bold mb-2 text-white ">PTERI Enterprise</h3>
              <p class="text-white/50  text-sm mb-4">Best for: Replace stack</p>
            </div>
            
            <div class="mb-8">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-bold text-white ">From $5,000+</span>
              </div>
              <p class="text-xs text-white/50  mt-2">Dedicated</p>
            </div>

            <ul class="space-y-3 mb-8 flex-1 text-sm text-white/90 ">
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>Unified trust layer</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>Identity + auth + infra</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>AI agents + humans + devices</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                <span>Dedicated Support</span>
              </li>
            </ul>

            <a href="/contact" class="w-full py-3 rounded-lg border-2 border-white/10  hover:bg-black hover:border-green-500 text-white  font-bold transition-all text-center block">
              Book a Demo
            </a>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-white/70  mb-4">Need custom infrastructure or higher limits?</p>
          <a href="/contact" class="inline-block px-8 py-3 bg-black border-2 border-white/10  hover:border-green-500 text-white  rounded-lg font-bold transition-all">
            Contact Sales for Enterprise
          </a>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-500">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl md:text-5xl font-black mb-6 text-white">
          Build Faster. <span class="text-green-100">Scale Easier.</span>
        </h2>
        <p class="text-2xl text-white/90 mb-8">
          Power Your App with Kakr Labs Infrastructure.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="https://pteri.org/Register" target="_blank" class="px-8 py-4 bg-black text-green-600 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            Get API Key
          </a>
          <a href="https://docs.kakr.ai" target="_blank" class="px-8 py-4 bg-black/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold text-lg hover:bg-black/20 transition-all">
            View Docs
          </a>
          <a href="/contact" class="px-8 py-4 bg-black/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-bold text-lg hover:bg-black/20 transition-all">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import { useSEO } from '~/composables/useSEO'
import { CloudIcon, CurrencyDollarIcon, BoltIcon, EyeSlashIcon, ShieldCheckIcon, ServerStackIcon, PaperAirplaneIcon, KeyIcon, FingerPrintIcon, CpuChipIcon, SparklesIcon, BeakerIcon } from '@heroicons/vue/24/outline'

useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
  ]
})

const { setSEO } = useSEO()

setSEO({
  title: 'Enterprise Blockchain Infrastructure - Developer-Friendly Web3 Solutions | Kakr Labs',
  description: 'Fast RPC endpoints, decentralized authentication integration, and reliable enterprise infrastructure on Litecoin. Zero maintenance, proof-of-work secured.',
  keywords: ['blockchain infrastructure', 'enterprise blockchain', 'Litecoin RPC', 'Web3 infrastructure', 'blockchain API', 'developer tools', 'BaaS platform', 'blockchain nodes'],
  type: 'service',
  image: '/og/og-blockchain-infrastructure.png',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Enterprise Blockchain Infrastructure',
      description: 'Developer-friendly blockchain infrastructure with high-availability RPC endpoints and enterprise features',
      provider: {
        '@type': 'Organization',
        name: 'Kakr Labs'
      },
      serviceType: 'Blockchain Infrastructure as a Service',
      areaServed: 'Worldwide',
      audience: {
        '@type': 'Audience',
        audienceType: 'Developers and Enterprises'
      },
      offers: {
        '@type': 'Offer',
        name: 'PTERI BaaS',
        price: '$1,999',
        priceCurrency: 'USD',
        description: 'Enterprise blockchain infrastructure with policy-gated privacy controls',
        category: 'Blockchain Technology'
      }
    }
  ]
})

const problems = [
  'node crashes',
  'syncing issues',
  'storage requirements',
  'DevOps overhead',
  'inconsistent RPC performance',
  'unclear error messages',
  'multiple environments',
  'downtime',
  'scaling to handle traffic'
]

const infrastructureFeatures = [
  {
    icon: ServerStackIcon,
    title: 'RPC Nodes (High-Availability)',
    description: 'Fully managed Litecoin nodes - no maintenance required.'
  },
  {
    icon: EyeSlashIcon,
    title: 'Secure Key Management',
    description: 'Industry-leading API support for customer-controlled keys and credentials.'
  },
  {
    icon: PaperAirplaneIcon,
    title: 'Transaction Building & Broadcasting',
    description: 'Everything from raw Tx creation to mempool management.'
  },
  {
    icon: KeyIcon,
    title: 'Address & Key Tools',
    description: 'Backend identity signing, verification, address utilities.'
  },
  {
    icon: FingerPrintIcon,
    title: 'Authentication & Identity Endpoints',
    description: 'Direct integration with PTERI Authentication and PTERI Identity.'
  },
  {
    icon: CpuChipIcon,
    title: 'Device Identity APIs',
    description: 'Backend infrastructure for IoT devices.'
  },
  {
    icon: SparklesIcon,
    title: 'AI-Assisted API Generation',
    description: 'Through PTERI Intelligence.'
  },
  {
    icon: BeakerIcon,
    title: 'PTERI Playground',
    description: 'Test endpoints instantly - no setup.'
  }
]

const litecoinReasons = [
  {
    icon: CloudIcon,
    title: 'Live Since 2011',
    description: 'One of the longest continuously operating proof-of-work blockchains.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Low Fees',
    description: 'Scales for enterprises and IoT deployments.'
  },
  {
    icon: BoltIcon,
    title: 'Fast Confirmations',
    description: 'Ideal for authentication and identity.'
  },
  {
    icon: EyeSlashIcon,
    title: 'Global Network',
    description: 'Mature, stable, and globally distributed node network.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Proof-of-Work Security',
    description: 'Censorship-resistant and globally validated proof-of-work security.'
  }
]

const workflow = [
  'Your App',
  'PTERI APIs (RPC, Auth, Tx, ID)',
  'Kakr Labs Secure Cluster (Closed-source infra)',
  'Google Cloud Zones (High Availability)',
  'Litecoin Network (PoW)'
]

const sdks = ['JS', 'Python', 'Dart', 'Swift', 'Go']

const developerFeatures = [
  {
    title: 'Playground Testing',
    description: 'No setup. Real results in real time.'
  },
  {
    title: 'Advanced Logging',
    description: 'Latency, success/fail rates, full debugging.'
  },
  {
    title: 'Complete Documentation',
    description: 'Clear step-by-step integration guides.'
  }
]

const benefits = [
  {
    title: 'Zero Maintenance',
    description: 'No hardware, no syncing, no downtime.'
  },
  {
    title: 'SLA-Level Reliability',
    description: 'Multi-zone Google Cloud deployment.'
  },
  {
    title: 'Full RPC Coverage',
    description: 'Complete Litecoin RPC endpoint support out of the box.'
  },
  {
    title: 'Faster Time-To-Integration',
    description: 'Build apps in minutes, not weeks.'
  },
  {
    title: 'Lower Cost',
    description: 'No DevOps or server costs.'
  },
  {
    title: 'Private & Secure',
    description: 'Closed-source backend, safe from supply-chain attacks.'
  },
  {
    title: 'Built-In Authentication Layer',
    description: 'Your infra supports PTERI Authentication out of the box.'
  },
  {
    title: 'Scales Automatically',
    description: 'From one request to millions.'
  }
]

const useCases = [
  {
    title: 'Wallets & Exchanges',
    description: 'Monitor balances, broadcast transactions, verify signatures.'
  },
  {
    title: 'Authentication Systems',
    description: 'PTERI Authentication and Identity rely directly on this infra.'
  },
  {
    title: 'IoT Systems',
    description: 'Device identity and secure provisioning use these APIs.'
  },
  {
    title: 'Payment Platforms',
    description: 'Accept and verify Litecoin transactions reliably.'
  },
  {
    title: 'Developer Tooling',
    description: 'Simplify Litecoin development for any app.'
  },
  {
    title: 'Enterprise Blockchain Apps',
    description: 'Build compliant, secure, scalable applications.'
  }
]

const enterpriseFeatures = [
  {
    icon: '??',
    title: 'Closed-Source Infrastructure',
    description: 'Protected against open-source vulnerabilities.'
  },
  {
    icon: '??',
    title: 'Layered Cryptography',
    description: 'AES-256 + PoW design combine multiple layers of protection.'
  },
  {
    icon: '??',
    title: 'Global Availability',
    description: 'Load-balanced, redundant, multi-zone.'
  },
  {
    icon: '??',
    title: 'Monitoring & Observability',
    description: 'Real-time metrics and logs.'
  },
  {
    icon: '??',
    title: 'Custom Integrations',
    description: 'Custom endpoints, private clusters, direct engineering support.'
  }
]
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>

