<template>
  <!-- Page wrapper with theme-aware gradient background -->
  <div
    class="min-h-screen overflow-hidden
           bg-gradient-to-br from-white via-indigo-50 to-cyan-50
           dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950
           text-white "
  >
    <!-- Animated soft blobs (light & dark tuned) -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <!-- Light mode blobs -->
      <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse
                  bg-cyan-400/15 dark:hidden"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse delay-2000
                  bg-purple-400/15 dark:hidden"></div>
      <div class="absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse delay-1000
                  bg-blue-400/10 dark:hidden"></div>
      <div class="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse delay-3000
                  bg-emerald-400/10 dark:hidden"></div>

      <!-- Dark mode blobs -->
      <div class="hidden dark:block absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse
                  bg-green-500/10"></div>
      <div class="hidden dark:block absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse delay-2000
                  bg-green-600/10"></div>
      <div class="hidden dark:block absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse delay-1000
                  bg-green-600/5"></div>
      <div class="hidden dark:block absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse delay-3000
                  bg-emerald-500/5"></div>
    </div>

    <!-- Grid overlay (drawn via CSS gradients so we can theme the stroke color) -->
    <div
      class="fixed inset-0 pointer-events-none opacity-40 md:opacity-30"
      :style="gridBg"
      aria-hidden="true"
    ></div>

    <!-- Hero Section -->
    <section class="relative pt-28 md:pt-32 pb-20 px-4">
      <div class="max-w-7xl mx-auto text-center"data-aos="fade-up">
        <!-- Theme Toggle -->
        <div class="absolute right-4 top-6 sm:right-6 sm:top-8">
          <button
            @click="toggleTheme"
            class="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium
                   bg-black/80 text-white/90 ring-1 ring-black/10 shadow-md hover:bg-black
                   dark:bg-black/10  dark:ring-white/20 dark:hover:bg-black/15
                   transition-colors"
            aria-label="Toggle theme"
          >
            <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1.5a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1ZM12 2a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm10 10a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H21a1 1 0 0 1 1 1ZM4.5 12a1 1 0 1 1 0-2H3a1 1 0 0 1 0 2h1.5Zm12.02 7.07a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 1 1 1.41-1.41l1.06 1.06Zm-9.64-9.64a1 1 0 0 1-1.41-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41L6.88 9.43Zm9.64-4.24a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41-1.41l1.06-1.06ZM6.88 18.57a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 1.41l-1.06 1.06Z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
            </svg>
            <span class="hidden sm:inline">{{ isDark ? 'Dark' : 'Light' }}</span>
          </button>
        </div>

        <div class="animate-fade-in-up">
          <!-- Badge -->
          <div
            class="inline-flex items-center px-6 py-3 rounded-full
                   bg-gradient-to-r from-cyan-500/10 to-blue-500/10
                   border border-cyan-500/20
                   backdrop-blur-sm mb-8
                   text-cyan-700 dark:text-cyan-300"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span class="font-semibold">Litecoin Infrastructure • Built for Scale</span>
          </div>

          <h1
            class="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6
                   bg-clip-text text-transparent
                   bg-gradient-to-r
                   from-slate-900 via-blue-700 to-cyan-700
                   dark:from-white dark:via-cyan-200 dark:to-blue-200"
          >
            Use Cases &amp; Solutions
          </h1>

          <p class="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 leading-relaxed
                    text-cyan-700 dark:text-cyan-300">
            How Litecoin-based infrastructure changes your industry - forever.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://pteri.org/Register"
              target="_blank" rel="noopener"
              class="group inline-flex items-center px-8 py-4 rounded-2xl
                     bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                     font-semibold text-lg shadow-xl hover:shadow-2xl
                     transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Start Building
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>

            <a href="#solutions"
              class="group inline-flex items-center px-8 py-4 rounded-2xl
                     border-2 border-cyan-400/50
                     text-cyan-700 hover:bg-cyan-400/10
                     dark:text-cyan-300
                     transition-all duration-300"
            >
              Explore Solutions
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- The Problem Section -->
    <section class="relative py-20 px-4">
      <div class="max-w-7xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-16 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-bold mb-3 leading-tight text-white ">
            The Problem Isn’t Your Industry.
          </h2>
          <h3 class="text-2xl md:text-4xl font-bold mb-8 text-cyan-800 dark:text-cyan-300">
            It’s the Infrastructure Beneath It.
          </h3>
          <p class="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-white/90  dark:text-blue-200">
            Every industry today runs on centralized systems that were never designed for this era:
          </p>
        </div>

        <!-- Problem Cards Grid (self-contained; no external components) -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <article class="group rounded-2xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5
                          border-white/10
                          dark:bg-black/10  dark:ring-white/10">
            <div class="w-12 h-12 mb-4 flex items-center justify-center rounded-xl
                        bg-gradient-to-br from-red-500/20 to-orange-500/20
                        text-2xl">
              🏦
            </div>
            <h4 class="text-lg font-semibold text-white ">Finance</h4>
            <p class="mt-2 text-white/90  dark:text-blue-200">depends on rails built for the 1970s</p>
          </article>

          <article class="group rounded-2xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5
                          border-white/10
                          dark:bg-black/10  dark:ring-white/10">
            <div class="w-12 h-12 mb-4 flex items-center justify-center rounded-xl
                        bg-gradient-to-br from-orange-500/20 to-yellow-500/20
                        text-2xl">
              🔐
            </div>
            <h4 class="text-lg font-semibold text-white ">Security</h4>
            <p class="mt-2 text-white/90  dark:text-blue-200">depends on passwords invented in the 1960s</p>
          </article>

          <article class="group rounded-2xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5
                          border-white/10
                          dark:bg-black/10  dark:ring-white/10">
            <div class="w-12 h-12 mb-4 flex items-center justify-center rounded-xl
                        bg-gradient-to-br from-yellow-500/20 to-red-500/20
                        text-2xl">
              📱
            </div>
            <h4 class="text-lg font-semibold text-white ">Telecom</h4>
            <p class="mt-2 text-white/90  dark:text-blue-200">depends on carriers that fail users daily</p>
          </article>

          <article class="group rounded-2xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5
                          border-white/10
                          dark:bg-black/10  dark:ring-white/10">
            <div class="w-12 h-12 mb-4 flex items-center justify-center rounded-xl
                        bg-gradient-to-br from-pink-500/20 to-red-500/20
                        text-2xl">
              🏥
            </div>
            <h4 class="text-lg font-semibold text-white ">Healthcare &amp; Gov</h4>
            <p class="mt-2 text-white/90  dark:text-blue-200">depends on databases that get breached every week</p>
          </article>
        </div>

        <!-- Consequences -->
        <div class="relative">
          <div class="absolute inset-0 rounded-3xl blur opacity-60
                      bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
          <div class="relative rounded-3xl p-8 text-center border
                      bg-black/80 backdrop-blur ring-1 ring-black/5 border-red-200
                      dark:bg-black/5 dark:border-red-400/20">
            <h4 class="text-2xl font-bold mb-6 text-white ">The Result?</h4>
            <div class="flex flex-wrap justify-center gap-3 mb-6">
              <span class="px-4 py-2 rounded-full border text-red-700 bg-red-100
                           dark:text-red-300 dark:bg-red-500/20 dark:border-red-400/30">
                Fraud
              </span>
              <span class="px-4 py-2 rounded-full border text-red-700 bg-red-100
                           dark:text-red-300 dark:bg-red-500/20 dark:border-red-400/30">
                Hacks
              </span>
              <span class="px-4 py-2 rounded-full border text-red-700 bg-red-100
                           dark:text-red-300 dark:bg-red-500/20 dark:border-red-400/30">
                SIM Swaps
              </span>
              <span class="px-4 py-2 rounded-full border text-red-700 bg-red-100
                           dark:text-red-300 dark:bg-red-500/20 dark:border-red-400/30">
                Compliance Fines
              </span>
              <span class="px-4 py-2 rounded-full border text-red-700 bg-red-100
                           dark:text-red-300 dark:bg-red-500/20 dark:border-red-400/30">
                Reputational Collapse
              </span>
            </div>
            <p class="text-lg font-semibold text-red-800 dark:text-red-200">
              It's not your fault - it's the system's fault.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Paradigm Shift Section -->
    <section class="relative py-20 px-4">
      <div class="max-w-7xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-16 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white ">
            The Paradigm Shift
          </h2>
          <p class="text-lg md:text-xl max-w-5xl mx-auto leading-relaxed
                    text-white/90  dark:text-blue-200">
            Kakr Labs provides the world's most utilized Litecoin infrastructure - a true digital commodity that works like Bitcoin but scales with real-world adoption.
          </p>
        </div>

        <!-- Three cards -->
        <div class="grid gap-8 lg:grid-cols-3 mb-16">
          <article class="rounded-2xl p-6 border bg-black/80 backdrop-blur ring-1 ring-black/5 border-emerald-200
                          dark:bg-black/10 dark:border-emerald-400/30">
            <div class="w-12 h-12 mb-4 flex items-center justify-center rounded-xl
                        bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-2xl">🔑</div>
            <h3 class="text-xl font-semibold text-white ">For Identity</h3>
            <p class="mt-2 text-white/90  dark:text-blue-200">
              we replace passwords, SMS, and databases with blockchain‑secured logins
            </p>
          </article>

          <article class="rounded-2xl p-6 border bg-black/80 backdrop-blur ring-1 ring-black/5 border-green-200
                          dark:bg-black/10 dark:border-blue-400/30">
            <div class="w-12 h-12 mb-4 flex items-center justify-center rounded-xl
                        bg-gradient-to-br from-green-500/20 to-green-600/20 text-2xl">💳</div>
            <h3 class="text-xl font-semibold text-white ">For Transactions</h3>
            <p class="mt-2 text-white/90  dark:text-blue-200">
              we power fast, low-fee payments with self-custodial control
            </p>
          </article>

          <article class="rounded-2xl p-6 border bg-black/80 backdrop-blur ring-1 ring-black/5 border-green-200
                          dark:bg-black/10 dark:border-purple-400/30">
            <div class="w-12 h-12 mb-4 flex items-center justify-center rounded-xl
                        bg-gradient-to-br from-green-600/20 to-green-700/20 text-2xl">🏢</div>
            <h3 class="text-xl font-semibold text-white ">For Enterprises</h3>
            <p class="mt-2 text-white/90  dark:text-blue-200">
              we deliver AI-deployed blockchain infrastructure with high availability and zero PII
            </p>
          </article>
        </div>

        <!-- Statement -->
        <div class="text-center"data-aos="fade-up">
          <div class="relative">
            <div class="absolute inset-0 rounded-3xl blur opacity-70
                        bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
            <div class="relative rounded-3xl p-8 border
                        bg-gradient-to-r from-cyan-50 to-purple-50
                        text-white 
                        ring-1 ring-black/5 border-white/40
                        dark:bg-gradient-to-r dark:from-cyan-600/90 dark:to-purple-600/90
                         ">
              <p class="text-xl md:text-2xl font-bold leading-relaxed">
                This isn't Web3 hype. This is commodity‑grade blockchain infrastructure, finally delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Transformations Section -->
    <section id="solutions" class="relative py-20 px-4">
      <div class="max-w-7xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-16 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 text-white ">
            Industry Transformations
          </h2>
          <p class="text-lg md:text-xl text-white/90  dark:text-blue-200 max-w-3xl mx-auto">
            See how Litecoin infrastructure revolutionizes every sector
          </p>
        </div>

        <div class="space-y-12">
          <!-- Reusable block pattern: icon + content; alternates on lg -->
          <!-- Security & Identity -->
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-1">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center
                          bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-3xl">
                🔑
              </div>
              <h3 class="mt-4 text-2xl font-semibold text-white ">Security &amp; Identity</h3>
              <ul class="mt-4 space-y-2 text-white/90  dark:text-blue-200">
                <li><strong class="text-emerald-700 dark:text-emerald-300">Problem:</strong> Centralized login = the weakest link.</li>
                <li><strong class="text-emerald-700 dark:text-emerald-300">Solution:</strong> With PTERI App 2FA, logins are verified on-chain, which removes the SIM swap, phishing, and credential-leak paths attackers rely on.</li>
                <li><strong class="text-emerald-700 dark:text-emerald-300">Benefit:</strong> Reduce central-breach exposure and cut SMS costs.</li>
                <li><strong class="text-emerald-700 dark:text-emerald-300">Breakthrough:</strong> Identity backed by customer-controlled credentials, not a stored secret.</li>
              </ul>
            </div>
            <div class="order-2">
              <div class="rounded-3xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5 border-emerald-200
                          dark:bg-black/10 dark:border-emerald-400/30">
                <p class="text-white/90  dark:text-blue-200">
                  Wallet challenge-signing replaces fragile OTPs and passwords. Proofs are verifiable without storing PII.
                </p>
              </div>
            </div>
          </div>

          <!-- Finance & Payments (reverse on lg) -->
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center
                          bg-gradient-to-br from-green-500/20 to-green-600/20 text-3xl">
                💳
              </div>
              <h3 class="mt-4 text-2xl font-semibold text-white ">Finance &amp; Payments</h3>
              <ul class="mt-4 space-y-2 text-white/90  dark:text-blue-200">
                <li><strong class="text-sky-700 dark:text-sky-300">Problem:</strong> Traditional payments = slow, reversible, costly.</li>
                <li><strong class="text-sky-700 dark:text-sky-300">Solution:</strong> With Litecoin, transactions are final and low‑fee.</li>
                <li><strong class="text-sky-700 dark:text-sky-300">Benefit:</strong> Ready for institutional rails and asset managers.</li>
                <li><strong class="text-sky-700 dark:text-sky-300">Breakthrough:</strong> Private, commodity‑backed payments.</li>
              </ul>
            </div>
            <div class="order-1 lg:order-2">
              <div class="rounded-3xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5 border-green-200
                          dark:bg-black/10 dark:border-blue-400/30">
                <p class="text-white/90  dark:text-blue-200">
                  Final settlement and predictable fees unlock new fintech flows without chargeback risk.
                </p>
              </div>
            </div>
          </div>

          <!-- Telecom & Mobile -->
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-1">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center
                          bg-gradient-to-br from-green-600/20 to-green-700/20 text-3xl">
                📱
              </div>
              <h3 class="mt-4 text-2xl font-semibold text-white ">Telecom &amp; Mobile</h3>
              <ul class="mt-4 space-y-2 text-white/90  dark:text-blue-200">
                <li><strong class="text-green-700 dark:text-purple-300">Problem:</strong> SIM swaps drain millions.</li>
                <li><strong class="text-green-700 dark:text-purple-300">Solution:</strong> Wallet‑anchored identity removes carrier control over verification.</li>
                <li><strong class="text-green-700 dark:text-purple-300">Benefit:</strong> Avoid SMS tolls and telco bottlenecks.</li>
                <li><strong class="text-green-700 dark:text-purple-300">Breakthrough:</strong> Fraud‑proof mobile verification.</li>
              </ul>
            </div>
            <div class="order-2">
              <div class="rounded-3xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5 border-green-200
                          dark:bg-black/10 dark:border-purple-400/30">
                <p class="text-white/90  dark:text-blue-200">
                  eSIM activations can be bound to cryptographic proofs rather than phone numbers.
                </p>
              </div>
            </div>
          </div>

          <!-- Healthcare & Government (reverse on lg) -->
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center
                          bg-gradient-to-br from-green-600/20 to-green-700/20 text-3xl">
                🏥
              </div>
              <h3 class="mt-4 text-2xl font-semibold text-white ">Healthcare &amp; Government</h3>
              <ul class="mt-4 space-y-2 text-white/90  dark:text-blue-200">
                <li><strong class="text-green-700 dark:text-indigo-300">Problem:</strong> Breaches erode trust.</li>
                <li><strong class="text-green-700 dark:text-indigo-300">Solution:</strong> Zero‑PII authentication secures portals without storing sensitive records.</li>
                <li><strong class="text-green-700 dark:text-indigo-300">Benefit:</strong> Compliance becomes an advantage.</li>
                <li><strong class="text-green-700 dark:text-indigo-300">Breakthrough:</strong> Logins regulators wish everyone used.</li>
              </ul>
            </div>
            <div class="order-1 lg:order-2">
              <div class="rounded-3xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5 border-indigo-200
                          dark:bg-black/10 dark:border-indigo-400/30">
                <p class="text-white/90  dark:text-blue-200">
                  Anchor tamper‑evident proofs to Litecoin without exposing PHI.
                </p>
              </div>
            </div>
          </div>

          <!-- Developers & Enterprises -->
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-1">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center
                          bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-3xl">
                🛠
              </div>
              <h3 class="mt-4 text-2xl font-semibold text-white ">Developers &amp; Enterprises</h3>
              <ul class="mt-4 space-y-2 text-white/90  dark:text-blue-200">
                <li><strong class="text-cyan-700 dark:text-cyan-300">Problem:</strong> SDKs are expensive and fragile.</li>
                <li><strong class="text-cyan-700 dark:text-cyan-300">Solution:</strong> AI‑deployed blockchain infrastructure-in minutes, not months.</li>
                <li><strong class="text-cyan-700 dark:text-cyan-300">Benefit:</strong> Test, integrate, and scale instantly via PTERI Playground.</li>
                <li><strong class="text-cyan-700 dark:text-cyan-300">Breakthrough:</strong> Enterprise blockchain without DevOps headaches.</li>
              </ul>
            </div>
            <div class="order-2">
              <div class="rounded-3xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5 border-cyan-200
                          dark:bg-black/10 dark:border-cyan-400/30">
                <p class="text-white/90  dark:text-blue-200">
                  Deploy infrastructure with closed‑source security and predictable SLAs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Big Picture Section -->
    <section class="relative py-20 px-4">
      <div class="max-w-6xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-14 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-bold text-white ">The Big Picture</h2>
        </div>

        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Problem -->
          <div class="relative">
            <div class="absolute inset-0 rounded-3xl blur opacity-50
                        bg-gradient-to-r from-red-500/15 to-orange-500/15"></div>
            <div class="relative rounded-3xl p-8 border
                        bg-black/80 backdrop-blur ring-1 ring-black/5 border-red-200
                        dark:bg-black/10 dark:border-red-400/20">
              <h3 class="text-2xl font-bold mb-6 flex items-center gap-3 text-white ">
                <span class="text-3xl">⚠️</span> The Problem
              </h3>
              <div class="space-y-4 text-white/90  dark:text-red-200">
                <p class="text-lg font-semibold">This isn't about replacing one vendor with another.</p>
                <p class="text-lg">It's about replacing the fragile foundation your industry is built on.</p>
                <div class="rounded-2xl p-4 border
                            bg-red-50 text-red-800 border-red-200
                            dark:bg-red-500/20 dark:text-red-200 dark:border-red-400/30">
                  <p class="font-semibold">Centralization is why systems fail.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Solution -->
          <div class="relative">
            <div class="absolute inset-0 rounded-3xl blur opacity-50
                        bg-gradient-to-r from-emerald-500/15 to-cyan-500/15"></div>
            <div class="relative rounded-3xl p-8 border
                        bg-black/80 backdrop-blur ring-1 ring-black/5 border-emerald-200
                        dark:bg-black/10 dark:border-emerald-400/20">
              <h3 class="text-2xl font-bold mb-6 flex items-center gap-3 text-white ">
                <span class="text-3xl">✨</span> The Solution
              </h3>
              <div class="space-y-4 text-white/90  dark:text-emerald-200">
                <p class="text-lg font-semibold">Litecoin as a digital commodity is why they won't anymore.</p>
                <p class="text-lg">Built for scale, security, and real-world adoption.</p>
                <div class="rounded-2xl p-4 border
                            bg-emerald-50 text-emerald-800 border-emerald-200
                            dark:bg-emerald-500/20 dark:text-emerald-200 dark:border-emerald-400/30">
                  <p class="font-semibold">Decentralization is why systems thrive.</p>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- grid -->
      </div>
    </section>

    <!-- Why Now Section -->
    <section class="relative py-20 px-4">
      <div class="max-w-6xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-14 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-bold text-white ">Why Now</h2>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article class="rounded-2xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5 border-green-200
                          dark:bg-black/10 dark:border-blue-400/30">
            <div class="text-3xl mb-3">⚖️</div>
            <h3 class="text-lg font-bold text-white ">Regulators</h3>
            <p class="text-sm mt-2 text-white/90  dark:text-blue-200">demand stronger security</p>
          </article>

          <article class="rounded-2xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5 border-green-200
                          dark:bg-black/10 dark:border-purple-400/30">
            <div class="text-3xl mb-3">👥</div>
            <h3 class="text-lg font-bold text-white ">Consumers</h3>
            <p class="text-sm mt-2 text-white/90  dark:text-blue-200">demand more privacy</p>
          </article>

          <article class="rounded-2xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5 border-emerald-200
                          dark:bg-black/10 dark:border-emerald-400/30">
            <div class="text-3xl mb-3">🏢</div>
            <h3 class="text-lg font-bold text-white ">Enterprises</h3>
            <p class="text-sm mt-2 text-white/90  dark:text-blue-200">demand cost savings</p>
          </article>

          <article class="rounded-2xl p-6 border
                          bg-black/80 backdrop-blur ring-1 ring-black/5 border-cyan-200
                          dark:bg-black/10 dark:border-cyan-400/30">
            <div class="text-3xl mb-3">📈</div>
            <h3 class="text-lg font-bold text-white ">Investors</h3>
            <p class="text-sm mt-2 text-white/90  dark:text-blue-200">
              demand commodity‑grade infrastructure (ETFs, custody, rails)
            </p>
          </article>
        </div>

        <!-- Kakr Delivers -->
        <div class="mt-16 text-center">
          <div class="relative">
            <div class="absolute inset-0 rounded-3xl blur opacity-70
                        bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
            <div class="relative rounded-3xl p-8 border
                        bg-gradient-to-r from-cyan-50 to-purple-50 text-white  ring-1 ring-black/5 border-white/40
                        dark:bg-gradient-to-r dark:from-cyan-600/90 dark:to-purple-600/90  ">
              <h3 class="text-xl md:text-2xl font-bold mb-4">Kakr Labs delivers it all</h3>
              <div class="flex flex-wrap justify-center gap-4 text-base md:text-lg font-semibold
                          text-cyan-800 dark:text-cyan-200">
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Identity
                </span>
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Payments
                </span>
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Verification
                </span>
              </div>
              <p class="mt-4 text-cyan-900 dark:text-cyan-200">
                with the only Litecoin infrastructure built for scale, security, and adoption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Takeaway Section -->
    <section class="relative py-20 px-4">
      <div class="max-w-6xl mx-auto"data-aos="fade-up">
        <div class="text-center mb-14 animate-fade-in-up"data-aos="fade-up">
          <h2 class="text-3xl md:text-5xl font-bold text-white ">The Takeaway</h2>
        </div>

        <div class="space-y-8">
          <!-- Warning -->
          <div class="relative">
            <div class="absolute inset-0 rounded-3xl blur opacity-50
                        bg-gradient-to-r from-green-500/15 to-green-600/15"></div>
            <div class="relative rounded-3xl p-8 border
                        bg-black/80 backdrop-blur ring-1 ring-black/5 border-orange-200
                        dark:bg-black/10 dark:border-orange-400/20">
              <div class="flex items-start gap-4">
                <span class="text-3xl">👉</span>
                <p class="text-lg leading-relaxed text-white  dark:text-orange-200">
                  If you're still building on centralized identity, payments, or telco rails -
                  <span class="font-bold text-orange-700 dark:text-orange-300">you're building on quicksand.</span>
                </p>
              </div>
            </div>
          </div>

          <!-- Opportunity -->
          <div class="relative">
            <div class="absolute inset-0 rounded-3xl blur opacity-50
                        bg-gradient-to-r from-emerald-500/15 to-cyan-500/15"></div>
            <div class="relative rounded-3xl p-8 border
                        bg-black/80 backdrop-blur ring-1 ring-black/5 border-emerald-200
                        dark:bg-black/10 dark:border-emerald-400/20">
              <div class="flex items-start gap-4">
                <span class="text-3xl">👉</span>
                <p class="text-lg leading-relaxed text-white  dark:text-emerald-200">
                  If you're ready for the next decade of digital infrastructure -
                  <span class="font-bold text-emerald-700 dark:text-emerald-300">you're ready for Kakr Labs.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Final Statement -->
        <div class="mt-16 text-center">
          <div class="relative">
            <div class="absolute inset-0 rounded-3xl blur opacity-70
                        bg-gradient-to-r from-cyan-500/30 to-purple-500/30"></div>
            <div class="relative rounded-3xl p-12 border
                        bg-gradient-to-r from-white/90 to-indigo-50/90
                        text-white  ring-1 ring-black/5 border-white/40
                        dark:bg-gradient-to-r dark:from-slate-800/90 dark:to-blue-900/90  ">
              <h3 class="text-2xl md:text-4xl font-bold mb-8 leading-tight">Secure. Private. Always On.</h3>

              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://pteri.org/Register"
                  target="_blank" rel="noopener"
                  class="group inline-flex items-center px-10 py-5 rounded-2xl
                         bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                         font-bold text-lg md:text-xl shadow-2xl hover:shadow-3xl
                         transition-all duration-300 transform hover:scale-105"
                >
                  <svg class="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Start Building Today
                  <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </a>

                <a
                  href="/contact"
                  class="group inline-flex items-center px-10 py-5 rounded-2xl
                         border-2 border-slate-900/10 text-white  hover:bg-black/5
                           dark:hover:bg-black/10
                         font-bold text-lg md:text-xl transition-all duration-300"
                >
                  <svg class="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  Schedule a Demo
                  <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </a>
              </div>

              <p class="mt-8 flex items-center justify-center gap-2 text-lg text-cyan-800 dark:text-cyan-200">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Join the infrastructure revolution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation Footer -->
    <section class="relative py-16 px-4">
      <div class="max-w-4xl mx-auto text-center"data-aos="fade-up">
        <div class="grid gap-4 sm:grid-cols-3">
          <a href="/pricing"
            class="group rounded-2xl p-6 border
                   bg-black/80 backdrop-blur ring-1 ring-black/5 border-white/10
                   hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300
                   dark:bg-black/10  dark:hover:border-cyan-400/50"
          >
            <div class="text-3xl mb-3">💰</div>
            <h3 class="text-lg font-bold text-white  mb-1">View Pricing</h3>
            <p class="text-sm text-white/90  dark:text-blue-200">Compare plans and pricing</p>
            <div class="mt-3 text-sm font-medium flex items-center justify-center text-cyan-700 dark:text-cyan-400">
              Learn More
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </a>

          <a
            href="https://docs.kakr.ai"
            target="_blank" rel="noopener"
            class="group rounded-2xl p-6 border
                   bg-black/80 backdrop-blur ring-1 ring-black/5 border-white/10
                   hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300
                   dark:bg-black/10  dark:hover:border-purple-400/50"
          >
            <div class="text-3xl mb-3">📚</div>
            <h3 class="text-lg font-bold text-white  mb-1">Documentation</h3>
            <p class="text-sm text-white/90  dark:text-blue-200">APIs, SDKs, and guides</p>
            <div class="mt-3 text-sm font-medium flex items-center justify-center text-green-700 dark:text-purple-400">
              Read Docs
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
          </a>

          <a
            href="/contact"
            class="group rounded-2xl p-6 border
                   bg-black/80 backdrop-blur ring-1 ring-black/5 border-white/10
                   hover:border-emerald-400/50 hover:-translate-y-1 transition-all duration-300
                   dark:bg-black/10  dark:hover:border-emerald-400/50"
          >
            <div class="text-3xl mb-3">🤝</div>
            <h3 class="text-lg font-bold text-white  mb-1">Get Started</h3>
            <p class="text-sm text-white/90  dark:text-blue-200">Talk to our team</p>
            <div class="mt-3 text-sm font-medium flex items-center justify-center text-emerald-700 dark:text-emerald-400">
              Contact Sales
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

