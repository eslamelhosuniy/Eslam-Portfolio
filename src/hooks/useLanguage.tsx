import { useState, useEffect } from 'react';
import type { Language } from '../types';

const languages: Language[] = [
  { code: 'en', name: 'English', direction: 'ltr' },
  { code: 'ar', name: 'العربية', direction: 'rtl' }
];

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      const lang = languages.find(l => l.code === savedLanguage);
      if (lang) setCurrentLanguage(lang);
    }
  }, []);

  const changeLanguage = (langCode: 'en' | 'ar') => {
    const newLanguage = languages.find(l => l.code === langCode);
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
      localStorage.setItem('preferred-language', langCode);
      document.documentElement.dir = newLanguage.direction;
      document.documentElement.lang = langCode;
    }
  };

  return {
    currentLanguage,
    changeLanguage,
    languages,
    isRTL: currentLanguage.direction === 'rtl'
  };
};