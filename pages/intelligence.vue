<template>
  <div class="bg-black text-white  font-sans selection:bg-green-600 selection:text-white min-h-screen">
    
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-white">
      <div class="absolute inset-0 z-0 opacity-[0.03]" style="background-size: 50px 50px; background-image: linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px);"></div>
      
      <div class="relative z-10 max-w-5xl mx-auto text-center">
        <div class="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-bold mb-6 border border-green-200">
          {{ content.hero.badge }}
        </div>
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
          {{ content.hero.title }}
          <span class="block text-green-600 mt-2"> {{ content.hero.titleHighlight }}</span>
        </h1>
        <p class="text-xl sm:text-2xl text-white/90  max-w-4xl mx-auto leading-relaxed mb-6">
          {{ content.hero.subtitle }}
        </p>
        <p class="text-lg text-green-600 font-semibold mb-10">
          {{ content.hero.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://playground.pteri.org/" target="_blank" class="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-lg shadow-lg shadow-green-600/20 transform hover:scale-105 transition-all">
            {{ content.hero.tryIntelligence }}
          </a>
          <a href="https://docs.kakr.ai/" target="_blank" class="px-8 py-4 bg-black border-2 border-white/10  hover:border-green-500 rounded-lg font-bold text-lg text-white  hover:bg-white/3 dark:hover:bg-dark-700 transition-all">
            {{ content.hero.viewDocs }}
          </a>
        </div>
      </div>
    </section>

    <!-- Storylane Demo Section -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 bg-black border-b border-white/8 ">
       <div class="max-w-6xl mx-auto">
          <div class="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10  ring-4 ring-slate-50 dark:ring-dark-800">
             <iframe 
                src="https://app.storylane.io/share/xecpivgcdcoe" 
                class="absolute top-0 left-0 w-full h-full"
                border="0" 
                allowfullscreen 
                allow="fullscreen"
                style="border: none;">
             </iframe>
          </div>
       </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl sm:text-5xl font-bold text-center mb-12">{{ content.howItWorks.title }}</h2>
        
        <div class="bg-black border border-white/10  rounded-2xl p-4 sm:p-8 shadow-xl">
          <div class="flex justify-center">
            <img 
              src="/D3_ How Pteri Secures AI Agent.png" 
              alt="How Pteri Secures AI Agents Architecture" 
              class="w-full h-auto rounded-xl shadow-sm"
            />
          </div>
          <p class="text-center text-white/70  mt-8 text-lg font-medium">
            {{ content.howItWorks.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- What PTERI Intelligence Can Do -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16">{{ content.capabilities.title }}</h2>
        
        <div class="space-y-8">
          <div v-for="(capability, index) in content.capabilities.items" :key="index" class="bg-black border border-white/10  rounded-2xl p-8 hover:shadow-xl hover:border-green-200 transition-all">
            <h3 class="text-2xl font-bold text-green-600 mb-6">{{ capability.title }}</h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Tell it Section -->
              <div class="bg-black rounded-lg p-6">
                <p class="text-sm text-white/60 mb-3">{{ content.capabilities.tellIt }}</p>
                <p class="text-green-400 font-mono text-sm sm:text-base">{{ capability.prompt }}</p>
              </div>
              
              <!-- It gives you Section -->
              <div class="bg-green-50 border border-green-100 rounded-lg p-6">
                <p class="text-sm text-white/70  font-semibold mb-3">{{ content.capabilities.itGivesYou }}</p>
                <ul class="space-y-2">
                  <li v-for="output in capability.outputs" :key="output" class="text-white/90  flex items-start gap-2">
                    <span class="text-green-600 font-bold">✓</span>
                    <span>{{ output }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet PTERI Intelligence -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-4xl sm:text-5xl font-bold mb-6">
          Meet <span class="text-green-600">PTERI Intelligence</span>
        </h2>
        <p class="text-xl text-white/70  mb-12 max-w-4xl mx-auto">
          PTERI Intelligence is an AI system trained to understand blockchain, Litecoin, authentication, and IoT.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          <div v-for="skill in aiSkills" :key="skill" class="p-4 bg-green-50 border border-green-100 rounded-xl text-center hover:bg-green-100 transition-all">
            <p class="text-sm font-bold text-green-700">{{ skill }}</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
          <p class="text-2xl font-bold text-white ">
            It is your full-time senior engineer, available instantly.
          </p>
        </div>
      </div>
    </section>

    <!-- Why Developers Love It -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16">Why Developers Love It</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="benefit in content.benefits.items" :key="benefit.title" class="bg-[#0f0f0f] border border-white/10 rounded-xl p-8 hover:shadow-lg hover:border-green-200 transition-all group">
            <div class="text-4xl mb-4 text-green-600">{{ benefit.icon }}</div>
            <h3 class="text-xl font-bold mb-3 text-white  group-hover:text-green-600 transition-colors">{{ benefit.title }}</h3>
            <p class="text-white/70 ">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16">Use Cases</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="useCase in content.useCases.items" :key="useCase.title" class="bg-green-50 border border-green-100 rounded-xl p-8 hover:bg-green-100 transition-all">
            <div class="text-5xl mb-4">{{ useCase.icon }}</div>
            <h3 class="text-xl font-bold mb-3 text-white ">{{ useCase.title }}</h3>
            <p class="text-white/90 ">{{ useCase.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Example Conversations -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl sm:text-5xl font-bold text-center mb-16">Example Conversations</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(example, index) in examples" :key="index" class="bg-black border border-white/10  rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4 text-green-600">{{ example.title }}</h3>
            <div class="bg-black rounded-lg p-4 mb-4">
              <p class="text-sm text-white/60 mb-2">Prompt:</p>
              <p class="text-green-400 font-mono text-sm">{{ example.prompt }}</p>
            </div>
            <div class="bg-green-50 border border-green-100 rounded-lg p-4">
              <p class="text-sm text-white/70  font-semibold mb-2">Result:</p>
              <p class="text-white/90 ">{{ example.result }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Final CTA -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl sm:text-5xl font-black mb-6">
          Build smarter. <span class="text-green-600">Build faster.</span>
        </h2>
        <p class="text-2xl text-white/90  mb-10">Let AI write your blockchain code.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://playground.pteri.org/" target="_blank" class="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-lg shadow-lg shadow-green-600/20 transform hover:scale-105 transition-all">
            Try Intelligence
          </a>
          <a href="https://docs.kakr.ai/" target="_blank" class="px-8 py-4 bg-black border-2 border-white/10  hover:border-green-500 rounded-lg font-bold text-lg hover:bg-black transition-all">
            View Docs
          </a>
          <a href="https://pteri.org/Register" target="_blank" class="px-8 py-4 bg-black border-2 border-white/10  hover:border-green-500 rounded-lg font-bold text-lg hover:bg-black transition-all">
            Get API Key
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead, useSeoMeta } from '#imports'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()
const { setSEO } = useSEO()

setSEO({
  title: 'PTERI Intelligence - AI-Powered Web3 Development | Kakr Labs',
  description: 'Build blockchain applications 10x faster with PTERI Intelligence. Our AI co-pilot generates code, API calls, and authentication flows automatically.',
  image: '/og/og-pteri-intelligence.png'
})

const content = computed(() => {
  const translations = {
    en: {
      hero: {
        badge: 'AI FOR DEVELOPERS',
        title: 'Build Blockchain Apps',
        titleHighlight: '10x Faster With AI',
        subtitle: 'PTERI Intelligence is your developer co-pilot - generating code, API calls, authentication flows, IoT logic, transaction scripts, and debugging help automatically.',
        description: 'Just describe what you want, and it builds it.',
        tryIntelligence: 'Try Intelligence',
        viewDocs: 'View Docs'
      },
      howItWorks: {
        title: 'How It Works (Architecture)',
        description: 'Your AI assistant is directly connected to your infrastructure.'
      },
      capabilities: {
        title: 'What PTERI Intelligence Can Do',
        tellIt: 'Tell it:',
        itGivesYou: 'It gives you:',
        items: [
          {
            title: '1. Generate Blockchain API Calls',
            prompt: '"Fetch the last 20 transactions for this Litecoin address."',
            outputs: [
              'The correct endpoint',
              'Parameters',
              'Working code sample',
              'Explanation',
              'Next debugging steps'
            ]
          },
          {
            title: '2. Build Authentication & Login Flows',
            prompt: '"Create a passwordless login system using PTERI Authentication in Node.js."',
            outputs: [
              'Server logic',
              'Client code',
              'How to handle signatures',
              'How to store sessions',
              'Best practices'
            ]
          },
          {
            title: '3. Debug Errors Instantly',
            prompt: '"Invalid signature error on login..."',
            outputs: [
              'What caused the issue',
              'How to fix it',
              'What to check next',
              'No more losing hours on StackOverflow'
            ]
          },
          {
            title: '4. Build IoT Identity Workflows',
            prompt: '"Register 100 IoT devices and verify their signatures."',
            outputs: [
              'Provisioning code',
              'Device registration logic',
              'Mitigation details',
              'Testing instructions'
            ]
          },
          {
            title: '5. Generate Scripts in Any Language',
            prompt: '"Show me how to send LTC in Python."',
            outputs: [
              'Full working script delivered',
              'Supports: JavaScript, Python, Dart, Swift, Go'
            ]
          },
          {
            title: '6. Explain Blockchain Concepts',
            prompt: '"How does PTERI verify agent identity?"',
            outputs: [
              'Clear explanations of identity verification',
              'Key signatures',
              'PoW validation',
              'Device identity',
              'Raw transactions and UTXOs'
            ]
          },
          {
            title: '7. Build Entire Apps and Components',
            prompt: '"Build a Litecoin portfolio tracker."',
            outputs: [
              'Backend',
              'Frontend',
              'Database instructions',
              'RPC sourcing',
              'Code examples'
            ]
          }
        ]
      },
      meet: {
        title: 'Meet',
        titleHighlight: 'PTERI Intelligence',
        subtitle: 'PTERI Intelligence is an AI system trained to understand blockchain, Litecoin, authentication, and IoT.',
        tagline: 'It is your full-time senior engineer, available instantly.'
      },
      benefits: {
        title: 'Why Developers Love It',
        items: [
          {
            icon: '',
            title: 'Instant Answers',
            description: 'No documentation rabbit holes.'
          },
          {
            icon: '',
            title: 'Real Code, Ready to Ship',
            description: 'Not just explanations - working scripts.'
          },
          {
            icon: '',
            title: 'Deep Domain Knowledge',
            description: 'Understands Litecoin, authentication, identity, IoT.'
          },
          {
            icon: '',
            title: 'AI + Infra + Auth = Complete Stack',
            description: 'Only Kakr Labs has everything in one place.'
          },
          {
            icon: '',
            title: 'Saves Weeks of Work',
            description: 'Prototype in minutes, not days.'
          }
        ]
      },
      useCases: {
        title: 'Use Cases',
        items: [
          {
            icon: '',
            title: 'Solo Developers',
            description: 'Build full apps with minimal effort.'
          },
          {
            icon: '',
            title: 'Teams',
            description: 'Speed up onboarding, dev cycles, and reviews.'
          },
          {
            icon: '',
            title: 'Startups',
            description: 'Move from idea → MVP in a single day.'
          },
          {
            icon: '',
            title: 'Enterprises',
            description: 'Get plug-and-play authentication + IoT + infra logic.'
          },
          {
            icon: '',
            title: 'Students',
            description: 'Learn blockchain through interactive AI discussions.'
          }
        ]
      },
      examples: {
        title: 'Example Conversations',
        prompt: 'Prompt:',
        result: 'Result:',
        items: [
          {
            title: 'Example 1 - Authentication',
            prompt: 'Help me integrate PTERI Authentication in Flutter.',
            result: 'Full code, UI snippet, functions, callback logic.'
          },
          {
            title: 'Example 2 - Node APIs',
            prompt: 'Write an endpoint to get the balance of 10 Litecoin addresses.',
            result: 'Returns Express.js or Python FastAPI code.'
          },
          {
            title: 'Example 3 - IoT Firmware',
            prompt: 'How do I sign a firmware update using PTERI?',
            result: 'Explains + generates code.'
          },
          {
            title: 'Example 4 - Debugging',
            prompt: 'Why is my transaction stuck in mempool?',
            result: 'Explains fees, network timing, tx structure.'
          }
        ]
      },
      cta: {
        title: 'Build smarter.',
        titleHighlight: 'Build faster.',
        subtitle: 'Let AI write your blockchain code.',
        tryIntelligence: 'Try Intelligence',
        viewDocs: 'View Docs',
        getApiKey: 'Get API Key'
      },
      seo: {
        title: 'PTERI Intelligence - AI for Blockchain Developers',
        description: 'Build blockchain apps 10x faster with AI. PTERI Intelligence generates code, API calls, and authentication flows automatically.'
      }
    },
    de: {
      hero: {
        badge: 'KI FÜR ENTWICKLER',
        title: 'Blockchain-Apps erstellen',
        titleHighlight: '10x schneller mit KI',
        subtitle: 'PTERI Intelligence ist Ihr Entwickler-Copilot - generiert automatisch Code, API-Aufrufe, Authentifizierungsflüsse, IoT-Logik, Transaktionsskripte und Debugging-Hilfe.',
        description: 'Beschreiben Sie einfach, was Sie wollen, und es erstellt es.',
        tryIntelligence: 'Intelligence testen',
        viewDocs: 'Dokumentation anzeigen'
      },
      howItWorks: {
        title: 'Wie es funktioniert (Architektur)',
        description: 'Ihr KI-Assistent ist direkt mit Ihrer Infrastruktur verbunden.'
      },
      capabilities: {
        title: 'Was PTERI Intelligence kann',
        tellIt: 'Sagen Sie es:',
        itGivesYou: 'Es gibt Ihnen:',
        items: [
          {
            title: '1. Blockchain-API-Aufrufe generieren',
            prompt: '"Hole die letzten 20 Transaktionen für diese Litecoin-Adresse."',
            outputs: [
              'Der korrekte Endpunkt',
              'Parameter',
              'Funktionierendes Code-Beispiel',
              'Erklärung',
              'Nächste Debugging-Schritte'
            ]
          },
          {
            title: '2. Authentifizierungs- und Login-Flüsse erstellen',
            prompt: '"Erstelle ein passwortloses Login-System mit PTERI Authentication in Node.js."',
            outputs: [
              'Server-Logik',
              'Client-Code',
              'Wie man Signaturen behandelt',
              'Wie man Sessions speichert',
              'Best Practices'
            ]
          },
          {
            title: '3. Fehler sofort debuggen',
            prompt: '"Ungültiger Signaturfehler beim Login..."',
            outputs: [
              'Was das Problem verursacht hat',
              'Wie man es behebt',
              'Was als nächstes zu prüfen ist',
              'Keine Stunden mehr auf StackOverflow verlieren'
            ]
          },
          {
            title: '4. IoT-Identitäts-Workflows erstellen',
            prompt: '"Registriere 100 IoT-Geräte und verifiziere ihre Signaturen."',
            outputs: [
              'Bereitstellungscode',
              'Geräteregistrierungslogik',
              'Mitigationsdetails',
              'Testanweisungen'
            ]
          },
          {
            title: '5. Skripte in jeder Sprache generieren',
            prompt: '"Zeige mir, wie man LTC in Python sendet."',
            outputs: [
              'Vollständiges funktionierendes Skript geliefert',
              'Unterstützt: JavaScript, Python, Dart, Swift, Go'
            ]
          },
          {
            title: '6. Blockchain-Konzepte erklären',
            prompt: '"Wie überprüft PTERI die Identität eines Agenten?"',
            outputs: [
              'Klare Erklärungen der Identitätsüberprüfung',
              'Schlüsselsignaturen',
              'PoW-Validierung',
              'Geräteidentität',
              'Raw-Transaktionen und UTXOs'
            ]
          },
          {
            title: '7. Ganze Apps und Komponenten erstellen',
            prompt: '"Erstelle einen Litecoin-Portfolio-Tracker."',
            outputs: [
              'Backend',
              'Frontend',
              'Datenbankanweisungen',
              'RPC-Beschaffung',
              'Code-Beispiele'
            ]
          }
        ]
      },
      meet: {
        title: 'Lernen Sie',
        titleHighlight: 'PTERI Intelligence',
        subtitle: 'PTERI Intelligence ist ein KI-System, das darauf trainiert ist, Blockchain, Litecoin, Authentifizierung und IoT zu verstehen.',
        tagline: 'Es ist Ihr Vollzeit-Senior-Ingenieur, sofort verfügbar.'
      },
      benefits: {
        title: 'Warum Entwickler es lieben',
        items: [
          {
            icon: '',
            title: 'Sofortige Antworten',
            description: 'Keine Dokumentations-Kaninchenlöcher.'
          },
          {
            icon: '',
            title: 'Echter Code, versandbereit',
            description: 'Nicht nur Erklärungen - funktionierende Skripte.'
          },
          {
            icon: '',
            title: 'Tiefes Domänenwissen',
            description: 'Versteht Litecoin, Authentifizierung, Identität, IoT.'
          },
          {
            icon: '',
            title: 'KI + Infra + Auth = Kompletter Stack',
            description: 'Nur Kakr Labs hat alles an einem Ort.'
          },
          {
            icon: '',
            title: 'Spart Wochen an Arbeit',
            description: 'Prototyp in Minuten, nicht Tagen.'
          }
        ]
      },
      useCases: {
        title: 'Anwendungsfälle',
        items: [
          {
            icon: '',
            title: 'Solo-Entwickler',
            description: 'Vollständige Apps mit minimalem Aufwand erstellen.'
          },
          {
            icon: '',
            title: 'Teams',
            description: 'Onboarding, Entwicklungszyklen und Reviews beschleunigen.'
          },
          {
            icon: '',
            title: 'Startups',
            description: 'Von der Idee zum MVP an einem einzigen Tag.'
          },
          {
            icon: '',
            title: 'Unternehmen',
            description: 'Plug-and-Play-Authentifizierung + IoT + Infra-Logik erhalten.'
          },
          {
            icon: '',
            title: 'Studenten',
            description: 'Blockchain durch interaktive KI-Diskussionen lernen.'
          }
        ]
      },
      examples: {
        title: 'Beispielgespräche',
        prompt: 'Eingabe:',
        result: 'Ergebnis:',
        items: [
          {
            title: 'Beispiel 1 - Authentifizierung',
            prompt: 'Hilf mir, PTERI Authentication in Flutter zu integrieren.',
            result: 'Vollständiger Code, UI-Snippet, Funktionen, Callback-Logik.'
          },
          {
            title: 'Beispiel 2 - Node APIs',
            prompt: 'Schreibe einen Endpunkt, um das Guthaben von 10 Litecoin-Adressen zu erhalten.',
            result: 'Gibt Express.js- oder Python FastAPI-Code zurück.'
          },
          {
            title: 'Beispiel 3 - IoT-Firmware',
            prompt: 'Wie signiere ich ein Firmware-Update mit PTERI?',
            result: 'Erklärt + generiert Code.'
          },
          {
            title: 'Beispiel 4 - Debugging',
            prompt: 'Warum steckt meine Transaktion im Mempool fest?',
            result: 'Erklärt Gebühren, Netzwerk-Timing, TX-Struktur.'
          }
        ]
      },
      cta: {
        title: 'Intelligenter bauen.',
        titleHighlight: 'Schneller bauen.',
        subtitle: 'Lassen Sie KI Ihren Blockchain-Code schreiben.',
        tryIntelligence: 'Intelligence testen',
        viewDocs: 'Dokumentation anzeigen',
        getApiKey: 'API-Schlüssel erhalten'
      },
      seo: {
        title: 'PTERI Intelligence - KI für Blockchain-Entwickler',
        description: 'Erstellen Sie Blockchain-Apps 10x schneller mit KI. PTERI Intelligence generiert automatisch Code, API-Aufrufe und Authentifizierungsflüsse.'
      }
    },
    es: {
      hero: {
        badge: 'IA PARA DESARROLLADORES',
        title: 'Construye Apps Blockchain',
        titleHighlight: '10x Más Rápido Con IA',
        subtitle: 'PTERI Intelligence es tu copiloto de desarrollador - genera automáticamente código, llamadas API, flujos de autenticación, lógica IoT, scripts de transacciones y ayuda de depuración.',
        description: 'Solo describe lo que quieres, y lo construye.',
        tryIntelligence: 'Probar Intelligence',
        viewDocs: 'Ver Documentos'
      },
      howItWorks: {
        title: 'Cómo Funciona (Arquitectura)',
        description: 'Tu asistente de IA está directamente conectado a tu infraestructura.'
      },
      capabilities: {
        title: 'Qué Puede Hacer PTERI Intelligence',
        tellIt: 'Dile:',
        itGivesYou: 'Te da:',
        items: [
          {
            title: '1. Generar Llamadas API Blockchain',
            prompt: '"Obtén las últimas 20 transacciones para esta dirección Litecoin."',
            outputs: [
              'El endpoint correcto',
              'Parámetros',
              'Muestra de código funcional',
              'Explicación',
              'Próximos pasos de depuración'
            ]
          },
          {
            title: '2. Construir Flujos de Autenticación y Login',
            prompt: '"Crea un sistema de login sin contraseña usando PTERI Authentication en Node.js."',
            outputs: [
              'Lógica del servidor',
              'Código del cliente',
              'Cómo manejar firmas',
              'Cómo almacenar sesiones',
              'Mejores prácticas'
            ]
          },
          {
            title: '3. Depurar Errores Instantáneamente',
            prompt: '"Error de firma inválida al iniciar sesión..."',
            outputs: [
              'Qué causó el problema',
              'Cómo solucionarlo',
              'Qué verificar después',
              'No más perder horas en StackOverflow'
            ]
          },
          {
            title: '4. Construir Flujos de Identidad IoT',
            prompt: '"Registra 100 dispositivos IoT y verifica sus firmas."',
            outputs: [
              'Código de aprovisionamiento',
              'Lógica de registro de dispositivos',
              'Detalles de mitigación',
              'Instrucciones de prueba'
            ]
          },
          {
            title: '5. Generar Scripts en Cualquier Lenguaje',
            prompt: '"Muéstrame cómo enviar LTC en Python."',
            outputs: [
              'Script completo funcional entregado',
              'Soporta: JavaScript, Python, Dart, Swift, Go'
            ]
          },
          {
            title: '6. Explicar Conceptos Blockchain',
            prompt: '"¿Cómo verifica PTERI la identidad de un agente?"',
            outputs: [
              'Explicaciones claras de la verificación de identidad',
              'Firmas de claves',
              'Validación PoW',
              'Identidad del dispositivo',
              'Transacciones raw y UTXOs'
            ]
          },
          {
            title: '7. Construir Apps y Componentes Completos',
            prompt: '"Construye un rastreador de portafolio Litecoin."',
            outputs: [
              'Backend',
              'Frontend',
              'Instrucciones de base de datos',
              'Obtención RPC',
              'Ejemplos de código'
            ]
          }
        ]
      },
      meet: {
        title: 'Conoce',
        titleHighlight: 'PTERI Intelligence',
        subtitle: 'PTERI Intelligence es un sistema de IA entrenado para entender blockchain, Litecoin, autenticación e IoT.',
        tagline: 'Es tu ingeniero senior de tiempo completo, disponible instantáneamente.'
      },
      benefits: {
        title: 'Por Qué Los Desarrolladores Lo Aman',
        items: [
          {
            icon: '',
            title: 'Respuestas Instantáneas',
            description: 'Sin madrigueras de documentación.'
          },
          {
            icon: '',
            title: 'Código Real, Listo para Enviar',
            description: 'No solo explicaciones - scripts funcionales.'
          },
          {
            icon: '',
            title: 'Conocimiento Profundo del Dominio',
            description: 'Entiende Litecoin, autenticación, identidad, IoT.'
          },
          {
            icon: '',
            title: 'IA + Infra + Auth = Stack Completo',
            description: 'Solo Kakr Labs tiene todo en un lugar.'
          },
          {
            icon: '',
            title: 'Ahorra Semanas de Trabajo',
            description: 'Prototipo en minutos, no días.'
          }
        ]
      },
      useCases: {
        title: 'Casos de Uso',
        items: [
          {
            icon: '',
            title: 'Desarrolladores Solo',
            description: 'Construye apps completas con mínimo esfuerzo.'
          },
          {
            icon: '',
            title: 'Equipos',
            description: 'Acelera onboarding, ciclos de dev y revisiones.'
          },
          {
            icon: '',
            title: 'Startups',
            description: 'Muévete de idea → MVP en un solo día.'
          },
          {
            icon: '',
            title: 'Empresas',
            description: 'Obtén autenticación plug-and-play + IoT + lógica infra.'
          },
          {
            icon: '',
            title: 'Estudiantes',
            description: 'Aprende blockchain a través de discusiones interactivas de IA.'
          }
        ]
      },
      examples: {
        title: 'Conversaciones de Ejemplo',
        prompt: 'Prompt:',
        result: 'Resultado:',
        items: [
          {
            title: 'Ejemplo 1 - Autenticación',
            prompt: 'Ayúdame a integrar PTERI Authentication en Flutter.',
            result: 'Código completo, snippet UI, funciones, lógica callback.'
          },
          {
            title: 'Ejemplo 2 - APIs Node',
            prompt: 'Escribe un endpoint para obtener el balance de 10 direcciones Litecoin.',
            result: 'Devuelve código Express.js o Python FastAPI.'
          },
          {
            title: 'Ejemplo 3 - Firmware IoT',
            prompt: '¿Cómo firmo una actualización de firmware usando PTERI?',
            result: 'Explica + genera código.'
          },
          {
            title: 'Ejemplo 4 - Depuración',
            prompt: '¿Por qué mi transacción está atascada en mempool?',
            result: 'Explica tarifas, timing de red, estructura tx.'
          }
        ]
      },
      cta: {
        title: 'Construye más inteligente.',
        titleHighlight: 'Construye más rápido.',
        subtitle: 'Deja que la IA escriba tu código blockchain.',
        tryIntelligence: 'Probar Intelligence',
        viewDocs: 'Ver Documentos',
        getApiKey: 'Obtener Clave API'
      },
      seo: {
        title: 'PTERI Intelligence - IA para Desarrolladores Blockchain',
        description: 'Construye apps blockchain 10x más rápido con IA. PTERI Intelligence genera automáticamente código, llamadas API y flujos de autenticación.'
      }
    },
    ja: {
      hero: {
        badge: '開発者向けAI',
        title: 'ブロックチェーンアプリを構築',
        titleHighlight: 'AIで10倍高速に',
        subtitle: 'PTERI Intelligenceは開発者のコパイロットです - コード、API呼び出し、認証フロー、IoTロジック、トランザクションスクリプト、デバッグヘルプを自動生成します。',
        description: '欲しいものを説明するだけで、それを構築します。',
        tryIntelligence: 'Intelligenceを試す',
        viewDocs: 'ドキュメントを見る'
      },
      howItWorks: {
        title: '仕組み（アーキテクチャ）',
        description: 'あなたのAIアシスタントはインフラストラクチャに直接接続されています。'
      },
      capabilities: {
        title: 'PTERI Intelligenceができること',
        tellIt: '指示:',
        itGivesYou: '提供されるもの:',
        items: [
          {
            title: '1. ブロックチェーンAPI呼び出しの生成',
            prompt: '"このLitecoinアドレスの最新20件のトランザクションを取得して。"',
            outputs: [
              '正しいエンドポイント',
              'パラメータ',
              '動作するコードサンプル',
              '説明',
              '次のデバッグステップ'
            ]
          },
          {
            title: '2. 認証とログインフローの構築',
            prompt: '"Node.jsでPTERI Authenticationを使用したパスワードレスログインシステムを作成して。"',
            outputs: [
              'サーバーロジック',
              'クライアントコード',
              '署名の処理方法',
              'セッションの保存方法',
              'ベストプラクティス'
            ]
          },
          {
            title: '3. エラーの即座デバッグ',
            prompt: '"ログイン時に無効な署名エラー..."',
            outputs: [
              '問題の原因',
              '修正方法',
              '次にチェックすること',
              'StackOverflowで時間を無駄にしない'
            ]
          },
          {
            title: '4. IoTアイデンティティワークフローの構築',
            prompt: '"100台のIoTデバイスを登録し、その署名を検証して。"',
            outputs: [
              'プロビジョニングコード',
              'デバイス登録ロジック',
              '軽減詳細',
              'テスト手順'
            ]
          },
          {
            title: '5. 任意の言語でスクリプト生成',
            prompt: '"PythonでLTCを送信する方法を教えて。"',
            outputs: [
              '完全に動作するスクリプトを提供',
              'サポート: JavaScript, Python, Dart, Swift, Go'
            ]
          },
          {
            title: '6. ブロックチェーン概念の説明',
            prompt: '"PTERIはどのようにエージェントのIDを検証しますか？"',
            outputs: [
              'アイデンティティ検証の明確な説明',
              'キー署名',
              'PoW検証',
              'デバイスアイデンティティ',
              '生トランザクションとUTXO'
            ]
          },
          {
            title: '7. 完全なアプリとコンポーネントの構築',
            prompt: '"Litecoinポートフォリオトラッカーを構築して。"',
            outputs: [
              'バックエンド',
              'フロントエンド',
              'データベース手順',
              'RPC調達',
              'コード例'
            ]
          }
        ]
      },
      meet: {
        title: '紹介',
        titleHighlight: 'PTERI Intelligence',
        subtitle: 'PTERI Intelligenceは、ブロックチェーン、Litecoin、認証、IoTを理解するように訓練されたAIシステムです。',
        tagline: 'それはあなたのフルタイムシニアエンジニアで、即座に利用可能です。'
      },
      benefits: {
        title: '開発者が愛する理由',
        items: [
          {
            icon: '',
            title: '即座の回答',
            description: 'ドキュメントの迷路なし。'
          },
          {
            icon: '',
            title: '実際のコード、出荷準備完了',
            description: '説明だけでなく - 動作するスクリプト。'
          },
          {
            icon: '',
            title: '深いドメイン知識',
            description: 'Litecoin、認証、アイデンティティ、IoTを理解。'
          },
          {
            icon: '🏗️',
            title: 'AI + インフラ + 認証 = 完全スタック',
            description: 'Kakr Labsだけがすべてを一箇所に。'
          },
          {
            icon: '⏱️',
            title: '数週間の作業を節約',
            description: '日ではなく分でプロトタイプ。'
          }
        ]
      },
      useCases: {
        title: 'ユースケース',
        items: [
          {
            icon: '',
            title: 'ソロ開発者',
            description: '最小限の努力で完全なアプリを構築。'
          },
          {
            icon: '👥',
            title: 'チーム',
            description: 'オンボーディング、開発サイクル、レビューを加速。'
          },
          {
            icon: '',
            title: 'スタートアップ',
            description: 'アイデアからMVPまで1日で。'
          },
          {
            icon: '',
            title: '企業',
            description: 'プラグアンドプレイ認証 + IoT + インフラロジックを取得。'
          },
          {
            icon: '',
            title: '学生',
            description: 'インタラクティブなAI議論を通じてブロックチェーンを学習。'
          }
        ]
      },
      examples: {
        title: '会話例',
        prompt: 'プロンプト:',
        result: '結果:',
        items: [
          {
            title: '例1 - 認証',
            prompt: 'FlutterでPTERI Authenticationを統合するのを手伝って。',
            result: '完全なコード、UIスニペット、関数、コールバックロジック。'
          },
          {
            title: '例2 - Node API',
            prompt: '10個のLitecoinアドレスの残高を取得するエンドポイントを書いて。',
            result: 'Express.jsまたはPython FastAPIコードを返す。'
          },
          {
            title: '例3 - IoTファームウェア',
            prompt: 'PTERIを使用してファームウェア更新に署名する方法は？',
            result: '説明 + コード生成。'
          },
          {
            title: '例4 - デバッグ',
            prompt: 'なぜ私のトランザクションがmempoolで詰まっているの？',
            result: '手数料、ネットワークタイミング、tx構造を説明。'
          }
        ]
      },
      cta: {
        title: 'よりスマートに構築。',
        titleHighlight: 'より高速に構築。',
        subtitle: 'AIにブロックチェーンコードを書かせましょう。',
        tryIntelligence: 'Intelligenceを試す',
        viewDocs: 'ドキュメントを見る',
        getApiKey: 'APIキーを取得'
      },
      seo: {
        title: 'PTERI Intelligence - ブロックチェーン開発者向けAI',
        description: 'AIでブロックチェーンアプリを10倍高速に構築。PTERI Intelligenceは自動的にコード、API呼び出し、認証フローを生成します。'
      }
    },
    ar: {
      hero: {
        badge: 'الذكاء الاصطناعي للمطورين',
        title: 'بناء تطبيقات البلوك تشين',
        titleHighlight: '10 مرات أسرع مع الذكاء الاصطناعي',
        subtitle: 'PTERI Intelligence هو مساعدك المطور - يولد تلقائياً الكود، استدعاءات API، تدفقات المصادقة، منطق إنترنت الأشياء، نصوص المعاملات، ومساعدة التصحيح.',
        description: 'فقط اوصف ما تريد، وسيقوم ببنائه.',
        tryIntelligence: 'جرب Intelligence',
        viewDocs: 'عرض الوثائق'
      },
      howItWorks: {
        title: 'كيف يعمل (الهيكل)',
        description: 'مساعد الذكاء الاصطناعي الخاص بك متصل مباشرة بالبنية التحتية الخاصة بك.'
      },
      capabilities: {
        title: 'ما يمكن لـ PTERI Intelligence فعله',
        tellIt: 'أخبره:',
        itGivesYou: 'يعطيك:',
        items: [
          {
            title: '1. توليد استدعاءات API البلوك تشين',
            prompt: '"احضر آخر 20 معاملة لعنوان Litecoin هذا."',
            outputs: [
              'النقطة النهائية الصحيحة',
              'المعاملات',
              'عينة كود عاملة',
              'شرح',
              'خطوات التصحيح التالية'
            ]
          },
          {
            title: '2. بناء تدفقات المصادقة وتسجيل الدخول',
            prompt: '"أنشئ نظام تسجيل دخول بدون كلمة مرور باستخدام PTERI Authentication في Node.js."',
            outputs: [
              'منطق الخادم',
              'كود العميل',
              'كيفية التعامل مع التوقيعات',
              'كيفية تخزين الجلسات',
              'أفضل الممارسات'
            ]
          },
          {
            title: '3. تصحيح الأخطاء فوراً',
            prompt: '"خطأ توقيع غير صالح عند تسجيل الدخول..."',
            outputs: [
              'ما سبب المشكلة',
              'كيفية إصلاحها',
              'ما يجب فحصه بعد ذلك',
              'لا مزيد من ضياع الساعات على StackOverflow'
            ]
          },
          {
            title: '4. بناء تدفقات هوية إنترنت الأشياء',
            prompt: '"سجل 100 جهاز إنترنت أشياء وتحقق من توقيعاتها."',
            outputs: [
              'كود التوفير',
              'منطق تسجيل الجهاز',
              'تفاصيل التخفيف',
              'تعليمات الاختبار'
            ]
          },
          {
            title: '5. توليد نصوص بأي لغة',
            prompt: '"أرني كيفية إرسال LTC في Python."',
            outputs: [
              'نص عامل كامل مُسلم',
              'يدعم: JavaScript, Python, Dart, Swift, Go'
            ]
          },
          {
            title: '6. شرح مفاهيم البلوك تشين',
            prompt: '"كيف يتحقق PTERI من هوية الوكيل؟"',
            outputs: [
              'شروحات واضحة للتحقق من الهوية',
              'توقيعات المفاتيح',
              'التحقق من PoW',
              'هوية الجهاز',
              'المعاملات الخام و UTXOs'
            ]
          },
          {
            title: '7. بناء تطبيقات ومكونات كاملة',
            prompt: '"ابن متتبع محفظة Litecoin."',
            outputs: [
              'الخلفية',
              'الواجهة الأمامية',
              'تعليمات قاعدة البيانات',
              'مصادر RPC',
              'أمثلة الكود'
            ]
          }
        ]
      },
      meet: {
        title: 'تعرف على',
        titleHighlight: 'PTERI Intelligence',
        subtitle: 'PTERI Intelligence هو نظام ذكاء اصطناعي مدرب لفهم البلوك تشين، Litecoin، المصادقة، وإنترنت الأشياء.',
        tagline: 'إنه مهندسك الأول بدوام كامل، متاح فوراً.'
      },
      benefits: {
        title: 'لماذا يحبه المطورون',
        items: [
          {
            icon: '',
            title: 'إجابات فورية',
            description: 'لا أنفاق وثائق.'
          },
          {
            icon: '',
            title: 'كود حقيقي، جاهز للشحن',
            description: 'ليس فقط شروحات - نصوص عاملة.'
          },
          {
            icon: '',
            title: 'معرفة عميقة بالمجال',
            description: 'يفهم Litecoin، المصادقة، الهوية، إنترنت الأشياء.'
          },
          {
            icon: '🏗️',
            title: 'ذكاء اصطناعي + بنية تحتية + مصادقة = مجموعة كاملة',
            description: 'فقط Kakr Labs لديها كل شيء في مكان واحد.'
          },
          {
            icon: '⏱️',
            title: 'يوفر أسابيع من العمل',
            description: 'نموذج أولي في دقائق، وليس أيام.'
          }
        ]
      },
      useCases: {
        title: 'حالات الاستخدام',
        items: [
          {
            icon: '',
            title: 'المطورون المنفردون',
            description: 'بناء تطبيقات كاملة بأقل جهد.'
          },
          {
            icon: '👥',
            title: 'الفرق',
            description: 'تسريع الإعداد، دورات التطوير، والمراجعات.'
          },
          {
            icon: '',
            title: 'الشركات الناشئة',
            description: 'الانتقال من الفكرة → MVP في يوم واحد.'
          },
          {
            icon: '',
            title: 'المؤسسات',
            description: 'الحصول على مصادقة plug-and-play + إنترنت الأشياء + منطق البنية التحتية.'
          },
          {
            icon: '',
            title: 'الطلاب',
            description: 'تعلم البلوك تشين من خلال مناقشات الذكاء الاصطناعي التفاعلية.'
          }
        ]
      },
      examples: {
        title: 'أمثلة المحادثات',
        prompt: 'المطالبة:',
        result: 'النتيجة:',
        items: [
          {
            title: 'مثال 1 - المصادقة',
            prompt: 'ساعدني في دمج PTERI Authentication في Flutter.',
            result: 'كود كامل، مقطع UI، وظائف، منطق callback.'
          },
          {
            title: 'مثال 2 - Node APIs',
            prompt: 'اكتب نقطة نهاية للحصول على رصيد 10 عناوين Litecoin.',
            result: 'يعيد كود Express.js أو Python FastAPI.'
          },
          {
            title: 'مثال 3 - البرامج الثابتة لإنترنت الأشياء',
            prompt: 'كيف أوقع تحديث البرامج الثابتة باستخدام PTERI؟',
            result: 'يشرح + يولد الكود.'
          },
          {
            title: 'مثال 4 - التصحيح',
            prompt: 'لماذا معاملتي عالقة في mempool؟',
            result: 'يشرح الرسوم، توقيت الشبكة، هيكل tx.'
          }
        ]
      },
      cta: {
        title: 'ابن بذكاء أكبر.',
        titleHighlight: 'ابن بسرعة أكبر.',
        subtitle: 'دع الذكاء الاصطناعي يكتب كود البلوك تشين الخاص بك.',
        tryIntelligence: 'جرب Intelligence',
        viewDocs: 'عرض الوثائق',
        getApiKey: 'احصل على مفتاح API'
      },
      seo: {
        title: 'PTERI Intelligence - الذكاء الاصطناعي لمطوري البلوك تشين',
        description: 'ابن تطبيقات البلوك تشين 10 مرات أسرع مع الذكاء الاصطناعي. PTERI Intelligence يولد تلقائياً الكود، استدعاءات API، وتدفقات المصادقة.'
      }
    }
  }
  return translations[locale.value] || translations.en
})

const aiSkills = [
  'Litecoin',
  'RPC endpoints',
  'PTERI Auth',
  'Identity flows',
  'IoT provisioning',
  'PTERI APIs',
  'Best practices',
  'Code generation',
  'Debugging'
]

</script>

