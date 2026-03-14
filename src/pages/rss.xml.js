import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  
  // Create an RSS item for every language variant we support to ensure newsletter auto-syncs catch them all.
  // In a robust single-language newsletter, we'd filter to just 'zh' or 'en'. Let's build a unified feed.
  const items = [];
  const langs = ['en', 'zh', 'de'];
  
  posts.forEach((post) => {
    langs.forEach((lang) => {
      // Determine the localized title
      const title = lang === 'en' && post.data.titleEn ? post.data.titleEn
                  : lang === 'de' && post.data.titleDe ? post.data.titleDe
                  : post.data.title;
      
      const description = lang === 'en' && post.data.excerptEn ? post.data.excerptEn
                        : lang === 'de' && post.data.excerptDe ? post.data.excerptDe
                        : post.data.excerpt;
                        
      items.push({
        title: `[${lang.toUpperCase()}] ${title}`,
        pubDate: post.data.date,
        description: description,
        link: `/nils-digital-studio/${lang}/insights/${post.id}/`,
      });
    });
  });

  // Sort by pubDate descending
  items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return rss({
    title: 'Nils Digital Studio | Insights',
    description: 'Thoughts on generative AI, design, and product architecture by Nils Liu.',
    site: context.site + 'nils-digital-studio/',
    items: items,
    customData: `<language>zh-TW</language>`, // Default lang for feed readers
  });
}
