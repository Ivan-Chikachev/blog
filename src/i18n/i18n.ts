import { use } from 'i18next';
import { initReactI18next, useTranslation, Trans } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { EnDirectory } from './directoryEn';
import { RuDirectory } from './directoryRu';

use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: EnDirectory,
            },
            ru: {
                translation: RuDirectory,
            },
        },
    });

export { useTranslation, Trans };
