# PTERI Hero Motion Specification

## Objective

Explain a single product idea in approximately six seconds:

> A person or AI agent requests an action. PTERI verifies identity, authority, policy, and context. An approved action executes and creates evidence.

Motion must clarify the process. It must not behave as decorative cyberpunk ambience.

## Master timeline

### 0.0–0.6 seconds — Establish

- Fade `background-grid` from 0% to 100% opacity.
- Fade particles to a maximum of 35% opacity.
- Keep the PTERI engine visible at approximately 45% intensity.
- Use ease-out. Do not scale the entire composition.

### 0.6–1.5 seconds — Identify

- Fade and translate `human-identity` 18px from the left.
- Introduce `agent-identity` 120ms later with the same motion.
- Draw `human-signal-path` and `agent-signal-path` toward PTERI.
- Move each signal dot along its corresponding path.
- Violet must remain exclusive to the AI-agent path.

### 1.5–2.7 seconds — Verify

Activate these rings in order:

1. `identity-ring`
2. `authority-ring`
3. `policy-ring`
4. `context-ring`

For each ring:

- Opacity: 20% to 90% to final design opacity.
- Scale: 96% to 100%.
- Duration: 240–320ms.
- Offset each ring by approximately 160ms.

Pulse `pteri-engine` once from 98% to 102% to 100%. Avoid bounce or elastic easing.

### 2.7–3.6 seconds — Decide

- Draw `approved-path` toward the approval card.
- Reveal `decision-approved` using opacity and a 10px rightward translation.
- Briefly reveal `decision-step-up` at 50–65% opacity to communicate that conditional approval exists.
- Do not animate a denial path in the default loop.

### 3.6–4.7 seconds — Act

- Illuminate `enterprise-action`.
- Move a single green signal from the approval card toward the enterprise action.
- Use one small verification pulse. Do not add explosions, flares, or continuous rotation.

### 4.7–5.5 seconds — Prove

- Draw `evidence-connection`.
- Reveal `evidence-record` using a 12px upward translation and opacity.
- Draw the checkmark and evidence lines.
- Hold the completed state.

### 5.5–6.0 seconds — Hold

- Stop all moving signals.
- Keep the approved state and evidence visible.
- If looping, cross-fade back to the initial state over 350ms.

## Playback behavior

- Desktop: autoplay when at least 40% of the hero graphic is visible.
- Pause when the animation is off-screen or the browser tab is hidden.
- Default loop count: two. After two loops, hold the completed state.
- Mobile: play once and hold.
- Do not start on hover; hover may reveal labels only.

## Interactive states

If implemented in Rive or a state-machine-capable runtime, support:

- `idle`
- `identifying`
- `verifying`
- `approved`
- `step_up`
- `denied`
- `evidence_created`
- `reduced_motion`

The default marketing sequence is:

`idle → identifying → verifying → approved → evidence_created`

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- Do not animate signals, rings, particles, translation, or scaling.
- Display the final approved state immediately.
- Keep the evidence record visible.
- Hide or freeze decorative particles.

## Easing

Recommended:

- Standard movement: `cubic-bezier(0.22, 1, 0.36, 1)`
- Signal travel: `cubic-bezier(0.4, 0, 0.2, 1)`
- Fade: `ease-out`

Avoid:

- Bounce
- Elastic
- Spring overshoot
- Fast rotation
- Continuous pulsing

## Export

SVGator:

- Export responsive SVG.
- Use JavaScript animation mode when scroll, visibility, or interaction controls are required.
- Preserve element IDs.
- Do not rasterize vectors.

Rive:

- Keep artboard bounds tight.
- Expose state-machine inputs only for real integration needs.
- Provide a static SVG fallback.
