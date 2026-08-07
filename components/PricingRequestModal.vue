<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="backdrop-fade">
      <div v-if="isOpen" class="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-md" @click="close"></div>
    </Transition>

    <!-- Modal -->
    <Transition name="modal-slide">
      <div v-if="isOpen" class="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
        <div class="relative w-full max-w-xl pointer-events-auto" style="filter: drop-shadow(0 0 60px rgba(52,211,153,0.15));">

          <!-- Glow ring -->
          <div class="absolute -inset-px rounded-3xl pointer-events-none" style="background: linear-gradient(135deg, rgba(52,211,153,0.4), rgba(6,182,212,0.2), rgba(52,211,153,0.1)); padding: 1px;">
            <div class="w-full h-full rounded-3xl" style="background: #080f0a;"></div>
          </div>

          <!-- Card -->
          <div class="relative rounded-3xl overflow-hidden" style="background: linear-gradient(160deg, #0d1a10 0%, #080f0a 60%, #050d0f 100%);">

            <!-- Top shimmer line -->
            <div class="h-px w-full" style="background: linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.8) 40%, rgba(6,182,212,0.6) 60%, transparent 100%);"></div>

            <!-- Ambient orb -->
            <div class="absolute top-0 right-0 w-64 h-64 pointer-events-none" style="background: radial-gradient(ellipse, rgba(52,211,153,0.08) 0%, transparent 70%); filter: blur(30px);"></div>

            <!-- Close button -->
            <button @click="close" class="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-all hover:scale-110" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);">
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="text-white/50"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <!-- Header -->
            <div class="px-8 pt-8 pb-6">
              <div class="flex items-start gap-4 mb-5">
                <!-- Icon -->
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style="background: linear-gradient(135deg, rgba(52,211,153,0.2), rgba(6,182,212,0.1)); border: 1px solid rgba(52,211,153,0.3);">
                  <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <h3 class="text-white font-bold text-xl">{{ t.title }}</h3>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold text-emerald-400 border border-emerald-500/30" style="background: rgba(52,211,153,0.1);">FREE</span>
                  </div>
                  <p class="text-emerald-400/70 text-xs font-medium">{{ t.badge }}</p>
                </div>
              </div>
              <p class="text-white/50 text-sm leading-relaxed">{{ t.subtitle }}</p>
            </div>

            <!-- Divider -->
            <div class="mx-8 h-px" style="background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);"></div>

            <!-- Form -->
            <div class="px-8 py-6">
              <Transition name="form-fade" mode="out-in">
                <form v-if="!submitted" @submit.prevent="submit" novalidate key="form">
                  <div class="space-y-3">
                    <div class="grid grid-cols-2 gap-3">
                      <div class="pr-field">
                        <input v-model="form.name" type="text" :placeholder="t.name" class="pr-input" required />
                      </div>
                      <div class="pr-field">
                        <input v-model="form.email" type="email" :placeholder="t.email" class="pr-input" required />
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                      <div class="pr-field">
                        <input v-model="form.company" type="text" :placeholder="t.company" class="pr-input" required />
                      </div>
                      <div class="pr-field">
                        <input v-model="form.role" type="text" :placeholder="t.role" class="pr-input" />
                      </div>
                    </div>
                    <div class="pr-field relative">
                      <select v-model="form.plan" class="pr-input pr-select w-full" :class="{'pr-select-empty': !form.plan}">
                        <option value="" disabled>{{ t.planPlaceholder }}</option>
                        <option value="Free">{{ t.plans.free }}</option>
                        <option value="Identity Scale">{{ t.plans.scale }}</option>
                        <option value="PTERI Enterprise">{{ t.plans.enterprise }}</option>
                        <option value="Custom / Not sure">{{ t.plans.custom }}</option>
                      </select>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none text-xs">▾</span>
                    </div>
                    <div class="pr-field">
                      <textarea v-model="form.message" :placeholder="t.message" rows="3" class="pr-input w-full resize-none"></textarea>
                    </div>
                  </div>

                  <p v-if="error" class="text-red-400 text-xs mt-3 text-center flex items-center justify-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                    {{ error }}
                  </p>

                  <button type="submit" :disabled="loading" class="mt-5 w-full py-3.5 rounded-xl font-bold text-sm text-black relative overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]" style="background: linear-gradient(135deg, #34d399 0%, #10b981 50%, #06b6d4 100%); box-shadow: 0 4px 24px rgba(52,211,153,0.35);">
                    <span v-if="loading" class="flex items-center justify-center gap-2">
                      <span class="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
                      Sending...
                    </span>
                    <span v-else class="flex items-center justify-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                      {{ t.submit }}
                    </span>
                  </button>

                  <p class="text-center text-white/20 text-xs mt-3">🔒 {{ t.privacy || 'Your info is never shared.' }}</p>
                </form>

                <!-- Success state -->
                <div v-else key="success" class="py-6 text-center">
                  <div class="w-20 h-20 mx-auto mb-5 relative">
                    <svg viewBox="0 0 80 80" fill="none" class="w-full h-full">
                      <circle cx="40" cy="40" r="38" stroke="rgba(52,211,153,0.2)" stroke-width="2"/>
                      <circle cx="40" cy="40" r="38" stroke="#34d399" stroke-width="2" stroke-dasharray="239" stroke-dashoffset="0" class="success-ring"/>
                      <path d="M24 40L34 50L56 28" stroke="#34d399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="success-check"/>
                    </svg>
                    <div class="absolute inset-0 rounded-full" style="background: radial-gradient(ellipse, rgba(52,211,153,0.15) 0%, transparent 70%); filter: blur(10px);"></div>
                  </div>
                  <h3 class="text-white font-bold text-xl mb-2">{{ t.successTitle }}</h3>
                  <p class="text-white/50 text-sm mb-6 max-w-xs mx-auto">{{ t.successMessage }}</p>
                  <div class="flex items-center justify-center gap-2 text-emerald-400 text-xs font-semibold mb-6">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Response within 1 business day
                  </div>
                  <button @click="close" class="px-8 py-3 rounded-xl font-bold text-sm text-black transition-all hover:scale-105" style="background: linear-gradient(135deg, #34d399, #06b6d4);">{{ t.done }}</button>
                </div>
              </Transition>
            </div>

          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const loading = ref(false)
