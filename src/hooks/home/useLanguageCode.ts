import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const useLanguageCode = () => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
      sessionStorage.setItem("i18nextLng", lng);
    },
    [i18n]
  );
  return {
    changeLanguage,
    i18n,
  };
};
