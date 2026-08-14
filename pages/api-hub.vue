<template>
  <div class="min-h-screen bg-black text-slate-300 pb-24 font-inter">
    <!-- Header/Hero -->
    <section class="api-hero">
      <ClientOnly><HeroBackground /></ClientOnly>
      <div class="api-hero__grid"></div>

      <div class="api-hero__wrap">
        <div class="api-hero__content">
          <div class="api-hero__eyebrow api-anim api-anim--1">
            <span class="api-eyebrow-pill">
              <span class="api-eyebrow-dot"></span>
              {{ $t('apiPage.badge') }}
            </span>
          </div>

          <div>
            <h1 class="api-hero__heading">
              {{ $t('apiPage.hero.titlePart1') }}<span class="api-heading-gradient">{{ $t('apiPage.hero.titleHighlight') }}</span>
            </h1>
            <p class="api-hero__subtitle">
              {{ $t('apiPage.hero.subtitle') }}
            </p>
            <p class="api-hero__description">
              {{ $t('apiPage.hero.description') }}
            </p>
          </div>

          <div class="api-hero__badges api-anim api-anim--3">
            <span class="api-stat-badge"><i class="las la-clock"></i> {{ $t('apiPage.hero.badges.uptime') }}</span>
            <span class="api-stat-badge api-stat-badge--cyan"><i class="las la-cube"></i> {{ $t('apiPage.hero.badges.litecoin') }}</span>
            <span class="api-stat-badge"><i class="las la-code"></i> {{ $t('apiPage.hero.badges.agnostic') }}</span>
          </div>

          <div class="api-hero__ctas">
            <a href="https://docs.kakr.ai" target="_blank" class="api-cta-primary group">
              {{ $t('apiPage.hero.cta.docs') }}
              <i class="las la-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a href="https://docs.kakr.ai/docs/api-reference" target="_blank" class="api-cta-ghost">{{ $t('apiPage.hero.cta.wallet') }}</a>
            <a href="https://pteri.org/" target="_blank" class="api-cta-ghost">{{ $t('apiPage.hero.cta.download') }}</a>
          </div>
        </div>

        <div class="api-hero__visual api-anim api-anim--2">
          <div class="api-proof-card">
            <div class="api-proof-card__top">
              <div class="api-proof-card__dot"></div>
              <span class="api-proof-card__label">PTERI API AUTHORITY</span>
            </div>
            <div class="api-endpoint">
              <span class="api-endpoint__method">POST</span>
              <span class="api-endpoint__path">/v1/authority/verify</span>
            </div>
            <div class="api-proof-steps">
              <div v-for="(step, index) in apiProofSteps" :key="step.label" class="api-proof-step">
                <div class="api-proof-step__num">{{ String(index + 1).padStart(2, '0') }}</div>
                <div class="api-proof-step__bar">
                  <div class="api-proof-step__fill" :style="{ width: `${step.pct}%`, background: step.color }"></div>
                </div>
                <div class="api-proof-step__text">{{ step.label }}</div>
              </div>
            </div>
            <div class="api-proof-card__result">
              <i class="las la-check-circle"></i>
              Approved
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Modal -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showDownloadModal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" @click.self="showDownloadModal = false">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <!-- Modal -->
          <div class="relative z-10 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 sm:p-10 max-w-lg w-full shadow-2xl">
            <!-- Close -->
            <button @click="showDownloadModal = false" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <!-- Header -->
            <p class="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-3">PTERI App</p>
            <h3 class="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">Your Identity. Your Authority. Your Control.</h3>
            <p class="text-slate-400 text-sm mb-8">Passwordless authentication and customer-controlled credentials — zero unencrypted credential storage on KAKR servers. Free to download.</p>
            <!-- QR codes -->
            <div class="flex flex-row gap-6 justify-center">
              <!-- iOS -->
              <div class="flex flex-col items-center gap-3 flex-1">
                <div class="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <img src="/apple-store-qr.png" alt="iOS App Store QR Code" class="w-[100px] h-[100px] rounded-lg" />
                </div>
                <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" rel="noopener" class="transition-transform hover:scale-105">
                  <img src="/ios.png" alt="Download on the App Store" class="h-9 w-auto" />
                </a>
                <p class="text-white/50 text-xs">Scan for iOS</p>
              </div>
              <!-- Divider -->
              <div class="flex items-center"><div class="w-px h-28 bg-white/10"></div></div>
              <!-- Android -->
              <div class="flex flex-col items-center gap-3 flex-1">
                <div class="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <img src="/play-store-qr.png" alt="Google Play QR Code" class="w-[100px] h-[100px] rounded-lg" />
                </div>
                <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" rel="noopener" class="transition-transform hover:scale-105">
                  <img src="/playstore.png" alt="Get it on Google Play" class="h-9 w-auto" />
                </a>
                <p class="text-white/50 text-xs">Scan for Android</p>
              </div>
            </div>
            <!-- Pills -->
            <div class="flex flex-wrap gap-2 mt-6 justify-center">
              <span class="pill">Customer-Controlled</span>
              <span class="pill">Self-Custody</span>
              <span class="pill">On-chain 2FA</span>
              <span class="pill">Free</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Main Grid Content -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative" data-aos="fade-up">
      <!-- Section ambient glow -->
      <div class="absolute pointer-events-none" style="width:500px;height:300px;top:0;left:50%;transform:translateX(-50%);background:radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%);filter:blur(60px);"></div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

        <!-- Left Column -->
        <div class="flex flex-col gap-6">
          <!-- The Developer Problem -->
          <div class="bg-[#0f0f0f] rounded-[2rem] p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-colors flex flex-col">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">{{ $t('apiPage.devProblem.title') }}</h2>
          <p class="text-white/70 mb-8 leading-relaxed">{{ $t('apiPage.devProblem.description') }}</p>

          <h3 class="text-lg font-bold text-slate-200 mb-4">{{ $t('apiPage.devProblem.failureTitle') }}</h3>
          <div class="space-y-4">
            <div class="bg-black/50 p-4 rounded-xl border border-white/5">
              <h4 class="font-bold text-orange-400 text-sm mb-1 flex items-center gap-2"><i class="las la-exclamation-circle text-lg"></i> {{ $t('apiPage.devProblem.leakedCredentials.title') }}</h4>
              <p class="text-xs text-slate-500">{{ $t('apiPage.devProblem.leakedCredentials.description') }}</p>
            </div>
            <div class="bg-black/50 p-4 rounded-xl border border-white/5">
              <h4 class="font-bold text-orange-400 text-sm mb-1 flex items-center gap-2"><i class="las la-hourglass-half text-lg"></i> {{ $t('apiPage.devProblem.persistentAccess.title') }}</h4>
              <p class="text-xs text-slate-500">{{ $t('apiPage.devProblem.persistentAccess.description') }}</p>
            </div>
            <div class="bg-black/50 p-4 rounded-xl border border-white/5">
              <h4 class="font-bold text-orange-400 text-sm mb-1 flex items-center gap-2"><i class="las la-expand-arrows-alt text-lg"></i> {{ $t('apiPage.devProblem.scopeCreep.title') }}</h4>
              <p class="text-xs text-slate-500">{{ $t('apiPage.devProblem.scopeCreep.description') }}</p>
            </div>
            <div class="bg-black/50 p-4 rounded-xl border border-white/5">
              <h4 class="font-bold text-orange-400 text-sm mb-1 flex items-center gap-2"><i class="las la-robot text-lg"></i> {{ $t('apiPage.devProblem.unsafeDelegation.title') }}</h4>
              <p class="text-xs text-slate-500">{{ $t('apiPage.devProblem.unsafeDelegation.description') }}</p>
            </div>
          </div>
        </div>

        <!-- The Shift -->
        <div class="bg-[#0f0f0f] rounded-[2rem] p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-colors flex flex-col">
          <h2 class="text-xl sm:text-2xl font-bold text-white mb-8">The Shift: From Secrets to Verified Intent</h2>
          
          <div class="grid grid-cols-2 gap-x-4 gap-y-0">
            <!-- Headers -->
            <div class="text-orange-400 font-bold text-sm text-center pb-4 border-b border-white/5">Secret-Based</div>
            <div class="text-blue-400 font-bold text-sm text-center pb-4 border-b border-white/5">With PTERI</div>
            
            <!-- Row 1 -->
            <div class="flex items-center gap-3 py-4 border-b border-white/5">
              <i class="las la-key text-orange-400 text-xl shrink-0"></i>
              <span class="text-xs text-white/70">Static API keys</span>
            </div>
            <div class="flex items-center gap-3 py-4 border-b border-white/5">
              <i class="las la-shield-alt text-blue-400 text-xl shrink-0"></i>
              <span class="text-xs text-white/70">Per-request cryptographic proof</span>
            </div>
            
            <!-- Row 2 -->
            <div class="flex items-center gap-3 py-4 border-b border-white/5">
              <i class="las la-hourglass-half text-orange-400 text-xl shrink-0"></i>
              <span class="text-xs text-white/70">Long-lived tokens</span>
            </div>
            <div class="flex items-center gap-3 py-4 border-b border-white/5">
              <i class="las la-bolt text-blue-400 text-xl shrink-0"></i>
              <span class="text-xs text-white/70">Short-lived, one-time intent</span>
            </div>
            
            <!-- Row 3 -->
            <div class="flex items-center gap-3 py-4 border-b border-white/5">
              <i class="las la-database text-orange-400 text-xl shrink-0"></i>
              <span class="text-xs text-white/70">Broad, hard-to-limit access</span>
            </div>
            <div class="flex items-center gap-3 py-4 border-b border-white/5">
              <i class="las la-user-lock text-blue-400 text-xl shrink-0"></i>
              <span class="text-xs text-white/70">Least-privilege, purpose-bound</span>
            </div>
            
            <!-- Row 4 -->
            <div class="flex items-center gap-3 py-4 border-b border-white/5">
              <i class="las la-exclamation-triangle text-orange-400 text-xl shrink-0"></i>
              <span class="text-xs text-white/70">Hard to audit and revoke</span>
            </div>
            <div class="flex items-center gap-3 py-4 border-b border-white/5">
              <i class="las la-eye text-blue-400 text-xl shrink-0"></i>
              <span class="text-xs text-white/70">Fully auditable and revocable</span>
            </div>
          </div>
        </div>
        
        </div>

        <div class="flex flex-col gap-6">
          <!-- APIs Built on Authority -->
          <div class="bg-[#0f0f0f] rounded-[2rem] p-8 sm:p-10 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors relative overflow-hidden group shadow-[0_0_40px_rgba(16,185,129,0.05)]">
            <div class="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors"></div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6 relative z-10 flex items-center gap-3"><i class="las la-shield-alt text-emerald-400 text-3xl"></i> {{ $t('apiPage.authority.title') }}</h2>
            <ul class="space-y-6 relative z-10">
              <li>
                <h4 class="text-sm font-bold text-emerald-300 mb-1">{{ $t('apiPage.authority.signedRequests.title') }}</h4>
                <p class="text-xs text-white/70 leading-relaxed">{{ $t('apiPage.authority.signedRequests.description') }}</p>
              </li>
              <li>
                <h4 class="text-sm font-bold text-emerald-300 mb-1">{{ $t('apiPage.authority.verifiedAuthority.title') }}</h4>
                <p class="text-xs text-white/70 leading-relaxed">{{ $t('apiPage.authority.verifiedAuthority.description') }}</p>
              </li>
              <li>
                <h4 class="text-sm font-bold text-emerald-300 mb-1">{{ $t('apiPage.authority.deterministicPolicy.title') }}</h4>
                <p class="text-xs text-white/70 leading-relaxed">{{ $t('apiPage.authority.deterministicPolicy.description') }}</p>
              </li>
              <li>
                <h4 class="text-sm font-bold text-emerald-300 mb-1">{{ $t('apiPage.authority.cleanOutcomes.title') }}</h4>
                <p class="text-xs text-white/70 leading-relaxed">{{ $t('apiPage.authority.cleanOutcomes.description') }}</p>
              </li>
            </ul>
          </div>

          <!-- Quick Start (Code Block) -->
          <div class="bg-[#0a0a0a] rounded-[2rem] p-6 border border-white/10 relative overflow-hidden">
            <div class="flex items-center justify-between mb-4 px-2">
              <h2 class="text-lg font-bold text-white">{{ $t('apiPage.quickStart') }}</h2>
              <span class="text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-2 py-1 rounded">Pseudocode — illustrative only</span>
            </div>

            <div class="bg-black border border-white/5 rounded-xl p-4 overflow-x-auto text-sm font-mono leading-relaxed">
