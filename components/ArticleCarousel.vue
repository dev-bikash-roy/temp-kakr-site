<template>
  <section class="py-5 position-relative">
    <div class="text-center mb-4">
      <h2 class="h2 fw-bold">Featured Articles</h2>
    </div>

    <div class="swiper articles-swiper px-2 px-md-4">
      <!-- Swiper Slides -->
      <div class="swiper-wrapper">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="swiper-slide d-flex align-items-stretch"
        >
          <div class="card article-card shadow-lg w-100 d-flex flex-column">
            <img
              class="card-img-top"
              :src="article.image"
              :alt="article.title"
            />
            <div class="card-body d-flex flex-column flex-grow-1">
              <h5 class="card-title text-dark fs-4 fw-bold">
                {{ article.title }}
              </h5>
              <p class="card-text flex-grow-1">
                {{ article.description }}
              </p>
              <a
                :href="article.link"
                target="_blank"
                class="btn custom-btn default-btn align-self-start mt-auto"
              >
                {{ article.cta }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation (Bottom Center) -->
      <div class="article-nav-bottom d-none d-md-flex">
        <div class="articles-swiper-prev me-2 nav-btn">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="articles-swiper-next nav-btn">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const articles = ref([
  {
    title: "Beyond Smart Contracts",
    description: "Discover how LiaaS delivers next-gen blockchain solutions.",
    image: "https://pbs.twimg.com/media/GT1rPgwWMAAHmX1?format=jpg&name=small",
    link: "https://x.com/kakrlabs/status/1818729044147683558",
    cta: "Read More"
  },
  {
    title: "Unlock Blockchain Simplicity",
    description: "Explore the features of Pteri Playground.",
    image: "https://pbs.twimg.com/media/GXOcrbhWQAAoFjU?format=jpg&name=small",
    link: "https://x.com/kakrlabs/status/1833992654117634324",
    cta: "Explore"
  },
  {
    title: "Unveiling Pteri Playground",
    description: "The future of automated blockchain development.",
    image: "https://pbs.twimg.com/media/GNfyC6CX0AEdgeL?format=jpg&name=small",
    link: "https://x.com/kakrlabs/status/1815452241274585205",
    cta: "Learn More"
  },
  {
    title: "Transforming Energy Data",
    description: "Blockchain’s role in generational change.",
    image: "https://pbs.twimg.com/media/GbOprA9WEAAPm0e?format=jpg&name=small",
    link: "https://x.com/kakrlabs/status/1852011319823671485",
    cta: "Discover"
  },
  {
    title: "Proof of Work The Energy Engine Driving",
    description: "Driving humanity toward a Type I Civilization.",
    image: "https://pbs.twimg.com/media/GZUj2JoWQAAxBSe?format=jpg&name=small",
    link: "https://x.com/kakrlabs/status/1843420007696609633",
    cta: "View Details"
  },
  {
    title: "From Complexity to Clarity",
    description: "At Kakr Labs, we believe in the power of simplicity, innovation.",
    image: "https://pbs.twimg.com/media/GexBrWvWMAAslYv?format=jpg&name=small",
    link: "https://x.com/kakrlabs/status/1866160085308682250",
    cta: "View Details"
  },
  {
    title: "Litecoin: The Greatest",
    description: "A true decentralized network cannot be built in stages-It must be so from the start.",
    image: "https://pbs.twimg.com/media/GkAK94BWIAI2C_s?format=jpg&name=small",
    link: "https://x.com/kakrlabs/status/1891524683234955298",
    cta: "View Details"
  },
  {
    title: "PTERI Wallet: The New Self-Custody",
    description: "At Kakr Labs, we’ve been building tools to make the Litecoin blockchain yours-think Explorer Playground.",
    image: "https://pbs.twimg.com/media/Gnfnp8NWAAARiQJ?format=jpg&name=small",
    link: "https://x.com/kakrlabs/status/1907261241279574348",
    cta: "View Details"
  },
  {
    title: "Decentralized 2FA-Security That Scales Everywhere",
    description: "Traditional 2FA-SMS, email, Microsoft/Google Authenticators, USB passkeys, biometrics-relies on centralized.",
    image: "https://pbs.twimg.com/media/Gp9IiHkXoAAd2gp?format=jpg&name=small",
    link: "https://x.com/kakrlabs/status/1918332048583913629",
    cta: "View Details"
  },
  {
    title: "PTERI Wallet: The New Self-Custody Standard for Litecoin",
    description: "At Kakr Labs, we’ve been building tools to make the Litecoin blockchain yours-think Explorer Playground.",
    image: "https://pbs.twimg.com/media/Gnfnp8NWAAARiQJ?format=jpg&name=small",
    link: "https://x.com/kakrlabs/status/1907261241279574348",
    cta: "View Details"
  }
])

onMounted(() => {
  new Swiper(".articles-swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".articles-swiper-next",
      prevEl: ".articles-swiper-prev"
    },
    breakpoints: {
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    }
  })
})
</script>

<style scoped>
/* Swiper container */
.articles-swiper {
  width: 100%;
  padding-bottom: 60px; /* More room for nav buttons */
  position: relative;
}

/* Swiper slide */
.swiper-slide {
  min-height: 100%;
}

/* Bottom center nav buttons */
.article-nav-bottom {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 10px;
}

/* Navigation button style */
.nav-btn {
  background: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #333 !important;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.3s ease;
}
.nav-btn:hover {
  background: #f0f0f0;
}

/* Hide nav buttons on mobile */
@media (max-width: 767px) {
  .article-nav-bottom {
    display: none;
  }
}
</style>
