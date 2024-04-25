import React from "react";
import { useTranslation } from "react-i18next";

export const Searchbar = () => {
  const { t } = useTranslation();
  return <div>{t("searchbar")}</div>;
};
