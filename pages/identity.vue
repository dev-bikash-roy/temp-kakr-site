<template>
  <div class="bg-black overflow-x-hidden">
    
    <!-- 1. HERO -->
    <section class="page-hero">
      <div class="absolute inset-0 pointer-events-none z-0" style="background-image: url('/hero-bg.svg'); background-size: cover; background-position: top center; opacity: 0.15;"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex justify-end items-center mb-16">
          <div class="px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-white bg-white/5 tracking-wide uppercase">
            {{ content.hero.badge }}
          </div>
        </div>

        <div class="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Deterministic Identity for<br class="hidden md:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Humans & AI</span>
          </h1>
          <p class="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mt-8">
            {{ content.hero.subheadline }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button @click="showDownloadModal = true" class="btn-primary">
              {{ content.hero.ctaWallet }}
              <ArrowRightIcon class="w-5 h-5" />
            </button>
            <a href="#demo" class="btn-ghost">
              {{ content.hero.ctaDemo }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 1.5 IDENTITY WITHOUT GUESSING (NEW) -->
    <section class="section-py bg-black border-b border-white/8 ">
       <div class="container-custom text-center" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold text-white  mb-6">{{ content.identityWithoutGuessing.title }}</h2>
          <div class="max-w-4xl mx-auto space-y-6 text-xl text-white/70  leading-relaxed">
             <p>{{ content.identityWithoutGuessing.p1 }}</p>
             <p>{{ content.identityWithoutGuessing.p2 }}</p>
             <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100 mt-8">
                <p class="text-2xl font-bold text-emerald-900">{{ content.identityWithoutGuessing.punchline }}</p>
             </div>
          </div>
       </div>
    </section>

    <!-- 2. REFRAME THE PROBLEM -->
    <section class="section-py bg-black relative">
       <div class="container-custom">
         <div class="max-w-5xl mx-auto text-center" data-aos="fade-up">
           <p class="text-xl font-bold text-red-500 mb-6 uppercase tracking-widest">{{ content.problem.label }}</p>
           <h2 class="text-4xl md:text-6xl font-bold text-white  mb-10 leading-tight">{{ content.problem.title }}</h2>
           
           <div class="flex flex-col items-center">
               <div class="max-w-3xl mx-auto mb-16 text-center">
                   <p class="text-xl text-white/70  mb-10 leading-relaxed">
                      {{ content.problem.description }}
                   </p>
                   <ul class="flex flex-wrap justify-center gap-x-8 gap-y-4 text-left">
                       <li v-for="item in content.problem.bullets" :key="item" class="flex items-center gap-3 text-white/90  text-lg font-medium">
                           <XCircleIcon class="w-6 h-6 text-red-500 flex-shrink-0" />
                           <span>{{ item }}</span>
                       </li>
                   </ul>
               </div>

               <!-- D1 Diagram (Full Width) -->
               <div class="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/8  bg-black mb-12" data-aos="zoom-in">
                  <div class="p-4 sm:p-8">
                     <img 
                       src="/legacy-systems-vs-pteri.webp" 
                       alt="Existing Enterprise Systems vs PTERI"
                       class="w-full h-auto rounded-xl"
                     />
                  </div>
               </div>

               <p class="text-2xl font-bold text-white dark:text-red-200 border-l-4 border-red-500 pl-6 py-2 bg-red-50 dark:bg-red-900/30 rounded-r-xl inline-block max-w-2xl">
                   {{ content.problem.punchline }}
               </p>
           </div>
         </div>
       </div>
    </section>

    <!-- NEW: IDENTITY USE CASES -->
    <section class="section-py bg-black border-t border-white/8 ">
       <div class="container-custom">
          <div class="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 class="text-3xl font-bold text-white  mb-12">{{ content.useCases.title }}</h2>
            <div class="grid sm:grid-cols-2 gap-6 text-left">
              <div v-for="(item, index) in content.useCases.items" :key="index" class="bg-black p-6 rounded-xl border border-white/10  shadow-sm flex items-start gap-4">
                 <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckBadgeIcon class="w-5 h-5 text-emerald-600" />
                 </div>
                 <span class="text-lg text-white/90  font-medium">{{ item }}</span>
              </div>
            </div>
          </div>
       </div>
    </section>



    <!-- 4. PTERI IDENTITY MODEL -->
    <section class="section-py bg-black relative">
       <div class="container-custom">
         <div class="max-w-5xl mx-auto" data-aos="fade-up">
           <div class="text-center mb-20">
               <h2 class="text-4xl md:text-5xl font-bold text-white  mb-6">{{ content.model.title }}</h2>
               <p class="text-2xl text-white/70  max-w-3xl mx-auto font-light">{{ content.model.subtitle }}</p>
           </div>

           <div class="max-w-3xl mx-auto mb-16">
                <div class="bg-black p-10 rounded-3xl shadow-sm border border-emerald-100">
                   <h3 class="text-2xl font-bold text-white  mb-8 text-center">{{ content.model.listTitle }}</h3>
                   <ul class="space-y-5">
                       <li v-for="prop in content.model.properties" :key="prop" class="flex items-center gap-4 text-lg text-white/90 ">
                           <CheckBadgeIcon class="w-6 h-6 text-emerald-500 flex-shrink-0" />
                           {{ prop }}
                       </li>
                   </ul>
                </div>
           </div>

           <!-- D2 Diagram (Full Width) -->
           <div class="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10  bg-black p-4 sm:p-8 mb-16" data-aos="zoom-in">
              <img 
                src="/octa-vs-pteri.webp" 
                alt="Risk Scores vs Proof" 
                class="w-full h-auto rounded-xl"
              />
           </div>

           <p class="text-emerald-800 font-bold text-2xl text-center max-w-3xl mx-auto bg-emerald-50 py-4 px-8 rounded-full border border-emerald-100">
               {{ content.model.punchline }}
           </p>

         </div>
       </div>
    </section>

    <!-- 5. HOW IDENTITY WORKS (Flow + Demo) -->
    <section id="demo" class="section-py bg-black relative border-t border-white/8 ">
        <div class="container-custom">
            <div class="max-w-5xl mx-auto" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-white  mb-16 text-center">{{ content.howItWorks.title }}</h2>
                
                <!-- Numbered Explanation -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 text-center">
                    <div v-for="(step, index) in content.howItWorks.steps" :key="index" class="p-8 bg-black rounded-3xl relative group hover:bg-black hover:shadow-xl transition-all border border-white/8  flex flex-col items-center">
                        <div class="w-12 h-12 bg-white/8 text-white/70  rounded-full flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            {{ index + 1 }}
                        </div>
                        <p class="text-white  font-medium leading-relaxed text-lg">{{ step }}</p>
                    </div>
                </div>

                <!-- Storylane Demo -->
                <h3 class="text-center text-xl text-white/50  mb-8 font-semibold uppercase tracking-wider">{{ content.howItWorks.demoLabel }}</h3>
                <div class="rounded-3xl overflow-hidden shadow-2xl border border-white/10  bg-black" style="position: relative; padding-bottom: calc(50.625% + 25px); height: 0; width: 100%;">
                 <iframe 
                   src="https://app.storylane.io/demo/xecpivgcdcoe?embed=inline_overlay" 
                   name="sl-embed" 
                   allow="fullscreen" 
                   allowfullscreen 
                   style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
                 </iframe>
               </div>

            </div>
        </div>
    </section>

    <!-- 6. AI AGENTIC IDENTITY -->
    <section class="section-py bg-slate-950 bg-black text-white relative overflow-hidden">
        <!-- Glows -->
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full"></div>
        
        <div class="container-custom relative z-10">
            <div class="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
                <span class="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 font-bold text-sm tracking-wider uppercase mb-8 border border-purple-500/30">New Paradigm</span>
                <h2 class="text-4xl md:text-6xl font-bold mb-10">{{ content.ai.title }}</h2>
                <p class="text-xl md:text-2xl text-white/80 leading-relaxed mb-16 font-light">
                    {{ content.ai.description }}
                </p>
                
                <div class="bg-black/5 p-10 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm max-w-3xl mx-auto text-left">
                    <div class="text-center mb-10">
                        <h3 class="text-xl font-bold text-purple-400 mb-2 uppercase tracking-widest">{{ content.ai.conceptTitle }}</h3>
                        <p class="text-3xl md:text-4xl font-bold text-white">Cryptographic Power of Attorney</p>
                    </div>
                   
                    <ul class="grid sm:grid-cols-2 gap-6">
                        <li v-for="item in content.ai.features" :key="item" class="flex items-start gap-3 text-lg text-white/90 ">
                            <CpuChipIcon class="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. YOUR WALLET IS YOUR IDENTITY -->
    <section class="section-py bg-black relative">
        <div class="container-custom">
            <div class="max-w-5xl mx-auto text-center" data-aos="fade-up">
                 <h2 class="text-4xl md:text-5xl font-bold text-white  mb-8">{{ content.wallet.title }}</h2>
                 <p class="text-2xl text-white/70  mb-12 font-light italic">"{{ content.wallet.metaphor }}"</p>
                 
                 <div class="max-w-2xl mx-auto text-left mb-16">
                     <ul class="space-y-5">
                         <li v-for="pt in content.wallet.points" :key="pt" class="flex items-start gap-4 p-4 bg-black rounded-xl">
                             <DevicePhoneMobileIcon class="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                             <span class="text-white/90  text-lg font-medium">{{ pt }}</span>
                         </li>
                     </ul>
                 </div>
                 
                 <!-- Reuse D5 Image (Full Width) -->
                 <div class="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-black p-4 sm:p-8" data-aos="zoom-in">
                    <img 
                      src="/D5_ iOT Device Identity.png" 
                      alt="Device Identity" 
                      class="w-full h-auto rounded-xl"
                    />
                 </div>
            </div>
        </div>
    </section>

    <!-- 8. BUILT FOR REAL WORLD -->
    <section class="section-py bg-black border-t border-white/10 ">
        <div class="container-custom text-center max-w-4xl mx-auto" data-aos="fade-up">
            
            <!-- Security Boundaries -->
            <div class="mb-20">
               <h2 class="text-3xl font-bold text-white  mb-8">{{ content.securityBoundaries.title }}</h2>
               <p class="text-xl text-white/70  mb-8">{{ content.securityBoundaries.subtitle }}</p>
               <div class="bg-red-50 p-8 rounded-2xl border border-red-100 text-left">
                  <h3 class="text-lg font-bold text-red-800 mb-4 uppercase tracking-wider">Out of Scope Risks:</h3>
                  <ul class="space-y-3 mb-6">
                     <li v-for="risk in content.securityBoundaries.risks" :key="risk" class="flex items-start gap-3 text-red-900">
                        <XCircleIcon class="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        {{ risk }}
                     </li>
                  </ul>
                  <p class="text-lg font-medium text-white  border-t border-red-200 pt-6">
                     {{ content.securityBoundaries.guarantee }}
                  </p>
               </div>
            </div>

            <!-- Built For Existing -->
            <h2 class="text-3xl font-bold text-white  mb-12">{{ content.legacy.title }}</h2>
            <div class="grid sm:grid-cols-2 gap-8 text-left">
                <div v-for="item in content.legacy.points" :key="item.head" class="bg-black p-8 rounded-2xl shadow-sm border border-white/10  hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold text-white  mb-3">{{ item.head }}</h3>
                    <p class="text-white/70  leading-relaxed">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </section>


    <!-- 9. IDENTITY FAQS -->
    <section class="section-py bg-black border-t border-white/10 ">
       <div class="container-custom">
          <div class="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 class="text-3xl font-bold text-white  mb-8 text-center">{{ content.faqs.title }}</h2>
            <div class="space-y-4">
              <div v-for="(faq, i) in content.faqs.items" :key="i" class="border border-white/10  rounded-xl overflow-hidden">
                <button class="w-full flex items-center justify-between p-4 bg-black hover:bg-white/5 bg-black text-left" @click="toggleFaq(i)">
                  <span class="font-bold text-white ">{{ faq.q }}</span>
                  <span class="text-emerald-500 text-xl font-bold ml-4">{{ activeFaq === i ? '−' : '+' }}</span>
                </button>
                <div v-show="activeFaq === i" class="p-4 bg-black text-white/70  border-t border-white/10 ">
                  {{ faq.a }}
                </div>
              </div>
            </div>
            
            <!-- Works with Existing Systems One-Liner -->
             <p class="text-center text-white/50  mt-12 font-medium bg-black py-3 px-6 rounded-full inline-block mx-auto border border-white/10 ">
               {{ content.systemsNote }}
             </p>

              <!-- About Kakr Labs -->
              <div class="mt-20 text-center bg-black text-white p-10 rounded-3xl" data-aos="fade-up">
                 <h2 class="text-2xl font-bold mb-4">{{ content.about.title }}</h2>
                 <p class="text-lg text-white/80 mb-4 max-w-2xl mx-auto">{{ content.about.description }}</p>
                 <p class="text-emerald-400 font-medium">{{ content.about.focus }}</p>
              </div>
          </div>
       </div>
    </section>

    <!-- 9. CTA -->
    <section class="section-py bg-black text-center relative overflow-hidden">
        <!-- Glow -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="container-custom relative z-10">
            <h2 class="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">{{ content.cta.headline }}</h2>
            <p class="text-xl text-white/60 mb-12 max-w-2xl mx-auto">{{ content.cta.subline }}</p>
            
            <div class="flex flex-col sm:flex-row gap-5 justify-center">
                <button @click="showDownloadModal = true" class="btn-primary">
                    {{ content.cta.btnWallet }}
                </button>
                <a href="https://pteri.org/Register" class="btn-ghost">
                    {{ content.cta.btnPlatform }}
                </a>
            </div>
        </div>
    </section>

    <!-- DOWNLOAD MODAL -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
        <div v-if="showDownloadModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            <!-- Backdrop -->
            <div @click="showDownloadModal = false" class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            
            <!-- Modal Content -->
            <div class="bg-black rounded-3xl shadow-2xl p-8 sm:p-12 relative w-full max-w-lg z-10 text-center border border-white/8 ">
                <button @click="showDownloadModal = false" class="absolute top-4 right-4 p-2 text-white/60 hover:text-white/70  rounded-full hover:bg-black transition-colors">
                    <XMarkIcon class="w-6 h-6" />
                </button>

                <img src="/pteri-logo.webp" alt="PTERI" class="w-20 h-auto mx-auto mb-6" />

                <h3 class="text-2xl font-bold text-white  mb-3">Download PTERI App</h3>
                <p class="text-white/50  mb-8">Select your platform to get started.</p>

                <div class="flex flex-col gap-4 items-center">
                    <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="hover:scale-105 transition-transform">
                        <img src="/ios.png" alt="Download on the App Store" class="h-14 w-auto" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="hover:scale-105 transition-transform">
                        <img src="/playstore.png" alt="Get it on Google Play" class="h-14 w-auto" />
                    </a>
                </div>
            </div>
        </div>
    </Transition>

  </div>
</template>

<script setup>
import { computed, watchEffect, ref } from 'vue'

import { useSEO } from '~/composables/useSEO'
import { 
  XCircleIcon, 
  CheckBadgeIcon, 
  CpuChipIcon, 
  DevicePhoneMobileIcon,
  XMarkIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'

const { locale } = useI18n()
const showDownloadModal = ref(false)

// FAQ State
const activeFaq = ref(null)
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const content = computed(() => {
  const translations = {
    en: {
      hero: {
        headline: 'Deterministic Identity for Humans and AI',
        subheadline: 'Identity Without Guessing. Most digital identity systems do not verify identity - they approximate it.',
        ctaWallet: 'Download PTERI App',
        ctaDemo: 'See the Demo'
      },
      identityWithoutGuessing: {
        title: 'Identity Without Guessing',
        p1: 'Most digital identity systems rely on indirect signals such as passwords, inbox access, OTPs, device fingerprints, and behavioral patterns to guess whether a request should be trusted. These signals are reusable, interceptable, and increasingly unreliable.',
        p2: 'PTERI replaces this approach with deterministic identity. In PTERI, identity is not inferred from stored credentials or past behavior.',
        punchline: 'It is proven cryptographically at the moment of action.'
      },
      problem: {
        label: 'The Structural Failure',
        title: 'Why Identity Keeps Failing',
        description: 'Identity failures are not edge cases. They are structural. As automation increases, these systems fail more frequently and more catastrophically.',
        bullets: [
            'Passwords are phished, reused, or leaked',
            'OTPs are intercepted or replayed',
            'Recovery flows introduce implicit backdoors',
            'Central identity stores become high-value breach targets',
            'Behavioral scoring produces false positives and false negatives'
        ],
        punchline: 'PTERI addresses these failure modes by replacing inference with verifiable proof of authority.'
      },
      model: {
        title: 'Identity as Cryptographic Authority',
        subtitle: 'In PTERI, identity is defined by the ability to cryptographically prove authority at request time.',
        listTitle: 'Defining Properties',
        properties: [
            'Identity is bound to cryptographic keys',
            'Keys are generated and held by the authority holder',
            'No shared secrets are exchanged',
            'Proof is stateless and independently verifiable',
            'No confidence scores or reputation systems are used'
        ],
        punchline: 'Every identity decision resolves deterministically to allow or deny. There is no guessing involved.'
      },
      howItWorks: {
        title: 'How Identity Verification Works',
        steps: [
            'A service issues a cryptographic challenge',
            'The PTERI App signs the challenge locally',
            'The verification layer validates the signature',
            'Policy and scope are enforced',
            'Access is granted or denied'
        ],
        demoLabel: 'See PTERI Identity in Action'
      },
      wallet: { // Human Identity
        title: 'Human Identity',
        metaphor: 'Humans are the root authority holders in PTERI.',
        points: [
            'Authentication does not depend on email providers or SMS gateways',
            'No passwords or third-party identity services',
            'Authority is proven directly by the user’s cryptographic keys',
            'Replace OTP-based two-factor authentication',
            'Remove centralized recovery systems'
        ]
      },
      ai: {
        title: 'AI Identity & Delegation',
        description: 'AI systems introduce a fundamental security problem: they do not forget credentials, they do not log out, and they do not understand social boundaries. Granting AI systems static credentials effectively grants permanent authority.',
        conceptTitle: 'Introducing',
        features: [
            'Delegation is Explicitly granted',
            'Scoped to specific actions',
            'Time-bound by default',
            'Cryptographically enforced',
            'Instantly revocable',
            'AI agents never hold root keys'
        ]
      },
      useCases: {
        title: 'Identity Use Cases',
        items: [
          'Passwordless login for existing web and enterprise applications',
          'Replacing SMS and TOTP-based two-factor authentication',
          'Identity for internal tools, admin panels, and privileged access',
          'Service and system identity without static secrets',
          'Controlled identity for AI agents and automated workflows'
        ]
      },
      securityBoundaries: {
        title: 'Security Boundaries and Non-Claims',
        subtitle: 'PTERI enforces identity cryptographically, not behaviorally.',
        risks: [
           'PTERI does not protect compromised devices',
           'PTERI does not mitigate user-approved malware',
           'PTERI does not address physical coercion'
        ],
        guarantee: 'What PTERI guarantees is deterministic identity verification wherever cryptographic proof can be validated.'
      },
      legacy: { // Built for Existing Systems
        title: 'Built for Existing Systems',
        points: [
            { head: 'Incremental Adoption', desc: 'Integrate deterministic identity alongside existing authentication systems.' },
            { head: 'Phase Out Shared Secrets', desc: 'Gradually replace passwords and secrets over time.' },
            { head: 'No Rewrite Required', desc: 'Full application rewrites are not required.' },
            { head: 'Enterprise Ready', desc: 'Practical for enterprises and complex production environments.' }
        ]
      },
      faqs: {
        title: 'Identity FAQs',
        items: [
          { q: 'Is this decentralized identity?', a: 'PTERI focuses on authority and verification rather than labels. Identity is defined by cryptographic proof, not ideology.' },
          { q: 'Does this replace passwords and 2FA?', a: 'Yes. PTERI replaces passwords and OTP-based authentication without introducing shared secrets.' },
          { q: 'Can AI act without permission?', a: 'No. All AI authority is delegated, scoped, and revocable.' },
          { q: 'Is identity stored in a database?', a: 'No. Identity is verified at request time and is not stored as a reusable secret.' }
        ]
      },
      about: {
        title: 'About Kakr Labs',
        description: 'Kakr Labs builds cryptographic infrastructure that replaces guess-based security with deterministic authority.',
        focus: 'The company focuses on identity, authentication, authorization, payments, and AI-safe delegation using a single, self-custodial authority model.'
      },
      cta: {
        headline: 'Take control of your identity.',
        subline: 'No passwords. No shared secrets. No guesswork.',
        btnWallet: 'Download PTERI App',
        btnPlatform: 'Explore the PTERI Platform'
      },
      seo: {
        title: 'Deterministic Identity & Authentication | Kakr Labs',
        description: 'PTERI replaces passwords and OTPs with self-custodial cryptographic identity for humans, enterprises, and AI agents, ensuring secure authority at scale.',
        image: '/identity-page-og.png'
      },
      systemsNote: 'PTERI identity is designed for incremental adoption.'
    },
    de: {
      hero: {
        headline: 'Identität ohne Rätselraten',
        subheadline: 'Die meisten Identitätssysteme versuchen, mithilfe indirekter Signale zu beantworten, wer Sie sind: Passwörter, OTPs, Geräte, IPs und Verhaltenshistorie. Diese Signale werden im großen Stil kopiert, abgefangen oder gefälscht. PTERI behandelt Identität anders.',
        ctaWallet: 'PTERI App herunterladen',
        ctaDemo: 'Demo ansehen'
      },
      problem: {
        label: 'Warum herkömmliche Identität scheitert',
        title: 'Herkömmliche Identitätssysteme scheitern, weil sie auf Rückschlüssen statt auf Beweisen basieren.',
        description: 'Passwörter können gestohlen werden. OTPs können abgefangen werden. Wiederherstellungsabläufe führen Hintertüren ein. Zentrale Datenbanken werden zu Angriffszielen.',
        bullets: [
            'Passwörter können durch Phishing gestohlen werden',
            'OTPs können abgefangen oder wiederholt werden',
            'Wiederherstellungsabläufe führen Hintertüren ein',
            'Zentrale Datenbanken werden zu Angriffszielen',
            'Wenn Systeme skalieren, verstärken sich diese Schwachstellen'
        ],
        punchline: 'Wenn Autorität bewiesen werden kann, wird Zugriff gewährt. Wenn nicht, wird der Zugriff verweigert.'
      },
      useCases: {
        title: 'Anwendungsfälle für Identität',
        items: [
          'Passwortlose Anmeldung für bestehende Anwendungen',
          'Ersatz für SMS- und TOTP-basierte Zwei-Faktor-Authentifizierung',
          'Dienst- und Systemidentität für interne Tools',
          'KI-Agenten, die unter kontrollierter Autorität arbeiten'
        ]
      },
      plumbing: {
        title: 'Die Leitungen sind kaputt',
        p1: 'Herkömmliche Identitätssysteme sind voller Lecks – Passwort-Resets, Wiederherstellungsabläufe, gemeinsame Geheimnisse, Admin-Überschreibungen. Jeder Patch fügt Komplexität und Risiko hinzu.',
        p2: 'Sie brauchen keine besseren Patches. Sie brauchen neue Rohre.'
      },
      model: {
        title: 'Identität als Autorität',
        subtitle: 'In PTERI wird Identität durch kryptografische Schlüssel definiert, die vom Benutzer gehalten werden.',
        listTitle: 'Der PTERI Standard',
        properties: [
            'Schlüssel werden generiert und bleiben auf dem Gerät des Benutzers',
            'Identität wird durch signierte Herausforderungen verifiziert',
            'Es werden keine gemeinsamen Geheimnisse ausgetauscht',
            'Die Verifizierung erfolgt zum Zeitpunkt der Anfrage',
            'Alle Identitätsentscheidungen werden deterministisch aufgelöst, um zu erlauben oder zu verweigern'
        ],
        punchline: 'Die Identitätsverifizierung erfolgt zum Zeitpunkt der Anfrage.'
      },
      howItWorks: {
        title: 'Wie Identitätsverifizierung funktioniert',
        steps: [
            'Ein Dienst gibt eine kryptografische Herausforderung aus',
            'Die PTERI App signiert die Herausforderung lokal',
            'Die Verifizierungsschicht prüft die Signatur',
            'Zugriff wird gewährt oder verweigert'
        ],
        demoLabel: 'PTERI Identity in Aktion sehen'
      },
      ai: {
        title: 'KI-Identität & Delegation',
        description: 'KI-Systeme führen ein grundlegendes Sicherheitsproblem ein: Sie vergessen keine Anmeldeinformationen und verstehen keine sozialen Grenzen. Die Gewährung statischer Anmeldeinformationen an KI-Systeme gewährt effektiv dauerhafte Autorität.',
        conceptTitle: 'Einführung',
        features: [
            'Delegation ist explizit und bereichsbezogen',
            'Autorität ist zeitgebunden',
            'Kryptografisch durchgesetzt',
            'Sofort widerruflich',
            'Agenten besitzen niemals Root-Schlüssel'
        ]
      },
      wallet: {
        title: 'Menschliche Identität',
        metaphor: 'Menschen sind die Inhaber der Root-Autorität in PTERI.',
        points: [
            'Die Authentifizierung hängt nicht von E-Mail-Adressen ab',
            'Keine Passwörter oder Drittanbieter-Identitätsanbieter',
            'Die Autorität wird direkt durch das Gerät des Benutzers bewiesen',
            'Ersetzt Passwörter und OTP-basierte 2FA',
            'Unterbricht bestehende Systeme nicht'
        ]
      },
      legacy: {
        title: 'Für die reale Welt gebaut',
        points: [
            { head: 'Kein Neuschreiben erforderlich', desc: 'Integriert sich in bestehende OIDC- und Anmeldeabläufe.' },
            { head: 'Unsichtbare Sicherheit', desc: 'Ersetzt Passwörter und OTPs hinter den Kulissen.' },
            { head: 'Enterprise Ready', desc: 'Funktioniert für interne Mitarbeiter und Verbraucher-Authentifizierung.' },
            { head: 'Standardbasiert', desc: 'Kompatibel mit Standards für verifizierbare Anmeldeinformationen.' }
        ]
      },
      cta: {
        headline: 'Übernehmen Sie die Kontrolle über Ihre Identität.',
        subline: 'Keine Passwörter. Keine gemeinsamen Geheimnisse. Kein Rätselraten.',
        btnWallet: 'PTERI App herunterladen',
        btnPlatform: 'PTERI-Plattform erkunden'
      },
      seo: {
        title: 'Deterministische Identität & Authentifizierung | Kakr Labs',
        description: 'PTERI ersetzt Passwörter und OTPs durch selbstverwaltete kryptografische Identität für Menschen, Unternehmen und KI-Agenten.',
        image: '/identity-page-og.png'
      },
      faqs: {
        title: 'Identitäts-FAQs',
        items: [
          { q: 'Ist das dezentrale Identität?', a: 'PTERI konzentriert sich auf Autorität und Verifizierung, nicht auf Etiketten.' },
          { q: 'Kann KI ohne Erlaubnis handeln?', a: 'Nein. Alle KI-Autorität ist delegiert und widerruflich.' },
          { q: 'Ersetzt dies Passwörter und 2FA?', a: 'Ja, ohne gemeinsame Geheimnisse einzuführen.' }
        ]
      },
      systemsNote: 'PTERI arbeitet zusammen mit Ihrer bestehenden OIDC- und IAM-Infrastruktur – kein Austausch erforderlich.'
    },
    es: {
      hero: {
        headline: 'Identidad Sin Adivinanzas',
        subheadline: 'La mayoría de los sistemas de identidad intentan responder quién eres usando señales indirectas: contraseñas, OTPs, dispositivos, IPs e historial de comportamiento. Estas señales son copiadas, interceptadas o falsificadas a escala. PTERI trata la identidad de manera diferente.',
        ctaWallet: 'Descargar PTERI App',
        ctaDemo: 'Ver la Demo'
      },
      problem: {
        label: 'Por qué falla la identidad heredada',
        title: 'Los sistemas de identidad heredados fallan porque dependen de la inferencia en lugar de la prueba.',
        description: 'Las contraseñas pueden ser pescadas. Los OTPs pueden ser interceptados. Los flujos de recuperación introducen puertas traseras. Las bases de datos centrales se convierten en objetivos de violación.',
        bullets: [
            'Las contraseñas pueden ser pescadas',
            'Los OTPs pueden ser interceptados o reproducidos',
            'Los flujos de recuperación introducen puertas traseras',
            'Las bases de datos centrales se convierten en objetivos de violación',
            'A medida que los sistemas escalan, estas debilidades se agravan'
        ],
        punchline: 'Si la autoridad puede ser probada, se concede el acceso. Si no puede, se deniega el acceso.'
      },
      useCases: {
        title: 'Casos de Uso de Identidad',
        items: [
          'Inicio de sesión sin contraseña para aplicaciones existentes',
          'Reemplazo de autenticación de dos factores basada en SMS y TOTP',
          'Identidad de servicio y sistema para herramientas internas',
          'Agentes de IA operando bajo autoridad controlada'
        ]
      },
      plumbing: {
        title: 'La tubería está rota',
        p1: 'Los sistemas de identidad heredados están llenos de fugas: restablecimientos de contraseñas, flujos de recuperación, secretos compartidos, anulaciones de administración. Cada parche añade complejidad y riesgo.',
        p2: 'No necesitas mejores parches. Necesitas tuberías nuevas.'
      },
      model: {
        title: 'Identidad como Autoridad',
        subtitle: 'En PTERI, la identidad se define mediante claves criptográficas en posesión del usuario.',
        listTitle: 'El Estándar PTERI',
        properties: [
            'Las claves se generan y permanecen en el dispositivo del usuario',
            'La identidad se verifica a través de desafíos firmados',
            'No se intercambian secretos compartidos',
            'La verificación ocurre en el momento de la solicitud',
            'Todas las decisiones de identidad se resuelven de manera determinista para permitir o denegar'
        ],
        punchline: 'La verificación de identidad ocurre en el momento de la solicitud.'
      },
      howItWorks: {
        title: 'Cómo Funciona la Verificación de Identidad',
        steps: [
            'Un servicio emite un desafío criptográfico',
            'La PTERI App firma el desafío localmente',
            'La capa de verificación comprueba la firma',
            'Se concede o deniega el acceso'
        ],
        demoLabel: 'Ver Identidad PTERI en Acción'
      },
      ai: {
        title: 'Identidad de IA y Delegación',
        description: 'Los sistemas de IA introducen un problema de seguridad fundamental: no olvidan las credenciales y no entienden los límites sociales. Otorgar credenciales estáticas a los sistemas de IA otorga efectivamente autoridad permanente.',
        conceptTitle: 'Introduciendo',
        features: [
            'La delegación es Explicita y de Alcance',
            'La autoridad está limitada por tiempo',
            'Criptográficamente aplicada',
            'Instantáneamente revocable',
            'Los agentes nunca poseen claves raíz'
        ]
      },
      wallet: {
        title: 'Identidad Humana',
        metaphor: 'Los humanos son los titulares de la autoridad raíz en PTERI.',
        points: [
            'La autenticación no depende de direcciones de correo electrónico',
            'Sin contraseñas o proveedores de identidad de terceros',
            'La autoridad se prueba directamente por el dispositivo del usuario',
            'Reemplaza contraseñas y 2FA basados en OTP',
            'No rompe los sistemas existentes'
        ]
      },
      legacy: {
        title: 'Construido para el Mundo Real',
        points: [
            { head: 'No Requiere Reescritura', desc: 'Se integra con los flujos de inicio de sesión y OIDC existentes.' },
            { head: 'Seguridad Invisible', desc: 'Reemplaza contraseñas y OTPs detrás de escena.' },
            { head: 'Listo para Empresas', desc: 'Funciona para empleados internos y autenticación de consumidores.' },
            { head: 'Basado en Estándares', desc: 'Compatible con estándares de credenciales verificables.' }
        ]
      },
      cta: {
        headline: 'Toma el control de tu identidad.',
        subline: 'Sin contraseñas. Sin secretos compartidos. Sin adivinanzas.',
        btnWallet: 'Descargar PTERI App',
        btnPlatform: 'Explorar la Plataforma PTERI'
      },
      seo: {
        title: 'Identidad Determinista y Autenticación | Kakr Labs',
        description: 'PTERI reemplaza contraseñas y OTPs con identidad criptográfica de autocustodia para humanos, empresas y agentes de IA.',
        image: '/identity-page-og.png'
      },
      faqs: {
        title: 'Preguntas Frecuentes de Identidad',
        items: [
          { q: '¿Es esto identidad descentralizada?', a: 'PTERI se centra en la autoridad y la verificación, no en las etiquetas.' },
          { q: '¿Puede la IA actuar sin permiso?', a: 'No. Toda la autoridad de la IA es delegada y revocable.' },
          { q: '¿Reemplaza esto las contraseñas y 2FA?', a: 'Sí, sin introducir secretos compartidos.' }
        ]
      },
      systemsNote: 'PTERI trabaja junto con su infraestructura OIDC e IAM existente: no se requiere reemplazar todo.'
    },
    ja: {
      hero: {
        headline: '推測のないアイデンティティ',
        subheadline: 'ほとんどのアイデンティティシステムは、間接的なシグナル（パスワード、OTP、デバイス、IP、行動履歴）を使用して、あなたが誰であるかを答えようとします。これらのシグナルは、大規模にコピー、傍受、またはなりすましされます。PTERIはアイデンティティを異なった方法で扱います。',
        ctaWallet: 'PTERI Appをダウンロード',
        ctaDemo: 'デモを見る'
      },
      problem: {
        label: 'なぜ従来のアイデンティティは失敗するのか',
        title: '従来のアイデンティティシステムは、証明ではなく推論に依存しているため失敗します。',
        description: 'パスワードはフィッシングされる可能性があります。OTPは傍受される可能性があります。リカバリーフローはバックドアを導入します。中央データベースは侵害の標的になります。',
        bullets: [
            'パスワードはフィッシングされる可能性があります',
            'OTPは傍受または再生される可能性があります',
            'リカバリーフローはバックドアを導入します',
            '中央データベースは侵害の標的になります',
            'システムが拡大するにつれて、これらの弱点は悪化します'
        ],
        punchline: '権限が証明できれば、アクセスが許可されます。できなければ、アクセスは拒否されます。'
      },
      useCases: {
        title: 'アイデンティティのユースケース',
        items: [
          '既存のアプリケーションのパスワードレスログイン',
          'SMSおよびTOTPベースの二要素認証の置き換え',
          '内部ツールのためのサービスおよびシステムアイデンティティ',
          '管理された権限下で動作するAIエージェント'
        ]
      },
      plumbing: {
        title: '配管が壊れています',
        p1: '従来のアイデンティティシステムは漏れだらけです-パスワードのリセット、リカバリーフロー、共有シークレット、管理者のオーバーライド。すべてのパッチは複雑さとリスクを追加します。',
        p2: 'より良いパッチは必要ありません。新しいパイプが必要です。'
      },
      model: {
        title: '権限としてのアイデンティティ',
        subtitle: 'PTERIでは、アイデンティティはユーザーが保持する暗号鍵によって定義されます。',
        listTitle: 'PTERI標準',
        properties: [
            'キーは生成され、ユーザーのデバイス上に残ります',
            'アイデンティティは署名されたチャレンジを通じて検証されます',
            '共有シークレットは交換されません',
            '検証はリクエスト時に行われます',
            'すべてのアイデンティティ決定は、許可または拒否するために決定論的に解決されます'
        ],
        punchline: 'アイデンティティ検証はリクエスト時に行われます。'
      },
      howItWorks: {
        title: 'アイデンティティ検証の仕組み',
        steps: [
            'サービスが暗号学的チャレンジを発行します',
            'PTERI Appはローカルでチャレンジに署名します',
            '検証レイヤーが署名を確認します',
            'アクセスが許可または拒否されます'
        ],
        demoLabel: 'PTERI Identityの動作を見る'
      },
      ai: {
        title: 'AIアイデンティティと委任',
        description: 'AIシステムは根本的なセキュリティ問題を導入します。それらは資格情報を忘れず、社会的境界を理解しません。AIシステムに静的な資格情報を付与することは、事実上、永続的な権限を付与することになります。',
        conceptTitle: '紹介',
        features: [
            '委任は明示的で範囲が限定されています',
            '権限は時間制限があります',
            '暗号学的に強制されます',
            '即座に取り消し可能です',
            'エージェントはルートキーを保持しません'
        ]
      },
      wallet: {
        title: '人間のアイデンティティ',
        metaphor: '人間はPTERIにおけるルート権限保持者です。',
        points: [
            '認証はメールアドレスに依存しません',
            'パスワードやサードパーティのアイデンティティプロバイダーはありません',
            '権限はユーザーのデバイスによって直接証明されます',
            'パスワードとOTPベースの2FAを置き換えます',
            '既存のシステムを壊しません'
        ]
      },
      legacy: {
        title: '実世界のために構築された',
        points: [
            { head: '書き換え不要', desc: '既存のOIDCおよびログインフローと統合されます。' },
            { head: '目に見えないセキュリティ', desc: '舞台裏でパスワードとOTPを置き換えます。' },
            { head: 'エンタープライズ対応', desc: '内部従業員および消費者認証のために機能します。' },
            { head: '標準準拠', desc: '検証可能な資格情報標準と互換性があります。' }
        ]
      },
      cta: {
        headline: 'アイデンティティをコントロールする。',
        subline: 'パスワードなし。共有シークレットなし。推測なし。',
        btnWallet: 'PTERI Appをダウンロード',
        btnPlatform: 'PTERIプラットフォームを探索'
      },
      seo: {
        title: '決定論的アイデンティティ＆認証 | Kakr Labs',
        description: 'PTERIは、人間、企業、およびAIエージェントのために、パスワードとOTPを自己管理型の暗号学的アイデンティティに置き換えます。',
        image: '/identity-page-og.png'
      },
      faqs: {
        title: 'アイデンティティFAQ',
        items: [
          { q: 'これは分散型アイデンティティですか？', a: 'PTERIはラベルではなく、権限と検証に焦点を当てています。' },
          { q: 'AIは許可なしに行動できますか？', a: 'いいえ。すべてのAI権限は委任され、取り消し可能です。' },
          { q: 'これはパスワードと2FAを置き換えますか？', a: 'はい、共有シークレットを導入することなく。' }
        ]
      },
      systemsNote: 'PTERIは既存のOIDCおよびIAMインフラストラクチャと連携して機能します-完全な置き換えは必要ありません。'
    },
    ar: {
      hero: {
        headline: 'هوية بلا تخمين',
        subheadline: 'تحاول معظم أنظمة الهوية الإجابة عن هويتك باستخدام إشارات غير مباشرة: كلمات المرور، وكلمات المرور لمرة واحدة (OTP)، والأجهزة، وعناوين IP، وسجل السلوك. يتم نسخ هذه الإشارات أو اعتراضها أو انتحالها على نطاق واسع. يعامل PTERI الهوية بشكل مختلف.',
        ctaWallet: 'تنزيل تطبيق PTERI',
        ctaDemo: 'شاهد العرض التوضيحي'
      },
      problem: {
        label: 'لماذا تفشل الهوية القديمة',
        title: 'تفشل أنظمة الهوية القديمة لأنها تعتمد على الاستدلال بدلاً من الإثبات.',
        description: 'يمكن سرقة كلمات المرور. يمكن اعتراض رموز OTP. تقدم تدفقات الاسترداد أبوابًا خلفية. تصبح قواعد البيانات المركزية أهدافًا للاختراق.',
        bullets: [
            'يمكن سرقة كلمات المرور',
            'يمكن اعتراض رموز OTP أو إعادة تشغيلها',
            'تقدم تدفقات الاسترداد أبوابًا خلفية',
            'تصبح قواعد البيانات المركزية أهدافًا للاختراق',
            'مع توسع الأنظمة، تتفاقم هذه النقاط الضعيفة'
        ],
        punchline: 'إذا أمكن إثبات السلطة، يتم منح الوصول. إذا لم يكن كذلك، يتم رفض الوصول.'
      },
      useCases: {
        title: 'حالات استخدام الهوية',
        items: [
          'تسجيل الدخول بدون كلمة مرور للتطبيقات الحالية',
          'استبدال المصادقة الثنائية القائمة على الرسائل القصيرة و TOTP',
          'هوية الخدمة والنظام للأدوات الداخلية',
          'وكلاء الذكاء الاصطناعي يعملون تحت سلطة خاضعة للرقابة'
        ]
      },
      plumbing: {
        title: 'السباكة مكسورة',
        p1: 'أنظمة الهوية القديمة مليئة بالتسريبات - إعادة تعيين كلمات المرور، وتدفقات الاسترداد، والأسرار المشتركة، وتجاوزات المسؤول. يضيف كل تصحيح تعقيدًا ومخاطرة.',
        p2: 'أنت لا تحتاج إلى تصحيحات أفضل. أنت بحاجة إلى أنابيب جديدة.'
      },
      model: {
        title: 'الهوية كسلطة',
        subtitle: 'في PTERI، يتم تعريف الهوية بواسطة مفاتيح التشفير التي يحملها المستخدم.',
        listTitle: 'معيار PTERI',
        properties: [
            'يتم إنشاء المفاتيح وتبقى على جهاز المستخدم',
            'يتم التحقق من الهوية من خلال تحديات موقعة',
            'لا يتم تبادل أسرار مشتركة',
            'يحدث التحقق في وقت الطلب',
            'يتم حل جميع قرارات الهوية بشكل حتمي للسماح أو الرفض'
        ],
        punchline: 'يحدث التحقق من الهوية في وقت الطلب.'
      },
      howItWorks: {
        title: 'كيف يعمل التحقق من الهوية',
        steps: [
            'تصدر خدمة تحديًا مشفرًا',
            'يوقّع تطبيق PTERI التحدي محليًا',
            'تتحقق طبقة التحقق من التوقيع',
            'يتم منح الوصول أو رفضه'
        ],
        demoLabel: 'شاهد هوية PTERI قيد العمل'
      },
      ai: {
        title: 'هوية الذكاء الاصطناعي والتفويض',
        description: 'تقدم أنظمة الذكاء الاصطناعي مشكلة أمنية جوهرية: فهي لا تنسى بيانات الاعتماد ولا تفهم الحدود الاجتماعية. إن منح أنظمة الذكاء الاصطناعي بيانات اعتماد ثابتة يمنح سلطة دائمة بشكل فعال.',
        conceptTitle: 'نقدم',
        features: [
            'التفويض صريح ومحدد النطاق',
            'السلطة محددة بمدة زمنية',
            'مفروضة بشكل مشفر',
            'قابلة للإلغاء فورًا',
            'لا يحمل الوكلاء أبدًا مفاتيح الجذر'
        ]
      },
      wallet: {
        title: 'الهوية البشرية',
        metaphor: 'البشر هم أصحاب السلطة الجذرية في PTERI.',
        points: [
            'لا تعتمد المصادقة على عناوين البريد الإلكتروني',
            'لا كلمات مرور أو موفري هوية لجهات خارجية',
            'يتم إثبات السلطة مباشرة بواسطة جهاز المستخدم',
            'يستبدل كلمات المرور و 2FA القائم على OTP',
            'لا يكسر الأنظمة الحالية'
        ]
      },
      legacy: {
        title: 'مبني للعالم الحقيقي',
        points: [
            { head: 'لا يتطلب إعادة كتابة', desc: 'يتكامل مع تدفقات OIDC وتسجيل الدخول الحالية.' },
            { head: 'أمان غير مرئي', desc: 'يستبدل كلمات المرور و OTPS خلف الكواليس.' },
            { head: 'جاهز للمؤسسات', desc: 'يعمل للموظفين الداخليين ومصادقة المستهلك.' },
            { head: 'قائم على المعايير', desc: 'متوافق مع معايير بيانات الاعتماد القابلة للتحقق.' }
        ]
      },
      cta: {
        headline: 'تحكم في هويتك.',
        subline: 'لا كلمات مرور. لا أسرار مشتركة. لا تخمين.',
        btnWallet: 'تنزيل تطبيق PTERI',
        btnPlatform: 'استكشف منصة PTERI'
      },
      seo: {
        title: 'الهوية الحتمية والمصادقة | Kakr Labs',
        description: 'يستبدل PTERI كلمات المرور و OTP بهوية تشفيرية ذاتية الحفظ للبشر والمؤسسات ووكلاء الذكاء الاصطناعي.',
        image: '/identity-page-og.png'
      },
      faqs: {
        title: 'أسئلة شائعة حول الهوية',
        items: [
          { q: 'هل هذه هوية لا مركزية؟', a: 'يركز PTERI على السلطة والتحقق، وليس التسميات.' },
          { q: 'هل يمكن للذكاء الاصطناعي التصرف دون إذن؟', a: 'لا. جميع سلطات الذكاء الاصطناعي مفوضة وقابلة للمراجعة.' },
          { q: 'هل يحل هذا محل كلمات المرور و 2FA؟', a: 'نعم، دون تقديم أسرار مشتركة.' }
        ]
      },
      systemsNote: 'يعمل PTERI جنبًا إلى جنب مع البنية التحتية الحالية لـ OIDC و IAM - لا يتطلب الاستبدال الكامل.'
    }
  }
  const current = translations[locale.value] || translations.en
  const base = translations.en

  const mergeObjects = (baseObj, currentObj) => {
    if (!currentObj) return baseObj
    return { ...baseObj, ...currentObj }
  }

  const result = { ...base, ...current }

  const sections = [
    'hero', 'identityWithoutGuessing', 'problem', 'model', 
    'howItWorks', 'wallet', 'ai', 'useCases', 'securityBoundaries',  
    'legacy', 'faqs', 'about', 'cta', 'seo'
  ]

  sections.forEach(section => {
    result[section] = mergeObjects(base[section], current[section])
  })

  return result
})

// SEO
const { setSEO } = useSEO()

watchEffect(() => {
  setSEO({
    title: content.value.seo.title,
    description: content.value.seo.description,
    image: content.value.seo.image
  })
})
</script>

<style scoped>

/* Animations — compositor-only (transform only, no layout/paint) */
@keyframes mesh-float {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(20px, -20px); }
}
@keyframes mesh-float-delayed {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(-20px, 20px); }
}
.animate-mesh-float {
  will-change: transform;
  animation: mesh-float 10s ease-in-out infinite;
}
.animate-mesh-float-delayed {
  will-change: transform;
  animation: mesh-float-delayed 13s ease-in-out infinite;
}

/* New Hero Animations */
@keyframes aurora-1 {
  0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
  50% { transform: translate(-20px, 30px) scale(1.1); opacity: 0.6; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
}
.animate-aurora-1 { animation: aurora-1 12s ease-in-out infinite; }

@keyframes aurora-2 {
  0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  50% { transform: translate(30px, -20px) scale(1.15); opacity: 0.5; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
}
.animate-aurora-2 { animation: aurora-2 15s ease-in-out infinite reverse; }

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: translate(-50%, 0) scale(1); }
  50% { opacity: 0.5; transform: translate(-50%, -10px) scale(1.05); }
}
.animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { opacity: 0; animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

@keyframes shine {
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}
.animate-shine { animation: shine 1.5s ease-in-out infinite; }

@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient-x { background-size: 200% auto; animation: gradient-x 5s ease infinite; }

@keyframes scroll-hint {
  0% { transform: translateY(0); opacity: 0; }
  50% { transform: translateY(6px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0; }
}
.animate-scroll-hint { animation: scroll-hint 2s ease-in-out infinite; }

@keyframes bounce-slow {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 10px); }
}
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
</style>

