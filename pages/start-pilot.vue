<template>
  <div class="min-h-screen bg-black relative overflow-hidden font-sans">
    
    <!-- Premium Background Effects -->
    <div class="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-b-[2rem] sm:rounded-b-[4rem] lg:rounded-b-[6rem] z-0 overflow-hidden shadow-2xl">
      <!-- Glows inside the dark header -->
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[70px] animate-pulse" style="will-change:transform;"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[70px] animate-pulse" style="animation-delay: 2s; will-change:transform;"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white_30%,transparent_100%)] opacity-30"></div>
    </div>

    <!-- HERO SECTION -->
    <section class="relative pt-32 pb-16 z-10 text-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto"data-aos="fade-up">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <svg class="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          <span>{{ content.hero.badge }}</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]">
          {{ content.hero.title }}
        </h1>
        <p class="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          {{ content.hero.subtitle }}
        </p>

        <!-- Trust Indicators -->
        <div class="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-10 text-slate-300 border-t border-slate-700/50 pt-8 max-w-2xl mx-auto">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-xs sm:text-sm font-semibold uppercase tracking-wider">{{ content.trust.noCreditCard }}</span>
          </div>
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-xs sm:text-sm font-semibold uppercase tracking-wider">{{ content.trust.response24h }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT SECTION (Steps + Form) -->
    <section class="relative z-10 px-4 sm:px-6 lg:px-8 pb-24 max-w-6xl mx-auto">
      
      <!-- Process Steps (Overlapping the dark header slightly) -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16 relative">
        <div v-for="(step, index) in content.steps" :key="index" class="bg-black/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl shadow-slate-900/10 border border-white/8 dark:border-white/5 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <div>
            <div class="w-10 h-10 rounded-[10px] bg-slate-900 border border-slate-800 flex items-center justify-center text-white font-bold mb-4 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors shadow-md">
              {{ index + 1 }}
            </div>
            <h3 class="font-bold text-white dark:text-white text-base mb-2 tracking-tight">{{ step.title }}</h3>
            <p class="text-sm text-white/50 dark:text-white/60 leading-relaxed font-medium">{{ step.desc }}</p>
          </div>
          
          <!-- Connector Arrow (Desktop only) -->
          <div v-if="index < 3" class="hidden lg:block absolute top-[44px] -right-3 transform z-10 text-slate-300 translate-x-1/2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- FORM SECTION (Card base approach) -->
      <div class="bg-black rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white/10 dark:border-white/10 overflow-hidden max-w-4xl mx-auto relative">
        <!-- Form Header -->
        <div class="bg-slate-900 px-6 sm:px-12 py-10 text-center relative overflow-hidden">
          <div class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500 z-20"></div>
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>
          <div class="relative z-10 pt-2">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">{{ content.form.title }}</h2>
            <p class="text-white/60 text-sm sm:text-base max-w-md mx-auto">{{ content.form.subtitle }}</p>
          </div>
        </div>

        <!-- HubSpot Form Container -->
        <div class="p-8 sm:p-10 lg:p-12 bg-white relative">
          
          <div class="hs-form-container">
             <div class="hs-form-frame" data-region="na2" data-form-id="57b9c5b6-7673-400a-8016-5bd750c6651f" data-portal-id="245270532"></div>
          </div>
          
          <!-- Secure note -->
          <div class="mt-8 pt-6 border-t border-white/10 dark:border-white/10 flex items-center justify-center gap-2 text-white/50 dark:text-white/60 text-xs font-bold uppercase tracking-widest text-center">
            <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Enterprise-Grade Security</span>
          </div>

        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()
const { setSEO } = useSEO()

