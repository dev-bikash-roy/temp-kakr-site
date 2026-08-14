<template>
  <div class="min-h-screen bg-black text-white/80 pb-24 font-inter" :dir="isRtl ? 'rtl' : 'ltr'">
    <!-- Section 1: Hero -->
    <section class="relative overflow-hidden border-b border-white/5" style="padding: 9rem 0 7rem; background: #000;">
      <!-- Animated background -->
      <ClientOnly><HeroBackground /></ClientOnly>

      <div class="container-custom relative z-10">
        <!-- Eyebrow pill -->
        <div class="mb-8 wlt-anim wlt-anim--1" :class="isRtl ? 'text-right' : ''">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold tracking-widest uppercase text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-500" style="box-shadow: 0 0 8px rgba(52,211,153,0.8);"></span>
            {{ content.badge }}
          </span>
        </div>

        <div class="max-w-3xl" :class="isRtl ? 'text-right' : 'text-left'">
          <h1 class="font-black leading-[1.03] tracking-[-0.035em] text-white mb-6 page-hero-title">
            {{ content.titlePart1 }}<span style="background: linear-gradient(135deg, #34d399 0%, #10b981 60%, #6ee7b7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; filter: drop-shadow(0 0 30px rgba(52,211,153,0.4));">{{ content.titlePart2 }}</span>{{ content.titlePart3 }}
          </h1>
          <p class="max-w-xl leading-relaxed mb-8" style="font-size: 1.2rem; color: rgba(209,250,229,0.75);">{{ content.description }}</p>
          <div class="flex flex-wrap gap-3 mb-10">
            <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="btn-primary">{{ content.downloadIOS }}</a>
            <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="btn-ghost">{{ content.downloadAndroid }}</a>
            <a href="https://pteri.kakr.org" target="_blank" class="btn-ghost">{{ content.viewDocs }}</a>
          </div>
          <div class="grid grid-cols-3 gap-4 wlt-anim wlt-anim--5 max-w-xl">
            <div class="rounded-2xl p-4 text-center border border-emerald-500/20" style="background: rgba(16,185,129,0.07);">
              <div class="text-2xl font-bold text-emerald-400" style="filter: drop-shadow(0 0 8px rgba(52,211,153,0.5));">100%</div>
              <div class="text-xs text-white/40 mt-1">{{ content.statCustody }}</div>
            </div>
            <div class="rounded-2xl p-4 text-center border border-emerald-500/20" style="background: rgba(16,185,129,0.07);">
              <div class="text-2xl font-bold text-emerald-400" style="filter: drop-shadow(0 0 8px rgba(52,211,153,0.5));">{{ content.statZeroValue }}</div>
              <div class="text-xs text-white/40 mt-1">{{ content.statCloud }}</div>
            </div>
            <div class="rounded-2xl p-4 text-center border border-emerald-500/20" style="background: rgba(16,185,129,0.07);">
              <div class="text-2xl font-bold text-emerald-400" style="filter: drop-shadow(0 0 8px rgba(52,211,153,0.5));">{{ content.statMwebValue }}</div>
              <div class="text-xs text-white/40 mt-1">{{ content.statPrivacy }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Authentication & Approval -->
    <section class="container-custom py-12" data-aos="fade-up" data-aos-duration="700">
      <div class="rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10" style="background: rgba(16,185,129,0.03);">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">{{ content.authSectionTitle }}</h2>
          <p class="text-white/60 text-base">{{ content.authSectionSubtitle }}</p>
        </div>

        <div class="max-w-2xl mx-auto mb-8">
          <p class="text-white/60 mb-4 text-base whitespace-pre-line text-center">{{ content.whyDesc }}</p>
          <div class="grid sm:grid-cols-2 gap-2 mb-4">
            <div v-for="item in content.missing" :key="item" class="flex items-center gap-3 text-sm text-white/60" data-aos="fade-left">
              <div class="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              </div>{{ item }}
            </div>
          </div>
          <div class="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-sm text-white/70 text-center">
            {{ content.conclusionText }} <span class="text-emerald-400 font-bold">{{ content.conclusionHighlight }}</span> {{ content.conclusionSuffix }}
          </div>
        </div>

        <div class="mb-8 p-5 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl max-w-2xl mx-auto text-center" data-aos="fade-up">
          <p class="text-white/60 text-base">{{ content.quotePart1 }}</p>
          <p class="text-emerald-400 font-bold mt-1">{{ content.quotePart2 }}</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-4 mb-6">
          <div v-for="idx in [1, 5]" :key="idx" class="bg-black/50 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-2" data-aos="zoom-in">
            <div class="text-2xl">{{ content.features[idx].icon }}</div>
            <h4 class="font-bold text-white text-base">{{ content.features[idx].title }}</h4>
            <p class="text-sm text-white/50 leading-relaxed flex-1">{{ content.features[idx].desc }}</p>
            <p class="text-sm text-emerald-500 italic">{{ content.features[idx].tagline }}</p>
          </div>
        </div>

        <div class="flex items-start gap-4 bg-black/50 p-4 rounded-2xl border border-white/5 max-w-2xl mx-auto">
          <span class="text-2xl flex-shrink-0">{{ content.useCases[1].icon }}</span>
          <div>
            <h4 class="font-bold text-white text-base mb-1">{{ content.useCases[1].title }}</h4>
            <p class="text-sm text-white/50 leading-relaxed">{{ content.useCases[1].desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Customer-Controlled Credentials -->
    <section class="container-custom py-12" data-aos="fade-up" data-aos-duration="700">
      <div class="rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10" style="background: rgba(16,185,129,0.03);">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">{{ content.credSectionTitle }}</h2>
          <p class="text-white/60 text-base">{{ content.credSectionSubtitle }}</p>
        </div>

        <div class="grid sm:grid-cols-3 gap-4 mb-8">
          <div v-for="idx in [0, 2, 3]" :key="idx" class="bg-black/50 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-2" data-aos="zoom-in">
            <div class="text-2xl">{{ content.features[idx].icon }}</div>
            <h4 class="font-bold text-white text-base">{{ content.features[idx].title }}</h4>
            <p class="text-sm text-white/50 leading-relaxed flex-1">{{ content.features[idx].desc }}</p>
            <p class="text-sm text-emerald-500 italic">{{ content.features[idx].tagline }}</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
          <div class="flex items-start gap-4 bg-black/50 p-4 rounded-2xl border border-white/5">
            <span class="text-2xl flex-shrink-0">{{ content.useCases[3].icon }}</span>
            <div>
              <h4 class="font-bold text-white text-base mb-1">{{ content.useCases[3].title }}</h4>
              <p class="text-sm text-white/50 leading-relaxed">{{ content.useCases[3].desc }}</p>
            </div>
          </div>
          <div class="bg-black/50 p-4 rounded-2xl border border-white/5">
            <h4 class="font-bold text-white text-base mb-3">{{ content.usersLoveTitle }}</h4>
            <ul class="space-y-2 mb-3">
              <li v-for="item in content.userLove" :key="item" class="flex items-center gap-3 text-sm text-white/60">
                <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>{{ item }}
              </li>
            </ul>
            <p class="text-xs text-white/40 border-t border-white/5 pt-3">{{ content.usersLoveSummary }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Sensitive-Action Workflow -->
    <section class="container-custom py-12" data-aos="fade-up" data-aos-duration="700">
      <div class="rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10" style="background: rgba(16,185,129,0.03);">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">{{ content.workflowSectionTitle }}</h2>
          <p class="text-white/60 text-base">{{ content.workflowSectionSubtitle }}</p>
        </div>

        <div class="grid sm:grid-cols-3 gap-6 mb-8">
          <div v-for="(step, i) in content.workflowSteps" :key="i" class="relative bg-black/50 p-6 rounded-2xl border border-white/5" data-aos="fade-up" :data-aos-delay="i * 100">
            <div class="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm mb-4">{{ i + 1 }}</div>
            <h4 class="font-bold text-white text-base mb-2">{{ step.title }}</h4>
            <p class="text-sm text-white/50 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>

        <div class="flex items-start gap-4 bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl max-w-2xl mx-auto">
          <span class="text-2xl flex-shrink-0">{{ content.useCases[2].icon }}</span>
          <div>
            <h4 class="font-bold text-white text-base mb-1">{{ content.useCases[2].title }}</h4>
            <p class="text-sm text-white/50 leading-relaxed">{{ content.useCases[2].desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Application Screenshots -->
    <section class="container-custom py-12" data-aos="fade-up" data-aos-duration="700">
      <div class="rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10" style="background: rgba(16,185,129,0.03);">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">{{ content.screenshotsSectionTitle }}</h2>
          <p class="text-white/60 text-base">{{ content.screenshotsSectionSubtitle }}</p>
        </div>
        <div class="relative max-w-md mx-auto">
          <div class="relative overflow-hidden h-[480px] lg:h-[560px]"
            @touchstart.passive="onTouchStart"
            @touchend.passive="onTouchEnd"
          >
            <div class="flex transition-transform duration-500 ease-out h-full" :style="{transform: 'translateX(-' + activeSlide * 100 + '%)'}">
              <div v-for="(ss, i) in screenshots" :key="i" class="flex-shrink-0 w-full h-full flex items-center justify-center">
                <img :src="ss" alt="PTERI App" class="h-full w-auto object-contain rounded-2xl drop-shadow-2xl" style="max-height: 100%; max-width: 100%;" />
              </div>
            </div>
            <!-- Prev arrow -->
            <button
              @click="activeSlide = Math.max(activeSlide - 1, 0)"
              :class="activeSlide === 0 ? 'opacity-20 pointer-events-none' : 'opacity-80 hover:opacity-100'"
              class="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/20 hover:scale-110"
            >
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <!-- Next arrow -->
            <button
              @click="activeSlide = Math.min(activeSlide + 1, screenshots.length - 1)"
              :class="activeSlide === screenshots.length - 1 ? 'opacity-20 pointer-events-none' : 'opacity-80 hover:opacity-100'"
              class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/20 hover:scale-110"
            >
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
          <!-- Dots -->
          <div class="flex justify-center gap-2 mt-4">
            <button v-for="(_, i) in screenshots" :key="i" @click="activeSlide = i"
              class="rounded-full transition-all duration-300"
              :style="i === activeSlide ? 'width:20px; height:6px; background:#34d399;' : 'width:6px; height:6px; background:rgba(255,255,255,0.2);'" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6: Security Architecture -->
    <section class="container-custom py-12" data-aos="fade-up" data-aos-duration="700">
      <div class="rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10" style="background: rgba(16,185,129,0.03);">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">{{ content.archTitle }}</h2>
          <p class="text-white/60 text-base">{{ content.archSubtitle }}</p>
        </div>

        <div class="grid sm:grid-cols-3 gap-4 mb-8">
          <div v-for="(layer, i) in content.archLayers.filter((_, idx) => idx !== 2)" :key="i" class="bg-black/50 p-5 rounded-2xl border border-white/5 flex flex-col" data-aos="zoom-in" :data-aos-delay="i * 80">
            <h4 class="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">{{ layer.name }}</h4>
            <ul class="space-y-1.5">
              <li v-for="item in layer.items" :key="item" class="text-sm text-white/60 leading-relaxed flex items-baseline gap-2"><span class="text-emerald-500 flex-shrink-0">▸</span>{{ item }}</li>
            </ul>
          </div>
        </div>

        <div class="bg-black/50 p-5 rounded-2xl border border-white/5 max-w-xl mx-auto flex flex-col gap-2">
          <div class="text-2xl">{{ content.features[4].icon }}</div>
          <h4 class="font-bold text-white text-base">{{ content.features[4].title }}</h4>
          <p class="text-sm text-white/50 leading-relaxed">{{ content.features[4].desc }}</p>
          <p class="text-sm text-emerald-500 italic">{{ content.features[4].tagline }}</p>
        </div>
      </div>
    </section>

    <!-- Section 7: Supported Payments -->
    <section class="container-custom py-12" data-aos="fade-up" data-aos-duration="700">
      <div class="rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10" style="background: rgba(16,185,129,0.03);">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">{{ content.paymentsSectionTitle }}</h2>
          <p class="text-white/60 text-base">{{ content.paymentsSectionSubtitle }}</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
          <div class="flex items-start gap-4 bg-black/50 p-5 rounded-2xl border border-white/5">
            <span class="text-2xl flex-shrink-0">{{ content.useCases[0].icon }}</span>
            <div>
              <h4 class="font-bold text-white text-base mb-1">{{ content.useCases[0].title }}</h4>
              <p class="text-sm text-white/50 leading-relaxed">{{ content.useCases[0].desc }}</p>
            </div>
          </div>
          <div class="bg-black/50 p-5 rounded-2xl border border-white/5">
            <h4 class="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">{{ content.archLayers[2].name }}</h4>
            <ul class="space-y-1.5">
              <li v-for="item in content.archLayers[2].items" :key="item" class="text-sm text-white/60 leading-relaxed flex items-baseline gap-2"><span class="text-emerald-500 flex-shrink-0">▸</span>{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 8: Downloads & Web App -->
    <section class="container-custom py-12" data-aos="fade-up" data-aos-duration="700">
      <div class="rounded-[2rem] p-8 sm:p-10 border border-emerald-500/20 shadow-2xl" style="background: linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(0,0,0,0.9) 100%);">
        <div class="text-center max-w-2xl mx-auto mb-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">{{ content.downloadsSectionTitle }}</h2>
          <p class="text-white/60 text-base">{{ content.downloadsSectionSubtitle }}</p>
        </div>
        <div class="flex flex-wrap justify-center gap-4 mb-10">
          <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="btn-primary">{{ content.downloadIOS }}</a>
          <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="btn-ghost">{{ content.downloadAndroid }}</a>
          <a href="https://pteri.kakr.org" target="_blank" class="btn-ghost">{{ content.viewDocs }}</a>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="flex items-start gap-4 bg-black/50 p-4 rounded-2xl border border-white/5 mb-6">
            <span class="text-2xl flex-shrink-0">{{ content.useCases[4].icon }}</span>
            <div>
              <h4 class="font-bold text-white text-base mb-1">{{ content.useCases[4].title }}</h4>
              <p class="text-sm text-white/50 leading-relaxed">{{ content.useCases[4].desc }}</p>
            </div>
          </div>
          <h3 class="text-lg font-bold text-white mb-4">{{ content.devsLoveTitle }}</h3>
          <div class="space-y-3">
            <a href="https://docs.kakr.ai/docs/platform-capabilities/2.1-pteri-wallet-self-custody-identity" target="_blank" class="flex justify-between items-center bg-black/50 hover:bg-white/5 p-4 rounded-xl border border-white/5 transition-colors group">
              <span class="text-sm font-medium text-white/80 group-hover:text-white">{{ content.devDocsWallet }}</span>
              <i class="las la-arrow-right text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" :class="{'rotate-180': isRtl}"></i>
            </a>
            <a href="https://docs.kakr.ai/docs/platform-capabilities/2.3-identity-and-authentication" target="_blank" class="flex justify-between items-center bg-black/50 hover:bg-white/5 p-4 rounded-xl border border-white/5 transition-colors group">
              <span class="text-sm font-medium text-white/80 group-hover:text-white">{{ content.devDocsAuth }}</span>
              <i class="las la-arrow-right text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" :class="{'rotate-180': isRtl}"></i>
            </a>
            <a href="https://docs.kakr.ai" target="_blank" class="flex justify-between items-center bg-black/50 hover:bg-white/5 p-4 rounded-xl border border-white/5 transition-colors group">
              <span class="text-sm font-medium text-white/80 group-hover:text-white">{{ content.devDocsFull }}</span>
              <i class="las la-arrow-right text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" :class="{'rotate-180': isRtl}"></i>
            </a>
          </div>
          <p class="text-sm text-white/40 mt-4 text-center">{{ content.devsLoveSummary }}</p>
        </div>
      </div>
    </section>

    <!-- Section 9: FAQs -->
    <div class="container-custom py-12" data-aos="fade-up" data-aos-duration="700">
      <div class="rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10" style="background: rgba(16,185,129,0.03);">
        <h2 class="text-2xl font-bold text-white mb-10 text-center">{{ content.faqTitle }}</h2>
        <div class="flex flex-col gap-4 max-w-3xl mx-auto">
          <div
            v-for="(faq, i) in content.faqs"
            :key="i"
            class="rounded-2xl border transition-all duration-300"
            :class="openFaq === i
              ? 'border-emerald-500/40 bg-emerald-500/5 shadow-[0_0_24px_rgba(16,185,129,0.08)]'
              : 'border-emerald-500/10 hover:border-emerald-500/25 hover:bg-emerald-500/[0.03]'"
          >
            <button @click="toggleFaq(i)" class="w-full px-6 py-5 text-left flex items-center justify-between transition-colors">
              <span
                class="font-semibold text-sm pr-4 transition-colors duration-200"
                :class="openFaq === i ? 'text-white' : 'text-slate-300'"
              >{{ faq.q }}</span>
              <span
                class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ml-3"
                :class="openFaq === i ? 'bg-emerald-500 rotate-45' : 'bg-white/8'"
              >
                <svg class="w-3 h-3" :class="openFaq === i ? 'text-black' : 'text-white/70'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 5v14M5 12h14"/>
                </svg>
              </span>
            </button>
            <div v-show="openFaq === i" class="px-6 pb-5 pt-4 border-t border-white/5">
              <p class="text-white/50 text-sm leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 10: Final CTA -->
    <section class="container-custom py-12" data-aos="zoom-in" data-aos-duration="700">
      <div class="bg-[#0f0f0f] rounded-[2rem] p-12 text-center border border-white/5 relative overflow-hidden">
        <div class="absolute top-0 right-1/4 w-64 h-64 bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none"></div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">{{ content.ctaTitle }}</h2>
        <p class="text-white/60 mb-8 max-w-2xl mx-auto relative z-10">{{ content.ctaSubtitle }}</p>
        <div class="flex flex-wrap justify-center gap-4 relative z-10">
          <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="btn-primary">{{ content.downloadIOS }}</a>
          <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="btn-ghost">{{ content.downloadAndroid }}</a>
          <a href="https://docs.kakr.ai" target="_blank" class="btn-ghost">{{ content.devGuides }}</a>
        </div>
      </div>
    </section>

  </div>
</template>
<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale, localeProperties } = useI18n()
const { setSEO } = useSEO()

// AEO: MobileApplication schema for PTERI Wallet (iOS + Android)
const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  'name': 'PTERI App',
  'description': 'Passwordless authentication, delegated authority, customer-controlled keys, and Litecoin payments from a trusted device. Available for iOS and Android.',
  'applicationCategory': 'SecurityApplication',
  'operatingSystem': 'iOS, Android',
  'url': 'https://kakr.ai/wallet',
  'downloadUrl': 'https://apps.apple.com/us/app/pteri-wallet/id6751649780',
  'installUrl': 'https://apps.apple.com/us/app/pteri-wallet/id6751649780',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD'
  },
  'author': {
    '@id': 'https://kakr.ai/#organization'
  },
  'publisher': {
    '@id': 'https://kakr.ai/#organization'
  },
  'screenshot': [
    'https://kakr.ai/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.47.png',
    'https://kakr.ai/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.28.png'
  ],
  'featureList': [
    'Customer-controlled keys — never leave your device',
    'Self-custodial Litecoin payments',
    'Biometric approval (Face ID, Touch ID)',
    'Zero unencrypted credential storage on KAKR servers',
    'Passwordless authentication via cryptographic signing',
    'AES-256 encrypted backups',
    'AI agent identity delegation with scoped authority',
    'Step-up approval for sensitive actions'
  ],
  'softwareVersion': '1.0',
  'applicationSubCategory': 'Identity and Authorization'
}

// SEO is applied reactively via watchEffect below (handles all 5 locales)

const activeSlide = ref(0)
const screenshots = [
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.47.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.28.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.10.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.07.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.17.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.24.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.29.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.29.04.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.29.25.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.30.10.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-02 at 22.08.25.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-02 at 22.08.33.png',
  '/pteri-new-ss/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-27 at 01.17.18.png',
]
const openFaq = ref(null)
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i }

let touchStartX = 0
const onTouchStart = (e) => { touchStartX = e.touches[0].clientX }
const onTouchEnd = (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 40) {
    if (diff > 0) activeSlide.value = Math.min(activeSlide.value + 1, screenshots.length - 1)
    else activeSlide.value = Math.max(activeSlide.value - 1, 0)
  }
}

const isRtl = computed(() => localeProperties.value.dir === 'rtl')

const translations = {
  "en": {
    "badge": "PTERI App",
    "seoTitle": "PTERI App | Passwordless Authentication, Approvals, and Payments",
    "seoDescription": "The PTERI App lets you authenticate without passwords, control credentials, approve sensitive actions, and manage supported payments from a trusted device.",
    "seoImage": "/og/wallet-og.png",
    "titlePart1": "Your Identity.",
    "titlePart2": " Your Authority.",
    "titlePart3": " Your Control.",
    "description": "Authenticate without passwords, control credentials, review delegated authority, approve sensitive actions, and manage supported payments from a trusted device.",
    "downloadIOS": "Download for iOS",
    "downloadAndroid": "Download for Android",
    "viewDocs": "Open Web App",
    "devDocsWallet": "Wallet & Identity Docs",
    "devDocsAuth": "Authentication Docs",
    "devDocsFull": "Full Documentation",
    "statZeroValue": "Zero",
    "statMwebValue": "AES-256",
    "statCustody": "Self-Custody",
    "statCloud": "Unencrypted Storage",
    "statPrivacy": "Encryption",
    "whatIsTitle": "What the PTERI App Is",
    "whatIsDesc": "A self-custody Litecoin wallet and authentication device built for the Agentic Era:",
    "whatIsCards": [
      {
        "title": "Cryptographic encryption",
        "desc": "AES-256 encryption protects your keys with strong device-level security"
      },
      {
        "title": "Self-Custodial Payments",
        "desc": "Customer-controlled Litecoin payment credentials"
      },
      {
        "title": "Customer-controlled keys",
        "desc": "You own and control your credentials"
      },
      {
        "title": "Biometric approval",
        "desc": "Face ID and Touch ID"
      },
      {
        "title": "Device-side key isolation",
        "desc": "Secure enclave"
      },
      {
        "title": "Flutter performance",
        "desc": "Smooth, responsive UI"
      }
    ],
    "quotePart1": "It is not just a wallet",
    "quotePart2": "it is your personal authorization device for the digital world.",
    "featuresTitle": "Core Features",
    "features": [
      {
        "icon": "",
        "title": "Customer-Controlled Keys",
        "desc": "Private keys never leave the device. We cannot access your wallet.",
        "points": [
          "You own everything",
          "No unencrypted storage on our servers",
          "Complete control"
        ],
        "tagline": "Your keys stay in your hands."
      },
      {
        "icon": "",
        "title": "Biometric Approval",
        "desc": "Approve sensitive actions using Face ID, Touch ID, Android biometrics, and secure enclave hardware.",
        "points": [
          "Face ID support",
          "Touch ID support",
          "Secure enclave hardware"
        ],
        "tagline": "Your device becomes your approval mechanism."
      },
      {
        "icon": "",
        "title": "Encrypted Key Storage",
        "desc": "AES-256 encryption and on-device key storage keep your Litecoin payment credentials private.",
        "points": [
          "AES-256 encryption",
          "Keys never leave your device",
          "Customer-controlled credentials"
        ],
        "tagline": "Security by design."
      },
      {
        "icon": "",
        "title": "Encrypted Backups",
        "desc": "Optional end-to-end encrypted backups controlled by the user, protected with AES-256.",
        "points": [
          "AES-256 encryption",
          "Optional, user-controlled",
          "Biometric gating"
        ],
        "tagline": "Backups only you can decrypt."
      },
      {
        "icon": "",
        "title": "Responsive Performance",
        "desc": "Built in Flutter for modern performance with fast app load and smooth UI.",
        "points": [
          "Fast app load",
          "Smooth animations",
          "Hardware-accelerated"
        ],
        "tagline": "Designed for daily use."
      },
      {
        "icon": "",
        "title": "Passwordless Authentication",
        "desc": "PTERI App doubles as your authentication device to approve logins and sign authorization challenges.",
        "points": [
          "Approve logins",
          "Sign challenges",
          "PTERI Auth ready"
        ],
        "tagline": "Your device becomes your passwordless credential."
      }
    ],
    "whyTitle": "Why the PTERI App Exists",
    "whyDesc": "The PTERI App was designed for security workflows, not trading.\nIt provides what other apps do not:",
    "missing": [
      "Passwordless authentication",
      "Delegated authority",
      "IoT device identity",
      "Enterprise security workflows",
      "Developer integrations",
      "Privacy by design"
    ],
    "conclusionText": "So we built the PTERI App to be the",
    "conclusionHighlight": "authorization device for people, agents, and enterprise systems",
    "conclusionSuffix": "with no passwords and no shared secrets.",
    "useCasesTitle": "What You Can Do",
    "useCases": [
      {
        "icon": "",
        "title": "Store and Send Litecoin Securely",
        "desc": "Customer-controlled storage with cryptographic protection."
      },
      {
        "icon": "",
        "title": "Passwordless Authentication Device",
        "desc": "PTERI uses your device as your cryptographic credential — no passwords needed."
      },
      {
        "icon": "",
        "title": "Approve Sensitive Actions",
        "desc": "Step-up approval for high-risk operations and delegated authority."
      },
      {
        "icon": "",
        "title": "Manage On-Device Identity",
        "desc": "Your device holds your identity. No centralized username or password required."
      },
      {
        "icon": "",
        "title": "Build Apps That Use PTERI",
        "desc": "Developers can integrate authentication flows, agent authorization, and payments."
      }
    ],
    "archTitle": "Security Architecture",
    "archSubtitle": "Built on security-first principles",
    "archLayers": [
      {
        "name": "On Device",
        "items": [
          "Secure enclave",
          "Biometric lock",
          "AES-256 encrypted storage"
        ]
      },
      {
        "name": "In Transit",
        "items": [
          "TLS 1.2+",
          "Encrypted payloads"
        ]
      },
      {
        "name": "On Blockchain",
        "items": [
          "Litecoin Proof-of-Work",
          "Customer-controlled payment credentials",
          "Immutable transactions"
        ]
      },
      {
        "name": "In App",
        "items": [
          "Flutter layer",
          "State providers",
          "Message signing",
          "Auth approvals"
        ]
      }
    ],
    "usersLoveTitle": "Why Users Trust PTERI App",
    "userLove": [
      "No tracking",
      "No ads",
      "No analytics",
      "No data collection",
      "No shared secrets"
    ],
    "usersLoveSummary": "Customer-controlled credentials and cryptographically verifiable authorization.",
    "devsLoveTitle": "Why Developers Build With It",
    "devLove": [
      "Built for identity",
      "Built for authentication",
      "Built for enterprise security workflows",
      "Clean APIs",
      "Easy UI components",
      "Real-time Playground testing"
    ],
    "devsLoveSummary": "PTERI App is more than a wallet. It is a passwordless authorization device.",
    "authSectionTitle": "Authentication & Approval",
    "authSectionSubtitle": "Prove who you are and approve what matters — no passwords required.",
    "credSectionTitle": "Customer-Controlled Credentials",
    "credSectionSubtitle": "Your keys and credentials stay on your device. We never have access.",
    "workflowSectionTitle": "Sensitive-Action Workflow",
    "workflowSectionSubtitle": "Every high-risk action follows the same trusted approval path.",
    "workflowSteps": [
      {
        "title": "Request received",
        "desc": "A login, payment, or delegated agent action arrives that requires your authorization."
      },
      {
        "title": "Review and approval",
        "desc": "Review who is asking, what they want to do, and the scope of access — then approve, or trigger step-up verification for higher-risk actions."
      },
      {
        "title": "Evidence created",
        "desc": "A cryptographically signed record of your approval is created as auditable evidence, without ever exposing your keys."
      }
    ],
    "screenshotsSectionTitle": "See the PTERI App",
    "screenshotsSectionSubtitle": "A closer look at authentication, approvals, and identity on your device.",
    "paymentsSectionTitle": "Supported Payments",
    "paymentsSectionSubtitle": "An additional capability — manage self-custodial Litecoin payments from the same trusted device.",
    "downloadsSectionTitle": "Downloads & Web App",
    "downloadsSectionSubtitle": "Get the PTERI App on iOS, Android, or the web.",
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "Is this a custodial wallet?",
        "a": "No. 100% customer-controlled. Your keys stay on your device."
      },
      {
        "q": "Can Kakr Labs recover my wallet?",
        "a": "No. Only your seed phrase can. We have zero access to your wallet or keys."
      },
      {
        "q": "What chains do you support?",
        "a": "Litecoin only by design, for reliability and performance."
      },
      {
        "q": "Is PTERI App private?",
        "a": "Yes. Your private keys are AES-256 encrypted and stored only on your device — we never have access to them."
      },
      {
        "q": "Is this app secure?",
        "a": "Yes. Hardware security modules, biometric approval, and zero unencrypted credential storage on KAKR servers — all keys stay on your device."
      }
    ],
    "ctaTitle": "Download the PTERI App",
    "ctaSubtitle": "Passwordless authentication, delegated authority, and Litecoin payments from a trusted device.",
    "devGuides": "Developer Guides"
  },
  "de": {
    "badge": "PTERI App",
    "seoTitle": "PTERI App | Passwortlose Authentifizierung und Zahlungen",
    "seoDescription": "Authentifizieren Sie sich ohne Passwörter, kontrollieren Sie Anmeldedaten und verwalten Sie unterstützte Zahlungen von einem vertrauenswürdigen Gerät.",
    "titlePart1": "Ihre Identität.",
    "titlePart2": " Ihre Autorität.",
    "titlePart3": " Ihre Kontrolle.",
    "description": "Authentifizieren Sie sich ohne Passwörter, kontrollieren Sie Anmeldedaten, überprüfen Sie delegierte Autorität, genehmigen Sie sensible Aktionen und verwalten Sie unterstützte Zahlungen von einem vertrauenswürdigen Gerät.",
    "downloadIOS": "Fuer iOS herunterladen",
    "downloadAndroid": "Fuer Android herunterladen",
    "viewDocs": "Web-App öffnen",
    "devDocsWallet": "Wallet & Identitaets-Docs",
    "devDocsAuth": "Authentifizierungs-Docs",
    "devDocsFull": "Vollstaendige Dokumentation",
    "statZeroValue": "Null",
    "statMwebValue": "AES-256",
    "statCustody": "Selbstverwahrung",
    "statCloud": "Unverschlüsselter Speicher",
    "statPrivacy": "Verschlüsselung",
    "whatIsTitle": "Was ist die PTERI App",
    "whatIsDesc": "Eine selbstverwaltende Litecoin-Wallet und Authentifizierungsgerät für die Agentische Ära:",
    "whatIsCards": [
      {
        "title": "Kryptografische Verschlüsselung",
        "desc": "AES-256-Verschlüsselung schützt Ihre Schlüssel mit starker geräteseitiger Sicherheit"
      },
      {
        "title": "Selbstverwahrte Zahlungen",
        "desc": "Kundenkontrollierte Litecoin-Zahlungsdaten"
      },
      {
        "title": "Kundenkontrollierte Schlüssel",
        "desc": "Sie besitzen und kontrollieren Ihre Anmeldedaten"
      },
      {
        "title": "Biometrische Genehmigung",
        "desc": "Face ID und Touch ID"
      },
      {
        "title": "Geräteseitige Schlüsselisolation",
        "desc": "Secure Enclave"
      },
      {
        "title": "Flutter-Leistung",
        "desc": "Reaktionsschnelle Benutzeroberfläche"
      }
    ],
    "quotePart1": "Es ist nicht nur eine App",
    "quotePart2": "es ist Ihr persönliches Autorisierungsgerät für die digitale Welt.",
    "featuresTitle": "Kernfunktionen",
    "features": [
      {
        "icon": "",
        "title": "Kundenkontrollierte Schlüssel",
        "desc": "Private Schlüssel verlassen das Gerät nie. Wir können nicht auf Ihre Wallet zugreifen.",
        "points": [
          "Sie besitzen alles",
          "Keine unverschlüsselte Speicherung auf unseren Servern",
          "Vollständige Kontrolle"
        ],
        "tagline": "Ihre Schlüssel bleiben in Ihren Händen."
      },
      {
        "icon": "",
        "title": "Biometrische Genehmigung",
        "desc": "Genehmigen Sie Aktionen mit Face ID, Touch ID und Secure Enclave-Hardware.",
        "points": [
          "Face ID-Unterstützung",
          "Touch ID-Unterstützung",
          "Secure Enclave-Hardware"
        ],
        "tagline": "Ihr Gerät wird Ihr Genehmigungsmechanismus."
      },
      {
        "icon": "",
        "title": "Verschlüsselte Schlüsselspeicherung",
        "desc": "AES-256-Verschlüsselung und geräteseitige Schlüsselspeicherung schützen Ihre Litecoin-Zahlungsdaten.",
        "points": [
          "AES-256-Verschlüsselung",
          "Schlüssel verlassen nie Ihr Gerät",
          "Kundenkontrollierte Anmeldedaten"
        ],
        "tagline": "Sicherheit by Design."
      },
      {
        "icon": "",
        "title": "Verschlüsselte Backups",
        "desc": "Optionale Ende-zu-Ende-verschlüsselte Backups unter Kontrolle des Nutzers, geschützt mit AES-256.",
        "points": [
          "AES-256-Verschlüsselung",
          "Optional, nutzerkontrolliert",
          "Biometrische Absicherung"
        ],
        "tagline": "Backups, die nur Sie entschlüsseln können."
      },
      {
        "icon": "",
        "title": "Reaktionsschnelle Leistung",
        "desc": "Mit Flutter für schnelles App-Laden und eine reibungslose Benutzeroberfläche entwickelt.",
        "points": [
          "Schnelles App-Laden",
          "Flüssige Animationen",
          "Hardware-beschleunigt"
        ],
        "tagline": "Für den täglichen Einsatz konzipiert."
      },
      {
        "icon": "",
        "title": "Passwortlose Authentifizierung",
        "desc": "Die PTERI App dient als Authentifizierungsgerät zum Genehmigen von Anmeldungen und Signieren von Autorisierungsherausforderungen.",
        "points": [
          "Anmeldungen genehmigen",
          "Herausforderungen signieren",
          "PTERI Auth bereit"
        ],
        "tagline": "Ihr Gerät wird Ihr passwortloser Ausweis."
      }
    ],
    "whyTitle": "Warum die PTERI App existiert",
    "whyDesc": "Die meisten Krypto-Wallets wurden fuer den Handel entwickelt.\nKeine wurde entwickelt fuer:",
    "missing": [
      "Passwortlose Authentifizierung",
      "Delegierte Autorität",
      "IoT-Geräteidentität",
      "Enterprise-Sicherheitsabläufe",
      "Entwickler-Integrationen",
      "Datenschutz by Design"
    ],
    "conclusionText": "Deshalb haben wir die PTERI App als",
    "conclusionHighlight": "Autorisierungsgerät für Menschen, Agenten und Unternehmenssysteme",
    "conclusionSuffix": "entwickelt, ganz ohne Passwörter und ohne gemeinsame Geheimnisse.",
    "useCasesTitle": "Was Sie tun können",
    "useCases": [
      {
        "icon": "",
        "title": "Litecoin sicher aufbewahren und senden",
        "desc": "Kundenkontrollierter Speicher mit kryptografischem Schutz."
      },
      {
        "icon": "",
        "title": "Passwortloses Authentifizierungsgerät",
        "desc": "PTERI verwendet Ihr Gerät als kryptografischen Ausweis — keine Passwörter nötig."
      },
      {
        "icon": "",
        "title": "Sensible Aktionen genehmigen",
        "desc": "Step-up-Genehmigung für risikoreiche Vorgänge und delegierte Autorität."
      },
      {
        "icon": "",
        "title": "On-Device-Identität verwalten",
        "desc": "Ihr Gerät hält Ihre Identität. Kein zentralisierter Benutzername oder Passwort erforderlich."
      },
      {
        "icon": "",
        "title": "Apps mit PTERI entwickeln",
        "desc": "Entwickler können Authentifizierungsabläufe, Agenten-Autorisierung und Zahlungen integrieren."
      }
    ],
    "archTitle": "Sicherheitsarchitektur",
    "archSubtitle": "Auf sicherheitsorientierte Prinzipien aufgebaut",
    "archLayers": [
      {
        "name": "On Device",
        "items": [
          "Secure enclave",
          "Biometric lock",
          "AES-256 encrypted storage"
        ]
      },
      {
        "name": "In Transit",
        "items": [
          "TLS 1.2+",
          "Encrypted payloads"
        ]
      },
      {
        "name": "On Blockchain",
        "items": [
          "Litecoin Proof-of-Work",
          "Customer-controlled payment credentials",
          "Immutable transactions"
        ]
      },
      {
        "name": "In App",
        "items": [
          "Flutter layer",
          "State providers",
          "Message signing",
          "Auth approvals"
        ]
      }
    ],
    "usersLoveTitle": "Warum Benutzer PTERI Wallet lieben",
    "userLove": [
      "Kein Tracking",
      "Keine Werbung",
      "Keine Analytik",
      "Keine Datensammlung",
      "Kein Bullshit"
    ],
    "usersLoveSummary": "Kundenkontrollierte Anmeldedaten und kryptografisch überprüfbare Autorisierung.",
    "devsLoveTitle": "Warum Entwickler damit bauen",
    "devLove": [
      "Für Identität gebaut",
      "Für Authentifizierung gebaut",
      "Für Enterprise-Sicherheitsabläufe gebaut",
      "Saubere APIs",
      "Einfache UI-Komponenten",
      "Echtzeit-Playground-Tests"
    ],
    "devsLoveSummary": "Die PTERI App ist mehr als eine Wallet. Sie ist ein passwortloses Autorisierungsgerät.",
    "authSectionTitle": "Authentifizierung & Genehmigung",
    "authSectionSubtitle": "Weisen Sie nach, wer Sie sind, und genehmigen Sie, was zählt — ganz ohne Passwort.",
    "credSectionTitle": "Kundenkontrollierte Anmeldedaten",
    "credSectionSubtitle": "Ihre Schlüssel und Anmeldedaten bleiben auf Ihrem Gerät. Wir haben niemals Zugriff.",
    "workflowSectionTitle": "Ablauf für sensible Aktionen",
    "workflowSectionSubtitle": "Jede risikoreiche Aktion folgt demselben vertrauenswürdigen Genehmigungsweg.",
    "workflowSteps": [
      {
        "title": "Anfrage empfangen",
        "desc": "Eine Anmeldung, Zahlung oder delegierte Agenten-Aktion trifft ein und erfordert Ihre Autorisierung."
      },
      {
        "title": "Prüfung und Genehmigung",
        "desc": "Prüfen Sie, wer fragt, was getan werden soll und in welchem Umfang — genehmigen Sie dann, oder lösen Sie eine zusätzliche Verifizierung für risikoreichere Aktionen aus."
      },
      {
        "title": "Nachweis erstellt",
        "desc": "Ein kryptografisch signierter Nachweis Ihrer Genehmigung wird als prüfbarer Beleg erstellt, ohne dass Ihre Schlüssel je offengelegt werden."
      }
    ],
    "screenshotsSectionTitle": "Die PTERI App im Überblick",
    "screenshotsSectionSubtitle": "Ein genauerer Blick auf Authentifizierung, Genehmigungen und Identität auf Ihrem Gerät.",
    "paymentsSectionTitle": "Unterstützte Zahlungen",
    "paymentsSectionSubtitle": "Eine zusätzliche Funktion — verwalten Sie eigenverwahrte Litecoin-Zahlungen vom selben vertrauenswürdigen Gerät.",
    "downloadsSectionTitle": "Downloads & Web-App",
    "downloadsSectionSubtitle": "Holen Sie sich die PTERI App für iOS, Android oder das Web.",
    "faqTitle": "Häufig gestellte Fragen",
    "faqs": [
      {
        "q": "Ist dies eine Custody-Wallet?",
        "a": "Nein. 100% kundenkontrolliert. Ihre Schlüssel bleiben auf Ihrem Gerät."
      },
      {
        "q": "Kann Kakr Labs meine Wallet wiederherstellen?",
        "a": "Nein. Nur Ihre Seed-Phrase kann das. Wir haben keinen Zugriff auf Ihre Wallet oder Schlüssel."
      },
      {
        "q": "Welche Chains unterstützen Sie?",
        "a": "Nur Litecoin, aus Gründen der Zuverlässigkeit und Leistung."
      },
      {
        "q": "Ist die PTERI App privat?",
        "a": "Ja. Ihre privaten Schlüssel sind AES-256-verschlüsselt und werden nur auf Ihrem Gerät gespeichert — wir haben niemals Zugriff darauf."
      },
      {
        "q": "Ist diese App sicher?",
        "a": "Ja. Hardware-Sicherheitsmodule, biometrische Genehmigung und keine unverschlüsselte Speicherung von Zugangsdaten auf KAKR-Servern — alle Schlüssel bleiben auf Ihrem Gerät."
      }
    ],
    "ctaTitle": "PTERI App herunterladen",
    "ctaSubtitle": "Passwortlose Authentifizierung, delegierte Autorität und Litecoin-Zahlungen von einem vertrauenswürdigen Gerät.",
    "devGuides": "Entwickler-Leitfäden"
  },
  "es": {
    "badge": "PTERI App",
    "seoTitle": "PTERI App | Autenticación sin contraseña y pagos",
    "seoDescription": "Autentícate sin contraseñas, controla credenciales y gestiona pagos compatibles desde un dispositivo de confianza.",
    "titlePart1": "Tu identidad.",
    "titlePart2": " Tu autoridad.",
    "titlePart3": " Tu control.",
    "description": "Autentícate sin contraseñas, controla tus credenciales, revisa la autoridad delegada, aprueba acciones sensibles y gestiona los pagos compatibles desde un dispositivo de confianza.",
    "downloadIOS": "Descargar para iOS",
    "downloadAndroid": "Descargar para Android",
    "viewDocs": "Abrir App Web",
    "devDocsWallet": "Docs de Billetera e Identidad",
    "devDocsAuth": "Docs de Autenticación",
    "devDocsFull": "Documentación Completa",
    "statZeroValue": "Cero",
    "statMwebValue": "AES-256",
    "statCustody": "Autocustodia",
    "statCloud": "Almacenamiento No Cifrado",
    "statPrivacy": "Cifrado",
    "whatIsTitle": "Qué es la PTERI App",
    "whatIsDesc": "Una billetera Litecoin de autocustodia y dispositivo de autenticación para la Era Agéntica:",
    "whatIsCards": [
      {
        "title": "Cifrado criptográfico",
        "desc": "El cifrado AES-256 protege tus claves con seguridad a nivel de dispositivo"
      },
      {
        "title": "Pagos Autocustodiados",
        "desc": "Credenciales de pago Litecoin controladas por el cliente"
      },
      {
        "title": "Claves controladas por el cliente",
        "desc": "Tú posees y controlas tus credenciales"
      },
      {
        "title": "Aprobación biométrica",
        "desc": "Face ID y Touch ID"
      },
      {
        "title": "Aislamiento de claves en el dispositivo",
        "desc": "Secure Enclave"
      },
      {
        "title": "Rendimiento Flutter",
        "desc": "Interfaz de usuario fluida y responsiva"
      }
    ],
    "quotePart1": "No es solo una billetera",
    "quotePart2": "es tu dispositivo de autorización personal para el mundo digital.",
    "featuresTitle": "Características Principales",
    "features": [
      {
        "icon": "",
        "title": "Claves controladas por el cliente",
        "desc": "Las claves privadas nunca salen del dispositivo. No podemos acceder a tu billetera.",
        "points": [
          "Tú lo posees todo",
          "Sin almacenamiento sin cifrar en nuestros servidores",
          "Control completo"
        ],
        "tagline": "Tus claves permanecen en tus manos."
      },
      {
        "icon": "",
        "title": "Aprobación biométrica",
        "desc": "Aprueba acciones sensibles usando Face ID, Touch ID y hardware de Secure Enclave.",
        "points": [
          "Soporte Face ID",
          "Soporte Touch ID",
          "Hardware Secure Enclave"
        ],
        "tagline": "Tu dispositivo se convierte en tu mecanismo de aprobación."
      },
      {
        "icon": "",
        "title": "Almacenamiento cifrado de claves",
        "desc": "El cifrado AES-256 y el almacenamiento de claves en el dispositivo protegen tus credenciales de pago Litecoin.",
        "points": [
          "Cifrado AES-256",
          "Las claves nunca salen de tu dispositivo",
          "Credenciales controladas por el cliente"
        ],
        "tagline": "Seguridad por diseño."
      },
      {
        "icon": "",
        "title": "Copias de seguridad cifradas",
        "desc": "Copias de seguridad opcionales cifradas de extremo a extremo, controladas por el usuario, protegidas con AES-256.",
        "points": [
          "Cifrado AES-256",
          "Opcional, controlado por el usuario",
          "Puerta biométrica"
        ],
        "tagline": "Copias de seguridad que solo tú puedes descifrar."
      },
      {
        "icon": "",
        "title": "Rendimiento responsivo",
        "desc": "Construido en Flutter para carga rápida de la app y una interfaz fluida.",
        "points": [
          "Carga rápida",
          "Animaciones fluidas",
          "Acelerado por hardware"
        ],
        "tagline": "Diseñado para el uso diario."
      },
      {
        "icon": "",
        "title": "Autenticación sin contraseña",
        "desc": "La PTERI App sirve como dispositivo de autenticación para aprobar inicios de sesión y firmar desafíos.",
        "points": [
          "Aprobar inicios de sesión",
          "Firmar desafíos",
          "PTERI Auth listo"
        ],
        "tagline": "Tu dispositivo se convierte en tu credencial sin contraseña."
      }
    ],
    "whyTitle": "Por qué existe la PTERI App",
    "whyDesc": "La mayoría de las billeteras cripto fueron construidas para trading.\nNinguna fue construida para:",
    "missing": [
      "Autenticación sin contraseña",
      "Autoridad delegada",
      "Identidad de dispositivos IoT",
      "Flujos de seguridad empresarial",
      "Integraciones de desarrollador",
      "Privacidad por diseño"
    ],
    "conclusionText": "Así que construimos la PTERI App para ser el",
    "conclusionHighlight": "dispositivo de autorización para personas, agentes y sistemas empresariales",
    "conclusionSuffix": "sin contraseñas y sin secretos compartidos.",
    "useCasesTitle": "Lo que puedes hacer",
    "useCases": [
      {
        "icon": "",
        "title": "Almacenar y enviar Litecoin de forma segura",
        "desc": "Almacenamiento controlado por el cliente con protección criptográfica."
      },
      {
        "icon": "",
        "title": "Dispositivo de autenticación sin contraseña",
        "desc": "PTERI usa tu dispositivo como credencial criptográfica — sin contraseñas."
      },
      {
        "icon": "",
        "title": "Aprobar acciones sensibles",
        "desc": "Aprobación step-up para operaciones de alto riesgo y autoridad delegada."
      },
      {
        "icon": "",
        "title": "Gestionar identidad en el dispositivo",
        "desc": "Tu dispositivo mantiene tu identidad. No se requiere nombre de usuario ni contraseña centralizada."
      },
      {
        "icon": "",
        "title": "Construir apps con PTERI",
        "desc": "Los desarrolladores pueden integrar flujos de autenticación, autorización de agentes y pagos."
      }
    ],
    "archTitle": "Arquitectura de Seguridad",
    "archSubtitle": "Construido sobre principios de seguridad primero",
    "archLayers": [
      {
        "name": "On Device",
        "items": [
          "Secure enclave",
          "Biometric lock",
          "AES-256 encrypted storage"
        ]
      },
      {
        "name": "In Transit",
        "items": [
          "TLS 1.2+",
          "Encrypted payloads"
        ]
      },
      {
        "name": "On Blockchain",
        "items": [
          "Litecoin Proof-of-Work",
          "Customer-controlled payment credentials",
          "Immutable transactions"
        ]
      },
      {
        "name": "In App",
        "items": [
          "Flutter layer",
          "State providers",
          "Message signing",
          "Auth approvals"
        ]
      }
    ],
    "usersLoveTitle": "Por que los Usuarios Aman PTERI Wallet",
    "userLove": [
      "Sin seguimiento",
      "Sin anuncios",
      "Sin analitica",
      "Sin recopilacion de datos",
      "Sin tonterias"
    ],
    "usersLoveSummary": "Libertad de autocustodia pura y seguridad de grado profesional.",
    "devsLoveTitle": "Por que los Desarrolladores lo Aman",
    "devLove": [
      "Construido para identidad",
      "Construido para autenticacion",
      "Construido para apps blockchain empresariales",
      "APIs limpias",
      "Componentes UI faciles",
      "Pruebas en Playground en tiempo real"
    ],
    "devsLoveSummary": "PTERI Wallet es mas que una billetera. Es un dispositivo de autenticacion para Web3.",
    "authSectionTitle": "Autenticación y Aprobación",
    "authSectionSubtitle": "Demuestra quién eres y aprueba lo que importa — sin contraseñas.",
    "credSectionTitle": "Credenciales Controladas por el Cliente",
    "credSectionSubtitle": "Tus claves y credenciales permanecen en tu dispositivo. Nunca tenemos acceso.",
    "workflowSectionTitle": "Flujo de Acciones Sensibles",
    "workflowSectionSubtitle": "Cada acción de alto riesgo sigue la misma ruta de aprobación de confianza.",
    "workflowSteps": [
      {
        "title": "Solicitud recibida",
        "desc": "Llega un inicio de sesión, un pago o una acción de un agente delegado que requiere tu autorización."
      },
      {
        "title": "Revisión y aprobación",
        "desc": "Revisa quién solicita, qué quiere hacer y el alcance del acceso — luego aprueba o activa una verificación adicional para acciones de mayor riesgo."
      },
      {
        "title": "Evidencia creada",
        "desc": "Se crea un registro firmado criptográficamente de tu aprobación como evidencia auditable, sin exponer nunca tus claves."
      }
    ],
    "screenshotsSectionTitle": "Conoce la PTERI App",
    "screenshotsSectionSubtitle": "Una mirada más cercana a la autenticación, las aprobaciones y la identidad en tu dispositivo.",
    "paymentsSectionTitle": "Pagos Compatibles",
    "paymentsSectionSubtitle": "Una capacidad adicional — gestiona pagos Litecoin autocustodiados desde el mismo dispositivo de confianza.",
    "downloadsSectionTitle": "Descargas y App Web",
    "downloadsSectionSubtitle": "Obtén la PTERI App para iOS, Android o la web.",
    "faqTitle": "Preguntas Frecuentes",
    "faqs": [
      {
        "q": "¿Es esta una billetera de custodia?",
        "a": "No. 100% controlada por el cliente. Tus claves permanecen en tu dispositivo."
      },
      {
        "q": "¿Puede Kakr Labs recuperar mi billetera?",
        "a": "No. Solo tu frase semilla puede hacerlo. No tenemos acceso a tu billetera ni a tus claves."
      },
      {
        "q": "¿Qué cadenas soportan?",
        "a": "Solo Litecoin, por razones de confiabilidad y rendimiento."
      },
      {
        "q": "¿Es la PTERI App privada?",
        "a": "Sí. Tus claves privadas están cifradas con AES-256 y se almacenan solo en tu dispositivo — nunca tenemos acceso a ellas."
      },
      {
        "q": "¿Es esta app segura?",
        "a": "Sí. Módulos de seguridad de hardware, aprobación biométrica y cero almacenamiento sin cifrar de credenciales en los servidores de KAKR — todas las claves permanecen en tu dispositivo."
      }
    ],
    "ctaTitle": "Descargar la PTERI App",
    "ctaSubtitle": "Autenticación sin contraseña, autoridad delegada y pagos Litecoin desde un dispositivo de confianza.",
    "devGuides": "Guías para Desarrolladores"
  },
  "ja": {
    "badge": "PTERIアプリ",
    "seoTitle": "PTERIアプリ | パスワードレス認証と承認",
    "seoDescription": "パスワードなしで認証し、機密性の高いアクションを承認し、信頼できるデバイスから対応する決済を管理します。",
    "titlePart1": "あなたのアイデンティティ。",
    "titlePart2": " あなたの権限。",
    "titlePart3": " あなたのコントロール。",
    "description": "パスワードなしで認証し、資格情報を管理し、委任された権限を確認し、機密性の高いアクションを承認し、信頼できるデバイスから対応する決済を管理します。",
    "downloadIOS": "iOS版をダウンロード",
    "downloadAndroid": "Android版をダウンロード",
    "viewDocs": "Webアプリを開く",
    "devDocsWallet": "ウォレットとIDドキュメント",
    "devDocsAuth": "認証ドキュメント",
    "devDocsFull": "フルドキュメント",
    "statZeroValue": "0",
    "statMwebValue": "AES-256",
    "statCustody": "自己管理",
    "statCloud": "非暗号化ストレージ",
    "statPrivacy": "暗号化",
    "whatIsTitle": "PTERIアプリとは",
    "whatIsDesc": "エージェント時代のためのセルフカストディLitecoinウォレットと認証デバイス：",
    "whatIsCards": [
      {
        "title": "暗号化による保護",
        "desc": "AES-256暗号化が強力なデバイスレベルのセキュリティで鍵を保護します"
      },
      {
        "title": "セルフカストディ決済",
        "desc": "顧客管理型のLitecoin決済資格情報"
      },
      {
        "title": "顧客管理型鍵",
        "desc": "あなたが資格情報を所有し管理します"
      },
      {
        "title": "生体認証承認",
        "desc": "Face IDとTouch ID"
      },
      {
        "title": "デバイス側の鍵隔離",
        "desc": "セキュアエンクレーブによる保護"
      },
      {
        "title": "Flutterパフォーマンス",
        "desc": "スムーズでレスポンシブなUI"
      }
    ],
    "quotePart1": "これは単なるウォレットではありません",
    "quotePart2": "デジタル世界のあなた個人の承認デバイスです。",
    "featuresTitle": "コア機能",
    "features": [
      {
        "icon": "🔒",
        "title": "顧客管理型鍵",
        "desc": "秘密鍵はデバイスから出ません。私たちはあなたのウォレットにアクセスできません。",
        "points": [
          "あなたがすべてを所有",
          "当社サーバーに非暗号化データを保存しない",
          "完全なコントロール"
        ],
        "tagline": "鍵はあなたの手の中に。"
      },
      {
        "icon": "👤",
        "title": "生体認証承認",
        "desc": "Face ID、Touch ID、Android生体認証、セキュアエンクレーブで機密性の高いアクションを承認。",
        "points": [
          "Face ID対応",
          "Touch ID対応",
          "セキュアエンクレーブハードウェア"
        ],
        "tagline": "デバイスが承認メカニズムになります。"
      },
      {
        "icon": "🕵️",
        "title": "暗号化された鍵の保管",
        "desc": "AES-256暗号化とデバイス上の鍵保管により、ライトコインの決済資格情報を保護します。",
        "points": [
          "AES-256暗号化",
          "鍵はデバイスから出ません",
          "顧客管理型の資格情報"
        ],
        "tagline": "セキュリティ バイ デザイン。"
      },
      {
        "icon": "☁️",
        "title": "暗号化されたバックアップ",
        "desc": "ユーザーが管理するオプションのエンドツーエンド暗号化バックアップ(AES-256保護)。",
        "points": [
          "AES-256暗号化",
          "オプション、ユーザー管理",
          "生体認証によるゲート"
        ],
        "tagline": "あなただけが復号できるバックアップ。"
      },
      {
        "icon": "⚡",
        "title": "レスポンシブなパフォーマンス",
        "desc": "Flutterで構築され、高速起動とスムーズなUIを実現。",
        "points": [
          "高速起動",
          "スムーズなアニメーション",
          "ハードウェアアクセラレーション"
        ],
        "tagline": "日常使いのために設計。"
      },
      {
        "icon": "🔑",
        "title": "パスワードレス認証",
        "desc": "PTERIアプリはログイン承認や認証チャレンジの署名デバイスとして機能します。",
        "points": [
          "ログイン承認",
          "チャレンジへの署名",
          "PTERI Auth対応"
        ],
        "tagline": "デバイスがパスワードレス資格情報になります。"
      }
    ],
    "whyTitle": "なぜPTERIアプリが必要なのか",
    "whyDesc": "ほとんどの暗号資産ウォレットは取引のために作られました。\n以下のために作られたものはありません：",
    "missing": [
      "パスワードレス認証",
      "委任権限",
      "IoTデバイスアイデンティティ",
      "エンタープライズセキュリティワークフロー",
      "開発者統合",
      "プライバシーバイデザイン"
    ],
    "conclusionText": "だから私たちはPTERIアプリを",
    "conclusionHighlight": "人、エージェント、エンタープライズシステムのための承認デバイス",
    "conclusionSuffix": "として、パスワードや共有シークレットを使わずに構築しました。",
    "useCasesTitle": "できること",
    "useCases": [
      {
        "icon": "💰",
        "title": "ライトコインを安全に保管・送金",
        "desc": "顧客管理型ストレージと暗号による保護。"
      },
      {
        "icon": "🔐",
        "title": "パスワードレス認証デバイス",
        "desc": "PTERIはデバイスを暗号資格情報として使用します—パスワード不要。"
      },
      {
        "icon": "🏠",
        "title": "機密性の高いアクションを承認",
        "desc": "高リスク操作と委任権限のステップアップ承認。"
      },
      {
        "icon": "🆔",
        "title": "デバイス上のアイデンティティ管理",
        "desc": "デバイスがあなたのアイデンティティを保持します。中央集権的なユーザー名やパスワードは不要です。"
      },
      {
        "icon": "🛠️",
        "title": "PTERIを使用したアプリ構築",
        "desc": "開発者は認証フロー、エージェント認可、決済を統合できます。"
      }
    ],
    "archTitle": "セキュリティアーキテクチャ",
    "archSubtitle": "セキュリティ優先の原則に基づいて構築",
    "archLayers": [
      {
        "name": "デバイス上",
        "items": [
          "セキュアエンクレーブ",
          "生体認証ロック",
          "AES-256暗号化ストレージ"
        ]
      },
      {
        "name": "転送中",
        "items": [
          "TLS 1.2+",
          "暗号化されたペイロード"
        ]
      },
      {
        "name": "ブロックチェーン上",
        "items": [
          "ライトコイン Proof-of-Work",
          "顧客管理型の決済資格情報",
          "不変の取引"
        ]
      },
      {
        "name": "アプリ内",
        "items": [
          "Flutter層",
          "ステートプロバイダー",
          "メッセージ署名",
          "認証承認"
        ]
      }
    ],
    "usersLoveTitle": "ユーザーがPTERIアプリを信頼する理由",
    "userLove": [
      "追跡なし",
      "広告なし",
      "分析なし",
      "データ収集なし",
      "共有シークレットなし"
    ],
    "usersLoveSummary": "顧客管理型資格情報と暗号学的に検証可能な承認。",
    "devsLoveTitle": "開発者が採用する理由",
    "devLove": [
      "アイデンティティのために構築",
      "認証のために構築",
      "エンタープライズセキュリティワークフローのために構築",
      "クリーンなAPI",
      "簡単なUIコンポーネント",
      "リアルタイムのPlaygroundテスト"
    ],
    "devsLoveSummary": "PTERIアプリは単なるウォレット以上。パスワードレス承認デバイスです。",
    "authSectionTitle": "認証と承認",
    "authSectionSubtitle": "パスワードなしで本人確認を行い、重要な操作を承認します。",
    "credSectionTitle": "顧客管理型の資格情報",
    "credSectionSubtitle": "鍵と資格情報はデバイス上に留まります。私たちがアクセスすることはありません。",
    "workflowSectionTitle": "機密性の高いアクションのワークフロー",
    "workflowSectionSubtitle": "リスクの高いアクションはすべて、同じ信頼できる承認プロセスをたどります。",
    "workflowSteps": [
      {
        "title": "リクエスト受信",
        "desc": "ログイン、決済、または委任されたエージェントのアクションなど、承認が必要なリクエストが届きます。"
      },
      {
        "title": "確認と承認",
        "desc": "誰が何を求めているか、アクセスの範囲を確認し、承認するか、リスクの高い操作にはステップアップ検証を行います。"
      },
      {
        "title": "証拠の作成",
        "desc": "鍵を一切公開することなく、承認の暗号署名付き記録が監査可能な証拠として作成されます。"
      }
    ],
    "screenshotsSectionTitle": "PTERIアプリを見る",
    "screenshotsSectionSubtitle": "デバイス上の認証、承認、アイデンティティを詳しく見てみましょう。",
    "paymentsSectionTitle": "対応する決済",
    "paymentsSectionSubtitle": "追加機能として、同じ信頼できるデバイスからセルフカストディのLitecoin決済を管理できます。",
    "downloadsSectionTitle": "ダウンロードとWebアプリ",
    "downloadsSectionSubtitle": "iOS、Android、またはWebでPTERIアプリを入手できます。",
    "faqTitle": "よくある質問",
    "faqs": [
      {
        "q": "これはカストディアルウォレットですか？",
        "a": "いいえ。100%顧客管理型です。鍵はデバイスに留まります。"
      },
      {
        "q": "Kakr Labsはウォレットを復元できますか？",
        "a": "いいえ。シードフレーズのみが可能です。ウォレットや鍵へのアクセスは一切ありません。"
      },
      {
        "q": "どのチェーンをサポートしていますか？",
        "a": "信頼性とパフォーマンスのため、設計上ライトコインのみをサポートしています。"
      },
      {
        "q": "PTERIアプリはプライベートですか？",
        "a": "はい。秘密鍵はAES-256で暗号化され、お使いのデバイスにのみ保存されます — 私たちがアクセスすることは一切ありません。"
      },
      {
        "q": "このアプリは安全ですか？",
        "a": "はい。ハードウェアセキュリティモジュール、生体認証承認、KAKRサーバー上での資格情報の非暗号化ストレージはゼロです — 鍵はすべてお使いのデバイスに保存されます。"
      }
    ],
    "ctaTitle": "PTERIアプリをダウンロード",
    "ctaSubtitle": "信頼できるデバイスからパスワードレス認証、委任権限、Litecoin決済。",
    "devGuides": "開発者ガイド"
  },
  "ar": {
    "badge": "تطبيق PTERI",
    "seoTitle": "تطبيق PTERI | مصادقة بدون كلمة مرور ومدفوعات",
    "seoDescription": "المصادقة بدون كلمات مرور، والتحكم في الاعتمادات، وإدارة المدفوعات المدعومة من جهاز موثوق.",
    "titlePart1": "هويتك.",
    "titlePart2": " سلطتك.",
    "titlePart3": " تحكمك.",
    "description": "المصادقة بدون كلمات مرور، والتحكم في بيانات الاعتماد، ومراجعة السلطة المفوَّضة، والموافقة على الإجراءات الحساسة، وإدارة المدفوعات المدعومة من جهاز موثوق.",
    "downloadIOS": "تحميل لنظام iOS",
    "downloadAndroid": "تحميل لنظام أندرويد",
    "viewDocs": "فتح التطبيق على الويب",
    "devDocsWallet": "وثائق المحفظة والهوية",
    "devDocsAuth": "وثائق المصادقة",
    "devDocsFull": "الوثائق الكاملة",
    "statZeroValue": "صفر",
    "statMwebValue": "AES-256",
    "statCustody": "تحكم ذاتي",
    "statCloud": "تخزين غير مشفر",
    "statPrivacy": "التشفير",
    "whatIsTitle": "ما هو تطبيق PTERI",
    "whatIsDesc": "محفظة لايتكوين ذاتية الحفظ وجهاز مصادقة لعصر الوكلاء:",
    "whatIsCards": [
      {
        "title": "تشفير تشفيري",
        "desc": "تشفير AES-256 يحمي مفاتيحك بأمان قوي على مستوى الجهاز"
      },
      {
        "title": "مدفوعات ذاتية الحفظ",
        "desc": "بيانات اعتماد دفع لايتكوين يتحكم بها العميل"
      },
      {
        "title": "مفاتيح يتحكم بها العميل",
        "desc": "أنت تملك اعتماداتك وتتحكم بها"
      },
      {
        "title": "موافقة بيومترية",
        "desc": "بصمة الوجه وبصمة الإصبع"
      },
      {
        "title": "عزل المفاتيح على الجهاز",
        "desc": "منطقة آمنة (Secure Enclave)"
      },
      {
        "title": "أداء Flutter",
        "desc": "واجهة مستخدم سلسة وسريعة الاستجابة"
      }
    ],
    "quotePart1": "ليس مجرد تطبيق",
    "quotePart2": "بل هو جهاز التفويض الشخصي للعالم الرقمي.",
    "featuresTitle": "المميزات الأساسية",
    "features": [
      {
        "icon": "🔒",
        "title": "مفاتيح يتحكم بها العميل",
        "desc": "المفاتيح الخاصة لا تغادر الجهاز أبداً. لا يمكننا الوصول إلى محفظتك.",
        "points": [
          "أنت تملك كل شيء",
          "لا تخزين غير مشفر على خوادمنا",
          "تحكم كامل"
        ],
        "tagline": "مفاتيحك تبقى في يدك."
      },
      {
        "icon": "👤",
        "title": "موافقة بيومترية",
        "desc": "وافق على الإجراءات الحساسة باستخدام بصمة الوجه، بصمة الإصبع، والمنطقة الآمنة.",
        "points": [
          "دعم بصمة الوجه",
          "دعم بصمة الإصبع",
          "أجهزة المنطقة الآمنة"
        ],
        "tagline": "جهازك يصبح آلية الموافقة الخاصة بك."
      },
      {
        "icon": "🕵️",
        "title": "تخزين مفاتيح مشفر",
        "desc": "يحمي تشفير AES-256 وتخزين المفاتيح على الجهاز بيانات اعتماد دفع لايتكوين الخاصة بك.",
        "points": [
          "تشفير AES-256",
          "المفاتيح لا تغادر جهازك أبداً",
          "بيانات اعتماد يتحكم بها العميل"
        ],
        "tagline": "الأمان بالتصميم."
      },
      {
        "icon": "☁️",
        "title": "نسخ احتياطي مشفر",
        "desc": "نسخ احتياطي اختياري مشفر من طرف إلى طرف يتحكم به المستخدم، محمي بـ AES-256.",
        "points": [
          "تشفير AES-256",
          "اختياري، يتحكم به المستخدم",
          "بوابة بيومترية"
        ],
        "tagline": "نسخ احتياطية يمكنك أنت فقط فك تشفيرها."
      },
      {
        "icon": "⚡",
        "title": "أداء سريع الاستجابة",
        "desc": "مبني باستخدام Flutter لأداء سريع وواجهة سلسة.",
        "points": [
          "تحميل سريع",
          "رسوم متحركة سلسة",
          "تسريع الأجهزة"
        ],
        "tagline": "مصمم للاستخدام اليومي."
      },
      {
        "icon": "🔑",
        "title": "مصادقة بدون كلمة مرور",
        "desc": "يعمل تطبيق PTERI كجهاز مصادقة للموافقة على تسجيل الدخول وتوقيع تحديات التفويض.",
        "points": [
          "الموافقة على تسجيل الدخول",
          "توقيع التحديات",
          "جاهز لـ PTERI Auth"
        ],
        "tagline": "جهازك يصبح بيانات اعتمادك بدون كلمة مرور."
      }
    ],
    "whyTitle": "لماذا يوجد تطبيق PTERI",
    "whyDesc": "معظم محافظ الكريبتو صممت للتداول.\nلم يتم بناء أي منها لـ:",
    "missing": [
      "المصادقة بدون كلمة مرور",
      "السلطة المفوضة",
      "هوية أجهزة IoT",
      "سير عمل أمن المؤسسات",
      "تكامل المطورين",
      "الخصوصية بالتصميم"
    ],
    "conclusionText": "لذلك قمنا ببناء تطبيق PTERI ليكون",
    "conclusionHighlight": "جهاز التفويض للأشخاص والوكلاء وأنظمة المؤسسات",
    "conclusionSuffix": "بدون كلمات مرور وبدون أسرار مشتركة.",
    "useCasesTitle": "ماذا يمكنك أن تفعل؟",
    "useCases": [
      {
        "icon": "💰",
        "title": "تخزين وإرسال لايتكوين بأمان",
        "desc": "تخزين يتحكم به العميل مع حماية تشفيرية."
      },
      {
        "icon": "🔐",
        "title": "جهاز مصادقة بدون كلمة مرور",
        "desc": "يستخدم PTERI جهازك كبيانات اعتماد تشفيرية — بدون كلمات مرور."
      },
      {
        "icon": "🏠",
        "title": "الموافقة على الإجراءات الحساسة",
        "desc": "موافقة متدرجة للعمليات عالية المخاطر والسلطة المفوضة."
      },
      {
        "icon": "🆔",
        "title": "إدارة الهوية على الجهاز",
        "desc": "جهازك يحمل هويتك. لا حاجة لاسم مستخدم أو كلمة مرور مركزية."
      },
      {
        "icon": "🛠️",
        "title": "بناء تطبيقات مع PTERI",
        "desc": "يمكن للمطورين دمج تدفقات المصادقة وتفويض الوكلاء والمدفوعات."
      }
    ],
    "archTitle": "بنية الأمان",
    "archSubtitle": "مبني على مبادئ الأمن أولاً",
    "archLayers": [
      {
        "name": "على الجهاز",
        "items": [
          "المنطقة الآمنة",
          "القفل البيومتري",
          "تخزين مشفر AES-256"
        ]
      },
      {
        "name": "أثناء النقل",
        "items": [
          "TLS 1.2+",
          "بيانات مشفرة"
        ]
      },
      {
        "name": "على البلوكشين",
        "items": [
          "إثبات العمل للايتكوين",
          "بيانات اعتماد دفع يتحكم بها العميل",
          "معاملات غير قابلة للتغيير"
        ]
      },
      {
        "name": "داخل التطبيق",
        "items": [
          "طبقة Flutter",
          "مزودي الحالة",
          "توقيع الرسائل",
          "موافقات المصادقة"
        ]
      }
    ],
    "usersLoveTitle": "لماذا يثق المستخدمون في تطبيق PTERI",
    "userLove": [
      "لا تتبع",
      "لا إعلانات",
      "لا تحليلات",
      "لا جمع بيانات",
      "لا أسرار مشتركة"
    ],
    "usersLoveSummary": "اعتمادات يتحكم بها العميل وتفويض قابل للتحقق التشفيري.",
    "devsLoveTitle": "لماذا يبني المطورون معه",
    "devLove": [
      "مبني للهوية",
      "مبني للمصادقة",
      "مبني لسير عمل أمن المؤسسات",
      "واجهات برمجة نظيفة",
      "مكونات واجهة مستخدم سهلة",
      "اختبار فوري في Playground"
    ],
    "devsLoveSummary": "تطبيق PTERI أكثر من مجرد محفظة. إنه جهاز تفويض بدون كلمة مرور.",
    "authSectionTitle": "المصادقة والموافقة",
    "authSectionSubtitle": "أثبت هويتك ووافق على ما يهم — بدون كلمات مرور.",
    "credSectionTitle": "بيانات الاعتماد التي يتحكم بها العميل",
    "credSectionSubtitle": "تبقى مفاتيحك وبيانات اعتمادك على جهازك. لا نملك الوصول إليها أبداً.",
    "workflowSectionTitle": "سير عمل الإجراءات الحساسة",
    "workflowSectionSubtitle": "يتبع كل إجراء عالي الخطورة نفس مسار الموافقة الموثوق.",
    "workflowSteps": [
      {
        "title": "استلام الطلب",
        "desc": "يصل تسجيل دخول أو دفعة أو إجراء وكيل مفوَّض يتطلب موافقتك."
      },
      {
        "title": "المراجعة والموافقة",
        "desc": "راجع من يطلب، وماذا يريد أن يفعل، ونطاق الوصول — ثم وافق، أو فعّل تحققاً إضافياً للإجراءات الأعلى خطورة."
      },
      {
        "title": "إنشاء الدليل",
        "desc": "يتم إنشاء سجل موقّع تشفيرياً لموافقتك كدليل قابل للتدقيق، دون الكشف عن مفاتيحك أبداً."
      }
    ],
    "screenshotsSectionTitle": "تعرف على تطبيق PTERI",
    "screenshotsSectionSubtitle": "نظرة أقرب على المصادقة والموافقات والهوية على جهازك.",
    "paymentsSectionTitle": "المدفوعات المدعومة",
    "paymentsSectionSubtitle": "قدرة إضافية — إدارة مدفوعات لايتكوين ذاتية الحفظ من نفس الجهاز الموثوق.",
    "downloadsSectionTitle": "التحميلات وتطبيق الويب",
    "downloadsSectionSubtitle": "احصل على تطبيق PTERI لنظام iOS أو أندرويد أو الويب.",
    "faqTitle": "الأسئلة الشائعة",
    "faqs": [
      {
        "q": "هل هذه محفظة حضانة؟",
        "a": "لا. 100% يتحكم بها العميل. مفاتيحك تبقى على جهازك."
      },
      {
        "q": "هل يمكن لـ Kakr Labs استعادة محفظتي؟",
        "a": "لا. فقط عبارة البذور الخاصة بك يمكنها ذلك. ليس لدينا أي وصول للمحفظة أو المفاتيح."
      },
      {
        "q": "ما هي الشبكات التي تدعمونها؟",
        "a": "لايتكوين فقط، من أجل الموثوقية والأداء."
      },
      {
        "q": "هل تطبيق PTERI خاص؟",
        "a": "نعم. مفاتيحك الخاصة مشفرة بمعيار AES-256 ومخزنة فقط على جهازك — لا يمكننا الوصول إليها أبداً."
      },
      {
        "q": "هل هذا التطبيق آمن؟",
        "a": "نعم. وحدات أمن الأجهزة، والموافقة البيومترية، وعدم وجود تخزين غير مشفر لبيانات الاعتماد على خوادم KAKR — تبقى جميع المفاتيح على جهازك."
      }
    ],
    "ctaTitle": "تحميل تطبيق PTERI",
    "ctaSubtitle": "مصادقة بدون كلمة مرور، سلطة مفوضة، ومدفوعات لايتكوين من جهاز موثوق.",
    "devGuides": "أدلة المطورين"
  }
}

const content = computed(() => translations[locale.value] || translations.en)

watchEffect(() => {
  setSEO({
    title: content.value.seoTitle,
    description: content.value.seoDescription,
    image: content.value.seoImage || '/wallet-og.png',
    structuredData: [mobileAppSchema]
  })
})
</script>

<style scoped>
/* ── Wallet hero load-in animations ── */
@keyframes wlt-rise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes wlt-fade {
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
}
.wlt-anim { opacity: 0; animation: wlt-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
.wlt-anim--1 { animation-delay: 0.05s; }
.wlt-anim--2 { animation-delay: 0.18s; }
.wlt-anim--3 { animation-delay: 0.32s; animation-name: wlt-fade; }
.wlt-anim--4 { animation-delay: 0.44s; }
.wlt-anim--5 { animation-delay: 0.56s; }

.font-inter { font-family: 'Inter', -apple-system, sans-serif; }
</style>



