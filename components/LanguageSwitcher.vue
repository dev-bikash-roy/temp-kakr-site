<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-white transition"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <GlobeIcon class="h-5 w-5" />
      <span class="hidden md:inline">{{ currentLocaleName }}</span>
      <ChevronDownIcon class="h-4 w-4" :class="{ 'rotate-180': isOpen }" />
    </button>

    <transition name="fade">
      <div 
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg z-50"
        role="menu"
      >
        <div class="py-1">
          <button
            v-for="localeItem in availableLocales"
            :key="localeItem.code"
            @click="switchLocale(localeItem.code)"
            class="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-white/10 hover:text-white transition flex items-center gap-2"
            role="menuitem"
          >
            <span>{{ localeItem.name }}</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineComponent, h } from 'vue'

const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const isOpen = ref(false)

const availableLocales = computed(() => {
  return locales.value.filter((i: any) => i.code !== locale.value)
})

const currentLocaleName = computed(() => {
  const currentLocale = locales.value.find((i: any) => i.code === locale.value)
  return currentLocale ? currentLocale.name : 'English'
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const switchLocale = async (newLocale: string) => {
  isOpen.value = false
  const path = switchLocalePath(newLocale)
  await router.push(path)
}

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    isOpen.value = false
  }
}

// Add event listener for clicking outside
if (process.client) {
  document.addEventListener('click', handleClickOutside)
}

// Clean up event listener
onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('click', handleClickOutside)
  }
})

// Icon components
const GlobeIcon = defineComponent({
  setup() {
    return () => h('svg', { 
      xmlns: 'http://www.w3.org/2000/svg', 
      fill: 'none', 
      viewBox: '0 0 24 24', 
      'stroke-width': '1.5', 
      stroke: 'currentColor',
      class: 'h-5 w-5'
    }, [
      h('path', { 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round', 
        d: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A17.919 17.919 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418' 
      })
    ])
  }
})

const ChevronDownIcon = defineComponent({
  setup() {
    return () => h('svg', { 
      xmlns: 'http://www.w3.org/2000/svg', 
      fill: 'none', 
      viewBox: '0 0 24 24', 
      'stroke-width': '1.5', 
      stroke: 'currentColor',
      class: 'h-4 w-4'
    }, [
      h('path', { 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round', 
        d: 'M19.5 8.25l-7.5 7.5-7.5-7.5' 
      })
    ])
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
