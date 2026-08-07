<template>
  <div ref="rootEl" class="hero-bg-root" aria-hidden="true">
    <!-- Aurora blobs — each on its own compositing layer -->
    <div class="aurora">
      <div class="aurora__blob aurora__blob--1"></div>
      <div class="aurora__blob aurora__blob--2"></div>
      <div class="aurora__blob aurora__blob--3"></div>
    </div>

    <!-- Static grid (no animation needed) -->
    <div class="hero-grid"></div>

    <!-- Floating particles -->
    <canvas ref="canvas" class="particles-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const rootEl = ref(null)
const canvas = ref(null)
let animFrame = null
let particles = []
let isVisible = true
let isScrolling = false
let scrollTimer = null
let observer = null

function initParticles() {
  const c = canvas.value
  if (!c) return
  const ctx = c.getContext('2d', { alpha: true })

  // Use devicePixelRatio for crisp rendering but cap at 1.5 to save GPU
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
  const w = window.innerWidth
  const h = window.innerHeight
  c.width = w * dpr
  c.height = h * dpr
  c.style.width = w + 'px'
  c.style.height = h + 'px'
  ctx.scale(dpr, dpr)

  // Reduced particle count for better perf
  particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.4 + 0.3,
    dx: (Math.random() - 0.5) * 0.2,
    dy: -(Math.random() * 0.35 + 0.08),
    alpha: Math.random() * 0.45 + 0.1,
    color: Math.random() > 0.5 ? '52,211,153' : '6,182,212',
    // cache the full fillStyle string to avoid string concat per frame
    get style() { return `rgba(${this.color},${this.alpha.toFixed(2)})` },
  }))

  function draw() {
    // Pause when hero is off-screen or user is actively scrolling
    if (!isVisible || isScrolling) {
      animFrame = requestAnimationFrame(draw)
      return
    }

    const cw = parseInt(c.style.width)
    const ch = parseInt(c.style.height)
    ctx.clearRect(0, 0, cw, ch)

    for (const p of particles) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = p.style
      ctx.fill()
      p.x += p.dx
      p.y += p.dy
      if (p.y < -10) { p.y = ch + 10; p.x = Math.random() * cw }
      if (p.x < -10) p.x = cw + 10
      if (p.x > cw + 10) p.x = -10
    }
    animFrame = requestAnimationFrame(draw)
  }
  draw()
}

function onResize() {
  if (!canvas.value) return
  // Re-init on resize to keep DPR and particle bounds correct
  cancelAnimationFrame(animFrame)
  initParticles()
}

function onScroll() {
  // Briefly pause particle drawing during scroll for smoother scrolling
  isScrolling = true
  clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => { isScrolling = false }, 150)
}

onMounted(() => {
  initParticles()

  // Pause RAF when hero scrolls out of view
  observer = new IntersectionObserver(
    ([entry]) => { isVisible = entry.isIntersecting },
    { threshold: 0 }
  )
  if (rootEl.value) observer.observe(rootEl.value)

  window.addEventListener('resize', onResize, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  cancelAnimationFrame(animFrame)
  clearTimeout(scrollTimer)
  if (observer) observer.disconnect()
  window.removeEventListener('resize', onResize)
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.hero-bg-root {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* ── Aurora ── */
.aurora {
  position: absolute;
  inset: 0;
  /* Isolate the blur to its own layer so it doesn't repaint the whole page */
  isolation: isolate;
}

.aurora__blob {
  position: absolute;
  border-radius: 50%;
  /* Promote each blob to its own GPU compositing layer */
  will-change: transform;
  /* Reduced blur: 60px is visually similar but significantly cheaper than 80px */
  filter: blur(60px);
  opacity: 0.5;
  animation: aurora-drift 16s ease-in-out infinite alternate;
}

.aurora__blob--1 {
  width: 650px;
  height: 480px;
  top: -180px;
  left: -100px;
  background: radial-gradient(ellipse, rgba(16,185,129,0.35) 0%, transparent 70%);
  animation-duration: 18s;
}
.aurora__blob--2 {
  width: 560px;
  height: 420px;
  top: -100px;
  right: -80px;
  background: radial-gradient(ellipse, rgba(6,182,212,0.22) 0%, transparent 70%);
  animation-duration: 22s;
  animation-delay: -6s;
}
.aurora__blob--3 {
  width: 480px;
  height: 380px;
  bottom: -100px;
  left: 30%;
  background: radial-gradient(ellipse, rgba(52,211,153,0.18) 0%, transparent 70%);
  animation-duration: 20s;
  animation-delay: -10s;
}

/* Only animate transform — compositor-only, no layout/paint */
@keyframes aurora-drift {
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(55px, -35px) scale(1.06); }
  66%  { transform: translate(-35px, 28px) scale(0.96); }
  100% { transform: translate(28px, -18px) scale(1.03); }
}

/* ── Grid — static, no animation ── */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%);
}

/* ── Particles canvas ── */
.particles-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
