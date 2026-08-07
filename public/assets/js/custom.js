document.addEventListener("DOMContentLoaded", function () {
    /* ===========================================================
       🟢 SWIPER CAROUSELS INITIALIZATION
    =========================================================== */
    function initSwipers() {
      if (typeof Swiper !== "undefined") {
        new Swiper(".mySwiper1", {
          spaceBetween: 20, loop: true, autoplay: { delay: 4000, disableOnInteraction: false },
          navigation: { nextEl: ".swiper-button-next-1", prevEl: ".swiper-button-prev-1" },
          breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
        });
  
        new Swiper(".mySwiper2", {
          spaceBetween: 20, loop: true, autoplay: { delay: 4000, disableOnInteraction: false },
          navigation: { nextEl: ".swiper-button-next-2", prevEl: ".swiper-button-prev-2" },
          breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
        });
  
        new Swiper(".mySwiper3", {
          spaceBetween: 20, loop: true, autoplay: { delay: 5000, disableOnInteraction: false },
          navigation: { nextEl: ".swiper-button-next-3", prevEl: ".swiper-button-prev-3" },
          breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
        });
  
        new Swiper(".testimonial-carousel", {
          slidesPerView: 1, loop: true, autoplay: { delay: 5000, disableOnInteraction: false },
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          pagination: { el: ".carousel-pagination", clickable: true }
        });
  
        new Swiper(".partnerSwiper", {
          slidesPerView: 1, loop: true, autoplay: { delay: 3000, disableOnInteraction: false },
          pagination: { el: ".partnerSwiper .swiper-pagination", clickable: true }
        });
  
        new Swiper(".custom-swiper-container", {
          slidesPerView: 4, loop: true,
          navigation: { nextEl: ".custom-carousel-next", prevEl: ".custom-carousel-prev" },
          breakpoints: { 1024: { slidesPerView: 3 }, 768: { slidesPerView: 2 }, 480: { slidesPerView: 1 } }
        });
      } else {
        console.error("Swiper not loaded.");
      }
    }
  
    /* ===========================================================
       🟢 PRISM CODE HIGHLIGHTING FIXED
    =========================================================== */
    function highlightPrism() {
      if (typeof Prism !== "undefined") {
        Prism.highlightAll();
      } else {
        console.warn("Prism.js not loaded.");
      }
    }
  
    /* ===========================================================
       🟢 TYPING EFFECT FOR CODE SNIPPET (With Prism Highlighting)
    =========================================================== */
    function typingEffect() {
      if (document.querySelector("#liaas-code code")) {
        new TypeIt("#liaas-code code", {
          strings: [`/** npm install @Liaas-js **/\n\nconst Liaas = require("Liaas-js");\n\nconst LiaasSdk = new Liaas();\n\nconst response = await LiaasSdk.createFungibleTokens(wallet, ...);\n\nconsole.log("Created Token", response);`],
          speed: 30, cursor: true,
          afterStep: () => Prism.highlightElement(document.querySelector("#liaas-code code"))
        }).go();
      }
    }
  
    /* ===========================================================
       🟢 TABS FUNCTIONALITY FIXED
    =========================================================== */
    function initTabs() {
      document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", function () {
          document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
          document.querySelectorAll(".tab-panel").forEach(p => p.classList.add("hidden"));
          tab.classList.add("active");
          document.getElementById(tab.dataset.tab).classList.remove("hidden");
        });
      });
    }
  
    /* ===========================================================
       🟢 AUTO-SCROLL CAROUSEL FIXED
    =========================================================== */
    function autoScrollCarousel() {
      const carousel = document.getElementById("carousel");
      if (carousel) {
        let position = 0;
        setInterval(() => {
          const cardWidth = carousel.querySelector(".article-card").offsetWidth + 20;
          position = (Math.abs(position) >= carousel.scrollWidth / 2) ? 0 : position - cardWidth;
          carousel.style.transform = `translateX(${position}px)`;
        }, 2000);
      }
    }
  
    /* ===========================================================
       🟢 GSAP ANIMATIONS (Ensure Headings Animate Correctly)
    =========================================================== */
    function gsapAnimations() {
      if (typeof gsap !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll("h1, h2, h3").forEach(heading => {
          const text = heading.textContent;
          heading.innerHTML = `<span style="display:inline-block; white-space:nowrap; overflow:hidden; width:0;">${text}</span>`;
          gsap.timeline({ scrollTrigger: { trigger: heading, start: "top 80%", once: true } })
            .to(heading.querySelector("span"), { width: "100%", duration: 2, ease: "steps(" + text.length + ")" });
        });
      }
    }
  
    /* ===========================================================
       🟢 DYNAMIC TEXT ROTATOR FIXED
    =========================================================== */
    function dynamicTextRotation() {
      const words = ["CBDCs", "Supply Chain", "Automobile", "Communications", "Patents", "Government", "Automation"];
      let index = 0;
      setInterval(() => {
        document.getElementById("dynamic-text").textContent = words[(index++) % words.length];
      }, 2000);
    }
  
    /* ===========================================================
       🟢 INITIALIZE ALL SCRIPTS AFTER A SHORT DELAY
    =========================================================== */
    setTimeout(() => {
      initSwipers();
      highlightPrism();
      typingEffect();
      initTabs();
      autoScrollCarousel();
      gsapAnimations();
      dynamicTextRotation();
    }, 500);
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.tab-panel');
  
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        // Remove active classes from all tabs
        tabs.forEach(function (t) {
          t.classList.remove('active', 'text-blue-500', 'border-b-2');
        });
        // Hide all tab panels by adding Tailwind's "hidden" class
        panels.forEach(function (panel) {
          panel.classList.add('hidden');
        });
  
        // Activate the clicked tab by adding active classes
        tab.classList.add('active', 'text-blue-500', 'border-b-2');
  
        // Get the corresponding panel ID from the tab's data attribute
        const targetPanelId = tab.getAttribute('data-tab');
        const targetPanel = document.getElementById(targetPanelId);
        if (targetPanel) {
          targetPanel.classList.remove('hidden');
        }
      });
    });
  });
  