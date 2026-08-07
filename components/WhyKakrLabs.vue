<template>
  <section class="section-py bg-black relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="max-w-2xl">
           <h3 class="text-emerald-500 font-bold uppercase tracking-wider mb-2 text-sm">{{ content.title }}</h3>
           <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
             {{ content.builtForFuture }}
           </h2>
           <p class="mt-4 text-lg text-slate-400 max-w-xl leading-relaxed">
             {{ content.subtitle }}
           </p>
        </div>
        <div>
           <a href="https://pteri.org/Register" target="_blank" class="btn-primary group">
             {{ content.exploreTechnology }}
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
           </a>
        </div>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Card 1: Zero-custody -->
        <div class="bg-white/3 rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group border border-white/8 flex flex-col justify-between h-full relative overflow-hidden">
           <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
           <div>
             <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 relative z-10 border border-white/10">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="#669df6"></circle><path fill="#317be4" d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33C37.97,18,42,22.03,42,27z"></path><polygon fill="#fff" points="27,14 26,13 22,13 21,14 15,14 15,16 18,16 30,16 33,16 33,14"></polygon><path fill="#fff" d="M16,18v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V18H16z M24,21c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S22.9,21,24,21z M28,31h-8v-2c0-1.33,2.67-2,4-2s4,0.67,4,2V31z"></path></svg>
             </div>
             <h3 class="text-xl font-bold text-white mb-3">{{ content.zeroCustody.title }}</h3>
             <p class="text-slate-400 text-sm leading-relaxed">{{ content.zeroCustody.description }}</p>
           </div>
           <div class="mt-8 pt-6 border-t border-white/8 flex items-center text-xs font-bold text-emerald-400 tracking-wide uppercase">
             <ShieldCheckIcon class="w-4 h-4 mr-2" /> {{ content.securityFirst }}
           </div>
        </div>

        <!-- Card 2: ZK-enhanced -->
        <div class="bg-white/3 rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group border border-white/8 flex flex-col justify-between h-full relative overflow-hidden">
           <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
           <div>
             <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 relative z-10 border border-white/10">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48"><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon></svg>
             </div>
             <h3 class="text-xl font-bold text-white mb-3">{{ content.zkEnhanced.title }}</h3>
             <p class="text-slate-400 text-sm leading-relaxed">{{ content.zkEnhanced.description }}</p>
           </div>
           <div class="mt-8 pt-6 border-t border-white/8 flex items-center text-xs font-bold text-emerald-400 tracking-wide uppercase">
             <EyeSlashIcon class="w-4 h-4 mr-2" /> {{ content.privacyCore }}
           </div>
        </div>

        <!-- Card 3: Google Cloud -->
        <div class="bg-emerald-900/40 rounded-3xl p-8 hover:bg-emerald-900/60 transition-all duration-300 group border border-emerald-500/20 text-white flex flex-col justify-between h-full relative overflow-hidden">
           <div class="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
           <div>
             <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 relative z-10 border border-emerald-700 overflow-hidden">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
             </div>
             <h3 class="text-xl font-bold text-white mb-3">{{ content.googleCloud.title }}</h3>
             <p class="text-emerald-100/80 text-sm leading-relaxed">{{ content.googleCloud.description }}</p>
           </div>
           <div class="mt-8 pt-6 border-t border-emerald-500/20 flex items-center text-xs font-bold text-emerald-400 tracking-wide uppercase">
             <CloudIcon class="w-4 h-4 mr-2" /> {{ content.infrastructure }}
           </div>
        </div>

        <!-- Card 4: Litecoin PoW -->
        <div class="bg-white/3 rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group border border-white/8 flex flex-col justify-between h-full relative overflow-hidden">
           <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
           <div>
             <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 relative z-10 p-2 border border-white/10">
               <img src="/litecoin-ltc-logo.png" alt="Litecoin" class="w-full h-full object-contain" />
             </div>
             <h3 class="text-xl font-bold text-white mb-3">{{ content.litecoinPow.title }}</h3>
             <p class="text-slate-400 text-sm leading-relaxed">{{ content.litecoinPow.description }}</p>
           </div>
           <div class="mt-8 pt-6 border-t border-white/8 flex items-center text-xs font-bold text-emerald-400 tracking-wide uppercase">
             <CubeTransparentIcon class="w-4 h-4 mr-2" /> {{ content.hybridTech }}
           </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  ShieldCheckIcon,
  EyeSlashIcon,
  CloudIcon,
  CubeTransparentIcon
} from '@heroicons/vue/24/solid'

