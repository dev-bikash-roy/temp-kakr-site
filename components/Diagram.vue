<template>
  <div :class="['relative', className]">
    <!-- Mobile Image -->
    <img
      v-if="mobileSrc"
      :src="mobileSrc"
      :alt="isDecorative ? '' : alt"
      :class="['block sm:hidden w-full h-auto', imgClass]"
      :loading="priority ? 'eager' : 'lazy'"
      :aria-hidden="isDecorative"
    />
    <!-- Desktop Image -->
    <img
      :src="src"
      :alt="isDecorative ? '' : alt"
      :class="[mobileSrc ? 'hidden sm:block' : 'block', 'w-full h-auto', imgClass]"
      :loading="priority ? 'eager' : 'lazy'"
      :aria-hidden="isDecorative"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  mobileSrc: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  },
  imgClass: {
    type: String,
    default: ''
  },
  priority: {
    type: Boolean,
    default: false
  }
})

// If alt is missing or empty, treat as decorative.
// User instruction: "Ensure: aria-hidden only if decorative; otherwise provide real alt text."
// So if alt is provided, aria-hidden should be false (or undefined/not present).
// If alt is empty, aria-hidden should be true.
const isDecorative = computed(() => !props.alt)
</script>
