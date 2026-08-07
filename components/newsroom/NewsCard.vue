<template>
  <!--
    The one card component. Handoff §7 forbids duplicating card markup across
    routes, so /newsroom, /updates, /tutorials, the homepage section, the blog
    compatibility page and related-article strips all render this.

    The destination is always the on-site article. `external_url` never becomes a
    card target — handoff §1 rules out X as an article's only destination.
  -->
  <NuxtLink
    :to="href"
    class="news-card group"
    :class="{ 'news-card--featured': featured }"
    :data-aos="animate ? 'fade-up' : undefined"
    :data-aos-delay="animate ? delay : undefined"
    @click="onClick"
  >
    <div class="news-card__media">
      <NuxtImg
        v-if="card.hero_image"
        :src="card.hero_image"
        :alt="card.hero_alt || ''"
        :width="featured ? 1600 : 800"
        :height="featured ? 900 : 450"
        sizes="100vw sm:50vw lg:33vw"
        format="webp"
        :loading="eager ? 'eager' : 'lazy'"
        class="news-card__img"
      />
      <!-- No invented imagery: an article without a hero gets a typographic
           placeholder rather than unrelated stock art (handoff §9). -->
      <div v-else class="news-card__img news-card__img--empty" aria-hidden="true">
        <span>{{ categoryText }}</span>
      </div>

      <span class="news-card__category">{{ categoryText }}</span>
      <span v-if="availabilityText" class="news-card__availability">{{ availabilityText }}</span>
    </div>

    <div class="news-card__body">
      <span v-if="card.archive_label" class="news-card__archive">From the Archive</span>

      <h3 class="news-card__title">{{ card.title }}</h3>
      <p class="news-card__summary">{{ card.summary }}</p>

      <div class="news-card__meta">
        <time :datetime="card.published_at">{{ publishedText }}</time>
        <span aria-hidden="true">·</span>
        <span>{{ readingTime }} min read</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { articleUrl, displayReadingTime, type NewsroomCard } from '~/composables/useNewsroom'
import { useNewsroomAnalytics } from '~/composables/useNewsroomAnalytics'
import { availabilityLabel, categoryLabel, formatArticleDate } from '~~/shared/newsroom'

type Placement = 'homepage' | 'newsroom' | 'updates' | 'tutorials' | 'article-related' | 'blog'

const props = withDefaults(
  defineProps<{
    card: NewsroomCard
    placement: Placement
    /** 1-based position within its list, reported as `card_position`. */
    position?: number
    /** Larger layout for the manually selected homepage feature. */
    featured?: boolean
    /** Above-the-fold cards skip lazy loading to protect LCP. */
    eager?: boolean
    animate?: boolean
    delay?: number
  }>(),
  { position: 1, featured: false, eager: false, animate: true, delay: 0 },
)

const { track } = useNewsroomAnalytics()

const href = computed(() => articleUrl(props.card))
const categoryText = computed(() => categoryLabel(props.card.category))
const publishedText = computed(() => formatArticleDate(props.card.published_at))
const readingTime = computed(() => displayReadingTime(props.card))

// Only product updates carry an availability label; showing one elsewhere would
// imply a release claim the article is not making (handoff §5).
const availabilityText = computed(() =>
  props.card.category === 'product-update' ? availabilityLabel(props.card.availability) : null,
)

function onClick() {
  track('news_card_click', {
    article_slug: props.card.slug,
    category: props.card.category,
    placement: props.placement,
    card_position: props.position,
  })
}
</script>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  transition: border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
}

.news-card:hover {
  border-color: rgba(52, 211, 153, 0.35);
  background: rgba(255, 255, 255, 0.04);
}

/* The whole card is the link, so it needs its own visible focus ring
   (handoff §3.2). */
.news-card:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 3px;
}

.news-card__media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
}

.news-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-card:hover .news-card__img {
  transform: scale(1.04);
}

.news-card__img--empty {
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at 30% 0%, rgba(16, 185, 129, 0.18), transparent 70%), #0a0a0a;
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.news-card__category,
.news-card__availability {
  position: absolute;
  top: 0.75rem;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.news-card__category {
  left: 0.75rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
  background: rgba(0, 0, 0, 0.72);
  color: #6ee7b7;
}

.news-card__availability {
  right: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(0, 0, 0, 0.72);
  color: rgba(255, 255, 255, 0.7);
  text-transform: none;
  letter-spacing: 0;
}

.news-card__body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1.25rem;
}

.news-card__archive {
  align-self: flex-start;
  margin-bottom: 0.625rem;
  padding: 0.125rem 0.5rem;
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: 9999px;
  background: rgba(251, 191, 36, 0.1);
  color: #fcd34d;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.news-card__title {
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  /* Two lines, so an unusually long title cannot break the grid. */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s ease;
}

.news-card:hover .news-card__title {
  color: #34d399;
}

.news-card__summary {
  flex: 1 1 auto;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-card__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.75rem;
}

/* The featured card spans two columns on desktop and leads with a larger title. */
.news-card--featured .news-card__title {
  font-size: 1.375rem;
  -webkit-line-clamp: 3;
  line-clamp: 3;
}

.news-card--featured .news-card__body {
  padding: 1.5rem;
}

@media (prefers-reduced-motion: reduce) {
  .news-card,
  .news-card__img,
  .news-card__title {
    transition: none;
  }

  .news-card:hover .news-card__img {
    transform: none;
  }
}
</style>
