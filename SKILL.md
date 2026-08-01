---
name: atelier
description: Axel Ruiz's studio design language for creative front-end work — stark gallery-editorial interfaces wrapped around seeded generative systems. Use this skill whenever building, restyling, or reviewing ANY web-facing creative piece — generative or algorithmic art tools, interactive artifacts, p5.js/canvas sketches, typographic experiments, portfolio or studio landing pages, data-art, single-file demos — even if the user never mentions design, style, or aesthetics. Also use it when the user asks to "make it look gallery-grade", "editorial", "like my other pieces", or "in my style". Produces museum-placard typography, hairline rules, one accent color held in reserve, reproducible seeded systems, and self-contained single-file delivery.
---

# Atelier — the studio standard

This skill encodes a working design language distilled from Axel Ruiz's studio practice
(reference points: ICA Boston wall texts, Dover Street Market signage, Swiss editorial
print). It exists because creative tools built casually read as demos; built under this
canon they read as *works* — pieces a gallery could hang and a client could trust.

The governing idea: **the interface is the gallery, the canvas is the art.** Chrome
recedes into typography and hairline rules so the generated work holds the room. Every
element earns its place or is removed. White space is the primary material; ink is spent
only where structure demands it.

## 1 — Canon (design tokens)

Start every piece from these tokens. Deviate deliberately, never accidentally.

```css
:root {
    --ink:    #111111;   /* near-black filament — text, strong rules, thumbs */
    --paper:  #ffffff;   /* bone-white ground */
    --line:   #e4e4e1;   /* hairline — section dividers, quiet borders */
    --line-strong: #111111; /* structural rules — topbar, panel edge, canvas frame */
    --mute:   #8a8a86;   /* secondary text, metadata */
    --accent: #1f4a2b;   /* ONE accent per piece, held in reserve (see §3) */
    --grotesque: 'Helvetica Neue', 'Inter', Arial, sans-serif;
    --mono: 'Space Mono', 'Courier New', monospace;
}
```

A ready-to-lift stylesheet with all component recipes is in `assets/canon.css` — read it
and inline what the piece needs rather than re-deriving these styles from scratch.

## 2 — Typography is the interface

Type does the work that other design systems delegate to color, icons, and elevation.

- **Two families, two jobs.** The grotesque speaks (labels, buttons, titles); the mono
  records (values, seeds, coordinates, metadata). Never swap the roles.
- **Labels are engraved, not written**: 10.5–13px, weight 600–700, `text-transform:
  uppercase`, letter-spacing 0.14–0.34em. Wider tracking = higher in the hierarchy
  (brand 0.34em, section titles 0.26em, field labels 0.14em).
- **Sizes are tuned, not defaulted.** Half-pixel sizes (10.5px, 11px, 13px) are normal —
  the difference between 11 and 13px is a hierarchy level, so pick deliberately.
- *Italic carries meaning* (a title of a work, the sky register of a landscape) — never
  decoration.
- Set `-webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;` on body.

## 3 — Color discipline: the accent held in reserve

Palette is ink, paper, two greys — and exactly **one** accent hue chosen per piece
(default: forest green `#1f4a2b`, bright variant `#2d6b3f`). The accent is routed to
*rarity*: the checked state, the focused border, the hovered thumb, the one rare word in
the field. It works like the lone bird in the canopy — the eye catches an exception and
the piece feels observed rather than stamped.

**Accent census before shipping:** if the accent appears on more than roughly one element
in ten, it has stopped being an accent — pull it back. Never introduce a second hue; if a
piece truly needs more color, that color belongs *inside the canvas*, not in the chrome.

## 4 — Structure: topbar, stage, panel, placard

The proven armature for an interactive piece:

- **Topbar** — brand (uppercase, 0.34em tracking) left, mono metadata right,
  baseline-aligned, closed underneath by a strong 1px rule. `padding: 18px 28px`.
- **Stage** — the canvas centered in generous padding (≥40px), framed by a 1px strong
  border. An optional sub-perceptual texture (repeating gradient at ≤2% alpha) may keep
  large white fields from going dead — it must be invisible until looked for.
- **Panel** — a fixed-width (~372px) control column, separated by a strong rule, divided
  into sections by hairlines. Each section head carries a mono index in the accent
  (`01`, `02`, …) beside an uppercase title — the numbering says *considered sequence*.
