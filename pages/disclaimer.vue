<script setup>
import { useHead } from '#imports';

// ✅ Correct use of `useSeoMeta`
const { setSEO } = useSEO()

setSEO({
  title: 'Disclaimer - Kakr Labs',
  description: 'Read the official disclaimer of Kakr Labs regarding the use of our blockchain technology and Web3 solutions.',
  keywords: ['Kakr Labs disclaimer', 'blockchain disclaimer', 'Web3 solutions legal', 'Litecoin blockchain policy', 'tokenization terms'],
  image: 'https://www.kakr.ai/assets/img/disclaimer-kakrlabs.jpg'
})
// ✅ Include Stylesheets & Scripts

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
        <section class="page-header post-details bd-bottom">
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="container">
            <div class="page-header-info text-center">
                <!-- <h4>Details</h4> -->
                <h2>Disclaimer
                </h2>
                <!-- <p>Our versatile team is built of designers, developers and <br>digital marketers who all bring unique experience.</p>
                <ul class="post-meta">
                    <li><i class="las la-user"></i>Elliot Alderson</li>
                    <li><i class="las la-calendar"></i>Jan 01 2022</li>
                    <li><i class="las la-comments"></i>Comments 0</li>
                </ul> -->
            </div>
        </div>
        <div class="animated-dots">
            <span class="dot lf-left-right"></span>
            <span class="dot lf-up-down"></span>
            <span class="dot lf-up-down"></span>
            <span class="dot lf-rotate-center"></span>
            <span class="dot lf-left-right"></span>
            <span class="dot lf-rotate-center"></span>
        </div>
    </section>
    <!--page-header-->

    <section class="privacy-policy-section bg-black padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="policy-details" style="padding: 20px;">
                        <h2 style="text-align: center; color: #fff; margin-bottom: 20px;">Disclaimer</h2>
    
                        <p style="line-height: 1.6; font-weight: bold; color: #e2e8f0;">Effective Date: January 1st, 2026</p>
    
                        <h3 style="color: #e2e8f0;">1. Introduction</h3>
                        <p style="line-height: 1.6; color: #94a3b8;">This disclaimer ("Disclaimer") sets forth the general guidelines, disclosures, and terms of your use of the kakr.io and kakr.org websites ("Website" or "Service") and any of its related products and services (collectively, "Services"). This Disclaimer is a legally binding agreement between you ("User", "you" or "your") and Kakr Platform Inc. ("Kakr Platform Inc.", "we", "us" or "our"). By accessing and using the Website and Services, you agree to be bound by the terms and conditions of this Disclaimer. If you do not agree with the terms and conditions of this Disclaimer, you are not permitted to use the Website and Services.</p>
    
                        <h3 style="color: #e2e8f0;">2. Representation</h3>
                        <p style="line-height: 1.6; color: #94a3b8;">Any views or opinions represented on the Website are personal and belong solely to Kakr Platform Inc. and do not represent those of people, institutions or organizations that Kakr Platform Inc. may or may not be associated with in professional or personal capacity unless explicitly stated.</p>
    
                        <h3 style="color: #e2e8f0;">3. Content and Postings</h3>
                        <p style="line-height: 1.6; color: #94a3b8;">You may print a copy of any part of the Website and Services for your personal or non-commercial use. However, you may not modify, copy, reproduce, republish, upload, post, transmit, or distribute any material from the Service without our prior written consent.</p>
    
                        <h3 style="color: #e2e8f0;">4. Indemnification and Warranties</h3>
                        <p style="line-height: 1.6; color: #94a3b8;">While we have made every attempt to ensure that the information contained on the Website is correct, Kakr Platform Inc. is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information on the Website is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied.</p>
    
                        <h3 style="color: #e2e8f0;">5. Changes and Amendments</h3>
                        <p style="line-height: 1.6; color: #94a3b8;">We reserve the right to modify this Disclaimer or its terms relating to the Website and Services at any time, effective upon posting of an updated version of this Disclaimer on the Website. When we do, we will revise the updated date at the top of this page.</p>
    
                        <h3 style="color: #e2e8f0;">6. Acceptance of this Disclaimer</h3>
                        <p style="line-height: 1.6; color: #94a3b8;">You acknowledge that you have read this Disclaimer and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Disclaimer. If you do not agree to abide by the terms of this Disclaimer, you are not authorized to use or access the Website and Services.</p>
    
                        <h3 style="color: #e2e8f0;">7. Contacting Us</h3>
                        <p style="line-height: 1.6; color: #94a3b8;">If you have any questions, concerns, or complaints regarding this Disclaimer, we encourage you to contact us at <a href="mailto:contact@kakr.ai" style="color: #34d399; text-decoration: none;">contact@kakr.ai</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<style scoped>
/* Header Styling */
.main-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
}

/* Container */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Navigation Wrapper */
.navigation-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* Site Logo */
.site-logo img {
  max-height: 50px;
}

/* Navigation Menu */
.main-menu {
  list-style: none;
  display: flex;
  gap: 25px;
}

.main-menu li {
  position: relative;
}

.main-menu a {
  text-decoration: none;
  color: #222;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s ease-in-out;
}

.main-menu a:hover {
  color: #008000;
}

/* Dropdown Menu */
.main-menu li ul {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: none;
  list-style: none;
  padding: 10px 0;
  min-width: 200px;
}

.main-menu li:hover > ul {
  display: block;
}

.main-menu li ul li {
  padding: 10px 15px;
}

.main-menu li ul li a {
  color: #222;
  font-weight: normal;
}

.main-menu li ul li a:hover {
  color: #008000;
}

/* Header Right (Buttons) */
.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.default-btn {
  background: #008000;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease-in-out;
}

.default-btn:hover {
  background: #006400;
}

/* Mobile Menu */
.mobile-menu-icon {
  display: none;
  cursor: pointer;
}

.mobile-navigation-menu {
  display: none;
}

/* Mobile Responsive */
@media (max-width: 991px) {
  .main-menu {
    display: none;
  }

  .mobile-menu-icon {
    display: block;
  }

  .mobile-navigation-menu {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    height: 100vh;
    background: white;
    z-index: 9999;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .mobile-navigation-menu.open {
    transform: translateX(0);
  }

  .mobile-navigation-menu ul {
    list-style: none;
    padding: 0;
  }

  .mobile-navigation-menu li {
    padding: 12px 0;
  }

  .mobile-navigation-menu a {
    text-decoration: none;
    font-size: 18px;
    color: #222;
    font-weight: 600;
  }

  .mobile-navigation-menu a:hover {
    color: #008000;
  }
}

</style>