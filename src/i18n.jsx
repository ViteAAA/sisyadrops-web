import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './lang/en.json';
import translationRU from './lang/ru.json';

// Конфигурация i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN,
            },
            ru: {
                translation: translationRU,
            },
        },
        lng: 'ru', // По умолчанию русский язык
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
