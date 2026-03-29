---
description: Generate a complete, production-ready landing page from a text prompt
---

# Landing Page Generator Workflow

Build a full dark-mode landing page with hero, features, CTA, and footer from a single description.

## Inputs
- `PRODUCT_NAME` — name of the product or service
- `TAGLINE` — one-line value proposition
- `FEATURES` — comma-separated list of 3-4 key features

## Steps

1. **Create the route**
// turbo
```bash
New-Item -ItemType Directory -Force "src/app/landing"
```

2. **Activate the Design Agent skill**
Read the skill file at `.agent/skills/ui-ux-pro-max/SKILL.md` to load the design intelligence system. Use its palette and typography recommendations.

3. **Generate the page component**
Create `src/app/landing/page.tsx` with the following sections:
- **Hero Section**: Full-width gradient background, large headline with `PRODUCT_NAME`, subheadline with `TAGLINE`, and a primary CTA button
- **Features Grid**: 3-4 cards in a responsive grid, each with an icon, title, and description from `FEATURES`
- **Social Proof / Stats**: A horizontal row of 3 key metrics (e.g., "10K+ Users", "99.9% Uptime", "4.9★ Rating")
- **CTA Section**: Final conversion block with a secondary headline and email capture input
- **Footer**: Minimal footer with copyright and social links

4. **Apply design tokens**
Ensure all components use:
- `bg-zinc-950` for backgrounds (dark mode first)
- `rounded-xl` for card radius
- `backdrop-blur-md bg-white/5` for glassmorphism effects
- Smooth `transition-all duration-300` on hover states
- Proper heading hierarchy (single `h1`, then `h2` for sections)

5. **Add SEO metadata**
```typescript
export const metadata = {
    title: `${PRODUCT_NAME} — ${TAGLINE}`,
    description: TAGLINE,
};
```

6. **Verify the build**
// turbo
```bash
npx tsc --noEmit
```

7. **Preview locally**
```bash
npm run dev
```
Navigate to `http://localhost:3000/landing` and review. Iterate on copy and spacing.
