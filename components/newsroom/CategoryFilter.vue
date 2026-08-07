<template>
  <!--
    Filter state lives in the URL (handoff §3.3) so refresh, back, forward and a
    pasted link all land on the same view. The buttons are a tablist-free plain
    group of links: each one is a real navigable URL, which is also what makes the
    filtered views crawlable.
  -->
  <nav class="cat-filter" aria-label="Filter articles by category">
    <NuxtLink
      v-for="option in visibleOptions"
      :key="option.value"
      :to="option.value === 'all' ? { path: basePath } : { path: basePath, query: { category: option.value } }"
      class="cat-filter__item"
      :class="{ 'cat-filter__item--active': option.value === active }"
      :aria-current="option.value === active ? 'page' : undefined"
      @click="onSelect(option.value)"
    >
      {{ option.label }}
      <span class="cat-filter__count">{{ counts[option.value] ?? 0 }}</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CATEGORY_FILTERS, type NewsroomCategory } from '~~/shared/newsroom'
import { useNewsroomAnalytics } from '~/composables/useNewsroomAnalytics'

const props = withDefaults(
  defineProps<{
    active: NewsroomCategory | 'all'
    counts: Record<string, number>
    basePath?: string
    /**
     * Hide categories that currently have nothing in them. A filter that always
     * returns an empty grid reads as a broken page.
     */
    hideEmpty?: boolean
  }>(),
  { basePath: '/newsroom', hideEmpty: true },
)

const { track } = useNewsroomAnalytics()

const visibleOptions = computed(() =>
  CATEGORY_FILTERS.filter(option => {
    if (option.value === 'all') return true
    // The active filter stays visible even at zero, so the page never looks like
    // it silently dropped the category the visitor asked for.
    if (option.value === props.active) return true
    return !props.hideEmpty || (props.counts[option.value] ?? 0) > 0
  }),
)

function onSelect(category: string) {
  track('newsroom_filter', { category })
}
</script>

<style scoped>
.cat-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cat-filter__item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  /* 40px min-height keeps these comfortable as touch targets. */
  min-height: 40px;
  padding: 0.5rem 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.8125rem;
  font-weight: 600;
  white-space: nowrap;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
}

.cat-filter__item:hover {
  border-color: rgba(52, 211, 153, 0.35);
  color: #ffffff;
}

.cat-filter__item:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 2px;
}

.cat-filter__item--active {
  border-color: rgba(16, 185, 129, 0.5);
  background: rgba(16, 185, 129, 0.12);
  color: #6ee7b7;
}

.cat-filter__count {
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.6875rem;
  font-variant-numeric: tabular-nums;
}

.cat-filter__item--active .cat-filter__count {
  color: rgba(110, 231, 183, 0.7);
}

@media (prefers-reduced-motion: reduce) {
  .cat-filter__item {
    transition: none;
  }
}
</style>
