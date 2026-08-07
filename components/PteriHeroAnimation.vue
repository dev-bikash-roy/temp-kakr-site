<template>
  <!-- Responsive PTERI hero animation
       Desktop SVG: GSAP timeline, up to 2 loops then hold.
       Mobile SVG:  play once then hold.
       Reduced motion: static completed state shown immediately.
       Off-screen / hidden tab: animation paused.
  -->
  <div
    ref="wrapperEl"
    class="pteri-hero-anim"
    :aria-label="$t ? undefined : accessibleLabel"
    role="img"
  >
    <!-- Accessible description for screen readers -->
    <span class="sr-only">{{ accessibleLabel }}</span>

    <!-- KAKR Labs brand mark — small corner badge, decorative -->
    <img
      src="/kakrlabs-logo.png"
      alt=""
      aria-hidden="true"
      class="pteri-hero-anim__badge"
      width="32"
      height="32"
      loading="lazy"
    />

    <!-- ── Desktop artwork ── shown above 768px -->
    <div class="pteri-hero-anim__desktop" aria-hidden="true">
      <svg
        ref="desktopSvgEl"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid meet"
        class="pteri-hero-anim__svg"
        focusable="false"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ph-bg-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#07100e"/>
            <stop offset="0.5" stop-color="#030706"/>
            <stop offset="1" stop-color="#06110d"/>
          </linearGradient>
          <radialGradient id="ph-engine-glow">
            <stop offset="0" stop-color="#27d69b" stop-opacity=".28"/>
            <stop offset=".5" stop-color="#27d69b" stop-opacity=".08"/>
            <stop offset="1" stop-color="#27d69b" stop-opacity="0"/>
          </radialGradient>
          <!-- Tighter, brighter glow that hugs just the logo mark, distinct
               from the large ambient engine-aura shared by the whole hexagon -->
          <radialGradient id="ph-logo-glow">
            <stop offset="0" stop-color="#5af0bc" stop-opacity=".55"/>
            <stop offset=".55" stop-color="#27d69b" stop-opacity=".22"/>
            <stop offset="1" stop-color="#27d69b" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="ph-engine-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#164b3b"/>
            <stop offset="1" stop-color="#082019"/>
          </linearGradient>
          <pattern id="ph-grid-pattern" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M72 0H0V72" fill="none" stroke="#b8c9c3" stroke-opacity=".055"/>
          </pattern>
          <filter id="ph-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="10" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="ph-small-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <marker id="ph-arrow-green" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M1 1l10 5-10 5" fill="none" stroke="#27d69b" stroke-width="1.5"/>
          </marker>
          <marker id="ph-arrow-violet" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M1 1l10 5-10 5" fill="none" stroke="#8b7cff" stroke-width="1.5"/>
          </marker>
        </defs>

        <!-- Background -->
        <g id="background">
          <rect width="1600" height="900" fill="url(#ph-bg-gradient)"/>
          <rect id="background-grid" width="1600" height="900" fill="url(#ph-grid-pattern)" opacity="0"/>
          <circle cx="835" cy="445" r="390" fill="url(#ph-engine-glow)"/>
          <!-- Decorative particles — aria-hidden already on parent SVG -->
          <g id="background-particles" fill="#27d69b" opacity="0">
            <circle cx="144" cy="160" r="2" opacity=".35"/>
            <circle cx="276" cy="735" r="1.5" opacity=".26"/>
            <circle cx="470" cy="120" r="1.5" opacity=".24"/>
            <circle cx="1228" cy="154" r="2" opacity=".3"/>
            <circle cx="1435" cy="690" r="1.5" opacity=".24"/>
            <circle cx="1510" cy="310" r="2" opacity=".18"/>
          </g>
        </g>

        <!-- Human identity — starts translated left, faded -->
        <g id="human-identity" transform="translate(185 285)" opacity="0">
          <circle r="88" fill="#07100e" stroke="#e7efec" stroke-opacity=".35"/>
          <circle r="70" fill="none" stroke="#f4f7f6" stroke-width="2"/>
          <circle cy="-18" r="20" fill="none" stroke="#f4f7f6" stroke-width="3"/>
          <path d="M-38 43c7-29 25-43 38-43s31 14 38 43" fill="none" stroke="#f4f7f6" stroke-width="3" stroke-linecap="round"/>
          <text y="125" fill="#f4f7f6" font-family="Inter,Arial,sans-serif" font-size="18" text-anchor="middle" letter-spacing="2">PERSON</text>
        </g>

        <!-- AI-agent identity — starts translated left, faded -->
        <g id="agent-identity" transform="translate(185 620)" opacity="0">
          <circle r="88" fill="#0c0a22" stroke="#8b7cff" stroke-opacity=".5"/>
          <circle r="70" fill="none" stroke="#8b7cff" stroke-width="2"/>
          <path d="M0-34l34 20v40L0 46l-34-20v-40z" fill="none" stroke="#8b7cff" stroke-width="3"/>
          <circle cx="0" cy="-34" r="7" fill="#0c0a22" stroke="#8b7cff" stroke-width="3"/>
          <circle cx="34" cy="-14" r="7" fill="#0c0a22" stroke="#8b7cff" stroke-width="3"/>
          <circle cx="34" cy="26" r="7" fill="#0c0a22" stroke="#8b7cff" stroke-width="3"/>
          <circle cx="-34" cy="26" r="7" fill="#0c0a22" stroke="#8b7cff" stroke-width="3"/>
          <circle cx="-34" cy="-14" r="7" fill="#0c0a22" stroke="#8b7cff" stroke-width="3"/>
          <text y="125" fill="#b7afff" font-family="Inter,Arial,sans-serif" font-size="18" text-anchor="middle" letter-spacing="2">AI AGENT</text>
        </g>

        <!-- Human signal path + dot -->
        <g id="human-signal" opacity="0">
          <path id="human-signal-path" d="M275 285H430C500 285 505 383 580 383H640" fill="none" stroke="#dce7e3" stroke-opacity=".55" stroke-width="2.5" marker-end="url(#ph-arrow-green)"/>
          <circle id="human-signal-dot" cx="275" cy="285" r="6" fill="#f4f7f6" filter="url(#ph-small-glow)"/>
        </g>

        <!-- Agent signal path + dot -->
        <g id="agent-signal" opacity="0">
          <path id="agent-signal-path" d="M275 620H430C500 620 505 507 580 507H640" fill="none" stroke="#8b7cff" stroke-opacity=".65" stroke-width="2.5" marker-end="url(#ph-arrow-violet)"/>
          <circle id="agent-signal-dot" cx="275" cy="620" r="6" fill="#8b7cff" filter="url(#ph-small-glow)"/>
        </g>

        <!-- PTERI engine — starts at ~45% intensity, rings start hidden -->
        <g id="pteri-engine" transform="translate(800 445)">
          <circle id="engine-aura" r="260" fill="url(#ph-engine-glow)"/>
          <circle id="context-ring" r="220" fill="none" stroke="#27d69b" stroke-opacity=".13" stroke-width="1.5" stroke-dasharray="3 12" opacity="0" transform="scale(0.96)"/>
          <circle id="policy-ring" r="184" fill="none" stroke="#27d69b" stroke-opacity=".2" stroke-width="1.5" opacity="0" transform="scale(0.96)"/>
          <circle id="authority-ring" r="150" fill="none" stroke="#27d69b" stroke-opacity=".28" stroke-width="1.5" opacity="0" transform="scale(0.96)"/>
          <circle id="identity-ring" r="118" fill="none" stroke="#27d69b" stroke-opacity=".45" stroke-width="2" opacity="0" transform="scale(0.96)"/>
          <!-- Single hexagon frame. Previously there were two nested hexagons
               (engine-outer + engine-inner); combined with the cube logo's own
               hexagonal silhouette that made three nested hexagons whose
               slightly different aspect ratios left uneven gaps, which read as
               the logo being off-centre. One frame + one logo is cleanly
               concentric. Neither old id was animated or part of the SVG layer
               contract in the handoff doc, so merging them is safe. -->
          <path id="engine-outer" d="M0-103l89 51v104L0 103-89 52V-52z" fill="url(#ph-engine-fill)" stroke="#5af0bc" stroke-opacity=".7" stroke-width="2"/>
          <circle id="logo-glow" r="75" fill="url(#ph-logo-glow)"/>
          <image id="pteri-mark" href="/kakrlabs-logo.png" x="-75" y="-75" width="150" height="150" preserveAspectRatio="xMidYMid meet"/>
          <!-- Verification labels at cardinal positions -->
          <g id="identity-label" transform="translate(0 -196)">
            <circle r="27" fill="#07100e" stroke="#27d69b" opacity=".45"/>
            <circle cy="-6" r="7" fill="none" stroke="#eaf3ef" stroke-width="1.6"/>
            <path d="M-12 13c2-10 8-15 12-15s10 5 12 15" fill="none" stroke="#eaf3ef" stroke-width="1.6"/>
            <text y="-39" fill="#a7b8b1" font-family="Inter,Arial,sans-serif" font-size="14" text-anchor="middle" letter-spacing="2">IDENTITY</text>
          </g>
          <g id="authority-label" transform="translate(-196 0)">
            <circle r="27" fill="#07100e" stroke="#27d69b" opacity=".45"/>
            <path d="M-12 8V-7l8 7 5-12 6 12 8-7V8z" fill="none" stroke="#eaf3ef" stroke-width="1.6"/>
            <text x="-43" y="5" fill="#a7b8b1" font-family="Inter,Arial,sans-serif" font-size="14" text-anchor="end" letter-spacing="2">AUTHORITY</text>
          </g>
          <g id="policy-label" transform="translate(196 0)">
            <circle r="27" fill="#07100e" stroke="#27d69b" opacity=".45"/>
            <path d="M0-15l13 6v10c0 10-6 16-13 20-7-4-13-10-13-20V-9z" fill="none" stroke="#eaf3ef" stroke-width="1.6"/>
            <path d="M-6 2l4 4 8-10" fill="none" stroke="#27d69b" stroke-width="2"/>
            <text y="-39" fill="#a7b8b1" font-family="Inter,Arial,sans-serif" font-size="14" text-anchor="middle" letter-spacing="2">POLICY</text>
          </g>
          <g id="context-label" transform="translate(0 196)">
            <circle r="27" fill="#07100e" stroke="#27d69b" opacity=".45"/>
            <circle cx="-8" cy="-5" r="4" fill="none" stroke="#eaf3ef" stroke-width="1.6"/>
            <circle cx="9" cy="-7" r="4" fill="none" stroke="#eaf3ef" stroke-width="1.6"/>
            <circle cy="10" r="4" fill="none" stroke="#eaf3ef" stroke-width="1.6"/>
            <text y="48" fill="#a7b8b1" font-family="Inter,Arial,sans-serif" font-size="14" text-anchor="middle" letter-spacing="2">CONTEXT</text>
          </g>
        </g>

        <!-- Approved decision path + card — starts hidden -->
        <g id="decision-approved" opacity="0">
          <path id="approved-path" d="M1045 445H1160" fill="none" stroke="#27d69b" stroke-width="3" marker-end="url(#ph-arrow-green)"/>
          <circle cx="1095" cy="445" r="6" fill="#27d69b" filter="url(#ph-small-glow)"/>
          <g transform="translate(1255 445)">
            <rect x="-95" y="-54" width="190" height="108" rx="18" fill="#07110e" stroke="#27d69b" stroke-opacity=".7"/>
            <circle cx="-51" r="23" fill="#09251d" stroke="#27d69b"/>
            <path d="M-61 0l8 8 16-20" fill="none" stroke="#41e5ae" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <text x="-12" y="7" fill="#eaf3ef" font-family="Inter,Arial,sans-serif" font-size="17" font-weight="700">APPROVED</text>
          </g>
        </g>

        <!-- Step-up indicator — amber, shown briefly at lower opacity -->
        <g id="decision-step-up" opacity="0">
          <path id="step-up-path" d="M1045 468c55 0 55 100 112 100h28" fill="none" stroke="#e7a82f" stroke-width="2" stroke-dasharray="7 9"/>
          <text x="1118" y="548" fill="#e7a82f" font-family="Inter,Arial,sans-serif" font-size="14" text-anchor="middle" letter-spacing="1.5">STEP-UP IF REQUIRED</text>
        </g>

        <!-- Enterprise action node — starts hidden -->
        <g id="enterprise-action" transform="translate(1450 355)" opacity="0">
          <circle r="55" fill="#07110e" stroke="#27d69b" stroke-opacity=".55"/>
          <path d="M-28 22h56M-22 22v-38h28v38M8 22V-4h18v26M-12-5h6m-6 10h6m-6 10h6m26-10h6m-6 10h6" fill="none" stroke="#41e5ae" stroke-width="2"/>
          <text y="85" fill="#a7b8b1" font-family="Inter,Arial,sans-serif" font-size="14" text-anchor="middle" letter-spacing="1.5">ENTERPRISE ACTION</text>
        </g>

        <!-- Evidence record — starts hidden -->
        <g id="evidence-record" transform="translate(1450 650)" opacity="0">
          <path d="M-66-78h102l30 30V78H-66z" fill="#07110e" stroke="#27d69b" stroke-opacity=".7"/>
          <path d="M36-78v30h30" fill="none" stroke="#27d69b" stroke-opacity=".7"/>
          <circle cx="-31" cy="-32" r="14" fill="#09251d" stroke="#27d69b"/>
          <path d="M-38-32l5 5 10-12" fill="none" stroke="#41e5ae" stroke-width="2"/>
          <path d="M-6-35h43M-47 2h84M-47 23h64M-47 44h72" stroke="#7d9089" stroke-width="3" stroke-linecap="round"/>
          <text y="108" fill="#a7b8b1" font-family="Inter,Arial,sans-serif" font-size="14" text-anchor="middle" letter-spacing="1.5">EVIDENCE CREATED</text>
        </g>

        <!-- Evidence connection line — starts hidden -->
        <g id="evidence-connection" opacity="0">
          <path d="M1450 410v155" fill="none" stroke="#27d69b" stroke-opacity=".5" stroke-width="2" stroke-dasharray="4 9"/>
          <circle cx="1450" cy="520" r="5" fill="#27d69b" filter="url(#ph-small-glow)"/>
        </g>
      </svg>
    </div>

    <!-- ── Mobile artwork ── shown below 768px -->
    <div class="pteri-hero-anim__mobile" aria-hidden="true">
      <!-- Inline the mobile SVG for CSS animation control -->
      <svg
        ref="mobileSvgEl"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 430 860"
        preserveAspectRatio="xMidYMid meet"
        class="pteri-hero-anim__svg"
        focusable="false"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ph-mobile-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#07110e"/>
            <stop offset="1" stop-color="#020504"/>
          </linearGradient>
          <radialGradient id="ph-mobile-glow">
            <stop offset="0" stop-color="#27d69b" stop-opacity=".25"/>
            <stop offset="1" stop-color="#27d69b" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="ph-mobile-logo-glow">
            <stop offset="0" stop-color="#5af0bc" stop-opacity=".55"/>
            <stop offset=".55" stop-color="#27d69b" stop-opacity=".22"/>
            <stop offset="1" stop-color="#27d69b" stop-opacity="0"/>
          </radialGradient>
          <pattern id="ph-mobile-grid" width="43" height="43" patternUnits="userSpaceOnUse">
            <path d="M43 0H0V43" fill="none" stroke="#b8c9c3" stroke-opacity=".055"/>
          </pattern>
          <filter id="ph-mobile-small-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <g id="mobile-background">
          <rect width="430" height="860" rx="32" fill="url(#ph-mobile-bg)"/>
          <rect width="430" height="860" rx="32" fill="url(#ph-mobile-grid)"/>
        </g>
        <g id="mobile-identities">
          <g id="mobile-human" transform="translate(132 118)">
            <circle r="54" fill="#07100e" stroke="#edf4f1"/>
            <circle cy="-11" r="13" fill="none" stroke="#edf4f1" stroke-width="2"/>
            <path d="M-25 28c5-18 15-27 25-27s20 9 25 27" fill="none" stroke="#edf4f1" stroke-width="2"/>
            <text y="78" fill="#edf4f1" font-family="Inter,Arial,sans-serif" font-size="13" text-anchor="middle" letter-spacing="1.5">PERSON</text>
          </g>
          <g id="mobile-agent" transform="translate(298 118)">
            <circle r="54" fill="#0c0a22" stroke="#8b7cff"/>
            <path d="M0-23l23 13v27L0 30-23 17v-27z" fill="none" stroke="#8b7cff" stroke-width="2"/>
            <circle cx="0" cy="-23" r="5" fill="#0c0a22" stroke="#8b7cff" stroke-width="2"/>
            <circle cx="23" cy="-10" r="5" fill="#0c0a22" stroke="#8b7cff" stroke-width="2"/>
            <circle cx="-23" cy="-10" r="5" fill="#0c0a22" stroke="#8b7cff" stroke-width="2"/>
            <text y="78" fill="#b7afff" font-family="Inter,Arial,sans-serif" font-size="13" text-anchor="middle" letter-spacing="1.5">AI AGENT</text>
          </g>
        </g>
        <g id="mobile-signals">
          <path id="mobile-human-signal" d="M132 180v46c0 25 45 25 83 54" fill="none" stroke="#edf4f1" stroke-opacity=".65" stroke-width="2"/>
          <path id="mobile-agent-signal" d="M298 180v46c0 25-45 25-83 54" fill="none" stroke="#8b7cff" stroke-opacity=".75" stroke-width="2"/>
          <circle cx="215" cy="280" r="6" fill="#27d69b" filter="url(#ph-mobile-small-glow)"/>
        </g>
        <g id="mobile-pteri-engine" transform="translate(215 400)">
          <circle r="140" fill="url(#ph-mobile-glow)"/>
          <circle id="mobile-context-ring" r="105" fill="none" stroke="#27d69b" stroke-opacity=".18" stroke-dasharray="3 10"/>
          <circle id="mobile-policy-ring" r="84" fill="none" stroke="#27d69b" stroke-opacity=".28"/>
          <path id="mobile-engine" d="M0-76l66 38v76L0 76-66 38v-76z" fill="#0a261d" stroke="#27d69b" stroke-width="2"/>
          <circle r="55" fill="url(#ph-mobile-logo-glow)"/>
          <image id="mobile-pteri-mark" href="/kakrlabs-logo.png" x="-55" y="-55" width="110" height="110" preserveAspectRatio="xMidYMid meet"/>
          <g id="mobile-checks" fill="#a7b8b1" font-family="Inter,Arial,sans-serif" font-size="11" letter-spacing="1">
            <!-- Left-side labels anchor "end" so they grow away from the
                 hexagon (leftward) instead of into it — a long word like
                 AUTHORITY was overlapping the hexagon with the default
                 "start" anchor. Right-side labels already grow rightward,
                 away from center, so they keep the default anchor. -->
            <text x="-126" y="-13" text-anchor="end">IDENTITY</text>
            <text x="78" y="-13">POLICY</text>
            <text x="-126" y="17" text-anchor="end">AUTHORITY</text>
            <text x="78" y="17">CONTEXT</text>
          </g>
        </g>
        <g id="mobile-approved">
          <path d="M215 505v82" stroke="#27d69b" stroke-width="2.5"/>
          <circle cx="215" cy="548" r="5" fill="#27d69b" filter="url(#ph-mobile-small-glow)"/>
          <rect x="126" y="587" width="178" height="64" rx="16" fill="#07110e" stroke="#27d69b"/>
          <circle cx="159" cy="619" r="17" fill="#09251d" stroke="#27d69b"/>
          <path d="M151 619l6 6 12-15" fill="none" stroke="#41e5ae" stroke-width="2.5"/>
          <text x="188" y="625" fill="#edf4f1" font-family="Inter,Arial,sans-serif" font-size="16" font-weight="700">APPROVED</text>
        </g>
        <g id="mobile-evidence">
          <path d="M215 651v57" stroke="#27d69b" stroke-opacity=".55" stroke-width="2" stroke-dasharray="4 8"/>
          <rect x="115" y="708" width="200" height="100" rx="16" fill="#07110e" stroke="#27d69b" stroke-opacity=".7"/>
          <!-- Icon centered on top, title + subtitle centered below —
               the previous left-icon + single-line layout ran the text
               past the card's right edge. -->
          <path d="M201 718h28v30h-28zM207 726h16M207 734h13M207 742h10" fill="none" stroke="#41e5ae" stroke-width="1.7"/>
          <text x="215" y="770" fill="#edf4f1" font-family="Inter,Arial,sans-serif" font-size="14" font-weight="700" text-anchor="middle">EVIDENCE CREATED</text>
          <text x="215" y="790" fill="#8da099" font-family="Inter,Arial,sans-serif" font-size="10" text-anchor="middle">Identity · Authority · Action</text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const accessibleLabel = 'A person and an AI agent are verified by PTERI before an enterprise action is approved and verifiable evidence is created.'

