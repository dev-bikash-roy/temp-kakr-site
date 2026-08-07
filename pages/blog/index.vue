<template>
  <!--
    Legacy Blog compatibility page (handoff §2).

    `/blog` stays live because it has inbound links and history, but the Newsroom
    is canonical: this page carries `rel=canonical` to /newsroom, states plainly
    where the content now lives, and lists the same records rather than a second
    dataset. It becomes a 301 once the link and traffic audit in
    docs/newsroom/route-map.md is signed off.
  -->
  <main class="min-h-screen bg-black font-inter">
    <section class="relative overflow-hidden border-b border-white/5" style="padding: 9rem 0 4rem">
      <div
        class="absolute inset-0 z-0 pointer-events-none"
        style="background: radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16, 185, 129, 0.15) 0%, transparent 65%)"
      />
      <div class="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <span class="cat__eyebrow" data-aos="fade-up">Now the KAKR Newsroom</span>
        <h1 class="cat__h1" data-aos="fade-up" data-aos-delay="80">Latest from KAKR Labs</h1>
        <p class="cat__lede" data-aos="fade-up" data-aos-delay="160">
          The KAKR blog is now part of the Newsroom, alongside product updates, security research, engineering notes
          and tutorials. Individual article links continue to work and redirect to their Newsroom page.
        </p>
        <p class="cat__crosslink" data-aos="fade-up" data-aos-delay="200">
          <NuxtLink to="/newsroom">Go to the Newsroom <span aria-hidden="true">→</span></NuxtLink>
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12">
      <div v-if="articles.length" class="cat__grid">
        <NewsroomNewsCard
          v-for="(card, index) in articles"
          :key="card.slug"
          :card="card"
          placement="blog"
          :position="index + 1"
          :eager="index < 3"
          :delay="(index % 3) * 70"
        />
      </div>

      <div v-else class="cat__empty">
        <p class="cat__empty-title">The first KAKR articles are on their way.</p>
        <p class="cat__empty-body">
          Follow the Newsroom for product releases, security research and engineering notes as they publish.
        </p>
        <div class="cat__empty-actions">
          <NuxtLink to="/newsroom" class="cat__btn cat__btn--primary">View the Newsroom</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNewsroomList } from '~/composables/useNewsroom'
import { useSEO } from '~/composables/useSEO'
import { NEWSROOM_PAGE_SIZE } from '~~/shared/newsroom'

definePageMeta({ layout: 'default' })

const { all } = await useNewsroomList()
const articles = computed(() => all.value.slice(0, NEWSROOM_PAGE_SIZE))

const { setSEO } = useSEO()
setSEO({
  title: 'Blog | KAKR Labs',
  description:
    'Product releases, security research, engineering insights, and practical guidance for building accountable AI systems.',
  image: '/home-og.png',
  // Points search engines at the Newsroom so the two URLs do not compete while
  // /blog remains live for compatibility.
  canonical: '/newsroom',
})
</script>

<style scoped src="~/assets/css/newsroom-category.css"></style>
