import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./language/en/index";
import deTranslations from "./language/de/index";

const de = { common: deTranslations };
const en = { common: enTranslations };

const resources = {
  de,
  en,
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: "en",
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
