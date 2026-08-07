# Content migration audit — /blog and /updates

Handoff §8 requires every existing item to be inventoried and classified as
**migrate**, **rewrite**, **archive** or **remove**, and forbids automatically
republishing obsolete Web3-first, BaaS, unsupported MWEB, absolute-security,
performance, compliance or partnership language.

The source of the old content was `data/articles.ts` — a hard-coded TypeScript
array that powered `/blog`, `/updates`, `/tutorials` and `/resources`. It held
five records. That file, along with `composables/useArticles.ts`,
`types/article.ts` and the `ResourceCard` / `ResourceFilters` /
`ResourceEmptyState` components, has been deleted; all five records now live as
markdown in `content/newsroom/`.

> **These classifications are recommendations, not final editorial decisions.**
> Three items are recorded as `status: archived`, which keeps them in the
> repository and out of public view. Restoring any of them is a single Status
> change in `/admin` — no developer, no deployment beyond the normal publish. If
> editorial review disagrees with a call below, it can be reversed without code.

## Inventory and decisions

| # | Slug | Original title | Old destination | Decision | Now |
|---|---|---|---|---|---|
| 1 | `what-is-runtime-authorization-for-ai-agents` | What Is Runtime Authorization for AI Agents? | native `/blog/…` | **Migrate** | Published, `category: engineering`, featured rank 1 |
| 2 | `pteri-playground-overview` | PTERI Playground: Simple, Fast, and Friendly | X only | **Rewrite** | Published, `archive_label: true`, native page + "Original post" link |
| 3 | `pteri-litecoin-announcement` | Introducing PTERI: An Identity and Authorization Layer for Litecoin | X only | **Archive** | `status: archived` |
| 4 | `beyond-smart-contracts-litecoin-infrastructure` | Beyond Smart Contracts: Building Practical Infrastructure on Litecoin | X only | **Archive** | `status: archived` |
| 5 | `why-proof-of-work-still-matters` | Why Proof-of-Work Still Matters for Trustworthy Infrastructure | X only | **Archive** | `status: archived` |

Nothing was classified **remove**: every record is preserved in version control,
so nothing is unrecoverable.

## Reasoning

### 1. Migrate — runtime authorization explainer

The only item with a real article body, current positioning, and appropriately
hedged technical claims (its code sample was already labelled "pseudocode —
illustrative only"). Body copy is substantively preserved; it was restructured
into semantic `##`/`###` markdown and a comparison table, and its
`updated_at` was set because the canonical URL changed from `/blog/…` to
`/newsroom/…`. Original `published_at` of 2026-07-24 is preserved.

### 2. Rewrite — PTERI Playground

Retained because the Playground is a real, live surface (`/playground`), so the
item is credible. But the original post pre-dates KAKR's current
identity-and-authorization positioning, so it carries the **From the Archive**
banner and an `archive_note` explaining what is current instead. Its primary CTA
now points at the live Playground rather than at X, and the X post is demoted to
a secondary "Original post" link.

Its `availability: GA` refers to the Playground being available. **This needs
confirmation** — see Known limitations in `handback.md`.

### 3–5. Archive — the Litecoin-era items

All three share the same disqualifying characteristics:

- **Obsolete framing.** Their premise is that the blockchain layer is the product
  story (Litecoin infrastructure, proof-of-work consensus, PTERI-for-Litecoin).
  KAKR's current positioning is identity and authorization security for people,
  AI agents and enterprise systems. Handoff §8 explicitly rules out
  automatically republishing Web3-first language.
- **X was the only destination.** There is no article body to migrate — each
  record was a card pointing at a post on X, which handoff §1 forbids.
- **Unstable imagery.** Every hero image was hot-linked from `pbs.twimg.com`,
  outside KAKR's control and liable to break.
- One was additionally miscategorised as a product update with no availability
  label, which the current schema rejects.

Each archived file contains its own restore instructions and a link to the
original post.

## Consequence for the homepage

`archive_label` items can appear as Newsroom and homepage cards (they carry a
visible badge) but can never be the homepage lead feature or take the
announcement bar. With the decisions above there are **three** published
articles, which satisfies the handoff §8 gate of three reviewed items, so
"Latest from KAKR" renders. Publishing a fourth needs no code change.

## Link preservation

No inbound link breaks:

- `/blog` still resolves and lists the same records, with `rel=canonical`
  pointing at `/newsroom`.
- `/blog/<slug>` 301s to `/newsroom/<slug>` when that article is published, and
  to `/newsroom` otherwise — so the three archived slugs land somewhere useful
  rather than on a 404. Implemented in `server/middleware/blog-redirect.ts`.
- `/updates` and `/tutorials` keep their URLs and now read the shared collection.

See `route-map.md` for the full route and redirect table.