<pre>
<span class="text-slate-500">// Pseudocode — see docs.kakr.ai for real SDK and endpoints</span>

<span class="text-slate-600">// Step 1: Identify the user or agent</span>
<span class="text-pink-400">const</span> <span class="text-blue-300">identity</span> <span class="text-pink-400">=</span> <span class="text-white">pteri</span><span class="text-slate-500">.</span><span class="text-purple-300">identify</span><span class="text-slate-300">({</span>
  <span class="text-blue-200">type</span><span class="text-slate-500">:</span> <span class="text-green-300">'user'</span><span class="text-slate-500">,</span>
  <span class="text-blue-200">credential</span><span class="text-slate-500">:</span> <span class="text-white">deviceKey</span>
<span class="text-slate-300">})</span><span class="text-slate-500">;</span>

<span class="text-slate-600">// Step 2: Define the requested action and scope</span>
<span class="text-pink-400">const</span> <span class="text-blue-300">authorization</span> <span class="text-pink-400">= await</span> <span class="text-white">pteri</span><span class="text-slate-500">.</span><span class="text-purple-300">authorize</span><span class="text-slate-300">({</span>
  <span class="text-blue-200">identity</span><span class="text-slate-500">:</span> <span class="text-white">identity</span><span class="text-slate-500">,</span>
  <span class="text-blue-200">action</span><span class="text-slate-500">:</span> <span class="text-green-300">'payment.send'</span><span class="text-slate-500">,</span>
  <span class="text-blue-200">policy</span><span class="text-slate-500">:</span> <span class="text-green-300">'payment_authorization'</span>
<span class="text-slate-300">})</span><span class="text-slate-500">;</span>