const content = computed(() => {
  const translations = {
    en: {
      hero: {
        badge: "60-Day Free Evaluation",
        title: "Start Your 60-Day Pilot",
        subtitle: "Evaluate cryptographically verifiable identity and blockchain infrastructure with controlled deployment and guided onboarding."
      },
      steps: [
        { title: "Submit Request", desc: "Complete the form below" },
        { title: "Team Review", desc: "We evaluate your use case" },
        { title: "Sign Agreement", desc: "Receive API access" },
        { title: "Begin Integration", desc: "Start your evaluation" }
      ],
      trust: {
        noCreditCard: "No credit card required",
        response24h: "Response within 24 hours",
        support: "Dedicated support team"
      },
      form: {
        title: "Start Your Evaluation",
        subtitle: "Fill out the form below and our team will be in touch"
      },
      seo: {
        title: "Start 60-Day Pilot - KAKR",
        description: "Evaluate cryptographically verifiable identity and blockchain infrastructure with controlled deployment and guided onboarding."
      }
    },
    de: {
      hero: {
        badge: "60-Tage kostenlose Testphase",
        title: "Starten Sie Ihr 60-Tage-Pilotprojekt",
        subtitle: "Bewerten Sie energiegestützte Identitäts- und Blockchain-Infrastruktur mit kontrollierter Bereitstellung und geführter Integration."
      },
      steps: [
        { title: "Anfrage einreichen", desc: "Füllen Sie das untenstehende Formular aus" },
        { title: "Team-Überprüfung", desc: "Wir bewerten Ihren Anwendungsfall" },
        { title: "Vertrag unterschreiben", desc: "Erhalten Sie API-Zugang" },
        { title: "Integration beginnen", desc: "Starten Sie Ihre Auswertung" }
      ],
      trust: {
        noCreditCard: "Keine Kreditkarte erforderlich",
        response24h: "Antwort innerhalb von 24 Stunden",
        support: "Engagiertes Support-Team"
      },
      form: {
        title: "Starten Sie Ihre Auswertung",
        subtitle: "Füllen Sie das untenstehende Formular aus und unser Team wird sich mit Ihnen in Verbindung setzen"
      },
      seo: {
        title: "Starten Sie Ihr 60-Tage-Pilotprojekt - KAKR",
        description: "Bewerten Sie energiegestützte Identitäts- und Blockchain-Infrastruktur mit kontrollierter Bereitstellung und geführter Integration."
      }
    },
    es: {
      hero: {
        badge: "Evaluación gratuita de 60 días",
        title: "Comience su proyecto piloto de 60 días",
        subtitle: "Evalúe la infraestructura de identidad y blockchain respaldada por energía con implementación controlada e incorporación guiada."
      },
      steps: [
        { title: "Enviar solicitud", desc: "Complete el formulario a continuación" },
        { title: "Revisión del equipo", desc: "Evaluamos su caso de uso" },
        { title: "Firmar acuerdo", desc: "Reciba acceso a la API" },
        { title: "Comenzar integración", desc: "Comience su evaluación" }
      ],
      trust: {
        noCreditCard: "No se requiere tarjeta de crédito",
        response24h: "Respuesta en 24 horas",
        support: "Equipo de soporte dedicado"
      },
      form: {
        title: "Comience su evaluación",
        subtitle: "Complete el formulario a continuación y nuestro equipo se pondrá en contacto"
      },
      seo: {
        title: "Comience su proyecto piloto de 60 días - KAKR",
        description: "Evalúe la infraestructura de identidad y blockchain respaldada por energía con implementación controlada e incorporación guiada."
      }
    },
    ja: {
      hero: {
        badge: "60日間の無料評価",
        title: "60日間のパイロットを開始",
        subtitle: "制御された展開とガイド付きのオンボーディングを備えた、エネルギーに裏付けられたアイデンティティとブロックチェーンのインフラストラクチャを評価します。"
      },
      steps: [
        { title: "リクエストを送信", desc: "以下のフォームに記入してください" },
        { title: "チームレビュー", desc: "ユースケースを評価します" },
        { title: "契約書に署名", desc: "APIアクセスを受け取ります" },
        { title: "統合を開始", desc: "評価を開始します" }
      ],
      trust: {
        noCreditCard: "クレジットカードは不要",
        response24h: "24時間以内の対応",
        support: "専門のサポートチーム"
      },
      form: {
        title: "評価を開始",
        subtitle: "以下のフォームにご記入ください。私たちのチームからご連絡いたします"
      },
      seo: {
        title: "60日間のパイロットを開始 - KAKR",
        description: "制御された展開とガイド付きのオンボーディングを備えた、エネルギーに裏付けられたアイデンティティとブロックチェーンのインフラストラクチャを評価します。"
      }
    },
    ar: {
      hero: {
        badge: "تقييم مجاني لمدة 60 يومًا",
        title: "ابدأ برنامجك التجريبي لمدة 60 يومًا",
        subtitle: "قم بتقييم البنية التحتية للهوية والبلوكتشين المدعومة بالطاقة من خلال النشر الخاضع للرقابة والتوجيه الموجه."
      },
      steps: [
        { title: "إرسال طلب", desc: "أكمل النموذج أدناه" },
        { title: "مراجعة الفريق", desc: "نقوم بتقييم حالة الاستخدام الخاصة بك" },
        { title: "توقيع اتفاقية", desc: "تلقي الوصول إلى API" },
        { title: "بدء التكامل", desc: "ابدأ التقييم الخاص بك" }
      ],
      trust: {
        noCreditCard: "لا يتطلب بطاقة ائتمان",
        response24h: "الرد خلال 24 ساعة",
        support: "فريق دعم مخصص"
      },
      form: {
        title: "ابدأ تقييمك",
        subtitle: "املأ النموذج أدناه وسيتواصل معك فريقنا"
      },
      seo: {
        title: "ابدأ برنامجك التجريبي لمدة 60 يومًا - KAKR",
        description: "قم بتقييم البنية التحتية للهوية والبلوكتشين المدعومة بالطاقة من خلال النشر الخاضع للرقابة والتوجيه الموجه."
      }
    }
  }
  // @ts-ignore
  return translations[locale.value] || translations.en
})

