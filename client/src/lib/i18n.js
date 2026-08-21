import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../data/translations/en.json';
import pa from '../data/translations/pa.json';

const stored = typeof window !== 'undefined' ? window.localStorage.getItem('phulkari-lang') : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pa: { translation: pa },
  },
  lng: stored || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
