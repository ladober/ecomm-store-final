import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormControl, Select, MenuItem } from "@mui/material";

export const languageCodes = {
  en: "English",
  ka: "Georgian",
};

export const LanguageSelect = () => {
  const [langCode, setLangCode] = useState(
    () => localStorage.getItem("langCode") || "en"
  );

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("langCode", langCode);
  }, [i18n, langCode]);

  return (
    <FormControl sx={{ minWidth: 120, m: 1 }}>
      <Select
        sx={{ color: "black", border: "1px solid black" }}
        value={langCode}
        onChange={(e) => {
          setLangCode(e.target.value);
        }}
        defaultValue={langCode}
      >
        {Object.entries(languageCodes).map((item) => {
          const [languageKey, languageValue] = item;

          return (
            <MenuItem key={languageKey} value={languageKey}>
              {languageValue}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
