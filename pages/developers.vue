<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-slate-900 overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-900"></div>
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 bg-[url('/images/grid-pattern.svg')]"></div>
      </div>
      
      <div class="container-custom relative z-10 text-center text-white px-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
          <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span class="text-sm font-medium text-blue-300">Developer Portal</span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Build with <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">PTERI</span>
        </h1>
        <p class="text-xl sm:text-2xl text-gray-300 font-light mb-4">
          Identity, Authentication & Litecoin Infrastructure for Developers
        </p>
        <p class="text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Simple APIs, powerful SDKs, AI-assisted development, and a fully decentralized authentication layer. 
          Everything you need to integrate PTERI Authentication, Identity, IoT security, and Litecoin API access - in minutes.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://docs.kakr.ai" target="_blank" class="btn-primary flex items-center gap-2 px-8 py-3.5 text-lg rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all">
            Open Documentation
            <ArrowRightIcon class="w-5 h-5" />
          </a>
          <div class="flex gap-4">
            <a href="https://pteri.org/Register" target="_blank" class="px-6 py-3.5 text-base font-medium text-white bg-white dark:bg-dark-900/5 border border-white/10 rounded-full hover:bg-white dark:bg-dark-900/10 hover:border-white/20 transition-all backdrop-blur-sm">
              Get API Key
            </a>
            <a href="https://playground.pteri.org" target="_blank" class="px-6 py-3.5 text-base font-medium text-white bg-white dark:bg-dark-900/5 border border-white/10 rounded-full hover:bg-white dark:bg-dark-900/10 hover:border-white/20 transition-all backdrop-blur-sm">
              Launch Playground
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Start Section -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="container-custom px-6 max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-10 text-center">Quick Start</h2>
        
        <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-800">
          <div class="flex border-b border-slate-800 bg-slate-950 dark:bg-dark-950/50">
            <button 
              v-for="tab in tabs" 
              :key="tab"
              @click="activeTab = tab"
              class="px-6 py-4 text-sm font-medium transition-colors border-b-2"
              :class="activeTab === tab ? 'text-blue-400 border-blue-400 bg-slate-800/50' : 'text-gray-400 border-transparent hover:text-gray-200 hover:bg-slate-800/30'"
            >
              {{ tab }}
            </button>
          </div>
          
          <div class="p-8 font-mono text-sm overflow-x-auto bg-slate-900">
            <div v-if="activeTab === 'JavaScript'" class="space-y-8">
              <div>
                <div class="text-gray-500 mb-2"># 1. Install the SDK</div>
                <div class="text-emerald-400">npm install pteri-sdk</div>
              </div>
              <div>
                <div class="text-gray-500 mb-2"># 2. Authenticate a User</div>
                <div class="text-blue-300">const</div> <div class="text-white inline">res = </div><div class="text-purple-400 inline">await</div> <div class="text-white inline">pteri.auth.request({</div>
                <div class="pl-4 text-white">app: <span class="text-amber-300">"My App"</span>,</div>
                <div class="pl-4 text-white">action: <span class="text-amber-300">"login"</span></div>
                <div class="text-white">});</div>
              </div>
              <div>
                <div class="text-gray-500 mb-2"># 3. Call the Litecoin API</div>
                <div class="text-white">POST /v1/litecoin/getBalance</div>
                <div class="text-white">{</div>
                <div class="pl-4 text-white">"address": <span class="text-amber-300">"ltc1q..."</span></div>
                <div class="text-white">}</div>
              </div>
            </div>

            <div v-if="activeTab === 'Python'" class="space-y-8">
              <div>
                <div class="text-gray-500 mb-2"># 1. Install the SDK</div>
                <div class="text-emerald-400">pip install pteri</div>
              </div>
              <div>
                <div class="text-gray-500 mb-2"># 2. Authenticate a User</div>
                <div class="text-purple-400 inline">import</div> <div class="text-white inline">pteri</div>
                <div class="text-white mt-2">res = pteri.auth.request(</div>
                <div class="pl-4 text-white">app=<span class="text-amber-300">"My App"</span>,</div>
                <div class="pl-4 text-white">action=<span class="text-amber-300">"login"</span></div>
                <div class="text-white">)</div>
              </div>
            </div>

            <div v-if="activeTab === 'Dart'" class="space-y-8">
              <div>
                <div class="text-gray-500 mb-2"># 1. Install the SDK</div>
                <div class="text-emerald-400">flutter pub add pteri</div>
              </div>
              <div>
                <div class="text-gray-500 mb-2"># 2. Authenticate a User</div>
                 <div class="text-purple-400 inline">final</div> <div class="text-white inline">res = </div><div class="text-purple-400 inline">await</div> <div class="text-white inline">Pteri.auth.request(</div>
                 <div class="pl-4 text-white">app: <span class="text-amber-300">"My App"</span>,</div>
                 <div class="pl-4 text-white">action: <span class="text-amber-300">"login"</span></div>
                 <div class="text-white">);</div>
              </div>
            </div>

            <div v-if="activeTab === 'Swift'" class="space-y-8">
              <div>
                <div class="text-gray-500 mb-2"># 1. Install the SDK</div>
                <div class="text-purple-400">import</div> <div class="text-white inline">PTERI</div>
              </div>
              <div>
                 <div class="text-gray-500 mb-2"># 2. Authenticate a User</div>
                 <div class="text-purple-400 inline">let</div> <div class="text-white inline">res = </div><div class="text-purple-400 inline">try await</div> <div class="text-white inline">Pteri.auth.request(</div>
                 <div class="pl-4 text-white">app: <span class="text-amber-300">"My App"</span>,</div>
                 <div class="pl-4 text-white">action: <span class="text-amber-300">.login</span></div>
                 <div class="text-white">)</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-8 text-center">
          <a href="https://docs.kakr.ai/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 hover:underline">
            View Full Quickstart Guide <ArrowRightIcon class="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>

    <!-- 'What You Can Build' Grid -->
    <section class="py-20 bg-gray-50 border-t border-gray-200">
      <div class="container-custom px-6 max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">What You Can Build</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="bg-white dark:bg-dark-900 p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
              <component :is="feature.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
        <div class="mt-12 text-center">
            <a href="/api-hub" class="btn-secondary px-6 py-3 rounded-lg border border-gray-300 bg-white dark:bg-dark-900 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                Explore APIs →
            </a>
        </div>
      </div>
    </section>

    <!-- Documentation & Tools -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="container-custom px-6 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16">
            <!-- Docs Overview -->
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-8">Documentation Overview</h2>
                <div class="space-y-6">
                    <div v-for="doc in docs" :key="doc.title" class="flex gap-4 group">
                        <div class="mt-1 text-blue-500 group-hover:translate-x-1 transition-transform">→</div>
                        <div>
                            <h3 class="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{{ doc.title }}</h3>
                            <p class="text-gray-600 text-sm mt-1">{{ doc.desc }}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="https://docs.kakr.ai" target="_blank" class="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg">
                        Open Full Docs
                    </a>
                </div>
            </div>

            <!-- Tools -->
            <div>
                 <h2 class="text-3xl font-bold text-gray-900 mb-8">Tools for Developers</h2>
                 <div class="grid sm:grid-cols-2 gap-6">
                    <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div class="text-2xl mb-4">🔧</div>
                        <h3 class="font-bold text-gray-900 mb-2">API Keys</h3>
                         <p class="text-sm text-gray-600 mb-4">Generate keys instantly and manage access.</p>
                         <a href="https://pteri.org/" target="_blank" rel="noopener noreferrer" class="text-blue-600 text-sm font-semibold hover:underline">Go to Dashboard →</a>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div class="text-2xl mb-4">🧪</div>
                        <h3 class="font-bold text-gray-900 mb-2">PTERI Playground</h3>
                         <p class="text-sm text-gray-600 mb-4">Make real requests to the API without writing code.</p>
                         <a href="https://playground.pteri.org/" target="_blank" rel="noopener noreferrer" class="text-blue-600 text-sm font-semibold hover:underline">Launch Playground →</a>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 sm:col-span-2">
                        <div class="text-2xl mb-4"></div>
                        <h3 class="font-bold text-gray-900 mb-2">PTERI Intelligence (AI)</h3>
                         <p class="text-sm text-gray-600 mb-4">Ask questions, generate blockchain code, debug authentication flows.</p>
                         <a href="https://pteri.org/chat/pteri-intelligence" target="_blank" rel="noopener noreferrer" class="text-blue-600 text-sm font-semibold hover:underline">Try Intelligence →</a>
                    </div>
                 </div>

                 <!-- SDKs -->
                 <div class="mt-8">
                     <h3 class="font-bold text-gray-900 mb-4 text-lg">SDKs</h3>
                     <p class="text-gray-600 text-sm mb-4">Download SDKs for your preferred language.</p>
                     <div class="flex gap-4 flex-wrap text-sm text-gray-700 font-medium font-mono">
                         <span class="px-3 py-1 bg-gray-100 rounded border">JavaScript</span>
                         <span class="px-3 py-1 bg-gray-100 rounded border">Python</span>
                         <span class="px-3 py-1 bg-gray-100 rounded border">Dart</span>
                         <span class="px-3 py-1 bg-gray-100 rounded border">Swift</span>
                         <span class="px-3 py-1 bg-gray-100 rounded border opacity-50">Go (coming soon)</span>
                     </div>
                     <div class="mt-4">
                         <a href="https://docs.kakr.ai/docs/sdks-and-integration" target="_blank" rel="noopener noreferrer" class="text-blue-600 text-sm font-semibold hover:underline">View SDKs →</a>
                     </div>
                 </div>

                 <!-- Status -->
                 <div class="mt-8 pt-8 border-t border-gray-100">
                     <h3 class="font-bold text-gray-900 mb-2 text-lg">📈 Status & Uptime</h3>
                     <p class="text-gray-600 text-sm mb-2">Monitor API uptime, incidents, and performance.</p>
                     <a href="https://kakrlabs1.statuspage.io/" target="_blank" rel="noopener noreferrer" class="text-blue-600 text-sm font-semibold hover:underline">View Status →</a>
                 </div>
            </div>
        </div>
      </div>
    </section>
    
    <!-- Guides & Support -->
    <section class="py-20 bg-gray-50 border-t border-gray-200">
         <div class="container-custom px-6 max-w-7xl mx-auto">
             <div class="grid md:grid-cols-2 gap-12">
                 <div>
                     <h2 class="text-2xl font-bold text-gray-900 mb-6">Popular Developer Guides</h2>
                     <ul class="space-y-4">
                         <li v-for="guide in guides" :key="guide"><a href="https://docs.kakr.ai/" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-blue-600 hover:underline flex items-start gap-2"><span class="text-gray-400 mt-0.5">📄</span>{{ guide }}</a></li>
                     </ul>
                     <div class="mt-6">
                        <a href="https://docs.kakr.ai/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold hover:underline">See All Guides →</a>
                     </div>
                 </div>
                 <div class="bg-blue-50 border border-blue-100 p-8 rounded-2xl">
                     <h2 class="text-2xl font-bold text-gray-900 mb-4">Developer Support</h2>
                     <p class="text-gray-700 mb-6">If you need help integrating PTERI:</p>
                     <div class="space-y-3 mb-8">
                         <div class="flex items-center gap-3">
                             <span class="text-xl">📩</span>
                             <span class="font-mono text-sm text-blue-900">devsupport@kakr.org</span>
                         </div>
                         <div class="flex items-center gap-3">
                            <span class="text-xl">🔗</span>
                             <a href="https://support.kakr.ai" class="text-blue-600 hover:underline">Support Portal</a>
                         </div>
                     </div>
                     <p class="text-sm text-gray-500 mb-4">For fastest answers → open a support ticket.</p>
                     <a href="https://support.kakr.ai" class="btn-primary w-full justify-center py-3 rounded-lg shadow-sm">Open Support Portal →</a>
                 </div>
             </div>
         </div>
    </section>

    <!-- Final CTA -->
     <section class="py-20 bg-slate-900 text-center px-6">
         <div class="max-w-3xl mx-auto">
             <h2 class="text-3xl font-bold text-white mb-6">Ready to Build?</h2>
             <p class="text-xl text-gray-300 mb-10">Start integrating PTERI today.<br/>Authentication, Identity, IoT Security & Litecoin Infrastructure - in minutes.</p>
             <div class="flex flex-wrap justify-center gap-4">
                 <a href="https://pteri.org/Register" target="_blank" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors">Get API Key</a>
                 <a href="https://docs.kakr.ai" class="px-8 py-3 bg-white dark:bg-dark-900/10 hover:bg-white dark:bg-dark-900/20 text-white font-semibold rounded-full transition-colors border border-white/10">Open Docs</a>
                 <a href="https://playground.pteri.org" target="_blank" class="px-8 py-3 bg-white dark:bg-dark-900/10 hover:bg-white dark:bg-dark-900/20 text-white font-semibold rounded-full transition-colors border border-white/10">Launch Playground</a>
             </div>
         </div>
     </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '#imports'
