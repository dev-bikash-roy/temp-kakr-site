<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()
const { setSEO } = useSEO()

setSEO({
  title: 'Telecom & eSIM Web3 Infrastructure - Secure Mobile Solutions | Kakr Labs',
  description: 'Web3 infrastructure for telecom and eSIM providers. Secure mobile identity, fraud prevention, and decentralized authentication solutions on the Litecoin blockchain, proof-of-work secured since 2011.',
  keywords: ['telecom blockchain', 'eSIM Web3 solutions', 'mobile identity', 'telecom infrastructure', 'mobile security', 'eSIM technology', 'telecom fraud prevention'],
  type: 'service',
  image: '/telecom-esim-og.jpg',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Telecom & eSIM Web3 Infrastructure',
      description: 'Secure blockchain infrastructure for telecom and eSIM providers',
      provider: {
        '@type': 'Organization',
        name: 'Kakr Labs'
      },
      serviceType: 'Telecommunications Infrastructure',
      areaServed: 'Worldwide',
      audience: {
        '@type': 'Audience',
        audienceType: 'Telecom and eSIM Providers'
      }
    }
  ]
})

const translations = computed(() => {
  const texts = {
    en: {
      badge: 'Telecom & eSIM Solutions',
      heroTitle: 'Secure Telecom Infrastructure',
      heroDescription: 'Telecom providers battle SIM-swap fraud and high authentication costs, alongside the breach risk of centralized credential stores. Kakr Labs offers Litecoin-based solutions with proof-of-work security and low per-transaction fees.',
      compliance: 'Designed to support your GDPR compliance program',
      startTrial: 'Start Free Trial',
      exploreSolutions: 'Explore Solutions',
      whyTitle: 'Why Kakr Labs for Telecom & eSIM',
      whyDescription: 'Our solutions solve telecom challenges like fraud, subscriber security, and integration with Litecoin\'s reliable blockchain.',
      fraudTitle: 'Fraud Prevention & SIM Swap Protection',
      fraudDescription: 'Protect users with PTERI App\'s decentralized 2FA and eSIM proofs.',
      esimTitle: 'Secure eSIM Management',
      esimDescription: 'Enable tamper-proof eSIM provisioning with PTERI Data.',
      verificationTitle: 'Subscriber Verification & Authentication',
      verificationDescription: 'Streamline logins with PTERI Intelligence\'s AI tools.',
      benefitsTitle: 'Benefits for Telecom & eSIM',
      benefitsDescription: 'See how Kakr Labs solutions compare to traditional systems for telecom providers.',
      ctaTitle: 'Ready to Secure Telecom?',
      ctaDescription: 'Start with our free 2FA API or explore a 3-month pilot at 50% off.',
      startFree: 'Start Free Trial',
      schedulePilot: 'Schedule Pilot Program',
      ctaFooter: 'Kakr Labs: Secure Web3 Innovation for Telecom',
      pteriSuiteTitle: 'Our PTERI Suite for Telecom',
      pteriSuiteDescription: 'A comprehensive set of tools designed specifically for telecom and eSIM providers.',
      pteriWalletTitle: 'PTERI App',
      pteriWalletDescription: 'Decentralized 2FA built on customer-controlled credentials, providing SIM-swap resistance and secure subscriber authentication.',
      pteriDataTitle: 'PTERI Data',
      pteriDataDescription: 'Immutable blockchain records for eSIM provisioning, subscriber identity management, and tamper-proof audit trails.'
    },
    de: {
      badge: 'Telekommunikation & eSIM Lösungen',
      heroTitle: 'Sichere Telekommunikationsinfrastruktur',
      heroDescription: 'Telekommunikationsanbieter kämpfen mit SIM-Swap-Betrug und hohen Authentifizierungskosten sowie mit dem Risiko zentralisierter Anmeldedatenspeicher. Kakr Labs bietet Litecoin-basierte Lösungen, seit 2011 durch Proof-of-Work gesichert, mit niedrigen Transaktionsgebühren.',
      compliance: 'Entwickelt zur Unterstützung Ihres DSGVO-Compliance-Programms',
      startTrial: 'Kostenlose Testversion starten',
      exploreSolutions: 'Lösungen erkunden',
      whyTitle: 'Warum Kakr Labs für Telekommunikation & eSIM',
      whyDescription: 'Unsere Lösungen lösen Telekommunikationsherausforderungen wie Betrug, Teilnehmersicherheit und Integration mit Litecoins zuverlässiger Blockchain.',
      fraudTitle: 'Betrugsprävention & SIM-Swap-Schutz',
      fraudDescription: 'Schützen Sie Benutzer mit der dezentralen 2FA und eSIM-Nachweisen von PTERI App.',
      esimTitle: 'Sichere eSIM-Verwaltung',
      esimDescription: 'Ermöglichen Sie manipulationssichere eSIM-Bereitstellung mit PTERI Data.',
      verificationTitle: 'Teilnehmerverifizierung & Authentifizierung',
      verificationDescription: 'Optimieren Sie Anmeldungen mit den KI-Tools von PTERI Intelligence.',
      benefitsTitle: 'Vorteile für Telekommunikation & eSIM',
      benefitsDescription: 'Sehen Sie, wie Kakr Labs-Lösungen im Vergleich zu traditionellen Systemen für Telekommunikationsanbieter abschneiden.',
      ctaTitle: 'Bereit, Telekommunikation zu sichern?',
      ctaDescription: 'Beginnen Sie mit unserer kostenlosen 2FA-API oder erkunden Sie ein 3-Monats-Pilotprojekt mit 50% Rabatt.',
      startFree: 'Kostenlos starten',
      schedulePilot: 'Pilotprogramm planen',
      ctaFooter: 'Kakr Labs: Sichere Web3-Innovation für Telekommunikation',
      pteriSuiteTitle: 'Unsere PTERI Suite für Telekommunikation',
      pteriSuiteDescription: 'Ein umfassendes Set von Tools, das speziell für Telekommunikations- und eSIM-Anbieter entwickelt wurde.',
      pteriWalletTitle: 'PTERI App',
      pteriWalletDescription: 'Dezentrale 2FA auf Basis kundenkontrollierter Anmeldedaten - mit SIM-Swap-Resistenz und sicherer Teilnehmerauthentifizierung.',
      pteriDataTitle: 'PTERI Data',
      pteriDataDescription: 'Unveränderliche Blockchain-Aufzeichnungen für eSIM-Bereitstellung, Teilnehmeridentitätsverwaltung und manipulationssichere Prüfpfade.'
    },
    es: {
      badge: 'Soluciones de Telecomunicaciones y eSIM',
      heroTitle: 'Infraestructura de Telecomunicaciones Segura',
      heroDescription: 'Los proveedores de telecomunicaciones luchan contra el fraude de intercambio de SIM, los altos costos de autenticación y el riesgo de brechas en los almacenes centralizados de credenciales. Kakr Labs ofrece soluciones basadas en Litecoin, protegidas por prueba de trabajo desde 2011, con tarifas bajas por transacción.',
      compliance: 'Diseñado para respaldar su programa de cumplimiento del GDPR',
      startTrial: 'Iniciar prueba gratuita',
      exploreSolutions: 'Explorar soluciones',
      whyTitle: 'Por qué Kakr Labs para Telecomunicaciones y eSIM',
      whyDescription: 'Nuestras soluciones resuelven desafíos de telecomunicaciones como fraude, seguridad de suscriptores e integración con la blockchain confiable de Litecoin.',
      fraudTitle: 'Prevención de Fraude y Protección contra Intercambio de SIM',
      fraudDescription: 'Proteja a los usuarios con la 2FA descentralizada y las pruebas eSIM de PTERI App.',
      esimTitle: 'Gestión Segura de eSIM',
      esimDescription: 'Habilite el aprovisionamiento de eSIM a prueba de manipulaciones con PTERI Data.',
      verificationTitle: 'Verificación y Autenticación de Suscriptores',
      verificationDescription: 'Optimice los inicios de sesión con las herramientas de IA de PTERI Intelligence.',
      benefitsTitle: 'Beneficios para Telecomunicaciones y eSIM',
      benefitsDescription: 'Vea cómo las soluciones de Kakr Labs se comparan con los sistemas tradicionales para proveedores de telecomunicaciones.',
      ctaTitle: '¿Listo para Asegurar las Telecomunicaciones?',
      ctaDescription: 'Comience con nuestra API 2FA gratuita o explore un piloto de 3 meses con 50% de descuento.',
      startFree: 'Iniciar prueba gratuita',
      schedulePilot: 'Programar Programa Piloto',
      ctaFooter: 'Kakr Labs: Innovación Web3 Segura para Telecomunicaciones',
      pteriSuiteTitle: 'Nuestra Suite PTERI para Telecomunicaciones',
      pteriSuiteDescription: 'Un conjunto completo de herramientas diseñadas específicamente para proveedores de telecomunicaciones y eSIM.',
      pteriWalletTitle: 'PTERI App',
      pteriWalletDescription: '2FA descentralizada basada en credenciales controladas por el cliente, con resistencia al intercambio de SIM y autenticación segura de suscriptores.',
      pteriDataTitle: 'PTERI Data',
      pteriDataDescription: 'Registros blockchain inmutables para aprovisionamiento de eSIM, gestión de identidad de suscriptores y pistas de auditoría a prueba de manipulaciones.'
    },
    ja: {
      badge: '通信・eSIMソリューション',
      heroTitle: '安全な通信インフラストラクチャ',
      heroDescription: '通信事業者は、SIMスワップ詐欺や高い認証コスト、そして集中管理された認証情報ストアの侵害リスクと戦っています。Kakr Labsは、2011年以来プルーフ・オブ・ワークで保護され、低いトランザクション手数料を実現するLitecoinベースのソリューションを提供します。',
      compliance: 'GDPRのコンプライアンス対応を支援する設計',
      startTrial: '無料トライアルを開始',
      exploreSolutions: 'ソリューションを探索',
      whyTitle: '通信・eSIMにKakr Labsを選ぶ理由',
      whyDescription: '当社のソリューションは、詐欺、加入者セキュリティ、Litecoinの信頼性の高いブロックチェーンとの統合などの通信課題を解決します。',
      fraudTitle: '詐欺防止＆SIMスワップ保護',
      fraudDescription: 'PTERI Appの分散型2FAとeSIM証明でユーザーを保護します。',
      esimTitle: '安全なeSIM管理',
      esimDescription: 'PTERI Dataで改ざん防止のeSIMプロビジョニングを実現します。',
      verificationTitle: '加入者検証＆認証',
      verificationDescription: 'PTERI IntelligenceのAIツールでログインを効率化します。',
      benefitsTitle: '通信・eSIMのメリット',
      benefitsDescription: 'Kakr Labsソリューションが通信事業者向けの従来システムとどのように比較されるかをご覧ください。',
      ctaTitle: '通信を保護する準備はできていますか？',
      ctaDescription: '無料の2FA APIから始めるか、50%オフの3か月パイロットをお試しください。',
      startFree: '無料トライアルを開始',
      schedulePilot: 'パイロットプログラムをスケジュール',
      ctaFooter: 'Kakr Labs：通信のための安全なWeb3イノベーション',
      pteriSuiteTitle: '通信向けPTERIスイート',
      pteriSuiteDescription: '通信およびeSIMプロバイダー向けに特別に設計された包括的なツールセット。',
      pteriWalletTitle: 'PTERI App',
      pteriWalletDescription: '顧客が管理する認証情報に基づく分散型2FAで、SIMスワップ耐性と安全な加入者認証を提供します。',
      pteriDataTitle: 'PTERI Data',
      pteriDataDescription: 'eSIMプロビジョニング、加入者ID管理、改ざん防止監査証跡のための不変のブロックチェーン記録。'
    },
    ar: {
      badge: 'حلول الاتصالات وeSIM',
      heroTitle: 'بنية تحتية آمنة للاتصالات',
      heroDescription: 'يحارب مزودو الاتصالات احتيال تبديل SIM وتكاليف المصادقة العالية ومخاطر اختراق مخازن بيانات الاعتماد المركزية. تقدم Kakr Labs حلولاً قائمة على Litecoin، مؤمَّنة بإثبات العمل منذ عام 2011، مع رسوم منخفضة لكل معاملة.',
      compliance: 'مصمم لدعم برنامج الامتثال لـ GDPR الخاص بك',
      startTrial: 'ابدأ تجربة مجانية',
      exploreSolutions: 'استكشف الحلول',
      whyTitle: 'لماذا Kakr Labs للاتصالات وeSIM',
      whyDescription: 'تحل حلولنا تحديات الاتصالات مثل الاحتيال وأمان المشتركين والتكامل مع blockchain Litecoin الموثوق.',
      fraudTitle: 'منع الاحتيال وحماية تبديل SIM',
      fraudDescription: 'احمِ المستخدمين باستخدام 2FA اللامركزية وإثباتات eSIM من PTERI App.',
      esimTitle: 'إدارة eSIM الآمنة',
      esimDescription: 'تمكين توفير eSIM مقاوم للتلاعب باستخدام PTERI Data.',
      verificationTitle: 'التحقق من المشتركين والمصادقة',
      verificationDescription: 'تبسيط تسجيلات الدخول باستخدام أدوات الذكاء الاصطناعي من PTERI Intelligence.',
      benefitsTitle: 'فوائد الاتصالات وeSIM',
      benefitsDescription: 'انظر كيف تقارن حلول Kakr Labs بالأنظمة التقليدية لمزودي الاتصالات.',
      ctaTitle: 'هل أنت مستعد لتأمين الاتصالات؟',
      ctaDescription: 'ابدأ بواجهة برمجة التطبيقات 2FA المجانية أو استكشف برنامج تجريبي لمدة 3 أشهر بخصم 50٪.',
      startFree: 'ابدأ تجربة مجانية',
      schedulePilot: 'جدولة البرنامج التجريبي',
      ctaFooter: 'Kakr Labs: ابتكار Web3 آمن للاتصالات',
      pteriSuiteTitle: 'مجموعة PTERI للاتصالات',
      pteriSuiteDescription: 'مجموعة شاملة من الأدوات المصممة خصيصًا لمزودي الاتصالات وeSIM.',
      pteriWalletTitle: 'PTERI App',
      pteriWalletDescription: '2FA لامركزية تعتمد على بيانات اعتماد يتحكم بها العميل، توفر مقاومة لتبديل SIM ومصادقة آمنة للمشتركين.',
      pteriDataTitle: 'PTERI Data',
      pteriDataDescription: 'سجلات blockchain غير قابلة للتغيير لتوفير eSIM وإدارة هوية المشتركين ومسارات تدقيق مقاومة للتلاعب.'
    }
  }
  return texts[locale.value] || texts.en
})

