<template>
  <div class="bg-black ">
    <!-- Hero -->
    <section class="relative overflow-hidden isolate bg-emerald-50 ">
      <!-- Background layers -->
      <div aria-hidden="true" class="pointer-events-none absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-white/80 dark:from-slate-950/70 dark:to-slate-900/80"></div>
        <div class="absolute -top-1/3 -left-1/4 h-[36rem] w-[36rem] rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-400/20"></div>
        <div class="absolute -bottom-1/3 -right-1/4 h-[36rem] w-[36rem] rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/15"></div>
        <svg class="absolute inset-0 h-full w-full opacity-[0.08] dark:opacity-[0.14]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="gov-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M8 0H0V8" fill="none" stroke="currentColor" stroke-width=".25"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gov-grid)" class="text-white "
                style="mask: radial-gradient(120% 90% at 50% 0%, #000 45%, transparent 100%); -webkit-mask: radial-gradient(120% 90% at 50% 0%, #000 45%, transparent 100%);" />
        </svg>
      </div>

      <div class="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 pt-28 md:pt-16">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white ">
          {{ translations.hero.title }}
        </h1>

        <p class="mt-6 max-w-3xl text-lg text-white/70  ">
          {{ translations.hero.description }}
        </p>

        <div class="mt-4 text-sm text-white/50 ">
          {{ translations.hero.compliance }}
        </div>

        <!-- Primary CTAs -->
        <div class="mt-6 flex flex-wrap gap-3">
          <a
            href="/contact"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white  bg-gradient-to-r from-emerald-300 to-emerald-400 hover:from-emerald-200 hover:to-emerald-300 transition"
          >
            {{ translations.hero.contactUs }}
          </a>

        
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <WhyKakrSection
      :industry="translations.whyKakr.industry"
      :description="translations.whyKakr.description"
    >
      <FeatureCard
        v-for="(feature, idx) in translations.whyKakr.features"
        :key="idx"
        :title="feature.title"
        :description="feature.description"
        :features="feature.points"
        :linkText="feature.linkText"
        :linkUrl="idx === 0 ? 'https://docs.kakr.ai/' : idx === 1 ? 'https://docs.kakr.ai/' : 'https://playground.pteri.org/'"
        :iconBgClass="idx === 0 ? 'bg-gradient-to-br from-green-600 to-green-700' : idx === 1 ? 'bg-gradient-to-br from-green-600 to-green-800' : 'bg-gradient-to-br from-emerald-500 to-teal-600'"
      >
        <template #icon>
          <svg v-if="idx === 0" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <svg v-else-if="idx === 1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>
        </template>
      </FeatureCard>
    </WhyKakrSection>

    <!-- Benefits Comparison Table -->
    <section class="bg-black py-16 /50 lg:py-24">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white  sm:text-4xl">
            {{ translations.benefits.title }}
          </h2>
          <p class="mt-4 text-lg text-white/70  ">
            {{ translations.benefits.description }}
          </p>
        </div>

        <div class="mt-12">
          <ComparisonTable
            :benefitLabel="translations.benefits.benefitLabel"
            :ourLabel="translations.benefits.ourLabel"
            :theirLabel="translations.benefits.theirLabel"
            :rows="translations.benefits.rows.map(row => ({ ...row, highlight: true }))"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials removed: entries were fabricated (placeholder personas and
         invented outcome quotes). Restore only with real, approved customer
         quotes, real names/roles, and permission to publish. -->

    <!-- Use Cases -->
    <section class="bg-black py-16  lg:py-24">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white  sm:text-4xl">
            {{ translations.useCases.title }}
          </h2>
          <p class="mt-4 text-lg text-white/70  ">
            {{ translations.useCases.description }}
          </p>
        </div>

        <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Dynamic Use Case Cards -->
          <div
            v-for="(useCase, idx) in translations.useCases.cases"
            :key="idx"
            class="rounded-2xl border border-white/10  bg-black p-6 shadow-sm dark:border-slate-800 /50"
          >
            <div 
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
              :class="idx === 0 ? 'bg-gradient-to-br from-green-600 to-green-700' : idx === 1 ? 'bg-gradient-to-br from-green-600 to-green-800' : idx === 2 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : idx === 3 ? 'bg-gradient-to-br from-green-500 to-green-700' : idx === 4 ? 'bg-gradient-to-br from-rose-500 to-red-600' : 'bg-gradient-to-br from-sky-500 to-blue-600'"
            >
              <svg v-if="idx === 0" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <svg v-else-if="idx === 1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <svg v-else-if="idx === 2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="idx === 3" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <svg v-else-if="idx === 4" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white ">{{ useCase.title }}</h3>
            <p class="text-white/70  ">
              {{ useCase.description }}
            </p>
            <ul class="mt-4 space-y-2">
              <li v-for="(feature, fIdx) in useCase.features" :key="fIdx" class="flex items-start">
                <svg class="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-sm text-white/70  ">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

