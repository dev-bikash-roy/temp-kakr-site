<template>
  <div>
    <!-- Layout 3: 3×3 Grid with Hover Effect -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Valued Partners</h2>

        <!-- First row: 3 logos -->
        <div class="row row-cols-3 g-4 partner-3col">
          <div
            class="col"
            v-for="(partner, idx) in topPartners"
            :key="`top-${partner.name}-${idx}`"
          >
            <div class="card border-0 text-center h-100 p-3 partner-card">
              <a :href="partner.href" target="_blank" class="d-block my-auto">
                <img
                  :src="partner.logo"
                  :alt="partner.name"
                  class="img-fluid mx-auto"
                  style="max-height: 100px; object-fit: contain;"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Second row: 2 logos, centered -->
        <div class="row justify-content-center g-4 mt-2 partner-3col">
          <div
            class="col col-md-3"
            v-for="(partner, idx) in bottomPartners"
            :key="`bottom-${partner.name}-${idx}`"
          >
            <div class="card border-0 text-center h-100 p-3 partner-card">
              <a :href="partner.href" target="_blank" class="d-block my-auto">
                <img
                  :src="partner.logo"
                  :alt="partner.name"
                  class="img-fluid mx-auto"
                  style="max-height: 100px; object-fit: contain;"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Partner {
  name: string
  logo: string
  href: string
}

// your full list
const allPartners: Partner[] = [
  { name: 'Litecoin',      logo: '/assets/img/litecoin-partner.png',      href: 'https://litecoin.com/' },
  { name: 'Microsoft Startups', logo: '/assets/img/microsoft-startups.png', href: 'https://www.microsoft.com/startups' },
  { name: 'OpenAI',         logo: '/openai-white.png',        href: 'https://openai.com/' },
  { name: 'Google Startups', logo: '/assets/img/google-startups-logo.png',  href: 'https://startup.google.com/' },
  { name: 'IBM Partner Logo',   logo: '/assets/img/ibm-partner-logo.png',     href: 'https://www.ibm.com/partnerplus' },
]

// slice once in script so template stays clean
const topPartners = allPartners.slice(0, 3)
const bottomPartners = allPartners.slice(3)
</script>

<style scoped>
/* Hover effect for grid cards */
.partner-3col .partner-card {
  transition: transform 0.2s, box-shadow 0.2s;
}
.partner-3col .partner-card:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
