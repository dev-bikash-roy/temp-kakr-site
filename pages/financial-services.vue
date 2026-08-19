<script setup>
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()
const { setSEO } = useSEO()

setSEO({
  title: 'Financial Services Web3 Infrastructure - Secure Blockchain Solutions | Kakr Labs',
  description: 'Secure your financial operations with Kakr Labs\' Litecoin-based infrastructure. Reduce fraud, support compliance programs (PCI DSS, NYDFS), reduce costs with enterprise-grade blockchain solutions.',
  keywords: ['financial services blockchain', 'fintech Web3 infrastructure', 'banking blockchain solutions', 'financial compliance blockchain', 'payment fraud prevention', 'PCI DSS blockchain', 'NYDFS blockchain', 'cross-border payments'],
  type: 'service',
  image: '/og/og-financial-services.png',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Financial Services Web3 Infrastructure',
      description: 'Enterprise blockchain infrastructure for financial institutions with fraud prevention and support for regulatory compliance programs',
      provider: { '@type': 'Organization', name: 'Kakr Labs' },
      serviceType: 'Financial Technology Infrastructure',
      areaServed: 'Worldwide',
      audience: { '@type': 'Audience', audienceType: 'Financial Institutions' },
      offers: {
        '@type': 'Offer',
        name: 'Financial Blockchain Solutions',
        description: 'Fraud prevention, compliance-support tooling, and secure payment processing',
        category: 'Financial Technology'
      }
    }
  ]
})

