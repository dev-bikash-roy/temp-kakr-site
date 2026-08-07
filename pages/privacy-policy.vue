<template>
  <div class="min-h-screen bg-black text-white/80 pb-24 font-inter">
    <!-- Header/Hero -->
    <section class="relative overflow-hidden border-b border-white/5" style="padding: 9rem 0 5rem; background: #000;">
      <div class="absolute inset-0 pointer-events-none z-0" style="background: radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16,185,129,0.15) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(52,211,153,0.06) 0%, transparent 60%);"></div>
      <div class="absolute inset-0 pointer-events-none z-0" style="background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 64px 64px;"></div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-6" data-aos="fade-up">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          {{ content.lastUpdated }}
        </div>

        <h1 class="font-black leading-[1.05] tracking-[-0.03em] text-white mb-6" style="font-size: clamp(2.25rem, 5.5vw, 4rem);" data-aos="fade-up" data-aos-delay="100">
          {{ content.title }}
        </h1>

        <p class="text-lg text-white/60 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          {{ content.entityPrefix }} <span class="text-emerald-400 font-semibold">{{ content.entityName }}</span>
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 lg:py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div class="rounded-[2rem] p-8 sm:p-12 border border-white/5" style="background: #0f0f0f;">
        <div class="prose prose-lg prose-invert max-w-none legal-prose">
          <p class="lead" v-html="content.lead"></p>

          <hr class="my-12 border-white/10  dark:border-slate-800" />

          <h2>{{ content.section1.title }}</h2>
          <p>{{ content.section1.subtitle }}</p>

          <h3>{{ content.section1.subA.title }}</h3>
          <ul>
            <li v-for="(item, idx) in content.section1.subA.items" :key="idx" v-html="item"></li>
          </ul>

          <h3>{{ content.section1.subB.title }}</h3>
          <ul>
             <li v-for="(item, idx) in content.section1.subB.items" :key="idx">{{ item }}</li>
          </ul>

          <h3>{{ content.section1.subC.title }}</h3>
          <p>{{ content.section1.subC.intro }}</p>
          <ul>
             <li v-for="(item, idx) in content.section1.subC.items" :key="idx">{{ item }}</li>
          </ul>

          <h3>{{ content.section1.subD.title }}</h3>
          <p>{{ content.section1.subD.intro }}</p>
          <ul>
             <li v-for="(item, idx) in content.section1.subD.items" :key="idx">{{ item }}</li>
          </ul>

          <h2>{{ content.section2.title }}</h2>
          <p>{{ content.section2.intro }}</p>

          <h3>{{ content.section2.subA.title }}</h3>
          <ul>
             <li v-for="(item, idx) in content.section2.subA.items" :key="idx">{{ item }}</li>
          </ul>

          <h3>{{ content.section2.subB.title }}</h3>
          <ul>
             <li v-for="(item, idx) in content.section2.subB.items" :key="idx">{{ item }}</li>
          </ul>

          <h3>{{ content.section2.subC.title }}</h3>
          <ul>
             <li v-for="(item, idx) in content.section2.subC.items" :key="idx">{{ item }}</li>
          </ul>

          <h3>{{ content.section2.subD.title }}</h3>
          <ul>
             <li v-for="(item, idx) in content.section2.subD.items" :key="idx">{{ item }}</li>
          </ul>

        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()

