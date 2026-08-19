<template>
  <main class="relative overflow-hidden bg-black text-white   bg-black ">
    <!-- Decorative background -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute left-1/2 top-[-12rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-300/20 via-emerald-300/20 to-violet-300/20 blur-3xl dark:from-cyan-500/15 dark:via-emerald-500/15 dark:to-indigo-500/15" />
    </div>

    <!-- HERO -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-14">
      <div class="grid items-center gap-10 lg:grid-cols-[1.2fr,1fr]">
        <header class="reveal" data-reveal>
          <p class="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-black/60 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur /60 dark:text-emerald-300">
            <span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            Why Us
          </p>
          <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Kakr Labs runs the world’s most utilized <span class="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">Litecoin infrastructure</span>.
          </h1>
          <p class="mt-5 max-w-2xl text-lg text-white/90 ">
            We deliver blockchain infrastructure APIs and decentralized authentication with strong operational security, consistently high uptime, and zero data collection. From wallets to payments to 2FA logins, we reduce central risks and future-proof your systems.
          </p>

          <div class="mt-7 flex flex-wrap gap-3">
            <a href="/contact"
              class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-300 to-emerald-400 px-4 py-2.5 text-sm font-semibold text-white  hover:from-emerald-200 hover:to-emerald-300"
            >
              Talk to us
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="https://playground.pteri.org/" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/70 px-4 py-2.5 text-sm font-semibold hover:bg-black dark:border-slate-700 /60 dark:hover:bg-[#0f0f0f]"
            >
              Open Playground
            </a>
          </div>
        </header>

        <figure class="reveal" data-reveal style="--delay:120ms">
          <img
            class="w-full rounded-2xl border border-white/40 shadow-2xl shadow-emerald-500/10 ring-1 ring-black/5 "
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Infrastructure visual"
            loading="lazy"
          />
          <figcaption class="mt-3 text-xs text-white/50 ">Litecoin-first, privacy-first infrastructure</figcaption>
        </figure>
      </div>

      <!-- Quick stats -->
      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="s in stats" :key="s.label" class="reveal" data-reveal style="--delay:80ms">
          <div class="rounded-2xl border border-white/10 /70 bg-black/60 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur dark:border-slate-800/70 /60">
            <div class="text-3xl font-semibold">{{ s.value }}</div>
            <div class="mt-1 text-sm text-white/70  ">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- READ FIRST -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <article class="reveal" data-reveal>
        <div class="rounded-2xl border border-white/10 /70 bg-black/70 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur dark:border-slate-800/70 /60">
          <div class="flex items-start gap-4">
            <div class="mt-1 rounded-md bg-gradient-to-b from-cyan-400/80 to-indigo-400/80 p-[2px]">
              <div class="rounded-md bg-black px-2 py-1 text-[11px] font-semibold text-white   bg-black ">Read this first</div>
            </div>
            <div>
              <h2 class="text-2xl font-semibold tracking-tight">Why Us (Read this before you dive in.)</h2>
              <p class="mt-2 text-white/90 ">
                Passwords, SMS codes, and even modern identity providers share the same flaw: <span class="font-semibold">centralization</span>.
                Hackers breach user databases, SIM swaps compromise SMS-2FA, and providers become single points of failure-raising costs and risk.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- PROBLEM / DIFFERENT -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid gap-6 lg:grid-cols-2">
        <article class="reveal" data-reveal>
          <div class="rounded-2xl border border-rose-200/70 bg-rose-50/70 p-6 ring-1 ring-rose-200/60 dark:border-rose-900/50 dark:bg-rose-950/40 dark:ring-rose-900/40">
            <h3 class="text-xl font-semibold">The Problem with Identity Today</h3>
            <ul class="mt-3 space-y-2 text-white ">
              <li class="flex gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400"></span>Centralized databases = high-value breach targets.</li>
              <li class="flex gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400"></span>SIM swaps undermine SMS-based 2FA.</li>
              <li class="flex gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400"></span>Identity providers create single points of failure.</li>
            </ul>
          </div>
        </article>

        <article class="reveal" data-reveal style="--delay:120ms">
          <div class="rounded-2xl border border-emerald-200/70 bg-emerald-50/70 p-6 ring-1 ring-emerald-200/60 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:ring-emerald-900/40">
            <h3 class="text-xl font-semibold">How We’re Different</h3>
            <ul class="mt-3 space-y-2 text-white ">
              <li v-for="(f, i) in different" :key="i" class="flex gap-2">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>{{ f }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- VALUE SECTION -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid items-start gap-6 lg:grid-cols-[1.1fr,1fr]">
        <div class="reveal" data-reveal>
          <h3 class="text-2xl font-semibold">Why This Matters for You</h3>
          <p class="mt-2 text-white/90 ">
            Whether you run a bank, SaaS, gov system, or a startup-your login is your weakest link. Breaches drain money, reputation, and trust.
          </p>
          <ul class="mt-4 grid gap-3 sm:grid-cols-2">
            <li v-for="(b, i) in benefits" :key="i" class="rounded-xl border border-white/10 /70 bg-black/60 p-4 text-sm shadow-sm ring-1 ring-black/5 backdrop-blur dark:border-slate-800/70 /60">
              <div class="mb-1 flex items-center gap-2">
                <span class="inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
                <span class="font-medium">{{ b.title }}</span>
              </div>
              <p class="text-white/70  ">{{ b.copy }}</p>
            </li>
          </ul>
        </div>

        <aside class="reveal" data-reveal style="--delay:120ms">
          <div class="rounded-2xl border border-white/10 /70 bg-black/70 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur dark:border-slate-800/70 /60">
            <h4 class="text-lg font-semibold">Backed by real infrastructure</h4>
            <ul class="mt-3 space-y-2 text-white/90 ">
              <li class="flex items-start gap-2"><CheckIcon /> Most deployed Litecoin stack, globally.</li>
              <li class="flex items-start gap-2"><CheckIcon /> Consistently high uptime. Zero user data stored.</li>
              <li class="flex items-start gap-2"><CheckIcon /> Security-conscious infrastructure + AI-powered deployment.</li>
            </ul>
            <div class="mt-5 flex gap-3">
              <a href="/pricing" class="rounded-xl border border-white/15 bg-black/70 px-4 py-2 text-sm font-semibold hover:bg-black dark:border-slate-700 /60 dark:hover:bg-[#0f0f0f]">See pricing</a>
              <a href="https://docs.kakr.ai/" target="_blank" rel="noopener noreferrer" class="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-[#0f0f0f] dark:bg-black   dark:hover:bg-white/8">Read docs</a>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- PTERI -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid items-center gap-8 lg:grid-cols-2">
        <div class="reveal" data-reveal>
          <h3 class="text-2xl font-semibold">The PTERI App & Playground</h3>
          <p class="mt-2 text-white/90 ">Our flagship proves what’s possible with our stack.</p>
          <ul class="mt-4 space-y-2 text-white/90 ">
            <li class="flex gap-2"><BoltIcon /> Blockchain-based 2FA login (no SMS codes).</li>
            <li class="flex gap-2"><BoltIcon /> Customer-controlled payment credentials for LTC transactions.</li>
            <li class="flex gap-2"><BoltIcon /> Self-custody wallet, multi-asset, developer Playground.</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <a href="/platform" class="rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-400 px-4 py-2 text-sm font-semibold text-white  hover:from-cyan-300 hover:to-indigo-300">Explore PTERI</a>
            <a href="https://playground.pteri.org/" target="_blank" rel="noopener noreferrer" class="rounded-xl border border-white/15 bg-black/70 px-4 py-2 text-sm font-semibold hover:bg-black dark:border-slate-700 /60 dark:hover:bg-[#0f0f0f]">Try Playground</a>
          </div>
        </div>

        <figure class="reveal" data-reveal style="--delay:120ms">
          <img
            class="w-full rounded-2xl border border-white/40 shadow-xl ring-1 ring-black/5 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFr2nDy6mCMtj1RjNdeiUd_DYvfYf4TjY55g&s"
            alt="Wallet UI"
            loading="lazy"
          />
        </figure>
      </div>
    </section>

    <!-- PROOF -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="rounded-2xl border border-white/10 /70 bg-black/70 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur dark:border-slate-800/70 /60 reveal" data-reveal>
        <h3 class="text-2xl font-semibold">Proof We’re Real</h3>
        <ul class="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-white/90 ">
          <li v-for="p in proof" :key="p" class="flex items-start gap-2"><BadgeIcon /> {{ p }}</li>
        </ul>
      </div>
    </section>

    <!-- TAKEAWAY -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
      <div class="reveal" data-reveal>
        <div class="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-[1px] shadow-2xl">
          <div class="rounded-2xl bg-black/30 p-8 text-white">
            <h3 class="text-2xl font-semibold">The Takeaway</h3>
            <p class="mt-3 max-w-3xl text-slate-200">
              <strong>Kakr Labs</strong> builds Litecoin-based blockchain infrastructure APIs and decentralized authentication -
              built on the #1 digital commodity with the highest real-world payments adoption.
              We remove central risks from login and identity. Secure, fast, private - without the hype.
            </p>
            <p class="mt-4 text-white/80">
              🔥 This framing makes Litecoin = superior Bitcoin very clear, and positions us as the leader of the commodity-grade blockchain era.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a href="https://pteri.org/Register" target="_blank" class="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white  hover:bg-white/5 bg-black">Get started</a>
              <a href="/contact" class="rounded-xl border border-white/30 px-4 py-2 text-sm font-semibold hover:bg-black/10">Contact sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { h, onMounted } from 'vue'

const { setSEO } = useSEO()

setSEO({
  title: 'Why Choose Kakr Labs - Secure Litecoin Infrastructure',
  description: 'Discover why enterprises choose Kakr Labs for secure, scalable, and compliant Web3 infrastructure built on the Litecoin blockchain.',
  image: '/og/og-why-us.png',
})
/**
 * Page content / lists
 */
const stats = [
  { label: 'Uptime', value: 'Continuous' },
  { label: 'PII Collected', value: '0' },
  { label: 'Global Regions', value: '12+' },
  { label: 'Avg. Deploy Time', value: '< 10m' }
]

const different = [
  'Blockchain-level 2FA - resistant to SIM swaps & phishing.',
  'Litecoin-first architecture - real payments utility.',
  'Security-first design at the protocol layer.',
  'Most deployed LTC stack for auth, payments, systems.',
  'End-to-end: wallets, rails, infrastructure APIs, consistently high uptime.',
  'Minimal data collection by design.',
  'AI-powered deployment - infra in minutes.'
]

const benefits = [
  { title: 'Reduce central risk', copy: 'Move auth from databases to blockchain primitives.' },
  { title: 'Cut costs', copy: 'No SMS fees; reduce compliance exposure from PII.' },
  { title: 'Future-proof', copy: 'Litecoin support with privacy-focused transaction controls by default.' },
  { title: 'All-in-one', copy: 'Identity, wallets, payments, and APIs in one stack.' }
]

const proof = [
  'Kakr labs Inc. - Wyoming corporation, NYC presence.',
  'Microsoft AI Cloud Partner, IBM Partner Plus, Google for Startups.',
  'Trusted across finance, telco, healthcare, and SaaS.'
]

/**
 * Simple scroll reveal (respects reduced motion)
 */
onMounted(() => {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    els.forEach(el => el.classList.add('revealed'))
    return
  }
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
  )
  els.forEach(el => io.observe(el))
})

/**
 * Tiny inline icon components (no extra deps)
 */
const CheckIcon = () => h('svg',
  { class: 'mt-0.5 h-5 w-5 text-emerald-400 shrink-0', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 },
  [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M5 13l4 4L19 7' })]
)

const BoltIcon = () => h('svg',
  { class: 'mt-0.5 h-5 w-5 text-cyan-400 shrink-0', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 },
  [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13 10V3L4 14h7v7l9-11h-7z' })]
)

const BadgeIcon = () => h('svg',
  { class: 'mt-0.5 h-5 w-5 text-indigo-400 shrink-0', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 },
  [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' })]
)
</script>

<style scoped>
/* reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 700ms cubic-bezier(.2,.65,.2,1),
    transform 700ms cubic-bezier(.2,.65,.2,1);
  transition-delay: var(--delay, 0ms);
}
.revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>
