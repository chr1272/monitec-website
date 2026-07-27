import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";

export const STORAGE_KEY = "monitec_user_language";
export const SUPPORTED_LANGUAGES = ["en", "de", "fr"];

/**
 * Resolves the initial language following a strict 3-tier priority:
 *
 * 1. Explicit user selection (persisted in localStorage) — always wins.
 * 2. Domain rule — .fr forces "fr", .at forces "de".
 * 3. Browser language — used only for .io / generic / local domains.
 *    Falls back to "en" when nothing else matches.
 */
export function resolveInitialLanguage() {
  // Priority 1: explicit user selection persisted from a previous visit.
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch {
    // localStorage may be unavailable (privacy mode, SSR, etc.) — ignore.
  }

  const hostname = typeof window !== "undefined" ? window.location.hostname : "";

  // Priority 2: domain rule.
  if (hostname.endsWith(".fr")) return "fr";
  if (hostname.endsWith(".at")) return "de";

  // Priority 3: browser language for .io / generic / local domains.
  const browserLanguages =
    (typeof navigator !== "undefined" &&
      (navigator.languages?.length ? navigator.languages : [navigator.language])) ||
    [];

  for (const lang of browserLanguages) {
    if (!lang) continue;
    const normalized = lang.toLowerCase();
    if (normalized.startsWith("de")) return "de";
    if (normalized.startsWith("fr")) return "fr";
  }

  return "en";
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    fr: { translation: fr },
  },
  lng: resolveInitialLanguage(),
  fallbackLng: "en",
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
});

export default i18n;