const wrapperEl  = ref(null)
const desktopSvgEl = ref(null)
const mobileSvgEl  = ref(null)

// ── helpers ────────────────────────────────────────────────
const sel = (id) => desktopSvgEl.value?.querySelector(`#${id}`)

// Resolve the total path length of an SVG path element
const pathLen = (id) => {
  const el = sel(id)
  return el ? el.getTotalLength() : 0
}

// Measure path length for stroke-dasharray animation (draw-on effect)
const preparePath = (id) => {
  const el = sel(id)
  if (!el) return 0
  const len = el.getTotalLength()
  el.style.strokeDasharray  = len
  el.style.strokeDashoffset = len
  return len
}

// ── state ──────────────────────────────────────────────────
let gsap         = null
let tl           = null        // master GSAP timeline
let loopCount    = 0
const MAX_LOOPS  = 2
let io           = null        // IntersectionObserver
let isVisible    = false
let reducedMotion = false

// ── build the GSAP timeline ────────────────────────────────
function buildTimeline() {
  if (!gsap || !desktopSvgEl.value) return

  // Kill any previous timeline
  if (tl) { tl.kill(); tl = null }

  // Prepare draw-on paths
  preparePath('human-signal-path')
  preparePath('agent-signal-path')
  preparePath('approved-path')

  const ease   = 'cubic-bezier(0.22,1,0.36,1)'   // standard
  const travel = 'power2.inOut'                    // signal travel
  const fadeE  = 'power2.out'

  tl = gsap.timeline({
    paused: true,
    onComplete: handleComplete,
    defaults: { ease: fadeE }
  })

  // ── 0.0–0.6s  ESTABLISH ────────────────────────────────
  tl.to(sel('background-grid'), { opacity: 1, duration: 0.55, ease: fadeE }, 0)
  tl.to(sel('background-particles'), { opacity: 0.35, duration: 0.55, ease: fadeE }, 0)
  // Engine already partially visible (opacity .45 on outer hex), just keep it

  // ── 0.6–1.5s  IDENTIFY ────────────────────────────────
  // Human identity: fade + slide from -18px
  // NOTE: these groups carry a base transform="translate(185 ...)" —
  // GSAP's x/y tweens set an ABSOLUTE translation and overwrite that base
  // offset entirely, so the "from"/"to" values here must include it
  // (185 - 18 = 167 → 185), not just the -18px delta.
  tl.fromTo(sel('human-identity'),
    { opacity: 0, x: 167 },
    { opacity: 1, x: 185, duration: 0.55, ease }, 0.6)

  // Agent identity: same but 120ms later
  tl.fromTo(sel('agent-identity'),
    { opacity: 0, x: 167 },
    { opacity: 1, x: 185, duration: 0.55, ease }, 0.72)

  // Reveal signal groups
  tl.to(sel('human-signal'), { opacity: 1, duration: 0.35, ease: fadeE }, 0.75)
  tl.to(sel('agent-signal'), { opacity: 1, duration: 0.35, ease: fadeE }, 0.85)

  // Draw human signal path
  tl.to(sel('human-signal-path'),
    { strokeDashoffset: 0, duration: 0.65, ease: travel }, 0.75)

  // Draw agent signal path
  tl.to(sel('agent-signal-path'),
    { strokeDashoffset: 0, duration: 0.65, ease: travel }, 0.88)

  // Move signal dots along their paths
  // human dot travels from x=275 to x=640 following the curve; simplify to x-axis lerp
  tl.to(sel('human-signal-dot'),
    { motionPath: { path: sel('human-signal-path'), align: sel('human-signal-path'), alignOrigin: [0.5, 0.5] },
      duration: 0.65, ease: travel }, 0.75)

  tl.to(sel('agent-signal-dot'),
    { motionPath: { path: sel('agent-signal-path'), align: sel('agent-signal-path'), alignOrigin: [0.5, 0.5] },
      duration: 0.65, ease: travel }, 0.88)

  // ── 1.5–2.7s  VERIFY ──────────────────────────────────
  // Illuminate rings in order: identity → authority → policy → context
  // Each: opacity 0.2 → 0.9 → design opacity, scale 0.96 → 1, 280ms, staggered 160ms
  const rings = [
    { id: 'identity-ring',  delay: 1.5  },
    { id: 'authority-ring', delay: 1.66 },
    { id: 'policy-ring',    delay: 1.82 },
    { id: 'context-ring',   delay: 1.98 },
  ]
  rings.forEach(({ id, delay }) => {
    tl.fromTo(sel(id),
      { opacity: 0, scale: 0.96, transformOrigin: 'center center' },
      { opacity: 1, scale: 1, duration: 0.28, ease: 'power2.out' }, delay)
  })

  // Pulse pteri-engine: scale 1 → 1.02 → 1, single, no bounce
  tl.to(sel('pteri-engine'),
    { scale: 1.02, duration: 0.18, ease: 'power2.out', transformOrigin: 'center center' }, 2.18)
  tl.to(sel('pteri-engine'),
    { scale: 1,    duration: 0.22, ease: 'power2.inOut', transformOrigin: 'center center' }, 2.36)

  // ── 2.7–3.6s  DECIDE ──────────────────────────────────
  tl.to(sel('decision-approved'),
    { opacity: 1, x: 0, duration: 0.45, ease }, 2.7)
  // Draw approved path
  tl.to(sel('approved-path'),
    { strokeDashoffset: 0, duration: 0.45, ease: travel }, 2.7)

  // Briefly reveal step-up at 60% opacity
  tl.to(sel('decision-step-up'), { opacity: 0.6, duration: 0.3, ease: fadeE }, 3.0)
  tl.to(sel('decision-step-up'), { opacity: 0,   duration: 0.3, ease: fadeE }, 3.3)

  // ── 3.6–4.7s  ACT ─────────────────────────────────────
  tl.to(sel('enterprise-action'),
    { opacity: 1, duration: 0.45, ease: fadeE }, 3.6)

  // Single small verification pulse on enterprise-action
  tl.to(sel('enterprise-action'),
    { scale: 1.06, duration: 0.18, ease: 'power2.out', transformOrigin: 'center center' }, 4.0)
  tl.to(sel('enterprise-action'),
    { scale: 1,    duration: 0.22, ease: 'power2.inOut', transformOrigin: 'center center' }, 4.18)

  // ── 4.7–5.5s  PROVE ───────────────────────────────────
  tl.to(sel('evidence-connection'),
    { opacity: 1, duration: 0.35, ease: fadeE }, 4.7)
  // Base transform is translate(1450 650) — same absolute-offset caveat as above
  tl.fromTo(sel('evidence-record'),
    { opacity: 0, y: 662 },
    { opacity: 1, y: 650, duration: 0.45, ease }, 4.85)

  // ── 5.5–6.0s  HOLD ────────────────────────────────────
  // Nothing to add — timeline reaches natural end at ~5.5s and holds

  return tl
}

