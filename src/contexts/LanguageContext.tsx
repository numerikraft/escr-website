import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, namespace?: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// A simple translation registry. We will populate this as we go page by page.
const translations: Record<string, Record<string, any>> = {
  en: {},
  fr: {}
};

export const registerTranslations = (lang: Language, namespace: string, data: any) => {
  if (!translations[lang][namespace]) {
    translations[lang][namespace] = data;
  } else {
    translations[lang][namespace] = { ...translations[lang][namespace], ...data };
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Update HTML lang attribute for SEO and accessibility
  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, namespace: string = 'common') => {
    const keys = key.split('.');
    let value = translations[language]?.[namespace];
    
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    
    if (value === undefined) {
      console.warn(`Translation key not found: ${namespace}:${key} for lang ${language}`);
      // Fallback to English
      let fallback = translations['en']?.[namespace];
      for (const k of keys) {
        if (fallback === undefined) break;
        fallback = fallback[k];
      }
      return fallback !== undefined ? fallback : key;
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
