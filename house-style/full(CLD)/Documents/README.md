# GridLogica Design System

> **GridLogica** is an Independent Research Project at the crossover of pedagogy, ethics, and immersive edutech. The identity carries precision, scholarly rigour, and a quiet authority — never decorative, always purposeful.

This design system is the source of truth for any GridLogica-branded artefact: research papers, web pages, decks, mockups. It is built from the canonical house-style document and intended to be picked up by a designer or design agent and used immediately.

---

## Sources

- **House styleguide** — `GridLogica/Document-Templates` repo, `house-style/styleguide.html` (default branch: `main`). This is the canonical source of all colour and type tokens encoded here.
- **Tufte LaTeX templates** — `GridLogica/Document-Templates`, `tuftestyle/`. Generic upstream Tufte-LaTeX package; not GridLogica-branded, used for long-form research documents only. Not folded into this system.
- Other repos (`GridLogic`, `site-framework`) are private and were not used.

---

## What GridLogica is

A single-researcher (first-person, "I") research project formalising the **pedagogy of immersive and spatial computing**. The work spans four declared focus areas:

1. **Cognitive Load** — applying cognitive science to high-fidelity sensory inputs to establish *Efficient Fidelity* thresholds.
2. **Embodied Pedagogy** — mapping physical movement to conceptual understanding via DET standards and hand-tracking.
3. **Spatial Assessment** — frameworks using gaze paths and gesture sequences as valid proof of mastery.
4. **Ethics & Identity** — the ethical implications of identity embodiment within virtual, high-stakes environments.

Public outputs are numbered **Standards** (e.g. `S-101-P` "Purpose"), released as PDFs under **CC BY-SA 4.0**.

---

## Surfaces represented

There is currently **one** primary surface: the GridLogica research **library website** — a publication archive with a hero/wordmark, navigation (`Library · Standards · About · Contact`), publication cards, focus-area cards, and search. A UI kit recreating this surface lives in `ui_kits/library/`.

No native app, no admin tooling, no slide-deck templates were given — so none have been built. (Generic 16:9 deck templates *can* be derived from this system on request.)

---

## Index — what's in this folder

| Path | Purpose |
|---|---|
| `README.md` | This file. Brand context, fundamentals, iconography. |
| `SKILL.md` | Skill manifest so this system can be invoked as a Claude skill. |
| `colors_and_type.css` | The single source of truth for visual tokens (CSS custom properties). |
| `assets/` | Logo wordmarks, motif backgrounds, sample imagery placeholders. |
| `preview/` | Small HTML cards rendered in the Design System tab. |
| `ui_kits/library/` | Pixel-fidelity recreation of the GridLogica library website. |

---

## CONTENT FUNDAMENTALS

GridLogica's voice is the most distinctive thing about it after the typography. Read this section before writing a single word.

### Voice

- **Precise, measured, evidenced.** Scholarly without being opaque. Sentences are declarative. Claims sit alongside their grounding (a standard number, a focus area, a source).
- **First person singular** — "I investigate…", "I propose…", "My research…". GridLogica is one researcher, not a team. Never use "we" except when literally co-authoring.
- **Peer-to-peer, not pedagogical.** The reader is treated as an intellectual peer — a fellow researcher, designer, or practitioner. Never explain what cognitive load *is*; assume the reader knows.
- **Confident but not self-aggrandising.** "Drawing on a 15-year foundation in technology direction…" — biographical fact, not boast.

### Tone

- **British English** spelling throughout: *colour*, *behaviour*, *formalise*, *recognise*, *centre*. (The styleguide uses "colour", "rigour", "formalises".)
- **Quiet authority.** No exclamation marks. No emojis. No rhetorical questions in headlines.
- **Sentence case** for body and most cards. **Title Case** for navigation items and the focus-area card titles ("Cognitive Load", "Embodied Pedagogy"). **UPPERCASE** is reserved for `gl-h3` labels and section markers (`BRAND IDENTITY`, `TYPOGRAPHY`).

### What to avoid (with examples)

- ❌ "Innovative solution", "cutting-edge", "next-generation", "AI-powered", "seamless", "synergy"
- ❌ "Welcome to GridLogica! 🎉"
- ❌ "We empower educators to…"
- ❌ "Discover how immersive learning is *transforming* classrooms."
- ❌ Marketing hyperbole of any kind. Let the research speak.

### Voice in the wild — examples lifted from the styleguide

- Tagline: *"Independent Research"* (two words, all caps, wide tracked).
- Focus card body: *"Applying cognitive science to high-fidelity sensory inputs to establish Efficient Fidelity thresholds."* — single sentence, named concept (Efficient Fidelity) treated as a term of art.
- Publication card: *"Primacy of learning over novelty in simulation experience."* — declarative thesis, no verb-phrase padding.
- About copy: *"GridLogica formalises the pedagogy of immersive and spatial computing. The identity carries precision, scholarly rigour, and a quiet authority — never decorative, always purposeful."*

### Microcopy patterns

