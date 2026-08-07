<template>
  <div class="playground-page bg-black  bg-black">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-950 section-py">
      <!-- Animated Background -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
      </div>
      
      <div class="container-custom relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span class="text-sm font-medium text-emerald-300">PTERI Playground</span>
          </div>
          
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span class="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">PLAYGROUND</span>
          </h1>
          
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
            Test PTERI Instantly - No Setup, No Keys, No Install
          </h2>
          
          <p class="text-xl text-white/80 mb-6 leading-relaxed">
            PTERI Playground is your interactive environment for exploring the PTERI Authentication API, Litecoin RPC, IoT identity flows, message signing, and real-time blockchain data.
          </p>
          
          <p class="text-lg text-emerald-300 mb-10 font-semibold">
            Run real PTERI requests. See real results. Build faster.
          </p>
          
          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://playground.pteri.org/" class="btn-primary">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Open Playground
            </a>
            <a href="/docs" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white/80 bg-black/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-black/20 transform transition-all duration-200">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              View Docs
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- What Is PTERI Playground -->
    <section class="section-py bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-900">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-white  mb-6">
            What Is PTERI Playground?
          </h2>
          <p class="text-xl text-white/70  ">
            Your interactive development environment for:
          </p>
        </div>
        
        <!-- Feature Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div v-for="(feature, index) in playgroundFeatures" :key="index" class="group">
            <div class="h-full p-6 bg-black /50 rounded-2xl border-2 border-white/10  dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div class="flex items-start mb-3">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-white ">{{ feature }}</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center">
          <div class="inline-block p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-lime-500/10 border border-emerald-500/20">
            <p class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
              The fastest way to learn, test, and build on the PTERI ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Developers Love It -->
    <section class="section-py">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl sm:text-5xl font-bold text-white  mb-6">
              Why Developers Love It
            </h2>
            <p class="text-xl text-white/70   mb-8">
              Dev onboarding is painful everywhere else.
              <br/><span class="text-emerald-600 dark:text-emerald-400 font-semibold">Not here.</span>
            </p>
            
            <div class="space-y-3 mb-8">
              <div v-for="(benefit, index) in noBenefits" :key="index" class="flex items-center text-lg">
                <svg class="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-white/90 ">{{ benefit }}</span>
              </div>
            </div>
            
            <div class="p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-2xl">
              <p class="text-lg text-white  font-medium">
                Just open the page → start building.
                <br/><span class="text-emerald-600 dark:text-emerald-400 font-bold">The Playground is your zero-barrier developer portal.</span>
              </p>
            </div>
          </div>
          
          <div class="relative">
            <div class="p-8 bg-black  rounded-2xl shadow-2xl">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre class="text-sm text-green-400 font-mono overflow-x-auto"><code>$ pteri playground start

✓ Playground initialized
✓ API endpoints loaded
✓ Auth flows ready
✓ Test environment active