<span class="text-slate-600">// Step 3: Evaluate — allow or deny with evidence</span>
<span class="text-pink-400">if</span> <span class="text-slate-300">(</span><span class="text-pink-400">!</span><span class="text-white">authorization.allowed</span><span class="text-slate-300">) {</span>
  <span class="text-pink-400">throw new</span> <span class="text-purple-300">Error</span><span class="text-slate-300">(</span><span class="text-green-300">'Insufficient authority'</span><span class="text-slate-300">)</span><span class="text-slate-500">;</span>
<span class="text-slate-300">}</span>

<span class="text-slate-600">// Step 4: Execute — evidence is attached to the action</span>
<span class="text-purple-300">executeAction</span><span class="text-slate-300">(</span><span class="text-white">authorization.evidence</span><span class="text-slate-300">)</span><span class="text-slate-500">;</span>
</pre>
            </div>
            <p class="text-xs text-slate-600 mt-3 px-2">This is illustrative pseudocode. Install a real SDK and use real endpoints from <a href="https://docs.kakr.ai" target="_blank" class="text-emerald-600 hover:text-emerald-500">docs.kakr.ai</a>.</p>
          </div>
        </div>

        <!-- Core API Capabilities -->
        <div class="bg-[#0f0f0f] rounded-[2rem] p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-colors lg:col-span-2 mt-4">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-3xl sm:text-4xl font-bold text-white">{{ $t('apiPage.coreCapabilities.title') }}</h2>
            <div class="w-12 h-12 rounded-full border border-white/10 text-slate-400 flex items-center justify-center"><i class="las la-layer-group text-2xl"></i></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="p-6 bg-black/50 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors group">
              <h4 class="font-bold text-white text-sm mb-2"><i class="las la-user-shield text-emerald-400 mr-2 text-lg group-hover:scale-110 transition-transform"></i> {{ $t('apiPage.coreCapabilities.authentication.title') }}</h4>
              <p class="text-xs text-white/70 leading-relaxed">{{ $t('apiPage.coreCapabilities.authentication.description') }}</p>
            </div>
            <div class="p-6 bg-black/50 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors border-l-2 border-l-purple-500/50 group">
              <h4 class="font-bold text-white text-sm mb-2"><i class="las la-robot text-purple-400 mr-2 text-lg group-hover:scale-110 transition-transform"></i> {{ $t('apiPage.coreCapabilities.aiDelegation.title') }}</h4>
              <p class="text-xs text-white/70 leading-relaxed">{{ $t('apiPage.coreCapabilities.aiDelegation.description') }}</p>
            </div>
            <div class="p-6 bg-black/50 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors group">
              <h4 class="font-bold text-white text-sm mb-2"><i class="las la-key text-emerald-400 mr-2 text-lg group-hover:scale-110 transition-transform"></i> {{ $t('apiPage.coreCapabilities.authorization.title') }}</h4>
              <p class="text-xs text-white/70 leading-relaxed">{{ $t('apiPage.coreCapabilities.authorization.description') }}</p>
            </div>
            <div class="p-6 bg-black/50 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors group">
              <h4 class="font-bold text-white text-sm mb-2"><i class="las la-clipboard-list text-emerald-400 mr-2 text-lg group-hover:scale-110 transition-transform"></i> {{ $t('apiPage.coreCapabilities.policy.title') }}</h4>
              <p class="text-xs text-white/70 leading-relaxed">{{ $t('apiPage.coreCapabilities.policy.description') }}</p>
            </div>
            <div class="p-6 bg-black/50 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors md:col-span-2 lg:col-span-1 group">
              <h4 class="font-bold text-white text-sm mb-2"><i class="las la-coins text-emerald-400 mr-2 text-lg group-hover:scale-110 transition-transform"></i> {{ $t('apiPage.coreCapabilities.payments.title') }}</h4>
              <p class="text-xs text-white/70 leading-relaxed">{{ $t('apiPage.coreCapabilities.payments.description') }}</p>
            </div>
          </div>
        </div>

        <!-- How PTERI Works (Process Flow) -->
        <div class="bg-[#0f0f0f] rounded-[2rem] p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-colors lg:col-span-2 mt-2">
          <div class="text-center mb-16"data-aos="fade-up">
            <h2 class="text-3xl sm:text-4xl font-bold text-white">{{ $t('apiPage.howItWorks.title') }}</h2>
          </div>

          <div class="relative max-w-4xl mx-auto px-4">
            <div class="hidden sm:block absolute top-[2.5rem] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent z-0"></div>

            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start relative z-10 gap-8 sm:gap-4">
              <div v-for="n in 4" :key="n" class="flex flex-col items-center text-center w-full sm:w-32 group cursor-default">
                <div class="w-20 h-20 rounded-[1.5rem] bg-black border border-white/10 flex items-center justify-center mb-5 relative group-hover:-translate-y-2 group-hover:border-emerald-500/50 transition-all duration-300 z-10 shadow-xl overflow-hidden">
                  <div class="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span class="text-emerald-500 font-bold text-2xl relative z-10 group-hover:scale-110 transition-transform">{{ n }}</span>
                </div>
                <p class="text-xs text-white/70 leading-relaxed">{{ $t(`apiPage.howItWorks.steps.${n - 1}`) }}</p>
              </div>

              <div class="flex flex-col items-center text-center w-full sm:w-32 group cursor-default">
                <div class="w-20 h-20 rounded-[1.5rem] bg-emerald-500 border border-emerald-400 flex items-center justify-center mb-5 relative group-hover:-translate-y-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 z-10">
                  <i class="las la-check text-white text-3xl group-hover:scale-110 transition-transform"></i>
                </div>
                <p class="text-xs text-white font-bold leading-relaxed mb-1">{{ $t('apiPage.howItWorks.steps.4') }}</p>
                <p class="text-[10px] text-slate-400 leading-tight border border-white/10 rounded px-2 py-0.5 whitespace-nowrap">{{ $t('apiPage.howItWorks.steps.4sub') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- PTERI Intelligence & MCP -->
        <div class="bg-gradient-to-br from-[#1a1a24] to-[#0f0f0f] rounded-[2rem] p-8 sm:p-10 border border-purple-500/20 hover:border-purple-500/40 transition-colors relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          <div class="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-6 relative z-10 mt-2">{{ $t('apiPage.mcp.badge') }}</div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">{{ $t('apiPage.mcp.title') }}</h2>
          <p class="text-white/70 text-sm leading-relaxed mb-6 relative z-10">{{ $t('apiPage.mcp.description') }}</p>
          <a href="https://docs.kakr.ai" target="_blank" class="text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors flex items-center gap-1 group-hover:gap-2 relative z-10">docs.kakr.ai <i class="las la-external-link-alt"></i></a>
        </div>

        <!-- Verification Infrastructure (Litecoin, isolated from the identity & authorization APIs above) -->
        <div class="bg-[#0f0f0f] rounded-[2rem] p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden group">
          <div class="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6 relative z-10">Verification Infrastructure</div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">Infrastructure APIs</h2>
          <p class="text-white/70 text-sm leading-relaxed relative z-10">Litecoin proof-of-work components used as the independent verification layer beneath PTERI's authorization evidence — kept separate from the identity and authorization APIs above.</p>
        </div>

        <!-- Supported Environments -->
        <div class="bg-[#0f0f0f] rounded-[2rem] p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-colors flex flex-col">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">{{ $t('apiPage.environments.title') }}</h2>
          <p class="text-white/70 text-sm leading-relaxed mb-8">{{ $t('apiPage.environments.description') }}</p>
          <div class="flex flex-wrap gap-3 mt-auto">
            <span class="px-4 py-1.5 bg-black border border-white/10 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2"><i class="las la-wallet text-emerald-500"></i> PTERI App</span>
            <span class="px-4 py-1.5 bg-black border border-white/10 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2"><i class="lab la-node-js text-emerald-500"></i> Node.js</span>
            <span class="px-4 py-1.5 bg-black border border-white/10 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2"><i class="lab la-python text-emerald-500"></i> Python</span>
            <span class="px-4 py-1.5 bg-black border border-white/10 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2"><i class="las la-code text-emerald-500"></i> Go</span>
            <span class="px-4 py-1.5 bg-black border border-white/10 rounded-xl text-xs font-semibold text-slate-300 flex items-center gap-2"><i class="las la-cog text-emerald-500"></i> Rust</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Next Steps -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center" data-aos="zoom-in">
      <div class="rounded-[2rem] p-10 border border-cyan-500/20 relative overflow-hidden" style="background: linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(16,185,129,0.06) 100%);">
        <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 70%);"></div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">{{ $t('apiPage.nextSteps.title') }}</h2>
        <p class="text-white/70 text-sm mb-8 max-w-xl mx-auto leading-relaxed relative z-10">{{ $t('apiPage.nextSteps.description') }}</p>
        <div class="flex justify-center gap-4 flex-wrap relative z-10">
          <a href="https://docs.kakr.ai" target="_blank" class="btn-primary">{{ $t('apiPage.nextSteps.docs') }} <i class="las la-external-link-alt"></i></a>
          <a href="/contact" class="btn-ghost">{{ $t('apiPage.nextSteps.bookCall') }}</a>
        </div>
      </div>
    </section>

    <!-- API Reference CTA -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12" data-aos="fade-up">
      <div class="rounded-[2rem] p-8 sm:p-12 border border-white/8 relative overflow-hidden" style="background: #0a0f1a;">
        <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
        <div class="absolute top-0 left-0 right-0 h-px" style="background: linear-gradient(90deg, transparent, rgba(6,182,212,0.6), transparent);"></div>

        <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <!-- Left: text -->
          <div class="text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-4">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400" style="box-shadow: 0 0 6px rgba(6,182,212,0.8);"></span>
              Full API Reference
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              Everything you need to<br class="hidden sm:block"> build with PTERI
            </h2>
            <p class="text-slate-400 text-sm max-w-lg leading-relaxed">
              Quickstart guide, API reference, SDK documentation, MCP integration guides, error handling, and code examples — all at docs.kakr.ai.
            </p>
          </div>

          <!-- Right: action cards -->
          <div class="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="https://docs.kakr.ai" target="_blank"
              class="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/8 hover:bg-cyan-500/15 hover:border-cyan-500/50 transition-all">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <p class="text-white font-bold text-sm">API Docs</p>
                <p class="text-slate-500 text-xs">docs.kakr.ai</p>
              </div>
              <svg class="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>

            <a href="https://pteri.org/Register" target="_blank"
              class="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/8 hover:bg-emerald-500/15 hover:border-emerald-500/50 transition-all">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
              </div>
              <div>
                <p class="text-white font-bold text-sm">Get API Key</p>
                <p class="text-slate-500 text-xs">Free to start</p>
              </div>
              <svg class="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-12" data-aos="fade-up">
      <div class="rounded-[2rem] p-12 text-center border border-emerald-500/20 relative overflow-hidden" style="background: linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(6,182,212,0.05) 50%, rgba(16,185,129,0.08) 100%);">
        <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 70%); filter: blur(40px);"></div>
        <div class="absolute top-0 left-0 right-0 h-px" style="background: linear-gradient(90deg, transparent, rgba(52,211,153,0.5), transparent);"></div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 relative z-10 tracking-tight">{{ $t('apiPage.finalCta.title') }}</h2>
        <div class="flex flex-wrap justify-center gap-4 relative z-10">
          <a href="https://pteri.org/Register" target="_blank" class="btn-primary">{{ $t('apiPage.finalCta.start') }}</a>
          <a href="https://docs.kakr.ai" target="_blank" class="btn-ghost">{{ $t('apiPage.finalCta.docs') }}</a>
          <a href="https://pteri.kakr.org" target="_blank" class="btn-ghost">{{ $t('apiPage.finalCta.wallet') }}</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSEO } from '~/composables/useSEO'

