<template>
    <section class="py-5 bg-white">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">Chainlink in the media</h2>
        <div class="row g-4">
          <div
            v-for="(article, index) in articles"
            :key="index"
            class="col-sm-6 col-lg-3"
          >
            <div class="card border-0 h-100">
              <img
                :src="article.image"
                class="card-img-top"
                :alt="article.title"
                style="height: 160px; object-fit: cover;"
              />
              <div class="card-body px-0">
                <small class="text-muted d-block mb-1">{{ article.date }}</small>
                <h6 class="card-title fw-semibold">
                  <a
                    :href="article.link"
                    target="_blank"
                    class="text-decoration-none text-primary"
                  >
                    {{ article.title }}
                  </a>
                </h6>
                <p class="text-muted small mb-0">
                  {{ article.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const articles = [
    {
      image: "https://cdn.prod.website-files.com/5f75fe1dce99248be5a892db/680bae019280a13e03a0be6b_1FjVzryiVR9e6rImC1bGl4YoVdGIJAqHOrnto2z8uqQ.jpeg",
      date: "April 16, 2025",
      title: "Global Custodian partners with Chainlink on new podcast series",
      description: "Exploring the convergence of traditional and decentralized finance.",
      link: "#",
    },
    {
      image: "https://cdn.prod.website-files.com/5f75fe1dce99248be5a892db/680b9d72306b34046df3d305_SUpLIwfSewdJxCSg8RZrKs1sblUUSZmWv1iwp95spwQ.jpeg",
      date: "March 24, 2025",
      title: "Abu Dhabi’s ADGM and Chainlink Partner to Develop Frameworks",
      description: "ADGM joins Chainlink to lead compliant tokenization initiatives.",
      link: "#",
    },
    {
      image: "https://cdn.prod.website-files.com/5f75fe1dce99248be5a892db/67a3d04ffb59c5e19b62b44d_wimw0Nw6lpFoqlgYYYEIvfUeW6tUZo2bbcnorY2yqN4.jpeg",
      date: "January 24, 2025",
      title: "BX Digital, BX Swiss Put Pricing Data Onchain with Chainlink",
      description: "Partnership brings on-chain pricing data using Chainlink tech.",
      link: "#",
    },
    {
      image: "https://cdn.prod.website-files.com/5f75fe1dce99248be5a892db/67a3d0bddd774fd67f389a03_9jYWwin-IO92FEruM97dBtvVpUvyI9fOBWG4zbENRMs.png",
      date: "January 7, 2025",
      title: "Ripple adopts Chainlink standard to boost RLUSD stablecoin",
      description: "Ripple integrates Chainlink to ensure secure RLUSD pricing.",
      link: "#",
    },
    {
      image: "https://cdn.prod.website-files.com/5f75fe1dce99248be5a892db/67a3d1e83463c1e4671c41c7_jcSqSG_yCQqpfN5BwGSqp3f-PQM1mDQ4BK2N14rH4BQ.jpeg",
      date: "January 1, 2025",
      title: "Chainlink announces cross-chain token launches",
      description: "New protocols powered by Chainlink's cross-chain tools.",
      link: "#",
    },
    {
      image: "https://cdn.prod.website-files.com/5f75fe1dce99248be5a892db/67a3cf6581773b542f43a133_KmZ0Kwo5VSLNkflddeqeJ7vA_aHLHIyH6JziIOtPM4I.jpeg",
      date: "December 20, 2024",
      title: "Chainlink Powers Insurance for Climate Risk",
      description: "Chainlink helps automate global weather insurance claims.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x240?text=Article+7",
      date: "December 5, 2024",
      title: "Banks look to Chainlink for DeFi interoperability",
      description: "Traditional banks explore DeFi via Chainlink bridges.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/400x240?text=Article+8",
      date: "November 30, 2024",
      title: "Chainlink powers global FX settlements with Swift",
      description: "Pilot program connects Swift and Chainlink networks.",
      link: "#",
    },
  ];
  </script>
  
