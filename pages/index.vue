<template>
  <div class="bg-black text-white min-h-screen">
    <!-- 1. HERO -->
    <section
      class="home-hero page-hero relative overflow-hidden"
      style="background-color: #0a0a0a;"
      aria-labelledby="hero-title"
    >
      <!-- Animated background (aurora + particle canvas) -->
      <ClientOnly>
        <HeroBackground />
      </ClientOnly>
      <!-- Fade to black at bottom -->
      <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-[1] pointer-events-none"></div>

      <div class="container-custom relative z-10 w-full home-hero__grid">

        <!-- ── LEFT: copy column ── -->
        <div class="home-hero__copy">

          <!-- Eyebrow -->
          <p class="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4 hero-anim hero-anim--title">
            {{ content.hero.eyebrow }}
          </p>

          <!-- H1 — one page-level heading, kept as HTML (not in SVG) -->
          <h1 id="hero-title" class="home-hero__title font-bold tracking-tight text-white hero-anim hero-anim--title">
            {{ content.hero.titlePart1 }}<br />
            <span
              class="relative z-10"
              style="background: linear-gradient(90deg, #34d399 0%, #10b981 50%, #059669 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
            >{{ content.hero.titlePart2 }}</span>
          </h1>

          <!-- Description -->
          <p class="home-hero__subtitle text-slate-300 leading-relaxed hero-anim hero-anim--sub">
            {{ content.hero.subtitle }}
          </p>

          <!-- CTA Buttons — min 44px height enforced via btn classes -->
          <div class="home-hero__actions flex flex-col sm:flex-row flex-wrap gap-3 hero-anim hero-anim--cta">
            <a
              href="https://pteri.org/Register"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto btn-primary"
            >{{ content.hero.getStarted }}</a>

            <a
              href="#pteri-platform"
              class="w-full sm:w-auto btn-ghost"
            >{{ content.hero.learnMore }}</a>
          </div>

          <!-- Proof line -->
          <div class="home-hero__badge-row hero-anim hero-anim--badge">
            <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-slate-400 text-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true"></span>
              {{ content.hero.proofLine }}
            </div>
          </div>

        </div><!-- /copy -->

        <!-- ── RIGHT: PTERI animation graphic ── -->
        <div class="home-hero__media hero-anim hero-anim--media">
          <ClientOnly>
            <!-- GSAP animation — loads after hydration to avoid SSR mismatch -->
            <PteriHeroAnimation />
            <!-- Static fallback shown while ClientOnly loads -->
            <template #fallback>
              <img
                src="/pteri-hero/pteri-hero-desktop.svg"
                alt="A person and an AI agent are verified by PTERI before an enterprise action is approved and verifiable evidence is created."
                class="w-full h-auto"
                width="1600"
                height="900"
              />
            </template>
          </ClientOnly>
        </div><!-- /media -->

      </div><!-- /grid -->
    </section>

    <!-- 2. PARTNERS (Keep existing) -->
    <div data-aos="fade-up">
      <BuiltWithKakr />
    </div>

    <!-- 3. THE AUTHORITY GAP -->
    <section id="authority-gap" class="section-py bg-black border-t border-white/5">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
          <p class="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">{{ content.authorityGap.eyebrow }}</p>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5">{{ content.authorityGap.headline }}</h2>
          <p class="text-slate-400 text-base sm:text-lg leading-relaxed mb-3">{{ content.authorityGap.description1 }}</p>
          <p class="text-slate-400 text-base sm:text-lg leading-relaxed">{{ content.authorityGap.description2 }}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div
            v-for="(card, i) in content.authorityGap.cards"
            :key="i"
            class="authority-card group relative rounded-2xl p-6 overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="i * 80"
          >
            <!-- hover glow -->
            <div class="authority-card__glow"></div>

            <div class="relative z-10">
              <div class="authority-card__icon">
                <span v-html="authorityGapIcons[i]"></span>
              </div>
              <h3 class="font-bold text-white text-base mb-2">{{ card.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed">{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. UNIFIED PLATFORM -->
    <div data-aos="fade-up">
      <EcosystemFlowChart />
    </div>

    <!-- 5. EXISTING ENTERPRISE SYSTEMS -->
    <section class="section-py bg-black border-t border-white/5 overflow-hidden">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <!-- Left: copy -->
          <div class="lg:col-span-5" data-aos="fade-right">
            <p class="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">{{ content.enterpriseSystems.eyebrow }}</p>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5">{{ content.enterpriseSystems.headline }}</h2>
            <p class="text-slate-400 text-base leading-relaxed mb-8">{{ content.enterpriseSystems.description }}</p>
            <div class="flex flex-col sm:flex-row gap-3">
              <a href="https://docs.kakr.ai/docs/product-and-access/13.1-pricing-plans?_highlight=ent#pteri-enterprise" target="_blank" rel="noopener noreferrer" class="btn-primary">{{ content.enterpriseSystems.cta1 }}</a>
              <a href="https://docs.kakr.ai/" target="_blank" class="btn-ghost">{{ content.enterpriseSystems.cta2 }}</a>
            </div>
          </div>

          <!-- Right: framed checklist panel -->
          <div class="lg:col-span-7 rounded-[2rem] border border-emerald-500/10 bg-emerald-500/[0.015] p-2 sm:p-3" data-aos="fade-left" data-aos-delay="100">
            <div
              v-for="(card, i) in content.enterpriseSystems.cards"
              :key="i"
              class="flex items-start gap-4 p-4 sm:p-5"
              :class="i !== content.enterpriseSystems.cards.length - 1 ? 'border-b border-white/5' : ''"
            >
              <div class="w-9 h-9 rounded-lg flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h3 class="font-bold text-white text-base mb-1">{{ card.title }}</h3>
                <p class="text-slate-400 text-sm leading-relaxed">{{ card.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. AI-AGENT SECURITY -->
    <section class="section-py relative overflow-hidden bg-black border-t border-white/5">
      <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      </div>
      <div class="container-custom relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
          <p class="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-4">{{ content.aiAgentSecurity.eyebrow }}</p>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5">{{ content.aiAgentSecurity.headline }}</h2>
          <p class="text-slate-400 text-base sm:text-lg leading-relaxed">{{ content.aiAgentSecurity.description }}</p>
        </div>
        <div class="max-w-4xl mx-auto border-y border-white/5">
          <div
            v-for="(card, i) in content.aiAgentSecurity.cards"
            :key="i"
            class="flex items-center gap-5 sm:gap-8 py-6"
            :class="i !== content.aiAgentSecurity.cards.length - 1 ? 'border-b border-white/5' : ''"
            data-aos="fade-up"
            :data-aos-delay="i * 60"
          >
            <span class="text-cyan-400/30 font-black text-3xl sm:text-4xl flex-shrink-0 w-10 sm:w-12">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="w-11 h-11 rounded-full flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
              <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/></svg>
            </div>
            <div class="flex-1 text-left">
              <h3 class="font-bold text-white text-base mb-1">{{ card.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed">{{ card.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Illustrative agent-authority example card -->
        <div class="max-w-md mx-auto mt-10 sm:mt-14 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] p-6" data-aos="fade-up">
          <span class="inline-block text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 mb-4">{{ content.aiAgentSecurity.exampleCard.label }}</span>
          <h3 class="font-bold text-white text-lg mb-4">{{ content.aiAgentSecurity.exampleCard.agent }}</h3>
          <dl class="space-y-2 text-sm">
            <div class="flex items-center justify-between gap-4">
              <dt class="text-slate-400">{{ content.aiAgentSecurity.exampleCard.actionLabel }}</dt>
              <dd class="text-white font-medium text-right">{{ content.aiAgentSecurity.exampleCard.action }}</dd>
            </div>
            <div class="flex items-center justify-between gap-4">
              <dt class="text-slate-400">{{ content.aiAgentSecurity.exampleCard.maxValueLabel }}</dt>
              <dd class="text-white font-medium text-right">{{ content.aiAgentSecurity.exampleCard.maxValue }}</dd>
            </div>
            <div class="flex items-center justify-between gap-4">
              <dt class="text-slate-400">{{ content.aiAgentSecurity.exampleCard.validForLabel }}</dt>
              <dd class="text-white font-medium text-right">{{ content.aiAgentSecurity.exampleCard.validFor }}</dd>
            </div>
            <div class="flex items-center justify-between gap-4">
              <dt class="text-slate-400">{{ content.aiAgentSecurity.exampleCard.approvalLabel }}</dt>
              <dd class="text-white font-medium text-right">{{ content.aiAgentSecurity.exampleCard.approval }}</dd>
            </div>
            <div class="flex items-center justify-between gap-4 pt-2 border-t border-white/10">
              <dt class="text-slate-400">{{ content.aiAgentSecurity.exampleCard.statusLabel }}</dt>
              <dd class="text-emerald-400 font-bold text-right flex items-center gap-1.5 justify-end"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>{{ content.aiAgentSecurity.exampleCard.status }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- 7. HOW PTERI WORKS -->
    <section class="section-py bg-black border-t border-white/5">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
          <p class="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">{{ content.howItWorks.eyebrow }}</p>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{{ content.howItWorks.headline }}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          <div v-for="(step, i) in content.howItWorks.steps" :key="i" class="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative" data-aos="fade-up" :data-aos-delay="i * 80">
            <div class="text-emerald-400 font-black text-2xl mb-3">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3 class="font-bold text-white text-base mb-2">{{ step.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. USE CASES -->
    <section class="section-py bg-black border-t border-white/5">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
          <p class="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">{{ content.useCasesGrid.eyebrow }}</p>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{{ content.useCasesGrid.headline }}</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <div
            v-for="(card, i) in content.useCasesGrid.cards"
            :key="i"
            class="bento-card rounded-2xl p-6"
            :class="(i === 0 || i === content.useCasesGrid.cards.length - 1) ? 'lg:col-span-2' : ''"
            data-aos="fade-up"
            :data-aos-delay="i * 60"
          >
            <span class="bento-card__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="font-bold text-white text-base mb-2">{{ card.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. INTEGRATION -->
    <section class="section-py bg-black border-t border-white/5">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <p class="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">{{ content.integration.eyebrow }}</p>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5">{{ content.integration.headline }}</h2>
            <p class="text-slate-400 text-base leading-relaxed mb-6">{{ content.integration.description }}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              <div v-for="(label, i) in content.integration.labels" :key="i" class="flex items-center gap-2 text-sm text-slate-300">
                <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                {{ label }}
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
              <a href="https://docs.kakr.ai/" target="_blank" class="btn-primary">{{ content.integration.cta1 }}</a>
              <a href="https://pteri.org/Register" target="_blank" class="btn-ghost">{{ content.integration.cta2 }}</a>
            </div>
          </div>
          <div data-aos="fade-left" class="rounded-2xl border border-white/10 overflow-hidden" style="background: #0d1117;">
            <div class="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-500/70"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                <span class="w-3 h-3 rounded-full bg-green-500/70"></span>
              </div>
              <span class="text-xs text-slate-500 font-mono">{{ content.integration.codeTitle }}</span>
              <span class="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-white/10 rounded-full px-2 py-0.5">{{ content.integration.pseudocodeLabel }}</span>
            </div>
            <pre class="p-5 text-xs sm:text-sm leading-relaxed overflow-x-auto"><code class="font-mono text-slate-300">identity = pteri.identify(user_or_agent)
action   = pteri.define_action(resource, purpose)
authority = pteri.get_delegated_authority(identity)

decision = pteri.evaluate_policy(identity, action, authority)

if decision.allowed:
    evidence = pteri.verify(decision)
    return execute(action, evidence)
else:
    return deny(decision.reason)</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. DIFFERENTIATION -->
    <div data-aos="fade-up">
      <TrustLayerDifference />
    </div>

    <!-- 11. TRUST ARCHITECTURE -->
    <section class="section-py relative overflow-hidden bg-black border-t border-white/5">
      <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
      <div class="absolute inset-0 pointer-events-none" style="background-image: url('/hero-bg.svg'); background-size: cover; opacity: 0.02;"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-2xl mx-auto" data-aos="fade-up">

          <!-- Label + Headline -->
          <div class="text-center mb-8 sm:mb-12">
            <p class="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">{{ content.securitySection?.label || 'VERIFIABLE BY DESIGN' }}</p>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{{ content.securitySection?.title || 'Evidence That Does Not Depend on a Single System\'s Assertion' }}</h2>
            <p class="text-slate-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">{{ content.securitySection?.description || 'PTERI combines customer-controlled credentials, cryptographic verification, and an independent trust architecture to create durable authorization evidence.' }}</p>
          </div>

          <!-- List rows -->
          <div class="space-y-0">
            <div
              v-for="(item, i) in securityPoints"
              :key="i"
              class="flex items-center justify-between gap-6 py-4 sm:py-6 border-b"
              :class="i === 0 ? 'border-t border-white/8' : 'border-white/8'"
              data-aos="fade-up"
              :data-aos-delay="i * 80"
            >
              <!-- Left: icon + text -->
              <div class="flex items-center gap-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10" v-html="item.icon"></div>
                <div>
                  <p class="font-bold text-white text-base">{{ item.title }}</p>
                  <p class="text-slate-400 text-sm mt-0.5">{{ item.desc }}</p>
                </div>
              </div>

              <!-- Right: green check circle -->
              <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-emerald-600">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Technical disclosure (first Litecoin mention on the homepage) -->
          <p class="text-slate-500 text-xs sm:text-sm mt-8 sm:mt-10 text-center leading-relaxed">
            {{ content.securitySection?.disclosure || 'PTERI currently uses Litecoin proof-of-work and privacy-enhancing technologies as components of its independent verification architecture.' }}
          </p>

        </div>
      </div>
    </section>

    <!-- 12. SECURITY BOUNDARY -->
    <section class="section-py bg-black border-t border-white/5">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <p class="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-4">{{ content.securityBoundarySection.eyebrow }}</p>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5">{{ content.securityBoundarySection.headline }}</h2>
          <p class="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">{{ content.securityBoundarySection.description }}</p>
          <p class="text-slate-500 text-sm leading-relaxed mb-8 bg-white/[0.02] border border-white/5 rounded-xl p-5">{{ content.securityBoundarySection.disclosure }}</p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/trust-center" class="btn-primary">{{ content.securityBoundarySection.cta1 }}</a>
            <a href="/trust-center" class="btn-ghost">{{ content.securityBoundarySection.cta2 }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 8.9 FULL WIDTH VIDEO -->
    <div data-aos="fade-up">
      <FullWidthVideo />
    </div>

    <!-- 13. PTERI APP -->
    <div data-aos="fade-up">
      <IOSHeroSection />
    </div>

    <!-- 13.5 LATEST FROM KAKR — immediately before the FAQ section (handoff §1).
         Renders from the shared newsroom collection and hides itself until three
         reviewed articles exist; no hard-coded cards. -->
    <NewsroomLatestNewsSection />

    <!-- 8.95 SHORT FAQ -->
    <section class="section-py bg-black border-t border-white/5 relative overflow-hidden">
      <!-- Ambient glow -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div class="container-custom relative z-10">

        <!-- Header -->
        <div class="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {{ content.faq.title }}
          </span>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Everything you need<br class="hidden sm:block" />
            <span style="background: linear-gradient(90deg, #34d399 0%, #10b981 60%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"> to know</span>
          </h2>
          <p class="mt-4 text-slate-400 text-base sm:text-lg max-w-xl mx-auto whitespace-nowrap">Questions we get asked most about PTERI, security, and how it all works.</p>
        </div>

        <!-- Two-column FAQ — CSS columns so expanding one card doesn't affect the other column -->
        <div class="max-w-5xl mx-auto mb-12 sm:columns-2 columns-1 [column-gap:1.25rem]" data-aos="fade-up" data-aos-delay="100">
          <div
            v-for="(item, i) in content.faq.items"
            :key="i"
            class="group rounded-2xl border transition-all duration-300 break-inside-avoid mb-5"
            :class="activeFaq === i
              ? 'border-emerald-500/40 bg-emerald-500/5 shadow-[0_0_24px_rgba(16,185,129,0.08)]'
              : 'border-emerald-500/10 bg-white/[0.02] hover:border-emerald-500/25 hover:bg-emerald-500/[0.03]'"
          >
            <!-- Question row -->
            <button
              class="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left"
              @click="toggleFaq(i)"
            >
              <span
                class="font-semibold text-sm sm:text-base leading-snug transition-colors duration-200"
                :class="activeFaq === i ? 'text-white' : 'text-slate-300 group-hover:text-white'"
              >{{ item.question }}</span>

              <!-- Animated icon -->
              <span
                class="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                :class="activeFaq === i ? 'bg-emerald-500 rotate-45' : 'bg-white/8 group-hover:bg-white/14'"
              >
                <svg class="w-3 h-3" :class="activeFaq === i ? 'text-black' : 'text-white/70'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 5v14M5 12h14"/>
                </svg>
              </span>
            </button>

            <!-- Answer -->
            <div v-show="activeFaq === i" class="border-t border-white/5 px-5 sm:px-6 pb-5 sm:pb-6 pt-4">
              <p class="text-slate-400 text-sm leading-relaxed">{{ item.answer }}</p>
            </div>
          </div>
        </div>

        <!-- Footer row -->
        <div class="flex justify-center" data-aos="fade-up" data-aos-delay="150">
          <a href="/faqs" class="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors text-sm">
            {{ content.faq.viewAll }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>

      </div>
    </section>

    <!-- 9. FINAL CTA -->
    <div class="section-py relative overflow-hidden text-center text-white bg-black border-t border-white/5" data-aos="fade-up">
      <!-- Large radial burst in center -->
      <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style="width: 700px; height: 700px; background: radial-gradient(ellipse, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.06) 35%, transparent 70%); filter: blur(40px); border-radius: 50%;"></div>
      </div>
      <!-- bg texture -->
      <div class="absolute inset-0 pointer-events-none" style="background-image: url('/hero-bg.svg'); background-size: cover; opacity: 0.05;"></div>

      <div class="container-custom relative z-10">
        <!-- Big headline -->
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight max-w-3xl mx-auto" style="line-height: 1.2;">
          {{ content.finalCta?.ctaHeadline || 'Secure Every Identity. Verify Every Action.' }}
        </h2>

        <p class="text-slate-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed">
          {{ content.finalCta?.ctaSubtitle || 'Start with one application, one agent, or one sensitive workflow. Add passwordless authentication and runtime authorization without replacing your existing infrastructure.' }}
        </p>

        <!-- Two main buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href="https://pteri.org/Register" target="_blank" class="btn-primary">
            {{ content.finalCta?.getStarted || 'Start Building Free' }}
          </a>
          <a href="/contact" class="btn-ghost">
            {{ content.finalCta?.demo || 'Request a Pilot' }}
          </a>
        </div>

        <!-- Register link -->
        <p class="text-slate-500 text-sm mt-2">pteri.org/Register</p>
      </div>
    </div>

    <!-- MOBILE POPUP -->
    <MobileAppPopup />

  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()
const localePath = useLocalePath()

definePageMeta({
  layout: 'default'
})

const content = computed(() => {
  const translations = {
    en: {
      hero: {
        eyebrow: 'Identity and Authorization for Humans and AI',
        badge: 'Identity and Authorization for Humans and AI',
        titlePart1: 'Verify Every Identity.',
        titlePart2: 'Authorize Every Action.',
        subtitle: 'PTERI protects people, AI agents, and existing enterprise systems with passwordless MFA, runtime authorization, and verifiable action evidence—without relying on shared secrets.',
        getStarted: 'Start Building Free',
        learnMore: 'See How PTERI Works',
        proofLine: 'Passwordless MFA · Agent authorization · Verifiable action evidence',
        docs: 'Developer Docs',
        demo: 'Request a Pilot',
      },
      problem: {
        title: 'The Problem We’re Solving',
        p1: 'The modern internet was not built for authority at scale.',
        p1items: [
           'Identity is inferred using passwords, inbox access, and heuristics',
           'Payments are controlled by intermediaries and custodians',
           'APIs rely on static secrets that leak and persist',
           'AI systems inherit credentials they should never permanently hold'
        ],
        p2: 'Each of these failures appears different, but they share the same root cause: authority is centralized, shareable, and fragile.',
        p3: 'Every breach, account takeover, unauthorized API call, and compromised automation workflow is a symptom of this broken trust model.',
        solution: 'PTERI replaces this model entirely by making authority deterministic, self-custodial, and cryptographically verifiable at the moment of action.'
      },
      ecosystemCaption: 'All PTERI capabilities - identity, payments, APIs, and AI delegation - operate on the same underlying authority model. Each surface is a different interface into the same carrier layer.',
      evaluate: {
        title: 'How to Evaluate PTERI',
        p1: 'PTERI is not evaluated like a traditional authentication product or wallet.',
        p2: 'It is a system-level replacement for shared secrets and custodial trust.',
        question: 'When evaluating PTERI, ask:',
        items: [
           'Are you eliminating passwords, OTPs, and API keys?',
           'Are you removing centralized custody and recovery?',
           'Are you enforcing authority cryptographically at request time?'
        ],
        closing: 'If the answer is yes, PTERI fits naturally into your stack.'
      },
      useCases: {
        title: 'Where PTERI Is Used',
        items: [
          'Passwordless authentication for existing applications',
          'Replacing OTP-based two-factor systems',
          'Securing internal tools and admin access',
          'Self-custodial payments and settlement',
          'Controlled authority for AI agents and automation'
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        viewAll: 'View all FAQs',
        items: [
          {
            question: 'What is PTERI?',
            answer: 'PTERI is an identity and authorization platform for people, AI agents, applications, and devices. It provides passwordless MFA, delegated authority, credential protection, and verifiable action evidence.'
          },
          {
            question: 'Does PTERI provide passwordless MFA?',
            answer: 'Yes. PTERI supports passwordless authentication and cryptographic step-up approval for workforce access and sensitive actions.'
          },
          {
            question: 'What is runtime authorization?',
            answer: 'Runtime authorization determines whether a person or agent is permitted to perform a specific action at the moment the action is requested.'
          },
          {
            question: 'Can PTERI protect existing enterprise applications?',
            answer: 'Yes. PTERI is designed to add passwordless authentication and action-level authorization to existing applications, APIs, infrastructure, and administrative workflows without requiring a complete replacement.'
          },
          {
            question: 'Does PTERI replace our identity provider or IAM platform?',
            answer: 'Not necessarily. PTERI can work alongside existing identity providers and access-management systems, adding passwordless verification, agent identity, delegated authority, and action-level authorization.'
          },
          {
            question: 'How can we start?',
            answer: 'Start with one application, agent, or sensitive workflow and add PTERI at the access or action boundary.'
          }
        ]
      },
      finalCta: {
        title: 'Secure every identity. Verify every action.',
        ctaHeadline: 'Secure Every Identity. Verify Every Action.',
        ctaSubtitle: 'Start with one application, one agent, or one sensitive workflow. Add passwordless authentication and runtime authorization without replacing your existing infrastructure.',
        getStarted: 'Start Building Free',
        docs: 'Developer Docs',
        demo: 'Request a Pilot'
      },
      securitySection: {
        label: 'VERIFIABLE BY DESIGN',
        title: 'Evidence That Does Not Depend on a Single System\'s Assertion',
        description: 'PTERI combines customer-controlled credentials, cryptographic verification, and an independent trust architecture to create durable authorization evidence.',
        disclosure: 'PTERI currently uses Litecoin proof-of-work and privacy-enhancing technologies as components of its independent verification architecture.',
      },
      securityBoundary: 'Security Boundary: PTERI does not claim to protect compromised devices, user-approved malware, or physical coercion. Authority is enforced cryptographically, not behaviorally.',
      authorityGap: {
        eyebrow: 'THE AUTHORITY GAP',
        headline: 'Access Has Changed. Enterprise Security Hasn\'t.',
        description1: 'Employees, applications, and AI agents now access the same sensitive systems and data. But passwords, session tokens, and inherited permissions cannot always prove who—or what—authorized a specific action.',
        description2: 'PTERI verifies identity and authority when access is requested and when sensitive actions are performed.',
        cards: [
          { title: 'Compromised Credentials', desc: 'Passwords, tokens, and shared secrets can be stolen, phished, replayed, or exposed.' },
          { title: 'Unclear Agent Authority', desc: 'An agent may have access without proof that a user or organization approved its specific action.' },
          { title: 'Excessive Permissions', desc: 'Long-lived credentials can provide more access than a person or agent requires.' },
          { title: 'Incomplete Accountability', desc: 'Traditional logs may show what occurred without proving who authorized it.' },
        ],
      },
      enterpriseSystems: {
        eyebrow: 'MODERN SECURITY FOR EXISTING SYSTEMS',
        headline: 'Strengthen What You Already Run',
        description: 'Critical data and workflows already live inside enterprise applications, databases, APIs, and infrastructure. PTERI adds passwordless access and action-level authorization without requiring those systems to be replaced.',
        cards: [
          { title: 'Protect Access', desc: 'Add passwordless MFA to existing applications, administrative portals, APIs, and workforce workflows.' },
          { title: 'Protect Sensitive Actions', desc: 'Require stronger authorization when a person or agent attempts a high-risk operation.' },
          { title: 'Protect Credentials', desc: 'Keep keys and authorization material outside prompts, agent memory, and exposed runtime components.' },
          { title: 'Preserve Existing Investments', desc: 'Integrate PTERI alongside existing identity providers, IAM platforms, applications, and security controls.' },
        ],
        cta1: 'Explore Enterprise Security',
        cta2: 'View Integration Guides',
      },
      aiAgentSecurity: {
        eyebrow: 'RUNTIME AUTHORIZATION FOR AI AGENTS',
        headline: 'Give AI Agents Authority—Not Unrestricted Access',
        description: 'PTERI lets agents perform approved tasks without inheriting a user\'s full identity or possessing unrestricted credentials.',
        cards: [
          { title: 'Verifiable Agent Identity', desc: 'Give every agent a distinct identity that can be managed, verified, and revoked.' },
          { title: 'Delegated Authority', desc: 'Define what the agent may do, which resources it may access, and how long its authority remains valid.' },
          { title: 'Runtime Policy Enforcement', desc: 'Verify identity, scope, context, and policy before a consequential action is executed.' },
          { title: 'Verifiable Action History', desc: 'Connect every agent action to the person, organization, or workflow that authorized it.' },
        ],
        exampleCard: {
          label: 'Illustrative Example',
          agent: 'Agent: Procurement Assistant',
          actionLabel: 'Authorized action',
          action: 'Create purchase orders',
          maxValueLabel: 'Maximum value',
          maxValue: '$5,000',
          validForLabel: 'Valid for',
          validFor: '30 minutes',
          approvalLabel: 'Human approval required',
          approval: 'Above $2,500',
          statusLabel: 'Status',
          status: 'Active',
        },
      },
      howItWorks: {
        eyebrow: 'ONE MODEL OF AUTHORITY',
        headline: 'From Identity to Verified Action',
        steps: [
          { title: 'Identify', desc: 'Establish a distinct verifiable identity for the person, agent, application, or device.' },
          { title: 'Authenticate', desc: 'Confirm the identity without relying on reusable passwords or shared authentication secrets.' },
          { title: 'Authorize', desc: 'Define the permitted action, resource, purpose, policy, and expiration time.' },
          { title: 'Step Up', desc: 'Require additional approval when the requested action is sensitive or high impact.' },
          { title: 'Verify and Prove', desc: 'Validate the authority at runtime and produce tamper-evident evidence of the action.' },
        ],
      },
      useCasesGrid: {
        eyebrow: 'ONE PLATFORM. MULTIPLE SECURITY BOUNDARIES.',
        headline: 'Protect Access Wherever Authority Matters',
        cards: [
          { title: 'Workforce Access', desc: 'Add passwordless MFA for employees, administrators, contractors, and customers.' },
          { title: 'Privileged Operations', desc: 'Require explicit approval for administrative changes, production access, deployments, and credential management.' },
          { title: 'AI-Agent Workflows', desc: 'Control which tools, APIs, data, and actions each agent may use.' },
          { title: 'Sensitive Data Access', desc: 'Reverify identity and authority before information is viewed, exported, modified, or shared.' },
          { title: 'Financial Actions', desc: 'Require scoped authorization before purchases, payments, payouts, or transfers.' },
          { title: 'Agent-to-Agent Interactions', desc: 'Preserve identity, delegation, policy, and accountability when agents work together.' },
        ],
      },
      integration: {
        eyebrow: 'BUILT FOR YOUR EXISTING STACK',
        headline: 'Add PTERI at the Access and Action Boundaries',
        description: 'PTERI works alongside existing identity providers, applications, APIs, AI agents, MCP servers, and cloud infrastructure. Start with one sensitive workflow and expand over time.',
        labels: ['Identity providers and IAM', 'Existing enterprise applications', 'AI agents and orchestration platforms', 'APIs and MCP servers', 'Cloud and administrative infrastructure', 'Security monitoring and audit systems'],
        cta1: 'View Documentation',
        cta2: 'Get an API Key',
        codeTitle: 'verify_authority.py',
        pseudocodeLabel: 'Pseudocode',
      },
      securityBoundarySection: {
        eyebrow: 'CLEAR CONTROLS. CLEAR BOUNDARIES.',
        headline: 'Control What Can Act—and Prove What It Did',
        description: 'PTERI verifies identity, delegated authority, policy, and action evidence without taking control of customer credentials.',
        disclosure: 'PTERI does not replace endpoint security, application security, IAM, secure model design, or human governance. It does not claim to protect a fully compromised endpoint, user-approved malware, or physical coercion.',
        cta1: 'Visit Trust Center',
        cta2: 'Review Security Architecture',
      },
    },
    de: {
      hero: {
        eyebrow: 'Identitäts- und Autorisierungssicherheit für Menschen und KI',
        badge: 'Identitäts- und Autorisierungssicherheit für Menschen und KI',
        titlePart1: 'Jede Identität verifizieren.',
        titlePart2: 'Jede Aktion autorisieren.',
        subtitle: 'PTERI schützt Menschen, KI-Agenten und bestehende Unternehmenssysteme mit passwortloser MFA, Laufzeit-Autorisierung und verifizierbaren Aktionsnachweisen – ohne auf gemeinsame Geheimnisse angewiesen zu sein.',
        getStarted: 'Kostenlos starten',
        learnMore: 'Wie PTERI funktioniert',
        proofLine: 'Passwortlose MFA · Agenten-Autorisierung · Verifizierbare Aktionsnachweise',
        docs: 'Entwickler-Doku',
        demo: 'Pilotprojekt anfragen'
      },
      problem: {
        title: 'Das Problem, das wir lösen',
        p1: 'Das moderne Internet wurde nicht für Autorität im großen Maßstab entwickelt.',
        p1items: [
          'Identität wird durch Passwörter, Postfachzugriff und Heuristiken abgeleitet',
          'Zahlungen werden von Vermittlern und Verwaltern kontrolliert',
          'APIs verlassen sich auf statische Geheimnisse, die durchsickern und bestehen bleiben',
          'KI-Systeme erben Anmeldeinformationen, die sie niemals dauerhaft halten sollten'
        ],
        p2: 'Jeder dieser Fehler erscheint anders, aber sie haben dieselbe Grundursache: Autorität ist zentralisiert, teilbar und fragil.',
        p3: 'Jede Sicherheitsverletzung, Kontoübernahme, unbefugte API-Aufruf und kompromittierter Automatisierungs-Workflow ist ein Symptom dieses defekten Vertrauensmodells.',
        solution: 'PTERI ersetzt dieses Modell vollständig, indem es Autorität deterministisch, selbstverwahrend und kryptografisch überprüfbar im Moment der Aktion macht.'
      },
      ecosystemCaption: 'Alle PTERI-Funktionen – Identität, Zahlungen, APIs und KI-Delegation – arbeiten auf demselben zugrunde liegenden Autoritätsmodell. Jede Oberfläche ist eine andere Schnittstelle zur selben Trägerebene.',
      evaluate: {
        title: 'Wie man PTERI bewertet',
        p1: 'PTERI wird nicht wie ein traditionelles Authentifizierungsprodukt oder eine Wallet bewertet.',
        p2: 'Es ist ein systemweiter Ersatz für gemeinsame Geheimnisse und Verwahrungsvertrauen.',
        question: 'Fragen Sie sich bei der Bewertung von PTERI:',
        items: [
          'Eliminieren Sie Passwörter, OTPs und API-Schlüssel?',
          'Entfernen Sie zentralisierte Verwahrung und Wiederherstellung?',
          'Erzwingen Sie Autorität kryptografisch zur Anforderungszeit?'
        ],
        closing: 'Wenn die Antwort ja ist, passt PTERI natürlich in Ihren Stack.'
      },
      useCases: {
        title: 'Wo PTERI verwendet wird',
        items: [
          'Passwortlose Authentifizierung für bestehende Anwendungen',
          'Ersatz von OTP-basierten Zwei-Faktor-Systemen',
          'Sicherung interner Tools und Admin-Zugriff',
          'Selbstverwahrende Zahlungen und Abwicklung',
          'Kontrollierte Autorität für KI-Agenten und Automatisierung'
        ]
      },
      faq: {
        title: 'Häufig gestellte Fragen',
        viewAll: 'Alle FAQs anzeigen',
        items: [
          {
            question: 'Was ist PTERI?',
            answer: 'PTERI ist eine Identitäts- und Autorisierungsplattform für Menschen, KI-Agenten, Anwendungen und Geräte. Es bietet passwortlose MFA, delegierte Autorität, Schutz von Anmeldedaten und überprüfbare Aktionsnachweise.'
          },
          {
            question: 'Bietet PTERI passwortlose MFA?',
            answer: 'Ja. PTERI unterstützt passwortlose Authentifizierung und kryptografische Step-Up-Genehmigung für Mitarbeiterzugriff und sensible Aktionen.'
          },
          {
            question: 'Was ist Laufzeit-Autorisierung?',
            answer: 'Laufzeit-Autorisierung bestimmt, ob eine Person oder ein Agent berechtigt ist, eine bestimmte Aktion in dem Moment auszuführen, in dem die Aktion angefragt wird.'
          },
          {
            question: 'Kann PTERI bestehende Unternehmensanwendungen schützen?',
            answer: 'Ja. PTERI ist so konzipiert, dass es passwortlose Authentifizierung und Autorisierung auf Aktionsebene zu bestehenden Anwendungen, APIs, Infrastrukturen und Verwaltungs-Workflows hinzufügt, ohne einen vollständigen Austausch zu erfordern.'
          },
          {
            question: 'Ersetzt PTERI unseren Identity Provider oder unsere IAM-Plattform?',
            answer: 'Nicht notwendigerweise. PTERI kann neben bestehenden Identity Providern und Zugriffsverwaltungssystemen arbeiten und passwortlose Verifizierung, Agentenidentität, delegierte Autorität und Autorisierung auf Aktionsebene hinzufügen.'
          },
          {
            question: 'Wie können wir anfangen?',
            answer: 'Beginnen Sie mit einer Anwendung, einem Agenten oder einem sensiblen Workflow und fügen Sie PTERI an der Zugriffs- oder Aktionsgrenze hinzu.'
          }
        ]
      },
      finalCta: {
        title: 'Jede Identität schützen. Jede Aktion verifizieren.',
        ctaHeadline: 'Jede Identität schützen. Jede Aktion verifizieren.',
        ctaSubtitle: 'Beginnen Sie mit einer Anwendung, einem Agenten oder einem sensiblen Workflow. Fügen Sie passwortlose Authentifizierung und Laufzeit-Autorisierung hinzu, ohne Ihre bestehende Infrastruktur zu ersetzen.',
        getStarted: 'Kostenlos starten',
        docs: 'Entwickler-Doku',
        demo: 'Pilotprojekt anfragen'
      },
      securitySection: {
        label: 'ÜBERPRÜFBAR NACH DESIGN',
        title: 'Nachweise, die nicht von der Behauptung eines einzelnen Systems abhängen',
        description: 'PTERI kombiniert kundenkontrollierte Anmeldedaten, kryptografische Verifizierung und eine unabhängige Vertrauensarchitektur, um belastbare Autorisierungsnachweise zu schaffen.',
        disclosure: 'PTERI verwendet derzeit Litecoin Proof-of-Work und datenschutzfördernde Technologien als Komponenten seiner unabhängigen Verifizierungsarchitektur.',
      },
      securityBoundary: 'Sicherheitsgrenze: PTERI behauptet nicht, kompromittierte Geräte, vom Benutzer genehmigte Malware oder physischen Zwang zu schützen. Autorität wird kryptografisch, nicht verhaltensbasiert durchgesetzt.',
      authorityGap: {
        eyebrow: 'DIE AUTORITÄTSLÜCKE',
        headline: 'Der Zugriff hat sich verändert. Die Unternehmenssicherheit nicht.',
        description1: 'Mitarbeiter, Anwendungen und KI-Agenten greifen heute auf dieselben sensiblen Systeme und Daten zu. Aber Passwörter, Sitzungstoken und geerbte Berechtigungen können nicht immer beweisen, wer – oder was – eine bestimmte Aktion autorisiert hat.',
        description2: 'PTERI überprüft Identität und Autorität sowohl bei der Zugriffsanfrage als auch bei sensiblen Aktionen.',
        cards: [
          { title: 'Kompromittierte Anmeldedaten', desc: 'Passwörter, Tokens und gemeinsame Geheimnisse können gestohlen, gephisht, wiederverwendet oder offengelegt werden.' },
          { title: 'Unklare Agentenautorität', desc: 'Ein Agent kann Zugriff haben, ohne dass ein Nachweis vorliegt, dass ein Nutzer oder eine Organisation seine spezifische Aktion genehmigt hat.' },
          { title: 'Übermäßige Berechtigungen', desc: 'Langlebige Anmeldedaten können mehr Zugriff gewähren, als eine Person oder ein Agent benötigt.' },
          { title: 'Unvollständige Nachvollziehbarkeit', desc: 'Traditionelle Protokolle zeigen möglicherweise, was passiert ist, ohne zu belegen, wer es autorisiert hat.' },
        ],
      },
      enterpriseSystems: {
        eyebrow: 'MODERNE SICHERHEIT FÜR BESTEHENDE SYSTEME',
        headline: 'Stärken Sie, was Sie bereits betreiben',
        description: 'Kritische Daten und Workflows leben bereits in Unternehmensanwendungen, Datenbanken, APIs und Infrastruktur. PTERI fügt passwortlosen Zugriff und Autorisierung auf Aktionsebene hinzu, ohne dass diese Systeme ersetzt werden müssen.',
        cards: [
          { title: 'Zugriff schützen', desc: 'Fügen Sie bestehenden Anwendungen, Admin-Portalen, APIs und Mitarbeiter-Workflows passwortlose MFA hinzu.' },
          { title: 'Sensible Aktionen schützen', desc: 'Verlangen Sie stärkere Autorisierung, wenn eine Person oder ein Agent eine risikoreiche Operation versucht.' },
          { title: 'Anmeldedaten schützen', desc: 'Halten Sie Schlüssel und Autorisierungsmaterial außerhalb von Prompts, Agentenspeicher und exponierten Laufzeitkomponenten.' },
          { title: 'Bestehende Investitionen bewahren', desc: 'Integrieren Sie PTERI neben bestehenden Identitätsanbietern, IAM-Plattformen, Anwendungen und Sicherheitskontrollen.' },
        ],
        cta1: 'Enterprise-Sicherheit erkunden',
        cta2: 'Integrationsleitfäden ansehen',
      },
      aiAgentSecurity: {
        eyebrow: 'LAUFZEIT-AUTORISIERUNG FÜR KI-AGENTEN',
        headline: 'Geben Sie KI-Agenten Autorität — keinen uneingeschränkten Zugriff',
        description: 'PTERI ermöglicht es Agenten, genehmigte Aufgaben auszuführen, ohne die vollständige Identität eines Nutzers zu erben oder uneingeschränkte Anmeldedaten zu besitzen.',
        cards: [
          { title: 'Verifizierbare Agentenidentität', desc: 'Geben Sie jedem Agenten eine eigene Identität, die verwaltet, überprüft und widerrufen werden kann.' },
          { title: 'Delegierte Autorität', desc: 'Definieren Sie, was der Agent tun darf, auf welche Ressourcen er zugreifen darf und wie lange seine Autorität gültig bleibt.' },
          { title: 'Laufzeit-Richtliniendurchsetzung', desc: 'Überprüfen Sie Identität, Umfang, Kontext und Richtlinie, bevor eine folgenreiche Aktion ausgeführt wird.' },
          { title: 'Verifizierbare Aktionshistorie', desc: 'Verknüpfen Sie jede Agentenaktion mit der Person, Organisation oder dem Workflow, die sie autorisiert haben.' },
        ],
        exampleCard: {
          label: 'Veranschaulichendes Beispiel',
          agent: 'Agent: Beschaffungsassistent',
          actionLabel: 'Autorisierte Aktion',
          action: 'Bestellungen erstellen',
          maxValueLabel: 'Maximalwert',
          maxValue: '$5.000',
          validForLabel: 'Gültig für',
          validFor: '30 Minuten',
          approvalLabel: 'Menschliche Genehmigung erforderlich',
          approval: 'Über $2.500',
          statusLabel: 'Status',
          status: 'Aktiv',
        },
      },
      howItWorks: {
        eyebrow: 'EIN MODELL DER AUTORITÄT',
        headline: 'Von der Identität zur verifizierten Aktion',
        steps: [
          { title: 'Identifizieren', desc: 'Etablieren Sie eine eigene, verifizierbare Identität für die Person, den Agenten, die Anwendung oder das Gerät.' },
          { title: 'Authentifizieren', desc: 'Bestätigen Sie die Identität, ohne sich auf wiederverwendbare Passwörter oder gemeinsame Authentifizierungsgeheimnisse zu verlassen.' },
          { title: 'Autorisieren', desc: 'Definieren Sie die zulässige Aktion, Ressource, den Zweck, die Richtlinie und die Ablaufzeit.' },
          { title: 'Eskalieren', desc: 'Verlangen Sie zusätzliche Genehmigung, wenn die angeforderte Aktion sensibel oder folgenreich ist.' },
          { title: 'Verifizieren und Beweisen', desc: 'Validieren Sie die Autorität zur Laufzeit und erstellen Sie manipulationssichere Nachweise der Aktion.' },
        ],
      },
      useCasesGrid: {
        eyebrow: 'EINE PLATTFORM. MEHRERE SICHERHEITSGRENZEN.',
        headline: 'Schützen Sie den Zugriff, wo immer Autorität zählt',
        cards: [
          { title: 'Mitarbeiterzugriff', desc: 'Fügen Sie passwortlose MFA für Mitarbeiter, Administratoren, Auftragnehmer und Kunden hinzu.' },
          { title: 'Privilegierte Vorgänge', desc: 'Verlangen Sie explizite Genehmigung für administrative Änderungen, Produktionszugriff, Deployments und Anmeldedatenverwaltung.' },
          { title: 'KI-Agenten-Workflows', desc: 'Kontrollieren Sie, welche Tools, APIs, Daten und Aktionen jeder Agent verwenden darf.' },
          { title: 'Zugriff auf sensible Daten', desc: 'Überprüfen Sie Identität und Autorität erneut, bevor Informationen angesehen, exportiert, geändert oder geteilt werden.' },
          { title: 'Finanzielle Aktionen', desc: 'Verlangen Sie eine begrenzte Autorisierung vor Käufen, Zahlungen, Auszahlungen oder Überweisungen.' },
          { title: 'Agent-zu-Agent-Interaktionen', desc: 'Bewahren Sie Identität, Delegation, Richtlinie und Rechenschaftspflicht, wenn Agenten zusammenarbeiten.' },
        ],
      },
      integration: {
        eyebrow: 'ENTWICKELT FÜR IHREN BESTEHENDEN STACK',
        headline: 'Fügen Sie PTERI an den Zugriffs- und Aktionsgrenzen hinzu',
        description: 'PTERI arbeitet neben bestehenden Identitätsanbietern, Anwendungen, APIs, KI-Agenten, MCP-Servern und Cloud-Infrastruktur. Beginnen Sie mit einem sensiblen Workflow und erweitern Sie mit der Zeit.',
        labels: ['Identitätsanbieter und IAM', 'Bestehende Unternehmensanwendungen', 'KI-Agenten und Orchestrierungsplattformen', 'APIs und MCP-Server', 'Cloud- und Verwaltungsinfrastruktur', 'Sicherheitsüberwachung und Audit-Systeme'],
        cta1: 'Dokumentation ansehen',
        cta2: 'API-Schlüssel erhalten',
        codeTitle: 'verify_authority.py',
        pseudocodeLabel: 'Pseudocode',
      },
      securityBoundarySection: {
        eyebrow: 'KLARE KONTROLLEN. KLARE GRENZEN.',
        headline: 'Kontrollieren Sie, was handeln kann — und beweisen Sie, was es getan hat',
        description: 'PTERI überprüft Identität, delegierte Autorität, Richtlinie und Aktionsnachweise, ohne die Kontrolle über Kundenanmeldedaten zu übernehmen.',
        disclosure: 'PTERI ersetzt keine Endpunktsicherheit, Anwendungssicherheit, IAM, sicheres Modelldesign oder menschliche Governance. Es beansprucht nicht, einen vollständig kompromittierten Endpunkt, vom Nutzer genehmigte Malware oder physischen Zwang zu schützen.',
        cta1: 'Trust Center besuchen',
        cta2: 'Sicherheitsarchitektur ansehen',
      },
    },
    es: {
      hero: {
        eyebrow: 'Seguridad de identidad y autorización para humanos e IA',
        badge: 'Seguridad de identidad y autorización para humanos e IA',
        titlePart1: 'Verifica cada identidad.',
        titlePart2: 'Autoriza cada acción.',
        subtitle: 'PTERI protege a personas, agentes de IA y sistemas empresariales existentes con MFA sin contraseña, autorización en tiempo de ejecución y evidencia de acciones verificable, sin depender de secretos compartidos.',
        getStarted: 'Empieza a construir gratis',
        learnMore: 'Cómo funciona PTERI',
        proofLine: 'MFA sin contraseña · Autorización de agentes · Evidencia de acciones verificable',
        docs: 'Documentos de Desarrollador',
        demo: 'Solicitar un piloto'
      },
      problem: {
        title: 'El problema que estamos resolviendo',
        p1: 'El internet moderno no fue construido para autoridad a escala.',
        p1items: [
          'La identidad se infiere usando contraseñas, acceso a buzones y heurísticas',
          'Los pagos son controlados por intermediarios y custodios',
          'Las APIs dependen de secretos estáticos que se filtran y persisten',
          'Los sistemas de IA heredan credenciales que nunca deberían mantener permanentemente'
        ],
        p2: 'Cada uno de estos fallos parece diferente, pero comparten la misma causa raíz: la autoridad está centralizada, es compartible y frágil.',
        p3: 'Cada brecha, toma de control de cuenta, llamada API no autorizada y flujo de trabajo de automatización comprometido es un síntoma de este modelo de confianza roto.',
        solution: 'PTERI reemplaza este modelo por completo al hacer que la autoridad sea determinista, autocustodiada y criptográficamente verificable en el momento de la acción.'
      },
      ecosystemCaption: 'Todas las capacidades de PTERI (identidad, pagos, APIs y delegación de IA) operan en el mismo modelo de autoridad subyacente. Cada superficie es una interfaz diferente hacia la misma capa portadora.',
      evaluate: {
        title: 'Cómo evaluar PTERI',
        p1: 'PTERI no se evalúa como un producto de autenticación tradicional o billetera.',
        p2: 'Es un reemplazo a nivel de sistema para secretos compartidos y confianza custodiada.',
        question: 'Al evaluar PTERI, pregúntese:',
        items: [
          '¿Está eliminando contraseñas, OTPs y claves API?',
          '¿Está eliminando la custodia centralizada y la recuperación?',
          '¿Está aplicando autoridad criptográficamente en tiempo de solicitud?'
        ],
        closing: 'Si la respuesta es sí, PTERI encaja naturalmente en su stack.'
      },
      useCases: {
        title: 'Dónde se usa PTERI',
        items: [
          'Autenticación sin contraseña para aplicaciones existentes',
          'Reemplazo de sistemas de dos factores basados en OTP',
          'Aseguramiento de herramientas internas y acceso de administrador',
          'Pagos y liquidación autocustodiados',
          'Autoridad controlada para agentes de IA y automatización'
        ]
      },
      faq: {
        title: 'Preguntas frecuentes',
        viewAll: 'Ver todas las preguntas frecuentes',
        items: [
          {
            question: '¿Qué es PTERI?',
            answer: 'PTERI es una plataforma de identidad y autorización para personas, agentes de IA, aplicaciones y dispositivos. Proporciona MFA sin contraseña, autoridad delegada, protección de credenciales y evidencia de acción verificable.'
          },
          {
            question: '¿PTERI ofrece MFA sin contraseña?',
            answer: 'Sí. PTERI admite autenticación sin contraseña y aprobación criptográfica de verificación adicional para el acceso de la plantilla y acciones sensibles.'
          },
          {
            question: '¿Qué es la autorización en tiempo de ejecución?',
            answer: 'La autorización en tiempo de ejecución determina si una persona o agente tiene permiso para realizar una acción específica en el momento en que se solicita la acción.'
          },
          {
            question: '¿Puede PTERI proteger las aplicaciones empresariales existentes?',
            answer: 'Sí. PTERI está diseñado para añadir autenticación sin contraseña y autorización a nivel de acción a aplicaciones, APIs, infraestructura y flujos de trabajo administrativos existentes sin requerir un reemplazo completo.'
          },
          {
            question: '¿PTERI reemplaza a nuestro proveedor de identidad o plataforma IAM?',
            answer: 'No necesariamente. PTERI puede funcionar junto a proveedores de identidad y sistemas de gestión de acceso existentes, añadiendo verificación sin contraseña, identidad de agente, autoridad delegada y autorización a nivel de acción.'
          },
          {
            question: '¿Cómo podemos empezar?',
            answer: 'Empieza con una aplicación, un agente o un flujo de trabajo sensible y añade PTERI en el límite de acceso o de acción.'
          }
        ]
      },
      finalCta: {
        title: 'Protege cada identidad. Verifica cada acción.',
        ctaHeadline: 'Protege cada identidad. Verifica cada acción.',
        ctaSubtitle: 'Empieza con una aplicación, un agente o un flujo de trabajo sensible. Añade autenticación sin contraseña y autorización en tiempo de ejecución sin reemplazar tu infraestructura existente.',
        getStarted: 'Empieza a construir gratis',
        docs: 'Documentos de Desarrollador',
        demo: 'Solicitar un piloto'
      },
      securitySection: {
        label: 'VERIFICABLE POR DISEÑO',
        title: 'Evidencia Que No Depende de la Afirmación de un Solo Sistema',
        description: 'PTERI combina credenciales controladas por el cliente, verificación criptográfica y una arquitectura de confianza independiente para crear evidencia de autorización duradera.',
        disclosure: 'PTERI actualmente utiliza prueba de trabajo de Litecoin y tecnologías que mejoran la privacidad como componentes de su arquitectura de verificación independiente.',
      },
      securityBoundary: 'Límite de seguridad: PTERI no afirma proteger dispositivos comprometidos, malware aprobado por el usuario o coerción física. La autoridad se aplica criptográficamente, no conductualmente.',
      authorityGap: {
        eyebrow: 'LA BRECHA DE AUTORIDAD',
        headline: 'El Acceso Ha Cambiado. La Seguridad Empresarial No.',
        description1: 'Los empleados, las aplicaciones y los agentes de IA ahora acceden a los mismos sistemas y datos sensibles. Pero las contraseñas, los tokens de sesión y los permisos heredados no siempre pueden demostrar quién —o qué— autorizó una acción específica.',
        description2: 'PTERI verifica la identidad y la autoridad cuando se solicita acceso y cuando se realizan acciones sensibles.',
        cards: [
          { title: 'Credenciales Comprometidas', desc: 'Las contraseñas, tokens y secretos compartidos pueden ser robados, phisheados, reutilizados o expuestos.' },
          { title: 'Autoridad de Agente Poco Clara', desc: 'Un agente puede tener acceso sin prueba de que un usuario u organización aprobó su acción específica.' },
          { title: 'Permisos Excesivos', desc: 'Las credenciales de larga duración pueden otorgar más acceso del que una persona o agente requiere.' },
          { title: 'Responsabilidad Incompleta', desc: 'Los registros tradicionales pueden mostrar lo que ocurrió sin demostrar quién lo autorizó.' },
        ],
      },
      enterpriseSystems: {
        eyebrow: 'SEGURIDAD MODERNA PARA SISTEMAS EXISTENTES',
        headline: 'Fortalece lo Que Ya Operas',
        description: 'Los datos y flujos de trabajo críticos ya residen dentro de aplicaciones empresariales, bases de datos, APIs e infraestructura. PTERI añade acceso sin contraseña y autorización a nivel de acción sin requerir que esos sistemas sean reemplazados.',
        cards: [
          { title: 'Proteger el Acceso', desc: 'Añade MFA sin contraseña a aplicaciones existentes, portales administrativos, APIs y flujos de trabajo del personal.' },
          { title: 'Proteger Acciones Sensibles', desc: 'Requiere una autorización más fuerte cuando una persona o agente intenta una operación de alto riesgo.' },
          { title: 'Proteger Credenciales', desc: 'Mantén las claves y el material de autorización fuera de los prompts, la memoria de agentes y los componentes de ejecución expuestos.' },
          { title: 'Preservar las Inversiones Existentes', desc: 'Integra PTERI junto a proveedores de identidad, plataformas IAM, aplicaciones y controles de seguridad existentes.' },
        ],
        cta1: 'Explorar Seguridad Empresarial',
        cta2: 'Ver Guías de Integración',
      },
      aiAgentSecurity: {
        eyebrow: 'AUTORIZACIÓN EN TIEMPO DE EJECUCIÓN PARA AGENTES DE IA',
        headline: 'Otorga Autoridad a los Agentes de IA—No Acceso Sin Restricciones',
        description: 'PTERI permite que los agentes realicen tareas aprobadas sin heredar la identidad completa de un usuario ni poseer credenciales sin restricciones.',
        cards: [
          { title: 'Identidad de Agente Verificable', desc: 'Otorga a cada agente una identidad distinta que puede gestionarse, verificarse y revocarse.' },
          { title: 'Autoridad Delegada', desc: 'Define qué puede hacer el agente, a qué recursos puede acceder y cuánto tiempo permanece válida su autoridad.' },
          { title: 'Aplicación de Políticas en Tiempo de Ejecución', desc: 'Verifica identidad, alcance, contexto y política antes de ejecutar una acción con consecuencias.' },
          { title: 'Historial de Acciones Verificable', desc: 'Conecta cada acción del agente con la persona, organización o flujo de trabajo que la autorizó.' },
        ],
        exampleCard: {
          label: 'Ejemplo Ilustrativo',
          agent: 'Agente: Asistente de Adquisiciones',
          actionLabel: 'Acción autorizada',
          action: 'Crear órdenes de compra',
          maxValueLabel: 'Valor máximo',
          maxValue: '$5,000',
          validForLabel: 'Válido por',
          validFor: '30 minutos',
          approvalLabel: 'Aprobación humana requerida',
          approval: 'Por encima de $2,500',
          statusLabel: 'Estado',
          status: 'Activo',
        },
      },
      howItWorks: {
        eyebrow: 'UN MODELO DE AUTORIDAD',
        headline: 'De la Identidad a la Acción Verificada',
        steps: [
          { title: 'Identificar', desc: 'Establece una identidad distinta y verificable para la persona, agente, aplicación o dispositivo.' },
          { title: 'Autenticar', desc: 'Confirma la identidad sin depender de contraseñas reutilizables o secretos de autenticación compartidos.' },
          { title: 'Autorizar', desc: 'Define la acción permitida, el recurso, el propósito, la política y el tiempo de expiración.' },
          { title: 'Escalar', desc: 'Requiere aprobación adicional cuando la acción solicitada es sensible o de alto impacto.' },
          { title: 'Verificar y Probar', desc: 'Valida la autoridad en tiempo de ejecución y produce evidencia a prueba de manipulaciones de la acción.' },
        ],
      },
      useCasesGrid: {
        eyebrow: 'UNA PLATAFORMA. MÚLTIPLES LÍMITES DE SEGURIDAD.',
        headline: 'Protege el Acceso Donde la Autoridad Importa',
        cards: [
          { title: 'Acceso del Personal', desc: 'Añade MFA sin contraseña para empleados, administradores, contratistas y clientes.' },
          { title: 'Operaciones Privilegiadas', desc: 'Requiere aprobación explícita para cambios administrativos, acceso a producción, despliegues y gestión de credenciales.' },
          { title: 'Flujos de Trabajo de Agentes de IA', desc: 'Controla qué herramientas, APIs, datos y acciones puede usar cada agente.' },
          { title: 'Acceso a Datos Sensibles', desc: 'Reverifica identidad y autoridad antes de que la información sea vista, exportada, modificada o compartida.' },
          { title: 'Acciones Financieras', desc: 'Requiere autorización delimitada antes de compras, pagos, desembolsos o transferencias.' },
          { title: 'Interacciones Entre Agentes', desc: 'Preserva identidad, delegación, política y responsabilidad cuando los agentes trabajan juntos.' },
        ],
      },
      integration: {
        eyebrow: 'CONSTRUIDO PARA TU STACK EXISTENTE',
        headline: 'Añade PTERI en los Límites de Acceso y Acción',
        description: 'PTERI funciona junto a proveedores de identidad, aplicaciones, APIs, agentes de IA, servidores MCP e infraestructura en la nube existentes. Comienza con un flujo de trabajo sensible y expande con el tiempo.',
        labels: ['Proveedores de identidad e IAM', 'Aplicaciones empresariales existentes', 'Agentes de IA y plataformas de orquestación', 'APIs y servidores MCP', 'Infraestructura en la nube y administrativa', 'Monitoreo de seguridad y sistemas de auditoría'],
        cta1: 'Ver Documentación',
        cta2: 'Obtener una Clave API',
        codeTitle: 'verify_authority.py',
        pseudocodeLabel: 'Pseudocódigo',
      },
      securityBoundarySection: {
        eyebrow: 'CONTROLES CLAROS. LÍMITES CLAROS.',
        headline: 'Controla Qué Puede Actuar—y Demuestra Qué Hizo',
        description: 'PTERI verifica identidad, autoridad delegada, política y evidencia de acción sin tomar control de las credenciales del cliente.',
        disclosure: 'PTERI no reemplaza la seguridad de endpoints, la seguridad de aplicaciones, IAM, el diseño seguro de modelos ni la gobernanza humana. No afirma proteger un endpoint totalmente comprometido, malware aprobado por el usuario o coerción física.',
        cta1: 'Visitar Trust Center',
        cta2: 'Revisar Arquitectura de Seguridad',
      },
    },
    ja: {
      hero: {
        eyebrow: '人とAIのためのアイデンティティと認可セキュリティ',
        badge: '人とAIのためのアイデンティティと認可セキュリティ',
        titlePart1: 'すべてのアイデンティティを検証。',
        titlePart2: 'すべてのアクションを認可。',
        subtitle: 'PTERIは、パスワードレスMFA、ランタイム認可、検証可能なアクション証拠を通じて、人、AIエージェント、既存のエンタープライズシステムを保護します。共有シークレットに依存しません。',
        getStarted: '無料で構築を開始',
        learnMore: 'PTERIの仕組みを見る',
        proofLine: 'パスワードレスMFA · エージェント認可 · 検証可能なアクション証拠',
        docs: '開発者ドキュメント',
        demo: 'パイロットを申し込む'
      },
      problem: {
        title: '私たちが解決している問題',
        p1: '現代のインターネットは、大規模な権限のために構築されていませんでした。',
        p1items: [
          'アイデンティティは、パスワード、受信トレイアクセス、ヒューリスティックを使用して推測されます',
          '支払いは仲介者と管理者によって制御されます',
          'APIは漏洩して持続する静的シークレットに依存しています',
          'AIシステムは、永続的に保持すべきでない資格情報を継承します'
        ],
        p2: 'これらの失敗はそれぞれ異なって見えますが、同じ根本原因を共有しています：権限は集中化され、共有可能で、脆弱です。',
        p3: 'すべての侵害、アカウント乗っ取り、不正なAPI呼び出し、および侵害された自動化ワークフローは、この壊れた信頼モデルの症状です。',
        solution: 'PTERIは、権限を決定論的、自己管理的、そして行動の瞬間に暗号学的に検証可能にすることで、このモデルを完全に置き換えます。'
      },
      ecosystemCaption: 'すべてのPTERI機能（アイデンティティ、支払い、API、AI委任）は、同じ基礎となる権限モデルで動作します。各サーフェスは、同じキャリアレイヤーへの異なるインターフェースです。',
      evaluate: {
        title: 'PTERIの評価方法',
        p1: 'PTERIは、従来の認証製品やウォレットのように評価されません。',
        p2: 'これは、共有シークレットと管理信頼のシステムレベルの置き換えです。',
        question: 'PTERIを評価する際は、次のことを自問してください：',
        items: [
          'パスワード、OTP、APIキーを排除していますか？',
          '集中管理と回復を削除していますか？',
          'リクエスト時に暗号学的に権限を強制していますか？'
        ],
        closing: '答えがイエスなら、PTERIは自然にあなたのスタックに適合します。'
      },
      useCases: {
        title: 'PTERIが使用される場所',
        items: [
          '既存のアプリケーションのパスワードレス認証',
          'OTPベースの二要素システムの置き換え',
          '内部ツールと管理者アクセスの保護',
          '自己管理型の支払いと決済',
          'AIエージェントと自動化のための制御された権限'
        ]
      },
      faq: {
        title: 'よくある質問',
        viewAll: 'すべてのFAQを見る',
        items: [
          {
            question: 'PTERIとは何ですか？',
            answer: 'PTERIは、人間、AIエージェント、アプリケーション、デバイスのためのアイデンティティおよび認可プラットフォームです。パスワードレスMFA、委任された権限、資格情報の保護、検証可能な行動証拠を提供します。'
          },
          {
            question: 'PTERIはパスワードレスMFAを提供しますか？',
            answer: 'はい。PTERIは、従業員アクセスや機密性の高いアクションに対して、パスワードレス認証と暗号によるステップアップ承認をサポートします。'
          },
          {
            question: 'ランタイム認可とは何ですか？',
            answer: 'ランタイム認可は、アクションが要求された瞬間に、人またはエージェントが特定のアクションを実行する権限を持っているかどうかを判断します。'
          },
          {
            question: 'PTERIは既存の企業アプリケーションを保護できますか？',
            answer: 'はい。PTERIは、完全な置き換えを必要とせずに、既存のアプリケーション、API、インフラ、管理ワークフローにパスワードレス認証とアクションレベルの認可を追加するよう設計されています。'
          },
          {
            question: 'PTERIは私たちのIDプロバイダーやIAMプラットフォームを置き換えますか？',
            answer: '必ずしもそうではありません。PTERIは既存のIDプロバイダーやアクセス管理システムと並行して機能し、パスワードレス検証、エージェントID、委任された権限、アクションレベルの認可を追加できます。'
          },
          {
            question: 'どうすれば始められますか？',
            answer: '1つのアプリケーション、エージェント、または機密性の高いワークフローから始め、アクセスまたはアクションの境界にPTERIを追加してください。'
          }
        ]
      },
      finalCta: {
        title: 'すべてのアイデンティティを保護。すべてのアクションを検証。',
        ctaHeadline: 'すべてのアイデンティティを保護。すべてのアクションを検証。',
        ctaSubtitle: '1つのアプリケーション、エージェント、または機密ワークフローから始めましょう。既存のインフラを置き換えずにパスワードレス認証とランタイム認可を追加します。',
        getStarted: '無料で構築を開始',
        docs: '開発者ドキュメント',
        demo: 'パイロットを申し込む'
      },
      securitySection: {
        label: '設計による検証可能性',
        title: '単一システムの主張に依存しない証拠',
        description: 'PTERIは、顧客管理型の資格情報、暗号検証、独立した信頼アーキテクチャを組み合わせ、確固たる認可の証拠を作り出します。',
        disclosure: 'PTERIは現在、Litecoinのプルーフ・オブ・ワークとプライバシー強化技術を、独立した検証アーキテクチャの構成要素として使用しています。',
      },
      securityBoundary: 'セキュリティ境界：PTERIは、侵害されたデバイス、ユーザーが承認したマルウェア、または物理的強制から保護することを主張しません。権限は暗号学的に強制され、行動的ではありません。',
      authorityGap: {
        eyebrow: '権限のギャップ',
        headline: 'アクセスは変化した。しかし企業のセキュリティは変わっていない。',
        description1: '従業員、アプリケーション、AIエージェントは今や同じ機密システムとデータにアクセスしています。しかし、パスワード、セッショントークン、継承された権限は、誰が—または何が—特定の行動を承認したかを常に証明できるわけではありません。',
        description2: 'PTERIは、アクセスが要求されたとき、および機密性の高い行動が実行されるときに、アイデンティティと権限を検証します。',
        cards: [
          { title: '侵害された認証情報', desc: 'パスワード、トークン、共有シークレットは盗まれたり、フィッシングされたり、再利用されたり、漏洩したりする可能性があります。' },
          { title: '不明確なエージェント権限', desc: 'エージェントは、ユーザーや組織が特定の行動を承認した証拠がないままアクセス権を持つ場合があります。' },
          { title: '過剰な権限', desc: '長期間有効な認証情報は、人やエージェントが必要とする以上のアクセスを提供する可能性があります。' },
          { title: '不完全な説明責任', desc: '従来のログは、誰が承認したかを証明せずに、何が起きたかを示すだけの場合があります。' },
        ],
      },
      enterpriseSystems: {
        eyebrow: '既存システムのための最新セキュリティ',
        headline: '既に運用しているものを強化する',
        description: '重要なデータとワークフローは、既に企業アプリケーション、データベース、API、インフラの中に存在しています。PTERIは、それらのシステムを置き換えることなく、パスワードレスアクセスと行動レベルの認可を追加します。',
        cards: [
          { title: 'アクセスを保護', desc: '既存のアプリケーション、管理ポータル、API、従業員のワークフローにパスワードレスMFAを追加します。' },
          { title: '機密性の高い行動を保護', desc: '人またはエージェントが高リスクな操作を試みる際に、より強力な認可を要求します。' },
          { title: '認証情報を保護', desc: '鍵と認可情報を、プロンプト、エージェントメモリ、露出したランタイムコンポーネントの外に保持します。' },
          { title: '既存投資を保全', desc: '既存のIDプロバイダー、IAMプラットフォーム、アプリケーション、セキュリティ管理とともにPTERIを統合します。' },
        ],
        cta1: 'エンタープライズセキュリティを見る',
        cta2: '統合ガイドを見る',
      },
      aiAgentSecurity: {
        eyebrow: 'AIエージェントのためのランタイム認可',
        headline: 'AIエージェントに権限を与える—無制限のアクセスではなく',
        description: 'PTERIにより、エージェントはユーザーの完全なアイデンティティを継承したり、無制限の認証情報を保持したりすることなく、承認されたタスクを実行できます。',
        cards: [
          { title: '検証可能なエージェントID', desc: 'すべてのエージェントに、管理・検証・取り消しが可能な独自のIDを付与します。' },
          { title: '委任された権限', desc: 'エージェントが何をしてよいか、どのリソースにアクセスできるか、その権限がどれだけ有効かを定義します。' },
          { title: 'ランタイムポリシー適用', desc: '重大な行動が実行される前に、アイデンティティ、範囲、コンテキスト、ポリシーを検証します。' },
          { title: '検証可能な行動履歴', desc: 'すべてのエージェントの行動を、それを承認した人物・組織・ワークフローに結び付けます。' },
        ],
        exampleCard: {
          label: 'イラスト例',
          agent: 'エージェント: 調達アシスタント',
          actionLabel: '承認されたアクション',
          action: '購入注文の作成',
          maxValueLabel: '最大金額',
          maxValue: '$5,000',
          validForLabel: '有効期限',
          validFor: '30分',
          approvalLabel: '人間による承認が必要',
          approval: '$2,500超',
          statusLabel: 'ステータス',
          status: 'アクティブ',
        },
      },
      howItWorks: {
        eyebrow: '単一の権限モデル',
        headline: 'アイデンティティから検証済みの行動へ',
        steps: [
          { title: '識別', desc: '人、エージェント、アプリケーション、デバイスのための独自の検証可能なIDを確立します。' },
          { title: '認証', desc: '再利用可能なパスワードや共有認証シークレットに頼らずにIDを確認します。' },
          { title: '認可', desc: '許可される行動、リソース、目的、ポリシー、有効期限を定義します。' },
          { title: 'ステップアップ', desc: '要求された行動が機密性の高い、または影響の大きいものである場合、追加の承認を要求します。' },
          { title: '検証と証明', desc: '実行時に権限を検証し、行動の改ざん防止された証拠を生成します。' },
        ],
      },
      useCasesGrid: {
        eyebrow: '単一プラットフォーム。複数のセキュリティ境界。',
        headline: '権限が重要となるあらゆる場所でアクセスを保護する',
        cards: [
          { title: '従業員アクセス', desc: '従業員、管理者、契約社員、顧客向けにパスワードレスMFAを追加します。' },
          { title: '特権操作', desc: '管理変更、本番アクセス、デプロイ、認証情報管理に明示的な承認を要求します。' },
          { title: 'AIエージェントのワークフロー', desc: '各エージェントが使用できるツール、API、データ、行動を制御します。' },
          { title: '機密データへのアクセス', desc: '情報が閲覧、エクスポート、変更、共有される前にIDと権限を再検証します。' },
          { title: '金融関連の行動', desc: '購入、支払い、払い出し、送金の前に範囲を限定した認可を要求します。' },
          { title: 'エージェント間のやり取り', desc: 'エージェントが連携する際に、アイデンティティ、委任、ポリシー、説明責任を維持します。' },
        ],
      },
      integration: {
        eyebrow: '既存のスタックのために構築',
        headline: 'アクセスと行動の境界にPTERIを追加する',
        description: 'PTERIは、既存のIDプロバイダー、アプリケーション、API、AIエージェント、MCPサーバー、クラウドインフラと連携します。一つの機密性の高いワークフローから始め、時間とともに拡大してください。',
        labels: ['IDプロバイダーとIAM', '既存の企業アプリケーション', 'AIエージェントとオーケストレーションプラットフォーム', 'APIとMCPサーバー', 'クラウドと管理インフラ', 'セキュリティ監視と監査システム'],
        cta1: 'ドキュメントを見る',
        cta2: 'APIキーを取得',
        codeTitle: 'verify_authority.py',
        pseudocodeLabel: '疑似コード',
      },
      securityBoundarySection: {
        eyebrow: '明確な制御。明確な境界。',
        headline: '何が行動できるかを制御し、何をしたかを証明する',
        description: 'PTERIは、顧客の認証情報を管理することなく、アイデンティティ、委任された権限、ポリシー、行動の証拠を検証します。',
        disclosure: 'PTERIは、エンドポイントセキュリティ、アプリケーションセキュリティ、IAM、安全なモデル設計、または人的ガバナンスを置き換えるものではありません。完全に侵害されたエンドポイント、ユーザーが承認したマルウェア、または物理的強制から保護することを主張しません。',
        cta1: 'トラストセンターへ',
        cta2: 'セキュリティアーキテクチャを見る',
      },
    },
    ar: {
      hero: {
        eyebrow: 'أمان الهوية والتفويض للبشر والذكاء الاصطناعي',
        badge: 'أمان الهوية والتفويض للبشر والذكاء الاصطناعي',
        titlePart1: 'تحقق من كل هوية.',
        titlePart2: 'فوّض كل إجراء.',
        subtitle: 'يحمي PTERI الأشخاص ووكلاء الذكاء الاصطناعي وأنظمة المؤسسات الحالية بمصادقة متعددة العوامل بدون كلمة مرور، وتفويض في وقت التشغيل، وأدلة إجراءات قابلة للتحقق—دون الاعتماد على أسرار مشتركة.',
        getStarted: 'ابدأ البناء مجانًا',
        learnMore: 'كيف يعمل PTERI',
        proofLine: 'MFA بدون كلمة مرور · تفويض الوكلاء · أدلة إجراءات قابلة للتحقق',
        docs: 'مستندات المطور',
        demo: 'اطلب مشروعاً تجريبياً'
      },
      problem: {
        title: 'المشكلة التي نحلها',
        p1: 'لم يتم بناء الإنترنت الحديث للسلطة على نطاق واسع.',
        p1items: [
          'يتم استنتاج الهوية باستخدام كلمات المرور والوصول إلى البريد الوارد والاستدلال',
          'يتم التحكم في المدفوعات من قبل الوسطاء والأوصياء',
          'تعتمد واجهات برمجة التطبيقات على أسرار ثابتة تتسرب وتستمر',
          'ترث أنظمة الذكاء الاصطناعي بيانات اعتماد لا ينبغي أن تحتفظ بها بشكل دائم'
        ],
        p2: 'يبدو كل من هذه الإخفاقات مختلفًا، لكنها تشترك في نفس السبب الجذري: السلطة مركزية وقابلة للمشاركة وهشة.',
        p3: 'كل اختراق واستيلاء على حساب ومكالمة API غير مصرح بها وسير عمل أتمتة مخترق هو عرض من أعراض نموذج الثقة المكسور هذا.',
        solution: 'يستبدل PTERI هذا النموذج بالكامل من خلال جعل السلطة حتمية وذاتية الحفظ وقابلة للتحقق بشكل تشفيري في لحظة العمل.'
      },
      ecosystemCaption: 'تعمل جميع قدرات PTERI - الهوية والمدفوعات وواجهات برمجة التطبيقات وتفويض الذكاء الاصطناعي - على نفس نموذج السلطة الأساسي. كل سطح هو واجهة مختلفة في نفس طبقة الناقل.',
      evaluate: {
        title: 'كيفية تقييم PTERI',
        p1: 'لا يتم تقييم PTERI مثل منتج المصادقة التقليدي أو المحفظة.',
        p2: 'إنه بديل على مستوى النظام للأسرار المشتركة والثقة الوصائية.',
        question: 'عند تقييم PTERI، اسأل:',
        items: [
          'هل تقوم بإزالة كلمات المرور وOTPs ومفاتيح API؟',
          'هل تقوم بإزالة الحفظ المركزي والاسترداد؟',
          'هل تفرض السلطة بشكل تشفيري في وقت الطلب؟'
        ],
        closing: 'إذا كانت الإجابة نعم، فإن PTERI يتناسب بشكل طبيعي مع مجموعتك.'
      },
      useCases: {
        title: 'أين يتم استخدام PTERI',
        items: [
          'المصادقة بدون كلمة مرور للتطبيقات الحالية',
          'استبدال أنظمة العاملين القائمة على OTP',
          'تأمين الأدوات الداخلية والوصول الإداري',
          'المدفوعات والتسوية ذاتية الحفظ',
          'السلطة المتحكم فيها لوكلاء الذكاء الاصطناعي والأتمتة'
        ]
      },
      faq: {
        title: 'الأسئلة الشائعة',
        viewAll: 'عرض جميع الأسئلة الشائعة',
        items: [
          {
            question: 'ما هو PTERI؟',
            answer: 'PTERI هي منصة هوية وتفويض للأشخاص ووكلاء الذكاء الاصطناعي والتطبيقات والأجهزة. توفر مصادقة متعددة العوامل بدون كلمة مرور، وسلطة مفوَّضة، وحماية بيانات الاعتماد، ودليل إجراء قابل للتحقق.'
          },
          {
            question: 'هل يوفر PTERI مصادقة متعددة العوامل بدون كلمة مرور؟',
            answer: 'نعم. يدعم PTERI المصادقة بدون كلمة مرور والموافقة التشفيرية الإضافية للوصول الخاص بالموظفين والإجراءات الحساسة.'
          },
          {
            question: 'ما هو التفويض في وقت التشغيل؟',
            answer: 'يحدد التفويض في وقت التشغيل ما إذا كان يُسمح لشخص أو وكيل بتنفيذ إجراء معين في اللحظة التي يُطلب فيها ذلك الإجراء.'
          },
          {
            question: 'هل يمكن لـ PTERI حماية التطبيقات المؤسسية الحالية؟',
            answer: 'نعم. صُمم PTERI لإضافة المصادقة بدون كلمة مرور والتفويض على مستوى الإجراء إلى التطبيقات وواجهات البرمجة والبنية التحتية وسير العمل الإداري الحالية دون الحاجة إلى استبدال كامل.'
          },
          {
            question: 'هل يستبدل PTERI مزود الهوية أو منصة IAM الخاصة بنا؟',
            answer: 'ليس بالضرورة. يمكن لـ PTERI العمل جنبًا إلى جنب مع مزودي الهوية وأنظمة إدارة الوصول الحالية، مضيفًا التحقق بدون كلمة مرور، وهوية الوكيل، والسلطة المفوَّضة، والتفويض على مستوى الإجراء.'
          },
          {
            question: 'كيف يمكننا البدء؟',
            answer: 'ابدأ بتطبيق واحد أو وكيل واحد أو سير عمل حساس واحد وأضف PTERI عند حدود الوصول أو الإجراء.'
          }
        ]
      },
      finalCta: {
        title: 'احمِ كل هوية. تحقق من كل إجراء.',
        ctaHeadline: 'احمِ كل هوية. تحقق من كل إجراء.',
        ctaSubtitle: 'ابدأ بتطبيق واحد أو وكيل واحد أو سير عمل حساس واحد. أضف مصادقة بدون كلمة مرور وتفويضًا في وقت التشغيل دون استبدال بنيتك التحتية الحالية.',
        getStarted: 'ابدأ البناء مجانًا',
        docs: 'مستندات المطور',
        demo: 'اطلب مشروعاً تجريبياً'
      },
      securitySection: {
        label: 'قابل للتحقق بالتصميم',
        title: 'أدلة لا تعتمد على تأكيد نظام واحد',
        description: 'يجمع PTERI بين بيانات الاعتماد التي يتحكم بها العميل، والتحقق التشفيري، وبنية ثقة مستقلة لإنشاء أدلة تفويض دائمة.',
        disclosure: 'يستخدم PTERI حالياً إثبات العمل الخاص بـ Litecoin وتقنيات معزِّزة للخصوصية كمكونات في بنيته التحقق المستقلة.',
      },
      securityBoundary: 'حدود الأمان: لا يدعي PTERI حماية الأجهزة المخترقة أو البرامج الضارة المعتمدة من المستخدم أو الإكراه الجسدي. يتم فرض السلطة بشكل تشفيري، وليس سلوكيًا.',
      authorityGap: {
        eyebrow: 'فجوة السلطة',
        headline: 'لقد تغيّر الوصول. لم يتغيّر أمان المؤسسات.',
        description1: 'يصل الموظفون والتطبيقات ووكلاء الذكاء الاصطناعي الآن إلى نفس الأنظمة والبيانات الحساسة. لكن كلمات المرور ورموز الجلسات والصلاحيات الموروثة لا تستطيع دائمًا إثبات من — أو ما — الذي فوّض إجراءً معينًا.',
        description2: 'يتحقق PTERI من الهوية والسلطة عند طلب الوصول وعند تنفيذ الإجراءات الحساسة.',
        cards: [
          { title: 'بيانات اعتماد مخترقة', desc: 'يمكن سرقة كلمات المرور والرموز والأسرار المشتركة أو التصيد بها أو إعادة استخدامها أو كشفها.' },
          { title: 'سلطة وكيل غير واضحة', desc: 'قد يكون للوكيل وصول دون دليل على أن مستخدمًا أو مؤسسة قد وافق على إجراءه المحدد.' },
          { title: 'صلاحيات مفرطة', desc: 'يمكن أن توفر بيانات الاعتماد طويلة الأمد وصولاً أكبر مما يحتاجه شخص أو وكيل.' },
          { title: 'مساءلة غير مكتملة', desc: 'قد تُظهر السجلات التقليدية ما حدث دون إثبات من فوّضه.' },
        ],
      },
      enterpriseSystems: {
        eyebrow: 'أمان حديث للأنظمة الحالية',
        headline: 'عزّز ما تشغّله بالفعل',
        description: 'تعيش البيانات الحساسة وسير العمل الحرج بالفعل داخل تطبيقات المؤسسات وقواعد البيانات وواجهات API والبنية التحتية. يضيف PTERI وصولاً بدون كلمة مرور وتفويضًا على مستوى الإجراء دون الحاجة إلى استبدال تلك الأنظمة.',
        cards: [
          { title: 'حماية الوصول', desc: 'أضف مصادقة متعددة العوامل بدون كلمة مرور إلى التطبيقات الحالية وبوابات الإدارة وواجهات API وسير عمل الموظفين.' },
          { title: 'حماية الإجراءات الحساسة', desc: 'اطلب تفويضًا أقوى عندما يحاول شخص أو وكيل تنفيذ عملية عالية الخطورة.' },
          { title: 'حماية بيانات الاعتماد', desc: 'أبقِ المفاتيح ومواد التفويض بعيدًا عن المطالبات وذاكرة الوكيل ومكونات وقت التشغيل المكشوفة.' },
          { title: 'الحفاظ على الاستثمارات الحالية', desc: 'دمج PTERI جنبًا إلى جنب مع موفري الهوية وأنظمة IAM والتطبيقات وضوابط الأمان الحالية.' },
        ],
        cta1: 'استكشف أمان المؤسسات',
        cta2: 'عرض أدلة التكامل',
      },
      aiAgentSecurity: {
        eyebrow: 'التفويض في وقت التشغيل لوكلاء الذكاء الاصطناعي',
        headline: 'امنح وكلاء الذكاء الاصطناعي سلطة — وليس وصولاً غير مقيّد',
        description: 'يتيح PTERI للوكلاء تنفيذ المهام المعتمدة دون وراثة الهوية الكاملة للمستخدم أو امتلاك بيانات اعتماد غير مقيّدة.',
        cards: [
          { title: 'هوية وكيل قابلة للتحقق', desc: 'امنح كل وكيل هوية مميزة يمكن إدارتها والتحقق منها وإلغاؤها.' },
          { title: 'سلطة مفوَّضة', desc: 'حدد ما يمكن للوكيل فعله، وأي الموارد يمكنه الوصول إليها، ومدة بقاء سلطته سارية.' },
          { title: 'تطبيق السياسات وقت التشغيل', desc: 'تحقق من الهوية والنطاق والسياق والسياسة قبل تنفيذ إجراء ذي عواقب.' },
          { title: 'سجل إجراءات قابل للتحقق', desc: 'اربط كل إجراء للوكيل بالشخص أو المؤسسة أو سير العمل الذي فوّضه.' },
        ],
        exampleCard: {
          label: 'مثال توضيحي',
          agent: 'الوكيل: مساعد المشتريات',
          actionLabel: 'الإجراء المصرح به',
          action: 'إنشاء أوامر الشراء',
          maxValueLabel: 'القيمة القصوى',
          maxValue: '5,000$',
          validForLabel: 'صالح لمدة',
          validFor: '30 دقيقة',
          approvalLabel: 'يتطلب موافقة إنسان',
          approval: 'أكثر من 2,500$',
          statusLabel: 'الحالة',
          status: 'نشط',
        },
      },
      howItWorks: {
        eyebrow: 'نموذج واحد للسلطة',
        headline: 'من الهوية إلى الإجراء المُتحقَّق منه',
        steps: [
          { title: 'التعريف', desc: 'أنشئ هوية مميزة وقابلة للتحقق للشخص أو الوكيل أو التطبيق أو الجهاز.' },
          { title: 'المصادقة', desc: 'أكّد الهوية دون الاعتماد على كلمات مرور قابلة لإعادة الاستخدام أو أسرار مصادقة مشتركة.' },
          { title: 'التفويض', desc: 'حدد الإجراء المسموح به، والمورد، والغرض، والسياسة، ووقت انتهاء الصلاحية.' },
          { title: 'التصعيد', desc: 'اطلب موافقة إضافية عندما يكون الإجراء المطلوب حساسًا أو ذا تأثير كبير.' },
          { title: 'التحقق والإثبات', desc: 'تحقق من السلطة وقت التشغيل وأنتج دليلاً مقاوماً للتلاعب على الإجراء.' },
        ],
      },
      useCasesGrid: {
        eyebrow: 'منصة واحدة. حدود أمان متعددة.',
        headline: 'احمِ الوصول أينما كانت السلطة مهمة',
        cards: [
          { title: 'وصول القوى العاملة', desc: 'أضف مصادقة متعددة العوامل بدون كلمة مرور للموظفين والمسؤولين والمقاولين والعملاء.' },
          { title: 'العمليات المميزة', desc: 'اطلب موافقة صريحة للتغييرات الإدارية والوصول إلى الإنتاج وعمليات النشر وإدارة بيانات الاعتماد.' },
          { title: 'سير عمل وكلاء الذكاء الاصطناعي', desc: 'تحكم في الأدوات وواجهات API والبيانات والإجراءات التي يمكن لكل وكيل استخدامها.' },
          { title: 'الوصول إلى البيانات الحساسة', desc: 'أعد التحقق من الهوية والسلطة قبل عرض المعلومات أو تصديرها أو تعديلها أو مشاركتها.' },
          { title: 'الإجراءات المالية', desc: 'اطلب تفويضًا محدد النطاق قبل عمليات الشراء أو الدفعات أو السحوبات أو التحويلات.' },
          { title: 'التفاعلات بين الوكلاء', desc: 'حافظ على الهوية والتفويض والسياسة والمساءلة عندما يعمل الوكلاء معًا.' },
        ],
      },
      integration: {
        eyebrow: 'مصمَّم لمجموعتك التقنية الحالية',
        headline: 'أضف PTERI عند حدود الوصول والإجراء',
        description: 'يعمل PTERI جنبًا إلى جنب مع موفري الهوية والتطبيقات وواجهات API ووكلاء الذكاء الاصطناعي وخوادم MCP والبنية التحتية السحابية الحالية. ابدأ بسير عمل حساس واحد وتوسّع مع الوقت.',
        labels: ['موفرو الهوية وIAM', 'تطبيقات المؤسسات الحالية', 'وكلاء الذكاء الاصطناعي ومنصات التنسيق', 'واجهات API وخوادم MCP', 'البنية التحتية السحابية والإدارية', 'مراقبة الأمان وأنظمة التدقيق'],
        cta1: 'عرض التوثيق',
        cta2: 'احصل على مفتاح API',
        codeTitle: 'verify_authority.py',
        pseudocodeLabel: 'شيفرة توضيحية',
      },
      securityBoundarySection: {
        eyebrow: 'ضوابط واضحة. حدود واضحة.',
        headline: 'تحكم فيما يمكن أن يتصرف — وأثبت ما فعله',
        description: 'يتحقق PTERI من الهوية والسلطة المفوَّضة والسياسة وأدلة الإجراء دون السيطرة على بيانات اعتماد العميل.',
        disclosure: 'لا يحل PTERI محل أمان نقاط النهاية أو أمان التطبيقات أو IAM أو تصميم النماذج الآمن أو الحوكمة البشرية. ولا يدّعي حماية نقطة نهاية مخترقة بالكامل أو برامج ضارة معتمدة من المستخدم أو الإكراه الجسدي.',
        cta1: 'زيارة مركز الثقة',
        cta2: 'مراجعة بنية الأمان',
      },
    }
  }
  // @ts-ignore
  return translations[locale.value] || translations.en
})

// Components
import BuiltWithKakr from '~/components/BuiltWithKakr.vue'
import AIEnergyProof from '~/components/AIEnergyProof.vue'
import GuessVsProofDiagram from '~/components/GuessVsProofDiagram.vue'
import ProductPillCards from '~/components/ProductPillCards.vue'
import WhyKakrLabs from '~/components/WhyKakrLabs.vue'
import ReplaceStackDiagram from '~/components/ReplaceStackDiagram.vue'
import EcosystemDiagram from '~/components/EcosystemDiagram.vue'
import DiagramPlaceholder from '~/components/DiagramPlaceholder.vue'
import IOSHeroSection from '~/components/IOSHeroSection.vue'
import CodeCompare from '~/components/CodeCompare.vue'
import TrustLayerDifference from '~/components/TrustLayerDifference.vue'
import FullWidthVideo from '~/components/FullWidthVideo.vue'
import MobileAppPopup from '~/components/MobileAppPopup.vue'

// SEO

const { setSEO } = useSEO()

// AEO: FAQPage + SoftwareApplication schemas for homepage
const homepageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is PTERI?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'PTERI is an identity and authorization platform for people, AI agents, applications, and devices. It provides passwordless MFA, delegated authority, credential protection, and verifiable action evidence.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What problem does PTERI solve?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Traditional credentials may provide access without proving who authorized a specific action. PTERI verifies identity, authority, and applicable policy when access or a sensitive action is requested.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Does PTERI provide MFA?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. PTERI supports passwordless authentication and cryptographic step-up approval for workforce access and sensitive actions.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can PTERI protect existing enterprise applications?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. PTERI is designed to add passwordless authentication and action-level authorization to existing applications, APIs, infrastructure, and administrative workflows without requiring a complete replacement.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is runtime authorization?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Runtime authorization determines whether a person or agent is permitted to perform a specific action at the moment the action is requested.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Does PTERI replace our identity provider or IAM platform?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Not necessarily. PTERI can work alongside existing identity providers and access-management systems, adding passwordless verification, agent identity, delegated authority, and action-level authorization.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Does PTERI support agent-to-agent interactions?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'PTERI is designed to preserve identity, delegated authority, policy, and accountability when agents interact. Marketplace functionality remains in testing and is labeled Coming Soon.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Does PTERI use blockchain technology?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'PTERI currently uses Litecoin proof-of-work as one component of its independent verification architecture. Enterprise customers access PTERI through applications, APIs, and SDKs without needing to adopt cryptocurrency as a business process.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can PTERI prevent every malicious action?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'No security platform can prevent every failure. PTERI verifies identity, authority, and policy, but it does not replace endpoint security, application security, model security, or human governance.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How can we start?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Start with one application, agent, or sensitive workflow and add PTERI at the access or action boundary.'
      }
    }
  ]
}

const pteriSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'PTERI',
  'description': 'Identity and authorization platform for people, AI agents, applications, and devices. Provides passwordless MFA, delegated authority, credential protection, and verifiable action evidence.',
  'applicationCategory': 'SecurityApplication',
  'operatingSystem': 'Web, iOS, Android',
  'url': 'https://kakr.ai',
  'author': { '@id': 'https://kakr.ai/#organization' },
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD',
    'description': 'Free tier available for developers and startups'
  },
  'featureList': [
    'Passwordless MFA',
    'Runtime authorization',
    'AI agent identity and delegated authority',
    'Credential protection',
    'Verifiable action evidence',
    'Customer-controlled keys',
    'MCP integration',
    'REST and SDK APIs'
  ]
}

setSEO({
  title: 'KAKR Labs | Identity and Authorization Security for Humans and AI',
  description: 'KAKR Labs builds identity and authorization security for people, AI agents, and enterprise systems. PTERI provides passwordless MFA, runtime authorization, credential protection, and verifiable action evidence.',
  image: '/home-og.png',
  structuredData: [homepageFaqSchema, pteriSoftwareSchema]
})

// FAQ State
const activeFaq = ref(null)
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

// Authority Gap card icons — one per failure mode, in card order:
// Compromised Credentials, Unclear Agent Authority, Excessive Permissions, Incomplete Accountability
const authorityGapIcons = [
  `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/></svg>`,
  `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/></svg>`,
  `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/></svg>`,
  `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/></svg>`,
]

const securityPointsIcons = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22" height="22"><circle cx="24" cy="24" r="20" fill="#669df6"/><path fill="#317be4" d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33C37.97,18,42,22.03,42,27z"/><polygon fill="#fff" points="27,14 26,13 22,13 21,14 15,14 15,16 18,16 30,16 33,16 33,14"/><path fill="#fff" d="M16,18v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V18H16z M24,21c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S22.9,21,24,21z M28,31h-8v-2c0-1.33,2.67-2,4-2s4,0.67,4,2V31z"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22" height="22"><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22" height="22"><circle cx="24" cy="24" r="20" fill="#8b7cff"/><circle cx="24" cy="24" r="16" fill="#6f5ce6"/><path d="M24 14v10l7 7" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22" height="22"><rect x="10" y="6" width="28" height="36" rx="4" fill="#26a69a"/><rect x="14" y="10" width="20" height="28" rx="2" fill="#1c8e83"/><path d="M18 24l5 5 9-11" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22" height="22"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22" height="22"><circle cx="24" cy="24" r="20" fill="#b0bec5"/><circle cx="24" cy="24" r="16" fill="#78909c"/><text x="24" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#fff" font-family="Arial">Ł</text></svg>`,
]

const securityPointsData = {
  en: [
    { title: 'Customer-Controlled Credentials', desc: 'Sensitive keys and credentials remain under the control of the user or organization.' },
    { title: 'Cryptographic Identity', desc: 'Every identity — human or AI agent — is verified cryptographically, not with a shared secret.' },
    { title: 'Scoped Authorization', desc: 'Authority is limited to a specific action, value, and time window rather than unrestricted access.' },
    { title: 'Runtime Policy Verification', desc: 'Policy is evaluated at the moment an action is requested, not only at login.' },
    { title: 'Tamper-Evident Evidence', desc: 'Approved actions produce cryptographic evidence that cannot be altered after the fact.' },
    { title: 'Independent Trust Architecture', desc: 'Evidence can be anchored beyond a single vendor-controlled database for additional integrity and resilience.' },
  ],
  de: [
    { title: 'Kundenkontrollierte Anmeldedaten', desc: 'Sensible Schlüssel und Anmeldedaten bleiben unter der Kontrolle des Nutzers oder der Organisation.' },
    { title: 'Kryptografische Identität', desc: 'Jede Identität — Mensch oder KI-Agent — wird kryptografisch verifiziert, nicht über ein gemeinsames Geheimnis.' },
    { title: 'Begrenzte Autorisierung', desc: 'Die Befugnis ist auf eine bestimmte Aktion, einen Wert und ein Zeitfenster begrenzt, statt uneingeschränkten Zugriff zu gewähren.' },
    { title: 'Laufzeit-Richtlinienprüfung', desc: 'Die Richtlinie wird im Moment der Anfrage einer Aktion ausgewertet, nicht nur bei der Anmeldung.' },
    { title: 'Fälschungssicherer Nachweis', desc: 'Genehmigte Aktionen erzeugen einen kryptografischen Nachweis, der nachträglich nicht verändert werden kann.' },
    { title: 'Unabhängige Vertrauensarchitektur', desc: 'Nachweise können über eine einzelne, anbieterkontrollierte Datenbank hinaus verankert werden, für zusätzliche Integrität und Resilienz.' },
  ],
  es: [
    { title: 'Credenciales Controladas por el Cliente', desc: 'Las claves y credenciales sensibles permanecen bajo el control del usuario o la organización.' },
    { title: 'Identidad Criptográfica', desc: 'Cada identidad —humana o agente de IA— se verifica criptográficamente, no mediante un secreto compartido.' },
    { title: 'Autorización Delimitada', desc: 'La autoridad se limita a una acción, un valor y una ventana de tiempo específicos, en lugar de un acceso sin restricciones.' },
    { title: 'Verificación de Políticas en Tiempo de Ejecución', desc: 'La política se evalúa en el momento en que se solicita una acción, no solo al iniciar sesión.' },
    { title: 'Evidencia a Prueba de Manipulación', desc: 'Las acciones aprobadas generan evidencia criptográfica que no puede alterarse después del hecho.' },
    { title: 'Arquitectura de Confianza Independiente', desc: 'La evidencia puede anclarse más allá de una única base de datos controlada por el proveedor, para mayor integridad y resiliencia.' },
  ],
  ja: [
    { title: '顧客管理型の資格情報', desc: '機密性の高い鍵や資格情報は、ユーザーまたは組織の管理下に留まります。' },
    { title: '暗号による本人確認', desc: '人間かAIエージェントかを問わず、すべてのアイデンティティは共有シークレットではなく暗号技術で検証されます。' },
    { title: '範囲を限定した権限付与', desc: '権限は無制限のアクセスではなく、特定のアクション、金額、時間枠に限定されます。' },
    { title: 'ランタイムポリシー検証', desc: 'ポリシーはログイン時だけでなく、アクションが要求された瞬間に評価されます。' },
    { title: '改ざん検知可能な証拠', desc: '承認されたアクションは、後から変更できない暗号的な証拠を生成します。' },
    { title: '独立した信頼アーキテクチャ', desc: '証拠は単一のベンダー管理データベースを超えて固定でき、追加の完全性と耐障害性を実現します。' },
  ],
  ar: [
    { title: 'بيانات اعتماد يتحكم بها العميل', desc: 'تبقى المفاتيح وبيانات الاعتماد الحساسة تحت سيطرة المستخدم أو المؤسسة.' },
    { title: 'هوية تشفيرية', desc: 'يتم التحقق من كل هوية — بشرية أو وكيل ذكاء اصطناعي — تشفيرياً، لا عبر سر مشترك.' },
    { title: 'تفويض محدود النطاق', desc: 'تقتصر الصلاحية على إجراء ومبلغ ونافذة زمنية محددة، بدلاً من وصول غير مقيد.' },
    { title: 'التحقق من السياسات في وقت التشغيل', desc: 'يتم تقييم السياسة في اللحظة التي يُطلب فيها الإجراء، لا عند تسجيل الدخول فقط.' },
    { title: 'دليل مقاوم للتلاعب', desc: 'تُنتج الإجراءات المعتمدة دليلاً تشفيرياً لا يمكن تغييره بعد وقوعه.' },
    { title: 'بنية ثقة مستقلة', desc: 'يمكن ترسيخ الأدلة خارج قاعدة بيانات واحدة يتحكم بها مزود واحد، لمزيد من السلامة والمرونة.' },
  ],
}

const securityPoints = computed(() => {
  const data = securityPointsData[locale.value] || securityPointsData.en
  return data.map((item, i) => ({ ...item, icon: securityPointsIcons[i] }))
})
</script>

<style scoped>
/* ── Hero load-in animations (fire immediately, no scroll needed) ── */
@keyframes hero-rise {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-anim {
  opacity: 0;
  animation: hero-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.hero-anim--title  { animation-delay: 0.05s; }
.hero-anim--sub    { animation-delay: 0.22s; }
.hero-anim--media  { animation-delay: 0.38s; }
.hero-anim--cta    { animation-delay: 0.52s; }
.hero-anim--badge  { animation-delay: 0.66s; }

/* Skip load-in motion for reduced-motion users — show final state immediately */
@media (prefers-reduced-motion: reduce) {
  .hero-anim {
    animation: none;
    opacity: 1;
  }
}

/* ── Hero section ── */
.home-hero {
  min-height: min(92svh, 58rem);
  padding-top: clamp(5.5rem, 10svh, 7rem);
  padding-bottom: clamp(2.5rem, 5svh, 4rem);
  /* Reserve height to prevent CLS while animation loads */
  contain: layout;
}

/* ── Two-column grid: copy left, graphic right ── */
.home-hero__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: center;
}

/* ── Copy column ── */
.home-hero__copy {
  text-align: left;
}

.home-hero__title {
  font-size: clamp(2.6rem, 5.5vw, 4.6rem);
  line-height: 1.02;
  margin-bottom: clamp(1rem, 2.5vw, 1.4rem);
  text-wrap: balance;
}

.home-hero__subtitle {
  font-size: clamp(1rem, 1.55vw, 1.2rem);
  margin-bottom: clamp(1.35rem, 3vw, 2rem);
  max-width: 36rem;
}

.home-hero__actions {
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.home-hero__badge-row {
  margin-top: clamp(0.75rem, 1.5vw, 1.25rem);
}

/* ── Graphic column ── */
.home-hero__media {
  width: 100%;
  /* Reserve space to prevent CLS — matches the SVG aspect ratio */
  aspect-ratio: 16 / 9;
  filter: drop-shadow(0 22px 60px rgba(16,185,129,0.14));
  /* Contain the graphic to this box so it can never bleed/overlap into
     the copy column or header above */
  overflow: hidden;
  border-radius: 1.25rem;
  margin: 0 auto;
}

/* ── Two-column layout above 768px ── */
@media (min-width: 768px) {
  .home-hero {
    min-height: min(88svh, 58rem);
    padding-top: clamp(7rem, 12svh, 9.5rem);
  }

  .home-hero__grid {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }

  .home-hero__copy {
    text-align: left;
  }

  .home-hero__media {
    aspect-ratio: 16 / 9;
  }
}

/* ── Single column on mobile ≤767px ── */
@media (max-width: 767px) {
  .home-hero {
    min-height: auto;
    padding-top: 5.75rem;
    padding-bottom: 2.25rem;
  }

  .home-hero__copy {
    text-align: center;
  }

  .home-hero__title {
    font-size: clamp(2.3rem, 10.5vw, 3.2rem);
    line-height: 1.05;
  }

  .home-hero__subtitle {
    font-size: 1rem;
    line-height: 1.62;
    margin-bottom: 1.25rem;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .home-hero__actions {
    justify-content: center;
    width: 100%;
  }

  .home-hero__badge-row {
    display: flex;
    justify-content: center;
  }

  .home-hero__badge-row > div {
    font-size: 0.78rem;
  }

  /* Mobile graphic: use vertical aspect ratio from mobile SVG */
  .home-hero__media {
    aspect-ratio: 430 / 860;
    max-width: 340px;
    margin: 0 auto;
    filter: none; /* drop shadow is too heavy on small screens */
  }
}

.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
.btn-primary-mint {
  @apply bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all duration-200 px-6 py-3;
}
.btn-secondary-mint {
  @apply bg-white dark:bg-dark-900 text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-white/10 rounded-lg hover:bg-slate-50 dark:bg-dark-800 transition-all duration-200 px-6 py-3;
}

/* ── Authority Gap cards ── */
.authority-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}
.authority-card:hover {
  transform: translateY(-4px);
  border-color: rgba(239, 68, 68, 0.3);
  background-color: rgba(239, 68, 68, 0.03);
  box-shadow: 0 12px 32px rgba(239, 68, 68, 0.1);
}

.authority-card__glow {
  position: absolute;
  top: -30%;
  right: -30%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.authority-card:hover .authority-card__glow {
  opacity: 1;
}

.authority-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.85rem;
  margin-bottom: 1.25rem;
  color: #f87171;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}
.authority-card:hover .authority-card__icon {
  transform: scale(1.08) rotate(-3deg);
  background: rgba(239, 68, 68, 0.16);
  border-color: rgba(239, 68, 68, 0.4);
}

/* ── Use Cases bento grid ── */
.bento-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
}
.bento-card:hover {
  transform: translateY(-3px);
  border-color: rgba(16, 185, 129, 0.25);
  background-color: rgba(16, 185, 129, 0.03);
}
.bento-card__num {
  display: inline-block;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: rgba(16, 185, 129, 0.55);
  margin-bottom: 0.6rem;
}
</style>



