<template>
  <div class="min-h-screen bg-black bg-black text-white  font-sans selection:bg-green-600 selection:text-white">

    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <!-- Background elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100/50 border border-green-200 text-green-700 text-sm font-bold mb-8">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          SECURITY CENTER
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white ">
          Security at Kakr Labs
        </h1>
        
        <p class="text-lg md:text-xl text-white/70  mb-10 max-w-2xl mx-auto leading-relaxed">
          Security is not a feature; it's our foundation. As a <span class="text-green-600 font-semibold">Web3 security solutions provider</span>, we maintain the highest standards of data protection, infrastructure security, and smart contract integrity.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="https://kakrlabs1.statuspage.io/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-black border border-white/10  hover:border-green-300 text-white/90  rounded-lg font-semibold transition-all shadow-sm">
            <span class="text-green-500">●</span> View Live System Status
          </a>
        </div>

        <!-- Navigation Tabs (Visual) -->
        <div class="inline-flex flex-wrap justify-center gap-2 bg-black px-2 py-2 rounded-full border border-white/10  shadow-sm mx-auto max-w-full">
          <button v-for="tab in tabs" :key="tab" :class="[
            'px-4 py-1.5 rounded-full text-sm font-semibold transition-all',
            activeTab === tab ? 'bg-green-50 text-green-700' : 'text-white/50  hover:text-white '
          ]">
            {{ tab }}
          </button>
        </div>
      </div>
    </section>

    <!-- Core Security Pillars -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div class="flex items-center justify-center gap-3 mb-12">
        <span class="text-white  text-2xl">🛡️</span>
        <h2 class="text-2xl font-bold text-white ">Core Security Pillars</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Infrastructure -->
        <div class="bg-black p-8 rounded-2xl border border-white/10  shadow-sm hover:shadow-md transition-all">
          <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-green-600 text-2xl">
            ☁️
          </div>
          <h3 class="text-xl font-bold mb-3 text-white ">Infrastructure</h3>
          <p class="text-white/70  text-sm leading-relaxed">
            Container isolation using Kubernetes with multi-region redundancy. Current availability and incident history are published on our status page.
          </p>
        </div>

        <!-- Encryption -->
        <div class="bg-black p-8 rounded-2xl border border-white/10  shadow-sm hover:shadow-md transition-all">
          <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-green-600 text-2xl">
            🔒
          </div>
          <h3 class="text-xl font-bold mb-3 text-white ">Encryption</h3>
          <p class="text-white/70  text-sm leading-relaxed">
            All data is encrypted at rest using AES-256 and in transit via TLS 1.3. We utilize strict key management policies.
          </p>
        </div>

        <!-- Access Control -->
        <div class="bg-black p-8 rounded-2xl border border-white/10  shadow-sm hover:shadow-md transition-all">
          <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-green-600 text-2xl">
            🔑
          </div>
          <h3 class="text-xl font-bold mb-3 text-white ">Access Control</h3>
          <p class="text-white/70  text-sm leading-relaxed">
            Zero Trust architecture. Mandatory hardware MFA for all employees. Just-in-time access provisioning for production.
          </p>
        </div>
      </div>
    </section>

    <!-- App & Network Security -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Application Security -->
        <div>
          <div class="flex items-center gap-3 mb-8">
            <span class="bg-blue-100 text-blue-600 p-2 rounded-lg text-xl font-bold">&lt;/&gt;</span>
            <h3 class="text-2xl font-bold text-white ">Application Security</h3>
          </div>
          <div class="space-y-4">
            <div class="bg-black p-5 rounded-xl border border-white/10  flex gap-4">
              <div class="mt-1 text-blue-500">✔</div>
              <div>
                <h4 class="font-bold text-white  text-sm mb-1">Regular Penetration Testing</h4>
                <p class="text-xs text-white/50 ">Quarterly third-party audits by top firms.</p>
              </div>
            </div>
            <div class="bg-black p-5 rounded-xl border border-white/10  flex gap-4">
              <div class="mt-1 text-blue-500">✔</div>
              <div>
                <h4 class="font-bold text-white  text-sm mb-1">Automated SAST & DAST</h4>
                <p class="text-xs text-white/50 ">Integrated into every CI/CD pipeline commit.</p>
              </div>
            </div>
            <div class="bg-black p-5 rounded-xl border border-white/10  flex gap-4">
              <div class="mt-1 text-blue-500">✔</div>
              <div>
                <h4 class="font-bold text-white  text-sm mb-1">Smart Contract Audits</h4>
                <p class="text-xs text-white/50 ">Formal verification for all on-chain code.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Network Security -->
        <div>
          <div class="flex items-center gap-3 mb-8">
            <span class="bg-purple-100 text-purple-600 p-2 rounded-lg text-xl font-bold">❄️</span>
            <h3 class="text-2xl font-bold text-white ">Network Security</h3>
          </div>
          <div class="space-y-4">
            <div class="bg-black p-5 rounded-xl border border-white/10  flex gap-4">
              <div class="mt-1 text-purple-500">✔</div>
              <div>
                <h4 class="font-bold text-white  text-sm mb-1">DDoS Protection</h4>
                <p class="text-xs text-white/50 ">Enterprise-grade mitigation via Cloudflare.</p>
              </div>
            </div>
            <div class="bg-black p-5 rounded-xl border border-white/10  flex gap-4">
              <div class="mt-1 text-purple-500">✔</div>
              <div>
                <h4 class="font-bold text-white  text-sm mb-1">WAF Implementation</h4>
                <p class="text-xs text-white/50 ">Custom rule sets to block malicious traffic.</p>
              </div>
            </div>
            <div class="bg-black p-5 rounded-xl border border-white/10  flex gap-4">
              <div class="mt-1 text-purple-500">✔</div>
              <div>
                <h4 class="font-bold text-white  text-sm mb-1">24/7 SIEM Monitoring</h4>
                <p class="text-xs text-white/50 ">Real-time alerting on suspicious activities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="bg-black rounded-3xl border border-white/10  p-8 md:p-12 shadow-sm">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h3 class="text-2xl font-bold text-white  mb-2">Privacy & Data Protection</h3>
            <p class="text-white/70  max-w-xl">
              Our systems and processes are built around international security standards, with data protection requirements applied by default.
            </p>
          </div>
          <button class="px-6 py-2 bg-black border border-white/15 rounded-lg text-white/90  font-bold text-sm hover:border-slate-400 transition-all">
            Contact Security Team
          </button>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-black rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3">
            <div class="text-3xl text-white/60">🔒</div>
            <div>
              <div class="font-bold text-white ">GDPR</div>
              <span class="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold uppercase tracking-wide">Ready</span>
            </div>
          </div>
          <div class="bg-black rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3">
            <div class="text-3xl text-white/60">⚖️</div>
            <div>
              <div class="font-bold text-white ">CCPA</div>
              <span class="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold uppercase tracking-wide">Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Response & Recovery -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h3 class="text-2xl font-bold text-white  mb-8">Response & Recovery</h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-black p-8 rounded-2xl border border-white/10 ">
          <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600 text-xl">
            🚨
          </div>
          <h4 class="text-xl font-bold text-white  mb-3">Incident Response</h4>
          <p class="text-white/70  text-sm mb-6 leading-relaxed">
            Our dedicated security team is available 24/7/365. We maintain a comprehensive Incident Response Plan (IRP) that is tested and updated quarterly.
          </p>
        </div>
        <div class="bg-black p-8 rounded-2xl border border-white/10 ">
          <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600 text-xl">
            ☁️
          </div>
          <h4 class="text-xl font-bold text-white  mb-3">Disaster Recovery</h4>
          <p class="text-white/70  text-sm mb-6 leading-relaxed">
            We maintain encrypted off-site backups with strict retention policies. Our Business Continuity Plan ensures critical systems can be restored in under 4 hours.
          </p>
        </div>
      </div>
    </section>

    <!-- Responsible Disclosure -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
      <div class="bg-[#0f0f0f] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden group">
        <!-- Decoration -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0"></div>
        <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div class="relative z-10 max-w-2xl mx-auto">
          <div class="inline-flex items-center justify-center w-12 h-12 bg-slate-700 rounded-xl mb-6 text-green-400 text-2xl group-hover:scale-110 transition-transform">
            🛡️
          </div>
          <h2 class="text-3xl font-bold text-white mb-4">Responsible Disclosure</h2>
          <p class="text-white/60 mb-8 leading-relaxed">
            Found a vulnerability? We offer competitive bounties for security researchers who help us keep our platform safe. Your contribution helps protect the ecosystem.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:security@kakr.org" class="btn-primary">
              Submit a Report
            </a>
            <button class="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-all border border-slate-600">
              View PGP Key
            </button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead, useSeoMeta } from '#imports'

const activeTab = ref('Philosophy')
const tabs = ['Philosophy', 'Infrastructure', 'Encryption', 'Compliance', 'Response', 'Bug Bounty']

import { useSEO } from '~/composables/useSEO'

const { setSEO } = useSEO()

setSEO({
  title: 'Security Center - Kakr Labs',
  description: 'Kakr Labs Security Center. View our security philosophy, certifications, and infrastructure standards.'
})
</script>
