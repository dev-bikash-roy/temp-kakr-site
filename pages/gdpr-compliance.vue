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
            <span class="text-sm font-medium text-emerald-300">{{ gdprTranslations.lastUpdated }}</span>
          </div>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {{ gdprTranslations.title }}
          </h1>
          
          <p class="text-xl text-white/80 max-w-2xl mx-auto">
            {{ gdprTranslations.entity }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 lg:py-24">
      <div class="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p class="lead">
            {{ gdprTranslations.intro }}
          </p>

          <hr class="my-12 border-white/10  dark:border-slate-800" />

          <h2>{{ gdprTranslations.commitment.title }}</h2>
          <p>
            {{ gdprTranslations.commitment.content }}
          </p>

          <h2>{{ gdprTranslations.principles.title }}</h2>
          <p>
            {{ gdprTranslations.principles.content }}
          </p>

          <h2>{{ gdprTranslations.rights.title }}</h2>
          <p>
            {{ gdprTranslations.rights.content }}
          </p>
          <ul>
            <li v-for="(item, index) in gdprTranslations.rights.list" :key="index">{{ item }}</li>
          </ul>

          <h2>{{ gdprTranslations.security.title }}</h2>
          <p>
            {{ gdprTranslations.security.content }}
          </p>

          <h2>{{ gdprTranslations.contact.title }}</h2>
          <p>
            {{ gdprTranslations.contact.content }}
          </p>
          
          <div class="mt-12 p-6 bg-black  rounded-lg border border-white/10  dark:border-slate-800 text-center">
            <p class="font-bold text-white  mb-2">Kakr Labs Inc.</p>
            <p class="text-white/70 ">Committed to Data Protection and Privacy</p>
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

const gdprTranslations = computed(() => {
  const texts = {
    en: {
      title: "GDPR Compliance Statement",
      lastUpdated: "Last Updated: September 26, 2025",
      entity: "Entity: Kakr Labs, Inc. (Wyoming C-Corp)",
      intro: "Kakr Labs Inc. is committed to protecting your personal data and respecting your privacy rights under the General Data Protection Regulation (GDPR). This statement outlines our commitment to GDPR compliance and how we handle your data.",
      commitment: {
        title: "Our Commitment to GDPR",
        content: "We are dedicated to ensuring that our data processing activities comply with GDPR requirements. We implement appropriate technical and organizational measures to protect your personal data and respect your rights as a data subject."
      },
      principles: {
        title: "GDPR Principles We Follow",
        content: "We process personal data in accordance with GDPR principles: lawfulness, fairness and transparency; purpose limitation; data minimization; accuracy; storage limitation; integrity and confidentiality; and accountability."
      },
      rights: {
        title: "Your Rights Under GDPR",
        content: "As a data subject, you have the following rights:",
        list: [
          "Right to access your personal data",
          "Right to rectification of inaccurate data",
          "Right to erasure ('right to be forgotten')",
          "Right to restrict processing",
          "Right to data portability",
          "Right to object to processing",
          "Rights related to automated decision-making and profiling"
        ]
      },
      security: {
        title: "Data Security Measures",
        content: "We implement state-of-the-art security measures including encryption, access controls, and regular security audits to protect your personal data from unauthorized access, alteration, disclosure, or destruction."
      },
      contact: {
        title: "Contact Our Data Protection Officer",
        content: "For any questions about our GDPR compliance or to exercise your rights, please contact our Data Protection Officer at: privacy@kakr.org"
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
  title: 'GDPR Compliance - Kakr Labs',
  description: 'Kakr Labs GDPR compliance statement. Learn how we protect your data rights and comply with EU data protection regulations.',
  image: '/og/og-gdpr-compliance.png',
  keywords: ['gdpr compliance', 'kakr labs gdpr', 'data protection', 'eu privacy', 'gdpr rights']
})
</script>

