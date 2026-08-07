﻿<template>
  <section class="faq-section bg-white py-5 custom-faq-section" style="background:#F3F7FE;">
    <div class="container mx-auto px-4 custom-faq-container">
      <!-- Page Heading -->
      <div class="text-center mb-4">
        <h2 class="fs-2 fw-bold mb-2">Help and FAQ's</h2>
        <p class="text-secondary fs-5">
          Answers to your most pressing questions about Kakr Labs™ and our innovative blockchain solutions.
        </p>
      </div>

      <!-- FAQ Container -->
      <div
        class="mx-auto faq-outer-container"
        style="max-width: 896px; display: flex; flex-direction: column; row-gap: 2rem;"
      >
        <!-- Loop Through FAQ Categories -->
        <div
          v-for="(cat, catIndex) in categories"
          :key="catIndex"
          class="border border-secondary rounded shadow-sm faq-category"
        >
          <!-- Category Header -->
          <button
            @click="toggleCategory(catIndex)"
            class="d-flex justify-content-between align-items-center w-100 p-3 bg-light text-start faq-button"
            style="cursor: pointer; transition: background-color 0.2s;"
            @mouseover="($event.target.style.backgroundColor = '#f1f1f1')"
            @mouseout="($event.target.style.backgroundColor = '')"
          >
            <span class="fw-semibold fs-5">{{ cat.title }}</span>
            <!-- Simple arrow rotation -->
            <svg
              :class="{
                'rotate-180': openCategory === catIndex
              }"
              class="transition-transform"
              style="width: 24px; height: 24px; transition: transform 0.3s;"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10
                   10.586l3.293-3.293a1 1 0 111.414 1.414l-4
                   4a1 1 0 01-1.414 0l-4-4a1 1 0
                   010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <!-- Category Body -->
          <div v-if="openCategory === catIndex" class="p-3 bg-white faq-body">
            <!-- Loop Through FAQs in This Category -->
            <div
              v-for="(faq, index) in cat.faqs"
              :key="faq.question"
              class="bg-white rounded p-3 mt-3 shadow-sm faq-item"
            >
              <h3 class="fs-5 fw-semibold text-dark faq-question">
                {{ faq.question }}
              </h3>
              <p class="text-muted mt-2 faq-answer">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Stores which category is currently open (-1 means none)
const openCategory = ref(-1);

// Toggles the selected category
function toggleCategory(catIndex) {
openCategory.value = openCategory.value === catIndex ? -1 : catIndex;
}

