<template>
    <section class="portfolio-section py-12 bg-white">
      <div class="container mx-auto text-center px-4">
        <!-- Title -->
        <div>
          <h2 class="text-4xl font-bold mb-3">
            Revolutionize Development with Kakr Labs SDK
          </h2>
        </div>
        <div>
          <p class="section-subtitle mb-8">
            Embrace the power of Kakr Labs™ SDK and witness a drastic reduction in your code length-by at least 90%.
          </p>
        </div>
  
        <!-- Row for Codeboxes -->
        <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <!-- Left Codebox: Without Liaas™ -->
          <div class="codebox-container flex-1">
            <div class="heading mb-3">Without Liaas™</div>
            <div class="codebox" ref="leftCode">
              <pre class="line-numbers language-javascript">
  <code>
  /*
    npm install web3
  */
  
  const Web3 = require('web3');
  
  const web3 = new Web3(new Web3.providers.HttpProvider('https://Your_RPC.provider/v3/YOUR_API_KEY'));
  
  const usdtContractAddress = 'Contract_Address';
  const usdtABI = [
    // Include the ABI of the USDT contract here
  ];
  const usdtContract = new web3.eth.Contract(usdtABI, usdtContractAddress);
  
  async function getUSDTBalance(address) {
    try {
      const balance = await usdtContract.methods.balanceOf(address).call();
    } catch (error) {
      console.error('Error fetching USDT balance:', error);
    }
  }
  
  async function transferUSDT(senderPrivateKey, toAddress, amount) {
    try {
      const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);
      const senderAddress = senderAccount.address;
  
      const gasPrice = await web3.eth.getGasPrice();
      const gasLimit = 21000;
  
      const nonce = await web3.eth.getTransactionCount(senderAddress);
  
      const transactionObject = {
        from: senderAddress,
        to: usdtContractAddress,
        gasPrice,
        gas: gasLimit,
        nonce,
        data: usdtContract.methods.transfer(toAddress, amount).encodeABI(),
      };
  
      const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, senderPrivateKey);
      const transactionHash = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
  
      console.log('USDT transfer successful. Transaction Hash:', transactionHash);
    } catch (error) {
      console.error('Error transferring USDT:', error);
    }
  }
  
  const addressToCheck = '0xYourAddress';
  getUSDTBalance(addressToCheck);
  </code>
              </pre>
            </div>
          </div>
  
          <!-- Right Codebox: With Liaas™ (Typing Effect) -->
          <div class="codebox-container flex-1">
            <div class="heading mb-3">With Liaas™</div>
            <div class="codebox">
              <pre id="liaas-code" class="line-numbers language-javascript"><code></code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  // Reference for auto-scrolling left codebox
  const leftCode = ref(null);
  
  // The code that will be typed in the right codebox
  const typedCode = `/** 
  * npm install @Liaas-js
  **/
  
  const Liaas = require("Liaas-js");
  
  const LiaasSdk = new Liaas();
  
  const response = await LiaasSdk.createFungibleTokens(wallet, ...);
  
  console.log("Created Token", response);`;
  
  onMounted(() => {
    // Initialize TypeIt typing effect for the right codebox
    if (window.TypeIt) {
      new window.TypeIt("#liaas-code code", {
        strings: [typedCode],
        speed: 30,
        cursor: true,
        waitUntilVisible: true,
        afterComplete: () => {
          if (window.Prism) {
            Prism.highlightElement(document.querySelector("#liaas-code code"));
          }
        }
      }).go();
    } else {
      console.error("TypeIt is not defined. Ensure the TypeIt CDN is loaded.");
    }
  
    // Auto-scroll the left codebox horizontally if content overflows
    const preElement = leftCode.value;
    if (preElement) {
      setTimeout(() => {
        if (preElement.scrollWidth > preElement.clientWidth) {
          let scrollPos = 0;
          const maxScroll = preElement.scrollWidth - preElement.clientWidth;
          setInterval(() => {
            scrollPos += 1; // Adjust scroll speed as needed
            if (scrollPos > maxScroll) {
              scrollPos = 0;
            }
            preElement.scrollLeft = scrollPos;
          }, 50);
        }
      }, 500);
    }
  });
  </script>
  
  <style scoped>
  /* Container around each codebox + heading */
  .codebox-container {
    display: flex;
    flex-direction: column;
  }
  
  /* Heading above each codebox */
  .heading {
    font-weight: bold;
    text-align: left;
    font-size: 1.125rem; /* ~18px */
  }
  
  /* The codebox itself */
  .codebox {
    background: #2d2d2d;    /* Dark background */
    color: #dcdcdc;         /* Light text */
    padding: 1rem;
    border-radius: 4px;
    overflow: auto;
    height: 500px;          /* Fixed height */
    white-space: pre;       /* Prevent wrapping for horizontal scroll */
    text-align: left;
    font-size: 0.875rem;    /* ~14px for code */
  }
  
  /* Optional: For better code font clarity, use a monospace font */
  .codebox code,
  .codebox pre {
    font-family: "Fira Code", Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  .language-css .token.string, .style .token.string, .token.entity, .token.operator, .token.url {
    background: none!important;
}
span.token.operator {
    background: none!important;
    color: #fff;
}
  </style>
  
