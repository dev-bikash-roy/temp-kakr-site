<template>
  <span>{{ displayValue }}</span>
</template>

<script setup>
const props = defineProps({
  target: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  },
  suffix: {
    type: String,
    default: ''
  }
})

const displayValue = ref(0)

onMounted(() => {
  const startTime = Date.now()
  const startValue = 0
  
  const animate = () => {
    const currentTime = Date.now()
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    
    // Easing function
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    
    displayValue.value = Math.floor(startValue + (props.target - startValue) * easeOutQuart)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      displayValue.value = props.target
    }
  }
  
  // Start animation when element is in viewport
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animate()
      observer.disconnect()
    }
  })
  
  observer.observe(document.querySelector('span'))
})
</script>
