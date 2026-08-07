# PTERI Hero Animation Production Kit

This kit translates the approved KAKR Labs hero concept into developer-ready source artwork and motion instructions.

## Included files

- `pteri-hero-desktop.svg` — layered desktop source with stable element IDs.
- `pteri-hero-mobile.svg` — simplified vertical mobile source.
- `motion-spec.md` — SVGator/Rive animation timeline and interaction states.
- `integration-example.html` — framework-neutral responsive integration example.
- `developer-acceptance-checklist.md` — implementation and QA requirements.

## Recommended workflow

1. Import the desktop SVG into Figma only if visual cleanup is required.
2. Preserve all layer IDs during cleanup.
3. Import the SVG into SVGator.
4. Animate the layers according to `motion-spec.md`.
5. Export a responsive JavaScript-powered SVG.
6. Keep the supplied source SVG as the static reduced-motion fallback.
7. Implement the exported asset using the integration rules in this kit.

## Visual rules

- Green represents verification, approval, and trusted evidence.
- Violet represents AI-agent identity and delegated authority.
- White represents people and human identity.
- Amber represents step-up approval.
- Red should be used only for a denied or revoked state.
- Do not add cryptocurrency imagery, generic padlocks, brains, robots, hackers, or heavy 3D effects.
- Do not embed marketing copy into the SVG. The website headline, paragraph, and buttons remain accessible HTML.

## Layer contract

The developer or motion designer must retain these principal IDs:

- `background-grid`
- `background-particles`
- `human-identity`
- `human-signal`
- `human-signal-path`
- `human-signal-dot`
- `agent-identity`
- `agent-signal`
- `agent-signal-path`
- `agent-signal-dot`
- `pteri-engine`
- `identity-ring`
- `authority-ring`
- `policy-ring`
- `context-ring`
- `decision-approved`
- `decision-step-up`
- `enterprise-action`
- `evidence-record`
- `evidence-connection`

These IDs form the integration contract for animation and future event-driven states.
