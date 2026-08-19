<template>
  <div class="min-h-screen bg-black text-white/80 font-inter pb-24 relative overflow-hidden">
    <!-- Abstract Background Elements -->
    <div class="absolute top-[10%] left-0 w-full h-[800px] pointer-events-none opacity-[0.15] mix-blend-screen" style="background-image: url('/hero-bg.svg'); background-size: cover; background-position: center top;"></div>
    <div class="absolute inset-0 bg-emerald-500/[0.02] pointer-events-none"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16 text-center sm:text-left tracking-tight">
        {{ content.hero.title }}
      </h1>

      <!-- Desktop View (Grid of visible Q&As) -->
      <div class="hidden md:block bg-[#0f0f0f]/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 lg:p-14 shadow-2xl relative">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            <template v-for="section in filteredFaqSections" :key="section.id">
               <template v-for="(faq, idx) in section.items" :key="`${section.id}-${idx}`">
                 <div class="flex flex-col relative z-10 group">
                   <h3 class="text-white font-bold text-lg mb-3 leading-snug group-hover:text-emerald-400 transition-colors">{{ faq.q }}</h3>
                   <div class="text-white/60 text-sm leading-relaxed prose prose-invert prose-p:my-1 max-w-none" v-html="faq.a"></div>
                 </div>
               </template>
            </template>
         </div>

         <!-- Footer inside the box for Desktop -->
         <div class="mt-16 pt-8 border-t border-white/10 text-center flex items-center justify-center gap-4 relative z-10">
            <span class="text-white/80 font-medium">{{ content.footer.stillHaveQuestions }}</span>
            <div class="flex items-center gap-6 text-sm font-bold ml-4">
               <a href="https://docs.kakr.ai" target="_blank" class="text-white hover:text-emerald-400 underline underline-offset-4 transition-colors">{{ content.footer.exploreDocs }}</a>
               <a href="/contact" class="text-white hover:text-emerald-400 underline underline-offset-4 transition-colors">{{ content.footer.contactSales }}</a>
            </div>
         </div>
      </div>

      <!-- Mobile View (Accordions) -->
      <div class="md:hidden space-y-3">
         <template v-for="section in filteredFaqSections" :key="`mobile-${section.id}`">
            <template v-for="(faq, idx) in section.items" :key="`mob-${section.id}-${idx}`">
               <div class="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden transition-colors">
                 <button
                   class="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                   @click="toggle(section.id, idx)"
                 >
                   <span class="text-white font-semibold text-[15px] pr-2">{{ faq.q }}</span>
                   <i class="las la-angle-right text-white/50 text-xl transition-transform duration-300" :class="{ 'rotate-90 text-emerald-500': isActive(section.id, idx) }"></i>
                 </button>
                 <div class="px-5 pb-5 pt-0 text-white/60 text-sm leading-relaxed prose prose-invert prose-p:my-1" v-show="isActive(section.id, idx)" v-html="faq.a"></div>
               </div>
            </template>
         </template>

         <!-- Mobile Footer -->
         <div class="mt-10 pt-8 border-t border-white/10 text-center flex flex-col items-center justify-center gap-6">
            <span class="text-white/80 text-sm font-medium">{{ content.footer.stillHaveQuestions }}</span>
            <div class="flex items-center gap-6 text-sm font-bold">
               <a href="https://docs.kakr.ai" target="_blank" class="text-white hover:text-emerald-400 underline underline-offset-4 transition-colors">{{ content.footer.exploreDocs }}</a>
               <a href="/contact" class="text-white hover:text-emerald-400 underline underline-offset-4 transition-colors">{{ content.footer.contactSales }}</a>
            </div>
         </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()

