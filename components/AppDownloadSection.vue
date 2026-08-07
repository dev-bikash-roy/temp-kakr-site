<template>
  <section class="relative section-py overflow-hidden bg-black border-t border-white/5">
    <!-- bg glow -->
    <div class="absolute inset-0 pointer-events-none" style="background-image: url('/hero-bg.svg'); background-size: cover; opacity: 0.04;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none" style="background: radial-gradient(ellipse, rgba(16,185,129,0.1) 0%, transparent 70%); filter: blur(80px);"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Left: Text + QR codes -->
        <div data-aos="fade-right">
          <p class="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-4">PTERI App</p>
          <h2 class="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            {{ t.titleLine1 }}<br />{{ t.titleLine2 }}<br />
            <span class="text-white text-3xl sm:text-4xl font-medium">{{ t.titleLine3 }}</span>
          </h2>
          <p class="text-white text-base leading-relaxed mb-10 max-w-md">
            {{ t.subtitle }}
          </p>

          <!-- QR + Badge row — side by side on all screen sizes -->
          <div class="flex flex-row gap-4 sm:gap-6">

            <!-- iOS QR -->
            <div class="flex flex-col items-center gap-2 sm:gap-3 flex-1">
              <div class="qr-card p-2 sm:p-3 rounded-2xl">
                <img
                  src="/apple-store-qr.png"
                  alt="iOS App Store QR Code"
                  class="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-lg"
                  loading="lazy"
                />
              </div>
              <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" rel="noopener" class="transition-transform hover:scale-105">
                <img src="/ios.png" alt="Download on the App Store" class="h-8 sm:h-10 w-auto" />
              </a>
              <p class="text-white/60 text-[10px] sm:text-xs">{{ t.scanIos }}</p>
            </div>

            <!-- Divider -->
            <div class="flex items-center">
              <div class="w-px h-24 sm:h-32 bg-white/10"></div>
            </div>

            <!-- Android QR -->
            <div class="flex flex-col items-center gap-2 sm:gap-3 flex-1">
              <div class="qr-card p-2 sm:p-3 rounded-2xl">
                <img
                  src="/play-store-qr.png"
                  alt="Google Play QR Code"
                  class="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-lg"
                  loading="lazy"
                />
              </div>
              <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" rel="noopener" class="transition-transform hover:scale-105">
                <img src="/playstore.png" alt="Get it on Google Play" class="h-8 sm:h-10 w-auto" />
              </a>
              <p class="text-white/60 text-[10px] sm:text-xs">{{ t.scanAndroid }}</p>
            </div>

          </div>

          <!-- Feature pills -->
          <div class="flex flex-wrap gap-2 mt-8">
            <span v-for="pill in t.pills" :key="pill" class="pill">{{ pill }}</span>
          </div>
        </div>

        <!-- Right: App screenshot — hidden on mobile -->
        <div class="hidden lg:flex relative justify-center items-end" data-aos="fade-left" data-aos-delay="100">
          <!-- Glow behind phone -->
          <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 80%, rgba(16,185,129,0.15) 0%, transparent 65%); filter: blur(40px);"></div>

          <!-- Main wallet screenshot -->
          <div class="relative z-20">
            <img src="/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.47.png" alt="PTERI Wallet" class="w-64 sm:w-80 h-auto drop-shadow-2xl rounded-3xl" style="filter: drop-shadow(0 24px 48px rgba(16,185,129,0.25));" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const t = computed(() => {
  const translations = {
    en: {
      titleLine1: 'Your Keys.',
      titleLine2: 'Your Control.',
      titleLine3: 'In Your Pocket.',
      subtitle: 'Passwordless authentication, customer-controlled credentials, and privacy-focused payment controls. Free to download.',
      scanIos: 'Scan for iOS',
      scanAndroid: 'Scan for Android',
      pills: ['Customer-Controlled', 'Passwordless Auth', 'Privacy Controls', 'Free'],
    },
    de: {
      titleLine1: 'Ihre Schlüssel.',
      titleLine2: 'Ihre Kontrolle.',
      titleLine3: 'In Ihrer Tasche.',
      subtitle: 'PTERI App mit Passwortlosem Login, kundenkontrollierten Zugangsdaten und datenschutzorientierten Zahlungskontrollen. Kostenlos herunterladen.',
      scanIos: 'Für iOS scannen',
      scanAndroid: 'Für Android scannen',
      pills: ['Kundenkontrolliert', 'Passwortlos', 'On-Chain 2FA', 'Kostenlos'],
    },
    es: {
      titleLine1: 'Tus Claves.',
      titleLine2: 'Tu Control.',
      titleLine3: 'En Tu Bolsillo.',
      subtitle: 'PTERI App con autenticación sin contraseña, credenciales controladas por el cliente y controles de pago privados. Descarga gratuita.',
      scanIos: 'Escanear para iOS',
      scanAndroid: 'Escanear para Android',
      pills: ['Control del Cliente', 'Sin Contraseña', '2FA en cadena', 'Gratis'],
    },
    ja: {
      titleLine1: 'あなたの鍵。',
      titleLine2: 'あなたのコントロール。',
      titleLine3: 'ポケットの中に。',
      subtitle: 'パスワードレス認証、顧客管理型認証情報、プライバシー重視の決済管理を備えたPTERIアプリ。無料でダウンロード。',
      scanIos: 'iOSのスキャン',
      scanAndroid: 'Androidのスキャン',
      pills: ['顧客管理', 'パスワードレス', 'オンチェーン2FA', '無料'],
    },
    ar: {
      titleLine1: 'مفاتيحك.',
      titleLine2: 'تحكمك.',
      titleLine3: 'في جيبك.',
      subtitle: 'تطبيق PTERI مع مصادقة بدون كلمة مرور وبيانات اعتماد يتحكم بها العميل وضوابط دفع خاصة. مجانية للتنزيل.',
      scanIos: 'امسح لـ iOS',
      scanAndroid: 'امسح لـ Android',
      pills: ['تحكم العميل', 'بدون كلمة مرور', '2FA على السلسلة', 'مجاني'],
    },
  }
  return translations[locale.value] || translations.en
})
</script>

<style scoped>
.qr-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  color: #34d399;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
}
</style>
