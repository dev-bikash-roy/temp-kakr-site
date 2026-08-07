<template>
    <!-- Codebox Section -->
    <section class="code-comparison-section">
      <!-- Heading and Description -->
      <div class="text-center mb-4">
        <h2 class="mb-2" style="font-size: 1.875rem;">
          Revolutionize Development with Kakr Labs SDK
        </h2>
        <p style="margin: 0;">
          Embrace the power of Kakr Labs™ SDK and witness a drastic reduction in
          your code length-by at least 90%.
        </p>
      </div>
  
      <!-- Row containing both code boxes side by side -->
      <div class="code-comparison d-flex flex-wrap">
        <!-- Left Code Box -->
        <div class="code-wrapper">
          <h3 class="code-title">Without Liaas™</h3>
          <pre class="line-numbers code-box">
  <code class="language-javascript">
  /*
    npm install web3
  */
  
  const Web3 = require('web3');
  
  const web3 = new Web3(
    new Web3.providers.HttpProvider('https://Your_RPC.provider/v3/YOUR_API_KEY')
  );
  
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
  
      const txObject = {
        from: senderAddress,
        to: usdtContractAddress,
        gasPrice,
        gas: gasLimit,
        nonce,
        data: usdtContract.methods.transfer(toAddress, amount).encodeABI(),
      };
  
      const signedTx = await web3.eth.accounts.signTransaction(
        txObject,
        senderPrivateKey
      );
      const txHash = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
      );
  
      console.log('USDT transfer successful. Transaction Hash:', txHash);
    } catch (error) {
      console.error('Error transferring USDT:', error);
    }
  }
  
  const addressToCheck = '0xYourAddress';
  getUSDTBalance(addressToCheck);
  </code>
          </pre>
        </div>
  
        <!-- Right Code Box -->
        <div class="code-wrapper">
          <h3 class="code-title">With Liaas™</h3>
          <pre class="line-numbers code-box">
  <code class="language-javascript">
  /**
   * npm install @Liaas-js
  **/
  
  const Liaas = require("Liaas-js");
  const LiaasSdk = new Liaas();
  
  const response = await LiaasSdk.createFungibleTokens(wallet, ...);
  console.log("Created Token", response);
  </code>
          </pre>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useHead } from '#imports'
  
  // Load Prism + line-numbers from a CDN
  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.css'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js',
        defer: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js',
        defer: true
      }
    ]
  })
  
  onMounted(() => {
    // After the scripts load, highlight all code blocks
    if (window.Prism) {
      window.Prism.highlightAll()
    } else {
      console.warn('Prism not found on window')
    }
  })
  </script>
  
  <style scoped>
  /* Outer container spacing */
  .code-comparison-section {
    padding: 1rem;
  }
  
  /* Container for both code boxes side by side */
  .code-comparison {
    gap: 1rem;
  }
  
  /* Each code box container */
  .code-wrapper {
    flex: 1 1 300px;       /* Grow or shrink as needed, min width 300px for responsiveness */
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem; /* For a rounded look */
    overflow: hidden;      /* Clip child corners if needed */
    background-color: #2d2d2d; /* Dark background */
    height: 400px;
  }
  
  /* Title above each box */
  .code-title {
    margin: 0;
    padding: 0.75rem 1rem;
    background-color: #2d2d2d; /* same as code background for a consistent block */
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Actual code area */
  .code-box {
    margin: 0;
    padding: 1rem;
    flex: 1;               /* fill remaining vertical space */
    background-color: #2d2d2d; 
    color: #fff;
    border: none;
    border-radius: 0;
    overflow: auto;
  }
  
  /* Make sure line numbers plugin works well with the dark background: */
  .line-numbers .line-numbers-rows {
    border-right: 1px solid rgba(255, 255, 255, 0.2) !important;
    background-color: rgba(0, 0, 0, 0.2) !important;
  }
  
  /* Adjust line number text color, if desired */
  .line-numbers .line-numbers-rows > span:before {
    color: rgba(255, 255, 255, 0.5) !important;
  }
  
  /* Prism override for better color contrast on dark background (optional) */
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: rgba(255, 255, 255, 0.4) !important;
  }
  code[class*=language-],
  pre[class*=language-] {
    text-shadow: none !important;
    color: #fff;
  }
  </style>
  
