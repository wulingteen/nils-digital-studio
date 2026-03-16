import { next } from '@vercel/edge';

export const config = {
  matcher: '/',
};

export default function middleware(request: Request) {
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Parse Accept-Language header to find best match
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, q] = lang.trim().split(';q=');
      return { code: code.toLowerCase().trim(), q: q ? parseFloat(q) : 1.0 };
    })
    .sort((a, b) => b.q - a.q);
  
  let targetLang = 'en'; // default for international/unknown
  
  for (const { code } of languages) {
    if (code.startsWith('zh')) {
      targetLang = 'zh';
      break;
    }
    if (code.startsWith('de')) {
      targetLang = 'de';
      break;
    }
    if (code.startsWith('en')) {
      targetLang = 'en';
      break;
    }
  }
  
  const url = new URL(request.url);
  url.pathname = `/${targetLang}/`;
  
  return Response.redirect(url.toString(), 302);
}
