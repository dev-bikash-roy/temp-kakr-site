<template>
  <div class="hs-form-wrapper">
    <div class="hs-form-heading">
      <h2>{{ t.headingPart1 }} <span class="hs-highlight">{{ t.headingHighlight }}</span> {{ t.headingPart2 }}
      </h2>
    </div>

    <div class="hs-card">
      <form @submit.prevent="submitForm" novalidate>

        <!-- Row 1 -->
        <div class="hs-row">
          <div class="hs-field">
            <input v-model="form.name" type="text" :placeholder="t.companyName" class="hs-input" required />
          </div>
          <div class="hs-field">
            <input v-model="form.website" type="text" :placeholder="t.companyWebsite" class="hs-input" />
          </div>
        </div>

        <!-- Row 2 -->
        <div class="hs-row">
          <div class="hs-field">
            <div class="hs-select-wrap">
              <select v-model="form.companySize" class="hs-input hs-select" :class="{ 'hs-select-empty': !form.companySize }">
                <option value="" disabled>{{ t.companySize }}</option>
                <option value="1-10">{{ t.companySizeOptions['1-10'] }}</option>
                <option value="11-50">{{ t.companySizeOptions['11-50'] }}</option>
                <option value="51-200">{{ t.companySizeOptions['51-200'] }}</option>
                <option value="201-1000">{{ t.companySizeOptions['201-1000'] }}</option>
                <option value="1000+">{{ t.companySizeOptions['1000+'] }}</option>
              </select>
              <span class="hs-select-arrow">▾</span>
            </div>
          </div>
          <div class="hs-field">
            <input v-model="form.industry" type="text" :placeholder="t.industry" class="hs-input" />
          </div>
        </div>

        <!-- Primary Pilot Goal -->
        <div class="hs-field hs-field--full mt-4 mb-4">
          <h4 class="hs-label">{{ t.pilotGoal }}</h4>
          <div class="hs-radio-grid">
            <label class="hs-radio-lbl">
              <input type="radio" v-model="form.pilotGoal" value="Replace SMS-based 2FA" />
              <span class="hs-radio-custom"></span> {{ t.pilotGoalOptions.replaceSms }}
            </label>
            <label class="hs-radio-lbl">
              <input type="radio" v-model="form.pilotGoal" value="Prevent SIM swap fraud" />
              <span class="hs-radio-custom"></span> {{ t.pilotGoalOptions.preventSimSwap }}
            </label>
            <label class="hs-radio-lbl">
              <input type="radio" v-model="form.pilotGoal" value="Reduce phishing & account takeover" />
              <span class="hs-radio-custom"></span> {{ t.pilotGoalOptions.reducePhishing }}
            </label>
            <label class="hs-radio-lbl">
              <input type="radio" v-model="form.pilotGoal" value="Secure AI agents" />
              <span class="hs-radio-custom"></span> {{ t.pilotGoalOptions.secureAi }}
            </label>
            <label class="hs-radio-lbl">
              <input type="radio" v-model="form.pilotGoal" value="Cloud Provider" />
              <span class="hs-radio-custom"></span> {{ t.pilotGoalOptions.cloudProvider }}
            </label>
            <label class="hs-radio-lbl">
              <input type="radio" v-model="form.pilotGoal" value="Add Litecoin blockchain infrastructure" />
              <span class="hs-radio-custom"></span> {{ t.pilotGoalOptions.addLitecoin }}
            </label>
            <label class="hs-radio-lbl">
              <input type="radio" v-model="form.pilotGoal" value="Evaluate privacy-focused payment controls" />
              <span class="hs-radio-custom"></span> {{ t.pilotGoalOptions.evaluateMweb }}
            </label>
          </div>
        </div>

        <!-- Row 3 -->
        <div class="hs-row">
          <div class="hs-field">
            <div class="hs-select-wrap">
              <select v-model="form.authMethod" class="hs-input hs-select" :class="{ 'hs-select-empty': !form.authMethod }">
                <option value="" disabled>{{ t.authMethod }}</option>
                <option value="Passwords Only">{{ t.authMethodOptions.passwordsOnly }}</option>
                <option value="Passwords + SMS OTP">{{ t.authMethodOptions.passwordsSms }}</option>
                <option value="Passwords + Email OTP">{{ t.authMethodOptions.passwordsEmail }}</option>
                <option value="Authenticator App (TOTP)">{{ t.authMethodOptions.totp }}</option>
                <option value="Passkeys / WebAuthn">{{ t.authMethodOptions.passkeys }}</option>
                <option value="Other">{{ t.authMethodOptions.other }}</option>
              </select>
              <span class="hs-select-arrow">▾</span>
            </div>
          </div>
          <div class="hs-field">
            <input v-model="form.otpVolume" type="text" :placeholder="t.otpVolume" class="hs-input" />
          </div>
        </div>

        <!-- Row 4 -->
        <div class="hs-row">
          <div class="hs-field">
            <input v-model="form.verifications" type="text" :placeholder="t.verifications" class="hs-input" />
          </div>
          <div class="hs-field">
            <input v-model="form.apiCalls" type="text" :placeholder="t.apiCalls" class="hs-input" />
          </div>
        </div>

        <!-- Fraud Experienced -->
        <div class="hs-field hs-field--full mt-4 mb-4">
          <h4 class="hs-label">{{ t.fraudLabel }}</h4>
          <div class="hs-radio-flex">
            <label class="hs-radio-lbl">
              <input type="radio" v-model="form.fraud" value="Yes" />
              <span class="hs-radio-custom"></span> {{ t.yes }}
            </label>
            <label class="hs-radio-lbl">
              <input type="radio" v-model="form.fraud" value="No" />
              <span class="hs-radio-custom"></span> {{ t.no }}
            </label>
          </div>
        </div>

        <!-- Row 5 -->
        <div class="hs-row">
          <div class="hs-field">
            <div class="hs-select-wrap">
              <select v-model="form.backendLanguage" class="hs-input hs-select" :class="{ 'hs-select-empty': !form.backendLanguage }">
                <option value="" disabled>{{ t.backendLanguage }}</option>
                <option value="Node.js">{{ t.backendLanguageOptions.nodejs }}</option>
                <option value="Python">{{ t.backendLanguageOptions.python }}</option>
                <option value="Go">{{ t.backendLanguageOptions.go }}</option>
                <option value="Java">{{ t.backendLanguageOptions.java }}</option>
                <option value="PHP">{{ t.backendLanguageOptions.php }}</option>
                <option value="Ruby">{{ t.backendLanguageOptions.ruby }}</option>
                <option value="C# / .NET">{{ t.backendLanguageOptions.csharp }}</option>
                <option value="Other">{{ t.backendLanguageOptions.other }}</option>
              </select>
              <span class="hs-select-arrow">▾</span>
            </div>
          </div>
          <div class="hs-field">
            <div class="hs-select-wrap">
              <select v-model="form.deployment" class="hs-input hs-select" :class="{ 'hs-select-empty': !form.deployment }">
                <option value="" disabled>{{ t.deployment }}</option>
                <option value="Kakr Cloud (SaaS)">{{ t.deploymentOptions.saas }}</option>
                <option value="Self-Hosted (On-Prem)">{{ t.deploymentOptions.onPrem }}</option>
                <option value="Hybrid">{{ t.deploymentOptions.hybrid }}</option>
              </select>
              <span class="hs-select-arrow">▾</span>
            </div>
          </div>
        </div>

        <!-- Textarea -->
        <div class="hs-field hs-field--full">
          <textarea v-model="form.useCase" :placeholder="t.useCase" rows="3" class="hs-input hs-textarea"></textarea>
        </div>

        <!-- Row 6 -->
        <div class="hs-row">
          <div class="hs-field">
            <input v-model="form.leadName" type="text" :placeholder="t.leadName" class="hs-input" required />
          </div>
          <div class="hs-field">
            <input v-model="form.email" type="email" :placeholder="t.leadEmail" class="hs-input" required />
          </div>
        </div>

        <!-- Row 7 -->
        <div class="hs-row">
          <div class="hs-field">
            <input v-model="form.securityEmail" type="email" :placeholder="t.securityEmail" class="hs-input" />
          </div>
          <div class="hs-field hs-phone-field" ref="phoneFieldRef">
            <!-- Country trigger -->
            <button type="button" class="hs-country-code" @click="showCountryDropdown = !showCountryDropdown">
              <img :src="`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`" :alt="selectedCountry.code" class="hs-flag-img" />
              <span class="hs-dial">{{ selectedCountry.dial }}</span>
              <svg class="hs-caret" :class="{ 'hs-caret--open': showCountryDropdown }" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
            <input v-model="form.phone" type="tel" inputmode="tel" :placeholder="t.phone" class="hs-input hs-phone-input" />

            <!-- Dropdown -->
            <div v-if="showCountryDropdown" class="hs-country-dropdown">
              <div class="hs-country-search-wrap">
                <input v-model="countrySearch" type="text" :placeholder="t.searchCountry" class="hs-country-search" @click.stop />
              </div>
              <div class="hs-country-list">
                <button
                  v-for="c in filteredCountries"
                  :key="c.code"
                  type="button"
                  class="hs-country-option"
                  :class="{ 'hs-country-option--active': selectedCountry.code === c.code }"
                  @click="selectCountry(c)"
                >
                  <img :src="`https://flagcdn.com/w20/${c.code.toLowerCase()}.png`" :alt="c.code" class="hs-flag-img" />
                  <span class="hs-country-name">{{ c.name }}</span>
                  <span class="hs-country-dial">{{ c.dial }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <p v-if="errorMsg" class="hs-error">{{ errorMsg }}</p>

        <div class="hs-submit-row">
          <button type="submit" class="hs-submit-btn" :disabled="loading">
            <span v-if="loading" class="hs-spinner"></span>
            <span v-else>{{ t.submit }}</span>
          </button>
        </div>

      </form>
    </div>

    <!-- Success Modal -->
    <Teleport to="body">
      <Transition name="hs-fade">
        <div v-if="submitted" class="hs-success-overlay">
          <div class="hs-success-card">
            <div class="hs-success-icon">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="29" stroke="#10b981" stroke-width="2"/>
                <path d="M18 30L26 38L42 22" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>{{ t.successTitle }}</h3>
            <p>{{ t.successMessage }}</p>
            <button @click="submitted = false" class="hs-success-close">{{ t.done }}</button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t: $t_global } = useI18n()