import { 
  ArrowRightIcon, 
  LockClosedIcon, 
  IdentificationIcon, 
  ServerStackIcon, 
  SignalIcon, 
  SparklesIcon, 
  BeakerIcon 
} from '@heroicons/vue/24/outline'

const { setSEO } = useSEO()

setSEO({
  title: 'Developer Platform - Web3 APIs, SDKs & Documentation | Kakr Labs',
  description: 'Build on Kakr Labs Web3 infrastructure. Access comprehensive APIs, SDKs, documentation, and tools for blockchain development on Litecoin.',
  image: '/og/og-developers.png',
  keywords: ['web3 developer', 'blockchain api', 'litecoin sdk', 'developer tools', 'kakr labs api', 'pteri sdk'],
  robots: 'noindex, follow'
})

const activeTab = ref('JavaScript')
const tabs = ['JavaScript', 'Python', 'Dart', 'Swift']

const features = [
  { 
    title: 'Authentication', 
    desc: 'Passwordless login & decentralized 2FA using PTERI Authentication.',
    icon: LockClosedIcon
  },
  { 
    title: '🆔 Identity', 
    desc: 'Device-based identity & message signing using PTERI App.',
    icon: IdentificationIcon
  },
  { 
    title: 'Blockchain Infrastructure', 
    desc: 'Litecoin RPC, transaction broadcasting, block data, address tools.',
    icon: ServerStackIcon
  },
  { 
    title: '📡 IoT Device Security', 
    desc: 'Register devices, verify firmware, manage device identity & authentication.',
    icon: SignalIcon
  },
  { 
    title: 'AI Development Tools', 
    desc: 'Use PTERI Intelligence to auto-generate code, debug RPC errors, and build faster.',
    icon: SparklesIcon
  },
  { 
    title: '🧪 Playground', 
    desc: 'Test endpoints instantly - no setup required.',
    icon: BeakerIcon
  },
]

