<template>
  <footer class="border-t border-white/5" style="background-color: #000 !important;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

      <!-- Top Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-12 border-b border-white/5">

        <!-- Brand -->
        <div class="space-y-4">
          <NuxtLink to="/" class="flex items-center gap-3">
            <img src="/kakrlabs-logo.png" alt="Kakr Labs" class="h-11 w-auto" />
            <span class="text-white font-bold text-xl tracking-tight">Kakr Labs</span>
          </NuxtLink>
          <p class="text-sm text-white/80 leading-relaxed">{{ t.tagline }}</p>
          <p class="text-sm text-white/60 leading-relaxed">{{ t.summary }}</p>
        </div>

        <!-- Address -->
        <div class="space-y-1">
          <p class="text-white font-semibold text-sm mb-2">KAKR Labs Inc.</p>
          <p class="text-white text-sm">240 W Old Country Rd, Suite 1</p>
          <p class="text-white text-sm">Hicksville, NY 11801</p>
          <p class="text-white/80 text-xs mt-2 leading-relaxed">Registered Office: 30 N Gould St,<br>Sheridan, Wyoming 82801</p>
          <a href="mailto:contact@kakr.ai" class="text-white/80 text-sm hover:text-emerald-400 transition-colors block mt-2">contact@kakr.ai</a>
        </div>

        <!-- Follow Us -->
        <div class="space-y-4">
          <p class="text-emerald-400 text-xs uppercase tracking-widest font-semibold">Follow Us</p>
          <div class="flex items-center gap-4 flex-wrap">
            <a href="https://x.com/kakrco" target="_blank" rel="noopener" aria-label="X" class="text-white hover:text-emerald-400 transition-colors">
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/kakrlabs/" target="_blank" rel="noopener" aria-label="LinkedIn" class="text-white hover:text-emerald-400 transition-colors">
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.6.6 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
            </a>
            <a href="https://www.youtube.com/@kakrdev" target="_blank" rel="noopener" aria-label="YouTube" class="text-white hover:text-emerald-400 transition-colors">
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Nav Columns -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/5">

        <!-- Column 1: Product -->
        <div>
          <h3 class="footer-col-heading">{{ t.product }}</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/" class="footer-link">{{ t.home }}</NuxtLink></li>
            <li><NuxtLink to="/platform" class="footer-link">{{ t.pteriPlatform }}</NuxtLink></li>
            <li><a href="/platform#authority" class="footer-link">{{ t.identity }}</a></li>
            <li><a href="/platform#pricing" class="footer-link">{{ t.pricing }}</a></li>
            <li><NuxtLink to="/wallet" class="footer-link">{{ t.wallet }}</NuxtLink></li>
            <li><NuxtLink to="/faqs" class="footer-link">{{ t.faq }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Column 2: Resources — Newsroom, Product Updates, Tutorials, RSS and
             System Status are required here by handoff §1. -->
        <div>
          <h3 class="footer-col-heading">{{ t.resources }}</h3>
          <ul class="space-y-3">
            <li><a href="https://docs.kakr.ai/" target="_blank" rel="noopener" class="footer-link">{{ t.apiDocs }}</a></li>
            <li><NuxtLink to="/newsroom" class="footer-link">{{ t.newsroom }}</NuxtLink></li>
            <li><NuxtLink to="/updates" class="footer-link">{{ t.productUpdates }}</NuxtLink></li>
            <li><NuxtLink to="/tutorials" class="footer-link">{{ t.tutorials }}</NuxtLink></li>
            <li><a href="/newsroom/rss.xml" class="footer-link">{{ t.rss }}</a></li>
            <li><a href="https://pteri.org/" target="_blank" rel="noopener" class="footer-link">{{ t.devPlatform }}</a></li>
            <li><a href="https://support.kakr.ai" target="_blank" rel="noopener" class="footer-link">{{ t.supportCenter }}</a></li>
            <li><a href="https://kakrlabs1.statuspage.io/" target="_blank" rel="noopener" class="footer-link">{{ t.statusPage }}</a></li>
          </ul>
        </div>

        <!-- Column 3: Company — Blog is no longer listed here. /blog still resolves
             for inbound links, but the Newsroom above is the canonical destination
             and advertising both would present them as two separate places. -->
        <div>
          <h3 class="footer-col-heading">{{ t.company }}</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/about" class="footer-link">{{ t.about }}</NuxtLink></li>
            <li><NuxtLink to="/partnerships" class="footer-link">{{ t.partnerships }}</NuxtLink></li>
            <li><NuxtLink to="/contact" class="footer-link">{{ t.contact }}</NuxtLink></li>
            <li><a href="/solutions#contact" class="footer-link">{{ t.bookDemo }}</a></li>
          </ul>
        </div>

        <!-- Column 4: Legal — Trust Center only. The policy links live in the
             single bottom legal row so they are not duplicated (audit p5.4). -->
        <div>
          <h3 class="footer-col-heading">{{ t.legal }}</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/trust-center" class="footer-link">{{ t.trustCenter }}</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar — one legal row + one live Status link (audit p5.4).
           footer-bottom-bar reserves clearance for the fixed chat launcher so
           the legal links are never sitting underneath it (audit p4.3). -->
      <div class="footer-bottom-bar pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p class="footer-legal">© 2026 Kakr Labs. All rights reserved.</p>
          <p class="footer-legal mt-0.5">KAKR™ and PTERI™ are trademarks of Kakr Labs.</p>
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <NuxtLink to="/privacy-policy" class="footer-legal-link">{{ t.privacy }}</NuxtLink>
          <NuxtLink to="/terms-of-service" class="footer-legal-link">{{ t.terms }}</NuxtLink>
          <NuxtLink to="/cookie-policy" class="footer-legal-link">{{ t.cookiePolicy }}</NuxtLink>
          <a href="/sitemap.xml" target="_blank" class="footer-legal-link">{{ t.sitemap }}</a>
          <a href="https://kakrlabs1.statuspage.io/" target="_blank" rel="noopener" class="footer-legal-link">Status</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const translations = {
  en: {
    summary: "PTERI provides passwordless MFA, runtime authorization, credential protection, and verifiable action evidence.",
    tagline: "KAKR Labs builds identity and authorization security for people, AI agents, and enterprise systems.",
    platform: "Platform",
    product: "Product",
    home: "Home",
    pteriPlatform: "PTERI Platform",
    products: "Products",
    identity: "Identity",
    payments: "Payments",
    pricing: "Pricing",
    wallet: "PTERI App",
    faq: "FAQ",
    apiHub: "APIs / BaaS",
    developers: "Developers",
    apiDocs: "API Docs",
    devPlatform: "Developer Platform",
    supportCenter: "Support Center",
    statusPage: "Status Page",
    documentation: "Documentation",
    playground: "Playground",
    apiKeys: "API Keys",
    company: "Company",
    about: "About",
    aboutUs: "About",
    press: "Press",
    partnerships: "Partnerships",
    blog: "Blog",
    contact: "Contact",
    bookDemo: "Request a Pilot",
    faqs: "FAQs",
    legal: "Legal",
    security: "Security",
    trustCenter: "Trust Center",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    sitemap: "Sitemap",
    resources: "Resources", newsroom: "Newsroom", productUpdates: "Product Updates", tutorials: "Tutorials", rss: "RSS Feed"
  },
  de: {
    summary: "PTERI bietet passwortlose MFA, Laufzeit-Autorisierung, Schutz von Anmeldedaten und überprüfbare Aktionsnachweise.",
    tagline: "KAKR Labs entwickelt Identitäts- und Autorisierungssicherheit für Menschen, KI-Agenten und Unternehmenssysteme.",
    platform: "Plattform",
    product: "Produkt",
    home: "Startseite",
    pteriPlatform: "PTERI Plattform",
    products: "Produkte",
    identity: "Identität",
    payments: "Zahlungen",
    pricing: "Preise",
    wallet: "PTERI App",
    faq: "FAQ",
    apiHub: "APIs / BaaS",
    developers: "Entwickler",
    apiDocs: "API-Dokumentation",
    devPlatform: "Entwicklerplattform",
    supportCenter: "Support-Center",
    statusPage: "Statusseite",
    documentation: "Dokumentation",
    playground: "Playground",
    apiKeys: "API-Schlüssel",
    company: "Unternehmen",
    about: "Über uns",
    aboutUs: "Über uns",
    press: "Presse",
    partnerships: "Partnerschaften",
    blog: "Blog",
    contact: "Kontakt",
    bookDemo: "Pilotprojekt anfragen",
    faqs: "FAQs",
    legal: "Rechtliches",
    security: "Sicherheit",
    trustCenter: "Trust Center",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    cookiePolicy: "Cookie-Richtlinie",
    sitemap: "Sitemap",
    resources: "Ressourcen", newsroom: "Newsroom", productUpdates: "Produkt-Updates", tutorials: "Tutorials", rss: "RSS-Feed"
  },
  es: {
    summary: "PTERI proporciona MFA sin contraseña, autorización en tiempo de ejecución, protección de credenciales y evidencia de acciones verificables.",
    tagline: "KAKR Labs desarrolla seguridad de identidad y autorización para personas, agentes de IA y sistemas empresariales.",
    platform: "Plataforma", product: "Producto", home: "Inicio", pteriPlatform: "Plataforma PTERI",
    products: "Productos", identity: "Identidad", payments: "Pagos", pricing: "Precios", wallet: "PTERI App", faq: "FAQ",
    apiHub: "APIs / BaaS", developers: "Desarrolladores", apiDocs: "Docs de API", devPlatform: "Plataforma de desarrollador",
    supportCenter: "Centro de soporte", statusPage: "Página de estado", documentation: "Documentación", playground: "Playground", apiKeys: "Claves API",
    company: "Empresa", about: "Acerca de", aboutUs: "Acerca de", press: "Prensa", partnerships: "Asociaciones", blog: "Blog", contact: "Contacto", bookDemo: "Solicitar un piloto",
    faqs: "Preguntas frecuentes", legal: "Legal", security: "Seguridad", trustCenter: "Centro de confianza",
    privacy: "Política de privacidad", terms: "Términos de servicio", cookiePolicy: "Política de cookies", sitemap: "Mapa del sitio",
    resources: "Recursos", newsroom: "Sala de prensa", productUpdates: "Novedades del producto", tutorials: "Tutoriales", rss: "Feed RSS"
  },
  ja: {
    summary: "PTERIはパスワードレスMFA、ランタイム認可、資格情報保護、検証可能なアクション証拠を提供します。",
    tagline: "KAKR Labsは、人、AIエージェント、エンタープライズシステムのためのアイデンティティと認可セキュリティを構築しています。",
    platform: "プラットフォーム", product: "製品", home: "ホーム", pteriPlatform: "PTERIプラットフォーム",
    products: "製品", identity: "アイデンティティ", payments: "支払い", pricing: "価格", wallet: "PTERIアプリ", faq: "FAQ",
    apiHub: "APIs / BaaS", developers: "開発者", apiDocs: "APIドキュメント", devPlatform: "開発者プラットフォーム",
    supportCenter: "サポートセンター", statusPage: "ステータスページ", documentation: "ドキュメント", playground: "プレイグラウンド", apiKeys: "APIキー",
    company: "会社", about: "会社概要", aboutUs: "会社概要", press: "プレス", partnerships: "パートナーシップ", blog: "ブログ", contact: "お問い合わせ", bookDemo: "パイロットを申し込む",
    faqs: "FAQ", legal: "法的情報", security: "セキュリティ", trustCenter: "トラストセンター",
    privacy: "プライバシーポリシー", terms: "利用規約", cookiePolicy: "Cookieポリシー", sitemap: "サイトマップ",
    resources: "リソース", newsroom: "ニュースルーム", productUpdates: "製品アップデート", tutorials: "チュートリアル", rss: "RSSフィード"
  },
  ar: {
    summary: "يوفر PTERI مصادقة متعددة العوامل بدون كلمة مرور، وتفويضًا في وقت التشغيل، وحماية للاعتمادات، وأدلة إجراءات قابلة للتحقق.",
    tagline: "تبني KAKR Labs أمان الهوية والتفويض للأشخاص ووكلاء الذكاء الاصطناعي وأنظمة المؤسسات.",
    platform: "المنصة", product: "المنتج", home: "الرئيسية", pteriPlatform: "منصة PTERI",
    products: "المنتجات", identity: "الهوية", payments: "المدفوعات", pricing: "التسعير", wallet: "تطبيق PTERI", faq: "الأسئلة الشائعة",
    apiHub: "APIs / BaaS", developers: "المطورون", apiDocs: "توثيق API", devPlatform: "منصة المطورين",
    supportCenter: "مركز الدعم", statusPage: "صفحة الحالة", documentation: "التوثيق", playground: "الملعب", apiKeys: "مفاتيح API",
    company: "الشركة", about: "حولنا", aboutUs: "حولنا", press: "صحافة", partnerships: "الشراكات", blog: "المدونة", contact: "اتصل بنا", bookDemo: "اطلب مشروعاً تجريبياً",
    faqs: "الأسئلة الشائعة", legal: "قانوني", security: "الأمان", trustCenter: "مركز الثقة",
    privacy: "سياسة الخصوصية", terms: "شروط الخدمة", cookiePolicy: "سياسة ملفات تعريف الارتباط", sitemap: "خريطة الموقع",
    resources: "الموارد", newsroom: "غرفة الأخبار", productUpdates: "تحديثات المنتج", tutorials: "الدروس التعليمية", rss: "تغذية RSS"
  }
}

const t = computed(() => translations[locale.value] || translations.en)
</script>

<style scoped>
ul { padding-left: 0; list-style: none; }

/* Shared footer tokens from the visual audit (p2 FOOTER + p5.1).
   Column heading 12/16 uppercase 700; link 14/22; legal 13/20.
   Muted text uses #94A3B8 for adequate contrast on dark — the previous
   white/30–white/60 opacities failed the audit's contrast requirement. */
.footer-col-heading {
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #34d399;
  margin-bottom: 20px;
}

.footer-link {
  font-size: 14px;
  line-height: 22px;
  color: #cbd5e1;
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: #34d399;
}

.footer-legal {
  font-size: 13px;
  line-height: 20px;
  color: #94a3b8;
}

.footer-legal-link {
  font-size: 13px;
  line-height: 20px;
  color: #94a3b8;
  transition: color 0.2s ease;
}
.footer-legal-link:hover {
  color: #34d399;
}

/* Clearance so the fixed chat launcher never sits over the legal links
   (audit p4.3 / p15.5). Only needed where the launcher actually overlaps. */
@media (max-width: 640px) {
  .footer-bottom-bar {
    padding-bottom: var(--chat-safe-bottom, 104px);
  }
}
@media (min-width: 641px) {
  .footer-bottom-bar {
    padding-right: 88px;
  }
}
</style>
