<template>
  <main v-if="article" class="min-h-screen bg-black font-inter pb-24">
    <article>
      <!-- Header (handoff §4) -->
      <header class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-32 pb-8">
        <nav class="article__breadcrumb" aria-label="Breadcrumb">
          <NuxtLink to="/newsroom">Newsroom</NuxtLink>
          <span aria-hidden="true">/</span>
          <NuxtLink :to="`/newsroom?category=${article.category}`">{{ categoryText }}</NuxtLink>
        </nav>

        <!--
          Handoff §8: historical material may stay public only when it is clearly
          labelled and contextualised. This banner is that label, and it sits
          above the H1 so it cannot be missed or scrolled past.
        -->
        <aside v-if="article.archive_label" class="article__archive" aria-label="Archive notice">
          <p class="article__archive-title">From the Archive</p>
          <p class="article__archive-body">
            {{
              article.archive_note ||
              'This article reflects KAKR positioning at the time it was published and may not describe the current product. See the Newsroom for current releases.'
            }}
          </p>
        </aside>

        <h1 class="article__h1">{{ article.title }}</h1>
        <p class="article__summary">{{ article.summary }}</p>

        <div class="article__meta">
          <span>{{ article.author_name }}</span>
          <template v-if="article.author_role">
            <span aria-hidden="true">·</span>
            <span>{{ article.author_role }}</span>
          </template>
          <span aria-hidden="true">·</span>
          <time :datetime="article.published_at">{{ publishedText }}</time>
          <template v-if="updatedText">
            <span aria-hidden="true">·</span>
            <span>Updated {{ updatedText }}</span>
          </template>
          <span aria-hidden="true">·</span>
          <span>{{ readingTime }} min read</span>
        </div>

        <!-- Availability belongs to product updates only (handoff §5). -->
        <p v-if="availabilityText" class="article__availability">
          <span class="article__availability-label">Availability</span>
          <span class="article__availability-value">{{ availabilityText }}</span>
        </p>

        <div class="article__actions">
          <button type="button" class="article__btn" @click="shareOnX">Share on X</button>
          <button type="button" class="article__btn" @click="copyCurrentLink">
            {{ copyState === 'copied' ? 'Link copied' : copyState === 'failed' ? 'Copy failed — select the URL' : 'Copy link' }}
          </button>
          <!-- Secondary only. An article is never reduced to a link out to X. -->
          <a
            v-if="article.external_url"
            :href="article.external_url"
            target="_blank"
            rel="noopener noreferrer"
            class="article__btn"
          >
            Original post <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <!-- Hero -->
      <figure v-if="article.hero_image" class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-12">
        <NuxtImg
          :src="article.hero_image"
          :alt="article.hero_alt || ''"
          width="1600"
          height="900"
          sizes="100vw md:896px"
          format="webp"
          loading="eager"
          class="w-full rounded-2xl border border-white/5"
          style="aspect-ratio: 16 / 9; object-fit: cover"
        />
        <figcaption v-if="article.hero_caption" class="mt-3 text-center text-sm text-white/40">
          {{ article.hero_caption }}
        </figcaption>
      </figure>

      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <!--
          Table of contents appears past roughly 1,000 words or four H2 sections
          (handoff §4). Short articles do not get one, because a two-item TOC is
          just noise above the copy.
        -->
        <nav v-if="showToc" class="article__toc" aria-labelledby="article-toc-heading">
          <p id="article-toc-heading" class="article__toc-heading">On this page</p>
          <ol>
            <li v-for="link in tocLinks" :key="link.id">
              <a :href="`#${link.id}`">{{ link.text }}</a>
            </li>
          </ol>
        </nav>

        <div class="article__body">
          <ContentRenderer :value="article" />
        </div>

        <!-- Next step (handoff §4: at least one relevant CTA) -->
        <div v-if="article.cta_primary || article.cta_secondary" class="article__cta-row">
          <a
            v-if="article.cta_primary"
            :href="article.cta_primary.url"
            class="article__cta article__cta--primary"
            @click="onCtaClick(article.cta_primary)"
          >
            {{ article.cta_primary.label }}
          </a>
          <a
            v-if="article.cta_secondary"
            :href="article.cta_secondary.url"
            class="article__cta article__cta--secondary"
            :target="isExternal(article.cta_secondary.url) ? '_blank' : undefined"
            :rel="isExternal(article.cta_secondary.url) ? 'noopener noreferrer' : undefined"
            @click="onCtaClick(article.cta_secondary)"
          >
            {{ article.cta_secondary.label }}
          </a>
        </div>
      </div>

      <!-- Footer (handoff §4) -->
      <footer class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5">
        <ul v-if="article.tags?.length" class="article__tags">
          <li v-for="tag in article.tags" :key="tag">{{ tag }}</li>
        </ul>

        <div class="article__actions article__actions--footer">
          <button type="button" class="article__btn" @click="shareOnX">Share on X</button>
          <button type="button" class="article__btn" @click="copyCurrentLink">
            {{ copyState === 'copied' ? 'Link copied' : 'Copy link' }}
          </button>
        </div>

        <nav v-if="prev || next" class="article__prevnext" aria-label="More articles">
          <NuxtLink v-if="prev" :to="`/newsroom/${prev.slug}`" class="article__prevnext-item" rel="prev">
            <span class="article__prevnext-label"><span aria-hidden="true">←</span> Newer</span>
            <span class="article__prevnext-title">{{ prev.title }}</span>
          </NuxtLink>
          <span v-else />
          <NuxtLink
            v-if="next"
            :to="`/newsroom/${next.slug}`"
            class="article__prevnext-item article__prevnext-item--end"
            rel="next"
          >
            <span class="article__prevnext-label">Older <span aria-hidden="true">→</span></span>
            <span class="article__prevnext-title">{{ next.title }}</span>
          </NuxtLink>
        </nav>

        <section v-if="related.length" class="mt-14">
          <h2 class="text-lg font-bold text-white mb-5">Related reading</h2>
          <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <NewsroomNewsCard
              v-for="(card, index) in related"
              :key="card.slug"
              :card="card"
              placement="article-related"
              :position="index + 1"
              :delay="index * 60"
            />
          </div>
        </section>
      </footer>
    </article>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  adjacentArticles,
  displayReadingTime,
  relatedArticles,
  useNewsroomArticle,
  useNewsroomList,
} from '~/composables/useNewsroom'
import { useNewsroomAnalytics } from '~/composables/useNewsroomAnalytics'
import { useSEO, generateArticleSchema, generateBreadcrumbSchema } from '~/composables/useSEO'
import { useShare } from '~/composables/useShare'
import { availabilityLabel, categoryLabel, formatArticleDate } from '~~/shared/newsroom'