- **Buttons** — uppercase, wide-tracked, verb-led: `ACCESS FRAMEWORK`, `READ STANDARD`, `↓ DOWNLOAD PDF`. Use a real arrow glyph (`↓`, `→`) before the verb on ghost buttons.
- **Tags** — uppercase mono, terse: `PDF AVAILABLE`, `DRAFT`, `STANDARD S-101-P`, `COGNITIVE LOAD`.
- **Meta lines** — pipe- or middot-separated: `March 2026 · Standard S-101-P`, `CC BY-SA 4.0`.
- **No emoji.** Ever. Use unicode arrows (`↓ ↑ → ←`) and middots (`·`) when a glyph is needed.

---

## VISUAL FOUNDATIONS

### The motif: the grid

A literal, hairline grid is GridLogica's signature device. It references both the logical structure of research frameworks and spatial-computing environments. It recurs as:

- Background texture on hero/about sections (24px × 24px, `--gl-rule` lines on `--gl-warm`).
- Implicit metaphor — visible in the rigorous alignment of the layout itself.
- A small inline glyph in headers and section markers when extra tone is wanted.

### Colour

- **Forest green (`#1a3a2a`)** is the single accent. It anchors all primary actions, links, and accent borders. There is no other primary colour — GridLogica has one voice, not a palette.
- **Warm white (`#f5f3ed`)** replaces pure `#ffffff` for page backgrounds. Pure white is forbidden; it reads as harsh and clinical against the warm-grey ink.
- **Pure black (`#000`) is also forbidden.** Body ink is `#0f0f0d`; a near-black with a slight warm cast.
- **Amber (`#b87333`)** is the *only* secondary accent. It is reserved for PDF availability indicators and a small set of secondary tags. Never use amber as a primary action colour.
- All colour pairs meet WCAG AA against their intended ground.

### Typography

GridLogica's pairing inverts the common pattern: **sans for the wordmark, serif for everything else**. This is the same move Anthropic uses in their house style.

- **Sans: Lato** — used **only** for the wordmark and uppercase labels (focus-card eyebrows, button labels, the "Independent Research" tagline). Weights: 400 and 700.
- **Body serif: Source Serif 4** — body, navigation, headings (h2 and below), publication descriptions, modal copy. This is the workhorse face. Weights: 400 (body), 500 (headings).
- **Display serif: DM Serif Display** — reserved for marquee headings (h1, hero, publication titles). High-contrast, slightly Didone, scholarly.
- **Mono: DM Mono** — meta lines, tags, section labels, code, standards numbers, dates. Mono is used *generously* for any non-prose UI text.
- **Tracking** is intentional: tight (`-0.015em` to `-0.04em`) on display serif and the wordmark, normal on body, wide (`0.1–0.2em`) on uppercase mono and labels.

### Spacing & layout

- 4px base scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`.
- Generous vertical rhythm — sections separated by `48–64px` minimum.
- Layouts are anchored on a left-aligned 12-column grid with substantial gutters. Symmetry is rare; the work has a left-edge axis.
- Maximum measure for body copy: `~480px` (~65–75 characters).

### Backgrounds

- The default page is `--gl-warm` (`#f5f3ed`). Never `#fff`.
- Cards sit on a surface either `--gl-warm` (focus cards, nav strip) or `--gl-surface` (publication cards on a `--gl-warm` page).
- The grid motif is used at most once per view — at the top, as a quiet texture. It is **never** a full-bleed treatment behind body copy.
- No photographic backgrounds. No gradients. No glassmorphism. No noise textures.

### Animation

- **Restrained.** Default transition is 120–200ms with `cubic-bezier(0.2, 0, 0, 1)`.
- Allowed: opacity fade, colour shift, hairline-border state changes.
- Disallowed: bounces, spring overshoots, sliding tray animations, parallax, scroll-driven motion. The brand's quiet authority breaks the moment something *jiggles*.
- Page-load: a single 200ms fade-in is acceptable. Nothing more.

### Interaction states

- **Hover (links / nav)** — colour shifts from `--gl-ink-2` to `--gl-accent-mid`; a 1px underline appears in `--gl-accent-mid`. No background fill.
- **Hover (primary button)** — background darkens by ~6% (Forest → near-black-green). No scale, no shadow.
- **Hover (secondary button)** — background fills with `--gl-accent-light`; text & border stay `--gl-accent`.
- **Hover (cards)** — the left accent border thickens from 3px to 4px **or** the hairline border darkens to `--gl-ink-3`. Pick one per surface; don't combine.
- **Press / active** — colour deepens one more step. **Never** scale-down. Never opacity-flash.
- **Focus** — visible outline in `--gl-accent`, 2px, offset 2px. Always present. Never `outline: none` without a replacement.
- **Disabled** — `opacity: 0.4`, no other change.

### Borders & rules