const showDownloadModal = ref(false)
const apiProofSteps = [
  { label: 'Signed request', pct: 88, color: 'linear-gradient(90deg, #10b981, #34d399)' },
  { label: 'Policy checked', pct: 74, color: 'linear-gradient(90deg, #06b6d4, #22d3ee)' },
  { label: 'Scope bounded', pct: 64, color: 'linear-gradient(90deg, #10b981, #06b6d4)' },
  { label: 'Outcome logged', pct: 92, color: 'linear-gradient(90deg, #34d399, #6ee7b7)' }
]
const { setSEO } = useSEO()

// AEO: Service schema for PTERI developer platform
const apiHubServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'PTERI Developer APIs & SDK',
  'description': 'Enterprise-grade Web3 APIs and SDKs for building secure identity, authentication, payments, and AI agent integrations. REST, gRPC, and MCP protocol support.',
  'url': 'https://kakr.ai/api-hub',
  'provider': { '@id': 'https://kakr.ai/#organization' },
  'serviceType': 'Blockchain API & Developer Platform',
  'areaServed': 'Worldwide',
  'category': 'Software Development',
  'offers': [
    {
      '@type': 'Offer',
      'name': 'Developer Free Tier',
      'price': '0',
      'priceCurrency': 'USD',
      'description': 'Free API access for developers and startups with PTERI SDK and testnet environment'
    },
    {
      '@type': 'Offer',
      'name': 'Enterprise API Plan',
      'description': 'Usage-based enterprise plans with dedicated SLAs, custom integrations, and priority support'
    }
  ],
  'audience': {
    '@type': 'Audience',
    'audienceType': 'Software Developers, Enterprise Engineers, AI Developers'
  }
}

