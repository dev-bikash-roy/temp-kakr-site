<template>
  <section class="section-py bg-black border-t border-white/5 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none" style="background-image: url('/hero-bg.svg'); background-size: cover; opacity: 0.03;"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-20">
        <h2 class="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {{ content.title }}
        </h2>
        <p class="text-xl text-slate-400">
          {{ content.subtitle }}
        </p>
      </div>

      <div class="relative flex flex-col lg:flex-row items-stretch justify-center gap-0 lg:gap-0">
        
        <!-- Left Side: Legacy Stack -->
        <div class="w-full max-w-sm relative z-10">
          <div class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 h-8 flex items-center">{{ content.legacyStack }}</div>
          
          <div class="space-y-4">
            <div class="group relative bg-white/5 hover:bg-white/8 transition-colors rounded-xl p-5 flex items-center justify-between border border-white/10 h-[72px]">
              <span class="font-bold text-slate-200 text-lg">{{ content.passwords }}</span>
              <div class="flex gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-red-400/50"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-red-400/50"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-red-400/50"></span>
              </div>
            </div>
            <div class="group relative bg-white/5 hover:bg-white/8 transition-colors rounded-xl p-5 flex items-center justify-between border border-white/10 h-[72px]">
              <span class="font-bold text-slate-200 text-lg">{{ content.mfa }}</span>
              <DevicePhoneMobileIcon class="w-6 h-6 text-red-400/60" />
            </div>
            <div class="group relative bg-white/5 hover:bg-white/8 transition-colors rounded-xl p-5 flex items-center justify-between border border-white/10 h-[72px]">
              <span class="font-bold text-slate-200 text-lg">{{ content.iam }}</span>
              <UserGroupIcon class="w-6 h-6 text-red-400/60" />
            </div>
            <div class="group relative bg-white/5 hover:bg-white/8 transition-colors rounded-xl p-5 flex items-center justify-between border border-white/10 h-[72px]">
              <span class="font-bold text-slate-200 text-lg">{{ content.fraudDetection }}</span>
              <MagnifyingGlassIcon class="w-6 h-6 text-red-400/60" />
            </div>
            <div class="group relative bg-white/5 hover:bg-white/8 transition-colors rounded-xl p-5 flex items-center justify-between border border-white/10 h-[72px]">
              <span class="font-bold text-slate-200 text-lg">{{ content.authTokens }}</span>
              <KeyIcon class="w-6 h-6 text-red-400/60" />
            </div>
          </div>
        </div>

        <!-- Center: Clean connector lines -->
        <div class="hidden lg:block relative w-32 flex-shrink-0">
          <!-- spacer to push lines below the label row (h-8 + mb-4 = 48px) -->
          <div class="h-8 mb-4"></div>
          <svg width="128" height="440" class="overflow-visible">
            <!-- row height 72px + gap 16px = 88px per row, center of each row at 36, 124, 212, 300, 388 -->
            <line x1="0" y1="36"  x2="128" y2="36"  stroke="#10b981" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>
            <line x1="0" y1="124" x2="128" y2="124" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>
            <line x1="0" y1="212" x2="128" y2="212" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>
            <line x1="0" y1="300" x2="128" y2="300" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>
            <line x1="0" y1="388" x2="128" y2="388" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>
          </svg>
        </div>

        <!-- Right Side: Kakr Solution -->
        <div class="w-full max-w-md relative z-10">
          <div class="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4 h-8 flex items-center">{{ content.kakrSolution }}</div>
           
          <div class="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 lg:p-12 text-center shadow-2xl shadow-emerald-500/30 text-white relative overflow-hidden sm:hover:scale-[1.02] transition-transform duration-300" style="will-change: transform;">
            <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 20px 20px;"></div>
            <div class="relative z-10 flex flex-col items-center">
              <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-8 border border-white/10">
                <ShieldCheckIcon class="w-10 h-10 text-white" />
              </div>
              <h3 class="text-4xl font-bold mb-8 tracking-tight">{{ content.trustLayer }}</h3>
              <div class="w-16 h-1 bg-white/30 rounded-full mb-8"></div>
              <div class="flex flex-nowrap justify-center items-center gap-2 mb-8">
                <span class="px-3 py-1.5 bg-emerald-800/40 rounded-full text-xs font-medium border border-emerald-400/30 shadow-sm whitespace-nowrap">{{ content.energy }}</span>
                <span class="text-emerald-200 text-xs select-none">•</span>
                <span class="px-3 py-1.5 bg-emerald-800/40 rounded-full text-xs font-medium border border-emerald-400/30 shadow-sm whitespace-nowrap">{{ content.proof }}</span>
                <span class="text-emerald-200 text-xs select-none">•</span>
                <span class="px-3 py-1.5 bg-emerald-800/40 rounded-full text-xs font-medium border border-emerald-400/30 shadow-sm whitespace-nowrap">{{ content.cryptography }}</span>
              </div>
              <p class="text-emerald-50 text-sm leading-relaxed max-w-sm mx-auto opacity-90 font-medium">{{ content.consolidating }}</p>
            </div>
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
  DevicePhoneMobileIcon, 
  UserGroupIcon, 
  MagnifyingGlassIcon, 
  KeyIcon,
} from '@heroicons/vue/24/outline'

