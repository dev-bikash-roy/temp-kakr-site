<template>
  <div class="bg-background-dark text-white overflow-x-hidden selection:bg-green-600 selection:text-white min-h-screen flex flex-col font-sans">
    
    <!-- Hero Section -->
    <div class="relative flex flex-col items-center justify-center py-24 px-4 md:py-40 overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 z-0 opacity-[0.03]" style="background-size: 50px 50px; background-image: linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px); mask-image: radial-gradient(circle at center, black 40%, transparent 100%); -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);"></div>
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background-dark/95 to-background-dark pointer-events-none"></div>

      <div class="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
        <!-- Badge -->
        <div class="mb-10 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/30 bg-green-900/10 backdrop-blur-md text-green-500 text-xs font-bold font-mono uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(34,197,94,0.1)]">
          <span class="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></span>
          Pure Proof-of-Work Infrastructure
        </div>

        <!-- Title -->
        <h1 class="text-6xl md:text-8xl font-black text-white leading-tight tracking-tight mb-8 text-center font-heading">
          Vision to <span class="text-green-500 block md:inline">Execution</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-normal mb-12">
          Shipping decentralized infrastructure on <span class="text-white font-bold">100% Litecoin</span>.
          <span class="block mt-2 opacity-80">No OmniLite. No compromises. Just pure, verifiable code.</span>
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <button class="btn-primary w-full sm:w-auto">
            Explore Roadmap
          </button>
          <button class="w-full sm:w-auto px-10 py-5 rounded-lg border border-white/10 bg-black/5 hover:bg-black/10 text-white font-bold text-base uppercase tracking-widest transition-colors flex items-center justify-center gap-3 backdrop-blur-sm group">
            <span class="material-symbols-outlined text-2xl text-green-500 group-hover:scale-110 transition-transform">description</span>
            Read Whitepaper
          </button>
        </div>
      </div>
    </div>

    <!-- 2024 Journey Timeline -->
    <section class="relative w-full py-24 overflow-hidden">
      <div class="relative z-10 max-w-7xl mx-auto px-6 mb-24 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-heading">2024 Journey</h2>
        <p class="text-white/60 max-w-xl mx-auto text-lg">Building the bedrock of the PTERI ecosystem, month by month.</p>
      </div>

      <div class="relative max-w-5xl mx-auto px-4 md:px-0">
        <!-- Vertical Line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-900 to-transparent md:-translate-x-1/2 z-0"></div>
        
        <div class="space-y-20 md:space-y-12">
          <!-- Jan -->
          <div class="group relative md:flex justify-between items-center w-full">
            <div class="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background-dark bg-green-600 z-20 shadow-[0_0_15px_rgba(22,163,74,0.5)]"></div>
            <div class="md:w-[45%] ml-12 md:ml-0 relative">
              <div class="bg-[#0f140f] border border-white/5 rounded-2xl p-1 transition-all duration-300 hover:border-green-500/30 group-hover:-translate-y-1">
                <div class="relative bg-background-dark/80 p-8 rounded-xl backdrop-blur-sm h-full">
                  <div class="flex justify-between items-start mb-6">
                    <div class="flex items-center gap-3">
                      <div class="p-2 rounded bg-green-900/20 text-green-500"><span class="material-symbols-outlined text-xl">explore</span></div>
                      <span class="font-mono text-green-500 text-sm font-bold uppercase tracking-wider">Jan 2024</span>
                    </div>
                    <span class="px-3 py-1 bg-green-900/20 text-green-500 text-[10px] font-bold uppercase border border-green-500/10 rounded-md">Deployed</span>
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors font-heading">PTERI Explorer Beta</h3>
                  <p class="text-white/60 text-base leading-relaxed">
                    Launch of the block explorer for transparent transaction tracking. Verified high reliability in initial stress tests.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-[45%]"></div> 
          </div>

          <!-- Mar -->
          <div class="group relative md:flex flex-row-reverse justify-between items-center w-full">
             <div class="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background-dark bg-green-600 z-20 shadow-[0_0_15px_rgba(22,163,74,0.5)]"></div>
             <div class="md:w-[45%] ml-12 md:ml-0 relative">
               <div class="bg-[#0f140f] border border-white/5 rounded-2xl p-1 transition-all duration-300 hover:border-green-500/30 group-hover:-translate-y-1">
                 <div class="relative bg-background-dark/80 p-8 rounded-xl backdrop-blur-sm h-full">
                   <div class="flex justify-between items-start mb-6">
                     <div class="flex items-center gap-3">
                       <div class="p-2 rounded bg-green-900/20 text-green-500"><span class="material-symbols-outlined text-xl">account_balance_wallet</span></div>
                       <span class="font-mono text-green-500 text-sm font-bold uppercase tracking-wider">Mar 2024</span>
                     </div>
                     <span class="px-3 py-1 bg-green-900/20 text-green-500 text-[10px] font-bold uppercase border border-green-500/10 rounded-md">Deployed</span>
                   </div>
                   <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors font-heading">Wallet-as-a-Service</h3>
                   <p class="text-white/60 text-base leading-relaxed">
                     Enterprise-grade wallet infrastructure API. Enabled secure key management for over 50+ developer accounts.
                   </p>
                 </div>
               </div>
             </div>
             <div class="md:w-[45%]"></div>
          </div>

          <!-- Jun -->
          <div class="group relative md:flex justify-between items-center w-full">
            <div class="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background-dark bg-blue-500 z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <div class="md:w-[45%] ml-12 md:ml-0 relative">
              <div class="bg-[#0f140f] border border-white/5 rounded-2xl p-1 transition-all duration-300 hover:border-blue-500/30 group-hover:-translate-y-1">
                <div class="relative bg-background-dark/80 p-8 rounded-xl backdrop-blur-sm h-full">
                  <div class="flex justify-between items-start mb-6">
                    <div class="flex items-center gap-3">
                      <div class="p-2 rounded bg-blue-900/20 text-blue-400"><span class="material-symbols-outlined text-xl">grid_view</span></div>
                      <span class="font-mono text-blue-400 text-sm font-bold uppercase tracking-wider">Jun 2024</span>
                    </div>
                    <span class="px-3 py-1 bg-blue-900/20 text-blue-400 text-[10px] font-bold uppercase border border-blue-500/10 rounded-md">Accepted</span>
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-heading">Microsoft ISV Program</h3>
                  <p class="text-white/60 text-base leading-relaxed">
                    Official acceptance into the Independent Software Vendor program, unlocking Azure distribution channels.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-[45%]"></div> 
          </div>

          <!-- Sep -->
          <div class="group relative md:flex flex-row-reverse justify-between items-center w-full">
            <div class="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background-dark bg-green-600 z-20 shadow-[0_0_15px_rgba(22,163,74,0.5)]"></div>
            <div class="md:w-[45%] ml-12 md:ml-0 relative">
              <div class="bg-[#0f140f] border border-white/5 rounded-2xl p-1 transition-all duration-300 hover:border-green-500/30 group-hover:-translate-y-1">
                <div class="relative bg-background-dark/80 p-8 rounded-xl backdrop-blur-sm h-full">
                  <div class="flex justify-between items-start mb-6">
                    <div class="flex items-center gap-3">
                      <div class="p-2 rounded bg-green-900/20 text-green-500"><span class="material-symbols-outlined text-xl">cloud_done</span></div>
                      <span class="font-mono text-green-500 text-sm font-bold uppercase tracking-wider">Sep 2024</span>
                    </div>
                    <span class="px-3 py-1 bg-green-900/20 text-green-500 text-[10px] font-bold uppercase border border-green-500/10 rounded-md">Launched</span>
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors font-heading">Azure Marketplace</h3>
                  <p class="text-white/60 text-base leading-relaxed">
                    PTERI nodes now available for one-click deployment. Enterprise adoption simplified significantly.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-[45%]"></div>
          </div>

          <!-- Dec -->
          <div class="group relative md:flex justify-between items-center w-full">
            <div class="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background-dark bg-green-500 z-20 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
            <div class="md:w-[45%] ml-12 md:ml-0 relative">
              <div class="bg-[#0f140f] border border-white/5 rounded-2xl p-1 transition-all duration-300 hover:border-green-500/30 group-hover:-translate-y-1">
                <div class="relative bg-background-dark/80 p-8 rounded-xl backdrop-blur-sm h-full">
                  <div class="flex justify-between items-start mb-6">
                    <div class="flex items-center gap-3">
                      <div class="p-2 rounded bg-green-900/20 text-green-500"><span class="material-symbols-outlined text-xl">psychology</span></div>
                      <span class="font-mono text-green-500 text-sm font-bold uppercase tracking-wider">Dec 2024</span>
                    </div>
                    <span class="px-3 py-1 bg-green-500 text-black text-[10px] font-bold uppercase rounded-md animate-pulse">Live Now</span>
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors font-heading">LLM Integration</h3>
                  <p class="text-white/60 text-base leading-relaxed">
                    AI-powered on-chain analysis and smart contract interaction via Natural Language Processing interface.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-[45%]"></div> 
          </div>
        </div>
      </div>
    </section>

    <!-- Future Section (2025-2026) -->
    <section class="w-full bg-[#080b08] border-y border-white/5 py-32 relative">
      <div class="absolute inset-0 z-0 opacity-[0.03]" style="background-image: radial-gradient(#22c55e 1px, transparent 1px); background-size: 24px 24px;"></div>
      
      <div class="relative z-10 max-w-[1200px] mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 class="text-5xl font-black text-white mb-4 font-heading">2025–2026: <span class="text-green-500">Expansion</span></h2>
            <p class="text-white/60 font-light text-xl">Scaling infrastructure for the next generation of Web3.</p>
          </div>
          <div class="flex items-center gap-3 px-5 py-2 bg-green-900/20 rounded-full border border-green-500/20">
            <div class="relative flex items-center justify-center size-3">
              <span class="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
              <span class="relative inline-flex rounded-full size-2 bg-green-500"></span>
            </div>
            <span class="text-green-400 text-sm font-mono font-bold uppercase tracking-wider">Active Development</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card Component for Future Items -->
          <div class="group relative bg-[#0f140f] border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2">
             <div class="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
               <span class="material-symbols-outlined text-[100px] text-green-500">fingerprint</span>
             </div>
             <div class="flex items-center gap-4 mb-6">
               <div class="p-3 bg-green-900/10 rounded-xl text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                 <span class="material-symbols-outlined text-2xl">fingerprint</span>
               </div>
               <span class="text-xs font-mono font-bold text-white/50 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Identity</span>
             </div>
             <h3 class="text-2xl font-bold text-white mb-3 font-heading">Verifiable ID</h3>
             <p class="text-white/60 text-base mb-8 line-clamp-2 leading-relaxed">User- or organization-controlled identity protocol native to Litecoin. Own your data.</p>
             <div class="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
               <span class="inline-block text-[10px] font-bold font-mono uppercase tracking-wider text-green-500 border border-green-500/20 px-3 py-1.5 rounded bg-green-900/10">Launched Q1 2025</span>
               <span class="material-symbols-outlined text-white/70 group-hover:text-green-500 group-hover:translate-x-1 transition-all">arrow_forward</span>
             </div>
          </div>

          <div class="group relative bg-[#0f140f] border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2">
             <div class="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
               <span class="material-symbols-outlined text-[100px] text-green-500">sim_card</span>
             </div>
             <div class="flex items-center gap-4 mb-6">
               <div class="p-3 bg-green-900/10 rounded-xl text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                 <span class="material-symbols-outlined text-2xl">sim_card</span>
               </div>
               <span class="text-xs font-mono font-bold text-white/50 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Hardware</span>
             </div>
             <h3 class="text-2xl font-bold text-white mb-3 font-heading">eSIM Security</h3>
             <p class="text-white/60 text-base mb-8 line-clamp-2 leading-relaxed">Hardware-level encryption for mobile node operators ensuring maximum uptime.</p>
             <div class="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
               <span class="inline-block text-[10px] font-bold font-mono uppercase tracking-wider text-green-500 border border-green-500/20 px-3 py-1.5 rounded bg-green-900/10">Launched Q2 2025</span>
               <span class="material-symbols-outlined text-white/70 group-hover:text-green-500 group-hover:translate-x-1 transition-all">arrow_forward</span>
             </div>
          </div>

          <div class="group relative bg-[#0f140f] border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2">
             <div class="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
               <span class="material-symbols-outlined text-[100px] text-green-500">visibility_off</span>
             </div>
             <div class="flex items-center gap-4 mb-6">
               <div class="p-3 bg-green-900/10 rounded-xl text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                 <span class="material-symbols-outlined text-2xl">visibility_off</span>
               </div>
               <span class="text-xs font-mono font-bold text-white/50 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Privacy</span>
             </div>
             <h3 class="text-2xl font-bold text-white mb-3 font-heading">ZK Proofs</h3>
             <p class="text-white/60 text-base mb-8 line-clamp-2 leading-relaxed">Privacy-preserving verification without revealing underlying data.</p>
             <div class="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
               <span class="inline-block text-[10px] font-bold font-mono uppercase tracking-wider text-green-500 border border-green-500/20 px-3 py-1.5 rounded bg-green-900/10">Launched 2025</span>
               <span class="material-symbols-outlined text-white/70 group-hover:text-green-500 group-hover:translate-x-1 transition-all">arrow_forward</span>
             </div>
          </div>
          
          <div class="group relative bg-[#0f140f] border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2">
             <div class="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
               <span class="material-symbols-outlined text-[100px] text-green-500">key</span>
             </div>
             <div class="flex items-center gap-4 mb-6">
               <div class="p-3 bg-green-900/10 rounded-xl text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                 <span class="material-symbols-outlined text-2xl">key</span>
               </div>
               <span class="text-xs font-mono font-bold text-white/50 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Security</span>
             </div>
             <h3 class="text-2xl font-bold text-white mb-3 font-heading">Self-Custody SDKs</h3>
             <p class="text-white/60 text-base mb-8 line-clamp-2 leading-relaxed">Universal SDKs to embed self-custody securely in any mobile or web app.</p>
             <div class="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
               <span class="inline-block text-[10px] font-bold font-mono uppercase tracking-wider text-white/50 border border-white/10 px-3 py-1.5 rounded group-hover:text-green-500 group-hover:border-green-500/20">Coming 2026</span>
               <span class="material-symbols-outlined text-white/70 group-hover:text-green-500 group-hover:translate-x-1 transition-all">arrow_forward</span>
             </div>
          </div>

          <div class="group relative bg-[#0f140f] border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2">
             <div class="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
               <span class="material-symbols-outlined text-[100px] text-green-500">business_center</span>
             </div>
             <div class="flex items-center gap-4 mb-6">
               <div class="p-3 bg-green-900/10 rounded-xl text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                 <span class="material-symbols-outlined text-2xl">business_center</span>
               </div>
               <span class="text-xs font-mono font-bold text-white/50 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Enterprise</span>
             </div>
             <h3 class="text-2xl font-bold text-white mb-3 font-heading">Enterprise Pilots</h3>
             <p class="text-white/60 text-base mb-8 line-clamp-2 leading-relaxed">Major institutional adoption tests with banking partners.</p>
             <div class="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
               <span class="inline-block text-[10px] font-bold font-mono uppercase tracking-wider text-white/50 border border-white/10 px-3 py-1.5 rounded group-hover:text-green-500 group-hover:border-green-500/20">Coming 2026</span>
               <span class="material-symbols-outlined text-white/70 group-hover:text-green-500 group-hover:translate-x-1 transition-all">arrow_forward</span>
             </div>
          </div>

          <div class="group relative bg-[#0f140f] border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2">
             <div class="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
               <span class="material-symbols-outlined text-[100px] text-green-500">smart_toy</span>
             </div>
             <div class="flex items-center gap-4 mb-6">
               <div class="p-3 bg-green-900/10 rounded-xl text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                 <span class="material-symbols-outlined text-2xl">smart_toy</span>
               </div>
               <span class="text-xs font-mono font-bold text-white/50 uppercase tracking-[0.2em] group-hover:text-white transition-colors">AI Agents</span>
             </div>
             <h3 class="text-2xl font-bold text-white mb-3 font-heading">Autonomous Agents</h3>
             <p class="text-white/60 text-base mb-8 line-clamp-2 leading-relaxed">AI agents for managing decentralized node fleets without human intervention.</p>
             <div class="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
               <span class="inline-block text-[10px] font-bold font-mono uppercase tracking-wider text-white/50 border border-white/10 px-3 py-1.5 rounded group-hover:text-green-500 group-hover:border-green-500/20">Coming 2026</span>
               <span class="material-symbols-outlined text-white/70 group-hover:text-green-500 group-hover:translate-x-1 transition-all">arrow_forward</span>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="w-full py-32 px-6 relative overflow-hidden bg-background-dark">
      <div class="relative z-10 max-w-[1200px] mx-auto">
        <div class="text-center mb-20 space-y-4"data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight font-heading">Our Roadmap <span class="text-green-500">Philosophy</span></h2>
          <p class="text-white/60 max-w-2xl mx-auto text-xl font-light">The immutable principles that guide every commit.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Item 1 -->
          <div class="group flex flex-col items-center text-center p-10 rounded-3xl border border-white/5 hover:bg-[#0f140f] hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2">
             <div class="size-24 rounded-full bg-[#0f140f] flex items-center justify-center text-white mb-8 border border-white/10 shadow-lg group-hover:border-green-500/50 group-hover:scale-110 transition-all">
                <span class="material-symbols-outlined text-5xl text-white/60 group-hover:text-green-500 transition-colors">gavel</span>
             </div>
             <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-green-500 transition-colors font-heading">No Compromises</h3>
             <p class="text-white/60 leading-relaxed text-base">
                We don't support OmniLite. We don't issue stablecoins. We build pure infrastructure that doesn't bend to market trends.
             </p>
          </div>
          <!-- Item 2 -->
          <div class="group flex flex-col items-center text-center p-10 rounded-3xl border border-white/5 hover:bg-[#0f140f] hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2">
             <div class="size-24 rounded-full bg-[#0f140f] flex items-center justify-center text-white mb-8 border border-white/10 shadow-lg group-hover:border-green-500/50 group-hover:scale-110 transition-all">
                <span class="material-symbols-outlined text-5xl text-white/60 group-hover:text-green-500 transition-colors">diamond</span>
             </div>
             <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-green-500 transition-colors font-heading">Pure Litecoin</h3>
             <p class="text-white/60 leading-relaxed text-base">
                Verifiable, non-custodial, and Litecoin-native. We believe in the security and longevity of Proof-of-Work.
             </p>
          </div>
          <!-- Item 3 -->
          <div class="group flex flex-col items-center text-center p-10 rounded-3xl border border-white/5 hover:bg-[#0f140f] hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2">
             <div class="size-24 rounded-full bg-[#0f140f] flex items-center justify-center text-white mb-8 border border-white/10 shadow-lg group-hover:border-green-500/50 group-hover:scale-110 transition-all">
                <span class="material-symbols-outlined text-5xl text-white/60 group-hover:text-green-500 transition-colors">auto_awesome</span>
             </div>
             <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-green-500 transition-colors font-heading">AI-Enhanced</h3>
             <p class="text-white/60 leading-relaxed text-base">
                We use AI to automate infrastructure and optimize node performance, never to replace on-chain transparency.
             </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
  ],
  style: [
    { 
      children: `
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      `
    }
  ]
})

const { setSEO } = useSEO()

setSEO({
  title: 'Kakr Labs Roadmap - Web3 Infrastructure Development Timeline',
  description: 'Explore Kakr Labs product roadmap. Pure Proof-of-Work infrastructure on 100% Litecoin. Track our journey from vision to execution with decentralized ID, eSIM security, and more.',
  image: '/og/og-roadmap.png',
  keywords: ['kakr labs roadmap', 'web3 roadmap', 'litecoin infrastructure', 'pteri roadmap', 'blockchain development timeline', 'proof of work']
})
</script>

<style scoped>
.bg-background-dark { background-color: #050805; }

/* Custom Scrollbar for this page container */
div::-webkit-scrollbar {
  width: 8px;
}
div::-webkit-scrollbar-track {
  background: #0f140f; 
}
div::-webkit-scrollbar-thumb {
  background: #22c55e; 
  border-radius: 4px;
}
div::-webkit-scrollbar-thumb:hover {
  background: #16a34a; 
}
</style>
