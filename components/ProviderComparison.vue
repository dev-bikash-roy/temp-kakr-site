<template>
  <section class="section-py bg-white relative overflow-hidden" id="comparison">
    <!-- Background Decoration -->
    <div class="absolute inset-0 pointer-events-none">
       <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-50"></div>
    </div>

    <div class="container-custom relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">
          Why Choose Kakr Labs
        </h2>
        <h3 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          {{ translations.title }}
        </h3>
        <p class="text-xl text-slate-600 leading-relaxed">
          {{ translations.description }}
        </p>
      </div>

      <!-- Hosting-Style Comparison Table -->
      <div class="relative overflow-x-auto lg:overflow-visible">
        <div class="min-w-[1000px] lg:min-w-0">
          
          <!-- Table Grid -->
          <div class="grid grid-cols-5 gap-0">
            
            <!-- Column 1: Feature Labels (Sticky/Fixed on desktop visual flow) -->
            <div class="col-span-1 pt-40 pb-8 flex flex-col justify-end px-6 border-b border-t border-transparent">
               <!-- Spacer for alignment -->
            </div>

            <!-- Column 2: Kakr Labs (Highlighted) -->
            <div class="col-span-1 relative">
               <!-- Highlight/Badge -->
               <div class="absolute top-0 left-0 right-0 h-2 bg-emerald-500 rounded-t-xl"></div>
               <div class="bg-slate-900 text-white rounded-t-xl shadow-2xl pb-8 px-6 pt-10 text-center relative overflow-hidden">
                  <div class="absolute top-4 right-4 text-xs font-bold bg-emerald-500 text-slate-900 px-2 py-1 rounded">
                    RECOMMENDED
                  </div>
                  <h4 class="text-xl font-bold mb-2">Kakr Labs</h4>
                  <p class="text-slate-400 text-sm mb-4">(Litecoin)</p>
                  <div class="text-3xl font-bold text-emerald-400 mb-1">Proof</div>
                  <div class="text-sm text-slate-400">Deterministic Security</div>
               </div>
            </div>

            <!-- Column 3: Auth0 / Okta -->
            <div class="col-span-1 pt-10 px-6 pb-8 text-center border-b border-slate-200 bg-white">
               <h4 class="text-lg font-bold text-slate-900 mb-2">Auth0 / Okta</h4>
               <p class="text-slate-500 text-sm mb-4">Traditional Identity</p>
               <div class="text-2xl font-bold text-slate-700 mb-1">Guess</div>
               <div class="text-sm text-slate-500">Probabilistic</div>
            </div>

            <!-- Column 4: Ethereum / Solana -->
            <div class="col-span-1 pt-10 px-6 pb-8 text-center border-b border-slate-200 bg-slate-50/50">
               <h4 class="text-lg font-bold text-slate-900 mb-2">Eth / Sol</h4>
               <p class="text-slate-500 text-sm mb-4">Smart Contracts</p>
               <div class="text-2xl font-bold text-slate-700 mb-1">Risk</div>
               <div class="text-sm text-slate-500">Variable Security</div>
            </div>

             <!-- Column 5: Other Wallets -->
            <div class="col-span-1 pt-10 px-6 pb-8 text-center border-b border-slate-200 bg-white">
               <h4 class="text-lg font-bold text-slate-900 mb-2">Others</h4>
               <p class="text-slate-500 text-sm mb-4">Generic Infrastructure</p>
               <div class="text-2xl font-bold text-slate-700 mb-1">Varies</div>
               <div class="text-sm text-slate-500">Inconsistent</div>
            </div>

          </div>

          <!-- Rows -->
          <div v-for="(row, index) in rows" :key="index" class="grid grid-cols-5 gap-0 group hover:bg-slate-50 transition-colors">
             
             <!-- Feature Name -->
             <div class="col-span-1 py-6 px-6 flex items-center border-b border-slate-200">
                <span class="font-semibold text-slate-900">{{ row.feature }}</span>
             </div>

             <!-- Kakr Labs Value -->
             <div class="col-span-1 py-6 px-6 flex items-center justify-center text-center border-b border-slate-700 bg-slate-900 border-l border-r border-slate-800">
                <span class="text-slate-200 font-medium text-sm leading-relaxed">
                   <div v-if="index === 0" class="mb-2 text-emerald-400">
                      <CheckCircleIcon class="w-6 h-6 mx-auto" />
                   </div>
                   {{ row.values[0] }}
                </span>
             </div>

             <!-- Auth0 Value -->
             <div class="col-span-1 py-6 px-4 flex items-center justify-center text-center border-b border-slate-200 bg-white">
                <span class="text-slate-600 text-sm leading-relaxed">{{ row.values[1] }}</span>
             </div>

             <!-- Eth Value -->
             <div class="col-span-1 py-6 px-4 flex items-center justify-center text-center border-b border-slate-200 bg-slate-50/50">
                <span class="text-slate-600 text-sm leading-relaxed">{{ row.values[2] }}</span>
             </div>

             <!-- Other Value -->
             <div class="col-span-1 py-6 px-4 flex items-center justify-center text-center border-b border-slate-200 bg-white">
                <span class="text-slate-600 text-sm leading-relaxed">{{ row.values[3] }}</span>
             </div>

          </div>

          <!-- Footer Row for the Highlighted Column -->
          <div class="grid grid-cols-5 gap-0">
             <div class="col-span-1"></div>
             <div class="col-span-1 bg-slate-900 rounded-b-xl h-4 mb-4 shadow-xl"></div>
             <div class="col-span-1"></div>
             <div class="col-span-1"></div>
             <div class="col-span-1"></div>
          </div>
          
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

