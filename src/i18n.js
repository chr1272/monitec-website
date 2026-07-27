import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";

export const STORAGE_KEY = "monitec_user_language";
export const SUPPORTED_LANGUAGES = ["en", "de", "fr"];

/**
 * Resolves the initial language following a strict priority:
 *
 * 1. Domain rule — country-specific TLDs always win, regardless of any
 *    previously persisted preference:
 *    - hostname ending in ".at" forces "de" (German).
 *    - hostname ending in ".fr" forces "fr" (French).
 * 2. For generic domains (".io", localhost, previews, etc.):
 *    a. Explicit user selection persisted in localStorage.
 *    b. Browser language (navigator.language) — de -> German, fr -> French,
 *       otherwise falls back to "en".
 */
export function resolveInitialLanguage() {
  const hostname = typeof window !== "undefined" ? window.location.hostname : "";

  // Priority 1: country-specific TLD domain rule — always wins.
  if (hostname.endsWith(".at")) return "de";
  if (hostname.endsWith(".fr")) return "fr";

  // Priority 2a: explicit user selection persisted from a previous visit
  // (only applies to .io / generic / local domains).
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch {
    // localStorage may be unavailable (privacy mode, SSR, etc.) — ignore.
  }

  // Priority 2b: browser language for .io / generic / local domains.
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

// Keep the <html lang="..."> attribute in sync with the active i18next
// language so browser translation tools (and assistive tech) match the
// page content cleanly.
if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
  i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
  });
}

export default i18n;
