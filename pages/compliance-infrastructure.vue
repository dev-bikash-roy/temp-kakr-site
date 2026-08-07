<template>
  <main class="min-h-screen bg-black bg-black  bg-black text-white  ">
    <!-- Decorative background -->
    <div aria-hidden class="pointer-events-none fixed inset-0 -z-10">
      <div class="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_120%_-10%,#4f46e5_0%,transparent_40%),radial-gradient(40rem_30rem_at_-10%_10%,#10b981_0%,transparent_40%)] opacity-[0.08]"></div>
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent dark:via-slate-700/40"></div>
    </div>

    <!-- Header -->
    <section class="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/60 dark:supports-[backdrop-filter]:bg-black/60 bg-black/70 /70 border-b border-white/10 /80 dark:border-slate-800/80">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav class="text-xs text-white/70  hidden sm:block">
          <ol class="flex items-center gap-2">
            <li><a href="/" class="hover:underline">Home</a></li>
            <li class="opacity-60">/</li>
            <li>Compliance & Infrastructure</li>
          </ol>
        </nav>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ring-1 ring-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">Security-first</span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ring-1 ring-indigo-500/30 bg-green-600/10 text-green-700 dark:text-indigo-300">Zero-data</span>
        </div>
      </div>
    </section>

    <!-- Hero -->
    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div class="grid lg:grid-cols-12 gap-10 items-center">
          <header class="lg:col-span-7 space-y-5">
            <p class="text-xs uppercase tracking-widest text-white/50 ">✅ Compliance & Infrastructure</p>
            <h1 class="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Built for <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-emerald-600">Security, Privacy & Uptime</span>
            </h1>
            <p class="text-white/70   max-w-2xl">
              At <span class="font-semibold">Kakr labs Inc.</span>, compliance and trust are embedded in our technical foundation - not bolted on later. We don’t just “support” verifiable identity - we run it on the world’s most reliable proof-of-work blockchain (Litecoin). No cloud dependencies. No backdoors. No trust gaps.
            </p>
            <div class="flex flex-wrap gap-3 pt-2">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ring-1 ring-slate-200/70 dark:ring-slate-800/70 bg-black/70 /70 shadow-sm">
                <span class="i-lucide-shield-check w-4 h-4"></span><span class="text-sm">Non-custodial</span>
              </div>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ring-1 ring-slate-200/70 dark:ring-slate-800/70 bg-black/70 /70 shadow-sm">
                <span class="i-lucide-cpu w-4 h-4"></span><span class="text-sm">PoW-backed Identity</span>
              </div>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ring-1 ring-slate-200/70 dark:ring-slate-800/70 bg-black/70 /70 shadow-sm">
                <span class="i-lucide-lock-keyhole w-4 h-4"></span><span class="text-sm">No Backdoors</span>
              </div>
            </div>
          </header>

          <!-- Quick Nav (desktop) -->
          <aside class="lg:col-span-5">
            <div class="lg:sticky lg:top-20">
              <div class="rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-black/70 /70 p-6 shadow-sm">
                <h2 class="text-sm font-semibold mb-3">On this page</h2>
                <ul class="text-sm space-y-2">
                  <li><a href="#hosting" class="group inline-flex items-center gap-2 hover:text-green-700"><span class="i-lucide-server w-4 h-4 opacity-60 group-hover:opacity-100"></span> Hosting & Deployment</a></li>
                  <li><a href="#standards" class="group inline-flex items-center gap-2 hover:text-green-700"><span class="i-lucide-badge-check w-4 h-4 opacity-60 group-hover:opacity-100"></span> Standards We Align With</a></li>
                  <li><a href="#data" class="group inline-flex items-center gap-2 hover:text-green-700"><span class="i-lucide-database w-4 h-4 opacity-60 group-hover:opacity-100"></span> Data Practices</a></li>
                  <li><a href="#audits" class="group inline-flex items-center gap-2 hover:text-green-700"><span class="i-lucide-list-checks w-4 h-4 opacity-60 group-hover:opacity-100"></span> Certifications & Audits</a></li>
                  <li><a href="#disclosure" class="group inline-flex items-center gap-2 hover:text-green-700"><span class="i-lucide-triangle-alert w-4 h-4 opacity-60 group-hover:opacity-100"></span> Responsible Disclosure</a></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Hosting & Deployment -->
    <section id="hosting" class="py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="rounded-2xl p-6 sm:p-8 bg-black/80 /70 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm">
          <div class="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h2 class="text-xl font-semibold tracking-tight">Hosting & Deployment</h2>
              <p class="mt-2 text-sm text-white/70   max-w-3xl">
                We partner with globally recognized infrastructure providers. Our production deployments are built for redundancy, availability, and compliance with enterprise standards.
              </p>
            </div>
          </div>

          <div class="mt-6 grid sm:grid-cols-2 gap-4">
            <div class="group relative overflow-hidden rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 p-4">
              <div class="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-green-600/10 group-hover:bg-green-600/20 transition"></div>
              <div class="flex items-center gap-3">
                <span class="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-black text-white dark:bg-black   font-bold text-[10px] tracking-wider">AZURE</span>
                <div>
                  <div class="font-medium">Microsoft Azure</div>
                  <p class="text-sm text-white/70 ">Global scale, compliance toolkits, HA topologies.</p>
                </div>
              </div>
            </div>
            <div class="group relative overflow-hidden rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 p-4">
              <div class="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition"></div>
              <div class="flex items-center gap-3">
                <span class="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-black text-white dark:bg-black   font-bold text-[10px] tracking-wider">IBM</span>
                <div>
                  <div class="font-medium">IBM Cloud</div>
                  <p class="text-sm text-white/70 ">Enterprise controls, data residency, and security.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Standards Table -->
    <section id="standards" class="py-6">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm">
          <div class="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-4 flex items-center justify-between">
            <h2 class="text-base font-semibold">Standards We Align With</h2>
            <span class="text-[11px] opacity-80">Zero-data model via trusted providers</span>
          </div>
          <div class="overflow-x-auto bg-black ">
            <table class="min-w-full text-sm">
              <thead class="bg-black/90 /60 text-white/90 ">
                <tr>
                  <th class="text-left px-6 py-3 font-semibold">Standard</th>
                  <th class="text-left px-6 py-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                <tr class="hover:bg-black dark:hover:bg-[#0f0f0f]/50">
                  <td class="px-6 py-4 font-medium">ISO/IEC 27001</td>
                  <td class="px-6 py-4">Information security management systems (applies to cloud-hosted nodes & data zones)</td>
                </tr>
                <tr class="hover:bg-black dark:hover:bg-[#0f0f0f]/50">
                  <td class="px-6 py-4 font-medium">SOC 2 Type II <span class="text-xs font-normal opacity-70">(planned)</span></td>
                  <td class="px-6 py-4">Our internal controls for operational security, process control, and access logging are being built toward this framework. No SOC 2 report has been issued yet.</td>
                </tr>
                <tr class="hover:bg-black dark:hover:bg-[#0f0f0f]/50">
                  <td class="px-6 py-4 font-medium">GDPR</td>
                  <td class="px-6 py-4">European data privacy compliance (we don’t collect or share personal data)</td>
                </tr>
                <tr class="hover:bg-black dark:hover:bg-[#0f0f0f]/50">
                  <td class="px-6 py-4 font-medium">CCPA</td>
                  <td class="px-6 py-4">US consumer data rights, applied by default</td>
                </tr>
                <tr class="hover:bg-black dark:hover:bg-[#0f0f0f]/50">
                  <td class="px-6 py-4 font-medium">HIPAA-adjacent</td>
                  <td class="px-6 py-4">No medical data used, but storage zones can meet HIPAA compatibility needs on Azure/IBM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 text-xs text-white/70  bg-black /60">
            Note: Since we do not store or manage end-user identity, we meet these standards through our infrastructure providers and zero-data design philosophy.
          </div>
        </div>
      </div>
    </section>

    <!-- Data Practices -->
    <section id="data" class="py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-5 space-y-3">
            <h2 class="text-xl font-semibold tracking-tight">Data Practices</h2>
            <p class="text-sm text-white/70  ">
              We don’t track, fingerprint, or log unnecessary metadata. Our entire stack is built around non-custodial, zero-data operations - designed for privacy-first compliance.
            </p>
            <div class="mt-4 rounded-xl ring-1 ring-amber-300/40 bg-amber-50/60 dark:bg-amber-400/10 dark:ring-amber-400/20 text-amber-900 dark:text-amber-300 text-xs p-3">
              <strong class="font-semibold">Heads-up:</strong> Cookies on kakr.org are strictly necessary only. No tracking pixels or ads.
            </div>
          </div>
          <div class="lg:col-span-7">
            <div class="overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-black  shadow-sm">
              <table class="min-w-full text-sm">
                <thead class="bg-black/90 /60 text-white/90 ">
                  <tr>
                    <th class="text-left px-6 py-3 font-semibold">Data Type</th>
                    <th class="text-left px-6 py-3 font-semibold">Policy</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr class="hover:bg-black dark:hover:bg-[#0f0f0f]/50">
                    <td class="px-6 py-4 font-medium">Wallet keys</td>
                    <td class="px-6 py-4">Never stored. Held locally by the user.</td>
                  </tr>
                  <tr class="hover:bg-black dark:hover:bg-[#0f0f0f]/50">
                    <td class="px-6 py-4 font-medium">Identity credentials</td>
                    <td class="px-6 py-4">Fully encrypted on-device or hashed to blockchain (e.g., PTERI ID)</td>
                  </tr>
                  <tr class="hover:bg-black dark:hover:bg-[#0f0f0f]/50">
                    <td class="px-6 py-4 font-medium">API logs</td>
                    <td class="px-6 py-4">Ephemeral, used only for rate limiting (no IP storage or analytics)</td>
                  </tr>
                  <tr class="hover:bg-black dark:hover:bg-[#0f0f0f]/50">
                    <td class="px-6 py-4 font-medium">Cookies</td>
                    <td class="px-6 py-4">Only strictly necessary cookies used on kakr.org (no tracking pixels or ads)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications & Audits / Disclosure -->
    <section id="audits" class="py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-8">
          <div class="lg:col-span-6">
            <div class="rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-black/80 /70 p-6 sm:p-8 shadow-sm">
              <h2 class="text-xl font-semibold tracking-tight">Certifications & Audits</h2>
              <ul class="mt-4 space-y-3 text-sm list-disc pl-6">
                <li>Undergo regular internal security audits</li>
                <li>Use Azure Marketplace & IBM Cloud compliance layers</li>
                <li>Maintain logs and risk assessments for enterprise environments</li>
              </ul>
              <div class="mt-5 text-sm">
                For security review documents, contact: <a href="mailto:legal@kakr.org" class="underline decoration-dotted underline-offset-4">legal@kakr.org</a>
              </div>
            </div>
          </div>
          <div id="disclosure" class="lg:col-span-6">
            <div class="rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-black/80 /70 p-6 sm:p-8 shadow-sm">
              <h2 class="text-xl font-semibold tracking-tight">Responsible Disclosure</h2>
              <p class="mt-3 text-sm text-white/70  ">
                If you discover a vulnerability in one of our services, please report it confidentially. We take all reports seriously and aim to fix verified issues promptly.
              </p>
              <div class="mt-4">
                <a href="https://support.kakr.ai" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white dark:bg-black   ring-1 ring-slate-900/10 dark:ring-white/10 hover:opacity-90 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/></svg>
                  Report via support.kakr.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer note -->
    <footer class="py-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <p class="text-xs text-white/50 ">
          © {{ new Date().getFullYear() }} Kakr labs Inc. All rights reserved.
        </p>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
const { setSEO } = useSEO()

setSEO({
  title: 'Compliance & Infrastructure - Kakr labs Inc.',
  description: 'Kakr labs Inc. - Built for Security, Privacy & Uptime. Zero-data, non-custodial design on Litecoin. Enterprise cloud infrastructure on Azure & IBM Cloud with encryption in transit and at rest.'
})

definePageMeta({
  title: 'Compliance & Infrastructure'
})
</script>

<style>
/* Optional iconify utility classes if you use unplugin-icons/lucide */
.i-lucide-shield-check,
.i-lucide-cpu,
.i-lucide-lock-keyhole,
.i-lucide-server,
.i-lucide-badge-check,
.i-lucide-database,
.i-lucide-list-checks,
.i-lucide-triangle-alert {
  display: inline-block
}

/* Smooth anchor scrolling (nice for the right-rail quick nav) */
html { scroll-behavior: smooth; }
</style>
