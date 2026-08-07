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
            <span class="text-sm font-medium text-emerald-300">{{ dpaTranslations.effective }}</span>
          </div>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {{ dpaTranslations.title }}
          </h1>
          
          <p class="text-xl text-white/80 max-w-2xl mx-auto">
            {{ dpaTranslations.entity }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 lg:py-24">
      <div class="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p class="lead">
            {{ dpaTranslations.intro }}
          </p>
          <p>
            {{ dpaTranslations.effectiveDate }}
          </p>

          <hr class="my-12 border-white/10  dark:border-slate-800" />

          <h2>{{ dpaTranslations.definitions.title }}</h2>
          <ul>
            <li v-for="(item, index) in dpaTranslations.definitions.list" :key="index">{{ item }}</li>
          </ul>

          <h2>{{ dpaTranslations.purpose.title }}</h2>
          <p>{{ dpaTranslations.purpose.intro }}</p>
          <ul>
            <li v-for="(item, index) in dpaTranslations.purpose.list" :key="index">{{ item }}</li>
          </ul>
          <p><em>{{ dpaTranslations.purpose.note }}</em></p>

          <h2>{{ dpaTranslations.categories.title }}</h2>
          <p>{{ dpaTranslations.categories.intro }}</p>

          <h3>{{ dpaTranslations.categories.account.title }}</h3>
          <ul>
            <li v-for="(item, index) in dpaTranslations.categories.account.list" :key="index">{{ item }}</li>
          </ul>

          <h3>{{ dpaTranslations.categories.support.title }}</h3>
          <ul>
            <li v-for="(item, index) in dpaTranslations.categories.support.list" :key="index">{{ item }}</li>
          </ul>

          <h3>{{ dpaTranslations.categories.usage.title }}</h3>
          <ul>
            <li v-for="(item, index) in dpaTranslations.categories.usage.list" :key="index">{{ item }}</li>
          </ul>
          <p><em>{{ dpaTranslations.categories.note }}</em></p>

          <h2>{{ dpaTranslations.processorObligations.title }}</h2>
          <p>{{ dpaTranslations.processorObligations.intro }}</p>
          <ul>
            <li v-for="(item, index) in dpaTranslations.processorObligations.list" :key="index">{{ item }}</li>
          </ul>
          <p><em>{{ dpaTranslations.processorObligations.note }}</em></p>

          <h2>{{ dpaTranslations.controllerObligations.title }}</h2>
          <p>{{ dpaTranslations.controllerObligations.intro }}</p>
          <ul>
            <li v-for="(item, index) in dpaTranslations.controllerObligations.list" :key="index">{{ item }}</li>
          </ul>
          <p><em>{{ dpaTranslations.controllerObligations.note }}</em></p>

          <h2>{{ dpaTranslations.security.title }}</h2>
          <p>{{ dpaTranslations.security.intro }}</p>

          <h3>{{ dpaTranslations.security.infrastructure.title }}</h3>
          <ul>
            <li v-for="(item, index) in dpaTranslations.security.infrastructure.list" :key="index">{{ item }}</li>
          </ul>

          <h3>{{ dpaTranslations.security.system.title }}</h3>
          <ul>
            <li v-for="(item, index) in dpaTranslations.security.system.list" :key="index">{{ item }}</li>
          </ul>

          <h3>{{ dpaTranslations.security.application.title }}</h3>
          <ul>
            <li v-for="(item, index) in dpaTranslations.security.application.list" :key="index">{{ item }}</li>
          </ul>

          <h3>{{ dpaTranslations.security.privacy.title }}</h3>
          <ul>
            <li v-for="(item, index) in dpaTranslations.security.privacy.list" :key="index">{{ item }}</li>
          </ul>

          <h2>{{ dpaTranslations.requests.title }}</h2>
          <p>{{ dpaTranslations.requests.intro }}</p>
          <ul>
            <li v-for="(item, index) in dpaTranslations.requests.list" :key="index">{{ item }}</li>
          </ul>

          <h2>{{ dpaTranslations.audits.title }}</h2>
          <p>{{ dpaTranslations.audits.intro }}</p>
          <ul>
            <li v-for="(item, index) in dpaTranslations.audits.list" :key="index">{{ item }}</li>
          </ul>

          <h2>{{ dpaTranslations.subprocessors.title }}</h2>
          <p>{{ dpaTranslations.subprocessors.intro }}</p>
          
          <h3>{{ dpaTranslations.subprocessors.primary.title }}</h3>
          <ul>
            <li v-for="(item, index) in dpaTranslations.subprocessors.primary.list" :key="index">{{ item }}</li>
          </ul>

          <h3>{{ dpaTranslations.subprocessors.ai.title }}</h3>
          <ul>
            <li v-for="(item, index) in dpaTranslations.subprocessors.ai.list" :key="index">{{ item }}</li>
          </ul>
          <p><em>{{ dpaTranslations.subprocessors.note }}</em></p>

          <h2>{{ dpaTranslations.transfers.title }}</h2>
          <p>{{ dpaTranslations.transfers.intro }}</p>
          <ul>
            <li v-for="(item, index) in dpaTranslations.transfers.list" :key="index">{{ item }}</li>
          </ul>
          <p><em>{{ dpaTranslations.transfers.note }}</em></p>

          <h2>{{ dpaTranslations.retention.title }}</h2>
          <p>{{ dpaTranslations.retention.intro }}</p>
          <p>{{ dpaTranslations.retention.termination }}</p>
          <ul>
            <li v-for="(item, index) in dpaTranslations.retention.list" :key="index">{{ item }}</li>
          </ul>

          <h2>{{ dpaTranslations.liability.title }}</h2>
          <p>{{ dpaTranslations.liability.intro }}</p>
          <ul>
            <li v-for="(item, index) in dpaTranslations.liability.list" :key="index">{{ item }}</li>
          </ul>

          <h2>{{ dpaTranslations.term.title }}</h2>
          <p>{{ dpaTranslations.term.content }}</p>

          <h2>{{ dpaTranslations.contact.title }}</h2>
          <p>{{ dpaTranslations.contact.intro }}</p>
          <ul>
            <li>{{ dpaTranslations.contact.email }}</li>
            <li>{{ dpaTranslations.contact.website }}</li>
          </ul>
          
          <div class="mt-12 p-6 bg-black  rounded-lg border border-white/10  dark:border-slate-800 text-center">
            <p class="font-bold text-white  mb-2">Kakr Labs Inc.</p>
            <p class="text-white/70 ">Decentralized by Design. Private by Default.</p>
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

const dpaTranslations = computed(() => {
  const texts = {
    en: {
      effective: "Effective: September 26, 2025",
      title: "Data Processing Addendum (DPA)",
      entity: "Entity: Kakr Labs, Inc. (Wyoming C-Corp)",
      intro: "This Data Processing Addendum (\"DPA\") forms part of the agreement between Kakr Labs Inc. (\"Processor\") and the customer (\"Controller\") for the provision of services. This DPA reflects the parties' agreement regarding the processing of Personal Data in accordance with applicable data protection laws.",
      effectiveDate: "Effective Date: September 26, 2025",
      definitions: {
        title: "1. Definitions",
        list: [
          "\"Personal Data\" means any information relating to an identified or identifiable natural person",
          "\"Processing\" means any operation performed on Personal Data",
          "\"Controller\" means the entity that determines the purposes and means of Processing Personal Data",
          "\"Processor\" means Kakr Labs Inc., which Processes Personal Data on behalf of the Controller",
          "\"Sub-processor\" means any third party engaged by the Processor to Process Personal Data"
        ]
      },
      purpose: {
        title: "2. Scope and Purpose of Processing",
        intro: "Kakr Labs processes Personal Data only as necessary to provide the following services:",
        list: [
          "PTERI App: Decentralized authentication and wallet management",
          "PTERI Playground: Development and testing environment",
          "PTERI Intelligence: AI-powered analytics and insights",
          "PTERI Data: Blockchain data management and audit trails"
        ],
        note: "We do NOT process sensitive personal data (e.g., health data, biometric data) unless explicitly agreed in writing."
      },
      categories: {
        title: "3. Categories of Data and Data Subjects",
        intro: "We process the following categories of Personal Data:",
        account: {
          title: "A. Account Information",
          list: [
            "Email addresses",
            "Public wallet addresses (BIP-39 compatible)",
            "Account preferences and settings"
          ]
        },
        support: {
          title: "B. Support and Communication Data",
          list: [
            "Name and contact information (when provided)",
            "Support ticket content",
            "Communication history"
          ]
        },
        usage: {
          title: "C. Usage Data (Anonymized)",
          list: [
            "API call logs and metrics",
            "Performance and error data",
            "Feature usage statistics"
          ]
        },
        note: "We do NOT collect or process: SSN, financial account details, biometric data, location tracking, or private keys/seed phrases."
      },
      processorObligations: {
        title: "4. Processor Obligations",
        intro: "Kakr Labs commits to:",
        list: [
          "Process Personal Data only on documented instructions from the Controller",
          "Ensure confidentiality of personnel with access to Personal Data",
          "Implement appropriate technical and organizational security measures",
          "Assist the Controller in responding to data subject requests",
          "Notify the Controller of any Personal Data breaches without undue delay",
          "Delete or return Personal Data upon termination of services"
        ],
        note: "If we believe an instruction violates applicable law, we will inform the Controller immediately."
      },
      controllerObligations: {
        title: "5. Controller Obligations",
        intro: "The Controller commits to:",
        list: [
          "Ensure it has a lawful basis for Processing Personal Data",
          "Provide clear instructions for data Processing",
          "Comply with applicable data protection laws",
          "Inform Kakr Labs of any restrictions on Processing"
        ],
        note: "The Controller is responsible for obtaining necessary consents from data subjects."
      },
      security: {
        title: "6. Security Measures",
        intro: "Kakr Labs implements the following security measures:",
        infrastructure: {
          title: "A. Infrastructure Security",
          list: [
            "Hosted on Microsoft Azure and IBM Cloud enterprise infrastructure",
            "Data encrypted at rest (AES-256) and in transit (TLS 1.3)",
            "Multi-region redundancy and disaster recovery"
          ]
        },
        system: {
          title: "B. System Security",
          list: [
            "Role-based access controls (RBAC)",
            "Multi-factor authentication for administrative access",
            "Regular security audits and penetration testing"
          ]
        },
        application: {
          title: "C. Application Security",
          list: [
            "Decentralized 2FA via PTERI App (cryptographic, customer-controlled credentials)",
            "Customer-controlled payment credentials",
            "Immutable audit logs via blockchain"
          ]
        },
        privacy: {
          title: "D. Privacy by Design",
          list: [
            "Data minimization: We collect only what's necessary",
            "No private keys or seed phrases stored",
            "Anonymized analytics and usage data"
          ]
        }
      },
      requests: {
        title: "7. Data Subject Requests",
        intro: "Kakr Labs will assist the Controller in responding to data subject requests, including:",
        list: [
          "Access requests: Providing copies of Personal Data",
          "Rectification requests: Correcting inaccurate data",
          "Erasure requests: Deleting Personal Data",
          "Portability requests: Exporting data in a structured format",
          "Objection requests: Ceasing certain Processing activities"
        ]
      },
      audits: {
        title: "8. Audits and Compliance",
        intro: "Kakr Labs commits to:",
        list: [
          "Maintaining an internal information security program with periodic reviews",
          "Commissioning independent third-party security assessments",
          "Providing available assessment summaries upon request (subject to confidentiality)",
          "Cooperating with regulatory inspections"
        ]
      },
      subprocessors: {
        title: "9. Sub-processors",
        intro: "Kakr Labs engages the following Sub-processors:",
        primary: {
          title: "A. Infrastructure Sub-processors",
          list: [
            "Microsoft Azure: Cloud hosting and infrastructure",
            "IBM Cloud: Hybrid cloud and blockchain services",
            "Google Cloud Platform: Performance monitoring and analytics"
          ]
        },
        ai: {
          title: "B. AI Sub-processors",
          list: [
            "OpenAI: AI-powered features in PTERI Intelligence (no wallet data shared)"
          ]
        },
        note: "We will notify the Controller of any changes to Sub-processors with at least 30 days' notice."
      },
      transfers: {
        title: "10. International Data Transfers",
        intro: "Personal Data may be transferred to:",
        list: [
          "United States (Kakr Labs headquarters)",
          "European Union (Azure data centers)",
          "Other regions where Azure/IBM operate"
        ],
        note: "All transfers comply with GDPR Standard Contractual Clauses (SCCs) and other applicable safeguards."
      },
      retention: {
        title: "11. Data Retention and Deletion",
        intro: "We retain Personal Data only as long as necessary for the purposes outlined in this DPA or as required by law.",
        termination: "Upon termination of services, we will:",
        list: [
          "Delete all Personal Data within 30 days, or",
          "Return Personal Data to the Controller upon request"
        ]
      },
      liability: {
        title: "12. Liability and Indemnification",
        intro: "Liability for data protection violations is governed by:",
        list: [
          "The main service agreement between Kakr Labs and the Controller",
          "Applicable data protection laws (e.g., GDPR Article 82)",
          "Each party is liable for its own breaches of this DPA"
        ]
      },
      term: {
        title: "13. Term and Termination",
        content: "This DPA remains in effect for the duration of the service agreement. Upon termination, the data deletion provisions in Section 11 apply."
      },
      contact: {
        title: "14. Contact Information",
        intro: "For questions about this DPA or data processing practices, contact:",
        email: "Email: privacy@kakr.org",
        website: "Website: https://kakr.org/contact"
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
  title: 'Data Processing Addendum (DPA) - Kakr Labs',
  description: 'Kakr Labs Data Processing Addendum. Legal agreement for data processing, GDPR compliance, and data protection terms for enterprise customers.',
  image: '/legal-og.png',
  keywords: ['data processing addendum', 'dpa', 'kakr labs dpa', 'gdpr dpa', 'data processing agreement']
})
</script>


