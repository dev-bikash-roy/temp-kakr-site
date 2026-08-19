<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-24 pb-20">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LDEzMCwyNDYsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-5xl mx-auto">
          <!-- Route Badge -->
         
          
          <!-- Main Headline -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span class="bg-gradient-to-r from-slate-900 via-green-700 to-green-800 bg-clip-text text-transparent">Scalable Web3</span><br>
            <span class="text-white ">Infrastructure</span><br>
            <span class="text-white/70  text-4xl sm:text-5xl lg:text-6xl"> - Without the Noise</span>
          </h1>
          
          <!-- Subtitle -->
          <div class="max-w-4xl mx-auto mb-12">
            <p class="text-xl text-white/90  leading-relaxed mb-4">
              <strong class="text-white ">Decentralization-as-a-Service (DaaS) & Blockchain-as-a-Service (BaaS)</strong><br>
              by Kakr Labs  - Powered by Litecoin, Built for Zero-Trust
            </p>
            <p class="text-lg text-white/70  leading-relaxed">
              No tokens. No chains-of-the-week. Just secure, verifiable infrastructure built on Litecoin's proof-of-work mainnet, running since 2011. 
              Kakr Labs delivers verifiable identity, authentication, and data tools ready for enterprise and dev teams alike.
            </p>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://pteri.org/Register"
              target="_blank"
              class="inline-flex items-center px-8 py-4 rounded-2xl bg-black text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-[#0f0f0f] transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Start Free
            </a>
            <a href="/pricing"
              class="inline-flex items-center px-8 py-4 rounded-2xl border-2 border-white/15 text-white/90  font-semibold text-lg hover:bg-black transition-all duration-300"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              View Pricing Plans
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- DaaS vs BaaS Section -->
    <section class="py-20 bg-black/70 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white  mb-4">What is DaaS + BaaS</h2>
          <p class="text-xl text-white/70  max-w-3xl mx-auto">
            Two complementary services that power your decentralized infrastructure needs
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- DaaS Card -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative bg-black/90 backdrop-blur-lg rounded-3xl p-8 border border-green-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white ">DaaS</h3>
                  <p class="text-green-700 font-semibold">Decentralization-as-a-Service</p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3 text-white/90 ">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Decentralized 2FA & login</span>
                </div>
                <div class="flex items-start gap-3 text-white/90 ">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Self-custody identity flows</span>
                </div>
                <div class="flex items-start gap-3 text-white/90 ">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>No cloud — wallet-only access</span>
                </div>
                <div class="flex items-start gap-3 text-white/90 ">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Zero PII retention</span>
                </div>
                <div class="flex items-start gap-3 text-white/90 ">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Powered by <strong class="text-green-700">PTERI App</strong></span>
                </div>
              </div>

              <div class="mt-6 rounded-xl bg-blue-50 p-4 border border-green-200">
                <p class="text-sm font-medium text-green-800">
                  Wallet-based authentication without centralized dependencies
                </p>
              </div>
            </div>
          </div>
          
          <!-- BaaS Card -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative bg-black/90 backdrop-blur-lg rounded-3xl p-8 border border-green-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white ">BaaS</h3>
                  <p class="text-green-700 font-semibold">Blockchain-as-a-Service</p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3 text-white/90 ">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Litecoin-based transaction APIs</span>
                </div>
                <div class="flex items-start gap-3 text-white/90 ">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Payment + messaging signing</span>
                </div>
                <div class="flex items-start gap-3 text-white/90 ">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Secure REST & GraphQL APIs</span>
                </div>
                <div class="flex items-start gap-3 text-white/90 ">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Private key-secured wallets</span>
                </div>
                <div class="flex items-start gap-3 text-white/90 ">
                  <svg class="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Fully hosted via <strong class="text-green-700">Azure/IBM</strong></span>
                </div>
              </div>

              <div class="mt-6 rounded-xl bg-purple-50 p-4 border border-green-200">
                <p class="text-sm font-medium text-purple-800">
                  Enterprise-grade blockchain infrastructure on Litecoin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why We're Different Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white  mb-4">Why We're Different</h2>
          <p class="text-xl text-white/70  max-w-3xl mx-auto">
            Built on proven infrastructure, not experimental tokens
          </p>
        </div>
        
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-red-50 to-green-50 rounded-3xl blur opacity-50"></div>
          <div class="relative bg-black/90 backdrop-blur-lg rounded-3xl border border-white/10  shadow-xl overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-white/10  bg-black">
                    <th class="text-left py-4 px-6 text-white  font-semibold text-lg">Feature</th>
                    <th class="text-center py-4 px-6 text-red-600 font-semibold text-lg">Traditional Providers</th>
                    <th class="text-center py-4 px-6 text-green-700 font-semibold text-lg">Kakr Labs</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr class="hover:bg-black/50 bg-black/50 transition-colors duration-200">
                    <td class="py-4 px-6 text-white  font-medium">Smart Contracts</td>
                    <td class="py-4 px-6 text-center text-white/70 ">Ethereum smart contracts</td>
                    <td class="py-4 px-6 text-center text-green-600 font-medium">No tokens or EVM risk</td>
                  </tr>
                  <tr class="hover:bg-black/50 bg-black/50 transition-colors duration-200">
                    <td class="py-4 px-6 text-white  font-medium">Authentication</td>
                    <td class="py-4 px-6 text-center text-white/70 ">Firebase/Auth0</td>
                    <td class="py-4 px-6 text-center text-green-600 font-medium">Wallet-based login, not passwords</td>
                  </tr>
                  <tr class="hover:bg-black/50 bg-black/50 transition-colors duration-200">
                    <td class="py-4 px-6 text-white  font-medium">Identity</td>
                    <td class="py-4 px-6 text-center text-white/70 ">Centralized ID tools</td>
                    <td class="py-4 px-6 text-center text-green-600 font-medium">Self-owned PTERI Identity</td>
                  </tr>
                  <tr class="hover:bg-black/50 bg-black/50 transition-colors duration-200">
                    <td class="py-4 px-6 text-white  font-medium">Verification</td>
                    <td class="py-4 px-6 text-center text-white/70 ">NFT-linked identity</td>
                    <td class="py-4 px-6 text-center text-green-600 font-medium">Cryptographic proofs, not token junk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-20 bg-black/70 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white  mb-4">Use Case Showcase</h2>
          <p class="text-xl text-white/70  max-w-3xl mx-auto">
            Real-world applications across industries
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Identity & KYC -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white  mb-4">Identity & KYC</h3>
              <p class="text-white/70 ">Decentralized onboarding for users, employees, or citizens</p>
            </div>
          </div>
          
          <!-- Developer APIs -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white  mb-4">Developer APIs</h3>
              <p class="text-white/70 ">Real blockchain infra with no token dependency</p>
            </div>
          </div>
          
          <!-- SIM Swap Defense -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white  mb-4">SIM Swap Defense</h3>
              <p class="text-white/70 ">eSIM + wallet identity with signature proof</p>
            </div>
          </div>
          
          <!-- Healthcare & Finance -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white  mb-4">Healthcare & Finance</h3>
              <p class="text-white/70 ">Immutable claims without retaining PII</p>
            </div>
          </div>
          
          <!-- Enterprise Access -->
          <div class="group relative md:col-span-2 lg:col-span-2">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-indigo-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white  mb-4">Enterprise Access</h3>
              <p class="text-white/70 ">Dedicated enterprise deployment zones via Azure/IBM</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white  mb-4">Plans & Pricing</h2>
          <p class="text-xl text-white/70  max-w-3xl mx-auto">
            Transparent pricing for every scale
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Free Plan -->
          <div class="relative bg-black rounded-3xl p-8 border border-white/10  shadow-xl text-center">
            <h3 class="text-2xl font-bold text-white  mb-2">Free</h3>
            <div class="text-4xl font-bold text-green-700 mb-6">$0</div>
            <div class="space-y-4 mb-8">
              <div class="flex items-center text-white/90 ">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>PTERI App</span>
              </div>
              <div class="flex items-center text-white/90 ">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>2FA</span>
              </div>
              <div class="flex items-center text-white/90 ">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>100 API calls/mo</span>
              </div>
            </div>
            <a href="https://pteri.org/Register"
              target="_blank"
              class="w-full inline-flex items-center justify-center px-6 py-3 rounded-2xl border-2 border-white/15 text-white/90  font-semibold hover:bg-black transition-all duration-300"
            >
              Get Started
            </a>
          </div>
          
          <!-- BaaS Startup -->
          <div class="relative bg-black rounded-3xl p-8 border-2 border-green-600 shadow-xl text-center">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-full">
                Most Popular
              </span>
            </div>
            <h3 class="text-2xl font-bold text-white  mb-2">BaaS (Startup)</h3>
            <div class="text-4xl font-bold text-green-700 mb-6">$600<span class="text-lg text-white/50 ">/mo</span></div>
            <div class="space-y-4 mb-8">
              <div class="flex items-center text-white/90 ">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>1,000 API calls</span>
              </div>
              <div class="flex items-center text-white/90 ">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Self-custody wallet support</span>
              </div>
              <div class="flex items-center text-white/90 ">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>2FA infrastructure</span>
              </div>
            </div>
            <button class="w-full inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-[#0f0f0f] transition-all duration-300">
              Start Trial
            </button>
          </div>
          
          <!-- Enterprise DaaS -->
          <div class="relative bg-black rounded-3xl p-8 border border-white/10  shadow-xl text-center">
            <h3 class="text-2xl font-bold text-white  mb-2">Enterprise DaaS</h3>
            <div class="text-4xl font-bold text-green-700 mb-6">$10,000<span class="text-lg text-white/50 ">/mo</span></div>
            <div class="space-y-4 mb-8">
              <div class="flex items-center text-white/90 ">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Unlimited API</span>
              </div>
              <div class="flex items-center text-white/90 ">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>eSIM, MCP</span>
              </div>
              <div class="flex items-center text-white/90 ">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Full compliance</span>
              </div>
            </div>
            <a
              href="/contact"
              class="w-full inline-flex items-center justify-center px-6 py-3 rounded-2xl border-2 border-white/15 text-white/90  font-semibold hover:bg-black transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              class="inline-flex items-center px-8 py-4 rounded-2xl bg-black text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-[#0f0f0f] transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l6-6m0 0v6m0-6H6"></path>
              </svg>
              Schedule a Pilot
            </a>
            <a href="/pricing"
              class="inline-flex items-center px-8 py-4 rounded-2xl border-2 border-white/15 text-white/90  font-semibold text-lg hover:bg-black transition-all duration-300"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z"></path>
              </svg>
              View Full Plan Comparison
            </a>
          </div>
        </div>
      </div>
    </section>

<!-- Documentation Section -->
<section class="py-20 bg-black/70 backdrop-blur-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-white  mb-4">Documentation Links</h2>
      <p class="text-xl text-white/70  max-w-3xl mx-auto">
        Everything you need to get started
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- PTERI App – Auth Flow -->
      <a href="https://docs.kakr.ai/docs/platform-capabilities/2.3-identity-and-authentication"
        target="_blank"
        class="group relative block"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <div class="relative bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
          <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white  mb-2">PTERI App</h3>
          <p class="text-sm text-white/70  mb-4">Auth Flow</p>
          <div class="text-green-700 hover:text-green-600 text-sm font-medium flex items-center justify-center">
            View Docs
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>
      </a>
      
      <!-- DaaS API – sign, verify, OTP -->
      <a href="https://docs.kakr.ai/docs/sdks-and-integration-guides/litecoin-liaas-api-api-clients"
        target="_blank"
        class="group relative block"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <div class="relative bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
          <div class="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white  mb-2">DaaS API</h3>
          <p class="text-sm text-white/70  mb-4">/setup-otp, /sign, /verify</p>
          <div class="text-green-700 hover:text-green-600 text-sm font-medium flex items-center justify-center">
            View Docs
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>
      </a>
      
      <!-- BaaS API – create raw transaction & submit -->
      <a href="https://docs.kakr.ai/docs/sdks-and-integration-guides/litecoin-liaas-api-api-clients"
        target="_blank"
        class="group relative block"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <div class="relative bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
          <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white  mb-2">BaaS API</h3>
          <p class="text-sm text-white/70  mb-4">/create-transaction, /submit</p>
          <div class="text-emerald-600 hover:text-emerald-500 text-sm font-medium flex items-center justify-center">
            View Docs
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>
      </a>
      
      <!-- SDKs – JavaScript/Python/Kotlin/Swift -->
      <a href="https://docs.kakr.ai/docs/sdks-and-integration-guides/litecoin-liaas-api-api-clients"
        target="_blank"
        class="group relative block"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <div class="relative bg-black/90 backdrop-blur-lg rounded-2xl p-6 border border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
          <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white  mb-2">SDKs</h3>
          <p class="text-sm text-white/70  mb-4">JS, Python, Kotlin, Swift</p>
          <div class="text-green-700 hover:text-orange-500 text-sm font-medium flex items-center justify-center">
            View Docs
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>



    <!-- Footer CTA -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur opacity-50"></div>
          <div class="relative bg-black/90 backdrop-blur-lg rounded-3xl p-8 sm:p-12 text-center border border-white/10  shadow-xl">
            <h2 class="text-4xl font-bold text-white  mb-6 leading-tight">
              The world doesn't need more chains.<br>
              <span class="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">It needs better ones.</span>
            </h2>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://pteri.org/Register"
                target="_blank"
                class="inline-flex items-center px-8 py-4 rounded-2xl bg-black text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-[#0f0f0f] transition-all duration-300 transform hover:scale-105"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Get Started
              </a>
              <a href="https://docs.kakr.ai"
                target="_blank"
                class="inline-flex items-center px-8 py-4 rounded-2xl border-2 border-white/15 text-white/90  font-semibold text-lg hover:bg-black transition-all duration-300"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Docs
              </a>
              <a
                href="/contact"
                class="inline-flex items-center px-8 py-4 rounded-2xl border-2 border-white/15 text-white/90  font-semibold text-lg hover:bg-black transition-all duration-300"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Contact Sales
              </a>
            </div>
            
            <p class="mt-6 text-white/70  flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Join the future of decentralized infrastructure
            </p>
          </div>
        </div>
        
        <p class="mt-6 text-center text-sm text-white/50 ">
          Last updated on January 15, 2025
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center">
          <p class="text-white/60">
            <span class="font-semibold text-white">Kakr Labs:</span> 
            Fearless Web3 Solutions Powered by Litecoin.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { setSEO } = useSEO()

setSEO({
  title: 'DaaS & BaaS by Kakr Labs - Decentralized Infrastructure',
  description: 'Scalable Web3 infrastructure without the noise. Secure, verifiable infrastructure built on Litecoin for enterprise and dev teams.',
  image: '/og/og-decentralized-as-a-service.png',
  keywords: ['DaaS', 'BaaS', 'Litecoin', 'decentralized infrastructure', 'Web3', 'blockchain as a service', 'decentralization as a service']
})
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom focus states for accessibility */
a:focus,
button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-radius: 0.5rem;
}

/* Enhanced hover effects */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\:-translate-y-1 {
  transform: translateY(-0.25rem);
}

/* Backdrop blur fallback */
@supports not (backdrop-filter: blur(16px)) {
  .backdrop-blur-lg {
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>