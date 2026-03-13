/**
 * Minimal i18next provider for Astro React islands.
 * Provides the same `useTranslation()` API as react-i18next
 * but reads from static JSON files instead of a full i18n runtime.
 */
import React, { createContext, useContext, useMemo } from 'react';
import en from '../locales/en.json';
import zh from '../locales/zh.json';
import de from '../locales/de.json';

const translations: Record<string, any> = { en, zh, de };

interface I18nContextType {
  lang: string;
  t: (key: string, opts?: any) => any;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  t: (key) => key,
});

function getNestedValue(obj: any, key: string): any {
  return key.split('.').reduce((o, k) => o?.[k], obj);
}

export function I18nProvider({ lang, children }: { lang: string; children: React.ReactNode }) {
  const value = useMemo(() => ({
    lang,
    t: (key: string, opts?: any) => {
      const val = getNestedValue(translations[lang], key) 
                ?? getNestedValue(translations.en, key) 
                ?? key;
      
      // Support returnObjects: true (used for arrays/objects)
      if (opts?.returnObjects) {
        if (typeof val === 'string' && val === key) return []; // Fallback to empty array to prevent .map from crashing
        return val;
      }
      
      // Return string value
      return typeof val === 'string' ? val : key;
    },
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const { t, lang } = useContext(I18nContext);
  return { t, i18n: { language: lang, changeLanguage: () => {} } };
}

export function useParams() {
  const { lang } = useContext(I18nContext);
  return { lang };
}
