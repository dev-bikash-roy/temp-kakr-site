<script setup>
import { useHead, useSeoMeta } from '#imports';

import { useSEO } from '~/composables/useSEO'

const { setSEO } = useSEO()

setSEO({
  title: "Get in Touch with Kakr Labs: Your Gateway to Web3 and Blockchain Solutions",
  description: "Get in touch with Kakr Labs. Contact us for inquiries, partnerships, or support. Our team is here to help you with your Web3 and blockchain needs.",
  keywords: ["Contact Kakr Labs", "Web3 support", "blockchain inquiries", "partnerships", "Kakr Labs contact", "reach out to Kakr Labs", "blockchain development support"],
  image: '/og/og-contact-sales.png'
})
// ✅ Include Stylesheets & Swiper from CDN
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
    { src: "/assets/js/vendor/jquary-3.6.0.min.js", defer: true },
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
    //{ src: "/assets/js/custom.js", defer: true }
  ],
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-white dark:bg-dark-900 text-black py-5 text-center mt-4" style="margin-top:80px !important;">
      <div class="container">
        <h1 class="fw-bold display-5">Contact Sales</h1>
        <p class="lead">Start a chat session or explore services -your gateway to Web3 and Blockchain innovation with Kakr Labs.</p>
      </div>
    </section>

    <!-- Sticky Menu -->
    <nav class="bg-white dark:bg-dark-900 shadow-sm sticky-top z-1 border-bottom">
      <div class="container py-2 d-flex gap-4 justify-content-center flex-wrap">
        <a href="#contact" class="fw-semibold text-decoration-none">Contact Sales</a>
        <a href="#resources" class="fw-semibold text-decoration-none">Resources</a>
        <a href="#free" class="fw-semibold text-decoration-none">Free Account</a>
        <a href="#enterprise" class="fw-semibold text-decoration-none">Enterprise</a>
        <a href="#integration" class="fw-semibold text-decoration-none">Integration Help</a>
      </div>
    </nav>

    <!-- Page Sections -->
    <div class="container py-5">
      <!-- Contact Options -->
      <section id="contact" class="mb-5">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 shadow-sm">
              <img src="/assets/img/chat-with-sales.jpg" class="card-img-top" alt="Chat with Kakr Sales" />
              <div class="card-body text-center">
                <h5 class="card-title">Chat with Kakr Sales</h5>
                <p class="text-muted">Our Web3 specialists are available Monday to Friday, 24 hours.</p>
                <a href="/contact">
                <button class="default-btn">Chat now</button>
              </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 shadow-sm">
              <img src="/assets/img/Call Sales.jpg" class="card-img-top" alt="Discover Kakr Solutions" />
              <div class="card-body text-center">
                <h5 class="card-title">Discover Kakr Solutions</h5>
                <p class="text-muted">Explore tailored blockchain services and demos for your business needs.</p>
               <a href="/solutions">
                <button class="default-btn">Explore solutions</button>
               </a>
              </div>
            </div>
          </div>
        </div>
      </section>

 <!-- Resources Section -->
 <section id="resources" class="mb-5">
    <div class="container">
      <div class="resources-grid">
        <a
          href="https://support.kakr.ai/support/tickets/new"
          target="_blank"
          class="resource-box"
        >
          <i class="fas fa-headset"></i>
          <span>Submit Support Ticket</span>
        </a>
        <a
          href="https://www.pteri.org/Pricing"
          target="_blank"
          class="resource-box"
        >
          <i class="fas fa-chart-line"></i>
          <span>Explore Plans</span>
        </a>
        <a href="https://x.com/kakrco" target="_blank" rel="noopener noreferrer" class="resource-box">
          <i class="fas fa-users"></i>
          <span>Join Our Community</span>
        </a>
        <a href="https://docs.kakr.ai/" target="_blank" rel="noopener noreferrer" class="resource-box">
          <i class="fas fa-book"></i>
          <span>View Documentation</span>
        </a>
        <a href="/contact" class="resource-box">
          <i class="fas fa-envelope"></i>
          <span>Contact Sales</span>
        </a>
      </div>
    </div>
  </section>

