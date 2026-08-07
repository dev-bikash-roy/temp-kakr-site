<template>
  <!--
    Handoff §3.2 — "Latest from KAKR", inserted immediately before the homepage
    FAQ section.

    Two separate rules govern whether this renders:
      §8  the section stays off until at least three reviewed items exist, so the
          homepage never advertises a newsroom that has nothing in it;
      §3.2 once it is on, it renders only the items that legitimately exist and
          never pads the grid with filler or invented articles.
  -->
  <section v-if="visible" class="section-py bg-black border-t border-white/5">
    <div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-aos="fade-up">
        <div class="max-w-2xl">
          <h2 class="text-3xl sm:text-4xl font-black tracking-[-0.02em] text-white">Latest from KAKR</h2>
          <p class="mt-3 text-base text-white/60 leading-relaxed">
            Product releases, security research, engineering insights, and practical guidance for building
            accountable AI systems.
          </p>
        </div>

        <NuxtLink to="/newsroom" class="latest__cta">
          View the Newsroom
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>

      <div class="latest__grid">
        <NewsroomNewsCard
          v-if="selection.featured"
          :card="selection.featured"
          placement="homepage"
          :position="1"
          featured
          eager
          class="latest__feature"
        />
        <NewsroomNewsCard
          v-for="(card, index) in selection.rest"
          :key="card.slug"
          :card="card"
          placement="homepage"
          :position="index + (selection.featured ? 2 : 1)"
          :delay="(index + 1) * 80"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNewsroomList } from '~/composables/useNewsroom'
import { HOMEPAGE_MIN_ARTICLES } from '~~/shared/newsroom'

const { all, homepageSelection } = await useNewsroomList()

const selection = computed(() => homepageSelection(3))

/**
 * The §8 launch gate. Counts published records — the section is either off or it
 * shows real articles; there is no third state where it pads the grid.
 *
 * This is the one knob that decides whether the homepage advertises the Newsroom,
 * and it needs no code change to flip: publish a third article and the section
 * appears on the next request.
 */
const visible = computed(() => all.value.length >= HOMEPAGE_MIN_ARTICLES)
</script>

<style scoped>
.latest__cta {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 0.5rem;
  color: #34d399;
  font-size: 0.875rem;
  font-weight: 700;
  transition: color 0.2s ease;
}

.latest__cta:hover {
  color: #6ee7b7;
}

.latest__cta:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 3px;
  border-radius: 0.25rem;
}

.latest__grid {
  display: grid;
  gap: 1.5rem;
  margin-top: 2.5rem;
  /* Single column on mobile, three across on desktop (handoff §1). */
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .latest__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .latest__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (prefers-reduced-motion: reduce) {
  .latest__cta {
    transition: none;
  }
}
</style>