→ Ready to build! 🚀</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What You Can Do -->
    <section class="section-py bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-900">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-white  mb-6">
            What You Can Do Inside Playground
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(action, index) in playgroundActions" :key="index" class="group">
            <div class="h-full p-8 bg-black  rounded-2xl border-2 border-white/10  dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div class="text-4xl mb-4">{{ action.icon }}</div>
              <div class="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">{{ action.number }}</div>
              <h3 class="text-xl font-bold text-white  mb-3">{{ action.title }}</h3>
              <p class="text-white/70   mb-4">{{ action.description }}</p>
              <div v-if="action.code" class="p-3 bg-black  bg-black rounded-lg">
                <pre class="text-xs text-green-400 font-mono overflow-x-auto">{{ action.code }}</pre>
              </div>
              <ul v-if="action.features" class="space-y-1 text-sm text-white/70 ">
                <li v-for="(feature, idx) in action.features" :key="idx" class="flex items-start">
                  <span class="text-emerald-500 mr-2">→</span>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who It's For -->
    <section class="section-py">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-white  mb-6">
            Who It's For
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(audience, index) in targetAudience" :key="index" class="p-6 bg-gradient-to-br from-white to-emerald-50/50 dark:from-slate-800 dark:to-emerald-950/20 rounded-xl border border-white/10  dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg">
            <div class="text-3xl mb-3">{{ audience.icon }}</div>
            <h3 class="text-xl font-bold text-white  mb-2">{{ audience.title }}</h3>
            <p class="text-white/70  ">{{ audience.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features Bento -->
    <section class="section-py bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-900">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-white  mb-6">
            Key Features
          </h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div v-for="(feature, index) in keyFeatures" :key="index" class="group relative overflow-hidden rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]" :class="feature.gradient">
            <div class="absolute top-0 right-0 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
            <div class="relative z-10">
              <div class="text-3xl mb-3">{{ feature.icon }}</div>
              <h3 class="text-xl font-bold text-white mb-2">{{ feature.title }}</h3>
              <p class="text-white/90 text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Developer UX Preview -->
    <section class="section-py">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-white  mb-6">
            Developer UX Preview
          </h2>
          <p class="text-xl text-white/70  ">
            This is how dev onboarding should feel.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="bg-black  rounded-2xl shadow-xl border-2 border-white/10  dark:border-slate-700 overflow-hidden">
            <div class="bg-gradient-to-r from-emerald-500 to-green-600 p-4">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-black/30"></div>
                <div class="w-3 h-3 rounded-full bg-black/30"></div>
                <div class="w-3 h-3 rounded-full bg-black/30"></div>
                <span class="text-white font-medium ml-4">PTERI Playground</span>
              </div>
            </div>
            <div class="p-8">
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0">U</div>
                  <div class="flex-1 p-4 bg-white/5 bg-black  rounded-lg">
                    <p class="text-white ">Check the balance of this LTC address.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold flex-shrink-0">P</div>
                  <div class="flex-1 space-y-2">
                    <div class="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg">
                      <p class="text-sm text-white/70  mb-2">→ Generating API request...</p>
                      <pre class="text-xs text-white   font-mono bg-black  p-3 rounded overflow-x-auto">GET /api/v1/address/LTC123.../balance</pre>
                    </div>
                    <div class="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg">
                      <p class="text-sm text-white/70  mb-2">→ Response:</p>
                      <pre class="text-xs text-green-600 dark:text-green-400 font-mono bg-black  p-3 rounded overflow-x-auto">{
  "balance": 42.3928131,
  "confirmed": true
}</pre>
                    </div>
                    <p class="text-white/90 ">Do you want to check transactions next?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture -->
    <section class="section-py bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-900">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-white  mb-6">
            Architecture Overview
          </h2>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-center gap-4">
            <div class="w-full md:w-auto px-6 py-4 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-xl font-semibold text-center">Browser</div>
            <svg class="w-8 h-8 text-emerald-500 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            <div class="w-full md:w-auto px-6 py-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-center">PTERI Playground</div>
            <svg class="w-8 h-8 text-emerald-500 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            <div class="w-full md:w-auto px-6 py-4 bg-gradient-to-br from-lime-500 to-green-600 text-white rounded-xl font-semibold text-center">API Router</div>
            <svg class="w-8 h-8 text-emerald-500 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            <div class="w-full md:w-auto px-6 py-4 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-xl font-semibold text-center">Litecoin Network</div>
          </div>
          
          <div class="mt-12 grid md:grid-cols-3 gap-4">
            <div class="p-6 bg-black  rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h3 class="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Secure Clients</h3>
              <p class="text-sm text-white/70  ">All browser interactions encrypted</p>
            </div>
            <div class="p-6 bg-black  rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h3 class="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Google Cloud</h3>
              <p class="text-sm text-white/70  ">Enterprise-grade infrastructure</p>
            </div>
            <div class="p-6 bg-black  rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h3 class="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Zero Attack Surface</h3>
              <p class="text-sm text-white/70  ">Isolated backend clusters</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Ideal Use Cases -->
    <section class="section-py bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-900">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-white  mb-6">
            Ideal Use Cases
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div class="p-6 bg-black  rounded-xl border-2 border-white/10  dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg">
            <div class="flex items-start">
              <span class="text-emerald-500 mr-3 text-2xl flex-shrink-0">✓</span>
              <p class="text-white/90 ">Trying PTERI Authentication for the first time</p>
            </div>
          </div>
          <div class="p-6 bg-black  rounded-xl border-2 border-white/10  dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg">
            <div class="flex items-start">
              <span class="text-emerald-500 mr-3 text-2xl flex-shrink-0">✓</span>
              <p class="text-white/90 ">Testing Litecoin endpoints</p>
            </div>
          </div>
          <div class="p-6 bg-black  rounded-xl border-2 border-white/10  dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg">
            <div class="flex items-start">
              <span class="text-emerald-500 mr-3 text-2xl flex-shrink-0">✓</span>
              <p class="text-white/90 ">Playing with IoT identity flows</p>
            </div>
          </div>
          <div class="p-6 bg-black  rounded-xl border-2 border-white/10  dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg">
            <div class="flex items-start">
              <span class="text-emerald-500 mr-3 text-2xl flex-shrink-0">✓</span>
              <p class="text-white/90 ">Exploring PTERI AI code generation</p>
            </div>
          </div>
          <div class="p-6 bg-black  rounded-xl border-2 border-white/10  dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg">
            <div class="flex items-start">
              <span class="text-emerald-500 mr-3 text-2xl flex-shrink-0">✓</span>
              <p class="text-white/90 ">Debugging API calls before production</p>
            </div>
          </div>
          <div class="p-6 bg-black  rounded-xl border-2 border-white/10  dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg">
            <div class="flex items-start">
              <span class="text-emerald-500 mr-3 text-2xl flex-shrink-0">✓</span>
              <p class="text-white/90 ">Teaching new developers</p>
            </div>
          </div>
          <div class="p-6 bg-black  rounded-xl border-2 border-white/10  dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
            <div class="flex items-start">
              <span class="text-emerald-500 mr-3 text-2xl flex-shrink-0">✓</span>
              <p class="text-white/90 ">Demos for clients or internal stakeholders</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Getting Started -->
    <section class="section-py">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-white  mb-6">
            Getting Started
          </h2>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 class="text-xl font-bold text-white  mb-2">Open the Playground</h3>
                <p class="text-white/70  ">It loads instantly.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 class="text-xl font-bold text-white  mb-2">Choose an API Category</h3>
                <p class="text-white/70  ">Authentication, RPC, IoT, or Tools.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 class="text-xl font-bold text-white  mb-2">Run Any Request</h3>
                <p class="text-white/70  ">Modify the input → click run → see real output.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 class="text-xl font-bold text-white  mb-2">Copy Code to Your App</h3>
                <p class="text-white/70  ">Use our code snippets to build your integration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="section-py">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-block p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-lime-500/10 border-2 border-emerald-500/20">
            <h2 class="text-3xl sm:text-4xl font-bold text-white  mb-4">
              Playground is <span class="text-emerald-600 dark:text-emerald-400">free</span> for all developers
            </h2>
            <p class="text-lg text-white/70   mb-2">
              Included for: Free Tier • Pro Tier • Enterprise Tier
            </p>
            <p class="text-sm text-white/50 ">
              You only pay for API usage - not the Playground itself.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-lime-600 section-py">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Launch?
        </h2>
        <p class="text-xl text-white/90 mb-12">
          Try PTERI Playground and explore the entire PTERI ecosystem - instantly.
        </p>
        
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://playground.pteri.org/" class="inline-flex items-center px-8 py-4 bg-black text-emerald-600 font-semibold rounded-full hover:bg-white/5 bg-black transform hover:scale-105 transition-all duration-200 shadow-xl">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Launch Playground
          </a>
          <a href="https://docs.kakr.ai/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-8 py-4 bg-black/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-full hover:bg-black/20 transform hover:scale-105 transition-all duration-200">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Docs
          </a>
          <a href="https://pteri.org/Register" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-8 py-4 bg-black/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-full hover:bg-black/20 transform hover:scale-105 transition-all duration-200">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
            </svg>
            Get API Key
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSEO } from '~/composables/useSEO'

const { setSEO } = useSEO()

setSEO({
  title: 'PTERI Playground - Interactive Web3 Development Environment | Kakr Labs',
  description: 'Interactive Web3 development environment for the Litecoin blockchain. Test APIs, prototype applications, and explore PTERI features with zero setup.',
  keywords: ['Web3 playground', 'blockchain development', 'Litecoin development', 'API testing', 'blockchain playground', 'developer tools', 'Web3 sandbox'],
  type: 'product',
  image: '/playground-og.jpg',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'PTERI Playground',
      description: 'Interactive Web3 development environment for blockchain applications',
      applicationCategory: 'Developer Tools',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free interactive development environment'
      },
      provider: {
        '@type': 'Organization',
        name: 'Kakr Labs'
      }
    }
  ]
})

