<script setup="lang = ts">
import { useHead, useSeoMeta } from "#imports";
import { onMounted, ref, nextTick } from "vue";

definePageMeta({
  layout: "chat-layout",
  title: "LIA Chat",
});

useSeoMeta({
  title: "Kakr Labs Assistant™",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Chat with LIA, the Kakr Labs Assistant, to learn more about our Web3 solutions and blockchain integration services.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "LIA Chatbot, AI assistance bot, Kakr Labs Assistant, AI tools, blockchain integration, Web3 development",
    },
    { name: "author", content: "Kakr Labs" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },

    {
      property: "og:title",
      content: "Kakr Labs: AI Chatbot Assistant for Web3 Solutions",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.kakr.org/chat" },
    {
      property: "og:description",
      content:
        "Chat with LIA, the Kakr Labs Assistant, to learn more about our Web3 solutions and blockchain integration services.",
    },
    {
      property: "og:image",
      content: "https://www.kakr.org/assets/img/kakr-home.jpg",
    },
    { property: "og:site_name", content: "Kakr Labs" },

    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content:
        "Get in Touch with Kakr Labs: Your Gateway to Web3 and Blockchain Solutions",
    },
    {
      name: "twitter:description",
      content:
        "Chat with LIA, the Kakr Labs Assistant, to learn more about our Web3 solutions and blockchain integration services.",
    },
    {
      name: "twitter:image",
      content: "https://www.kakr.org/assets/img/kakr-home.jpg",
    },
    { name: "twitter:site", content: "@kakrlabs" },
    { name: "twitter:creator", content: "@kakrlabs" },
  ],
  link: [{ rel: "canonical", href: "https://www.kakr.org/chat" }],
});

useHead({
  htmlAttrs: { lang: "en" },
  link: [
    // {
    //   rel: "stylesheet",
    //   href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    //   crossorigin: "anonymous",
    // },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css",
    }, // ✅ Swiper CSS
    // { rel: "stylesheet", href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" },
    { rel: "stylesheet", href: "/assets/css/common-style.css" },
    { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "/assets/css/line-awesome.min.css" },
    { rel: "stylesheet", href: "/assets/css/chat.css" },
    { rel: "stylesheet", href: "/assets/css/main.css" },

    {
      rel: "stylesheer",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@400;500;600;700&display=swap",
    },
  ],
  script: [
    { src: "/assets/js/vendor/jquary-3.6.0.min.js", defer: true },
    { src: "/assets/js/vendor/scroll-trigger.min.js", defer: true },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js",
      defer: true,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
      defer: true,
    },
    { src: "/assets/js/chat.js", defer: true },
  ],
});
</script>

<template>
  <div id="chatbot-container">
    <!-- <header class="main-header">
      <div class="container">
        <div class="navigation-wrapper">
          <div class="navigation-inner">
            <div class="site-logo">
              <a href="/">
                <img
                  src="assets/img/kakrlabs-logo.png"
                  alt="kakrlabs"
                  style="width: 50%"
                />
              </a>
            </div>
            <nav class="navigation-menu">
              <ul class="main-menu">
                <li><a href="/">Home</a></li>
                <li>
                  <a href="#">Products</a>
                  <ul>
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
                      <a href="https://playground.pteri.org/" target="_blank"
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
                      <a href="https://pteri.kakr.org/" target="_blank"
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
                <li><a href="/solutions">Solutions</a></li>
                <li>
                  <a href="#">Learn</a>
                  <ul>
                    <li>
                      <a
                        href="https://kakrlabs.gitbook.io/litecoin/core-concepts/introduction"
                        target="_blank"
                        >Introduction</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://kakrlabs.gitbook.io/litecoin/litecoin-as-a-service/getting-set-up/authentication"
                        target="_blank"
                        >Get Started</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://kakrlabs.gitbook.io/litecoin/litecoin-as-a-service/transactions"
                        target="_blank"
                        >Blocks</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://kakrlabs.gitbook.io/litecoin/litecoin-as-a-service/token-issuance"
                        target="_blank"
                        >Tokenization</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://kakrlabs.gitbook.io/litecoin/litecoin-as-a-service/wallet-system"
                        target="_blank"
                        >Wallet System</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://kakrlabs.gitbook.io/litecoin/litecoin-as-a-service/transactions"
                        target="_blank"
                        >Transactions</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Resources</a>
                  <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/developers">Developers</a></li>
                    <li>
                      <a
                        href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/kakrplatforminc1697572308188.pteri-node-offer?tab=overview"
                        target="_blank"
                        >Azure Listing</a
                      >
                    </li>
                    <li>
                      <a href="https://kakrlabs.gitbook.io/litecoin/"
                        >Documentation</a
                      >
                    </li>
                  </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
                <li>
                  <a href="/chat" class="ai-btn d-block d-lg-none d-md-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                        />
                        <path
                          fill="#000"
                          d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="header-right">
              <a
                href="https://pteri.org/Register"
                target="_blank"
                class="default-btn d-none d-md-block"
                >Start Free Trial</a
              >
              <a href="/chat" class="ai-btn d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                    />
                    <path
                      fill="#000"
                      d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                    />
                  </g>
                </svg>
              </a>

              <button class="sidebar-trigger open d-none">
                <svg
                  class="trigger-opener"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="16px"
                  height="12.7px"
                  viewBox="0 0 16 12.7"
                  style="enable-background: new 0 0 16 12.7"
                  xml:space="preserve"
                >
                  <g>
                    <rect x="5" y="8.4" width="11" height="2" />
                    <rect x="0" y="2.4" width="16" height="2" />
                  </g>
                </svg>
              </button>

              <div class="mobile-menu-icon">
                <div class="burger-menu">
                  <div class="line-menu line-half first-line"></div>
                  <div class="line-menu"></div>
                  <div class="line-menu line-half last-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> -->

    <!-- <div id="chatbot-header">
        <h3 class="fw-bold">Kakr Assistant</h3>
        <div class="d-flex gap-2">
          <button id="menu-button" class="btn btn-outline-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="28px"
              height="28px"
            >
              <path
                fill="#110718"
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </button>
        </div>
      </div> -->

    <div id="chatbot-body">
      <div class="text-center text-secondary mb-2">
        <!-- ${{ new Date().toLocaleDateString([], { day: "2-digit", month:
          "2-digit", year: "numeric", }) }} -->
      </div>
      <div
        id="chat-content"
        class="overflow-auto"
        style="max-height: 100%; padding: 16px; scroll-behavior: smooth"
      ></div>
    </div>

    <div class="w-100 px-3 pb-3">
      <div id="chatbot-input-div" class="d-flex">
        <textarea
          id="chatbot-input"
          class="form-control"
          placeholder="Ask your question..."
          rows="1"
        ></textarea>
        <button id="download-chat" class="btn btn-outline-success ms-2">
          <i class="fas fa-download fa-lg" style="color: #5618c9"></i>
        </button>
        <button id="clear-conversations" class="btn btn-outline-secondary ms-2">
          <i class="fas fa-trash fa-lg" style="color: #f00"></i>
        </button>

        <button id="chatbot-send" disabled class="btn btn-outline-success ms-2">
          <i class="fas fa-paper-plane fa-lg" style="color: #5618c9"></i>
        </button>
      </div>
    </div>
  </div>
</template>
