<template>
  <Transition
    enter-active-class="transition ease-out duration-300 transform"
    enter-from-class="opacity-0 translate-y-4 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition ease-in duration-200 transform"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-95"
  >
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-black/40 backdrop-blur-sm"
        @click="closePopup"
      ></div>

      <!-- Modal Content -->
      <div class="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-auto border border-white/10 overflow-hidden">
        
        <!-- Decorative bg glow -->
        <div class="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 rounded-full bg-emerald-500/20 blur-3xl"></div>

        <!-- Close Button -->
        <button
          @click="closePopup"
          class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Content -->
        <div class="relative z-10 text-center">
          <!-- PTERI Logo -->
          <div class="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl overflow-hidden shadow-lg">
            <img src="/pteri-logo.webp" alt="PTERI" class="w-full h-full object-contain" />
          </div>

          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Get the PTERI App
          </h3>
          
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            Secure your identity, transactions, and access all your crypto securely, right from your mobile device.
          </p>

          <!-- Buttons Stack -->
          <div class="space-y-3">
            <!-- App Store Button -->
            <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" class="block w-full">
              <button class="w-full flex items-center justify-center gap-3 bg-[#007AFF] hover:bg-[#0066CC] text-white px-4 py-3 rounded-xl transition-all shadow-md active:scale-95">
                <svg viewBox="0 0 384 512" fill="currentColor" class="w-6 h-6">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 66.2 23.9 122.2 70.7 173.5 16.3 17.7 34 35.5 57.5 35.5 19.4 0 27.6-13.3 53.3-13.3 25.5 0 35.6 13.3 54.4 13.3 22 0 37.8-19.1 55.4-36.7 16.9-17 24.5-31.9 24.5-31.9-1 .1-44.1-16.7-44.3-64.4zm-9.6-138.6c15.8-19.8 26.5-49.6 20.3-68.2-19.2 2-43.1 11.4-56.5 27.4-13.6 15.6-26.2 45.4-20 65.1 20.2 1.9 41.5-6.9 56.2-24.3z"/>
                </svg>
                <div class="text-left leading-none">
                  <div class="text-[10px] opacity-80 font-medium">Download on the</div>
                  <div class="text-base font-bold">App Store</div>
                </div>
              </button>
            </a>

            <!-- Google Play Button -->
            <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" class="block w-full">
              <button class="w-full flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white px-4 py-3 rounded-xl transition-all shadow-md active:scale-95 border border-slate-700 dark:border-transparent">
                 <svg viewBox="0 0 512 512" fill="currentColor" class="w-6 h-6 text-emerald-500 dark:text-emerald-600">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div class="text-left leading-none">
                  <div class="text-[10px] opacity-80 font-medium dark:text-slate-500">GET IT ON</div>
                  <div class="text-base font-bold">Google Play</div>
                </div>
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const closePopup = () => {
  isVisible.value = false
  if (process.client) {
    sessionStorage.setItem('hasSeenAppPopup', 'true')
  }
}

const open = () => {
  isVisible.value = true
}

defineExpose({ open })

onMounted(() => {
  // Check if code is running in client
  if (typeof window !== 'undefined') {
    // 1. Check if mobile (width < 768px, typical md breakpoint)
    const isMobile = window.innerWidth < 768
    
    // 2. Check session storage
    const hasSeen = sessionStorage.getItem('hasSeenAppPopup')

    if (isMobile && !hasSeen) {
      isVisible.value = true
      
      // 3. Mark as seen immediately so it doesn't show again on reload/navigation
      sessionStorage.setItem('hasSeenAppPopup', 'true')

      // 4. Auto-close after 5 seconds ONLY for auto-popup
      setTimeout(() => {
        if (isVisible.value) {
           isVisible.value = false
        }
      }, 5000)
    }
  }
})
</script>

<style scoped>
/* Ensure transition works smoothly */
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
</style>
