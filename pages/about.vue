<template>
  <div class="min-h-screen bg-black text-white pb-12 font-inter">
    <!-- Header/Hero -->
    <section class="relative overflow-hidden border-b border-white/5" style="padding: 9rem 0 7rem; background: #000;">
      <!-- Ambient gradient -->
      <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16,185,129,0.15) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(52,211,153,0.06) 0%, transparent 60%);"></div>
      <!-- Grid -->
      <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 64px 64px;"></div>
      <!-- Orbs -->
      <div class="absolute rounded-full pointer-events-none" style="width:600px;height:600px;top:-150px;right:-100px;background:rgba(16,185,129,0.12);filter:blur(90px);"></div>
      <div class="absolute rounded-full pointer-events-none" style="width:350px;height:350px;bottom:-80px;left:5%;background:rgba(52,211,153,0.07);filter:blur(90px);"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Eyebrow pill -->
        <div class="mb-8" data-aos="fade-up">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold tracking-widest uppercase text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-500" style="box-shadow: 0 0 8px rgba(52,211,153,0.8);"></span>
            {{ $t('about.badge') }}
          </span>
        </div>

        <div class="max-w-4xl">
          <h1 class="font-black leading-[1.03] tracking-[-0.035em] text-white mb-6" style="font-size: clamp(2rem, 5vw, 4rem);">
            {{ $t('about.hero.title').split(' ').slice(0, 4).join(' ') }} <br>
            <span style="background: linear-gradient(135deg, #34d399 0%, #10b981 60%, #6ee7b7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; filter: drop-shadow(0 0 30px rgba(52,211,153,0.4));">{{ $t('about.hero.title').split(' ').slice(4).join(' ') }}</span>
          </h1>
          <p class="leading-relaxed max-w-2xl" style="color: rgba(209,250,229,0.75); font-size: 1.2rem;">
            {{ $t('about.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Grid Content -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

        <!-- Our Story -->
        <div class="bg-emerald-500/[0.04] backdrop-blur-2xl border border-emerald-500/10 rounded-[2rem] p-8 sm:p-10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.08] hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all" data-aos="fade-up">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">{{ $t('about.story.title') }}</h2>
          <p class="text-white text-sm leading-relaxed mb-4">{{ $t('about.story.p1') }}</p>
          <p class="text-white text-sm leading-relaxed">{{ $t('about.story.p2') }}</p>
        </div>

        <!-- Our Mission -->
        <div class="bg-emerald-500/[0.04] backdrop-blur-2xl border border-emerald-500/10 rounded-[2rem] p-8 sm:p-10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.08] hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all group" data-aos="fade-up" data-aos-delay="100">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <i class="las la-globe-americas text-emerald-400 text-3xl group-hover:scale-110 transition-transform"></i>
            {{ $t('about.mission.title') }}
          </h2>
          <p class="text-lg text-emerald-100/90 leading-relaxed font-medium">{{ $t('about.mission.headline') }}</p>
          <p class="text-white text-sm leading-relaxed mt-4">{{ $t('about.mission.description') }}</p>
        </div>

        <!-- What We Build -->
        <div class="bg-emerald-500/[0.04] backdrop-blur-2xl rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10 hover:border-emerald-500/40 transition-all hover:bg-emerald-500/[0.08] hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden border-l-4 border-l-emerald-500/50 flex flex-col" data-aos="fade-up">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-8">{{ $t('about.whatWeBuild.title') }}</h2>
          <ul class="space-y-8 relative z-10 flex-1">
            <li class="flex gap-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0"><i class="las la-layer-group text-emerald-400 text-xl"></i></div>
              <div>
                <h4 class="text-sm font-bold text-white mb-1">{{ $t('about.whatWeBuild.pteriPlatform.title') }}</h4>
                <p class="text-xs text-white leading-relaxed">{{ $t('about.whatWeBuild.pteriPlatform.description') }}</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0"><i class="las la-wallet text-emerald-400 text-xl"></i></div>
              <div>
                <h4 class="text-sm font-bold text-white mb-1">{{ $t('about.whatWeBuild.pteriWallet.title') }}</h4>
                <p class="text-xs text-white leading-relaxed">{{ $t('about.whatWeBuild.pteriWallet.description') }}</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0"><i class="las la-code text-purple-400 text-xl"></i></div>
              <div>
                <h4 class="text-sm font-bold text-white mb-1">{{ $t('about.whatWeBuild.pteriApis.title') }}</h4>
                <p class="text-xs text-white leading-relaxed">{{ $t('about.whatWeBuild.pteriApis.description') }}</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0"><i class="las la-city text-blue-400 text-xl"></i></div>
              <div>
                <h4 class="text-sm font-bold text-white mb-1">{{ $t('about.whatWeBuild.enterprise.title') }}</h4>
                <p class="text-xs text-white leading-relaxed">{{ $t('about.whatWeBuild.enterprise.description') }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Our Approach -->
        <div class="bg-emerald-500/[0.04] backdrop-blur-2xl rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10 hover:border-emerald-500/40 transition-all hover:bg-emerald-500/[0.08] hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col" data-aos="fade-up">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">{{ $t('about.approach.title') }}</h2>
          <div class="space-y-3 flex-1">
            <div class="flex items-start gap-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 hover:bg-emerald-500/10 transition-colors">
              <i class="las la-check-circle text-emerald-500 text-xl shrink-0 mt-0.5"></i>
              <div><span class="text-white text-sm font-bold block mb-1">{{ $t('about.approach.zeroCustody.title') }}</span><span class="text-xs text-white/80">{{ $t('about.approach.zeroCustody.description') }}</span></div>
            </div>
            <div class="flex items-start gap-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 hover:bg-emerald-500/10 transition-colors">
              <i class="las la-check-circle text-emerald-500 text-xl shrink-0 mt-0.5"></i>
              <div><span class="text-white text-sm font-bold block mb-1">{{ $t('about.approach.deterministicProof.title') }}</span><span class="text-xs text-white/80">{{ $t('about.approach.deterministicProof.description') }}</span></div>
            </div>
            <div class="flex items-start gap-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 hover:bg-emerald-500/10 transition-colors">
              <i class="las la-check-circle text-emerald-500 text-xl shrink-0 mt-0.5"></i>
              <div><span class="text-white text-sm font-bold block mb-1">{{ $t('about.approach.privacyFirst.title') }}</span><span class="text-xs text-white/80">{{ $t('about.approach.privacyFirst.description') }}</span></div>
            </div>
            <div class="flex items-start gap-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 hover:bg-emerald-500/10 transition-colors">
              <i class="las la-check-circle text-emerald-500 text-xl shrink-0 mt-0.5"></i>
              <div><span class="text-white text-sm font-bold block mb-1">{{ $t('about.approach.agenticEra.title') }}</span><span class="text-xs text-white/80">{{ $t('about.approach.agenticEra.description') }}</span></div>
            </div>
            <div class="flex items-start gap-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 hover:bg-emerald-500/10 transition-colors">
              <i class="las la-check-circle text-emerald-500 text-xl shrink-0 mt-0.5"></i>
              <div><span class="text-white text-sm font-bold block mb-1">{{ $t('about.approach.incrementalAdoption.title') }}</span><span class="text-xs text-white/80">{{ $t('about.approach.incrementalAdoption.description') }}</span></div>
            </div>
          </div>
        </div>

        <!-- Leadership — full width, stacked cards -->
        <div class="md:col-span-2 bg-emerald-500/[0.04] backdrop-blur-2xl rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.08] hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all" data-aos="fade-up">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-8">{{ $t('about.leadership.title') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <!-- Harvin Singh -->
            <div class="flex flex-col items-center text-center bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6 hover:border-emerald-500/20 hover:bg-emerald-500/10 transition-colors">
              <img src="/harvin-singh.jpg" alt="Harvin Singh"
                class="w-24 h-24 rounded-full object-cover shrink-0 border border-white/10 mb-5 shadow-lg" />
              <h4 class="text-white font-bold text-base uppercase tracking-widest leading-tight">Harvin Singh</h4>
              <p class="text-emerald-400 text-xs font-semibold mt-1 tracking-wide">{{ $t('about.leadership.founder') }}</p>
              <p class="text-white/80 text-sm leading-relaxed mt-5 flex-1">Harvin is building a universal trust infrastructure for the AI era, focused on replacing fragile existing enterprise systems with decentralized, cryptographic trust. With a clear vision for the agentic economy, he is working to redefine how identity, security, and digital interactions function at scale.</p>
              <a href="https://www.linkedin.com/in/harvin-singh-kakr/" target="_blank" rel="noopener"
                 class="mt-6 shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0077b5] hover:bg-[#006097] transition-colors shadow-md">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>

            <!-- Joseph Akpan -->
            <div class="flex flex-col items-center text-center bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6 hover:border-emerald-500/20 hover:bg-emerald-500/10 transition-colors">
              <img src="/joseph.jpg" alt="Joseph Akpan"
                class="w-24 h-24 rounded-full object-cover shrink-0 border border-white/10 mb-5 shadow-lg" />
              <h4 class="text-white font-bold text-base uppercase tracking-widest leading-tight">Joseph Akpan</h4>
              <p class="text-emerald-400 text-xs font-semibold mt-1 tracking-wide">Co-Founder &amp; CTO</p>
              <p class="text-white/80 text-sm leading-relaxed mt-5 flex-1">With extensive experience managing blockchain-powered projects, Joseph combines his leadership skills with deep technical knowledge to drive success. His passion is in integrating AI and blockchain to enhance decentralization, automation, and reduce human biases.</p>
            </div>

            <!-- Gurson Sidana -->
            <div class="flex flex-col items-center text-center bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6 hover:border-emerald-500/20 hover:bg-emerald-500/10 transition-colors">
              <img src="/gurson-updated.jpg" alt="Gurson Sidana"
                class="w-24 h-24 rounded-full object-cover object-center shrink-0 border border-white/10 mb-5 shadow-lg" />
              <h4 class="text-white font-bold text-base uppercase tracking-widest leading-tight">Gurson Sidana</h4>
              <p class="text-emerald-400 text-xs font-semibold mt-1 tracking-wide">Vice President</p>
              <p class="text-white/80 text-sm leading-relaxed mt-5 flex-1">Gurson is focused on building businesses that perform at the highest level while staying true to the values that got him here—community, resilience, and relationships. His goal is to create lasting impact, uplift others, and build legacies that extend far beyond profit.</p>
            </div>

          </div>
          <p class="text-white/90 text-sm md:text-base text-center mt-6 leading-relaxed border-t border-emerald-500/10 pt-6">{{ $t('about.leadership.teamDescription') }}</p>
        </div>

        <!-- Our Vision -->
        <div class="bg-emerald-500/[0.04] backdrop-blur-2xl rounded-[2rem] p-8 sm:p-12 border border-emerald-500/10 hover:border-emerald-500/40 md:col-span-2 text-center relative overflow-hidden group transition-all hover:bg-emerald-500/[0.08] hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]" data-aos="fade-up">
          <div class="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          <div class="absolute inset-0 bg-emerald-500/[0.02] group-hover:bg-emerald-500/[0.04] transition-colors z-0"></div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6 relative z-10">{{ $t('about.vision.title') }}</h2>
          <p class="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed relative z-10 font-medium">{{ $t('about.vision.description') }}</p>
        </div>

      </div>
    </div>

    <!-- Get In Touch & Future Steps -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
      <div class="bg-emerald-500/[0.02] border border-emerald-500/20 shadow-[0_0_80px_rgba(16,185,129,0.08)] p-12 rounded-[2rem] text-center relative overflow-hidden" data-aos="fade-up">
        <div class="absolute top-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6 relative z-10">{{ $t('about.cta.title') }}</h2>
        <div class="flex justify-center gap-4 flex-wrap relative z-10 mt-8">
          <a href="https://pteri.org" target="_blank" class="btn-primary flex items-center gap-2">{{ $t('about.cta.explorePlatform') }} <i class="las la-arrow-right"></i></a>
          <a href="https://pteri.kakr.org" target="_blank" class="px-6 py-3 rounded-xl font-bold text-sm bg-transparent hover:bg-emerald-500/5 border border-white/20 hover:border-emerald-500/60 text-white hover:text-emerald-400 transition-all">{{ $t('about.cta.downloadWallet') }}</a>
          <a href="https://docs.kakr.ai" target="_blank" class="px-6 py-3 rounded-xl font-bold text-sm bg-transparent hover:bg-emerald-500/5 border border-white/20 hover:border-emerald-500/60 text-white hover:text-emerald-400 transition-all">{{ $t('about.cta.readDocs') }}</a>
          <a href="/contact?intent=demo" class="px-6 py-3 rounded-xl font-bold text-sm bg-transparent hover:bg-emerald-500/5 border border-white/20 hover:border-emerald-500/60 text-white hover:text-emerald-400 transition-all">{{ $t('about.cta.bookDemo') }}</a>
        </div>
      </div>
    </section>



  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/useSEO'

const { setSEO } = useSEO()

// AEO: AboutPage + Person schemas for founders
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://kakr.ai/about#webpage',
  'url': 'https://kakr.ai/about',
  'name': 'About Kakr Labs — Building Foundational Trust for the AI Era',
  'description': 'Learn how Kakr Labs is building universal trust infrastructure for the AI era, replacing fragile existing enterprise systems with decentralized cryptographic authority.',
  'isPartOf': { '@id': 'https://kakr.ai/#website' },
  'about': { '@id': 'https://kakr.ai/#organization' }
}

const harvinSinghSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Harvin Singh',
  'jobTitle': 'Founder & CEO',
  'url': 'https://www.linkedin.com/in/harvin-singh-kakr/',
  'image': 'https://kakr.ai/harvin-singh.jpg',
  'sameAs': ['https://www.linkedin.com/in/harvin-singh-kakr/'],
  'worksFor': { '@id': 'https://kakr.ai/#organization' },
  'description': 'Building universal trust infrastructure for the AI era, focused on replacing fragile existing enterprise systems with decentralized, cryptographic trust.'
}

const josephAkpanSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Joseph Akpan',
  'jobTitle': 'Co-Founder & CTO',
  'image': 'https://kakr.ai/joseph.jpg',
  'worksFor': { '@id': 'https://kakr.ai/#organization' },
  'description': 'Combining leadership skills with deep technical knowledge in blockchain-powered projects, integrating AI and blockchain to enhance decentralization and automation.'
}

const gursonSidanaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Gurson Sidana',
  'jobTitle': 'Vice President',
  'image': 'https://kakr.ai/gurson-updated.jpg',
  'worksFor': { '@id': 'https://kakr.ai/#organization' },
  'description': 'Focused on building businesses that perform at the highest level while staying true to values of community, resilience, and relationships.'
}

setSEO({
  title: 'About Us | Kakr Labs - Building Foundational Trust',
  description: 'Learn how Kakr Labs is building universal trust infrastructure for the AI era, replacing fragile existing enterprise systems with decentralized cryptographic authority.',
  image: '/og/og-about.png',
  structuredData: [aboutPageSchema, harvinSinghSchema, josephAkpanSchema, gursonSidanaSchema]
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.font-inter {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.75); }
}
</style>