// Full list of all 21 FAQs, grouped into categories:
const categories = ref([
{
  title: 'General FAQs',
  faqs: [
    {
      question: '1. What is Kakr Labs?',
      answer:
        'Kakr Labs is a blockchain software service provider enabling businesses to transition from Web 2.0 to Web 3.0. ' +
        'We build secure, efficient, and decentralized solutions on the Litecoin blockchain.'
    },
    {
      question: '2. How is Kakr Labs different from other blockchain providers?',
      answer:
        "We utilize Litecoin's Proof of Work technology, known for its low fees, reliability, and uptime. " +
        'Our products, including the PTERI App and LiaaS, simplify blockchain integration without requiring smart contracts.'
    },
    {
      question: '3. What is LiaaS?',
      answer:
        'LiaaS (Litecoin as a Service) is our comprehensive platform that helps businesses and developers ' +
        'build Web3 solutions, create tokens, deploy NFTs, and much more on Litecoin.'
    }
  ]
},
{
  title: 'Pteri Ecosystem FAQs',
  faqs: [
    {
      question: '4. What is the PTERI App?',
      answer:
        'The PTERI App is a self-custody wallet for Litecoin and OmniLite tokens, offering passwordless authentication, customer-controlled credentials, and Litecoin payment capabilities.'
    },
    {
      question: '5. What is Pteri Playground?',
      answer:
        'Pteri Playground is an interactive development platform where you can easily create wallets, tokens, NFTs, ' +
        'and more using pre-built templates and APIs.'
    },
    {
      question: '6. What is Pteri Intelligence?',
      answer:
        'Pteri Intelligence integrates AI with blockchain development, automating complex processes like token creation, ' +
        'wallet deployment, and application setup.'
    },
    {
      question: '7. How does Pteri simplify blockchain adoption?',
      answer:
        'The PTERI App, Playground, and Intelligence remove complexities by offering intuitive tools and ' +
        'AI-powered solutions for streamlined blockchain integration.'
    }
  ]
},
{
  title: 'Developer Tools FAQs',
  faqs: [
    {
      question: '8. What is the PTERI App?',
      answer:
        'The PTERI App is a self-custody wallet for Litecoin and OmniLite tokens, offering passwordless authentication, customer-controlled credentials, and Litecoin payment capabilities.'
    },
    {
      question: '9. What is Pteri Playground?',
      answer:
        'Pteri Playground is an interactive development platform where you can easily create wallets, tokens, NFTs, ' +
        'and more using pre-built templates and APIs.'
    },
    {
      question: '10. What is Pteri Intelligence?',
      answer:
        'Pteri Intelligence integrates AI with blockchain development, automating complex processes like token creation, ' +
        'wallet deployment, and application setup.'
    },
    {
      question: '11. How does Pteri simplify blockchain adoption?',
      answer:
        'The PTERI App, Playground, and Intelligence remove complexities by offering intuitive tools and ' +
        'AI-powered solutions for streamlined blockchain integration.'
    }
  ]
},
{
  title: 'Blockchain Use Case FAQs',
  faqs: [
    {
      question: '12. How does tokenization work with Kakr Labs?',
      answer:
        'Tokenization converts real-world assets, digital records, or concepts into blockchain tokens. ' +
        'Our platform supports stablecoins, NFTs, and SDRs for secure and transparent record-keeping.'
    },
    {
      question: '13. What industries can benefit from Kakr Labs solutions? ',
      answer:
        'Our solutions cater to finance, media, government, aviation, luxury assets, and more, ' +
        'delivering blockchain efficiency and transparency across sectors.'
    },
  ]
},
{
  title: 'Pricing FAQs',
  faqs: [
    {
      question: '15. What are the pricing plans for Pteri?',
      answer:
        'Basic Plan: $49/month, which includes VM access and 200 API calls per second. ' +
        'Enterprise Plan: Custom pricing for high-volume businesses with Azure infrastructure support.'
    }
  ]
},
{
  title: 'Workshop FAQs',
  faqs: [
    
    {
      question: '16. Who can join your workshops?',
      answer:
        'Our workshops are open to developers, startups, and businesses looking to explore Web3 technology. ' +
        'No prior experience is required.'
    }
  ]
},
{
  title: 'Technical FAQs',
  faqs: [
    {
      question: '17. Do you support smart contracts?',
      answer:
        'No - our platform does not require smart contracts, which keeps integrations faster and simpler.'
    },
    {
      question: '18. How does Litecoin benefit blockchain solutions?',
      answer:
        'Litecoin offers low transaction costs, fast processing times, and a mainnet that has run continuously since 2011, ' +
        'making it ideal for enterprise-grade blockchain solutions.'
    },
    {
      question: '19. How do your tools integrate with existing systems?',
      answer:
        'Our API and tools are Azure-friendly, enabling seamless integration with existing enterprise infrastructure.'
    }
  ]
}
]);
</script>

<style scoped>
/* Custom FAQ styling to remove borders and keep a white look */

/* Remove borders from the entire FAQ category box */
.faq-category {
border: none !important;
box-shadow: none !important;
background-color: #fff;
}

/* Make sure the items themselves still have a subtle shadow */
.faq-item {
box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

/* If you want a subtle hover, you can add it */
.faq-item:hover {
box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
}
</style>


