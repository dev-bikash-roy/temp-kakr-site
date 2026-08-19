<template>
  <div class="min-h-screen bg-black text-white/80 pb-24 font-inter">
    <!-- Header/Hero -->
    <section class="relative overflow-hidden border-b border-white/5" style="padding: 9rem 0 7rem; background: #000;">
      <!-- Ambient gradient -->
      <div class="absolute inset-0 pointer-events-none z-0" style="background: radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16,185,129,0.15) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(52,211,153,0.06) 0%, transparent 60%);"></div>
      <!-- Grid -->
      <div class="absolute inset-0 pointer-events-none z-0" style="background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 64px 64px;"></div>
      <!-- Orbs -->
      <div class="absolute pointer-events-none z-0" style="width:600px;height:600px;top:-150px;right:-100px;border-radius:50%;background:rgba(16,185,129,0.12);filter:blur(90px);"></div>
      <div class="absolute pointer-events-none z-0" style="width:350px;height:350px;bottom:-80px;left:5%;border-radius:50%;background:rgba(52,211,153,0.07);filter:blur(90px);"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Eyebrow pill -->
        <div class="mb-8" data-aos="fade-up">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold tracking-widest uppercase text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-500" style="box-shadow: 0 0 8px rgba(52,211,153,0.8);"></span>
            Security / Trust Center
          </span>
        </div>

        <div class="max-w-4xl">
          <h1 class="font-black leading-[1.03] tracking-[-0.035em] text-white mb-6" style="font-size: clamp(2.5rem, 6.5vw, 5rem);">
            Customer-Controlled Identity.<br />
            <span style="background: linear-gradient(135deg, #34d399 0%, #10b981 60%, #6ee7b7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; filter: drop-shadow(0 0 30px rgba(52,211,153,0.4));">Scoped Authorization.</span>
          </h1>
          <p class="leading-relaxed max-w-3xl" style="font-size: 1.2rem; color: rgba(209,250,229,0.75);">
            PTERI combines customer-controlled cryptographic credentials, scoped authorization, and verifiable action evidence to protect sensitive access and AI-agent workflows. Review the documented security boundaries, data flows, operational controls, and service status below.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Grid -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Left Column -->
        <div class="lg:col-span-7 flex flex-col gap-6">
          
          <!-- Why Traditional Security Fails -->
          <div class="rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10 hover:border-emerald-500/30 transition-all" style="background: rgba(16,185,129,0.03);">
             <h2 class="text-2xl font-bold text-white mb-6">Why Traditional Security Fails</h2>
             <p class="text-white/60 mb-6 leading-relaxed">Legacy security systems are no longer enough in the age of AI agents, sophisticated phishing, and regulatory change.</p>
             
             <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 mt-10" data-aos="fade-up">
                <div class="bg-black/50 p-5 rounded-2xl border border-emerald-500/10">
                  <div class="text-sm font-bold text-white mb-1">Passwordless MFA</div>
                  <div class="text-xs text-white/50 leading-relaxed">Phishing-resistant authentication without shared secrets or SMS OTPs.</div>
                </div>
                <div class="bg-black/50 p-5 rounded-2xl border border-emerald-500/10">
                  <div class="text-sm font-bold text-white mb-1">Scoped authorization</div>
                  <div class="text-xs text-white/50 leading-relaxed">Scoped, time-bound authority checked at the moment an action is requested.</div>
                </div>
                <div class="bg-black/50 p-5 rounded-2xl border border-emerald-500/10">
                  <div class="text-sm font-bold text-white mb-1">Tamper-evident evidence</div>
                  <div class="text-xs text-white/50 leading-relaxed">Each approved action produces evidence that can be verified cryptographically.</div>
                </div>
             </div>
             
             <div class="space-y-4 pt-6 border-t border-white/5 mt-6">
                <div class="flex items-start gap-3 text-sm text-white/60">
                  <i class="las la-exclamation-triangle text-white/50 text-lg flex-shrink-0 mt-0.5"></i>
                  <p><strong class="text-white">Phishing &amp; SIM-Swap Attacks</strong> — OTPs sent via SMS or email can be intercepted or socially engineered.</p>
                </div>
                <div class="flex items-start gap-3 text-sm text-white/60">
                  <i class="las la-database text-white/50 text-lg flex-shrink-0 mt-0.5"></i>
                  <p><strong class="text-white">Centralized Secret Stores</strong> — Passwords, API keys, and shared secrets held on servers create high-value targets for breaches.</p>
                </div>
                <div class="flex items-start gap-3 text-sm text-white/60">
                  <i class="las la-shield-alt text-white/50 text-lg flex-shrink-0 mt-0.5"></i>
                  <p><strong class="text-white">Outdated MFA &amp; Unverified AI Agents</strong> — Single-factor systems are vulnerable to interception, and AI agents can act without any verifiable proof of authority at action time.</p>
                </div>
             </div>
          </div>

          <!-- How PTERI Protects You -->
          <div class="rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10 hover:border-emerald-500/30 transition-all" style="background: rgba(16,185,129,0.03);">
            <h2 class="text-2xl font-bold text-white mb-2">How PTERI Protects You</h2>
            <p class="text-white/60 mb-8 leading-relaxed text-sm">Five areas where PTERI adds customer-controlled credentials and scoped authorization to systems you already operate.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               <div class="bg-black/50 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                 <i class="las la-fingerprint text-white text-3xl mb-3"></i>
                 <h4 class="font-bold text-white text-sm mb-2">MFA Enhancement</h4>
                 <p class="text-xs text-white/50 leading-relaxed">Cryptographic signatures on existing MFA flows (phishing-resistant).</p>
               </div>
               <div class="bg-black/50 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                 <i class="las la-key text-white text-3xl mb-3"></i>
                 <h4 class="font-bold text-white text-sm mb-2">Customer-Controlled Credentials</h4>
                 <p class="text-xs text-white/50 leading-relaxed">Private keys are generated and stored on the user’s device.</p>
               </div>
               <div class="bg-black/50 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                 <i class="las la-user-secret text-white text-3xl mb-3"></i>
                 <h4 class="font-bold text-white text-sm mb-2">Verifiable Action Evidence</h4>
                 <p class="text-xs text-white/50 leading-relaxed">Tamper-evident evidence of each authorized action.</p>
               </div>
               <div class="bg-black/50 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                 <i class="las la-robot text-white text-3xl mb-3"></i>
                 <h4 class="font-bold text-white text-sm mb-2">AI Agent Authorization</h4>
                 <p class="text-xs text-white/50 leading-relaxed">Scoped, time-bound agent authority verified at runtime.</p>
               </div>
               <div class="bg-black/50 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors lg:col-span-2">
                 <i class="las la-cloud text-white text-3xl mb-3"></i>
                 <h4 class="font-bold text-white text-sm mb-2">Enterprise-Grade Infrastructure</h4>
                 <p class="text-xs text-white/50 leading-relaxed">Google Cloud infrastructure with availability SLAs and audit-ready logging.</p>
               </div>
            </div>
          </div>

        </div>

        <!-- Right Column -->
        <div class="lg:col-span-5 flex flex-col gap-6">
          
          <!-- Security Philosophy -->
          <div class="rounded-[2rem] p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all" style="background: rgba(16,185,129,0.03);">
            <h2 class="text-xl font-bold text-white mb-4">Security Architecture</h2>
            <p class="text-sm text-white/60 mb-6 leading-relaxed">PTERI verifies identity, authority, and policy at the moment an action is requested, using customer-controlled credentials and cryptographic verification.</p>
            <ul class="space-y-6">
              <li>
                <h4 class="text-sm font-bold text-white mb-1">Customer-Controlled Credentials</h4>
                <p class="text-xs text-white/50">Private keys are generated and stored on the user's device. Kakr Labs does not hold customer keys or funds.</p>
              </li>
              <li>
                <h4 class="text-sm font-bold text-white mb-1">Verifiable Action Evidence</h4>
                <p class="text-xs text-white/50">Authorization decisions produce tamper-evident evidence. Litecoin proof-of-work is used as an independent verification layer beneath that evidence.</p>
              </li>
              <li>
                <h4 class="text-sm font-bold text-white mb-1">Independent Trust Architecture</h4>
                <p class="text-xs text-white/50">Verification does not depend on a single vendor-held secret store. Customers control their own credentials and the scope of authority they delegate.</p>
              </li>
            </ul>
            <div class="mt-6 pt-6 border-t border-white/5">
              <p class="text-xs text-white/40 leading-relaxed">PTERI does not replace endpoint security, application security, IAM, secure model design, or human governance. It does not claim to protect a fully compromised endpoint, user-approved malware, or physical coercion.</p>
            </div>
             <div class="mt-8">
               <a href="https://docs.kakr.ai/docs/threat-model-and-cryptography/9.6-security-as-a-property-of-architecture" target="_blank" class="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/5 inline-block">Read the Security Architecture</a>
             </div>
          </div>

          <!-- Security and Regulatory Considerations -->
          <div class="rounded-[2rem] p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all" style="background: rgba(16,185,129,0.03);">
            <h2 class="text-xl font-bold text-white mb-2">Security and Regulatory Considerations</h2>
            <p class="text-sm text-white/60 mb-6 leading-relaxed">PTERI can support organizations implementing stronger authentication, scoped authorization, credential protection, and evidence requirements. Applicability depends on the organization, jurisdiction, architecture, and implementation. This is not legal advice.</p>

            <div class="border-t border-white/5 pt-4 flex justify-end">
               <a href="https://docs.kakr.ai/docs/threat-model-and-cryptography/9.6-security-as-a-property-of-architecture" target="_blank" class="text-sm font-medium hover:text-white transition-colors flex items-center gap-1 group">Read the Security Architecture <i class="las la-arrow-right group-hover:translate-x-1 transition-transform"></i></a>
            </div>
          </div>

          <!-- Try Our Security Features -->
          <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[2rem] p-8 border border-white/10 hover:border-white/20 transition-all shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[220px]">
            <h2 class="text-xl font-bold text-white mb-6 relative z-10">Explore Our Documentation</h2>
            <div class="space-y-3 relative z-10">
              <a href="https://docs.kakr.ai/docs/platform-capabilities/2.3-identity-and-authentication" target="_blank" class="flex justify-between items-center bg-black/50 hover:bg-white/5 p-4 rounded-xl border border-white/5 transition-colors group">
                <span class="text-sm font-medium text-white/80 group-hover:text-white">Identity & Authentication Docs</span>
                <i class="las la-arrow-right text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all"></i>
              </a>
              <a href="https://docs.kakr.ai/docs/ai-agents-and-mcp-integration/5.3-pteri-intelligence-and-mcp" target="_blank" class="flex justify-between items-center bg-black/50 hover:bg-white/5 p-4 rounded-xl border border-white/5 transition-colors group">
                <span class="text-sm font-medium text-white/80 group-hover:text-white">AI Agent Security Docs</span>
                <i class="las la-arrow-right text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    <!-- Final CTA -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pb-12">
      <div class="bg-[#0f0f0f] rounded-[2rem] p-12 text-center border border-white/5 relative overflow-hidden">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">Ready to move beyond fragile legacy security?</h2>
        <p class="text-white/60 mb-8 max-w-2xl mx-auto relative z-10">Reduce reliance on server-held shared secrets with customer-controlled credentials, scoped authorization, and verifiable action evidence.</p>
        <div class="flex flex-wrap justify-center gap-4 relative z-10">
           <a href="https://pteri.org/Register" target="_blank" class="px-6 py-3 rounded-xl font-bold text-sm text-black bg-white hover:bg-slate-200 transition-colors shadow-lg">Get Your Free API Key</a>
          <a href="https://pteri.kakr.org" target="_blank" class="px-6 py-3 rounded-xl font-bold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors">Explore PTERI Wallet</a>
          <a href="/contact" class="px-6 py-3 rounded-xl font-bold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors">Book a Security Consultation</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'

const { setSEO } = useSEO()
setSEO({
  title: 'KAKR.ai Trust Center | Verifiable Security Architecture',
  description: 'How PTERI verifies identity and authorization using customer-controlled credentials, scoped authorization, and tamper-evident action evidence.',
  image: '/og/og-trust-center.png',
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.font-inter {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
</style>


