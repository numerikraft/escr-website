import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize from URL parameter if present, else localStorage, else default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'fr' || langParam === 'en') {
      return langParam;
    }
    const stored = localStorage.getItem('escr_language');
    if (stored === 'fr' || stored === 'en') {
      return stored;
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('escr_language', lang);
    
    // Update the URL parameter if it's there or just let it be handled by state.
    // For SEO, we don't necessarily want to force a URL reload when user clicks,
    // just changing state is fine for SPA.
  };

  // Update HTML lang attribute for SEO and accessibility
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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
