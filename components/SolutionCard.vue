<template>
  <div
    class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    :data-aos="'fade-up'"
    :data-aos-delay="index * 100"
    data-aos-duration="800"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @focus="isHovered = true"
    @blur="isHovered = false"
    tabindex="0"
    role="article"
    :aria-label="`${solution.title} solution`"
  >
    <!-- Gradient Background -->
    <div 
      class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
      :class="solution.gradient"
    ></div>

    <!-- Animated Border -->
    <div 
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      :class="`bg-gradient-to-r ${solution.gradient} p-[2px]`"
    >
      <div class="bg-white dark:bg-gray-800 rounded-2xl h-full w-full"></div>
    </div>

    <!-- Card Content -->
    <div class="relative p-8 z-10">
      <!-- Icon Container -->
      <div class="mb-6 relative">
        <div 
          class="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3"
          :class="`bg-gradient-to-br ${solution.gradient}`"
        >
          <component 
            :is="solution.icon" 
            class="w-8 h-8 text-white"
          />
        </div>
        
        <!-- Floating particles on hover -->
        <div 
          v-if="isHovered"
          class="absolute inset-0 pointer-events-none"
        >
          <div 
            v-for="i in 3" 
            :key="i"
            class="absolute w-1 h-1 bg-primary-400 rounded-full animate-float"
            :style="{
              left: `${20 + i * 15}px`,
              top: `${10 + i * 10}px`,
              animationDelay: `${i * 0.2}s`
            }"
          ></div>
        </div>
      </div>

      <!-- Title -->
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500"
          :class="solution.gradient">
        {{ solution.title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
        {{ solution.description }}
      </p>

      <!-- Features -->
      <div class="mb-6">
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="(feature, idx) in solution.features"
            :key="idx"
            class="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-300"
            :class="{ 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300': isHovered }"
            :style="{ transitionDelay: `${idx * 50}ms` }"
          >
            {{ feature }}
          </span>
        </div>
      </div>

      <!-- CTA Button -->
      <button 
        class="group/btn relative inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-4 transition-all duration-300"
        :aria-label="`Learn more about ${solution.title}`"
      >
        <span>Learn More</span>
        <svg 
          class="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        
        <!-- Animated underline -->
        <span 
          class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r group-hover/btn:w-full transition-all duration-300"
          :class="solution.gradient"
        ></span>
      </button>
    </div>

    <!-- Corner decoration -->
    <div 
      class="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br"
      :class="solution.gradient"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  CubeTransparentIcon,
  ShieldCheckIcon,
  BoltIcon as LightningBoltIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
  solution: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const isHovered = ref(false)
</script>

<style scoped>
/* Line clamp utility */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom float animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-40px) translateX(20px);
    opacity: 0;
  }
}

.animate-float {
  animation: float 2s ease-in-out infinite;
}

/* Focus styles for accessibility */
:focus-visible {
  @apply outline-none ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-gray-900;
}
</style>