- The system runs on **hairlines**: `0.5px solid var(--gl-rule)` is the default card/surface border.
- `1px solid var(--gl-rule)` divides sections.
- `3px solid var(--gl-accent)` is the publication-card left accent — the *only* place a thick accent rule is used.
- Avoid heavy borders elsewhere. If a surface needs to assert itself, switch from hairline to `1px solid var(--gl-ink-3)`, not to colour.

### Shadows

- **GridLogica is flat by default.** Hairline borders, not shadows, create hierarchy.
- The only shadows defined are for floating UI: `--shadow-float` for menus/popovers, `--shadow-modal` for modals. Never apply shadow to a static card.

### Corner radii

- Most things: `2px` (buttons, inputs, tags).
- Cards: `4px`.
- Larger surfaces (nav strip): `6px`.
- The publication card uses `0 4px 4px 0` — the left edge is sharp because the 3px accent border defines it.
- Nothing in the system uses radii larger than 6px. No "pill" shapes (`border-radius: 999px`).

### Cards

- **Focus card** — `--gl-warm` background, hairline border, `4px` radius. Title in uppercase forest-mid, body in 13px ink-2. Used for the four research focus areas.
- **Publication card** — `--gl-surface` (white) on warm page, hairline border on three sides, `3px` forest accent on the left, `0 4px 4px 0` radius. Used for every research output.
- No drop shadows. No icons inside cards. No "image cap" headers.

### Transparency / blur

- **Avoided.** No glass effects. No semi-transparent overlays except modal backdrops (`rgba(15, 15, 13, 0.4)`).

### Imagery treatment

There is currently no canonical imagery library. When imagery becomes necessary:
- Treat photographs as **warm-toned, slightly desaturated**, never high-contrast or hyper-saturated.
- A subtle warm overlay (`#f5f3ed` at 6–10% multiply) unifies any imported imagery to the page tone.
- Diagrams, figures, and charts are rendered in `--gl-ink-2` strokes on `--gl-warm` ground, with `--gl-accent-mid` as the only highlight colour. No rainbow palettes.

### Layout rules

- One H1 per page. Section labels (`gl-section-label`) introduce every region.
- No fixed/sticky elements except the top navigation when scrolled past the wordmark. No floating chat bubbles, no scroll-to-top buttons, no cookie banners.
- Body text never spans the full viewport width — it sits within a `~480px` measure on a left axis, with the right column free for marginalia, dates, and standard numbers.

---

## ICONOGRAPHY

GridLogica intentionally has **almost no iconography**. The styleguide ships exactly two icon-shaped affordances:

- **Unicode arrow glyphs** — `↓` for download, `→` for navigation. Used inside ghost buttons (`↓ DOWNLOAD PDF`). Always set in DM Mono at the same size as adjacent text.
- **A middot (`·`)** as a separator in meta lines.

There is **no built-in icon font, no SVG sprite, no Lucide/Heroicons import** in the source styleguide.

### Rules

- Prefer **typography and a unicode glyph** over an icon, always.
- Do not use emoji. Ever.
- If an icon is genuinely required (e.g. a play-button on a video module the styleguide doesn't define), use **Lucide** at `1.5px` stroke (it matches the hairline borders) in `--gl-accent` — and **flag the substitution** to the maintainer.
  - CDN: `https://unpkg.com/lucide@latest`
- Never use filled icons. Never use multicoloured icons.

> **Substitution flag** — the styleguide ships no icons. Any icon used in a product surface (e.g. a search magnifier, an external-link arrow) is a substitution decision. The current default is **Lucide** outline. If GridLogica adopts an in-house icon set later, replace this section.

### Logo / wordmark

The wordmark is typographic, not pictorial:

```
Grid + Logica + .   →   "Grid" ink · "Logica" forest-mid · "." rule-grey
```

**Lato 700**, tracking `-0.04em` (~−1.2px at 44px). The wordmark is **sans-serif** while display headings are **DM Serif Display** — that inverted pairing (sans logo / serif display) is the GridLogica signature, in the spirit of Anthropic's house style. The trailing period is part of the wordmark — it terminates the sentence, in keeping with the declarative voice. Do not replace it with a colon or em-dash.

The wordmark assets live in `assets/`:
- `gridlogica-wordmark.svg` — full colour, light ground (default).
- `gridlogica-wordmark-mono.svg` — single-colour, for dark grounds or inverted contexts.

---

## How to use this system

- For **production code**, import `colors_and_type.css` and use the CSS variables directly. Do not reach for hex codes.
- For **mockups / decks / throwaway prototypes**, copy assets out of `assets/` and treat the variables in `colors_and_type.css` as a closed palette.
- When in doubt, default to: **warm-white page, forest-green action, mono meta line, serif headline, generous whitespace.** That formula is GridLogica.

---

## Caveats

- This system was derived from a single canonical document. Edge cases (data viz, video players, multi-step forms, login states) are inferred extensions, not source-of-truth.
- Fonts are loaded via Google Fonts. No `.ttf`/`.woff2` files are bundled — if offline use is needed, request font files explicitly.
- Iconography is unspecified upstream. Lucide is the working substitute.
