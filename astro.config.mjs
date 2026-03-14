import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wulingteen.github.io',
  base: '/nils-digital-studio',
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        // Automatically inject lastmod (Build time) and changefreq params for optimal SEO indexing
        item.lastmod = new Date().toISOString();
        item.changefreq = 'weekly';
        item.priority = 0.8;
        return item;
      }
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'de'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
