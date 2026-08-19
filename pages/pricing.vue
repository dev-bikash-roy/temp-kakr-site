<template>
  <div class="bg-slate-50 dark:bg-dark-800 min-h-screen">

    <!-- Pricing Request Modal -->
    <PricingRequestModal :isOpen="showModal" @close="showModal = false" />
    
    <!-- SECTION 1: HERO -->
    <section class="relative pt-32 pb-20 bg-black border-b border-white/5 text-center overflow-hidden">
      <!-- Background Decorations -->
      <div class="absolute inset-0 pointer-events-none z-0" style="background-image: url('/hero-bg.svg'); background-size: cover; background-position: top center; opacity: 0.15;"></div>

      <div class="container mx-auto px-4 relative z-10 max-w-4xl">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {{ t.title }}
        </h1>
        <p class="text-xl md:text-2xl text-slate-300 mb-4">
          {{ t.subtitle1 }}
        </p>
        <p class="text-lg text-slate-400 mb-2">
          {{ t.subtitle2 }}
        </p>
        <p class="text-base text-emerald-400 font-semibold mb-8">
          {{ t.subtitle3 }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="showModal = true" class="btn-primary">
            {{ t.ctaPilot }}
          </button>
          <a href="/contact" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/40 backdrop-blur-sm transition-all">
            {{ t.ctaEnterprise }}
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 2: TOGGLE PRICING TABLE -->
    <!-- SECTION 2: PRICING CARDS -->
    <section class="py-20 bg-black">
      <div class="container mx-auto px-4 max-w-7xl">
        <PricingCards />
      </div>
    </section>

    <!-- SECTION 3: ROI COMPARISON -->
    <section class="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          {{ t.roiTitle }}
        </h2>
        <div class="bg-slate-800 dark:bg-dark-900/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <p class="text-xl text-slate-200 mb-4">
            {{ t.roiText1 }} <span class="text-emerald-400 font-bold">{{ t.roiOtps }}</span> {{ t.roiAt }} <span class="text-emerald-400 font-bold">$0.04 {{ t.roiEach }}</span>,
          </p>
          <p class="text-2xl text-white font-bold mb-6">
            {{ t.roiSpend }} <span class="text-red-400">{{ t.roiAmount }}</span> {{ t.roiOn }}
          </p>
          <div class="h-px bg-white/20 my-8"></div>
          <p class="text-xl text-slate-200 mb-4">
            <span class="text-emerald-400 font-bold">{{ t.roiIdentity }}</span> {{ t.roiCosts }} <span class="text-emerald-400 font-bold">{{ t.roiPrice }}</span>
          </p>
          <p class="text-lg text-slate-300 mb-2">
            {{ t.roiWhile }}
          </p>
          <div class="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <div class="bg-emerald-500/20 rounded-lg p-4 border border-emerald-500/30">
              <p class="text-emerald-400 font-bold text-lg">{{ t.roiLowerCost }}</p>
            </div>
            <div class="bg-emerald-500/20 rounded-lg p-4 border border-emerald-500/30">
              <p class="text-emerald-400 font-bold text-lg">{{ t.roiLowerFraud }}</p>
            </div>
            <div class="bg-emerald-500/20 rounded-lg p-4 border border-emerald-500/30">
              <p class="text-emerald-400 font-bold text-lg">{{ t.roiLowerLiability }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: WHO THIS IS FOR -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="container mx-auto px-4 max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-4">
          {{ t.whoTitle }}
        </h2>
        <div class="grid md:grid-cols-2 gap-8 mt-12">
          
          <div class="bg-slate-50 dark:bg-dark-800 rounded-xl p-8 border border-slate-200 dark:border-white/10">
            <div class="text-4xl mb-4">🏦</div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ t.whoFintech }}</h3>
            <p class="text-slate-600 dark:text-slate-400">{{ t.whoFintechDesc }}</p>
          </div>

          <div class="bg-slate-50 dark:bg-dark-800 rounded-xl p-8 border border-slate-200 dark:border-white/10">
            <div class="text-4xl mb-4">🤖</div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ t.whoAI }}</h3>
            <p class="text-slate-600 dark:text-slate-400">{{ t.whoAIDesc }}</p>
          </div>

          <div class="bg-slate-50 dark:bg-dark-800 rounded-xl p-8 border border-slate-200 dark:border-white/10">
            <div class="text-4xl mb-4">🏢</div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ t.whoSaaS }}</h3>
            <p class="text-slate-600 dark:text-slate-400">{{ t.whoSaaSDesc }}</p>
          </div>

          <div class="bg-slate-50 dark:bg-dark-800 rounded-xl p-8 border border-slate-200 dark:border-white/10">
            <div class="text-4xl mb-4">💳</div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ t.whoPayment }}</h3>
            <p class="text-slate-600 dark:text-slate-400">{{ t.whoPaymentDesc }}</p>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 5: FINAL CTA -->
    <section class="py-20 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-800 text-center">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {{ t.finalTitle }}
        </h2>
        <p class="text-2xl text-emerald-400 font-semibold mb-8">
          {{ t.finalSubtitle }}
        </p>
        <p class="text-xl text-slate-300 mb-12">
          {{ t.finalTagline }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/start-pilot" class="btn-primary">
            {{ t.finalCtaIdentity }}
          </a>
          <a href="/start-pilot" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/40 backdrop-blur-sm transition-all">
            {{ t.finalCtaBlockchain }}
          </a>
          <a href="/contact" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/40 backdrop-blur-sm transition-all">
            {{ t.finalCtaSales }}
          </a>
        </div>
      </div>
    </section>

  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()
const { setSEO } = useSEO()

setSEO({
  title: 'KAKR.ai PTERI Pricing | Enterprise-Grade AI Security Without the Wallet Bleed',
  description: 'Transparent pricing for passwordless MFA, AI-agent authorization, and verifiable action evidence.',
  image: '/og/og-pricing.png',
  keywords: ['pricing', 'blockchain authentication', 'Web3 infrastructure', 'Litecoin', 'identity security', 'Kakr Labs']
})
const showModal = ref(false)

// Pricing page translations
const t = computed(() => {
  const translations = {
    en: {
      title: "Pricing",
      subtitle1: "Reduce phishing, SIM-swap fraud, OTP replay, and infrastructure overhead",
      subtitle2: "with wallet-signed, Proof-of-Work secured verification.",
      subtitle3: "Built for AI. Built for fintech. Built for scale.",
      ctaPilot: "Start 60-Day Pilot",
      ctaEnterprise: "Contact Enterprise",
      toggleIdentity: "🔐 Identity Trust Layer",
      toggleBlockchain: "⛓ Blockchain Infrastructure",
      planBasic: "Pteri Basic",
      planBasicDesc: "For developers<br>starting out",
      planGrowth: "Identity Growth",
      planGrowthDesc: "Addressing one of the biggest vulnerabilities in Web2 identity \u2014 OTPs & passwords.",
      planScale: "Identity Scale",
      planScaleDesc: "For scaling teams & AI-agent deployments.",
      planPro: "Pro",
      planDeveloper: "Developer",
      planEnterprise: "Pteri Enterprise",
      planEnterpriseDesc: "For large-scale<br>custom requirements.",
      mostPopular: "Most Popular",
      joinDevelopers: "Join 1,269+ developers!",
      bestForStartups: "Best for startups!",
      securityFocus: "Security Focus!",
      mwebIncluded: "Self-Custodial Payments Included!",
      perMonth: "/month",
      custom: "Custom",
      verificationsIncluded: "verifications included",
      unlimited: "Unlimited",
      walletLogin: "Wallet-Based Login",
      blockchain2FA: "Blockchain 2FA",
      phishingResistant: "Phishing-Resistant",
      simSwapResistant: "SIM Swap Resistant",
      aiVerificationBasic: "AI Agent Verification (Basic)",
      aiVerificationAdvanced: "AI Agent Verification (Advanced)",
      aiVerificationEnterprise: "AI Agent Verification (Enterprise)",
      fraudAnalytics: "Fraud Analytics",
      sdkApi: "SDK + API Access",
      mcpIntegration: "MCP AI Integration",
      sla: "SLA",
      privateDeployment: "Private Deployment",
      overage: "Overage:",
      perVerification: "/ verification",
      apiCallsMonth: "API calls/month",
      nodeShared: "Node Access (Shared)",
      nodeDedicated: "Node Access (Dedicated)",
      nodeCluster: "Node Access (Dedicated Cluster)",
      walletServiceBasic: "Wallet-as-a-Service (Basic)",
      walletServiceAdvanced: "Wallet-as-a-Service (Advanced)",
      walletServiceEnterprise: "Wallet-as-a-Service (Enterprise)",
      fullIndexing: "Full Indexing",
      mwebPrivacy: "Self-Custodial Payments",
      aiMcpDeployment: "AI MCP Deployment",
      sdkSupport: "SDK Support",
      getStarted: "Get Started",
      contactSales: "Contact Sales",
      contactUs: "Contact Us",
      // BaaS plan keys
      planBaasDeveloper: "BaaS Developer",
      planBaasDeveloperDesc: "For startups needing<br>powerful Litecoin infrastructure APIs.",
      planBaasPro: "BaaS Pro",
      planBaasProDesc: "Full-power Litecoin infrastructure APIs for growing products.",
      planBaasEnterprise: "BaaS Enterprise",
      planBaasEnterpriseDesc: "Unlimited blockchain infrastructure for enterprise-grade deployments.",
      web3Ready: "Web3 Ready!",
      web3SummitEntry: "Web3 Summit Entry!",
      fullNodeCluster: "Full Node Cluster!",
      recommended: "Recommended",
      baasDeveloperFeatures: [
        "API Calls: 300/sec",
        "100,000 calls/month",
        "Litecoin Explorer",
        "Basic SDK Access",
        "Community Support",
        "Pteri Playground Access",
        "Pteri Intelligence",
        "AI MCP Deployment",
      ],
      baasProFeatures: [
        "API Calls: 800/sec",
        "1M calls/month",
        "Enhanced Explorer",
        "Full SDK Suite",
        "Priority Support",
        "Unlimited API key users",
        "Pteri Playground Access",
        "Pteri Intelligence",
        "Self-Custodial Payments",
        "Node Access",
        "AI MCP Deployment",
      ],
      baasEnterpriseFeatures: [
        "Everything in BaaS Developer & BaaS Pro",
        "Unlimited API Calls",
        "Dedicated Node Cluster",
        "Custom Smart Contracts",
        "White-Label Infrastructure APIs",
        "Self-Custodial Payments",
        "SLA Guarantee",
        "Dedicated Enterprise Storage",
        "24/7 Dedicated Support",
      ],
      basicFeatures: [
        "API Calls: 3/sec",
        "Maximum of 50 API calls/month",
        "Litecoin-Powered Explorer",
        "Free API Testing",
        "Developer Tutorials & Challenges",
        "Free Developer Guide",
      ],
      growthFeatures: [
        "API Calls: 200/sec",
        "50,000 calls/month",
        "Enhanced Explorer on Litecoin",
        "Pteri Playground Access",
        "Pteri Intelligence",
        "Easy SDK Integration",
        "Unlimited API key users",
        "Self-Custodial Payments",
      ],
      scaleFeatures: [
        "API Calls: 500/sec",
        "API Calls: 200,000/month",
        "Enhanced Explorer on Litecoin",
        "Pteri Playground Access",
        "Pteri Intelligence",
        "Litecoin SDK Access",
        "Priority Support",
        "Easy SDK Integration",
        "Unlimited API key users",
        "Self-Custodial Payments",
        "SDK Access",
      ],
      enterpriseFeatures: [
        "Everything in Growth & Scale",
        "Unlimited API Calls",
        "Enterprise-Grade Infrastructure APIs",
        "Self-Custodial Payments",
        "Dedicated Instance",
        "Custom API Integrations",
        "White-Label Solutions",
        "Unlimited Pteri Intelligence",
        "Dedicated Enterprise Storage",
      ],
      roiTitle: "Still Using SMS 2FA?",
      roiText1: "If you send",
      roiOtps: "150,000 OTPs per month",
      roiAt: "at",
      roiEach: "each",
      roiSpend: "you spend",
      roiAmount: "$6,000 per month",
      roiOn: "on SMS alone.",
      roiIdentity: "Identity Scale",
      roiCosts: "costs",
      roiPrice: "$3,500/month",
      roiWhile: "while reducing phishing and SIM-swap risk.",
      roiLowerCost: "Lower cost.",
      roiLowerFraud: "Lower fraud.",
      roiLowerLiability: "Lower liability.",
      whoTitle: "Built for Teams That Cannot Afford Breach",
      whoFintech: "Fintech & Exchanges",
      whoFintechDesc: "→ Reduce withdrawal fraud",
      whoAI: "AI Platforms",
      whoAIDesc: "→ Prevent AI impersonation",
      whoSaaS: "Enterprise SaaS",
      whoSaaSDesc: "→ Remove stored credential risk",
      whoPayment: "Payment Infrastructure",
      whoPaymentDesc: "→ Add privacy-ready settlement",
      finalTitle: "Most Security Systems Alert You When the Fire Starts",
      finalSubtitle: "This infrastructure removes the fuel.",
      finalTagline: "Secure identity. Secure AI. Secure digital value.",
      finalCtaIdentity: "Start Identity Pilot",
      finalCtaBlockchain: "Deploy Blockchain Infrastructure",
      finalCtaSales: "Talk to Enterprise Sales"
    },
    ja: {
      title: "料金プラン",
      subtitle1: "フィッシング、SIMスワップ詐欺、OTPリプレイ、インフラストラクチャのオーバーヘッドを低減",
      subtitle2: "ウォレット署名、Proof-of-Workで保護された検証。",
      subtitle3: "AI向けに構築。フィンテック向けに構築。スケール向けに構築。",
      ctaPilot: "60日間パイロットを開始",
      ctaEnterprise: "エンタープライズに問い合わせ",
      toggleIdentity: "🔐 アイデンティティトラストレイヤー",
      toggleBlockchain: "⛓ ブロックチェーンインフラストラクチャ",
      
      planBasic: "Pteriベーシック",
      planBasicDesc: "開発の第一歩に最適",
      planGrowth: "アイデンティティ・グロース",
      planGrowthDesc: "OTPやパスワードといったWeb2の最大級の脆弱性に対処します。",
      planScale: "アイデンティティ・スケール",
      planScaleDesc: "スケーリングするチームやAIエージェント向け。",
      planEnterprise: "Pteriエンタープライズ",
      planEnterpriseDesc: "完全なプライバシーと無制限のインフラを求める企業向け。",
      
      joinDevelopers: "1,269人以上の開発者が参加中！",
      bestForStartups: "スタートアップに最適！",
      securityFocus: "セキュリティ重視！",
      mostPopular: "人気No.1",
      recommended: "推奨",
      perMonth: "/月",
      custom: "カスタム",
      mwebIncluded: "セルフカストディ決済が含まれます",
      getStarted: "始める",
      contactSales: "営業に問い合わせ",
      contactUs: "お問い合わせ",

      planBaasDeveloper: "BaaSデベロッパー",
      planBaasDeveloperDesc: "強力なLitecoinインフラAPIを必要とするスタートアップや開発者向け。",
      planBaasPro: "BaaSプロ",
      planBaasProDesc: "成長する製品のためのフルパワーLitecoinインフラAPI。",
      planBaasEnterprise: "BaaSエンタープライズ",
      planBaasEnterpriseDesc: "企業グレードのデプロイメントのための無制限のブロックチェーン・インフラ。",
      web3Ready: "Web3対応！",
      web3SummitEntry: "Web3 Summit Entry!",
      fullNodeCluster: "フルノードクラスター！",

      basicFeatures: [
        "APIコール：3回/秒",
        "月間最大50回までのAPIコール",
        "Litecoin搭載エクスプローラー",
        "無料APIテスト",
        "開発者チュートリアル＆チャレンジ",
        "無料開発者ガイド",
      ],
      growthFeatures: [
        "APIコール：200回/秒",
        "月間50,000回のコール",
        "拡張版Litecoinエクスプローラー",
        "Pteri Playgroundへのアクセス",
        "Pteriインテリジェンス",
        "簡単なSDK統合",
        "無制限のAPIキーユーザー",
        "セルフカストディ決済",
      ],
      scaleFeatures: [
        "APIコール：500回/秒",
        "月間200,000回のコール",
        "拡張版Litecoinエクスプローラー",
        "Pteri Playgroundへのアクセス",
        "Pteriインテリジェンス",
        "Litecoin SDKへのアクセス",
        "優先サポート",
        "簡単なSDK統合",
        "無制限のAPIキーユーザー",
        "セルフカストディ決済",
        "SDKアクセス",
      ],
      enterpriseFeatures: [
        "Identity Scaleの全機能",
        "無制限のAPIコール",
        "カスタム・インテグレーション",
        "専用インフラ",
        "24時間365日のホワイトグローブ・サポート",
        "カスタムSLA",
        "セルフカストディ決済",
        "オンプレミス・デプロイメント・オプション",
      ],
      baasDeveloperFeatures: [
        "APIコール：300回/秒",
        "100,000回コール/月",
        "Litecoinエクスプローラー",
        "基本的なSDKアクセス",
        "コミュニティサポート",
        "Pteri Playgroundアクセス",
        "Pteriインテリジェンス",
        "AI MCPデプロイメント",
      ],
      baasProFeatures: [
        "APIコール：800回/秒",
        "1,000,000回コール/月",
        "拡張版エクスプローラー",
        "フルSDKスイート",
        "優先サポート",
        "無制限のAPIキーユーザー",
        "Pteri Playgroundアクセス",
        "Pteriインテリジェンス",
        "セルフカストディ決済",
        "ノードアクセス",
        "AI MCPデプロイメント",
      ],
      baasEnterpriseFeatures: [
        "BaaS Developer & Proの全機能",
        "無制限のAPIコール",
        "専用ノードクラスター",
        "カスタム・スマートコントラクト",
        "ホワイトラベルのインフラAPI",
        "セルフカストディ決済",
        "SLA保証",
        "専用エンタープライズ・ストレージ",
        "24時間365日の専用サポート",
      ],

      roiTitle: "まだSMS 2FAを使用していますか？",
      roiText1: "もし",
      roiOtps: "月に150,000件のOTP",
      roiAt: "を",
      roiEach: "各",
      roiSpend: "で送信すると、",
      roiAmount: "月額$6,000",
      roiOn: "をSMSだけに費やします。",
      roiIdentity: "アイデンティティスケール",
      roiCosts: "は",
      roiPrice: "月額$3,500",
      roiWhile: "でフィッシングとSIMスワップのリスクを低減します。",
      roiLowerCost: "低コスト。",
      roiLowerFraud: "低不正。",
      roiLowerLiability: "低責任。",
      whoTitle: "侵害を許容できないチーム向けに構築",
      whoFintech: "フィンテック＆取引所",
      whoFintechDesc: "→ 出金詐欺を低減",
      whoAI: "AIプラットフォーム",
      whoAIDesc: "→ AIなりすましを防止",
      whoSaaS: "エンタープライズSaaS",
      whoSaaSDesc: "→ 保存された認証情報のリスクを削除",
      whoPayment: "決済インフラストラクチャ",
      whoPaymentDesc: "→ プライバシー対応の決済を追加",
      finalTitle: "ほとんどのセキュリティシステムは火災が始まったときに警告します",
      finalSubtitle: "このインフラストラクチャは燃料を取り除きます。",
      finalTagline: "安全なアイデンティティ。安全なAI。安全なデジタル価値。",
      finalCtaIdentity: "アイデンティティパイロットを開始",
      finalCtaBlockchain: "ブロックチェーンインフラストラクチャをデプロイ",
      finalCtaSales: "エンタープライズ営業と話す"
    },
    de: {
      title: "Preise",
      subtitle1: "Reduzieren Sie Phishing, SIM-Swap-Betrug, OTP-Replay und Infrastruktur-Overhead",
      subtitle2: "mit wallet-signierter, Proof-of-Work-gesicherter Verifizierung.",
      subtitle3: "Gebaut für KI. Gebaut für Fintech. Gebaut für Skalierung.",
      ctaPilot: "60-Tage-Pilot starten",
      ctaEnterprise: "Enterprise kontaktieren",
      toggleIdentity: "🔐 Identity Trust Layer",
      toggleBlockchain: "⛓ Blockchain Infrastructure",
      
      planBasic: "Pteri Basic",
      planBasicDesc: "Für Entwickler am Anfang",
      planGrowth: "Identity Growth",
      planGrowthDesc: "Adressiert eine der größten Schwachstellen der Web2-Identität – OTPs & Passwörter.",
      planScale: "Identity Scale",
      planScaleDesc: "Fortgeschrittene Identität für skalierende Teams und KI-Agenten.",
      planEnterprise: "Pteri Enterprise",
      planEnterpriseDesc: "Schutz auf Enterprise-Niveau mit vollständiger Privatsphäre und unbegrenzter Infrastruktur.",
      
      joinDevelopers: "Schließen Sie sich über 1.269 Entwicklern an!",
      bestForStartups: "Bestens für Startups!",
      securityFocus: "Sicherheitsfokus!",
      mostPopular: "Am beliebtesten",
      recommended: "Empfohlen",
      perMonth: "/Monat",
      custom: "Individuell",
      mwebIncluded: "Selbstverwahrte Zahlungen enthalten",
      getStarted: "Loslegen",
      contactSales: "Vertrieb kontaktieren",
      contactUs: "Kontaktieren Sie uns",

      planBaasDeveloper: "BaaS Developer",
      planBaasDeveloperDesc: "Konzipiert für Startups und Entwickler, die leistungsstarke Litecoin-Infrastruktur-APIs benötigen.",
      planBaasPro: "BaaS Pro",
      planBaasProDesc: "Vollwertige Litecoin-Infrastruktur-APIs für wachsende Produkte.",
      planBaasEnterprise: "BaaS Enterprise",
      planBaasEnterpriseDesc: "Unbegrenzte Blockchain-Infrastruktur für Deployments auf Enterprise-Niveau.",
      web3Ready: "Web3 Ready!",
      web3SummitEntry: "Web3 Summit Entry!",
      fullNodeCluster: "Full Node Cluster!",

      basicFeatures: [
        "API-Aufrufe: 3/Sek",
        "Maximal 50 API-Aufrufe/Monat",
        "Litecoin-betriebener Explorer",
        "Kostenlose API-Tests",
        "Entwickler-Tutorials & Challenges",
        "Kostenloser Entwickler-Leitfaden",
      ],
      growthFeatures: [
        "API-Aufrufe: 200/Sek",
        "50.000 Aufrufe/Monat",
        "Erweiterter Explorer auf Litecoin",
        "Pteri Playground-Zugriff",
        "Pteri Intelligence",
        "Einfache SDK-Integration",
        "Unbegrenzte API-Key-Benutzer",
        "Selbstverwahrte Zahlungen",
      ],
      scaleFeatures: [
        "API-Aufrufe: 500/Sek",
        "200.000 Aufrufe/Monat",
        "Erweiterter Explorer auf Litecoin",
        "Pteri Playground-Zugriff",
        "Pteri Intelligence",
        "Litecoin SDK-Zugriff",
        "Priorisierter Support",
        "Einfache SDK-Integration",
        "Unbegrenzte API-Key-Benutzer",
        "Selbstverwahrte Zahlungen",
        "SDK-Zugriff",
      ],
      enterpriseFeatures: [
        "Alles in Identity Scale",
        "Unbegrenzte API-Aufrufe",
        "Benutzerdefinierte Integrationen",
        "Dedizierte Infrastruktur",
        "24/7 White-Glove-Support",
        "Benutzerdefinierte SLAs",
        "Selbstverwahrte Zahlungen",
        "On-Premise Deployment-Optionen",
      ],
      baasDeveloperFeatures: [
        "API-Aufrufe: 300/Sek",
        "100.000 Aufrufe/Monat",
        "Litecoin Explorer",
        "Basis-SDK-Zugriff",
        "Community-Support",
        "Pteri Playground-Zugriff",
        "Pteri Intelligence",
        "AI MCP Deployment",
      ],
      baasProFeatures: [
        "API-Aufrufe: 800/Sek",
        "1 Mio. Aufrufe/Monat",
        "Erweiterter Explorer",
        "Vollständige SDK-Suite",
        "Priorisierter Support",
        "Unbegrenzte API-Key-Benutzer",
        "Pteri Playground-Zugriff",
        "Pteri Intelligence",
        "Selbstverwahrte Zahlungen",
        "Node-Zugriff",
        "AI MCP Deployment",
      ],
      baasEnterpriseFeatures: [
        "Alles in BaaS Developer & Pro",
        "Unbegrenzte API-Aufrufe",
        "Dedizierter Node-Cluster",
        "Individuelle Smart Contracts",
        "White-Label Infrastructure APIs",
        "Selbstverwahrte Zahlungen",
        "SLA-Garantie",
        "Dedizierter Enterprise-Speicher",
        "24/7 Dedizierter Support",
      ],

      roiTitle: "Verwenden Sie noch SMS 2FA?",
      roiText1: "Wenn Sie",
      roiOtps: "150.000 OTPs pro Monat",
      roiAt: "zu",
      roiEach: "jeweils",
      roiSpend: "senden, geben Sie",
      roiAmount: "$6.000 pro Monat",
      roiOn: "allein für SMS aus.",
      roiIdentity: "Identity Scale",
      roiCosts: "kostet",
      roiPrice: "$3.500/Monat",
      roiWhile: "und reduziert gleichzeitig Phishing- und SIM-Swap-Risiken.",
      roiLowerCost: "Niedrigere Kosten.",
      roiLowerFraud: "Weniger Betrug.",
      roiLowerLiability: "Geringere Haftung.",
      whoTitle: "Gebaut für Teams, die sich keine Sicherheitsverletzung leisten können",
      whoFintech: "Fintech & Börsen",
      whoFintechDesc: "→ Auszahlungsbetrug reduzieren",
      whoAI: "KI-Plattformen",
      whoAIDesc: "→ KI-Identitätsdiebstahl verhindern",
      whoSaaS: "Enterprise SaaS",
      whoSaaSDesc: "→ Risiko gespeicherter Anmeldedaten reduzieren",
      whoPayment: "Zahlungsinfrastruktur",
      whoPaymentDesc: "→ Datenschutzfreundliche Abwicklung hinzufügen",
      finalTitle: "Die meisten Sicherheitssysteme warnen Sie, wenn das Feuer beginnt",
      finalSubtitle: "Diese Infrastruktur entfernt den Brennstoff.",
      finalTagline: "Sichere Identität. Sichere KI. Sichere digitale Wert.",
      finalCtaIdentity: "Identity-Pilot starten",
      finalCtaBlockchain: "Blockchain-Infrastruktur bereitstellen",
      finalCtaSales: "Mit Enterprise-Vertrieb sprechen"
    },
    es: {
      title: "Precios",
      subtitle1: "Reduzca el phishing, el fraude de intercambio de SIM, la reproducción de OTP y la sobrecarga de infraestructura",
      subtitle2: "con verificación firmada por wallet y asegurada por Proof-of-Work.",
      subtitle3: "Construido para IA. Construido para fintech. Construido para escalar.",
      ctaPilot: "Iniciar prueba de 60 días",
      ctaEnterprise: "Contactar Enterprise",
      toggleIdentity: "🔐 Identity Trust Layer",
      toggleBlockchain: "⛓ Blockchain Infrastructure",
      
      planBasic: "Pteri Basic",
      planBasicDesc: "Para desarrolladores principiantes",
      planGrowth: "Identity Growth",
      planGrowthDesc: "Aborda una de las mayores vulnerabilidades en la identidad Web2: OTP y contraseñas.",
      planScale: "Identity Scale",
      planScaleDesc: "Identidad avanzada para equipos en crecimiento e IA.",
      planEnterprise: "Pteri Enterprise",
      planEnterpriseDesc: "Seguridad de nivel empresarial con total privacidad e infraestructura ilimitada.",
      
      joinDevelopers: "¡Únete a más de 1,269 desarrolladores!",
      bestForStartups: "¡Ideal para startups!",
      securityFocus: "¡Enfoque en seguridad!",
      mostPopular: "Más popular",
      recommended: "Recomendado",
      perMonth: "/mes",
      custom: "Personalizado",
      mwebIncluded: "Pagos autocustodiados incluidos",
      getStarted: "Comenzar",
      contactSales: "Contactar Ventas",
      contactUs: "Contáctenos",

      planBaasDeveloper: "BaaS Developer",
      planBaasDeveloperDesc: "Diseñado para startups y desarrolladores que necesitan APIs de infraestructura Litecoin potentes.",
      planBaasPro: "BaaS Pro",
      planBaasProDesc: "APIs de infraestructura Litecoin de máxima potencia para productos en crecimiento.",
      planBaasEnterprise: "BaaS Enterprise",
      planBaasEnterpriseDesc: "Infraestructura blockchain ilimitada para implementaciones de nivel empresarial.",
      web3Ready: "¡Web3 Ready!",
      web3SummitEntry: "¡Web3 Summit Entry!",
      fullNodeCluster: "¡Full Node Cluster!",

      basicFeatures: [
        "Llamadas API: 3/seg",
        "Máximo de 50 llamadas API/mes",
        "Explorador basado en Litecoin",
        "Pruebas de API gratuitas",
        "Tutoriales y desafíos para desarrolladores",
        "Guía gratuita para desarrolladores",
      ],
      growthFeatures: [
        "Llamadas API: 200/seg",
        "50,000 llamadas/mes",
        "Explorador mejorado en Litecoin",
        "Acceso a Pteri Playground",
        "Pteri Intelligence",
        "Integración sencilla de SDK",
        "Usuarios de clave API ilimitados",
        "Pagos autocustodiados",
      ],
      scaleFeatures: [
        "Llamadas API: 500/seg",
        "200,000 llamadas/mes",
        "Explorador mejorado en Litecoin",
        "Acceso a Pteri Playground",
        "Pteri Intelligence",
        "Acceso al SDK de Litecoin",
        "Soporte prioritario",
        "Integración sencilla de SDK",
        "Usuarios de clave API ilimitados",
        "Pagos autocustodiados",
        "Acceso a SDK",
      ],
      enterpriseFeatures: [
        "Todo en Identity Scale",
        "Llamadas API ilimitadas",
        "Integraciones personalizadas",
        "Infraestructura dedicada",
        "Soporte White-Glove 24/7",
        "SLA personalizados",
        "Pagos autocustodiados",
        "Opciones de implementación local",
      ],
      baasDeveloperFeatures: [
        "Llamadas API: 300/seg",
        "100,000 llamadas/mes",
        "Explorador de Litecoin",
        "Acceso básico al SDK",
        "Soporte comunitario",
        "Acceso a Pteri Playground",
        "Pteri Intelligence",
        "Implementación AI MCP",
      ],
      baasProFeatures: [
        "Llamadas API: 800/seg",
        "1M de llamadas/mes",
        "Explorador mejorado",
        "Suite completa de SDK",
        "Soporte prioritario",
        "Usuarios de clave API ilimitados",
        "Acceso a Pteri Playground",
        "Pteri Intelligence",
        "Pagos autocustodiados",
        "Acceso a nodos",
        "Implementación AI MCP",
      ],
      baasEnterpriseFeatures: [
        "Todo en BaaS Developer y Pro",
        "Llamadas API ilimitadas",
        "Clúster de nodos dedicado",
        "Smart Contracts personalizados",
        "APIs de infraestructura de marca blanca",
        "Pagos autocustodiados",
        "Garantía de SLA",
        "Almacenamiento empresarial dedicado",
        "Soporte dedicado 24/7",
      ],

      roiTitle: "¿Sigue usando SMS 2FA?",
      roiText1: "Si envía",
      roiOtps: "150,000 OTP al mes",
      roiAt: "a",
      roiEach: "cada uno",
      roiSpend: "gasta",
      roiAmount: "$6,000 al mes",
      roiOn: "solo en SMS.",
      roiIdentity: "Identity Scale",
      roiCosts: "cuesta",
      roiPrice: "$3,500/mes",
      roiWhile: "mientras reduce el riesgo de phishing e intercambio de SIM.",
      roiLowerCost: "Menor costo.",
      roiLowerFraud: "Menor fraude.",
      roiLowerLiability: "Menor responsabilidad.",
      whoTitle: "Construido para equipos que no pueden permitirse una violación",
      whoFintech: "Fintech e Intercambios",
      whoFintechDesc: "→ Reducir el fraude de retiro",
      whoAI: "Plataformas de IA",
      whoAIDesc: "→ Prevenir la suplantación de identidad por IA",
      whoSaaS: "SaaS empresarial",
      whoSaaSDesc: "→ Reducir el riesgo de credenciales almacenadas",
      whoPayment: "Infraestructura de pagos",
      whoPaymentDesc: "→ Agregar liquidación lista para la privacidad",
      finalTitle: "La mayoría de los sistemas de seguridad te alertan cuando comienza el incendio",
      finalSubtitle: "Esta infraestructura retira el combustible.",
      finalTagline: "Identidad segura. IA segura. Valor digital seguro.",
      finalCtaIdentity: "Iniciar Piloto de Identidad",
      finalCtaBlockchain: "Implementar Infraestructura Blockchain",
      finalCtaSales: "Hablar con Ventas Empresariales"
    },
    ar: {
      title: "التسعير",
      subtitle1: "تقليل التصيد الاحتيالي، واحتيال تبديل SIM، وإعادة تشغيل OTP، وأعباء البنية التحتية",
      subtitle2: "مع التحقق الموقع بالمحفظة والمؤمن بإثبات العمل.",
      subtitle3: "مبني للذكاء الاصطناعي. مبني للتكنولوجيا المالية. مبني للتوسع.",
      ctaPilot: "ابدأ تجربة لمدة 60 يومًا",
      ctaEnterprise: "اتصل بقسم المؤسسات",
      toggleIdentity: "🔐 Identity Trust Layer",
      toggleBlockchain: "⛓ Blockchain Infrastructure",
      
      planBasic: "Pteri Basic",
      planBasicDesc: "للمطورين في بداية طريقهم",
      planGrowth: "Identity Growth",
      planGrowthDesc: "يعالج واحدة من أكبر نقاط الضعف في هوية Web2 - الرموز المؤقتة (OTP) وكلمات المرور.",
      planScale: "Identity Scale",
      planScaleDesc: "هوية متقدمة للفرق المتوسعة ووكلاء الذكاء الاصطناعي.",
      planEnterprise: "Pteri Enterprise",
      planEnterpriseDesc: "أمان بمستوى المؤسسات مع خصوصية كاملة وبنية تحتية غير محدودة.",
      
      joinDevelopers: "انضم إلى أكثر من 1,269 مطورًا!",
      bestForStartups: "الأفضل للشركات الناشئة!",
      securityFocus: "تركيز على الأمان!",
      mostPopular: "الأكثر شعبية",
      recommended: "موصى به",
      perMonth: "/شهر",
      custom: "مخصص",
      mwebIncluded: "مدفوعات ذاتية الحفظ مضمنة",
      getStarted: "ابدأ الآن",
      contactSales: "اتصل بالمبيعات",
      contactUs: "اتصل بنا",

      planBaasDeveloper: "BaaS Developer",
      planBaasDeveloperDesc: "مصمم للشركات الناشئة والمطورين الذين يحتاجون إلى واجهات برمجة تطبيقات بنية Litecoin قوية.",
      planBaasPro: "BaaS Pro",
      planBaasProDesc: "واجهات برمجة تطبيقات بنية Litecoin بكامل طاقتها للمنتجات المتنامية.",
      planBaasEnterprise: "BaaS Enterprise",
      planBaasEnterpriseDesc: "بنية تحتية غير محدودة للبلوكشين لعمليات النشر بمستوى المؤسسات.",
      web3Ready: "جاهز للويب 3!",
      web3SummitEntry: "دخول قمة الويب 3!",
      fullNodeCluster: "عنقود عقد كامل!",

      basicFeatures: [
        "نداءات API: 3 في الثانية",
        "بحد أقصى 50 نداء API في الشهر",
        "مستكشف مدعوم بـ Litecoin",
        "اختبار API مجاني",
        "دروس وتحديات المطورين",
        "دليل المطورين المجاني",
      ],
      growthFeatures: [
        "نداءات API: 200 في الثانية",
        "50,000 نداء في الشهر",
        "مستكشف محسن على Litecoin",
        "الوصول إلى Pteri Playground",
        "ذكاء Pteri",
        "تكامل SDK سهل",
        "مستخدمو مفاتيح API غير محدودين",
        "مدفوعات ذاتية الحفظ",
      ],
      scaleFeatures: [
        "نداءات API: 500 في الثانية",
        "200,000 نداء في الشهر",
        "مستكشف محسن على Litecoin",
        "الوصول إلى Pteri Playground",
        "ذكاء Pteri",
        "الوصول إلى Litecoin SDK",
        "دعم ذو أولوية",
        "تكامل SDK سهل",
        "مستخدمو مفاتيح API غير محدودين",
        "مدفوعات ذاتية الحفظ",
        "الوصول إلى SDK",
      ],
      enterpriseFeatures: [
        "كل شيء في Identity Scale",
        "نداءات API غير محدودة",
        "تكاملات مخصصة",
        "بنية تحتية مخصصة",
        "دعم متميز على مدار الساعة",
        "اتفاقيات مستوى خدمة مخصصة",
        "مدفوعات ذاتية الحفظ",
        "خيارات النشر في الموقع",
      ],
      baasDeveloperFeatures: [
        "نداءات API: 300 في الثانية",
        "100,000 نداء في الشهر",
        "مستكشف Litecoin",
        "وصول أساسي إلى SDK",
        "دعم المجتمع",
        "الوصول إلى Pteri Playground",
        "ذكاء Pteri",
        "نشر AI MCP",
      ],
      baasProFeatures: [
        "نداءات API: 800 في الثانية",
        "مليون نداء في الشهر",
        "مستكشف محسن",
        "مجموعة SDK كاملة",
        "دعم ذو أولوية",
        "مستخدمو مفاتيح API غير محدودين",
        "الوصول إلى Pteri Playground",
        "ذكاء Pteri",
        "مدفوعات ذاتية الحفظ",
        "الوصول إلى العقدة",
        "نشر AI MCP",
      ],
      baasEnterpriseFeatures: [
        "كل شيء في BaaS Developer و Pro",
        "نداءات API غير محدودة",
        "عنقود عقد مخصص",
        "عقود ذكية مخصصة",
        "واجهات برمجة تطبيقات البنية بعلامة تجارية بيضاء",
        "مدفوعات ذاتية الحفظ",
        "ضمان مستوى الخدمة (SLA)",
        "تخزين مخصص للمؤسسات",
        "دعم مخصص على مدار الساعة",
      ],

      roiTitle: "هل لا تزال تستخدم SMS 2FA؟",
      roiText1: "إذا كنت ترسل",
      roiOtps: "150,000 رمز مؤقت (OTP) شهريًا",
      roiAt: "بـ",
      roiEach: "لكل منها",
      roiSpend: "فإنك تنفق",
      roiAmount: "6,000 دولار شهريًا",
      roiOn: "على الرسائل القصيرة وحدها.",
      roiIdentity: "Identity Scale",
      roiCosts: "يكلف",
      roiPrice: "3,500 دولار/شهر",
      roiWhile: "مع تقليل مخاطر التصيد الاحتيالي وتبديل SIM.",
      roiLowerCost: "تكلفة أقل.",
      roiLowerFraud: "احتيال أقل.",
      roiLowerLiability: "مسؤولية أقل.",
      whoTitle: "مبني للفرق التي لا تتحمل حدوث خرق أمني",
      whoFintech: "التكنولوجيا المالية والبورصات",
      whoFintechDesc: "← تقليل احتيال السحب",
      whoAI: "منصات الذكاء الاصطناعي",
      whoAIDesc: "→ منع انتحال الشخصية بالذكاء الاصطناعي",
      whoSaaS: "SaaS للمؤسسات",
      whoSaaSDesc: "→ إزالة مخاطر أوراق الاعتماد المخزنة",
      whoPayment: "بنية تحتية للمدفوعات",
      whoPaymentDesc: "→ إضافة تسوية جاهزة للخصوصية",
      finalTitle: "معظم أنظمة الأمان تنبهك عند بدء الحريق",
      finalSubtitle: "هذه البنية التحتية تزيل الوقود.",
      finalTagline: "هوية آمنة. ذكاء اصطناعي آمن. قيمة رقمية آمنة.",
      finalCtaIdentity: "ابدأ تجربة الهوية",
      finalCtaBlockchain: "نشر البنية التحتية للبلوكشين",
      finalCtaSales: "تحدث إلى مبيعات المؤسسات"
    }
  }
  
  return translations[locale.value] || translations.en
})
</script>