definePageMeta({ layout: 'default' })

const route = useRoute()
const { track } = useNewsroomAnalytics()

/** `[...slug]` catches nested paths; the last segment is the article slug. */
const slug = computed(() => {
  const param = route.params.slug
  const segments = Array.isArray(param) ? param : [param]
  return String(segments.filter(Boolean).at(-1) ?? '')
})

const { data: article } = await useNewsroomArticle(slug.value)

/**
 * A draft, a future-scheduled item and a genuinely missing slug are all a 404.
 * Distinguishing them in the response would tell an unauthenticated visitor that
 * an unpublished article exists at that slug (handoff §12).
 *
 * Infrastructure errors (non-404) are re-thrown by useNewsroomArticle and
 * propagate here naturally — the page will never show a misleading 404 for a
 * server-side failure.
 */
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

// Cards for related articles and prev/next navigation. A failure here is non-fatal:
// the article itself is still shown and related/adjacent links are simply absent.
let cards = ref<import('~/composables/useNewsroom').NewsroomCard[]>([])
try {
  const list = await useNewsroomList()
  cards = list.all
} catch {
  // Swallow — cards are supplementary UI, not required to display the article.
}

const categoryText = computed(() => categoryLabel(article.value!.category))
const publishedText = computed(() => formatArticleDate(article.value!.published_at))
const updatedText = computed(() => (article.value!.updated_at ? formatArticleDate(article.value!.updated_at) : ''))
const readingTime = computed(() => displayReadingTime(article.value as never))

const availabilityText = computed(() =>
  article.value!.category === 'product-update' ? availabilityLabel(article.value!.availability) : null,
)

const tocLinks = computed(() => (article.value as any)?.body?.toc?.links ?? [])

const showToc = computed(() => {
  const words = (article.value as any)?.word_count ?? 0
  return tocLinks.value.length >= 4 || words >= 1000
})

