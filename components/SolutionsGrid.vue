<template>
  <section class="py-12 sm:section-py lg:section-py bg-slate-50 dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          {{ translations.title }}
        </h2>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          {{ translations.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(solution, index) in solutions"
          :key="solution.id"
          class="group bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600 hover:-translate-y-1"
        >
          <!-- Icon -->
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl" :class="solution.iconBg">
            <component :is="solution.icon" class="w-8 h-8" :class="solution.iconColor" />
          </div>

          <!-- Content -->
          <div class="text-center">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {{ getTranslation(solution.id, 'title') }}
            </h3>
            <p class="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
              {{ getTranslation(solution.id, 'description') }}
            </p>

            <!-- Key Features -->
            <ul class="space-y-2 mb-6 text-left">
              <li v-for="feature in getTranslation(solution.id, 'features')" :key="feature" class="flex items-start text-sm">
                <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-slate-600 dark:text-slate-300">{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA -->
            <a 
              :href="solution.link" 
              :target="solution.external ? '_blank' : undefined"
              class="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 group-hover:shadow-lg"
            >
              {{ getTranslation(solution.id, 'cta') }}
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12 lg:mt-16">
        <p class="text-lg text-slate-600 dark:text-slate-300 mb-6">{{ translations.bottomText }}</p>
        <a href="/contact" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-lg">
          {{ translations.contactText }}
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  ShieldCheckIcon, 
  IdentificationIcon, 
  CpuChipIcon,
  ServerIcon,
  BuildingOfficeIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'

const { locale } = useI18n()

const solutions = [
  {
    id: 'authentication',
    icon: ShieldCheckIcon,
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
    link: '/authentication',
    external: false
  },
  {
    id: 'identity',
    icon: IdentificationIcon,
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    link: '/identity',
    external: false
  },
  {
    id: 'iot',
    icon: CpuChipIcon,
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    link: '/iot-security',
    external: false
  },
  {
    id: 'infrastructure',
    icon: ServerIcon,
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    link: '/blockchain-infrastructure',
    external: false
  },
  {
    id: 'enterprise',
    icon: BuildingOfficeIcon,
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
    link: '/enterprise',
    external: false
  },
  {
    id: 'ai',
    icon: SparklesIcon,
    iconBg: 'bg-pink-100 dark:bg-pink-900/30',
    iconColor: 'text-pink-600 dark:text-pink-400',
    link: '/intelligence',
    external: false
  }
]

const translations = computed(() => {
  const texts = {
    en: {
      title: 'Complete Solutions Suite',
      subtitle: 'Everything you need to build secure, scalable blockchain applications',
      bottomText: 'Need a custom solution for your enterprise?',
      contactText: 'Contact Our Team',
      authentication: {
        title: 'Authentication',
        description: 'Passwordless authentication using cryptographic proofs',
        features: ['No passwords required', 'Biometric security', 'Zero-knowledge proofs', 'Enterprise SSO'],
        cta: 'Learn More'
      },
      identity: {
        title: 'Identity',
        description: 'User- or organization-controlled identity management and verification',
        features: ['KYC/AML compliance', 'Customer-controlled ID', 'Privacy-preserving', 'Global standards'],
        cta: 'Explore Identity'
      },
      iot: {
        title: 'IoT Security',
        description: 'Secure device identity and firmware signing',
        features: ['Device certificates', 'Firmware signing', 'OTA updates', 'Zero-trust network'],
        cta: 'Secure Devices'
      },
      infrastructure: {
        title: 'Blockchain Infrastructure',
        description: 'Enterprise-grade Litecoin nodes and APIs',
        features: ['Availability SLA', 'Global CDN', 'Auto-scaling', 'Real-time monitoring'],
        cta: 'Get Started'
      },
      enterprise: {
        title: 'Enterprise Security',
        description: 'White-label solutions for large organizations',
        features: ['Custom branding', 'Dedicated support', 'SLA guarantees', 'Compliance ready'],
        cta: 'Contact Sales'
      },
      ai: {
        title: 'AI for Developers',
        description: 'AI-powered development and security tools',
        features: ['Smart contracts', 'Security audits', 'Code generation', 'Threat detection'],
        cta: 'Try AI Tools'
      }
    },
    de: {
      title: 'Komplette Lösungssuite',
      subtitle: 'Alles was Sie brauchen, um sichere, skalierbare Blockchain-Anwendungen zu erstellen',
      bottomText: 'Benötigen Sie eine maßgeschneiderte Lösung für Ihr Unternehmen?',
      contactText: 'Kontaktieren Sie unser Team',
      authentication: {
        title: 'Authentifizierung',
        description: 'Passwortlose Authentifizierung mit kryptographischen Beweisen',
        features: ['Keine Passwörter erforderlich', 'Biometrische Sicherheit', 'Zero-Knowledge-Beweise', 'Enterprise SSO'],
        cta: 'Mehr erfahren'
      },
      identity: {
        title: 'Identität',
        description: 'Selbst-souveräne Identitätsverwaltung und -verifizierung',
        features: ['KYC/AML-Compliance', 'Selbst-souveräne ID', 'Datenschutz-bewahrend', 'Globale Standards'],
        cta: 'Identität erkunden'
      },
      iot: {
        title: 'IoT-Sicherheit',
        description: 'Sichere Geräteidentität und Firmware-Signierung',
        features: ['Gerätezertifikate', 'Firmware-Signierung', 'OTA-Updates', 'Zero-Trust-Netzwerk'],
        cta: 'Geräte sichern'
      },
      infrastructure: {
        title: 'Infrastruktur',
        description: 'Enterprise-grade Litecoin-Knoten und APIs',
        features: ['Verfügbarkeits-SLA', 'Globales CDN', 'Auto-Skalierung', 'Echtzeit-Überwachung'],
        cta: 'Loslegen'
      },
      enterprise: {
        title: 'Unternehmen',
        description: 'White-Label-Lösungen für große Organisationen',
        features: ['Custom Branding', 'Dedizierter Support', 'SLA-Garantien', 'Compliance-bereit'],
        cta: 'Vertrieb kontaktieren'
      },
      ai: {
        title: 'KI-Tools',
        description: 'KI-gestützte Entwicklungs- und Sicherheitstools',
        features: ['Smart Contracts', 'Sicherheitsaudits', 'Code-Generierung', 'Bedrohungserkennung'],
        cta: 'KI-Tools ausprobieren'
      }
    },
    es: {
      title: 'Suite de Soluciones Completa',
      subtitle: 'Todo lo que necesitas para construir aplicaciones blockchain seguras y escalables',
      bottomText: '¿Necesitas una solución personalizada para tu empresa?',
      contactText: 'Contacta a Nuestro Equipo',
      authentication: {
        title: 'Autenticación',
        description: 'Autenticación sin contraseñas usando pruebas criptográficas',
        features: ['No se requieren contraseñas', 'Seguridad biométrica', 'Pruebas de conocimiento cero', 'SSO empresarial'],
        cta: 'Saber Más'
      },
      identity: {
        title: 'Identidad',
        description: 'Gestión y verificación de identidad auto-soberana',
        features: ['Cumplimiento KYC/AML', 'ID auto-soberana', 'Preservación de privacidad', 'Estándares globales'],
        cta: 'Explorar Identidad'
      },
      iot: {
        title: 'Seguridad IoT',
        description: 'Identidad segura de dispositivos y firma de firmware',
        features: ['Certificados de dispositivo', 'Firma de firmware', 'Actualizaciones OTA', 'Red de confianza cero'],
        cta: 'Asegurar Dispositivos'
      },
      infrastructure: {
        title: 'Infraestructura',
        description: 'Nodos Litecoin y APIs de grado empresarial',
        features: ['SLA de disponibilidad', 'CDN global', 'Auto-escalado', 'Monitoreo en tiempo real'],
        cta: 'Comenzar'
      },
      enterprise: {
        title: 'Empresa',
        description: 'Soluciones de marca blanca para grandes organizaciones',
        features: ['Marca personalizada', 'Soporte dedicado', 'Garantías SLA', 'Listo para cumplimiento'],
        cta: 'Contactar Ventas'
      },
      ai: {
        title: 'Herramientas IA',
        description: 'Herramientas de desarrollo y seguridad impulsadas por IA',
        features: ['Contratos inteligentes', 'Auditorías de seguridad', 'Generación de código', 'Detección de amenazas'],
        cta: 'Probar Herramientas IA'
      }
    },
    ja: {
      title: '完全ソリューションスイート',
      subtitle: '安全でスケーラブルなブロックチェーンアプリケーションを構築するために必要なすべて',
      bottomText: 'エンタープライズ向けのカスタムソリューションが必要ですか？',
      contactText: 'チームに連絡',
      authentication: {
        title: '認証',
        description: '暗号学的証明を使用したパスワードレス認証',
        features: ['パスワード不要', '生体認証セキュリティ', 'ゼロ知識証明', 'エンタープライズSSO'],
        cta: '詳細を見る'
      },
      identity: {
        title: 'アイデンティティ',
        description: '自己主権アイデンティティ管理と検証',
        features: ['KYC/AMLコンプライアンス', '自己主権ID', 'プライバシー保護', 'グローバル標準'],
        cta: 'アイデンティティを探索'
      },
      iot: {
        title: 'IoTセキュリティ',
        description: '安全なデバイスアイデンティティとファームウェア署名',
        features: ['デバイス証明書', 'ファームウェア署名', 'OTAアップデート', 'ゼロトラストネットワーク'],
        cta: 'デバイスを保護'
      },
      infrastructure: {
        title: 'インフラストラクチャ',
        description: 'エンタープライズグレードのLitecoinノードとAPI',
        features: ['稼働率SLA', 'グローバルCDN', '自動スケーリング', 'リアルタイム監視'],
        cta: '開始'
      },
      enterprise: {
        title: 'エンタープライズ',
        description: '大規模組織向けのホワイトラベルソリューション',
        features: ['カスタムブランディング', '専用サポート', 'SLA保証', 'コンプライアンス対応'],
        cta: '営業に連絡'
      },
      ai: {
        title: 'AIツール',
        description: 'AI搭載の開発およびセキュリティツール',
        features: ['スマートコントラクト', 'セキュリティ監査', 'コード生成', '脅威検出'],
        cta: 'AIツールを試す'
      }
    },
    ar: {
      title: 'مجموعة حلول كاملة',
      subtitle: 'كل ما تحتاجه لبناء تطبيقات blockchain آمنة وقابلة للتطوير',
      bottomText: 'هل تحتاج حلاً مخصصًا لمؤسستك؟',
      contactText: 'اتصل بفريقنا',
      authentication: {
        title: 'المصادقة',
        description: 'مصادقة بدون كلمات مرور باستخدام الأدلة التشفيرية',
        features: ['لا حاجة لكلمات مرور', 'أمان بيومتري', 'أدلة معرفة صفرية', 'SSO مؤسسي'],
        cta: 'اعرف المزيد'
      },
      identity: {
        title: 'الهوية',
        description: 'إدارة والتحقق من الهوية ذاتية السيادة',
        features: ['امتثال KYC/AML', 'هوية ذاتية السيادة', 'حفظ الخصوصية', 'معايير عالمية'],
        cta: 'استكشف الهوية'
      },
      iot: {
        title: 'أمان إنترنت الأشياء',
        description: 'هوية آمنة للأجهزة وتوقيع البرامج الثابتة',
        features: ['شهادات الأجهزة', 'توقيع البرامج الثابتة', 'تحديثات OTA', 'شبكة عدم الثقة'],
        cta: 'تأمين الأجهزة'
      },
      infrastructure: {
        title: 'البنية التحتية',
        description: 'عقد Litecoin وواجهات برمجة التطبيقات من الدرجة المؤسسية',
        features: ['اتفاقية مستوى خدمة للتوافر', 'CDN عالمي', 'تحجيم تلقائي', 'مراقبة في الوقت الفعلي'],
        cta: 'ابدأ'
      },
      enterprise: {
        title: 'المؤسسة',
        description: 'حلول العلامة البيضاء للمؤسسات الكبيرة',
        features: ['علامة تجارية مخصصة', 'دعم مخصص', 'ضمانات SLA', 'جاهز للامتثال'],
        cta: 'اتصل بالمبيعات'
      },
      ai: {
        title: 'أدوات الذكاء الاصطناعي',
        description: 'أدوات التطوير والأمان المدعومة بالذكاء الاصطناعي',
        features: ['عقود ذكية', 'تدقيق أمني', 'توليد الكود', 'كشف التهديدات'],
        cta: 'جرب أدوات الذكاء الاصطناعي'
      }
    }
  }
  return texts[locale.value] || texts.en
})

const getTranslation = (solutionId: string, key: string) => {
  return translations.value[solutionId]?.[key] || ''
}
</script>
