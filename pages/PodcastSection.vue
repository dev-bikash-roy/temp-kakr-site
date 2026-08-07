<template>
    <section class="py-5 bg-white dark:bg-dark-900">
      <div class="container">
        <h2 class="text-center fw-bold mb-4">Podcasts</h2>
        <div class="row g-4 justify-content-center">
          <div
            v-for="(podcast, index) in podcasts"
            :key="index"
            class="col-12 col-md-4"
          >
            <div class="card border-0 h-100">
              <img
                :src="podcast.image"
                class="card-img-top"
                :alt="podcast.title"
                style="border-radius: 8px;"
              />
              <div class="card-body px-0">
                <h6 class="card-title fw-medium mt-2">
                  <a
                    :href="podcast.link"
                    target="_blank"
                    class="text-decoration-none text-primary"
                  >
                    {{ podcast.title }}
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const podcasts = [
    {
      image: "https://via.placeholder.com/400x220?text=Smarter+Securities+Podcast",
      title: "The Smarter Securities Podcast: Talking tokenisation with Swift, Chainlink and Euroclear",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x220?text=Crypto+Brief",
      title: "Chainlink's Sergey Nazarov on Smart Contracts, Tokenized Assets & Cross-chain Security",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x220?text=Lex+Fridman+Podcast",
      title: "Sergey Nazarov: Chainlink, Smart Contracts, and Oracle Networks | Lex Fridman Podcast",
      link: "#",
    },
  ];
  </script>
  