setSEO({
  title: 'PTERI Developer APIs | Identity, Authorization, MCP, and Verification',
  description: 'Use PTERI APIs, SDKs, and MCP integrations to authenticate users, authorize agents, protect credentials, and verify sensitive actions.',
  image: '/api-page-og.png',
  structuredData: [apiHubServiceSchema]
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* ── API Hub hero load-in animations ── */
@keyframes api-rise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes api-fade {
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
}
.api-anim { opacity: 0; animation: api-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
.api-anim--1 { animation-delay: 0.05s; }
.api-anim--2 { animation-delay: 0.2s; animation-name: api-fade; }
.api-anim--3 { animation-delay: 0.36s; }
.api-anim--4 { animation-delay: 0.5s; }

.font-inter {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.api-hero {
  position: relative;
  overflow: hidden;
  padding: 9rem 0 7rem;
  background: #000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.api-hero__ambient,
.api-hero__grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.api-hero__ambient {
  background:
    radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16, 185, 129, 0.15) 0%, transparent 65%),
    radial-gradient(ellipse 50% 40% at 10% 80%, rgba(52, 211, 153, 0.06) 0%, transparent 60%),
    linear-gradient(180deg, rgba(3, 18, 31, 0.76) 0%, #000 92%);
}

.api-hero__grid {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.45), transparent);
}

.api-hero__wrap {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 430px;
  gap: 5rem;
  align-items: center;
  width: min(calc(100% - 2rem), 72rem);
  margin: 0 auto;
}

.api-hero__content,
.api-hero__visual {
  min-width: 0;
}

.api-hero__visual {
  transform: translateY(-3.25rem);
}

.api-hero__eyebrow {
  margin-bottom: 2rem;
}

.api-eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(52, 211, 153, 0.25);
  background: rgba(52, 211, 153, 0.06);
  color: #34d399;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.api-eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.8);
  animation: api-pulse-dot 2s infinite;
}

@keyframes api-pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.45;
    transform: scale(0.75);
  }
}

