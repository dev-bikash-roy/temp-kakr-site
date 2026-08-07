<template>
  <div class="pricing-cards-wrapper">

    <!-- Tab Toggle -->
    <div class="flex justify-center mb-10">
      <div class="tab-toggle">
        <button
          :class="['tab-btn', activeTab === 'identity' ? 'tab-btn--active' : '']"
          @click="activeTab = 'identity'"
        >
          🔐 Identity Trust Layer
        </button>
        <button
          :class="['tab-btn', activeTab === 'blockchain' ? 'tab-btn--active' : '']"
          @click="activeTab = 'blockchain'"
        >
          ⛓ Blockchain Infrastructure
        </button>
      </div>
    </div>

    <!-- Identity Tab -->
    <div v-show="activeTab === 'identity'" class="cards-grid cards-grid--4">
      <PricingCard
        v-for="plan in identityPlans"
        :key="plan.id"
        v-bind="plan"
      />
    </div>

    <!-- Blockchain Tab -->
    <div v-show="activeTab === 'blockchain'" class="cards-grid cards-grid--3">
      <PricingCard
        v-for="plan in blockchainPlans"
        :key="plan.id"
        v-bind="plan"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PricingCard from './PricingCard.vue'

const activeTab = ref('identity')

const identityPlans = [
  {
    id: 'basic',
    badge: 'FREE',
    badgeColor: '#10b981',
    icon: '⚡',
    name: 'Pteri Basic',
    desc: 'For developers\nstarting out',
    price: '$0',
    period: '/month',
    tag: 'Join 1,269+ developers!',
    tagColor: 'yellow',
    features: [
      'API Calls: 3/sec',
      'Max 50 API calls/month',
      'Litecoin-Powered Explorer',
      'Free API Testing',
      'Developer Tutorials',
      'Free Developer Guide',
    ],
    cta: 'Get Started',
    ctaHref: 'https://pteri.org/Register',
    ctaStyle: 'dark',
    featured: false,
  },
  {
    id: 'growth',
    badge: null,
    icon: '🚀',
    name: 'Identity Growth',
    desc: 'Best for startups\nand growing teams',
    price: '$1,500',
    period: '/month',
    tag: 'Best for startups!',
    tagColor: 'blue',
    features: [
      'API Calls: 200/sec',
      '50,000 calls/month',
      'Enhanced Explorer on Litecoin',
      'Pteri Playground Access',
      'Pteri Intelligence',
      'Easy SDK Integration',
      'Unlimited API key users',
      'Customer-Controlled Payment Credentials',
    ],
    cta: 'Get Started',
    ctaHref: 'https://pteri.org/Register',
    ctaStyle: 'dark',
    featured: false,
  },
  {
    id: 'scale',
    badge: 'MOST POPULAR',
    badgeColor: '#06b6d4',
    icon: '🔐',
    name: 'Identity Scale',
    desc: 'For scaling teams\n& AI-agent deployments',
    price: '$3,500',
    period: '/month',
    tag: 'Security Focus!',
    tagColor: 'white',
    features: [
      'API Calls: 500/sec',
      '200,000 calls/month',
      'Enhanced Explorer on Litecoin',
      'Pteri Playground Access',
      'Pteri Intelligence',
      'Priority Support',
      'Unlimited API key users',
      'Customer-Controlled Payment Credentials',
      'SDK Access',
    ],
    cta: 'Get Started',
    ctaHref: 'https://pteri.org/Register',
    ctaStyle: 'white',
    featured: true,
  },
  {
    id: 'enterprise',
    badge: null,
    icon: '🏛️',
    name: 'Pteri Enterprise',
    desc: 'For large-scale\ncustom requirements',
    price: 'Custom',
    priceColor: '#f59e0b',
    period: '',
    tag: 'Agent Authorization Included!',
    tagColor: 'yellow',
    features: [
      'Everything in Growth & Scale',
      'Unlimited API Calls',
      'Enterprise-Grade Infrastructure APIs',
      'Customer-Controlled Payment Credentials',
      'Dedicated Instance',
      'Custom API Integrations',
      'White-Label Solutions',
      'Unlimited Pteri Intelligence',
      'Dedicated Enterprise Storage',
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact',
    ctaStyle: 'dark',
    featured: false,
  },
]

const blockchainPlans = [
  {
    id: 'baas-dev',
    badge: null,
    icon: '⛓️',
    name: 'BaaS Developer',
    desc: 'For startups needing\npowerful Litecoin infrastructure APIs',
    price: '$2,500',
    period: '/month',
    tag: 'Web3 Ready!',
    tagColor: 'blue',
    features: [
      'API Calls: 300/sec',
      '100,000 calls/month',
      'Litecoin Explorer',
      'Basic SDK Access',
      'Community Support',
      'Pteri Playground Access',
      'Pteri Intelligence',
      'AI MCP Deployment',
    ],
    cta: 'Get Started',
    ctaHref: 'https://pteri.org/Register',
    ctaStyle: 'dark',
    featured: false,
  },
  {
    id: 'baas-pro',
    badge: 'RECOMMENDED',
    badgeColor: '#06b6d4',
    icon: '🔗',
    name: 'BaaS Pro',
    desc: 'Full-power Litecoin infrastructure APIs\nfor growing products',
    price: '$6,000',
    period: '/month',
    tag: 'Web3 Summit Entry!',
    tagColor: 'white',
    features: [
      'API Calls: 800/sec',
      '1M calls/month',
      'Enhanced Explorer',
      'Full SDK Suite',
      'Priority Support',
      'Unlimited API key users',
      'Privacy-Focused Payment Controls',
      'Node Access',
      'AI MCP Deployment',
    ],
    cta: 'Get Started',
    ctaHref: 'https://pteri.org/Register',
    ctaStyle: 'white',
    featured: true,
  },
  {
    id: 'baas-enterprise',
    badge: null,
    icon: '🌐',
    name: 'BaaS Enterprise',
    desc: 'Unlimited blockchain infra\nfor enterprise deployments',
    price: 'Custom',
    priceColor: '#f59e0b',
    period: '',
    tag: 'Full Node Cluster!',
    tagColor: 'yellow',
    features: [
      'Everything in Developer & Pro',
      'Unlimited API Calls',
      'Dedicated Node Cluster',
      'Custom Smart Contracts',
      'White-Label Infrastructure APIs',
      'Customer-Controlled Payment Credentials',
      'SLA Guarantee',
      'Dedicated Enterprise Storage',
      '24/7 Dedicated Support',
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact',
    ctaStyle: 'dark',
    featured: false,
  },
]
</script>

<style scoped>
.pricing-cards-wrapper {
  width: 100%;
}

/* Tab toggle */
.tab-toggle {
  display: inline-flex;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 4px;
  gap: 4px;
}
.tab-btn {
  padding: 0.6rem 1.4rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.tab-btn--active {
  background: rgba(255,255,255,0.1);
  color: #fff;
}
@media (max-width: 640px) {
  .tab-toggle { flex-direction: column; width: 100%; }
  .tab-btn { text-align: center; }
}

/* Grids */
.cards-grid {
  display: grid;
  gap: 1.25rem;
  align-items: stretch;
  padding-top: 1.5rem; /* space for badges */
}
.cards-grid--4 { grid-template-columns: repeat(4, 1fr); }
.cards-grid--3 { grid-template-columns: repeat(3, 1fr); }

@media (max-width: 1024px) {
  .cards-grid--4 { grid-template-columns: repeat(2, 1fr); }
  .cards-grid--3 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .cards-grid--4, .cards-grid--3 { grid-template-columns: 1fr; }
}
</style>

