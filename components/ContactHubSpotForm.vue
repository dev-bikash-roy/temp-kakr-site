<template>
  <div class="contact-form-wrapper">
    <form @submit.prevent="submitForm" novalidate>

      <!-- Row 1: First + Last Name -->
      <div class="cf-row">
        <div class="cf-field">
          <input v-model="form.firstname" type="text" :placeholder="t.firstName" class="cf-input" required />
        </div>
        <div class="cf-field">
          <input v-model="form.lastname" type="text" :placeholder="t.lastName" class="cf-input" required />
        </div>
      </div>

      <!-- Row 2: Email + Phone -->
      <div class="cf-row">
        <div class="cf-field">
          <input v-model="form.email" type="email" :placeholder="t.email" class="cf-input" required />
        </div>
        <div class="cf-field">
          <input v-model="form.phone" type="tel" :placeholder="t.phone" class="cf-input" />
        </div>
      </div>

      <!-- Row 3: Company + Role -->
      <div class="cf-row">
        <div class="cf-field">
          <input v-model="form.company" type="text" :placeholder="t.company" class="cf-input" required />
        </div>
        <div class="cf-field">
          <input v-model="form.role" type="text" :placeholder="t.role" class="cf-input" required />
        </div>
      </div>

      <!-- Reason -->
      <div class="cf-field cf-field--full">
        <div class="cf-select-wrap">
          <select v-model="form.reason" class="cf-input cf-select" :class="{ 'cf-select-empty': !form.reason }" required>
            <option value="" disabled>{{ t.reasonPlaceholder }}</option>
            <option value="Request a Demo">{{ t.reasons.demo }}</option>
            <option value="Product Inquiry">{{ t.reasons.product }}</option>
            <option value="Pricing &amp; Plans">{{ t.reasons.pricing }}</option>
            <option value="Technical Support">{{ t.reasons.support }}</option>
            <option value="Partnership / Collaboration">{{ t.reasons.partnership }}</option>
            <option value="Other">{{ t.reasons.other }}</option>
          </select>
          <span class="cf-select-arrow">▾</span>
        </div>
      </div>

      <!-- Message -->
      <div class="cf-field cf-field--full">
        <textarea v-model="form.message" :placeholder="t.message" rows="4" class="cf-input cf-textarea"></textarea>
      </div>

      <!-- Legal consent -->
      <div class="cf-legal">
        <label class="cf-checkbox-lbl">
          <input type="checkbox" v-model="form.consent" class="cf-checkbox" />
          <span>{{ t.consent }}</span>
        </label>
      </div>

      <p v-if="errorMsg" class="cf-error" role="alert" aria-live="assertive">{{ errorMsg }}</p>

      <div class="cf-submit-row">
        <button type="submit" class="cf-submit-btn" :disabled="loading">
          <span v-if="loading" class="cf-spinner"></span>
          <span v-else>{{ t.submit }}</span>
        </button>
      </div>

    </form>

    <!-- Success -->
    <Teleport to="body">
      <Transition name="cf-fade">
        <div v-if="submitted" class="cf-success-overlay">
          <div class="cf-success-card">
            <div class="cf-success-icon">
              <svg viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="29" stroke="#10b981" stroke-width="2"/><path d="M18 30L26 38L42 22" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <h3>{{ t.successTitle }}</h3>
            <p>{{ t.successMessage }}</p>
            <button @click="submitted = false" class="cf-success-close">{{ t.done }}</button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { locale } = useI18n()