.api-hero__heading {
  max-width: 820px;
  margin: 0 0 1.5rem;
  color: #fff;
  font-size: clamp(2rem, 4.5vw, 3.75rem);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.035em;
  overflow-wrap: anywhere;
}

.api-heading-gradient {
  background: linear-gradient(135deg, #34d399 0%, #10b981 60%, #6ee7b7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(52,211,153,0.4));
}

.api-hero__subtitle {
  margin: 0 0 1.6rem;
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.018em;
  max-width: 100%;
  overflow-wrap: anywhere;
  background: linear-gradient(135deg, #34d399 0%, #10b981 60%, #6ee7b7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 30px rgba(52, 211, 153, 0.35));
}

.api-hero__description {
  max-width: 620px;
  margin: 0 0 2.25rem;
  color: #d1fae5;
  font-size: 1.125rem;
  line-height: 1.75;
  opacity: 0.72;
}

.api-hero__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  margin-bottom: 2.25rem;
}

.api-stat-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  min-height: 2.4rem;
  padding: 0.65rem 1rem;
  border-radius: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.045);
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.875rem;
  font-weight: 750;
  transition: border-color 0.2s, background 0.2s, color 0.2s;
}

.api-stat-badge i {
  color: #34d399;
  font-size: 1.125rem;
}