import { useSEO } from '~/composables/useSEO'

const { setSEO } = useSEO()

setSEO({
  title: 'Government & Public Sector Solutions - Kakr Labs | Secure Web3 Infrastructure',
  description: 'Secure citizen services and support your NIST-aligned compliance program with Kakr Labs\' Litecoin-based infrastructure. Transparent, immutable records for the public sector.',
  image: '/og/og-government-public-sector.png',
})

const translations = computed(() => {
  const texts = {
    en: {
      hero: {
        title: 'Government & Public Sector Solutions',
        description: 'Government and public sector entities grapple with data breaches and regulatory demands. Kakr Labs provides Litecoin-based solutions with proof-of-work security and low per-transaction fees.',
        compliance: 'Designed to support NIST and GDPR compliance programs',
        contactUs: 'Contact Us'
      },
      whyKakr: {
        industry: 'Government & Public Sector',
        description: 'Our solutions address public sector challenges like transparency, secure access, and compliance with Litecoin\'s reliable blockchain.',
        features: [
          {
            title: 'Secure Citizen Services',
            description: 'Protect access to portals with PTERI App\'s decentralized 2FA.',
            points: ['Cut phishing exposure with cryptographic proofs', 'Built to support NIST government standards', 'REST APIs for integration with public systems'],
            linkText: 'Citizen Services Solutions'
          },
          {
            title: 'Immutable Audits & Reporting',
            description: 'Enable transparent reporting with PTERI Data\'s records.',
            points: ['Tamper-proof logs for audits and compliance', 'Audit trails and evidence to support regulatory programs', 'Low per-transaction fees for efficient operations'],
            linkText: 'Audit Solutions'
          },
          {
            title: 'Identity Verification & KYC',
            description: 'Streamline services with PTERI Intelligence\'s AI tools.',
            points: ['PTERI ID (2026) for secure KYC', 'Customer-controlled credentials for sensitive data', 'Scalable for large public networks'],
            linkText: 'Identity Solutions'
          }
        ]
      },
      benefits: {
        title: 'Benefits for Government & Public Sector',
        description: 'See how Kakr Labs solutions compare to traditional systems for government entities.',
        benefitLabel: 'Benefit',
        ourLabel: 'Kakr Labs',
        theirLabel: 'Traditional Systems',
        rows: [
          { benefit: 'Breach Exposure', ours: 'Cryptographic 2FA - no shared secret to steal', theirs: 'High data risks' },
          { benefit: 'Cost Savings', ours: 'Low per-transaction fees', theirs: 'High processing fees' },
          { benefit: 'Compliance', ours: 'Audit trails and evidence to support NIST and ISO programs', theirs: 'Manual audits' },
          { benefit: 'Settlement Layer', ours: 'Litecoin mainnet, running since 2011', theirs: 'System downtimes' }
        ]
      },
      useCases: {
        title: 'Government & Public Sector Use Cases',
        description: 'Discover how our solutions address specific challenges in the public sector.',
        cases: [
          {
            title: 'Secure Citizen Portals',
            description: 'Protect citizen data and access to government services with decentralized authentication that reduces credential-theft risk.',
            features: ['Reduced unauthorized-access exposure', 'Authentication built to NIST 800-63 guidance']
          },
          {
            title: 'Transparent Procurement',
            description: 'Create immutable records of government procurement processes to ensure transparency and prevent fraud.',
            features: ['Tamper-proof bid records', 'Auditable decision trails']
          },
          {
            title: 'Regulatory Compliance',
            description: 'Simplify compliance with NIST, FISMA, and other regulatory frameworks with automated verification and reporting.',
            features: ['Automated compliance reporting', 'Faster audit preparation']
          },
          {
            title: 'Records Management',
            description: 'Secure digital records with blockchain-based verification and tamper-proof storage for public documents.',
            features: ['Cryptographic proof of document integrity', 'Simplified FOIA request processing']
          },
          {
            title: 'Critical Infrastructure',
            description: 'Protect critical infrastructure with decentralized access controls and secure authentication systems.',
            features: ['Multi-factor authentication for critical systems', 'Resilient against network disruptions']
          },
          {
            title: 'Grant Management',
            description: 'Track and verify grant disbursements with transparent, immutable records of fund allocation and usage.',
            features: ['End-to-end fund tracking', 'Automated compliance reporting']
          }
        ]
      }
    },
    de: {
      hero: {
        title: 'Lösungen für Regierung & öffentlichen Sektor',
        description: 'Regierungs- und öffentliche Einrichtungen kämpfen mit Datenschutzverletzungen und regulatorischen Anforderungen. Kakr Labs bietet Litecoin-basierte Lösungen, seit 2011 durch Proof-of-Work gesichert, mit niedrigen Transaktionsgebühren.',
        compliance: 'Entwickelt zur Unterstützung von NIST- und DSGVO-Compliance-Programmen',
        contactUs: 'Kontaktieren Sie uns'
      },
      whyKakr: {
        industry: 'Regierung & öffentlicher Sektor',
        description: 'Unsere Lösungen adressieren Herausforderungen des öffentlichen Sektors wie Transparenz, sicheren Zugang und Compliance mit Litecoins zuverlässiger Blockchain.',
        features: [
          {
            title: 'Sichere Bürgerdienste',
            description: 'Schützen Sie den Zugang zu Portalen mit der dezentralen 2FA von PTERI App.',
            points: ['Reduzieren Sie Phishing-Risiken mit kryptografischen Beweisen', 'Ausgelegt auf NIST-Regierungsstandards', 'REST-APIs für Integration mit öffentlichen Systemen'],
            linkText: 'Bürgerdienst-Lösungen'
          },
          {
            title: 'Unveränderliche Audits & Berichte',
            description: 'Ermöglichen Sie transparente Berichterstattung mit PTERI Datas Aufzeichnungen.',
            points: ['Manipulationssichere Protokolle für Audits und Compliance', 'Prüfpfade und Nachweise zur Unterstützung regulatorischer Programme', 'Niedrige Transaktionsgebühren für effiziente Operationen'],
            linkText: 'Audit-Lösungen'
          },
          {
            title: 'Identitätsverifizierung & KYC',
            description: 'Optimieren Sie Dienste mit den KI-Tools von PTERI Intelligence.',
            points: ['PTERI ID (2026) für sicheres KYC', 'Kundengesteuerte Zugangsdaten für vertrauliche Daten', 'Skalierbar für große öffentliche Netzwerke'],
            linkText: 'Identitätslösungen'
          }
        ]
      },
      benefits: {
        title: 'Vorteile für Regierung & öffentlichen Sektor',
        description: 'Sehen Sie, wie Kakr Labs-Lösungen im Vergleich zu traditionellen Systemen für Regierungseinrichtungen abschneiden.',
        benefitLabel: 'Vorteil',
        ourLabel: 'Kakr Labs',
        theirLabel: 'Traditionelle Systeme',
        rows: [
          { benefit: 'Risiko von Verstößen', ours: 'Kryptografische 2FA - kein gemeinsames Geheimnis', theirs: 'Hohe Datenrisiken' },
          { benefit: 'Kosteneinsparungen', ours: 'Niedrige Transaktionsgebühren', theirs: 'Hohe Bearbeitungsgebühren' },
          { benefit: 'Compliance', ours: 'Prüfpfade und Nachweise zur Unterstützung von NIST- und ISO-Programmen', theirs: 'Manuelle Audits' },
          { benefit: 'Settlement-Layer', ours: 'Litecoin-Mainnet, in Betrieb seit 2011', theirs: 'Systemausfälle' }
        ]
      },
      useCases: {
        title: 'Anwendungsfälle für Regierung & öffentlichen Sektor',
        description: 'Entdecken Sie, wie unsere Lösungen spezifische Herausforderungen im öffentlichen Sektor adressieren.',
        cases: [
          {
            title: 'Sichere Bürgerportale',
            description: 'Schützen Sie Bürgerdaten und Zugang zu Regierungsdiensten mit dezentraler Authentifizierung, die das Risiko von Credential-Diebstahl reduziert.',
            features: ['Geringeres Risiko unbefugter Zugriffe', 'Authentifizierung nach NIST 800-63-Leitlinien']
          },
          {
            title: 'Transparente Beschaffung',
            description: 'Erstellen Sie unveränderliche Aufzeichnungen von Regierungsbeschaffungsprozessen, um Transparenz zu gewährleisten und Betrug zu verhindern.',
            features: ['Manipulationssichere Angebotsaufzeichnungen', 'Nachvollziehbare Entscheidungswege']
          },
          {
            title: 'Regulatorische Compliance',
            description: 'Vereinfachen Sie die Compliance mit NIST, FISMA und anderen regulatorischen Frameworks durch automatisierte Verifizierung und Berichterstattung.',
            features: ['Automatisierte Compliance-Berichterstattung', 'Schnellere Audit-Vorbereitung']
          },
          {
            title: 'Aktenverwaltung',
            description: 'Sichern Sie digitale Aufzeichnungen mit Blockchain-basierter Verifizierung und manipulationssicherer Speicherung für öffentliche Dokumente.',
            features: ['Kryptografischer Nachweis der Dokumentenintegrität', 'Vereinfachte FOIA-Antragsbearbeitung']
          },
          {
            title: 'Kritische Infrastruktur',
            description: 'Schützen Sie kritische Infrastruktur mit dezentralen Zugriffskontrollen und sicheren Authentifizierungssystemen.',
            features: ['Multi-Faktor-Authentifizierung für kritische Systeme', 'Widerstandsfähig gegen Netzwerkstörungen']
          },
          {
            title: 'Zuschussverwaltung',
            description: 'Verfolgen und verifizieren Sie Zuschussauszahlungen mit transparenten, unveränderlichen Aufzeichnungen der Mittelzuweisung und -verwendung.',
            features: ['End-to-End-Fondsverfolgung', 'Automatisierte Compliance-Berichterstattung']
          }
        ]
      }
    },
    es: {
      hero: {
        title: 'Soluciones para Gobierno y Sector Público',
        description: 'Las entidades gubernamentales y del sector público luchan con brechas de datos y demandas regulatorias. Kakr Labs proporciona soluciones basadas en Litecoin, protegidas por prueba de trabajo desde 2011, con tarifas bajas por transacción.',
        compliance: 'Diseñado para respaldar programas de cumplimiento de NIST y GDPR',
        contactUs: 'Contáctenos'
      },
      whyKakr: {
        industry: 'Gobierno y Sector Público',
        description: 'Nuestras soluciones abordan desafíos del sector público como transparencia, acceso seguro y cumplimiento con la blockchain confiable de Litecoin.',
        features: [
          {
            title: 'Servicios Ciudadanos Seguros',
            description: 'Proteja el acceso a portales con la 2FA descentralizada de PTERI App.',
            points: ['Reduzca la exposición al phishing con pruebas criptográficas', 'Diseñado para respaldar los estándares NIST', 'APIs REST para integración con sistemas públicos'],
            linkText: 'Soluciones de Servicios Ciudadanos'
          },
          {
            title: 'Auditorías e Informes Inmutables',
            description: 'Habilite informes transparentes con los registros de PTERI Data.',
            points: ['Registros a prueba de manipulación para auditorías y cumplimiento', 'Pistas de auditoría y evidencia para respaldar programas regulatorios', 'Tarifas bajas por transacción para operaciones eficientes'],
            linkText: 'Soluciones de Auditoría'
          },
          {
            title: 'Verificación de Identidad y KYC',
            description: 'Agilice servicios con las herramientas de IA de PTERI Intelligence.',
            points: ['PTERI ID (2026) para KYC seguro', 'Credenciales controladas por el cliente para datos confidenciales', 'Escalable para grandes redes públicas'],
            linkText: 'Soluciones de Identidad'
          }
        ]
      },
      benefits: {
        title: 'Beneficios para Gobierno y Sector Público',
        description: 'Vea cómo las soluciones de Kakr Labs se comparan con los sistemas tradicionales para entidades gubernamentales.',
        benefitLabel: 'Beneficio',
        ourLabel: 'Kakr Labs',
        theirLabel: 'Sistemas Tradicionales',
        rows: [
          { benefit: 'Exposición a Brechas', ours: '2FA criptográfica - sin secreto compartido', theirs: 'Altos riesgos de datos' },
          { benefit: 'Ahorro de Costos', ours: 'Tarifas bajas por transacción', theirs: 'Altas tarifas de procesamiento' },
          { benefit: 'Cumplimiento', ours: 'Pistas de auditoría y evidencia para respaldar programas NIST e ISO', theirs: 'Auditorías manuales' },
          { benefit: 'Capa de Liquidación', ours: 'Mainnet de Litecoin, en marcha desde 2011', theirs: 'Tiempos de inactividad del sistema' }
        ]
      },
      useCases: {
        title: 'Casos de Uso de Gobierno y Sector Público',
        description: 'Descubra cómo nuestras soluciones abordan desafíos específicos en el sector público.',
        cases: [
          {
            title: 'Portales Ciudadanos Seguros',
            description: 'Proteja los datos de los ciudadanos y el acceso a los servicios gubernamentales con autenticación descentralizada que reduce el riesgo de robo de credenciales.',
            features: ['Menor exposición a accesos no autorizados', 'Autenticación alineada con NIST 800-63']
          },
          {
            title: 'Adquisiciones Transparentes',
            description: 'Cree registros inmutables de procesos de adquisiciones gubernamentales para garantizar transparencia y prevenir fraude.',
            features: ['Registros de ofertas a prueba de manipulación', 'Rastros de decisiones auditables']
          },
          {
            title: 'Cumplimiento Regulatorio',
            description: 'Simplifique el cumplimiento con NIST, FISMA y otros marcos regulatorios con verificación e informes automatizados.',
            features: ['Informes de cumplimiento automatizados', 'Preparación de auditorías más rápida']
          },
          {
            title: 'Gestión de Registros',
            description: 'Asegure registros digitales con verificación basada en blockchain y almacenamiento a prueba de manipulación para documentos públicos.',
            features: ['Prueba criptográfica de integridad de documentos', 'Procesamiento simplificado de solicitudes FOIA']
          },
          {
            title: 'Infraestructura Crítica',
            description: 'Proteja la infraestructura crítica con controles de acceso descentralizados y sistemas de autenticación seguros.',
            features: ['Autenticación multifactor para sistemas críticos', 'Resistente a interrupciones de red']
          },
          {
            title: 'Gestión de Subvenciones',
            description: 'Rastree y verifique desembolsos de subvenciones con registros transparentes e inmutables de asignación y uso de fondos.',
            features: ['Seguimiento de fondos de extremo a extremo', 'Informes de cumplimiento automatizados']
          }
        ]
      }
    },
    ja: {
      hero: {
        title: '政府・公共セクターソリューション',
        description: '政府および公共セクターの組織は、データ侵害と規制要求に直面しています。Kakr Labsは、2011年以来プルーフ・オブ・ワークで保護され、低いトランザクション手数料を実現するLitecoinベースのソリューションを提供します。',
        compliance: 'NIST、GDPRのコンプライアンス対応を支援する設計',
        contactUs: 'お問い合わせ'
      },
      whyKakr: {
        industry: '政府・公共セクター',
        description: '当社のソリューションは、Litecoinの信頼性の高いブロックチェーンを使用して、透明性、安全なアクセス、コンプライアンスなどの公共セクターの課題に対処します。',
        features: [
          {
            title: '安全な市民サービス',
            description: 'PTERI Appの分散型2FAでポータルへのアクセスを保護します。',
            points: ['暗号証明でフィッシングのリスクを低減', '政府標準のNISTガイダンスに対応', '公共システムとの統合のためのREST API'],
            linkText: '市民サービスソリューション'
          },
          {
            title: '不変の監査とレポート',
            description: 'PTERI Dataの記録で透明なレポートを可能にします。',
            points: ['監査とコンプライアンスのための改ざん防止ログ', '規制プログラムを支援する監査証跡とエビデンス', '効率的な運用のための低いトランザクション手数料'],
            linkText: '監査ソリューション'
          },
          {
            title: '本人確認とKYC',
            description: 'PTERI IntelligenceのAIツールでサービスを合理化します。',
            points: ['安全なKYCのためのPTERI ID（2026）', '機密データのための顧客管理型認証情報', '大規模な公共ネットワークに対応可能'],
            linkText: '本人確認ソリューション'
          }
        ]
      },
      benefits: {
        title: '政府・公共セクターのメリット',
        description: 'Kakr Labsのソリューションが政府機関の従来のシステムとどのように比較されるかをご覧ください。',
        benefitLabel: 'メリット',
        ourLabel: 'Kakr Labs',
        theirLabel: '従来システム',
        rows: [
          { benefit: '侵害リスク', ours: '暗号2FA - 共有する秘密情報なし', theirs: '高いデータリスク' },
          { benefit: 'コスト削減', ours: '低いトランザクション手数料', theirs: '高い処理料金' },
          { benefit: 'コンプライアンス', ours: 'NISTやISOのプログラムを支援する監査証跡とエビデンス', theirs: '手動監査' },
          { benefit: '決済レイヤー', ours: 'Litecoinメインネット（2011年から稼働）', theirs: 'システムダウンタイム' }
        ]
      },
      useCases: {
        title: '政府・公共セクターのユースケース',
        description: '当社のソリューションが公共セクターの特定の課題にどのように対処するかをご覧ください。',
        cases: [
          {
            title: '安全な市民ポータル',
            description: '分散型認証で市民データと政府サービスへのアクセスを保護し、資格情報盗難のリスクを低減します。',
            features: ['不正アクセスのリスク低減', 'NIST 800-63ガイダンスに沿った認証']
          },
          {
            title: '透明な調達',
            description: '政府調達プロセスの不変の記録を作成し、透明性を確保し、詐欺を防止します。',
            features: ['改ざん防止入札記録', '監査可能な意思決定の証跡']
          },
          {
            title: '規制コンプライアンス',
            description: '自動検証とレポートにより、NIST、FISMAおよびその他の規制フレームワークへのコンプライアンスを簡素化します。',
            features: ['自動コンプライアンスレポート', '監査準備の迅速化']
          },
          {
            title: '記録管理',
            description: 'ブロックチェーンベースの検証と公文書の改ざん防止ストレージでデジタル記録を保護します。',
            features: ['文書の整合性の暗号証明', 'FOIA要求処理の簡素化']
          },
          {
            title: '重要インフラ',
            description: '分散型アクセス制御と安全な認証システムで重要インフラを保護します。',
            features: ['重要システムの多要素認証', 'ネットワーク障害に対する耐性']
          },
          {
            title: '助成金管理',
            description: '資金配分と使用の透明で不変の記録で助成金の支払いを追跡および検証します。',
            features: ['エンドツーエンドの資金追跡', '自動コンプライアンスレポート']
          }
        ]
      }
    },
    ar: {
      hero: {
        title: 'حلول الحكومة والقطاع العام',
        description: 'تتصارع الكيانات الحكومية وقطاع العام مع اختراقات البيانات والمتطلبات التنظيمية. تقدم Kakr Labs حلولاً قائمة على Litecoin، مؤمَّنة بإثبات العمل منذ عام 2011، مع رسوم منخفضة لكل معاملة.',
        compliance: 'مصمم لدعم برامج الامتثال لـ NIST وGDPR',
        contactUs: 'اتصل بنا'
      },
      whyKakr: {
        industry: 'الحكومة والقطاع العام',
        description: 'تعالج حلولنا تحديات القطاع العام مثل الشفافية والوصول الآمن والامتثال باستخدام blockchain الموثوق من Litecoin.',
        features: [
          {
            title: 'خدمات المواطنين الآمنة',
            description: 'احمِ الوصول إلى البوابات باستخدام مصادقة 2FA اللامركزية من PTERI App.',
            points: ['تقليل التعرض للتصيد الاحتيالي باستخدام الإثباتات التشفيرية', 'مصمم لدعم معايير NIST الحكومية', 'واجهات برمجة تطبيقات REST للتكامل مع الأنظمة العامة'],
            linkText: 'حلول خدمات المواطنين'
          },
          {
            title: 'عمليات تدقيق وتقارير غير قابلة للتغيير',
            description: 'تمكين التقارير الشفافة باستخدام سجلات PTERI Data.',
            points: ['سجلات مقاومة للتلاعب للتدقيق والامتثال', 'مسارات تدقيق وأدلة لدعم البرامج التنظيمية', 'رسوم منخفضة لكل معاملة للعمليات الفعالة'],
            linkText: 'حلول التدقيق'
          },
          {
            title: 'التحقق من الهوية وKYC',
            description: 'تبسيط الخدمات باستخدام أدوات الذكاء الاصطناعي من PTERI Intelligence.',
            points: ['PTERI ID (2026) لـ KYC آمن', 'بيانات اعتماد يتحكم بها العميل للبيانات السرية', 'قابل للتوسع للشبكات العامة الكبيرة'],
            linkText: 'حلول الهوية'
          }
        ]
      },
      benefits: {
        title: 'فوائد الحكومة والقطاع العام',
        description: 'شاهد كيف تقارن حلول Kakr Labs بالأنظمة التقليدية للكيانات الحكومية.',
        benefitLabel: 'الفائدة',
        ourLabel: 'Kakr Labs',
        theirLabel: 'الأنظمة التقليدية',
        rows: [
          { benefit: 'التعرض للاختراقات', ours: '2FA تشفيرية - دون سر مشترك', theirs: 'مخاطر بيانات عالية' },
          { benefit: 'توفير التكاليف', ours: 'رسوم منخفضة لكل معاملة', theirs: 'رسوم معالجة عالية' },
          { benefit: 'الامتثال', ours: 'مسارات تدقيق وأدلة لدعم برامج NIST وISO', theirs: 'عمليات تدقيق يدوية' },
          { benefit: 'طبقة التسوية', ours: 'شبكة Litecoin الرئيسية، تعمل منذ 2011', theirs: 'أوقات تعطل النظام' }
        ]
      },
      useCases: {
        title: 'حالات استخدام الحكومة والقطاع العام',
        description: 'اكتشف كيف تعالج حلولنا التحديات المحددة في القطاع العام.',
        cases: [
          {
            title: 'بوابات المواطنين الآمنة',
            description: 'احمِ بيانات المواطنين والوصول إلى الخدمات الحكومية باستخدام المصادقة اللامركزية التي تقضي على سرقة بيانات الاعتماد.',
            features: ['تقليل التعرض للوصول غير المصرح به', 'مصادقة تتوافق مع إرشادات NIST 800-63']
          },
          {
            title: 'المشتريات الشفافة',
            description: 'إنشاء سجلات غير قابلة للتغيير لعمليات المشتريات الحكومية لضمان الشفافية ومنع الاحتيال.',
            features: ['سجلات عطاءات مقاومة للتلاعب', 'مسارات قرارات قابلة للتدقيق']
          },
          {
            title: 'الامتثال التنظيمي',
            description: 'تبسيط الامتثال مع NIST وFISMA وأطر تنظيمية أخرى من خلال التحقق والتقارير الآلية.',
            features: ['تقارير امتثال آلية', 'إعداد أسرع للتدقيق']
          },
          {
            title: 'إدارة السجلات',
            description: 'تأمين السجلات الرقمية باستخدام التحقق القائم على blockchain والتخزين المقاوم للتلاعب للوثائق العامة.',
            features: ['إثبات تشفيري لسلامة الوثائق', 'معالجة مبسطة لطلبات FOIA']
          },
          {
            title: 'البنية التحتية الحرجة',
            description: 'حماية البنية التحتية الحرجة باستخدام ضوابط الوصول اللامركزية وأنظمة المصادقة الآمنة.',
            features: ['مصادقة متعددة العوامل للأنظمة الحرجة', 'مرنة ضد اضطرابات الشبكة']
          },
          {
            title: 'إدارة المنح',
            description: 'تتبع والتحقق من صرف المنح باستخدام سجلات شفافة وغير قابلة للتغيير لتخصيص واستخدام الأموال.',
            features: ['تتبع الأموال من البداية إلى النهاية', 'تقارير امتثال آلية']
          }
        ]
      }
    }
  }
  return texts[locale.value] || texts.en
})
</script>
