import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Placeholder — fine to leave as-is for a Vercel preview link.
  // Once you have the final domain (or want to use the vercel.app URL), update this and redeploy.
  site: 'https://mahamudalhasan.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
