import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import deTranslations from "./language/de/index";
import chTranslations from "./language/ch/index";
import enTranslations from "./language/en/index";
import usTranslations from "./language/us/index";

const de = { common: deTranslations };
const ch = { common: chTranslations };
const en = { common: enTranslations };
const us = { common: usTranslations };

const resources = {
  de,
  ch,
  en,
  us,
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: "de",
  fallbackLng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