const submitted = ref(false)
const error = ref('')
const form = reactive({ name: '', email: '', company: '', role: '', plan: '', message: '' })

const translations: Record<string, any> = {
  en: {
    title: 'Request Pricing', badge: "We'll send it directly to you",
    subtitle: 'Tell us about your use case and we\'ll send you our full pricing breakdown within 1 business day.',
    name: 'Full Name *', email: 'Work Email *', company: 'Company *', role: 'Your Role',
    planPlaceholder: 'Plan you\'re interested in',
    plans: { free: 'Free', scale: 'Identity Scale', enterprise: 'PTERI Enterprise', custom: 'Custom / Not sure' },
    message: 'Tell us about your use case (optional)',
    submit: 'Send Pricing Request',
    privacy: 'Your info is never shared.',
    successTitle: 'Request Received!',
    successMessage: "We'll send you our full pricing details within 1 business day. Check your inbox.",
    done: 'Done'
  },
  de: {
    title: 'Preise anfragen', badge: 'Wir senden sie direkt an Sie',
    subtitle: 'Erzählen Sie uns von Ihrem Anwendungsfall und wir senden Ihnen unsere vollständige Preisübersicht innerhalb eines Werktages.',
    name: 'Vollständiger Name *', email: 'Geschäftliche E-Mail *', company: 'Unternehmen *', role: 'Ihre Rolle',
    planPlaceholder: 'Interessierender Plan',
    plans: { free: 'Kostenlos', scale: 'Identity Scale', enterprise: 'PTERI Enterprise', custom: 'Individuell / Unsicher' },
    message: 'Beschreiben Sie Ihren Anwendungsfall (optional)',
    submit: 'Preisanfrage senden', privacy: 'Ihre Daten werden nie weitergegeben.',
    successTitle: 'Anfrage erhalten!', successMessage: 'Wir senden Ihnen unsere Preisdetails innerhalb eines Werktages.', done: 'Fertig'
  },
  es: {
    title: 'Solicitar precios', badge: 'Te los enviamos directamente',
    subtitle: 'Cuéntanos sobre tu caso de uso y te enviaremos nuestro desglose completo de precios en 1 día hábil.',
    name: 'Nombre completo *', email: 'Email de trabajo *', company: 'Empresa *', role: 'Tu rol',
    planPlaceholder: 'Plan de interés',
    plans: { free: 'Gratis', scale: 'Identity Scale', enterprise: 'PTERI Enterprise', custom: 'Personalizado / No estoy seguro' },
    message: 'Cuéntanos sobre tu caso de uso (opcional)',
    submit: 'Enviar solicitud', privacy: 'Tu información nunca se comparte.',
    successTitle: '¡Solicitud recibida!', successMessage: 'Te enviaremos los detalles de precios en 1 día hábil.', done: 'Hecho'
  },
  ja: {
    title: '料金を問い合わせる', badge: '直接お送りします',
    subtitle: 'ユースケースについて教えていただければ、1営業日以内に料金の詳細をお送りします。',
    name: '氏名 *', email: '会社メール *', company: '会社名 *', role: '役職',
    planPlaceholder: '興味のあるプラン',
    plans: { free: '無料', scale: 'Identity Scale', enterprise: 'PTERI Enterprise', custom: 'カスタム / 未定' },
    message: 'ユースケースについて教えてください（任意）',
    submit: '料金リクエストを送信', privacy: '情報は共有されません。',
    successTitle: 'リクエストを受け取りました！', successMessage: '1営業日以内に料金の詳細をお送りします。', done: '完了'
  },
  ar: {
    title: 'طلب الأسعار', badge: 'سنرسلها إليك مباشرة',
    subtitle: 'أخبرنا عن حالة الاستخدام وسنرسل لك تفاصيل الأسعار خلال يوم عمل واحد.',
    name: 'الاسم الكامل *', email: 'البريد الإلكتروني للعمل *', company: 'الشركة *', role: 'دورك',
    planPlaceholder: 'الخطة التي تهمك',
    plans: { free: 'مجاني', scale: 'Identity Scale', enterprise: 'PTERI Enterprise', custom: 'مخصص / غير متأكد' },
    message: 'أخبرنا عن حالة الاستخدام (اختياري)',
    submit: 'إرسال طلب الأسعار', privacy: 'معلوماتك لن تُشارك أبداً.',
    successTitle: 'تم استلام الطلب!', successMessage: 'سنرسل لك تفاصيل الأسعار خلال يوم عمل واحد.', done: 'تم'
  }
}

