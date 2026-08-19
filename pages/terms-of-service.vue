<template>
  <div class="min-h-screen bg-black text-white/80 pb-24 font-inter">
    <!-- Header/Hero -->
    <section class="relative overflow-hidden border-b border-white/5" style="padding: 9rem 0 5rem; background: #000;">
      <div class="absolute inset-0 pointer-events-none z-0" style="background: radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16,185,129,0.15) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(52,211,153,0.06) 0%, transparent 60%);"></div>
      <div class="absolute inset-0 pointer-events-none z-0" style="background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 64px 64px;"></div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-6" data-aos="fade-up">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ content.hero.effectiveDate }}
        </div>

        <h1 class="font-black leading-[1.05] tracking-[-0.03em] text-white mb-6" style="font-size: clamp(2.25rem, 5.5vw, 4rem);" data-aos="fade-up" data-aos-delay="100">
          {{ content.hero.title }}
        </h1>

        <p class="text-lg text-white/60 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          {{ content.hero.entityPrefix }} <span class="text-emerald-400 font-semibold">{{ content.hero.entityName }}</span>
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 lg:py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div class="rounded-[2rem] p-8 sm:p-12 border border-white/5" style="background: #0f0f0f;">
        <div class="prose prose-lg prose-invert max-w-none legal-prose">
          <p class="lead" v-html="content.lead.intro"></p>
          <p>{{ content.lead.agreement }}</p>

          <hr class="my-12 border-white/10  dark:border-slate-800" />

          <h2>{{ content.sections.intro.title }}</h2>
          <p>{{ content.sections.intro.content }}</p>

          <h2>{{ content.sections.eligibility.title }}</h2>
          <p>{{ content.sections.eligibility.content }}</p>
          <ul>
            <li v-for="(item, idx) in content.sections.eligibility.list" :key="idx">{{ item }}</li>
          </ul>
          <p>{{ content.sections.eligibility.note }}</p>

          <h2>{{ content.sections.accounts.title }}</h2>
          <p>{{ content.sections.accounts.content }}</p>
          <ul>
             <li v-for="(item, idx) in content.sections.accounts.list" :key="idx">{{ item }}</li>
          </ul>
          <p v-html="content.sections.accounts.important"></p>

          <h2>{{ content.sections.ip.title }}</h2>
          <p>{{ content.sections.ip.content }}</p>

          <h2>{{ content.sections.thirdParty.title }}</h2>
          <p>{{ content.sections.thirdParty.content }}</p>
          <ul>
             <li v-for="(item, idx) in content.sections.thirdParty.list" :key="idx">{{ item }}</li>
          </ul>
          <p>{{ content.sections.thirdParty.note }}</p>

          <h2>{{ content.sections.availability.title }}</h2>
          <p>{{ content.sections.availability.content }}</p>
          <ul>
             <li v-for="(item, idx) in content.sections.availability.list" :key="idx">{{ item }}</li>
          </ul>
          <p>{{ content.sections.availability.note }}</p>

          <h2>{{ content.sections.termination.title }}</h2>
          <p>{{ content.sections.termination.content }}</p>
          <ul>
             <li v-for="(item, idx) in content.sections.termination.list" :key="idx">{{ item }}</li>
          </ul>
          <p>{{ content.sections.termination.note }}</p>

          <h2>{{ content.sections.warranty.title }}</h2>
          <p>{{ content.sections.warranty.content }}</p>
          <ul>
             <li v-for="(item, idx) in content.sections.warranty.list" :key="idx">{{ item }}</li>
          </ul>
          <p>{{ content.sections.warranty.note }}</p>

          <h2>{{ content.sections.liability.title }}</h2>
          <p>{{ content.sections.liability.content }}</p>
          <ul>
             <li v-for="(item, idx) in content.sections.liability.list" :key="idx">{{ item }}</li>
          </ul>
          <p>{{ content.sections.liability.note }}</p>

          <h2>{{ content.sections.law.title }}</h2>
          <p>{{ content.sections.law.content }}</p>
          <ul>
             <li v-for="(item, idx) in content.sections.law.list" :key="idx">{{ item }}</li>
          </ul>
          <p>{{ content.sections.law.note }}</p>

          <h2>{{ content.sections.changes.title }}</h2>
          <p>{{ content.sections.changes.content }}</p>

          <h2>{{ content.sections.contact.title }}</h2>
          <p>{{ content.sections.contact.intro }}</p>
          <ul>
            <li v-html="content.sections.contact.email"></li>
            <li v-html="content.sections.contact.website"></li>
          </ul>

        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { locale } = useI18n()

