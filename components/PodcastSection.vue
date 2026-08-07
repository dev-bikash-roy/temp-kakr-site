<template>
    <section class="py-5 bg-white">
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
                style="border-radius: 8px; height: 220px; object-fit: cover;"
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
      image: "https://cdn.prod.website-files.com/5f75fe1dce99248be5a892db/65f0b32157a5414583bd5bd0_SnVN0GTBdZvwhA2YAR6Zy3UCV_mGJveTMqefXQRWdqY.jpeg",
      title: "The Smarter Securities Podcast: Talking tokenisation with Swift, Chainlink and Euroclear",
      link: "#",
    },
    {
      image: "https://cdn.prod.website-files.com/5f75fe1dce99248be5a892db/65f0b32157a5414583bd5bd0_SnVN0GTBdZvwhA2YAR6Zy3UCV_mGJveTMqefXQRWdqY.jpeg",
      title: "Chainlink's Sergey Nazarov on Smart Contracts, Tokenized Assets & Cross-chain Security",
      link: "#",
    },
    {
      image: "https://cdn.prod.website-files.com/5f75fe1dce99248be5a892db/65f0b32157a5414583bd5bd0_SnVN0GTBdZvwhA2YAR6Zy3UCV_mGJveTMqefXQRWdqY.jpeg",
      title: "Sergey Nazarov: Chainlink, Smart Contracts, and Oracle Networks | Lex Fridman Podcast",
      link: "#",
    },
  ];
  </script>
  
