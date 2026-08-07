<template>
  <div class="min-h-screen bg-black text-white/80 pb-24 font-inter">
    <!-- Header/Hero -->
    <section class="relative overflow-hidden border-b border-white/5" style="padding: 9rem 0 5rem; background: #000;">
      <div class="absolute inset-0 pointer-events-none z-0" style="background: radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16,185,129,0.15) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(52,211,153,0.06) 0%, transparent 60%);"></div>
      <div class="absolute inset-0 pointer-events-none z-0" style="background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 64px 64px;"></div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-6" data-aos="fade-up">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ content.hero.lastUpdated }}
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
          <p class="lead" v-html="content.lead"></p>

          <hr class="my-12 border-white/10  dark:border-slate-800" />

          <h2>{{ content.sections.whatAreCookies.title }}</h2>
          <p>{{ content.sections.whatAreCookies.content }}</p>

          <h2>{{ content.sections.howWeUse.title }}</h2>
          <p>{{ content.sections.howWeUse.content }}</p>
          <ul>
             <li v-for="(item, idx) in content.sections.howWeUse.list" :key="idx" v-html="item"></li>
          </ul>

          <h2>{{ content.sections.thirdParty.title }}</h2>
          <p>{{ content.sections.thirdParty.content }}</p>
          <ul>
            <li v-for="(item, idx) in content.sections.thirdParty.list" :key="idx">{{ item }}</li>
          </ul>

          <h2>{{ content.sections.managing.title }}</h2>
          <p>{{ content.sections.managing.content }}</p>

          <div class="bg-black  rounded-xl p-6 my-8 border border-white/10  dark:border-slate-800">
            <h3 class="mt-0 mb-4">{{ content.sections.managing.browserTitle }}</h3>
            <ul class="grid sm:grid-cols-2 gap-4 list-none pl-0 mb-0">
              <li v-for="(link, idx) in content.sections.managing.links" :key="idx" class="pl-0">
                <a :href="link.url" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 p-3 rounded-lg bg-black  border border-white/10  dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors no-underline group">
                  <span class="font-medium text-white  group-hover:text-emerald-600 dark:group-hover:text-emerald-400">{{ link.name }}</span>
                  <svg class="w-4 h-4 text-white/60 group-hover:text-emerald-500 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

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
          lastUpdated: 'Last updated: September 26, 2025',
          title: 'Cookie Policy',
          entityPrefix: 'Entity:',
          entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)'
      },
      lead: 'This Cookie Policy explains how <strong>Kakr Labs Inc.</strong> (“we,” “us,” or “our”) uses cookies and similar technologies when you visit our websites, such as kakr.io and kakr.org. It explains what these technologies are, why we use them, and your rights to control our use of them.',
      sections: {
          whatAreCookies: {
              title: '1. What Are Cookies?',
              content: 'Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.'
          },
          howWeUse: {
              title: '2. How We Use Cookies',
              content: 'We use cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.',
              list: [
                  '<strong>Essential Cookies:</strong> These are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.',
                  '<strong>Performance & Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.',
                  '<strong>Functionality Cookies:</strong> These are used to recognize you when you return to our Website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).'
              ]
          },
          thirdParty: {
              title: '3. Third-Party Cookies',
              content: 'In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.',
              list: [
                  'Google Analytics',
                  'Cloudflare'
              ]
          },
          managing: {
              title: '4. Managing Cookies',
              content: 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.',
              browserTitle: 'Browser Settings:',
              links: [
                  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' },
                  { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' },
                  { name: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
              ]
          },
          changes: {
              title: '5. Changes to This Cookie Policy',
              content: 'We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.'
          },
          contact: {
               title: '6. Contact Us',
               intro: 'If you have any questions about our use of cookies or other technologies, please email us at:',
               email: 'Email: <a href="mailto:contact@kakr.ai">contact@kakr.ai</a>',
               website: 'Website: <a href="https://kakr.ai" target="_blank">https://kakr.ai</a>'
          }
      },
      seo: {
          title: 'Cookie Policy - Kakr Labs',
          description: 'Kakr Labs Cookie Policy. Information about how we use cookies and similar technologies on our websites.'
      }
    },
    de: {
      hero: {
          lastUpdated: 'Zuletzt aktualisiert: 26. September 2025',
          title: 'Cookie-Richtlinie',
          entityPrefix: 'Entität:',
          entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)'
      },
      lead: 'Diese Cookie-Richtlinie erklärt, wie <strong>Kakr Labs Inc.</strong> ("wir", "uns" oder "unser") Cookies und ähnliche Technologien verwendet, wenn Sie unsere Websites wie kakr.io und kakr.org besuchen. Sie erklärt, was diese Technologien sind, warum wir sie verwenden, und Ihre Rechte, unsere Nutzung zu kontrollieren.',
      sections: {
          whatAreCookies: {
              title: '1. Was sind Cookies?',
              content: 'Cookies sind kleine Textdateien, die auf Ihrem Computer oder Mobilgerät abgelegt werden, wenn Sie eine Website besuchen. Cookies werden von Website-Betreibern häufig verwendet, damit ihre Websites funktionieren oder effizienter arbeiten sowie um Berichtsinformationen bereitzustellen.'
          },
          howWeUse: {
              title: '2. Wie wir Cookies verwenden',
              content: 'Wir verwenden Cookies aus verschiedenen Gründen. Einige Cookies sind aus technischen Gründen erforderlich, damit unsere Websites funktionieren; diese bezeichnen wir als "notwendige" oder "unbedingt erforderliche" Cookies. Andere Cookies ermöglichen es uns auch, die Interessen unserer Nutzer zu verfolgen und gezielt anzusprechen, um das Erlebnis auf unseren Online-Angeboten zu verbessern.',
              list: [
                  '<strong>Notwendige Cookies:</strong> Diese sind unbedingt erforderlich, um Ihnen die über unsere Websites verfügbaren Dienste bereitzustellen und einige ihrer Funktionen zu nutzen, wie z. B. den Zugang zu sicheren Bereichen.',
                  '<strong>Leistungs- & Analyse-Cookies:</strong> Diese Cookies sammeln Informationen, die entweder in aggregierter Form verwendet werden, um uns zu helfen zu verstehen, wie unsere Websites genutzt werden oder wie effektiv unsere Marketingkampagnen sind, oder um uns zu helfen, unsere Websites für Sie anzupassen.',
                  '<strong>Funktions-Cookies:</strong> Diese werden verwendet, um Sie wiederzuerkennen, wenn Sie auf unsere Website zurückkehren. Dies ermöglicht es uns, unsere Inhalte für Sie zu personalisieren, Sie mit Namen zu begrüßen und Ihre Präferenzen zu speichern (z. B. Ihre Wahl der Sprache oder Region).'
              ]
          },
          thirdParty: {
              title: '3. Cookies von Drittanbietern',
              content: 'Zusätzlich zu unseren eigenen Cookies können wir auch verschiedene Cookies von Drittanbietern verwenden, um Nutzungsstatistiken des Dienstes zu melden, Werbung auf und über den Dienst bereitzustellen usw.',
              list: [
                  'Google Analytics',
                  'Cloudflare'
              ]
          },
          managing: {
              title: '4. Verwaltung von Cookies',
              content: 'Sie haben das Recht zu entscheiden, ob Sie Cookies akzeptieren oder ablehnen. Sie können Ihre Cookie-Rechte ausüben, indem Sie Ihre Browsereinstellungen so festlegen, dass Cookies akzeptiert oder abgelehnt werden. Wenn Sie sich entscheiden, Cookies abzulehnen, können Sie unsere Website weiterhin nutzen, obwohl Ihr Zugang zu einigen Funktionen und Bereichen unserer Website eingeschränkt sein kann.',
              browserTitle: 'Browsereinstellungen:',
              links: [
                  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' },
                  { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' },
                  { name: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
              ]
          },
          changes: {
              title: '5. Änderungen an dieser Cookie-Richtlinie',
              content: 'Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um beispielsweise Änderungen an den von uns verwendeten Cookies oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen widerzuspiegeln. Bitte besuchen Sie diese Cookie-Richtlinie daher regelmäßig, um über unsere Verwendung von Cookies und verwandten Technologien auf dem Laufenden zu bleiben.'
          },
          contact: {
               title: '6. Kontakt',
               intro: 'Wenn Sie Fragen zu unserer Verwendung von Cookies oder anderen Technologien haben, senden Sie uns bitte eine E-Mail an:',
               email: 'E-Mail: <a href="mailto:contact@kakr.ai">contact@kakr.ai</a>',
               website: 'Webseite: <a href="https://kakr.ai" target="_blank">https://kakr.ai</a>'
          }
      },
      seo: {
          title: 'Cookie-Richtlinie - Kakr Labs',
          description: 'Kakr Labs Cookie-Richtlinie. Informationen darüber, wie wir Cookies und ähnliche Technologien auf unseren Websites verwenden.'
      }
    },
    es: {
      hero: {
          lastUpdated: 'Última actualización: 26 de septiembre de 2025',
          title: 'Política de Cookies',
          entityPrefix: 'Entidad:',
          entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)'
      },
      lead: 'Esta Política de Cookies explica cómo <strong>Kakr Labs Inc.</strong> ("nosotros", "nos" o "nuestro") utiliza cookies y tecnologías similares cuando visita nuestros sitios web, como kakr.io y kakr.org. Explica qué son estas tecnologías, por qué las usamos y sus derechos para controlar nuestro uso de ellas.',
      sections: {
          whatAreCookies: {
              title: '1. ¿Qué son las Cookies?',
              content: 'Las cookies son pequeños archivos de datos que se colocan en su computadora o dispositivo móvil cuando visita un sitio web. Las cookies son ampliamente utilizadas por los propietarios de sitios web para que sus sitios funcionen, o para que funcionen de manera más eficiente, así como para proporcionar información de informes.'
          },
          howWeUse: {
              title: '2. Cómo Utilizamos las Cookies',
              content: 'Utilizamos cookies por varias razones. Algunas cookies son necesarias por razones técnicas para que nuestros Sitios Web funcionen, y nos referimos a ellas como cookies "esenciales" o "estrictamente necesarias". Otras cookies también nos permiten rastrear y dirigir los intereses de nuestros usuarios para mejorar la experiencia en nuestras Propiedades en Línea.',
              list: [
                  '<strong>Cookies Esenciales:</strong> Estas son estrictamente necesarias para proporcionarle los servicios disponibles a través de nuestros Sitios Web y para utilizar algunas de sus características, como el acceso a áreas seguras.',
                  '<strong>Cookies de Rendimiento y Análisis:</strong> Estas cookies recopilan información que se utiliza en forma agregada para ayudarnos a comprender cómo se utilizan nuestros Sitios Web o qué tan efectivas son nuestras campañas de marketing, o para ayudarnos a personalizar nuestros Sitios Web para usted.',
                  '<strong>Cookies de Funcionalidad:</strong> Estas se utilizan para reconocerlo cuando regresa a nuestro Sitio Web. Esto nos permite personalizar nuestro contenido para usted, saludarlo por su nombre y recordar sus preferencias (por ejemplo, su elección de idioma o región).'
              ]
          },
          thirdParty: {
              title: '3. Cookies de Terceros',
              content: 'Además de nuestras propias cookies, también podemos utilizar varias cookies de terceros para informar estadísticas de uso del Servicio, entregar anuncios en y a través del Servicio, etc.',
              list: [
                  'Google Analytics',
                  'Cloudflare'
              ]
          },
          managing: {
              title: '4. Gestión de Cookies',
              content: 'Usted tiene derecho a decidir si acepta o rechaza las cookies. Puede ejercer sus derechos de cookies configurando los controles de su navegador para aceptar o rechazar cookies. Si decide rechazar las cookies, aún puede usar nuestro sitio web, aunque su acceso a algunas funciones y áreas de nuestro sitio web puede estar restringido.',
              browserTitle: 'Configuración del Navegador:',
              links: [
                  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' },
                  { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' },
                  { name: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
              ]
          },
          changes: {
              title: '5. Cambios a Esta Política de Cookies',
              content: 'Podemos actualizar esta Política de Cookies de vez en cuando para reflejar, por ejemplo, cambios en las cookies que utilizamos o por otras razones operativas, legales o reglamentarias. Por lo tanto, vuelva a visitar esta Política de Cookies con regularidad para mantenerse informado sobre nuestro uso de cookies y tecnologías relacionadas.'
          },
          contact: {
               title: '6. Contáctenos',
               intro: 'Si tiene alguna pregunta sobre nuestro uso de cookies u otras tecnologías, envíenos un correo electrónico a:',
               email: 'Correo electrónico: <a href="mailto:contact@kakr.ai">contact@kakr.ai</a>',
               website: 'Sitio web: <a href="https://kakr.ai" target="_blank">https://kakr.ai</a>'
          }
      },
      seo: {
          title: 'Política de Cookies - Kakr Labs',
          description: 'Política de Cookies de Kakr Labs. Información sobre cómo utilizamos cookies y tecnologías similares en nuestros sitios web.'
      }
    },
    ja: {
      hero: {
          lastUpdated: '最終更新日: 2025年9月26日',
          title: 'クッキーポリシー',
          entityPrefix: '法人:',
          entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)'
      },
      lead: '本クッキーポリシーは、<strong>Kakr Labs Inc.</strong>(以下「当社」または「当社の」といいます)が、kakr.io や kakr.org などの当社ウェブサイトをご訪問いただく際に、クッキーおよび類似の技術をどのように使用するかについて説明するものです。本ポリシーでは、これらの技術がどのようなものか、当社がなぜこれらを使用するのか、および当社による使用を管理するお客様の権利について説明します。',
      sections: {
          whatAreCookies: {
              title: '1. クッキーとは',
              content: 'クッキーとは、ウェブサイトをご訪問いただいた際に、お客様のコンピュータまたはモバイル端末に保存される小さなデータファイルです。クッキーは、ウェブサイトを動作させるため、またはより効率的に動作させるため、さらにレポート情報を提供するために、ウェブサイト運営者によって広く利用されています。'
          },
          howWeUse: {
              title: '2. 当社によるクッキーの使用方法',
              content: '当社は、いくつかの理由からクッキーを使用しています。一部のクッキーは、当社ウェブサイトを稼働させるために技術的な理由から必要であり、当社はこれらを「必須」または「厳密に必要な」クッキーと呼んでいます。その他のクッキーは、当社のオンラインサービス上での体験を向上させるため、ユーザーの関心を追跡し、これに合わせた情報提供を行うことも可能にします。',
              list: [
                  '<strong>必須クッキー:</strong> これらは、当社ウェブサイトを通じて提供されるサービスをお客様に提供し、また安全な領域へのアクセスなどの一部の機能をご利用いただくために厳密に必要なものです。',
                  '<strong>パフォーマンスおよび分析クッキー:</strong> これらのクッキーは、当社ウェブサイトがどのように利用されているか、または当社のマーケティング施策がどの程度効果的であるかを把握するために集計された形で使用される情報、あるいは当社ウェブサイトをお客様向けにカスタマイズするために役立つ情報を収集します。',
                  '<strong>機能性クッキー:</strong> これらは、お客様が当社ウェブサイトに再度アクセスされた際にお客様を認識するために使用されます。これにより、当社はコンテンツをお客様向けにパーソナライズし、お名前でご挨拶し、お客様の設定(例えば、言語または地域の選択)を記憶することができます。'
              ]
          },
          thirdParty: {
              title: '3. 第三者のクッキー',
              content: '当社独自のクッキーに加えて、当社は、本サービスの利用統計の報告や、本サービス上および本サービスを通じた広告の配信などのために、さまざまな第三者のクッキーを使用する場合があります。',
              list: [
                  'Google Analytics',
                  'Cloudflare'
              ]
          },
          managing: {
              title: '4. クッキーの管理',
              content: 'お客様には、クッキーを受け入れるか拒否するかを決定する権利があります。クッキーを受け入れるか拒否するようブラウザの設定を行うことで、クッキーに関する権利を行使できます。クッキーを拒否することを選択された場合でも、当社ウェブサイトをご利用いただけますが、当社ウェブサイトの一部の機能や領域へのアクセスが制限される場合があります。',
              browserTitle: 'ブラウザの設定:',
              links: [
                  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' },
                  { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' },
                  { name: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
              ]
          },
          changes: {
              title: '5. 本クッキーポリシーの変更',
              content: '当社は、例えば当社が使用するクッキーの変更を反映するため、またはその他の運営上、法律上もしくは規制上の理由により、本クッキーポリシーを随時更新する場合があります。そのため、クッキーおよび関連技術の当社による使用について最新の情報を得られるよう、本クッキーポリシーを定期的にご確認ください。'
          },
          contact: {
               title: '6. お問い合わせ',
               intro: 'クッキーその他の技術の当社による使用についてご質問がある場合は、以下のメールアドレスまでご連絡ください:',
               email: 'メール: <a href="mailto:contact@kakr.ai">contact@kakr.ai</a>',
               website: 'ウェブサイト: <a href="https://kakr.ai" target="_blank">https://kakr.ai</a>'
          }
      },
      seo: {
          title: 'クッキーポリシー - Kakr Labs',
          description: 'Kakr Labs のクッキーポリシー。当社ウェブサイトにおけるクッキーおよび類似技術の使用方法に関する情報。'
      }
    },
    ar: {
      hero: {
          lastUpdated: 'آخر تحديث: 26 سبتمبر 2025',
          title: 'سياسة ملفات تعريف الارتباط',
          entityPrefix: 'الكيان القانوني:',
          entityName: 'Kakr Labs, Inc. (Wyoming C-Corp)'
      },
      lead: 'توضح سياسة ملفات تعريف الارتباط هذه كيفية استخدام <strong>Kakr Labs Inc.</strong> ("نحن" أو "لنا") لملفات تعريف الارتباط والتقنيات المشابهة عند زيارتك لمواقعنا الإلكترونية، مثل kakr.io و kakr.org. وهي توضح ما هي هذه التقنيات، ولماذا نستخدمها، وحقوقك في التحكم في استخدامنا لها.',
      sections: {
          whatAreCookies: {
              title: '1. ما هي ملفات تعريف الارتباط؟',
              content: 'ملفات تعريف الارتباط هي ملفات بيانات صغيرة تُوضع على حاسوبك أو جهازك المحمول عند زيارتك لموقع إلكتروني. ويستخدم أصحاب المواقع الإلكترونية ملفات تعريف الارتباط على نطاق واسع لتمكين مواقعهم من العمل، أو من العمل بكفاءة أكبر، وكذلك لتوفير معلومات التقارير.'
          },
          howWeUse: {
              title: '2. كيف نستخدم ملفات تعريف الارتباط',
              content: 'نستخدم ملفات تعريف الارتباط لعدة أسباب. فبعض ملفات تعريف الارتباط مطلوبة لأسباب فنية لكي تعمل مواقعنا الإلكترونية، ونشير إليها بملفات تعريف الارتباط "الأساسية" أو "الضرورية للغاية". كما تتيح لنا ملفات تعريف الارتباط الأخرى تتبع اهتمامات مستخدمينا واستهدافها لتحسين التجربة على منصاتنا الإلكترونية.',
              list: [
                  '<strong>ملفات تعريف الارتباط الأساسية:</strong> هذه الملفات ضرورية للغاية لتزويدك بالخدمات المتاحة عبر مواقعنا الإلكترونية ولاستخدام بعض ميزاتها، مثل الوصول إلى المناطق الآمنة.',
                  '<strong>ملفات تعريف الارتباط الخاصة بالأداء والتحليلات:</strong> تجمع ملفات تعريف الارتباط هذه معلومات تُستخدم إما في صورة مجمعة لمساعدتنا في فهم كيفية استخدام مواقعنا الإلكترونية أو مدى فعالية حملاتنا التسويقية، أو لمساعدتنا في تخصيص مواقعنا الإلكترونية لك.',
                  '<strong>ملفات تعريف الارتباط الوظيفية:</strong> تُستخدم هذه الملفات للتعرف عليك عند عودتك إلى موقعنا الإلكتروني. ويتيح لنا ذلك تخصيص محتوانا لك، ومناداتك باسمك، وتذكر تفضيلاتك (على سبيل المثال، اختيارك للغة أو المنطقة).'
              ]
          },
          thirdParty: {
              title: '3. ملفات تعريف الارتباط الخاصة بأطراف ثالثة',
              content: 'بالإضافة إلى ملفات تعريف الارتباط الخاصة بنا، قد نستخدم أيضًا ملفات تعريف ارتباط متنوعة تابعة لأطراف ثالثة للإبلاغ عن إحصاءات استخدام الخدمة، وعرض الإعلانات على الخدمة ومن خلالها، وما إلى ذلك.',
              list: [
                  'Google Analytics',
                  'Cloudflare'
              ]
          },
          managing: {
              title: '4. إدارة ملفات تعريف الارتباط',
              content: 'لك الحق في تحديد ما إذا كنت تقبل ملفات تعريف الارتباط أو ترفضها. ويمكنك ممارسة حقوقك المتعلقة بملفات تعريف الارتباط من خلال ضبط إعدادات متصفحك لقبول ملفات تعريف الارتباط أو رفضها. وإذا اخترت رفض ملفات تعريف الارتباط، فسيظل بإمكانك استخدام موقعنا الإلكتروني، وإن كان وصولك إلى بعض الوظائف والمناطق في موقعنا الإلكتروني قد يكون مقيدًا.',
              browserTitle: 'إعدادات المتصفح:',
              links: [
                  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' },
                  { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' },
                  { name: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
              ]
          },
          changes: {
              title: '5. التغييرات على سياسة ملفات تعريف الارتباط هذه',
              content: 'قد نحدّث سياسة ملفات تعريف الارتباط هذه من وقت لآخر لتعكس، على سبيل المثال، التغييرات في ملفات تعريف الارتباط التي نستخدمها، أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى. لذا يُرجى إعادة زيارة سياسة ملفات تعريف الارتباط هذه بانتظام للبقاء على اطلاع بشأن استخدامنا لملفات تعريف الارتباط والتقنيات المرتبطة بها.'
          },
          contact: {
               title: '6. اتصل بنا',
               intro: 'إذا كانت لديك أي أسئلة بشأن استخدامنا لملفات تعريف الارتباط أو غيرها من التقنيات، فيُرجى مراسلتنا عبر البريد الإلكتروني على:',
               email: 'البريد الإلكتروني: <a href="mailto:contact@kakr.ai">contact@kakr.ai</a>',
               website: 'الموقع الإلكتروني: <a href="https://kakr.ai" target="_blank">https://kakr.ai</a>'
          }
      },
      seo: {
          title: 'سياسة ملفات تعريف الارتباط - Kakr Labs',
          description: 'سياسة ملفات تعريف الارتباط الخاصة بشركة Kakr Labs. معلومات حول كيفية استخدامنا لملفات تعريف الارتباط والتقنيات المشابهة على مواقعنا الإلكترونية.'
      }
    }
  }

  return translations[locale.value] || translations.en
})

const { setSEO } = useSEO()
setSEO({
  title: 'Cookie Policy - Kakr Labs',
  description: 'Kakr Labs Cookie Policy. Learn how we use cookies and similar technologies on our website.',
  image: '/home-og.png',
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

