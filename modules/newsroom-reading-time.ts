import { defineNuxtModule } from '@nuxt/kit'

/**
 * Derives `reading_time` and `word_count` from the article body while the
 * markdown is being parsed.
 *
 * Reading time has to exist as a stored field rather than a render-time
 * computation because card queries deliberately do not select article bodies —
 * pulling every body into the Newsroom list payload just to count words would
 * dominate the page weight. Handoff §7 also wants reading time generated from
 * the body with an editorial override, which is exactly this split:
 * `reading_time` is machine-written, `reading_time_override` is the human one.
 */

/** Minimal MDC AST node: `[tag, props, ...children]`, or a bare text string. */
type MdcNode = string | [string, Record<string, unknown>, ...MdcNode[]]

/** Tags whose contents are not prose and would inflate the estimate. */
const NON_PROSE_TAGS = new Set(['code', 'pre', 'style', 'script'])

function collectText(node: MdcNode, out: string[]): void {
  if (typeof node === 'string') {
    out.push(node)
    return
  }
  if (!Array.isArray(node)) return

  const [tag, , ...children] = node
  if (typeof tag === 'string' && NON_PROSE_TAGS.has(tag)) return

  for (const child of children) collectText(child, out)
}

export function countWords(body: unknown): number {
  const root = (body as { value?: MdcNode[] })?.value
  if (!Array.isArray(root)) return 0

  const parts: string[] = []
  for (const node of root) collectText(node, parts)

  return parts
    .join(' ')
    .split(/\s+/)
    .filter(word => /[\p{L}\p{N}]/u.test(word)).length
}

export default defineNuxtModule({
  meta: { name: 'newsroom-reading-time' },
  setup(_options, nuxt) {
    nuxt.hook('content:file:afterParse', (ctx: any) => {
      if (ctx.collection?.name !== 'newsroom') return

      const words = countWords(ctx.content?.body)
      ctx.content.word_count = words
      // ~200 wpm, floor of one minute. Mirrors estimateReadingTime() in
      // shared/newsroom.ts; duplicated here because Nuxt modules run outside
      // the app's alias resolution.
      ctx.content.reading_time = Math.max(1, Math.round(words / 200))
    })
  },
})