const translations: Record<string, any> = {
  en: {
    firstName: 'First Name *', lastName: 'Last Name *', email: 'Email *', phone: 'Phone Number',
    company: 'Company Name *', role: 'Your Role * (e.g. CTO, Developer)', message: 'Message',
    reasonPlaceholder: 'Reason to Contact Us *',
    reasons: { demo: 'Request a Demo', product: 'Product Inquiry', pricing: 'Pricing & Plans', support: 'Technical Support', partnership: 'Partnership / Collaboration', other: 'Other' },
    consent: 'I agree to receive communications from Kakr Labs, Inc. You can unsubscribe at any time.',
    submit: 'Submit', done: 'Done', successTitle: 'Thank you!',
    successMessage: "Your message has been received. Our team will follow up by email.",
    errorRequired: 'Please fill out all required fields (*).',
    errorGeneric: 'Something went wrong. Please try again.'
  },
  de: {
    firstName: 'Vorname *', lastName: 'Nachname *', email: 'E-Mail *', phone: 'Telefonnummer',
    company: 'Unternehmensname *', role: 'Ihre Rolle * (z.B. CTO, Entwickler)', message: 'Nachricht',
    reasonPlaceholder: 'Grund der Kontaktaufnahme *',
    reasons: { demo: 'Demo anfragen', product: 'Produktanfrage', pricing: 'Preise & Pläne', support: 'Technischer Support', partnership: 'Partnerschaft / Zusammenarbeit', other: 'Sonstiges' },
    consent: 'Ich stimme zu, Mitteilungen von Kakr Labs, Inc. zu erhalten. Sie können sich jederzeit abmelden.',
    submit: 'Absenden', done: 'Fertig', successTitle: 'Vielen Dank!',
    successMessage: 'Ihre Nachricht ist eingegangen. Unser Team meldet sich per E-Mail.',
    errorRequired: 'Bitte füllen Sie alle Pflichtfelder aus (*).',
    errorGeneric: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.'
  },
  es: {
    firstName: 'Nombre *', lastName: 'Apellido *', email: 'Correo electrónico *', phone: 'Número de teléfono',
    company: 'Nombre de la empresa *', role: 'Su rol * (p.ej. CTO, Desarrollador)', message: 'Mensaje',
    reasonPlaceholder: 'Motivo de contacto *',
    reasons: { demo: 'Solicitar una demo', product: 'Consulta de producto', pricing: 'Precios y planes', support: 'Soporte técnico', partnership: 'Asociación / Colaboración', other: 'Otro' },
    consent: 'Acepto recibir comunicaciones de Kakr Labs, Inc. Puede darse de baja en cualquier momento.',
    submit: 'Enviar', done: 'Hecho', successTitle: '¡Gracias!',
    successMessage: 'Su mensaje ha sido recibido. Nuestro equipo se pondrá en contacto por correo.',
    errorRequired: 'Por favor complete todos los campos obligatorios (*).',
    errorGeneric: 'Algo salió mal. Por favor inténtelo de nuevo.'
  },
  ja: {
    firstName: '名 *', lastName: '姓 *', email: 'メールアドレス *', phone: '電話番号',
    company: '会社名 *', role: '役職 * (例: CTO、開発者)', message: 'メッセージ',
    reasonPlaceholder: 'お問い合わせの理由 *',
    reasons: { demo: 'デモのリクエスト', product: '製品に関するお問い合わせ', pricing: '料金プラン', support: 'テクニカルサポート', partnership: 'パートナーシップ / コラボレーション', other: 'その他' },
    consent: 'Kakr Labs, Inc.からの連絡を受け取ることに同意します。いつでも登録解除できます。',
    submit: '送信', done: '完了', successTitle: 'ありがとうございます！',
    successMessage: 'メッセージを受け取りました。担当チームよりメールでご連絡いたします。',
    errorRequired: '必須項目（*）をすべて入力してください。',
    errorGeneric: '問題が発生しました。もう一度お試しください。'
  },
  ar: {
    firstName: 'الاسم الأول *', lastName: 'اسم العائلة *', email: 'البريد الإلكتروني *', phone: 'رقم الهاتف',
    company: 'اسم الشركة *', role: 'دورك * (مثل: CTO، مطور)', message: 'الرسالة',
    reasonPlaceholder: 'سبب التواصل *',
    reasons: { demo: 'طلب عرض توضيحي', product: 'استفسار عن المنتج', pricing: 'الأسعار والخطط', support: 'الدعم الفني', partnership: 'شراكة / تعاون', other: 'أخرى' },
    consent: 'أوافق على تلقي اتصالات من Kakr Labs, Inc. يمكنك إلغاء الاشتراك في أي وقت.',
    submit: 'إرسال', done: 'تم', successTitle: 'شكراً لك!',
    successMessage: 'تم استلام رسالتك. سيتواصل معك فريقنا عبر البريد الإلكتروني.',
    errorRequired: 'يرجى ملء جميع الحقول المطلوبة (*).',
    errorGeneric: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.'
  }
}

const t = computed(() => translations[locale.value] || translations.en)

const PORTAL_ID = '245270532'
const FORM_ID = 'addaed80-8534-4ae5-9642-4ce1cf2b98fc'

const loading = ref(false)
const submitted = ref(false)
const errorMsg = ref('')

const form = reactive({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  reason: '',
  message: '',
  consent: false,
})

// Preselect the reason from ?intent= so "Request a Pilot" / "Book a Demo" /
// "Partnership" CTAs across the site land on the right option instead of
// forcing the visitor to pick it again. Mapped to the closest existing
// reason value rather than introducing new ones, since this field is
// submitted straight through to a HubSpot property of unknown enum
// constraints.
const route = useRoute()
const INTENT_TO_REASON: Record<string, string> = {
  pilot: 'Request a Demo',
  demo: 'Request a Demo',
  partnership: 'Partnership / Collaboration',
}
const intent = typeof route.query.intent === 'string' ? route.query.intent.toLowerCase() : ''
if (intent && INTENT_TO_REASON[intent]) {
  form.reason = INTENT_TO_REASON[intent]
}

