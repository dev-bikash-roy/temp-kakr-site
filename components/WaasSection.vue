<template>
  <section class="py-5" style="background-color: #f8f9fa;">
    <div class="container">
      <div
        class="waas-section"
        v-for="(section, index) in sections"
        :key="index"
      >
        <!-- Left Text -->
        <div class="waas-text">
          <h2 class="fw-bold mb-3">{{ section.title }}</h2>
          <p class="text-muted">{{ section.description }}</p>
        </div>

        <!-- Right Code Box -->
        <div class="waas-code">
          <div class="code-wrapper">
            <div class="code-header">{{ section.title }}</div>
            <pre class="line-numbers language-javascript">
              <code
                class="language-javascript"
                v-html="section.highlighted"
              ></code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive } from 'vue'

const PrismURL = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0'

const sections = reactive([
  {
    title: 'Waas',
    description:
      'Our WaaS codebase simplifies wallet creation and management, enabling developers to integrate secure and self-custody wallets into their applications with just a few lines of code. Start building wallets for Litecoin and supported tokens today.',
    code: `// npm install @Liaas-js
const Liaas = require("Liaas-js");
const LiaasSdk = new Liaas();

// Pass your API key, NFT transaction ID
const response = await LiaasSdk.addressNfts(apiAccessKey, address);
console.log("NFT Balance", response);`,
    highlighted: ''
  },
  {
    title: 'Tokenization',
    description:
      'Effortlessly tokenize real-world assets and digital data with low fees and without the complexity of smart contracts.',
    code: `// npm install @Liaas-js
const Liaas = require("Liaas-js");
const LiaasSdk = new Liaas();

/** 
 * Create a Token on the Litecoin Blockchain
 **/
const response = await liaasSdk.createFungibleTokens_v2(
  nodeUrl_or_apiAccessKey,
  wallet,
  encryptedpassphrase,
  amount,
  description,
  name,
  url,
  address,
  tokenCategory,
  isDivisible,
  subcategory,
  isMainNet = false,
);
console.log(response);`,
    highlighted: ''
  },
  {
    title: 'NFT',
    description:
      'Secure Digital Assets (SDA) and NFTs transform traditional digital formats into verifiable on-chain assets.',
    code: `/**
* npm install @Liaas-js
**/
const Liaas = require("Liaas-js");
const LiaasSdk = new Liaas();

const response = await LiaasSdk.createFungibleTokens(wallet, ...);
console.log("Created Token", response);`,
    highlighted: ''
  }
])

function injectCDN(link, type = 'css') {
  const el = document.createElement(type === 'css' ? 'link' : 'script')
  if (type === 'css') {
    el.rel = 'stylesheet'
    el.href = link
  } else {
    el.src = link
  }
  document.head.appendChild(el)
}

function highlightAll() {
  if (!window.Prism) return setTimeout(highlightAll, 300)

  // Generate highlighted code for each section
  for (const section of sections) {
    section.highlighted = Prism.highlight(
      section.code,
      Prism.languages.javascript,
      'javascript'
    )
  }

  // Resize line numbers if plugin is loaded
  setTimeout(() => {
    const codes = document.querySelectorAll('pre.line-numbers code')
    codes.forEach((el) => {
      if (window.Prism.plugins?.lineNumbers) {
        Prism.plugins.lineNumbers.resize(el)
      }
    })
  }, 100)
}

onMounted(() => {
  // Inject required Prism CSS & JS from CDN
  injectCDN(`${PrismURL}/themes/prism-tomorrow.min.css`, 'css')
  injectCDN(`${PrismURL}/plugins/line-numbers/prism-line-numbers.min.css`, 'css')

  injectCDN(`${PrismURL}/prism.min.js`, 'js')
  injectCDN(`${PrismURL}/components/prism-javascript.min.js`, 'js')
  injectCDN(`${PrismURL}/plugins/line-numbers/prism-line-numbers.min.js`, 'js')

  // Allow some time for Prism to load then highlight code
  setTimeout(highlightAll, 1000)
})
</script>

<style scoped>
/* Layout */
.waas-section {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch; /* ensure children are equal height */
  margin-bottom: 3rem;
  min-height: 400px;
}
.waas-text,
.waas-code {
  width: 100%;
  padding: 1rem;
  flex: 1;
}
@media (min-width: 768px) {
  .waas-text,
  .waas-code {
    width: 50%;
  }
}

/* Code Box Styling */
.code-wrapper {
  background: #2d2d2d;
  border-radius: 0.5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.code-header {
  background: #495057;
  text-align: center;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

/* Prism Override */
pre[class*="language-"] {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  flex: 1;
  white-space: pre;
  overflow-x: auto;
  padding-left: 3em !important;
  box-sizing: border-box;
}
.line-numbers-rows {
  left: 0 !important;
}
</style>

