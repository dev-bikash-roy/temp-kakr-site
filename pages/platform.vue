<template>
  <div class="platform-page">

    <!-- ░░ HERO ░░ -->
    <section class="hero">
      <ClientOnly><HeroBackground /></ClientOnly>
      <div class="hero__grid"></div>
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>

      <div class="wrap">
        <div class="hero__inner">
          <div class="hero__eyebrow plt-anim plt-anim--1">
            <span class="eyebrow-pill">
              <span class="eyebrow-dot"></span>
              {{ $t('platform.header.eyebrow') }}
            </span>
          </div>

          <h1 class="hero__heading">
            {{ $t('platform.header.title.deterministic') }} <br>
            <span class="heading-gradient">{{ $t('platform.header.title.identity') }}</span> <br>
            <span class="heading-white">{{ $t('platform.header.title.for') }} {{ $t('platform.header.title.humansAI') }}</span>
          </h1>

          <p class="hero__sub" v-html="t('platform.header.subtitle').replaceAll('[em]', '<em>').replaceAll('[/em]', '</em>')"></p>

          <div class="hero__badges plt-anim plt-anim--4">
            <div class="stat-badge"><span class="stat-badge__val">{{ $t('platform.header.stats.zero') }}</span><span class="stat-badge__lbl">{{ $t('platform.header.stats.sharedSecrets') }}</span></div>
            <div class="stat-badge"><span class="stat-badge__val">{{ $t('platform.header.stats.hundredPercent') }}</span><span class="stat-badge__lbl">{{ $t('platform.header.stats.selfCustodial') }}</span></div>
            <div class="stat-badge"><span class="stat-badge__val">{{ $t('platform.header.stats.binary') }}</span><span class="stat-badge__lbl">{{ $t('platform.header.stats.outcomesOnly') }}</span></div>
          </div>

          <div class="hero__ctas">
            <a href="https://pteri.org/Register" target="_blank" class="cta-primary">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16v-8m0 0l-3 3m3-3l3 3M3 20h18"/></svg>
              {{ $t('platform.header.cta.download') }}
            </a>
            <a href="https://docs.kakr.ai/" target="_blank" class="cta-ghost">{{ $t('platform.header.cta.demo') }}</a>
          </div>
        </div>

        <!-- Hero visual -->
        <div class="hero__visual plt-anim plt-anim--3">
          <div class="proof-card">
            <div class="proof-card__top">
              <div class="proof-card__dot proof-card__dot--green"></div>
              <span class="proof-card__label">{{ $t('platform.proofCard.label') }}</span>
            </div>
            <div class="proof-steps">
              <div v-for="(step, i) in proofSteps" :key="i" class="proof-step">
                <div class="proof-step__num">{{ String(i + 1).padStart(2, '0') }}</div>
                <div class="proof-step__bar">
                  <div class="proof-step__fill" :style="`width:${step.pct}%; background:${step.color};`"></div>
                </div>
                <div class="proof-step__text">{{ step.label }}</div>
              </div>
            </div>
            <div class="proof-card__result">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              {{ $t('platform.proofCard.result') }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ FLOW STRIP ░░ -->
    <section class="flow-strip">
      <div class="wrap">
        <p class="strip-label">{{ $t('platform.flowStrip.label') }}</p>
        <div class="flow-track">
          <div v-for="(step, i) in flowSteps" :key="i" class="flow-node" data-aos="fade-right" :data-aos-delay="i * 100">
            <div class="flow-node__icon" v-html="step.icon"></div>
            <span class="flow-node__label">{{ step.label }}</span>
            <svg v-if="i < flowSteps.length - 1" class="flow-node__arrow" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ INTERACTIVE DEMO ░░ -->
    <section id="demo" class="section section--demo">
      <div class="wrap text-center">
        <div class="section__head section__head--center" data-aos="fade-up">
          <p class="overline">{{ $t('platform.interactiveDemo.overline') }}</p>
          <h2 class="section-title" v-html="t('platform.interactiveDemo.title').replaceAll('[span]', '<span class=\'txt-green\'>').replaceAll('[/span]', '</span>')"></h2>
          <p class="section-desc">{{ $t('platform.interactiveDemo.description') }}</p>
        </div>
        
        <div class="demo-embed-wrapper" data-aos="fade-up" data-aos-delay="100">
          <iframe 
            src="https://app.storylane.io/demo/yptawxj0pctw?iframe=true" 
            :title="$t('platform.interactiveDemo.iframeTitle')"
            frameborder="0" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>

    <!-- ░░ WHY IDENTITY FAILS ░░ -->
    <section class="section">
      <div class="wrap">
        <div class="section__head section__head--center" data-aos="fade-up">
          <p class="overline">{{ $t('platform.problem.overline') }}</p>
          <h2 class="section-title" v-html="t('platform.problem.title').replaceAll('[span]', '<span class=\'txt-red\'>').replaceAll('[/span]', '</span>')"></h2>
          <p class="section-desc">{{ $t('platform.problem.description') }}</p>
        </div>

        <div class="compare-split">
          <!-- Legacy -->
          <div class="compare-panel compare-panel--legacy" data-aos="fade-right">
            <div class="compare-panel__header">
              <div class="compare-panel__badge compare-panel__badge--red">
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                {{ $t('platform.problem.legacy.badge') }}
              </div>
              <span class="compare-panel__risk">{{ $t('platform.problem.legacy.risk') }}</span>
            </div>
            <div class="compare-rows">
              <div v-for="row in legacyFlow" :key="row.from" class="compare-row">
                <div class="compare-row__from">{{ row.from }}</div>
                <div class="compare-row__arrow compare-row__arrow--red">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                </div>
                <div class="compare-row__to compare-row__to--red">{{ row.to }}</div>
              </div>
            </div>
            <div class="compare-panel__footer compare-panel__footer--red">
              {{ $t('platform.problem.legacy.footer') }}
            </div>
          </div>

          <!-- VS divider -->
          <div class="vs-divider">
            <div class="vs-circle">VS</div>
          </div>

          <!-- PTERI -->
          <div class="compare-panel compare-panel--pteri" data-aos="fade-left">
            <div class="compare-panel__header">
              <div class="compare-panel__badge compare-panel__badge--green">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="14" height="14"><polygon fill="#fff" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#10b981" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg>
                {{ $t('platform.problem.pteri.badge') }}
              </div>
              <span class="compare-panel__risk compare-panel__risk--green">{{ $t('platform.problem.pteri.risk') }}</span>
            </div>
            <div class="compare-rows">
              <div v-for="row in pteriFlow" :key="row.from" class="compare-row">
                <div class="compare-row__from compare-row__from--green">{{ row.from }}</div>
                <div class="compare-row__arrow compare-row__arrow--green">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                </div>
                <div class="compare-row__to compare-row__to--green">{{ row.to }}</div>
              </div>
            </div>
            <div class="compare-panel__footer compare-panel__footer--green">
              {{ $t('platform.problem.pteri.footer') }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ AUTHORITY MODEL ░░ -->
    <section id="authority" class="section section--alt">
      <div class="wrap">
        <div class="authority-layout">
          <div class="authority-left" data-aos="fade-right">
            <p class="overline">{{ $t('platform.authority.overline') }}</p>
            <h2 class="section-title" v-html="t('platform.authority.title').replaceAll('[br]', '<br>').replaceAll('[span]', '<span class=\'txt-green\'>').replaceAll('[/span]', '</span>').replaceAll('[br]', '<br>')"></h2>
            <p class="section-desc" style="margin-top:1rem;">{{ $t('platform.authority.description') }}</p>
            <div class="props-list">
              <div v-for="(prop, i) in properties" :key="i" class="prop-item" data-aos="fade-right" :data-aos-delay="i * 100">
                <div class="prop-check">
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                </div>
                <p>{{ prop }}</p>
              </div>
            </div>
          </div>

          <div class="authority-right" data-aos="fade-left">
            <div class="auth-card">
              <div class="auth-card__glow"></div>
              <div class="auth-card__brand">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32"><polygon fill="#10b981" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg>
                <div>
                  <div class="auth-card__name">{{ $t('platform.authority.card.name') }}</div>
                  <div class="auth-card__tags">{{ $t('platform.authority.card.tags') }}</div>
                </div>
              </div>
              <div class="auth-items">
                <div v-for="(item, i) in authorityModel" :key="i" class="auth-item">
                  <div class="auth-item__icon" :style="`background:${item.bg};border:1px solid ${item.border};`" v-html="item.icon"></div>
                  <div class="auth-item__body">
                    <strong>{{ item.label }}</strong>
                    <span>{{ item.desc }}</span>
                  </div>
                </div>
              </div>
              <div class="auth-card__conclusion" v-html="t('platform.authority.card.conclusion').replaceAll('[strong]', '<strong>').replaceAll('[/strong]', '</strong>').replaceAll('[strong]', '<strong>').replaceAll('[/strong]', '</strong>')"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ 6 CORE MODULES ░░ -->
    <section id="authentication" class="section">
      <div class="wrap">
        <div class="section__head" data-aos="fade-up">
          <p class="overline">{{ $t('platform.coreModules.overline') }}</p>
          <h2 class="section-title" v-html="t('platform.coreModules.title').replaceAll('[span]', '<span class=\'txt-green\'>').replaceAll('[/span]', '</span>')"></h2>
        </div>
        <div class="modules-grid">
          <div v-for="(mod, i) in modules" :key="mod.title" class="mod-card" data-aos="fade-up" :data-aos-delay="i * 100">
            <div class="mod-card__icon" :style="`background:${mod.bg};border:1px solid ${mod.border};`" v-html="mod.icon"></div>
            <div class="mod-card__num">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3 class="mod-card__title">{{ mod.title }}</h3>
            <p class="mod-card__sub">{{ mod.sub }}</p>
            <p class="mod-card__desc">{{ mod.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ TEAMS + USE CASES COMBINED ░░ -->
    <section class="section section--alt">
      <div class="wrap">
        <div class="two-col-section">
          <!-- Left: Teams -->
          <div id="who-its-for">
            <p class="overline">{{ $t('platform.teamsAndCases.teams.overline') }}</p>
            <h2 class="section-title" v-html="t('platform.teamsAndCases.teams.title').replaceAll('[br]', '<br>').replaceAll('[span]', '<span class=\'txt-green\'>').replaceAll('[/span]', '</span>')"></h2>
            <div class="teams-stack">
              <div v-for="(team, i) in teams" :key="team.title" class="team-row" data-aos="fade-right" :data-aos-delay="i * 100">
                <div class="team-row__icon" :style="`background:${team.bg};border:1px solid ${team.border};`" v-html="team.icon"></div>
                <div>
                  <div class="team-row__title">{{ team.title }}</div>
                  <div class="team-row__desc">{{ team.desc }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Use Cases -->
          <div id="use-cases">
            <p class="overline">{{ $t('platform.teamsAndCases.useCases.overline') }}</p>
            <h2 class="section-title" v-html="t('platform.teamsAndCases.useCases.title').replaceAll('[span]', '<span class=\'txt-green\'>').replaceAll('[/span]', '</span>')"></h2>
            <div class="uc-stack">
              <div v-for="(uc, i) in useCases" :key="uc.title" class="uc-row" data-aos="fade-left" :data-aos-delay="i * 100">
                <div class="uc-row__icon" :style="`background:${uc.bg};border:1px solid ${uc.border};`" v-html="uc.icon"></div>
                <div>
                  <div class="uc-row__title">{{ uc.title }}</div>
                  <div class="uc-row__desc">{{ uc.desc }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ DEVELOPER SECTION ░░ -->
    <section id="pteri" class="section">
      <div class="wrap">
        <div class="dev-layout">
          <!-- Left -->
          <div class="dev-left" data-aos="fade-right">
            <p class="overline">{{ $t('platform.devExp.overline') }}</p>
            <h2 class="section-title" v-html="t('platform.devExp.title').replaceAll('[br]', '<br>').replaceAll('[span]', '<span class=\'txt-green\'>').replaceAll('[/span]', '</span>')"></h2>
            <p class="section-desc">{{ $t('platform.devExp.description') }}</p>
            <div class="dev-features">
              <div v-for="(item, i) in devFeatures" :key="item.title" class="dev-feat" data-aos="fade-right" :data-aos-delay="i * 100">
                <div class="dev-feat__bullet" v-html="item.icon"></div>
                <div>
                  <div class="dev-feat__title">{{ item.title }}</div>
                  <div class="dev-feat__desc">{{ item.desc }}</div>
                </div>
              </div>
            </div>
            <a href="https://docs.kakr.ai" target="_blank" class="cta-ghost" style="margin-top:2rem;display:inline-flex;align-items:center;gap:0.5rem;" data-aos="fade-up" data-aos-delay="300">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              {{ $t('platform.devExp.readDocs') }}
            </a>
          </div>

          <!-- Right: Code -->
          <div class="code-panel" data-aos="fade-left">
            <div class="code-panel__bar">
              <div class="code-dots"><span></span><span></span><span></span></div>
              <div class="code-panel__filename">{{ $t('platform.devExp.codePanel.filename') }}</div>
              <div class="code-panel__tag">{{ $t('platform.devExp.codePanel.tag') }}</div>
            </div>
            <pre class="code-body"><code><span class="c">{{ $t('platform.devExp.codePanel.comments.install') }}</span>
<span class="k">import</span> { <span class="t">PteriAuth</span> } <span class="k">from</span> <span class="s">'@pteri/sdk'</span>

<span class="c">{{ $t('platform.devExp.codePanel.comments.verify') }}</span>
<span class="k">const</span> result = <span class="k">await</span> PteriAuth.<span class="m">verify</span>({
  payload:   request.body,
  signature: request.headers[<span class="s">'x-pteri-sig'</span>],
  policy:    <span class="s">'payment_authorization'</span>
})

<span class="k">if</span> (!result.isValid) {
  <span class="k">throw new</span> <span class="t">UnauthorizedError</span>(<span class="s">'{{ $t('platform.devExp.codePanel.comments.unauthorized') }}'</span>)
}

<span class="c">{{ $t('platform.devExp.codePanel.comments.deterministic') }}</span>
<span class="k">return</span> <span class="m">processTransaction</span>(result.claims)</code></pre>
            <div class="code-footer">
              <div class="code-stat"><span class="code-stat__dot code-stat__dot--green"></span> {{ $t('platform.devExp.codePanel.stats.zeroKeys') }}</div>
              <div class="code-stat"><span class="code-stat__dot code-stat__dot--green"></span> {{ $t('platform.devExp.codePanel.stats.anyFramework') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ PRICING ░░ -->
    <PricingSection id="pricing" />

    <!-- ░░ FINAL CTA ░░ -->
    <section class="final-cta">
      <div class="final-cta__glow"></div>
      <div class="wrap">
        <div class="final-cta__inner" data-aos="fade-up">
          <div class="final-cta__eyebrow">
            <span class="eyebrow-pill"><span class="eyebrow-dot"></span> {{ $t('platform.finalCta.overline') }}</span>
          </div>
          <h2 class="final-cta__title" v-html="t('platform.finalCta.title').replaceAll('[br]', '<br>').replaceAll('[span]', '<span class=\'txt-green\'>').replaceAll('[/span]', '</span>')"></h2>
          <p class="final-cta__sub">{{ $t('platform.finalCta.subtitle') }}</p>
          <div class="final-cta__btns">
            <a href="https://pteri.org/Register" target="_blank" class="cta-primary">{{ $t('platform.finalCta.ctas.identity') }}</a>
            <a href="https://docs.kakr.ai/" target="_blank" class="cta-ghost">Read the Docs</a>
            <a href="/contact" class="cta-ghost">{{ $t('platform.finalCta.ctas.sales') }}</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/useSEO'

const { t } = useI18n()
const { setSEO } = useSEO()



setSEO({
  title: 'PTERI Platform | Passwordless MFA and AI-Agent Authorization',
  description: 'Protect workforce access, AI-agent activity, and sensitive enterprise operations with passwordless authentication, scoped authority, and verifiable evidence.',
  image: '/platform-og.png',
})

// Scroll to hash after AOS finishes repositioning elements
onMounted(() => {
  const hash = window.location.hash
  if (hash) {
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 600)
  }
})

const activeModule = ref(0)

const proofSteps = computed(() => [
  { label: t('platform.proofCard.steps.0'), pct: 100, color: '#34d399' },
  { label: t('platform.proofCard.steps.1'), pct: 100, color: '#34d399' },
  { label: 'Cryptographic Anchor', pct: 100, color: '#34d399' },
  { label: t('platform.proofCard.steps.3'), pct: 100, color: '#10b981' },
])

const flowSteps = computed(() => [
  { label: t('platform.flowStrip.steps.0'), icon: `<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:#ffffff"><rect x="5" y="2" width="14" height="20" rx="2" stroke-width="1.5"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>` },
  { label: t('platform.flowStrip.steps.1'), icon: `<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:#34d399"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>` },
  { label: t('platform.flowStrip.steps.2'), icon: `<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>` },
  { label: 'Verified Anchor', icon: `<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:#f59e0b"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>` },
  { label: t('platform.flowStrip.steps.4'), icon: `<svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20" style="color:#10b981"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>` },
])

const legacyFlow = computed(() => [
  { from: t('platform.problem.legacy.rows.0.from'), to: t('platform.problem.legacy.rows.0.to') },
  { from: t('platform.problem.legacy.rows.1.from'), to: t('platform.problem.legacy.rows.1.to') },
  { from: t('platform.problem.legacy.rows.2.from'), to: t('platform.problem.legacy.rows.2.to') },
  { from: t('platform.problem.legacy.rows.3.from'), to: t('platform.problem.legacy.rows.3.to') },
])
const pteriFlow = computed(() => [
  { from: t('platform.problem.pteri.rows.0.from'), to: t('platform.problem.pteri.rows.0.to') },
  { from: t('platform.problem.pteri.rows.1.from'), to: t('platform.problem.pteri.rows.1.to') },
  { from: t('platform.problem.pteri.rows.2.from'), to: t('platform.problem.pteri.rows.2.to') },
  { from: t('platform.problem.pteri.rows.3.from'), to: t('platform.problem.pteri.rows.3.to') },
])

const properties = computed(() => [
  t('platform.authority.properties.0'),
  t('platform.authority.properties.1'),
  t('platform.authority.properties.2'),
  t('platform.authority.properties.3'),
  t('platform.authority.properties.4'),
])

const authorityModel = computed(() => [
  {
    label: t('platform.authority.card.items.0.label'), desc: t('platform.authority.card.items.0.desc'),
    bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="17" height="17"><circle cx="24" cy="24" r="20" fill="#10b981"/><path fill="#059669" d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33C37.97,18,42,22.03,42,27z"/><polygon fill="#fff" points="27,14 26,13 22,13 21,14 15,14 15,16 18,16 30,16 33,16 33,14"/><path fill="#fff" d="M16,18v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V18H16z M24,21c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S22.9,21,24,21z M28,31h-8v-2c0-1.33,2.67-2,4-2s4,0.67,4,2V31z"/></svg>`,
  },
  {
    label: t('platform.authority.card.items.1.label'), desc: t('platform.authority.card.items.1.desc'),
    bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="17" height="17"><polygon fill="#10b981" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg>`,
  },
  {
    label: t('platform.authority.card.items.2.label'), desc: t('platform.authority.card.items.2.desc'),
    bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)',
    icon: `<svg width="17" height="17" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:#f59e0b"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  },
  {
    label: t('platform.authority.card.items.3.label'), desc: t('platform.authority.card.items.3.desc'),
    bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)',
    icon: `<svg fill="currentColor" viewBox="0 0 20 20" width="17" height="17" style="color:#10b981"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`,
  },
])

const modules = computed(() => [
  { title: 'Passwordless MFA', sub: 'Workforce Authentication', desc: 'Add passwordless cryptographic authentication to existing applications, portals, and workforce workflows without requiring a full replacement.', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22" height="22"><polygon fill="#10b981" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg>` },
  { title: 'Verifiable Identity', sub: 'Identity Management', desc: 'Establish a distinct verifiable identity for people, agents, applications, and devices that can be managed and revoked.', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="22" height="22"><circle cx="24" cy="24" r="20" fill="#10b981"/><path fill="#059669" d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33C37.97,18,42,22.03,42,27z"/><polygon fill="#fff" points="27,14 26,13 22,13 21,14 15,14 15,16 18,16 30,16 33,16 33,14"/><path fill="#fff" d="M16,18v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V18H16z M24,21c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S22.9,21,24,21z M28,31h-8v-2c0-1.33,2.67-2,4-2s4,0.67,4,2V31z"/></svg>` },
  { title: 'Runtime Authorization', sub: 'AI Agents & Agent-to-Agent', desc: 'Define what each agent may do, which resources it may access, and how long its authority remains valid. Enforce policy at the moment of action.', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', icon: `<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:#f59e0b"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>` },
  { title: 'Credential Protection', sub: 'Google Cloud Infrastructure', desc: 'Keep keys and authorization material outside prompts, agent memory, and exposed runtime components. Google Cloud-backed with enterprise-grade reliability.', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:#34d399"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
  { title: 'Payments and Approvals', sub: 'Customer-Controlled Litecoin', desc: 'Customer-controlled Litecoin payments with cryptographic settlement.', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>` },
  { title: 'Developer and MCP Tools', sub: 'SDK, REST API & MCP', desc: 'Full SDKs and MCP integrations for rapid integration. Start with one sensitive workflow and expand over time.', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color:#34d399"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>` },
])

const teams = computed(() => [
  { title: t('platform.teamsAndCases.teams.items.0.title'), desc: t('platform.teamsAndCases.teams.items.0.desc'), bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" style="color:#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 9v1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>` },
  { title: t('platform.teamsAndCases.teams.items.1.title'), desc: t('platform.teamsAndCases.teams.items.1.desc'), bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" style="color:#34d399"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
  { title: t('platform.teamsAndCases.teams.items.2.title'), desc: t('platform.teamsAndCases.teams.items.2.desc'), bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" style="color:#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>` },
  { title: t('platform.teamsAndCases.teams.items.3.title'), desc: t('platform.teamsAndCases.teams.items.3.desc'), bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" style="color:#f59e0b"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>` },
])

const useCases = computed(() => [
  { title: t('platform.teamsAndCases.useCases.items.0.title'), desc: t('platform.teamsAndCases.useCases.items.0.desc'), bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" style="color:#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>` },
  { title: t('platform.teamsAndCases.useCases.items.1.title'), desc: t('platform.teamsAndCases.useCases.items.1.desc'), bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" style="color:#34d399"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>` },
  { title: t('platform.teamsAndCases.useCases.items.2.title'), desc: t('platform.teamsAndCases.useCases.items.2.desc'), bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" style="color:#f59e0b"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>` },
  { title: t('platform.teamsAndCases.useCases.items.3.title'), desc: t('platform.teamsAndCases.useCases.items.3.desc'), bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" style="color:#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/></svg>` },
  { title: t('platform.teamsAndCases.useCases.items.4.title'), desc: t('platform.teamsAndCases.useCases.items.4.desc'), bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" style="color:#34d399"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
  { title: t('platform.teamsAndCases.useCases.items.5.title'), desc: t('platform.teamsAndCases.useCases.items.5.desc'), bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" style="color:#f59e0b"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>` },
])

const devFeatures = computed(() => [
  { title: t('platform.devExp.features.0.title'), desc: t('platform.devExp.features.0.desc'), icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18" style="color:#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>` },
  { title: t('platform.devExp.features.1.title'), desc: t('platform.devExp.features.1.desc'), icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18" style="color:#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>` },
  { title: t('platform.devExp.features.2.title'), desc: t('platform.devExp.features.2.desc'), icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18" style="color:#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064"/></svg>` },
  { title: t('platform.devExp.features.3.title'), desc: t('platform.devExp.features.3.desc'), icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18" style="color:#10b981"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>` },
])

</script>

<style scoped>
/* ── Platform hero load-in animations ── */
@keyframes plt-rise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes plt-fade {
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
}

.plt-anim {
  opacity: 0;
  animation: plt-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.plt-anim--1 { animation-delay: 0.05s; }
.plt-anim--2 { animation-delay: 0.18s; }
.plt-anim--3 { animation-delay: 0.32s; animation-name: plt-fade; }
.plt-anim--4 { animation-delay: 0.44s; }
.plt-anim--5 { animation-delay: 0.56s; }

/* Gate transition */
.fade-gate-enter-active, .fade-gate-leave-active { transition: opacity 0.3s; }
.fade-gate-enter-from, .fade-gate-leave-to { opacity: 0; }

/* ── Reset & Base ──────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }
.platform-page {
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  font-family: 'Inter', -apple-system, sans-serif;
  overflow-x: hidden;
}
.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Colour tokens ─────────────────────────────────────── */
.txt-green { color: #34d399; }
.txt-red   { color: #f87171; }

/* ── Buttons ───────────────────────────────────────────── */
.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  font-size: 0.9375rem;
  font-weight: 700;
  color: #000000;
  border-radius: 9999px;
  border: 1px solid rgba(52, 211, 153, 0.5);
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 0 16px rgba(52, 211, 153, 0.3);
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
}
.cta-primary:hover {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 0 28px rgba(52, 211, 153, 0.5);
  transform: translateY(-1px);
}

.cta-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  font-size: 0.9375rem;
  font-weight: 700;
  color: #ffffff;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
}
.cta-ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.35);
}

/* ── Eyebrow pill ──────────────────────────────────────── */
.eyebrow-pill {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.4rem 1rem; border-radius: 999px;
  border: 1px solid rgba(52,211,153,0.25);
  background: rgba(52,211,153,0.06);
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: #34d399;
}
.eyebrow-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #34d399;
  animation: pulse-dot 2s infinite;
  box-shadow: 0 0 8px rgba(52,211,153,0.8);
}
@keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.75)} }

/* ── Section Overline ──────────────────────────────────── */
.overline {
  font-size: 0.75rem; font-weight: 800; letter-spacing: 0.14em;
  text-transform: uppercase; color: #10b981; margin: 0 0 0.75rem;
}
.section-title {
  font-size: var(--section-heading-size); font-weight: var(--section-heading-weight);
  color: #ffffff; line-height: 1.15; letter-spacing: -0.025em; margin: 0 0 1rem;
}
.section-desc {
  font-size: 1.1rem; color: #d1fae5; line-height: 1.75; max-width: 600px; margin: 0;
  opacity: 0.7;
}
.section__head { margin-bottom: 3.5rem; }
.section__head--center { text-align: center; }
.section__head--center .section-desc { margin-left: auto; margin-right: auto; }

/* ── HERO ──────────────────────────────────────────────── */
.hero {
  position: relative;
  padding: 9rem 0 7rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  overflow: hidden;
}
@media (max-width: 640px) {
  .hero { 
    padding: 7.5rem 0 5rem; 
    min-height: 100svh;
    display: flex;
    align-items: center;
  }
  .hero__sub { font-size: 1rem; }
  .hero__badges { gap: 0.5rem; }
  .stat-badge { padding: 0.6rem 1rem; min-width: 90px; }
}
.hero__ambient {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 90% 70% at 60% -5%, rgba(16,185,129,0.15) 0%, transparent 65%),
    radial-gradient(ellipse 50% 40% at 10% 80%, rgba(52,211,153,0.06) 0%, transparent 60%);
  pointer-events: none;
}
.hero__grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  pointer-events: none;
}
.hero__orb {
  position: absolute; border-radius: 50%; pointer-events: none;
  filter: blur(70px);
  will-change: transform;
}
.hero__orb--1 { width: 600px; height: 600px; top: -150px; right: -100px; background: rgba(16,185,129,0.12); }
.hero__orb--2 { width: 350px; height: 350px; bottom: -80px; left: 5%; background: rgba(52,211,153,0.07); }

.wrap { position: relative; z-index: 1; }

.hero .wrap {
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 5rem;
  align-items: center;
}
@media (max-width: 960px) { 
  .hero .wrap { grid-template-columns: 1fr; text-align: center; } 
  .hero__inner { display: flex; flex-direction: column; align-items: center; }
  .hero__sub { margin-left: auto; margin-right: auto; }
  .hero__badges { justify-content: center; }
  .hero__ctas { justify-content: center; }
  .hero__visual { display: none; } 
}

.hero__eyebrow { margin-bottom: 2rem; }
.hero__heading {
  font-size: var(--hero-title-size);
  font-weight: var(--hero-title-weight); line-height: var(--hero-title-line-height); letter-spacing: var(--hero-title-letter-spacing);
  margin: 0 0 1.75rem;
}
.heading-gradient {
  background: linear-gradient(135deg, #34d399 0%, #10b981 60%, #6ee7b7 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  filter: drop-shadow(0 0 30px rgba(52,211,153,0.4));
}
.heading-white { color: #ffffff; }
.hero__sub {
  font-size: 1.2rem; color: #d1fae5; line-height: 1.8; max-width: 540px; margin: 0 0 2.25rem;
  opacity: 0.75;
}
.hero__sub em { color: #ffffff; font-style: normal; font-weight: 700; opacity: 1; }

.hero__badges {
  display: flex; flex-wrap: wrap; gap: 0.875rem; margin-bottom: 2.25rem;
}
.stat-badge {
  display: flex; flex-direction: column; align-items: center;
  padding: 0.75rem 1.5rem; border-radius: 0.875rem;
  background: rgba(16,185,129,0.07);
  border: 1px solid rgba(16,185,129,0.25);
  min-width: 110px;
  transition: border-color .2s, background .2s;
}
.stat-badge:hover { background: rgba(16,185,129,0.12); border-color: rgba(52,211,153,0.45); }
.stat-badge__val { font-size: 1.2rem; font-weight: 900; color: #34d399; text-shadow: 0 0 20px rgba(52,211,153,0.5); }
.stat-badge__lbl { font-size: 0.7rem; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.07em; margin-top: 3px; opacity: 0.7; }

.hero__ctas { display: flex; flex-wrap: wrap; gap: 1rem; }

/* ── Proof Card ────────────────────────────────────────── */
.proof-card {
  background: rgba(16,185,129,0.04);
  border: 1px solid rgba(16,185,129,0.2);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(24px);
  box-shadow: 0 0 80px rgba(16,185,129,0.12), 0 0 0 1px rgba(16,185,129,0.05);
}
.proof-card__top {
  display: flex; align-items: center; gap: 0.625rem; margin-bottom: 1.75rem;
}
.proof-card__dot { width: 8px; height: 8px; border-radius: 50%; }
.proof-card__dot--green { background: #10b981; animation: pulse-dot 2s infinite; box-shadow: 0 0 8px rgba(16,185,129,0.8); }
.proof-card__label { font-size: 0.8rem; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.09em; opacity: 0.7; }
.proof-steps { display: flex; flex-direction: column; gap: 0.875rem; margin-bottom: 1.75rem; }
.proof-step { display: flex; align-items: center; gap: 0.875rem; }
.proof-step__num { font-size: 0.68rem; font-weight: 700; color: #34d399; font-family: monospace; width: 20px; flex-shrink: 0; opacity: 0.6; }
.proof-step__bar { flex: 1; height: 5px; background: rgba(255,255,255,0.07); border-radius: 3px; overflow: hidden; }
.proof-step__fill { height: 100%; border-radius: 3px; transition: width 1.2s ease; }
.proof-step__text { font-size: 0.8rem; color: #ffffff; font-weight: 600; width: 145px; flex-shrink: 0; opacity: 0.85; }
.proof-card__result {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.875rem 1.125rem; border-radius: 0.75rem;
  background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3);
  font-size: 0.875rem; font-weight: 800; color: #34d399;
  box-shadow: 0 0 20px rgba(16,185,129,0.15);
}

/* ── Flow Strip ────────────────────────────────────────── */
.flow-strip {
  padding: 2.5rem 0;
  background: rgba(16,185,129,0.02);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.strip-label {
  text-align: center;
  font-size: 0.75rem; font-weight: 800; letter-spacing: 0.12em;
  text-transform: uppercase; color: #34d399; margin: 0 0 1.75rem;
  opacity: 0.65;
}
.flow-track {
  display: flex; align-items: center; justify-content: center;
  flex-wrap: wrap; gap: 0.375rem;
}
.flow-node {
  display: flex; align-items: center; gap: 0.625rem;
}
.flow-node__icon {
  width: 2.5rem; height: 2.5rem; border-radius: 0.75rem;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  transition: border-color .2s, background .2s;
}
.flow-node__icon:hover { background: rgba(16,185,129,0.08); border-color: rgba(52,211,153,0.3); }
.flow-node__label { font-size: 0.8rem; font-weight: 700; color: #ffffff; white-space: nowrap; opacity: 0.75; }
.flow-node__arrow { color: rgba(52,211,153,0.3); }
@media (max-width: 768px) { 
  .flow-track { flex-direction: column; gap: 1rem; }
  .flow-node { flex-direction: column; text-align: center; gap: 0.5rem; }
  .flow-node__arrow { transform: rotate(90deg); margin: 0.5rem 0; }
}

/* ── Interactive Demo ──────────────────────────────────── */
.demo-embed-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: calc(56.25% + 40px); /* 16:9 aspect ratio + player toolbar offset */
  height: 0;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(16,185,129,0.15);
  border: 1px solid rgba(16,185,129,0.2);
  background: #000;
}
.demo-embed-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


/* ── Section shared ────────────────────────────────────── */
.section { padding: 2.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
@media (min-width: 768px) { .section { padding: 6rem 0; } }
.section--alt { background: rgba(16,185,129,0.015); }

/* ── Compare ───────────────────────────────────────────── */
.compare-split {
  display: flex; align-items: stretch; gap: 0;
  max-width: 980px; margin: 0 auto;
}
@media (max-width: 768px) {
  .compare-split { flex-direction: column; gap: 1.5rem; }
  .vs-divider { align-self: center; margin: 0; }
  .vs-circle { width: 40px; height: 40px; font-size: 0.7rem; }
}

.compare-panel {
  flex: 1; border-radius: 1.5rem; padding: 2rem;
  display: flex; flex-direction: column; gap: 1rem;
}
.compare-panel--legacy {
  background: rgba(239,68,68,0.05);
  border: 1px solid rgba(239,68,68,0.2);
}
.compare-panel--pteri {
  background: rgba(16,185,129,0.06);
  border: 1px solid rgba(16,185,129,0.25);
  box-shadow: 0 0 50px rgba(16,185,129,0.06);
}
@media (max-width: 480px) {
  .compare-panel { padding: 1.25rem; }
}

.compare-panel__header {
  display: flex; align-items: center; justify-content: space-between;
}
.compare-panel__badge {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.4rem 0.875rem; border-radius: 999px;
  font-size: 0.82rem; font-weight: 700;
}
.compare-panel__badge--red { background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); }
.compare-panel__badge--green { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.3); }
.compare-panel__risk { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #ffffff; opacity: 0.4; }
.compare-panel__risk--green { color: #10b981; opacity: 1; }

.compare-rows { display: flex; flex-direction: column; gap: 0.625rem; flex: 1; }

/* Each row: [from-box] [arrow] [to-text] — always horizontal */
.compare-row {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.compare-row__from {
  flex: 0 0 auto;
  width: clamp(90px, 35%, 135px);
  padding: 0.55rem 0.75rem;
  border-radius: 0.625rem;
  font-size: clamp(0.7rem, 2vw, 0.82rem);
  font-weight: 600;
  color: #ffffff;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  text-align: center;
  line-height: 1.3;
}
.compare-row__from--green {
  background: rgba(16,185,129,0.1);
  border-color: rgba(16,185,129,0.25);
  color: #34d399;
}

.compare-row__arrow {
  flex-shrink: 0;
  color: rgba(239,68,68,0.55);
}
.compare-row__arrow--green { color: rgba(16,185,129,0.7); }

.compare-row__to {
  flex: 1;
  font-size: clamp(0.7rem, 2vw, 0.85rem);
  font-weight: 700;
  line-height: 1.3;
}
.compare-row__to--red { color: #f87171; }
.compare-row__to--green { color: #34d399; }

.compare-panel__footer {
  padding: 0.875rem 1.125rem; border-radius: 0.75rem;
  font-size: clamp(0.75rem, 2vw, 0.82rem); font-weight: 700; line-height: 1.4;
}
.compare-panel__footer--red { background: rgba(239,68,68,0.08); color: #f87171; border: 1px solid rgba(239,68,68,0.2); }
.compare-panel__footer--green { background: rgba(16,185,129,0.1); color: #34d399; border: 1px solid rgba(16,185,129,0.2); }

.vs-divider {
  display: flex; align-items: center; justify-content: center;
  width: 3rem; flex-shrink: 0; position: relative; z-index: 1;
}
.vs-circle {
  width: 2.75rem; height: 2.75rem; border-radius: 50%;
  background: #000000; border: 1px solid rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; font-weight: 900; color: #ffffff; letter-spacing: 0.05em;
  opacity: 0.5; flex-shrink: 0;
}
@media (max-width: 768px) {
  .vs-divider { width: 100%; height: 2.5rem; }
}

/* ── Authority ─────────────────────────────────────────── */
.authority-layout {
  display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start;
}
@media (max-width: 900px) { .authority-layout { grid-template-columns: 1fr; } }

.props-list { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 2rem; }
.prop-item {
  display: flex; align-items: flex-start; gap: 1rem;
  padding: 1rem 1.125rem; border-radius: 1rem;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
  transition: background .2s, border-color .2s, transform .2s;
}
.prop-item:hover { background: rgba(16,185,129,0.05); border-color: rgba(52,211,153,0.25); transform: translateX(4px); }
.prop-check {
  width: 1.875rem; height: 1.875rem; border-radius: 50%; flex-shrink: 0;
  background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.35);
  display: flex; align-items: center; justify-content: center; color: #10b981;
}
.prop-item p { font-size: 0.95rem; color: #ffffff; font-weight: 500; line-height: 1.55; margin: 0; margin-top: 0.15rem; }

.auth-card {
  position: relative; overflow: hidden;
  border-radius: 1.5rem; padding: 2.25rem;
  background: rgba(16,185,129,0.04); border: 1px solid rgba(16,185,129,0.22);
  box-shadow: 0 0 80px rgba(16,185,129,0.08);
}
.auth-card__glow {
  position: absolute; top: 0; right: 0;
  width: 250px; height: 250px; pointer-events: none;
  background: radial-gradient(ellipse, rgba(16,185,129,0.22) 0%, transparent 70%);
  filter: blur(50px);
}
.auth-card__brand { display: flex; align-items: center; gap: 0.875rem; margin-bottom: 2rem; position: relative; }
.auth-card__name { font-size: 1.05rem; font-weight: 800; color: #ffffff; margin: 0; }
.auth-card__tags { font-size: 0.7rem; font-weight: 700; color: #34d399; margin-top: 3px; letter-spacing: 0.05em; }
.auth-items { display: flex; flex-direction: column; gap: 1.125rem; position: relative; }
.auth-item { display: flex; align-items: flex-start; gap: 0.875rem; }
.auth-item__icon {
  width: 2.5rem; height: 2.5rem; border-radius: 0.75rem;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.auth-item__body { display: flex; flex-direction: column; }
.auth-item__body strong { font-size: 0.925rem; font-weight: 800; color: #ffffff; }
.auth-item__body span { font-size: 0.8rem; color: #d1fae5; margin-top: 2px; opacity: 0.6; }
.auth-card__conclusion {
  display: block;
  margin-top: 2rem; padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  font-size: 0.9rem; color: #10b981; font-weight: 700; position: relative;
  line-height: 1.7;
}
.auth-card__conclusion strong { color: #ffffff; }
.conclusion-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #10b981; flex-shrink: 0; animation: pulse-dot 2s infinite;
  box-shadow: 0 0 8px rgba(16,185,129,0.8);
}

/* ── Modules Grid ──────────────────────────────────────── */
.modules-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.375rem;
}
@media (max-width: 900px) { .modules-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px)  { .modules-grid { grid-template-columns: 1fr; } }

.mod-card {
  position: relative;
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 1.375rem; padding: 2rem;
  display: flex; flex-direction: column; gap: 0.625rem;
  transition: background .25s, border-color .25s, transform .25s, box-shadow .25s;
  overflow: hidden;
}
.mod-card::before {
  content: ''; position: absolute; inset: 0; border-radius: inherit;
  background: linear-gradient(135deg, rgba(52,211,153,0.05) 0%, transparent 55%);
  opacity: 0; transition: opacity .3s;
}
.mod-card:hover {
  background: rgba(16,185,129,0.05);
  border-color: rgba(52,211,153,0.3);
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(16,185,129,0.1);
}
.mod-card:hover::before { opacity: 1; }
.mod-card__icon {
  width: 3rem; height: 3rem; border-radius: 0.875rem;
  display: flex; align-items: center; justify-content: center; margin-bottom: 0.625rem;
}
.mod-card__num {
  position: absolute; top: 1.375rem; right: 1.375rem;
  font-size: 0.7rem; font-weight: 900; color: rgba(255,255,255,0.07);
  font-family: monospace; letter-spacing: 0.06em;
}
.mod-card__title { font-size: 1.05rem; font-weight: 800; color: #ffffff; margin: 0; }
.mod-card__sub { font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #10b981; margin: 0; }
.mod-card__desc { font-size: 0.875rem; color: #d1fae5; line-height: 1.7; margin: 0; margin-top: 0.25rem; opacity: 0.65; }

/* ── Two-col Teams + Use Cases ─────────────────────────── */
.two-col-section {
  display: grid; grid-template-columns: 1fr 1fr; gap: 5rem;
}
@media (max-width: 900px) { .two-col-section { grid-template-columns: 1fr; gap: 3.5rem; } }

.teams-stack, .uc-stack { display: flex; flex-direction: column; gap: 0.875rem; margin-top: 2.25rem; }

.team-row, .uc-row {
  display: flex; align-items: flex-start; gap: 1.125rem;
  padding: 1.125rem 1.25rem; border-radius: 1rem;
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
  transition: background .2s, border-color .2s, transform .2s;
}
.team-row:hover, .uc-row:hover {
  background: rgba(16,185,129,0.05);
  border-color: rgba(52,211,153,0.25);
  transform: translateX(4px);
}
.team-row__icon, .uc-row__icon {
  width: 2.75rem; height: 2.75rem; border-radius: 0.75rem;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.team-row__title, .uc-row__title { font-size: 0.975rem; font-weight: 800; color: #ffffff; margin-bottom: 0.25rem; }
.team-row__desc, .uc-row__desc { font-size: 0.85rem; color: #d1fae5; line-height: 1.55; opacity: 0.65; }

/* ── Dev Section ───────────────────────────────────────── */
.dev-layout {
  display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start;
}
@media (max-width: 900px) { .dev-layout { grid-template-columns: 1fr; } }

.dev-features { display: flex; flex-direction: column; gap: 1.125rem; margin-top: 2.25rem; }
.dev-feat {
  display: flex; align-items: flex-start; gap: 1rem;
  padding: 1.125rem 1.25rem; border-radius: 1rem;
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
  transition: background .2s, border-color .2s, transform .2s;
}
.dev-feat:hover { background: rgba(16,185,129,0.05); border-color: rgba(16,185,129,0.25); transform: translateX(4px); }
.dev-feat__bullet {
  width: 2.5rem; height: 2.5rem; border-radius: 0.75rem; flex-shrink: 0;
  background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.25);
  display: flex; align-items: center; justify-content: center;
}
.dev-feat__title { font-size: 0.975rem; font-weight: 800; color: #ffffff; margin-bottom: 0.25rem; }
.dev-feat__desc { font-size: 0.85rem; color: #d1fae5; line-height: 1.6; opacity: 0.65; }

.code-panel {
  border-radius: 1.375rem; overflow: hidden;
  border: 1px solid rgba(52,211,153,0.15);
  background: #080e0c;
  box-shadow: 0 25px 70px rgba(0,0,0,0.7), 0 0 0 1px rgba(16,185,129,0.05);
}
.code-panel__bar {
  display: flex; align-items: center; gap: 0.875rem;
  padding: 1rem 1.375rem; background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.code-dots { display: flex; gap: 0.4rem; }
.code-dots span { width: 0.75rem; height: 0.75rem; border-radius: 50%; }
.code-dots span:nth-child(1) { background: rgba(239,68,68,0.7); }
.code-dots span:nth-child(2) { background: rgba(234,179,8,0.7); }
.code-dots span:nth-child(3) { background: rgba(16,185,129,0.8); }
.code-panel__filename { font-size: 0.8rem; color: #ffffff; font-family: monospace; flex: 1; opacity: 0.5; }
.code-panel__tag {
  font-size: 0.72rem; color: #10b981; font-family: monospace;
  background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25);
  padding: 0.15rem 0.75rem; border-radius: 0.5rem; font-weight: 700;
}
.code-body {
  padding: 1.75rem; margin: 0;
  font-size: 0.85rem; line-height: 1.9;
  font-family: 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  overflow-x: auto; color: #e2e8f0;
}
.c { color: #34d399; opacity: 0.5; }
.k { color: #f472b6; }
.t { color: #86efac; }
.s { color: #fde047; }
.m { color: #34d399; font-weight: 700; }
.code-footer {
  display: flex; gap: 1.75rem;
  padding: 1rem 1.375rem; background: rgba(255,255,255,0.02);
  border-top: 1px solid rgba(255,255,255,0.05);
}
.code-stat { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #ffffff; font-weight: 700; opacity: 0.6; }
.code-stat__dot { width: 7px; height: 7px; border-radius: 50%; }
.code-stat__dot--green { background: #10b981; box-shadow: 0 0 6px rgba(16,185,129,0.8); }

/* ── Final CTA ─────────────────────────────────────────── */
.final-cta {
  position: relative; padding: 8rem 0; overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.final-cta__glow {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 80% 70% at 50% 50%, rgba(16,185,129,0.12) 0%, transparent 65%),
    radial-gradient(ellipse 40% 40% at 20% 80%, rgba(52,211,153,0.05) 0%, transparent 60%);
}
.final-cta__inner { text-align: center; position: relative; }
.final-cta__eyebrow { margin-bottom: 2rem; }
.final-cta__title {
  font-size: clamp(2.25rem, 5.5vw, 3.75rem); font-weight: 900;
  color: #ffffff; line-height: 1.12; margin: 0 0 1.25rem; letter-spacing: -0.03em;
}
.final-cta__sub {
  font-size: 1.15rem; color: #d1fae5; max-width: 520px; margin: 0 auto 3rem; line-height: 1.75; opacity: 0.7;
}
.final-cta__btns { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }

/* ── Demo / Book a Session ──────────────────────────────── */
.demo-section {
  background: rgba(16, 185, 129, 0.02);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.demo-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}
@media (max-width: 960px) {
  .demo-layout { grid-template-columns: 1fr; gap: 3.5rem; }
}

/* Content side */
.demo-content { display: flex; flex-direction: column; gap: 1.5rem; }
.demo-title { line-height: 1.2 !important; margin-bottom: 0 !important; }
.demo-byline {
  font-size: 0.75em; font-weight: 600;
  color: #ffffff; opacity: 0.45;
  text-transform: none; letter-spacing: 0;
}
.demo-intro {
  font-size: 1.05rem; color: #ffffff; line-height: 1.75;
  border-left: 3px solid #10b981;
  padding-left: 1rem;
  margin: 0;
}
.demo-intro strong { color: #34d399; font-weight: 800; }
.demo-body {
  font-size: 0.975rem; color: #d1fae5; line-height: 1.8;
  opacity: 0.7; margin: 0;
}

/* Agenda */
.demo-agenda {
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 1.25rem;
  padding: 1.5rem 1.75rem;
}
.demo-agenda__label {
  font-size: 0.78rem; font-weight: 800; letter-spacing: 0.1em;
  text-transform: uppercase; color: #10b981; margin: 0 0 1.25rem;
}
.demo-agenda__list {
  list-style: none; margin: 0; padding: 0;
  display: flex; flex-direction: column; gap: 1rem;
}
.demo-agenda__item {
  display: flex; align-items: flex-start; gap: 0.875rem;
  font-size: 0.9rem; color: #ffffff; line-height: 1.65;
}
.demo-agenda__item strong { color: #34d399; }
.agenda-bullet {
  width: 1.625rem; height: 1.625rem; border-radius: 50%; flex-shrink: 0;
  background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3);
  display: flex; align-items: center; justify-content: center;
  color: #10b981; margin-top: 1px;
}

/* Footer note */
.demo-footer-note {
  display: flex; align-items: center; gap: 0.75rem;
  font-size: 0.95rem; color: #ffffff; font-weight: 600;
  font-style: italic; opacity: 0.6;
}

/* Meta badges */
.demo-meta {
  display: flex; flex-wrap: wrap; gap: 0.875rem; margin-top: 0.5rem;
}
.demo-meta__item {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.5rem 1rem; border-radius: 0.625rem;
  background: rgba(16,185,129,0.07);
  border: 1px solid rgba(16,185,129,0.2);
  font-size: 0.82rem; font-weight: 700; color: #ffffff;
  opacity: 0.85;
}

/* Demo link */
.demo-link {
  color: #34d399; text-decoration: underline; text-underline-offset: 3px;
  transition: opacity .2s;
}
.demo-link:hover { opacity: 0.75; }

/* Calendar side */
.demo-calendar {
  position: sticky;
  top: 2rem;
}
</style>