const { locale } = useI18n()

const translations = computed(() => {
  const texts: any = {
    en: {
      title: 'The Trust Layer Difference',
      description: 'Moving from probabilistic security to verifiable authorization.',
      
      // Row Headers
      authentication: 'Authentication',
      infrastructure: 'Infrastructure',
      blockchainBase: 'Blockchain Base',
      regulatoryClarity: 'Regulatory Clarity',
      privacyOptions: 'Privacy Options',
      scalability: 'Scalability',
      businessModel: 'Business Model',
      trustModel: 'Trust Model',
      
      // Values (Kakr)
      walletApproved2fa: 'Wallet-approved 2FA & passwordless sign-in',
      closedSourceEnterprise: 'Enterprise-grade Verification Infrastructure APIs',
      litecoinMostUtilized: 'Litecoin (most utilized, Bitcoin-identical)',
      commodityStatus: 'Commodity status, globally recognized',
      mwebConfidential: 'Customer-controlled payment credentials (policy-gated)',
      globalNodes: 'Global nodes, API-first, enterprise SLAs',
      noTokens: 'No tokens, no gimmicks, service-first',
      userControlled: 'User-controlled keys, no data warehousing',

      // Values (Traditional)
      centralizedEmailSms: 'Centralized email/SMS OTP',
      proprietaryCloud: 'Proprietary cloud, subscription-based',
      naCentralizedSaaS: 'N/A (centralized SaaS)',
      dependsOnRegion: 'Depends on region',
      none: 'None',
      highCentralized: 'High but centralized',
      saasFees: 'SaaS fees, data risk',
      centralizedStorage: 'Centralized storage of user creds',

      // Values (Chains)
      smartContracts: 'Smart contracts, token-based',
      publicNodes: 'Public nodes, variable infra',
      ethereumSolanaTokens: 'Ethereum/Solana (tokens, contracts)',
      uncertainTokens: 'Uncertain, tokens under scrutiny',
      publicByDefault: 'Public by default',
      highTpsUnstable: 'High TPS but unstable/reg risks',
      tokenBased: 'Token-based economics',
      tokenCustody: 'Token custody / smart contracts',

      // Values (Wallets)
      basicWallets: 'Basic wallets, often centralized',
      mixedQuality: 'Mixed quality, often unreliable',
      varies: 'Varies',
      unclear: 'Unclear',
      limited: 'Limited',
      inconsistent: 'Inconsistent',
      variesBm: 'Varies',
      mixed: 'Mixed'
    }
  }
  return texts[locale.value] || texts.en
})

const rows = computed(() => [
  { 
    feature: translations.value.authentication, 
    values: [
      translations.value.walletApproved2fa,
      translations.value.centralizedEmailSms,
      translations.value.smartContracts,
      translations.value.basicWallets
    ]
  },
  { 
    feature: translations.value.infrastructure, 
    values: [
      translations.value.closedSourceEnterprise,
      translations.value.proprietaryCloud,
      translations.value.publicNodes,
      translations.value.mixedQuality
    ]
  },
  { 
    feature: translations.value.blockchainBase, 
    values: [
      translations.value.litecoinMostUtilized,
      translations.value.naCentralizedSaaS,
      translations.value.ethereumSolanaTokens,
      translations.value.varies
    ]
  },
  { 
    feature: translations.value.regulatoryClarity, 
    values: [
      translations.value.commodityStatus,
      translations.value.dependsOnRegion,
      translations.value.uncertainTokens,
      translations.value.unclear
    ]
  },
  { 
    feature: translations.value.privacyOptions, 
    values: [
      translations.value.mwebConfidential,
      translations.value.none,
      translations.value.publicByDefault,
      translations.value.limited
    ]
  },
  { 
    feature: translations.value.scalability, 
    values: [
      translations.value.globalNodes,
      translations.value.highCentralized,
      translations.value.highTpsUnstable,
      translations.value.inconsistent
    ]
  },
  { 
    feature: translations.value.businessModel, 
    values: [
      translations.value.noTokens,
      translations.value.saasFees,
      translations.value.tokenBased,
      translations.value.variesBm
    ]
  },
  { 
    feature: translations.value.trustModel, 
    values: [
      translations.value.userControlled,
      translations.value.centralizedStorage,
      translations.value.tokenCustody,
      translations.value.mixed
    ]
  }
])
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
