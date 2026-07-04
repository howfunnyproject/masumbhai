# Deployment Guide

This is a fully static site (`output: "static"` in `astro.config.mjs`) — the build produces plain HTML/CSS/JS in `dist/`, so it can be hosted anywhere that serves static files.

## Option A — Vercel (recommended, zero config)

1. Push this repository to GitHub.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Vercel auto-detects Astro. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Add a custom domain under **Project → Settings → Domains**.

## Option B — Netlify

1. Push to GitHub.
2. netlify.com → **Add new site → Import an existing project**.
3. Build command: `npm run build`; Publish directory: `dist`.
4. Deploy, then attach a custom domain under **Domain settings**.

## Option C — Cloudflare Pages

1. Push to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Framework preset: Astro. Build command: `npm run build`; output directory: `dist`.
4. Deploy.

## Option D — Any static host / your own server

```bash
npm install
npm run build
```

Upload the contents of `dist/` to any static file host (S3 + CloudFront, GitHub Pages, a plain Nginx box, etc.). No server runtime is required.

## After first deploy

1. Update `site` in `astro.config.mjs` to the live domain, then rebuild — this fixes the sitemap and Open Graph URLs.
2. Submit `https://yourdomain.com/sitemap-index.xml` to Google Search Console.
3. Run Lighthouse (Chrome DevTools → Lighthouse tab) against the deployed URL to confirm performance/accessibility/SEO scores.
4. Set up a redirect from `www` → apex (or vice versa) at the DNS/host level, whichever you choose as canonical.
