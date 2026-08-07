<template>
    <div class="py-12 bg-gray-50">
      <div class="container mx-auto">
        <!-- Title -->
        <h2 data-textify="chars" class="text-3xl font-bold text-center text-black" style="text-align:center!important;">
          Valued Partners
        </h2>
        <!-- Carousel -->
        <div class="flex justify-center">
          <div class="swiper partnerSwiper"> <!-- Unique class for this slider -->
            <div class="swiper-wrapper">
              <!-- Slide 1 -->
              <div class="swiper-slide partner-card">
                <a href="https://litecoin.com/" target="_blank">
                  <img src="/assets/img/litecoin-partner.png" alt="Partner 1 Logo" class="partner-logo" />
                </a>
              </div>
              <!-- Slide 2 -->
              <div class="swiper-slide partner-card">
                <a href="https://www.microsoft.com/en-us/startups" target="_blank">
                  <img src="/assets/img/microsoft-startups.png" alt="Partner 2 Logo" class="partner-logo" />
                </a>
              </div>
              <!-- Slide 3 -->
              <div class="swiper-slide partner-card">
                <a href="https://openai.com/" target="_blank">
                  <img src="/openai-white.png" alt="Partner 3 Logo" class="partner-logo" />
                </a>
              </div>
              <!-- Slide 4 -->
              <div class="swiper-slide partner-card">
                <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/kakrplatforminc1697572308188.pteri-node-offer?tab=overview" target="_blank">
                  <img src="/assets/img/azure-marketplace.png" alt="Partner 4 Logo" class="partner-logo" />
                </a>
              </div>
            </div>
            <!-- Pagination -->
            <div class="swiper-pagination mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  // Install modules
  Swiper.use([Autoplay, Pagination]);
  
  export default {
    mounted() {
      // Initialize the Swiper slider
      new Swiper(".partnerSwiper", {
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        navigation: { nextEl: ".swiper-button-next-3", prevEl: ".swiper-button-prev-3" },
        breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
      });
    },
  };
  </script>
  
  <style scoped>
  /* You can add additional custom styles for the partner slider here */
  .partner-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .partner-logo {
    max-width: 100%;
    height: auto;
  }
  </style>
  
