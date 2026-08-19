<template>
  <!--
    /resources stays as the broader directory the handoff §2 allows, but it no
    longer owns any content of its own: the article strip below reads the shared
    newsroom collection, and the Newsroom is linked prominently as required.
  -->
  <main class="min-h-screen bg-black font-inter pb-24">
    <section class="relative overflow-hidden border-b border-white/5" style="padding: 9rem 0 4rem">
      <div
        class="absolute inset-0 z-0 pointer-events-none"
        style="background: radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16, 185, 129, 0.15) 0%, transparent 65%)"
      />
      <div class="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
        <span class="cat__eyebrow" data-aos="fade-up">KAKR Resources</span>
        <h1 class="cat__h1 mx-auto text-balance" data-aos="fade-up" data-aos-delay="80">
          Build, Secure, and Understand PTERI
        </h1>
        <p class="cat__lede mx-auto" data-aos="fade-up" data-aos-delay="160">
          Everything KAKR publishes for builders and security teams: the Newsroom, product updates, tutorials, product
          documentation and the developer dashboard.
        </p>
      </div>
    </section>

    <!-- Directory -->
    <section class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-14">
      <div class="resources__dir">
        <template v-for="(entry, index) in directory" :key="entry.title">
          <a
            v-if="entry.external"
            :href="entry.href"
            target="_blank"
            rel="noopener noreferrer"
            class="resources__tile"
            data-aos="fade-up"
            :data-aos-delay="(index % 3) * 60"
          >
            <p class="resources__tile-title">
              {{ entry.title }}
              <span aria-hidden="true" class="resources__tile-ext">↗</span>
            </p>
            <p class="resources__tile-desc">{{ entry.desc }}</p>
          </a>
          <NuxtLink
            v-else
            :to="entry.href"
            class="resources__tile"
            :class="{ 'resources__tile--lead': entry.lead }"
            data-aos="fade-up"
            :data-aos-delay="(index % 3) * 60"
          >
            <p class="resources__tile-title">{{ entry.title }}</p>
            <p class="resources__tile-desc">{{ entry.desc }}</p>
          </NuxtLink>
        </template>
      </div>
    </section>

    <!-- Latest from the shared collection -->
    <section v-if="articles.length" class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
      <div class="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" data-aos="fade-up">
        <h2 class="text-2xl font-black tracking-[-0.02em] text-white">Latest from the Newsroom</h2>
        <NuxtLink to="/newsroom" class="cat__crosslink-inline">
          View the Newsroom <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>

      <div class="cat__grid">
        <NewsroomNewsCard
          v-for="(card, index) in articles"
          :key="card.slug"
          :card="card"
          placement="newsroom"
          :position="index + 1"
          :delay="(index % 3) * 70"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNewsroomList } from '~/composables/useNewsroom'
import { useSEO } from '~/composables/useSEO'

definePageMeta({ layout: 'default' })

const { all } = await useNewsroomList()
const articles = computed(() => all.value.slice(0, 6))

const directory = [
  {
    title: 'Newsroom',
    href: '/newsroom',
    desc: 'Product releases, security research, engineering notes and company announcements.',
    lead: true,
  },
  { title: 'Product Updates', href: '/updates', desc: 'What shipped, who can use it, and its availability label.' },
  { title: 'Tutorials', href: '/tutorials', desc: 'Step-by-step integration guides with tested code.' },
  {
    title: 'Documentation',
    href: 'https://docs.kakr.ai/',
    desc: 'Guides and the full API reference.',
    external: true,
  },
  {
    title: 'Developer Dashboard',
    href: 'https://pteri.org/',
    desc: 'Manage keys, environments and usage.',
    external: true,
  },
  {
    title: 'System Status',
    href: 'https://kakrlabs1.statuspage.io/',
    desc: 'Live availability and incident history.',
    external: true,
  },
]

const { setSEO } = useSEO()
setSEO({
  title: 'KAKR Resources | Newsroom, Product Updates, Tutorials, and Documentation',
  description:
    'The KAKR Newsroom, product updates, tutorials, product documentation and developer dashboard in one place.',
  image: '/og/og-resources.png',
  canonical: '/resources',
})
</script>

<style scoped src="~/assets/css/newsroom-category.css"></style>

<style scoped>
.resources__dir {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .resources__dir {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .resources__dir {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.resources__tile {
  display: block;
  padding: 1.375rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.875rem;
  background: rgba(255, 255, 255, 0.02);
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.resources__tile:hover {
  border-color: rgba(52, 211, 153, 0.35);
  background: rgba(255, 255, 255, 0.04);
}

.resources__tile:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 3px;
}

/* The Newsroom tile leads the directory, as handoff §2 asks for. */
.resources__tile--lead {
  border-color: rgba(16, 185, 129, 0.4);
  background: rgba(16, 185, 129, 0.07);
}

.resources__tile-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
}

.resources__tile-ext {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
}

.resources__tile-desc {
  margin-top: 0.375rem;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.875rem;
  line-height: 1.6;
}

.cat__crosslink-inline {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 0.4rem;
  color: #34d399;
  font-size: 0.875rem;
  font-weight: 700;
  transition: color 0.2s ease;
}

.cat__crosslink-inline:hover {
  color: #6ee7b7;
}

.cat__crosslink-inline:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 3px;
  border-radius: 0.25rem;
}

@media (prefers-reduced-motion: reduce) {
  .resources__tile,
  .cat__crosslink-inline {
    transition: none;
  }
}
</style>
