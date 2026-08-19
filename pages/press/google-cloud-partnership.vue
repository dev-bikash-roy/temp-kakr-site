<template>
  <div class="bg-black text-slate-300 min-h-screen font-inter relative overflow-hidden">
    
    <!-- Abstract Background Elements -->
    <div class="absolute top-[10%] left-0 w-full h-[800px] pointer-events-none opacity-[0.20] mix-blend-screen" style="background-image: url('/hero-bg.svg'); background-size: cover; background-position: center top;"></div>
    <div class="absolute inset-0 bg-emerald-500/[0.02] pointer-events-none z-0"></div>

    <!-- TOP BAR (Wire Service Style) -->
    <div class="bg-[#0a0a0a] border-b border-white/10 py-4 relative z-10 w-full">
       <div class="container-custom flex justify-between items-center">
          <a href="/press" class="flex items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors font-semibold text-sm">
             <ArrowLeftIcon class="w-4 h-4" />
             {{ content.topBar.back }}
          </a>
          <div class="text-[11px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
             {{ content.topBar.official }}
          </div>
       </div>
    </div>

    <!-- HERO BANNER -->
    <div class="container-custom pt-12 pb-6 relative z-10">
      <div class="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <img
          src="/press-release-banner.png"
          alt="Kakr Labs Joins Google Cloud Partner Advantage"
          class="w-full h-auto object-cover max-h-[450px]"
        />
      </div>
    </div>

    <!-- MAIN CONTENT -->
    <div class="container-custom pb-12 md:pb-24 relative z-10">
       
       <div class="grid lg:grid-cols-12 gap-10 items-start">
          
          <!-- LEFT COLUMN: ARTICLE (8 cols) -->
          <main class="lg:col-span-8 bg-[#0a0a0a] backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/10 relative">
             
             <!-- Article Header -->
             <header class="mb-10 border-b border-white/10 pb-10">
                <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-display tracking-tight">
                   {{ content.article.title }}
                </h1>
                
                <div class="flex items-center flex-wrap gap-4 text-white/60 text-sm font-semibold">
                   <span>{{ content.article.date }}</span>
                   <span class="w-1 h-1 rounded-full bg-slate-500"></span>
                   <span>{{ content.article.location }}</span>
                   <span class="w-1 h-1 rounded-full bg-slate-500"></span>
                   <span class="text-emerald-400/80">{{ content.article.source }}</span>
                </div>

                <!-- Share Buttons -->
                <div class="mt-8 flex flex-wrap gap-3">
                   <a 
                     :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(content.article.title)}&url=${encodeURIComponent('https://kakr.ai/press/google-cloud-partnership')}`" 
                     target="_blank"
                     class="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/70 text-sm font-semibold hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
                   >
                     <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                     {{ content.share.post }}
                   </a>
                   <a 
                     :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://kakr.ai/press/google-cloud-partnership')}`"
                     target="_blank"
                     class="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/70 text-sm font-semibold hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-colors"
                   >
                     <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>
                     {{ content.share.share }}
                   </a>
                   <button 
                     @click="copyLink"
                     class="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/70 text-sm font-semibold hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
                   >
                     <LinkIcon class="w-4 h-4" />
                     {{ copied ? content.share.copied : content.share.copyLink }}
                   </button>
                </div>
             </header>

             <!-- Article Body -->
             <div class="prose prose-lg prose-invert max-w-none prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline">

               <!-- DOC/PDF style header inside content -->
               <div class="not-prose text-center mb-10">
                 <div class="text-sm font-extrabold tracking-widest text-emerald-400 uppercase">
                   {{ content.body.kicker }}
                 </div>

                 <p class="mt-4 text-xl md:text-2xl font-bold text-white leading-snug">
                   {{ content.body.subtitle }}
                 </p>

                 <!-- Colored line (matches PDF feel) -->
                 <div class="mx-auto mt-6 h-1 w-24 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
               </div>

               <!-- Lead paragraph with colored phrase (like the highlighted line in PDF) -->
               <p class="lead text-xl text-white/90 font-medium mb-8 leading-relaxed mt-10">
                 {{ content.body.p1a }}
                 <span class="text-emerald-400 font-bold">
                   {{ content.body.p1Highlight }}
                 </span>
                 {{ content.body.p1b }}
               </p>

               <p class="text-white/80 leading-relaxed">
                 {{ content.body.p2 }}
               </p>

               <!-- Features list -->
               <ul class="list-disc pl-6 space-y-3 mt-8 text-white/80 marker:text-emerald-500">
                 <li v-for="(feature, idx) in content.body.features" :key="idx" class="leading-relaxed">
                   <strong class="text-white">{{ feature.title }}:</strong> {{ feature.desc }}
                 </li>
               </ul>

               <!-- Quote block -->
               <div class="bg-emerald-500/5 p-8 rounded-2xl border border-emerald-500/20 my-12 not-prose relative overflow-hidden">
                 <div class="absolute -top-4 -left-4 text-9xl text-emerald-500/10 pointer-events-none font-serif">"</div>
                 <h4 class="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">
                   {{ content.body.quote.title }}
                 </h4>
                 <p class="text-white text-lg leading-relaxed m-0 italic relative z-10 font-medium">
                   “{{ content.body.quote.text }}”
                 </p>
                 <p class="text-emerald-400/80 text-sm font-bold mt-5 mb-0 relative z-10">
                   - {{ content.body.quote.by }}
                 </p>
               </div>

               <!-- Learn more -->
               <p class="font-medium text-white/90 mt-8">
                 {{ content.body.learnMore.prefix }}
                 <a
                   :href="content.body.learnMore.url"
                   target="_blank"
                   rel="noopener"
                   class="text-emerald-400 font-bold hover:underline"
                 >
                   {{ content.body.learnMore.label }}
                 </a>.
               </p>

               <hr class="my-12 border-white/10" />

               <!-- About (Standard Format - No Box) -->
               <div class="mt-12 not-prose">
                 <h3 class="font-bold text-white mb-4 uppercase tracking-wider text-sm border-l-2 border-emerald-500 pl-3">
                   {{ content.body.about.title }}
                 </h3>
                 <p class="text-base text-white/70 m-0 leading-relaxed pl-3">
                   {{ content.body.about.text }}
                 </p>
               </div>

             </div>

             <!-- Footer Links -->
             <nav class="press-footer-links mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm">
                <a href="/press" class="text-white/60 hover:text-emerald-400 font-medium transition-colors">
                  ← {{ content.topBar.back }}
                </a>
                <a href="/" class="text-white/60 hover:text-emerald-400 font-medium transition-colors">
                  Home
                </a>
                <a href="/platform" class="text-white/60 hover:text-emerald-400 font-medium transition-colors">
                  Platform
                </a>
             </nav>

          </main>

          <!-- RIGHT COLUMN: SIDEBAR (4 cols) -->
          <aside class="lg:col-span-4 space-y-6 sticky top-24">
             
             <!-- Company Info Card -->
             <div class="bg-[#0a0a0a] p-8 rounded-[2rem] shadow-xl border border-white/10 relative overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
                <h3 class="text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-3">{{ content.sidebar.aboutCompany }}</h3>
                
                <div class="mb-8 relative z-10">
                   <h4 class="font-bold text-white mb-3 text-lg">Kakr Labs</h4>
                   <p class="text-sm text-white/70 leading-relaxed font-medium">
                      {{ content.sidebar.kakrDesc }}
                   </p>
                </div>

                <div class="mb-6 relative z-10">
                   <h4 class="font-bold text-white mb-3 text-lg">About PTERI</h4>
                   <p class="text-sm text-white/70 leading-relaxed font-medium">
                      {{ content.sidebar.pteriDesc }}
                   </p>
                </div>

                <div class="pt-6 border-t border-white/10 relative z-10 space-y-2">
                   <a href="https://kakr.ai" target="_blank" class="text-emerald-400 text-sm font-bold hover:underline flex items-center gap-2"><LinkIcon class="w-3 h-3" /> kakr.ai</a>
                   <a href="https://docs.kakr.ai" target="_blank" class="text-emerald-400 text-sm font-bold hover:underline flex items-center gap-2"><LinkIcon class="w-3 h-3" /> docs.kakr.ai</a>
                </div>
             </div>

             <!-- Contacts Card -->
             <div class="bg-[#0a0a0a] p-8 rounded-[2rem] shadow-xl border border-white/10 relative overflow-hidden">
                <h3 class="text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-3">{{ content.sidebar.mediaContacts }}</h3>
                
                <div class="relative z-10">
                   <div class="font-bold text-white text-base mb-2">{{ content.sidebar.pressRelations }}</div>
                   <a href="mailto:contact@kakr.ai" class="text-white/70 hover:text-emerald-400 text-sm font-medium transition-colors block">contact@kakr.ai</a>
                </div>
             </div>
             
             <!-- More News -->
             <div class="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                <h3 class="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-4">{{ content.sidebar.latestNews }}</h3>
                <a href="/press" class="block group">
                   <div class="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                      {{ content.sidebar.seeAll }}
                   </div>
                   <div class="text-sm text-white/60 font-medium group-hover:text-white transition-colors">
                      {{ content.sidebar.visitPressRoom }}
                   </div>
                </a>
             </div>

          </aside>

       </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'
