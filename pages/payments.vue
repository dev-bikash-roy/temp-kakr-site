<template>
  <div class="bg-black overflow-x-hidden">
    
    <!-- 1. HERO -->
    <section class="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-32">
      <!-- Dynamic Background -->
      <div class="absolute inset-0 pointer-events-none">
         <div class="absolute top-0 left-0 w-full h-full bg-[#0B1120]"></div>
         <!-- Blue/Cyan Glows -->
         <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 blur-[80px] rounded-full animate-mesh-float" style="will-change:transform;"></div>
         <div class="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[90px] rounded-full animate-mesh-float-delayed" style="will-change:transform;"></div>
      </div>

      <div class="container-custom relative z-10 text-center pt-20">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-display max-w-5xl mx-auto leading-tight">
          {{ content.hero.headline }}
        </h1>
        <p class="text-lg text-blue-300 font-medium tracking-wide uppercase mb-10" data-aos="fade-up" data-aos-delay="50">
           {{ content.hero.microcopy }}
        </p>
        
        <p class="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-6 font-light" data-aos="fade-up" data-aos-delay="100">
          {{ content.hero.subheadline }}
        </p>
        
        <!-- Clarification Line -->
        <p class="text-lg text-emerald-400 font-medium mb-12 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="150">
           {{ content.hero.clarification }}
        </p>

        <!-- Abstract Authority Flow (CSS/SVG Representation) -->
        <div class="mb-16 max-w-4xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
           <div class="p-8 rounded-2xl border border-white/10 bg-black/5 backdrop-blur-sm flex items-center justify-center gap-4 md:gap-8 overflow-x-auto">
               <div class="flex flex-col items-center">
                  <div class="w-16 h-16 rounded-full bg-[#0f0f0f] border border-slate-700 flex items-center justify-center text-white mb-3">
                    <DevicePhoneMobileIcon class="w-8 h-8" />
                  </div>
                  <span class="text-sm text-white/60 font-mono">Wallet</span>
               </div>
               <div class="h-0.5 w-16 bg-gradient-to-r from-slate-700 to-emerald-500"></div>
               <div class="flex flex-col items-center">
                  <div class="w-16 h-16 rounded-full bg-emerald-900/30 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-3 shadow-lg shadow-emerald-500/30">
                    <ShieldCheckIcon class="w-8 h-8" />
                  </div>
                  <span class="text-sm text-emerald-400 font-mono">Proof</span>
               </div>
               <div class="h-0.5 w-16 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
               <div class="flex flex-col items-center">
                  <div class="w-16 h-16 rounded-full bg-blue-900/30 border border-blue-500/50 flex items-center justify-center text-blue-400 mb-3">
                    <CheckCircleIcon class="w-8 h-8" />
                  </div>
                  <span class="text-sm text-blue-400 font-mono">Settlement</span>
               </div>
           </div>
        </div>
      </div>
    </section>

    <!-- NEW: PAYMENTS USE CASES -->
    <section class="py-24 bg-black border-b border-white/8 ">
       <div class="container-custom">
          <div class="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 class="text-2xl sm:text-3xl font-bold text-white  mb-12">{{ content.useCases.title }}</h2>
            <div class="grid sm:grid-cols-2 gap-6 text-left">
              <div v-for="(item, index) in content.useCases.items" :key="index" class="bg-black p-6 rounded-xl border border-white/10  shadow-sm flex items-start gap-4">
                 <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircleIcon class="w-5 h-5 text-blue-600" />
                 </div>
                 <span class="text-lg text-white/90  font-medium">{{ item }}</span>
              </div>
            </div>
          </div>
       </div>
    </section>

    <!-- 2. WHY PAYMENTS KEEP FAILING -->
    <section class="py-32 bg-black relative">
       <div class="container-custom">
         <div class="max-w-5xl mx-auto mb-16 text-center" data-aos="fade-up">
           <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white  mb-6">{{ content.fail.title }}</h2>
           <p class="text-lg sm:text-xl text-white/70  max-w-3xl mx-auto mb-10">{{ content.fail.subtitle }}</p>
           
           <div class="max-w-3xl mx-auto mb-12">
              <ul class="space-y-4 text-left">
                 <li v-for="item in content.fail.items" :key="item" class="flex items-start gap-3 text-lg text-white/90 ">
                    <XMarkIcon class="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    {{ item }}
                 </li>
              </ul>
           </div>
           
           <p class="text-lg sm:text-xl md:text-2xl font-bold text-white dark:text-red-200 border-l-4 border-red-500 pl-6 py-2 bg-red-50 dark:bg-red-900/30 rounded-r-xl inline-block max-w-3xl">
              {{ content.fail.punchline }}
           </p>
         </div>

         <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
             <!-- Legacy Pipeline -->
             <div class="bg-black border border-white/10  rounded-3xl p-8" data-aos="fade-right">
                <h3 class="text-xl font-bold text-white/50  mb-6 uppercase tracking-wider flex items-center gap-2">
                   <span class="w-3 h-3 rounded-full bg-red-400"></span> Legacy Pipeline
                </h3>
                <div class="space-y-4">
                    <div class="flex items-center gap-4 p-4 bg-black rounded-xl shadow-sm border border-white/10  opacity-60">
                        <ServerIcon class="w-6 h-6 text-white/60" />
                        <span class="text-white/50  line-through">Central Server</span>
                    </div>
                    <div class="h-8 border-l-2 border-dashed border-white/15 ml-7"></div>
                    <div class="flex items-center gap-4 p-4 bg-black rounded-xl shadow-sm border border-white/10  opacity-60">
                        <UserGroupIcon class="w-6 h-6 text-white/60" />
                        <span class="text-white/50  line-through">Intermediaries</span>
                    </div>
                    <div class="h-8 border-l-2 border-dashed border-white/15 ml-7"></div>
                    <div class="flex items-center gap-4 p-4 bg-red-50 rounded-xl shadow-sm border border-red-100">
                        <ExclamationTriangleIcon class="w-6 h-6 text-red-500" />
                        <span class="text-red-700 font-medium">Single Point of Failure</span>
                    </div>
                </div>
             </div>

             <!-- PTERI Pipeline -->
             <div class="bg-black border border-slate-800 rounded-3xl p-8 relative overflow-hidden" data-aos="fade-left">
                <!-- Glow -->
                <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                <h3 class="text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                   <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span> PTERI Pipeline
                </h3>
                <div class="space-y-4 relative z-10">
                    <div class="flex items-center gap-4 p-4 bg-[#0f0f0f] rounded-xl border border-white/10">
                        <DevicePhoneMobileIcon class="w-6 h-6 text-emerald-400" />
                        <span class="text-white font-medium">User Wallet (Keys)</span>
                    </div>
                    <div class="h-8 border-l-2 border-emerald-500/30 ml-7"></div>
                    <div class="flex items-center gap-4 p-4 bg-[#0f0f0f] rounded-xl border border-white/10">
                        <ShieldCheckIcon class="w-6 h-6 text-emerald-400" />
                        <span class="text-white font-medium">Cryptographic Proof</span>
                    </div>
                    <div class="h-8 border-l-2 border-emerald-500/30 ml-7"></div>
                    <div class="flex items-center gap-4 p-4 bg-emerald-900/30 rounded-xl border border-emerald-500/50">
                        <CheckCircleIcon class="w-6 h-6 text-emerald-400" />
                        <span class="text-emerald-300 font-bold">Deterministic Settlement</span>
                    </div>
                </div>
             </div>
         </div>
       </div>
    </section>

    <!-- 3. PAYMENTS AS OUTCOME OF AUTHORITY -->
    <section class="py-24 bg-black relative">
        <div class="container-custom max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white  mb-6">{{ content.paymentsAsOutcome.title }}</h2>
            <p class="text-lg sm:text-xl text-white/70  mb-8">{{ content.paymentsAsOutcome.subtitle }}</p>
            <p class="text-lg sm:text-xl md:text-2xl font-bold text-emerald-900 mb-10 bg-emerald-50 py-4 px-6 rounded-xl inline-block">{{ content.paymentsAsOutcome.description }}</p>
            
            <div class="bg-black p-8 rounded-2xl border border-white/10  shadow-sm text-left">
               <ul class="space-y-4">
                  <li v-for="prop in content.paymentsAsOutcome.properties" :key="prop" class="flex items-start gap-3 text-lg text-white/90 ">
                     <CheckCircleIcon class="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                     {{ prop }}
                  </li>
               </ul>
            </div>
        </div>
    </section>

    <!-- 3.5 HOW PAYMENTS WORK -->
    <section class="py-24 bg-black relative">
        <div class="container-custom max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white  mb-6">{{ content.howPaymentsWork.title }}</h2>
            <p class="text-lg sm:text-xl text-white/70  mb-12">{{ content.howPaymentsWork.subtitle }}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
               <div v-for="(step, index) in content.howPaymentsWork.steps" :key="index" class="p-6 bg-black rounded-xl border border-white/10  relative group hover:bg-black hover:shadow-lg transition-all">
                  <div class="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform">{{ index + 1 }}</div>
                  <p class="text-white  font-medium text-sm leading-relaxed">{{ step }}</p>
               </div>
            </div>
            
            <p class="text-lg text-white/70  italic bg-black p-6 rounded-xl">{{ content.howPaymentsWork.note }}</p>
        </div>
    </section>

    <!-- 4. WALLET CENTRIC (With Badges) -->
    <section class="py-32 bg-black relative">
       <div class="container-custom">
         <div class="grid lg:grid-cols-2 gap-16 items-center">
             <div data-aos="fade-right">
                 <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white  mb-6">{{ content.wallet.title }}</h2>
                 <p class="text-lg sm:text-xl text-white/70  leading-relaxed mb-8">{{ content.wallet.description }}</p>
                 
                 <ul class="space-y-4 mb-10">
                     <li v-for="pt in content.wallet.features" :key="pt" class="flex items-center gap-3 text-lg text-white/90  font-medium">
                         <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                         {{ pt }}
                     </li>
                 </ul>
                 
                 <!-- Download Badges (Image Only) -->
                 <div class="flex flex-wrap gap-4">
                    <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" rel="noopener" class="hover:scale-105 transition-transform">
                        <img src="/ios.png" alt="Download on the App Store" class="h-12 w-auto" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" rel="noopener" class="hover:scale-105 transition-transform">
                        <img src="/playstore.png" alt="Get it on Google Play" class="h-12 w-auto" />
                    </a>
                 </div>
             </div>
             
             <!-- Wallet Preview -->
             <div class="relative bg-black rounded-3xl p-8 border border-white/8 " data-aos="fade-left">
                  <!-- Simulated Phone UI -->
                  <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-[#0f0f0f] border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                      <div class="h-[32px] w-[3px] bg-[#0f0f0f] absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                      <div class="h-[46px] w-[3px] bg-[#0f0f0f] absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                      <div class="h-[46px] w-[3px] bg-[#0f0f0f] absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                      <div class="h-[64px] w-[3px] bg-[#0f0f0f] absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                      <div class="rounded-[2rem] overflow-hidden w-full h-full bg-black relative">
                          <div class="p-6 text-white space-y-6 flex flex-col items-center justify-center h-full">
                              <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                                  <LockClosedIcon class="w-8 h-8" />
                              </div>
                              <div class="text-center">
                                  <p class="text-sm text-white/60 mb-1">Signed Locally</p>
                                  <p class="text-lg sm:text-xl md:text-2xl font-bold text-white">Confirmed</p>
                              </div>
                              <div class="w-full h-px bg-black/10"></div>
                              <div class="text-xs text-white/50  text-center uppercase tracking-widest">Keys on Device</div>
                          </div>
                      </div>
                  </div>
             </div>
         </div>
       </div>
    </section>

    <!-- 5. SELF-CUSTODIAL -->
    <section class="py-24 bg-black relative">
        <div class="container-custom max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white  mb-6">{{ content.selfCustodial.title }}</h2>
            <p class="text-lg sm:text-xl text-white/70  mb-10">{{ content.selfCustodial.subtitle }}</p>
            
            <div class="bg-black p-8 rounded-2xl border border-emerald-200 shadow-sm text-left mb-8">
               <ul class="space-y-4">
                  <li v-for="item in content.selfCustodial.items" :key="item" class="flex items-start gap-3 text-lg text-white/90 ">
                     <LockClosedIcon class="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                     {{ item }}
                  </li>
               </ul>
            </div>
            
            <p class="text-lg font-medium text-white ">{{ content.selfCustodial.closing }}</p>
        </div>
    </section>

    <!-- 6. PRIVACY BY CHOICE -->
    <section class="py-24 bg-black relative">
        <div class="container-custom max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white  mb-6">{{ content.privacyByChoice.title }}</h2>
            <p class="text-lg sm:text-xl text-white/70  mb-8">{{ content.privacyByChoice.subtitle }}</p>
            <p class="text-lg text-white/90  mb-10">{{ content.privacyByChoice.description }}</p>
            
            <div class="grid sm:grid-cols-3 gap-6 text-left mb-8">
                <div v-for="feature in content.privacyByChoice.features" :key="feature" class="bg-black p-6 rounded-xl border border-white/10 ">
                    <p class="text-white  font-medium">{{ feature }}</p>
                </div>
            </div>
            
            <p class="text-lg text-white/70  italic">{{ content.privacyByChoice.note }}</p>
        </div>
    </section>

    <!-- 7. BUILT ON LITECOIN -->
    <section class="py-24 bg-black relative">
        <div class="container-custom max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white  mb-6">{{ content.builtOnLitecoin.title }}</h2>
            <p class="text-lg sm:text-xl text-white/70  mb-10">{{ content.builtOnLitecoin.subtitle }}</p>
            
            <div class="grid sm:grid-cols-2 gap-6 text-left mb-8">
                <div v-for="reason in content.builtOnLitecoin.reasons" :key="reason" class="bg-black p-6 rounded-xl border border-white/10  shadow-sm flex items-center gap-3">
                    <CheckCircleIcon class="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span class="text-white  font-medium">{{ reason }}</span>
                </div>
            </div>
            
            <p class="text-lg font-medium text-white ">{{ content.builtOnLitecoin.closing }}</p>
        </div>
    </section>

    <!-- 8. PAYMENTS ARE OPTIONAL -->
    <section class="py-24 bg-black relative">
        <div class="container-custom max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white  mb-6">{{ content.paymentsOptional.title }}</h2>
            <p class="text-lg sm:text-xl text-white/70  mb-8">{{ content.paymentsOptional.description }}</p>
            
            <div class="flex flex-wrap justify-center gap-4 mb-8">
                <div v-for="useCase in content.paymentsOptional.useCases" :key="useCase" class="px-6 py-3 bg-emerald-50 rounded-full border border-emerald-200 font-bold text-emerald-900">
                    {{ useCase }}
                </div>
            </div>
            
            <p class="text-lg text-white/70  italic">{{ content.paymentsOptional.note }}</p>
        </div>
    </section>

    <!-- 9. SECURITY BOUNDARIES -->
    <section class="py-24 bg-black relative">
        <div class="container-custom max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white  mb-6">{{ content.securityBoundaries.title }}</h2>
            <p class="text-lg sm:text-xl text-white/70  mb-10">{{ content.securityBoundaries.subtitle }}</p>
            
            <div class="bg-red-50 p-8 rounded-2xl border border-red-100 text-left mb-8">
               <h3 class="text-lg font-bold text-red-800 mb-4 uppercase tracking-wider">PTERI does not claim to:</h3>
               <ul class="space-y-3">
                  <li v-for="claim in content.securityBoundaries.nonClaims" :key="claim" class="flex items-start gap-3 text-red-900">
                     <XMarkIcon class="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                     {{ claim }}
                  </li>
               </ul>
            </div>
            
            <p class="text-lg font-medium text-white dark:text-emerald-100 bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl border border-emerald-100 dark:border-emerald-500/30">{{ content.securityBoundaries.guarantee }}</p>
        </div>
    </section>

    <!-- 6. CAPABILITY STACK -->
    <section class="py-24 bg-black relative">
        <div class="container-custom text-center">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white  mb-16">{{ content.stack.title }}</h2>
            
            <div class="max-w-4xl mx-auto flex flex-wrap justify-center gap-8" data-aos="fade-up">
                <div class="w-40 h-40 rounded-full border-4 border-white/8  flex flex-col items-center justify-center p-4 bg-black">
                    <span class="font-bold text-white  text-lg">Identity</span>
                </div>
                
                <div class="w-48 h-48 rounded-full border-4 border-emerald-500 bg-emerald-50 flex flex-col items-center justify-center p-4 shadow-xl z-10 -my-4">
                    <span class="font-bold text-emerald-900 text-xl mb-1">Authority</span>
                    <span class="text-xs text-emerald-600 uppercase font-bold tracking-wide">Core Layer</span>
                </div>
                
                <div class="w-40 h-40 rounded-full border-4 border-white/8  flex flex-col items-center justify-center p-4 bg-black">
                    <span class="font-bold text-white  text-lg">Payments</span>
                </div>
            </div>
             <p class="mt-12 text-white/50 ">{{ content.stack.caption }}</p>
        </div>
    </section>

    <!-- 10. PAYMENTS FAQS -->
    <section class="py-24 bg-black border-t border-white/10 ">
       <div class="container-custom">
          <div class="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 class="text-2xl sm:text-3xl font-bold text-white  mb-8 text-center">{{ content.faqs.title }}</h2>
            <div class="space-y-4">
              <div v-for="(faq, i) in content.faqs.items" :key="i" class="border border-white/10  rounded-xl overflow-hidden">
                <button class="w-full flex items-center justify-between p-4 bg-black hover:bg-white/5 bg-black text-left" @click="toggleFaq(i)">
                  <span class="font-bold text-white ">{{ faq.q }}</span>
                  <span class="text-emerald-500 text-xl font-bold ml-4">{{ activeFaq === i ? '−' : '+' }}</span>
                </button>
                <div v-show="activeFaq === i" class="p-4 bg-black text-white/70  border-t border-white/10 ">
                  {{ faq.a }}
                </div>
              </div>
            </div>
            
            <!-- About Kakr Labs -->
            <div class="mt-20 text-center bg-black text-white p-10 rounded-3xl">
               <h2 class="text-xl sm:text-2xl font-bold mb-4">{{ content.about.title }}</h2>
               <p class="text-lg text-white/80 mb-4 max-w-2xl mx-auto">{{ content.about.description }}</p>
               <p class="text-emerald-400 font-medium">{{ content.about.focus }}</p>
            </div>
          </div>
       </div>
    </section>

    <!-- 7. CTA -->
    <section class="py-32 bg-black text-center relative overflow-hidden">
        <!-- Glow -->
        <div class="absolute bottom-0 right-1/2 translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="container-custom relative z-10">
           <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">{{ content.cta.headline }}</h2>
           <div class="flex flex-col sm:flex-row gap-5 justify-center">
              <button @click="showDownloadModal = true" class="btn-primary">
                 {{ content.cta.btnWallet }}
              </button>
              <a href="https://pteri.org/Register" class="btn-ghost">
                 {{ content.cta.btnPlatform }}
              </a>
           </div>
        </div>
    </section>

    <!-- DOWNLOAD MODAL -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
        <div v-if="showDownloadModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            <!-- Backdrop -->
            <div @click="showDownloadModal = false" class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            
            <!-- Modal Content -->
            <div class="bg-black rounded-3xl shadow-2xl p-8 sm:p-12 relative w-full max-w-lg z-10 text-center border border-white/8 ">
                <button @click="showDownloadModal = false" class="absolute top-4 right-4 p-2 text-white/60 hover:text-white/70  rounded-full hover:bg-black transition-colors">
                    <XMarkIcon class="w-6 h-6" />
                </button>

                <!-- PTERI Logo -->
                <img src="/pteri-logo.webp" alt="PTERI" class="w-20 h-auto mx-auto mb-6" />

                <h3 class="text-xl sm:text-2xl font-bold text-white  mb-3">Download PTERI App</h3>
                <p class="text-white/50  mb-8">Select your platform to get started.</p>

                <div class="flex flex-col gap-4 items-center">
                    <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="hover:scale-105 transition-transform">
                        <img src="/ios.png" alt="Download on the App Store" class="h-14 w-auto" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="hover:scale-105 transition-transform">
                        <img src="/playstore.png" alt="Get it on Google Play" class="h-14 w-auto" />
                    </a>
                </div>
            </div>
        </div>
    </Transition>

  </div>
</template>

<script setup>
import { computed, watchEffect, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'
import { 
  BuildingOfficeIcon,
  CreditCardIcon,
  CpuChipIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  ArrowLongRightIcon,
  ArrowDownIcon,
  ServerIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  EyeSlashIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

const { locale } = useI18n()
const showDownloadModal = ref(false)

// FAQ State
const activeFaq = ref(null)
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const content = computed(() => {
  const translations = {
    en: {
      hero: {
        headline: 'Transactions as an Outcome of Authority',
        microcopy: 'Payments secured by authority, not intermediaries.',
        subheadline: 'Payment systems fail because of custody, intermediaries, and permissioned trust. PTERI replaces this with deterministic cryptographic authority.',
        clarification: 'Before value moves, authority must be proven.'
      },
      useCases: {
        title: 'Payments Use Cases',
        items: [
          'Peer-to-peer settlement without intermediaries',
          'Enterprise internal transfers with deterministic authorization',
          'API-authorized payments triggered only after verification',
          'Policy-controlled value movement across systems',
          'Customer-controlled payment credentials'
        ]
      },
      fail: {
        title: 'Why Payments Keep Failing',
        subtitle: 'Payment systems do not fail because of speed or throughput. They fail because of custody, intermediaries, and permissioned trust.',
        items: [
          'Funds are held by third parties',
          'Accounts can be frozen or reversed',
          'Settlement depends on intermediaries',
          'Payments require permission rather than proof',
          'Transaction data is routinely surveilled'
        ],
        punchline: 'Every intermediary becomes a point of control. Every custodial account becomes a point of failure.'
      },
      paymentsAsOutcome: {
        title: 'Payments as an Outcome of Authority',
        subtitle: 'In PTERI, payments are not a standalone product. They are an outcome of cryptographic authority.',
        description: 'Before value moves, authority must be proven.',
        properties: [
          'Payments are authorized cryptographically, not inferred from accounts',
          'Permission is not delegated to intermediaries',
          'Settlement does not depend on centralized approval',
          'The same authority model that secures identity and APIs also secures payments'
        ]
      },
      howPaymentsWork: {
        title: 'How Payments Work in PTERI',
        subtitle: 'Payments in PTERI follow a deterministic flow:',
        steps: [
          'The authority holder signs a transaction locally using the wallet',
          'The PTERI carrier layer verifies cryptographic authority',
          'Policy and scope are enforced',
          'Settlement occurs peer-to-peer',
          'Kakr Labs never assumes custody'
        ],
        note: 'Transactions are signed in the wallet and enforced by the PTERI carrier layer. There are no intermediaries with the ability to override or reverse authority.'
      },
      selfCustodial: {
        title: 'Self-Custodial by Design',
        subtitle: 'PTERI payments are fully self-custodial.',
        items: [
          'Funds are always controlled by the authority holder',
          'Private keys never leave the user\'s device',
          'Kakr Labs cannot freeze, reverse, or access funds',
          'There is no centralized recovery mechanism'
        ],
        closing: 'This model removes the need to trust payment processors, custodians, or clearing entities.'
      },
      privacyByChoice: {
        title: 'Privacy by Choice, Not Assumption',
        subtitle: 'Privacy should be available when required - and absent when transparency is necessary.',
        description: 'PTERI supports customer-controlled payment credentials and policy-gated privacy controls.',
        features: [
          'Privacy-focused transaction controls when required',
          'Transparent transactions for auditing and compliance',
          'Policy-controlled privacy decisions'
        ],
        note: 'PTERI does not surveil transactions or monetize transaction data.'
      },
      builtOnLitecoin: {
        title: 'Built on Litecoin',
        subtitle: 'PTERI uses Litecoin as its settlement infrastructure because it is:',
        reasons: [
          'Secured by Proof-of-Work',
          'Based on Bitcoin-equivalent cryptography',
          'Operational since 2011 with near-perfect uptime',
          'Mature, stable, and globally distributed'
        ],
        closing: 'Litecoin provides production-grade settlement without experimental risk.'
      },
      paymentsOptional: {
        title: 'Payments Are Optional',
        description: 'PTERI does not require payments to function.',
        useCases: ['Identity', 'Authentication', 'Authorization'],
        note: 'Payments are available when needed - not imposed by the system.'
      },
      securityBoundaries: {
        title: 'Security Boundaries and Non-Claims',
        subtitle: 'PTERI enforces payment authority cryptographically, not behaviorally.',
        nonClaims: [
          'Protect compromised devices',
          'Prevent user-approved malware',
          'Address physical coercion'
        ],
        guarantee: 'What PTERI guarantees is deterministic enforcement of payment authority wherever cryptographic proof can be verified.'
      },
      about: {
        title: 'About Kakr Labs',
        description: 'Kakr Labs builds cryptographic infrastructure that replaces guess-based security with deterministic authority.',
        focus: 'The company focuses on identity, authentication, authorization, payments, and AI-safe delegation using a single, self-custodial authority model.'
      },
      wallet: {
        title: 'Your Wallet authorizes the value.',
        description: 'PTERI App signs payments locally. Private keys never leave your device. You are the only authority that can move funds.',
        features: ['Keys stay on device', 'Signed locally', 'No custody']
      },
      stack: {
        title: 'Payments Are One Capability',
        caption: 'PTERI authority layer enabling identity, payments, privacy, and AI delegation.'
      },
      cta: {
        headline: 'Take control of your value transfer.',
        btnWallet: 'Download PTERI App',
        btnPlatform: 'Explore Platform'
      },
      seo: {
        title: 'Self-Custodial Payments & Settlement | Kakr Labs',
        description: 'Build secure, borderless payment systems with PTERI. High-performance, self-custodial settlement infrastructure on the battle-tested Litecoin blockchain.',
        image: '/payments-page-og.png'
      },
      faqs: {
        title: 'Payments FAQs',
        items: [
          { q: 'Are PTERI payments custodial?', a: 'No. All payments are self-custodial. Kakr Labs never holds funds.' },
          { q: 'Is this a trading or exchange platform?', a: 'No. PTERI is payment and settlement infrastructure, not a trading venue.' },
          { q: 'Is privacy mandatory?', a: 'No. Privacy is optional and policy-controlled.' },
          { q: 'Can payments be restricted or scoped?', a: 'Yes. Payments are authorized through the same policy and authority model as other PTERI actions.' }
        ]
      }
    },
    de: {
      hero: {
        headline: 'Selbstverwahrte Zahlungen durch Autorität gesichert',
        microcopy: 'Zahlungen durch Autorität gesichert, nicht durch Vermittler.',
        subheadline: 'PTERI ermöglicht selbstverwahrte Zahlungen, die durch deterministische kryptografische Autorität unterstützt werden – keine Vermittler, keine Verwahrung, keine Vertrauensannahmen.',
        clarification: 'Transaktionen werden in der Wallet signiert und durch die PTERI-Trägerschicht durchgesetzt.'
      },
      useCases: {
        title: 'Zahlungsanwendungsfälle',
        items: [
          'Peer-to-Peer-Abwicklung',
          'Unternehmensinterne Überweisungen',
          'API-autorisierte Zahlungen',
          'Richtliniengesteuerte Wertbewegung',
          'Datenschutzwahrende Transaktionen'
        ]
      },
      fail: {
        title: 'Warum Zahlungen scheitern',
        subtitle: 'Zahlungssysteme scheitern nicht wegen Geschwindigkeit oder Durchsatz. Sie scheitern wegen Verwahrung, Vermittlern und genehmigungspflichtigem Vertrauen. Jeder Vermittler führt Kontrolle, Verzögerungen, Einfrierungen und Überwachung ein.',
      },
      outcome: {
        title: 'Zahlungen in PTERI',
        caption: 'Transaktionen werden lokal signiert. Autorität wird durch die Trägerschicht durchgesetzt. Abwicklung erfolgt Peer-to-Peer. Kakr Labs übernimmt niemals die Verwahrung.'
      },
      wallet: {
        title: 'Ihre Wallet autorisiert den Wert.',
        description: 'PTERI App signiert Zahlungen lokal. Private Schlüssel verlassen niemals Ihr Gerät. Sie sind die einzige Autorität, die Gelder bewegen kann.',
        features: ['Schlüssel bleiben auf dem Gerät', 'Lokal signiert', 'Keine Verwahrung']
      },
      privacy: {
        title: 'Datenschutz nach Wahl',
        description: 'PTERI unterstützt richtliniengesteuerte Datenschutzkontrollen für Transaktionen. Datenschutz ist verfügbar, wenn erforderlich, und niemals erzwungen.',
        litecoinTitle: 'Auf Litecoin aufgebaut',
        litecoinDesc: 'PTERI verwendet Litecoin für produktionsreife Abwicklung: Proof-of-Work-Sicherheit, Bitcoin-äquivalente Kryptografie, nahezu perfekte Betriebszeit seit 2011 und ein ausgereiftes globales Netzwerk.'
      },
      stack: {
        title: 'Zahlungen sind eine Fähigkeit',
        caption: 'PTERI-Autoritätsschicht ermöglicht Identität, Zahlungen, Datenschutz und KI-Delegation.'
      },
      cta: {
        headline: 'Übernehmen Sie die Kontrolle über Ihren Werttransfer.',
        btnWallet: 'PTERI App herunterladen',
        btnPlatform: 'Plattform erkunden'
      },
      seo: {
        title: 'Selbstverwahrte Zahlungen durch Autorität gesichert | Kakr Labs',
        description: 'PTERI ermöglicht selbstverwahrte Zahlungen, die durch deterministische kryptografische Autorität unterstützt werden – keine Vermittler, keine Verwahrung, keine Vertrauensannahmen.',
        image: '/payments-page-og.png'
      },
      faqs: {
        title: 'Zahlungs-FAQs',
        items: [
          { q: 'Sind Gelder verwahrt?', a: 'Nein. Alle Gelder bleiben unter Benutzerkontrolle.' },
          { q: 'Ist dies eine Handelsplattform?', a: 'Nein. PTERI ist Infrastruktur, keine Börse.' },
          { q: 'Ist Datenschutz obligatorisch?', a: 'Nein. Datenschutz ist optional.' }
        ]
      }
    },
    es: {
      hero: {
        headline: 'Pagos Autocustodiados Asegurados por Autoridad',
        microcopy: 'Pagos asegurados por autoridad, no por intermediarios.',
        subheadline: 'PTERI permite pagos autocustodiados respaldados por autoridad criptográfica determinística: sin intermediarios, sin custodia, sin suposiciones de confianza.',
        clarification: 'Las transacciones se firman en la billetera y se hacen cumplir por la capa portadora de PTERI.'
      },
      useCases: {
        title: 'Casos de Uso de Pagos',
        items: [
          'Liquidación peer-to-peer',
          'Transferencias internas empresariales',
          'Pagos autorizados por API',
          'Movimiento de valor controlado por políticas',
          'Transacciones que preservan la privacidad'
        ]
      },
      fail: {
        title: 'Por qué Fallan los Pagos',
        subtitle: 'Los sistemas de pago no fallan por velocidad o rendimiento. Fallan por custodia, intermediarios y confianza con permisos. Cada intermediario introduce control, retrasos, congelaciones y vigilancia.',
      },
      outcome: {
        title: 'Pagos en PTERI',
        caption: 'Las transacciones se firman localmente. La autoridad se hace cumplir por la capa portadora. La liquidación es peer-to-peer. Kakr Labs nunca toma custodia.'
      },
      wallet: {
        title: 'Su Billetera autoriza el valor.',
        description: 'PTERI App firma pagos localmente. Las claves privadas nunca salen de su dispositivo. Usted es la única autoridad que puede mover fondos.',
        features: ['Las claves permanecen en el dispositivo', 'Firmado localmente', 'Sin custodia']
      },
      privacy: {
        title: 'Privacidad por Elección',
        description: 'PTERI admite controles de privacidad de transacciones regidos por políticas. La privacidad está disponible cuando se requiere y nunca se fuerza.',
        litecoinTitle: 'Construido sobre Litecoin',
        litecoinDesc: 'PTERI usa Litecoin para liquidación de grado de producción: seguridad Proof-of-Work, criptografía equivalente a Bitcoin, tiempo de actividad casi perfecto desde 2011, y una red global madura.'
      },
      stack: {
        title: 'Los Pagos son una Capacidad',
        caption: 'Capa de autoridad PTERI que habilita identidad, pagos, privacidad y delegación de IA.'
      },
      cta: {
        headline: 'Tome control de su transferencia de valor.',
        btnWallet: 'Descargar PTERI App',
        btnPlatform: 'Explorar Plataforma'
      },
      seo: {
        title: 'Pagos Autocustodiados Asegurados por Autoridad | Kakr Labs',
        description: 'PTERI permite pagos autocustodiados respaldados por autoridad criptográfica determinística: sin intermediarios, sin custodia, sin suposiciones de confianza.',
        image: '/payments-page-og.png'
      },
      faqs: {
        title: 'Preguntas Frecuentes sobre Pagos',
        items: [
          { q: '¿Los fondos están en custodia?', a: 'No. Todos los fondos permanecen bajo control del usuario.' },
          { q: '¿Es esto una plataforma de trading?', a: 'No. PTERI es infraestructura, no un intercambio.' },
          { q: '¿Es obligatoria la privacidad?', a: 'No. La privacidad es opcional.' }
        ]
      }
    },
    ja: {
      hero: {
        headline: '権限によって保護された自己管理型決済',
        microcopy: '仲介者ではなく、権限によって保護された決済。',
        subheadline: 'PTERIは、決定論的暗号学的権限に支えられた自己管理型決済を可能にします-仲介者なし、管理なし、信頼の仮定なし。',
        clarification: '取引はウォレットで署名され、PTERIキャリアレイヤーによって執行されます。'
      },
      useCases: {
        title: '決済のユースケース',
        items: [
          'ピアツーピア決済',
          '企業内部転送',
          'API認証決済',
          'ポリシー制御された価値移動',
          'プライバシー保護取引'
        ]
      },
      fail: {
        title: '決済が失敗する理由',
        subtitle: '決済システムは速度やスループットのために失敗するのではありません。管理、仲介者、許可された信頼のために失敗します。すべての仲介者は制御、遅延、凍結、監視を導入します。',
      },
      outcome: {
        title: 'PTERIでの決済',
        caption: '取引はローカルで署名されます。権限はキャリアレイヤーによって執行されます。決済はピアツーピアです。Kakr Labsは決して管理を行いません。'
      },
      wallet: {
        title: 'あなたのウォレットが価値を承認します。',
        description: 'PTERIアプリは決済をローカルで署名します。秘密鍵はあなたのデバイスを離れることはありません。あなたは資金を移動できる唯一の権限です。',
        features: ['鍵はデバイスに留まる', 'ローカルで署名', '管理なし']
      },
      privacy: {
        title: '選択によるプライバシー',
        description: 'PTERIは、ポリシーで制御されたプライバシー保護の取引コントロールをサポートします。プライバシーは必要な時に利用でき、決して強制されません。',
        litecoinTitle: 'Litecoinで構築',
        litecoinDesc: 'PTERIは本格的な決済にLitecoinを使用：Proof-of-Workセキュリティ、Bitcoin相当の暗号化、2011年以来のほぼ完璧な稼働時間、成熟したグローバルネットワーク。'
      },
      stack: {
        title: '決済は一つの機能',
        caption: 'アイデンティティ、決済、プライバシー、AI委任を可能にするPTERI権限レイヤー。'
      },
      cta: {
        headline: 'あなたの価値転送をコントロールしてください。',
        btnWallet: 'PTERIアプリをダウンロード',
        btnPlatform: 'プラットフォームを探索'
      },
      seo: {
        title: '権限によって保護された自己管理型決済 | Kakr Labs',
        description: 'PTERIは、決定論的暗号学的権限に支えられた自己管理型決済を可能にします-仲介者なし、管理なし、信頼の仮定なし。',
        image: '/payments-page-og.png'
      },
      faqs: {
        title: '決済FAQ',
        items: [
          { q: '資金は管理されていますか？', a: 'いいえ。すべての資金はユーザーの管理下にあります。' },
          { q: 'これは取引プラットフォームですか？', a: 'いいえ。PTERIはインフラストラクチャであり、取引所ではありません。' },
          { q: 'プライバシーは必須ですか？', a: 'いいえ。プライバシーはオプションです。' }
        ]
      }
    },
    ar: {
      hero: {
        headline: 'مدفوعات ذاتية الحفظ مؤمنة بالسلطة',
        microcopy: 'مدفوعات مؤمنة بالسلطة، وليس بالوسطاء.',
        subheadline: 'يمكّن PTERI المدفوعات ذاتية الحفظ المدعومة بسلطة تشفيرية حتمية - بدون وسطاء، بدون حفظ، بدون افتراضات ثقة.',
        clarification: 'يتم توقيع المعاملات في المحفظة وتطبيقها بواسطة الطبقة الحاملة لـ PTERI.'
      },
      useCases: {
        title: 'حالات استخدام المدفوعات',
        items: [
          'تسوية نظير إلى نظير',
          'التحويلات الداخلية للمؤسسات',
          'المدفوعات المصرح بها عبر API',
          'حركة القيمة المتحكم بها بالسياسات',
          'المعاملات التي تحافظ على الخصوصية'
        ]
      },
      fail: {
        title: 'لماذا تفشل المدفوعات',
        subtitle: 'أنظمة الدفع لا تفشل بسبب السرعة أو الإنتاجية. تفشل بسبب الحفظ والوسطاء والثقة المرخصة. كل وسيط يقدم السيطرة والتأخير والتجميد والمراقبة.',
      },
      outcome: {
        title: 'المدفوعات في PTERI',
        caption: 'يتم توقيع المعاملات محلياً. يتم فرض السلطة بواسطة الطبقة الحاملة. التسوية نظير إلى نظير. Kakr Labs لا تأخذ الحفظ أبداً.'
      },
      wallet: {
        title: 'محفظتك تصرح بالقيمة.',
        description: 'تطبيق PTERI يوقّع المدفوعات محلياً. المفاتيح الخاصة لا تغادر جهازك أبداً. أنت السلطة الوحيدة التي يمكنها تحريك الأموال.',
        features: ['المفاتيح تبقى على الجهاز', 'موقعة محلياً', 'بدون حفظ']
      },
      privacy: {
        title: 'الخصوصية بالاختيار',
        description: 'يدعم PTERI ضوابط خصوصية للمعاملات تخضع للسياسات. الخصوصية متاحة عند الحاجة ولا تُفرض أبداً.',
        litecoinTitle: 'مبني على Litecoin',
        litecoinDesc: 'يستخدم PTERI Litecoin للتسوية على مستوى الإنتاج: أمان Proof-of-Work، تشفير مكافئ لـ Bitcoin، وقت تشغيل مثالي تقريباً منذ 2011، وشبكة عالمية ناضجة.'
      },
      stack: {
        title: 'المدفوعات هي قدرة واحدة',
        caption: 'طبقة سلطة PTERI تمكن الهوية والمدفوعات والخصوصية وتفويض الذكاء الاصطناعي.'
      },
      cta: {
        headline: 'تحكم في نقل قيمتك.',
        btnWallet: 'تحميل تطبيق PTERI',
        btnPlatform: 'استكشاف المنصة'
      },
      seo: {
        title: 'مدفوعات ذاتية الحفظ مؤمنة بالسلطة | Kakr Labs',
        description: 'يمكّن PTERI المدفوعات ذاتية الحفظ المدعومة بسلطة تشفيرية حتمية - بدون وسطاء، بدون حفظ، بدون افتراضات ثقة.',
        image: '/payments-page-og.png'
      },
      faqs: {
        title: 'الأسئلة الشائعة حول المدفوعات',
        items: [
          { q: 'هل الأموال محفوظة؟', a: 'لا. جميع الأموال تبقى تحت سيطرة المستخدم.' },
          { q: 'هل هذه منصة تداول؟', a: 'لا. PTERI هو بنية تحتية، وليس بورصة.' },
          { q: 'هل الخصوصية إجبارية؟', a: 'لا. الخصوصية اختيارية.' }
        ]
      }
    }
  }
  const current = translations[locale.value] || translations.en
  const base = translations.en

  const mergeObjects = (baseObj, currentObj) => {
    if (!currentObj) return baseObj
    return { ...baseObj, ...currentObj }
  }

  const result = { ...base, ...current }

  const sections = [
    'hero', 'useCases', 'fail', 'paymentsAsOutcome', 'howPaymentsWork', 
    'selfCustodial', 'privacyByChoice', 'builtOnLitecoin', 'paymentsOptional', 
    'securityBoundaries', 'about', 'wallet', 'stack', 'cta', 'seo', 'faqs'
  ]

  sections.forEach(section => {
    result[section] = mergeObjects(base[section], current[section])
  })

  return result
})

// SEO
const { setSEO } = useSEO()

watchEffect(() => {
  setSEO({
    title: content.value.seo.title,
    description: content.value.seo.description,
    image: content.value.seo.image
  })
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-6 sm:px-8 lg:px-12;
}

/* Animations — compositor-only (transform only, no layout/paint) */
@keyframes mesh-float {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(20px, -20px); }
}
@keyframes mesh-float-delayed {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(-20px, 20px); }
}
.animate-mesh-float {
  will-change: transform;
  animation: mesh-float 10s ease-in-out infinite;
}
.animate-mesh-float-delayed {
  will-change: transform;
  animation: mesh-float-delayed 13s ease-in-out infinite;
}
</style>
