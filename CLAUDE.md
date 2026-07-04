# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Tony's portfolio — a marketing & design site (campaigns, brand identities, websites). Next.js App Router + TypeScript + Tailwind CSS v4. Aesthetic direction is **bold editorial**: warm paper, near-black ink, and a single coral accent used structurally.

## Heads up: this is Next.js 16

@AGENTS.md

Concretely, the version-specific gotcha that bites most: **dynamic route `params` is a `Promise`** and must be awaited (see `app/work/[slug]/page.tsx`). When touching Next APIs you don't recognize, read the matching guide under `node_modules/next/dist/docs/` first.

## Commands

```bash
npm run dev      # dev server (Turbopack) → http://localhost:3000
npm run build    # production build — also runs the TypeScript typecheck
npm run start    # serve the production build
npm run lint     # ESLint (flat config in eslint.config.mjs)
npx tsc --noEmit # typecheck only, without a full build
```

There is **no test framework** configured. Verification here means: `npm run lint`, `npm run build` (which typechecks and static-generates every route), and running the app. The lint config enforces React 19 rules — notably no synchronous `setState` inside an effect body.

## Architecture

**Content is data, not markup.** There is no CMS and no MDX. Everything the site shows comes from two files, and adding/editing content should almost never require touching a component:

- `content/projects.ts` — the typed `Project[]`. This is the source of truth. Appending a project makes it appear on the home index, the `/work` grid, **and** generates a new static `/work/[slug]` case-study page automatically (via `generateStaticParams`). No cover images exist: each project's `accent` hex drives a generated poster in `components/CoverBlock.tsx`.
- `content/site.ts` — `CONTACT` (name, email, socials, availability). The first things Tony will want to edit.
- `lib/projects.ts` — the only accessors for project data (`getProjects`, `getProjectBySlug`, `getProjectSlugs`, `getNextProject`). Components/pages read through these, never by importing the array directly.

**The design system lives in two files.** Re-theming the whole site is a two-file change:

- `app/globals.css` — Tailwind v4 CSS-based config (there is **no `tailwind.config.js`**). Semantic color and font tokens are declared in `@theme` / `@theme inline`, which generates the utilities used everywhere: `bg-paper`, `text-ink`, `text-ink-soft`, `text-stone`, `border-sand`, `text-coral`, `bg-coral`, and `font-display` / `font-grotesk` / `font-body`. Motion (`rise`, `reveal`) and the reduced-motion overrides also live here.
- `app/layout.tsx` — loads the three type roles via `next/font/google`: **Fraunces** (display), **Space Grotesk** (`font-grotesk`, used for labels/nav/metrics), **Inter** (body). Each is wired to the CSS variable the tokens reference.

**Aesthetic intent to preserve when extending.** Coral is the *only* loud element — spend it deliberately (the contact field, hover states, headline metrics), keep everything else quiet. The signature device is the **results index** (`components/WorkIndex.tsx`): selected work as a magazine contents page where each row carries one coral outcome metric. On case-study pages, a metric *grid* is used only for the Results section, because those numbers are real data.

**Rendering & routing.**

- The home page (`app/page.tsx`) composes anchored one-page sections: `Hero` → `WorkIndex` → `About` → `Contact`. Nav links to these use path-anchored hrefs (`/#work`, `/#about`, `/#contact`) so they work from any route.
- `app/work/page.tsx` is the full project grid; `app/work/[slug]/page.tsx` is a statically generated (SSG) case study.
- **Server components by default.** The only client component is `components/Reveal.tsx` (an `IntersectionObserver` scroll-reveal). Keep new components as server components unless they genuinely need browser interactivity. Reveal degrades to visible under both `prefers-reduced-motion` and no-JS (a `<noscript>` style in the layout).

**Path alias:** `@/*` maps to the repo root (e.g. `@/components/…`, `@/content/…`, `@/lib/…`).