// AEO: FAQPage structured data (English canonical Q&As for Google rich results)
const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is Kakr Labs?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Kakr Labs builds cryptographic trust infrastructure. We replace fragile systems like passwords and API keys with verifiable, math-based proofs.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is PTERI?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'PTERI is the product suite. It includes the Wallet, the Authority Layer, and the interfaces (APIs) that allow you to use that authority.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Does PTERI use blockchain?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'PTERI is identity and authorization infrastructure first: passwordless MFA, runtime authorization, and verifiable evidence for every action. The Litecoin blockchain is used underneath as a supporting component for tamper-evident settlement and verification. You don\'t need to be a crypto expert to use PTERI.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Who holds my keys in PTERI?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'You do. Private keys are generated and stored on your device (in the Secure Enclave) and remain customer-controlled. Kakr Labs does not hold or escrow your keys.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What happens if Kakr Labs disappears?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Your identity and funds remain yours. Because your keys are stored on your device and settlement is recorded on the public Litecoin blockchain, your ownership does not depend on Kakr Labs servers.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How does PTERI replace passwords?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Instead of typing a secret password (which can be stolen), your PTERI Wallet signs a login request. The system verifies the signature mathematically. No secrets are ever shared.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can I use PTERI for enterprise employee identity (IAM)?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. PTERI is ideal for enterprise identity (IAM), replacing OTP codes and phishable credentials with hardware-bound cryptographic identities.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Does PTERI work with biometrics?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. The wallet uses your device\'s biometrics (FaceID/TouchID) to unlock the signing key. Biometric data is processed by your device\'s secure hardware and is not sent to Kakr Labs.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Is PTERI a crypto exchange?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'No. PTERI provides infrastructure for you to hold and move value. Kakr Labs does not act as a custodian or an exchange.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Does PTERI support Litecoin payments?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. PTERI supports self-custodial Litecoin payments with customer-controlled payment credentials.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How fast is PTERI for payments?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'PTERI signatures are instant. Settlement on the blockchain follows standard Litecoin block times (approximately 2.5 minutes), but authority verification happens in milliseconds.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How does PTERI help AI agents?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'AI agents usually cannot own things or sign contracts. PTERI gives agents a distinct cryptographic identity, allowing them to sign actions and hold authority delegated by humans.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Is it safe to give an AI agent a PTERI wallet?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'PTERI allows for scoped authority. You can give an agent budget limits, time limits, or specific permission scopes, and revoke them instantly.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do developers need to learn Solidity or Rust to use PTERI?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'No. PTERI is API-first. You verify identities and transactions using standard REST/gRPC APIs in languages you already know such as JavaScript, Python, and Go.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Is there a testnet for PTERI?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Kakr Labs offers a full testnet environment where you can build and test flows without using real funds.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Where is the PTERI developer documentation?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Documentation is available at https://docs.kakr.ai.'
      }
    }
  ]
}

const { setSEO } = useSEO()

setSEO({
  title: 'FAQs - Kakr Labs | Universal Trust & Support',
  description: 'Answers about PTERI, Identity, Payments, AI Agents, and Developer APIs. Everything you need to know about Kakr Labs cryptographic trust infrastructure.',
  image: '/og/og-faqs.png',
  structuredData: [faqPageSchema]
})

// State for open accordion items: { 'sectionId': openIndex }
const activeState = ref({})
const searchQuery = ref('')

const isActive = (sectionId, idx) => {
  return activeState.value[sectionId] === idx
}

const toggle = (sectionId, idx) => {
  if (activeState.value[sectionId] === idx) {
    activeState.value[sectionId] = -1 // Close if same
  } else {
    activeState.value[sectionId] = idx // Open new
  }
}

// Filtered FAQs based on search query
const filteredFaqSections = computed(() => {
  if (!searchQuery.value) return content.value.faqSections

  const query = searchQuery.value.toLowerCase()

  return content.value.faqSections.map(section => {
    // Filter items within the section
    const matchingItems = section.items.filter(item =>
      item.q.toLowerCase().includes(query) ||
      item.a.toLowerCase().includes(query)
    )

    // Return section with filtered items if matches found, or if section title matches
    if (matchingItems.length > 0 || section.title.toLowerCase().includes(query)) {
      return {
        ...section,
        items: matchingItems.length > 0 ? matchingItems : section.items
      }
    }
    return null
  }).filter(Boolean) // Remove null sections (no matches)
})

