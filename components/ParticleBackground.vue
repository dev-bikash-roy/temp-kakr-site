<template>
  <div class="absolute inset-0 -z-10">
    <canvas ref="canvas" class="w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const canvas = ref(null);

onMounted(() => {
  const ctx = canvas.value.getContext('2d');
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
  // Add your particle animation here
});
</script>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