const playgroundFeatures = [
  'Run PTERI Authentication flows',
  'Test Litecoin RPC calls',
  'Explore address and transaction data',
  'Test Litecoin endpoints',
  'Simulate IoT device identity workflows',
  'Sign and verify messages',
  'Generate code with PTERI Intelligence',
  'Analyze and debug PTERI API responses',
  'Build prototypes without writing code or setting up infrastructure'
]

const noBenefits = [
  '✔ Zero Setup',
  '✔ Fast Learning Curve',
  '✔ Debug-Friendly',
  '✔ Perfect for Demos and Prototyping',
  '✔ AI Built-In',
  '✔ No Risk'
]

const playgroundActions = [
  {
    number: '1',
    icon: '',
    title: 'Test Authentication Flows',
    description: 'Trigger real login challenges via PTERI Authentication.',
    features: [
      'Start login request',
      'Approve via PTERI App',
      'Verify signatures',
      'Inspect results'
    ]
  },
  {
    number: '2',
    icon: '',
    title: 'Explore Litecoin RPC (No Node Needed)',
    description: 'Try every PTERI / Litecoin RPC endpoint:',
    features: [
      'balances',
      'transactions',
      'mempool',
      'blocks',
      'network fees',
      'address info',
      'transaction creation & broadcast'
    ]
  },
  {
    number: '3',
    icon: '',
    title: 'Test IoT Identity Tools',
    description: 'Simulate IoT workflows - no hardware required:',
    features: [
      'device key creation',
      'device registration',
      'signed messages',
      'device authentication',
      'firmware verification'
    ]
  },
  {
    number: '4',
    icon: '',
    title: 'Ask PTERI Intelligence (AI) for Examples',
    description: 'Get AI-generated help instantly:',
    features: [
      '"Show me a sample authentication flow."',
      '"Help me debug this RPC error."',
      '"Write a Python example to send Litecoin."',
      '"How do I register 100 IoT devices?"'
    ]
  },
  {
    number: '5',
    icon: '',
    title: 'Try Real API Calls - See Real Results',
    description: 'The Playground executes real endpoints and returns structured responses:',
    code: `{
  "balance": "1.28439281",
  "confirmed": true
}`
  },
  {
    number: '6',
    icon: '',
    title: 'Use Built-In Code Samples',
    description: 'Every API call can be instantly converted into:',
    features: [
      'JavaScript',
      'Python',
      'Dart',
      'Swift',
      'Bash'
    ]
  }
]

