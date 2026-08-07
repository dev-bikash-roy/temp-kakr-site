<template>
  <div class="industry-page">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div class="absolute inset-0 z-0 opacity-30">
        <div class="absolute inset-0 bg-grid-pattern"></div>
        <div class="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/4 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 blur-3xl"></div>
        <div class="absolute left-0 bottom-0 h-[600px] w-[600px] -translate-x-1/2 translate-y-1/4 rounded-full bg-gradient-to-br from-violet-400/20 to-purple-400/20 blur-3xl"></div>
      </div>
      
      <div class="container relative z-10 mx-auto max-w-7xl px-4 section-py sm:px-6 lg:px-8 lg:py-28">
        <div class="max-w-3xl">
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            <slot name="title">Industry Solutions</slot>
          </h1>
          <p class="text-xl text-slate-700 dark:text-slate-300">
            <slot name="description">Industry-specific solutions powered by blockchain technology.</slot>
          </p>
          
          <div class="mt-10 flex flex-wrap gap-4">
            <a href="#" class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:shadow-emerald-800/30">
              Try Free 2FA API
            </a>
            <a href="#" class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
      
      <div class="relative z-10 mt-4 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex items-center py-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            <div class="flex items-center">
              <span>Last updated: September 26, 2025</span>
              <span class="mx-2">•</span>
              <slot name="compliance-badges">
                <span>Designed to support your GDPR compliance program</span>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Main Content -->
    <main class="bg-white dark:bg-slate-900">
      <slot></slot>
    </main>
    
    <!-- Footer CTA -->
    <section class="bg-slate-50 dark:bg-slate-800">
      <div class="container mx-auto max-w-7xl px-4 section-py sm:px-6 lg:px-8 lg:section-py">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            <slot name="cta-title">Ready to Get Started?</slot>
          </h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
            <slot name="cta-description">Start with our free 2FA API or explore a 3-month pilot at 50% off.</slot>
          </p>
          <div class="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#" class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:shadow-emerald-800/30">
              Start Free
            </a>
            <a href="#" class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-900">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-sm text-slate-500 dark:text-slate-400">
            <slot name="footer-tagline">Kakr Labs: Secure Web3 Innovation.</slot>
          </p>
          <p class="mt-4 text-xs text-slate-400 dark:text-slate-500">
            Hosted on Azure & IBM | Powered by Litecoin Proof-of-Work
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Component props and logic can be added here
</script>

<style scoped>
.bg-grid-pattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>

