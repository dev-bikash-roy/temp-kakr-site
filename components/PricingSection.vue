<template>
  <section class="pricing-section relative section-py overflow-hidden" style="background: radial-gradient(ellipse at 50% 0%, #0a1628 0%, #050d1a 60%, #020810 100%);">
    <div class="absolute inset-0 pointer-events-none" style="background-image: url('/hero-bg.svg'); background-size: cover; opacity: 0.04;"></div>
    <div class="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none" style="background: radial-gradient(ellipse, rgba(6,182,212,0.2) 0%, transparent 70%); filter: blur(100px);"></div>
    <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] pointer-events-none" style="background: radial-gradient(ellipse, rgba(6,182,212,0.15) 0%, transparent 70%); filter: blur(100px);"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="pricing-section__header text-center mb-10" data-aos="fade-up">
        <h2 class="pricing-section__title text-4xl sm:text-5xl font-bold text-white leading-tight">
          {{ $t('pricing.title') }} <br />
          <span style="background: linear-gradient(90deg, #22d3ee 0%, #4ade80 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">{{ $t('pricing.titleHighlight') }}</span>
        </h2>
        <p class="text-slate-400 mt-4 max-w-xl mx-auto">{{ $t('pricing.subtitle') }}</p>
      </div>

      <!-- Pricing Grid Wrapper -->
      <div class="relative pt-4">


        <!-- Pricing Content -->
        <div class="relative z-10">


          <!-- Mobile carousel -->
          <div class="md:hidden relative mb-6 pt-4" ref="mobileCarousel">
        <div class="overflow-visible">
          <div class="flex transition-transform duration-300 ease-out" :style="`transform: translateX(-${activePlan * 100}%)`">
            <div v-for="(card, i) in currentCards" :key="card.title"
              :class="['rounded-3xl p-8 flex flex-col flex-shrink-0 w-full relative', card.featured ? 'pricing-card-featured' : 'pricing-card']">
              <div v-if="card.badge" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap">{{ card.badge }}</div>
              <div v-if="card.freeBadge" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap">{{ $t('pricing.free') }}</div>
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 mt-4" :class="card.featured ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-white/5 border border-white/10'">
                <i :class="[card.icon, 'text-cyan-400 text-2xl']"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-1">{{ card.title }}</h3>
              <div class="flex items-baseline gap-1 mb-1">
                <span class="text-4xl font-bold" :class="card.customPrice ? 'text-cyan-400' : 'text-white'">{{ card.price }}</span>
                <span v-if="card.period" class="text-sm" :class="card.featured ? 'text-slate-400' : 'text-slate-500'">{{ card.period }}</span>
              </div>
              <p class="text-sm mb-6 whitespace-pre-line" :class="card.featured ? 'text-slate-400' : 'text-slate-500'">{{ card.desc }}</p>
              <div class="mb-8 flex-1">
                <p class="text-white font-semibold text-sm mb-2.5">{{ $t('pricing.whatYouGet') }}</p>
                <ul class="space-y-2.5">
                  <li v-for="f in card.features" :key="f" class="flex items-start gap-2 text-slate-300 text-sm">
                    <i class="las la-check text-cyan-400 text-base flex-shrink-0 mt-0.5"></i>{{ f }}
                  </li>
                </ul>
                <template v-if="card.bestFor && card.bestFor.length">
                  <p class="text-white font-semibold text-sm mb-2.5 mt-5">{{ $t('pricing.bestFor') }}</p>
                  <ul class="space-y-2.5">
                    <li v-for="b in card.bestFor" :key="b" class="flex items-start gap-2 text-slate-300 text-sm">
                      <i class="las la-check text-cyan-400 text-base flex-shrink-0 mt-0.5"></i>{{ b }}
                    </li>
                  </ul>
                </template>
              </div>
              <a :href="card.link" :target="card.external ? '_blank' : undefined"
                :class="['block text-center font-bold text-sm py-3 rounded-xl', card.featured ? 'pricing-btn-featured' : 'pricing-btn-primary']">
                {{ card.cta }}
              </a>
            </div>
          </div>
        </div>
        <!-- Dots -->
        <div class="flex justify-center gap-2 mt-5">
          <button v-for="(_, i) in currentCards" :key="i" @click="activePlan = i"
            class="rounded-full transition-all duration-300"
            :style="i === activePlan ? 'width:20px; height:6px; background:#22d3ee;' : 'width:6px; height:6px; background:rgba(255,255,255,0.2);'" />
        </div>
        <!-- Prev/Next -->
        <div class="flex justify-between mt-4">
          <button @click="activePlan = Math.max(0, activePlan - 1)" :disabled="activePlan === 0"
            class="px-4 py-2 rounded-xl text-xs font-bold text-white/60 border border-white/10 hover:border-white/20 hover:text-white transition-colors disabled:opacity-30">{{ $t('pricing.prev') }}</button>
          <span class="text-white/40 text-xs self-center">{{ activePlan + 1 }} / {{ currentCards.length }}</span>
          <button @click="activePlan = Math.min(currentCards.length - 1, activePlan + 1)" :disabled="activePlan === currentCards.length - 1"
            class="px-4 py-2 rounded-xl text-xs font-bold text-white/60 border border-white/10 hover:border-white/20 hover:text-white transition-colors disabled:opacity-30">{{ $t('pricing.next') }}</button>
        </div>
      </div>

      <!-- Desktop grid (hidden on mobile) -->
      <div class="hidden md:grid md:grid-cols-3 gap-5 max-w-5xl mx-auto pt-4">
        <div v-for="(card, i) in currentCards" :key="card.title"
          :class="['rounded-3xl p-8 flex flex-col relative', card.featured ? 'pricing-card-featured' : 'pricing-card']">
          <div v-if="card.badge" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap">{{ card.badge }}</div>
          <div v-if="card.freeBadge" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap">{{ $t('pricing.free') }}</div>
          <div class="absolute top-0 left-8 right-8 h-px transition-opacity" :class="card.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'" style="background: linear-gradient(90deg, transparent, rgba(6,182,212,0.7), transparent);"></div>
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" :class="'mt-4 ' + (card.featured ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-white/5 border border-white/10')">
            <i :class="[card.icon, 'text-cyan-400 text-2xl']"></i>
          </div>
          <h3 class="text-2xl font-bold text-white mb-1">{{ card.title }}</h3>
          <div class="flex items-baseline gap-1 mb-1">
            <span class="text-4xl font-bold" :class="card.customPrice ? 'text-cyan-400' : 'text-white'">{{ card.price }}</span>
            <span v-if="card.period" class="text-sm" :class="card.featured ? 'text-slate-400' : 'text-slate-500'">{{ card.period }}</span>
          </div>
          <p class="text-sm mb-6 whitespace-pre-line" :class="card.featured ? 'text-slate-400' : 'text-slate-500'">{{ card.desc }}</p>
          <div class="mb-8 flex-1">
            <p class="text-white font-semibold text-sm mb-2.5">{{ $t('pricing.whatYouGet') }}</p>
            <ul class="space-y-2.5">
              <li v-for="f in card.features" :key="f" class="flex items-start gap-2 text-slate-300 text-sm">
                <i class="las la-check text-cyan-400 text-base flex-shrink-0 mt-0.5"></i>{{ f }}
              </li>
            </ul>
            <template v-if="card.bestFor && card.bestFor.length">
              <p class="text-white font-semibold text-sm mb-2.5 mt-5">{{ $t('pricing.bestFor') }}</p>
              <ul class="space-y-2.5">
                <li v-for="b in card.bestFor" :key="b" class="flex items-start gap-2 text-slate-300 text-sm">
                  <i class="las la-check text-cyan-400 text-base flex-shrink-0 mt-0.5"></i>{{ b }}
                </li>
              </ul>
            </template>
          </div>
          <a :href="card.link" :target="card.external ? '_blank' : undefined"
            :class="['block text-center font-bold text-sm py-3 rounded-xl', card.featured ? 'pricing-btn-featured' : 'pricing-btn-primary']">
            {{ card.cta }}
          </a>
        </div>
      </div><!-- end desktop grid -->

        </div><!-- end pricing content -->

      </div><!-- end pricing grid wrapper -->



      <!-- Pricing Request Modal -->
      <PricingRequestModal :isOpen="showPricingModal" @close="showPricingModal = false" />

    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, reactive, onUnmounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  forceShowModal: { type: Boolean, default: false }
})
const emit = defineEmits(['unlocked', 'close'])

