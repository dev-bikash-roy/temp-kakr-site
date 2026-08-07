<template>
  <Teleport to="body">
    <!-- BANNER (only on home & until dismissed) -->
    <div v-if="isHome && showBanner" class="banner" style="display:none;">
      <div class="banner-content">
        <div class="ask-container">
          
          <a
            href="https://pteri.org/Register"
            class="btn drive-btn"
            target="_blank"
            rel="noopener"
          >
            <i class="fas fa-rocket"></i>
            Free Trial
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.path === '/')
const showBanner = ref(true)

onMounted(() => {
  if (route.path !== '/') showBanner.value = false
})
</script>

<style scoped>
:root {
  --brand-green: #10B981;
  --brand-green-dark: #059669;
  --gradient-blue-green: linear-gradient(135deg, #10B981, #3B82F6);
  --gradient-dark: linear-gradient(135deg, #111827, #1F2937);
}

.banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(255 255 255 / 95%);
  backdrop-filter: blur(4px);
  padding: 1rem 0;
  z-index: 10000;
  box-shadow: 0 -2px 8px rgb(0 0 0 / 10%);
}

.banner-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: #fff;
  padding: 0.75rem;
  border-radius: 8px;
}

.ask-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.ask-btn {
  background-image: linear-gradient(135deg, #111827, #1F2937);
  color: #fff;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  border: none;
  transition: all 0.2s ease-in-out;
  background-color: #111827;
}

.drive-btn {
  background-image: linear-gradient(45deg, rgb(51, 193, 75) 0%, rgb(14, 133, 24) 100%);
  color: #fff;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  border: none;
  transition: all 0.2s ease-in-out;
  background-color: #10B981;
}


.drive-btn:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .banner-content {
    flex-direction: column;
    gap: 0.75rem;
  }

  .ask-container {
    width: 100%;
    flex-direction: column;
  }

  .drive-btn,
  .ask-btn {
    width: 100%;
    justify-content: center;
  }
}
@media (max-width: 768px) {
  .drive-btn {
    display: none;
  }
}

</style>
