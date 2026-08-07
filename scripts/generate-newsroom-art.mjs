/**
 * Generates the hero and social images for the seeded newsroom articles.
 *
 * Handoff §9 sets hard requirements these have to meet: a 1600×900 16:9 hero
 * delivered as WebP under 300 KB, a 1200×630 social card with safe text margins,
 * KAKR black/green, and "one clear concept per image". It also rules out generic
 * hooded-hacker photography, robot faces and decorative cryptocurrency coins —
 * which is why these are built from restrained geometry rather than sourced stock.
 *
 * The existing repository images could not be reused as-is: the runtime
 * authorization diagram is 4678×620 (nowhere near 16:9) at 1 MB, and home-og.png
 * is 1536×1024 at 1.4 MB.
 *
 * These are compliant placeholders, not final art direction — see the "Known
 * limitations" section of docs/newsroom/handback.md. Re-run with:
 *   node scripts/generate-newsroom-art.mjs
 */

import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import sharp from 'sharp'

const OUT_DIR = join(process.cwd(), 'public', 'uploads', 'newsroom', '2026', '08')

const BLACK = '#050505'
const GREEN = '#10b981'
const GREEN_SOFT = '#6ee7b7'
const FONT = 'Inter, "Segoe UI", Arial, Helvetica, sans-serif'

/** Shared background: near-black with a single off-centre emerald bloom. */
function background(width, height) {
  return `
    <defs>
      <radialGradient id="bloom" cx="68%" cy="8%" r="78%">
        <stop offset="0%" stop-color="${GREEN}" stop-opacity="0.17" />
        <stop offset="50%" stop-color="${GREEN}" stop-opacity="0.03" />
        <stop offset="100%" stop-color="${GREEN}" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${GREEN}" stop-opacity="0" />
        <stop offset="50%" stop-color="${GREEN}" stop-opacity="0.55" />
        <stop offset="100%" stop-color="${GREEN}" stop-opacity="0" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="${BLACK}" />
    <rect width="${width}" height="${height}" fill="url(#bloom)" />
  `
}