// ── loop / complete handler ───────────────────────────────
function handleComplete() {
  loopCount++
  if (loopCount < MAX_LOOPS) {
    // Cross-fade back to initial state over 350ms then replay
    gsap.to(desktopSvgEl.value, {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.inOut',
      onComplete: () => {
        resetDesktopState()
        gsap.to(desktopSvgEl.value, {
          opacity: 1,
          duration: 0.15,
          ease: 'power1.out',
          onComplete: () => {
            buildTimeline()
            if (isVisible && !document.hidden) tl?.play()
          }
        })
      }
    })
  }
  // After MAX_LOOPS, hold the completed state — nothing else needed
}

// Reset desktop SVG props between loops
function resetDesktopState() {
  if (!desktopSvgEl.value || !gsap) return
  gsap.set(sel('background-grid'),     { opacity: 0 })
  gsap.set(sel('background-particles'),{ opacity: 0 })
  gsap.set(sel('human-identity'),      { opacity: 0, x: 167 })
  gsap.set(sel('agent-identity'),      { opacity: 0, x: 167 })
  gsap.set(sel('human-signal'),        { opacity: 0 })
  gsap.set(sel('agent-signal'),        { opacity: 0 })
  gsap.set(sel('identity-ring'),       { opacity: 0, scale: 0.96, transformOrigin: 'center center' })
  gsap.set(sel('authority-ring'),      { opacity: 0, scale: 0.96, transformOrigin: 'center center' })
  gsap.set(sel('policy-ring'),         { opacity: 0, scale: 0.96, transformOrigin: 'center center' })
  gsap.set(sel('context-ring'),        { opacity: 0, scale: 0.96, transformOrigin: 'center center' })
  gsap.set(sel('decision-approved'),   { opacity: 0, x: 0 })
  gsap.set(sel('decision-step-up'),    { opacity: 0 })
  gsap.set(sel('enterprise-action'),   { opacity: 0 })
  gsap.set(sel('evidence-record'),     { opacity: 0, y: 662 })
  gsap.set(sel('evidence-connection'), { opacity: 0 })
  // Re-prepare draw-on paths
  preparePath('human-signal-path')
  preparePath('agent-signal-path')
  preparePath('approved-path')
}

