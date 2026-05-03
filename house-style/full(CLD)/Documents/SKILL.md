---
name: gridlogica-design
description: Use this skill to generate well-branded interfaces and assets for GridLogica, an Independent Research project on the pedagogy of immersive and spatial computing. Contains essential design guidelines, colours, type, fonts, assets, and a UI kit recreating the GridLogica research library — for production code or throwaway prototypes/mocks/decks.
user-invocable: true
---

# GridLogica Design Skill

Read `README.md` first — it carries the brand context, content fundamentals (voice, tone, British English, no emoji), visual foundations (Forest accent on Warm-white ground, hairline borders, no shadows, restrained motion), and iconography rules. Then explore the other files:

- `colors_and_type.css` — single source of truth. Import this file; use its CSS custom properties; never hard-code hex values.
- `assets/` — wordmarks (`gridlogica-wordmark.svg`, `gridlogica-wordmark-mono.svg`), `grid-motif.svg`.
- `preview/` — small example cards for every concept (colours, type, components). Open these for live reference.
- `ui_kits/library/` — pixel-fidelity recreation of the GridLogica library website, with reusable JSX components.

## Working rules

- For **production code**: import `colors_and_type.css`, use the variables (`--gl-accent`, `--font-serif`, etc.), and lift components from `ui_kits/library/components.jsx` as a starting point.
- For **visual artefacts** (slides, mocks, throwaway prototypes): copy assets out of `assets/` into the new artefact, and create static HTML files for the user to view. Treat the variables in `colors_and_type.css` as a closed palette; do not invent new colours.
- The brand has **one accent (Forest green)**, **one secondary (Amber, used sparingly)**, **no shadows by default**, **no emoji ever**, **no gradients**, **no large radii**, **no pure white**, **no pure black**. Voice is first-person singular, scholarly, British English.
- Iconography upstream is unicode-only (`↓ → ·`). If a real icon is required, use Lucide outline at 1.5px stroke and flag the substitution.

## When invoked without context

If the user invokes this skill with no further instruction, ask what they want to build (a research page, a publication PDF cover, a deck, a component for production code), ask 3–5 clarifying questions, and then act as an expert designer producing either HTML artefacts or production code as appropriate.
