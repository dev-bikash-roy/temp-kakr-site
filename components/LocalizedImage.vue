<template>
  <img
    :src="localizedSrc"
    :alt="alt"
    :class="imgClass"
    @error="handleError"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  imgClass?: string
  localeMap?: Record<string, string> // Optional custom mapping per locale
}>()

const { locale } = useI18n()

// Generate localized image path
const getLocalizedPath = (path: string, loc: string) => {
  // If custom locale map is provided, use it
  if (props.localeMap && props.localeMap[loc]) {
    return props.localeMap[loc]
  }
  
  // Default behavior: append locale before extension
  const lastDot = path.lastIndexOf('.')
  if (lastDot === -1) return path
  
  const basePath = path.substring(0, lastDot)
  const extension = path.substring(lastDot)
  
  return `${basePath}-${loc}${extension}`
}

const localizedSrc = ref(getLocalizedPath(props.src, locale.value))

// Fallback to default image if localized version doesn't exist
const handleError = () => {
  if (localizedSrc.value !== props.src) {
    localizedSrc.value = props.src
  }
}

// Update image when locale changes
watch(locale, (newLocale) => {
  localizedSrc.value = getLocalizedPath(props.src, newLocale)
})
</script>