// ── show final completed state immediately (reduced-motion / fallback) ──
function showCompletedState() {
  if (!desktopSvgEl.value) return

  // If GSAP loaded use it, otherwise use direct style
  const set = gsap
    ? (el, props) => el && gsap.set(el, props)
    : (el, props) => { if (!el) return; Object.assign(el.style, { opacity: props.opacity ?? '' }) }

  set(sel('background-grid'),     { opacity: 1 })
  set(sel('background-particles'),{ opacity: 0 })  // freeze particles in reduced-motion
  set(sel('human-identity'),      { opacity: 1 })
  set(sel('agent-identity'),      { opacity: 1 })
  set(sel('human-signal'),        { opacity: 1 })
  set(sel('agent-signal'),        { opacity: 1 })

  // Restore draw-on paths to fully visible
  const restorePath = (id) => {
    const el = sel(id)
    if (el) { el.style.strokeDasharray = ''; el.style.strokeDashoffset = '' }
  }
  restorePath('human-signal-path')
  restorePath('agent-signal-path')
  restorePath('approved-path')

  set(sel('identity-ring'),       { opacity: 1, scale: 1, transformOrigin: 'center center' })
  set(sel('authority-ring'),      { opacity: 1, scale: 1, transformOrigin: 'center center' })
  set(sel('policy-ring'),         { opacity: 1, scale: 1, transformOrigin: 'center center' })
  set(sel('context-ring'),        { opacity: 1, scale: 1, transformOrigin: 'center center' })
  set(sel('decision-approved'),   { opacity: 1, x: 0 })
  set(sel('decision-step-up'),    { opacity: 0 })
  set(sel('enterprise-action'),   { opacity: 1 })
  set(sel('evidence-record'),     { opacity: 1, y: 650 })
  set(sel('evidence-connection'), { opacity: 1 })
}