/** Faint grid. Reads as instrumentation rather than decoration. */
function grid(width, height, step = 80) {
  const lines = []
  for (let x = step; x < width; x += step) {
    lines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="#ffffff" stroke-opacity="0.028" stroke-width="1" />`)
  }
  for (let y = step; y < height; y += step) {
    lines.push(`<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="#ffffff" stroke-opacity="0.028" stroke-width="1" />`)
  }
  return lines.join('')
}

/**
 * A horizontal chain of stages with one emphasised. This is the single visual
 * grammar all three heroes share, so the Newsroom grid reads as one system.
 */
function chain({ stages, emphasis, y, centerX, boxW = 258, boxH = 96, gap = 44, scale = 1 }) {
  const total = stages.length * boxW + (stages.length - 1) * gap
  let x = centerX - total / 2
  const parts = []

  stages.forEach((label, index) => {
    const active = index === emphasis
    const stroke = active ? 'rgba(16,185,129,0.85)' : 'rgba(255,255,255,0.14)'
    const fill = active ? 'rgba(16,185,129,0.13)' : 'rgba(255,255,255,0.035)'
    const color = active ? GREEN_SOFT : 'rgba(255,255,255,0.72)'

    parts.push(`
      <rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="${18 * scale}"
            fill="${fill}" stroke="${stroke}" stroke-width="${1.5 * scale}" />
      <text x="${x + boxW / 2}" y="${y + boxH / 2 + 8 * scale}" text-anchor="middle"
            font-family='${FONT}' font-size="${27 * scale}" font-weight="600" fill="${color}">${label}</text>
    `)

    if (index < stages.length - 1) {
      const cx = x + boxW
      parts.push(`
        <line x1="${cx + 8 * scale}" y1="${y + boxH / 2}" x2="${cx + gap - 8 * scale}" y2="${y + boxH / 2}"
              stroke="rgba(16,185,129,0.45)" stroke-width="${2 * scale}" />
        <circle cx="${cx + gap - 8 * scale}" cy="${y + boxH / 2}" r="${4 * scale}" fill="${GREEN}" />
      `)
    }

    x += boxW + gap
  })

  return parts.join('')
}

function wordmark(x, y, size = 26) {
  return `
    <text x="${x}" y="${y}" font-family='${FONT}' font-size="${size}" font-weight="800"
          letter-spacing="${size * 0.18}" fill="rgba(255,255,255,0.32)">KAKR LABS</text>
  `
}

/** Wraps a title to a fixed column so the social card never clips its text. */
function wrapText(text, maxChars) {
  const words = text.split(' ')
  const lines = ['']
  for (const word of words) {
    const candidate = lines.at(-1) ? `${lines.at(-1)} ${word}` : word
    if (candidate.length > maxChars && lines.at(-1)) lines.push(word)
    else lines[lines.length - 1] = candidate
  }
  return lines
}

/* ------------------------------------------------------------------ heroes */

function heroSvg({ eyebrow, stages, emphasis }) {
  const W = 1600
  const H = 900

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    ${background(W, H)}
    ${grid(W, H)}
    <text x="${W / 2}" y="300" text-anchor="middle" font-family='${FONT}' font-size="30" font-weight="800"
          letter-spacing="6" fill="${GREEN}">${escapeXml(eyebrow.toUpperCase())}</text>
    <rect x="${W / 2 - 260}" y="336" width="520" height="1.5" fill="url(#rule)" />
    ${chain({ stages, emphasis, y: 420, centerX: W / 2 })}
    ${wordmark(W / 2 - 78, 690)}
  </svg>`
}

/* ------------------------------------------------------------ social cards */

function socialSvg({ eyebrow, title }) {
  const W = 1200
  const H = 630
  // 90px side margins keep the title inside the safe area every platform crops to.
  const lines = wrapText(title, 26)
  const size = lines.length > 2 ? 62 : 72
  const startY = H / 2 - ((lines.length - 1) * size * 1.16) / 2 + size * 0.34

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    ${background(W, H)}
    ${grid(W, H, 60)}
    <text x="90" y="128" font-family='${FONT}' font-size="24" font-weight="800"
          letter-spacing="5" fill="${GREEN}">${escapeXml(eyebrow.toUpperCase())}</text>
    ${lines
      .map(
        (line, index) =>
          `<text x="90" y="${startY + index * size * 1.16}" font-family='${FONT}' font-size="${size}"
                 font-weight="800" fill="#ffffff">${escapeXml(line)}</text>`,
      )
      .join('')}
    <rect x="90" y="${H - 132}" width="200" height="1.5" fill="url(#rule)" />
    ${wordmark(90, H - 78, 24)}
  </svg>`
}

function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/* ----------------------------------------------------------------- targets */

const ARTWORK = [
  {
    slug: 'why-every-ai-agent-needs-mission-control',
    eyebrow: 'Security & AI',
    title: 'Why Every AI Agent Needs Mission Control',
    // The article's own structure: who it is, what it may do, what it costs,
    // who approves, what is left behind.
    stages: ['Identity', 'Authority', 'Limits', 'Approval', 'Evidence'],
    emphasis: 3,
  },
  {
    slug: 'what-is-runtime-authorization-for-ai-agents',
    eyebrow: 'Engineering',
    title: 'What Is Runtime Authorization for AI Agents?',
    stages: ['Authenticate', 'Request', 'Evaluate', 'Decide'],
    emphasis: 2,
  },
  {
    slug: 'pteri-playground-overview',
    eyebrow: 'From the Archive',
    title: 'PTERI Playground: Test Flows Without Production Keys',
    stages: ['Open', 'Configure', 'Run', 'Inspect'],
    emphasis: 2,
  },
]

async function write(path, buffer) {
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, buffer)
  return buffer.length
}

async function main() {
  for (const item of ARTWORK) {
    // Quality 82 lands every hero comfortably under the 300 KB budget while
    // staying visually clean on a 2× display.
    const hero = await sharp(Buffer.from(heroSvg(item))).webp({ quality: 82 }).toBuffer()
    const heroBytes = await write(join(OUT_DIR, `${item.slug}-hero.webp`), hero)

    // Social cards stay PNG: some crawlers still do not fetch WebP OG images.
    const social = await sharp(Buffer.from(socialSvg(item))).png({ compressionLevel: 9 }).toBuffer()
    const socialBytes = await write(join(OUT_DIR, `${item.slug}-social.png`), social)

    const kb = bytes => `${(bytes / 1024).toFixed(0)} KB`
    console.log(`${item.slug}\n  hero   1600x900  ${kb(heroBytes)}\n  social 1200x630  ${kb(socialBytes)}`)

    if (heroBytes > 300 * 1024) {
      throw new Error(`${item.slug} hero exceeds the 300 KB budget in handoff §9`)
    }
  }
}

await main()