// Translations
const content = computed(() => {
  const translations = {
    en: {
      hero: {
        badge: 'FAQ — Kakr labs Inc.',
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about Kakr Labs, PTERI, and building secure infrastructure on Litecoin.',
        searchPlaceholder: 'Search for answers...'
      },
      faqSections: [
        {
          id: 'general',
          title: 'General',
          items: [
            {
              q: "What is Kakr Labs?",
              a: "Kakr Labs builds cryptographic trust infrastructure. We replace fragile systems like passwords and API keys with verifiable, math-based proofs."
            },
            {
              q: "What is specific about PTERI?",
              a: "PTERI is the product suite. It includes the Wallet, the Authority Layer, and the interfaces (APIs) that allow you to use that authority."
            },
            {
              q: "Is this blockchain?",
              a: "PTERI is identity and authorization infrastructure first: passwordless MFA, runtime authorization, and verifiable evidence for every action. The Litecoin blockchain sits underneath as a supporting component for tamper-evident settlement and verification. You don't need to be a crypto expert to use PTERI."
            }
          ]
        },
        {
          id: 'security',
          title: 'Security & Trust',
          items: [
            {
              q: "Who holds my keys?",
              a: "You do. Private keys are generated and stored on your device (in the Secure Enclave) and remain customer-controlled. Kakr Labs does not hold or escrow your keys."
            },
            {
              q: "What happens if Kakr Labs disappears?",
              a: "Your identity and funds remain yours. Because your keys are stored on your device and settlement is recorded on the public Litecoin blockchain, your ownership does not depend on our servers."
            }
          ]
        },
        {
          id: 'identity',
          title: 'Identity',
          items: [
            {
              q: "How does PTERI replace passwords?",
              a: "Instead of typing a secret password (which can be stolen), your PTERI Wallet signs a login request. The system verifies the signature mathematically. No secrets are ever shared."
            },
            {
              q: "Can I use it for my employees?",
              a: "Yes. PTERI is ideal for enterprise identity (IAM), replacing OTP codes and phishable credentials with hardware-bound cryptographic identities."
            },
            {
              q: "Does it work with biometrics?",
              a: "Yes. The wallet uses your device's biometrics (FaceID/TouchID) to unlock the signing key. Biometric data is processed by your device's secure hardware and is not sent to Kakr Labs."
            }
          ]
        },
        {
          id: 'payments',
          title: 'Payments',
          items: [
            {
              q: "Is this a crypto exchange?",
              a: "No. PTERI provides infrastructure for you to hold and move value. We do not act as a custodian or an exchange."
            },
            {
              q: "Does PTERI support Litecoin payments?",
              a: "Yes. PTERI supports self-custodial Litecoin payments with customer-controlled payment credentials."
            },
            {
              q: "Is it instant?",
              a: "PTERI signatures are instant. Settlement on the blockchain follows standard block times (approx 2.5 minutes), but authority verification happens in milliseconds."
            }
          ]
        },
        {
          id: 'ai',
          title: 'AI & Agents',
          items: [
            {
              q: "How does PTERI help AI?",
              a: "AI agents usually cannot 'own' things or sign contracts. PTERI gives agents a distinct cryptographic identity, allowing them to sign actions and hold authority delegated by humans."
            },
            {
              q: "Is it safe to give an AI a wallet?",
              a: "PTERI allows for 'scoped authority'. You can give an agent budget limits, time limits, or specific permission scopes, and revoke them instantly."
            }
          ]
        },
        {
          id: 'dev',
          title: 'Developers',
          items: [
            {
              q: "Do I need to learn Solidity or Rust?",
              a: "No. PTERI is API-first. You verify identities and transactions using standard REST/gRPC APIs in languages you already know (JS, Python, Go, etc.)."
            },
            {
              q: "Is there a testnet?",
              a: "Yes. We offer a full testnet environment where you can build and test flow without using real funds."
            },
            {
              q: "Where are the docs?",
              a: "Documentation is available at <a href='https://docs.kakr.ai' target='_blank'>docs.kakr.ai</a>."
            }
          ]
        }
      ],
      footer: {
        stillHaveQuestions: "Still have questions?",
        contactSales: "Contact Sales",
        exploreDocs: "Explore Docs",
        disclaimer: "PTERI provides cryptographic assurance. Security efficacy depends on proper implementation and key management practices."
      },
      seo: {
        title: 'FAQs - Kakr Labs | Universal Trust & Support',
        description: 'Answers about PTERI, Identity, Payments, AI Agents, and Developer APIs.'
      }
    },
    de: {
      hero: {
        badge: 'FAQ — Kakr Labs Inc.',
        title: 'Häufig gestellte Fragen',
        subtitle: 'Alles, was Sie über Kakr Labs, PTERI und den Aufbau sicherer Infrastruktur auf Litecoin wissen müssen.'
      },
      faqSections: [
        {
          id: 'general',
          title: 'Allgemein',
          items: [
            {
              q: "Was ist Kakr Labs?",
              a: "Kakr Labs baut kryptografische Vertrauensinfrastruktur. Wir ersetzen zerbrechliche Systeme wie Passwörter und API-Schlüssel durch verifizierbare, mathematische Beweise."
            },
            {
              q: "Was ist das Besondere an PTERI?",
              a: "PTERI ist die Produktsuite. Sie umfasst das Wallet, die Autorisierungsebene und die Schnittstellen (APIs), mit denen Sie diese Autorität nutzen können."
            },
            {
              q: "Ist das Blockchain?",
              a: "PTERI ist in erster Linie Infrastruktur für Identität und Autorisierung: passwortlose Mehr-Faktor-Authentifizierung, Autorisierung zur Laufzeit und überprüfbare Nachweise für jede Aktion. Die Litecoin-Blockchain liegt darunter als unterstützende Komponente für manipulationssichere Abrechnung und Verifizierung. Sie müssen kein Krypto-Experte sein, um PTERI zu nutzen."
            }
          ]
        },
        {
          id: 'security',
          title: 'Sicherheit & Vertrauen',
          items: [
            {
              q: "Wer hält meine Schlüssel?",
              a: "Sie. Private Schlüssel werden auf Ihrem Gerät (im Secure Enclave) erzeugt und gespeichert und bleiben unter Ihrer Kontrolle. Kakr Labs verwahrt Ihre Schlüssel nicht."
            },
            {
              q: "Was passiert, wenn Kakr Labs verschwindet?",
              a: "Ihre Identität und Gelder bleiben Ihre. Da Ihre Schlüssel auf Ihrem Gerät gespeichert sind und die Abrechnung auf der öffentlichen Litecoin-Blockchain erfasst wird, ist Ihr Eigentum nicht von unseren Servern abhängig."
            }
          ]
        },
        {
          id: 'identity',
          title: 'Identität',
          items: [
            {
              q: "Wie ersetzt PTERI Passwörter?",
              a: "Anstatt ein geheimes Passwort einzugeben (das gestohlen werden kann), signiert Ihr PTERI Wallet eine Login-Anfrage. Das System verifiziert die Signatur mathematisch. Es werden niemals Geheimnisse geteilt."
            },
            {
              q: "Kann ich es für meine Mitarbeiter nutzen?",
              a: "Ja. PTERI ist ideal für Unternehmensidentität (IAM) und ersetzt OTP-Codes und phishable Anmeldeinformationen durch hardwaregebundene kryptografische Identitäten."
            },
            {
              q: "Funktioniert es mit Biometrie?",
              a: "Ja. Das Wallet verwendet die Biometrie Ihres Geräts (FaceID/TouchID), um den Signierschlüssel freizuschalten. Die biometrischen Daten werden in der sicheren Hardware Ihres Geräts verarbeitet und nicht an Kakr Labs übertragen."
            }
          ]
        },
        {
          id: 'payments',
          title: 'Zahlungen',
          items: [
            {
              q: "Ist das eine Krypto-Börse?",
              a: "Nein. PTERI bietet Infrastruktur, damit Sie Werte halten und bewegen können. Wir agieren nicht als Verwahrer oder Börse."
            },
            {
              q: "Unterstützt PTERI Litecoin-Zahlungen?",
              a: "Ja. PTERI unterstützt eigenverwahrte Litecoin-Zahlungen mit kundenseitig kontrollierten Zahlungsdaten."
            },
            {
              q: "Ist es sofortig?",
              a: "PTERI-Signaturen sind sofortig. Die Abrechnung auf der Blockchain folgt den Standard-Blockzeiten (ca. 2,5 Minuten), aber die Autorisierungsüberprüfung erfolgt in Millisekunden."
            }
          ]
        },
        {
          id: 'ai',
          title: 'KI & Agenten',
          items: [
            {
              q: "Wie hilft PTERI der KI?",
              a: "KI-Agenten können normalerweise keine Dinge 'besitzen' oder Verträge unterzeichnen. PTERI gibt Agenten eine eindeutige kryptografische Identität, die es ihnen ermöglicht, Aktionen zu signieren und von Menschen delegierte Autorität zu besitzen."
            },
            {
              q: "Ist es sicher, einer KI ein Wallet zu geben?",
              a: "PTERI ermöglicht 'abgestufte Autorität' (Scoped Authority). Sie können einem Agenten Budgetlimits, Zeitlimits oder spezifische Berechtigungsbereiche geben und diese sofort widerrufen."
            }
          ]
        },
        {
          id: 'dev',
          title: 'Entwickler',
          items: [
            {
              q: "Muss ich Solidity oder Rust lernen?",
              a: "Nein. PTERI ist API-first. Sie verifizieren Identitäten und Transaktionen über Standard-REST/gRPC-APIs in Sprachen, die Sie bereits kennen (JS, Python, Go usw.)."
            },
            {
              q: "Gibt es ein Testnet?",
              a: "Ja. Wir bieten eine vollständige Testnet-Umgebung, in der Sie Flows erstellen und testen können, ohne echte Gelder zu verwenden."
            },
            {
              q: "Wo ist die Dokumentation?",
              a: "Die Dokumentation ist unter <a href='https://docs.kakr.ai' target='_blank'>docs.kakr.ai</a> verfügbar."
            }
          ]
        }
      ],
      footer: {
        stillHaveQuestions: "Haben Sie noch Fragen?",
        contactSales: "Vertrieb kontaktieren",
        exploreDocs: "Doku erkunden",
        disclaimer: "PTERI bietet kryptografische Sicherheit. Die Wirksamkeit der Sicherheit hängt von der ordnungsgemäßen Implementierung und den Schlüsselverwaltungspraktiken ab."
      },
      seo: {
        title: 'FAQs - Kakr Labs | Universelles Vertrauen & Support',
        description: 'Antworten zu PTERI, Identität, Zahlungen, KI-Agenten und Entwickler-APIs.'
      }
    },
    es: {
      hero: {
        badge: 'FAQ — Kakr Labs Inc.',
        title: 'Preguntas Frecuentes',
        subtitle: 'Todo lo que necesita saber sobre Kakr Labs, PTERI y la construcción de infraestructura segura en Litecoin.'
      },
      faqSections: [
        {
          id: 'general',
          title: 'General',
          items: [
            {
              q: "¿Qué es Kakr Labs?",
              a: "Kakr Labs construye infraestructura de confianza criptográfica. Reemplazamos sistemas frágiles como contraseñas y claves API con pruebas matemáticas verificables."
            },
            {
              q: "¿Qué tiene de especial PTERI?",
              a: "PTERI es la suite de productos. Incluye la billetera, la capa de autoridad y las interfaces (API) que le permiten usar esa autoridad."
            },
            {
              q: "¿Es esto blockchain?",
              a: "PTERI es, ante todo, infraestructura de identidad y autorización: MFA sin contraseñas, autorización en tiempo de ejecución y evidencia verificable de cada acción. La cadena de bloques de Litecoin está por debajo como componente de apoyo para la liquidación y la verificación a prueba de manipulaciones. No necesita ser un experto en criptografía para usar PTERI."
            }
          ]
        },
        {
          id: 'security',
          title: 'Seguridad y Confianza',
          items: [
            {
              q: "¿Quién tiene mis claves?",
              a: "Usted. Las claves privadas se generan y se almacenan en su dispositivo (en el Secure Enclave) y permanecen bajo el control del cliente. Kakr Labs no custodia ni deposita sus claves."
            },
            {
              q: "¿Qué pasa si Kakr Labs desaparece?",
              a: "Su identidad y sus fondos siguen siendo suyos. Como sus claves están almacenadas en su dispositivo y la liquidación se registra en la cadena de bloques pública de Litecoin, su propiedad no depende de nuestros servidores."
            }
          ]
        },
        {
          id: 'identity',
          title: 'Identidad',
          items: [
            {
              q: "¿Cómo reemplaza PTERI las contraseñas?",
              a: "En lugar de escribir una contraseña secreta (que puede ser robada), su billetera PTERI firma una solicitud de inicio de sesión. El sistema verifica la firma matemáticamente. Nunca se comparten secretos."
            },
            {
              q: "¿Puedo usarlo para mis empleados?",
              a: "Sí. PTERI es ideal para la identidad empresarial (IAM), reemplazando los códigos OTP y las credenciales susceptibles de phishing con identidades criptográficas vinculadas al hardware."
            },
            {
              q: "¿Funciona con biometría?",
              a: "Sí. La billetera utiliza la biometría de su dispositivo (FaceID/TouchID) para desbloquear la clave de firma. Los datos biométricos se procesan en el hardware seguro del dispositivo y no se envían a Kakr Labs."
            }
          ]
        },
        {
          id: 'payments',
          title: 'Pagos',
          items: [
            {
              q: "¿Es esto un intercambio de criptomonedas?",
              a: "No. PTERI proporciona infraestructura para que usted mantenga y mueva valor. No actuamos como custodio ni como intercambio."
            },
            {
              q: "¿Admite PTERI pagos con Litecoin?",
              a: "Sí. PTERI admite pagos con Litecoin en autocustodia con credenciales de pago controladas por el cliente."
            },
            {
              q: "¿Es instantáneo?",
              a: "Las firmas de PTERI son instantáneas. La liquidación en la cadena de bloques sigue los tiempos de bloque estándar (aprox. 2.5 minutos), pero la verificación de autoridad ocurre en milisegundos."
            }
          ]
        },
        {
          id: 'ai',
          title: 'IA y Agentes',
          items: [
            {
              q: "¿Cómo ayuda PTERI a la IA?",
              a: "Los agentes de IA generalmente no pueden 'poseer' cosas ni firmar contratos. PTERI otorga a los agentes una identidad criptográfica distinta, permitiéndoles firmar acciones y mantener la autoridad delegada por humanos."
            },
            {
              q: "¿Es seguro darle una billetera a una IA?",
              a: "PTERI permite una 'autoridad delimitada'. Puede otorgarle a un agente límites de presupuesto, límites de tiempo o ámbitos de permiso específicos, y revocarlos instantáneamente."
            }
          ]
        },
        {
          id: 'dev',
          title: 'Desarrolladores',
          items: [
            {
              q: "¿Necesito aprender Solidity o Rust?",
              a: "No. PTERI es API-first. Verifica identidades y transacciones utilizando API REST/gRPC estándar en lenguajes que ya conoce (JS, Python, Go, etc.)."
            },
            {
              q: "¿Hay una testnet?",
              a: "Sí. Ofrecemos un entorno de testnet completo donde puede construir y probar flujos sin usar fondos reales."
            },
            {
              q: "¿Dónde está la documentación?",
              a: "La documentación está disponible en <a href='https://docs.kakr.ai' target='_blank'>docs.kakr.ai</a>."
            }
          ]
        }
      ],
      footer: {
        stillHaveQuestions: "¿Aún tiene preguntas?",
        contactSales: "Contactar Ventas",
        exploreDocs: "Explorar Documentación",
        disclaimer: "PTERI proporciona garantía criptográfica. La eficacia de la seguridad depende de la implementación adecuada y las prácticas de gestión de claves."
      },
      seo: {
        title: 'FAQs - Kakr Labs | Confianza Universal y Soporte',
        description: 'Respuestas sobre PTERI, Identidad, Pagos, Agentes de IA y API de desarrollador.'
      }
    },
    ja: {
      hero: {
        badge: 'FAQ — Kakr Labs Inc.',
        title: 'よくあるご質問',
        subtitle: 'Kakr Labs、PTERI、そして Litecoin 上で安全なインフラを構築するために知っておきたいことをまとめました。'
      },
      faqSections: [
        {
          id: 'general',
          title: '一般',
          items: [
            {
              q: "Kakr Labs とは何ですか?",
              a: "Kakr Labs は暗号技術にもとづく信頼インフラを構築しています。パスワードや API キーのような壊れやすい仕組みを、検証可能な数学的証明に置き換えます。"
            },
            {
              q: "PTERI の特徴は何ですか?",
              a: "PTERI は製品スイートです。ウォレット、権限レイヤー、そしてその権限を利用するためのインターフェース (API) が含まれます。"
            },
            {
              q: "これはブロックチェーンですか?",
              a: "PTERI はまずアイデンティティと認可の基盤です。パスワードレスの多要素認証、実行時の認可、そしてすべての操作に対する検証可能な証跡を提供します。Litecoin ブロックチェーンはその下で、改ざんを検知できる決済と検証を支える補助的な構成要素として機能します。暗号資産の専門知識は必要ありません。"
            }
          ]
        },
        {
          id: 'security',
          title: 'セキュリティと信頼',
          items: [
            {
              q: "鍵は誰が保管しますか?",
              a: "お客様です。秘密鍵はお客様のデバイス上 (Secure Enclave 内) で生成・保管され、管理はお客様の手に残ります。Kakr Labs がお客様の鍵を預かったり預託することはありません。"
            },
            {
              q: "Kakr Labs がなくなったらどうなりますか?",
              a: "アイデンティティと資産はお客様のものであり続けます。鍵はお客様のデバイスに保管され、決済は公開された Litecoin ブロックチェーンに記録されるため、所有権が当社のサーバーに依存することはありません。"
            }
          ]
        },
        {
          id: 'identity',
          title: 'アイデンティティ',
          items: [
            {
              q: "PTERI はどのようにパスワードを置き換えるのですか?",
              a: "盗まれる可能性のある秘密のパスワードを入力する代わりに、PTERI ウォレットがログイン要求に署名します。システムはその署名を数学的に検証します。秘密情報を共有する必要はありません。"
            },
            {
              q: "従業員向けに利用できますか?",
              a: "はい。PTERI は企業のアイデンティティ管理 (IAM) に適しており、OTP コードやフィッシングされやすい認証情報を、ハードウェアに紐づいた暗号学的アイデンティティに置き換えます。"
            },
            {
              q: "生体認証に対応していますか?",
              a: "はい。ウォレットはデバイスの生体認証 (FaceID/TouchID) を使って署名鍵をアンロックします。生体情報はデバイスのセキュアハードウェア内で処理され、Kakr Labs に送信されることはありません。"
            }
          ]
        },
        {
          id: 'payments',
          title: '決済',
          items: [
            {
              q: "これは暗号資産取引所ですか?",
              a: "いいえ。PTERI は価値を保有し移動するための基盤を提供します。当社はカストディアンや取引所として機能することはありません。"
            },
            {
              q: "PTERI は Litecoin での支払いに対応していますか?",
              a: "はい。PTERI は自己管理型の Litecoin 決済に対応しており、支払い用の資格情報はお客様が管理します。"
            },
            {
              q: "即時に処理されますか?",
              a: "PTERI の署名は即時です。ブロックチェーン上の決済は標準的なブロック生成時間 (約 2.5 分) に従いますが、権限の検証はミリ秒単位で完了します。"
            }
          ]
        },
        {
          id: 'ai',
          title: 'AI とエージェント',
          items: [
            {
              q: "PTERI は AI にどう役立ちますか?",
              a: "AI エージェントは通常、何かを「所有」したり契約に署名したりできません。PTERI はエージェントに固有の暗号学的アイデンティティを与え、操作への署名と、人間から委任された権限の保持を可能にします。"
            },
            {
              q: "AI にウォレットを渡しても安全ですか?",
              a: "PTERI は「スコープ付き権限」に対応しています。エージェントに予算上限、期間の制限、特定の権限範囲を与えたうえで、いつでも即時に取り消せます。"
            }
          ]
        },
        {
          id: 'dev',
          title: '開発者',
          items: [
            {
              q: "Solidity や Rust を学ぶ必要がありますか?",
              a: "いいえ。PTERI は API ファーストです。JavaScript、Python、Go など既にお使いの言語から、標準的な REST/gRPC API でアイデンティティとトランザクションを検証できます。"
            },
            {
              q: "テストネットはありますか?",
              a: "はい。実際の資金を使わずにフローを構築・テストできる、完全なテストネット環境を提供しています。"
            },
            {
              q: "ドキュメントはどこにありますか?",
              a: "ドキュメントは <a href='https://docs.kakr.ai' target='_blank'>docs.kakr.ai</a> でご覧いただけます。"
            }
          ]
        }
      ],
      footer: {
        stillHaveQuestions: "まだご質問がありますか?",
        contactSales: "営業に問い合わせる",
        exploreDocs: "ドキュメントを見る",
        disclaimer: "PTERI は暗号技術による保証を提供します。セキュリティの有効性は、適切な実装と鍵管理の運用に依存します。"
      },
      seo: {
        title: 'FAQ - Kakr Labs | 普遍的な信頼とサポート',
        description: 'PTERI、アイデンティティ、決済、AI エージェント、開発者向け API に関するよくあるご質問。'
      }
    },
    ar: {
      hero: {
        badge: 'الأسئلة الشائعة — Kakr Labs Inc.',
        title: 'الأسئلة الشائعة',
        subtitle: 'كل ما تحتاج معرفته عن Kakr Labs و PTERI وبناء بنية تحتية آمنة على Litecoin.'
      },
      faqSections: [
        {
          id: 'general',
          title: 'عام',
          items: [
            {
              q: "ما هي Kakr Labs؟",
              a: "تبني Kakr Labs بنية تحتية للثقة قائمة على التشفير. نستبدل الأنظمة الهشة مثل كلمات المرور ومفاتيح API بإثباتات رياضية قابلة للتحقق."
            },
            {
              q: "ما الذي يميز PTERI؟",
              a: "PTERI هي حزمة المنتجات. وتشمل المحفظة وطبقة الصلاحيات والواجهات البرمجية (APIs) التي تتيح لك استخدام هذه الصلاحيات."
            },
            {
              q: "هل هذا بلوكشين؟",
              a: "PTERI هي في المقام الأول بنية تحتية للهوية والتخويل: مصادقة متعددة العوامل بدون كلمات مرور، وتخويل لحظي أثناء التشغيل، وأدلة قابلة للتحقق على كل إجراء. وتعمل شبكة Litecoin في الأسفل كعنصر مساند للتسوية والتحقق بطريقة تكشف أي تلاعب. ولا تحتاج إلى أن تكون خبيرًا في العملات المشفرة لاستخدام PTERI."
            }
          ]
        },
        {
          id: 'security',
          title: 'الأمان والثقة',
          items: [
            {
              q: "من يحتفظ بمفاتيحي؟",
              a: "أنت. تُنشأ المفاتيح الخاصة وتُخزَّن على جهازك (داخل \"Secure Enclave\") وتبقى تحت سيطرة العميل. ولا تحتفظ Kakr Labs بمفاتيحك ولا تودعها لدى أي طرف."
            },
            {
              q: "ماذا يحدث إذا اختفت Kakr Labs؟",
              a: "تبقى هويتك وأموالك ملكًا لك. وبما أن مفاتيحك مخزَّنة على جهازك وتُسجَّل التسوية على شبكة Litecoin العامة، فإن ملكيتك لا تعتمد على خوادمنا."
            }
          ]
        },
        {
          id: 'identity',
          title: 'الهوية',
          items: [
            {
              q: "كيف تستبدل PTERI كلمات المرور؟",
              a: "بدلًا من إدخال كلمة مرور سرية يمكن سرقتها، توقّع محفظة PTERI على طلب تسجيل الدخول، ويتحقق النظام من التوقيع رياضيًا. ولا حاجة إلى مشاركة أي أسرار."
            },
            {
              q: "هل يمكنني استخدامها لموظفيّ؟",
              a: "نعم. PTERI مناسبة لإدارة هوية المؤسسات (IAM)، حيث تستبدل رموز OTP وبيانات الاعتماد المعرَّضة للتصيّد بهويات تشفيرية مرتبطة بالعتاد."
            },
            {
              q: "هل تعمل مع القياسات الحيوية؟",
              a: "نعم. تستخدم المحفظة القياسات الحيوية في جهازك (FaceID/TouchID) لفتح مفتاح التوقيع. وتُعالَج البيانات الحيوية داخل العتاد الآمن للجهاز ولا تُرسل إلى Kakr Labs."
            }
          ]
        },
        {
          id: 'payments',
          title: 'المدفوعات',
          items: [
            {
              q: "هل هذه منصة تداول عملات مشفرة؟",
              a: "لا. توفّر PTERI البنية التحتية التي تتيح لك حفظ القيمة وتحويلها. ونحن لا نعمل كجهة حفظ أو كمنصة تداول."
            },
            {
              q: "هل تدعم PTERI مدفوعات Litecoin؟",
              a: "نعم. تدعم PTERI مدفوعات Litecoin بالحفظ الذاتي مع بيانات دفع يتحكم بها العميل."
            },
            {
              q: "هل هي فورية؟",
              a: "توقيعات PTERI فورية. أما التسوية على البلوكشين فتتبع أزمنة الكتل المعتادة (نحو 2.5 دقيقة)، لكن التحقق من الصلاحيات يحدث في أجزاء من الثانية."
            }
          ]
        },
        {
          id: 'ai',
          title: 'الذكاء الاصطناعي والوكلاء',
          items: [
            {
              q: "كيف تساعد PTERI الذكاء الاصطناعي؟",
              a: "عادةً لا يستطيع وكلاء الذكاء الاصطناعي \"تملّك\" الأشياء أو التوقيع على العقود. تمنح PTERI الوكيل هوية تشفيرية مستقلة تتيح له التوقيع على الإجراءات والاحتفاظ بصلاحيات يفوّضها له البشر."
            },
            {
              q: "هل من الآمن منح وكيل ذكاء اصطناعي محفظة؟",
              a: "تتيح PTERI \"صلاحيات محدودة النطاق\". يمكنك منح الوكيل حدودًا للميزانية أو حدودًا زمنية أو نطاقات إذن محددة، مع إمكانية إلغائها فورًا."
            }
          ]
        },
        {
          id: 'dev',
          title: 'المطورون',
          items: [
            {
              q: "هل أحتاج إلى تعلم Solidity أو Rust؟",
              a: "لا. تعتمد PTERI على واجهات API أولًا. يمكنك التحقق من الهويات والمعاملات عبر واجهات REST/gRPC القياسية باللغات التي تعرفها بالفعل (JS و Python و Go وغيرها)."
            },
            {
              q: "هل توجد شبكة اختبار (testnet)؟",
              a: "نعم. نوفّر بيئة شبكة اختبار كاملة يمكنك فيها بناء التدفقات واختبارها دون استخدام أموال حقيقية."
            },
            {
              q: "أين التوثيق؟",
              a: "التوثيق متاح على <a href='https://docs.kakr.ai' target='_blank'>docs.kakr.ai</a>."
            }
          ]
        }
      ],
      footer: {
        stillHaveQuestions: "هل لديك أسئلة أخرى؟",
        contactSales: "تواصل مع المبيعات",
        exploreDocs: "استكشف التوثيق",
        disclaimer: "توفّر PTERI ضمانات تشفيرية. وتعتمد فعالية الأمان على التنفيذ السليم وممارسات إدارة المفاتيح."
      },
      seo: {
        title: 'الأسئلة الشائعة - Kakr Labs | ثقة شاملة ودعم',
        description: 'إجابات حول PTERI والهوية والمدفوعات ووكلاء الذكاء الاصطناعي وواجهات برمجة التطبيقات للمطورين.'
      }
    }
  }

  return translations[locale.value] || translations.en
})
</script>

<style scoped>
/* Better prose defaults for answers */
.prose :where(ul):not(:where(.not-prose *)) {
  list-style: disc;
  padding-left: 1.25rem;
  margin: .25rem 0 .75rem;
}
.prose :where(p):not(:where(.not-prose *)) {
  margin: .25rem 0 .75rem;
}
</style>