const content = computed(() => {
  const translations = {
    en: {
      hero: {
          effectiveDate: 'Effective Date: September 12, 2025',
          title: 'Terms of Service',
          entityPrefix: 'Entity:',
          entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)'
      },
      lead: {
          intro: 'Welcome to <strong>Kakr Labs Inc.</strong> ("Kakr Labs," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our websites, platforms, products, and services, including kakr.io, kakr.org, and all related systems (collectively, the "Services").',
          agreement: 'By accessing or using the Services, you agree to these Terms. If you do not agree, do not use the Services.'
      },
      sections: {
          intro: {
              title: '1. Introduction',
              content: 'Kakr Labs builds decentralized authentication, blockchain infrastructure, and developer tools powered exclusively by the Litecoin blockchain. These Terms apply to all visitors, developers, users, and organizations interacting with our websites or Services. Use of the Services signifies acceptance of these Terms.'
          },
          eligibility: {
              title: '2. Eligibility & Use of Services',
              content: 'You may use the Services only in accordance with applicable laws and for lawful purposes. You agree not to:',
              list: [
                  'misuse, disrupt, or interfere with our Services;',
                  'attempt unauthorized access to our systems, nodes, APIs, or infrastructure;',
                  'engage in reverse engineering, scraping, or malicious activities;',
                  'use the Services to violate any blockchain, financial, or regulatory obligations.'
              ],
              note: 'Kakr Labs may refuse service, disable access, or take protective measures at any time to maintain the security and integrity of the platform.'
          },
          accounts: {
              title: '3. Accounts & Authentication',
              content: 'Some features (e.g., API access, developer dashboard) require account registration. You agree to:',
              list: [
                  'provide accurate and complete information,',
                  'maintain the confidentiality of your credentials,',
                  'be responsible for all actions under your account.'
              ],
              important: '<strong>Important:</strong> PTERI App does not create or store accounts and operates as a self-custody, non-custodial wallet. You are fully responsible for managing your private keys, seed phrases, and backups. Kakr Labs cannot recover lost wallets or keys.'
          },
          ip: {
              title: '4. Intellectual Property',
              content: 'All content, trademarks, branding, website materials, APIs, documentation, and underlying technology are the exclusive property of Kakr Labs Inc. or our licensors. You may not copy, modify, distribute, sell, or create derivative works without prior written consent.'
          },
          thirdParty: {
              title: '5. Third-Party Services & External Links',
              content: 'Our Services may integrate or link to third-party tools such as OpenAI (for PTERI Intelligence), Google Cloud (for infrastructure), or external payment/on-ramp providers. Kakr Labs is not responsible for:',
              list: [
                  'third-party content,',
                  'third-party data practices,',
                  'losses or damages caused by external sites or providers.'
              ],
              note: 'You access third-party services at your own risk and must review their policies.'
          },
          availability: {
              title: '6. Service Availability & Modifications',
              content: 'Our Services may evolve over time. We may add, remove, suspend, or modify features without notice. We do not guarantee uninterrupted or error-free operation of:',
              list: [
                  'APIs',
                  'Blockchain nodes',
                  'Dashboards',
                  'Developer tools',
                  'Web interfaces'
              ],
              note: 'We may limit access to maintain system stability, prevent abuse, or comply with regulations.'
          },
          termination: {
              title: '7. Termination',
              content: 'We may suspend or terminate your access to the Services, with or without notice, for:',
              list: [
                  'violating these Terms,',
                  'security risks,',
                  'abuse of infrastructure,',
                  'unlawful activity, or',
                  'operational necessity.'
              ],
              note: 'Upon termination, any rights granted to you under these Terms immediately cease.'
          },
          warranty: {
              title: '8. Warranty Disclaimer',
              content: 'The Services are provided "AS IS" and "AS AVAILABLE." We make no warranties, express or implied, including:',
              list: [
                  'non-infringement,',
                  'merchantability,',
                  'fitness for a particular purpose,',
                  'reliability, accuracy, or availability.'
              ],
              note: 'Blockchain technology carries inherent risks-users assume full responsibility for their use.'
          },
          liability: {
              title: '9. Limitation of Liability',
              content: 'To the fullest extent permitted by law, Kakr Labs Inc., its directors, employees, partners, and affiliates shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including:',
              list: [
                  'lost profits,',
                  'lost data or keys,',
                  'inability to access wallets,',
                  'corrupted transactions,',
                  'business interruption, or',
                  'reliance on our Services.'
              ],
              note: 'Your exclusive remedy is to stop using the Services.'
          },
          law: {
              title: '10. Governing Law & Jurisdiction',
              content: 'These Terms are governed by the laws of the State of Wyoming (USA) and applicable federal U.S. law. Any legal claims must be brought exclusively in:',
              list: [
                  'Wyoming State Courts, or',
                  'U.S. Federal Courts seated in Wyoming.'
              ],
              note: 'You consent to the jurisdiction and venue of these courts.'
          },
          changes: {
              title: '11. Changes to These Terms',
              content: 'We may modify or update these Terms at any time. When changes occur, we will update the "Effective Date" at the top of this page. Continued use of the Services constitutes acceptance of the revised Terms.'
          },
          contact: {
               title: '12. Contact Us',
               intro: 'For questions about these Terms:',
               email: 'Email: <a href="mailto:contact@kakr.ai">contact@kakr.ai</a>',
               website: 'Website: <a href="https://kakr.ai" target="_blank">https://kakr.ai</a>'
          }
      },
      seo: {
          title: 'Terms of Service - Kakr Labs',
          description: 'Kakr Labs Terms of Service. Legal terms and conditions for using our Web3 infrastructure, blockchain infrastructure APIs, SDKs, and blockchain services.'
      }
    },
    de: {
      hero: {
          effectiveDate: 'Datum des Inkrafttretens: 12. September 2025',
          title: 'Nutzungsbedingungen',
          entityPrefix: 'Entität:',
          entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)'
      },
      lead: {
          intro: 'Willkommen bei <strong>Kakr Labs Inc.</strong> ("Kakr Labs", "wir", "uns" oder "unser"). Diese Nutzungsbedingungen ("Bedingungen") regeln Ihren Zugang zu und Ihre Nutzung unserer Websites, Plattformen, Produkte und Dienstleistungen, einschließlich kakr.io, kakr.org und aller damit verbundenen Systeme (zusammen die "Dienste").',
          agreement: 'Durch den Zugriff auf oder die Nutzung der Dienste stimmen Sie diesen Bedingungen zu. Wenn Sie nicht zustimmen, nutzen Sie die Dienste nicht.'
      },
      sections: {
          intro: {
              title: '1. Einführung',
              content: 'Kakr Labs erstellt dezentrale Authentifizierung, Blockchain-Infrastruktur und Entwicklertools, die ausschließlich von der Litecoin-Blockchain betrieben werden. Diese Bedingungen gelten für alle Besucher, Entwickler, Benutzer und Organisationen, die mit unseren Websites oder Diensten interagieren. Die Nutzung der Dienste bedeutet die Annahme dieser Bedingungen.'
          },
          eligibility: {
              title: '2. Berechtigung & Nutzung der Dienste',
              content: 'Sie dürfen die Dienste nur in Übereinstimmung mit geltendem Recht und für rechtmäßige Zwecke nutzen. Sie stimmen zu, Folgendes nicht zu tun:',
              list: [
                  'unsere Dienste missbrauchen, stören oder beeinträchtigen;',
                  'versuchen, unbefugten Zugriff auf unsere Systeme, Knoten, APIs oder Infrastruktur zu erlangen;',
                  'sich an Reverse Engineering, Scraping oder böswilligen Aktivitäten beteiligen;',
                  'die Dienste nutzen, um Blockchain-, Finanz- oder regulatorische Verpflichtungen zu verletzen.'
              ],
              note: 'Kakr Labs kann den Dienst jederzeit verweigern, den Zugang deaktivieren oder Schutzmaßnahmen ergreifen, um die Sicherheit und Integrität der Plattform zu wahren.'
          },
          accounts: {
              title: '3. Konten & Authentifizierung',
              content: 'Einige Funktionen (z. B. API-Zugang, Entwickler-Dashboard) erfordern eine Kontoregistrierung. Sie stimmen zu:',
              list: [
                  'genaue und vollständige Informationen bereitzustellen,',
                  'die Vertraulichkeit Ihrer Zugangsdaten zu wahren,',
                  'für alle Aktionen unter Ihrem Konto verantwortlich zu sein.'
              ],
              important: '<strong>Wichtig:</strong> PTERI App erstellt oder speichert keine Konten und arbeitet als Self-Custody-, Non-Custodial-Wallet. Sie sind voll verantwortlich für die Verwaltung Ihrer privaten Schlüssel, Seed-Phrasen und Backups. Kakr Labs kann verlorene Wallets oder Schlüssel nicht wiederherstellen.'
          },
          ip: {
              title: '4. Geistiges Eigentum',
              content: 'Alle Inhalte, Marken, Brandings, Website-Materialien, APIs, Dokumentationen und zugrunde liegenden Technologien sind ausschließliches Eigentum von Kakr Labs Inc. oder unseren Lizenzgebern. Sie dürfen ohne vorherige schriftliche Zustimmung keine abgeleiteten Werke kopieren, ändern, verteilen, verkaufen oder erstellen.'
          },
          thirdParty: {
              title: '5. Drittanbieter-Dienste & Externe Links',
              content: 'Unsere Dienste können Tools von Drittanbietern wie OpenAI (für PTERI Intelligence), Google Cloud (für Infrastruktur) oder externe Zahlungs-/On-Ramp-Anbieter integrieren oder darauf verweisen. Kakr Labs ist nicht verantwortlich für:',
              list: [
                  'Inhalte von Drittanbietern,',
                  'Datenpraktiken von Drittanbietern,',
                  'Verluste oder Schäden, die durch externe Websites oder Anbieter verursacht wurden.'
              ],
              note: 'Sie greifen auf eigene Gefahr auf Dienste Dritter zu und müssen deren Richtlinien überprüfen.'
          },
          availability: {
              title: '6. Dienstverfügbarkeit & Änderungen',
              content: 'Unsere Dienste können sich im Laufe der Zeit weiterentwickeln. Wir können Funktionen ohne Vorankündigung hinzufügen, entfernen, aussetzen oder ändern. Wir garantieren keinen ununterbrochenen oder fehlerfreien Betrieb von:',
              list: [
                  'APIs',
                  'Blockchain-Knoten',
                  'Dashboards',
                  'Entwicklertools',
                  'Weboberflächen'
              ],
              note: 'Wir können den Zugang einschränken, um die Systemstabilität zu wahren, Missbrauch zu verhindern oder Vorschriften einzuhalten.'
          },
          termination: {
              title: '7. Kündigung',
              content: 'Wir können Ihren Zugang zu den Diensten mit oder ohne Vorankündigung aussetzen oder beenden, wegen:',
              list: [
                  'Verletzung dieser Bedingungen,',
                  'Sicherheitsrisiken,',
                  'Missbrauch der Infrastruktur,',
                  'rechtswidriger Aktivitäten oder',
                  'betrieblicher Notwendigkeit.'
              ],
              note: 'Mit der Kündigung erlöschen sofort alle Ihnen im Rahmen dieser Bedingungen gewährten Rechte.'
          },
          warranty: {
              title: '8. Gewährleistungsausschluss',
              content: 'Die Dienste werden "WIE BESEHEN" und "WIE VERFÜGBAR" bereitgestellt. Wir geben keine ausdrücklichen oder stillschweigenden Garantien, einschließlich:',
              list: [
                  'Nichtverletzung von Rechten,',
                  'Marktgängigkeit,',
                  'Eignung für einen bestimmten Zweck,',
                  'Zuverlässigkeit, Genauigkeit oder VERFÜGBARkeit.'
              ],
              note: 'Die Blockchain-Technologie birgt inhärente Risiken – Benutzer übernehmen die volle Verantwortung für ihre Nutzung.'
          },
          liability: {
              title: '9. Haftungsbeschränkung',
              content: 'Sofern gesetzlich zulässig, haften Kakr Labs Inc., seine Direktoren, Angestellten, Partner und verbundenen Unternehmen nicht für indirekte, zufällige, Folge-, besondere oder StrafSchäden, einschließlich:',
              list: [
                  'entgangener Gewinn,',
                  'verlorene Daten oder Schlüssel,',
                  'Unfähigkeit, auf Wallets zuzugreifen,',
                  'beschädigte Transaktionen,',
                  'Geschäftsunterbrechung oder',
                  'Vertrauen auf unsere Dienste.'
              ],
              note: 'Ihr einziges Rechtsmittel besteht darin, die Nutzung der Dienste einzustellen.'
          },
          law: {
              title: '10. Geltendes Recht & Gerichtsstand',
              content: 'Diese Bedingungen unterliegen den Gesetzen des Staates Wyoming (USA) und dem geltenden US-Bundesrecht. Alle Rechtsansprüche müssen ausschließlich eingebracht werden in:',
              list: [
                  'den Staatsgerichten von Wyoming oder',
                  'den US-Bundesgerichten mit Sitz in Wyoming.'
              ],
              note: 'Sie stimmen der Zuständigkeit und dem Gerichtsstand dieser Gerichte zu.'
          },
          changes: {
              title: '11. Änderungen dieser Bedingungen',
              content: 'Wir können diese Bedingungen jederzeit ändern oder aktualisieren. Wenn Änderungen auftreten, aktualisieren wir das "Datum des Inkrafttretens" oben auf dieser Seite. Die fortgesetzte Nutzung der Dienste gilt als Annahme der überarbeiteten Bedingungen.'
          },
          contact: {
               title: '12. Kontakt',
               intro: 'Bei Fragen zu diesen Bedingungen:',
               email: 'E-Mail: <a href="mailto:contact@kakr.ai">contact@kakr.ai</a>',
               website: 'Webseite: <a href="https://kakr.ai" target="_blank">https://kakr.ai</a>'
          }
      },
      seo: {
          title: 'Nutzungsbedingungen - Kakr Labs',
          description: 'Kakr Labs Nutzungsbedingungen. Rechtliche Bedingungen für die Nutzung unserer Web3-Infrastruktur, Blockchain-Infrastruktur-APIs, SDKs und Blockchain-Dienste.'
      }
    },
    es: {
      hero: {
          effectiveDate: 'Fecha de vigencia: 12 de septiembre de 2025',
          title: 'Términos de Servicio',
          entityPrefix: 'Entidad:',
          entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)'
      },
      lead: {
          intro: 'Bienvenido a <strong>Kakr Labs Inc.</strong> ("Kakr Labs", "nosotros", "nos" o "nuestro"). Estos Términos de Servicio ("Términos") rigen su acceso y uso de nuestros sitios web, plataformas, productos y servicios, incluidos kakr.io, kakr.org y todos los sistemas relacionados (colectivamente, los "Servicios").',
          agreement: 'Al acceder o utilizar los Servicios, usted acepta estos Términos. Si no está de acuerdo, no utilice los Servicios.'
      },
      sections: {
          intro: {
              title: '1. Introducción',
              content: 'Kakr Labs construye autenticación descentralizada, infraestructura blockchain y herramientas para desarrolladores impulsadas exclusivamente por la cadena de bloques Litecoin. Estos Términos se aplican a todos los visitantes, desarrolladores, usuarios y organizaciones que interactúan con nuestros sitios web o Servicios. El uso de los Servicios significa la aceptación de estos Términos.'
          },
          eligibility: {
              title: '2. Elegibilidad y Uso de los Servicios',
              content: 'Puede utilizar los Servicios solo de acuerdo con las leyes aplicables y para fines legales. Usted acepta no:',
              list: [
                  'hacer mal uso, interrumpir o interferir con nuestros Servicios;',
                  'intentar el acceso no autorizado a nuestros sistemas, nodos, API o infraestructura;',
                  'participar en ingeniería inversa, scraping o actividades maliciosas;',
                  'utilizar los Servicios para violar cualquier obligación blockchain, financiera o regulatoria.'
              ],
              note: 'Kakr Labs puede rechazar el servicio, deshabilitar el acceso o tomar medidas de protección en cualquier momento para mantener la seguridad e integridad de la plataforma.'
          },
          accounts: {
              title: '3. Cuentas y autenticación',
              content: 'Algunas características (por ejemplo, acceso a API, panel de desarrollador) requieren registro de cuenta. Usted acepta:',
              list: [
                  'proporcionar información precisa y completa,',
                  'mantener la confidencialidad de sus credenciales,',
                  'ser responsable de todas las acciones bajo su cuenta.'
              ],
              important: '<strong>Importante:</strong> PTERI App no crea ni almacena cuentas y opera como una billetera de autocustodia y no custodial. Usted es totalmente responsable de gestionar sus claves privadas, frases semilla y copias de seguridad. Kakr Labs no puede recuperar billeteras o claves perdidas.'
          },
          ip: {
              title: '4. Propiedad Intelectual',
              content: 'Todo el contenido, marcas comerciales, marca, materiales del sitio web, API, documentación y tecnología subyacente son propiedad exclusiva de Kakr Labs Inc. o de nuestros licenciantes. No puede copiar, modificar, distribuir, vender o crear trabajos derivados sin el consentimiento previo por escrito.'
          },
          thirdParty: {
              title: '5. Servicios de Terceros y Enlaces Externos',
              content: 'Nuestros Servicios pueden integrar o vincular a herramientas de terceros como OpenAI (para PTERI Intelligence), Google Cloud (para infraestructura) o proveedores externos de pago/on-ramp. Kakr Labs no es responsable de:',
              list: [
                  'contenido de terceros,',
                  'prácticas de datos de terceros,',
                  'pérdidas o daños causados por sitios o proveedores externos.'
              ],
              note: 'Usted accede a servicios de terceros bajo su propio riesgo y debe revisar sus políticas.'
          },
          availability: {
              title: '6. Disponibilidad del Servicio y Modificaciones',
              content: 'Nuestros Servicios pueden evolucionar con el tiempo. Podemos agregar, eliminar, suspender o modificar características sin previo aviso. No garantizamos el funcionamiento ininterrumpido o libre de errores de:',
              list: [
                  'API',
                  'Nodos Blockchain',
                  'Paneles',
                  'Herramientas para desarrolladores',
                  'Interfaces web'
              ],
              note: 'Podemos limitar el acceso para mantener la estabilidad del sistema, prevenir el abuso o cumplir con las regulaciones.'
          },
          termination: {
              title: '7. Terminación',
              content: 'Podemos suspender o terminar su acceso a los Servicios, con o sin previo aviso, por:',
              list: [
                  'violar estos Términos,',
                  'riesgos de seguridad,',
                  'abuso de infraestructura,',
                  'actividad ilegal, o',
                  'necesidad operativa.'
              ],
              note: 'Tras la Terminación, cualquier derecho otorgado a usted bajo estos Términos cesa inmediatamente.'
          },
          warranty: {
              title: '8. Renuncia de Garantía',
              content: 'Los Servicios se proporcionan "TAL CUAL" y "SEGÚN DISPONIBILIDAD". No ofrecemos Garantías, expresas o implícitas, que incluyan:',
              list: [
                  'no infracción,',
                  'comerciabilidad,',
                  'idoneidad para un propósito particular,',
                  'confiabilidad, precisión o disponibilidad.'
              ],
              note: 'La tecnología blockchain conlleva riesgos inherentes: los usuarios asumen toda la responsabilidad por su uso.'
          },
          liability: {
              title: '9. Limitación de Responsabilidad',
              content: 'En la medida máxima permitida por la ley, Kakr Labs Inc., sus directores, empleados, socios y afiliados no serán responsables de ningún daño indirecto, incidental, consecuente, especial o punitivo, incluyendo:',
              list: [
                  'lucro cesante,',
                  'pérdida de datos o claves,',
                  'incapacidad para acceder a billeteras,',
                  'transacciones corruptas,',
                  'interrupción del negocio, o',
                  'confianza en nuestros Servicios.'
              ],
              note: 'Su único remedio es dejar de usar los Servicios.'
          },
          law: {
              title: '10. Ley Aplicable y Jurisdicción',
              content: 'Estos Términos se rigen por las leyes del Estado de Wyoming (EE. UU.) y la ley federal de EE. UU. aplicable. Cualquier reclamo legal debe presentarse exclusivamente en:',
              list: [
                  'los Tribunales del Estado de Wyoming, o',
                  'los Tribunales Federales de EE. UU. con sede en Wyoming.'
              ],
              note: 'Usted acepta la Jurisdicción y competencia de estos tribunales.'
          },
          changes: {
              title: '11. Cambios a Estos Términos',
              content: 'Podemos modificar o actualizar estos Términos en cualquier momento. Cuando ocurran cambios, actualizaremos la "Fecha de vigencia" en la parte superior de esta página. El uso continuado de los Servicios constituye la aceptación de los Términos revisados.'
          },
          contact: {
               title: '12. Contáctenos',
               intro: 'Para preguntas sobre estos Términos:',
               email: 'Correo electrónico: <a href="mailto:contact@kakr.ai">contact@kakr.ai</a>',
               website: 'Sitio web: <a href="https://kakr.ai" target="_blank">https://kakr.ai</a>'
          }
      },
      seo: {
          title: 'Términos de Servicio - Kakr Labs',
          description: 'Términos de Servicio de Kakr Labs. Términos y condiciones legales para usar nuestra infraestructura Web3, APIs de infraestructura blockchain, SDK y servicios blockchain.'
      }
    },
    ja: {
      hero: {
          effectiveDate: '発効日: 2025年9月12日',
          title: '利用規約',
          entityPrefix: '法人:',
          entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)'
      },
      lead: {
          intro: '<strong>Kakr Labs Inc.</strong>(以下「Kakr Labs」「当社」または「当社の」といいます)へようこそ。本利用規約(以下「本規約」といいます)は、kakr.io、kakr.org およびすべての関連システムを含む、当社のウェブサイト、プラットフォーム、製品およびサービス(総称して「本サービス」といいます)へのお客様のアクセスおよびご利用について定めるものです。',
          agreement: '本サービスにアクセスまたはご利用いただくことにより、お客様は本規約に同意したものとみなされます。同意されない場合は、本サービスをご利用にならないでください。'
      },
      sections: {
          intro: {
              title: '1. はじめに',
              content: 'Kakr Labs は、Litecoin ブロックチェーンのみを基盤とする分散型認証、ブロックチェーンインフラストラクチャおよび開発者向けツールを構築しています。本規約は、当社のウェブサイトまたは本サービスを利用するすべての訪問者、開発者、ユーザーおよび組織に適用されます。本サービスのご利用は、本規約への同意を意味します。'
          },
          eligibility: {
              title: '2. 利用資格および本サービスの利用',
              content: 'お客様は、適用される法令に従い、かつ適法な目的のためにのみ本サービスを利用することができます。お客様は、以下の行為を行わないことに同意します:',
              list: [
                  '当社の本サービスを不正に利用し、妨害し、または干渉すること',
                  '当社のシステム、ノード、API またはインフラストラクチャへの不正アクセスを試みること',
                  'リバースエンジニアリング、スクレイピングまたは悪意のある行為を行うこと',
                  'ブロックチェーン、金融または規制上の義務に違反する目的で本サービスを利用すること'
              ],
              note: 'Kakr Labs は、プラットフォームのセキュリティおよび完全性を維持するため、いつでもサービスの提供を拒否し、アクセスを無効化し、または保護措置を講じることがあります。'
          },
          accounts: {
              title: '3. アカウントおよび認証',
              content: '一部の機能(例: API アクセス、開発者ダッシュボード)にはアカウント登録が必要です。お客様は以下に同意します:',
              list: [
                  '正確かつ完全な情報を提供すること',
                  '認証情報の機密性を維持すること',
                  'お客様のアカウントで行われるすべての行為について責任を負うこと'
              ],
              important: '<strong>重要:</strong> PTERI App はアカウントを作成または保存せず、セルフカストディ型かつノンカストディアル型のウォレットとして動作します。お客様は、ご自身の秘密鍵、シードフレーズおよびバックアップの管理について全面的に責任を負います。Kakr Labs は、失われたウォレットまたは鍵を復元することはできません。'
          },
          ip: {
              title: '4. 知的財産',
              content: 'すべてのコンテンツ、商標、ブランド表示、ウェブサイト上の資料、API、ドキュメントおよび基盤となる技術は、Kakr Labs Inc. または当社のライセンサーの独占的な財産です。お客様は、事前の書面による同意なく、これらを複製、改変、配布もしくは販売し、または二次的著作物を作成することはできません。'
          },
          thirdParty: {
              title: '5. 第三者サービスおよび外部リンク',
              content: '本サービスは、OpenAI(PTERI Intelligence 用)、Google Cloud(インフラストラクチャ用)または外部の決済/オンランプ提供者などの第三者ツールと連携し、またはこれらにリンクする場合があります。Kakr Labs は、以下について責任を負いません:',
              list: [
                  '第三者のコンテンツ',
                  '第三者のデータ取扱い',
                  '外部のサイトまたは提供者によって生じた損失または損害'
              ],
              note: 'お客様は、自己の責任において第三者サービスを利用するものとし、それらのポリシーを確認する必要があります。'
          },
          availability: {
              title: '6. サービスの提供状況および変更',
              content: '本サービスは時間の経過とともに変化する場合があります。当社は、予告なく機能を追加、削除、停止または変更することがあります。当社は、以下について中断のない動作またはエラーのない動作を保証しません:',
              list: [
                  'API',
                  'ブロックチェーンノード',
                  'ダッシュボード',
                  '開発者向けツール',
                  'ウェブインターフェース'
              ],
              note: '当社は、システムの安定性を維持し、不正利用を防止し、または規制を遵守するため、アクセスを制限することがあります。'
          },
          termination: {
              title: '7. 利用の終了',
              content: '当社は、予告の有無にかかわらず、以下の理由により本サービスへのお客様のアクセスを停止または終了することがあります:',
              list: [
                  '本規約への違反',
                  'セキュリティ上のリスク',
                  'インフラストラクチャの不正利用',
                  '違法行為、または',
                  '運営上の必要性'
              ],
              note: '終了時をもって、本規約に基づきお客様に付与された権利はすべて直ちに消滅します。'
          },
          warranty: {
              title: '8. 保証の免責',
              content: '本サービスは「現状有姿」かつ「提供可能な状態」で提供されます。当社は、明示または黙示を問わず、以下を含むいかなる保証も行いません:',
              list: [
                  '権利非侵害',
                  '商品性',
                  '特定目的への適合性',
                  '信頼性、正確性または可用性'
              ],
              note: 'ブロックチェーン技術には固有のリスクが伴います。ユーザーは、その利用について全面的に責任を負います。'
          },
          liability: {
              title: '9. 責任の制限',
              content: '法律で認められる最大限の範囲において、Kakr Labs Inc.、その取締役、従業員、パートナーおよび関連会社は、以下を含む間接的、付随的、結果的、特別または懲罰的な損害について一切責任を負いません:',
              list: [
                  '逸失利益',
                  'データまたは鍵の喪失',
                  'ウォレットにアクセスできないこと',
                  '取引の破損',
                  '事業の中断、または',
                  '本サービスへの依拠'
              ],
              note: 'お客様の唯一の救済手段は、本サービスのご利用を中止することです。'
          },
          law: {
              title: '10. 準拠法および裁判管轄',
              content: '本規約は、米国ワイオミング州の法律および適用される米国連邦法に準拠します。法的請求は、以下においてのみ提起されなければなりません:',
              list: [
                  'ワイオミング州の州裁判所、または',
                  'ワイオミング州に所在する米国連邦裁判所'
              ],
              note: 'お客様は、これらの裁判所の管轄および裁判地に同意します。'
          },
          changes: {
              title: '11. 本規約の変更',
              content: '当社は、いつでも本規約を変更または更新することがあります。変更が生じた場合、当社は本ページ上部の「発効日」を更新します。本サービスの継続的なご利用は、改訂後の本規約への同意を構成します。'
          },
          contact: {
               title: '12. お問い合わせ',
               intro: '本規約に関するお問い合わせ:',
               email: 'メール: <a href="mailto:contact@kakr.ai">contact@kakr.ai</a>',
               website: 'ウェブサイト: <a href="https://kakr.ai" target="_blank">https://kakr.ai</a>'
          }
      },
      seo: {
          title: '利用規約 - Kakr Labs',
          description: 'Kakr Labs の利用規約。当社の Web3 インフラストラクチャ、ブロックチェーンインフラ API、SDK およびブロックチェーンサービスをご利用いただく際の法的な条件。'
      }
    },
    ar: {
      hero: {
          effectiveDate: 'تاريخ السريان: 12 سبتمبر 2025',
          title: 'شروط الخدمة',
          entityPrefix: 'الكيان القانوني:',
          entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)'
      },
      lead: {
          intro: 'مرحبًا بك في <strong>Kakr Labs Inc.</strong> ("Kakr Labs" أو "نحن" أو "لنا"). تحكم شروط الخدمة هذه ("الشروط") وصولك إلى مواقعنا الإلكترونية ومنصاتنا ومنتجاتنا وخدماتنا واستخدامك لها، بما في ذلك kakr.io و kakr.org وجميع الأنظمة ذات الصلة (ويُشار إليها جميعًا بـ "الخدمات").',
          agreement: 'من خلال الوصول إلى الخدمات أو استخدامها، فإنك توافق على هذه الشروط. وإذا لم توافق عليها، فلا تستخدم الخدمات.'
      },
      sections: {
          intro: {
              title: '1. مقدمة',
              content: 'تبني Kakr Labs حلول المصادقة اللامركزية وبنية البلوكشين التحتية وأدوات المطورين المدعومة حصريًا بسلسلة كتل Litecoin. وتنطبق هذه الشروط على جميع الزوار والمطورين والمستخدمين والمؤسسات التي تتعامل مع مواقعنا الإلكترونية أو الخدمات. ويُعد استخدام الخدمات قبولًا لهذه الشروط.'
          },
          eligibility: {
              title: '2. الأهلية واستخدام الخدمات',
              content: 'يجوز لك استخدام الخدمات وفقًا للقوانين المعمول بها وللأغراض المشروعة فقط. وتوافق على عدم القيام بما يلي:',
              list: [
                  'إساءة استخدام خدماتنا أو تعطيلها أو التدخل فيها؛',
                  'محاولة الوصول غير المصرح به إلى أنظمتنا أو عُقدنا الشبكية أو واجهات برمجة التطبيقات (APIs) أو بنيتنا التحتية؛',
                  'القيام بالهندسة العكسية أو الاستخراج الآلي للبيانات أو الأنشطة الضارة؛',
                  'استخدام الخدمات لمخالفة أي التزامات متعلقة بالبلوكشين أو التزامات مالية أو تنظيمية.'
              ],
              note: 'يجوز لشركة Kakr Labs رفض تقديم الخدمة أو تعطيل الوصول أو اتخاذ تدابير وقائية في أي وقت للحفاظ على أمن المنصة وسلامتها.'
          },
          accounts: {
              title: '3. الحسابات والمصادقة',
              content: 'تتطلب بعض الميزات (مثل الوصول إلى واجهات برمجة التطبيقات ولوحة تحكم المطورين) التسجيل بحساب. وتوافق على ما يلي:',
              list: [
                  'تقديم معلومات دقيقة وكاملة،',
                  'الحفاظ على سرية بيانات اعتماد الدخول الخاصة بك،',
                  'تحمل المسؤولية عن جميع الإجراءات التي تُتخذ من خلال حسابك.'
              ],
              important: '<strong>مهم:</strong> لا يُنشئ تطبيق PTERI حسابات ولا يخزنها، وهي تعمل كمحفظة ذاتية الحفظ وغير وصائية. وأنت مسؤول مسؤولية كاملة عن إدارة مفاتيحك الخاصة وعبارات الاستعادة والنسخ الاحتياطية. ولا تستطيع Kakr Labs استعادة المحافظ أو المفاتيح المفقودة.'
          },
          ip: {
              title: '4. الملكية الفكرية',
              content: 'جميع المحتويات والعلامات التجارية وعناصر الهوية ومواد الموقع الإلكتروني وواجهات برمجة التطبيقات والوثائق والتقنيات الأساسية هي ملك خالص لشركة Kakr Labs Inc. أو المرخصين لها. ولا يجوز لك نسخها أو تعديلها أو توزيعها أو بيعها أو إنشاء أعمال مشتقة منها دون موافقة كتابية مسبقة.'
          },
          thirdParty: {
              title: '5. خدمات الأطراف الثالثة والروابط الخارجية',
              content: 'قد تتكامل خدماتنا مع أدوات أطراف ثالثة أو ترتبط بها، مثل OpenAI (لخدمة PTERI Intelligence) أو Google Cloud (للبنية التحتية) أو مزودي خدمات الدفع/الشراء الخارجيين. ولا تتحمل Kakr Labs المسؤولية عن:',
              list: [
                  'محتوى الأطراف الثالثة،',
                  'ممارسات الأطراف الثالثة المتعلقة بالبيانات،',
                  'الخسائر أو الأضرار الناتجة عن المواقع أو المزودين الخارجيين.'
              ],
              note: 'أنت تصل إلى خدمات الأطراف الثالثة على مسؤوليتك الخاصة، ويجب عليك مراجعة سياساتها.'
          },
          availability: {
              title: '6. توافر الخدمة والتعديلات',
              content: 'قد تتطور خدماتنا بمرور الوقت. وقد نضيف ميزات أو نحذفها أو نوقفها أو نعدلها دون إشعار. ولا نضمن التشغيل المتواصل أو الخالي من الأخطاء لما يلي:',
              list: [
                  'واجهات برمجة التطبيقات (APIs)',
                  'عُقد البلوكشين',
                  'لوحات التحكم',
                  'أدوات المطورين',
                  'الواجهات الإلكترونية'
              ],
              note: 'قد نقيّد الوصول للحفاظ على استقرار النظام أو لمنع إساءة الاستخدام أو للامتثال للأنظمة.'
          },
          termination: {
              title: '7. إنهاء الخدمة',
              content: 'يجوز لنا تعليق أو إنهاء وصولك إلى الخدمات، بإشعار أو بدون إشعار، للأسباب التالية:',
              list: [
                  'مخالفة هذه الشروط،',
                  'المخاطر الأمنية،',
                  'إساءة استخدام البنية التحتية،',
                  'النشاط غير المشروع، أو',
                  'الضرورة التشغيلية.'
              ],
              note: 'عند الإنهاء، تتوقف فورًا أي حقوق مُنحت لك بموجب هذه الشروط.'
          },
          warranty: {
              title: '8. إخلاء المسؤولية عن الضمانات',
              content: 'تُقدَّم الخدمات "كما هي" و"حسب توافرها". ولا نقدم أي ضمانات، صريحة أو ضمنية، بما في ذلك:',
              list: [
                  'عدم انتهاك حقوق الغير،',
                  'القابلية للتسويق،',
                  'الملاءمة لغرض معين،',
                  'الموثوقية أو الدقة أو التوافر.'
              ],
              note: 'تحمل تقنية البلوكشين مخاطر متأصلة، ويتحمل المستخدمون المسؤولية الكاملة عن استخدامهم لها.'
          },
          liability: {
              title: '9. تحديد المسؤولية',
              content: 'إلى أقصى حد يسمح به القانون، لا تتحمل Kakr Labs Inc. ولا مديروها ولا العاملون فيها ولا شركاؤها ولا الشركات التابعة لها المسؤولية عن أي أضرار غير مباشرة أو عرضية أو تبعية أو خاصة أو تأديبية، بما في ذلك:',
              list: [
                  'الأرباح الفائتة،',
                  'فقدان البيانات أو المفاتيح،',
                  'عدم القدرة على الوصول إلى المحافظ،',
                  'المعاملات التالفة،',
                  'توقف العمل، أو',
                  'الاعتماد على خدماتنا.'
              ],
              note: 'سبيل الانتصاف الوحيد المتاح لك هو التوقف عن استخدام الخدمات.'
          },
          law: {
              title: '10. القانون الحاكم والاختصاص القضائي',
              content: 'تخضع هذه الشروط لقوانين ولاية وايومنغ (الولايات المتحدة الأمريكية) وللقانون الفيدرالي الأمريكي المعمول به. ويجب رفع أي مطالبات قانونية حصريًا أمام:',
              list: [
                  'محاكم ولاية وايومنغ، أو',
                  'المحاكم الفيدرالية الأمريكية الكائنة في وايومنغ.'
              ],
              note: 'أنت توافق على الاختصاص القضائي لهذه المحاكم وعلى مكان انعقادها.'
          },
          changes: {
              title: '11. التغييرات على هذه الشروط',
              content: 'يجوز لنا تعديل هذه الشروط أو تحديثها في أي وقت. وعند حدوث تغييرات، سنقوم بتحديث "تاريخ السريان" في أعلى هذه الصفحة. ويُعد استمرارك في استخدام الخدمات قبولًا للشروط المعدلة.'
          },
          contact: {
               title: '12. اتصل بنا',
               intro: 'للاستفسارات حول هذه الشروط:',
               email: 'البريد الإلكتروني: <a href="mailto:contact@kakr.ai">contact@kakr.ai</a>',
               website: 'الموقع الإلكتروني: <a href="https://kakr.ai" target="_blank">https://kakr.ai</a>'
          }
      },
      seo: {
          title: 'شروط الخدمة - Kakr Labs',
          description: 'شروط خدمة Kakr Labs. الشروط والأحكام القانونية لاستخدام بنيتنا التحتية للويب 3 وواجهات برمجة تطبيقات البنية التحتية للبلوكشين وحزم تطوير البرمجيات وخدمات البلوكشين.'
      }
    }
  }

  return translations[locale.value] || translations.en
})

const { setSEO } = useSEO()
setSEO({
  title: 'Terms of Service - Kakr Labs',
  description: 'Kakr Labs Terms of Service. Read our terms and conditions for using our Web3 infrastructure, APIs, and services.',
  image: '/og/og-terms-of-service.png',
})
</script>

<style scoped>
/* Match the dark card + emerald-accent typography used on the rest of the
   site (e.g. trust-center.vue) instead of Tailwind's generic prose theme. */
.legal-prose :where(h2) {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
  margin-top: 2.5rem;
}
.legal-prose :where(h3) {
  color: #6ee7b7;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 2rem;
}
.legal-prose :where(p, li) {
  color: rgba(255, 255, 255, 0.7);
}
.legal-prose :where(a) {
  color: #34d399;
}
.legal-prose :where(hr) {
  border-color: rgba(255, 255, 255, 0.08);
}
.legal-prose :where(strong) {
  color: #fff;
}
</style>

