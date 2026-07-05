# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Tony Syme's personal portfolio — an **employer-facing site to win a B2B Marketing Manager role**. It presents his real work (web, brand, campaign, and creative projects delivered across Scotland) as proof of commercial impact. Next.js App Router + TypeScript + Tailwind CSS v4. Aesthetic direction is **bold editorial**: warm paper, near-black ink, and a single cobalt-blue accent used structurally.

**Content rule:** everything shown — the site **and** the downloadable CV PDF — states outcomes as **percentages / counts / phrases only, never absolute £ turnover** (a deliberate brief decision; the CV's earlier £ figures were removed). No phone number appears anywhere either. Source material lives in `workAssets/` (his CV + portfolio text).

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

**Content is data, not markup.** There is no CMS and no MDX. Everything the site shows comes from the `content/` files, and adding/editing content should almost never require touching a component:

- `content/projects.ts` — the typed `Project[]` (curated to ~11). Source of truth: appending a project makes it appear on the `/work` grid **and** generates a new static `/work/[slug]` case study automatically (via `generateStaticParams`). Category is `Web | Brand | Campaign | Creative`; each case study is Challenge / **Solution** (`solution` field) / Result; `headlineMetric` is a %/count/short outcome, never £.
- `content/cv.ts` — the CV data: `PROFILE`, `BIO`, `PROOF` (hero stat strip), `EXPERIENCE`, `SKILLS`, `TOOLS`, `EDUCATION`. Feeds `Hero`, `Experience`, `About`, `Skills`.
- `content/site.ts` — `CONTACT` (name, role, email, location, availability, `cvUrl`, socials — **no phone**; it was removed from the site and CV). The first things to edit; the LinkedIn URL is Tony's real profile.
- `lib/projects.ts` — the only accessors for project data (`getProjects`, `getProjectBySlug`, `getProjectSlugs`, `getNextProject`). Components/pages read through these, never by importing the array directly.

**Images are opt-in, with a graceful fallback.** Where no cover art exists, each project's `accent` hex drives a generated poster in `components/CoverBlock.tsx`. To use real art, set a project's `coverImage` (and `gallery[].src`) to files under `/public/work/<slug>/` — `CoverBlock` and the case-study gallery upgrade from the generated block to `next/image` automatically. All eleven projects now have real `cover.png` files **and** full `g1–g3.png` galleries — no generated-poster placeholders remain. By source/style: (1) browser-frame web mockups from live-site screenshots — very-spexy, club-one-fitness, bonnie-scotland-presents, heatplan-scotland, plus heatmasters (heatmastersangus.co.uk) and the-attic (madeat45.co.uk/Attic staging, framed under the brand domain theatticclub.co.uk) which pair a logo cover with web-screenshot galleries; (2) a logo brand-board — amac-promotions (its real A-Mac logo on cream/ink/kraft panels; used because amac.events is access-blocked with a 403 and its only Wayback snapshot rendered without CSS); (3) real tour posters framed as prints — kyle-falconer ("The One I Love The Most"); (4) real event photos framed as cards — chromebook-roadshow (Chromebook Roadshow Scotland); (5) packaging shots — the-greenporium (its circular CBD tin-label range); (6) album artwork — suckerpunch (Joe Goodall). **Removed** from the curated set (no assets, at Tony's request): inspiration-hub and alloafirst. Raw source assets live in `workAssets/` (tour posters `29286/88/90`, chromebook photos `29312/13/15/17`, greenporium labels `1–8.png`, suckerpunch art `29293.png`); framing (browser mockups, logo cards, poster prints, circular tin-tops, album-art panels, section crops) was one-off Python run from the session scratchpad against those files. The About portrait (`components/About.tsx`) is a real photo at `public/tony.png` — a background-removed headshot composited onto a blue-charcoal panel (produced with `rembg`); replace that file to change it.

**CV PDF.** `public/tony-syme-cv.pdf` is the Download-CV target (linked from `Nav`, `Footer`, `Contact` via `CONTACT.cvUrl`). It's a **one-page** employer-facing CV branded to match the site (Fraunces / Space Grotesk / Inter + cobalt), positioned as a B2B Marketing Manager, with **no phone and no £ figures** (every result is an outcome/percentage). The regenerable source lives at `workAssets/cv-source/cv.html` (self-contained, with self-hosted `fonts/*.woff2`). To rebuild: `"Google Chrome" --headless=new --no-pdf-header-footer --print-to-pdf-no-header --print-to-pdf=public/tony-syme-cv.pdf file://…/workAssets/cv-source/cv.html` — or just replace the PDF in place.

**The design system lives in two files.** Re-theming the whole site is a two-file change:

- `app/globals.css` — Tailwind v4 CSS-based config (there is **no `tailwind.config.js`**). Semantic color and font tokens are declared in `@theme` / `@theme inline`, which generates the utilities used everywhere: `bg-paper`, `text-ink`, `text-ink-soft`, `text-stone`, `border-sand`, `text-accent`, `bg-accent`, and `font-display` / `font-grotesk` / `font-body`. Motion (`rise`, `reveal`) and the reduced-motion overrides also live here.
A static OG/social card lives at `app/opengraph-image.png` (Next file convention; auto-wired into `og:image` / twitter card). Regenerate it from `scratchpad` `og.html` styling if the positioning changes — it mirrors the hero ("Marketing that moves the numbers." + availability + proof stats).

- `app/layout.tsx` — loads the three type roles via `next/font/google`: **Fraunces** (display), **Space Grotesk** (`font-grotesk`, used for labels/nav/metrics), **Inter** (body). Each is wired to the CSS variable the tokens reference.

**Aesthetic intent to preserve when extending.** The cobalt accent (`--color-accent`) is the *only* loud element — spend it deliberately (the contact field, hover states, headline metrics), keep everything else quiet. The whole site re-themes from that one token pair. The signature device is the **results index** (`components/WorkIndex.tsx`): selected work as a magazine contents page where each row carries one coral outcome metric. On case-study pages, a metric *grid* is used only for the Results section, because those numbers are real data.

**Motion layer — Magic UI, used as accent not identity.** A few [Magic UI](https://magicui.design) components live in `components/magicui/` (hand-added, not via the shadcn CLI, so they're Tailwind-v4 native): `number-ticker` (client — springs the hero PROOF stats up on load, wrapped by `components/ProofStats.tsx` which splits `"+249%"` into a static prefix/suffix + an animatable number), `marquee` (pure-CSS scrolling strip — the Skills "Tools & platforms" row), and `animated-shiny-text` (a cobalt sweep on the hero "Available now" line; base text is `text-stone/70` so the swept band shows through). They depend on `motion` + `cn()` (`lib/utils.ts`, clsx + tailwind-merge). Their `@keyframes` and `--animate-*` tokens live in `globals.css` `@theme inline`, with `prefers-reduced-motion` overrides beside the `rise`/`reveal` ones. **Keep this as polish on the bespoke design — do not let Magic UI's stock layouts (bento grids, gradient heroes, shimmer everything) replace the editorial identity;** looking hand-made is the point.

**Rendering & routing.**

- The home page (`app/page.tsx`) composes anchored one-page sections: `Hero` → `WorkIndex` → `Experience` → `About` → `Skills` → `Contact`. Nav links use path-anchored hrefs (`/#experience`, `/#about`, `/#contact`) so they work from any route. The home `WorkIndex` shows a hand-curated `FEATURED` slug list (in `page.tsx`), not a year slice — edit that array to change the home reel.
- `app/work/page.tsx` is the full project grid; `app/work/[slug]/page.tsx` is a statically generated (SSG) case study.
- **Server components by default.** The client components are `components/Reveal.tsx` (an `IntersectionObserver` scroll-reveal) and `components/magicui/number-ticker.tsx` (the stat count-up). Keep new components as server components unless they genuinely need browser interactivity — the marquee and shiny-text are pure-CSS server components for exactly this reason. Reveal degrades to visible under both `prefers-reduced-motion` and no-JS (a `<noscript>` style in the layout); NumberTicker renders its final value in SSR/no-JS and only resets-then-counts on the client.

**Path alias:** `@/*` maps to the repo root (e.g. `@/components/…`, `@/content/…`, `@/lib/…`).
