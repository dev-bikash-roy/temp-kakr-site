<template>
    <section class="portfolio-section py-12 bg-white">
      <div class="container mx-auto text-center px-4">
        <div>
          <h2 class="text-4xl font-bold mb-8">Try our Interactive demo!</h2>
        </div>
        <!-- Tabs -->
        <div class="tabs flex justify-center space-x-4 mb-8">
          <button 
            :class="tabButtonClasses('engineering')"
            @click="activeTab = 'engineering'"
            data-tab="engineering">
            Explorer Demo
          </button>
          <button 
            :class="tabButtonClasses('sales')"
            @click="activeTab = 'sales'"
            data-tab="sales">
            Wallet Playground
          </button>
          <button 
            :class="tabButtonClasses('marketing')"
            @click="activeTab = 'marketing'"
            data-tab="marketing">
            API Key Registration
          </button>
        </div>
        <!-- Tab Content -->
        <div id="tab-content" class="tab-content">
          <!-- Explorer Demo Panel -->
          <div class="tab-panel" id="engineering" v-show="activeTab === 'engineering'">
            <div class="content flex items-center justify-center">
              <!-- ARCADE EMBED START -->
              <div style="position: relative; padding-bottom: calc(49.53125% + 41px); height: 0; width: 100%;">
                <iframe src="https://demo.arcade.software/5tXAc1Z43h0jk9cqjg2U?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" 
                        title="Pteri Blockchain Explorer" frameborder="0" loading="lazy" 
                        webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" 
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; color-scheme: light;">
                </iframe>
              </div>
              <!-- ARCADE EMBED END -->
            </div>
          </div>
          <!-- API Key Registration Panel -->
          <div class="tab-panel hidden" id="marketing" v-show="activeTab === 'marketing'">
            <div class="content flex items-center justify-center">
              <!-- ARCADE EMBED START -->
              <div style="position: relative; padding-bottom: calc(57.14285714285714% + 41px); height: 0; width: 100%;">
                <iframe src="https://demo.arcade.software/RhnRh1JCLs6vt1nYa373?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" 
                        title="Seamless Blockchain Tools: Pteri Sign-In and API Key Creation" frameborder="0" loading="lazy" 
                        webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" 
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; color-scheme: light;">
                </iframe>
              </div>
              <!-- ARCADE EMBED END -->
            </div>
          </div>
          <!-- Wallet Playground Panel -->
          <div class="tab-panel hidden" id="sales" v-show="activeTab === 'sales'">
            <div class="content flex items-center justify-center">
              <!-- ARCADE EMBED START -->
              <div style="position: relative; padding-bottom: calc(49.53125% + 41px); height: 0; width: 100%;">
                <iframe src="https://demo.arcade.software/tfKhRa7IOaOjASORdyNF?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" 
                        title="LiaaS Playground | The Fastest Way to Create Wallets on Litecoin (copy)" frameborder="0" loading="lazy" 
                        webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" 
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; color-scheme: light;">
                </iframe>
              </div>
              <!-- ARCADE EMBED END -->
            </div>
          </div>
          <!-- Additional Panels (Finance, IT, Operations, HR) can be added similarly -->
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const activeTab = ref('engineering');
  
  const tabButtonClasses = (tabName) => {
    return [
      "tab",
      activeTab.value === tabName && "active text-blue-500 border-b-2"
    ];
  };
  </script>
  
  <style scoped>
  /* Optionally, define custom styles for the tabs */
  .tab {
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: transparent;
    border: none;
    font-size: 1rem;
    transition: color 0.3s;
  }
  </style>
  
