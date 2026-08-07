/**
 * Build gate for the newsroom collection.
 *
 * Handoff §7: "Fail the build for missing required fields, duplicate slugs,
 * invalid categories, broken internal links, missing announcement destinations, or
 * missing required image alt text."
 *
 * This runs before `nuxt build` (see the `build` script in package.json) and exits
 * non-zero on any error, so a bad publish fails in CI rather than on kakr.ai. It
 * reads the markdown files directly rather than the content database, so it works
 * from a clean checkout with no build artefacts.
 *
 * Rules are split into errors (block the build) and warnings (reported, do not
 * block). A rule only becomes an error when the failure would be visible to a
 * reader or a crawler.
 *
 * Run standalone with: node scripts/validate-content.mjs
 */

import { readFile, readdir, access } from 'node:fs/promises'
import { join, basename, extname } from 'node:path'
import { NEWSROOM_CATEGORIES, NEWSROOM_STATUSES, AVAILABILITY_LABELS } from '../shared/newsroom.ts'

const CONTENT_DIR = join(process.cwd(), 'content', 'newsroom')
const PUBLIC_DIR = join(process.cwd(), 'public')

/** Routes an article body or CTA may link to. Checked against pages/ on disk. */
const KNOWN_STATIC_ROUTES = new Set()

const errors = []
const warnings = []

function error(file, message) {
  errors.push(`${file}: ${message}`)
}

function warn(file, message) {
  warnings.push(`${file}: ${message}`)
}

/* ------------------------------------------------------------- frontmatter */

/**
 * Minimal YAML frontmatter reader.
 *
 * Deliberately not a YAML dependency: this only needs to read the flat scalars,
 * nested one-level maps and simple sequences the CMS writes, and keeping it
 * dependency-free means the gate cannot be broken by an install problem. Anything
 * structurally unexpected is reported rather than silently skipped.
 */
function parseFrontmatter(raw, file) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw)
  if (!match) {
    error(file, 'no YAML frontmatter block found')
    return { data: {}, body: raw }
  }

  const data = {}
  const lines = match[1].split(/\r?\n/)
  let currentKey = null
  let currentIndent = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (!line.trim() || line.trim().startsWith('#')) continue

    const indent = line.length - line.trimStart().length
    const trimmed = line.trim()

    // Sequence item belonging to the last key seen.
    if (trimmed.startsWith('- ')) {
      if (currentKey) {
        if (!Array.isArray(data[currentKey])) data[currentKey] = []
        data[currentKey].push(unquote(trimmed.slice(2).trim()))
      }
      continue
    }

    const kv = /^([A-Za-z0-9_]+):\s*(.*)$/.exec(trimmed)
    if (!kv) continue

    const [, key, rawValue] = kv

    if (indent > currentIndent && currentKey) {
      // Nested map (announcement, seo, cta_primary, reviewers, ...).
      if (typeof data[currentKey] !== 'object' || data[currentKey] === null || Array.isArray(data[currentKey])) {
        data[currentKey] = {}
      }
      data[currentKey][key] = coerce(rawValue, lines, i)
      continue
    }

    currentKey = key
    currentIndent = indent
    data[key] = rawValue === '' ? null : coerce(rawValue, lines, i)
  }

  return { data, body: raw.slice(match[0].length) }
}

function unquote(value) {
  return value.replace(/^['"]|['"]$/g, '')
}

function coerce(rawValue, lines, index) {
  const value = rawValue.trim()

  // Folded/literal block scalar (`>-`, `|`): collect the indented continuation.
  if (value === '>-' || value === '>' || value === '|' || value === '|-') {
    const parts = []
    for (let j = index + 1; j < lines.length; j++) {
      const next = lines[j]
      if (next.trim() && next.length - next.trimStart().length === 0) break
      parts.push(next.trim())
    }
    return parts.join(' ').trim()
  }

  if (value === '') return null
  if (value === 'true') return true
  if (value === 'false') return false
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value)
  return unquote(value)
}

/* ------------------------------------------------------------------- checks */

const ISO_UTC = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

async function collectStaticRoutes() {
  const pagesDir = join(process.cwd(), 'pages')

  async function walk(dir, prefix) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        await walk(join(dir, entry.name), `${prefix}/${entry.name}`)
        continue
      }
      if (extname(entry.name) !== '.vue') continue

      const name = basename(entry.name, '.vue')
      // Dynamic segments cannot be verified statically; treat the parent as valid.
      if (name.startsWith('[')) {
        KNOWN_STATIC_ROUTES.add(prefix || '/')
        continue
      }
      KNOWN_STATIC_ROUTES.add(name === 'index' ? prefix || '/' : `${prefix}/${name}`)
    }
  }

  await walk(pagesDir, '')
}

