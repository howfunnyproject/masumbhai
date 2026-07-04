# Mahamudal Hasan Masum — Portfolio

A premium, editorial personal site for Mahamudal Hasan (Masum) — consultant, career counselor, and Founder/CEO of CareerKey.ai and MH Consultancy. Built with Astro and Tailwind CSS, targeting Lighthouse 95+ across the board.

## Stack

- **Astro 4** — static-first, ships zero JS by default
- **Tailwind CSS** — utility styling, mapped to the brand's design tokens
- **@astrojs/sitemap** — automatic sitemap generation
- **Vanilla JS (IntersectionObserver)** for scroll reveals, instead of Framer Motion

> **A note on the motion library.** The original brief suggested Framer Motion, which is a React library. Since this site has no interactive state that needs a UI framework, adding React solely to run Framer Motion would mean shipping a framework runtime for a handful of fade/slide reveals — working against the performance and Lighthouse goals. Instead, motion is handled with ~25 lines of vanilla `IntersectionObserver` (see `src/layouts/Layout.astro`) plus CSS transitions, which is faster and easier to maintain. If you later add a genuinely interactive island (e.g. a booking widget), it's easy to introduce `@astrojs/react` + `framer-motion` for just that component without affecting the rest of the site.

## Project structure

```
src/
  components/       Section components (Header, Hero, About, Services, ...)
  layouts/
    Layout.astro    <head> (SEO/OG/JSON-LD), skip link, reveal script
  pages/
    index.astro     Composes all sections
  styles/
    global.css      Fonts, tokens-driven utility classes, motion, focus states
public/
  favicon.svg
  robots.txt
tailwind.config.mjs Design tokens (color, type, radius, shadow) from the brand brief
astro.config.mjs    Tailwind + sitemap integrations, canonical `site` URL
```

## Design decisions (and how they serve the brand)

- **Color and type are taken directly from the brand brief**, unmodified: deep teal-charcoal (`#0D2229`) sections alternate with warm ivory (`#F8F6F2`) and white, so the page breathes instead of reading as one long panel. Playfair Display headings paired with Inter body text give the "consulting-firm editorial" register the brief asked for, without tipping into generic startup styling.
- **The "Clarity · Direction · Growth" line is the page's signature device.** It isn't a slogan bolted onto the hero — it appears as a quiet gold thread in the hero kicker, then again in the closing consultation CTA and footer, so the brand promise is something the visitor passes through, not just reads once.
- **The hero is asymmetric**, not a centered headline-plus-button template: a left column carries the thesis (who he is, what he's building), and a right-hand "credential plate" — styled like a brass nameplate — states the two organizations he leads. This does double duty as trust-building above the fold.
- **The experience timeline uses a single spine with gold nodes for current roles**, muted nodes for past ones — encoding real information (what's active today vs. history) rather than decorative numbering.
- **Motion is restrained**: fade/slide reveals on scroll, staggered by ~80ms per card, hover-lift on cards, smooth in-page scrolling. Everything respects `prefers-reduced-motion` (see the media query in `global.css`), and none of it blocks content from showing up without JavaScript.
- **Accessibility**: semantic landmarks (`header`, `main`, `nav`, `footer`), a visible skip-to-content link, a 2px gold focus ring on every interactive element, and body text kept at or above 4.5:1 contrast against its background.

## Content

All factual content (name, dates, employers, education, skills) is sourced verbatim from the content brief and lives inline in each component as typed data — see the `const` arrays at the top of `ExperienceTimeline.astro`, `Education.astro`, `Expertise.astro`, and the paragraphs in `About.astro`. To update content later, edit those files directly; there's no external CMS or data layer to keep in sync.

## Before you deploy

1. **Add a real Open Graph image** at `public/og-image.jpg` (1200×630px). The layout already references it in the meta tags; a placeholder wasn't generated as part of this build.
2. **Update `site` in `astro.config.mjs`** to the real production domain — it currently points to a placeholder (`https://mahamudalhasan.com`) and is used to build the sitemap and canonical/OG URLs.
3. Optionally swap the CSS `@import` Google Fonts call for self-hosted font files if you want to shave the extra DNS/connection round-trip (see `src/styles/global.css`).

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

See `DEPLOYMENT.md` for hosting instructions.
