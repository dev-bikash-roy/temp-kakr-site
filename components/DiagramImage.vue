<template>
  <div :class="containerClass">
    <img
      :src="currentSrc"
      :alt="alt"
      :class="imageClass"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'auto'"
      :aria-hidden="isDecorative ? 'true' : undefined"
      @error="handleImageError"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

interface Props {
  src: string
  alt: string
  className?: string
  priority?: boolean
  mobileSrc?: string
  isDecorative?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  priority: false,
  isDecorative: false
})

const isMobile = ref(false)
const imageError = ref(false)

const currentSrc = computed(() => {
  if (imageError.value) return props.src
  return isMobile.value && props.mobileSrc ? props.mobileSrc : props.src
})

const containerClass = computed(() => {
  const baseClasses = 'diagram-container'
  return props.className ? `${baseClasses} ${props.className}` : baseClasses
})

const imageClass = computed(() => {
  return 'diagram-image w-full h-auto object-contain'
})

const handleImageError = () => {
  if (props.mobileSrc && isMobile.value) {
    imageError.value = true
  }
}

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
</script>

<style scoped>
.diagram-container {
  @apply flex items-center justify-center;
}

.diagram-image {
  max-width: 100%;
  height: auto;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .diagram-image {
    @apply max-w-full;
  }
}

@media (min-width: 768px) {
  .diagram-image {
    @apply max-w-none;
  }
}
</style>
