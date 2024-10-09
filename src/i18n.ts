import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      fallbackLng: 'en',
      debug: true,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: '/src/assets/js/i18n/{{lng}}.json',
      },
    },
    (err, _t) => {
      if (err) {
        console.error('Error loading translations:', err);
      } else {
        console.log('Translations loaded');
      }
    }
  );

export default i18n;