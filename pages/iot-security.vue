<template>
  <div class="min-h-screen bg-black bg-black text-white  selection:bg-green-600 selection:text-white font-sans">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-white">
      <div class="absolute inset-0 z-0 opacity-[0.03]" style="background-size: 50px 50px; background-image: linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px);"></div>
      <div class="container mx-auto max-w-6xl relative z-10">
        <div class="text-center space-y-6">
          <div class="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-bold mb-4 border border-green-200">
            {{ content.hero.badge }}
          </div>
          <h1 class="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white ">
            {{ content.hero.title_start }}<br/>
            <span class="text-green-600">
              {{ content.hero.title_end }}
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-white/70  max-w-4xl mx-auto leading-relaxed">
            {{ content.hero.subtitle }}
          </p>
          <p class="text-lg text-white/50  max-w-3xl mx-auto font-medium">
            {{ content.hero.description }}
          </p>
          <div class="flex flex-wrap gap-4 justify-center pt-8">
            <a href="/contact" class="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-lg shadow-lg shadow-green-600/20 transform hover:scale-105 transition-all">
              {{ content.hero.cta_sales }}
            </a>
            <a href="https://docs.kakr.ai" target="_blank" class="px-8 py-4 bg-black border-2 border-white/10  hover:border-green-500 rounded-lg font-bold text-lg hover:bg-black transition-all text-white/90 ">
              {{ content.hero.cta_docs }}
            </a>
          </div>
          <p class="text-green-600 font-medium pt-4">
            {{ content.hero.footer }}
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/5">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-5xl font-black text-white mb-4">Simple, Transparent Pricing</h2>
          <p class="text-white/50 text-lg max-w-2xl mx-auto">Start free. Scale as you grow. No hidden fees.</p>
        </div>
        <PricingCards />
      </div>
    </section>

    <!-- Architecture Overview -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-12 text-white ">{{ content.architecture.title }}</h2>
        
        <div class="bg-black border border-white/10  rounded-2xl p-4 sm:p-8 shadow-lg">
          <div class="flex justify-center">
            <img 
              src="/D5_ iOT Device Identity.png" 
              alt="IoT Device Identity Architecture" 
              class="w-full h-auto rounded-xl shadow-sm"
            />
          </div>
          <p class="text-center text-white/50  mt-10 text-lg font-bold border-t border-white/8  pt-8">
            {{ content.architecture.caption }}
          </p>
        </div>
      </div>
    </section>

    <!-- The IoT Security Crisis -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black border-y border-white/8 ">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-12 text-white ">
          {{ content.crisis.title_start }} <span class="text-red-500">{{ content.crisis.title_end }}</span>
        </h2>
        <p class="text-xl text-center text-white/70  mb-12 max-w-3xl mx-auto">
          {{ content.crisis.subtitle }}
        </p>
        
        <div class="mb-12">
          <h3 class="text-2xl font-bold text-center mb-8 text-red-500">{{ content.crisis.problems_title }}</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="problem in content.crisis.problems" :key="problem" class="p-6 bg-black border border-red-200 rounded-xl text-center hover:shadow-lg transition-all">
              <p class="text-white/90  font-medium flex items-center justify-center gap-2">
                <span class="text-red-500"></span> {{ problem }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-red-50 border border-red-100 rounded-2xl p-8 mb-12">
          <h3 class="text-2xl font-bold mb-6 text-red-600 text-center">{{ content.crisis.threats_title }}</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="threat in content.crisis.threats" :key="threat" class="text-center bg-black p-4 rounded-lg border border-red-100 shadow-sm">
              <p class="text-lg text-white/90  font-medium flex items-center justify-center gap-2">
                <span class="text-red-500"></span> {{ threat }}
              </p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <p class="text-2xl font-bold text-white  max-w-4xl mx-auto leading-relaxed">
            {{ content.crisis.conclusion_start }} <span class="text-green-600">{{ content.crisis.conclusion_end }}</span>
          </p>
        </div>
      </div>
    </section>

    <!-- PTERI IoT Security: A New Model -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-6 text-white ">
          {{ content.model.title_start }} <span class="text-green-600">{{ content.model.title_end }}</span>
        </h2>
        <p class="text-xl text-center text-white/70  mb-12 max-w-4xl mx-auto">
          {{ content.model.subtitle }}
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div v-for="feature in content.model.features" :key="feature" class="p-6 bg-green-50 border border-green-100 rounded-xl text-center transition-all hover:bg-green-100 hover:shadow-md">
            <p class="text-lg font-bold text-green-700">✓ {{ feature }}</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-10 mb-12">
          <h3 class="text-2xl font-bold mb-8 text-green-700">{{ content.model.benefits_title }}</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="benefit in content.model.benefits" :key="benefit" class="flex items-start gap-4">
              <span class="text-green-600 text-2xl font-bold">✓</span>
              <span class="text-lg text-white/90  font-medium">{{ benefit }}</span>
            </div>
          </div>
        </div>

        <div class="text-center bg-black border border-white/10  rounded-2xl p-8 max-w-3xl mx-auto shadow-sm">
          <p class="text-2xl font-bold text-white ">
            {{ content.model.conclusion }}
          </p>
        </div>
      </div>
    </section>

    <!-- What PTERI IoT Enables -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black border-y border-white/8 ">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-16 text-white ">{{ content.enables.title }}</h2>
        
        <div class="space-y-8">
          <div v-for="(capability, index) in content.enables.capabilities" :key="index" class="bg-black border border-white/10  rounded-2xl p-8 hover:shadow-xl hover:border-green-200 transition-all group">
            <div class="flex items-start gap-6">
              <div class="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                <component :is="getIcon(capability.iconName)" class="w-8 h-8 text-green-600" />
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-green-600 mb-4">{{ capability.title }}</h3>
                <p class="text-lg text-white/90  mb-4">{{ capability.description }}</p>
                <div v-if="capability.details" class="bg-black border border-white/10  rounded-lg p-4">
                  <p class="text-white/70  font-medium">{{ capability.details }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Litecoin for IoT -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black border-y border-white/8 ">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-12 text-white ">
          {{ content.litecoin.title_start }} <span class="text-green-600">{{ content.litecoin.title_end }}</span>
        </h2>
        <p class="text-xl text-center text-white/70  mb-12">{{ content.litecoin.subtitle }}</p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="reason in content.litecoin.reasons" :key="reason.title" class="bg-black border border-white/10  rounded-xl p-8 hover:shadow-lg hover:border-green-300 transition-all hover:-translate-y-1">
            <div class="text-4xl mb-4 text-green-600">{{ reason.icon }}</div>
            <h3 class="text-xl font-bold mb-3 text-white ">{{ reason.title }}</h3>
            <p class="text-white/70 ">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who Benefits -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-16 text-white ">{{ content.beneficiaries.title }}</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="beneficiary in content.beneficiaries.list" :key="beneficiary.title" class="bg-green-50/50 border border-green-100 rounded-xl p-8 hover:bg-green-100 hover:shadow-md transition-all">
            <div class="text-5xl mb-6">{{ beneficiary.icon }}</div>
            <h3 class="text-xl font-bold mb-3 text-white ">{{ beneficiary.title }}</h3>
            <p class="text-white/70 ">{{ beneficiary.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black border-y border-white/8 ">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-16 text-white ">{{ content.keyFeatures.title }}</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="feature in content.keyFeatures.list" :key="feature.title" class="bg-black border border-white/10  rounded-xl p-6 hover:border-green-400 transition-colors">
            <div class="text-2xl mb-3 text-green-600 font-bold">✔</div>
            <h3 class="text-lg font-bold mb-2 text-white ">{{ feature.title }}</h3>
            <p class="text-sm text-white/70 ">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Developer Integration -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-12 text-white ">{{ content.integration.title }}</h2>
        
        <div class="space-y-8">
          <div v-for="example in content.integration.examples" :key="example.title" class="bg-black border border-slate-800 rounded-xl p-8 shadow-2xl">
            <div class="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <h3 class="text-xl font-bold text-green-400 ml-4">{{ example.title }}</h3>
            </div>
            <pre class="bg-transparent overflow-x-auto"><code class="text-sm text-green-50 font-mono">{{ example.code }}</code></pre>
          </div>
        </div>

        <div class="mt-16 text-center">
          <p class="text-xl text-white/90  mb-6 font-bold">{{ content.integration.sdks_title }}</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <span v-for="sdk in content.integration.sdks" :key="sdk" class="px-6 py-3 bg-white/5 bg-black border border-white/10  text-white/90  rounded-lg text-sm font-bold font-mono hover:bg-green-100 hover:text-green-700 hover:border-green-200 transition-all cursor-default shadow-sm">{{ sdk }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Overview -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black border-y border-white/8 ">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl md:text-5xl font-black text-center mb-12 text-white ">{{ content.pricing.title }}</h2>
        
        <div class="bg-black border border-white/10  rounded-2xl p-12 text-center shadow-lg">
          <p class="text-2xl text-white/90  mb-8 font-bold">{{ content.pricing.subtitle }}</p>
          <div class="grid md:grid-cols-2 gap-y-4 gap-x-8 mb-10 max-w-2xl mx-auto">
            <div v-for="segment in content.pricing.segments" :key="segment" class="text-lg text-white/70  flex items-center gap-3">
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              {{ segment }}
            </div>
          </div>
          <a href="/contact" class="inline-block px-10 py-5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-xl shadow-lg shadow-green-600/20 transform hover:scale-105 transition-all">
            {{ content.pricing.cta }}
          </a>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-green-50">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl md:text-5xl font-black mb-8 text-white  leading-tight">
          {{ content.cta.title_start }} <br/><span class="text-green-600">{{ content.cta.title_end }}</span>
        </h2>
        <p class="text-2xl text-white/70  mb-10 font-medium">{{ content.cta.subtitle }}</p>
        <div class="flex flex-wrap gap-6 justify-center pt-4">
          <a href="/contact" class="px-10 py-5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-xl shadow-xl shadow-green-600/20 transform hover:scale-105 transition-all">
            {{ content.cta.cta_sales }}
          </a>
          <a href="/docs" class="px-10 py-5 bg-black border-2 border-white/10  hover:border-green-500 rounded-lg font-bold text-xl hover:bg-black transition-all text-white/90 ">
            {{ content.cta.cta_docs }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'
import {
  FingerPrintIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'

const { locale } = useI18n()
const { setSEO } = useSEO()

// AEO: Service schema for PTERI IoT Security
const iotServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'PTERI IoT Security',
  'description': 'Verifiable identity and cryptographic trust for IoT devices. Firmware signing backed by customer-controlled keys, device authentication, and blockchain-backed key management on Litecoin.',
  'url': 'https://kakr.ai/iot-security',
  'provider': { '@id': 'https://kakr.ai/#organization' },
  'serviceType': 'IoT Security & Device Identity Management',
  'areaServed': 'Worldwide',
  'category': 'Cybersecurity',
  'audience': {
    '@type': 'Audience',
    'audienceType': 'Enterprise IoT Teams, Device Manufacturers, Security Engineers'
  }
}

setSEO({
  title: 'PTERI IoT Security - Decentralized Trust for Connected Devices | Kakr Labs',
  description: 'Secure billions of IoT devices with blockchain-backed identity, authentication, and firmware signing backed by customer-controlled keys. Powered by the Litecoin network.',
  image: '/pteri-page-og.png',
  structuredData: [iotServiceSchema]
})

const iconMap = {
  FingerPrintIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  ArrowPathIcon
}

const getIcon = (name) => iconMap[name]

const content = computed(() => {
  const translations = {
    en: {
      meta: {
        title: 'PTERI IoT Security - Decentralized Trust for Connected Devices',
        description: 'Secure billions of IoT devices with blockchain-backed identity, authentication, and firmware signing backed by customer-controlled keys. Powered by Litecoin.'
      },
      hero: {
        badge: 'IOT SECURITY SOLUTION',
        title_start: 'Decentralized Security for',
        title_end: 'Billions of Devices',
        subtitle: 'Give every IoT device a tamper-proof identity and secure authentication using blockchain-backed cryptography.',
        description: 'No certificates, no factory passwords, no centralized servers - just trustless, immutable device security powered by Litecoin.',
        cta_sales: 'Contact Sales',
        cta_docs: 'View Docs',
        footer: 'Secure device onboarding, authentication, firmware, and lifecycle management.'
      },
      architecture: {
        title: 'Architecture Overview',
        caption: 'This is IoT identity without central points of failure.'
      },
      crisis: {
        title_start: 'The IoT Security',
        title_end: 'Crisis',
        subtitle: 'IoT devices are everywhere - and almost all of them are insecure.',
        problems_title: 'Today\'s IoT infrastructure relies on:',
        problems: [
          'factory-set credentials',
          'outdated device certificates',
          'centralized authentication servers',
          'insecure firmware updates',
          'static device IDs',
          'weak bootloaders',
          'vulnerable PKI systems',
          'inconsistent provisioning practices'
        ],
        threats_title: 'This leads to:',
        threats: [
          'mass device hijacking',
          'IoT botnets',
          'unauthorized firmware',
          'device spoofing',
          'supply chain attacks',
          'API abuse',
          'ransomware attacks'
        ],
        conclusion_start: 'The IoT industry needs a new trust system -',
        conclusion_end: 'decentralized, unforgeable, and cryptographically verifiable.'
      },
      model: {
        title_start: 'PTERI IoT Security:',
        title_end: 'A New Model for Device Trust',
        subtitle: 'PTERI provides verifiable device identity, authentication, and lifecycle security using:',
        features: [
          'device-side key generation',
          'blockchain-backed identity',
          'cryptographic signature verification',
          'trust model built on customer-controlled keys',
          'customer-controlled device privacy',
          'closed-source, enterprise infrastructure'
        ],
        benefits_title: 'Every device gets:',
        benefits: [
          'a unique cryptographic identity',
          'a blockchain-verifiable trust record',
          'firmware signing protection',
          'secure provisioning',
          'tamper-proof authentication'
        ],
        conclusion: 'This becomes the new foundation of secure IoT at scale.'
      },
      enables: {
        title: 'What PTERI IoT Enables',
        capabilities: [
          {
            title: '1. Verifiable Device Identity',
            description: 'Each device generates its own keypair. Keys are stored in hardware or secure elements. No cloud. No manufacturer-side secrets.',
            details: 'Generated identity → registered via Litecoin → immutable trust anchor.',
            iconName: 'FingerPrintIcon'
          },
          {
            title: '2. Device Authentication (Zero Trust)',
            description: 'Devices must sign requests to access: cloud services, local gateways, enterprise systems, APIs, controllers, IoT networks.',
            details: 'Verification is fully decentralized.',
            iconName: 'ShieldCheckIcon'
          },
          {
            title: '3. Secure Provisioning',
            description: 'Onboarding workflows with: QR codes, NFC, BLE, serial provisioning, factory attestation, PTERI Identity pairing.',
            details: 'Provision thousands or millions of devices reliably.',
            iconName: 'CpuChipIcon'
          },
          {
            title: '4. Firmware Signing & Verification',
            description: 'Ensure devices run only trusted firmware. Manufacturers sign firmware updates → devices verify → unauthorized firmware is blocked.',
            details: 'This closes off a common path used by IoT ransomware.',
            iconName: 'DocumentCheckIcon'
          },
          {
            title: '5. Lifecycle Management',
            description: 'Rotate keys, Revoke compromised identities, Reassign ownership, Audit actions, Control fleets.',
            details: 'All backed by secure, closed-source, enterprise infrastructure.',
            iconName: 'ArrowPathIcon'
          }
        ]
      },
      litecoin: {
        title_start: 'Why',
        title_end: 'Litecoin for IoT?',
        subtitle: 'Litecoin is ideal for IoT deployments:',
        reasons: [
          {
            icon: '',
            title: 'Fast',
            description: 'Fast block times → rapid trust updates.'
          },
          {
            icon: '',
            title: 'Low Cost',
            description: 'Transactions and registrations cost pennies.'
          },
          {
            icon: '',
            title: 'Secure',
            description: 'Proof-of-Work with 12+ years uptime.'
          },
          {
            icon: '',
            title: 'Trust Isolation',
            description: 'Hides device-level trust correlations.'
          },
          {
            icon: '',
            title: 'Global',
            description: 'Reach IoT fleets anywhere in the world.'
          },
          {
            icon: '',
            title: 'Cryptographic Verification',
            description: 'Signature-based authentication layer.'
          }
        ]
      },
      beneficiaries: {
        title: 'Who Benefits',
        list: [
          {
            icon: '',
            title: 'Manufacturers',
            description: 'Secure devices from the factory floor.'
          },
          {
            icon: '',
            title: 'Healthcare Providers',
            description: 'Secure medical device identity.'
          },
          {
            icon: '',
            title: 'Automotive & EV',
            description: 'Authenticate chargers, sensors, telematics.'
          },
          {
            icon: '',
            title: 'Smart Home Companies',
            description: 'Prevent rogue devices from joining user networks.'
          },
          {
            icon: '',
            title: 'Logistics',
            description: 'Authenticate sensors, trackers, and fleet devices.'
          },
          {
            icon: '',
            title: 'Telecom Providers',
            description: 'Authenticate routers, gateways, access points.'
          },
          {
            icon: '',
            title: 'IoT Platforms',
            description: 'Provide secure device identity as a service.'
          }
        ]
      },
      keyFeatures: {
        title: 'Key Features',
        list: [
          {
            title: 'Immutable Device Identity',
            description: 'Backed by Litecoin.'
          },
          {
            title: 'Local Key Generation',
            description: 'Customer-controlled key security.'
          },
          {
            title: 'Firmware Signing',
            description: 'Prevent unauthorized modifications.'
          },
          {
            title: 'Signature-Based Authentication',
            description: 'No passwords, no tokens.'
          },
          {
            title: 'Fleet-Level Policy Enforcement',
            description: 'Global and granular configurations.'
          },
          {
            title: 'API-First Integration',
            description: 'Simple and powerful developer tools.'
          },
          {
            title: 'Closed-Source Backend',
            description: 'Unattackable infrastructure.'
          },
          {
            title: 'Enterprise Scalability',
            description: 'Designed for millions of devices.'
          }
        ]
      },
      integration: {
        title: 'Developer Integration',
        examples: [
          {
            title: 'Device Registration',
            code: `POST /v1/iot/register\n{\n  "publicKey": "...",\n  "manufacturer": "exampleCorp",\n  "deviceModel": "v2.1"\n}`
          },
          {
            title: 'Device Authentication',
            code: `POST /v1/iot/auth\n{\n  "signature": "...",\n  "nonce": 47283921\n}`
          },
          {
            title: 'Firmware Verification',
            code: `POST /v1/iot/firmware/verify\n{\n  "deviceId": "ltc1qxyz...",\n  "firmwareHash": "..."\n}`
          }
        ],
        sdks_title: 'SDKs coming for:',
        sdks: ['C', 'C++', 'Rust', 'ARM', 'ESP32', 'WebAssembly']
      },
      pricing: {
        title: 'Pricing Overview',
        subtitle: 'Custom pricing for:',
        segments: [
          'Manufacturers',
          'Large IoT fleets',
          'Industrial environments',
          'Healthcare and regulated industries',
          'Consumer device platforms'
        ],
        cta: 'Contact Sales for IoT Pricing'
      },
      cta: {
        title_start: 'The future of IoT security is',
        title_end: 'decentralized',
        subtitle: 'Deploy PTERI across your devices.',
        cta_sales: 'Talk to Sales',
        cta_docs: 'View Docs'
      }
    },
    de: {
      meta: {
        title: 'PTERI IoT-Sicherheit - Dezentrales Vertrauen für vernetzte Geräte',
        description: 'Sichern Sie Milliarden von IoT-Geräten mit Blockchain-gestützter Identität, Authentifizierung und Firmware-Signierung ohne Fremdverwaltung. Unterstützt von Litecoin.'
      },
      hero: {
        badge: 'IOT-SICHERHEITSLÖSUNG',
        title_start: 'Dezentrale Sicherheit für',
        title_end: 'Milliarden von Geräten',
        subtitle: 'Geben Sie jedem IoT-Gerät eine manipulationssichere Identität und sichere Authentifizierung mithilfe von Blockchain-gestützter Kryptografie.',
        description: 'Keine Zertifikate, keine Werkspasswörter, keine zentralen Server – nur vertrauenswürdige, unveränderliche Gerätesicherheit, die auf Litecoin basiert.',
        cta_sales: 'Vertrieb kontaktieren',
        cta_docs: 'Dokumentation ansehen',
        footer: 'Sicheres Geräte-Onboarding, Authentifizierung, Firmware und Lebenszyklusmanagement.'
      },
      architecture: {
        title: 'Architekturübersicht',
        caption: 'Dies ist IoT-Identität ohne zentrale Ausfallpunkte.'
      },
      crisis: {
        title_start: 'Die IoT-Sicherheits-',
        title_end: 'Krise',
        subtitle: 'IoT-Geräte sind überall – und fast alle sind unsicher.',
        problems_title: 'Die heutige IoT-Infrastruktur basiert auf:',
        problems: [
          'werksseitig festgelegten Anmeldeinformationen',
          'veralteten Gerätezertifikaten',
          'zentralen Authentifizierungsservern',
          'unsicheren Firmware-Updates',
          'statischen Geräte-IDs',
          'schwachen Bootloadern',
          'anfälligen PKI-Systemen',
          'inkonsistenten Bereitstellungspraktiken'
        ],
        threats_title: 'Dies führt zu:',
        threats: [
          'Massen-Geräte-Hijacking',
          'IoT-Botnets',
          'unautorisierter Firmware',
          'Geräte-Spoofing',
          'Supply-Chain-Angriffen',
          'API-Missbrauch',
          'Ransomware-Angriffen'
        ],
        conclusion_start: 'Die IoT-Branche benötigt ein neues Vertrauenssystem –',
        conclusion_end: 'dezentral, unfälschbar und kryptografisch verifizierbar.'
      },
      model: {
        title_start: 'PTERI IoT-Sicherheit:',
        title_end: 'Ein neues Modell für Gerätevertrauen',
        subtitle: 'PTERI bietet dezentrale Geräteidentität, Authentifizierung und Lebenszyklussicherheit durch:',
        features: [
          'geräteseitige Schlüsselerzeugung',
          'Blockchain-gestützte Identität',
          'kryptografische Signaturprüfung',
          'Trust-Modell ohne Fremdverwaltung',
          'kundengesteuerter Geräte-Datenschutz',
          'Closed-Source-Unternehmensinfrastruktur'
        ],
        benefits_title: 'Jedes Gerät erhält:',
        benefits: [
          'eine eindeutige kryptografische Identität',
          'einen Blockchain-verifizierbaren Vertrauensnachweis',
          'Firmware-Signaturschutz',
          'sichere Bereitstellung',
          'manipulationssichere Authentifizierung'
        ],
        conclusion: 'Dies wird das neue Fundament für sicheres IoT im großen Maßstab.'
      },
      enables: {
        title: 'Was PTERI IoT ermöglicht',
        capabilities: [
          {
            title: '1. Dezentrale Geräteidentität',
            description: 'Jedes Gerät generiert sein eigenes Schlüsselpaar. Schlüssel werden in Hardware oder Secure Elements gespeichert. Keine Cloud. Keine herstellerseitigen Geheimnisse.',
            details: 'Generierte Identität → registriert über Litecoin → unveränderlicher Vertrauensanker.',
            iconName: 'FingerPrintIcon'
          },
          {
            title: '2. Geräteauthentifizierung (Zero Trust)',
            description: 'Geräte müssen Anfragen signieren, um auf Cloud-Dienste, lokale Gateways, Unternehmenssysteme, APIs, Controller oder IoT-Netzwerke zuzugreifen.',
            details: 'Die Verifizierung ist vollständig dezentral.',
            iconName: 'ShieldCheckIcon'
          },
          {
            title: '3. Sichere Bereitstellung',
            description: 'Onboarding-Workflows mit: QR-Codes, NFC, BLE, serieller Bereitstellung, Werksattestierung, PTERI-Identitätspaarung.',
            details: 'Bereitstellung von Tausenden oder Millionen von Geräten zuverlässig.',
            iconName: 'CpuChipIcon'
          },
          {
            title: '4. Firmware-Signierung & Verifizierung',
            description: 'Stellen Sie sicher, dass Geräte nur vertrauenswürdige Firmware ausführen. Hersteller signieren Firmware-Updates → Geräte verifizieren → nicht autorisierte Firmware wird blockiert.',
            details: 'Damit wird ein häufiger Angriffsweg für IoT-Ransomware geschlossen.',
            iconName: 'DocumentCheckIcon'
          },
          {
            title: '5. Lebenszyklusmanagement',
            description: 'Schlüssel rotieren, kompromittierte Identitäten widerrufen, Eigentum neu zuweisen, Aktionen prüfen, Flotten steuern.',
            details: 'Alles unterstützt durch sichere, Closed-Source-Unternehmensinfrastruktur.',
            iconName: 'ArrowPathIcon'
          }
        ]
      },
      litecoin: {
        title_start: 'Warum',
        title_end: 'Litecoin für IoT?',
        subtitle: 'Litecoin ist ideal für IoT-Bereitstellungen:',
        reasons: [
          {
            icon: '',
            title: 'Schnell',
            description: 'Schnelle Blockzeiten → schnelle Vertrauensupdates.'
          },
          {
            icon: '💲',
            title: 'Kostengünstig',
            description: 'Transaktionen und Registrierungen kosten Centbeträge.'
          },
          {
            icon: '🛡️',
            title: 'Sicher',
            description: 'Proof-of-Work mit über 12 Jahren Betriebszeit.'
          },
          {
            icon: '🕵️',
            title: 'Vertrauensisolierung',
            description: 'Verbirgt Vertrauenskorrelationen auf Geräteebene.'
          },
          {
            icon: '🌐',
            title: 'Global',
            description: 'Erreichen Sie IoT-Flotten überall auf der Welt.'
          },
          {
            icon: '',
            title: 'Quantenresistente Prinzipien',
            description: 'Zukunftssichere Authentifizierungsschicht.'
          }
        ]
      },
      beneficiaries: {
        title: 'Wer profitiert',
        list: [
          {
            icon: '🏭',
            title: 'Hersteller',
            description: 'Sichern Sie Geräte bereits ab Werk.'
          },
          {
            icon: '🏥',
            title: 'Gesundheitsdienstleister',
            description: 'Sichere Identität für medizinische Geräte.'
          },
          {
            icon: '🚗',
            title: 'Automobil & EV',
            description: 'Authentifizierung von Ladegeräten, Sensoren, Telematik.'
          },
          {
            icon: '🏠',
            title: 'Smart-Home-Unternehmen',
            description: 'Verhindern Sie, dass unerwünschte Geräte Benutzernetzwerken beitreten.'
          },
          {
            icon: '📦',
            title: 'Logistik',
            description: 'Authentifizierung von Sensoren, Trackern und Flottengeräten.'
          },
          {
            icon: '🌐',
            title: 'Telekommunikationsanbieter',
            description: 'Authentifizierung von Routern, Gateways, Zugangspunkten.'
          },
          {
            icon: '♾',
            title: 'IoT-Plattformen',
            description: 'Bieten Sie sichere Geräteidentität als Service an.'
          }
        ]
      },
      keyFeatures: {
        title: 'Hauptmerkmale',
        list: [
          {
            title: 'Unveränderliche Geräteidentität',
            description: 'Unterstützt von Litecoin.'
          },
          {
            title: 'Lokale Schlüsselerzeugung',
            description: 'Kundenkontrollierte Schlüsselsicherheit.'
          },
          {
            title: 'Firmware-Signierung',
            description: 'Verhindern Sie unautorisierte Änderungen.'
          },
          {
            title: 'Signaturbasierte Authentifizierung',
            description: 'Keine Passwörter, keine Token.'
          },
          {
            title: 'Flottenweite Richtliniendurchsetzung',
            description: 'Globale und granulare Konfigurationen.'
          },
          {
            title: 'API-First-Integration',
            description: 'Einfache und leistungsstarke Entwicklertools.'
          },
          {
            title: 'Closed-Source-Backend',
            description: 'Nicht angreifbare Infrastruktur.'
          },
          {
            title: 'Unternehmensskalierbarkeit',
            description: 'Entwickelt für Millionen von Geräten.'
          }
        ]
      },
      integration: {
        title: 'Entwicklerintegration',
        examples: [
          {
            title: 'Geräteregistrierung',
            code: `POST /v1/iot/register\n{\n  "publicKey": "...",\n  "manufacturer": "beispielCorp",\n  "deviceModel": "v2.1"\n}`
          },
          {
            title: 'Geräteauthentifizierung',
            code: `POST /v1/iot/auth\n{\n  "signature": "...",\n  "nonce": 47283921\n}`
          },
          {
            title: 'Firmware-Verifizierung',
            code: `POST /v1/iot/firmware/verify\n{\n  "deviceId": "ltc1qxyz...",\n  "firmwareHash": "..."\n}`
          }
        ],
        sdks_title: 'SDKs kommen für:',
        sdks: ['C', 'C++', 'Rust', 'ARM', 'ESP32', 'WebAssembly']
      },
      pricing: {
        title: 'Preisübersicht',
        subtitle: 'Individuelle Preise für:',
        segments: [
          'Hersteller',
          'Große IoT-Flotten',
          'Industrielle Umgebungen',
          'Gesundheitswesen und regulierte Branchen',
          'Plattformen für Unterhaltungselektronik'
        ],
        cta: 'Vertrieb für IoT-Preise kontaktieren'
      },
      cta: {
        title_start: 'Die Zukunft der IoT-Sicherheit ist',
        title_end: 'dezentral',
        subtitle: 'Implementieren Sie PTERI auf Ihren Geräten.',
        cta_sales: 'Vertrieb kontaktieren',
        cta_docs: 'Dokumentation ansehen'
      }
    },
    es: {
      meta: {
        title: 'Seguridad IoT de PTERI - Confianza descentralizada para dispositivos conectados',
        description: 'Asegure miles de millones de dispositivos IoT con identidad respaldada por blockchain, autenticación y firma de firmware sin custodia. Impulsado por Litecoin.'
      },
      hero: {
        badge: 'SOLUCIÓN DE SEGURIDAD IOT',
        title_start: 'Seguridad Descentralizada para',
        title_end: 'Miles de Millones de Dispositivos',
        subtitle: 'Otorgue a cada dispositivo IoT una identidad a prueba de manipulaciones y autenticación segura utilizando criptografía respaldada por blockchain.',
        description: 'Sin certificados, sin contraseñas de fábrica, sin servidores centralizados: solo seguridad de dispositivos inmutable y sin confianza impulsada por Litecoin.',
        cta_sales: 'Contactar Ventas',
        cta_docs: 'Ver Documentación',
        footer: 'Incorporación segura de dispositivos, autenticación, firmware y gestión del ciclo de vida.'
      },
      architecture: {
        title: 'Descripción de la Arquitectura',
        caption: 'Esta es la identidad IoT sin puntos centrales de falla.'
      },
      crisis: {
        title_start: 'La Crisis de',
        title_end: 'Seguridad IoT',
        subtitle: 'Los dispositivos IoT están en todas partes, y casi todos son inseguros.',
        problems_title: 'La infraestructura IoT actual se basa en:',
        problems: [
          'credenciales establecidas de fábrica',
          'certificados de dispositivos obsoletos',
          'servidores de autenticación centralizados',
          'actualizaciones de firmware inseguras',
          'ID de dispositivos estáticos',
          'gestores de arranque débiles',
          'sistemas PKI vulnerables',
          'prácticas de aprovisionamiento inconsistentes'
        ],
        threats_title: 'Esto conduce a:',
        threats: [
          'secuestro masivo de dispositivos',
          'redes de bots IoT',
          'firmware no autorizado',
          'suplantación de dispositivos',
          'ataques a la cadena de suministro',
          'abuso de API',
          'ataques de ransomware'
        ],
        conclusion_start: 'La industria de IoT necesita un nuevo sistema de confianza:',
        conclusion_end: 'descentralizado, infalsificable y verificable criptográficamente.'
      },
      model: {
        title_start: 'Seguridad IoT de PTERI:',
        title_end: 'Un Nuevo Modelo para la Confianza en Dispositivos',
        subtitle: 'PTERI proporciona identidad de dispositivo descentralizada, autenticación y seguridad del ciclo de vida utilizando:',
        features: [
          'generación de claves en el dispositivo',
          'identidad respaldada por blockchain',
          'verificación de firma criptográfica',
          'modelo de confianza sin custodia',
          'privacidad de dispositivo controlada por el cliente',
          'infraestructura empresarial de código cerrado'
        ],
        benefits_title: 'Cada dispositivo obtiene:',
        benefits: [
          'una identidad criptográfica única',
          'un registro de confianza verificable por blockchain',
          'protección de firma de firmware',
          'aprovisionamiento seguro',
          'autenticación a prueba de manipulaciones'
        ],
        conclusion: 'Esto se convierte en la nueva base del IoT seguro a escala.'
      },
      enables: {
        title: 'Lo que PTERI IoT Permite',
        capabilities: [
          {
            title: '1. Identidad de Dispositivo Descentralizada',
            description: 'Cada dispositivo genera su propio par de claves. Las claves se almacenan en hardware o elementos seguros. Sin nube. Sin secretos del fabricante.',
            details: 'Identidad generada → registrada vía Litecoin → ancla de confianza inmutable.',
            iconName: 'FingerPrintIcon'
          },
          {
            title: '2. Autenticación de Dispositivo (Zero Trust)',
            description: 'Los dispositivos deben firmar solicitudes para acceder a: servicios en la nube, pasarelas locales, sistemas empresariales, API, controladores, redes IoT.',
            details: 'La verificación es totalmente descentralizada.',
            iconName: 'ShieldCheckIcon'
          },
          {
            title: '3. Aprovisionamiento Seguro',
            description: 'Flujos de trabajo de incorporación con: códigos QR, NFC, BLE, aprovisionamiento en serie, atestación de fábrica, emparejamiento de identidad PTERI.',
            details: 'Aprovisione miles o millones de dispositivos de manera confiable.',
            iconName: 'CpuChipIcon'
          },
          {
            title: '4. Firma y Verificación de Firmware',
            description: 'Asegúrese de que los dispositivos ejecuten solo firmware confiable. Los fabricantes firman actualizaciones de firmware → los dispositivos verifican → el firmware no autorizado se bloquea.',
            details: 'Esto cierra una vía habitual del ransomware en IoT.',
            iconName: 'DocumentCheckIcon'
          },
          {
            title: '5. Gestión del Ciclo de Vida',
            description: 'Rotar claves, Revocar identidades comprometidas, Reasignar propiedad, Auditar acciones, Controlar flotas.',
            details: 'Todo respaldado por infraestructura empresarial segura y de código cerrado.',
            iconName: 'ArrowPathIcon'
          }
        ]
      },
      litecoin: {
        title_start: '¿Por qué',
        title_end: 'Litecoin para IoT?',
        subtitle: 'Litecoin es ideal para implementaciones de IoT:',
        reasons: [
          {
            icon: '',
            title: 'Rápido',
            description: 'Tiempos de bloque rápidos → actualizaciones de confianza rápidas.'
          },
          {
            icon: '💲',
            title: 'Bajo Costo',
            description: 'Las transacciones y registros cuestan centavos.'
          },
          {
            icon: '🛡️',
            title: 'Seguro',
            description: 'Prueba de trabajo con más de 12 años de tiempo de actividad.'
          },
          {
            icon: '🕵️',
            title: 'Aislamiento de Confianza',
            description: 'Oculta las correlaciones de confianza a nivel de dispositivo.'
          },
          {
            icon: '🌐',
            title: 'Global',
            description: 'Llegue a flotas de IoT en cualquier lugar del mundo.'
          },
          {
            icon: '',
            title: 'Principios Resistentes a Cuántica',
            description: 'Capa de autenticación preparada para el futuro.'
          }
        ]
      },
      beneficiaries: {
        title: 'Quién se Beneficia',
        list: [
          {
            icon: '🏭',
            title: 'Fabricantes',
            description: 'Asegure los dispositivos desde la fábrica.'
          },
          {
            icon: '🏥',
            title: 'Proveedores de Salud',
            description: 'Identidad segura para dispositivos médicos.'
          },
          {
            icon: '🚗',
            title: 'Automotriz y VE',
            description: 'Autenticar cargadores, sensores, telemática.'
          },
          {
            icon: '🏠',
            title: 'Empresas de Hogar Inteligente',
            description: 'Evite que dispositivos no autorizados se unan a las redes de usuarios.'
          },
          {
            icon: '📦',
            title: 'Logística',
            description: 'Autenticar sensores, rastreadores y dispositivos de flota.'
          },
          {
            icon: '🌐',
            title: 'Proveedores de Telecomunicaciones',
            description: 'Autenticar enrutadores, pasarelas, puntos de acceso.'
          },
          {
            icon: '♾',
            title: 'Plataformas IoT',
            description: 'Proporcione identidad segura de dispositivos como servicio.'
          }
        ]
      },
      keyFeatures: {
        title: 'Características Clave',
        list: [
          {
            title: 'Identidad de Dispositivo Inmutable',
            description: 'Respaldado por Litecoin.'
          },
          {
            title: 'Generación de Claves Local',
            description: 'Seguridad sin custodia.'
          },
          {
            title: 'Firma de Firmware',
            description: 'Evite modificaciones no autorizadas.'
          },
          {
            title: 'Autenticación Basada en Firmas',
            description: 'Sin contraseñas, sin tokens.'
          },
          {
            title: 'Aplicación de Políticas a Nivel de Flota',
            description: 'Configuraciones globales y granulares.'
          },
          {
            title: 'Integración API-First',
            description: 'Herramientas de desarrollador simples y potentes.'
          },
          {
            title: 'Backend de Código Cerrado',
            description: 'Infraestructura inatacable.'
          },
          {
            title: 'Escalabilidad Empresarial',
            description: 'Diseñado para millones de dispositivos.'
          }
        ]
      },
      integration: {
        title: 'Integración de Desarrolladores',
        examples: [
          {
            title: 'Registro de Dispositivo',
            code: `POST /v1/iot/register\n{\n  "publicKey": "...",\n  "manufacturer": "ejemploCorp",\n  "deviceModel": "v2.1"\n}`
          },
          {
            title: 'Autenticación de Dispositivo',
            code: `POST /v1/iot/auth\n{\n  "signature": "...",\n  "nonce": 47283921\n}`
          },
          {
            title: 'Verificación de Firmware',
            code: `POST /v1/iot/firmware/verify\n{\n  "deviceId": "ltc1qxyz...",\n  "firmwareHash": "..."\n}`
          }
        ],
        sdks_title: 'SDKs próximamente para:',
        sdks: ['C', 'C++', 'Rust', 'ARM', 'ESP32', 'WebAssembly']
      },
      pricing: {
        title: 'Descripción General de Precios',
        subtitle: 'Precios personalizados para:',
        segments: [
          'Fabricantes',
          'Grandes flotas de IoT',
          'Entornos industriales',
          'Salud e industrias reguladas',
          'Plataformas de dispositivos de consumo'
        ],
        cta: 'Contactar Ventas para Precios IoT'
      },
      cta: {
        title_start: 'El futuro de la seguridad IoT es',
        title_end: 'descentralizado',
        subtitle: 'Implemente PTERI en sus dispositivos.',
        cta_sales: 'Hablar con Ventas',
        cta_docs: 'Ver Documentación'
      }
    },
    ja: {
      meta: {
        title: 'PTERI IoTセキュリティ - 接続デバイスのための分散型信頼',
        description: 'ブロックチェーンによるID、認証、保管不要のファームウェア署名を使用して、数十億のIoTデバイスを保護します。Litecoinによって駆動されます。'
      },
      hero: {
        badge: 'IoTセキュリティソリューション',
        title_start: '数十億のデバイスのための',
        title_end: '分散型セキュリティ',
        subtitle: 'ブロックチェーンによる暗号化を使用して、すべてのIoTデバイスに改ざん防止IDと安全な認証を提供します。',
        description: '証明書なし、工場出荷時のパスワードなし、中央サーバーなし。Litecoinによって駆動される、トラストレスで不変のデバイスセキュリティ。',
        cta_sales: '営業に問い合わせる',
        cta_docs: 'ドキュメントを見る',
        footer: '安全なデバイスのオンボーディング、認証、ファームウェア、ライフサイクル管理。'
      },
      architecture: {
        title: 'アーキテクチャ概要',
        caption: 'これは、単一障害点のないIoT IDです。'
      },
      crisis: {
        title_start: 'IoTセキュリティの',
        title_end: '危機',
        subtitle: 'IoTデバイスは至る所にありますが、そのほとんどは安全ではありません。',
        problems_title: '今日のIoTインフラストラクチャは以下に依存しています：',
        problems: [
          '工場出荷時に設定された認証情報',
          '期限切れのデバイス証明書',
          '中央集権的な認証サーバー',
          '安全でないファームウェアの更新',
          '静的なデバイスID',
          '脆弱なブートローダー',
          '脆弱なPKIシステム',
          '一貫性のないプロビジョニング慣行'
        ],
        threats_title: 'これは以下につながります：',
        threats: [
          '大規模なデバイスのハイジャック',
          'IoTボットネット',
          '不正なファームウェア',
          'デバイスのなりすまし',
          'サプライチェーン攻撃',
          'APIの悪用',
          'ランサムウェア攻撃'
        ],
        conclusion_start: 'IoT業界には新しい信頼システムが必要です -',
        conclusion_end: '分散型で、偽造不可能で、暗号的に検証可能なもの。'
      },
      model: {
        title_start: 'PTERI IoTセキュリティ:',
        title_end: 'デバイスの信頼のための新しいモデル',
        subtitle: 'PTERIは、以下を使用して、分散型デバイスID、認証、およびライフサイクルセキュリティを提供します：',
        features: [
          'デバイス側での鍵生成',
          'ブロックチェーンによるID',
          '暗号署名の検証',
          '保管不要の信頼モデル',
          '顧客管理型のデバイスプライバシー',
          'クローズドソースのエンタープライズインフラストラクチャ'
        ],
        benefits_title: 'すべてのデバイスが得られるもの：',
        benefits: [
          '一意の暗号ID',
          'ブロックチェーンで検証可能な信頼記録',
          'ファームウェア署名保護',
          '安全なプロビジョニング',
          '改ざん防止認証'
        ],
        conclusion: 'これが、安全なIoTを大規模に実現するための新しい基盤となります。'
      },
      enables: {
        title: 'PTERI IoTが可能にすること',
        capabilities: [
          {
            title: '1. 分散型デバイスID',
            description: '各デバイスは独自の鍵ペアを生成します。鍵はハードウェアまたはセキュアエレメントに保存されます。クラウドはありません。メーカー側の秘密はありません。',
            details: '生成されたID → Litecoin経由で登録 → 不変の信頼アンカー。',
            iconName: 'FingerPrintIcon'
          },
          {
            title: '2. デバイス認証 (ゼロトラスト)',
            description: 'デバイスは、クラウドサービス、ローカルゲートウェイ、エンタープライズシステム、API、コントローラー、IoTネットワークにアクセスするために、リクエストに署名する必要があります。',
            details: '検証は完全に分散化されています。',
            iconName: 'ShieldCheckIcon'
          },
          {
            title: '3. 安全なプロビジョニング',
            description: '以下のオンボーディングワークフロー：QRコード、NFC、BLE、シリアルプロビジョニング、工場認証、PTERI IDペアリング。',
            details: '数千または数百万のデバイスを確実にプロビジョニングします。',
            iconName: 'CpuChipIcon'
          },
          {
            title: '4. ファームウェアの署名と検証',
            description: 'デバイスが信頼できるファームウェアのみを実行することを確認します。メーカーはファームウェアの更新に署名 → デバイスが検証 → 不正なファームウェアはブロックされます。',
            details: 'これにより、IoTランサムウェアが多用する経路を遮断できます。',
            iconName: 'DocumentCheckIcon'
          },
          {
            title: '5. ライフサイクル管理',
            description: '鍵のローテーション、侵害されたIDの取り消し、所有権の再割り当て、アクションの監査、フリートの制御。',
            details: 'すべて、安全なクローズドソースのエンタープライズインフラストラクチャによって支えられています。',
            iconName: 'ArrowPathIcon'
          }
        ]
      },
      litecoin: {
        title_start: 'なぜ',
        title_end: 'IoTにLitecoinなのか？',
        subtitle: 'LitecoinはIoTの展開に最適です：',
        reasons: [
          {
            icon: '',
            title: '高速',
            description: '高速なブロック時間 → 安全な信頼の更新。'
          },
          {
            icon: '💲',
            title: '低コスト',
            description: '取引と登録にかかるコストはわずかです。'
          },
          {
            icon: '🛡️',
            title: '安全',
            description: '12年以上の稼働時間を誇るProof-of-Work。'
          },
          {
            icon: '🕵️',
            title: '信頼の分離',
            description: 'デバイスレベルの信頼の相関関係を隠します。'
          },
          {
            icon: '🌐',
            title: 'グローバル',
            description: '世界中のIoTフリートにリーチできます。'
          },
          {
            icon: '',
            title: '耐量子原理',
            description: '将来にわたって有効な認証レイヤー。'
          }
        ]
      },
      beneficiaries: {
        title: '誰が利益を得るか',
        list: [
          {
            icon: '🏭',
            title: 'メーカー',
            description: '工場から出荷されるデバイスを保護します。'
          },
          {
            icon: '🏥',
            title: '医療提供者',
            description: '医療機器のIDを保護します。'
          },
          {
            icon: '🚗',
            title: '自動車 & EV',
            description: '充電器、センサー、テレマティクスを認証します。'
          },
          {
            icon: '🏠',
            title: 'スマートホーム企業',
            description: '不正なデバイスがユーザーネットワークに参加するのを防ぎます。'
          },
          {
            icon: '📦',
            title: '物流',
            description: 'センサー、トラッカー、フリートデバイスを認証します。'
          },
          {
            icon: '🌐',
            title: '通信プロバイダー',
            description: 'ルーター、ゲートウェイ、アクセスポイントを認証します。'
          },
          {
            icon: '♾',
            title: 'IoTプラットフォーム',
            description: '安全なデバイスIDをサービスとして提供します。'
          }
        ]
      },
      keyFeatures: {
        title: '主な機能',
        list: [
          {
            title: '不変のデバイスID',
            description: 'Litecoinによって裏付けられています。'
          },
          {
            title: 'ローカル鍵生成',
            description: '保管不要のセキュリティ。'
          },
          {
            title: 'ファームウェア署名',
            description: '不正な変更を防止します。'
          },
          {
            title: '署名ベースの認証',
            description: 'パスワードなし、トークンなし。'
          },
          {
            title: 'フリートレベルのポリシー適用',
            description: 'グローバルおよびきめ細かい設定。'
          },
          {
            title: 'APIファーストの統合',
            description: 'シンプルで強力な開発者ツール。'
          },
          {
            title: 'クローズドソースのバックエンド',
            description: '攻撃を受けないインフラストラクチャ。'
          },
          {
            title: 'エンタープライズの拡張性',
            description: '数百万のデバイス向けに設計されています。'
          }
        ]
      },
      integration: {
        title: '開発者統合',
        examples: [
          {
            title: 'デバイス登録',
            code: `POST /v1/iot/register\n{\n  "publicKey": "...",\n  "manufacturer": "exampleCorp",\n  "deviceModel": "v2.1"\n}`
          },
          {
            title: 'デバイス認証',
            code: `POST /v1/iot/auth\n{\n  "signature": "...",\n  "nonce": 47283921\n}`
          },
          {
            title: 'ファームウェア検証',
            code: `POST /v1/iot/firmware/verify\n{\n  "deviceId": "ltc1qxyz...",\n  "firmwareHash": "..."\n}`
          }
        ],
        sdks_title: '以下のSDKが近日公開予定：',
        sdks: ['C', 'C++', 'Rust', 'ARM', 'ESP32', 'WebAssembly']
      },
      pricing: {
        title: '価格概要',
        subtitle: '以下のためのカスタム価格：',
        segments: [
          'メーカー',
          '大規模なIoTフリート',
          '産業環境',
          '医療および規制産業',
          '消費者向けデバイスプラットフォーム'
        ],
        cta: 'IoT価格について営業に問い合わせる'
      },
      cta: {
        title_start: 'IoTセキュリティの未来は',
        title_end: '分散型です',
        subtitle: 'PTERIをお使いのデバイスに導入しましょう。',
        cta_sales: '営業と話す',
        cta_docs: 'ドキュメントを見る'
      }
    },
    ar: {
       meta: {
        title: 'أمان PTERI لإنترنت الأشياء - ثقة لامركزية للأجهزة المتصلة',
        description: 'تأمين مليارات من أجهزة إنترنت الأشياء بهوية مدعومة من blockchain، ومصادقة، وتوقيع البرامج الثابتة بدون حراسة. بدعم من Litecoin.'
      },
      hero: {
        badge: 'حل أمان إنترنت الأشياء',
        title_start: 'أمان لامركزي لـ',
        title_end: 'مليارات الأجهزة',
        subtitle: 'امنح كل جهاز إنترنت الأشياء هوية مقاومة للتلاعب ومصادقة آمنة باستخدام التشفير المدعوم بـ blockchain.',
        description: 'لا شهادات، لا كلمات مرور المصنع، لا خوادم مركزية - فقط أمان جهاز غير موثوق به وغير قابل للتغيير مدعوم بـ Litecoin.',
        cta_sales: 'اتصل بالمبيعات',
        cta_docs: 'عرض الوثائق',
        footer: 'تأمين إعداد الأجهزة، والمصادقة، والبرامج الثابتة، وإدارة دورة الحياة.'
      },
      architecture: {
        title: 'نظرة عامة على البنية',
        caption: 'هذه هوية إنترنت الأشياء بدون نقاط فشل مركزية.'
      },
      crisis: {
        title_start: 'أزمة',
        title_end: 'أمان إنترنت الأشياء',
        subtitle: 'أجهزة إنترنت الأشياء موجودة في كل مكان - وتقريبًا جميعها غير آمنة.',
        problems_title: 'تعتمد البنية التحتية لإنترنت الأشياء اليوم على:',
        problems: [
          'بيانات الاعتماد التي تم تعيينها في المصنع',
          'شهادات الجهاز القديمة',
          'خوادم المصادقة المركزية',
          'تحديثات البرامج الثابتة غير الآمنة',
          'معرفات الأجهزة الثابتة',
          'أدوات تحميل التشغيل الضعيفة',
          'أنظمة PKI الضعيفة',
          'ممارسات التوفير غير المتسقة'
        ],
        threats_title: 'هذا يؤدي إلى:',
        threats: [
          'اختطاف الأجهزة الجماعي',
          'شبكات الروبوت IoT',
          'البرامج الثابتة غير المصرح بها',
          'انتحال الجهاز',
          'هجمات سلسلة التوريد',
          'إساءة استخدام API',
          'هجمات برامج الفدية'
        ],
        conclusion_start: 'تحتاج صناعة إنترنت الأشياء إلى نظام ثقة جديد -',
        conclusion_end: 'لامركزي، غير قابل للتزوير، ويمكن التحقق منه بالتشفير.'
      },
      model: {
        title_start: 'أمان PTERI لإنترنت الأشياء:',
        title_end: 'نموذج جديد لثقة الجهاز',
        subtitle: 'يوفر PTERI هوية جهاز لامركزية، ومصادقة، وأمان دورة الحياة باستخدام:',
        features: [
          'إنشاء المفاتيح من جانب الجهاز',
          'هوية مدعومة بـ blockchain',
          'التحقق من التوقيع التشفيري',
          'نموذج ثقة بدون حراسة',
          'خصوصية جهاز يتحكم بها العميل',
          'بنية تحتية للمؤسسات مغلقة المصدر'
        ],
        benefits_title: 'كل جهاز يحصل على:',
        benefits: [
          'هوية تشفير فريدة',
          'سجل ثقة يمكن التحقق منه بواسطة blockchain',
          'حماية توقيع البرامج الثابتة',
          'توفير آمن',
          'مصادقة مقاومة للتلاعب'
        ],
        conclusion: 'يصبح هذا هو الأساس الجديد لإنترنت الأشياء الآمن على نطاق واسع.'
      },
      enables: {
        title: 'ما يمكّنه PTERI IoT',
        capabilities: [
          {
            title: '1. هوية جهاز لامركزية',
            description: 'يولد كل جهاز زوج المفاتيح الخاص به. يتم تخزين المفاتيح في الأجهزة أو العناصر الآمنة. لا سحابة. لا أسرار من جانب الشركة المصنعة.',
            details: 'الهوية التي تم إنشاؤها ← مسجلة عبر Litecoin ← مرساة ثقة غير قابلة للتغيير.',
            iconName: 'FingerPrintIcon'
          },
          {
            title: '2. مصادقة الجهاز (ثقة صفرية)',
            description: 'يجب على الأجهزة التوقيع على الطلبات للوصول إلى: الخدمات السحابية، البوابات المحلية، أنظمة المؤسسات، واجهات برمجة التطبيقات، وحدات التحكم، شبكات إنترنت الأشياء.',
            details: 'التحقق لامركزي بالكامل.',
            iconName: 'ShieldCheckIcon'
          },
          {
            title: '3. توفير آمن',
            description: 'سير عمل الإعداد باستخدام: رموز QR، NFC، BLE، التوفير التسلسلي، شهادة المصنع، اقتران هوية PTERI.',
            details: 'توفير الآلاف أو الملايين من الأجهزة بشكل موثوق.',
            iconName: 'CpuChipIcon'
          },
          {
            title: '4. توقيع البرامج الثابتة والتحقق منها',
            description: 'تأكد من أن الأجهزة تعمل فقط البرامج الثابتة الموثوقة. الشركات المصنعة توقيع تحديثات البرامج الثابتة ← الأجهزة تتحقق ← يتم حظر البرامج الثابتة غير المصرح بها.',
            details: 'هذا يغلق مسارًا شائعًا تستخدمه برامج الفدية في إنترنت الأشياء.',
            iconName: 'DocumentCheckIcon'
          },
          {
            title: '5. إدارة دورة الحياة',
            description: 'تدوير المفاتيح، إبطال الهويات المخترقة، إعادة تعيين الملكية، تدقيق الإجراءات، التحكم في الأساطيل.',
            details: 'كل ذلك مدعوم ببنية تحتية للمؤسسات آمنة ومغلقة المصدر.',
            iconName: 'ArrowPathIcon'
          }
        ]
      },
      litecoin: {
        title_start: 'لماذا',
        title_end: 'Litecoin لإنترنت الأشياء؟',
        subtitle: 'Litecoin مثالي لعمليات نشر إنترنت الأشياء:',
        reasons: [
          {
            icon: '',
            title: 'سريع',
            description: 'أوقات كتلة سريعة ← تحديثات ثقة سريعة.'
          },
          {
            icon: '💲',
            title: 'تكلفة منخفضة',
            description: 'المعاملات والتسجيلات تكلف بنسات.'
          },
          {
            icon: '🛡️',
            title: 'آمن',
            description: 'إثبات العمل مع أكثر من 12 عامًا من وقت التشغيل.'
          },
          {
            icon: '🕵️',
            title: 'عزل الثقة',
            description: 'يخفي ارتباطات الثقة على مستوى الجهاز.'
          },
          {
            icon: '🌐',
            title: 'عالمي',
            description: 'الوصول إلى أساطيل إنترنت الأشياء في أي مكان في العالم.'
          },
          {
            icon: '',
            title: 'مبادئ مقاومة الكم',
            description: 'طبقة مصادقة مقاومة للمستقبل.'
          }
        ]
      },
      beneficiaries: {
        title: 'من يستفيد',
        list: [
          {
            icon: '🏭',
            title: 'المصنعين',
            description: 'تأمين الأجهزة من أرض المصنع.'
          },
          {
            icon: '🏥',
            title: 'مقدمي الرعاية الصحية',
            description: 'هوية آمنة للأجهزة الطبية.'
          },
          {
            icon: '🚗',
            title: 'السيارات والمركبات الكهربائية',
            description: 'مصادقة أجهزة الشحن وأجهزة الاستشعار وتقنية المعلومات عن بعد.'
          },
          {
            icon: '🏠',
            title: 'شركات المنزل الذكي',
            description: 'منع الأجهزة المارقة من الانضمام إلى شبكات المستخدمين.'
          },
          {
            icon: '📦',
            title: 'الخدمات اللوجستية',
            description: 'مصادقة أجهزة الاستشعار وأجهزة التتبع وأجهزة الأسطول.'
          },
          {
            icon: '🌐',
            title: 'مقدمي خدمات الاتصالات',
            description: 'مصادقة أجهزة التوجيه والبوابات ونقاط الوصول.'
          },
          {
            icon: '♾',
            title: 'منصات إنترنت الأشياء',
            description: 'توفير هوية جهاز آمنة كخدمة.'
          }
        ]
      },
      keyFeatures: {
        title: 'الميزات الرئيسية',
        list: [
          {
            title: 'هوية جهاز غير قابلة للتغيير',
            description: 'مدعوم من Litecoin.'
          },
          {
            title: 'إنشاء المفاتيح المحلية',
            description: 'أمان بدون حراسة.'
          },
          {
            title: 'توقيع البرامج الثابتة',
            description: 'منع التعديلات غير المصرح بها.'
          },
          {
            title: 'المصادقة القائمة على التوقيع',
            description: 'لا كلمات مرور، لا رموز.'
          },
          {
            title: 'تطبيق السياسات على مستوى الأسطول',
            description: 'تكوينات عالمية ومفصلة.'
          },
          {
            title: 'تكامل API-First',
            description: 'أدوات مطور بسيطة وقوية.'
          },
          {
            title: 'واجهة خلفية مغلقة المصدر',
            description: 'بنية تحتية غير قابلة للهجوم.'
          },
          {
            title: 'قابلية التوسع للمؤسسات',
            description: 'مصممة لملايين الأجهزة.'
          }
        ]
      },
      integration: {
        title: 'تكامل المطورين',
        examples: [
          {
            title: 'تسجيل الجهاز',
            code: `POST /v1/iot/register\n{\n  "publicKey": "...",\n  "manufacturer": "exampleCorp",\n  "deviceModel": "v2.1"\n}`
          },
          {
            title: 'مصادقة الجهاز',
            code: `POST /v1/iot/auth\n{\n  "signature": "...",\n  "nonce": 47283921\n}`
          },
          {
            title: 'التحقق من البرامج الثابتة',
            code: `POST /v1/iot/firmware/verify\n{\n  "deviceId": "ltc1qxyz...",\n  "firmwareHash": "..."\n}`
          }
        ],
        sdks_title: 'SDKs قادمة لـ:',
        sdks: ['C', 'C++', 'Rust', 'ARM', 'ESP32', 'WebAssembly']
      },
      pricing: {
        title: 'نظرة عامة على التسعير',
        subtitle: 'تسعير مخصص لـ:',
        segments: [
          'المصنعين',
          'أساطيل إنترنت الأشياء الكبيرة',
          'البيئات الصناعية',
          'الرعاية الصحية والصناعات المنظمة',
          'منصات الأجهزة الاستهلاكية'
        ],
        cta: 'اتصل بالمبيعات للحصول على تسعير إنترنت الأشياء'
      },
      cta: {
        title_start: 'مستقبل أمان إنترنت الأشياء هو',
        title_end: 'لامركزي',
        subtitle: 'انشر PTERI عبر أجهزتك.',
        cta_sales: 'تحدث إلى المبيعات',
        cta_docs: 'عرض الوثائق'
      }
    },
  }

  return translations[locale.value] || translations['en']
})

useSEO({
  title: computed(() => content.value.meta.title),
  description: computed(() => content.value.meta.description)
})
</script>