import { ShieldCheckIcon } from '@heroicons/vue/24/solid'

const { locale } = useI18n()

const content = computed(() => {
  const translations = {
    en: {
      title: 'Replace the Stack',
      subtitle: 'Kakr replaces security categories - not just products.',
      legacyStack: 'Legacy Stack',
      passwords: 'Passwords',
      mfa: 'MFA (TOTP)',
      iam: 'IAM / SSO',
      fraudDetection: 'Fraud Detection',
      authTokens: 'Auth Tokens',
      kakrSolution: 'Kakr Solution',
      trustLayer: 'Kakr Trust Layer',
      energy: 'Energy',
      proof: 'Proof',
      cryptography: 'Cryptography',
      consolidating: 'Consolidating fragmented security into a single unified trust protocol.',
      trustedBy: 'Trusted by modern security teams'
    },
    de: {
      title: 'Den Stack ersetzen',
      subtitle: 'Kakr ersetzt Sicherheitskategorien - nicht nur Produkte.',
      legacyStack: 'Legacy Stack',
      passwords: 'Passwörter',
      mfa: 'MFA (TOTP)',
      iam: 'IAM / SSO',
      fraudDetection: 'Betrugserkennung',
      authTokens: 'Auth-Token',
      kakrSolution: 'Kakr-Lösung',
      trustLayer: 'Kakr Vertrauensschicht',
      energy: 'Energie',
      proof: 'Beweis',
      cryptography: 'Kryptographie',
      consolidating: 'Fragmentierte Sicherheit in einem einzigen einheitlichen Vertrauensprotokoll konsolidieren.',
      trustedBy: 'Vertraut von modernen Sicherheitsteams'
    },
    es: {
      title: 'Reemplazar el Stack',
      subtitle: 'Kakr reemplaza categorías de seguridad, no solo productos.',
      legacyStack: 'Stack Heredado',
      passwords: 'Contraseñas',
      mfa: 'MFA (TOTP)',
      iam: 'IAM / SSO',
      fraudDetection: 'Detección de Fraude',
      authTokens: 'Tokens de Autenticación',
      kakrSolution: 'Solución Kakr',
      trustLayer: 'Capa de Confianza Kakr',
      energy: 'Energía',
      proof: 'Prueba',
      cryptography: 'Criptografía',
      consolidating: 'Consolidando la seguridad fragmentada en un protocolo de confianza unificado.',
      trustedBy: 'Confiado por equipos de seguridad modernos'
    },
    ja: {
      title: 'スタックを置き換える',
      subtitle: 'Kakrは製品だけでなく、セキュリティカテゴリを置き換えます。',
      legacyStack: 'レガシースタック',
      passwords: 'パスワード',
      mfa: 'MFA (TOTP)',
      iam: 'IAM / SSO',
      fraudDetection: '不正検出',
      authTokens: '認証トークン',
      kakrSolution: 'Kakrソリューション',
      trustLayer: 'Kakrトラストレイヤー',
      energy: 'エネルギー',
      proof: '証明',
      cryptography: '暗号技術',
      consolidating: '断片化したセキュリティを単一の統一された信頼プロトコルに統合します。',
      trustedBy: '現代のセキュリティチームに信頼されています'
    },
    ar: {
      title: 'استبدال المجموعة',
      subtitle: 'تستبدل Kakr فئات الأمان - وليس المنتجات فقط.',
      legacyStack: 'المجموعة القديمة',
      passwords: 'كلمات المرور',
      mfa: 'MFA (TOTP)',
      iam: 'IAM / SSO',
      fraudDetection: 'كشف الاحتيال',
      authTokens: 'رموز المصادقة',
      kakrSolution: 'حل Kakr',
      trustLayer: 'طبقة ثقة Kakr',
      energy: 'الطاقة',
      proof: 'الإثبات',
      cryptography: 'التشفير',
      consolidating: 'توحيد الأمان المجزأ في بروتوكول ثقة موحد واحد.',
      trustedBy: 'موثوق به من قبل فرق الأمان الحديثة'
    }
  }
  return translations[locale.value] || translations.en
})
</script>