import { ArrowLeftIcon, LinkIcon } from '@heroicons/vue/24/solid'

const { locale } = useI18n()

// Copy Logic
const copied = ref(false)
const copyLink = async () => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href)
      copied.value = true
      setTimeout(() => copied.value = false, 2000)
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            copied.value = true
            setTimeout(() => copied.value = false, 2000)
        } catch (err) {
            // Fallback copy failed - silently fail in production
        }
        document.body.removeChild(textArea);
    }
  } catch (err) {
    // Copy failed - silently fail in production
  }
}

// Translations
const content = computed(() => {
  const translations = {
    en: {
        topBar: {
            back: 'Back to Press',
            official: 'Official Press Release'
        },
        article: {
            title: 'Kakr Labs Joins Google Cloud Partner Advantage',
            date: 'January 28, 2026',
            location: 'New York, NY',
            source: 'Source: Kakr Labs'
        },
        share: {
            post: 'Post',
            share: 'Share',
            copyLink: 'Copy Link',
            copied: 'Copied!'
        },
        body: {
          kicker: 'PRESS RELEASE',
          subtitle: 'Delivering signature-based identity and blockchain-backed settlement for automation and AI-agent workflows',

          // split so we can color the highlighted phrase
          p1a: 'New York, NY - DECEMBER 28th, 2025 - Kakr Labs announced today that it has joined Google Cloud Partner Advantage as a ',
          p1Highlight: 'Partner level partner for the Build engagement model',
          p1b: ', helping Google Cloud customers PTERI Infrastructure - a signature-based identity layer and Litecoin-powered Blockchain-as-a-Service (BaaS) designed to replace OTP-based verification and support the emerging AI-agentic economy.',

          p2: 'As a Google Cloud partner, Kakr offers customers a modern approach to identity, reducing reliance on inbox-dependent authentication while enabling deterministic, cryptographic verification for users and automated systems. Key features include:',

          features: [
            { title: 'Signature-Based Identity', desc: 'Moves organizations beyond OTPs using cryptographic proofs tied to existing email identifiers.' },
            { title: 'AI-Agent Compatibility', desc: 'Enables authentication for automated and AI-driven workflows without inbox access.' },
            { title: 'Litecoin-Backed BaaS', desc: 'Provides a high-assurance settlement layer powered by mature Litecoin cryptography.' },
            { title: 'Cloud-Native Deployment', desc: 'Built on Google Cloud using Cloud Run, VPC networking, and Cloud Armor for scale and security.' }
          ],

          quote: {
            title: 'Statement',
            text: 'Verification assumptions from the Web2 era no longer support automated systems, PTERI gives organizations a clear, practical way to adopt identity and settlement models suited for AI, automation, and future-ready security.',
            by: 'Harvin Singh, CEO of KAKR Labs'
          },

          learnMore: {
            prefix: 'Organizations can learn more at ',
            label: 'kakr.org',
            url: 'https://kakr.org'
          },

          about: {
            title: 'About KAKR Labs',
            text: 'Kakr bridges the gap between legacy Web2 and the Web3 era by replacing outdated security "guessing games" with verifiable cryptographic proof. We provide high-assurance identity and settlement infrastructure designed to secure the emerging AI agent economy.'
          }
        },
        sidebar: {
            aboutCompany: 'About the Company',
            kakrDesc: 'Kakr Labs builds cryptographic infrastructure that replaces guess-based security with deterministic authority, securing identity, authentication, authorization, payments, and AI-safe delegation through a self-custodial model.',
            pteriDesc: 'PTERI is a universal authority layer delivered through a self-custodial wallet and cryptographic verification services. The wallet serves as an interface into the carrier layer, enabling cryptographic proof of authority across systems while retaining full user custody.',
            mediaContacts: 'Media Contacts',
            pressRelations: 'Press Relations',
            latestNews: 'Latest News',
            seeAll: 'See all announcements',
            visitPressRoom: 'Visit the Press Room →'
        },
        seo: {
            title: 'Kakr Labs Joins Google Cloud Partner Advantage | Press Release',
            description: 'Kakr Labs joins Google Cloud Partner Advantage to deliver signature-based identity and Litecoin-backed settlement infrastructure for automation and AI-agent workflows.'
        }
    },
    de: {
        topBar: {
            back: 'Zurück zur Presse',
            official: 'Offizielle Pressemitteilung'
        },
        article: {
            title: 'Kakr Labs tritt Google Cloud Partner Advantage bei',
            date: '28. Januar 2026',
            location: 'New York, NY',
            source: 'Quelle: Kakr Labs'
        },
        share: {
            post: 'Posten',
            share: 'Teilen',
            copyLink: 'Link kopieren',
            copied: 'Kopiert!'
        },
        body: {
          kicker: 'PRESSEMITTEILUNG',
          subtitle: 'Signaturbasierte Identität und blockchain-gestützte Settlement-Infrastruktur für Automatisierung und KI-Agent-Workflows',

          p1a: 'New York, NY - 28. Dezember 2025 - Kakr Labs gab heute bekannt, dass das Unternehmen dem Google Cloud Partner Advantage Programm als ',
          p1Highlight: 'Partner-Level-Partner im Build-Engagement-Modell',
          p1b: ' beigetreten ist und Google-Cloud-Kunden dabei unterstützt, PTERI Infrastructure zu nutzen - eine signaturbasierte Identitätsschicht und ein Litecoin-basiertes Blockchain-as-a-Service (BaaS), entwickelt als Ersatz für OTP-basierte Verifizierung und zur Unterstützung der entstehenden KI-agentischen Ökonomie.',

          p2: 'Als Google-Cloud-Partner bietet Kakr einen modernen Ansatz für Identität: weniger Abhängigkeit von Posteingangs-basierten Authentifizierungen und gleichzeitig deterministische, kryptografische Verifizierung für Nutzer und automatisierte Systeme. Zu den wichtigsten Merkmalen gehören:',

          features: [
            { title: 'Signaturbasierte Identität', desc: 'Führt Organisationen über OTPs hinaus – mit kryptografischen Nachweisen, die an bestehende E-Mail-Identifikatoren gebunden sind.' },
            { title: 'KI-Agent-Kompatibilität', desc: 'Ermöglicht Authentifizierung für automatisierte und KI-gesteuerte Workflows ohne Posteingangs-Zugriff.' },
            { title: 'Litecoin-gestütztes BaaS', desc: 'Stellt eine hochsichere Settlement-Schicht bereit, basierend auf bewährter Litecoin-Kryptografie.' },
            { title: 'Cloud-native Bereitstellung', desc: 'Auf Google Cloud aufgebaut – mit Cloud Run, VPC-Networking und Cloud Armor für Skalierung und Sicherheit.' }
          ],

          quote: {
            title: 'Zitat',
            text: 'Verifizierungsannahmen aus der Web2-Ära tragen automatisierte Systeme nicht mehr. PTERI gibt Organisationen einen klaren, praxisnahen Weg, Identitäts- und Settlement-Modelle einzuführen, die zu KI, Automatisierung und zukunftsfähiger Sicherheit passen.',
            by: 'Harvin Singh, CEO von KAKR Labs'
          },

          learnMore: {
            prefix: 'Mehr Informationen unter ',
            label: 'kakr.org',
            url: 'https://kakr.org'
          },

          about: {
            title: 'Über KAKR Labs',
            text: 'Kakr schlägt die Brücke zwischen Legacy-Web2 und der Web3-Ära, indem veraltete Sicherheits-„Ratespiele“ durch verifizierbare kryptografische Nachweise ersetzt werden. Wir liefern hochsichere Identitäts- und Settlement-Infrastruktur, die die entstehende KI-Agent-Ökonomie absichert.'
          }
        },
        sidebar: {
            aboutCompany: 'Über das Unternehmen',
            kakrDesc: 'Kakr Labs baut kryptografische Infrastruktur, die auf Vermutungen basierende Sicherheit durch deterministische Autorität ersetzt.',
            pteriDesc: 'PTERI ist eine universelle Autoritätsschicht, die durch ein selbstverwaltetes Wallet und kryptografische Verifizierungsdienste bereitgestellt wird.',
            mediaContacts: 'Medienkontakte',
            pressRelations: 'Pressearbeit',
            latestNews: 'Neueste Nachrichten',
            seeAll: 'Alle Ankündigungen ansehen',
            visitPressRoom: 'Zum Presseraum →'
        },
        seo: {
            title: 'Kakr Labs tritt Google Cloud Partner Advantage bei | Pressemitteilung',
            description: 'Kakr Labs tritt Google Cloud Partner Advantage bei, um deterministische Autorität für Cloud-native KI-Workflows bereitzustellen.'
        }
    },
    es: {
        topBar: {
            back: 'Volver a Prensa',
            official: 'Comunicado de Prensa Oficial'
        },
        article: {
            title: 'Kakr Labs se une a Google Cloud Partner Advantage',
            date: '28 de diciembre de 2025',
            location: 'Nueva York, NY',
            source: 'Fuente: Kakr Labs'
        },
        share: {
            post: 'Publicar',
            share: 'Compartir',
            copyLink: 'Copiar Enlace',
            copied: '¡Copiado!'
        },
        body: {
          kicker: 'COMUNICADO DE PRENSA',
          subtitle: 'Identidad basada en firmas y liquidación respaldada por blockchain para automatización y flujos de trabajo con agentes de IA',

          p1a: 'Nueva York, NY - 28 de diciembre de 2025 - Kakr Labs anunció hoy que se ha unido a Google Cloud Partner Advantage como ',
          p1Highlight: 'socio de nivel Partner bajo el modelo de colaboración Build',
          p1b: ', ayudando a los clientes de Google Cloud con PTERI Infrastructure: una capa de identidad basada en firmas y un Blockchain-as-a-Service (BaaS) impulsado por Litecoin, diseñado para reemplazar la verificación basada en OTP y respaldar la emergente economía de agentes de IA.',

          p2: 'Como socio de Google Cloud, Kakr ofrece un enfoque moderno para la identidad, reduciendo la dependencia de la autenticación ligada al correo electrónico y habilitando una verificación determinista y criptográfica para usuarios y sistemas automatizados. Las principales capacidades incluyen:',

          features: [
            { title: 'Identidad basada en firmas', desc: 'Lleva a las organizaciones más allá de los OTP mediante pruebas criptográficas vinculadas a identificadores de correo existentes.' },
            { title: 'Compatibilidad con agentes de IA', desc: 'Permite autenticación para flujos automatizados y dirigidos por IA sin acceso al buzón.' },
            { title: 'BaaS respaldado por Litecoin', desc: 'Proporciona una capa de liquidación de alta garantía impulsada por la criptografía madura de Litecoin.' },
            { title: 'Despliegue nativo en la nube', desc: 'Construido en Google Cloud con Cloud Run, redes VPC y Cloud Armor para escala y seguridad.' }
          ],

          quote: {
            title: 'Declaración',
            text: 'Las suposiciones de verificación de la era Web2 ya no sirven para sistemas automatizados. PTERI ofrece a las organizaciones una forma clara y práctica de adoptar modelos de identidad y liquidación adecuados para IA, automatización y seguridad preparada para el futuro.',
            by: 'Harvin Singh, CEO de KAKR Labs'
          },

          learnMore: {
            prefix: 'Más información en ',
            label: 'kakr.org',
            url: 'https://kakr.org'
          },

          about: {
            title: 'Acerca de KAKR Labs',
            text: 'Kakr conecta el legado de la Web2 con la era Web3 reemplazando los antiguos “juegos de adivinanzas” de seguridad por pruebas criptográficas verificables. Ofrecemos infraestructura de identidad y liquidación de alta garantía diseñada para asegurar la economía emergente de agentes de IA.'
          }
        },
        sidebar: {
            aboutCompany: 'Sobre la Compañía',
            kakrDesc: 'Kakr Labs construye infraestructura criptográfica que reemplaza la seguridad basada en suposiciones con autoridad determinista.',
            pteriDesc: 'PTERI es una capa de autoridad universal entregada a través de una billetera de autocustodia.',
            mediaContacts: 'Contactos de Medios',
            pressRelations: 'Relaciones de Prensa',
            latestNews: 'Últimas Noticias',
            seeAll: 'Ver todos los anuncios',
            visitPressRoom: 'Visitar Sala de Prensa →'
        },
        seo: {
            title: 'Kakr Labs se une a Google Cloud Partner Advantage | Comunicado de Prensa',
            description: 'Kakr Labs se une a Google Cloud Partner Advantage para ofrecer autoridad determinista.'
        }
    },
    ja: {
        topBar: {
            back: 'プレスに戻る',
            official: '公式プレスリリース'
        },
        article: {
            title: 'Kakr LabsがGoogle Cloud Partner Advantageに参加',
            date: '2026年1月28日',
            location: 'ニューヨーク州ニューヨーク',
            source: 'ソース：Kakr Labs'
        },
        share: {
            post: '投稿',
            share: '共有',
            copyLink: 'リンクをコピー',
            copied: 'コピーしました！'
        },
        body: {
          kicker: 'プレスリリース',
          subtitle: '自動化およびAIエージェント・ワークフロー向けの署名ベースのアイデンティティとブロックチェーン担保の決済レイヤー',

          p1a: '米国ニューヨーク州ニューヨーク - 2025年12月28日 - Kakr Labs は本日、Google Cloud Partner Advantage に ',
          p1Highlight: 'Build エンゲージメントモデルのパートナーレベル・パートナー',
          p1b: 'として参画したことを発表しました。これにより Google Cloud の顧客に対し、PTERI Infrastructure（署名ベースのアイデンティティ層と、Litecoin を基盤とする Blockchain-as-a-Service（BaaS））を提供し、OTP に依存した検証を置き換え、AIエージェント経済の拡大を支えます。',

          p2: 'Google Cloud パートナーとして Kakr は、受信箱（メール）依存の認証を減らしつつ、ユーザーおよび自動化システム向けに決定論的で暗号学的な検証を可能にする、モダンなアイデンティティのアプローチを提供します。主な特長は次のとおりです。',

          features: [
            { title: '署名ベースのアイデンティティ', desc: '既存のメール識別子に結び付いた暗号学的証明により、OTP からの移行を支援します。' },
            { title: 'AIエージェント互換', desc: '受信箱へのアクセスなしで、自動化およびAI駆動のワークフロー認証を可能にします。' },
            { title: 'Litecoin担保のBaaS', desc: '成熟した Litecoin 暗号技術により、高い保証性を備えた決済レイヤーを提供します。' },
            { title: 'クラウドネイティブ展開', desc: 'Google Cloud 上で Cloud Run、VPC ネットワーク、Cloud Armor を用いてスケールとセキュリティを実現します。' }
          ],

          quote: {
            title: 'コメント',
            text: 'Web2時代の「検証の前提」は、もはや自動化システムを支えられません。PTERI は、AI・自動化・将来を見据えたセキュリティに適したアイデンティティと決済モデルへ移行するための、明確で実用的な道筋を提供します。',
            by: 'Harvin Singh（KAKR Labs CEO）'
          },

          learnMore: {
            prefix: '詳細は ',
            label: 'kakr.org',
            url: 'https://kakr.org'
          },

          about: {
            title: 'KAKR Labs について',
            text: 'Kakr は、従来のWeb2とWeb3のギャップを埋めるために、古いセキュリティの「当て推量」を検証可能な暗号学的証明へ置き換えます。新たに拡大するAIエージェント経済を守るための、高保証なアイデンティティおよび決済インフラを提供します。'
          }
        },
        sidebar: {
            aboutCompany: '会社概要',
            kakrDesc: 'Kakr Labsは、推測に基づくセキュリティを決定論的権限に置き換える暗号インフラストラクチャを構築します。',
            pteriDesc: 'PTERIは、自己管理型ウォレットを通じて提供される普遍的な権限レイヤーです。',
            mediaContacts: 'メディア連絡先',
            pressRelations: '広報',
            latestNews: '最新ニュース',
            seeAll: 'すべての発表を見る',
            visitPressRoom: 'プレスルームへ →'
        },
        seo: {
            title: 'Kakr LabsがGoogle Cloud Partner Advantageに参加 | プレスリリース',
            description: 'Kakr Labsは、Google Cloud Partner Advantageに参加して決定論的権限を提供します。'
        }
    },
    ar: {
        topBar: {
            back: 'العودة إلى الصحافة',
            official: 'بيان صحفي رسمي'
        },
        article: {
            title: 'تنضم Kakr Labs إلى Google Cloud Partner Advantage',
            date: '28 يناير 2026',
            location: 'نيويورك، نيويورك',
            source: 'المصدر: Kakr Labs'
        },
        share: {
            post: 'نشر',
            share: 'مشاركة',
            copyLink: 'نسخ الرابط',
            copied: 'تم النسخ!'
        },
        body: {
          kicker: 'بيان صحفي',
          subtitle: 'هوية قائمة على التوقيع وتسوية مدعومة بالبلوكتشين لأتمتة سير العمل ووكلاء الذكاء الاصطناعي',

          p1a: 'نيويورك، نيويورك - 28 ديسمبر 2025 - أعلنت Kakr Labs اليوم انضمامها إلى Google Cloud Partner Advantage بصفتها ',
          p1Highlight: 'شريكًا بمستوى Partner ضمن نموذج Build',
          p1b: '، لمساعدة عملاء Google Cloud عبر PTERI Infrastructure - طبقة هوية قائمة على التوقيع وخدمة Blockchain-as-a-Service (BaaS) مدعومة بـ Litecoin، صُممت لاستبدال التحقق المعتمد على OTP ودعم الاقتصاد الناشئ لوكلاء الذكاء الاصطناعي.',

          p2: 'وبصفتها شريكًا في Google Cloud، تقدم Kakr نهجًا حديثًا للهوية يقلل الاعتماد على المصادقة المرتبطة بصندوق البريد، مع تمكين تحققٍ حتميّ ومشفّر للمستخدمين والأنظمة المؤتمتة. وتشمل الميزات الرئيسية ما يلي:',

          features: [
            { title: 'هوية قائمة على التوقيع', desc: 'تنقل المؤسسات إلى ما بعد OTP عبر إثباتات مشفرة مرتبطة بمعرّفات البريد الإلكتروني الحالية.' },
            { title: 'التوافق مع وكلاء الذكاء الاصطناعي', desc: 'تمكّن المصادقة لسير العمل المؤتمت والمدفوع بالذكاء الاصطناعي دون الوصول إلى البريد الوارد.' },
            { title: 'BaaS مدعومة بـ Litecoin', desc: 'توفر طبقة تسوية عالية الضمان مدعومة بتشفير Litecoin الناضج.' },
            { title: 'نشر سحابي أصيل', desc: 'مبني على Google Cloud باستخدام Cloud Run وشبكات VPC وCloud Armor للتوسع والأمان.' }
          ],

          quote: {
            title: 'تصريح',
            text: 'إن افتراضات التحقق من عصر Web2 لم تعد تدعم الأنظمة المؤتمتة. تقدم PTERI للمؤسسات مسارًا واضحًا وعمليًا لاعتماد نماذج هوية وتسوية مناسبة للذكاء الاصطناعي والأتمتة وأمنٍ جاهز للمستقبل.',
            by: 'Harvin Singh، الرئيس التنفيذي لـ KAKR Labs'
          },

          learnMore: {
            prefix: 'لمعرفة المزيد، يرجى زيارة ',
            label: 'kakr.org',
            url: 'https://kakr.org'
          },

          about: {
            title: 'نبذة عن KAKR Labs',
            text: 'تسد Kakr الفجوة بين Web2 التقليدي وعصر Web3 عبر استبدال “ألعاب التخمين” الأمنية القديمة بإثباتات مشفرة قابلة للتحقق. نحن نوفر بنية تحتية عالية الضمان للهوية والتسوية، مصممة لتأمين الاقتصاد الناشئ لوكلاء الذكاء الاصطناعي.'
          }
        },
        sidebar: {
            aboutCompany: 'عن الشركة',
            kakrDesc: 'تبني Kakr Labs بنية تحتية مشفرة تستبدل الأمان القائم على التخمين بسلطة حتمية.',
            pteriDesc: 'PTERI هي طبقة سلطة عالمية يتم تسليمها من خلال محفظة ذاتية الحفظ.',
            mediaContacts: 'جهات الاتصال الإعلامية',
            pressRelations: 'العلاقات الصحفية',
            latestNews: 'آخر الأخبار',
            seeAll: 'مشاهدة جميع الإعلانات',
            visitPressRoom: 'زيارة غرفة الصحافة →'
        },
        seo: {
            title: 'تنضم Kakr Labs إلى Google Cloud Partner Advantage | بيان صحفي',
            description: 'تنضم Kakr Labs إلى Google Cloud Partner Advantage لتقديم سلطة حتمية.'
        }
    }
  }
  return translations[locale.value] || translations.en
})

// SEO
useSEO({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
  openGraph: {
     image: '/og/og-press-google-cloud-partnership.png'
  },
  twitterCard: {
     card: 'summary_large_image',
     image: '/og/og-press-google-cloud-partnership.png'
  }
})
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-6 sm:px-8 lg:px-12;
}
</style>