// Local translations to ensure reliability (project pattern)
const translations = {
  en: {
    headingPart1: "We'd love to",
    headingHighlight: "hear from you!",
    headingPart2: "Please fill out the form and we'll get back to you as soon as possible.",
    companyName: "Company Name *",
    companyWebsite: "Company Website",
    companySize: "Company Size",
    companySizeOptions: {
      "1-10": "1-10 employees",
      "11-50": "11-50 employees",
      "51-200": "51-200 employees",
      "201-1000": "201-1000 employees",
      "1000+": "1000+ employees"
    },
    industry: "Industry",
    pilotGoal: "Primary Pilot Goal",
    pilotGoalOptions: {
      replaceSms: "Replace SMS-based 2FA",
      preventSimSwap: "Prevent SIM swap fraud",
      reducePhishing: "Reduce phishing & account takeover",
      secureAi: "Secure AI agents",
      cloudProvider: "Cloud Provider",
      addLitecoin: "Add Litecoin blockchain infrastructure",
      evaluateMweb: "Evaluate privacy-focused payment controls"
    },
    authMethod: "Current Authentication Method",
    authMethodOptions: {
      passwordsOnly: "Passwords Only",
      passwordsSms: "Passwords + SMS OTP",
      passwordsEmail: "Passwords + Email OTP",
      totp: "Authenticator App (TOTP)",
      passkeys: "Passkeys / WebAuthn",
      other: "Other"
    },
    otpVolume: "Estimated Monthly OTP Volume",
    verifications: "Estimated Monthly Verifications",
    apiCalls: "Estimated Monthly Blockchain API Calls",
    fraudLabel: "Have You Experienced Fraud in the Last 12 Months?",
    yes: "Yes",
    no: "No",
    backendLanguage: "Primary Backend Language",
    backendLanguageOptions: {
      nodejs: "Node.js",
      python: "Python",
      go: "Go",
      java: "Java",
      php: "PHP",
      ruby: "Ruby",
      csharp: "C# / .NET",
      other: "Other"
    },
    deployment: "Deployment Preference",
    deploymentOptions: {
      saas: "Kakr Cloud (SaaS)",
      onPrem: "Self-Hosted (On-Prem)",
      hybrid: "Hybrid"
    },
    useCase: "Use Case Description",
    leadName: "Technical Lead Name *",
    leadEmail: "Technical Lead Email *",
    securityEmail: "Security Contact Email",
    phone: "Phone Number",
    searchCountry: "Search country...",
    submit: "Submit",
    done: "Done",
    successTitle: "Thank you!",
    successMessage: "Your message has been received. We'll be in touch within 1 business day.",
    errorRequired: "Please fill out all required fields (*).",
    errorGeneric: "Something went wrong. Please try again.",
    errorFailed: "Submission failed. Please try again."
  },
  de: {
    headingPart1: "Wir würden uns freuen,",
    headingHighlight: "von Ihnen zu hören!",
    headingPart2: "Bitte füllen Sie das Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.",
    companyName: "Unternehmensname *",
    companyWebsite: "Unternehmenswebsite",
    companySize: "Unternehmensgröße",
    companySizeOptions: {
      "1-10": "1-10 Mitarbeiter",
      "11-50": "11-50 Mitarbeiter",
      "51-200": "51-200 Mitarbeiter",
      "201-1000": "201-1000 Mitarbeiter",
      "1000+": "1000+ Mitarbeiter"
    },
    industry: "Branche",
    pilotGoal: "Primäres Pilotziel",
    pilotGoalOptions: {
      replaceSms: "SMS-basiertes 2FA ersetzen",
      preventSimSwap: "SIM-Swap-Betrug verhindern",
      reducePhishing: "Phishing & Kontoübernahmen reduzieren",
      secureAi: "KI-Agenten sichern",
      cloudProvider: "Cloud-Anbieter",
      addLitecoin: "Litecoin-Blockchain-Infrastruktur hinzufügen",
      evaluateMweb: "Datenschutzorientierte Zahlungskontrollen evaluieren"
    },
    authMethod: "Aktuelle Authentifizierungsmethode",
    authMethodOptions: {
      passwordsOnly: "Nur Passwörter",
      passwordsSms: "Passwörter + SMS OTP",
      passwordsEmail: "Passwörter + E-Mail OTP",
      totp: "Authenticator-App (TOTP)",
      passkeys: "Passkeys / WebAuthn",
      other: "Andere"
    },
    otpVolume: "Geschätztes monatliches OTP-Volumen",
    verifications: "Geschätzte monatliche Verifizierungen",
    apiCalls: "Geschätzte monatliche Blockchain-API-Aufrufe",
    fraudLabel: "Haben Sie in den letzten 12 Monaten Betrug erlebt?",
    yes: "Ja",
    no: "Nein",
    backendLanguage: "Primäre Backend-Sprache",
    backendLanguageOptions: {
      nodejs: "Node.js",
      python: "Python",
      go: "Go",
      java: "Java",
      php: "PHP",
      ruby: "Ruby",
      csharp: "C# / .NET",
      other: "Andere"
    },
    deployment: "Bereitstellungspräferenz",
    deploymentOptions: {
      saas: "Kakr Cloud (SaaS)",
      onPrem: "Selbst gehostet (On-Prem)",
      hybrid: "Hybrid"
    },
    useCase: "Beschreibung des Anwendungsfalls",
    leadName: "Name des technischen Leiters *",
    leadEmail: "E-Mail des technischen Leiters *",
    securityEmail: "E-Mail Sicherheitskontakt",
    phone: "Telefonnummer",
    searchCountry: "Land suchen...",
    submit: "Absenden",
    done: "Fertig",
    successTitle: "Vielen Dank!",
    successMessage: "Ihre Nachricht ist eingegangen. Wir werden uns innerhalb eines Werktages bei Ihnen melden.",
    errorRequired: "Bitte füllen Sie alle erforderlichen Felder aus (*).",
    errorGeneric: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
    errorFailed: "Übermittlung fehlgeschlagen. Bitte versuchen Sie es erneut."
  },
  es: {
    headingPart1: "¡Nos encantaría",
    headingHighlight: "saber de usted!",
    headingPart2: "Por favor, complete el formulario y nos pondremos en contacto con usted lo antes posible.",
    companyName: "Nombre de la empresa *",
    companyWebsite: "Sitio web de la empresa",
    companySize: "Tamaño de la empresa",
    companySizeOptions: {
      "1-10": "1-10 empleados",
      "11-50": "11-50 empleados",
      "51-200": "51-200 empleados",
      "201-1000": "201-1000 empleados",
      "1000+": "1000+ empleados"
    },
    industry: "Industria",
    pilotGoal: "Objetivo principal del piloto",
    pilotGoalOptions: {
      replaceSms: "Reemplazar 2FA basado en SMS",
      preventSimSwap: "Prevenir fraude de SIM swap",
      reducePhishing: "Reducir phishing y robo de cuentas",
      secureAi: "Asegurar agentes de IA",
      cloudProvider: "Proveedor de la nube",
      addLitecoin: "Añadir infraestructura de blockchain Litecoin",
      evaluateMweb: "Evaluar controles de pago centrados en la privacidad"
    },
    authMethod: "Método de autenticación actual",
    authMethodOptions: {
      passwordsOnly: "Solo contraseñas",
      passwordsSms: "Contraseñas + SMS OTP",
      passwordsEmail: "Contraseñas + Email OTP",
      totp: "App de autenticación (TOTP)",
      passkeys: "Passkeys / WebAuthn",
      other: "Otro"
    },
    otpVolume: "Volumen mensual estimado de OTP",
    verifications: "Verificaciones mensuales estimadas",
    apiCalls: "Llamadas mensuales estimadas a la API de blockchain",
    fraudLabel: "¿Ha experimentado fraude en los últimos 12 meses?",
    yes: "Sí",
    no: "No",
    backendLanguage: "Lenguaje de backend principal",
    backendLanguageOptions: {
      nodejs: "Node.js",
      python: "Python",
      go: "Go",
      java: "Java",
      php: "PHP",
      ruby: "Ruby",
      csharp: "C# / .NET",
      other: "Otro"
    },
    deployment: "Preferencia de despliegue",
    deploymentOptions: {
      saas: "Kakr Cloud (SaaS)",
      onPrem: "Autohospedado (On-Prem)",
      hybrid: "Híbrido"
    },
    useCase: "Descripción del caso de uso",
    leadName: "Nombre del responsable técnico *",
    leadEmail: "Email del responsable técnico *",
    securityEmail: "Email de contacto de seguridad",
    phone: "Número de teléfono",
    searchCountry: "Buscar país...",
    submit: "Enviar",
    done: "Hecho",
    successTitle: "¡Gracias!",
    successMessage: "Su mensaje ha sido recibido. Nos pondremos en contacto en 1 día hábil.",
    errorRequired: "Por favor, complete todos los campos obligatorios (*).",
    errorGeneric: "Algo salió mal. Por favor, inténtelo de nuevo.",
    errorFailed: "Error en el envío. Por favor, inténtelo de nuevo."
  },
  ja: {
    headingPart1: "ぜひ",
    headingHighlight: "お問い合わせください！",
    headingPart2: "フォームにご記入いただければ、できるだけ早くご連絡いたします。",
    companyName: "会社名 *",
    companyWebsite: "会社ウェブサイト",
    companySize: "従業員数",
    companySizeOptions: {
      "1-10": "1-10名",
      "11-50": "11-50名",
      "51-200": "51-200名",
      "201-1000": "201-1000名",
      "1000+": "1000名以上"
    },
    industry: "業界",
    pilotGoal: "主なパイロット目標",
    pilotGoalOptions: {
      replaceSms: "SMSベースの2FAの置き換え",
      preventSimSwap: "SIMスワップ詐欺の防止",
      reducePhishing: "フィッシングとアカウント乗っ取りの削減",
      secureAi: "AIエージェントの保護",
      cloudProvider: "クラウドプロバイダー",
      addLitecoin: "Litecoinブロックチェーンインフラの追加",
      evaluateMweb: "プライバシー重視の決済管理を評価"
    },
    authMethod: "現在の認証方法",
    authMethodOptions: {
      passwordsOnly: "パスワードのみ",
      passwordsSms: "パスワード + SMS OTP",
      passwordsEmail: "パスワード + メール OTP",
      totp: "認証アプリ (TOTP)",
      passkeys: "パスキー / WebAuthn",
      other: "その他"
    },
    otpVolume: "推定月間OTPボリューム",
    verifications: "推定月間検証数",
    apiCalls: "推定月間ブロックチェーンAPI呼び出し数",
    fraudLabel: "過去12ヶ月間に詐欺を経験しましたか？",
    yes: "はい",
    no: "いいえ",
    backendLanguage: "主なバックエンド言語",
    backendLanguageOptions: {
      nodejs: "Node.js",
      python: "Python",
      go: "Go",
      java: "Java",
      php: "PHP",
      ruby: "Ruby",
      csharp: "C# / .NET",
      other: "その他"
    },
    deployment: "展開の好み",
    deploymentOptions: {
      saas: "Kakr Cloud (SaaS)",
      onPrem: "セルフホスト (オンプレミス)",
      hybrid: "ハイブリッド"
    },
    useCase: "ユースケースの説明",
    leadName: "技術責任者名 *",
    leadEmail: "技術責任者メールアドレス *",
    securityEmail: "セキュリティ担当者メールアドレス",
    phone: "電話番号",
    searchCountry: "国を検索...",
    submit: "送信",
    done: "完了",
    successTitle: "ありがとうございます！",
    successMessage: "メッセージを受け取りました。1営業日以内にご連絡いたします。",
    errorRequired: "必須項目 (*) をすべて入力してください。",
    errorGeneric: "問題が発生しました。もう一度お試しください。",
    errorFailed: "送信に失敗しました。もう一度お試しください。"
  },
  ar: {
    headingPart1: "نود أن",
    headingHighlight: "نسمع منك!",
    headingPart2: "يرجى ملء النموذج وسنعود إليك في أقرب وقت ممكن.",
    companyName: "اسم الشركة *",
    companyWebsite: "موقع الشركة الإلكتروني",
    companySize: "حجم الشركة",
    companySizeOptions: {
      "1-10": "1-10 موظفين",
      "11-50": "11-50 موظفاً",
      "51-200": "51-200 موظف",
      "201-1000": "201-1000 موظف",
      "1000+": "أكثر من 1000 موظف"
    },
    industry: "الصناعة",
    pilotGoal: "الهدف الأساسي للتجربة",
    pilotGoalOptions: {
      replaceSms: "استبدال المصادقة الثنائية القائمة على SMS",
      preventSimSwap: "منع احتيال تبديل شريحة SIM",
      reducePhishing: "تقليل التصيد وسرقة الحسابات",
      secureAi: "تأمين وكلاء الذكاء الاصطناعي",
      cloudProvider: "مزود سحابة",
      addLitecoin: "إضافة بنية تحتية لبلوكتشين Litecoin",
      evaluateMweb: "تقييم ضوابط الدفع التي تركز على الخصوصية"
    },
    authMethod: "طريقة المصادقة الحالية",
    authMethodOptions: {
      passwordsOnly: "كلمات مرور فقط",
      passwordsSms: "كلمات مرور + OTP عبر SMS",
      passwordsEmail: "كلمات مرور + OTP عبر البريد الإلكتروني",
      totp: "تطبيق مصادقة (TOTP)",
      passkeys: "مفاتيح المرور / WebAuthn",
      other: "أخرى"
    },
    otpVolume: "حجم OTP الشهري المقدر",
    verifications: "عدد عمليات التحقق الشهرية المقدرة",
    apiCalls: "عدد طلبات API البلوكتشين الشهرية المقدرة",
    fraudLabel: "هل تعرضت لاحتيال في آخر 12 شهرًا؟",
    yes: "نعم",
    no: "لا",
    backendLanguage: "لغة البرمجة الخلفية الأساسية",
    backendLanguageOptions: {
      nodejs: "Node.js",
      python: "Python",
      go: "Go",
      java: "Java",
      php: "PHP",
      ruby: "Ruby",
      csharp: "C# / .NET",
      other: "أخرى"
    },
    deployment: "تفضيل النشر",
    deploymentOptions: {
      saas: "سحابة Kakr (SaaS)",
      onPrem: "استضافة ذاتية (On-Prem)",
      hybrid: "هجين"
    },
    useCase: "وصف حالة الاستخدام",
    leadName: "اسم المسؤول التقني *",
    leadEmail: "البريد الإلكتروني للمسؤول التقني *",
    securityEmail: "البريد الإلكتروني لجهة اتصال الأمان",
    phone: "رقم الهاتف",
    searchCountry: "ابحث عن دولة...",
    submit: "إرسال",
    done: "تم",
    successTitle: "شكراً لك!",
    successMessage: "لقد استلمنا رسالتك. سنتواصل معك خلال يوم عمل واحد.",
    errorRequired: "يرجى ملء جميع الحقول المطلوبة (*).",
    errorGeneric: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    errorFailed: "فشل الإرسال. يرجى المحاولة مرة أخرى."
  }
}