const { t } = useI18n()
const showPricingModal = ref(false)
const showUnlockModal = ref(false)
const pricingGateDebug = import.meta.dev
const pricingUnlockStorageKey = 'pteri_pricing_unlocked_until'
const pricingUnlockDurationMs = 30 * 24 * 60 * 60 * 1000
const productionRecaptchaSiteKey = '6Lf5fNQsAAAAAJpdGJ7w3ADuF0sLgIZfnv1nQo47'
const recaptchaWidget = ref(null)
const recaptchaWidgetId = ref(null)
const recaptchaLoadError = ref(false)

const pricingCaptchaEnabled = computed(() => {
  if (typeof window === 'undefined') return true

  const hostname = window.location.hostname

  return !['localhost', '127.0.0.1', '::1'].includes(hostname)
})

// Allow parent to open the modal
watch(() => props.forceShowModal, (val) => {
  if (val) showUnlockModal.value = true
})

watch(showUnlockModal, (val) => {
  if (!val) emit('close')
  if (typeof document !== 'undefined') {
    document.body.style.overflow = val ? 'hidden' : ''

    if (val && pricingCaptchaEnabled.value) {
      renderPricingRecaptcha()
    } else {
      recaptchaWidgetId.value = null
      gateForm.recaptcha = false
    }
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
  if (typeof window !== 'undefined') {
    window.removeEventListener('click', closeCountryDropdown)
  }
})

const pricingUnlocked = ref(false)
const gateSubmitted = ref(false)
const gateLoading = ref(false)
const gateError = ref('')
const countryOptions = [
  { code: 'US', name: 'United States', dial: '+1' },
  { code: 'CA', name: 'Canada', dial: '+1' },
  { code: 'GB', name: 'United Kingdom', dial: '+44' },
  { code: 'DE', name: 'Germany', dial: '+49' },
  { code: 'FR', name: 'France', dial: '+33' },
  { code: 'ES', name: 'Spain', dial: '+34' },
  { code: 'IT', name: 'Italy', dial: '+39' },
  { code: 'NL', name: 'Netherlands', dial: '+31' },
  { code: 'SE', name: 'Sweden', dial: '+46' },
  { code: 'NO', name: 'Norway', dial: '+47' },
  { code: 'DK', name: 'Denmark', dial: '+45' },
  { code: 'FI', name: 'Finland', dial: '+358' },
  { code: 'CH', name: 'Switzerland', dial: '+41' },
  { code: 'AT', name: 'Austria', dial: '+43' },
  { code: 'BE', name: 'Belgium', dial: '+32' },
  { code: 'PT', name: 'Portugal', dial: '+351' },
  { code: 'PL', name: 'Poland', dial: '+48' },
  { code: 'RU', name: 'Russia', dial: '+7' },
  { code: 'UA', name: 'Ukraine', dial: '+380' },
  { code: 'TR', name: 'Turkey', dial: '+90' },
  { code: 'GR', name: 'Greece', dial: '+30' },
  { code: 'HU', name: 'Hungary', dial: '+36' },
  { code: 'CZ', name: 'Czech Republic', dial: '+420' },
  { code: 'RO', name: 'Romania', dial: '+40' },
  { code: 'IN', name: 'India', dial: '+91' },
  { code: 'CN', name: 'China', dial: '+86' },
  { code: 'JP', name: 'Japan', dial: '+81' },
  { code: 'KR', name: 'South Korea', dial: '+82' },
  { code: 'SG', name: 'Singapore', dial: '+65' },
  { code: 'MY', name: 'Malaysia', dial: '+60' },
  { code: 'ID', name: 'Indonesia', dial: '+62' },
  { code: 'PH', name: 'Philippines', dial: '+63' },
  { code: 'TH', name: 'Thailand', dial: '+66' },
  { code: 'VN', name: 'Vietnam', dial: '+84' },
  { code: 'BD', name: 'Bangladesh', dial: '+880' },
  { code: 'PK', name: 'Pakistan', dial: '+92' },
  { code: 'LK', name: 'Sri Lanka', dial: '+94' },
  { code: 'AE', name: 'UAE', dial: '+971' },
  { code: 'SA', name: 'Saudi Arabia', dial: '+966' },
  { code: 'QA', name: 'Qatar', dial: '+974' },
  { code: 'KW', name: 'Kuwait', dial: '+965' },
  { code: 'BH', name: 'Bahrain', dial: '+973' },
  { code: 'OM', name: 'Oman', dial: '+968' },
  { code: 'IL', name: 'Israel', dial: '+972' },
  { code: 'EG', name: 'Egypt', dial: '+20' },
  { code: 'ZA', name: 'South Africa', dial: '+27' },
  { code: 'NG', name: 'Nigeria', dial: '+234' },
  { code: 'KE', name: 'Kenya', dial: '+254' },
  { code: 'GH', name: 'Ghana', dial: '+233' },
  { code: 'MA', name: 'Morocco', dial: '+212' },
  { code: 'DZ', name: 'Algeria', dial: '+213' },
  { code: 'TN', name: 'Tunisia', dial: '+216' },
  { code: 'BR', name: 'Brazil', dial: '+55' },
  { code: 'MX', name: 'Mexico', dial: '+52' },
  { code: 'AR', name: 'Argentina', dial: '+54' },
  { code: 'CO', name: 'Colombia', dial: '+57' },
  { code: 'CL', name: 'Chile', dial: '+56' },
  { code: 'PE', name: 'Peru', dial: '+51' },
  { code: 'AU', name: 'Australia', dial: '+61' },
  { code: 'NZ', name: 'New Zealand', dial: '+64' },
]
const activeCountryDropdown = ref(null)
const countrySearch = ref('')

const gateForm = reactive({
  name: '',
  email: '',
  phoneCountryIso: 'US',
  phoneCountryCode: '+1',
  phone: '',
  otp: '',
  company: '',
  companyEmail: '',
  companyWeb: '',
  role: '',
  companySize: '',
  companyContactCountryIso: 'US',
  companyContactCountryCode: '+1',
  companyContact: '',
  interest: '',
  recaptcha: false
})

function loadRecaptchaScript() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.grecaptcha?.render) return Promise.resolve()

  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-pricing-recaptcha="true"]')
    if (existingScript) {
      existingScript.addEventListener('load', resolve, { once: true })
      existingScript.addEventListener('error', reject, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.dataset.pricingRecaptcha = 'true'
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

function getRecaptchaSiteKey() {
  return productionRecaptchaSiteKey
}

async function renderPricingRecaptcha() {
  if (typeof window === 'undefined') return

  recaptchaLoadError.value = false
  await nextTick()

  try {
    await loadRecaptchaScript()
    await new Promise((resolve) => window.grecaptcha.ready(resolve))
    await nextTick()

    if (!recaptchaWidget.value || recaptchaWidgetId.value !== null) return

    recaptchaWidgetId.value = window.grecaptcha.render(recaptchaWidget.value, {
      sitekey: getRecaptchaSiteKey(),
      callback: (token) => {
        gateForm.recaptcha = token
      },
      'expired-callback': () => {
        gateForm.recaptcha = false
      },
      theme: 'dark'
    })
  } catch (error) {
    console.error('Pricing reCAPTCHA failed to load:', error)
    recaptchaLoadError.value = true
  }
}

function withCountryCode(countryCode, phone) {
  const trimmedPhone = phone.trim()

  return trimmedPhone ? `${countryCode} ${trimmedPhone}` : ''
}

function getPhoneDigits(phone) {
  return phone.replace(/\D/g, '')
}

function isValidOptionalPhone(phone) {
  const trimmedPhone = phone.trim()

  if (!trimmedPhone) return true

  const digits = getPhoneDigits(trimmedPhone)

  return digits.length >= 7 && digits.length <= 15 && !/^(\d)\1+$/.test(digits)
}

function normalizeWebsiteUrl(value) {
  const trimmedValue = value.trim()

  if (!trimmedValue) return ''

  return /^https?:\/\//i.test(trimmedValue) ? trimmedValue : `https://${trimmedValue}`
}

function isValidWebsiteUrl(value) {
  try {
    const url = new URL(value)

    return ['http:', 'https:'].includes(url.protocol) && url.hostname.includes('.')
  } catch {
    return false
  }
}

function getCookieValue(name) {
  if (typeof document === 'undefined') return ''

  return document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`))
    ?.split('=')
    .slice(1)
    .join('=') || ''
}

function hasStoredPricingUnlock() {
  if (typeof window === 'undefined') return false

  const unlockUntil = Number(window.localStorage.getItem(pricingUnlockStorageKey))

  if (Number.isFinite(unlockUntil) && unlockUntil > Date.now()) {
    return true
  }

  window.localStorage.removeItem(pricingUnlockStorageKey)
  return false
}

function rememberPricingUnlock() {
  if (typeof window === 'undefined') return

  window.localStorage.setItem(pricingUnlockStorageKey, String(Date.now() + pricingUnlockDurationMs))
}

function getPricingGateDebugForm() {
  return {
    name: gateForm.name,
    email: gateForm.email,
    phone: withCountryCode(gateForm.phoneCountryCode, gateForm.phone) || 'N/A',
    company: gateForm.company,
    companyEmail: gateForm.companyEmail,
    companyWeb: normalizeWebsiteUrl(gateForm.companyWeb),
    role: gateForm.role,
    companySize: gateForm.companySize,
    companyContact: withCountryCode(gateForm.companyContactCountryCode, gateForm.companyContact) || 'N/A',
    interest: gateForm.interest,
    captchaEnabled: pricingCaptchaEnabled.value,
    hasCaptchaToken: Boolean(gateForm.recaptcha)
  }
}

const selectedPhoneCountry = computed(() => countryOptions.find(country => country.code === gateForm.phoneCountryIso) || countryOptions[0])
const selectedCompanyContactCountry = computed(() => countryOptions.find(country => country.code === gateForm.companyContactCountryIso) || countryOptions[0])

const filteredCountryOptions = computed(() => {
  const query = countrySearch.value.trim().toLowerCase()

  if (!query) return countryOptions

  return countryOptions.filter(country =>
    country.name.toLowerCase().includes(query) ||
    country.code.toLowerCase().includes(query) ||
    country.dial.includes(query)
  )
})

function toggleCountryDropdown(field) {
  activeCountryDropdown.value = activeCountryDropdown.value === field ? null : field
  countrySearch.value = ''
}

function selectCountryCode(field, country) {
  if (field === 'companyContact') {
    gateForm.companyContactCountryIso = country.code
    gateForm.companyContactCountryCode = country.dial
  } else {
    gateForm.phoneCountryIso = country.code
    gateForm.phoneCountryCode = country.dial
  }

  activeCountryDropdown.value = null
  countrySearch.value = ''
}

function setGateCountry(country) {
  gateForm.phoneCountryIso = country.code
  gateForm.phoneCountryCode = country.dial
  gateForm.companyContactCountryIso = country.code
  gateForm.companyContactCountryCode = country.dial
}

async function detectGateCountry() {
  try {
    const data = await $fetch('/api/geo')
    const match = countryOptions.find(country => country.code === data.country_code)

    if (match) setGateCountry(match)
  } catch {
    // Keep US as the default when detection is unavailable.
  }
}

const otpSent = ref(false)
const otpTimer = ref('01:00')

let timerInterval = null
const otpLoading = ref(false)

function startOtpTimer() {
  let seconds = 60
  clearInterval(timerInterval)
  timerInterval = setInterval(() => {
    seconds--
    if (seconds <= 0) {
      clearInterval(timerInterval)
      otpTimer.value = '00:00'
    } else {
      otpTimer.value = `00:${String(seconds).padStart(2, '0')}`
    }
  }, 1000)
}

const sendOtp = async () => {
  console.log('sendOtp triggered. Current email:', gateForm.email)
  if (!gateForm.email) {
    gateError.value = 'Please enter your work email to receive OTP.'
    return
  }
  gateError.value = ''
  otpLoading.value = true
  try {
    console.log('Fetching /api/send-otp...')
    await $fetch('/api/send-otp', {
      method: 'POST',
      body: { email: gateForm.email }
    })
    otpSent.value = true
    otpTimer.value = '01:00'
    startOtpTimer()
  } catch (err) {
    gateError.value = err?.data?.statusMessage || err?.message || 'Failed to send OTP. Please try again.'
  } finally {
    otpLoading.value = false
  }
}

onMounted(() => {
  // Expose recaptcha callbacks to window
  if (typeof window !== 'undefined') {
    window.onRecaptchaSuccess = (token) => {
      gateForm.recaptcha = token
    }
    window.onRecaptchaExpired = () => {
      gateForm.recaptcha = false
    }
    window.addEventListener('click', closeCountryDropdown)
    pricingUnlocked.value = hasStoredPricingUnlock()
    detectGateCountry()
  }

  // Keep pricing gated until the current visitor submits the unlock form or has an active unlock.
})

function closeCountryDropdown() {
  activeCountryDropdown.value = null
}

async function submitGate() {
  const startedAt = Date.now()

  if (pricingGateDebug) {
    console.group('[pricing-gate] submitGate')
    console.table(getPricingGateDebugForm())
    console.log('[pricing-gate] page', window.location.href)
  }

  gateError.value = ''

  const failValidation = (message, details = {}) => {
    gateError.value = message

    if (pricingGateDebug) {
      console.warn('[pricing-gate] blocked before HubSpot submit:', message, details)
      console.groupEnd()
    }

    return false
  }

  if (!gateForm.email.trim()) {
    return failValidation('Please enter your work email.', { field: 'email' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gateForm.email.trim())) {
    return failValidation('Please enter a valid work email.', { field: 'email', value: gateForm.email })
  }
  if (!gateForm.companyEmail.trim()) {
    return failValidation('Please enter your company email.', { field: 'companyEmail' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gateForm.companyEmail.trim())) {
    return failValidation('Please enter a valid company email.', { field: 'companyEmail', value: gateForm.companyEmail })
  }

  const companyWebsiteUrl = normalizeWebsiteUrl(gateForm.companyWeb)

  if (!gateForm.name || !gateForm.company || !companyWebsiteUrl || !gateForm.role || !gateForm.companySize || !gateForm.interest) {
    return failValidation('Please fill all required fields.', getPricingGateDebugForm())
  }
  if (!isValidWebsiteUrl(companyWebsiteUrl)) {
    return failValidation('Please enter a valid company web URL.', { field: 'companyWeb', value: companyWebsiteUrl })
  }
  if (!isValidOptionalPhone(gateForm.phone)) {
    return failValidation('Please enter a valid contact number.', { field: 'phone', value: gateForm.phone })
  }
  if (!isValidOptionalPhone(gateForm.companyContact)) {
    return failValidation('Please enter a valid company contact number.', { field: 'companyContact', value: gateForm.companyContact })
  }
  if (pricingCaptchaEnabled.value && !gateForm.recaptcha) {
    return failValidation('Please verify that you are human.', { field: 'recaptcha' })
  }
  gateLoading.value = true
  try {
    if (pricingCaptchaEnabled.value) {
      if (pricingGateDebug) console.log('[pricing-gate] verifying captcha...')
      await $fetch('/api/verify-recaptcha', {
        method: 'POST',
        body: { token: gateForm.recaptcha }
      })
      if (pricingGateDebug) console.log('[pricing-gate] captcha verified')
    } else if (pricingGateDebug) {
      console.warn('[pricing-gate] captcha temporarily disabled')
    }

    const contactNumber = withCountryCode(gateForm.phoneCountryCode, gateForm.phone)
    const companyContactNumber = withCountryCode(gateForm.companyContactCountryCode, gateForm.companyContact)

    const fields = [
      { name: 'firstname', value: gateForm.name.trim() },
      { name: 'email', value: gateForm.email.trim() },
      { name: 'phone', value: contactNumber },
      { name: '0-2/name', value: gateForm.company.trim() },
      { name: 'work_email', value: gateForm.companyEmail.trim() },
      { name: '0-2/website', value: companyWebsiteUrl },
      { name: '0-2/your_role', value: gateForm.role },
      { name: '0-2/company_sizes', value: gateForm.companySize },
      { name: 'mobilephone', value: companyContactNumber },
      { name: '0-2/what_are_you_interested_in', value: gateForm.interest },
    ].filter(f => f.value !== undefined && f.value !== null && f.value !== '')

    const hubspotTrackingCookie = getCookieValue('hubspotutk')
    const payload = {
      fields,
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: 'By clicking submit, you consent to allow Kakr Labs, Inc. to store and process the personal information submitted.',
          communications: []
        }
      },
      context: {
        ...(hubspotTrackingCookie ? { hutk: hubspotTrackingCookie } : {}),
        pageUri: window.location.href,
        pageName: 'Pricing Unlock Gate V2'
      }
    }

    if (pricingGateDebug) {
      console.log('[pricing-gate] payload fields')
      console.table(fields)
      console.log('[pricing-gate] posting /api/pricing-gate...')
    }

    const response = await $fetch('/api/pricing-gate', {
      method: 'POST',
      body: payload
    })

    if (pricingGateDebug) console.log('[pricing-gate] API response', response)

    rememberPricingUnlock()
    gateSubmitted.value = true
    setTimeout(() => {
      showUnlockModal.value = false
      pricingUnlocked.value = true
      emit('unlocked')
    }, 1800)
  } catch (err) {
    console.error('Pricing Gate Error:', err)
    if (pricingGateDebug) console.error('[pricing-gate] failed after ms', Date.now() - startedAt, err?.data || err)
    const hubspotError = err?.data?.data?.hubspot || err?.data?.hubspot
    const msg = err?.data?.statusMessage ||
      hubspotError?.errors?.[0]?.message ||
      hubspotError?.message ||
      err?.data?.message ||
      err?.message ||
      'Something went wrong. Please try again.'
    gateError.value = msg
  } finally {
    gateLoading.value = false
    if (pricingGateDebug) {
      console.log('[pricing-gate] finished after ms', Date.now() - startedAt)
      console.groupEnd()
    }
  }
}
// Helper to get a translated array by fetching each index until missing
function ta(key) {
  const result = []
  let i = 0
  while (true) {
    const k = `${key}.${i}`
    const val = t(k)
    // vue-i18n returns the key itself when missing
    if (val === k) break
    result.push(val)
    i++
  }
  return result
}

const activePlan = ref(0)
const mobileCarousel = ref(null)

onMounted(() => {
  const el = mobileCarousel.value
  if (!el) return
  let startX = 0
  el.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX }, { passive: true })
  el.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      const max = currentCards.value.length - 1
      if (diff > 0) activePlan.value = Math.min(max, activePlan.value + 1)
      else activePlan.value = Math.max(0, activePlan.value - 1)
    }
  }, { passive: true })
})

const identityCards = computed(() => [
  {
    title: t('pricing.identity.basic.title'),
    price: t('pricing.identity.basic.price'),
    period: t('pricing.perMonth'),
    desc: t('pricing.identity.basic.desc'),
    icon: 'las la-bolt',
    featured: false,
    external: true,
    link: 'https://pteri.org/Register',
    cta: t('pricing.identity.basic.cta'),
    features: ta('pricing.identity.basic.features'),
    bestFor: ta('pricing.identity.basic.bestFor'),
  },
  {
    title: t('pricing.identity.scale.title'),
    price: t('pricing.identity.scale.price'),
    period: t('pricing.perMonth'),
    desc: t('pricing.identity.scale.desc'),
    icon: 'las la-lock',
    badge: t('pricing.recommended'),
    featured: true,
    external: true,
    link: 'https://pteri.org/Register',
    cta: t('pricing.identity.scale.cta'),
    features: ta('pricing.identity.scale.features'),
    bestFor: ta('pricing.identity.scale.bestFor'),
  },
  {
    title: t('pricing.identity.enterprise.title'),
    price: t('pricing.identity.enterprise.price'),
    period: t('pricing.perMonth'),
    desc: t('pricing.identity.enterprise.desc'),
    icon: 'las la-landmark',
    featured: false,
    external: false,
    link: '/contact',
    cta: t('pricing.identity.enterprise.cta'),
    features: ta('pricing.identity.enterprise.features'),
    bestFor: ta('pricing.identity.enterprise.bestFor'),
  },
])

const currentCards = computed(() => identityCards.value)
</script>

<style scoped>
.pricing-section {
  scroll-margin-top: 112px;
}

@media (max-width: 639px) {
  .pricing-section {
    padding-top: 7.25rem;
    scroll-margin-top: 96px;
  }

  .pricing-section__header {
    margin-bottom: 2rem;
  }

  .pricing-section__title {
    font-size: clamp(2.35rem, 11vw, 3rem);
    line-height: 1.04;
  }
}

@media (max-width: 420px) {
  .pricing-section {
    padding-top: 8rem;
  }
}

/* Gate transitions */
.gate-fade-enter-active { transition: all 0.5s ease; }
.gate-fade-leave-active { transition: all 0.3s ease; }
.gate-fade-enter-from, .gate-fade-leave-to { opacity: 0; transform: scale(0.97); }

.pricing-btn-primary { background: rgba(6,182,212,0.16); border: 1px solid rgba(6,182,212,0.45); color: #22d3ee; transition: all 0.2s; }
.pricing-btn-primary:hover { background: rgba(6,182,212,0.28); border-color: rgba(6,182,212,0.65); color: #22d3ee; box-shadow: 0 0 20px rgba(6,182,212,0.2); }
.pricing-btn-featured { background: linear-gradient(135deg, rgba(6,182,212,0.9) 0%, rgba(20,184,166,0.9) 100%); border: 1px solid rgba(6,182,212,0.5); color: #000; font-weight: 800; box-shadow: 0 0 20px rgba(6,182,212,0.3); transition: all 0.2s; }
.pricing-btn-featured:hover { background: linear-gradient(135deg, #22d3ee 0%, #2dd4bf 100%); box-shadow: 0 0 30px rgba(6,182,212,0.5); }

/* Gate form fields */
.gate-label { display: block; font-size: 0.75rem; font-weight: 600; color: rgba(255,255,255,0.7); margin-bottom: 0.25rem; }
@media (min-width: 640px) {
  .gate-label { font-size: 0.875rem; margin-bottom: 0.5rem; }
}
.gate-field-wrap { position: relative; display: flex; align-items: center; }
.gate-icon { position: absolute; left: 0.875rem; width: 18px; height: 18px; color: rgba(255,255,255,0.3); flex-shrink: 0; pointer-events: none; }
.gate-input {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  color: #fff;
  font-size: 0.9375rem;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  outline: none;
  font-family: inherit;
  transition: border-color 0.2s, background 0.2s;
}
.gate-input::placeholder { color: rgba(255,255,255,0.25); }
.gate-input:focus { border-color: rgba(99,102,241,0.5); background: rgba(99,102,241,0.04); }
.gate-select { appearance: none; -webkit-appearance: none; cursor: pointer; padding-right: 3rem; }
.gate-select-wrap .gate-chevron { position: absolute; right: 1rem; width: 16px; height: 16px; color: rgba(255,255,255,0.3); pointer-events: none; }
.gate-empty { color: rgba(255,255,255,0.25); }
.gate-select option { background: #0d1117; color: #fff; }

.gate-phone-wrap .gate-icon { left: 0.75rem; }
.gate-country-trigger {
  position: absolute;
  left: 2.35rem;
  top: 1px;
  bottom: 1px;
  z-index: 3;
  width: 6.4rem;
  border: 0;
  border-left: 1px solid rgba(255,255,255,0.06);
  border-right: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
  color: rgba(255,255,255,0.86);
  font: inherit;
  font-size: 0.75rem;
  font-weight: 700;
  outline: none;
  padding: 0 0.45rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
}
.gate-country-trigger:hover,
.gate-country-trigger:focus {
  background: rgba(99,102,241,0.12);
  color: #fff;
}
.gate-country-caret {
  width: 12px;
  height: 12px;
  color: rgba(255,255,255,0.45);
  transition: transform 0.2s;
  flex-shrink: 0;
}
.gate-country-caret--open {
  transform: rotate(180deg);
}
.gate-phone-input {
  padding-left: 9.2rem;
}
.gate-country-dropdown {
  position: absolute;
  top: calc(100% + 0.45rem);
  left: 0;
  right: 0;
  z-index: 60;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  background: #0d1117;
  box-shadow: 0 18px 50px rgba(0,0,0,0.65);
  overflow: hidden;
}
.gate-country-dropdown--up {
  top: auto;
  bottom: calc(100% + 0.45rem);
}
.gate-country-search-wrap {
  padding: 0.6rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  background: rgba(255,255,255,0.03);
}
.gate-country-search {
  width: 100%;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 9px;
  background: rgba(255,255,255,0.05);
  color: #fff;
  font: inherit;
  font-size: 0.8rem;
  outline: none;
  padding: 0.55rem 0.7rem;
}
.gate-country-search::placeholder {
  color: rgba(255,255,255,0.35);
}
.gate-country-list {
  max-height: 220px;
  overflow-y: auto;
}
.gate-country-list::-webkit-scrollbar {
  width: 4px;
}
.gate-country-list::-webkit-scrollbar-track {
  background: transparent;
}
.gate-country-list::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.16);
  border-radius: 999px;
}
.gate-country-option {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 2.5rem 3.6rem;
  gap: 0.6rem;
  align-items: center;
  border: 0;
  background: transparent;
  color: rgba(255,255,255,0.82);
  cursor: pointer;
  font: inherit;
  padding: 0.62rem 0.8rem;
  text-align: left;
  transition: background 0.15s, color 0.15s;
}
.gate-country-option:hover,
.gate-country-option--active {
  background: rgba(99,102,241,0.12);
  color: #fff;
}
.gate-country-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.82rem;
}
.gate-country-code-text {
  color: rgba(255,255,255,0.45);
  font-size: 0.72rem;
  font-weight: 700;
}
.gate-country-dial {
  justify-self: end;
  color: rgba(255,255,255,0.62);
  font-size: 0.78rem;
  font-weight: 800;
}
@media (max-width: 420px) {
  .gate-country-trigger {
    width: 5.6rem;
    font-size: 0.7rem;
    gap: 0.25rem;
  }
  .gate-phone-input {
    padding-left: 8.35rem;
  }
}

.gate-footer-box {
  align-items: stretch;
}
@media (min-width: 640px) {
  .gate-footer-box {
    grid-template-columns: minmax(304px, max-content) minmax(0, 1fr);
  }
}
.recaptcha-panel {
  min-width: 0;
  overflow: hidden;
}
.recaptcha-frame {
  width: 100%;
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}
.recaptcha-frame :deep(.g-recaptcha) {
  transform-origin: top left;
}
.recaptcha-error {
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(248,113,113,0.35);
  background: rgba(127,29,29,0.18);
  color: #fecaca;
  font-size: 0.8rem;
  line-height: 1.4;
}

/* Scale down on screens narrower than the widget (304px) */
@media (max-width: 480px) {
  .recaptcha-frame :deep(.g-recaptcha) {
    transform: scale(0.92);
  }
  .recaptcha-frame {
    min-height: 72px;
  }
}

@media (max-width: 380px) {
  .recaptcha-frame :deep(.g-recaptcha) {
    transform: scale(0.80);
  }
  .recaptcha-frame {
    min-height: 64px;
  }
}

@media (max-width: 320px) {
  .recaptcha-frame :deep(.g-recaptcha) {
    transform: scale(0.72);
  }
  .recaptcha-frame {
    min-height: 58px;
  }
}

.pricing-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); transition: all 0.3s; height: 100%; }
.pricing-card:hover { background: rgba(255,255,255,0.04); border-color: rgba(6,182,212,0.3); transform: translateY(-4px); }
.pricing-card-featured { background: rgba(6,182,212,0.05); border: 1px solid rgba(6,182,212,0.2); transition: all 0.3s; box-shadow: 0 0 40px rgba(6,182,212,0.1); height: 100%; }
.pricing-card-featured:hover { background: rgba(6,182,212,0.08); border-color: rgba(6,182,212,0.4); transform: translateY(-4px); box-shadow: 0 0 60px rgba(6,182,212,0.2); }
</style>

