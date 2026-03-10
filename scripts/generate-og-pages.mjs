// scripts/generate-og-pages.mjs
// Runs after `vite build` to generate static HTML files for each blog post.
// Each file has correct OG/Twitter meta tags so social crawlers (LinkedIn, Facebook, etc.)
// can read the article's title, description and cover image without executing JavaScript.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const BASE_URL = 'https://wulingteen.github.io/nils-digital-studio';
const LANGS = ['zh', 'en', 'de'];

// ---------------------------------------------------------------------------
// 1. Parse src/data/posts.ts line-by-line to extract metadata
// ---------------------------------------------------------------------------
const postsContent = readFileSync(join(root, 'src/data/posts.ts'), 'utf8');

const posts = [];
let current = {};

for (const line of postsContent.split('\n')) {
    const idMatch      = line.match(/^\s+id:\s*"([^"]+)"/);
    const titleMatch   = line.match(/^\s+title:\s*"([^"]+)"/);
    const excerptMatch = line.match(/^\s+excerpt:\s*"([^"]+)"/);
    const coverMatch   = line.match(/^\s+coverImage:\s*"([^"]+)"/);

    if (idMatch) {
        if (current.id) posts.push({ ...current });
        current = { id: idMatch[1] };
    }
    if (current.id) {
        if (titleMatch)   current.title      = titleMatch[1];
        if (excerptMatch) current.excerpt    = excerptMatch[1];
        if (coverMatch)   current.coverImage = coverMatch[1];
    }
}
if (current.id) posts.push({ ...current });

console.log(`📋 Found ${posts.length} posts`);

// ---------------------------------------------------------------------------
// 1b. Parse src/data/posts-en.ts to extract English titles and excerpts
// ---------------------------------------------------------------------------
const postsEnContent = readFileSync(join(root, 'src/data/posts-en.ts'), 'utf8');

const titleEnMap = {};
const excerptEnMap = {};

// Parse titleEn block
const titleEnBlock = postsEnContent.match(/export const titleEn[^=]*=\s*\{([^}]+)\}/s)?.[1] || '';
for (const line of titleEnBlock.split('\n')) {
    const m = line.match(/^\s*"([^"]+)":\s*"(.*)",?$/);
    if (m) titleEnMap[m[1]] = m[2];
}

// Parse excerptEn block
const excerptEnBlock = postsEnContent.match(/export const excerptEn[^=]*=\s*\{([^}]+)\}/s)?.[1] || '';
for (const line of excerptEnBlock.split('\n')) {
    const m = line.match(/^\s*"([^"]+)":\s*"(.*)",?$/);
    if (m) excerptEnMap[m[1]] = m[2];
}

console.log(`🌐 Loaded ${Object.keys(titleEnMap).length} English titles`);

// ---------------------------------------------------------------------------
// 2. Load dist/index.html as template
// ---------------------------------------------------------------------------
const templatePath = join(root, 'dist', 'index.html');
if (!existsSync(templatePath)) {
    console.error('❌  dist/index.html not found – run `npm run build` first');
    process.exit(1);
}
const template = readFileSync(templatePath, 'utf8');

// ---------------------------------------------------------------------------
// 3. Helper: patch OG tags into the template HTML
// ---------------------------------------------------------------------------
function patchOG(html, { title, description, image, url }) {
    const fullImage = image
        ? (image.startsWith('http') ? image : `${BASE_URL}${image}`)
        : `${BASE_URL}/nils-profile.png`;

    const pageTitle = `${title} | Nils Liu`;

    return html
        // <title>
        .replace(/<title>[^<]*<\/title>/, `<title>${pageTitle}</title>`)
        // og:title
        .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/,   `$1${title}$2`)
        // og:description
        .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/,  `$1${escHtml(description)}$2`)
        // og:image
        .replace(/(<meta\s+property="og:image"\s+content=")[^"]*(")/,   `$1${fullImage}$2`)
        // og:url
        .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/,     `$1${url}$2`)
        // og:type
        .replace(/(<meta\s+property="og:type"\s+content=")[^"]*(")/,    `$1article$2`)
        // twitter:title
        .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,  `$1${title}$2`)
        // twitter:description
        .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,`$1${escHtml(description)}$2`)
        // twitter:image
        .replace(/(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,  `$1${fullImage}$2`)
        // meta description
        .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/,    `$1${escHtml(description)}$2`);
}

function escHtml(str) {
    return (str || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ---------------------------------------------------------------------------
// 4. Generate one HTML file per post × per language
// ---------------------------------------------------------------------------
let count = 0;
for (const lang of LANGS) {
    for (const post of posts) {
        const url = `${BASE_URL}/${lang}/insights/${post.id}`;
        const dirPath = join(root, 'dist', lang, 'insights', post.id);
        const filePath = join(dirPath, 'index.html');

        mkdirSync(dirPath, { recursive: true });

        const isEn = lang === 'en';
        const patched = patchOG(template, {
            title:       (isEn && titleEnMap[post.id])   ? titleEnMap[post.id]   : post.title   || 'Nils Liu',
            description: (isEn && excerptEnMap[post.id]) ? excerptEnMap[post.id] : post.excerpt || '',
            image:       post.coverImage,
            url,
        });

        writeFileSync(filePath, patched, 'utf8');
        count++;
    }
}

console.log(`✅  Generated ${count} OG HTML files (${posts.length} posts × ${LANGS.length} languages)`);
