import en from '../locales/en.json';
import zh from '../locales/zh.json';
import de from '../locales/de.json';

const translations: Record<string, Record<string, string>> = { en, zh, de };

export const LANGS = ['en', 'zh', 'de'] as const;
export type Lang = (typeof LANGS)[number];

export function t(lang: string, key: string, fallback?: string): string {
  const keys = key.split('.');
  let val: any = translations[lang];
  for (const k of keys) {
    val = val?.[k];
  }
  if (typeof val === 'string') return val;

  // Fallback to English
  val = translations.en;
  for (const k of keys) {
    val = val?.[k];
  }
  if (typeof val === 'string') return val;

  return fallback ?? key;
}

export function getDefaultLang(): Lang {
  return 'en';
}
