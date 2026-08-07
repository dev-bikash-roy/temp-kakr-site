<template>
  <section class="partners-section">
    <div class="container">
      <h2 class="partners-title">{{ t('partnerSection.title') }}</h2>
      <div class="partners-grid">
        <a
          v-for="(p, idx) in partners"
          :key="idx"
          :href="p.href"
          target="_blank"
          rel="noopener"
          class="partner-card"
        >
          <div class="logo-wrapper">
            <img :src="p.logo" :alt="p.name" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '#imports'

const { t } = useI18n()

interface Partner { name: string; logo: string; href: string }
const partners = ref<Partner[]>([
  { name: 'Google Cloud', logo: '/google-partner-new-logo.jpg', href: 'https://cloud.google.com/' },
  { name: 'Litecoin', logo: '/images/litecoin-partner.png', href: 'https://litecoin.org/' },
  { name: 'Microsoft Startups', logo: '/images/microsoft-startups.png', href: 'https://www.microsoft.com/startups' },
  { name: 'IBM', logo: '/images/ibm-partner-logo.png', href: 'https://www.ibm.com/' },
])
</script>

<style scoped>
.partners-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #0b0c10 0%, #1f2833 100%);
  color: #c5c6c7;
}
.partners-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #66fcf1;
  text-shadow: 0 0 8px rgba(102,252,241,0.7);
}
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}
.partner-card {
  display: block;
  perspective: 800px;
}
.logo-wrapper {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(102,252,241,0.3);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(6px);
}
.logo-wrapper img {
  max-width: 80%;
  filter: drop-shadow(0 0 6px rgba(102,252,241,0.8));
}
.partner-card:hover .logo-wrapper {
  transform: rotateY(15deg) translateY(-0.5rem);
  box-shadow: 0 8px 24px rgba(102,252,241,0.4);
  border-color: #66fcf1;
}

@media (max-width: 600px) {
  .partners-title {
    font-size: 1.5rem;
  }
  .logo-wrapper {
    padding: 1rem;
  }
}
</style>
