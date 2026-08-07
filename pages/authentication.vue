<template>
  <div class="min-h-screen bg-black bg-black text-white ">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div class="absolute inset-0 opacity-[0.03]" style="background-size: 40px 40px; background-image: linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px);"></div>
      
      <div class="container mx-auto max-w-4xl relative z-10 text-center">
        <h1 class="text-5xl sm:text-7xl font-black tracking-tight mb-6 text-white ">
          Authentication
        </h1>
        <p class="text-2xl sm:text-3xl text-white/90  mb-10 font-semibold">
          Passwordless authentication built on cryptographic proof.
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

    <!-- 2. PASSWORDLESS LOGIN FLOW (PRIMARY VISUAL) -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="container mx-auto max-w-2xl">
        <!-- Vertical Flowchart -->
        <div class="bg-black border-2 border-white/10  rounded-2xl p-8 sm:p-12 shadow-xl">
          <div class="flex flex-col items-center space-y-6">
            <!-- Step 1: Login Request -->
            <div class="w-full max-w-md">
              <div class="bg-black border-2 border-white/10  rounded-xl p-6 text-center">
                <p class="text-lg font-bold text-white ">Login Request</p>
              </div>
            </div>

            <!-- Arrow -->
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>

            <!-- Step 2: PTERI App Approval -->
            <div class="w-full max-w-md">
              <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                <p class="text-lg font-bold text-white ">PTERI App Approval</p>
                <p class="text-sm text-white/70  mt-1">(Biometric)</p>
              </div>
            </div>

            <!-- Arrow -->
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>

            <!-- Step 3: Cryptographic Signature -->
            <div class="w-full max-w-md">
              <div class="bg-gradient-to-br from-green-600 to-emerald-500 border-2 border-green-500 rounded-xl p-6 text-center relative">
                <p class="text-lg font-bold text-white">Cryptographic Signature</p>
                <p class="text-sm text-white/90 mt-1">(ZK Verified)</p>
                <!-- ZK Badge -->
                <div class="absolute -top-3 -right-3 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white shadow-lg">
                  ZK
                </div>
              </div>
            </div>

            <!-- Arrow -->
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>

            <!-- Step 4: Verified -->
            <div class="w-full max-w-md">
              <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                <p class="text-lg font-bold text-green-700">Verified</p>
              </div>
            </div>

            <!-- Arrow -->
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>

            <!-- Step 5: Access Granted -->
            <div class="w-full max-w-md">
              <div class="bg-black rounded-xl p-6 text-center shadow-lg">
                <div class="flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined text-white text-2xl">lock_open</span>
                  <p class="text-lg font-bold text-white">Access Granted</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Caption -->
        <p class="text-center text-xl text-white/90  mt-8 italic font-medium">
          Login becomes an approval - not a challenge.
        </p>
      </div>
    </section>

    <!-- 3. THREATS REDUCED STRIP -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div class="flex flex-col items-center text-center gap-3">
            <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <span class="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
            </div>
            <span class="font-bold text-white ">Phishing</span>
          </div>
          <div class="flex flex-col items-center text-center gap-3">
            <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <span class="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
            </div>
            <span class="font-bold text-white ">OTP Interception</span>
          </div>
          <div class="flex flex-col items-center text-center gap-3">
            <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <span class="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
            </div>
            <span class="font-bold text-white ">SIM Swap</span>
          </div>
          <div class="flex flex-col items-center text-center gap-3">
            <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <span class="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
            </div>
            <span class="font-bold text-white ">MFA Fatigue</span>
          </div>
          <div class="flex flex-col items-center text-center gap-3">
            <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <span class="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
            </div>
            <span class="font-bold text-white ">Credential Stuffing</span>
          </div>
        </div>

        <p class="text-center text-white/70  mt-8 text-sm">
          These attack paths are removed by design - not detected after the fact.
        </p>
      </div>
    </section>

    <!-- 4. SHORT EXPLANATION -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="container mx-auto max-w-4xl">
        <ul class="space-y-6">
          <li class="flex items-start gap-4">
            <span class="text-green-600 font-bold text-xl flex-shrink-0">•</span>
            <p class="text-lg text-white/90 ">Cryptographic signatures replace shared credentials</p>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-green-600 font-bold text-xl flex-shrink-0">•</span>
            <p class="text-lg text-white/90 ">Zero-knowledge verification minimizes data exposure</p>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-green-600 font-bold text-xl flex-shrink-0">•</span>
            <p class="text-lg text-white/90 ">No secrets stored on servers</p>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-green-600 font-bold text-xl flex-shrink-0">•</span>
            <p class="text-lg text-white/90 ">Authentication is provable, not inferred</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- 5. GUESS vs PROOF COMPARISON -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="container mx-auto max-w-5xl">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <!-- Legacy Side -->
          <div>
            <h3 class="text-2xl font-bold text-white/50  mb-6 text-center">LEGACY</h3>
            <div class="space-y-4">
              <div class="bg-black border-2 border-dashed border-white/15 rounded-lg p-4 text-center">
                <p class="text-white/70  font-medium">Passwords</p>
              </div>
              <div class="bg-black border-2 border-dashed border-white/15 rounded-lg p-4 text-center">
                <p class="text-white/70  font-medium">OTPs</p>
              </div>
              <div class="bg-black border-2 border-dashed border-white/15 rounded-lg p-4 text-center">
                <p class="text-white/70  font-medium">Risk Scores</p>
              </div>
              <div class="bg-black border-2 border-dashed border-white/15 rounded-lg p-4 text-center">
                <p class="text-white/70  font-medium">Fraud</p>
              </div>
            </div>
          </div>

          <!-- PTERI Side -->
          <div>
            <h3 class="text-2xl font-bold text-green-600 mb-6 text-center">PTERI</h3>
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-green-600 to-emerald-500 border-2 border-green-500 rounded-lg p-4 text-center">
                <p class="text-white font-bold">Cryptographic Signature</p>
              </div>
              <div class="bg-gradient-to-r from-green-600 to-emerald-500 border-2 border-green-500 rounded-lg p-4 text-center">
                <p class="text-white font-bold">ZK Verified</p>
              </div>
              <div class="bg-gradient-to-r from-green-600 to-emerald-500 border-2 border-green-500 rounded-lg p-4 text-center">
                <p class="text-white font-bold">Access</p>
              </div>
              <div class="bg-gradient-to-r from-green-600 to-emerald-500 border-2 border-green-500 rounded-lg p-4 text-center">
                <p class="text-white font-bold">Done</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Caption -->
        <div class="mt-12 text-center space-y-2">
          <p class="text-xl font-bold text-white ">
            Guess-based authentication can be bypassed.
          </p>
          <p class="text-xl font-bold text-green-600">
            Proof-based authentication cannot.
          </p>
        </div>
      </div>
    </section>

    <!-- 6. FINAL CTA -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl sm:text-5xl font-bold mb-10 text-white ">
          Ready to replace passwords with proof?
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
import { useSEO } from '~/composables/useSEO'

const { setSEO } = useSEO()

useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
  ]
})

setSEO({
  title: 'Authentication - PTERI Passwordless',
  description: 'Passwordless authentication built on cryptographic proof. Replace passwords, OTPs, and MFA with verifiable cryptographic signatures.',
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