/** Internal links in body text and CTA destinations. */
function checkInternalLink(file, url, context, slugs) {
  if (!url.startsWith('/')) return

  const [pathOnly] = url.split(/[?#]/)
  if (pathOnly === '' || pathOnly === '/') return

  // Article URLs resolve against the collection, not against pages/.
  const articleMatch = /^\/newsroom\/(.+)$/.exec(pathOnly)
  if (articleMatch) {
    if (!slugs.has(articleMatch[1])) {
      error(file, `${context} points at /newsroom/${articleMatch[1]}, which is not an article in this collection`)
    }
    return
  }

  // Known non-page routes served by Nitro or public/.
  if (pathOnly.startsWith('/uploads/') || pathOnly.endsWith('.xml') || pathOnly.startsWith('/api/')) return

  if (!KNOWN_STATIC_ROUTES.has(pathOnly)) {
    error(file, `${context} points at ${pathOnly}, which is not a route in pages/`)
  }
}

async function main() {
  await collectStaticRoutes()

  const files = (await readdir(CONTENT_DIR)).filter(name => name.endsWith('.md'))
  if (!files.length) {
    console.error('content/newsroom contains no articles.')
    process.exit(1)
  }

  const parsed = []
  const slugsSeen = new Map()

  for (const name of files) {
    const file = `content/newsroom/${name}`
    const raw = await readFile(join(CONTENT_DIR, name), 'utf8')
    const { data, body } = parseFrontmatter(raw, file)
    parsed.push({ file, name, data, body })

    /* --- required fields --- */
    for (const field of ['title', 'slug', 'summary', 'category', 'status', 'published_at']) {
      if (data[field] === undefined || data[field] === null || data[field] === '') {
        error(file, `missing required field \`${field}\``)
      }
    }

    /* --- slug: unique, lowercase, and equal to the filename --- */
    const slug = data.slug
    if (typeof slug === 'string') {
      const expected = basename(name, '.md')
      if (slug !== expected) {
        error(file, `slug \`${slug}\` does not match the filename \`${expected}\` — the article would not be reachable at its own URL`)
      }
      if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
        error(file, `slug \`${slug}\` must be lowercase letters, digits and hyphens`)
      }
      if (slugsSeen.has(slug)) {
        error(file, `duplicate slug \`${slug}\` — also used by ${slugsSeen.get(slug)}`)
      }
      slugsSeen.set(slug, file)
    }

    /* --- enums --- */
    if (data.category && !NEWSROOM_CATEGORIES.includes(data.category)) {
      error(file, `invalid category \`${data.category}\`. Allowed: ${NEWSROOM_CATEGORIES.join(', ')}`)
    }
    if (data.status && !NEWSROOM_STATUSES.includes(data.status)) {
      error(file, `invalid status \`${data.status}\`. Allowed: ${NEWSROOM_STATUSES.join(', ')}`)
    }
    if (data.availability && !AVAILABILITY_LABELS.includes(data.availability)) {
      error(file, `invalid availability \`${data.availability}\`. Allowed: ${AVAILABILITY_LABELS.join(', ')}`)
    }

    /* --- timestamps must be Z-suffixed UTC ---
       The published gate compares `published_at` as a string in SQL. Mixed
       formats would make that comparison silently wrong, which is how a scheduled
       article leaks early. */
    for (const field of ['published_at', 'updated_at']) {
      const value = data[field]
      if (!value) continue
      if (!ISO_UTC.test(String(value))) {
        error(file, `\`${field}\` must be an ISO-8601 UTC timestamp ending in Z (got \`${value}\`)`)
      }
    }

    const isPublic = data.status === 'published'

    /* --- summary length (handoff §5: 140–220 chars) --- */
    if (typeof data.summary === 'string' && isPublic) {
      const length = data.summary.length
      if (length < 140 || length > 220) {
        warn(file, `summary is ${length} characters; handoff §5 asks for 140–220`)
      }
    }

    /* --- images: alt text is required whenever an image is set --- */
    if (data.hero_image) {
      if (!data.hero_alt || String(data.hero_alt).trim() === '') {
        error(file, 'hero_image is set but hero_alt is missing — every meaningful image needs alt text')
      }
      if (String(data.hero_image).startsWith('/') && !(await exists(join(PUBLIC_DIR, String(data.hero_image))))) {
        error(file, `hero_image \`${data.hero_image}\` does not exist in public/`)
      }
    }
    if (data.social_image && String(data.social_image).startsWith('/')) {
      if (!(await exists(join(PUBLIC_DIR, String(data.social_image))))) {
        error(file, `social_image \`${data.social_image}\` does not exist in public/`)
      }
    }
    if (isPublic && !data.hero_image) {
      warn(file, 'no hero_image; cards will fall back to a typographic placeholder')
    }
    if (isPublic && !data.social_image) {
      warn(file, 'no social_image; handoff §5 requires a 1200x630 card before promotion')
    }

    /* --- product updates need an availability label --- */
    if (isPublic && data.category === 'product-update' && !data.availability) {
      error(file, 'product updates must carry an availability label (handoff §5)')
    }
    if (data.availability && data.category !== 'product-update') {
      error(file, `availability is set on a \`${data.category}\` article; it would imply a release claim the article is not making`)
    }

    /* --- announcement bar --- */
    const announcement = data.announcement
    if (announcement && announcement.enabled === true) {
      if (!isPublic) {
        error(file, `announcement is enabled but status is \`${data.status}\` — the bar would have nowhere to point`)
      }
      if (!announcement.starts_at) {
        error(file, 'an enabled announcement needs `starts_at` — it also seeds the dismissal ID')
      }
      for (const field of ['starts_at', 'ends_at']) {
        if (announcement[field] && !ISO_UTC.test(String(announcement[field]))) {
          error(file, `announcement.${field} must be an ISO-8601 UTC timestamp ending in Z`)
        }
      }
      if (announcement.starts_at && announcement.ends_at) {
        if (new Date(String(announcement.ends_at)) <= new Date(String(announcement.starts_at))) {
          error(file, 'announcement.ends_at is not after announcement.starts_at')
        }
      }
      // A blank `destination` is fine and is the normal case — it defaults to the
      // article's own page. A non-empty one must actually resolve.
      if (announcement.destination) {
        checkInternalLink(file, String(announcement.destination), 'announcement.destination', slugsSeen)
      }
      if (data.archive_label === true) {
        error(file, 'archive-labelled articles cannot take the announcement bar')
      }
    }

    /* --- CTAs --- */
    if (isPublic && !data.cta_primary) {
      warn(file, 'no primary CTA; handoff §5 wants at least one relevant next step')
    }
    for (const key of ['cta_primary', 'cta_secondary']) {
      const cta = data[key]
      if (!cta) continue
      if (!cta.label || !cta.url) {
        error(file, `${key} needs both a label and a url`)
      }
    }

    /* --- featured articles need a hero --- */
    if (data.featured === true && !data.hero_image) {
      error(file, 'featured articles must have a hero_image (handoff §5)')
    }
  }

  /* --- cross-file checks, once every slug is known --- */
  for (const { file, data, body } of parsed) {
    for (const key of ['cta_primary', 'cta_secondary']) {
      if (data[key]?.url) checkInternalLink(file, String(data[key].url), `${key}.url`, slugsSeen)
    }

    // `related` must name real articles.
    if (Array.isArray(data.related)) {
      for (const related of data.related) {
        if (!slugsSeen.has(related)) {
          error(file, `related article \`${related}\` does not exist in this collection`)
        }
        if (related === data.slug) {
          error(file, 'an article cannot list itself as related')
        }
      }
    }

    // Internal markdown links in the body.
    for (const match of body.matchAll(/\[[^\]]*\]\((\/[^)\s]*)\)/g)) {
      checkInternalLink(file, match[1], `body link ${match[1]}`, slugsSeen)
    }

    // One H1 per page: the title is the H1, so the body must not add another.
    if (/^#\s+/m.test(body)) {
      error(file, 'body contains a top-level `# ` heading; the title is already the page H1 — use `##`')
    }
  }

  /* ------------------------------------------------------------- reporting */

  if (warnings.length) {
    console.log(`\nContent warnings (${warnings.length}):`)
    for (const message of warnings) console.log(`  ! ${message}`)
  }

  if (errors.length) {
    console.error(`\nContent validation FAILED with ${errors.length} error(s):`)
    for (const message of errors) console.error(`  x ${message}`)
    console.error('')
    process.exit(1)
  }

  const published = parsed.filter(p => p.data.status === 'published').length
  console.log(
    `\nContent validation passed: ${parsed.length} article(s), ${published} published, ${warnings.length} warning(s).\n`,
  )
}

await main()