// Load HubSpot form script
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://js-na2.hsforms.net/forms/embed/245270532.js'
  script.defer = true
  document.head.appendChild(script)
})

setSEO({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
  image: '/og/og-start-pilot.png',
  keywords: ['pilot program', '60-day pilot', 'blockchain infrastructure', 'identity evaluation', 'Kakr Labs', 'PTERI']
})
</script>

<style scoped>
/* Advanced Animations */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(20px, -30px) scale(1.05); }
  66% { transform: translate(-10px, 10px) scale(0.95); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 10s infinite alternate;
}

/* HubSpot Form Refined Styling */
:deep(.hs-form-frame) {
  min-height: unset;
}

:deep(.hs-form) {
  font-family: inherit !important;
}

/* Hide HubSpot's default intro paragraph — we have our own header */
:deep(.hs-richtext p) {
  display: none !important;
}

:deep(.hs-form-field) {
  margin-bottom: 1.25rem !important;
}

/* Label */
:deep(.hs-form-field > label) {
  display: block !important;
  font-size: 0.75rem !important;
  font-weight: 700 !important;
  color: #64748b !important;
  margin-bottom: 0.4rem !important;
  letter-spacing: 0.06em !important;
  text-transform: uppercase !important;
}

/* All inputs */
:deep(.hs-input) {
  width: 100% !important;
  padding: 0.75rem 1rem !important;
  border: 1.5px solid #e2e8f0 !important;
  border-radius: 0.5rem !important;
  font-size: 0.9375rem !important;
  font-family: inherit !important;
  background-color: #f8fafc !important;
  color: #0f172a !important;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease !important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04) !important;
  -webkit-appearance: none !important;
  appearance: none !important;
}

:deep(.hs-input:hover) {
  border-color: #94a3b8 !important;
  background-color: #fff !important;
}

:deep(.hs-input:focus) {
  outline: none !important;
  border-color: #10b981 !important;
  background-color: #fff !important;
  box-shadow: 0 0 0 3px rgba(16,185,129,0.15), 0 1px 3px rgba(0,0,0,0.04) !important;
}

:deep(.hs-input::placeholder) {
  color: #94a3b8 !important;
}

/* Select */
:deep(select.hs-input) {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e") !important;
  background-position: right 0.75rem center !important;
  background-repeat: no-repeat !important;
  background-size: 1em 1em !important;
  padding-right: 2.5rem !important;
  cursor: pointer !important;
}

/* Textarea */
:deep(textarea.hs-input) {
  min-height: 110px !important;
  resize: vertical !important;
  line-height: 1.6 !important;
}

/* Checkboxes & radios container */
:deep(.hs-form-checkbox),
:deep(.hs-form-radio) {
  margin-bottom: 0.5rem !important;
}

:deep(.hs-form-checkbox label),
:deep(.hs-form-radio label) {
  display: flex !important;
  align-items: center !important;
  gap: 0.625rem !important;
  font-size: 0.9375rem !important;
  font-weight: 500 !important;
  color: #334155 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  cursor: pointer !important;
  padding: 0.2rem 0 !important;
}

:deep(.hs-form-checkbox input[type="checkbox"]),
:deep(.hs-form-radio input[type="radio"]) {
  width: 1rem !important;
  height: 1rem !important;
  accent-color: #10b981 !important;
  cursor: pointer !important;
  flex-shrink: 0 !important;
  margin: 0 !important;
}