<!-- Articles Section -->
<section id="articles" class="mb-5">
  <div class="container">
    <div class="row g-4">
      <!-- Article 1 -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="https://pbs.twimg.com/media/GT1rPgwWMAAHmX1?format=jpg&name=small" class="card-img-top" alt="Beyond Smart Contracts">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Beyond Smart Contracts</h5>
            <p class="text-muted flex-grow-1">Discover how LiaaS delivers next-gen blockchain solutions.</p>
            <a href="https://x.com/kakrlabs/status/1818729044147683558" target="_blank" class="default-btn mt-3">Read More</a>
          </div>
        </div>
      </div>
      <!-- Article 2 -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="https://pbs.twimg.com/media/GXOcrbhWQAAoFjU?format=jpg&name=small" class="card-img-top" alt="Unlock Blockchain Simplicity">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Unlock Blockchain Simplicity</h5>
            <p class="text-muted flex-grow-1">Explore the features of Pteri Playground.</p>
            <a href="https://x.com/kakrlabs/status/1833992654117634324" target="_blank" class="default-btn mt-3">Explore</a>
          </div>
        </div>
      </div>
      <!-- Article 3 -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="https://pbs.twimg.com/media/GNfyC6CX0AEdgeL?format=jpg&name=small" class="card-img-top" alt="Unveiling Pteri Playground">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Unveiling Pteri Playground</h5>
            <p class="text-muted flex-grow-1">The future of automated blockchain development.</p>
            <a href="https://x.com/kakrlabs/status/1815452241274585205" target="_blank" class="default-btn mt-3">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <!-- Enterprise Blockchain Solutions -->
      <section id="enterprise" class="mb-5">
        <div class="row">
          <div class="col-md-12">
            <div class="p-4 bg-light rounded shadow-sm">
              <h4 class="mb-3">Enterprise Blockchain Solutions</h4>
              <p class="text-muted">Whether you're launching a blockchain product or transforming existing enterprise systems, Kakr Labs offers enterprise-grade tools for tokenization, ledger integration, and data security. Build on Litecoin with confidence.</p>
              <button class="default-btn">Talk to Enterprise Team</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Integration Help -->
      <section id="integration" class="mb-5">
        <div class="row">
          <div class="col-md-12">
            <div class="p-4 bg-white dark:bg-dark-900 border rounded shadow-sm">
              <h4 class="mb-3">Need Help with Integration?</h4>
              <p class="text-muted">Our integration experts are ready to help you connect Kakr APIs with your app or platform. We support Node.js, Nuxt, React, Python, and more. Let us guide your journey into Web3.</p>
              <button class="default-btn">Book a consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

  <style scoped>
  .default-btn {
    display: inline-block;
    padding: 0.6rem 1.5rem;
    background-color: #2563eb;
    color: #fff;
    border: none;
    border-radius: 0.3rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: background-color 0.3s ease;
    margin-top: 0.75rem;
    padding: 20px 25px;
  }
  .default-btn:hover {
    background-color: #1d4ed8;
    color: #fff;
  }
  h5{
    font-size:20px;
  }
  /* Flex container for buttons */
.resources-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

/* Base styling for each resource button/link */
.resource-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  min-width: 220px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border-radius: 0.375rem;
  background-color: #007bff; /* Primary color */
  color: #fff;
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Hover state */
.resource-btn:hover {
  background-color: #0056b3;
}

/* Optional alternate style (e.g. for secondary actions) */
.resource-btn.outline {
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}

.resource-btn.outline:hover {
  background-color: #007bff;
  color: #fff;
}
/* Grid container for the resource boxes */
.resources-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

/* Resource box/card styling */
.resource-box {
  flex: 1 1 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  color: #333;
}

/* Icon styling inside each box */
.resource-box i {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  color: #007bff; /* Primary color - adjust as needed */
}

/* Label styling */
.resource-box span {
  font-size: 1rem;
  font-weight: 600;
}

/* Hover effect */
.resource-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
 
  </style>
  