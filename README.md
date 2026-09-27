# Atelier

A Claude Code agent skill that encodes the **Axel Ruiz Design** studio standard for
creative front-end work — stark gallery-editorial interfaces wrapped around seeded
generative systems.

**Axel Ruiz Design — Austin, Texas, USA — 2026**

The governing idea: *the interface is the gallery, the canvas is the art.* Chrome
recedes into typography and hairline rules so the generated work holds the room.
With this skill installed, any agent asked for a creative web piece — a generative
art tool, a p5.js sketch, a studio page — ships it under the house canon instead of
the default template look.

## What it enforces

- **Typography is the interface** — grotesque speaks, mono records; labels engraved
  (uppercase, tracked 0.14–0.34em); sizes tuned to the half-pixel.
- **One accent, held in reserve** — ink, paper, two greys, and a single hue routed to
  rarity (house default: forest green `#1f4a2b`). An accent census before shipping.
- **Line and surface** — 1px in two weights; no radius, no shadow, no gradient as
  decoration; depth from spacing and scale, never elevation.
- **The armature** — topbar, stage, panel with numbered sections, and the museum
  placard that makes a sketch read as a work.
- **The generative contract** — composition never touches `Math.random()`; one seed,
  one frame, exactly; real algorithms (Bridson Poisson-disk, Bowyer–Watson Delaunay)
  implemented inline and credited; every exposed parameter a true degree of freedom.
- **Single-file delivery** — one HTML artifact, canonical CDNs only, header comment
  written as an artist statement, PNG export at 2×.

## Benchmark

Three realistic prompts (a flow-field tool, a studio landing page, a photo-stippling
tool) were each built twice by headless agents — once with the skill, once without —
then graded by independent agents against the canon's ship checklist, with quoted
code as evidence.

| Configuration | Assertions passed |
|---|---|
| With skill | **20 / 20** |
| Without skill (baseline) | 13 / 20 |

Baseline failures were the predictable defaults: dark-mode demo chrome, `Math.random()`
compositions, missing placards, rounded shadowed cards. The `examples/` directory holds
the three with-skill outputs, unedited.

## Install

```
git clone https://github.com/axelruiz21/atelier-skill ~/.claude/skills/atelier
```

Claude Code discovers it automatically (personal skill). For a single project, clone
into `<project>/.claude/skills/atelier` instead. The skill triggers on any creative
front-end request — no need to invoke it by name.

## Files

| File | Purpose |
|---|---|
| `SKILL.md` | The canon: ten sections plus a ship checklist. |
| `assets/canon.css` | Lift-ready component recipes (topbar, panel, placard, instruments). |
| `assets/generative.js` | Seeded kit: mulberry32, Bridson Poisson-disk, seeded helpers. |
| `examples/` | Unedited benchmark outputs built under the skill. |
| `works/maintenance-os.html` | Maintenance OS — seeded duty-cycle instrument. |
| `works/maintenance-os.md` | Concept note for Duty Cycle. |

---

© 2026 Axel Ruiz. Skill text and assets released for personal use; studio name and
identity reserved.