const targetAudience = [
  {
    icon: '',
    title: 'Developers',
    description: 'Quickly explore endpoints and architecture.'
  },
  {
    icon: '',
    title: 'Startups',
    description: 'Prototype authentication + blockchain flows instantly.'
  },
  {
    icon: '',
    title: 'Integration Engineers',
    description: 'Validate API behaviour before writing production code.'
  },
  {
    icon: '',
    title: 'Security Teams',
    description: 'Verify signature logic, login flows, and decentralization guarantees.'
  },
  {
    icon: '',
    title: 'Students & Hackers',
    description: 'Learn blockchain, authentication, and IoT security hands-on.'
  }
]

const keyFeatures = [
  {
    icon: '',
    title: 'Instant Testing',
    description: 'Try any endpoint with zero configuration.',
    gradient: 'bg-gradient-to-br from-emerald-500 to-green-600'
  },
  {
    icon: '',
    title: 'Real Data',
    description: 'All responses are live from Litecoin & PTERI APIs.',
    gradient: 'bg-gradient-to-br from-green-500 to-lime-600'
  },
  {
    icon: '',
    title: 'Built-In Auth Flow',
    description: 'Use your own PTERI App to approve login attempts.',
    gradient: 'bg-gradient-to-br from-lime-500 to-emerald-600'
  },
  {
    icon: '',
    title: 'Code Snippets',
    description: 'Auto-generated in JS, Python, Swift, Dart, and more.',
    gradient: 'bg-gradient-to-br from-teal-500 to-green-600'
  },
  {
    icon: '',
    title: 'Error Explanation',
    description: 'Paste an error → Playground explains how to fix it.',
    gradient: 'bg-gradient-to-br from-emerald-600 to-teal-600'
  },
  {
    icon: '',
    title: 'Secure By Design',
    description: 'No private keys ever touch the Playground or backend.',
    gradient: 'bg-gradient-to-br from-green-600 to-emerald-700'
  }
]


</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

