<template>
  <div class="min-h-screen bg-black text-slate-300 font-inter pb-24">

    <!-- HERO -->
    <section class="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
      <div class="absolute inset-0 pointer-events-none z-0" style="background-image: url('/hero-bg.svg'); background-size: cover; background-position: top center; opacity: 0.15;"></div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex justify-end items-center mb-16">
          <div class="px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-white bg-white/5 tracking-wide uppercase">
            Newsroom
          </div>
        </div>
        <div class="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            {{ content.title }}
          </h1>
          <p class="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mt-8">
            {{ content.subtitle }}
          </p>
        </div>
      </div>
    </section>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- PRESS RELEASES -->
      <section class="py-20 border-b border-white/5">
        <p class="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-8" data-aos="fade-up">{{ content.pressReleases }}</p>
        <div class="bg-[#0f0f0f] rounded-3xl p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-colors" data-aos="fade-up">
          <div class="text-xs text-slate-500 font-medium mb-3">{{ content.featuredRelease.date }}</div>
          <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">{{ content.featuredRelease.title }}</h3>
          <p class="text-slate-400 leading-relaxed mb-8 max-w-3xl">{{ content.featuredRelease.description }}</p>
          <a :href="localePath('/press/google-cloud-partnership')" class="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors group">
            {{ content.readMore }}
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>

      <!-- MEDIA MENTIONS -->
      <section class="py-20 border-b border-white/5">
        <div class="text-center mb-14" data-aos="fade-up">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">{{ content.mentions.title }}</h2>
          <p class="text-slate-400 max-w-2xl mx-auto">{{ content.mentions.subtitle }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="bg-[#0f0f0f] rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-colors" data-aos="fade-up" data-aos-delay="0">
            <div class="text-emerald-400 font-bold text-sm mb-2">Google Cloud</div>
            <div class="text-white font-medium">{{ content.mentions.items.google }}</div>
          </div>
          <div class="bg-[#0f0f0f] rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-colors" data-aos="fade-up" data-aos-delay="60">
            <div class="text-blue-400 font-bold text-sm mb-2">IBM</div>
            <div class="text-white font-medium">{{ content.mentions.items.ibm }}</div>
          </div>
          <div class="bg-[#0f0f0f] rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-colors" data-aos="fade-up" data-aos-delay="120">
            <div class="text-cyan-400 font-bold text-sm mb-2">Microsoft</div>
            <div class="text-white font-medium">{{ content.mentions.items.microsoft }}</div>
          </div>
          <div class="bg-[#0f0f0f] rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-colors" data-aos="fade-up" data-aos-delay="180">
            <div class="text-slate-400 font-bold text-sm mb-2">{{ content.mentions.items.industryBlogs }}</div>
            <div class="text-white font-medium">{{ content.mentions.items.deepDives }}</div>
          </div>
          <div class="bg-[#0f0f0f] rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-colors" data-aos="fade-up" data-aos-delay="240">
            <div class="text-slate-400 font-bold text-sm mb-2">{{ content.mentions.items.techPubs }}</div>
            <div class="text-white font-medium">{{ content.mentions.items.innovation }}</div>
          </div>
        </div>
      </section>

      <!-- ABOUT SECTIONS -->
      <section class="py-20 border-b border-white/5">
        <div class="grid md:grid-cols-2 gap-6 mb-10">
          <div class="bg-[#0f0f0f] rounded-3xl p-8 sm:p-10 border border-white/5" data-aos="fade-up">
            <h2 class="text-2xl font-bold text-white mb-4">{{ content.aboutKakr.title }}</h2>
            <p class="text-slate-400 leading-relaxed">{{ content.aboutKakr.description }}</p>
          </div>
          <div class="bg-[#0f0f0f] rounded-3xl p-8 sm:p-10 border border-white/5" data-aos="fade-up" data-aos-delay="80">
            <h2 class="text-2xl font-bold text-white mb-4">{{ content.aboutPteri.title }}</h2>
            <p class="text-slate-400 leading-relaxed">{{ content.aboutPteri.description }}</p>
          </div>
        </div>

        <!-- Core Principles -->
        <div class="bg-[#0f0f0f] rounded-3xl p-8 sm:p-10 border border-white/5 mb-10" data-aos="fade-up">
          <h3 class="text-xl font-bold text-white mb-8 text-center">{{ content.corePrinciples.title }}</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="(item, i) in content.corePrinciples.items" :key="i" class="flex items-start gap-4">
              <span class="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
              <div>
                <span class="block font-bold text-white mb-1">{{ item.title }}</span>
                <span class="text-slate-400 text-sm">{{ item.desc }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Resources & Contact -->
        <div class="grid md:grid-cols-2 gap-6 mb-10">
          <div class="bg-[#0f0f0f] rounded-3xl p-8 border border-white/5" data-aos="fade-up">
            <h3 class="text-xl font-bold text-white mb-5">{{ content.resources.title }}</h3>
            <ul class="space-y-3 text-slate-400">
              <li><span class="text-white font-semibold">{{ content.resources.website }}:</span> <a href="https://kakr.ai" class="hover:text-emerald-400 transition-colors ml-1">kakr.ai</a></li>
              <li><span class="text-white font-semibold">{{ content.resources.docs }}:</span> <a href="https://docs.kakr.ai" target="_blank" class="hover:text-emerald-400 transition-colors ml-1">docs.kakr.ai</a></li>
              <li><span class="text-white font-semibold">{{ content.resources.product }}:</span> <span class="ml-1">PTERI</span></li>
            </ul>
          </div>
          <div class="bg-[#0f0f0f] rounded-3xl p-8 border border-white/5" data-aos="fade-up" data-aos-delay="80">
            <h3 class="text-xl font-bold text-white mb-5">{{ content.contact.title }}</h3>
            <a href="mailto:contact@kakr.ai" class="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors">contact@kakr.ai</a>
          </div>
        </div>

        <!-- Usage Guidelines -->
        <div class="bg-[#0f0f0f] rounded-3xl p-8 border border-white/5" data-aos="fade-up">
          <h3 class="text-xl font-bold text-white mb-6">{{ content.guidelines.title }}</h3>
          <ul class="grid md:grid-cols-3 gap-5">
            <li v-for="(item, i) in content.guidelines.items" :key="i" class="flex items-start gap-3 text-slate-400 text-sm">
              <span class="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xs font-bold flex-shrink-0">{{ i + 1 }}</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()
const localePath = useLocalePath()

// Content Translations
const content = computed(() => {
  const translations = {
    en: {
      title: 'Press',
      subtitle: 'Official announcements, press resources, and contact information for Kakr Labs and PTERI.',
      pressReleases: 'Press Releases',
      readMore: 'Read full announcement',
      featuredRelease: {
        date: 'December 28, 2025',
        title: 'Kakr Labs Joins Google Cloud Partner Advantage',
        description: 'Kakr Labs has joined Google Cloud Partner Advantage to deliver signature-based identity and blockchain-backed settlement for automation and AI-agent workflows.'
      },
      mentions: {
        title: 'Media & Industry Mentions',
        subtitle: 'Kakr Labs has been referenced and featured across industry publications, partner platforms, and technology ecosystems.',
        items: {
          google: 'Partner Directory Listing',
          ibm: 'Partner Plus Program',
          microsoft: 'Microsoft for Startups',
          industryBlogs: 'Industry Blogs',
          deepDives: 'Various Technical Deep Dives',
          techPubs: 'Tech Publications',
          innovation: 'Infrastructure Innovation Features'
        }
      },
      aboutKakr: {
        title: 'About Kakr Labs',
        description: 'Kakr Labs builds cryptographic infrastructure that replaces guess-based security with deterministic authority. Our work focuses on identity, authentication, authorization, payments, and AI-safe delegation - secured by a single self-custodial authority model.'
      },
      aboutPteri: {
        title: 'About PTERI',
        description: 'PTERI is a universal authority layer delivered through a self-custodial wallet and cryptographic verification services. Rather than shipping separate products for identity, payments, APIs, and AI workflows, PTERI secures all of them using one deterministic system. The wallet acts as an interface into this carrier layer, enabling users to sign requests, authorize actions, and approve transactions while retaining full custody.'
      },
      corePrinciples: {
        title: 'Core Principles',
        items: [
          { title: 'Self-custody by design', desc: 'Private keys are generated and remain on user devices.' },
          { title: 'Deterministic verification', desc: 'Allow/deny outcomes, no probabilistic scoring.' },
          { title: 'No shared secrets', desc: 'Replaces passwords, OTPs, API keys, and long-lived tokens with cryptographic proof.' },
          { title: 'AI-safe delegation', desc: 'Scoped, time-bound, revocable authority for AI agents without exposing root keys.' }
        ]
      },
      resources: {
        title: 'Resources',
        website: 'Website',
        docs: 'Docs',
        product: 'Product'
      },
      contact: {
        title: 'Press Contact'
      },
      guidelines: {
        title: 'Usage Guidelines',
        items: [
          'Do not describe PTERI as a custodial wallet.',
          'Avoid token/price/trading language.',
          'Emphasize authority, verification, and self-custody.'
        ]
      },
      footer: {
        home: 'Home',
        pteri: 'PTERI',
        docs: 'Docs'
      },
      seo: {
        description: 'Official announcements, press resources, and contact information for Kakr Labs and PTERI.',
        image: '/og/og-press.png'
      }
    },
    de: {
      title: 'Presse',
      subtitle: 'Offizielle Ankündigungen, Presseressourcen und Kontaktinformationen für Kakr Labs und PTERI.',
      pressReleases: 'Pressemitteilungen',
      readMore: 'Vollständige Ankündigung lesen',
      featuredRelease: {
        date: '28. Dezember 2025',
        title: 'Kakr Labs tritt Google Cloud Partner Advantage bei',
        description: 'Kakr Labs ist dem Google Cloud Partner Advantage-Programm beigetreten, um signaturbasierte Identität und Blockchain-gestützte Abwicklung für Automatisierungs- und KI-Agenten-Workflows bereitzustellen.'
      },
      mentions: {
        title: 'Medien- & Industrie-Erwähnungen',
        subtitle: 'Kakr Labs wurde in Branchenpublikationen, Partnerplattformen und Technologie-Ökosystemen referenziert und vorgestellt.',
        items: {
          google: 'Partnerverzeichnis-Eintrag',
          ibm: 'Partner Plus-Programm',
          microsoft: 'Microsoft für Startups',
          industryBlogs: 'Branchen-Blogs',
          deepDives: 'Verschiedene technische Deep Dives',
          techPubs: 'Tech-Publikationen',
          innovation: 'Infrastruktur-Innovations-Features'
        }
      },
      aboutKakr: {
        title: 'Über Kakr Labs',
        description: 'Kakr Labs baut kryptografische Infrastruktur, die auf Vermutungen basierende Sicherheit durch deterministische Autorität ersetzt. Unsere Arbeit konzentriert sich auf Identität, Authentifizierung, Autorisierung, Zahlungen und KI-sichere Delegation – gesichert durch ein einziges selbstverwaltetes Autoritätsmodell.'
      },
      aboutPteri: {
        title: 'Über PTERI',
        description: 'PTERI ist eine universelle Autoritätsschicht, die durch ein selbstverwaltetes Wallet und kryptografische Verifizierungsdienste bereitgestellt wird. Anstatt separate Produkte für Identität, Zahlungen, APIs und KI-Workflows zu liefern, sichert PTERI alle mit einem deterministischen System. Das Wallet fungiert als Schnittstelle zu dieser Trägerschicht, die es Benutzern ermöglicht, Anfragen zu signieren, Aktionen zu genehmigen und Transaktionen zu autorisieren, während sie die volle Kontrolle behalten.'
      },
      corePrinciples: {
        title: 'Kernprinzipien',
        items: [
          { title: 'Self-Custody by Design', desc: 'Private Schlüssel werden generiert und verbleiben auf den Benutzergeräten.' },
          { title: 'Deterministische Verifizierung', desc: 'Zulassen/Verweigern-Ergebnisse, kein probabilistisches Scoring.' },
          { title: 'Keine gemeinsamen Geheimnisse', desc: 'Ersetzt Passwörter, OTPs, API-Schlüssel und langlebige Token durch kryptografischen Beweis.' },
          { title: 'KI-sichere Delegation', desc: 'Zweckgebundene, zeitgebundene, widerrufbare Autorität für KI-Agenten ohne Offenlegung von Root-Schlüsseln.' }
        ]
      },
      resources: {
        title: 'Ressourcen',
        website: 'Webseite',
        docs: 'Doku',
        product: 'Produkt'
      },
      contact: {
        title: 'Pressekontakt'
      },
      guidelines: {
        title: 'Nutzungsrichtlinien',
        items: [
          'Beschreiben Sie PTERI nicht als verwahrtes Wallet.',
          'Vermeiden Sie Token-/Preis-/Handelssprache.',
          'Betonen Sie Autorität, Verifizierung und Selbstverwaltung.'
        ]
      },
      footer: {
        home: 'Startseite',
        pteri: 'PTERI',
        docs: 'Doku'
      },
      seo: {
        description: 'Offizielle Ankündigungen, Presseressourcen und Kontaktinformationen für Kakr Labs und PTERI.',
        image: '/og/og-press.png'
      }
    },
    es: {
      title: 'Prensa',
      subtitle: 'Anuncios oficiales, recursos de prensa e información de contacto para Kakr Labs y PTERI.',
      pressReleases: 'Comunicados de Prensa',
      readMore: 'Leer anuncio completo',
      featuredRelease: {
        date: '28 de diciembre de 2025',
        title: 'Kakr Labs se une a Google Cloud Partner Advantage',
        description: 'Kakr Labs se ha unido a Google Cloud Partner Advantage para ofrecer identidad basada en firmas y liquidación respaldada por blockchain para automatización y flujos de trabajo de agentes de IA.'
      },
      mentions: {
        title: 'Menciones en Medios e Industria',
        subtitle: 'Kakr Labs ha sido referenciado y destacado en publicaciones de la industria, plataformas de socios y ecosistemas tecnológicos.',
        items: {
          google: 'Listado en el Directorio de Socios',
          ibm: 'Programa Partner Plus',
          microsoft: 'Microsoft para Startups',
          industryBlogs: 'Blogs de la Industria',
          deepDives: 'Varios análisis técnicos detallados',
          techPubs: 'Publicaciones Tecnológicas',
          innovation: 'Artículos sobre innovación en infraestructura'
        }
      },
      aboutKakr: {
        title: 'Sobre Kakr Labs',
        description: 'Kakr Labs construye infraestructura criptográfica que reemplaza la seguridad basada en suposiciones con autoridad determinista. Nuestro trabajo se centra en identidad, autenticación, autorización, pagos y delegación segura para IA - asegurada por un único modelo de autoridad de autocustodia.'
      },
      aboutPteri: {
        title: 'Sobre PTERI',
        description: 'PTERI es una capa de autoridad universal entregada a través de una billetera de autocustodia y servicios de verificación criptográfica. En lugar de enviar productos separados para identidad, pagos, APIs y flujos de trabajo de IA, PTERI los asegura todos usando un sistema determinista. La billetera actúa como una interfaz hacia esta capa portadora, permitiendo a los usuarios firmar solicitudes, aprobar acciones y autorizar transacciones mientras retienen la custodia completa.'
      },
      corePrinciples: {
        title: 'Principios Básicos',
        items: [
          { title: 'Autocustodia por diseño', desc: 'Las claves privadas se generan y permanecen en los dispositivos del usuario.' },
          { title: 'Verificación determinista', desc: 'Resultados de permitir/denegar, sin puntuación probabilística.' },
          { title: 'Sin secretos compartidos', desc: 'Reemplaza contraseñas, OTPs, claves API y tokens de larga duración con pruebas criptográficas.' },
          { title: 'Delegación segura para IA', desc: 'Autoridad limitada, temporal y revocable para agentes de IA sin exponer claves raíz.' }
        ]
      },
      resources: {
        title: 'Recursos',
        website: 'Sitio Web',
        docs: 'Documentación',
        product: 'Producto'
      },
      contact: {
        title: 'Contacto de Prensa'
      },
      guidelines: {
        title: 'Pautas de Uso',
        items: [
          'No describa a PTERI como una billetera de custodia.',
          'Evite el lenguaje de tokens/precios/comercio.',
          'Enfatice la autoridad, la verificación y la autocustodia.'
        ]
      },
      footer: {
        home: 'Inicio',
        pteri: 'PTERI',
        docs: 'Documentación'
      },
      seo: {
        description: 'Anuncios oficiales, recursos de prensa e información de contacto para Kakr Labs y PTERI.',
        image: '/og/og-press.png'
      }
    },
    ja: {
      title: 'プレス',
      subtitle: 'Kakr LabsおよびPTERIに関する公式発表、プレスリソース、連絡先情報。',
      pressReleases: 'プレスリリース',
      readMore: '発表全文を読む',
      featuredRelease: {
        date: '2025年12月28日',
        title: 'Kakr LabsがGoogle Cloud Partner Advantageに参加',
        description: 'Kakr Labsは、自動化およびAIエージェントのワークフロー向けに署名ベースのアイデンティティとブロックチェーンによる決済を提供するため、Google Cloud Partner Advantageに参加しました。'
      },
      mentions: {
        title: 'メディアと業界での言及',
        subtitle: 'Kakr Labsは、業界誌、パートナープラットフォーム、技術エコシステムで言及され、特集されています。',
        items: {
          google: 'パートナーディレクトリリスト',
          ibm: 'Partner Plusプログラム',
          microsoft: 'Microsoft for Startups',
          industryBlogs: '業界ブログ',
          deepDives: 'さまざまな技術的な詳細分析',
          techPubs: '技術出版物',
          innovation: 'インフラストラクチャの革新に関する特集'
        }
      },
      aboutKakr: {
        title: 'Kakr Labsについて',
        description: 'Kakr Labsは、推測に基づくセキュリティを決定論的権限に置き換える暗号インフラストラクチャを構築しています。私たちの取り組みは、アイデンティティ、認証、認可、決済、AIセーフな委任に焦点を当てており、単一の自己管理型権限モデルによって保護されています。'
      },
      aboutPteri: {
        title: 'PTERIについて',
        description: 'PTERIは、自己管理型ウォレットと暗号検証サービスを通じて提供される普遍的な権限レイヤーです。アイデンティティ、決済、API、AIワークフローのために別々の製品を提供するのではなく、PTERIは1つの決定論的システムを使用してすべてを保護します。ウォレットはこのキャリアレイヤーへのインターフェースとして機能し、ユーザーは完全な管理権を保持しながら、リクエストへの署名、アクションの承認、取引の許可を行うことができます。'
      },
      corePrinciples: {
        title: '基本原則',
        items: [
          { title: '設計による自己管理', desc: '秘密鍵は生成され、ユーザーのデバイスに残ります。' },
          { title: '決定論的検証', desc: '許可/拒否の結果、確率的なスコアリングなし。' },
          { title: '共有シークレットなし', desc: 'パスワード、OTP、APIキー、長寿命トークンを暗号証明に置き換えます。' },
          { title: 'AIセーフな委任', desc: 'ルートキーを公開することなく、AIエージェントにスコープ付き、時間制限付き、取り消し可能な権限を与えます。' }
        ]
      },
      resources: {
        title: 'リソース',
        website: 'ウェブサイト',
        docs: 'ドキュメント',
        product: '製品'
      },
      contact: {
        title: 'プレスの連絡先'
      },
      guidelines: {
        title: '使用ガイドライン',
        items: [
          'PTERIをカストディアルウォレットとして説明しないでください。',
          'トークン/価格/取引に関する言葉は避けてください。',
          '権限、検証、自己管理を強調してください。'
        ]
      },
      footer: {
        home: 'ホーム',
        pteri: 'PTERI',
        docs: 'ドキュメント'
      },
      seo: {
        description: 'Kakr LabsおよびPTERIに関する公式発表、プレスリソース、連絡先情報。',
        image: '/og/og-press.png'
      }
    },
    ar: {
      title: 'صحافة',
      subtitle: 'الإعلانات الرسمية، وموارد الصحافة، ومعلومات الاتصال لـ Kakr Labs و PTERI.',
      pressReleases: 'البيانات الصحفية',
      readMore: 'قراءة الإعلان الكامل',
      featuredRelease: {
        date: '28 ديسمبر 2025',
        title: 'تنضم Kakr Labs إلى Google Cloud Partner Advantage',
        description: 'انضمت Kakr Labs إلى Google Cloud Partner Advantage لتقديم هوية قائمة على التوقيع وتسوية مدعومة بـ blockchain للأتمتة وسير عمل وكلاء الذكاء الاصطناعي.'
      },
      mentions: {
        title: 'إشارات في وسائل الإعلام والصناعة',
        subtitle: 'تمت الإشارة إلى Kakr Labs وعرضها عبر منشورات الصناعة ومنصات الشركاء والنظم البيئية التكنولوجية.',
        items: {
          google: 'قائمة دليل الشركاء',
          ibm: 'برنامج Partner Plus',
          microsoft: 'Microsoft للشركات الناشئة',
          industryBlogs: 'مدونات الصناعة',
          deepDives: 'مراجعات فنية عميقة مختلفة',
          techPubs: 'المنشورات التقنية',
          innovation: 'ميزات ابتكار البنية التحتية'
        }
      },
      aboutKakr: {
        title: 'حول Kakr Labs',
        description: 'تبني Kakr Labs بنية تحتية مشفرة تستبدل الأمان القائم على التخمين بسلطة حتمية. يركز عملنا على الهوية والمصادقة والتفويض والمدفوعات والتفويض الآمن للذكاء الاصطناعي - مؤمن بنموذج سلطة ذاتية الحفظ واحد.'
      },
      aboutPteri: {
        title: 'حول PTERI',
        description: 'PTERI هي طبقة سلطة عالمية يتم تسليمها من خلال محفظة ذاتية الحفظ وخدمات التحقق المشفرة. بدلاً من شحن منتجات منفصلة للهوية والمدفوعات وواجهات برمجة التطبيقات وسير عمل الذكاء الاصطناعي، يؤمن PTERI كل ذلك باستخدام نظام حتمي واحد. تعمل المحفظة كواجهة لهذه الطبقة الحاملة، مما يتيح للمستخدمين توقيع الطلبات والموافقة على الإجراءات وتفويض المعاملات مع الاحتفاظ بالحفظ الكامل.'
      },
      corePrinciples: {
        title: 'المبادئ الأساسية',
        items: [
          { title: 'الحفظ الذاتي حسب التصميم', desc: 'يتم إنشاء المفاتيح الخاصة وتبقى على أجهزة المستخدم.' },
          { title: 'التحقق الحتمي', desc: 'نتائج السماح/الرفض، لا تسجيل احتمالي.' },
          { title: 'لا أسرار مشتركة', desc: 'يستبدل كلمات المرور و OTPs ومفاتيح API والرموز المميزة طويلة العمر بإثبات مشفر.' },
          { title: 'تفويض آمن للذكاء الاصطناعي', desc: 'سلطة محددة النطاق، ومحددة بالوقت، وقابلة للإلغاء لوكلاء الذكاء الاصطناعي دون كشف مفاتيح الجذر.' }
        ]
      },
      resources: {
        title: 'الموارد',
        website: 'الموقع الإلكتروني',
        docs: 'الوثائق',
        product: 'المنتج'
      },
      contact: {
        title: 'جهة الاتصال الصحفية'
      },
      guidelines: {
        title: 'إرشادات الاستخدام',
        items: [
          'لا تصف PTERI بأنها محفظة حراسة.',
          'تجنب لغة الرمز/السعر/التداول.',
          'أكد على السلطة والتحقق والحفظ الذاتي.'
        ]
      },
      footer: {
        home: 'الرئيسية',
        pteri: 'PTERI',
        docs: 'الوثائق'
      },
      seo: {
        description: 'الإعلانات الرسمية، وموارد الصحافة، ومعلومات الاتصال لـ Kakr Labs و PTERI.',
        image: '/og/og-press.png'
      }
    }
  }
  return translations[locale.value] || translations.en
})

// SEO
useSEO({
  title: computed(() => `${content.value.title} | Kakr Labs`),
  description: computed(() => content.value.seo.description),
  image: computed(() => content.value.seo.image)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
.font-inter {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
</style>
