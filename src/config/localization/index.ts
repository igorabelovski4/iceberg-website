import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./language/en/index";
import deTranslations from "./language/de/index";

const de = { translation: deTranslations };
const en = { translation: enTranslations };

const resources = {
  de,
  en,
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