const docs = [
    { title: 'PTERI Authentication', desc: 'Implement decentralized 2FA and passwordless login.' },
    { title: 'Identity & Message Signing', desc: 'Use the PTERI App for login approval and identity verification.' },
    { title: 'Litecoin RPC / API Reference', desc: 'Query balances, mempool, blocks, transactions, keys, and more.' },
    { title: 'IoT Device Identity', desc: 'Provision devices, sign firmware, authenticate hardware.' },
    { title: 'PTERI Intelligence', desc: 'Use AI to generate and debug code.' },
    { title: 'SDK Reference', desc: 'Install & use SDKs for JS, Python, Dart, and Swift.' },
    { title: 'Tutorials & Quickstarts', desc: 'Step-by-step guides for common integrations.' },
    { title: 'Troubleshooting / Error Codes', desc: 'Clear explanations for every possible response.' },
]

const guides = [
    'How to Implement PTERI Authentication',
    'Passwordless Login with PTERI App',
    'Build a Litecoin Transaction Flow',
    'Using PTERI AI to Build RPC Calls',
    'Onboarding IoT Devices',
    'API Testing Tools',
    'Integrating PTERI into React / Flutter Apps'
]
</script>

<style scoped>
.container-custom {
    @apply max-w-7xl mx-auto;
}
.btn-primary {
   @apply bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors;
}
</style>

