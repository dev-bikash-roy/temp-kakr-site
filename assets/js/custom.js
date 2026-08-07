document.addEventListener("DOMContentLoaded", function () {
  /* ===========================================================
     🟢 MOBILE MENU HANDLER (Updated for Vue)
  =========================================================== */
  function mobileMenu() {
    if (document.querySelector(".mobile-navigation-menu") === null) {
      const mobileMenuContainer = document.createElement("div");
      mobileMenuContainer.className = "mobile-navigation-menu";
      mobileMenuContainer.innerHTML = `
          <button id="mobile-menu-close"><i class="la la-close"></i></button>
          <div class="mobile-menu-content"></div>
        `;
      document.querySelector("header.main-header").after(mobileMenuContainer);
    }

    // Move existing menu instead of cloning
    document.querySelector(".mobile-menu-content").innerHTML =
      document.querySelector("header.main-header .navigation-menu .main-menu").innerHTML;

    // Toggle menu visibility
    document.querySelector("#mobile-menu-close").addEventListener("click", toggleMobileMenu);
    document.querySelector(".mobile-menu-icon").addEventListener("click", toggleMobileMenu);

    function toggleMobileMenu() {
      document.querySelector(".mobile-navigation-menu").classList.toggle("open-mobile-menu");
      document.querySelector(".mobile-menu-icon").classList.toggle("menu-open");
    }

    // Handle dropdowns in mobile menu
    document.querySelectorAll(".mobile-navigation-menu ul li:has(ul)").forEach((item) => {
      if (!item.querySelector(".dropdown-plus")) {
        const dropdownToggle = document.createElement("span");
        dropdownToggle.className = "dropdown-plus";
        item.appendChild(dropdownToggle);
        dropdownToggle.addEventListener("click", function () {
          this.previousElementSibling.classList.toggle("dropdown-open");
          this.previousElementSibling.style.display =
            this.previousElementSibling.style.display === "block" ? "none" : "block";
        });
      }
    });
  }
  mobileMenu();

  /* ===========================================================
     🟢 SWIPER CAROUSELS
  =========================================================== */
  function initSwipers() {
    const swipers = [
      { selector: ".mySwiper1", delay: 3000 },
      { selector: ".mySwiper2", delay: 4000 },
      { selector: ".mySwiper3", delay: 5000 },
      { selector: ".testimonial-carousel", delay: 5000 },
      { selector: ".articles-swiper", delay: 4000 },
      { selector: ".partnerSwiper", delay: 3000 },
      { selector: ".custom-swiper-container", delay: 4000 },
    ];

    swipers.forEach((swiperConfig) => {
      new Swiper(swiperConfig.selector, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: swiperConfig.delay, disableOnInteraction: false },
        navigation: {
          nextEl: `${swiperConfig.selector}-next`,
          prevEl: `${swiperConfig.selector}-prev`,
        },
        breakpoints: {
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        },
      });
    });
  }
  initSwipers();

  /* ===========================================================
     🟢 PRISM CODE HIGHLIGHTING
  =========================================================== */
  if (window.Prism) {
    Prism.highlightAll();
  }

  /* ===========================================================
     🟢 LIAAS SDK TYPING EFFECT
  =========================================================== */
  if (document.querySelector("#liaas-code code")) {
    const codeSnippet = `
        /** npm install @Liaas-js **/
        const Liaas = require("Liaas-js");
        const LiaasSdk = new Liaas();
        const response = await LiaasSdk.createFungibleTokens(wallet, ...);
        console.log("Created Token", response);
      `;
    new TypeIt("#liaas-code code", {
      strings: [codeSnippet],
      speed: 30,
      cursor: true,
      afterStep: function () {
        Prism.highlightElement(document.querySelector("#liaas-code code"));
        document.querySelector("#liaas-code").scrollTop = document.querySelector("#liaas-code").scrollHeight;
      },
    }).go();
  }

  /* ===========================================================
     🟢 AUTO-SCROLL CAROUSEL
  =========================================================== */
  if (document.getElementById("carousel")) {
    const carousel = document.getElementById("carousel");
    let position = 0;
    function autoScroll() {
      const cardWidth = carousel.querySelector(".article-card").offsetWidth + 20;
      position -= cardWidth;
      if (Math.abs(position) >= carousel.scrollWidth / 2) position = 0;
      carousel.style.transform = `translateX(${position}px)`;
    }
    setInterval(autoScroll, 2000);
  }

  /* ===========================================================
     🟢 TABS HANDLER
  =========================================================== */
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active", "hidden"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  /* ===========================================================
     🟢 DYNAMIC TEXT ROTATOR
  =========================================================== */
  if (document.getElementById("dynamic-text")) {
    const words = ["CBDCs", "Supply Chain", "Automobile", "Communications", "Patents"];
    let index = 0;
    setInterval(() => {
      index = (index + 1) % words.length;
      document.getElementById("dynamic-text").textContent = words[index];
    }, 2000);
  }

  /* ===========================================================
     🟢 GSAP SCROLL ANIMATIONS
  =========================================================== */
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll("h1, h2, h3").forEach((heading) => {
      const text = heading.textContent;
      heading.innerHTML = `<span style="display:inline-block; white-space:nowrap; overflow:hidden; width:0;">${text}</span>`;
      const span = heading.querySelector("span");
      gsap.to(span, {
        width: "100%",
        duration: 2,
        ease: "steps(" + text.length + ")",
        scrollTrigger: { trigger: heading, start: "top 80%", once: true },
      });
    });
  }

  /* ===========================================================
     🟢 HERO TEXT TYPING EFFECT
  =========================================================== */
  if (document.getElementById("hero-text")) {
    const heroText = document.getElementById("hero-text");
    const text = heroText.textContent;
    heroText.innerHTML = text.split("").map((char) => `<span class="char">${char}</span>`).join("");
    gsap.fromTo(
      ".char",
      { opacity: 0 },
      { opacity: 1, duration: 0.05, stagger: 0.05, ease: "linear" }
    );
  }
});
