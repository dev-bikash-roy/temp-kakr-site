<template>
  <section
    ref="sectionEl"
    class="why-now-section position-relative overflow-hidden"
  >
    <div class="container">
      <h2 class="section-title">Why Now?</h2>

      <div class="row justify-content-center g-4">
        <div
          v-for="s in stats"
          :key="s.id"
          class="col-sm-6 col-md-4"
        >
          <div class="web3-card d-flex flex-column align-items-center p-4">
            <div class="stat-circle">
              <h3 class="count" :data-idx="s.id"></h3>
            </div>
            <p class="card-text mt-3 text-center">{{ s.text }}</p>
          </div>
        </div>
      </div>

      <p class="section-subtitle mt-4 text-center">
        Every time you KYC, you give your identity away - again.
      </p>
    </div>

    <!-- mesh overlay (place web3-mesh-pattern.svg in public/images/) -->
    <div class="mesh-bg"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { CountUp } from 'countup.js'

// reference to the whole section
const sectionEl = ref(null)

// your three stats
const stats = [
  {
    id: 1,
    value: 52,
    prefix: '$',
    suffix: 'B',
    decimals: 0,
    text: 'Lost to identity theft (2022)',
  },
  {
    id: 2,
    value: 80,
    prefix: '',
    suffix: '%',
    decimals: 0,
    text: 'Of data breaches tied to weak credentials',
  },
  {
    id: 3,
    value: 72,
    prefix: '$',
    suffix: 'M',
    decimals: 0,
    text: 'In SIM swap fraud in the U.S. (2023)',
  },
]

onMounted(() => {
  // grab all the number nodes
  const counters = Array.from(
    sectionEl.value.querySelectorAll('.count')
  )

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const el = entry.target
        const idx = +el.dataset.idx
        const stat = stats.find((s) => s.id === idx)

        if (stat) {
          new CountUp(el, stat.value, {
            prefix: stat.prefix,
            suffix: stat.suffix,
            decimalPlaces: stat.decimals,
            separator: ',',
          }).start()
        }

        obs.unobserve(el)
      })
    },
    { threshold: 0.4 }
  )

  counters.forEach((el) => observer.observe(el))
})
</script>

<style scoped>
/* === Section & Title === */
.why-now-section {
  position: relative;
  padding: 4rem 0;
  background: linear-gradient(135deg, #1b1c33, #323450);
  color: #e0e2f1;
  overflow: hidden;
}

.section-title {
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.section-subtitle {
  text-align: center;
  color: #a0a4b8;
  font-size: 1.125rem;
  margin-top: 1.5rem;
}

/* === Glass-style Card === */
.web3-card {
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.web3-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0,0,0,0.4);
}

/* === Circular Stat Badge + Glowing Ring === */
.stat-circle {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.stat-circle::before {
  content: '';
  position: absolute;
  top: -6px; left: -6px; right: -6px; bottom: -6px;
  border-radius: 50%;
  background: conic-gradient(from 90deg, #00d5ff, #ff00e6);
  filter: blur(12px);
  z-index: -1;
}

/* === Number Styling === */
.count {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.7);
  margin: 0;
}

/* === Stat Text === */
.card-text {
  text-align: center;
  color: #e0e2f1;
  font-size: 1rem;
  margin-top: 1rem;
}

/* === Mesh Overlay (make sure your SVG lives in public/images/) === */
.mesh-bg {
  position: absolute;
  inset: 0;
  background: url('/images/web3-mesh-pattern.svg') center/cover no-repeat;
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
}
</style>