// ── mobile: simple CSS-driven reveal (one-shot, no JS animation) ──
function initMobile() {
  if (!mobileSvgEl.value) return
  // Mobile SVG is already in full-completed state in the markup,
  // just fade it in via the CSS class toggle
  mobileSvgEl.value.classList.add('pteri-mobile--ready')
}

// ── visibility & tab tracking ──────────────────────────────
function handleVisibilityChange() {
  if (!tl) return
  document.hidden ? tl.pause() : (isVisible && tl.isActive() !== false && !tl.progress() === 1 && tl.play())
}

function startIfVisible() {
  if (isVisible && !document.hidden && tl && loopCount < MAX_LOOPS) tl.play()
}

// ── lifecycle ──────────────────────────────────────────────
onMounted(async () => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobile = window.matchMedia('(max-width: 767px)').matches

  initMobile()

  if (reducedMotion) {
    // Load GSAP just for set(), then apply final state immediately
    try {
      const mod = await import('gsap')
      gsap = mod.gsap ?? mod.default ?? mod
    } catch (_) { /* no-op */ }
    showCompletedState()
    return
  }

  // Load GSAP + MotionPath plugin
  try {
    const [gsapMod, mpMod] = await Promise.all([
      import('gsap'),
      import('gsap/MotionPathPlugin')
    ])
    gsap = gsapMod.gsap ?? gsapMod.default ?? gsapMod
    const MotionPathPlugin = mpMod.MotionPathPlugin ?? mpMod.default
    gsap.registerPlugin(MotionPathPlugin)
  } catch (err) {
    console.warn('[PteriHeroAnimation] GSAP load failed, showing static state.', err)
    showCompletedState()
    return
  }

  if (isMobile) {
    // Mobile: no JS animation, static completed state
    showCompletedState()
    return
  }

  // Desktop: use IntersectionObserver to trigger when ≥40% visible
  buildTimeline()

  io = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.intersectionRatio >= 0.4
      if (isVisible && !document.hidden && loopCount < MAX_LOOPS) {
        tl?.play()
      } else if (!isVisible) {
        tl?.pause()
      }
    },
    { threshold: [0, 0.4] }
  )
  if (wrapperEl.value) io.observe(wrapperEl.value)

  document.addEventListener('visibilitychange', handleVisibilityChange)
})

