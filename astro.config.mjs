import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://irisoneunited.co.uk',
  base: '/',
  // Keep the hidden /preview area out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/preview') })],
});
