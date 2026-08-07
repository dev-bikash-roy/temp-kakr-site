# Developer Acceptance Checklist

## Content

- [ ] The eyebrow, headline, description, CTA labels, and proof line match the approved copy.
- [ ] “Start Building Free” points to `https://pteri.org/Register`.
- [ ] “See How PTERI Works” targets a valid homepage section.
- [ ] No MWEB, cryptocurrency-first, or unsupported security claims appear in the hero.

## Visual integrity

- [ ] Human identity is white or neutral.
- [ ] AI-agent identity is violet.
- [ ] Approval and evidence are green.
- [ ] Step-up is amber.
- [ ] No generic crypto, brain, hacker, robot-face, or padlock imagery has been added.
- [ ] All principal SVG layer IDs remain intact.
- [ ] The final layout uses the real KAKR/PTERI marks supplied by the company.

## Motion

- [ ] The complete sequence takes approximately six seconds.
- [ ] Motion follows identify → verify → decide → act → prove.
- [ ] Animation explains system behavior rather than serving as ambient decoration.
- [ ] Desktop loops no more than twice before holding.
- [ ] Mobile plays once before holding.
- [ ] Off-screen animation pauses.
- [ ] Hidden-tab animation pauses.
- [ ] Reduced-motion mode displays a static completed state.

## Responsive behavior

- [ ] Desktop art is used above the project’s tablet breakpoint.
- [ ] Mobile art is used below the breakpoint.
- [ ] No horizontal overflow exists at 375px, 390px, 430px, 768px, 1024px, 1366px, or 1440px.
- [ ] CTA buttons remain at least 44px high.
- [ ] Hero copy remains HTML and is not embedded in the graphic.
- [ ] The chat widget does not cover the hero CTAs.

## Accessibility

- [ ] The graphic has a concise accessible description.
- [ ] Decorative particles are hidden from assistive technology.
- [ ] Color is not the only indicator of approval or step-up.
- [ ] The completed state remains understandable without animation.
- [ ] The hero contains one page-level H1.

## Performance

- [ ] Artwork remains vector-based.
- [ ] The hero does not ship as an autoplay video or GIF.
- [ ] No large animation dependency is added without justification.
- [ ] The exported asset is compressed and cacheable.
- [ ] The animation does not delay the H1 or primary CTA.
- [ ] Production testing includes Largest Contentful Paint and layout shift review.

## Final proof

- [ ] Provide a 1440px screenshot.
- [ ] Provide a 390px screenshot.
- [ ] Provide the final exported SVG/Rive asset.
- [ ] Provide the exact staging URL.
- [ ] Report the animation library and its added bundle size.
- [ ] Report any remaining browser-specific limitations.