onUnmounted(() => {
  tl?.kill()
  io?.disconnect()
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<style scoped>
/* ── Wrapper ── */
.pteri-hero-anim {
  position: relative;
  width: 100%;
  /* Reserve space to avoid CLS — matches the SVG aspect ratios */
  aspect-ratio: 16 / 9;
  /* Keep the artwork contained to this box — never bleed into the copy
     column or the header above, no matter what the parent grid does */
  overflow: hidden;
}

/* ── Desktop SVG: visible above 768px ── */
.pteri-hero-anim__desktop {
  display: block;
  width: 100%;
  height: 100%;
}
.pteri-hero-anim__mobile {
  display: none;
}

/* ── Brand mark: small badge in the top-left corner ── */
.pteri-hero-anim__badge {
  position: absolute;
  top: 4%;
  left: 4%;
  height: clamp(24px, 4vw, 34px);
  width: auto;
  opacity: 1;
  z-index: 2;
  pointer-events: none;
}

/* ── SVG fill container ── */
.pteri-hero-anim__svg {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: visible;
}

/* ── Mobile breakpoint: swap artwork ── */
@media (max-width: 767px) {
  .pteri-hero-anim {
    /* Mobile SVG is 430×860 → ~1:2 aspect ratio */
    aspect-ratio: 430 / 860;
    max-width: 430px;
    margin: 0 auto;
  }
  .pteri-hero-anim__desktop {
    display: none;
  }
  .pteri-hero-anim__mobile {
    display: block;
    width: 100%;
    height: 100%;
  }
}

/* ── Mobile SVG fade-in ── */
.pteri-hero-anim__mobile .pteri-hero-anim__svg {
  opacity: 0;
  transition: opacity 0.6s ease-out;
}
.pteri-hero-anim__mobile .pteri-hero-anim__svg.pteri-mobile--ready {
  opacity: 1;
}

/* ── Reduced motion: skip all transitions ── */
@media (prefers-reduced-motion: reduce) {
  .pteri-hero-anim__mobile .pteri-hero-anim__svg {
    transition: none;
    opacity: 1;
  }
}

/* ── Screen-reader utility ── */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
