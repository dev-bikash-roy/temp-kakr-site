<template>
  <!--
    Tutorials is a category view of the shared newsroom collection (handoff §2).
    Until tutorials exist it shows a credible coming-soon state that links to real
    documentation — not placeholder article cards.
  -->
  <main class="min-h-screen bg-black font-inter">
    <section class="relative overflow-hidden border-b border-white/5" style="padding: 9rem 0 4rem">
      <div
        class="absolute inset-0 z-0 pointer-events-none"
        style="background: radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16, 185, 129, 0.15) 0%, transparent 65%)"
      />
      <div class="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <span class="cat__eyebrow" data-aos="fade-up">{{ tutorials.length ? 'Tutorials' : 'Coming Soon' }}</span>
        <h1 class="cat__h1" data-aos="fade-up" data-aos-delay="80">PTERI Tutorials</h1>
        <p class="cat__lede" data-aos="fade-up" data-aos-delay="160">
          Step-by-step guides for passwordless authentication, AI-agent authorization, MCP integration, policy
          enforcement, and verifiable action evidence.
        </p>
        <p class="cat__crosslink" data-aos="fade-up" data-aos-delay="200">
          <NuxtLink to="/newsroom">Browse the full Newsroom <span aria-hidden="true">→</span></NuxtLink>
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12">
      <div v-if="tutorials.length" class="cat__grid">
        <NewsroomNewsCard
          v-for="(card, index) in tutorials"
          :key="card.slug"
          :card="card"
          placement="tutorials"
          :position="index + 1"
          :eager="index < 3"
          :delay="(index % 3) * 70"
        />
      </div>

      <template v-else>
        <div class="cat__empty">
          <p class="cat__empty-title">The tutorial library is still being written.</p>
          <p class="cat__empty-body">
            Each tutorial ships with tested code, the versions it was verified against, and the exact allow and deny
            behaviour you should expect. Until then, the documentation and API reference are the fastest path to a
            working integration.
          </p>
          <div class="cat__empty-actions">
            <a
              href="https://docs.kakr.ai/"
              target="_blank"
              rel="noopener noreferrer"
              class="cat__btn cat__btn--primary"
            >
              View Documentation
            </a>
            <a
              href="https://docs.kakr.ai/docs/api-reference"
              target="_blank"
              rel="noopener noreferrer"
              class="cat__btn cat__btn--secondary"
            >
              View API Reference
            </a>
          </div>
        </div>

        <!-- Named as planned topics, not as articles, so nothing here reads as a
             published guide that does not exist. -->
        <h2 class="mt-14 text-center text-xs font-extrabold uppercase tracking-[0.15em] text-white/40">
          Planned topics
        </h2>
        <div class="cat__topics">
          <div
            v-for="(topic, index) in plannedTopics"
            :key="topic.title"
            class="cat__topic"
            data-aos="fade-up"
            :data-aos-delay="(index % 3) * 60"
          >
            <p class="cat__topic-title">{{ topic.title }}</p>
            <p class="cat__topic-desc">{{ topic.desc }}</p>
          </div>
        </div>
      </template>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNewsroomList } from '~/composables/useNewsroom'
import { useSEO } from '~/composables/useSEO'

definePageMeta({ layout: 'default' })

const { byCategory } = await useNewsroomList()
const tutorials = computed(() => byCategory('tutorial'))

const plannedTopics = [
  { title: 'Passwordless Authentication', desc: 'Add passwordless MFA to an existing application.' },
  { title: 'AI-Agent Authorization', desc: 'Give an agent a scoped, verifiable identity.' },
  { title: 'MCP Integration', desc: 'Verify authority when agents call tools and services.' },
  { title: 'Policy Enforcement', desc: 'Evaluate scope, context, and expiration at request time.' },
  { title: 'Action Evidence', desc: 'Produce and inspect tamper-evident authorization evidence.' },
  { title: 'Step-Up Approval', desc: 'Require explicit approval before high-impact actions.' },
]

const { setSEO } = useSEO()
setSEO({
  title: 'PTERI Tutorials | KAKR Labs',
  description:
    'Step-by-step guides for passwordless authentication, AI-agent authorization, MCP integration, policy enforcement, and verifiable action evidence.',
  image: '/og/og-tutorials.png',
  canonical: '/tutorials',
  keywords: ['pteri tutorials', 'passwordless mfa guide', 'ai agent authorization', 'mcp integration guide'],
})
</script>

<style scoped src="~/assets/css/newsroom-category.css"></style>
