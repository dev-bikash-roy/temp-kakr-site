<template>
  <div class="bg-black  bg-black">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black py-20 lg:py-28">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <svg class="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm font-medium text-emerald-300">{{ aupTranslations.lastUpdated }}</span>
          </div>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {{ aupTranslations.title }}
          </h1>
          
          <p class="text-xl text-white/80 max-w-2xl mx-auto">
            {{ aupTranslations.entity }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 lg:py-24">
      <div class="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div class="prose prose-lg prose-invert max-w-none">
          <p class="lead">
            {{ aupTranslations.intro }}
          </p>
          <ul>
            <li v-for="(item, index) in aupTranslations.servicesList" :key="index">{{ item }}</li>
          </ul>
          <p>
            {{ aupTranslations.agreement }}
          </p>

          <hr class="my-12 border-white/10  dark:border-slate-800" />

          <h2>{{ aupTranslations.prohibited.title }}</h2>
          <p>{{ aupTranslations.prohibited.intro }}</p>
          
          <h3>{{ aupTranslations.prohibited.illegal.title }}</h3>
          <p>{{ aupTranslations.prohibited.illegal.content }}</p>
          <ul>
            <li v-for="(item, index) in aupTranslations.prohibited.illegal.list" :key="index">{{ item }}</li>
          </ul>

          <h3>{{ aupTranslations.prohibited.crypto.title }}</h3>
          <p>{{ aupTranslations.prohibited.crypto.content }}</p>
          <ul>
            <li v-for="(item, index) in aupTranslations.prohibited.crypto.list" :key="index">{{ item }}</li>
          </ul>

          <h3>{{ aupTranslations.prohibited.wallet.title }}</h3>
          <p>{{ aupTranslations.prohibited.wallet.content }}</p>
          <ul>
            <li v-for="(item, index) in aupTranslations.prohibited.wallet.list" :key="index">{{ item }}</li>
          </ul>

          <h3>{{ aupTranslations.prohibited.api.title }}</h3>
          <p>{{ aupTranslations.prohibited.api.content }}</p>
          <ul>
            <li v-for="(item, index) in aupTranslations.prohibited.api.list" :key="index">{{ item }}</li>
          </ul>

          <h3>{{ aupTranslations.prohibited.security.title }}</h3>
          <p>{{ aupTranslations.prohibited.security.content }}</p>
          <ul>
            <li v-for="(item, index) in aupTranslations.prohibited.security.list" :key="index">{{ item }}</li>
          </ul>

          <h3>{{ aupTranslations.prohibited.harmful.title }}</h3>
          <p>{{ aupTranslations.prohibited.harmful.content }}</p>
          <ul>
            <li v-for="(item, index) in aupTranslations.prohibited.harmful.list" :key="index">{{ item }}</li>
          </ul>

          <h2>{{ aupTranslations.geographic.title }}</h2>
          <p>{{ aupTranslations.geographic.content }}</p>
          <ul>
            <li v-for="(item, index) in aupTranslations.geographic.list" :key="index">{{ item }}</li>
          </ul>
          <p>{{ aupTranslations.geographic.note }}</p>

          <h2>{{ aupTranslations.content.title }}</h2>
          <p>{{ aupTranslations.content.intro }}</p>
          <ul>
            <li v-for="(item, index) in aupTranslations.content.list" :key="index">{{ item }}</li>
          </ul>
          <p>{{ aupTranslations.content.note }}</p>

          <h2>{{ aupTranslations.fairUse.title }}</h2>
          <p>{{ aupTranslations.fairUse.content }}</p>
          <ul>
            <li v-for="(item, index) in aupTranslations.fairUse.list" :key="index">{{ item }}</li>
          </ul>
          <p>{{ aupTranslations.fairUse.note }}</p>

          <h2>{{ aupTranslations.selfCustody.title }}</h2>
          <p>{{ aupTranslations.selfCustody.content }}</p>
          <ul>
            <li v-for="(item, index) in aupTranslations.selfCustody.list" :key="index">{{ item }}</li>
          </ul>
          <p>{{ aupTranslations.selfCustody.note }}</p>

          <h2>{{ aupTranslations.enforcement.title }}</h2>
          <p>{{ aupTranslations.enforcement.content }}</p>
          <ul>
            <li v-for="(item, index) in aupTranslations.enforcement.list" :key="index">{{ item }}</li>
          </ul>
          <p>{{ aupTranslations.enforcement.note }}</p>

          <h2>{{ aupTranslations.reporting.title }}</h2>
          <p>{{ aupTranslations.reporting.content }}</p>
          <ul>
            <li>Email: <a href="mailto:security@kakr.org">security@kakr.org</a></li>
          </ul>

          <h2>{{ aupTranslations.changes.title }}</h2>
          <p>
            {{ aupTranslations.changes.content }}
          </p>
          
          <div class="mt-12 p-6 bg-black  rounded-lg border border-white/10  dark:border-slate-800 text-center">
            <p class="font-bold text-white  mb-2">Kakr Labs Inc.</p>
            <p class="text-white/70 ">Secure. Decentralized. Cryptographically Verifiable. Powered by Litecoin.</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const aupTranslations = computed(() => {
  const texts = {
    en: {
      lastUpdated: "Last Updated: September 26, 2025",
      title: "Acceptable Use Policy (AUP)",
      entity: "Entity: Kakr Labs, Inc. (Wyoming C-Corp)",
      intro: "This Acceptable Use Policy (\"AUP\") governs your use of Kakr Labs services, including:",
      servicesList: [
        "PTERI App: Decentralized wallet and authentication",
        "PTERI Playground: Development and testing environment",
        "PTERI Intelligence: AI-powered analytics",
        "PTERI Data: Blockchain data management"
      ],
      agreement: "By using our services, you agree to comply with this AUP. Violations may result in suspension or termination of your account.",
      prohibited: {
        title: "Prohibited Activities",
        intro: "You may NOT use Kakr Labs services for:",
        illegal: {
          title: "1. Illegal Activities",
          content: "Do not use our services for any illegal purpose or to violate any laws, including:",
          list: [
            "Money laundering or terrorist financing",
            "Fraud, phishing, or identity theft",
            "Trafficking of illegal goods or services",
            "Violation of sanctions or export controls"
          ]
        },
        crypto: {
          title: "2. Cryptocurrency Misuse",
          content: "Do not:",
          list: [
            "Engage in market manipulation or pump-and-dump schemes",
            "Create or promote fraudulent tokens or NFTs",
            "Facilitate Ponzi schemes or pyramid schemes",
            "Engage in wash trading or fake volume generation"
          ]
        },
        wallet: {
          title: "3. Wallet and Key Misuse",
          content: "Do not:",
          list: [
            "Attempt to access other users' wallets or private keys",
            "Share or sell access to wallets you do not own",
            "Use stolen or compromised private keys",
            "Impersonate other wallet owners"
          ]
        },
        api: {
          title: "4. API Abuse",
          content: "Do not:",
          list: [
            "Exceed rate limits or attempt to bypass throttling",
            "Use automated scripts to scrape or harvest data",
            "Reverse engineer or decompile our APIs",
            "Share API keys or credentials with unauthorized parties"
          ]
        },
        security: {
          title: "5. Security Violations",
          content: "Do not:",
          list: [
            "Attempt to breach or test our security measures",
            "Launch denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks",
            "Introduce malware, viruses, or malicious code",
            "Exploit vulnerabilities without responsible disclosure"
          ]
        },
        harmful: {
          title: "6. Harmful Content",
          content: "Do not use our services to:",
          list: [
            "Distribute hate speech, harassment, or threats",
            "Share child sexual abuse material (CSAM)",
            "Promote violence or terrorism",
            "Violate intellectual property rights"
          ]
        },
        spam: {
          title: "7. Spam and Unsolicited Communications",
          content: "Do not:",
          list: [
            "Send unsolicited bulk messages or spam",
            "Use our services for phishing or social engineering",
            "Create fake accounts or bots for spamming"
          ]
        }
      },
      enforcement: {
        title: "Enforcement",
        intro: "Kakr Labs reserves the right to:",
        list: [
          "Investigate suspected violations of this AUP",
          "Suspend or terminate accounts that violate this AUP",
          "Report illegal activities to law enforcement",
          "Cooperate with legal investigations and court orders"
        ],
        note: "We will provide notice of enforcement actions when legally permissible."
      },
      geographic: {
        title: "Geographic Restrictions",
        content: "Our services may not be available in all jurisdictions. You are responsible for ensuring your use complies with local laws.",
        list: [
          "We do not operate in OFAC-sanctioned countries",
          "Certain features may be restricted based on your location",
          "You must comply with all applicable export controls"
        ],
        note: "Contact us if you have questions about geographic availability."
      },
      content: {
        title: "User-Generated Content",
        intro: "If you submit content to our services, you agree that:",
        list: [
          "You own or have rights to the content",
          "Your content does not violate this AUP",
          "We may remove content that violates this policy",
          "You are responsible for your content"
        ],
        note: "We do not monitor all user content but reserve the right to review and remove violating content."
      },
      fairUse: {
        title: "Fair Use and Rate Limits",
        content: "To ensure service quality for all users:",
        list: [
          "Free tier: 100 API calls per month",
          "Paid tiers: See pricing page for limits",
          "Excessive use may result in throttling or suspension",
          "Contact us for enterprise-level access"
        ],
        note: "Rate limits are subject to change with notice."
      },
      selfCustody: {
        title: "Self-Custody Responsibilities",
        content: "PTERI App is a self-custody solution. You are responsible for:",
        list: [
          "Securing your private keys and seed phrases",
          "Backing up your wallet",
          "Protecting your devices from malware",
          "Not sharing your credentials with anyone"
        ],
        note: "Kakr Labs cannot recover lost keys or reverse transactions."
      },
      reporting: {
        title: "Reporting Violations",
        content: "If you become aware of any violations of this AUP, please report them to: security@kakr.org"
      },
      changes: {
        title: "Changes to This Policy",
        content: "We may update this AUP from time to time. Continued use of our services after changes constitutes acceptance of the updated policy."
      }
    }
  }

  // Other languages use English for legal documents
  texts.de = texts.en
  texts.es = texts.en
  texts.ja = texts.en
  texts.ar = texts.en

  return texts[locale.value] || texts.en
})

const { setSEO } = useSEO()

setSEO({
  title: 'Acceptable Use Policy - Kakr Labs',
  description: 'Kakr Labs Acceptable Use Policy. Guidelines for using our Web3 infrastructure, APIs, and services responsibly and in compliance with our terms.',
  image: '/legal-og.png',
  keywords: ['acceptable use policy', 'kakr labs terms', 'api usage policy', 'service guidelines', 'web3 policy']
})
</script>