async function submitForm() {
  errorMsg.value = ''

  if (!form.firstname || !form.lastname || !form.email || !form.company || !form.role || !form.reason) {
    errorMsg.value = t.value.errorRequired
    return
  }

  loading.value = true

  const fields = [
    { name: 'firstname', value: form.firstname },
    { name: 'lastname', value: form.lastname },
    { name: 'email', value: form.email },
    { name: 'phone', value: form.phone },
    { name: '0-2/name', value: form.company },
    { name: '0-2/your_role', value: form.role },
    { name: 'reason_to_contact_us', value: form.reason },
    { name: 'message', value: form.message },
  ]

  const legalConsent = {
    consent: {
      consentToProcess: true,
      text: 'By clicking submit, you consent to allow Kakr Labs, Inc. to store and process the personal information submitted.',
      communications: form.consent ? [{ value: true, subscriptionTypeId: 2163998147, text: 'I agree to receive other communications from Kakr Labs, Inc.' }] : []
    }
  }

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields,
          legalConsentOptions: legalConsent,
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          }
        })
      }
    )

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err?.message || 'Submission failed')
    }

    // Also trigger the actual email notification to contact@kakr.ai — the
    // HubSpot submission above only records the lead in the CRM, it does not
    // send mail. Best-effort: don't block the success screen on this.
    try {
      await $fetch('/api/contact', { method: 'POST', body: form })
    } catch (emailErr) {
      console.error('Contact notification email failed:', emailErr)
    }

    submitted.value = true
    Object.assign(form, { firstname: '', lastname: '', email: '', phone: '', company: '', role: '', reason: '', message: '', consent: false })
  } catch (e: any) {
    errorMsg.value = e.message || t.value.errorGeneric
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-form-wrapper {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
}

.cf-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}
@media (max-width: 640px) { .cf-row { grid-template-columns: 1fr; } }

.cf-field { display: flex; flex-direction: column; }
.cf-field--full { margin-bottom: 1rem; }

.cf-input {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  color: #fff;
  /* 16px minimum — anything smaller triggers iOS Safari's auto-zoom on focus
     (handoff §7 "16px inputs to prevent iOS zoom"). */
  font-size: 1rem;
  padding: 0.85rem 1.1rem;
  outline: none;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  font-family: inherit;
  box-sizing: border-box;
  font-weight: 500;
}
.cf-input::placeholder { color: rgba(255,255,255,0.35); font-weight: 400; }
.cf-input:focus {
  border-color: rgba(6,182,212,0.5);
  background: rgba(255,255,255,0.07);
  box-shadow: 0 0 0 3px rgba(6,182,212,0.1);
}

.cf-select-wrap { position: relative; }
.cf-select { appearance: none; -webkit-appearance: none; cursor: pointer; padding-right: 2.2rem; }
.cf-select-empty { color: rgba(255,255,255,0.35); font-weight: 400; }
.cf-select option { background: #0f172a; color: #fff; }
.cf-select-arrow { position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); font-size: 0.7rem; color: rgba(255,255,255,0.4); pointer-events: none; }

.cf-textarea { resize: vertical; min-height: 110px; }

.cf-legal {
  margin-bottom: 1.25rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.5;
}
.cf-checkbox-lbl { display: flex; align-items: flex-start; gap: 0.6rem; cursor: pointer; }
.cf-checkbox { margin-top: 2px; accent-color: #10b981; flex-shrink: 0; }

.cf-error { color: #f87171; font-size: 0.8rem; margin: 0.5rem 0; text-align: center; }

.cf-submit-row { display: flex; justify-content: center; margin-top: 1.5rem; }
.cf-submit-btn {
  padding: 0.85rem 4rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: inherit;
  border: 1px solid rgba(52, 211, 153, 0.5);
  cursor: pointer;
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  color: #000000;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
  box-shadow: 0 0 16px rgba(52, 211, 153, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
}
.cf-submit-btn:hover:not(:disabled) { background: linear-gradient(135deg, #10b981 0%, #059669 100%); box-shadow: 0 0 28px rgba(52, 211, 153, 0.5); transform: translateY(-1px); }
.cf-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.cf-spinner { width: 18px; height: 18px; border-radius: 50%; border: 2.5px solid rgba(0,0,0,0.2); border-top-color: #000; animation: cf-spin 0.7s linear infinite; display: inline-block; }
@keyframes cf-spin { to { transform: rotate(360deg); } }

.cf-success-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.cf-success-card { background: #0a0a0a; border: 1px solid rgba(16,185,129,0.3); border-radius: 20px; padding: 3rem 2.5rem; text-align: center; max-width: 400px; width: 90%; box-shadow: 0 20px 60px rgba(0,0,0,0.8); }
.cf-success-icon { width: 60px; height: 60px; margin: 0 auto 1.25rem; }
.cf-success-icon svg { width: 100%; height: 100%; }
.cf-success-card h3 { font-size: 1.6rem; font-weight: 700; color: #fff; margin: 0 0 0.75rem; }
.cf-success-card p { font-size: 0.95rem; color: rgba(255,255,255,0.7); margin: 0 0 1.5rem; line-height: 1.5; }
.cf-success-close { padding: 0.75rem 2.5rem; border-radius: 999px; background: linear-gradient(90deg, #34d399, #06b6d4); color: #000; font-weight: 700; border: none; cursor: pointer; font-size: 0.95rem; }

.cf-fade-enter-active, .cf-fade-leave-active { transition: opacity 0.3s; }
.cf-fade-enter-from, .cf-fade-leave-to { opacity: 0; }
</style>
