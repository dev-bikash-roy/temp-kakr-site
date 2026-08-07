<template>
  <section class="section-py bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mx-auto mb-16 text-center" data-aos="fade-up" data-aos-delay="50">
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight drop-shadow-sm">
          {{ translations.title }}
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
          {{ translations.description }}
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        <div 
          v-for="industry in industries" 
          :key="industry.id"
          class="group relative rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-2xl px-8 py-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          data-aos="fade-up"
          :data-aos-delay="industry.delay"
        >
          <!-- Gradient Background on Hover -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" :class="industry.bgGradient"></div>
          
          <!-- Icon -->
          <div class="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg" :class="industry.bg">
            <component :is="industry.icon" class="w-10 h-10" :class="industry.color" />
          </div>
          
          <!-- Content -->
          <div class="relative z-10">
            <h3 class="font-bold text-xl mb-3 transition-colors duration-300" :class="[industry.color, 'group-hover:text-slate-900']">
              {{ translations[industry.id]?.title }}
            </h3>
            <p class="text-gray-600 text-base leading-relaxed">
              {{ translations[industry.id]?.desc }}
            </p>
          </div>

          <!-- Bottom Accent Line -->
          <div class="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" :class="industry.accentBg"></div>
        </div>
      </div>
    </div>

    <!-- Background Decoration -->
    <div class="absolute top-10 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  TruckIcon, 
  CpuChipIcon, 
  HeartIcon 
} from '@heroicons/vue/24/outline'

const { locale } = useI18n()

const translations = computed(() => {
  const texts = {
    en: {
      title: 'Solutions Across Every Industry',
      description: 'Tailored solutions for every sector',
      auth: { title: 'Authentication', desc: 'Replace SMS/TOTP MFA with decentralized 2FA.' },
      identity: { title: 'Identity Verification', desc: 'KYC/AML-compliant reusable identity.' },
      supply: { title: 'Supply Chain', desc: 'Track assets with immutable proofs on Litecoin.' },
      iot: { title: 'IoT Security', desc: 'Device-native identity without centralized servers.' },
      healthcare: { title: 'Healthcare', desc: 'Patient-owned data records secured by PoW.' }
    },
    de: {
      title: 'Branchen, die wir bedienen',
      description: 'Maßgeschneiderte Lösungen für jeden Sektor',
      auth: { title: 'Authentifizierung', desc: 'Ersetzen Sie SMS/TOTP-MFA durch dezentrale 2FA.' },
      identity: { title: 'Identitätsprüfung', desc: 'KYC/AML-konforme wiederverwendbare Identität.' },
      supply: { title: 'Lieferkette', desc: 'Verfolgen Sie Assets mit unveränderlichen Nachweisen auf Litecoin.' },
      iot: { title: 'IoT-Sicherheit', desc: 'Gerätenative Identität ohne zentrale Server.' },
      healthcare: { title: 'Gesundheitswesen', desc: 'Patienteneigene Datensätze, gesichert durch PoW.' }
    },
    es: {
      title: 'Soluciones en Cada Industria',
      description: 'Soluciones a medida para cada sector',
      auth: { title: 'Autenticación', desc: 'Reemplace SMS/TOTP MFA con 2FA descentralizado.' },
      identity: { title: 'Verificación de Identidad', desc: 'Identidad reutilizable compatible con KYC/AML.' },
      supply: { title: 'Cadena de Suministro', desc: 'Rastree activos con pruebas inmutables en Litecoin.' },
      iot: { title: 'Seguridad IoT', desc: 'Identidad nativa del dispositivo sin servidores centralizados.' },
      healthcare: { title: 'Salud', desc: 'Registros de datos propiedad del paciente asegurados por PoW.' }
    },
    ja: {
      title: 'あらゆる業界向けのソリューション',
      description: 'あらゆるセクター向けのカスタマイズされたソリューション',
      auth: { title: '認証', desc: 'SMS/TOTP MFAを分散型2FAに置き換えます。' },
      identity: { title: '本人確認', desc: 'KYC/AML準拠の再利用可能なアイデンティティ。' },
      supply: { title: 'サプライチェーン', desc: 'Litecoin上の不変の証明で資産を追跡します。' },
      iot: { title: 'IoTセキュリティ', desc: '中央サーバーなしのデバイスネイティブアイデンティティ。' },
      healthcare: { title: 'ヘルスケア', desc: 'PoWで保護された患者所有のデータ記録。' }
    },
    ar: {
      title: 'حلول عبر كل صناعة',
      description: 'حلول مخصصة لكل قطاع',
      auth: { title: 'المصادقة', desc: 'استبدال الرسائل القصيرة/TOTP MFA بـ 2FA اللامركزية.' },
      identity: { title: 'التحقق من الهوية', desc: 'هوية قابلة لإعادة الاستخدام متوافقة مع KYC/AML.' },
      supply: { title: 'سلسلة التوريد', desc: 'تتبع الأصول مع إثباتات غير قابلة للتغيير على Litecoin.' },
      iot: { title: 'أمن إنترنت الأشياء', desc: 'هوية أصلية للجهاز بدون خوادم مركزية.' },
      healthcare: { title: 'الرعاية الصحية', desc: 'سجلات بيانات مملوكة للمريض مؤمنة بواسطة PoW.' }
    }
  }
  return texts[locale.value] || texts.en
})

const industries = [
  { 
    id: 'auth', 
    icon: ShieldCheckIcon, 
    color: 'text-cyan-600', 
    bg: 'bg-cyan-50',
    bgGradient: 'bg-gradient-to-br from-cyan-50/50 to-blue-50/50',
    accentBg: 'bg-cyan-500',
    delay: 0
  },
  { 
    id: 'identity', 
    icon: UserGroupIcon, 
    color: 'text-blue-600', 
    bg: 'bg-blue-50',
    bgGradient: 'bg-gradient-to-br from-blue-50/50 to-indigo-50/50',
    accentBg: 'bg-blue-500',
    delay: 100
  },
  { 
    id: 'supply', 
    icon: TruckIcon, 
    color: 'text-purple-600', 
    bg: 'bg-purple-50',
    bgGradient: 'bg-gradient-to-br from-purple-50/50 to-pink-50/50',
    accentBg: 'bg-purple-500',
    delay: 200
  },
  { 
    id: 'iot', 
    icon: CpuChipIcon, 
    color: 'text-orange-600', 
    bg: 'bg-orange-50',
    bgGradient: 'bg-gradient-to-br from-orange-50/50 to-amber-50/50',
    accentBg: 'bg-orange-500',
    delay: 300
  },
  { 
    id: 'healthcare', 
    icon: HeartIcon, 
    color: 'text-green-600', 
    bg: 'bg-green-50',
    bgGradient: 'bg-gradient-to-br from-green-50/50 to-emerald-50/50',
    accentBg: 'bg-green-500',
    delay: 400
  }
]
</script>
