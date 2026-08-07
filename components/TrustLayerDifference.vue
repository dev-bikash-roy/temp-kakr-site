<template>
  <section class="relative section-py overflow-hidden" style="background: radial-gradient(ellipse at 50% 50%, #0a1628 0%, #050d1a 60%, #020810 100%);">
    <!-- bg texture -->
    <div class="absolute inset-0 pointer-events-none" style="background-image: url('/hero-bg.svg'); background-size: cover; opacity: 0.04;"></div>
    <!-- cyan neural glow left -->
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none" style="background: radial-gradient(ellipse, rgba(6,182,212,0.22) 0%, transparent 65%); filter: blur(50px);"></div>
    <!-- cyan neural glow right -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none" style="background: radial-gradient(ellipse, rgba(6,182,212,0.18) 0%, transparent 65%); filter: blur(50px);"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Headline -->
      <div class="text-center mb-14" data-aos="fade-up">
        <p class="text-xs font-bold tracking-widest uppercase mb-4" style="color:#22d3ee;">{{ content.eyebrow }}</p>
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight" v-html="content.headline"></h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">{{ content.subheadline }}</p>
      </div>

      <!-- Two-card comparison -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12" data-aos="fade-up" data-aos-delay="100">

        <!-- PTERI card -->
        <div class="relative rounded-2xl p-8" style="background: rgba(6,182,212,0.06); border: 1.5px solid rgba(6,182,212,0.45); box-shadow: 0 0 32px rgba(6,182,212,0.1), inset 0 1px 0 rgba(6,182,212,0.15);">
          <!-- top glow line -->
          <div class="absolute top-0 left-8 right-8 h-px" style="background: linear-gradient(90deg, transparent, rgba(6,182,212,0.8), transparent);"></div>

          <div class="flex items-center gap-3 mb-6">
            <h3 class="text-xl font-bold text-white">PTERI</h3>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full" style="background: rgba(34,197,94,0.15); color: #4ade80; border: 1px solid rgba(74,222,128,0.35);">{{ content.recommended }}</span>
          </div>

          <ul class="space-y-3">
            <li v-for="item in content.pteriPoints" :key="item" class="flex items-start gap-3">
              <svg class="w-4 h-4 mt-0.5 flex-shrink-0" style="color:#22d3ee;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-slate-200 text-sm leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Legacy card -->
        <div class="rounded-2xl p-8" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 24px rgba(0,0,0,0.3);">
          <div class="flex items-center gap-3 mb-6">
            <h3 class="text-xl font-bold text-slate-300">{{ content.legacyTitle }}</h3>
          </div>

          <ul class="space-y-3">
            <li v-for="item in content.legacyPoints" :key="item" class="flex items-start gap-3">
              <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
              <span class="text-slate-400 text-sm leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom caption -->
      <p class="text-center text-slate-400 text-base max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
        {{ content.caption }}
      </p>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const content = computed(() => {
  const t = {
    en: {
      eyebrow: 'BEYOND LOGIN SECURITY',
      headline: 'Authentication Verifies the Login.<br />PTERI Verifies the Action.',
      subheadline: 'Security cannot end when a session begins. PTERI can verify authority again when a person or agent attempts a sensitive operation.',
      recommended: 'With PTERI',
      legacyTitle: 'Traditional Security',
      caption: 'PTERI works alongside existing identity and access controls to add passwordless verification and action-level authorization.',
      pteriPoints: ['Verifies access and sensitive actions', 'Uses passwordless cryptographic verification', 'Agents receive distinct, scoped authority', 'Authority can be action-specific and time-bound', 'Evidence connects identity, authority, and action'],
      legacyPoints: ['Verifies access at login', 'Relies on reusable credentials', 'Agents inherit human or service credentials', 'Permissions remain active throughout a session', 'Logs record activity'],
    },
    de: {
      eyebrow: 'MEHR ALS LOGIN-SICHERHEIT',
      headline: 'Authentifizierung überprüft den Login.<br />PTERI überprüft die Aktion.',
      subheadline: 'Sicherheit darf nicht enden, sobald eine Sitzung beginnt. PTERI kann die Autorität erneut überprüfen, wenn eine Person oder ein Agent einen sensiblen Vorgang versucht.',
      recommended: 'Mit PTERI',
      legacyTitle: 'Traditionelle Sicherheit',
      caption: 'PTERI arbeitet neben bestehenden Identitäts- und Zugriffskontrollen, um passwortlose Verifizierung und aktionsbasierte Autorisierung hinzuzufügen.',
      pteriPoints: ['Überprüft Zugriff und sensible Aktionen', 'Verwendet passwortlose kryptografische Verifizierung', 'Agenten erhalten eine eigene, begrenzte Autorität', 'Autorität kann aktionsspezifisch und zeitlich begrenzt sein', 'Nachweise verknüpfen Identität, Autorität und Aktion'],
      legacyPoints: ['Überprüft Zugriff nur beim Login', 'Verlässt sich auf wiederverwendbare Anmeldedaten', 'Agenten erben menschliche oder Dienst-Anmeldedaten', 'Berechtigungen bleiben während der gesamten Sitzung aktiv', 'Protokolle erfassen nur Aktivität'],
    },
    es: {
      eyebrow: 'MÁS ALLÁ DE LA SEGURIDAD DE INICIO DE SESIÓN',
      headline: 'La Autenticación Verifica el Inicio de Sesión.<br />PTERI Verifica la Acción.',
      subheadline: 'La seguridad no puede terminar cuando comienza una sesión. PTERI puede verificar la autoridad nuevamente cuando una persona o agente intenta una operación sensible.',
      recommended: 'Con PTERI',
      legacyTitle: 'Seguridad Tradicional',
      caption: 'PTERI trabaja junto a los controles de identidad y acceso existentes para agregar verificación sin contraseña y autorización a nivel de acción.',
      pteriPoints: ['Verifica el acceso y las acciones sensibles', 'Usa verificación criptográfica sin contraseña', 'Los agentes reciben autoridad distinta y delimitada', 'La autoridad puede ser específica de la acción y limitada en el tiempo', 'La evidencia conecta identidad, autoridad y acción'],
      legacyPoints: ['Verifica el acceso solo al iniciar sesión', 'Depende de credenciales reutilizables', 'Los agentes heredan credenciales humanas o de servicio', 'Los permisos permanecen activos durante toda la sesión', 'Los registros solo capturan actividad'],
    },
    ja: {
      eyebrow: 'ログインセキュリティを超えて',
      headline: '認証はログインを検証します。<br />PTERIは行動を検証します。',
      subheadline: 'セキュリティはセッション開始で終わってはいけません。PTERIは、人またはエージェントが機密性の高い操作を試みる際に、再度権限を検証できます。',
      recommended: 'PTERIあり',
      legacyTitle: '従来のセキュリティ',
      caption: 'PTERIは既存のIDおよびアクセス制御と連携し、パスワードレス検証とアクションレベルの認可を追加します。',
      pteriPoints: ['アクセスと機密操作の両方を検証', 'パスワードレスの暗号検証を使用', 'エージェントは明確に限定された権限を取得', '権限はアクションごと・期限付きで設定可能', '証拠がアイデンティティ・権限・行動を結び付ける'],
      legacyPoints: ['ログイン時のみアクセスを検証', '再利用可能な認証情報に依存', 'エージェントは人間やサービスの認証情報を継承', 'セッション中は権限が有効なまま', 'ログは行動のみを記録'],
    },
    ar: {
      eyebrow: 'ما وراء أمان تسجيل الدخول',
      headline: 'المصادقة تتحقق من تسجيل الدخول.<br />PTERI يتحقق من الإجراء.',
      subheadline: 'لا يمكن أن ينتهي الأمان عند بدء الجلسة. يمكن لـ PTERI التحقق من السلطة مرة أخرى عندما يحاول شخص أو وكيل تنفيذ عملية حساسة.',
      recommended: 'مع PTERI',
      legacyTitle: 'الأمان التقليدي',
      caption: 'يعمل PTERI جنبًا إلى جنب مع ضوابط الهوية والوصول الحالية لإضافة التحقق بدون كلمة مرور والتفويض على مستوى الإجراء.',
      pteriPoints: ['يتحقق من الوصول والإجراءات الحساسة', 'يستخدم تحققًا تشفيريًا بدون كلمة مرور', 'يحصل الوكلاء على سلطة محددة ومنفصلة', 'يمكن أن تكون السلطة خاصة بإجراء معين ومحدودة زمنيًا', 'الأدلة تربط الهوية والسلطة والإجراء'],
      legacyPoints: ['يتحقق من الوصول عند تسجيل الدخول فقط', 'يعتمد على بيانات اعتماد قابلة لإعادة الاستخدام', 'يرث الوكلاء بيانات اعتماد بشرية أو خدمية', 'تظل الأذونات نشطة طوال الجلسة', 'تسجل السجلات النشاط فقط'],
    },
  }
  return t[locale.value] || t.en
})
</script>
