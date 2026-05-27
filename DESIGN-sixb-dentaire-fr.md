# Design System Inspired by Six B

> Auto-extracted from `https://sixb-dentaire.fr/?ref=onepagelove` on 2026-05-27

## 1. Visual Theme & Atmosphere

Friendly, approachable design with rounded shapes and generous whitespace.

The hero section leads with "Des professionnels à votre écoute" followed by "Toute l'équipe du cabinet mettra en oeuvre sa Bienveillance et sa compétence pour que votre sourire ".

**Key Characteristics:**
- __Figtree_2ca027 as the heading font (custom web font loaded via @font-face)
- __Inter_f367f3 as the body font for all running text
- Light/white background (#ffffff) as the primary canvas
- Primary accent `#88c9f7` used for CTAs and brand highlights
- Rounded corners (12px+) creating a friendly, approachable feel
- Tags: light, rounded, accented, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#88c9f7`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Background** (`#ffffff`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#8594ae`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#606979`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#606979`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#f2f4f8`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#ffffff` | `--palette-1` | block | large | text-dark |
| 2 | `#8594ae` | `--palette-2` | text-accent | large | text-dark |
| 3 | `#333c4c` | `--palette-3` | text-accent | large | text-light |
| 4 | `#f2f4f8` | `--palette-4` | button | medium | text-dark |
| 5 | `#606979` | `--palette-5` | text-accent | small | text-light |
| 6 | `#88c9f7` | `--palette-6` | text-accent | small | text-dark |

## 3. Typography Rules

- **Heading Font:** `__Figtree_2ca027` (web font)
- **Body Font:** `__Inter_f367f3` (web font)

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H2 | __Figtree_2ca027 | 54px | 300 | 54px | normal |
| H3 | __Inter_f367f3 | 40px | 400 | 40px | normal |
| H4 | __Inter_f367f3 | 20px | 400 | 30px | normal |
| Body | __Inter_f367f3 | 18px | 400 | 27px | normal |
| Small | __Inter_f367f3 | 14px | 400 | 21px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `54px` | headings |
| H1 | `40px` | headings |
| H2 | `20px` | headings |
| H3 | `18px` | headings |
| H4 | `16px` | headings |
| Body L | `14px` | body / supporting text |
| Body | `12px` | body / supporting text |

## 4. Component Stylings

No prominent button or card components detected. Use the color palette and typography rules above to create components consistent with the brand.

## 5. Layout Principles

- **Base spacing unit:** `40px` — use multiples (80px, 120px, 160px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `40px` | card |
| spacing-2 | `80px` | section |
| spacing-3 | `4px` | element |
| spacing-4 | `8px` | element |
| spacing-5 | `10px` | element |
| spacing-6 | `12px` | element |
| spacing-7 | `20px` | element |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-button | `12px` | button |
| radius-subtle | `3px` | subtle |
| radius-button | `8px` | button |
| radius-card | `16px` | card |
| radius-card | `50px` | card |
| radius-subtle | `5px` | subtle |

## 6. Depth & Elevation

No prominent box-shadows detected. This design likely uses flat surfaces with borders or background color changes for depth.

## 7. Do's and Don'ts

### Do
- Use `#ffffff` as the primary background color
- Use `__Figtree_2ca027` for all headings and `__Inter_f367f3` for body text
- Use `#88c9f7` as the single dominant accent/CTA color
- Maintain `40px` as the base spacing unit — all gaps should be multiples
- Use rounded corners (`12px`+) consistently for all interactive elements

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute __Figtree_2ca027/__Inter_f367f3 with generic alternatives
- Don't use irregular spacing — stick to 40px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't use pure black (#000000) for text — use `#606979` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 40px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #ffffff
Text:        #606979
Accent:      #88c9f7
Border:      #f2f4f8
```

### Example Prompts

1. "Build a hero section with a `#ffffff` background, `__Figtree_2ca027` heading in `#606979`, and a `#88c9f7` CTA button."
2. "Create a pricing card using background `#8594ae`, border `#f2f4f8`, `__Inter_f367f3` for text, and 120px padding."
3. "Design a navigation bar — `#ffffff` background, `#606979` links, `#88c9f7` for active state."
4. "Build a feature grid with 3 columns, 120px gap, each card using the card component style."
5. "Create a footer with `#606979` background, `#ffffff` text, and 80px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Check responsive behavior — test mobile and tablet layouts
7. Final pass — verify all colors match, spacing is consistent, fonts are correct
