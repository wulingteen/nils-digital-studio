import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wulingteen.github.io',
  base: '/nils-digital-studio',
  integrations: [
    react(),
    sitemap(),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'de'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