.api-stat-badge--green {
  color: #34d399;
  background: rgba(16, 185, 129, 0.08);
  border-color: rgba(16, 185, 129, 0.25);
}

.api-stat-badge--cyan {
  color: #22d3ee;
  background: rgba(6, 182, 212, 0.08);
  border-color: rgba(6, 182, 212, 0.25);
}

.api-stat-badge:hover {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(52, 211, 153, 0.42);
  color: #fff;
}

.api-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.api-cta-primary,
.api-cta-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  font-size: 0.9375rem;
  font-weight: 700;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.api-cta-primary {
  color: #000000;
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  border: 1px solid rgba(52, 211, 153, 0.5);
  box-shadow: 0 0 16px rgba(52, 211, 153, 0.3);
}

.api-cta-primary:hover {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 0 28px rgba(52, 211, 153, 0.5);
  transform: translateY(-1px);
}

.api-cta-ghost {
  color: #ffffff;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.api-cta-ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.35);
}

.api-proof-card {
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(16, 185, 129, 0.2);
  background: rgba(16, 185, 129, 0.04);
  backdrop-filter: blur(24px);
  box-shadow: 0 0 80px rgba(16, 185, 129, 0.12), 0 0 0 1px rgba(16, 185, 129, 0.05);
}

.api-proof-card__top {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1.5rem;
}

