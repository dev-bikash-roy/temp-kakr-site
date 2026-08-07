<template>
  <div class="min-h-screen bg-black bg-black text-white ">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div class="absolute inset-0 opacity-[0.03]" style="background-size: 40px 40px; background-image: linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px);"></div>
      
      <div class="container mx-auto max-w-4xl relative z-10 text-center">
        <h1 class="text-5xl sm:text-7xl font-black tracking-tight mb-8 text-white ">
          AI & Intelligence
        </h1>
        <p class="text-2xl sm:text-3xl text-white/90  mb-12 font-semibold">
          Secure AI agents with cryptographic identity and signed actions.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://pteri.org/Register" target="_blank" class="btn-primary">
            Get Started
          </a>
          <a href="/contact" class="px-8 py-4 bg-black border-2 border-white/10  hover:border-green-500 text-white  rounded-lg font-bold text-lg transition-all">
            Book a Demo
          </a>
        </div>
      </div>
    </section>

    <!-- 2. AI AGENT IDENTITY FLOW (PRIMARY VISUAL) -->
    <section class="py-20 px-4 bg-black">
      <div class="max-w-7xl mx-auto">
        <div class="bg-black border-2 border-white/10  rounded-2xl p-4 sm:p-8 shadow-xl">
           <div class="flex justify-center">
            <img 
              src="/D3_ How Pteri Secures AI Agent.png" 
              alt="How Pteri Secures AI Agents Architecture" 
              class="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        <!-- Caption -->
        <p class="text-center text-xl text-white/90  mt-8 italic font-medium">
          Every AI agent action is signed, attributable, and verifiable.
        </p>
      </div>
    </section>

    <!-- 3. DETAILED FEATURES -->
    <section class="py-16 px-4 bg-black">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Feature 1 -->
          <div class="bg-black p-6 rounded-xl border border-white/10  shadow-sm hover:shadow-md transition-all flex items-start gap-4">
            <div class="bg-green-100 p-3 rounded-lg text-green-600">
               <span class="material-symbols-outlined">fingerprint</span>
            </div>
            <div>
              <h3 class="font-bold text-white  text-lg mb-1">Cryptographic Identities</h3>
              <p class="text-white/70 ">Every AI agent is assigned a unique, immutable cryptographic identity on the network.</p>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="bg-black p-6 rounded-xl border border-white/10  shadow-sm hover:shadow-md transition-all flex items-start gap-4">
            <div class="bg-green-100 p-3 rounded-lg text-green-600">
               <span class="material-symbols-outlined">verified_user</span>
            </div>
            <div>
              <h3 class="font-bold text-white  text-lg mb-1">Signed Authorizations</h3>
              <p class="text-white/70 ">Every action requires a cryptographic signature, proving intent and origin authenticity.</p>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="bg-black p-6 rounded-xl border border-white/10  shadow-sm hover:shadow-md transition-all flex items-start gap-4">
            <div class="bg-green-100 p-3 rounded-lg text-green-600">
               <span class="material-symbols-outlined">visibility_off</span>
            </div>
            <div>
              <h3 class="font-bold text-white  text-lg mb-1">Zero-Knowledge Privacy</h3>
              <p class="text-white/70 ">Verify agent qualifications and permissions without exposing sensitive underlying data.</p>
            </div>
          </div>

          <!-- Feature 4 -->
          <div class="bg-black p-6 rounded-xl border border-white/10  shadow-sm hover:shadow-md transition-all flex items-start gap-4">
            <div class="bg-green-100 p-3 rounded-lg text-green-600">
               <span class="material-symbols-outlined">key_off</span>
            </div>
            <div>
              <h3 class="font-bold text-white  text-lg mb-1">No Shared Secrets</h3>
              <p class="text-white/70 ">Reduce exposure from leaked API keys and static tokens - authorization is proof-based, not secret-based.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. TOKENS vs SIGNED ACTIONS COMPARISON -->
    <section class="py-20 px-4 bg-black">
      <div class="container mx-auto max-w-5xl">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <!-- Legacy Side -->
          <div>
            <h3 class="text-2xl font-bold text-white/50  mb-6 text-center uppercase tracking-wide">Legacy AI Security</h3>
            <div class="space-y-4">
              <div class="bg-black border border-white/10  rounded-lg p-5 text-center">
                <p class="text-white/70  font-medium">API Keys / Tokens</p>
              </div>
              <div class="bg-black border border-white/10  rounded-lg p-5 text-center">
                <p class="text-white/70  font-medium">Static Credentials</p>
              </div>
              <div class="bg-black border border-white/10  rounded-lg p-5 text-center">
                <p class="text-white/70  font-medium">Hard to Revoke</p>
              </div>
              <div class="bg-black border border-white/10  rounded-lg p-5 text-center">
                <p class="text-white/70  font-medium">No Attribution</p>
              </div>
              <div class="bg-black border border-white/10  rounded-lg p-5 text-center">
                <p class="text-white/70  font-medium">Silent Abuse</p>
              </div>
            </div>
          </div>

          <!-- PTERI Side -->
          <div>
            <h3 class="text-2xl font-bold text-green-600 mb-6 text-center uppercase tracking-wide">PTERI AI Security</h3>
            <div class="space-y-4">
              <div class="bg-green-50 border border-green-500 rounded-lg p-5 text-center shadow-sm">
                <p class="text-green-800 font-bold">Cryptographic Signatures</p>
              </div>
              <div class="bg-green-50 border border-green-500 rounded-lg p-5 text-center shadow-sm">
                <p class="text-green-800 font-bold">Identity-bound</p>
              </div>
              <div class="bg-green-50 border border-green-500 rounded-lg p-5 text-center shadow-sm">
                <p class="text-green-800 font-bold">Instant Revocation</p>
              </div>
              <div class="bg-green-50 border border-green-500 rounded-lg p-5 text-center shadow-sm">
                <p class="text-green-800 font-bold">Full Attribution</p>
              </div>
              <div class="bg-green-50 border border-green-500 rounded-lg p-5 text-center shadow-sm">
                <p class="text-green-800 font-bold">Auditable Actions</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Caption -->
        <div class="mt-12 text-center space-y-2">
          <p class="text-xl font-bold text-white/50 ">
            Tokens grant access.
          </p>
          <p class="text-xl font-bold text-green-600">
            Signatures prove intent.
          </p>
        </div>
      </div>
    </section>

    <!-- 5. CONTROL PLANE (OPERATIONAL VISUAL) -->
     <section class="py-20 px-4 bg-black">
      <div class="container mx-auto max-w-2xl">
        <div class="flex flex-col items-center gap-8">
           <!-- Control Panel -->
           <div class="w-full bg-black border-2 border-white/10  rounded-xl p-8 shadow-xl">
             <h3 class="text-xl font-bold text-white  mb-6 text-center">PTERI Control Plane (Web / API)</h3>
             <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex items-center gap-3 bg-black rounded-lg p-4 border border-white/8 ">
                  <span class="material-symbols-outlined text-green-600">sync</span>
                  <span class="font-semibold text-white/90 ">Rotate Agent Identity</span>
                </div>
                 <div class="flex items-center gap-3 bg-black rounded-lg p-4 border border-white/8 ">
                  <span class="material-symbols-outlined text-green-600">block</span>
                  <span class="font-semibold text-white/90 ">Revoke Agent Access</span>
                </div>
                 <div class="flex items-center gap-3 bg-black rounded-lg p-4 border border-white/8 ">
                  <span class="material-symbols-outlined text-green-600">admin_panel_settings</span>
                  <span class="font-semibold text-white/90 ">Update Permissions</span>
                </div>
                 <div class="flex items-center gap-3 bg-black rounded-lg p-4 border border-white/8 ">
                  <span class="material-symbols-outlined text-green-600">history_edu</span>
                  <span class="font-semibold text-white/90 ">Audit Agent Actions</span>
                </div>
             </div>
           </div>

           <!-- Arrow -->
            <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>

            <!-- Agent -->
            <div class="bg-black text-white rounded-xl py-4 px-12 text-center shadow-lg">
                <div class="flex items-center gap-3">
                   <span class="material-symbols-outlined text-2xl">smart_toy</span>
                   <span class="text-lg font-bold">AI Agent</span>
                </div>
            </div>
        </div>

        <p class="text-center text-xl text-white/90  mt-12 font-medium">
          Control AI agents in real time - without redeploying code.
        </p>

      </div>
    </section>

    <!-- 6. AI SECURITY OUTCOMES STRIP -->
    <section class="py-16 px-4 bg-black">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-wrap justify-center gap-8 md:gap-12">
          <div class="flex items-center gap-3">
             <span class="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
             <span class="font-bold text-white  text-lg">No leaked tokens</span>
          </div>
          <div class="flex items-center gap-3">
             <span class="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
             <span class="font-bold text-white  text-lg">No orphaned agents</span>
          </div>
           <div class="flex items-center gap-3">
             <span class="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
             <span class="font-bold text-white  text-lg">Full auditability</span>
          </div>
           <div class="flex items-center gap-3">
             <span class="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
             <span class="font-bold text-white  text-lg">ZK-verified actions</span>
          </div>
           <div class="flex items-center gap-3">
             <span class="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
             <span class="font-bold text-white  text-lg">Enterprise-ready</span>
          </div>
        </div>

         <p class="text-center text-white/50  mt-8 text-sm uppercase tracking-wider font-semibold">
          Designed for the AI agent economy.
        </p>
      </div>
    </section>

    <!-- 7. FINAL CTA -->
    <section class="py-24 px-4 bg-black">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl sm:text-5xl font-bold mb-10 text-white ">
          Ready to secure AI with proof?
        </h2>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://pteri.org/Register" target="_blank" class="btn-primary">
            Get Started
          </a>
          <a href="/contact" class="px-8 py-4 bg-black border-2 border-white/10  hover:border-green-500 text-white  rounded-lg font-bold text-lg transition-all">
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import { useSEO } from '~/composables/useSEO'

const { setSEO } = useSEO()

useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
  ]
})

setSEO({
  title: 'AI Security - PTERI',
  description: 'Secure AI agents with cryptographic identity and signed actions. Replace API tokens with verifiable proof.',
  robots: 'index, follow'
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
