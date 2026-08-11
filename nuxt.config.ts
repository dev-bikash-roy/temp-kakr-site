// https://nuxt.com/docs/api/configuration/nuxt-config
// Updated to trigger rebuild
function normalizeSiteUrl(url: string) {
  const normalizedUrl = url.replace(/\/$/, '')

  return normalizedUrl === 'https://www.kakr.ai' ? 'https://kakr.ai' : normalizedUrl
}

const siteUrl = normalizeSiteUrl(process.env.SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://kakr.ai'))
const homeUrl = `${siteUrl}/`
const homeOgImageUrl = `${siteUrl}/home-og.png`

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: true,

  experimental: {
    appManifest: false,
    payloadExtraction: false,
  },

  runtimeConfig: {
    // Server-only. The Decap CMS OAuth exchange needs a client secret, and it must
    // never reach a client bundle (handoff §7). Nuxt keeps top-level runtimeConfig
    // keys server-side; only `public` is serialised into the page.
    decapGithubClientId: process.env.DECAP_GITHUB_CLIENT_ID || '',
    decapGithubClientSecret: process.env.DECAP_GITHUB_CLIENT_SECRET || '',

    public: {
      siteUrl,
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
      // Repository and branch the editor commits to. Not secrets, but they must
      // be environment-driven: a test deployment has to publish into its own repo
      // rather than into production. The editor reads these at runtime via
      // /api/admin/cms-config, so the same build works on both.
      decapRepo: process.env.DECAP_REPO || 'dev-bikash-roy/kakr-ai',
      decapBranch: process.env.DECAP_BRANCH || 'main'
    }
  },

  site: {
    url: siteUrl,
    name: 'Kakr Labs',
    description: 'Identity and authorization security for people, AI agents, and enterprise systems.',
    defaultLocale: 'en'
  },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/google-fonts', '@nuxtjs/color-mode', '@nuxt/content'],

  content: {
    /**
     * Use Node's built-in `node:sqlite` instead of the `better-sqlite3` native
     * addon.
     *
     * On Vercel every route that touches the content database returned 500 while
     * static routes were fine — the signature of a native `.node` binary not
     * surviving the serverless bundle. `node:sqlite` is part of the Node runtime
     * (22.5+), so there is no binary to bundle and nothing to mis-trace.
     */
    experimental: { nativeSqlite: true },

    build: {
      markdown: {
        toc: { depth: 3, searchDepth: 3 },
        highlight: {
          theme: { default: 'github-dark', dark: 'github-dark' },
          langs: ['bash', 'json', 'ts', 'js', 'python', 'yaml', 'http', 'vue', 'sql', 'diff'],
        },
      },
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    storageKey: 'nuxt-color-mode'
  },

  googleFonts: {
    download: true,
    inject: true,
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900],
      'JetBrains Mono': [400, 500, 600, 700]
    }
  },

  css: ['~/assets/css/main.css', '~/assets/css/typography.css', '~/assets/css/line-awesome.min.css', '~/assets/css/design-system.css'],

  app: {
    head: {
      title: 'KAKR Labs | Identity and Authorization Security for Humans and AI',
      titleTemplate: (titleChunk?: string) => {
        return titleChunk && titleChunk.includes('KAKR')
          ? titleChunk
          : titleChunk
            ? `${titleChunk} | KAKR Labs`
            : 'KAKR Labs | Identity and Authorization Security for Humans and AI'
      },
      htmlAttrs: {
        lang: 'en',
        style: 'background-color: #0a0a0a;'
      },
      meta: [
        // Basic meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Tells browser to use dark color scheme — prevents white flash before CSS loads
        { name: 'color-scheme', content: 'dark' },
        { name: 'description', content: 'KAKR Labs builds identity and authorization security for people, AI agents, and enterprise systems. PTERI provides passwordless MFA, runtime authorization, credential protection, and verifiable action evidence.' },
        { name: 'keywords', content: 'identity and authorization security, passwordless MFA, AI agent authorization, runtime authorization, verifiable action evidence, credential protection, MCP integration, API, SDK, PTERI platform, enterprise identity' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'language', content: 'English' },
        { name: 'author', content: 'Kakr Labs' },
        { name: 'publisher', content: 'Kakr Labs' },
        { name: 'copyright', content: 'Kakr Labs' },
        { name: 'theme-color', content: '#1a1a1a' },
        { name: 'msapplication-TileColor', content: '#1a1a1a' },
        { name: 'format-detection', content: 'telephone=no' },

        // Enhanced Open Graph tags
        { property: 'og:title', content: 'KAKR Labs | Identity and Authorization Security for Humans and AI' },
        { property: 'og:description', content: 'KAKR Labs builds identity and authorization security for people, AI agents, and enterprise systems. PTERI provides passwordless MFA, runtime authorization, credential protection, and verifiable action evidence.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: homeUrl },
        { property: 'og:site_name', content: 'Kakr Labs' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:updated_time', content: new Date().toISOString() },
        { property: 'og:image', content: homeOgImageUrl, key: 'og-image' },
        { property: 'og:image:width', content: '1200', key: 'og-image-width' },
        { property: 'og:image:height', content: '630', key: 'og-image-height' },
        { property: 'og:image:type', content: 'image/png', key: 'og-image-type' },
        { property: 'og:image:secure_url', content: homeOgImageUrl, key: 'og-image-secure' },
        { property: 'og:image:alt', content: 'Kakr Labs - Identity and Authorization Security for Humans and AI', key: 'og-image-alt' },

        // Enhanced Twitter Card tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'KAKR Labs | Identity and Authorization Security for Humans and AI' },
        { name: 'twitter:description', content: 'KAKR Labs builds identity and authorization security for people, AI agents, and enterprise systems. PTERI provides passwordless MFA, runtime authorization, credential protection, and verifiable action evidence.' },
        { name: 'twitter:site', content: '@kakrlabs' },
        { name: 'twitter:creator', content: '@kakrlabs' },
        { name: 'twitter:image', content: homeOgImageUrl, key: 'twitter-image' },
        { name: 'twitter:image:alt', content: 'Kakr Labs - Identity and Authorization Security for Humans and AI' },

        // Additional SEO meta tags
        { name: 'application-name', content: 'Kakr Labs' },
        { name: 'apple-mobile-web-app-title', content: 'Kakr Labs' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'mobile-web-app-capable', content: 'yes' },

        // Business/Organization meta tags
        { name: 'geo.region', content: 'US' },
        { name: 'geo.placename', content: 'United States' },
        { name: 'ICBM', content: '39.7392, -104.9903' }, // Denver, CO coordinates as example

        // Additional structured data hints
        { name: 'article:publisher', content: 'https://www.facebook.com/kakrlabs' },
        { property: 'business:contact_data:street_address', content: '' },
        { property: 'business:contact_data:locality', content: '' },
        { property: 'business:contact_data:region', content: '' },
        { property: 'business:contact_data:postal_code', content: '' },
        { property: 'business:contact_data:country_name', content: 'United States' }
      ],
      link: [
        // Favicon and icons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },

        // DNS prefetch and preconnect for performance
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' },

        // Alternative formats and languages (if applicable)
        { rel: 'alternate', type: 'application/rss+xml', title: 'Kakr Labs RSS Feed', href: '/rss.xml' },

        // Search engines
        { rel: 'search', type: 'application/opensearchdescription+xml', title: 'Kakr Labs Search', href: '/opensearch.xml' }
      ],
      script: [
        {
          // Safety net: AOS's CSS sets [data-aos] elements to opacity:0 and
          // relies on its JS adding .aos-init/.aos-animate to reveal them.
          // If the JS bundle ever fails to load, every animated section stays
          // invisible and the site looks empty. This inline script lives in
          // the HTML itself (so it survives a bundle failure) and, once AOS
          // has had a fair chance to come up, force-reveals that content.
          //
          // It only ever adds a class to <html> — never touches the
          // per-element `style` attribute. Vue's hydration diff checks that
          // attribute against each [data-aos] element's SSR markup; an
          // earlier version of this script mutated it directly and raced
          // hydration, producing a spurious "Hydration style mismatch" on
          // every animated element whenever the first load was slow. The
          // actual reveal happens via the CSS rule in assets/css/main.css,
          // which Vue's hydration check never inspects.
          innerHTML: `(function(){function r(){if(document.documentElement.classList.contains('aos-initialized'))return;document.documentElement.classList.add('aos-force-reveal')}setTimeout(r,2500);window.addEventListener('load',function(){setTimeout(r,1500)})})();`
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                "name": "Kakr Labs",
                "url": homeUrl,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteUrl}/kakrlabs-logo.png`,
                  "width": 512,
                  "height": 512
                },
                "description": "KAKR Labs builds identity and authorization security for people, AI agents, and enterprise systems.",
                "foundingDate": "2023",
                "sameAs": [
                  "https://twitter.com/kakrlabs",
                  "https://www.linkedin.com/company/kakrlabs",
                  "https://medium.com/@kakrlabs",
                  "https://github.com/kakrlabs"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "url": `${siteUrl}/contact`,
                  "email": "contact@kakr.ai",
                  "availableLanguage": "English"
                },
                "areaServed": "Worldwide",
                "knowsAbout": [
                  "Identity and Authorization Security",
                  "Passwordless MFA",
                  "AI Agent Authorization",
                  "Runtime Authorization",
                  "Credential Protection",
                  "Enterprise Software",
                  "API Development",
                  "Software Development Kits",
                  "MCP Integration",
                  "Litecoin",
                  "Blockchain Technology"
                ]
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                "url": homeUrl,
                "name": "Kakr Labs",
                "description": "KAKR Labs builds identity and authorization security for people, AI agents, and enterprise systems. PTERI provides passwordless MFA, runtime authorization, credential protection, and verifiable action evidence.",
                "publisher": {
                  "@id": `${siteUrl}/#organization`
                },
                "inLanguage": "en-US",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": `${siteUrl}/search?q={search_term_string}`
                  },
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          })
        },
        { src: 'https://www.google.com/recaptcha/api.js', async: true, defer: true }
      ]
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  },

  vite: {
    build: {
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('gsap')) return 'vendor-gsap';
              if (id.includes('swiper')) return 'vendor-swiper';
              if (id.includes('framer-motion')) return 'vendor-framer-motion';
              if (id.includes('@headlessui')) return 'vendor-headlessui';
              if (id.includes('@heroicons')) return 'vendor-heroicons';
              if (id.includes('aos')) return 'vendor-aos';
              
              // Group other Vue/Nuxt core modules separately so they don't bloat the main chunk
              if (id.includes('vue') || id.includes('nuxt')) {
                return 'vendor-core';
              }
            }
          }
        }
      }
    }
  },  // i18n configuration
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json'
      },
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.json'
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        file: 'es-ES.json'
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        name: '日本語',
        file: 'ja-JP.json'
      },
      {
        code: 'ar',
        iso: 'ar-SA',
        name: 'العربية',
        file: 'ar-SA.json',
        dir: 'rtl'
      }
    ],

    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      cookieCrossOrigin: false,
      cookieSecure: true,
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    vueI18n: './i18n.config.ts'
  },

  // Standard production/development configuration (Properly Configured)
  nitro: {
    compressPublicAssets: true,
    minify: false,
    prerender: {
      crawlLinks: false,
      failOnError: false,
      routes: [
        '/', '/about', '/api-policy', '/compliance-infrastructure', '/contact',
        '/contact-sales', '/decentralized-as-a-service', '/disclaimer', '/faqs',
        '/financial-services', '/government-public-sector', '/healthcare', '/help', '/identity',
        '/industry', '/kakr-explained', '/partnerships', '/pilot-programm',
        '/plans-pricing', '/platforms', '/PodcastSection', '/press', '/press2',
        '/pricing', '/privacy-policy', '/platform', '/retail-ecommerce', '/roadmap',
        '/solutions', '/technology-saas', '/telecom-esim', '/terms-of-service',
        '/trust-center', '/use-cases', '/why-us', '/pteri', '/payments',
        '/resources',
        // /newsroom, /newsroom/**, /updates, /tutorials and /blog are deliberately
        // NOT prerendered. They gate on `published_at <= now`, and a prerendered
        // page freezes that comparison at build time — a scheduled article would
        // then stay invisible until someone triggered another deployment. They
        // are served with SWR instead (see routeRules below).
        '/industry/government-public-sector',
        '/industry/healthcare',
        '/industry/retail-ecommerce',
        '/industry/technology-saas',
        '/industry/telecom-esim'
      ]
    },
    // Headers configuration (migrated from vercel.json for cloud-agnostic deployment)
    routeRules: {
      // Newsroom surfaces re-evaluate `published_at <= now` on the server, then
      // cache for five minutes. That keeps them close to static in cost while
      // letting a scheduled article appear without a deployment.
      '/newsroom': { swr: 300 },
      '/newsroom/**': { swr: 300 },
      '/updates': { swr: 300 },
      '/tutorials': { swr: 300 },
      '/blog': { swr: 300 },
      '/newsroom/rss.xml': {
        swr: 300,
        headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
      },
      // NOTE: the `/__nuxt_content/**` prerender rule cannot be set here.
      // @nuxt/content force-writes `prerender: true` for it during its own module
      // setup, which runs after this config is merged, so it would win. It is
      // overridden from `modules/newsroom-content-privacy.ts` instead.

      // The editor is a private surface: never indexed, never cached, and never
      // reachable from public navigation.
      '/admin': {
        ssr: false,
        robots: false,
        headers: {
          'X-Robots-Tag': 'noindex, nofollow, noarchive',
          'Cache-Control': 'no-store',
        },
      },
      '/admin/**': {
        ssr: false,
        robots: false,
        headers: {
          'X-Robots-Tag': 'noindex, nofollow, noarchive',
          'Cache-Control': 'no-store',
        },
      },
      '/robots.txt': {
        headers: {
          'Cache-Control': 'public, max-age=0, must-revalidate',
          'Content-Type': 'text/plain; charset=utf-8'
        }
      },
      '/sitemap.xml': {
        headers: {
          'Cache-Control': 'public, max-age=0, must-revalidate',
          'Content-Type': 'application/xml; charset=utf-8'
        }
      },
      '/sitemap_index.xml': {
        headers: {
          'Cache-Control': 'public, max-age=0, must-revalidate',
          'Content-Type': 'application/xml; charset=utf-8'
        }
      },
      '/sitemap.xsl': {
        headers: {
          'Cache-Control': 'public, max-age=0, must-revalidate',
          'Content-Type': 'text/xsl; charset=utf-8'
        }
      },
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/pteri-new-ss/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/images/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/ios/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/**/*.png': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/**/*.jpg': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/**/*.webp': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/**/*.svg': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/**/*.woff2': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      }
    }
  }
})