- **Placard** — under the canvas, a museum label: work title (uppercase, tracked), then a
  mono line of provenance — seed, algorithm, dimensions, year. The placard is what makes
  a sketch read as a work; do not omit it.

For non-tool pieces (landing pages, portfolio pages) keep the same skeleton logic:
strong rules divide the page into rooms; each room gets an index and an engraved title;
content sits in white space like work on a wall.

## 5 — Line and surface

- **1px, two weights.** Hairline (`--line`) separates; strong (`--line-strong`) frames.
  There is no third weight and no 2px anything.
- **No border-radius. No box-shadow. No glow. No gradient as decoration.** Depth comes
  from line weight, spacing, and typographic scale — not elevation. Corners are square
  because print is square.
- Backgrounds are paper. Panels are not tinted; sections are separated by rules, not fills.

## 6 — Controls: quiet instruments

Controls read like lab equipment, not app widgets. Exact recipes are in
`assets/canon.css`; the grammar:

- **Sliders** — a 1px track, an 11px square ink thumb, accent on hover. Label row above:
  name (engraved) left, live value (mono) right.
- **Buttons** — paper ground, 1px ink border, engraved label; hover inverts to ink ground
  / paper text. The accent variant outlines in accent and floods on hover. Full-width in
  the panel, gridded in pairs when actions are siblings.
- **Checkboxes** — 16px square, 1px ink border; checked floods accent with a paper check.
- **Seed / text inputs** — mono, centered, 1px strong border; focus swaps the border to
  accent. No outline rings, no glows.

## 7 — Motion: function, never performance

- Transitions 120–160ms on **named properties only** (`background 0.14s, color 0.14s`) —
  never `transition: all`.
- Chrome motion is limited to state confirmation (hover inversion, accent arrival).
  The *canvas* may animate as the work demands; the *frame* never performs.
- No entrance animations, no parallax, no easing showpieces.

## 8 — The generative contract

The engineering carries the same fingerprint as the visuals:

- **Seeded, always.** Composition never touches `Math.random()`. Use a seeded PRNG
  (mulberry32 in `assets/generative.js`) so the same seed yields the same frame,
  exactly. Exploration of seed-space must be navigation, not gambling.
- **The seed is a first-class citizen**: visible in the panel, editable, echoed on the
  placard, embedded in the exported filename (`title_seed-4271.png`).
- **Real algorithms, implemented inline.** Poisson-disk (Bridson) over `random()`
  scatter, Bowyer–Watson Delaunay, Sobel edges, golden-ratio construction — the craft
  should read as deep computational expertise, not a lucky frame. Name the algorithms in
  the header comment and on the placard.
- **Every exposed parameter is a true degree of freedom.** If a slider doesn't visibly
  change the composition, remove it. Group parameters into the numbered sections by what
  they govern (Source, Composition, Type, Ink, Output…).
- **Export is part of the work**: a Download PNG action at 2× pixel density minimum.

`assets/generative.js` bundles the seeded PRNG, a Bridson Poisson-disk sampler, and a
seeded-shuffle — inline them into the piece (single-file delivery, §9) rather than
linking them.

## 9 — Delivery: the self-contained artifact

- **One HTML file.** Inline CSS and JS. Only canonical CDNs allowed (p5.js, Google
  Fonts) — no build step, no server, opens from the filesystem.
- **The header comment is the artist statement**: open the file with a block comment
  naming the piece, the visual language, and the compositional logic — written so a
  reader understands the system before the code.
- Offer a short **concept note** (a separate `.md`) for substantial pieces: the
  philosophy of the system, process-over-product, what the algorithm is asked to do.
  Axel's `lexical-topography.md` is the model — prose that could hang beside the work.

## 10 — Ship checklist

Before presenting any piece, verify:

1. No `border-radius`, no `box-shadow`, no `transition: all`, no decorative gradients
   (sub-2%-alpha texture is the only exception).
2. Accent census passes (§3) — one hue, held in reserve.
3. All labels engraved (uppercase + tracked); mono only where data lives.
4. Same seed → pixel-identical composition; seed visible, editable, exported.
5. Placard present with title + mono provenance line.
6. Single file, no non-canonical dependencies, opens via `file://`.
7. Every control visibly changes the output.
8. Header comment reads as an artist statement.

When any rule above must break, break it the way a good editor breaks a grid — once,
deliberately, and in service of the work. Then say so in the header comment.
