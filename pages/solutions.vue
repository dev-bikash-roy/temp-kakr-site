<template>
  <div class="solutions-page bg-black min-h-screen">
    <!-- ░░ HERO ░░ -->
    <section class="hero">
      <ClientOnly><HeroBackground /></ClientOnly>
      <div class="hero__grid"></div>
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>

      <div class="wrap">
        <div class="hero__inner text-center mx-auto flex flex-col items-center">
          <div class="hero__eyebrow sol-anim sol-anim--1">
            <span class="eyebrow-pill">
              <span class="eyebrow-dot"></span>
              PTERI Solutions
            </span>
          </div>

          <h1 class="hero__heading">
            <span class="heading-white">{{ t.heroTitle.split(' ').slice(0, -1).join(' ') }}&nbsp;</span><span class="heading-gradient">{{ t.heroTitle.split(' ').slice(-1)[0] }}</span>
          </h1>

          <p class="hero__sub">{{ t.heroSubtitle }}</p>

          <div class="hero__ctas">
            <a href="/contact?intent=pilot" class="cta-primary">
              {{ t.ctaBtn3 }}
            </a>
            <a href="https://docs.kakr.ai/" target="_blank" class="cta-ghost">
              {{ t.heroCta2 || 'View Integration Guides' }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="wrap py-12 md:py-24 text-slate-300 relative z-10">

      <!-- Main Box -->
      <div class="bg-[#090d14] border border-white/5 rounded-[2rem] p-3 sm:p-8 md:p-12 shadow-2xl relative">

        <!-- Top Row: Problem & Regulatory -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 sm:mb-16">
          <!-- The Problem -->
          <div class="space-y-6">
            <div class="border-b border-white/10 pb-4">
              <h3 class="text-emerald-400 font-bold text-2xl sm:text-4xl mb-2">{{ t.problemTitle }}</h3>
              <p class="text-white/70 text-sm border-l-2 border-emerald-500 pl-3 py-1">{{ t.problemIntro }}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
              <div class="bg-[#0d1117] border border-white/5 rounded-xl p-4">
                <p class="text-base sm:text-lg font-bold text-white mb-2">{{ t.prob1Title }}</p>
                <p class="text-xs text-slate-400 leading-relaxed">{{ t.prob1Desc }}</p>
              </div>
              <div class="bg-[#0d1117] border border-white/5 rounded-xl p-4">
                <p class="text-base sm:text-lg font-bold text-white mb-2">{{ t.prob2Title }}</p>
                <p class="text-xs text-slate-400 leading-relaxed">{{ t.prob2Desc }}</p>
              </div>
              <div class="bg-[#0d1117] border border-white/5 rounded-xl p-4">
                <p class="text-base sm:text-lg font-bold text-white mb-2">{{ t.prob3Title }}</p>
                <p class="text-xs text-slate-400 leading-relaxed">{{ t.prob3Desc }}</p>
              </div>
              <div class="bg-[#0d1117] border border-white/5 rounded-xl p-4">
                <p class="text-base sm:text-lg font-bold text-white mb-2">{{ t.prob4Title }}</p>
                <p class="text-xs text-slate-400 leading-relaxed">{{ t.prob4Desc }}</p>
              </div>
            </div>
          </div>

          <!-- Regulatory Pressure -->
          <div class="bg-[#0d1117] border border-white/5 rounded-2xl p-5 sm:p-8">
            <h3 class="text-emerald-400 font-bold text-2xl sm:text-4xl mb-4">{{ t.regTitle }}</h3>
            <p class="text-white/70 text-sm mb-6 border-l-2 border-emerald-500 pl-3">{{ t.regIntro }}</p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3" data-aos="fade-up" data-aos-delay="0">
                <i class="las la-exclamation-circle text-emerald-400 mt-0.5 text-lg"></i>
                <div class="text-sm">
                  <span class="text-white font-semibold block sm:inline">{{ t.reg1Label }}</span>
                  <span class="text-slate-400 sm:ml-1">{{ t.reg1Desc }}</span>
                </div>
              </li>
              <li class="flex items-start gap-3" data-aos="fade-up" data-aos-delay="60">
                <i class="las la-exclamation-circle text-emerald-400 mt-0.5 text-lg"></i>
                <div class="text-sm">
                  <span class="text-white font-semibold block sm:inline">{{ t.reg2Label }}</span>
                  <span class="text-slate-400 sm:ml-1">{{ t.reg2Desc }}</span>
                </div>
              </li>
              <li class="flex items-start gap-3" data-aos="fade-up" data-aos-delay="120">
                <i class="las la-exclamation-circle text-emerald-400 mt-0.5 text-lg"></i>
                <div class="text-sm">
                  <span class="text-white font-semibold block sm:inline">{{ t.reg3Label }}</span>
                  <span class="text-slate-400 sm:ml-1">{{ t.reg3Desc }}</span>
                </div>
              </li>
              <li class="flex items-start gap-3 mt-5 pt-5 border-t border-emerald-500/10" data-aos="fade-up" data-aos-delay="180">
                <i class="las la-shield-alt text-emerald-400 mt-0.5 text-lg"></i>
                <div class="text-sm">
                  <span class="text-white font-semibold block sm:inline">{{ t.reg4Label }}</span>
                  <span class="text-slate-400 sm:ml-1">{{ t.reg4Desc }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- PTERI Solutions -->
        <div id="pteri-solutions" class="mb-8 sm:mb-16 scroll-mt-24">
          <h3 class="text-white font-bold text-2xl sm:text-4xl mb-6 sm:mb-8 border-b border-white/10 pb-4" data-aos="fade-up">{{ t.solutionsTitle }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

            <!-- MFA Enhancement -->
            <div class="bg-[#0d1117] border border-white/5 rounded-2xl p-7 hover:border-emerald-500/30 hover:bg-[#11161d] transition-all group" data-aos="fade-up" data-aos-delay="100">
              <div class="flex items-start gap-4 mb-5">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <i class="las la-fingerprint text-emerald-400 text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-white font-bold text-lg leading-tight">{{ t.mfaTitle }}</h4>
                  <p class="text-xs text-slate-500 mt-1">{{ t.mfaProblem }}</p>
                </div>
              </div>
              <div class="bg-black/40 border border-white/5 rounded-xl p-4 mb-4">
                <p class="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-2">PTERI Solution</p>
                <p class="text-sm text-slate-200 leading-relaxed">{{ t.mfaSolution }}</p>
              </div>
              <ul class="space-y-2">
                <li v-for="item in t.mfaPoints" :key="item" class="flex items-center gap-2 text-xs text-white/70">
                  <i class="las la-check-circle text-emerald-500 text-base shrink-0"></i> {{ item }}
                </li>
              </ul>
            </div>

            <!-- AI Agents -->
            <div class="bg-[#0d1117] border border-white/5 rounded-2xl p-7 hover:border-emerald-500/30 hover:bg-[#11161d] transition-all group" data-aos="fade-up" data-aos-delay="160">
              <div class="flex items-start gap-4 mb-5">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <i class="las la-robot text-emerald-400 text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-white font-bold text-lg leading-tight">{{ t.aiTitle }}</h4>
                  <p class="text-xs text-slate-500 mt-1">{{ t.aiProblem }}</p>
                </div>
              </div>
              <div class="bg-black/40 border border-white/5 rounded-xl p-4 mb-4">
                <p class="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-2">PTERI Solution</p>
                <p class="text-sm text-slate-200 leading-relaxed">{{ t.aiSolution }}</p>
              </div>
              <ul class="space-y-2">
                <li v-for="item in t.aiPoints" :key="item" class="flex items-center gap-2 text-xs text-white/70">
                  <i class="las la-check-circle text-emerald-500 text-base shrink-0"></i> {{ item }}
                </li>
              </ul>
            </div>

            <!-- Enterprise + Developer Kit -->
            <div class="grid grid-rows-2 gap-5">
              <div class="bg-[#0d1117] border border-white/5 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-[#11161d] transition-all">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <i class="las la-city text-emerald-400 text-xl"></i>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-white font-bold text-base leading-tight mb-1">{{ t.enterpriseTitle }}</h4>
                    <p class="text-xs text-white/70 leading-relaxed">{{ t.enterpriseDesc }}</p>
                  </div>
                </div>
              </div>
              <div class="bg-[#0d1117] border border-white/5 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-[#11161d] transition-all">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <i class="las la-code text-emerald-400 text-xl"></i>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-white font-bold text-base leading-tight mb-1">{{ t.devKitTitle }}</h4>
                    <p class="text-xs text-white/70 leading-relaxed">{{ t.devKitDesc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Privacy-First Payments -->
            <div class="bg-[#0d1117] border border-white/5 rounded-2xl p-7 hover:border-emerald-500/30 hover:bg-[#11161d] transition-all group" data-aos="fade-up" data-aos-delay="220">
              <div class="flex items-start gap-4 mb-5">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <i class="las la-coins text-emerald-400 text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-white font-bold text-lg leading-tight">{{ t.paymentsTitle }}</h4>
                  <p class="text-xs text-slate-500 mt-1">{{ t.paymentsProblem }}</p>
                </div>
              </div>
              <div class="bg-black/40 border border-white/5 rounded-xl p-4 mb-4">
                <p class="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-2">PTERI Solution</p>
                <p class="text-sm text-slate-200 leading-relaxed">{{ t.paymentsSolution }}</p>
              </div>
              <ul class="space-y-2">
                <li v-for="item in t.paymentsPoints" :key="item" class="flex items-center gap-2 text-xs text-white/70">
                  <i class="las la-check-circle text-emerald-500 text-base shrink-0"></i> {{ item }}
                </li>
              </ul>
            </div>

          </div>
        </div>

        <!-- Real-World Use Cases -->
        <div id="use-cases" class="mb-16 scroll-mt-24">
          <h3 class="text-white font-bold text-3xl sm:text-4xl mb-8 border-b border-white/10 pb-4" data-aos="fade-up">{{ t.useCasesTitle }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div v-for="(uc, i) in t.useCases" :key="i"
              class="bg-[#0d1117] border border-white/5 rounded-2xl p-6 hover:border-emerald-500/20 hover:bg-[#11161d] transition-all"
              :class="uc.span"
              data-aos="fade-up"
              :data-aos-delay="(i + 1) * 60">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-emerald-500/10 text-emerald-500">
                <i :class="`las ${uc.icon} text-xl`"></i>
              </div>
              <h5 class="text-white font-bold text-base mb-2">{{ uc.title }}</h5>
              <p class="text-sm text-white/70 leading-relaxed">{{ uc.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div id="contact" class="mb-8 mt-4 scroll-mt-24" data-aos="fade-up">
          <div class="text-center mb-8">
            <p class="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">{{ t.contactLabel }}</p>
            <h2 class="text-2xl sm:text-4xl font-bold text-white mb-4">{{ t.contactTitle }}</h2>
            <p class="text-white/60 text-base max-w-2xl mx-auto">{{ t.contactSubtitle }}</p>
          </div>
          <HubSpotForm />
        </div>

        <!-- Footer CTA -->
        <div class="bg-[#090d14] border border-white/10 shadow-2xl rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center gap-10 relative overflow-hidden text-center" data-aos="fade-up">
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
          </div>
          <div class="w-full max-w-5xl relative z-10">
            <h3 class="text-white font-extrabold text-lg sm:text-3xl lg:text-[44px] tracking-tight" style="line-height: 1.4;">
              {{ t.ctaHeadline }}
            </h3>
          </div>
          <div class="w-full flex flex-row flex-wrap items-center justify-center gap-4 relative z-10 mt-2">
            <a href="https://pteri.org/Register" target="_blank" class="btn-primary">
              {{ t.ctaBtn1 }}
            </a>
            <a href="https://pteri.kakr.org" target="_blank" class="px-8 py-4 bg-transparent hover:bg-emerald-500/5 border border-white/20 hover:border-emerald-500/60 text-white hover:text-emerald-400 font-bold rounded-2xl text-sm transition-all whitespace-nowrap">
              {{ t.ctaBtn2 }}
            </a>
            <a href="/contact" class="px-8 py-4 bg-transparent hover:bg-emerald-500/5 border border-white/20 hover:border-emerald-500/60 text-white hover:text-emerald-400 font-bold rounded-2xl text-sm transition-all whitespace-nowrap">
              {{ t.ctaBtn3 }}
            </a>
            <a href="/partnerships" class="px-8 py-4 bg-transparent hover:bg-emerald-500/5 border border-white/20 hover:border-emerald-500/60 text-white hover:text-emerald-400 font-bold rounded-2xl text-sm transition-all whitespace-nowrap">
              {{ t.ctaBtn4 }}
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()
const { setSEO } = useSEO()
setSEO({
  title: 'PTERI Solutions | Protect People, AI Agents, and Enterprise Systems',
  description: 'Add passwordless MFA, runtime authorization, and verifiable approvals to the systems and workflows your organization already operates.',
  image: '/solutions-og.png',
})

const t = computed(() => {
  const all: Record<string, any> = {
    en: {
      heroTitle: 'Protect Access Across People, Agents, and Enterprise Systems.',
      heroSubtitle: 'Add passwordless MFA, runtime authorization, and verifiable approvals to the systems and workflows your organization already operates.',
      problemTitle: 'The Problem', problemIntro: 'Access has outgrown password-era controls:',
      prob1Title: 'Credential theft and phishing', prob1Desc: 'Passwords, tokens, and shared secrets can be stolen, phished, or replayed.',
      prob2Title: 'Unverified agent authority', prob2Desc: 'An agent may hold access without proof that its specific action was approved.',
      prob3Title: 'Excessive standing permissions', prob3Desc: 'Long-lived credentials often grant more access than the task requires.',
      prob4Title: 'Incomplete accountability', prob4Desc: 'Logs may show what happened without proving who authorized it.',
      regTitle: 'Regulatory Pressure and Emerging Risks',
      regIntro: 'Authentication standards are moving away from OTP and SMS:',
      reg1Label: 'Regulatory direction:', reg1Desc: 'Regulators in multiple markets are moving away from OTP-only authentication toward stronger multi-factor methods.',
      reg2Label: 'SMS and email OTP:', reg2Desc: 'Increasingly treated as weak factors, because their delivery channels can be intercepted or redirected.',
      reg3Label: 'Published standards:', reg3Desc: 'Emerging regulatory guidance in multiple jurisdictions emphasizes phishing-resistant, cryptographic-grade authentication.',
      reg4Label: 'Additional threats:', reg4Desc: 'eSIM/SIM-swap fraud and AI agents operating without verifiable scoped authority.',
      solutionsTitle: 'PTERI Solutions',
      mfaTitle: 'Passwordless MFA', mfaProblem: 'Legacy OTP-based MFA is vulnerable to phishing and regulatory non-compliance.',
      mfaSolution: 'Add passwordless cryptographic authentication to existing workforce access, applications, and sensitive workflows.',
      mfaPoints: ['Phishing-resistant verification', 'Works alongside existing identity providers', 'Designed to support regulated authentication and authorization requirements'],
      paymentsTitle: 'Payments and Approvals with Litecoin', paymentsProblem: 'Traditional payments lack privacy and expose users to custody risks.',
      paymentsSolution: 'Customer-controlled Litecoin payments with cryptographic settlement.',
      paymentsPoints: ['True peer-to-peer with customer-controlled keys', 'Customer-controlled payment credentials', 'Sovereign control over funds'],
      aiTitle: 'AI-Agent Authorization', aiProblem: 'Agents may have access without proof that a user or organization approved their specific action.',
      aiSolution: 'Give every AI agent a verifiable identity and narrowly scoped authority that can be managed, verified, and revoked.',
      aiPoints: ['Verifiable agent identity', 'Delegated, time-bound authority', 'Runtime policy enforcement'],
      enterpriseTitle: 'Existing-System Protection', enterpriseDesc: 'Add passwordless access and action-level authorization to existing applications, APIs, and infrastructure without replacing them.',
      devKitTitle: 'Developer and MCP Tools', devKitDesc: 'Full SDKs + MCP integrations. Start with one sensitive workflow and expand over time.',
      useCasesTitle: 'Use Cases',
      useCases: [
        { title: 'Workforce Authentication', desc: 'Add passwordless MFA for employees, administrators, contractors, and customers.', icon: 'la-piggy-bank', iconBg: 'bg-emerald-500/10 text-emerald-500', span: '' },
        { title: 'AI-Agent Workflows', desc: 'Control which tools, APIs, data, and actions each agent may use with verifiable delegated authority.', icon: 'la-project-diagram', iconBg: 'bg-purple-500/10 text-purple-500', span: '' },
        { title: 'Privileged Operations', desc: 'Require explicit approval for administrative changes, production access, and credential management.', icon: 'la-exchange-alt', iconBg: 'bg-blue-500/10 text-blue-500', span: '' },
        { title: 'Sensitive Data Access', desc: 'Reverify identity and authority before information is viewed, exported, modified, or shared.', icon: 'la-shield-alt', iconBg: 'bg-pink-500/10 text-pink-500', span: 'lg:col-span-1 md:col-span-2' },
        { title: 'IoT and Device Security', desc: 'Protect connected devices against credential theft and unauthorized access with on-device cryptographic proof.', icon: 'la-sim-card', iconBg: 'bg-orange-500/10 text-orange-500', span: 'lg:col-span-1 md:col-span-2' },
      ],
      contactLabel: 'Send Us a Message', contactTitle: 'Get in Touch', contactSubtitle: 'Tell us about your use case and we will match you with the right solution.',
      ctaHeadline: 'Start with one application, one agent, or one sensitive workflow. Add passwordless authentication and runtime authorization without replacing your existing infrastructure.',
      ctaBtn1: 'Start Building Free', ctaBtn2: 'Open Web App', ctaBtn3: 'Request a Pilot', ctaBtn4: 'Partner With Us', heroCta2: 'View Integration Guides',
    },
    de: {
      heroTitle: 'Die Welt hat ein Vertrauensproblem.',
      heroSubtitle: 'PTERI liefert deterministischen kryptografischen Beweis, echte Privatsphaere und nahtlose Integration fuer die Agentische Aera.',
      problemTitle: 'Das Problem', problemIntro: 'Zugriff ist ueber die Kontrollen der Passwort-Aera hinausgewachsen:',
      prob1Title: 'Diebstahl von Zugangsdaten und Phishing', prob1Desc: 'Passwoerter, Tokens und geteilte Geheimnisse koennen gestohlen, abgephisht oder wiedereingespielt werden.',
      prob2Title: 'Unbestaetigte Agenten-Befugnis', prob2Desc: 'Ein Agent kann Zugriff besitzen, ohne Nachweis, dass seine konkrete Aktion genehmigt wurde.',
      prob3Title: 'Uebermaessige Dauerberechtigungen', prob3Desc: 'Langlebige Zugangsdaten gewaehren oft mehr Zugriff, als die Aufgabe erfordert.',
      prob4Title: 'Unvollstaendige Nachvollziehbarkeit', prob4Desc: 'Protokolle zeigen, was geschehen ist, ohne zu beweisen, wer es autorisiert hat.',
      regTitle: 'Regulatorischer Druck und neue Risiken',
      regIntro: 'Authentifizierungsstandards bewegen sich weg von OTP und SMS:',
      reg1Label: 'Regulatorische Richtung:', reg1Desc: 'Aufsichtsbehoerden in mehreren Maerkten bewegen sich weg von reiner OTP-Authentifizierung hin zu staerkeren Multi-Faktor-Verfahren.',
      reg2Label: 'SMS- und E-Mail-OTP:', reg2Desc: 'Werden zunehmend als schwache Faktoren betrachtet, da ihre Uebertragungswege abgefangen oder umgeleitet werden koennen.',
      reg3Label: 'Veroeffentlichte Standards:', reg3Desc: 'Neue regulatorische Vorgaben in mehreren Rechtsordnungen betonen phishing-resistente, kryptografische Authentifizierung.',
      reg4Label: 'Weitere Bedrohungen:', reg4Desc: 'eSIM/SIM-Swap-Betrug und KI-Agenten, die ohne nachweisbar begrenzte Befugnis handeln.',
      solutionsTitle: 'PTERI Loesungen',
      mfaTitle: 'MFA-Verbesserung', mfaProblem: 'Legacy OTP-basierte MFA ist anfaellig fuer Phishing.',
      mfaSolution: 'Kryptografische On-Device-Signaturen ueber bestehende MFA/OTP-Flows legen.',
      mfaPoints: ['Entwickelt zur Unterstuetzung regulierter Authentifizierungs- und Autorisierungsanforderungen', 'Phishing-resistent und zukunftssicher', 'Hybrid-OTP-Unterstuetzung'],
      paymentsTitle: 'Datenschutz-Zahlungen mit Litecoin', paymentsProblem: 'Traditionellen Zahlungen fehlt Privatsphaere.',
      paymentsSolution: 'Self-Custodial Litecoin-Zahlungen mit kryptografischer Abwicklung.',
      paymentsPoints: ['Echtes Peer-to-Peer ohne Verwahrung', 'Kundenseitig kontrollierte Zahlungsdaten', 'Souveraene Kontrolle ueber Gelder'],
      aiTitle: 'KI-Agenten und sichere A2A-Interaktionen', aiProblem: 'Unsichere Agenten riskieren Identitaetsdiebstahl.',
      aiSolution: 'KI-Agenten verifizierbare kryptografische Autoritaet geben.',
      aiPoints: ['Deterministischer Beweis zur Aktionszeit', 'ZK-verbesserter Datenschutz', 'Betrieben von PTERI Intelligence und MCP'],
      enterpriseTitle: 'Enterprise-Bereitstellung', enterpriseDesc: 'Google Cloud-Infrastruktur mit Verfuegbarkeits-SLAs, pruefbereit und global skalierbar.',
      devKitTitle: 'Entwickler-Kit und MCP', devKitDesc: 'Vollstaendige SDKs + KI-gestuetzte MCP-Tools.',
      useCasesTitle: 'Reale Anwendungsfaelle',
      useCases: [
        { title: 'Banking und Finanzen', desc: 'Sichere Kundenanmeldungen und Unterstuetzung regulierter Authentifizierungsanforderungen im Finanzsektor.', icon: 'la-piggy-bank', iconBg: 'bg-emerald-500/10 text-emerald-500', span: '' },
        { title: 'Web2 zu Web3 Sicherheitstransformation', desc: 'Web2-Konten in Web3-Sicherheit durch PTERI verwandeln.', icon: 'la-exchange-alt', iconBg: 'bg-blue-500/10 text-blue-500', span: '' },
        { title: 'eSIM und Mobile Sicherheit', desc: 'Benutzer vor SIM-Swap und eSIM-Hijacking schuetzen.', icon: 'la-sim-card', iconBg: 'bg-orange-500/10 text-orange-500', span: '' },
        { title: 'Sichere A2A-Interaktionen', desc: 'Sichere autonome KI-Agentenkommunikation ermoeglichen.', icon: 'la-project-diagram', iconBg: 'bg-purple-500/10 text-purple-500', span: 'lg:col-span-1 md:col-span-2' },
        { title: 'Universelle Sicherheitsschicht', desc: 'PTERI auf IoT, APIs, Workflows und mehr anwenden.', icon: 'la-shield-alt', iconBg: 'bg-pink-500/10 text-pink-500', span: 'lg:col-span-1 md:col-span-2' },
      ],
      contactLabel: 'Senden Sie uns eine Nachricht', contactTitle: 'Kontakt aufnehmen', contactSubtitle: 'Erzaehlen Sie uns von Ihrem Anwendungsfall.',
      ctaHeadline: 'Bereit, fragile Annahmen durch deterministisches kryptografisches Vertrauen zu ersetzen?',
      ctaBtn1: 'Kostenlosen API-Schluessel erhalten', ctaBtn2: 'PTERI Wallet erkunden', ctaBtn3: 'Pilotprojekt anfragen', ctaBtn4: 'Partner werden',
    },
    es: {
      heroTitle: 'El Mundo Tiene un Problema de Confianza.',
      heroSubtitle: 'PTERI entrega prueba criptografica determinista, privacidad real e integracion perfecta para la Era Agentica.',
      problemTitle: 'El Problema', problemIntro: 'El acceso ha superado los controles de la era de las contrasenas:',
      prob1Title: 'Robo de credenciales y phishing', prob1Desc: 'Las contrasenas, los tokens y los secretos compartidos pueden ser robados, obtenidos por phishing o reutilizados.',
      prob2Title: 'Autoridad de agente no verificada', prob2Desc: 'Un agente puede tener acceso sin prueba de que su accion especifica fue aprobada.',
      prob3Title: 'Permisos permanentes excesivos', prob3Desc: 'Las credenciales de larga duracion suelen otorgar mas acceso del que requiere la tarea.',
      prob4Title: 'Responsabilidad incompleta', prob4Desc: 'Los registros pueden mostrar lo que ocurrio sin probar quien lo autorizo.',
      regTitle: 'Presion Regulatoria y Riesgos Emergentes',
      regIntro: 'Los estandares de autenticacion se estan alejando de OTP y SMS:',
      reg1Label: 'Direccion regulatoria:', reg1Desc: 'Los reguladores de varios mercados se estan alejando de la autenticacion basada solo en OTP hacia metodos multifactor mas fuertes.',
      reg2Label: 'OTP por SMS y correo electronico:', reg2Desc: 'Cada vez mas se consideran factores debiles, porque sus canales de entrega pueden ser interceptados o redirigidos.',
      reg3Label: 'Estandares publicados:', reg3Desc: 'La orientacion regulatoria emergente en varias jurisdicciones enfatiza la autenticacion criptografica resistente al phishing.',
      reg4Label: 'Amenazas adicionales:', reg4Desc: 'Fraude eSIM/SIM-swap y agentes de IA que operan sin autoridad verificable y limitada.',
      solutionsTitle: 'Soluciones PTERI',
      mfaTitle: 'Mejora de MFA', mfaProblem: 'El MFA basado en OTP es vulnerable al phishing.',
      mfaSolution: 'Anadir firmas criptograficas en dispositivo sobre flujos MFA/OTP existentes.',
      mfaPoints: ['Diseñado para respaldar requisitos regulados de autenticación y autorización', 'Resistente al phishing', 'Soporte OTP hibrido'],
      paymentsTitle: 'Pagos con Privacidad con Litecoin', paymentsProblem: 'Los pagos tradicionales carecen de privacidad.',
      paymentsSolution: 'Pagos Litecoin de autocustodia con liquidacion criptografica.',
      paymentsPoints: ['Peer-to-peer real sin custodia', 'Credenciales de pago controladas por el cliente', 'Control soberano de fondos'],
      aiTitle: 'Agentes IA e Interacciones A2A Seguras', aiProblem: 'Los agentes no seguros arriesgan suplantacion y robo de datos.',
      aiSolution: 'Dar a los agentes IA autoridad criptografica verificable.',
      aiPoints: ['Prueba determinista en tiempo de accion', 'Privacidad y delegacion ZK', 'Impulsado por PTERI Intelligence y MCP'],
      enterpriseTitle: 'Despliegue Empresarial', enterpriseDesc: 'Infraestructura Google Cloud con SLAs de disponibilidad, lista para auditoria.',
      devKitTitle: 'Kit de Desarrollador y MCP', devKitDesc: 'SDKs completos + herramientas MCP con IA.',
      useCasesTitle: 'Casos de Uso Reales',
      useCases: [
        { title: 'Banca y Finanzas', desc: 'Inicios de sesion seguros y respaldo a requisitos regulados de autenticacion en el sector financiero.', icon: 'la-piggy-bank', iconBg: 'bg-emerald-500/10 text-emerald-500', span: '' },
        { title: 'Transformacion Web2 a Web3', desc: 'Convertir cuentas Web2 en seguridad de nivel Web3 con PTERI.', icon: 'la-exchange-alt', iconBg: 'bg-blue-500/10 text-blue-500', span: '' },
        { title: 'Seguridad eSIM y Movil', desc: 'Proteger a los usuarios contra SIM-swap y secuestro de eSIM.', icon: 'la-sim-card', iconBg: 'bg-orange-500/10 text-orange-500', span: '' },
        { title: 'Interacciones A2A Seguras', desc: 'Habilitar comunicacion segura de agentes IA autonomos.', icon: 'la-project-diagram', iconBg: 'bg-purple-500/10 text-purple-500', span: 'lg:col-span-1 md:col-span-2' },
        { title: 'Capa de Seguridad Universal', desc: 'Aplicar PTERI a IoT, APIs, flujos de trabajo y mas.', icon: 'la-shield-alt', iconBg: 'bg-pink-500/10 text-pink-500', span: 'lg:col-span-1 md:col-span-2' },
      ],
      contactLabel: 'Envienos un Mensaje', contactTitle: 'Ponerse en Contacto', contactSubtitle: 'Cuentenos su caso de uso y lo conectaremos con la solucion correcta.',
      ctaHeadline: 'Listo para reemplazar suposiciones fragiles con confianza criptografica determinista?',
      ctaBtn1: 'Obtener API Key Gratis', ctaBtn2: 'Explorar PTERI Wallet', ctaBtn3: 'Solicitar un piloto', ctaBtn4: 'Asociarse con Nosotros',
    },
    ja: {
      heroTitle: '世界には信頼の問題があります。',
      heroSubtitle: 'PTERIはエージェント時代のための決定論的暗号証明、真のプライバシー、シームレスな統合を提供します。',
      problemTitle: '問題', problemIntro: 'アクセスはパスワード時代の管理手法では追いつかなくなっています：',
      prob1Title: '認証情報の盗難とフィッシング', prob1Desc: 'パスワード、トークン、共有シークレットは盗まれ、フィッシングされ、再利用される可能性があります。',
      prob2Title: '検証されていないエージェント権限', prob2Desc: 'エージェントは、その具体的な操作が承認された証明なしにアクセス権を持つ場合があります。',
      prob3Title: '過剰な常時権限', prob3Desc: '長期間有効な認証情報は、タスクに必要な範囲を超えたアクセスを与えがちです。',
      prob4Title: '不完全な説明責任', prob4Desc: 'ログは何が起きたかを示しても、誰が承認したかを証明できないことがあります。',
      regTitle: '規制圧力と新たなリスク',
      regIntro: '認証標準はOTPとSMSから離れつつあります：',
      reg1Label: '規制の方向性：', reg1Desc: '複数の市場の規制当局は、OTPのみの認証からより強力な多要素認証へと移行しつつあります。',
      reg2Label: 'SMSおよびメールOTP：', reg2Desc: '配信経路が傍受または転送される可能性があるため、弱い要素とみなされることが増えています。',
      reg3Label: '公開されている標準：', reg3Desc: '複数の法域における新たな規制指針は、フィッシング耐性のある暗号認証を重視しています。',
      reg4Label: '追加の脅威：', reg4Desc: 'eSIM/SIMスワップ詐欺と、検証可能な限定権限なしに動作するAIエージェント。',
      solutionsTitle: 'PTERIソリューション',
      mfaTitle: 'MFA強化', mfaProblem: 'レガシーOTPベースのMFAはフィッシングに脆弱です。',
      mfaSolution: '既存のMFA/OTPフローの上に暗号署名を追加します。',
      mfaPoints: ['規制対応の認証・認可要件を支援する設計', 'フィッシング耐性と将来性', 'ハイブリッドOTPサポート'],
      paymentsTitle: 'Litecoinによるプライバシー優先決済', paymentsProblem: '従来の決済はプライバシーが欠如しています。',
      paymentsSolution: '暗号決済を備えたセルフカストディLitecoin決済。',
      paymentsPoints: ['ゼロカストディの真のP2P', '顧客管理の決済情報', '資金の主権的管理'],
      aiTitle: 'AIエージェントと安全なA2Aインタラクション', aiProblem: '安全でないエージェントはなりすましやデータ盗難のリスクがあります。',
      aiSolution: 'AIエージェントに検証可能な暗号権限を付与します。',
      aiPoints: ['アクション時の決定論的証明', 'ZK強化プライバシーと委任', 'PTERI IntelligenceとMCPで動作'],
      enterpriseTitle: 'エンタープライズ展開', enterpriseDesc: 'Google Cloudインフラ、稼働率SLA、監査対応、グローバルスケール。',
      devKitTitle: '開発者キットとMCP', devKitDesc: '完全なSDK + AI搭載MCPツール。',
      useCasesTitle: '実世界のユースケース',
      useCases: [
        { title: 'バンキングと金融', desc: '安全なログインと、金融分野における規制対応の認証要件の支援。', icon: 'la-piggy-bank', iconBg: 'bg-emerald-500/10 text-emerald-500', span: '' },
        { title: 'Web2からWeb3へのセキュリティ変革', desc: 'PTERIでWeb2アカウントをWeb3レベルのセキュリティに変換。', icon: 'la-exchange-alt', iconBg: 'bg-blue-500/10 text-blue-500', span: '' },
        { title: 'eSIMとモバイルセキュリティ', desc: 'SIMスワップとeSIMハイジャックからユーザーを保護。', icon: 'la-sim-card', iconBg: 'bg-orange-500/10 text-orange-500', span: '' },
        { title: '安全なA2Aインタラクション', desc: '自律AIエージェントの安全な通信を実現。', icon: 'la-project-diagram', iconBg: 'bg-purple-500/10 text-purple-500', span: 'lg:col-span-1 md:col-span-2' },
        { title: 'ユニバーサルセキュリティレイヤー', desc: 'IoT、API、ワークフローなどにPTERIを適用。', icon: 'la-shield-alt', iconBg: 'bg-pink-500/10 text-pink-500', span: 'lg:col-span-1 md:col-span-2' },
      ],
      contactLabel: 'メッセージを送る', contactTitle: 'お問い合わせ', contactSubtitle: 'ユースケースをお聞かせください。最適なソリューションをご提案します。',
      ctaHeadline: '脆弱な仮定を決定論的暗号信頼に置き換え、今日の最も厳しい規制を満たす準備はできていますか？',
      ctaBtn1: '無料APIキーを取得', ctaBtn2: 'PTERI Walletを探索', ctaBtn3: 'パイロットを申し込む', ctaBtn4: 'パートナーになる',
    },
    ar: {
      heroTitle: 'العالم لديه مشكلة ثقة.',
      heroSubtitle: 'يقدم PTERI اثباتا تشفيريا حتميا وخصوصية حقيقية وتكاملا سلسا لعصر الوكلاء.',
      problemTitle: 'المشكلة', problemIntro: 'الوصول تجاوز ضوابط عصر كلمات المرور:',
      prob1Title: 'سرقة بيانات الاعتماد والتصيد', prob1Desc: 'يمكن سرقة كلمات المرور والرموز والاسرار المشتركة او الحصول عليها بالتصيد او اعادة استخدامها.',
      prob2Title: 'سلطة وكيل غير موثقة', prob2Desc: 'قد يمتلك الوكيل صلاحية الوصول دون اثبات ان اجراءه المحدد قد تم اعتماده.',
      prob3Title: 'صلاحيات دائمة مفرطة', prob3Desc: 'غالبا ما تمنح بيانات الاعتماد طويلة الاجل وصولا اوسع مما تتطلبه المهمة.',
      prob4Title: 'مساءلة غير مكتملة', prob4Desc: 'قد تظهر السجلات ما حدث دون اثبات من الذي منح التصريح.',
      regTitle: 'الضغط التنظيمي والمخاطر الناشئة',
      regIntro: 'معايير المصادقة تتجه بعيدا عن OTP و SMS:',
      reg1Label: 'الاتجاه التنظيمي:', reg1Desc: 'تتجه الجهات التنظيمية في اسواق متعددة بعيدا عن المصادقة القائمة على OTP فقط نحو اساليب متعددة العوامل اقوى.',
      reg2Label: 'OTP عبر SMS والبريد الالكتروني:', reg2Desc: 'يعد بشكل متزايد عاملا ضعيفا لان قنوات التوصيل قد تتعرض للاعتراض او التحويل.',
      reg3Label: 'المعايير المنشورة:', reg3Desc: 'التوجهات التنظيمية الناشئة في عدة ولايات قضائية تركز على مصادقة تشفيرية مقاومة للتصيد.',
      reg4Label: 'تهديدات اضافية:', reg4Desc: 'احتيال eSIM/SIM-swap ووكلاء الذكاء الاصطناعي الذين يعملون دون سلطة محددة قابلة للتحقق.',
      solutionsTitle: 'حلول PTERI',
      mfaTitle: 'تحسين MFA', mfaProblem: 'MFA القائم على OTP القديم عرضة للتصيد.',
      mfaSolution: 'اضف توقيعات تشفيرية على الجهاز فوق تدفقات MFA/OTP الحالية.',
      mfaPoints: ['مصمَّم لدعم متطلبات المصادقة والتفويض المنظمة', 'مقاوم للتصيد ومستقبلي', 'دعم OTP الهجين'],
      paymentsTitle: 'مدفوعات تعطي الاولوية للخصوصية مع Litecoin', paymentsProblem: 'المدفوعات التقليدية تفتقر الى الخصوصية.',
      paymentsSolution: 'مدفوعات Litecoin ذاتية الحضانة مع تسوية تشفيرية.',
      paymentsPoints: ['نظير الى نظير حقيقي بدون حضانة', 'بيانات اعتماد دفع يتحكم بها العميل', 'سيطرة سيادية على الاموال'],
      aiTitle: 'وكلاء الذكاء الاصطناعي وتفاعلات A2A الامنة', aiProblem: 'الوكلاء غير الامنين يخاطرون بانتحال الشخصية وسرقة البيانات.',
      aiSolution: 'امنح وكلاء الذكاء الاصطناعي سلطة تشفيرية قابلة للتحقق.',
      aiPoints: ['اثبات حتمي في وقت الاجراء', 'خصوصية وتفويض ZK', 'مدعوم بـ PTERI Intelligence وMCP'],
      enterpriseTitle: 'النشر المؤسسي', enterpriseDesc: 'بنية تحتية Google Cloud مع اتفاقيات مستوى خدمة للتوافر، جاهزة للتدقيق وقابلة للتوسع عالميا.',
      devKitTitle: 'مجموعة ادوات المطور وMCP', devKitDesc: 'SDKs كاملة + ادوات MCP مدعومة بالذكاء الاصطناعي.',
      useCasesTitle: 'حالات الاستخدام الواقعية',
      useCases: [
        { title: 'البنوك والمالية', desc: 'تسجيلات دخول امنة ودعم متطلبات المصادقة المنظمة في القطاع المالي.', icon: 'la-piggy-bank', iconBg: 'bg-emerald-500/10 text-emerald-500', span: '' },
        { title: 'تحويل Web2 الى Web3', desc: 'حول حسابات Web2 الى امان مستوى Web3 باستخدام PTERI.', icon: 'la-exchange-alt', iconBg: 'bg-blue-500/10 text-blue-500', span: '' },
        { title: 'امان eSIM والجوال', desc: 'حماية المستخدمين من SIM-swap واختطاف eSIM.', icon: 'la-sim-card', iconBg: 'bg-orange-500/10 text-orange-500', span: '' },
        { title: 'تفاعلات A2A الامنة', desc: 'تمكين التواصل الامن لوكلاء الذكاء الاصطناعي المستقلين.', icon: 'la-project-diagram', iconBg: 'bg-purple-500/10 text-purple-500', span: 'lg:col-span-1 md:col-span-2' },
        { title: 'طبقة الامان الشاملة', desc: 'طبق PTERI على IoT وAPIs وسير العمل والمزيد.', icon: 'la-shield-alt', iconBg: 'bg-pink-500/10 text-pink-500', span: 'lg:col-span-1 md:col-span-2' },
      ],
      contactLabel: 'ارسل لنا رسالة', contactTitle: 'تواصل معنا', contactSubtitle: 'اخبرنا عن حالة استخدامك وسنطابقك مع الحل المناسب.',
      ctaHeadline: 'هل انت مستعد لاستبدال الافتراضات الهشة بثقة تشفيرية حتمية وتلبية اصعب اللوائح اليوم',
      ctaBtn1: 'احصل على مفتاح API مجاني', ctaBtn2: 'استكشف PTERI Wallet', ctaBtn3: 'اطلب مشروعاً تجريبياً', ctaBtn4: 'كن شريكا معنا',
    },
  }
  return all[locale.value] || all.en
})
</script>

<style scoped>
/* ── Solutions hero load-in animations ── */
@keyframes sol-rise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.sol-anim { opacity: 0; animation: sol-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
.sol-anim--1 { animation-delay: 0.05s; }
.sol-anim--2 { animation-delay: 0.18s; }
.sol-anim--3 { animation-delay: 0.32s; }
.sol-anim--4 { animation-delay: 0.48s; }

.solutions-page {}
.font-inter { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
.heading-white { color: #ffffff; }
.heading-gradient {
  background: linear-gradient(135deg, #34d399 0%, #10b981 60%, #6ee7b7 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

/* ── Base ──────────────────────────────────────── */
.platform-page {
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  font-family: 'Inter', -apple-system, sans-serif;
  overflow-x: hidden;
}
.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
@media (max-width: 640px) {
  .wrap {
    padding: 0 0.75rem;
  }
}

/* ── Buttons ───────────────────────────────────────────── */
.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  font-size: 0.9375rem;
  font-weight: 700;
  color: #000000;
  border-radius: 9999px;
  border: 1px solid rgba(52, 211, 153, 0.5);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 0 16px rgba(52, 211, 153, 0.3);
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
}
.cta-primary:hover {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 0 28px rgba(52, 211, 153, 0.5);
  transform: translateY(-1px);
}

.cta-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  font-size: 0.9375rem;
  font-weight: 700;
  color: #ffffff;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
}
.cta-ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.35);
}

/* ── Eyebrow pill ──────────────────────────────────────── */
.eyebrow-pill {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.4rem 1rem; border-radius: 999px;
  border: 1px solid rgba(52,211,153,0.25);
  background: rgba(52,211,153,0.06);
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: #34d399;
}
.eyebrow-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #34d399;
  animation: pulse-dot 2s infinite;
  box-shadow: 0 0 8px rgba(52,211,153,0.8);
}

/* ── HERO ──────────────────────────────────────────────── */
.hero {
  position: relative;
  padding: 9rem 0 7rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  overflow: hidden;
}
@media (max-width: 640px) {
  .hero { 
    padding: 6rem 0 4rem; 
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
  .hero__sub { font-size: 1.05rem; }
}
.hero__ambient {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16,185,129,0.15) 0%, transparent 65%),
    radial-gradient(ellipse 50% 40% at 10% 80%, rgba(52,211,153,0.06) 0%, transparent 60%);
  pointer-events: none;
}
.hero__grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  pointer-events: none;
}
.hero__orb {
  position: absolute; border-radius: 50%; pointer-events: none;
  filter: blur(70px);
  will-change: transform;
}
.hero__orb--1 { width: 600px; height: 600px; top: -150px; right: -200px; background: rgba(16,185,129,0.12); }
.hero__orb--2 { width: 350px; height: 350px; bottom: -80px; left: 5%; background: rgba(52,211,153,0.07); }

.hero__eyebrow { margin-bottom: 2rem; }
.hero__heading {
  font-size: var(--hero-title-size);
  font-weight: var(--hero-title-weight); line-height: var(--hero-title-line-height); letter-spacing: var(--hero-title-letter-spacing);
  margin: 0 0 1.75rem;
}
.heading-gradient {
  background: linear-gradient(135deg, #34d399 0%, #10b981 60%, #6ee7b7 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  filter: drop-shadow(0 0 30px rgba(52,211,153,0.4));
}
.hero__sub {
  font-size: var(--hero-desc-size); color: #d1fae5; line-height: 1.8; max-width: 640px; margin: 0 auto 2.25rem;
  opacity: 0.75;
}
.hero__ctas { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.75); }
}
</style>


