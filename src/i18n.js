import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./languages/en/en.json";
import sqLang from "./languages/sq/sq.json";

const language = localStorage.getItem("i18nextLng");

const resources = {
  en: {
    translation: enLang,
  },
  sq: {
    translation: sqLang,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: language || "en",
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