definePageMeta({ title: 'Use Cases & Solutions | Kakr Labs' })
import { useSEO } from '~/composables/useSEO'

const { setSEO } = useSEO()

setSEO({
  title: 'Use Cases & Solutions - Litecoin Infrastructure for Every Industry | Kakr Labs',
  description: 'Discover how Litecoin-based decentralized and blockchain infrastructure services transform finance, security, telecom, healthcare, and enterprise development. Built for scale, security, and real-world adoption.',
  keywords: ['Litecoin infrastructure', 'DaaS', 'BaaS', 'blockchain solutions', 'Web3', 'verifiable identity', 'enterprise blockchain', 'PTERI Wallet'],
  image: '/og/og-use-cases.png'
})

/** Theme toggle (persists; respects system pref) */
const THEME_KEY = 'kakr_theme'
const isDark = ref(false)

onMounted(() => {
  const stored = localStorage.getItem(THEME_KEY)
  const prefers = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
  isDark.value = stored ? stored === 'dark' : !!prefers
  document.documentElement.classList.toggle('dark', isDark.value)
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem(THEME_KEY, isDark.value ? 'dark' : 'light')
}

/** Themed grid background lines */
const gridBg = computed(() => {
  const color = isDark.value ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
  return {
    backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
    backgroundSize: '40px 40px'
  }
})
</script>

<style scoped>
@keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-up { animation: fade-in-up .8s ease-out forwards; }

.delay-1000 { animation-delay: 1s; }
.delay-2000 { animation-delay: 2s; }
.delay-3000 { animation-delay: 3s; }

/* Premium depth */
.shadow-3xl { box-shadow: 0 35px 60px -12px rgba(0,0,0,.4); }

/* Smooth scroll */
html { scroll-behavior: smooth; }

/* Focus ring for accessibility */
a:focus, button:focus { outline: 2px solid #06b6d4; outline-offset: 2px; border-radius: .5rem; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up, .animate-pulse { animation: none !important; }
}
</style>