.api-proof-card__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
  animation: api-pulse-dot 2s infinite;
}

.api-proof-card__label {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.09em;
}

.api-endpoint {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding: 0.85rem 1rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.38);
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
}

.api-endpoint__method {
  color: #34d399;
  font-size: 0.78rem;
  font-weight: 900;
}

.api-endpoint__path {
  min-width: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.82rem;
  overflow-wrap: anywhere;
}

.api-proof-steps {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-bottom: 1.75rem;
}

.api-proof-step {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.api-proof-step__num {
  width: 20px;
  flex-shrink: 0;
  color: #34d399;
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.68rem;
  font-weight: 800;
  opacity: 0.65;
}

.api-proof-step__bar {
  flex: 1;
  height: 5px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
}

.api-proof-step__fill {
  height: 100%;
  border-radius: 999px;
}

.api-proof-step__text {
  width: 120px;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: 0.8rem;
  font-weight: 700;
}

.api-proof-card__result {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.875rem 1.125rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.1);
  color: #34d399;
  font-size: 0.875rem;
  font-weight: 850;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.15);
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  color: #34d399;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 960px) {
  .api-hero__wrap {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .api-hero__content,
  .api-hero__badges,
  .api-hero__ctas {
    justify-content: center;
  }

  .api-hero__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .api-hero__description {
    margin-left: auto;
    margin-right: auto;
  }

  .api-hero__visual {
    width: min(100%, 430px);
    margin: 0 auto;
    transform: none;
  }
}

@media (max-width: 640px) {
  .api-hero {
    padding: 7.5rem 0 5rem;
  }

  .api-hero__wrap {
    width: min(calc(100% - 1.5rem), 72rem);
    gap: 2.5rem;
  }

  .api-hero__heading {
    font-size: clamp(1.75rem, 8vw, 2.4rem);
    line-height: 1.12;
  }

  .api-hero__subtitle {
    font-size: 1rem;
    line-height: 1.24;
    max-width: 22ch;
    margin-left: auto;
    margin-right: auto;
    white-space: normal;
  }

  .api-hero__description {
    font-size: 1rem;
    max-width: 29ch;
  }

  .api-stat-badge {
    width: 100%;
    justify-content: center;
  }

  .api-hero__ctas {
    width: 100%;
  }

  .api-cta-primary,
  .api-cta-ghost {
    width: 100%;
  }

  .api-proof-card {
    padding: 1.25rem;
  }

  .api-proof-step {
    gap: 0.65rem;
  }

  .api-proof-step__text {
    width: 96px;
    font-size: 0.72rem;
  }
}
</style>