const content = computed(() => {
  const translations = {
    en: {
      lastUpdated: 'Last updated: September 26, 2025',
      title: 'Privacy Policy',
      entityPrefix: 'Entity:',
      entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)',
      lead: 'At Kakr Labs, your privacy is not an afterthought-it\'s the foundation of every product we build. Powered by the <strong>Litecoin blockchain</strong> (proof-of-work secured since 2011) and our closed-source enterprise infrastructure hosted exclusively on Google Cloud, we design <strong>PTERI App, Playground, Intelligence and Data</strong> with one principle: <span class="text-white  font-bold">collect less, protect more</span>.',
      section1: {
        title: '1. Data We Collect',
        subtitle: 'Minimal & Purpose-Based Only.',
        subA: {
            title: 'A. Account & Access Information',
            items: [
                'Email address (for API or dashboard access)',
                'Public wallet addresses (BIP-39 compatible)',
                '<strong>No private keys, no seed phrases, no password storage-ever.</strong>'
            ]
        },
        subB: {
            title: 'B. Usage Data (Anonymized)',
            items: [
                'API call counts, request volume, and generic performance metrics',
                'Tier-specific usage (e.g., free tier includes 100 calls/month)',
                'No personal identifiers tied to logs'
            ]
        },
        subC: {
            title: 'C. Contact Information',
            intro: 'If you contact us:',
            items: [
                'Name, email, phone number, or message content',
                'Used only for communication and support'
            ]
        },
        subD: {
            title: 'D. What We Do NOT Collect',
            intro: 'We explicitly do NOT collect or store:',
            items: [
                'SSN (Social Security Numbers)',
                'Financial data',
                'Biometrics',
                'Location tracking',
                'Private keys',
                'Seed phrases'
            ]
        }
      },
      section2: {
        title: '2. How We Use Your Data',
        intro: 'Your information is used strictly for:',
        subA: {
            title: 'A. Service Delivery',
            items: [
                'Authenticate access to developer APIs',
                'Enable decentralized 2FA (cryptographic, customer-controlled credentials)',
                'Process Litecoin-based operations',
                'Support enterprise blockchain infrastructure functionality'
            ]
        },
        subB: {
            title: 'B. Customer Support',
            items: [
                 'Respond to support tickets and integration requests',
                 'Provide onboarding and pilot assistance'
            ]
        },
        subC: {
            title: 'C. Product Performance & Improvement',
            items: [
                'Analyze anonymized usage patterns',
                'Improve reliability, scaling, and latency',
                'Ensure the integrity of customer-controlled payment credentials'
            ]
        },
        subD: {
            title: 'D. We Never',
            items: [
                'Sell data',
                'Share your data with advertisers',
                'Monetize user information',
                'Profile users for marketing'
            ]
        }
      },
      seo: {
          title: 'Privacy Policy - Kakr Labs',
          description: 'Kakr Labs Privacy Policy. Learn how we collect, use, and protect your data.'
      }
    },
    de: {
        lastUpdated: 'Zuletzt aktualisiert: 26. September 2025',
        title: 'Datenschutzerklärung',
        entityPrefix: 'Entität:',
        entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)',
        lead: 'Bei Kakr Labs ist Ihre Privatsphäre kein Nebengedanke - sie ist das Fundament jedes Produkts, das wir bauen. Angetrieben von der <strong>Litecoin-Blockchain</strong> (Proof-of-Work-gesichert seit 2011) und unserer Closed-Source-Infrastruktur, entwerfen wir <strong>PTERI App, Playground, Intelligence und Data</strong> mit einem Prinzip: <span class="text-white  font-bold">weniger sammeln, mehr schützen</span>.',
        section1: {
          title: '1. Daten, die wir sammeln',
          subtitle: 'Nur minimal & zweckgebunden.',
          subA: {
              title: 'A. Konto- & Zugangsinformationen',
              items: [
                  'E-Mail-Adresse (für API- oder Dashboard-Zugang)',
                  'Öffentliche Wallet-Adressen (BIP-39 kompatibel)',
                  '<strong>Keine privaten Schlüssel, keine Seed-Phrasen, keine Passwortspeicherung - niemals.</strong>'
              ]
          },
          subB: {
              title: 'B. Nutzungsdaten (Anonymisiert)',
              items: [
                  'API-Aufrufzahlen, Anfragevolumen und generische Leistungsmetriken',
                  'Stufenspezifische Nutzung (z. B. kostenloser Tarif beinhaltet 100 Aufrufe/Monat)',
                  'Keine persönlichen Identifikatoren mit Logs verknüpft'
              ]
          },
          subC: {
              title: 'C. Kontaktinformationen',
              intro: 'Wenn Sie uns kontaktieren:',
              items: [
                  'Name, E-Mail, Telefonnummer oder Nachrichteninhalt',
                  'Nur für Kommunikation und Support verwendet'
              ]
          },
          subD: {
              title: 'D. Was wir NICHT sammeln',
              intro: 'Wir sammeln oder speichern ausdrücklich NICHT:',
              items: [
                  'SSN (Sozialversicherungsnummern)',
                  'Finanzdaten',
                  'Biometrie',
                  'Standortverfolgung',
                  'Private Schlüssel',
                  'Seed-Phrasen'
              ]
          }
        },
        section2: {
          title: '2. Wie wir Ihre Daten verwenden',
          intro: 'Ihre Informationen werden ausschließlich verwendet für:',
          subA: {
              title: 'A. Leistungserbringung',
              items: [
                  'Authentifizierung des Zugangs zu Entwickler-APIs',
                  'Aktivierung von dezentraler 2FA (kryptografisch, kundenkontrollierte Anmeldedaten)',
                  'Verarbeitung von Litecoin-basierten Operationen',
                  'Unterstützung von Enterprise-Blockchain-Infrastruktur-Funktionalität'
              ]
          },
          subB: {
              title: 'B. Kundensupport',
              items: [
                   'Beantwortung von Support-Tickets und Integrationsanfragen',
                   'Bereitstellung von Onboarding- und Pilotunterstützung'
              ]
          },
          subC: {
              title: 'C. Produktleistung & Verbesserung',
              items: [
                  'Analyse anonymisierter Nutzungsmuster',
                  'Verbesserung von Zuverlässigkeit, Skalierung und Latenz',
                  'Sicherstellung der Integrität kundenseitig kontrollierter Zahlungsdaten'
              ]
          },
          subD: {
              title: 'D. Wir niemals',
              items: [
                  'Daten verkaufen',
                  'Ihre Daten mit Werbetreibenden teilen',
                  'Benutzerinformationen monetarisieren',
                  'Benutzer für Marketingzwecke profilieren'
              ]
          }
        },
        seo: {
            title: 'Datenschutzerklärung - Kakr Labs',
            description: 'Kakr Labs Datenschutzerklärung. Erfahren Sie, wie wir Ihre Daten sammeln, verwenden und schützen.'
        }
    },
    es: {
        lastUpdated: 'Última actualización: 26 de septiembre de 2025',
        title: 'Política de Privacidad',
        entityPrefix: 'Entidad:',
        entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)',
        lead: 'En Kakr Labs, su privacidad no es una ocurrencia tardía, es la base de cada producto que construimos. Impulsado por la <strong>cadena de bloques Litecoin</strong> y nuestra infraestructura alojada exclusivamente en Google Cloud, diseñamos <strong>PTERI App, Playground, Intelligence y Data</strong> con un principio: <span class="text-white  font-bold">recopilar menos, proteger más</span>.',
        section1: {
          title: '1. Datos que Recopilamos',
          subtitle: 'Mínimo y Solo Basado en el Propósito.',
          subA: {
              title: 'A. Información de Cuenta y Acceso',
              items: [
                  'Dirección de correo electrónico (para acceso a API o panel)',
                  'Direcciones de billetera pública (compatible con BIP-39)',
                  '<strong>Sin claves privadas, sin frases semilla, sin almacenamiento de contraseñas, nunca.</strong>'
              ]
          },
          subB: {
              title: 'B. Datos de Uso (Anonimizados)',
              items: [
                  'Recuentos de llamadas API, volumen de solicitudes y métricas de rendimiento genéricas',
                  'Uso específico del nivel (por ejemplo, el nivel gratuito incluye 100 llamadas/mes)',
                  'Sin identificadores personales vinculados a los registros'
              ]
          },
          subC: {
              title: 'C. Información de Contacto',
              intro: 'Si nos contacta:',
              items: [
                  'Nombre, correo electrónico, número de teléfono o contenido del mensaje',
                  'Utilizado solo para comunicación y soporte'
              ]
          },
          subD: {
              title: 'D. Lo que NO Recopilamos',
              intro: 'Explícitamente NO recopilamos ni almacenamos:',
              items: [
                  'SSN (Números de Seguridad Social)',
                  'Datos financieros',
                  'Biometría',
                  'Rastreo de ubicación',
                  'Claves privadas',
                  'Frases semilla'
              ]
          }
        },
        section2: {
          title: '2. Cómo Usamos Sus Datos',
          intro: 'Su información se utiliza estrictamente para:',
          subA: {
              title: 'A. Entrega del Servicio',
              items: [
                  'Autenticar el acceso a las API de desarrollador',
                  'Habilitar 2FA descentralizado (criptográfico, credenciales controladas por el cliente)',
                  'Procesar operaciones basadas en Litecoin',
                  'Soportar funcionalidad de infraestructura blockchain empresarial'
              ]
          },
          subB: {
              title: 'B. Atención al Cliente',
              items: [
                   'Responder a tickets de soporte y solicitudes de integración',
                   'Proporcionar asistencia de incorporación y piloto'
              ]
          },
          subC: {
              title: 'C. Rendimiento y Mejora del Producto',
              items: [
                  'Analizar patrones de uso anonimizados',
                  'Mejorar la confiabilidad, el escalado y la latencia',
                  'Garantizar la integridad de las credenciales de pago controladas por el cliente'
              ]
          },
          subD: {
              title: 'D. Nosotros Nunca',
              items: [
                  'Vendemos datos',
                  'Compartimos sus datos con anunciantes',
                  'Monetizamos la información del usuario',
                  'Perfilamos a los usuarios para marketing'
              ]
          }
        },
        seo: {
            title: 'Política de Privacidad - Kakr Labs',
            description: 'Política de Privacidad de Kakr Labs. Aprenda cómo recopilamos, usamos y protegemos sus datos.'
        }
    },
    ja: {
        lastUpdated: '最終更新日：2025年9月26日',
        title: 'プライバシーポリシー',
        entityPrefix: '法人：',
        entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)',
        lead: 'Kakr Labsでは、プライバシーは後付けではありません。それは私たちが構築するすべての製品の基盤です。<strong>Litecoinブロックチェーン</strong>（2011年以来プルーフ・オブ・ワークで保護）、およびGoogle Cloudでのみホストされるエンタープライズインフラストラクチャによって支えられ、私たちは1つの原則で<strong>PTERI App、Playground、Intelligence、およびData</strong>を設計しています：<span class="text-white  font-bold">収集を減らし、保護を強化する</span>。',
        section1: {
          title: '1. 収集するデータ',
          subtitle: '最小限かつ目的ベースのみ。',
          subA: {
              title: 'A. アカウントおよびアクセス情報',
              items: [
                  'メールアドレス（APIまたはダッシュボードアクセス用）',
                  '公開ウォレットアドレス（BIP-39互換）',
                  '<strong>秘密鍵、シードフレーズ、パスワードの保存は一切ありません。</strong>'
              ]
          },
          subB: {
              title: 'B. 使用データ（匿名化）',
              items: [
                  'API呼び出し数、リクエスト量、および一般的なパフォーマンスメトリクス',
                  'ティア固有の使用量（例：無料ティアには月100回の呼び出しが含まれます）',
                  'ログに紐付けられた個人識別子はありません'
              ]
          },
          subC: {
              title: 'C. 連絡先情報',
              intro: 'お問い合わせいただいた場合：',
              items: [
                  '名前、メール、電話番号、またはメッセージの内容',
                  '通信とサポートのみに使用されます'
              ]
          },
          subD: {
              title: 'D. 私たちが収集しないもの',
              intro: '私たちは明示的に以下を収集または保存しません：',
              items: [
                  'SSN（社会保障番号）',
                  '財務データ',
                  '生体認証',
                  '位置追跡',
                  '秘密鍵',
                  'シードフレーズ'
              ]
          }
        },
        section2: {
          title: '2. データの使用方法',
          intro: 'あなたの情報は厳密に以下のために使用されます：',
          subA: {
              title: 'A. サービスの提供',
              items: [
                  '開発者APIへのアクセスの認証',
                  '分散型2FAの有効化（暗号方式・顧客が管理する認証情報）',
                  'Litecoinベースの操作の処理',
                  'エンタープライズのブロックチェーンインフラ機能のサポート'
              ]
          },
          subB: {
              title: 'B. カスタマーサポート',
              items: [
                   'サポートチケットおよび統合リクエストへの対応',
                   'オンボーディングおよびパイロット支援の提供'
              ]
          },
          subC: {
              title: 'C. 製品のパフォーマンスと改善',
              items: [
                  '匿名化された使用パターンの分析',
                  '信頼性、スケーリング、およびレイテンシの改善',
                  '顧客が管理する決済認証情報の整合性の確保'
              ]
          },
          subD: {
              title: 'D. 私たちは決して',
              items: [
                  'データを販売しない',
                  '広告主とデータを共有しない',
                  'ユーザー情報を収益化しない',
                  'マーケティングのためにユーザーをプロファイリングしない'
              ]
          }
        },
        seo: {
            title: 'プライバシーポリシー - Kakr Labs',
            description: 'Kakr Labsプライバシーポリシー。私たちがどのようにデータを収集、使用、保護するかをご覧ください。'
        }
    },
    ar: {
        lastUpdated: 'آخر تحديث: 26 سبتمبر 2025',
        title: 'سياسة الخصوصية',
        entityPrefix: 'الكيان:',
        entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)',
        lead: 'في Kakr Labs، خصوصيتك ليست فكرة لاحقة - إنها أساس كل منتج نبنيه. بدعم من <strong>Litecoin blockchain</strong> (محمية بإثبات العمل منذ 2011)، وبنيتنا التحتية للمؤسسات المستضافة حصريًا على Google Cloud، نصمم <strong>PTERI App و Playground و Intelligence و Data</strong> بمبدأ واحد: <span class="text-white  font-bold">جمع أقل، وحماية أكثر</span>.',
        section1: {
          title: '1. البيانات التي نجمعها',
          subtitle: 'الحد الأدنى وعلى أساس الغرض فقط.',
          subA: {
              title: 'أ. معلومات الحساب والوصول',
              items: [
                  'عنوان البريد الإلكتروني (للوصول إلى واجهة برمجة التطبيقات أو لوحة القيادة)',
                  'عناوين المحفظة العامة (متوافقة مع BIP-39)',
                  '<strong>لا مفاتيح خاصة، لا عبارات أولية، لا تخزين كلمات مرور - أبدًا.</strong>'
              ]
          },
          subB: {
              title: 'ب. بيانات الاستخدام (مجهولة المصدر)',
              items: [
                  'أعداد مكالمات API، وحجم الطلب، ومقاييس الأداء العامة',
                  'الاستخدام الخاص بالفئة (على سبيل المثال، تتضمن الفئة المجانية 100 مكالمة/شهر)',
                  'لا توجد معرفات شخصية مرتبطة بالسجلات'
              ]
          },
          subC: {
              title: 'ج. معلومات الاتصال',
              intro: 'إذا اتصلت بنا:',
              items: [
                  'الاسم أو البريد الإلكتروني أو رقم الهاتف أو محتوى الرسالة',
                  'يستخدم فقط للتواصل والدعم'
              ]
          },
          subD: {
              title: 'د. ما لا نجمعه',
              intro: 'نحن لا نجمع أو نخزن صراحةً:',
              items: [
                  'SSN (أرقام الضمان الاجتماعي)',
                  'البيانات المالية',
                  'القياسات الحيوية',
                  'تتبع الموقع',
                  'المفاتيح الخاصة',
                  'العبارات الأولية'
              ]
          }
        },
        section2: {
          title: '2. كيف نستخدم بياناتك',
          intro: 'يتم استخدام معلوماتك بصرامة من أجل:',
          subA: {
              title: 'أ. تقديم الخدمة',
              items: [
                  'المصادقة على الوصول إلى واجهات برمجة تطبيقات المطورين',
                  'تفعيل المصادقة الثنائية اللامركزية (تشفيرية، ببيانات اعتماد يتحكم بها العميل)',
                  'معالجة العمليات القائمة على Litecoin',
                  'دعم وظائف البنية التحتية للبلوك تشين للمؤسسات'
              ]
          },
          subB: {
              title: 'ب. دعم العملاء',
              items: [
                   'الرد على تذاكر الدعم وطلبات التكامل',
                   'تقديم المساعدة في الإعداد والتجريب'
              ]
          },
          subC: {
              title: 'ج. أداء المنتج وتحسينه',
              items: [
                  'تحليل أنماط الاستخدام مجهولة المصدر',
                  'تحسين الموثوقية والتوسع وزمن الانتقال',
                  'ضمان سلامة بيانات اعتماد الدفع التي يتحكم بها العميل'
              ]
          },
          subD: {
              title: 'د. نحن لا نقوم أبدًا بـ',
              items: [
                  'بيع البيانات',
                  'مشاركة بياناتك مع المعلنين',
                  'تحقيق الدخل من معلومات المستخدم',
                  'تصنيف المستخدمين للتسويق'
              ]
          }
        },
        seo: {
            title: 'سياسة الخصوصية - Kakr Labs',
            description: 'سياسة الخصوصية لـ Kakr Labs. تعرف على كيفية جمعنا واستخدامنا وحمايتنا لبياناتك.'
        }
    }
  }

  return translations[locale.value] || translations.en
})

const { setSEO } = useSEO()
setSEO({
  title: 'Privacy Policy - Kakr Labs',
  description: 'Kakr Labs Privacy Policy. Learn how we collect, use, and protect your personal information.',
  image: '/home-og.png',
})
</script>

<style scoped>
/* Match the dark card + emerald-accent typography used on the rest of the
   site (e.g. trust-center.vue) instead of Tailwind's generic prose theme. */
.legal-prose :where(h2) {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
  margin-top: 2.5rem;
}
.legal-prose :where(h3) {
  color: #6ee7b7;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 2rem;
}
.legal-prose :where(p, li) {
  color: rgba(255, 255, 255, 0.7);
}
.legal-prose :where(a) {
  color: #34d399;
}
.legal-prose :where(hr) {
  border-color: rgba(255, 255, 255, 0.08);
}
.legal-prose :where(strong) {
  color: #fff;
}
</style>

