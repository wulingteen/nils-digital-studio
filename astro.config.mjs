import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import auth from 'auth-astro';

export default defineConfig({
  site: 'https://nils-digital-studio.vercel.app',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    auth(),
    sitemap({
      filter: (page) => !page.includes('/llm') && !page.includes('/api/'),
      serialize(item) {
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
