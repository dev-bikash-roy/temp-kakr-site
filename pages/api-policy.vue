<script setup>
const { setSEO } = useSEO()

setSEO({
  title: 'API Policy - Kakr Labs',
  description: 'Kakr Labs API usage policy. Learn about rate limits, authentication requirements, and best practices for using our blockchain infrastructure APIs.',
  image: '/og/og-api-policy.png',
  keywords: ['api policy', 'kakr labs api', 'rate limits', 'api terms', 'developer guidelines']
})

useHead({
  htmlAttrs: { lang: "en" },
  link: [
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", crossorigin: "anonymous" },
    { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" },
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" }, // ✅ Swiper CSS
    // { rel: "stylesheet", href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" },
    { rel: "stylesheet", href: "/assets/css/main.css" },
  { rel: "stylesheet", href: "/assets/css/common-style.css" },
  { rel: "stylesheet", href: "/assets/css/style.css" }

  ],
  script: [
    // { src: "/assets/js/vendor/jquary-3.6.0.min.js", defer: true },
    { src: "/assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js", defer: true },
    { src: "/assets/js/vendor/atropos.min.js", defer: true },
    { src: "/assets/js/vendor/bootstrap.min.js", defer: true },
    { src: "/assets/js/vendor/popper.min.js", defer: true },
    { src: "/assets/js/vendor/odometer.min.js", defer: true },
    { src: "/assets/js/vendor/waypoints.min.js", defer: true },
    { src: "/assets/js/vendor/venobox.min.js", defer: true },
    { src: "/assets/js/vendor/swiper.min.js", defer: true },
    { src: "/assets/js/vendor/smooth-scroll.js", defer: true },
    { src: "/assets/js/vendor/gsap.min.js", defer: true },
    { src: "/assets/js/vendor/scroll-trigger.min.js", defer: true },
    { src: "/assets/js/vendor/parallax-scroll.min.js", defer: true },
   // { src: "/assets/js/main.js", defer: true },
    { src: "/assets/js/custom.js", defer: true },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js", defer: true },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js", defer: true },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js", defer: true },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js", defer: true },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/typeit/5.0.2/typeit.js", defer: true },
    { src: "https://cdn.jsdelivr.net/npm/typed.js@2.0.12", defer: true },
    { src: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js", defer: true }, // ✅ Swiper JS

    { src: "/assets/js/custom.js", defer: true }
  ],

});
</script>

<template>
  <div>
<div class="container py-5 mt-5">
  <div class="bg-black text-dark p-4 p-md-5 shadow rounded">
    <h2 class="text-center display-5 fw-bold mb-4">API Developer Policy</h2>
    <p class="fs-5 fw-semibold mb-4">Effective Date: January 1st, 2026</p>

    <div class="vstack gap-4">
      <div>
        <h3 class="h4 fw-semibold mb-2">1. Introduction</h3>
        <p>This API Developer Policy ("Policy") governs the use of APIs and SDKs provided by Kakr Platform Inc., specifically designed for building applications on the Litecoin blockchain...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">2. API/SDK License</h3>
        <p>We grant you a non-exclusive, non-transferable, revocable license to access and use our APIs/SDKs on the Litecoin blockchain solely for developing, testing, and supporting your application...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">3. API Key Requirement</h3>
        <p>Access requires a unique API key from Kakr Platform Inc., which must be kept confidential and secure...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">4. Use of APIs/SDKs on Litecoin Blockchain</h3>
        <p>Our APIs/SDKs are intended for creating applications on the Litecoin blockchain while ensuring compliance with relevant laws...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">5. Documentation and Best Practices</h3>
        <p>Comprehensive documentation is provided and must be followed for effective and secure usage of our APIs/SDKs...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">6. Restrictions on Use</h3>
        <p>APIs/SDKs must not be used for illegal activities or to exceed specified access limits...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">7. Security and Privacy</h3>
        <p>You must ensure the security of your application and comply with privacy laws...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">8. Intellectual Property Rights</h3>
        <p>Kakr Labs retains all intellectual property rights to the APIs/SDKs...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">9. Modification and Availability</h3>
        <p>We reserve the right to modify or discontinue APIs/SDKs at any time...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">10. Support</h3>
        <p>Technical support may be provided but is not guaranteed...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">11. Compliance and Monitoring</h3>
        <p>We reserve the right to monitor API/SDK usage for compliance...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">12. Termination</h3>
        <p>We may terminate access to APIs/SDKs for Policy violations...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">13. Disclaimer and Limitation of Liability</h3>
        <p>APIs/SDKs are provided "as is" without warranties. Kakr Labs is not liable for damages arising from usage...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">14. Changes to this Policy</h3>
        <p>We reserve the right to modify this Policy, with continued usage indicating acceptance...</p>
      </div>

      <div>
        <h3 class="h4 fw-semibold mb-2">15. Contact Information</h3>
        <p>For any questions, contact us at <a href="mailto:contact@kakr.ai" class="text-decoration-underline text-primary">contact@kakr.ai</a>.</p>
      </div>
    </div>
  </div>
</div>

</div>
</template>

