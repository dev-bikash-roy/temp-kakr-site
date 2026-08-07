<template>
  <div class="pc-wrap" :class="{ 'pc-wrap--featured': featured }">
    <!-- Badge -->
    <div v-if="badge" class="pc-badge" :style="{ background: badgeColor || '#06b6d4' }">
      {{ badge }}
    </div>

    <div class="pc-card" :class="{ 'pc-card--featured': featured }">
      <!-- Icon -->
      <div class="pc-icon">{{ icon }}</div>

      <!-- Name -->
      <h3 class="pc-name">{{ name }}</h3>

      <!-- Description — always 2 lines -->
      <p class="pc-desc">{{ desc }}</p>

      <!-- Price -->
      <div class="pc-price-row">
        <span class="pc-price" :style="priceColor ? { color: priceColor } : {}">{{ price }}</span>
        <span v-if="period" class="pc-period">{{ period }}</span>
      </div>

      <!-- Tag pill -->
      <div class="pc-tag" :class="`pc-tag--${tagColor}`">{{ tag }}</div>

      <!-- Divider -->
      <div class="pc-divider"></div>

      <!-- Features -->
      <ul class="pc-features">
        <li v-for="f in features" :key="f" class="pc-feature">
          <svg class="pc-check" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span>{{ f }}</span>
        </li>
      </ul>

      <!-- CTA -->
      <a :href="ctaHref" class="pc-cta" :class="`pc-cta--${ctaStyle}`" :target="ctaHref.startsWith('http') ? '_blank' : '_self'">
        {{ cta }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  badge?: string | null
  badgeColor?: string
  icon: string
  name: string
  desc: string
  price: string
  priceColor?: string
  period?: string
  tag: string
  tagColor: string
  features: string[]
  cta: string
  ctaHref: string
  ctaStyle: string
  featured?: boolean
}>()
</script>

<style scoped>
/* Wrapper handles badge overflow */
.pc-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Badge */
.pc-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  padding: 3px 14px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #fff;
  white-space: nowrap;
  z-index: 2;
}

/* Card */
.pc-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  transition: border-color 0.2s, transform 0.2s;
}
.pc-card:hover {
  border-color: rgba(6,182,212,0.3);
  transform: translateY(-3px);
}
.pc-card--featured {
  background: linear-gradient(145deg, rgba(6,182,212,0.12) 0%, rgba(16,185,129,0.08) 100%);
  border-color: rgba(6,182,212,0.35);
  box-shadow: 0 0 40px rgba(6,182,212,0.1);
}
.pc-card--featured:hover {
  border-color: rgba(6,182,212,0.6);
}

/* Icon */
.pc-icon {
  font-size: 1.75rem;
  margin-bottom: 0.875rem;
  line-height: 1;
}

/* Name */
.pc-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}

/* Description — fixed 2-line height */
.pc-desc {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.45);
  margin: 0 0 1rem;
  line-height: 1.5;
  min-height: 2.4em; /* exactly 2 lines */
  white-space: pre-line;
}

/* Price */
.pc-price-row {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  margin-bottom: 0.75rem;
}
.pc-price {
  font-size: 2.4rem;
  font-weight: 800;
  color: #fff;
  line-height: 1;
}
.pc-period {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
}

/* Tag pill */
.pc-tag {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  width: fit-content;
  margin-bottom: 1.25rem;
}
.pc-tag--yellow { background: rgba(251,191,36,0.15); color: #fbbf24; border: 1px solid rgba(251,191,36,0.3); }
.pc-tag--blue   { background: rgba(59,130,246,0.15); color: #60a5fa; border: 1px solid rgba(59,130,246,0.3); }
.pc-tag--white  { background: rgba(255,255,255,0.1); color: #fff;    border: 1px solid rgba(255,255,255,0.2); }

/* Divider */
.pc-divider {
  height: 1px;
  background: rgba(255,255,255,0.07);
  margin-bottom: 1.25rem;
}

/* Features */
.pc-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.pc-feature {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.75);
  line-height: 1.4;
}
.pc-check {
  width: 15px;
  height: 15px;
  color: #10b981;
  flex-shrink: 0;
  margin-top: 1px;
}

/* CTA */
.pc-cta {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  margin-top: auto;
}
.pc-cta--dark {
  background: rgba(255,255,255,0.08);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.12);
}
.pc-cta--dark:hover {
  background: rgba(255,255,255,0.14);
  border-color: rgba(255,255,255,0.25);
}
.pc-cta--white {
  background: linear-gradient(135deg, #06b6d4 0%, #10b981 100%);
  color: #000;
  border: none;
  box-shadow: 0 4px 20px rgba(6,182,212,0.35);
}
.pc-cta--white:hover {
  box-shadow: 0 6px 28px rgba(6,182,212,0.5);
  transform: translateY(-1px);
}
</style>
