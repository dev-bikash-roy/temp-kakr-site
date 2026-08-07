<script setup>
import { onMounted } from 'vue';
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/line-numbers/prism-line-numbers.min.css' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css' },
  ],
  script: [
    { src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js", type: 'text/javascript', defer: true },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js", type: 'text/javascript', defer: true },
]
});
onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <div class="w-full md:w-1/2 lg:p-8 md:p-8 mt-10 mx-auto">
    <div class="max-w-lg mx-auto md:mr-0 rounded-xl shadow-xl">
      <!-- code box start -->
<pre data-aos="fade-up" id="codeBlock1" class="line-numbers bg-gray-900 text-white p-6 rounded-lg shadow-lg max-h-96 overflow-y-auto ">
<code class="language-javascript">
/** 
 * SDA or NFT Details on Litecoin Blockchain
 **/

//pass your API key, wallet name, and the encrypted key
const response = await liaasSdk.nftDetails(
  apiAccessKey, 
  tokenidstart,
  tokenidend, 
  propertyId
); 
  </code>
</pre>
      <!-- code box end -->
    </div>
  </div>
</template>

<style scoped>
/* Box styling */
div {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

/* Pre block styling */
pre {
  font-size: 0.9rem;
  line-height: 1.6;
  border-radius: 10px;
}

/* Code styling */
code {
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
}

.shadow-lg {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
