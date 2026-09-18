// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // 1. Add this import

export default defineConfig({
  site: 'https://yourinfo.my.id',
  integrations: [sitemap()],            // 2. Add this array
});
