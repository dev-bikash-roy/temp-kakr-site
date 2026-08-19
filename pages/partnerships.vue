<template>
  <div class="min-h-screen bg-black text-white/85 pb-12 font-inter">
    <!-- Header/Hero -->
    <section class="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
      <!-- Background Decorations -->
      <div class="absolute inset-0 pointer-events-none z-0" style="background-image: url('/hero-bg.svg'); background-size: cover; background-position: top center; opacity: 0.15;"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"data-aos="fade-up">
        <div class="flex justify-end items-center mb-16">
          <div class="px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-white bg-white/5 tracking-wide uppercase">
            Partnerships
          </div>
        </div>
        
        <div class="text-center max-w-4xl mx-auto"data-aos="fade-up">
          <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            {{ content.hero.title }}<br>
            {{ content.hero.subtitle }}
          </h1>
          <p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mt-8">
            {{ content.hero.description }}
          </p>
          <p class="text-sm text-emerald-500 mt-4">{{ content.hero.tagline }}</p>
        </div>

        <!-- Partner logos infinite carousel -->
        <div class="mt-16 relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
          <!-- fade edges -->
          <div class="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style="background: linear-gradient(to right, #000 0%, transparent 100%);"></div>
          <div class="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style="background: linear-gradient(to left, #000 0%, transparent 100%);"></div>

          <div class="partner-track">
            <!-- duplicated for seamless loop -->
            <div class="partner-logos" v-for="n in 2" :key="n">
              <div class="partner-logo-item">
                <img src="/google-partner-new-logo.jpg" alt="Google for Startups" class="h-14 w-auto object-contain" />
              </div>
              <div class="partner-logo-item">
                <img src="/google-cloud.png" alt="Google Cloud" class="h-11 w-auto object-contain" />
              </div>
              <div class="partner-logo-item">
                <img src="/gemini-partner.png" alt="Google Gemini" class="h-12 w-auto object-contain" />
              </div>
              <div class="partner-logo-item">
                <img src="/images/litecoin-partner.png" alt="Litecoin" class="h-14 w-auto object-contain" />
              </div>
              <div class="partner-logo-item">
                <img src="/images/ibm-partner-logo.png" alt="IBM Partner Plus" class="h-14 w-auto object-contain" />
              </div>
              <div class="partner-logo-item">
                <img src="/images/microsoft-startups.png" alt="Microsoft for Startups" class="h-12 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Grid Content -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        <!-- Philosophy -->
        <div class="bg-[#0f0f0f] rounded-[2rem] p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-colors" data-aos="fade-up" data-aos-delay="0">
           <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6 keep-size">{{ content.philosophy.title }}</h2>
           <p class="text-white/75 text-sm leading-relaxed mb-4">{{ content.philosophy.subtitle }}</p>
           <ul class="space-y-4 mb-8">
             <li v-for="(item, i) in content.philosophy.items" :key="item" class="flex gap-4 items-center bg-white/5 border border-white/5 rounded-xl p-4" :data-aos="'fade-right'" :data-aos-delay="i * 60">
               <i class="las la-check-circle text-emerald-500 text-xl shrink-0"></i> 
               <span class="text-white text-sm font-bold">{{ item }}</span>
             </li>
           </ul>
           <p class="text-white/50 text-xs italic border-t border-white/5 pt-4">{{ content.philosophy.bottom }}</p>
        </div>

        <!-- Blockchain Foundation (Litecoin) -->
        <div class="bg-[#0f0f0f] rounded-[2rem] p-8 sm:p-10 border border-emerald-500/10 hover:border-emerald-500/20 transition-colors group" data-aos="fade-up" data-aos-delay="100">
           <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6 keep-size flex items-center gap-3"><i class="las la-cube text-emerald-400 text-3xl group-hover:scale-110 transition-transform"></i> {{ content.blockchain.title }}</h2>
           
           <div class="flex items-center gap-6 mb-8 mt-4">
             <div class="w-20 h-20 rounded-2xl bg-white flex items-center justify-center p-4 shadow-lg"><img src="/images/litecoin-partner.png" class="w-full h-full object-contain" /></div>
             <div>
               <h3 class="text-2xl text-white font-bold">{{ content.blockchain.ltc.name }}</h3>
               <p class="text-emerald-500 text-base font-medium">{{ content.blockchain.ltc.label }}</p>
             </div>
           </div>

           <p class="text-white/75 text-sm leading-relaxed mb-6">{{ content.blockchain.ltc.desc }}</p>
           
           <ul class="space-y-3 mb-8">
             <li v-for="(item, i) in content.blockchain.ltc.list" :key="item" class="flex gap-3 text-sm text-white/75" :data-aos="'fade-left'" :data-aos-delay="i * 50"><i class="las la-check text-emerald-500 mt-0.5"></i> <span>{{ item }}</span></li>
           </ul>
           
           <div class="bg-white/5 border border-white/5 rounded-xl p-4">
             <span class="text-white text-sm font-bold block mb-3">{{ content.blockchain.ltc.boxTitle }}</span>
             <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
               <div v-for="item in content.blockchain.ltc.boxList" :key="item" class="text-xs text-white/75 flex items-center gap-2"><i class="las la-dot-circle text-white/30 text-[10px]"></i> {{ item }}</div>
             </div>
           </div>
        </div>

        <!-- Cloud & Infrastructure -->
        <div class="bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[2rem] p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-colors shadow-2xl relative overflow-hidden md:row-span-2 border-l-4 border-l-emerald-500/50" data-aos="fade-right" data-aos-delay="0">
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-8 keep-size">{{ content.cloud.title }}</h2>
            
            <div class="mb-10">
              <div class="flex items-center gap-5 mb-6">
                <div class="h-16 w-auto bg-white rounded-xl px-4 py-2 flex items-center justify-center"><img src="/google-partner-new-logo.jpg" class="h-full w-full object-contain" /></div>
                <div>
                  <h3 class="text-2xl font-bold text-white">{{ content.cloud.gfs.name }}</h3>
                  <div class="text-sm font-medium text-emerald-500">{{ content.cloud.gfs.label }}</div>
                </div>
              </div>

              <p class="text-sm text-white/75 mb-4">{{ content.cloud.gfs.desc1 }}</p>
              <p class="text-sm text-white/75 mb-6">{{ content.cloud.gfs.desc2 }}</p>
              
              <ul class="space-y-4 mb-6">
                <li v-for="(item, i) in content.cloud.gfs.list" :key="item" class="flex gap-4" :data-aos="'fade-right'" :data-aos-delay="i * 60">
                  <div class="w-6 h-6 rounded bg-black border border-white/10 flex items-center justify-center shrink-0"><i class="las la-cloud text-emerald-400 text-xs"></i></div>
                  <p class="text-sm text-white/85">{{ item }}</p>
                </li>
              </ul>
              
              <div class="bg-white/5 p-5 rounded-xl border border-white/5 mt-6">
                 <p class="text-white text-sm font-bold mb-3">{{ content.cloud.gfs.boxTitle }}</p>
                 <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   <div v-for="prod in content.cloud.gfs.boxList" :key="prod" class="text-xs text-white/75 flex items-center gap-2"><i class="las la-cube border border-white/10 rounded p-0.5 text-white/50"></i> {{ prod }}</div>
                 </div>
              </div>
            </div>

            <div class="pt-8 border-t border-white/5">
              <div class="flex items-center gap-4 mb-6">
                <div class="h-14 bg-white rounded-xl px-3 py-2 flex items-center justify-center"><img src="/google-cloud.png" class="h-full object-contain" /></div>
                <div>
                  <h3 class="text-xl font-bold text-white">{{ content.cloud.gcp.name }}</h3>
                  <div class="text-xs text-white/60">{{ content.cloud.gcp.label }}</div>
                </div>
              </div>

              <p class="text-sm text-white/75 mb-6">{{ content.cloud.gcp.desc }}</p>
              
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <li v-for="(item, i) in content.cloud.gcp.list" :key="item" class="flex gap-2" :data-aos="'fade-up'" :data-aos-delay="i * 50">
                  <i class="las la-check text-emerald-400 text-sm mt-0.5"></i>
                  <p class="text-xs text-white/75">{{ item }}</p>
                </li>
              </ul>
              
              <div class="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4 mt-4">
                <p class="text-emerald-400 text-xs italic font-medium">"{{ content.cloud.gcp.quote }}"</p>
              </div>
            </div>
        </div>

        <!-- AI & Intelligence -->
        <div class="bg-[#0f0f0f] rounded-[2rem] p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-colors" data-aos="fade-left" data-aos-delay="100">
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6 keep-size">{{ content.ai.title }}</h2>
            
            <div class="flex items-center gap-5 mb-6">
              <div class="h-16 w-auto bg-white rounded-xl px-4 py-3 flex items-center justify-center"><img src="/gemini-partner.png" class="h-full object-contain" /></div>
              <div>
                <h3 class="text-2xl text-white font-bold">{{ content.ai.gemini.name }}</h3>
                <p class="text-white/60 text-sm font-medium">{{ content.ai.gemini.label }}</p>
              </div>
            </div>

            <p class="text-white/75 text-sm leading-relaxed mb-6">{{ content.ai.gemini.desc }}</p>
            
            <p class="text-white text-sm font-bold mb-3">{{ content.ai.gemini.listTitle }}</p>
            <ul class="space-y-3 mb-6 bg-white/5 rounded-xl p-4 border border-white/5">
              <li v-for="(item, i) in content.ai.gemini.list" :key="item" class="flex items-start gap-3 text-sm text-white/75" :data-aos="'fade-left'" :data-aos-delay="i * 60"><i class="las la-brain text-emerald-500 mt-0.5 text-lg"></i> {{ item }}</li>
            </ul>
            
            <p class="text-white/50 text-xs italic">"{{ content.ai.gemini.quote }}"</p>
        </div>


        <!-- App Development Stack -->
        <div class="bg-[#0f0f0f] rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors flex flex-col relative overflow-hidden" data-aos="fade-up" data-aos-delay="100" style="padding: 2rem 2rem 0 2rem;">
            <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6 keep-size">{{ content.stack.title }}</h2>
            
            <div class="flex items-center gap-5 mb-6">
               <div class="w-16 h-16 rounded-xl bg-blue-50/10 flex items-center justify-center p-3"><img src="https://images.icon-icons.com/2108/PNG/512/flutter_icon_130936.png" class="w-full h-full object-contain" /></div>
               <div>
                 <h3 class="text-xl text-white font-bold">Flutter</h3>
                 <p class="text-white/50 text-sm">{{ content.stack.flutter.label }}</p>
               </div>
            </div>
            
            <p class="text-white/75 text-sm leading-relaxed mb-6">{{ content.stack.flutter.desc }}</p>
            
            <ul class="space-y-3 mb-8 pb-4 border-b border-white/5">
              <li v-for="(item, i) in content.stack.flutter.list" :key="item" class="flex items-start gap-3 text-sm text-white/75" :data-aos="'fade-right'" :data-aos-delay="i * 60">
                <div class="w-6 h-6 rounded bg-black border border-white/10 flex items-center justify-center shrink-0 mt-0.5"><i class="las la-layer-group text-blue-400 text-xs"></i></div>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="mt-auto" data-aos="zoom-in" data-aos-delay="200" style="display: flex; justify-content: flex-end; align-items: flex-end;">
              <img src="/flatter-img.png" alt="PTERI Flutter App Development"
                style="height: 260px; width: auto; object-fit: contain; display: block; filter: drop-shadow(0 8px 24px rgba(16,185,129,0.25));" />
            </div>
        </div>
        
        <!-- What This Means -->
        <div class="md:col-span-2 bg-gradient-to-br from-[#121212] to-[#0a0f12] rounded-[2rem] p-8 sm:p-12 border border-white/5 hover:border-white/10 transition-colors text-center relative overflow-hidden group" data-aos="fade-up" data-aos-delay="0">
           <div class="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
           <div class="absolute inset-0 bg-emerald-500/[0.02] group-hover:bg-emerald-500/[0.04] transition-colors z-0"></div>
           <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10" data-aos="fade-up" data-aos-delay="50">{{ content.means.title }}</h2>
           <p class="text-white/75 text-sm mb-8 relative z-10" data-aos="fade-up" data-aos-delay="100">{{ content.means.subtitle }}</p>
           
           <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 relative z-10 text-left">
             <div v-for="(item, i) in content.means.items" :key="i" class="bg-white/5 border border-white/5 rounded-xl p-4" :data-aos="'zoom-in'" :data-aos-delay="i * 80">
               <span class="text-white text-sm font-bold block mb-1">{{ item.title }}</span>
               <span class="text-xs text-emerald-500">{{ item.sub }}</span>
             </div>
           </div>
           
           <p class="text-lg sm:text-xl text-white/85 mx-auto leading-relaxed relative z-10 font-medium" data-aos="fade-up" data-aos-delay="200">
             {{ content.means.punchline }}
           </p>
        </div>

      </div>
    </div>

    <!-- CTA -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
       <div class="bg-[#0f0f0f] p-12 rounded-[2rem] border border-white/5 text-center relative overflow-hidden shadow-2xl" data-aos="fade-up">
          <div class="absolute top-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
          
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10" data-aos="fade-up" data-aos-delay="50">{{ content.cta.title }}</h2>
          <p class="text-xl text-white/75 mb-8 relative z-10" data-aos="fade-up" data-aos-delay="100">{{ content.cta.subtitle }}</p>
          
          <div class="flex flex-wrap justify-center gap-3 mb-10 relative z-10">
            <span v-for="(tag, i) in content.cta.tags" :key="tag" class="px-5 py-2 bg-white/5 rounded-full text-sm font-medium text-white/85 border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-default" :data-aos="'fade-up'" :data-aos-delay="i * 60">{{ tag }}</span>
          </div>

          <p class="text-sm sm:text-base text-white/75 mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="150">{{ content.cta.text }}</p>

          <div class="flex justify-center gap-4 flex-wrap relative z-10" data-aos="fade-up" data-aos-delay="200">
             <a href="mailto:contact@kakr.ai" class="px-8 py-3.5 rounded-xl font-bold text-sm text-black bg-white hover:bg-slate-200 transition-colors shadow-lg flex items-center gap-2">
               {{ content.cta.btn1 }} <i class="las la-envelope text-lg"></i>
             </a>
             <a href="/contact?intent=partnership" class="btn-primary">
               {{ content.cta.btn2 }}
             </a>
          </div>
       </div>
    </section></div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()

const content = computed(() => {
  const translations = {
    en: {
      hero: {
        title: 'Partnerships &',
        subtitle: 'Infrastructure Ecosystem',
        tagline: 'Built With Trusted Infrastructure. Designed for the Long Term.',
        description: 'Kakr Labs partners with leading cloud, AI, and enterprise technology providers to deliver secure, scalable, and verifiable infrastructure for identity, authentication, and settlement.',
        note: 'Our partnerships are not marketing badges - they are operational layers in our production stack.'
      },
      philosophy: {
        title: 'Our Partnership Philosophy',
        subtitle: 'We partner only where it strengthens:',
        items: ['Infrastructure Reliability', 'Security Guarantees', 'Enterprise Readiness', 'Long-term Sustainability', 'Regulatory Clarity'],
        bottom: 'Every partner listed below plays a real role in how Kakr Labs operates today.'
      },
      cloud: {
        title: 'Cloud & Infrastructure Partners',
        gfs: {
            name: 'Google for Startups',
            label: 'Primary Partner - June 2025 – Present',
            desc1: 'Google for Startups is Kakr Labs\' primary ecosystem and infrastructure partner.',
            desc2: 'Through this partnership, Kakr Labs runs its production infrastructure on Google Cloud, enabling:',
            list: ['Multi-zone, highly available deployments', 'Cloud Run–based scaling for PTERI services', 'Hardened VPC networking', 'Enterprise-grade encryption and IAM', 'Global low-latency access'],
            boxTitle: 'This partnership supports all core PTERI products:',
            boxList: ['PTERI Authentication', 'PTERI BaaS (blockchain infrastructure APIs)', 'PTERI Identity', 'PTERI IoT Security', 'Developer APIs and dashboards']
        },
        gcp: {
            name: 'Google Cloud Platform (GCP)',
            label: 'Current Production Infrastructure',
            desc: 'All Kakr Labs backend services are deployed on Google Cloud, ensuring:',
            list: ['Predictable scaling under load', 'Fault tolerance across regions', 'Strong isolation between workloads', 'Operational transparency'],
            quote: 'Google Cloud is the execution layer for Kakr Labs\' decentralized trust architecture.'
        }
      },
      ai: {
        title: 'AI & Intelligence Partners',
        gemini: {
            name: 'Google Gemini (2.5 & 3)',
            label: 'AI Infrastructure for PTERI Intelligence',
            desc: 'Kakr Labs uses Gemini 2.5 and Gemini 3 to power PTERI Intelligence, our AI layer for developers and enterprises.',
            listTitle: 'Gemini enables:',
            list: ['AI-assisted authentication workflows', 'Code generation for blockchain & identity APIs', 'Debugging and observability tooling', 'AI agent enablement and orchestration'],
            quote: 'This AI layer is deeply integrated into the PTERI platform and is designed to support the AI Agent Economy securely.'
        }
      },
      enterprise: {
        title: 'Enterprise & Technology Ecosystem',
        ibm: {
            name: 'IBM Partner Plus',
            label: 'March 2025 – June 2025',
            desc: 'Through IBM Partner Plus, Kakr Labs strengthened its enterprise posture across:',
            list: ['Security architecture', 'Compliance alignment', 'Enterprise integration patterns', 'Infrastructure governance'],
            quote: 'This partnership helped shape Kakr Labs\' approach to enterprise-grade deployment and security design.'
        },
        ms: {
            name: 'Microsoft for Startups',
            label: '2022 – March 2025',
            desc: 'Microsoft for Startups supported Kakr Labs during its early growth phase, providing access to:',
            list: ['Cloud resources', 'Startup tooling', 'Technical guidance'],
            quote: 'This phase helped Kakr Labs evolve from early prototypes to a production-ready platform.'
        }
      },
      blockchain: {
        title: 'Blockchain & Protocol Foundation',
        ltc: {
            name: 'Litecoin Network',
            label: 'Foundational Trust Layer',
            desc: 'Kakr Labs is built on Litecoin, chosen deliberately for:',
            list: ['Proof-of-Work security', '12+ years of uninterrupted operation', 'Predictable protocol behavior', 'Customer-controlled payment credentials', 'Regulatory clarity as a commodity'],
            boxTitle: 'Litecoin serves as the verifiable trust anchor for:',
            boxList: ['Identity verification', 'Cryptographic settlement', 'Authentication signatures', 'IoT device trust']
        }
      },
      stack: {
        title: 'Application & Development Stack',
        flutter: {
            label: 'Cross-Platform Wallet Development',
            desc: 'PTERI App is built with Flutter, enabling:',
            list: ['Consistent iOS and Android releases', 'Secure UI architecture', 'Rapid iteration without compromising security']
        }
      },
      means: {
        title: 'What This Means for Customers & Partners',
        subtitle: 'By combining:',
        items: [
            { title: 'Decentralized Trust', sub: '(Litecoin)' },
            { title: 'Enterprise Cloud Infrastructure', sub: '(Google Cloud)' },
            { title: 'AI Intelligence', sub: '(Gemini)' },
            { title: 'Closed-Source Security', sub: "(Architecture)" }
        ],
        punchline: 'Kakr Labs delivers infrastructure that enterprises can actually rely on, without experimental dependencies or governance risk.'
      },
      cta: {
        title: 'Partner With Kakr Labs',
        subtitle: 'We actively collaborate with:',
        tags: ['Enterprises', 'Infrastructure Providers', 'IoT Manufacturers', 'Fintech Platforms', 'AI-Native Companies'],
        text: 'If you are building systems that require verifiable identity, secure authorization, or high-assurance settlement, we want to work with you.',
        btn1: 'Contact Partnerships',
        btn2: 'Talk to Sales'
      },
      seo: {
        title: 'Partnerships and Infrastructure Ecosystem | Kakr Labs',
        description: 'Built with trusted infrastructure. Kakr Labs partners with Google Cloud, Gemini AI, IBM, Microsoft, and Litecoin to deliver secure, scalable identity and authentication solutions.'
      }
    },
    de: {
        hero: {
          title: 'Partnerschaften &',
          subtitle: 'Infrastruktur-Ökosystem',
          tagline: 'Auf vertrauenswürdiger Infrastruktur aufgebaut. Für Langfristigkeit konzipiert.',
          description: 'Kakr Labs arbeitet mit führenden Cloud-, KI- und Unternehmenstechnologieanbietern zusammen, um eine sichere, skalierbare und überprüfbare Infrastruktur für Identität, Authentifizierung und Abwicklung bereitzustellen.',
          note: 'Unsere Partnerschaften sind keine Marketing-Abzeichen – sie sind operative Schichten in unserem Produktions-Stack.'
        },
        philosophy: {
          title: 'Unsere Partnerschaftsphilosophie',
          subtitle: 'Wir gehen Partnerschaften nur dort ein, wo sie stärken:',
          items: ['Infrastruktur-Zuverlässigkeit', 'Sicherheitsgarantien', 'Enterprise Readiness', 'Langfristige Nachhaltigkeit', 'Regulatorische Klarheit'],
          bottom: 'Jeder unten aufgeführte Partner spielt eine reale Rolle im heutigen Betrieb von Kakr Labs.'
        },
        cloud: {
          title: 'Cloud & Infrastruktur Partner',
          gfs: {
              name: 'Google for Startups',
              label: 'Hauptpartner - Juni 2025 – Heute',
              desc1: 'Google for Startups ist der primäre Ökosystem- und Infrastrukturpartner von Kakr Labs.',
              desc2: 'Durch diese Partnerschaft betreibt Kakr Labs seine Produktionsinfrastruktur auf der Google Cloud und ermöglicht:',
              list: ['Multi-Zonen, hochverfügbare Bereitstellungen', 'Cloud Run-basiertes Skalieren für PTERI-Dienste', 'Gehärtetes VPC-Netzwerk', 'Verschlüsselung auf Unternehmensniveau und IAM', 'Globaler Zugriff mit geringer Latenz'],
              boxTitle: 'Diese Partnerschaft unterstützt alle PTERI-Kernprodukte:',
              boxList: ['PTERI Authentication', 'PTERI BaaS (blockchain infrastructure APIs)', 'PTERI Identity', 'PTERI IoT Security', 'Entwickler-APIs und Dashboards']
          },
          gcp: {
              name: 'Google Cloud Platform (GCP)',
              label: 'Aktuelle Produktionsinfrastruktur',
              desc: 'Alle Backend-Dienste von Kakr Labs werden auf der Google Cloud bereitgestellt und gewährleisten:',
              list: ['Vorhersehbares Skalieren unter Last', 'Fehlertoleranz über Regionen hinweg', 'Starke Isolierung zwischen Workloads', 'Operative Transparenz'],
              quote: 'Google Cloud ist die Ausführungsschicht für die dezentrale Vertrauensarchitektur von Kakr Labs.'
          }
        },
        ai: {
          title: 'KI & Intelligenz Partner',
          gemini: {
              name: 'Google Gemini (2.5 & 3)',
              label: 'KI-Infrastruktur für PTERI Intelligence',
              desc: 'Kakr Labs verwendet Gemini 2.5 und Gemini 3, um PTERI Intelligence zu betreiben, unsere KI-Schicht für Entwickler und Unternehmen.',
              listTitle: 'Gemini ermöglicht:',
              list: ['KI-gestützte Authentifizierungs-Workflows', 'Codegenerierung für Blockchain- & Identitäts-APIs', 'Debugging- und Observability-Tools', 'Befähigung und Orchestrierung von KI-Agenten'],
              quote: 'Diese KI-Schicht ist tief in die PTERI-Plattform integriert und darauf ausgelegt, die KI-Agenten-Ökonomie sicher zu unterstützen.'
          }
        },
        enterprise: {
          title: 'Enterprise & Technologie-Ökosystem',
          ibm: {
              name: 'IBM Partner Plus',
              label: 'März 2025 – Juni 2025',
              desc: 'Durch IBM Partner Plus stärkte Kakr Labs seine Unternehmenshaltung in den Bereichen:',
              list: ['Sicherheitsarchitektur', 'Compliance-Ausrichtung', 'Unternehmensintegrationsmuster', 'Infrastruktur-Governance'],
              quote: 'Diese Partnerschaft trug dazu bei, den Ansatz von Kakr Labs für die Bereitstellung auf Unternehmensebene und das Sicherheitsdesign zu formen.'
          },
          ms: {
              name: 'Microsoft for Startups',
              label: '2022 – März 2025',
              desc: 'Microsoft for Startups unterstützte Kakr Labs in der frühen Wachstumsphase und bot Zugang zu:',
              list: ['Cloud-Ressourcen', 'Startup-Tools', 'Technischer Anleitung'],
              quote: 'Diese Phase half Kakr Labs, sich von frühen Prototypen zu einer produktionsreifen Plattform zu entwickeln.'
          }
        },
        blockchain: {
          title: 'Blockchain & Protokoll-Fundament',
          ltc: {
              name: 'Litecoin Netzwerk',
              label: 'Grundlegende Vertrauensschicht',
              desc: 'Kakr Labs basiert auf Litecoin, bewusst gewählt für:',
              list: ['Proof-of-Work-Sicherheit', '12+ Jahre ununterbrochener Betrieb', 'Vorhersehbares Protokollverhalten', 'Kundenseitig kontrollierte Zahlungsdaten', 'Regulatorische Klarheit als Ware'],
              boxTitle: 'Litecoin dient als verifizierbarer Vertrauensanker für:',
              boxList: ['Identitätsverifizierung', 'Kryptografische Abwicklung', 'Authentifizierungssignaturen', 'IoT-Geräte-Vertrauen']
          }
        },
        stack: {
          title: 'Anwendungs- & Entwicklungs-Stack',
          flutter: {
              label: 'Plattformübergreifende Wallet-Entwicklung',
              desc: 'PTERI App wird mit Flutter entwickelt und ermöglicht:',
              list: ['Konsistente iOS- und Android-Releases', 'Sichere UI-Architektur', 'Schnelle Iteration ohne Kompromisse bei der Sicherheit']
          }
        },
        means: {
          title: 'Was das für Kunden & Partner bedeutet',
          subtitle: 'Durch die Kombination von:',
          items: [
              { title: 'Dezentralisiertes Vertrauen', sub: '(Litecoin)' },
              { title: 'Unternehmens-Cloud-Infrastruktur', sub: '(Google Cloud)' },
              { title: 'KI-Intelligenz', sub: '(Gemini)' },
              { title: 'Closed-Source Sicherheit', sub: "(Architektur)" }
          ],
          punchline: 'Kakr Labs liefert Infrastruktur, auf die sich Unternehmen tatsächlich verlassen können, ohne experimentelle Abhängigkeiten oder Governance-Risiken.'
        },
        cta: {
          title: 'Partner von Kakr Labs werden',
          subtitle: 'Wir arbeiten aktiv zusammen mit:',
          tags: ['Unternehmen', 'Infrastrukturanbieter', 'IoT-Hersteller', 'Fintech-Plattformen', 'KI-Native Unternehmen'],
          text: 'Wenn Sie Systeme bauen, die verifizierbare Identität, sichere Autorisierung oder hochsichere Abwicklung erfordern, möchten wir mit Ihnen zusammenarbeiten.',
          btn1: 'Partnerschaften kontaktieren',
          btn2: 'Mit dem Vertrieb sprechen'
        },
        seo: {
          title: 'Partnerschaften und Infrastruktur-Ökosystem | Kakr Labs',
          description: 'Auf vertrauenswürdiger Infrastruktur aufgebaut. Kakr Labs arbeitet mit Google Cloud, Gemini KI, IBM, Microsoft und Litecoin zusammen, um sichere, skalierbare Identitäts- und Authentifizierungslösungen bereitzustellen.'
        }
    },
    es: {
        hero: {
          title: 'Asociaciones y',
          subtitle: 'Ecosistema de Infraestructura',
          tagline: 'Construido con Infraestructura de Confianza. Diseñado a Largo Plazo.',
          description: 'Kakr Labs se asocia con proveedores líderes de tecnología en la nube, IA y empresarial para ofrecer infraestructura segura, escalable y verificable para identidad, autenticación y liquidación.',
          note: 'Nuestras asociaciones no son insignias de marketing: son capas operativas en nuestra pila de producción.'
        },
        philosophy: {
          title: 'Nuestra Filosofía de Asociación',
          subtitle: 'Nos asociamos solo donde fortalece:',
          items: ['Fiabilidad de Infraestructura', 'Garantías de Seguridad', 'Preparación Empresarial', 'Sostenibilidad a Largo Plazo', 'Claridad Regulatoria'],
          bottom: 'Cada socio listado a continuación juega un papel real en cómo opera Kakr Labs hoy.'
        },
        cloud: {
          title: 'Socios de Nube e Infraestructura',
          gfs: {
              name: 'Google for Startups',
              label: 'Socio Principal - Junio 2025 – Presente',
              desc1: 'Google for Startups es el socio principal del ecosistema e infraestructura de Kakr Labs.',
              desc2: 'A través de esta asociación, Kakr Labs ejecuta su infraestructura de producción en Google Cloud, permitiendo:',
              list: ['Implementaciones multi-zona de alta disponibilidad', 'Escalado basado en Cloud Run para servicios PTERI', 'Redes VPC endurecidas', 'Cifrado de grado empresarial e IAM', 'Acceso global de baja latencia'],
              boxTitle: 'Esta asociación respalda todos los productos principales de PTERI:',
              boxList: ['Autenticación PTERI', 'PTERI BaaS (blockchain infrastructure APIs)', 'Identidad PTERI', 'Seguridad IoT PTERI', 'APIs y paneles para desarrolladores']
          },
          gcp: {
              name: 'Google Cloud Platform (GCP)',
              label: 'Infraestructura de Producción Actual',
              desc: 'Todos los servicios backend de Kakr Labs se implementan en Google Cloud, asegurando:',
              list: ['Escalado predecible bajo carga', 'Tolerancia a fallos entre regiones', 'Fuerte aislamiento entre cargas de trabajo', 'Transparencia operativa'],
              quote: 'Google Cloud es la capa de ejecución para la arquitectura de confianza descentralizada de Kakr Labs.'
          }
        },
        ai: {
          title: 'Socios de IA e Inteligencia',
          gemini: {
              name: 'Google Gemini (2.5 & 3)',
              label: 'Infraestructura de IA para Inteligencia PTERI',
              desc: 'Kakr Labs utiliza Gemini 2.5 y Gemini 3 para impulsar Inteligencia PTERI, nuestra capa de IA para desarrolladores y empresas.',
              listTitle: 'Gemini permite:',
              list: ['Flujos de trabajo de autenticación asistidos por IA', 'Generación de código para APIs de blockchain e identidad', 'Herramientas de depuración y observabilidad', 'Habilitación y orquestación de agentes de IA'],
              quote: 'Esta capa de IA está profundamente integrada en la plataforma PTERI y está diseñada para respaldar la Economía de Agentes de IA de forma segura.'
          }
        },
        enterprise: {
          title: 'Ecosistema Empresarial y Tecnológico',
          ibm: {
              name: 'IBM Partner Plus',
              label: 'Marzo 2025 – Junio 2025',
              desc: 'A través de IBM Partner Plus, Kakr Labs fortaleció su postura empresarial en:',
              list: ['Arquitectura de seguridad', 'Alineación de cumplimiento', 'Patrones de integración empresarial', 'Gobernanza de infraestructura'],
              quote: 'Esta asociación ayudó a dar forma al enfoque de Kakr Labs para la implementación de grado empresarial y el diseño de seguridad.'
          },
          ms: {
              name: 'Microsoft for Startups',
              label: '2022 – Marzo 2025',
              desc: 'Microsoft for Startups apoyó a Kakr Labs durante su fase de crecimiento inicial, proporcionando acceso a:',
              list: ['Recursos en la nube', 'Herramientas para startups', 'Orientación técnica'],
              quote: 'Esta fase ayudó a Kakr Labs a evolucionar de primeros prototipos a una plataforma lista para producción.'
          }
        },
        blockchain: {
          title: 'Fundación de Blockchain y Protocolo',
          ltc: {
              name: 'Red Litecoin',
              label: 'Capa de Confianza Fundamental',
              desc: 'Kakr Labs está construido completamente sobre Litecoin, elegido deliberadamente por:',
              list: ['Seguridad Proof-of-Work', '12+ años de operación ininterrumpida', 'Comportamiento de protocolo predecible', 'Credenciales de pago controladas por el cliente', 'Claridad regulatoria como mercancía'],
              boxTitle: 'Litecoin sirve como el ancla de confianza verificable para:',
              boxList: ['Verificación de identidad', 'Liquidación criptográfica', 'Firmas de autenticación', 'Confianza en dispositivos IoT']
          }
        },
        stack: {
          title: 'Pila de Aplicación y Desarrollo',
          flutter: {
              label: 'Desarrollo de Billetera Multiplataforma',
              desc: 'PTERI App está construido con Flutter, permitiendo:',
              list: ['Lanzamientos consistentes en iOS y Android', 'Arquitectura de UI segura', 'Iteración rápida sin comprometer la seguridad']
          }
        },
        means: {
          title: 'Qué Significa Esto para Clientes y Socios',
          subtitle: 'Combinando:',
          items: [
              { title: 'Confianza Descentralizada', sub: '(Litecoin)' },
              { title: 'Infraestructura de Nube Empresarial', sub: '(Google Cloud)' },
              { title: 'Inteligencia Artificial', sub: '(Gemini)' },
              { title: 'Seguridad de Código Cerrado', sub: "(Arquitectura)" }
          ],
          punchline: 'Kakr Labs ofrece infraestructura en la que las empresas realmente pueden confiar, sin dependencias experimentales ni riesgos de gobernanza.'
        },
        cta: {
          title: 'Asociarse con Kakr Labs',
          subtitle: 'Colaboramos activamente con:',
          tags: ['Empresas', 'Proveedores de Infraestructura', 'Fabricantes de IoT', 'Plataformas Fintech', 'Empresas Nativas de IA'],
          text: 'Si está construyendo sistemas que requieren identidad verificable, autorización segura o liquidación de alta seguridad, queremos trabajar con usted.',
          btn1: 'Contactar Asociaciones',
          btn2: 'Hablar con Ventas'
        },
        seo: {
          title: 'Asociaciones y Ecosistema de Infraestructura | Kakr Labs',
          description: 'Construido con infraestructura de confianza. Kakr Labs se asocia con Google Cloud, Gemini AI, IBM, Microsoft y Litecoin para ofrecer soluciones de identidad y autenticación seguras y escalables.'
        }
    },
    ja: {
        hero: {
          title: 'パートナーシップと',
          subtitle: 'インフラストラクチャエコシステム',
          tagline: '信頼できるインフラで構築。長期的な設計。',
          description: 'Kakr Labsは、クラウド、AI、エンタープライズ技術の主要プロバイダーと提携し、アイデンティティ、認証、決済のための安全でスケーラブルかつ検証可能なインフラを提供します。',
          note: '私たちのパートナーシップはマーケティングバッジではなく、本番スタックの運用レイヤーです。'
        },
        philosophy: {
          title: 'パートナーシップの理念',
          subtitle: '私たちが強化する分野でのみ提携します:',
          items: ['インフラの信頼性', 'セキュリティ保証', 'エンタープライズ対応', '長期的な持続可能性', '規制の明確性'],
          bottom: '以下に記載されたすべてのパートナーは、今日のKakr Labsの運営において実際の役割を担っています。'
        },
        cloud: {
          title: 'クラウド＆インフラパートナー',
          gfs: {
              name: 'Google for Startups',
              label: 'プライマリパートナー - 2025年6月〜現在',
              desc1: 'Google for StartupsはKakr Labsの主要なエコシステムおよびインフラパートナーです。',
              desc2: 'このパートナーシップを通じて、Kakr LabsはGoogle Cloud上で本番インフラを運用し、以下を実現しています:',
              list: ['マルチゾーン高可用性デプロイ', 'PTERIサービス向けCloud Runベースのスケーリング', '強化されたVPCネットワーキング', 'エンタープライズグレードの暗号化とIAM', 'グローバル低レイテンシアクセス'],
              boxTitle: 'このパートナーシップはすべてのコアPTERI製品をサポートします:',
              boxList: ['PTERI Authentication', 'PTERI BaaS（ブロックチェーンインフラAPI）', 'PTERI Identity', 'PTERI IoT Security', '開発者APIとダッシュボード']
          },
          gcp: {
              name: 'Google Cloud Platform (GCP)',
              label: '現在の本番インフラストラクチャ',
              desc: 'Kakr LabsのすべてのバックエンドサービスはGoogle Cloudにデプロイされており、以下を保証します:',
              list: ['負荷下での予測可能なスケーリング', 'リージョン間のフォールトトレランス', 'ワークロード間の強力な分離', '運用の透明性'],
              quote: 'Google CloudはKakr Labsの分散型トラストアーキテクチャの実行レイヤーです。'
          }
        },
        ai: {
          title: 'AI＆インテリジェンスパートナー',
          gemini: {
              name: 'Google Gemini (2.5 & 3)',
              label: 'PTERI Intelligence向けAIインフラ',
              desc: 'Kakr LabsはGemini 2.5とGemini 3を使用して、開発者と企業向けのAIレイヤーであるPTERI Intelligenceを強化しています。',
              listTitle: 'Geminiが実現すること:',
              list: ['AIアシスト認証ワークフロー', 'ブロックチェーン＆アイデンティティAPIのコード生成', 'デバッグと可観測性ツール', 'AIエージェントの有効化とオーケストレーション'],
              quote: 'このAIレイヤーはPTERIプラットフォームに深く統合されており、AIエージェントエコノミーを安全にサポートするよう設計されています。'
          }
        },
        enterprise: {
          title: 'エンタープライズ＆テクノロジーエコシステム',
          ibm: {
              name: 'IBM Partner Plus',
              label: '2025年3月〜2025年6月',
              desc: 'IBM Partner Plusを通じて、Kakr Labsは以下の分野でエンタープライズ体制を強化しました:',
              list: ['セキュリティアーキテクチャ', 'コンプライアンス整合', 'エンタープライズ統合パターン', 'インフラガバナンス'],
              quote: 'このパートナーシップはKakr Labsのエンタープライズグレードのデプロイとセキュリティ設計のアプローチを形成するのに役立ちました。'
          },
          ms: {
              name: 'Microsoft for Startups',
              label: '2022年〜2025年3月',
              desc: 'Microsoft for StartupsはKakr Labsの初期成長フェーズをサポートし、以下へのアクセスを提供しました:',
              list: ['クラウドリソース', 'スタートアップツール', '技術的ガイダンス'],
              quote: 'このフェーズはKakr Labsが初期プロトタイプから本番対応プラットフォームへと進化するのに役立ちました。'
          }
        },
        blockchain: {
          title: 'ブロックチェーン＆プロトコル基盤',
          ltc: {
              name: 'Litecoinネットワーク',
              label: '基盤となるトラストレイヤー',
              desc: 'Kakr LabsはLitecoin上に完全に構築されており、以下の理由で意図的に選択されました:',
              list: ['Proof-of-Workセキュリティ', '12年以上の継続的な運用', '予測可能なプロトコル動作', '顧客管理の決済情報', '商品としての規制の明確性'],
              boxTitle: 'Litecoinは以下の検証可能なトラストアンカーとして機能します:',
              boxList: ['アイデンティティ検証', '暗号による決済', '認証署名', 'IoTデバイストラスト']
          }
        },
        stack: {
          title: 'アプリケーション＆開発スタック',
          flutter: {
              label: 'クロスプラットフォームウォレット開発',
              desc: 'PTERI AppはFlutterで構築されており、以下を実現します:',
              list: ['一貫したiOSとAndroidリリース', 'セキュアなUIアーキテクチャ', 'セキュリティを損なわない迅速なイテレーション']
          }
        },
        means: {
          title: '顧客とパートナーにとっての意味',
          subtitle: '以下を組み合わせることで:',
          items: [
              { title: '分散型トラスト', sub: '(Litecoin)' },
              { title: 'エンタープライズクラウドインフラ', sub: '(Google Cloud)' },
              { title: 'AIインテリジェンス', sub: '(Gemini)' },
              { title: 'クローズドソースセキュリティ', sub: '(アーキテクチャ)' }
          ],
          punchline: 'Kakr Labsは、実験的な依存関係やガバナンスリスクなしに、企業が実際に依存できるインフラを提供します。'
        },
        cta: {
          title: 'Kakr Labsとパートナーになる',
          subtitle: '私たちは以下と積極的に協力しています:',
          tags: ['企業', 'インフラプロバイダー', 'IoTメーカー', 'フィンテックプラットフォーム', 'AIネイティブ企業'],
          text: '検証可能なアイデンティティ、安全な認証、または高保証決済を必要とするシステムを構築している場合は、ぜひご連絡ください。',
          btn1: 'パートナーシップに連絡',
          btn2: '営業に相談'
        },
        seo: {
          title: 'パートナーシップとインフラエコシステム | Kakr Labs',
          description: '信頼できるインフラで構築。Kakr LabsはGoogle Cloud、Gemini AI、IBM、Microsoft、Litecoinと提携し、安全でスケーラブルなアイデンティティと認証ソリューションを提供します。'
        }
    },
    ar: {
        hero: {
          title: 'الشراكات و',
          subtitle: 'منظومة البنية التحتية',
          tagline: 'مبني على بنية تحتية موثوقة. مصمم للمدى البعيد.',
          description: 'تتشارك Kakr Labs مع كبار مزودي تقنيات السحابة والذكاء الاصطناعي والمؤسسات لتقديم بنية تحتية آمنة وقابلة للتوسع وقابلة للتحقق للهوية والمصادقة والتسوية.',
          note: 'شراكاتنا ليست شارات تسويقية - بل هي طبقات تشغيلية في مجموعة الإنتاج لدينا.'
        },
        philosophy: {
          title: 'فلسفة الشراكة لدينا',
          subtitle: 'نتشارك فقط حيث يعزز:',
          items: ['موثوقية البنية التحتية', 'ضمانات الأمان', 'الجاهزية للمؤسسات', 'الاستدامة طويلة الأمد', 'الوضوح التنظيمي'],
          bottom: 'كل شريك مدرج أدناه يلعب دوراً حقيقياً في كيفية عمل Kakr Labs اليوم.'
        },
        cloud: {
          title: 'شركاء السحابة والبنية التحتية',
          gfs: {
              name: 'Google for Startups',
              label: 'الشريك الأساسي - يونيو 2025 – الحاضر',
              desc1: 'Google for Startups هو شريك النظام البيئي والبنية التحتية الأساسي لـ Kakr Labs.',
              desc2: 'من خلال هذه الشراكة، تشغّل Kakr Labs بنيتها التحتية الإنتاجية على Google Cloud، مما يتيح:',
              list: ['نشر متعدد المناطق وعالي التوفر', 'توسع قائم على Cloud Run لخدمات PTERI', 'شبكات VPC محصّنة', 'تشفير على مستوى المؤسسات وإدارة الهوية والوصول', 'وصول عالمي منخفض الكمون'],
              boxTitle: 'تدعم هذه الشراكة جميع منتجات PTERI الأساسية:',
              boxList: ['مصادقة PTERI', 'PTERI BaaS (blockchain infrastructure APIs)', 'هوية PTERI', 'أمان إنترنت الأشياء PTERI', 'واجهات برمجة التطبيقات ولوحات المعلومات للمطورين']
          },
          gcp: {
              name: 'منصة Google Cloud (GCP)',
              label: 'البنية التحتية الإنتاجية الحالية',
              desc: 'يتم نشر جميع خدمات الواجهة الخلفية لـ Kakr Labs على Google Cloud، مما يضمن:',
              list: ['توسع متوقع تحت الحمل', 'تحمل الأخطاء عبر المناطق', 'عزل قوي بين أعباء العمل', 'الشفافية التشغيلية'],
              quote: 'Google Cloud هو طبقة التنفيذ لبنية الثقة اللامركزية في Kakr Labs.'
          }
        },
        ai: {
          title: 'شركاء الذكاء الاصطناعي والاستخبارات',
          gemini: {
              name: 'Google Gemini (2.5 & 3)',
              label: 'البنية التحتية للذكاء الاصطناعي لـ PTERI Intelligence',
              desc: 'تستخدم Kakr Labs Gemini 2.5 و Gemini 3 لتشغيل PTERI Intelligence، طبقة الذكاء الاصطناعي للمطورين والمؤسسات.',
              listTitle: 'يتيح Gemini:',
              list: ['سير عمل المصادقة بمساعدة الذكاء الاصطناعي', 'توليد الكود لواجهات برمجة تطبيقات blockchain والهوية', 'أدوات التصحيح والمراقبة', 'تمكين وتنسيق وكلاء الذكاء الاصطناعي'],
              quote: 'هذه الطبقة من الذكاء الاصطناعي متكاملة بعمق في منصة PTERI ومصممة لدعم اقتصاد وكلاء الذكاء الاصطناعي بأمان.'
          }
        },
        enterprise: {
          title: 'النظام البيئي للمؤسسات والتكنولوجيا',
          ibm: {
              name: 'IBM Partner Plus',
              label: 'مارس 2025 – يونيو 2025',
              desc: 'من خلال IBM Partner Plus، عززت Kakr Labs وضعها المؤسسي في:',
              list: ['بنية الأمان', 'توافق الامتثال', 'أنماط تكامل المؤسسات', 'حوكمة البنية التحتية'],
              quote: 'ساعدت هذه الشراكة في تشكيل نهج Kakr Labs للنشر على مستوى المؤسسات وتصميم الأمان.'
          },
          ms: {
              name: 'Microsoft for Startups',
              label: '2022 – مارس 2025',
              desc: 'دعمت Microsoft for Startups شركة Kakr Labs خلال مرحلة النمو المبكرة، مما وفر الوصول إلى:',
              list: ['موارد السحابة', 'أدوات الشركات الناشئة', 'التوجيه التقني'],
              quote: 'ساعدت هذه المرحلة Kakr Labs على التطور من النماذج الأولية المبكرة إلى منصة جاهزة للإنتاج.'
          }
        },
        blockchain: {
          title: 'أساس Blockchain والبروتوكول',
          ltc: {
              name: 'شبكة Litecoin',
              label: 'طبقة الثقة الأساسية',
              desc: 'تم بناء Kakr Labs على Litecoin، تم اختياره عمداً لـ:',
              list: ['أمان Proof-of-Work', 'أكثر من 12 عاماً من التشغيل المتواصل', 'سلوك بروتوكول متوقع', 'بيانات اعتماد دفع يتحكم بها العميل', 'وضوح تنظيمي كسلعة'],
              boxTitle: 'يعمل Litecoin كمرساة ثقة قابلة للتحقق لـ:',
              boxList: ['التحقق من الهوية', 'التسوية التشفيرية', 'توقيعات المصادقة', 'ثقة أجهزة إنترنت الأشياء']
          }
        },
        stack: {
          title: 'مجموعة التطبيقات والتطوير',
          flutter: {
              label: 'تطوير المحفظة عبر المنصات',
              desc: 'تم بناء تطبيق PTERI باستخدام Flutter، مما يتيح:',
              list: ['إصدارات iOS و Android متسقة', 'بنية واجهة مستخدم آمنة', 'تكرار سريع دون المساس بالأمان']
          }
        },
        means: {
          title: 'ما يعنيه هذا للعملاء والشركاء',
          subtitle: 'من خلال الجمع بين:',
          items: [
              { title: 'الثقة اللامركزية', sub: '(Litecoin)' },
              { title: 'البنية التحتية السحابية للمؤسسات', sub: '(Google Cloud)' },
              { title: 'ذكاء الذكاء الاصطناعي', sub: '(Gemini)' },
              { title: 'أمان مغلق المصدر', sub: '(البنية المعمارية)' }
          ],
          punchline: 'تقدم Kakr Labs بنية تحتية يمكن للمؤسسات الاعتماد عليها فعلاً، دون تبعيات تجريبية أو مخاطر الحوكمة.'
        },
        cta: {
          title: 'كن شريكاً مع Kakr Labs',
          subtitle: 'نتعاون بنشاط مع:',
          tags: ['المؤسسات', 'مزودو البنية التحتية', 'مصنعو إنترنت الأشياء', 'منصات التكنولوجيا المالية', 'الشركات الأصيلة في الذكاء الاصطناعي'],
          text: 'إذا كنت تبني أنظمة تتطلب هوية قابلة للتحقق أو تفويضاً آمناً أو تسوية عالية الضمان، فنحن نريد العمل معك.',
          btn1: 'تواصل مع الشراكات',
          btn2: 'تحدث مع المبيعات'
        },
        seo: {
          title: 'الشراكات ومنظومة البنية التحتية | Kakr Labs',
          description: 'مبني على بنية تحتية موثوقة. تتشارك Kakr Labs مع Google Cloud و Gemini AI و IBM و Microsoft و Litecoin لتقديم حلول هوية ومصادقة آمنة وقابلة للتوسع.'
        }
    }
  }
  // @ts-ignore
  return translations[locale.value] || translations.en
})

// SEO
const { setSEO } = useSEO()

watchEffect(() => {
  setSEO({
    title: content.value.seo.title,
    description: content.value.seo.description,
    image: '/og/og-partnerships.png'
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.font-inter {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* Infinite logo carousel */
.partner-track {
  display: flex;
  width: max-content;
  animation: scroll-logos 28s linear infinite;
}
.partner-logos {
  display: flex;
  align-items: center;
  gap: 3.5rem;
  padding: 0 1.75rem;
  flex-shrink: 0;
}
.partner-logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.55;
  filter: grayscale(30%);
  transition: opacity 0.25s ease, filter 0.25s ease, transform 0.25s ease;
  transform: scale(1);
  flex-shrink: 0;
}
.partner-logo-item:hover {
  opacity: 1;
  filter: grayscale(0%);
  transform: scale(1.18);
}
@keyframes scroll-logos {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>