const related = computed(() => relatedArticles(article.value as never, cards.value, 3))

const adjacent = computed(() => adjacentArticles(slug.value, cards.value))
const prev = computed(() => adjacent.value.prev)
const next = computed(() => adjacent.value.next)

const canonicalUrl = computed(() => article.value!.seo?.canonical || `https://kakr.ai/newsroom/${article.value!.slug}`)

function isExternal(url: string) {
  return /^https?:\/\//i.test(url) && !url.startsWith('https://kakr.ai')
}

/* ---- Share actions: always the canonical KAKR URL (handoff §4) ---- */

const { xIntentUrl, copyLink, buildShareUrl } = useShare()
const copyState = ref<'idle' | 'copied' | 'failed'>('idle')

function shareOnX() {
  const shareUrl = buildShareUrl(canonicalUrl.value, { campaign: article.value!.slug, content: 'article-share' })
  window.open(xIntentUrl(article.value!.title, shareUrl), '_blank', 'noopener,noreferrer')
  track('article_share', { article_slug: article.value!.slug, channel: 'x' })
}

async function copyCurrentLink() {
  const ok = await copyLink(canonicalUrl.value)
  copyState.value = ok ? 'copied' : 'failed'
  setTimeout(() => { copyState.value = 'idle' }, 2400)
  if (ok) track('article_share', { article_slug: article.value!.slug, channel: 'copy-link' })
}

function onCtaClick(cta: { label: string; url: string }) {
  track('article_cta_click', {
    article_slug: article.value!.slug,
    cta_label: cta.label,
    destination: cta.url,
  })
}

onMounted(() => {
  track('article_view', {
    article_slug: article.value!.slug,
    category: article.value!.category,
    author: article.value!.author_name,
    published_at: article.value!.published_at,
  })
})

/* ---- SEO ---- */

const { setSEO } = useSEO()

setSEO({
  title: article.value.seo?.title || `${article.value.title} | KAKR Labs`,
  description: article.value.seo?.description || article.value.summary,
  image: article.value.social_image || article.value.hero_image || '/home-og.png',
  type: 'article',
  canonical: article.value.seo?.canonical,
  author: article.value.author_name,
  structuredData: [
    generateArticleSchema({
      headline: article.value.title,
      description: article.value.seo?.description || article.value.summary,
      image: article.value.social_image || article.value.hero_image || '/home-og.png',
      url: canonicalUrl.value,
      datePublished: article.value.published_at,
      dateModified: article.value.updated_at,
      authorName: article.value.author_name,
      // TechArticle for hands-on and architectural material, Article otherwise.
      isTechArticle: ['tutorial', 'engineering'].includes(article.value.category),
    }),
    generateBreadcrumbSchema([
      { name: 'Newsroom', url: 'https://kakr.ai/newsroom' },
      { name: categoryText.value, url: `https://kakr.ai/newsroom?category=${article.value.category}` },
      { name: article.value.title, url: canonicalUrl.value },
    ]),
  ],
})
</script>

<style scoped>
.article__breadcrumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.article__breadcrumb a {
  color: #34d399;
  transition: color 0.2s ease;
}

.article__breadcrumb a:hover {
  color: #6ee7b7;
}

.article__archive {
  margin-top: 1.5rem;
  padding: 1rem 1.125rem;
  border: 1px solid rgba(251, 191, 36, 0.28);
  border-radius: 0.875rem;
  background: rgba(251, 191, 36, 0.07);
}

.article__archive-title {
  color: #fcd34d;
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.article__archive-body {
  margin-top: 0.375rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.875rem;
  line-height: 1.65;
}

.article__h1 {
  margin-top: 1.25rem;
  color: #ffffff;
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  /* Long unbroken titles wrap instead of overflowing the column. */
  overflow-wrap: break-word;
}

.article__summary {
  margin-top: 1.125rem;
  color: rgba(255, 255, 255, 0.62);
  font-size: 1.125rem;
  line-height: 1.7;
}

.article__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.8125rem;
}

.article__availability {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.1);
}

.article__availability-label {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.625rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.article__availability-value {
  color: #6ee7b7;
  font-size: 0.8125rem;
  font-weight: 700;
}

.article__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-top: 1.75rem;
}

.article__actions--footer {
  margin-top: 0;
  margin-bottom: 2.5rem;
}

