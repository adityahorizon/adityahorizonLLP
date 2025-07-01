
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from '../locales/index.js';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
