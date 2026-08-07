<template>
  <!-- Use :class to add "scrolled" when user scrolls -->
  <header
    class="main-header"
    :class="{ scrolled: hasScrolled }"
  >
    <div class="container">
      <div class="navigation-wrapper">
        <!-- Content here -->
      </div>
    </div>
        <div
          class="navigation-inner d-flex align-items-center justify-content-between"
          style="font-family: var(--primary-font);"
        >
          <!-- Left: Logo -->
          <div class="site-logo">
            <a href="/">
              <img
                src="assets/img/kakrlabs-logo.png"
                alt="kakrlabs"
                style="width:50%;"
              />
            </a>
          </div>
  
          <!-- Desktop Navigation -->
          <nav
            class="navigation-menu d-none d-lg-block"
            aria-label="Desktop Navigation"
          >
            <ul class="main-menu mb-0 d-flex align-items-center">
              <!-- Home -->
              <li><a href="/">Home</a></li>
  
              <!-- Products (Hover-based) -->
              <li class="nav-item dropdown position-static">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  Products
                </a>
                <ul class="dropdown-menu" style="min-width: 200px;">
                  <li>
                    <a href="https://www.pteri.org/" target="_blank"
                      >Pteri Explorer</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://kakrlabs.gitbook.io/litecoin/litecoin-as-a-service"
                      target="_blank"
                      >Pteri LiaaS</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://playground.pteri.org/"
                      target="_blank"
                      >Pteri Playground</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://playground.pteri.org/Chat/Pteri-Intelligence"
                      target="_blank"
                      >Pteri Intelligence (New)</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://pteri.kakr.org/"
                      target="_blank"
                      >PTERI App (BETA)</a
                    >
                  </li>
                  <li>
                    <a href="/decentralized-as-a-service"
                      >Decentralized-as-a-Service (DaaS)</a
                    >
                  </li>
                </ul>
              </li>
  
              <!-- Solutions -->
              <li><a href="/solutions">Solutions</a></li>
  
              <!-- Resources (Hover-based) -->
              <li class="nav-item dropdown position-static">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  Resources
                </a>
                <ul class="dropdown-menu" style="min-width: 200px;">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/developers">Developers</a>
                  </li>
                  <li>
                    <a
                      href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/kakrplatforminc1697572308188.pteri-node-offer?tab=overview"
                      target="_blank"
                      >Azure Listing</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://kakrlabs.gitbook.io/litecoin/"
                      target="_blank"
                      >Documentation</a
                    >
                  </li>
                </ul>
              </li>
  
              <!-- Contact -->
              <li><a href="/contact-sales">Contact Sales</a></li>
            </ul>
          </nav>
  
          <!-- Right: Start Free Trial & AI Chat (desktop) -->
          <div class="header-right d-none d-md-flex align-items-center gap-3">
            <a
              href="https://pteri.org/Register"
              target="_blank"
              class="default-btn"
            >
              Start Free Trial
            </a>
            <a href="/chat" class="ai-btn" style="cursor: pointer;">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                  ></path>
                  <path
                    fill="#000"
                    d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
  
          <!-- Mobile Hamburger: triggers offcanvas (side panel) -->
          <div class="mobile-menu-icon d-lg-none">
            <button
              class="border-0 bg-transparent p-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNav"
              aria-controls="offcanvasNav"
              aria-label="Open Menu"
            >
              <div class="burger-menu">
                <div class="line-menu line-half first-line"></div>
                <div class="line-menu"></div>
                <div class="line-menu line-half last-line"></div>
              </div>
            </button>
          </div>
        </div>

  
      <!-- Mobile Offcanvas Side Panel -->
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNav"
        aria-labelledby="offcanvasNavLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavLabel">Menu</h5>
          <button
            type="button"
            class="border-0 bg-transparent fs-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style="cursor: pointer;"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <!-- The same links as your old menu, for mobile only -->
          <ul class="list-unstyled ps-0" style="font-family: var(--primary-font);">
            <!-- Home -->
            <li class="mb-3">
              <a href="/" class="text-dark text-decoration-none fw-semibold"
                >Home</a
              >
            </li>
  
            <!-- PRODUCTS with toggle -->
            <li>
              <div
                class="d-flex align-items-center justify-content-between text-dark fw-semibold mb-2"
                @click="toggleProducts"
                style="cursor: pointer;"
              >
                <span>Products</span>
                <span>{{ showProducts ? '–' : '+' }}</span>
              </div>
              <ul v-if="showProducts" class="ms-3 list-unstyled">
                <li>
                  <a
                    href="https://www.pteri.org/"
                    target="_blank"
                    class="text-dark text-decoration-none"
                    >Pteri Explorer</a
                  >
                </li>
                <li>
                  <a
                    href="https://kakrlabs.gitbook.io/litecoin/litecoin-as-a-service"
                    target="_blank"
                    class="text-dark text-decoration-none"
                    >Pteri LiaaS</a
                  >
                </li>
                <li>
                  <a
                    href="https://playground.pteri.org/"
                    target="_blank"
                    class="text-dark text-decoration-none"
                    >Pteri Playground</a
                  >
                </li>
                <li>
                  <a
                    href="https://playground.pteri.org/Chat/Pteri-Intelligence"
                    target="_blank"
                    class="text-dark text-decoration-none"
                    >Pteri Intelligence (New)</a
                  >
                </li>
                <li>
                  <a
                    href="https://pteri.kakr.org/"
                    target="_blank"
                    class="text-dark text-decoration-none"
                    >PTERI App (BETA)</a
                  >
                </li>
                <li>
                  <a href="/decentralized-as-a-service"
                    class="text-dark text-decoration-none"
                    >Decentralized-as-a-Service (DaaS)</a
                  >
                </li>
              </ul>
            </li>
  
            <!-- Solutions -->
            <li class="mt-3">
              <a href="/solutions"
                class="text-dark text-decoration-none fw-semibold"
                >Solutions</a
              >
            </li>
  
            <!-- RESOURCES with toggle -->
            <li class="mt-3">
              <div
                class="d-flex align-items-center justify-content-between text-dark fw-semibold mb-2"
                @click="toggleResources"
                style="cursor: pointer;"
              >
                <span>Resources</span>
                <span>{{ showResources ? '–' : '+' }}</span>
              </div>
              <ul v-if="showResources" class="ms-3 list-unstyled">
                <li>
                  <a href="/about"
                    class="text-dark text-decoration-none"
                    >About Us</a
                  >
                </li>
                <li>
                  <a href="/developers"
                    class="text-dark text-decoration-none"
                    >Developers</a
                  >
                </li>
                <li>
                  <a
                    href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/kakrplatforminc1697572308188.pteri-node-offer?tab=overview"
                    target="_blank"
                    class="text-dark text-decoration-none"
                    >Azure Listing</a
                  >
                </li>
                <li>
                  <a
                    href="https://kakrlabs.gitbook.io/litecoin/"
                    target="_blank"
                    class="text-dark text-decoration-none"
                    >Documentation</a
                  >
                </li>
              </ul>
            </li>
  
            <!-- Contact -->
            <li class="mt-3">
              <a href="/contact-sales"
                class="text-dark text-decoration-none fw-semibold"
                >Contact Sales</a
              >
            </li>
  
            <!-- Start Free Trial -->
            <li class="mt-4">
              <a
                href="https://pteri.org/Register"
                target="_blank"
                class="default-btn d-block text-center"
              >
                Start Free Trial
              </a>
            </li>
  
            <!-- AI Chat -->
            <li class="mt-3">
              <a href="/chat" class="ai-btn text-dark fs-4" style="cursor: pointer;">
                <!-- same SVG as above -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                    ></path>
                    <path
                      fill="#000"
                      d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                    ></path>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  /** Submenu toggles for mobile only */
  const showProducts = ref(false)
  const showResources = ref(false)
  
  function toggleProducts() {
    showProducts.value = !showProducts.value
  }
  function toggleResources() {
    showResources.value = !showResources.value
  }
  
  /** Add a shadow to header when scrolling */
  const hasScrolled = ref(false)
  
  function handleScroll() {
    hasScrolled.value = window.scrollY > 10
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  
    // Auto-close mobile offcanvas menu when a link is clicked
    const offcanvasElement = document.getElementById('offcanvasNav')
    if (offcanvasElement && window.bootstrap && bootstrap.Offcanvas) {
      const links = offcanvasElement.querySelectorAll('a')
      links.forEach(link => {
        link.addEventListener('click', () => {
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement)
          if (offcanvasInstance) {
            offcanvasInstance.hide()
          }
        })
      })
    }
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  :root {
    --primary-font: "Syne", sans-serif;
  }
  
  /* Apply Syne to everything */
  body,
  .main-header,
  .navigation-wrapper,
  .navigation-inner,
  .navigation-menu,
  .header-right,
  .offcanvas,
  .dropdown-menu,
  li,
  a,
  button,
  .nav-link,
  .default-btn {
    font-family: var(--primary-font) !important;
  }
  
  /* Sticky top with shadow if scrolled */
  .main-header.sticky-top.scrolled {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease;
    background: #fff;
    /* Ensure it’s above offcanvas if needed. */
    z-index: 1050;
  }
  
  /* Let the offcanvas appear above the header on mobile */
  .offcanvas {
    z-index: 2000 !important;
  }
  
  /* Hover-based dropdown on desktop */
  .nav-item.dropdown:hover .dropdown-menu {
    display: block !important;
  }
  
  /* The old burger-menu lines */
  .burger-menu {
    width: 24px;
    height: 18px;
    position: relative;
  }
  .line-menu {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    transition: 0.4s;
  }
  .line-menu.line-half {
    width: 50%;
  }
  .first-line {
    top: 0;
  }
  .line-menu:nth-child(2) {
    top: 8px;
  }
  .last-line {
    bottom: 0;
  }
  
  /* “Start Free Trial” button from old code */
  .default-btn {
    text-decoration: none;
  }
  .default-btn:hover {
    background: linear-gradient(45deg, #44e744, #00a600);
    text-decoration: none;
  }
  
  /* Cursor pointer for toggles & elements */
  .dropdown-toggle,
  .offcanvas-header button,
  .mobile-menu-icon button {
    cursor: pointer !important;
  }
  header{
    padding-left:20px;
    padding-right:20px;
  }
  </style>