const { locale } = useI18n()

const content = computed(() => {
  const translations = {
    en: {
      title: 'Why Choose Us',
      builtForFuture: 'Built for the Future of Web3',
      subtitle: 'We combine cutting-edge cryptography with robust infrastructure to deliver a platform that is secure, private, and scalable.',
      exploreTechnology: 'Explore Pteri',
      zeroCustody: {
        title: 'Zero-custody by design',
        description: 'Only you hold the keys. No central honeypot. We ensure your assets remain truly yours through architecture that prioritizes sovereignty.'
      },
      zkEnhanced: {
        title: 'ZK-enhanced verification',
        description: 'Prove attributes without exposing sensitive data. Leverage zero-knowledge proofs to validate identity with complete privacy.'
      },
      googleCloud: {
        title: 'Google Cloud execution',
        description: 'Enterprise-grade scale and reliability. Built on infrastructure designed for high availability and low-latency global performance.'
      },
      litecoinPow: {
        title: 'Litecoin Proof-of-Work',
        description: 'Battle-tested security with privacy layers. Combining the immutable security of Proof of Work with an independent verification layer.'
      },
      securityFirst: 'Security First',
      privacyCore: 'Privacy Core',
      infrastructure: 'Infrastructure',
      hybridTech: 'Hybrid Tech'
    },
    de: {
      title: 'Warum Sie uns wählen sollten',
      builtForFuture: 'Gebaut für die Zukunft des Web3',
      subtitle: 'Wir kombinieren modernste Kryptographie mit robuster Infrastruktur, um eine Plattform zu liefern, die sicher, privat und skalierbar ist.',
      exploreTechnology: 'Pteri erkunden',
      zeroCustody: {
        title: 'Zero-Custody per Design',
        description: 'Nur Sie besitzen die Schlüssel. Kein zentraler Angriffspunkt. Wir stellen sicher, dass Ihre Vermögenswerte wirklich Ihnen gehören, durch eine Architektur, die Souveränität priorisiert.'
      },
      zkEnhanced: {
        title: 'ZK-erweiterte Verifizierung',
        description: 'Attribute beweisen, ohne sensible Daten offenzulegen. Nutzen Sie Zero-Knowledge-Proofs, um Identität mit vollständiger Privatsphäre zu validieren.'
      },
      googleCloud: {
        title: 'Google Cloud Ausführung',
        description: 'Skalierbarkeit und Zuverlässigkeit auf Unternehmensniveau. Gebaut auf einer Infrastruktur, die für hohe Verfügbarkeit und globale Leistung mit geringer Latenz ausgelegt ist.'
      },
      litecoinPow: {
        title: 'Litecoin Proof-of-Work',
        description: 'Kampferprobte Sicherheit mit Datenschutzebenen. Kombination der unveränderlichen Sicherheit von Proof of Work mit einer unabhängigen Verifizierungsschicht.'
      },
      securityFirst: 'Sicherheit zuerst',
      privacyCore: 'Datenschutzkern',
      infrastructure: 'Infrastruktur',
      hybridTech: 'Hybride Technologie'
    },
    es: {
      title: 'Por qué elegirnos',
      builtForFuture: 'Construido para el Futuro de la Web3',
      subtitle: 'Combinamos criptografía de vanguardia con una infraestructura robusta para ofrecer una plataforma que es segura, privada y escalable.',
      exploreTechnology: 'Explorar Tecnología',
      zeroCustody: {
        title: 'Cero custodia por diseño',
        description: 'Solo usted tiene las llaves. Sin honeypot central. Aseguramos que sus activos permanezcan verdaderamente suyos a través de una arquitectura que prioriza la soberanía.'
      },
      zkEnhanced: {
        title: 'Verificación mejorada con ZK',
        description: 'Pruebe atributos sin exponer datos sensibles. Aproveche las pruebas de conocimiento cero para validar la identidad con total privacidad.'
      },
      googleCloud: {
        title: 'Ejecución en Google Cloud',
        description: 'Escala y confiabilidad de grado empresarial. Construido sobre infraestructura diseñada para alta disponibilidad y rendimiento global de baja latencia.'
      },
      litecoinPow: {
        title: 'Litecoin Proof-of-Work',
        description: 'Seguridad probada en batalla con capas de privacidad. Combinando la seguridad inmutable de Proof of Work con una capa de verificación independiente.'
      },
      securityFirst: 'Seguridad Primero',
      privacyCore: 'Núcleo de Privacidad',
      infrastructure: 'Infraestructura',
      hybridTech: 'Tecnología Híbrida'
    },
    ja: {
      title: '当社を選ぶ理由',
      builtForFuture: 'Web3の未来のために構築',
      subtitle: '最先端の暗号技術と堅牢なインフラを組み合わせ、安全でプライベート、かつスケーラブルなプラットフォームを提供します。',
      exploreTechnology: '技術を探索',
      zeroCustody: {
        title: '設計によるゼロカストディ',
        description: '鍵を持つのはあなただけです。中央のハニーポットはありません。主権を優先するアーキテクチャを通じて、資産が本当にあなたのものであることを保証します。'
      },
      zkEnhanced: {
        title: 'ZK強化検証',
        description: '機密データを公開することなく属性を証明します。ゼロ知識証明を活用して、完全なプライバシーでIDを検証します。'
      },
      googleCloud: {
        title: 'Google Cloud実行',
        description: 'エンタープライズグレードのスケールと信頼性。高可用性と低遅延のグローバルパフォーマンスのために設計されたインフラ上に構築されています。'
      },
      litecoinPow: {
        title: 'Litecoin Proof-of-Work',
        description: 'プライバシーレイヤーを備えた実戦で証明されたセキュリティ。Proof of Workの不変のセキュリティとMimbleWimble拡張ブロックを組み合わせています。'
      },
      securityFirst: 'セキュリティ第一',
      privacyCore: 'プライバシーコア',
      infrastructure: 'インフラストラクチャ',
      hybridTech: 'ハイブリッド技術'
    },
    ar: {
      title: 'لماذا تختارنا',
      builtForFuture: 'مبني لمستقبل Web3',
      subtitle: 'نجمع بين أحدث تقنيات التشفير والبنية التحتية القوية لتقديم منصة آمنة وخاصة وقابلة للتوسع.',
      exploreTechnology: 'استكشف Pteri',
      zeroCustody: {
        title: 'صفر حضانة بالتصميم',
        description: 'أنت وحدك تمتلك المفاتيح. لا يوجد مركز استهداف. نضمن أن تظل أصولك ملكك الحقيقي من خلال بنية تعطي الأولوية للسيادة.'
      },
      zkEnhanced: {
        title: 'التحقق المحسّن بـ ZK',
        description: 'أثبت الخصائص دون الكشف عن البيانات الحساسة. استفد من إثباتات المعرفة الصفرية للتحقق من الهوية بخصوصية كاملة.'
      },
      googleCloud: {
        title: 'تنفيذ Google Cloud',
        description: 'حجم وموثوقية على مستوى المؤسسات. مبني على بنية تحتية مصممة لتوافر عالٍ وأداء عالمي منخفض الكمون.'
      },
      litecoinPow: {
        title: 'Litecoin Proof-of-Work',
        description: 'أمان مُختبر في المعركة مع طبقات الخصوصية. يجمع بين الأمان الثابت لإثبات العمل وكتل امتداد MimbleWimble.'
      },
      securityFirst: 'الأمان أولاً',
      privacyCore: 'جوهر الخصوصية',
      infrastructure: 'البنية التحتية',
      hybridTech: 'التقنية الهجينة'
    }
  }
  return translations[locale.value] || translations.en
})
</script>