const t = computed(() => translations[locale.value] || translations.en)

const loading = ref(false)
const submitted = ref(false)
const errorMsg = ref('')
const showCountryDropdown = ref(false)
const countrySearch = ref('')
const phoneFieldRef = ref<HTMLElement | null>(null)

const countries = [
  { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦' },
  { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧' },
  { code: 'DE', name: 'Germany', dial: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dial: '+33', flag: '🇫🇷' },
  { code: 'ES', name: 'Spain', dial: '+34', flag: '🇪🇸' },
  { code: 'IT', name: 'Italy', dial: '+39', flag: '🇮🇹' },
  { code: 'NL', name: 'Netherlands', dial: '+31', flag: '🇳🇱' },
  { code: 'SE', name: 'Sweden', dial: '+46', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', dial: '+47', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', dial: '+45', flag: '🇩🇰' },
  { code: 'FI', name: 'Finland', dial: '+358', flag: '🇫🇮' },
  { code: 'CH', name: 'Switzerland', dial: '+41', flag: '🇨🇭' },
  { code: 'AT', name: 'Austria', dial: '+43', flag: '🇦🇹' },
  { code: 'BE', name: 'Belgium', dial: '+32', flag: '🇧🇪' },
  { code: 'PT', name: 'Portugal', dial: '+351', flag: '🇵🇹' },
  { code: 'PL', name: 'Poland', dial: '+48', flag: '🇵🇱' },
  { code: 'RU', name: 'Russia', dial: '+7', flag: '🇷🇺' },
  { code: 'UA', name: 'Ukraine', dial: '+380', flag: '🇺🇦' },
  { code: 'TR', name: 'Turkey', dial: '+90', flag: '🇹🇷' },
  { code: 'GR', name: 'Greece', dial: '+30', flag: '🇬🇷' },
  { code: 'HU', name: 'Hungary', dial: '+36', flag: '🇭🇺' },
  { code: 'CZ', name: 'Czech Republic', dial: '+420', flag: '🇨🇿' },
  { code: 'RO', name: 'Romania', dial: '+40', flag: '🇷🇴' },
  { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
  { code: 'CN', name: 'China', dial: '+86', flag: '🇨🇳' },
  { code: 'JP', name: 'Japan', dial: '+81', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', dial: '+82', flag: '🇰🇷' },
  { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬' },
  { code: 'MY', name: 'Malaysia', dial: '+60', flag: '🇲🇾' },
  { code: 'ID', name: 'Indonesia', dial: '+62', flag: '🇮🇩' },
  { code: 'PH', name: 'Philippines', dial: '+63', flag: '🇵🇭' },
  { code: 'TH', name: 'Thailand', dial: '+66', flag: '🇹🇭' },
  { code: 'VN', name: 'Vietnam', dial: '+84', flag: '🇻🇳' },
  { code: 'BD', name: 'Bangladesh', dial: '+880', flag: '🇧🇩' },
  { code: 'PK', name: 'Pakistan', dial: '+92', flag: '🇵🇰' },
  { code: 'LK', name: 'Sri Lanka', dial: '+94', flag: '🇱🇰' },
  { code: 'AE', name: 'UAE', dial: '+971', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', dial: '+966', flag: '🇸🇦' },
  { code: 'QA', name: 'Qatar', dial: '+974', flag: '🇶🇦' },
  { code: 'KW', name: 'Kuwait', dial: '+965', flag: '🇰🇼' },
  { code: 'BH', name: 'Bahrain', dial: '+973', flag: '🇧🇭' },
  { code: 'OM', name: 'Oman', dial: '+968', flag: '🇴🇲' },
  { code: 'IL', name: 'Israel', dial: '+972', flag: '🇮🇱' },
  { code: 'EG', name: 'Egypt', dial: '+20', flag: '🇪🇬' },
  { code: 'ZA', name: 'South Africa', dial: '+27', flag: '🇿🇦' },
  { code: 'NG', name: 'Nigeria', dial: '+234', flag: '🇳🇬' },
  { code: 'KE', name: 'Kenya', dial: '+254', flag: '🇰🇪' },
  { code: 'GH', name: 'Ghana', dial: '+233', flag: '🇬🇭' },
  { code: 'MA', name: 'Morocco', dial: '+212', flag: '🇲🇦' },
  { code: 'DZ', name: 'Algeria', dial: '+213', flag: '🇩🇿' },
  { code: 'TN', name: 'Tunisia', dial: '+216', flag: '🇹🇳' },
  { code: 'BR', name: 'Brazil', dial: '+55', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', dial: '+52', flag: '🇲🇽' },
  { code: 'AR', name: 'Argentina', dial: '+54', flag: '🇦🇷' },
  { code: 'CO', name: 'Colombia', dial: '+57', flag: '🇨🇴' },
  { code: 'CL', name: 'Chile', dial: '+56', flag: '🇨🇱' },
  { code: 'PE', name: 'Peru', dial: '+51', flag: '🇵🇪' },
  { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
  { code: 'NZ', name: 'New Zealand', dial: '+64', flag: '🇳🇿' },
]

const selectedCountry = ref(countries[0]) // default US

const filteredCountries = computed(() => {
  const q = countrySearch.value.toLowerCase()
  if (!q) return countries
  return countries.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.dial.includes(q) ||
    c.code.toLowerCase().includes(q)
  )
})

function selectCountry(c: typeof countries[0]) {
  selectedCountry.value = c
  form.countryCode = c.dial
  showCountryDropdown.value = false
  countrySearch.value = ''
}

// Close dropdown on outside click
function onClickOutside(e: MouseEvent) {
  if (phoneFieldRef.value && !phoneFieldRef.value.contains(e.target as Node)) {
    showCountryDropdown.value = false
  }
}

function getPhoneDigits(phone: string) {
  return phone.replace(/\D/g, '')
}

function isValidOptionalPhone(phone: string) {
  const trimmedPhone = phone.trim()

  if (!trimmedPhone) return true

  const digits = getPhoneDigits(trimmedPhone)

  return digits.length >= 7 && digits.length <= 15 && !/^(\d)\1+$/.test(digits)
}

// Auto-detect country via IP
async function detectCountry() {
  try {
    const res = await fetch('https://ipapi.co/json/')
    const data = await res.json()
    const match = countries.find(c => c.code === data.country_code)
    if (match) selectCountry(match)
  } catch {
    // silently fall back to US
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  detectCountry()
})
onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})

const form = reactive({
  name: '',
  website: '',
  companySize: '',
  industry: '',
  pilotGoal: '',
  authMethod: '',
  otpVolume: '',
  verifications: '',
  apiCalls: '',
  fraud: '',
  backendLanguage: '',
  deployment: '',
  useCase: '',
  leadName: '',
  email: '',
  securityEmail: '',
  countryCode: '+1',
  phone: ''
})

async function submitForm() {
  errorMsg.value = ''
  if (!form.name || !form.leadName || !form.email) {
    errorMsg.value = t.value.errorRequired
    return
  }
  if (!isValidOptionalPhone(form.phone)) {
    errorMsg.value = 'Please enter a valid phone number.'
    return
  }

  loading.value = true
  try {
    // Split name into first and last
    const nameParts = form.leadName.trim().split(' ')
    const firstName = nameParts[0] || 'N/A'
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '.'

    // Aggregate custom fields into the message variable for HubSpot so it doesn't fail validation
    const compiledMessage = `
[USE CASE]: ${form.useCase || 'N/A'}

--- PILOT & BUSINESS DETAILS ---
Website: ${form.website || 'N/A'}
Company Size: ${form.companySize || 'N/A'}
Industry: ${form.industry || 'N/A'}

--- TECHNICAL SPECS ---
Primary Pilot Goal: ${form.pilotGoal || 'N/A'}
Current Auth Method: ${form.authMethod || 'N/A'}
Backend Language: ${form.backendLanguage || 'N/A'}
Deployment Pref: ${form.deployment || 'N/A'}
Fraud in last 12 mos: ${form.fraud || 'N/A'}

--- METRICS ---
Monthly OTP Volume: ${form.otpVolume || 'N/A'}
Monthly Verifications: ${form.verifications || 'N/A'}
Monthly API Calls: ${form.apiCalls || 'N/A'}

--- CONTACTS ---
Security Contact Email: ${form.securityEmail || 'N/A'}
    `.trim()

    const fields = [
      { name: 'firstname', value: firstName },
      { name: 'lastname', value: lastName },
      { name: 'email', value: form.email },
      { name: '0-2/name', value: form.name },
      { name: '0-2/your_role', value: 'Technical Lead' },
      { name: 'reason_to_contact_us', value: 'enterprise' },
      { name: 'message', value: compiledMessage },
    ]

    if (form.phone.trim()) {
      fields.splice(3, 0, { name: 'phone', value: `${form.countryCode.replace('-CA', '')} ${form.phone.trim()}` })
    }

    const payload = {
      fields,
      context: {
        pageUri: typeof window !== 'undefined' ? window.location.href : '',
        pageName: typeof document !== 'undefined' ? document.title : '',
      },
    }

    const res = await $fetch(
      'https://api.hsforms.com/submissions/v3/integration/submit/245270532/addaed80-8534-4ae5-9642-4ce1cf2b98fc',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      }
    ) as any

    if (res.inlineMessage || res.redirectUri || res) {
      // Also trigger the actual email notification to contact@kakr.ai — the
      // HubSpot submission above only records the lead in the CRM, it does
      // not send mail. Best-effort: don't block the success screen on this.
      try {
        await $fetch('/api/contact', {
          method: 'POST',
          body: {
            firstname: firstName,
            lastname: lastName,
            email: form.email,
            phone: form.phone.trim() ? `${form.countryCode.replace('-CA', '')} ${form.phone.trim()}` : 'Not provided',
            company: form.name,
            role: 'Technical Lead',
            reason: 'Enterprise Evaluation',
            message: compiledMessage,
          },
        })
      } catch (emailErr) {
        console.error('Contact notification email failed:', emailErr)
      }

      submitted.value = true
      Object.keys(form).forEach((k) => ((form as any)[k] = ''))
      form.countryCode = selectedCountry.value.dial
    } else {
      errorMsg.value = t.value.errorGeneric
    }
  } catch (e: any) {
    errorMsg.value = e?.message || t.value.errorFailed
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.hs-form-wrapper {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0;
  font-family: 'Inter', sans-serif;
}
.hs-form-heading { text-align: center; margin-bottom: 1.75rem; padding: 0 0.5rem; }
.hs-form-heading h2 { font-size: clamp(1.35rem, 4vw, 1.9rem); font-weight: 800; color: #fff; line-height: 1.3; letter-spacing: -0.01em; }
.hs-highlight { background: linear-gradient(90deg, #34d399, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

.hs-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 20px;
  padding: 2rem 2.5rem;
  backdrop-filter: blur(20px);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.6);
}
.hs-card form {
  display: grid;
  gap: 1rem;
}
@media (max-width: 600px) {
  .hs-form-heading {
    margin-bottom: 1.5rem;
    padding: 0 0.85rem;
  }

  .hs-form-heading h2 {
    font-size: clamp(1.28rem, 6.2vw, 1.6rem);
    line-height: 1.34;
  }

  .hs-card {
    padding: 1rem 0.85rem 1.25rem;
    border-radius: 14px;
    border-left: none;
    border-right: none;
    border-radius: 0;
    margin: 0 -1rem;
    width: calc(100% + 2rem);
  }
}

.hs-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
@media (max-width: 640px) { .hs-row { grid-template-columns: 1fr; gap: 0.95rem; margin-bottom: 1.1rem; } }
.hs-card form > .hs-row,
.hs-card form > .hs-field--full {
  margin: 0;
}
@media (max-width: 640px) {
  .hs-card form {
    gap: 1rem;
  }

  .hs-card form > .hs-row,
  .hs-card form > .hs-field--full {
    margin: 0;
  }
}

.hs-field { display: flex; flex-direction: column; }
.hs-field--full { margin: 1.35rem 0 1.2rem; }
@media (max-width: 640px) { .hs-field--full { margin: 1.45rem 0 1.25rem; } }

.hs-label { font-size: 1rem; font-weight: 800; color: #fff; margin: 0 0 0.85rem; letter-spacing: 0.01em; }
@media (max-width: 640px) { .hs-label { font-size: 0.98rem; margin-bottom: 0.85rem; } }

.hs-input {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  color: #fff;
  /* 16px minimum — anything smaller triggers iOS Safari's auto-zoom on focus. */
  font-size: 1rem;
  padding: 0.7rem 1rem;
  outline: none;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  font-family: inherit;
  box-sizing: border-box;
  font-weight: 500;
}
@media (max-width: 640px) {
  .hs-input {
    font-size: 1rem;
    padding: 0.78rem 0.9rem;
    border-radius: 8px;
  }
}
.hs-input::placeholder { color: rgba(255,255,255,0.4); font-weight: 400; }
.hs-input:focus {
  border-color: rgba(6,182,212,0.5);
  background: rgba(255,255,255,0.07);
  box-shadow: 0 0 0 3px rgba(6,182,212,0.1);
}
.hs-textarea { resize: vertical; min-height: 100px; }

.hs-select-wrap { position: relative; }
.hs-select { appearance: none; -webkit-appearance: none; cursor: pointer; padding-right: 2.2rem; }
.hs-select-empty { color: rgba(255,255,255,0.4); font-weight: 400; }
.hs-select option { background: #0f172a; color: #fff; font-weight: 500; }
.hs-select-arrow { position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); font-size: 0.7rem; color: rgba(255,255,255,0.4); pointer-events: none; }

/* Radio Buttons */
.hs-radio-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 1.05rem 1.5rem;
}
@media (max-width: 640px) { .hs-radio-grid { grid-template-columns: 1fr; gap: 0.85rem; } }

.hs-radio-flex { display: flex; gap: 2rem; align-items: center; }

.hs-radio-lbl {
  display: flex; align-items: center; gap: 0.75rem;
  font-size: 0.92rem; color: rgba(255,255,255,0.75); cursor: pointer;
  user-select: none; transition: color 0.2s;
  line-height: 1.35;
}
@media (max-width: 640px) { .hs-radio-lbl { font-size: 0.9rem; } }
.hs-radio-lbl:hover { color: #fff; }
.hs-radio-lbl input[type="radio"] { display: none; }
.hs-radio-custom {
  width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.3);
  position: relative; flex-shrink: 0; transition: border-color 0.2s, background 0.2s;
}
.hs-radio-lbl input[type="radio"]:checked + .hs-radio-custom {
  border-color: #06b6d4; background: transparent;
}
.hs-radio-lbl input[type="radio"]:checked + .hs-radio-custom::after {
  content: ''; position: absolute; inset: 3px; border-radius: 50%;
  background: #34d399; box-shadow: 0 0 6px #06b6d4;
}
.hs-radio-lbl input[type="radio"]:checked ~ span { color: #fff; font-weight: 600; }

/* Phone Custom Field */
.hs-phone-field { position: relative; }
.hs-country-code {
  position: absolute; left: 1px; top: 1px; bottom: 1px;
  background: rgba(255,255,255,0.04);
  border-right: 1px solid rgba(255,255,255,0.1);
  border-radius: 9px 0 0 9px;
  padding: 0 0.5rem 0 0.65rem;
  display: flex; align-items: center; gap: 0.35rem;
  cursor: pointer; z-index: 2;
  transition: background 0.15s;
  min-width: 72px;
}
.hs-country-code:hover { background: rgba(255,255,255,0.08); }
.hs-flag-img { width: 18px; height: 13px; object-fit: cover; border-radius: 2px; flex-shrink: 0; display: block; }
.hs-dial { font-size: 0.75rem; font-weight: 600; color: rgba(255,255,255,0.85); white-space: nowrap; }
.hs-caret { color: rgba(255,255,255,0.4); transition: transform 0.2s; flex-shrink: 0; }
.hs-caret--open { transform: rotate(180deg); }
.hs-phone-input { padding-left: 82px !important; }
@media (max-width: 640px) {
  .hs-country-code { min-width: 68px; padding: 0 0.4rem 0 0.55rem; }
  .hs-phone-input { padding-left: 76px !important; }
}

/* Country dropdown */
.hs-country-dropdown {
  position: absolute; bottom: calc(100% + 6px); top: auto; left: 0; right: 0;
  background: #0f172a; border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; z-index: 100;
  box-shadow: 0 -16px 48px rgba(0,0,0,0.7);
  overflow: hidden;
}
.hs-country-search-wrap { padding: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.07); }
.hs-country-search {
  width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px; color: #fff; font-size: 0.75rem; padding: 0.4rem 0.65rem;
  outline: none; font-family: inherit;
}
.hs-country-search::placeholder { color: rgba(255,255,255,0.35); }
.hs-country-list { max-height: 200px; overflow-y: auto; }
.hs-country-list::-webkit-scrollbar { width: 4px; }
.hs-country-list::-webkit-scrollbar-track { background: transparent; }
.hs-country-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
.hs-country-option {
  width: 100%; display: flex; align-items: center; gap: 0.5rem;
  padding: 0.35rem 0.75rem; background: none; border: none; cursor: pointer;
  font-family: inherit; text-align: left; transition: background 0.15s;
}
.hs-country-option:hover { background: rgba(255,255,255,0.05); }
.hs-country-option--active { background: rgba(6,182,212,0.08); }
.hs-country-name { flex: 1; font-size: 0.72rem; color: rgba(255,255,255,0.8); }
.hs-country-dial { font-size: 0.68rem; color: rgba(255,255,255,0.4); font-weight: 600; }

.hs-error { color: #f87171; font-size: 0.8rem; margin: 0.5rem 0 0; text-align: center; }

.hs-submit-row { display: flex; justify-content: center; margin-top: 2.5rem; }
.hs-submit-btn {
  padding: 1rem 5rem; border-radius: 999px; font-size: 1.05rem; font-weight: 700; font-family: inherit;
  border: 1px solid rgba(52, 211, 153, 0.5); cursor: pointer;
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%); color: #000000; letter-spacing: 0.02em;
  transition: all 0.2s ease;
  box-shadow: 0 0 16px rgba(52, 211, 153, 0.3);
  display: flex; align-items: center; justify-content: center; min-width: 220px;
}
.hs-submit-btn:hover:not(:disabled) { background: linear-gradient(135deg, #10b981 0%, #059669 100%); box-shadow: 0 0 28px rgba(52, 211, 153, 0.5); transform: translateY(-1px); }
.hs-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.hs-spinner { width: 18px; height: 18px; border-radius: 50%; border: 2.5px solid rgba(0,0,0,0.2); border-top-color: #000; animation: hs-spin 0.7s linear infinite; display: inline-block; }
@keyframes hs-spin { to { transform: rotate(360deg); } }

.hs-success-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.hs-success-card { background: #0a0a0a; border: 1px solid rgba(16,185,129,0.3); border-radius: 20px; padding: 3rem 2.5rem; text-align: center; max-width: 400px; width: 90%; box-shadow: 0 20px 60px rgba(0,0,0,0.8); }
.hs-success-icon { width: 60px; height: 60px; margin: 0 auto 1.25rem; }
.hs-success-icon svg { width: 100%; height: 100%; }
.hs-success-card h3 { font-size: 1.6rem; font-weight: 700; color: #fff; margin: 0 0 0.75rem; }
.hs-success-card p { font-size: 0.95rem; color: rgba(255,255,255,0.7); margin: 0 0 1.5rem; line-height: 1.5;}
.hs-success-close { padding: 0.75rem 2.5rem; border-radius: 999px; background: linear-gradient(90deg, #34d399, #06b6d4); color: #000; font-weight: 700; border: none; cursor: pointer; font-size: 0.95rem;}

.hs-fade-enter-active, .hs-fade-leave-active { transition: opacity 0.3s; }
.hs-fade-enter-from, .hs-fade-leave-to { opacity: 0; }
</style>