.article__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  min-height: 40px;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8125rem;
  font-weight: 600;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.article__btn:hover {
  border-color: rgba(52, 211, 153, 0.4);
  color: #34d399;
}

.article__btn:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 2px;
}

.article__toc {
  margin-bottom: 2.5rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.875rem;
  background: rgba(255, 255, 255, 0.02);
}

.article__toc-heading {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.article__toc ol {
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  counter-reset: toc;
}

.article__toc li {
  counter-increment: toc;
}

.article__toc li::before {
  content: counter(toc) '.';
  margin-right: 0.5rem;
  color: rgba(255, 255, 255, 0.25);
  font-variant-numeric: tabular-nums;
}

.article__toc a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.article__toc a:hover {
  color: #34d399;
}

.article__cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;
}

.article__cta {
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.article__cta--primary {
  background: #10b981;
  color: #000000;
}

.article__cta--primary:hover {
  background: #34d399;
}

.article__cta--secondary {
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

.article__cta--secondary:hover {
  border-color: rgba(52, 211, 153, 0.5);
  color: #34d399;
}

.article__cta:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 3px;
}

.article__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  list-style: none;
}

.article__tags li {
  padding: 0.25rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  font-weight: 600;
}

.article__prevnext {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .article__prevnext {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.article__prevnext-item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1rem 1.125rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.875rem;
  transition: border-color 0.2s ease;
}

.article__prevnext-item:hover {
  border-color: rgba(52, 211, 153, 0.35);
}

.article__prevnext-item:focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 2px;
}

.article__prevnext-item--end {
  text-align: right;
}

.article__prevnext-label {
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.article__prevnext-title {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.45;
}

.article__prevnext-item:hover .article__prevnext-title {
  color: #34d399;
}

@media (prefers-reduced-motion: reduce) {
  .article__btn,
  .article__cta,
  .article__toc a,
  .article__breadcrumb a,
  .article__prevnext-item,
  .article__prevnext-title {
    transition: none;
  }
}
</style>

<style>
/*
  Article body typography. Unscoped because ContentRenderer output is not
  processed by scoped-style attribute hashing.
*/
.article__body {
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.0625rem;
  line-height: 1.8;
}

.article__body > * + * {
  margin-top: 1.25rem;
}

.article__body h2 {
  margin-top: 3rem;
  color: #ffffff;
  font-size: 1.625rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.25;
  /* Anchor targets clear the fixed header and the announcement bar. */
  scroll-margin-top: calc(var(--kakr-announce-h, 0px) + 6rem);
}

.article__body h3 {
  margin-top: 2.25rem;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  scroll-margin-top: calc(var(--kakr-announce-h, 0px) + 6rem);
}

.article__body a {
  color: #34d399;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.article__body a:hover {
  color: #6ee7b7;
}

.article__body strong {
  color: #ffffff;
  font-weight: 700;
}

.article__body ul,
.article__body ol {
  padding-left: 1.5rem;
}

.article__body ul {
  list-style: disc;
}

.article__body ol {
  list-style: decimal;
}

.article__body li + li {
  margin-top: 0.5rem;
}

.article__body blockquote {
  padding: 0.25rem 0 0.25rem 1.25rem;
  border-left: 3px solid rgba(16, 185, 129, 0.5);
  color: rgba(255, 255, 255, 0.62);
  font-style: italic;
}

.article__body :not(pre) > code {
  padding: 0.15em 0.4em;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  background: rgba(255, 255, 255, 0.06);
  color: #6ee7b7;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.875em;
}

/* Code blocks scroll inside their own box so a long line cannot make the page
   scroll horizontally (handoff §12: no clipping or overflow). */
.article__body pre {
  overflow-x: auto;
  padding: 1.125rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.875rem;
  background: #0d1117;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.8125rem;
  line-height: 1.7;
}

.article__body pre code {
  display: block;
  white-space: pre;
}

.article__body img {
  width: 100%;
  height: auto;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.875rem;
}

.article__body table {
  display: block;
  width: 100%;
  overflow-x: auto;
  border-collapse: collapse;
  font-size: 0.9375rem;
}

.article__body th,
.article__body td {
  padding: 0.625rem 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;
  vertical-align: top;
}

.article__body th {
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  font-weight: 700;
}

.article__body hr {
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
</style>
