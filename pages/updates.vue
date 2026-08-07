<template>
  <!--
    Product Updates is a *category view* of the shared newsroom collection, not a
    separate dataset (handoff §2). The live URL is preserved; the content behind
    it now comes from the same records that power /newsroom and the article pages.
  -->
  <main class="min-h-screen bg-black font-inter">
    <section class="relative overflow-hidden border-b border-white/5" style="padding: 9rem 0 4rem">
      <div
        class="absolute inset-0 z-0 pointer-events-none"
        style="background: radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16, 185, 129, 0.15) 0%, transparent 65%)"
      />
      <div class="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <span class="cat__eyebrow" data-aos="fade-up">Product Updates</span>
        <h1 class="cat__h1" data-aos="fade-up" data-aos-delay="80">PTERI Product Updates</h1>
        <p class="cat__lede" data-aos="fade-up" data-aos-delay="160">
          Launched capabilities, API changes, app releases, SDK updates, and availability changes for PTERI. Every
          update carries an explicit availability label.
        </p>
        <p class="cat__crosslink" data-aos="fade-up" data-aos-delay="200">
          <NuxtLink to="/newsroom">Browse the full Newsroom <span aria-hidden="true">→</span></NuxtLink>
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12">
      <div v-if="updates.length" class="cat__grid">
        <NewsroomNewsCard
          v-for="(card, index) in updates"
          :key="card.slug"
          :card="card"
          placement="updates"
          :position="index + 1"
          :eager="index < 3"
          :delay="(index % 3) * 70"
        />
      </div>

      <div v-else class="cat__empty">
        <p class="cat__empty-title">No product updates published yet.</p>
        <p class="cat__empty-body">
          Release notes will appear here as PTERI capabilities ship. The documentation and API reference track the
          current behaviour in the meantime.
        </p>
        <div class="cat__empty-actions">
          <a href="https://docs.kakr.ai/" target="_blank" rel="noopener noreferrer" class="cat__btn cat__btn--primary">
            View Documentation
          </a>
          <NuxtLink to="/newsroom" class="cat__btn cat__btn--secondary">View the Newsroom</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNewsroomList } from '~/composables/useNewsroom'
import { useSEO } from '~/composables/useSEO'

definePageMeta({ layout: 'default' })

const { byCategory } = await useNewsroomList()
const updates = computed(() => byCategory('product-update'))

const { setSEO } = useSEO()
setSEO({
  title: 'PTERI Product Updates | KAKR Labs',
  description:
    'Launched capabilities, API changes, app releases, SDK updates, and availability changes for PTERI.',
  image: '/home-og.png',
  canonical: '/updates',
})
</script>

<style scoped src="~/assets/css/newsroom-category.css"></style>