const t = computed(() => translations[locale.value] || translations.en)

function close() {
  emit('close')
  setTimeout(() => { submitted.value = false; error.value = '' }, 400)
}

async function submit() {
  error.value = ''
  if (!form.name || !form.email || !form.company) {
    error.value = 'Please fill out all required fields.'
    return
  }
  loading.value = true
  try {
    const res = await fetch(
      'https://api.hsforms.com/submissions/v3/integration/submit/245270532/addaed80-8534-4ae5-9642-4ce1cf2b98fc',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { name: 'firstname', value: form.name.split(' ')[0] },
            { name: 'lastname', value: form.name.split(' ').slice(1).join(' ') || '-' },
            { name: 'email', value: form.email },
            { name: '0-2/name', value: form.company },
            { name: '0-2/your_role', value: form.role || 'Not specified' },
            { name: 'reason_to_contact_us', value: 'Pricing & Plans' },
            { name: 'message', value: `[PRICING REQUEST]\nPlan Interest: ${form.plan || 'Not specified'}\n\n${form.message}` },
          ],
          context: { pageUri: window.location.href, pageName: 'Pricing Request' }
        })
      }
    )
    if (!res.ok) throw new Error()
    submitted.value = true
    Object.assign(form, { name: '', email: '', company: '', role: '', plan: '', message: '' })
  } catch {
    error.value = 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Backdrop */
.backdrop-fade-enter-active, .backdrop-fade-leave-active { transition: opacity 0.3s ease; }
.backdrop-fade-enter-from, .backdrop-fade-leave-to { opacity: 0; }

/* Modal slide up */
.modal-slide-enter-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.modal-slide-leave-active { transition: all 0.25s ease-in; }
.modal-slide-enter-from { opacity: 0; transform: translateY(40px) scale(0.95); }
.modal-slide-leave-to { opacity: 0; transform: translateY(20px) scale(0.97); }

/* Form/success crossfade */
.form-fade-enter-active { transition: all 0.35s ease; }
.form-fade-leave-active { transition: all 0.2s ease; }
.form-fade-enter-from { opacity: 0; transform: translateY(10px); }
.form-fade-leave-to { opacity: 0; transform: translateY(-10px); }

/* Success ring animation */
.success-ring {
  stroke-dasharray: 239;
  stroke-dashoffset: 239;
  animation: draw-ring 0.6s ease forwards 0.2s;
}
.success-check {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: draw-check 0.4s ease forwards 0.7s;
}
@keyframes draw-ring { to { stroke-dashoffset: 0; } }
@keyframes draw-check { to { stroke-dashoffset: 0; } }

/* Inputs */
.pr-field { position: relative; }
.pr-input {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  color: #fff;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  outline: none;
  font-family: inherit;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
}
.pr-input::placeholder { color: rgba(255,255,255,0.25); }
.pr-input:focus {
  border-color: rgba(52,211,153,0.5);
  background: rgba(52,211,153,0.04);
  box-shadow: 0 0 0 3px rgba(52,211,153,0.08);
}
.pr-select { appearance: none; -webkit-appearance: none; cursor: pointer; padding-right: 2rem; }
.pr-select-empty { color: rgba(255,255,255,0.25); }
.pr-select option { background: #0f172a; color: #fff; }
</style>
