<template>
  <div class="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-inter">
    <!-- No page-level header: layouts/default.vue already renders the shared
         AppHeader, and the previous sticky "Back to Home" bar overlapped it
         (audit p9.1). -->
    <main class="w-full">
      
      <!-- ░░ SECTION 1: HERO (RESORED CONTENT) ░░ -->
      <section class="relative pt-24 pb-20 overflow-hidden">
        <div class="absolute inset-0 pointer-events-none z-0" style="background-image: url('/hero-bg.svg'); background-size: cover; background-position: top center; opacity: 0.1;"></div>
        
        <div class="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
            Get in Touch
          </div>
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Connect with our team
          </h1>
          <p class="text-white text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Schedule a product demo with an expert or reach out for general inquiries.
          </p>

          <!-- Trust Row -->
          <div class="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/5 text-white opacity-60 text-xs font-bold uppercase tracking-wider">
            <div class="flex items-center gap-2"><i class="las la-check-circle text-emerald-400 text-lg"></i> No commitment required</div>
            <div class="flex items-center gap-2"><i class="las la-user-check text-emerald-400 text-lg"></i> Speak with the product team</div>
            <div class="flex items-center gap-2"><i class="las la-shield-alt text-emerald-400 text-lg"></i> Enterprise-grade security</div>
          </div>
        </div>
      </section>

      <!-- ░░ SECTION 2: PLATFORM DEMO (NEW 1:2 LAYOUT) ░░ -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-24 mb-12 border-t border-white/5">
        <div class="layout">
          <!-- Left Panel -->
          <div class="left-panel" data-aos="fade-right">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              PTERI Platform Demo
            </div>
            <h2 class="text-3xl lg:text-4xl font-black text-white leading-tight mb-8 tracking-tighter">
              Book a Focused Walkthrough<br>with <span class="text-emerald-400">our Sales Team</span>
            </h2>
            <div class="space-y-6 text-white text-base lg:text-lg leading-relaxed">
              <p>Talk to KAKR Labs about protecting people, AI agents, and enterprise workflows with passwordless authentication, runtime authorization, and verifiable action evidence. Request a pilot, review an integration, or discuss a high-risk workflow with our team.</p>
              
              <div class="pt-8 border-t border-white/10">
                <h3 class="text-white font-bold mb-4 uppercase text-[10px] tracking-widest opacity-60">In this call, we will cover:</h3>
                <ul class="space-y-4">
                  <li v-for="(item, i) in focusPoints" :key="i" class="flex gap-4 group">
                    <div class="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-emerald-500/20">
                      <i class="las la-check text-emerald-400 text-[10px]"></i>
                    </div>
                    <span class="text-sm">
                      <strong class="text-white">{{ item.title }}:</strong> <span class="opacity-80">{{ item.desc }}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <p class="pt-8 italic text-emerald-400 font-medium text-sm">
                Looking forward to discussing how we might collaborate. See you then!
              </p>
            </div>
          </div>

          <!-- Right Panel: Calendar -->
          <div class="right-panel" data-aos="fade-left">
            <HubspotCalendar />
          </div>
        </div>
      </section>

      <!-- ░░ SECTION 3: CONTACT FORM ░░ -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-white/5 bg-white/[0.02]">
        <div class="text-center mb-16" data-aos="fade-up">
          <p class="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-3">Send Us a Message</p>
          <h2 class="text-4xl lg:text-5xl font-black text-white mb-4">Or fill out the form below</h2>
          <p class="text-white/60 text-lg max-w-2xl mx-auto">Tell us about your use case and we'll match you with the right solution.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <div class="max-w-3xl mx-auto rounded-3xl overflow-hidden border border-white/8" style="background: #0d0d0d;">
            <div class="px-8 py-6 border-b border-white/5 text-center" style="background: rgba(16,185,129,0.06);">
              <h3 class="text-white font-bold text-xl">Get in Touch</h3>
              <p class="text-white/60 text-sm mt-1">Tell us about your use case and our team will follow up.</p>
            </div>
            <div class="p-8">
              <ContactHubSpotForm />
            </div>
          </div>
        </div>
      </section>

      <!-- ░░ SECTION 4: APP DOWNLOAD (RESORED CONTENT) ░░ -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-white/5 text-center">
        <div data-aos="fade-up">
          <p class="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-4">Mobile App</p>
          <h2 class="text-4xl lg:text-5xl font-black text-white mb-6">Download the PTERI App</h2>
          <p class="text-white/60 text-lg max-w-2xl mx-auto mb-12">
            A self-custody Litecoin wallet with biometric protection, built for the agentic era.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" rel="noopener" class="hover:scale-105 transition-transform">
              <img src="/ios.png" alt="Download on the App Store" class="h-14 w-auto" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" rel="noopener" class="hover:scale-105 transition-transform">
              <img src="/playstore.png" alt="Get it on Google Play" class="h-14 w-auto" />
            </a>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import HubspotCalendar from "@/components/HubspotCalendar.vue";
import { useSEO } from '~/composables/useSEO'

const { setSEO } = useSEO()
setSEO({
  title: 'Contact KAKR.ai | Identity and Authorization Security for Your Organization',
  description: 'Contact KAKR Labs for PTERI enterprise deployment, pilots, and partnerships in identity and authorization security.',
  image: '/contact-og.png',
})

const focusPoints = [
  { title: 'PTERI Platform', desc: 'Auth, identity, payments, and AI delegation.' },
  { title: 'PTERI App', desc: 'Customer-controlled keys with biometric approval.' },
  { title: 'PTERI APIs', desc: 'Full SDKs and documentation.' },
  { title: 'Enterprise', desc: 'Google Cloud-backed infrastructure.' }
]

onMounted(() => {
  const loadForm = () => {
    if ((window as any).hbspt) {
      ;(window as any).hbspt.forms.create({
        region: 'na2',
        portalId: '245270532',
        formId: 'addaed80-8534-4ae5-9642-4ce1cf2b98fc',
        target: '.hs-form-container-contact',
      })
    }
  }

  if ((window as any).hbspt) {
    loadForm()
  } else {
    const script = document.createElement('script')
    script.src = 'https://js-na2.hsforms.net/forms/embed/v2.js'
    script.async = true
    script.defer = true
    script.charset = 'utf-8'
    script.onload = loadForm
    document.head.appendChild(script)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: start;
}

@media (min-width: 1024px) {
  .layout {
    grid-template-columns: 1fr 1.6fr;
    gap: 100px;
  }
}
</style>