definePageMeta({ title: 'Telecom & eSIM Solutions | Kakr Labs' })



// Scroll animations
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
      }
    })
  }, observerOptions)

  // Observe all sections for scroll animations
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-dark-900 dark:via-dark-900 dark:to-dark-900">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 pb-16 md:pb-24">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div class="animate-fade-in-up">
          <!-- Industry Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-sm mb-8">
            <svg class="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <span class="text-cyan-300 font-medium">{{ translations.badge }}</span>
          </div>

          <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-6 tracking-tight">
            {{ translations.heroTitle }}
          </h1>
          
          <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            {{ translations.heroDescription }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://pteri.org/Register" 
              target="_blank"
              class="group inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              {{ translations.startTrial }}
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            
            <a href="#solutions"
              class="group inline-flex items-center px-8 py-4 rounded-2xl border-2 border-white/50 text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              {{ translations.exploreSolutions }}
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Shape Divider -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-20 sm:h-28">
          <path d="M0,20 C240,100 480,0 720,60 C960,120 1200,10 1440,50 L1440,100 L0,100 Z" class="fill-slate-50 dark:fill-dark-800" />
        </svg>
      </div>
    </section>

    <!-- Solutions Overview -->
    <section id="solutions" class="py-20 px-4 relative">
      <div class="max-w-7xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-16 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-4xl font-bold text-white   mb-4">
            {{ translations.whyTitle }}
          </h2>
          <p class="text-xl text-white/70   max-w-3xl mx-auto">
            {{ translations.whyDescription }}
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-3">
          <!-- Fraud Prevention -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative bg-black rounded-3xl p-8 shadow-xl border border-gray-100   hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white  ">{{ translations.fraudTitle }}</h3>
                </div>
              </div>
              
              <p class="text-white/70   mb-6 leading-relaxed">
                {{ translations.fraudDescription }}
              </p>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-white/90  ">Reduce SIM-swap exposure with cryptographic authentication</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-white/90  ">REST APIs for seamless telecom integration</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-white/90  ">Verifiable audit trails that support your compliance program</span>
                </li>
              </ul>
              
              <a 
                href="/contact" 
                class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More About Fraud Prevention
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- eSIM Management -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative bg-black rounded-3xl p-8 shadow-xl border border-gray-100   hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white  ">{{ translations.esimTitle }}</h3>
                </div>
              </div>
              
              <p class="text-white/70   mb-6 leading-relaxed">
                {{ translations.esimDescription }}
              </p>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-white/90  ">Immutable records for subscriber identities</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-white/90  ">Customer-controlled credentials for sensitive data</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-white/90  ">Low per-transaction fees for global scale</span>
                </li>
              </ul>
              
              <a 
                href="/contact" 
                class="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Learn More About eSIM Solutions
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Subscriber Verification -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative bg-black rounded-3xl p-8 shadow-xl border border-gray-100   hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white  ">{{ translations.verificationTitle }}</h3>
                </div>
              </div>
              
              <p class="text-white/70   mb-6 leading-relaxed">
                {{ translations.verificationDescription }}
              </p>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-white/90  ">Proof-based 2FA for user access</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-white/90  ">Audit trails and evidence to support regulatory programs</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-white/90  ">Scalable for high-volume networks</span>
                </li>
              </ul>
              
              <a 
                href="/contact" 
                class="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Learn More About Verification
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Comparison -->
    <section class="py-20 px-4 bg-black/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-16 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-4xl font-bold text-white   mb-4">
            {{ translations.benefitsTitle }}
          </h2>
          <p class="text-xl text-white/70  ">
            {{ translations.benefitsDescription }}
          </p>
        </div>

        <div class="bg-black rounded-3xl shadow-2xl border border-gray-100   overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-dark-800 dark:to-dark-800 dark:from-dark-800 dark:to-dark-800">
                  <th class="text-left p-6 font-semibold text-white   text-lg">Benefit</th>
                  <th class="text-center p-6 font-semibold text-emerald-900 text-lg">Kakr Labs</th>
                  <th class="text-center p-6 font-semibold text-red-900 text-lg">Traditional Systems</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr class="hover:bg-white/3/50 dark:hover:bg-white/5 dark:hover:bg-white/5 transition-colors duration-150">
                  <td class="p-6 font-medium text-white  ">Fraud Reduction</td>
                  <td class="p-6 text-center">
                    <div class="flex items-center justify-center">
                      <svg class="w-6 h-6 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-emerald-700 font-semibold">Cryptographic 2FA</span>
                    </div>
                  </td>
                  <td class="p-6 text-center">
                    <div class="flex items-center justify-center">
                      <svg class="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span class="text-red-700 font-semibold">High SIM risks</span>
                    </div>
                  </td>
                </tr>
                <tr class="hover:bg-white/3/50 dark:hover:bg-white/5 dark:hover:bg-white/5 transition-colors duration-150">
                  <td class="p-6 font-medium text-white  ">Cost Savings</td>
                  <td class="p-6 text-center">
                    <div class="flex items-center justify-center">
                      <svg class="w-6 h-6 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-emerald-700 font-semibold">Low per-transaction fees</span>
                    </div>
                  </td>
                  <td class="p-6 text-center">
                    <div class="flex items-center justify-center">
                      <svg class="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span class="text-red-700 font-semibold">High SMS fees</span>
                    </div>
                  </td>
                </tr>
                <tr class="hover:bg-white/3/50 dark:hover:bg-white/5 dark:hover:bg-white/5 transition-colors duration-150">
                  <td class="p-6 font-medium text-white  ">Compliance</td>
                  <td class="p-6 text-center">
                    <div class="flex items-center justify-center">
                      <svg class="w-6 h-6 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-emerald-700 font-semibold">Automated audit trails</span>
                    </div>
                  </td>
                  <td class="p-6 text-center">
                    <div class="flex items-center justify-center">
                      <svg class="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span class="text-red-700 font-semibold">Manual audits</span>
                    </div>
                  </td>
                </tr>
                <tr class="hover:bg-white/3/50 dark:hover:bg-white/5 dark:hover:bg-white/5 transition-colors duration-150">
                  <td class="p-6 font-medium text-white  ">Uptime</td>
                  <td class="p-6 text-center">
                    <div class="flex items-center justify-center">
                      <svg class="w-6 h-6 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-emerald-700 font-semibold">Litecoin mainnet since 2011</span>
                    </div>
                  </td>
                  <td class="p-6 text-center">
                    <div class="flex items-center justify-center">
                      <svg class="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span class="text-red-700 font-semibold">System downtimes</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials removed: entries were fabricated (placeholder personas and
         invented outcome quotes). Restore only with real, approved customer
         quotes, real names/roles, and permission to publish. -->

    <!-- PTERI Suite Overview -->
    <section class="py-20 px-4 bg-black/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-16 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-4xl font-bold text-white   mb-4">
            {{ translations.pteriSuiteTitle }}
          </h2>
          <p class="text-xl text-white/70  ">
            {{ translations.pteriSuiteDescription }}
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <!-- PTERI App -->
          <div class="bg-black rounded-3xl p-8 shadow-xl border border-gray-100  ">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white  ">{{ translations.pteriWalletTitle }}</h3>
              </div>
            </div>
            
            <p class="text-white/70   mb-6 leading-relaxed">
              {{ translations.pteriWalletDescription }}
            </p>
            
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Cryptographic proofs for identity verification</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Reduces SIM-swap exposure</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Simple REST API integration</span>
              </li>
            </ul>
          </div>

          <!-- PTERI Data -->
          <div class="bg-black rounded-3xl p-8 shadow-xl border border-gray-100  ">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white  ">{{ translations.pteriDataTitle }}</h3>
              </div>
            </div>
            
            <p class="text-white/70   mb-6 leading-relaxed">
              {{ translations.pteriDataDescription }}
            </p>
            
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Customer-controlled payment credentials</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Low per-transaction fees</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Proof-of-work secured since 2011</span>
              </li>
            </ul>
          </div>

          <!-- PTERI Intelligence -->
          <div class="bg-black rounded-3xl p-8 shadow-xl border border-gray-100  ">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white  ">PTERI Intelligence</h3>
              </div>
            </div>
            
            <p class="text-white/70   mb-6 leading-relaxed">
              AI-powered tools for subscriber verification, fraud detection, and secure authentication workflows.
            </p>
            
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Verification flows with evidence to support regulatory programs</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Anomaly detection for fraud prevention</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Scalable for high-volume networks</span>
              </li>
            </ul>
          </div>

          <!-- PTERI Playground -->
          <div class="bg-black rounded-3xl p-8 shadow-xl border border-gray-100  ">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white  ">PTERI Playground</h3>
              </div>
            </div>
            
            <p class="text-white/70   mb-6 leading-relaxed">
              No-code development environment for building custom telecom applications and integration workflows.
            </p>
            
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Visual workflow builder</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Pre-built telecom templates</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-white/90  ">Faster development cycles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAyMGg0MHYyMEgwVjIweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div class="relative max-w-4xl mx-auto text-center text-white">
        <div class="animate-fade-in-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {{ translations.ctaTitle }}
          </h2>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            {{ translations.ctaDescription }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://pteri.org/Register" 
              target="_blank"
              class="group bg-black hover:bg-white/3 text-white   font-semibold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center"
            >
              <svg class="w-5 h-5 mr-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              {{ translations.startFree }}
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            
            <a 
              href="/contact" 
              class="group border-2 border-white hover:bg-black hover:text-white   text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 flex items-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              {{ translations.schedulePilot }}
            </a>
          </div>
          
          <p class="text-sm text-blue-200 mt-6 flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Kakr Labs: Secure Web3 Innovation for Telecom
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.delay-2000 {
  animation-delay: 2s;
}

/* Custom shadow for enhanced cards */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Hover effects for interactive elements */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Focus states for accessibility */
button:focus,
a:focus {
  outline: 2px solid #06b6d4;
  outline-offset: 2px;
}

/* Responsive font sizes */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 3rem;
  }
  .text-7xl {
    font-size: 3.5rem;
  }
}
</style>