const useCases = [
  { title: 'Secure Payment Processing', description: 'Payment processors implementing PTERI App\'s decentralized 2FA to reduce account takeovers and payment fraud.', iconBg: 'bg-gradient-to-br from-green-600 to-green-700', iconPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', points: ['Reduced payment-fraud exposure', 'Supports PCI DSS compliance programs'] },
  { title: 'Regulatory Compliance', description: 'Banks using PTERI Data to create immutable audit trails for regulatory compliance and reporting.', iconBg: 'bg-gradient-to-br from-green-600 to-green-800', iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', points: ['Supports NYDFS and PCI DSS programs', 'Faster audit preparation'] },
  { title: 'Cross-Border Payments', description: 'Remittance providers using Litecoin-based payments to reduce cross-border transaction costs and settlement times.', iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600', iconPath: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z', points: ['Lower processing fees', 'Settlement in minutes rather than days'] },
  { title: 'AI-Driven Risk Assessment', description: 'Lenders using PTERI Intelligence for secure, private AI processing that protects sensitive customer data.', iconBg: 'bg-gradient-to-br from-green-500 to-green-700', iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', points: ['Stronger risk-model inputs', 'Privacy-first design that supports GDPR programs'] },
  { title: 'DeFi Integration', description: 'Financial institutions integrating with DeFi protocols using PTERI Playground to build blockchain applications that fit their compliance programs.', iconBg: 'bg-gradient-to-br from-rose-500 to-red-600', iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', points: ['Faster development cycles', 'DeFi applications built to fit your compliance program'] },
  { title: 'Secure Customer Portals', description: 'Banks and investment firms securing customer portals with PTERI App\'s decentralized 2FA to prevent account takeovers.', iconBg: 'bg-gradient-to-br from-sky-500 to-blue-600', iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', points: ['Reduced account-takeover exposure', 'Reduced SIM-swap exposure'] }
]

const pteriProducts = [
  { name: 'PTERI App', description: 'Decentralized 2FA built on customer-controlled credentials, providing SIM-swap resistance and secure customer authentication.', iconBg: 'bg-gradient-to-br from-green-600 to-green-700', iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', points: ['Cryptographic proofs for identity verification', 'Reduces SIM-swap exposure', 'Simple REST API integration'] },
  { name: 'PTERI Data', description: 'Immutable blockchain records for transaction verification, regulatory compliance, and tamper-proof audit trails.', iconBg: 'bg-gradient-to-br from-green-600 to-green-800', iconPath: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4', points: ['Customer-controlled credentials for sensitive data', 'Low per-transaction fees', 'Proof-of-work secured since 2011'] },
  { name: 'PTERI Intelligence', description: 'AI-powered tools for risk assessment, fraud detection, and secure financial operations with privacy-preserving models.', iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600', iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', points: ['Privacy-preserving AI models', 'Anomaly detection for fraud prevention', 'Scalable for high-volume operations'] },
  { name: 'PTERI Playground', description: 'No-code development environment for building custom financial applications and integration workflows.', iconBg: 'bg-gradient-to-br from-green-500 to-green-700', iconPath: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z', points: ['Visual workflow builder', 'Pre-built financial templates', 'Faster development cycles'] }
]

const translations = computed(() => {
  const texts = {
    en: {
      title: 'Financial Services',
      subtitle: 'Solutions',
      description: 'In financial services, centralized credential stores and SIM-swap attacks demand stronger defenses. Kakr Labs delivers Litecoin-based solutions tailored for financial services, with proof-of-work security and low per-transaction fees.',
      compliance: 'Designed to support PCI DSS, NYDFS, and GDPR compliance programs',
      tryFree: 'Try Free 2FA API',
      contactSales: 'Contact Sales',
      ctaTitle: 'Ready to Secure Your Financial Operations?',
      ctaDescription: 'Start with our free 2FA API or explore a 3-month pilot at 50% off.',
      startFree: 'Start Free',
      benefitsTitle: 'Benefits for Financial Services',
      benefitsDescription: 'See how Kakr Labs solutions compare to traditional systems for financial institutions.',
      useCasesTitle: 'Financial Services Use Cases',
      useCasesDescription: 'How financial institutions are leveraging Kakr Labs solutions to solve real challenges.',
      pteriSuiteTitle: 'PTERI Suite for Financial Services',
      pteriSuiteDescription: 'Our comprehensive suite of tools designed specifically for financial institutions.'
    },
    de: {
      title: 'Finanzdienstleistungen',
      subtitle: 'Lösungen',
      description: 'In der Finanzbranche erfordern zentralisierte Anmeldedatenspeicher und SIM-Swap-Angriffe stärkere Abwehrmaßnahmen.',
      compliance: 'Entwickelt zur Unterstützung von PCI DSS-, NYDFS- und DSGVO-Compliance-Programmen',
      tryFree: 'Kostenlose 2FA-API testen',
      contactSales: 'Vertrieb kontaktieren',
      ctaTitle: 'Bereit, Ihre Finanzoperationen zu sichern?',
      ctaDescription: 'Beginnen Sie mit unserer kostenlosen 2FA-API oder erkunden Sie ein 3-Monats-Pilotprojekt mit 50% Rabatt.',
      startFree: 'Kostenlos starten',
      benefitsTitle: 'Vorteile für Finanzdienstleistungen',
      benefitsDescription: 'Sehen Sie, wie Kakr Labs-Lösungen im Vergleich zu traditionellen Systemen abschneiden.',
      useCasesTitle: 'Anwendungsfälle für Finanzdienstleistungen',
      useCasesDescription: 'Wie Finanzinstitute Kakr Labs-Lösungen nutzen, um echte Herausforderungen zu lösen.',
      pteriSuiteTitle: 'PTERI Suite für Finanzdienstleistungen',
      pteriSuiteDescription: 'Unsere umfassende Suite von Tools, die speziell für Finanzinstitute entwickelt wurden.'
    },
    es: {
      title: 'Servicios Financieros',
      subtitle: 'Soluciones',
      description: 'En los servicios financieros, los almacenes centralizados de credenciales y los ataques de intercambio de SIM exigen defensas más fuertes.',
      compliance: 'Diseñado para respaldar programas de cumplimiento de PCI DSS, NYDFS y GDPR',
      tryFree: 'Prueba API 2FA gratis',
      contactSales: 'Contactar Ventas',
      ctaTitle: '¿Listo para Asegurar sus Operaciones Financieras?',
      ctaDescription: 'Comience con nuestra API 2FA gratuita o explore un piloto de 3 meses con 50% de descuento.',
      startFree: 'Comenzar Gratis',
      benefitsTitle: 'Beneficios para Servicios Financieros',
      benefitsDescription: 'Vea cómo las soluciones de Kakr Labs se comparan con los sistemas tradicionales.',
      useCasesTitle: 'Casos de Uso de Servicios Financieros',
      useCasesDescription: 'Cómo las instituciones financieras están aprovechando las soluciones de Kakr Labs.',
      pteriSuiteTitle: 'Suite PTERI para Servicios Financieros',
      pteriSuiteDescription: 'Nuestro conjunto completo de herramientas diseñadas específicamente para instituciones financieras.'
    },
    ja: {
      title: '金融サービス',
      subtitle: 'ソリューション',
      description: '金融サービスでは、集中管理された認証情報ストアやSIMスワップ攻撃などの脆弱性により、より強力な防御が求められています。',
      compliance: 'PCI DSS、NYDFS、GDPRのコンプライアンス対応を支援する設計',
      tryFree: '無料2FA APIを試す',
      contactSales: '営業に連絡',
      ctaTitle: '金融業務を保護する準備はできていますか？',
      ctaDescription: '無料の2FA APIから始めるか、50%オフの3か月パイロットをお試しください。',
      startFree: '無料で開始',
      benefitsTitle: '金融サービスのメリット',
      benefitsDescription: 'Kakr Labsソリューションが金融機関向けの従来システムとどのように比較されるかをご覧ください。',
      useCasesTitle: '金融サービスのユースケース',
      useCasesDescription: '金融機関がKakr Labsソリューションを活用して実際の課題を解決する方法。',
      pteriSuiteTitle: '金融サービス向けPTERIスイート',
      pteriSuiteDescription: '金融機関向けに特別に設計された包括的なツールスイート。'
    },
    ar: {
      title: 'الخدمات المالية',
      subtitle: 'الحلول',
      description: 'في الخدمات المالية، تتطلب نقاط الضعف المركزية مثل مخازن بيانات الاعتماد المركزية وهجمات تبديل SIM دفاعات أقوى.',
      compliance: 'مصمم لدعم برامج الامتثال لـ PCI DSS وNYDFS وGDPR',
      tryFree: 'جرب API 2FA مجانًا',
      contactSales: 'اتصل بالمبيعات',
      ctaTitle: 'هل أنت مستعد لتأمين عملياتك المالية؟',
      ctaDescription: 'ابدأ بواجهة برمجة التطبيقات 2FA المجانية أو استكشف برنامج تجريبي لمدة 3 أشهر بخصم 50٪.',
      startFree: 'ابدأ مجانًا',
      benefitsTitle: 'فوائد الخدمات المالية',
      benefitsDescription: 'انظر كيف تقارن حلول Kakr Labs بالأنظمة التقليدية للمؤسسات المالية.',
      useCasesTitle: 'حالات استخدام الخدمات المالية',
      useCasesDescription: 'كيف تستفيد المؤسسات المالية من حلول Kakr Labs لحل التحديات الحقيقية.',
      pteriSuiteTitle: 'مجموعة PTERI للخدمات المالية',
      pteriSuiteDescription: 'مجموعتنا الشاملة من الأدوات المصممة خصيصًا للمؤسسات المالية.'
    }
  }
  return texts[locale.value] || texts.en
})
</script>

<template>
  <div class="bg-black">

    <!-- Hero -->
    <section class="relative pt-32 pb-36 lg:pt-44 lg:pb-48 overflow-hidden bg-gradient-to-b from-emerald-50 via-emerald-50/20 to-white dark:from-dark-900 dark:via-dark-900 dark:to-dark-900">
      <div class="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-100/40 dark:bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <svg class="absolute inset-0 h-full w-full opacity-[0.06] dark:opacity-[0.12] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="fs-grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M8 0H0V8" fill="none" stroke="currentColor" stroke-width=".25"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fs-grid)" class="text-white " />
      </svg>

      <div class="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div class="mx-auto max-w-4xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-8">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {{ translations.compliance }}
          </div>
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white  mb-6 leading-tight">
            {{ translations.title }}
            <span class="block bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
              {{ translations.subtitle }}
            </span>
          </h1>
          <p class="text-lg sm:text-xl text-white/70  leading-relaxed max-w-3xl mx-auto mb-10">
            {{ translations.description }}
          </p>
          <div class="flex flex-wrap gap-3 justify-center">
            <a
              href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/kakrplatforminc1697572308188.pteri-node-offer?tab=overview"
              target="_blank" rel="noopener"
              class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 transition shadow-md"
            >
              {{ translations.tryFree }}
            </a>
            <a
              href="/contact"
              class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white/90  border border-white/15  hover:bg-white/5 dark:hover:bg-white/10 transition"
            >
              {{ translations.contactSales }}
            </a>
          </div>
        </div>
      </div>

      <!-- Wave shape divider -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-20 sm:h-28">
          <path d="M0,20 C240,100 480,0 720,60 C960,120 1200,10 1440,50 L1440,100 L0,100 Z" class="fill-white dark:fill-dark-900" />
        </svg>
      </div>
    </section>

    <!-- Stats bar -->
    <section class="bg-black py-12 border-b border-white/8 ">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Lower</div>
            <div class="mt-1 text-sm text-white/50 ">Payment-Fraud Exposure</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Low</div>
            <div class="mt-1 text-sm text-white/50 ">Per-Transaction Fees</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-emerald-600 dark:text-emerald-400">2011</div>
            <div class="mt-1 text-sm text-white/50 ">Litecoin Mainnet Running Since</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Faster</div>
            <div class="mt-1 text-sm text-white/50 ">Compliance Reporting</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Cards -->
    <section class="bg-black py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center mb-16"data-aos="fade-up">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white ">Built for Financial Institutions</h2>
          <p class="mt-4 text-lg text-white/70  max-w-2xl mx-auto">Our solutions address fintech challenges like fraud, compliance, and high costs with Litecoin's reliable blockchain.</p>
        </div>
        <div class="grid gap-8 lg:grid-cols-3">
          <div class="bg-black rounded-3xl p-8 shadow-sm border border-white/8  hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-white  mb-3">Fraud Prevention in Payments</h3>
            <p class="text-white/70  mb-5 leading-relaxed">Protect transactions with PTERI App's decentralized 2FA and eSIM proofs.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm text-white/70 "><svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Reduce SIM-swap exposure</li>
              <li class="flex items-start gap-2 text-sm text-white/70 "><svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Low per-transaction fees for global remittances</li>
              <li class="flex items-start gap-2 text-sm text-white/70 "><svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Authentication that supports PCI DSS programs</li>
            </ul>
          </div>
          <div class="bg-black rounded-3xl p-8 shadow-sm border border-white/8  hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
            </div>
            <h3 class="text-xl font-bold text-white  mb-3">KYC & Identity Verification</h3>
            <p class="text-white/70  mb-5 leading-relaxed">Streamline onboarding with PTERI ID and immutable records via PTERI Data.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm text-white/70 "><svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Evidence and audit trails to support NYDFS programs</li>
              <li class="flex items-start gap-2 text-sm text-white/70 "><svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Customer-controlled credentials for sensitive verifications</li>
              <li class="flex items-start gap-2 text-sm text-white/70 "><svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>REST APIs for seamless banking integration</li>
            </ul>
          </div>
          <div class="bg-black rounded-3xl p-8 shadow-sm border border-white/8  hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-white  mb-3">Micropayments & DeFi</h3>
            <p class="text-white/70  mb-5 leading-relaxed">Enable cost-efficient micropayments for lending, insurance, and DeFi apps.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm text-white/70 "><svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Low fees for high-volume transactions</li>
              <li class="flex items-start gap-2 text-sm text-white/70 "><svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>PTERI Intelligence for AI-driven risk assessment</li>
              <li class="flex items-start gap-2 text-sm text-white/70 "><svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Scalable blockchain infrastructure APIs for DeFi applications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Comparison Table -->
    <section class="bg-black py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white ">{{ translations.benefitsTitle }}</h2>
          <p class="mt-4 text-lg text-white/70 ">{{ translations.benefitsDescription }}</p>
        </div>
        <ComparisonTable
          benefitLabel="Benefit"
          ourLabel="Kakr Labs"
          theirLabel="Traditional Systems"
          :rows="[
            { benefit: 'Fraud Exposure', ours: 'Cryptographic 2FA - no OTP to intercept', theirs: 'High SIM/phishing risks', highlight: true },
            { benefit: 'Cost Savings', ours: 'Low per-transaction fees', theirs: 'High processing fees', highlight: true },
            { benefit: 'Compliance', ours: 'Audit trails and evidence for PCI DSS and NYDFS programs', theirs: 'Manual audits', highlight: true },
            { benefit: 'Settlement Layer', ours: 'Litecoin mainnet, running since 2011', theirs: 'Frequent downtimes', highlight: true }
          ]"
        />
      </div>
    </section>

    <!-- Use Cases -->
    <section class="bg-black py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white ">{{ translations.useCasesTitle }}</h2>
          <p class="mt-4 text-lg text-white/70 ">{{ translations.useCasesDescription }}</p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="useCase in useCases" :key="useCase.title"
            class="bg-black rounded-2xl p-6 border border-white/8  shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" :class="useCase.iconBg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="useCase.iconPath" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white  mb-2">{{ useCase.title }}</h3>
            <p class="text-sm text-white/70  mb-4 leading-relaxed">{{ useCase.description }}</p>
            <ul class="space-y-1.5">
              <li v-for="point in useCase.points" :key="point" class="flex items-start gap-2 text-sm text-white/70 ">
                <svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials removed: entries were fabricated (placeholder personas and
         invented outcome quotes). Restore only with real, approved customer
         quotes, real names/roles, and permission to publish. -->

    <!-- PTERI Suite -->
    <section class="bg-black py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white ">{{ translations.pteriSuiteTitle }}</h2>
          <p class="mt-4 text-lg text-white/70 ">{{ translations.pteriSuiteDescription }}</p>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div v-for="product in pteriProducts" :key="product.name"
            class="bg-black rounded-2xl p-8 border border-white/8  shadow-sm hover:shadow-md transition-shadow duration-200">
            <div class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl" :class="product.iconBg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="product.iconPath" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white  mb-2">{{ product.name }}</h3>
            <p class="text-white/70  mb-5 leading-relaxed">{{ product.description }}</p>
            <ul class="space-y-2">
              <li v-for="point in product.points" :key="point" class="flex items-start gap-2 text-sm text-white/70 ">
                <svg class="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700 py-20">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">{{ translations.ctaTitle }}</h2>
        <p class="text-lg text-emerald-100 mb-8">{{ translations.ctaDescription }}</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="https://pteri.org/Register"
            target="_blank" rel="noopener"
            class="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-emerald-700 bg-[#0f0f0f] hover:bg-emerald-50 transition shadow-md"
          >
            {{ translations.startFree }}
          </a>
          <a
            href="/contact"
            class="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white border-2 border-white/60 hover:bg-white/10 transition"
          >
            {{ translations.contactSales }}
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

