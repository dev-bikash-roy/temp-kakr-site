<template>
  <section class="section-padding bg-slate-950 relative overflow-hidden">
    <div class="container-custom relative z-10">
      <div class="glass rounded-3xl p-8 sm:p-12 text-center relative border border-slate-700/50 bg-slate-900/50 max-w-5xl mx-auto" data-aos="zoom-in">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl"></div>
        <div class="relative z-10">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8">
            <span class="text-gradient bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-transparent bg-clip-text">
              Build on proof, not guesswork.
            </span>
          </h2>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <!-- Get Started -->
            <a href="https://pteri.org/Register" target="_blank" class="group w-full sm:w-auto">
              <button class="btn-primary text-base sm:text-lg p-5 relative overflow-hidden w-full sm:w-[200px]">
                <span class="relative z-10">Get Started</span>
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </a>

            <!-- Book a Demo -->
            <a href="/contact" class="group w-full sm:w-auto">
              <button class="btn-secondary text-base sm:text-lg p-5 relative overflow-hidden border border-emerald-500/30 hover:border-emerald-400 w-full sm:w-[200px]">
                <span class="relative z-10">Book a Demo</span>
                <div class="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </a>

            <!-- Docs -->
            <a href="https://docs.kakr.ai/" target="_blank" class="group w-full sm:w-auto">
              <button class="text-base sm:text-lg p-5 text-slate-400 hover:text-white transition-colors duration-300 w-full sm:w-[200px] font-semibold">
                Docs
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
    </div>
  </section>
</template>

<script setup>
// No props needed
</script>

<style scoped>
/* Glass */
.glass {
  @apply bg-slate-800/50 backdrop-blur-lg border border-slate-700/50;
}
.text-gradient {
  @apply bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text;
}
.btn-primary {
  @apply bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300;
}
.btn-secondary {
  @apply bg-slate-800/50 text-white font-bold rounded-lg border border-slate-700 hover:bg-slate-700/80 hover:border-slate-600 transition-all duration-300;
}
</style>
