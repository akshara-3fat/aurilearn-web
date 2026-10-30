# Aurilearn Web

Frontend for [aurilearn.ai](https://aurilearn.ai), rebuilt from the redesign canvas.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4

## Getting started

```bash
nvm use        # Node 24 (see .nvmrc); Node >= 20.9 works
npm install
npm run dev    # http://localhost:3000
```

| Script                 | What it does                           |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Dev server (Turbopack)                 |
| `npm run build`        | Production build                       |
| `npm run start`        | Serve the production build             |
| `npm run lint`         | ESLint                                 |
| `npm run typecheck`    | TypeScript, no emit                    |
| `npm run format`       | Prettier (also sorts Tailwind classes) |
| `npm run format:check` | Prettier check, for CI                 |

## Structure

```
src/
  app/                 routes (App Router); globals.css holds the design tokens
  components/
    ui/                primitives: Button, Badge, Eyebrow, Card…
    layout/            Header, Footer
    sections/          page sections shared across routes (Pillars, Security, CTA…)
  config/site.ts       site name, URLs, nav links
  lib/utils.ts         cn() class-name helper
public/images/         static images
```

## Design tokens

All tokens live in `src/app/globals.css` under `@theme`. Tailwind v4 has no
`tailwind.config.js`; each token becomes a utility automatically.

| Group | Examples                                                                        | Used for                        |
| ----- | ------------------------------------------------------------------------------- | ------------------------------- |
| navy  | `bg-navy-900`, `bg-navy-800`                                                    | dark grounds, dark cards        |
| gold  | `bg-gold-500`, `text-gold-400`, `text-gold-700`                                 | brand accent, buttons, eyebrows |
| cream | `bg-cream-100`, `border-cream-600`                                              | light grounds, card borders     |
| ink   | `text-ink-900`, `text-ink-600`                                                  | text on light                   |
| mist  | `text-mist-400`, `text-mist-300`                                                | text on dark                    |
| fonts | `font-sans` (Inter), `font-display` (Inter Tight), `font-mono` (JetBrains Mono) |                                 |

Custom utilities: `container-page` (1200px max width with fluid gutter) and
`bg-grid` (faint grid over dark panels).

Use gold-700 (not gold-500) for accent text on light grounds — gold-500 fails
contrast there.