/* Submit button */
:deep(.hs-button) {
  width: 100% !important;
  padding: 0.875rem 2rem !important;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
  color: #fff !important;
  font-weight: 700 !important;
  font-size: 1rem !important;
  letter-spacing: 0.02em !important;
  border-radius: 0.5rem !important;
  border: none !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  margin-top: 0.75rem !important;
  box-shadow: 0 4px 14px rgba(16,185,129,0.35) !important;
}

:deep(.hs-button:hover) {
  background: linear-gradient(135deg, #059669 0%, #047857 100%) !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 6px 20px rgba(16,185,129,0.45) !important;
}

:deep(.hs-button:active) {
  transform: translateY(0) !important;
  box-shadow: 0 2px 8px rgba(16,185,129,0.3) !important;
}

/* Errors */
:deep(.hs-error-msgs) {
  list-style: none !important;
  padding: 0 !important;
  margin: 0.3rem 0 0 !important;
}

:deep(.hs-error-msg) {
  font-size: 0.8125rem !important;
  font-weight: 500 !important;
  color: #ef4444 !important;
}

/* ── end of form styles ── */
</style>

<style>
/* ── Global HubSpot form overrides (non-scoped, required to reach dynamically injected DOM) ── */

.hs-form-container .hs-richtext p,
.hs-form-container .hs-richtext {
  display: none !important;
}

.hs-form-container .hs-form-field {
  margin-bottom: 1.25rem !important;
}

.hs-form-container .hs-form-field > label {
  display: block !important;
  font-size: 0.72rem !important;
  font-weight: 700 !important;
  color: #64748b !important;
  margin-bottom: 0.4rem !important;
  letter-spacing: 0.07em !important;
  text-transform: uppercase !important;
}

.hs-form-container .hs-input {
  width: 100% !important;
  padding: 0.75rem 1rem !important;
  border: 1.5px solid #e2e8f0 !important;
  border-radius: 0.5rem !important;
  font-size: 0.9375rem !important;
  background-color: #f8fafc !important;
  color: #0f172a !important;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease !important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05) !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  outline: none !important;
}

.hs-form-container .hs-input:hover {
  border-color: #94a3b8 !important;
  background-color: #fff !important;
}

.hs-form-container .hs-input:focus {
  border-color: #10b981 !important;
  background-color: #fff !important;
  box-shadow: 0 0 0 3px rgba(16,185,129,0.15) !important;
}

.hs-form-container .hs-input::placeholder {
  color: #94a3b8 !important;
}

.hs-form-container select.hs-input {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e") !important;
  background-position: right 0.75rem center !important;
  background-repeat: no-repeat !important;
  background-size: 1em 1em !important;
  padding-right: 2.5rem !important;
  cursor: pointer !important;
}

.hs-form-container textarea.hs-input {
  min-height: 110px !important;
  resize: vertical !important;
  line-height: 1.6 !important;
}

.hs-form-container .hs-form-checkbox,
.hs-form-container .hs-form-radio {
  margin-bottom: 0.4rem !important;
}

.hs-form-container .hs-form-checkbox label,
.hs-form-container .hs-form-radio label {
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  font-size: 0.9rem !important;
  font-weight: 500 !important;
  color: #334155 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  cursor: pointer !important;
  padding: 0.15rem 0 !important;
}

.hs-form-container .hs-form-checkbox input[type="checkbox"],
.hs-form-container .hs-form-radio input[type="radio"] {
  width: 1rem !important;
  height: 1rem !important;
  accent-color: #10b981 !important;
  cursor: pointer !important;
  flex-shrink: 0 !important;
  margin: 0 !important;
}

.hs-form-container .hs-button {
  width: 100% !important;
  padding: 0.875rem 2rem !important;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
  color: #fff !important;
  font-weight: 700 !important;
  font-size: 1rem !important;
  letter-spacing: 0.02em !important;
  border-radius: 0.5rem !important;
  border: none !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  margin-top: 0.75rem !important;
  box-shadow: 0 4px 14px rgba(16,185,129,0.35) !important;
}

.hs-form-container .hs-button:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%) !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 6px 20px rgba(16,185,129,0.45) !important;
}

.hs-form-container .hs-error-msgs {
  list-style: none !important;
  padding: 0 !important;
  margin: 0.3rem 0 0 !important;
}

.hs-form-container .hs-error-msg {
  font-size: 0.8125rem !important;
  font-weight: 500 !important;
  color: #ef4444 !important;
}
</style>
