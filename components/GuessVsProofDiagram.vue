<template>
  <section class="section-py bg-black border-t border-white/5 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(16,185,129,0.06) 0%, transparent 70%);"></div>

    <div class="container-custom relative z-10">
      <!-- Header -->
      <div class="max-w-4xl mx-auto text-center mb-14" data-aos="fade-up">
        <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6">{{ content.title }}</h2>
        <p class="text-lg text-slate-400 leading-relaxed max-w-3xl lg:max-w-none mx-auto lg:whitespace-nowrap">{{ content.description }}</p>
      </div>

      <!-- Two panels -->
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch" data-aos="fade-up" data-aos-delay="100">

        <!-- LEFT: LEGACY: GUESS -->
        <div class="rounded-3xl overflow-hidden border border-red-500/30 flex flex-col" style="box-shadow: 0 0 30px rgba(220,38,38,0.08);">
          <!-- Header bar -->
          <div class="px-6 py-4 text-center font-black text-white text-lg tracking-widest uppercase" style="background: #dc2626;">
            {{ content.legacyLabel }}
          </div>
          <!-- Body -->
          <div class="p-8 flex flex-col items-center justify-center gap-6 flex-1" style="background: rgba(220,38,38,0.04);">
            <!-- 3 inputs + arrow + FRAUD -->
            <div class="flex items-center gap-4 w-full justify-center">
              <!-- Input nodes -->
              <div class="flex flex-col gap-3">
                <div v-for="item in legacyInputs" :key="item.label" class="legacy-input-node flex flex-col items-center gap-2 px-5 py-4 rounded-xl w-32">
                  <span v-html="item.icon"></span>
                  <span class="text-white text-sm font-semibold text-center">{{ item.label }}</span>
                </div>
              </div>

              <!-- Arrow with traveling dot -->
              <div class="arrow-track flex items-center relative">
                <div class="w-10 h-px bg-white/30"></div>
                <div class="travel-dot travel-dot--red"></div>
                <svg width="8" height="12" viewBox="0 0 8 12"><path d="M8 6L0 0v12z" fill="rgba(255,255,255,0.5)"/></svg>
              </div>

              <!-- FRAUD box -->
              <div class="fraud-box fraud-pulse rounded-2xl px-7 py-6 flex flex-col items-center gap-2 min-w-[110px]">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke-width="2"/>
                  <path stroke-linecap="round" stroke-width="2" d="M15 9l-6 6M9 9l6 6"/>
                </svg>
                <span class="text-white font-black text-xl tracking-widest">{{ content.fraudLabel || 'FRAUD' }}</span>
              </div>
            </div>

            <!-- Caption -->
            <p class="text-slate-400 text-sm font-semibold mt-auto pt-4">{{ content.legacyCaption }}</p>
          </div>
        </div>

        <!-- RIGHT: PTERI: PROOF -->
        <div class="rounded-3xl overflow-hidden border border-emerald-500/40 flex flex-col" style="box-shadow: 0 0 30px rgba(16,185,129,0.12);">
          <!-- Header bar -->
          <div class="px-6 py-4 text-center font-black text-white text-lg tracking-widest uppercase" style="background: #16a34a;">
            {{ content.pteriLabel }}
          </div>
          <!-- Body -->
          <div class="p-8 flex flex-col items-center justify-center gap-6 flex-1" style="background: rgba(16,185,129,0.04);">
            <!-- PTERI logo -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="56" height="56">
              <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/>
              <polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/>
            </svg>

            <!-- Sig → ACCESS flow -->
            <div class="flex items-center gap-4 w-full justify-center">
              <!-- Cryptographic Signature box -->
              <div class="sig-node rounded-xl px-5 py-5 flex flex-col items-center gap-2 min-w-[120px]">
                <svg class="w-9 h-9 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              <span class="text-white text-xs font-semibold text-center leading-tight" style="white-space: pre-line;">{{ content.sigLabel }}</span>
              </div>

              <!-- Arrow with traveling dot -->
              <div class="arrow-track flex items-center relative">
                <div class="w-8 h-px bg-white/30"></div>
                <div class="travel-dot travel-dot--green"></div>
                <svg width="8" height="12" viewBox="0 0 8 12"><path d="M8 6L0 0v12z" fill="rgba(255,255,255,0.4)"/></svg>
              </div>

              <!-- ACCESS box -->
              <div class="access-box access-pulse rounded-2xl px-7 py-6 flex flex-col items-center gap-2 min-w-[110px]">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke-width="2"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 12l3 3 5-5"/>
                </svg>
                <span class="text-white font-black text-xl tracking-widest">{{ content.accessLabel || 'ACCESS' }}</span>
              </div>
            </div>

            <!-- Caption -->
            <p class="text-slate-400 text-sm font-semibold mt-auto pt-4">{{ content.pteriCaption }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const content = computed(() => {
  const t: Record<string, any> = {
    en: { title: 'Stop Guessing. Start Proving.', description: 'Most security systems rely on assumptions. Kakr replaces guessing with verifiable authorization evidence.', legacyLabel: 'LEGACY: GUESS', pteriLabel: 'PTERI: PROOF', legacyCaption: 'Insecure & Friction-filled', pteriCaption: 'Secure & Seamless', sigLabel: 'Cryptographic\nSignature (ZK)', fraudLabel: 'FRAUD', accessLabel: 'ACCESS' },
    de: { title: 'Aufhören zu raten. Anfangen zu beweisen.', description: 'Altsysteme verlassen sich auf Wahrscheinlichkeit. Kakr ersetzt sie durch kryptografische Gewissheit.', legacyLabel: 'LEGACY: RATEN', pteriLabel: 'PTERI: BEWEIS', legacyCaption: 'Unsicher & Reibungsbehaftet', pteriCaption: 'Sicher & Nahtlos', sigLabel: 'Kryptografische\nSignatur (ZK)', fraudLabel: 'BETRUG', accessLabel: 'ZUGANG' },
    es: { title: 'Deja de suponer. Empieza a probar.', description: 'Los sistemas heredados dependen de suposiciones. Kakr los reemplaza con certeza criptográfica.', legacyLabel: 'LEGACY: SUPOSICIÓN', pteriLabel: 'PTERI: PRUEBA', legacyCaption: 'Inseguro y con fricción', pteriCaption: 'Seguro y sin fricción', sigLabel: 'Firma\nCriptográfica (ZK)', fraudLabel: 'FRAUDE', accessLabel: 'ACCESO' },
    ja: { title: '推測をやめる。証明を始める。', description: 'レガシーシステムは仮定に依存しています。Kakrはそれらを暗号学的確実性に置き換えます。', legacyLabel: 'レガシー: 推測', pteriLabel: 'PTERI: 証明', legacyCaption: '安全でなく摩擦が多い', pteriCaption: '安全でシームレス', sigLabel: '暗号署名 (ZK)', fraudLabel: '詐欺', accessLabel: 'アクセス' },
    ar: { title: 'توقف عن التخمين. ابدأ بالإثبات.', description: 'تعتمد معظم أنظمة الأمان على الافتراضات. تستبدل Kakr التخمين بدليل حتمي.', legacyLabel: 'القديم: تخمين', pteriLabel: 'PTERI: إثبات', legacyCaption: 'غير آمن ومليء بالاحتكاك', pteriCaption: 'آمن وسلس', sigLabel: 'توقيع تشفيري (ZK)', fraudLabel: 'احتيال', accessLabel: 'وصول' },
  }
  return t[locale.value] || t.en
})

const legacyLabels = computed(() => {
  const t: Record<string, string[]> = {
    en: ['Passwords', 'OTPs', 'Risk Scores'],
    de: ['Passwörter', 'OTPs', 'Risikobewertungen'],
    es: ['Contraseñas', 'OTPs', 'Puntuaciones de riesgo'],
    ja: ['パスワード', 'OTP', 'リスクスコア'],
    ar: ['كلمات المرور', 'OTPs', 'درجات المخاطر'],
  }
  return t[locale.value] || t.en
})

const legacyInputs = computed(() => [
  {
    label: legacyLabels.value[0],
    icon: `<svg class="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`
  },
  {
    label: legacyLabels.value[1],
    icon: `<svg class="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`
  },
  {
    label: legacyLabels.value[2],
    icon: `<svg class="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
  },
])
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.legacy-input-node {
  background: rgba(220,38,38,0.1);
  border: 1.5px solid rgba(220,38,38,0.3);
}

.fraud-box {
  background: #dc2626;
  border: 2px solid #ef4444;
  box-shadow: 0 0 24px rgba(220,38,38,0.4);
}

.sig-node {
  background: rgba(16,185,129,0.08);
  border: 1.5px solid rgba(16,185,129,0.25);
}

.access-box {
  background: #16a34a;
  border: 2px solid #22c55e;
  box-shadow: 0 0 24px rgba(22,163,74,0.4);
}

/* ── Arrow track ── */
.arrow-track {
  position: relative;
  overflow: visible;
  flex-shrink: 0;
}

/* ── Traveling dot ── */
.travel-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(0);
  animation: travel 1.6s ease-in-out infinite;
}

.travel-dot--red {
  background: #ef4444;
  box-shadow: 0 0 8px rgba(239,68,68,0.9), 0 0 16px rgba(239,68,68,0.5);
}

.travel-dot--green {
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34,197,94,0.9), 0 0 16px rgba(34,197,94,0.5);
}

@keyframes travel {
  0%   { transform: translateY(-50%) translateX(0px);  opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateY(-50%) translateX(36px); opacity: 0; }
}

/* ── Mobile: prevent overflow ── */
@media (max-width: 640px) {
  .legacy-input-node {
    width: 88px;
    min-width: unset;
    padding: 0.6rem 0.5rem;
  }
  .fraud-box,
  .access-box {
    min-width: unset;
    width: 90px;
    padding: 0.75rem 0.5rem;
  }
  .sig-node {
    min-width: unset;
    width: 90px;
    padding: 0.6rem 0.5rem;
  }
  .fraud-box span,
  .access-box span {
    font-size: 0.9rem;
  }
}

/* ── Pulsing glow on result boxes ── */
.fraud-pulse {
  animation: fraud-glow 2s ease-in-out infinite;
}

.access-pulse {
  animation: access-glow 2s ease-in-out infinite;
}

@keyframes fraud-glow {
  0%, 100% { box-shadow: 0 0 24px rgba(220,38,38,0.4); }
  50%       { box-shadow: 0 0 48px rgba(220,38,38,0.8), 0 0 80px rgba(220,38,38,0.3); }
}

@keyframes access-glow {
  0%, 100% { box-shadow: 0 0 24px rgba(22,163,74,0.4); }
  50%       { box-shadow: 0 0 48px rgba(22,163,74,0.8), 0 0 80px rgba(22,163,74,0.3); }
}
</style>
