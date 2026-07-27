import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";

export const SUPPORTED_LANGUAGES = ["en", "de", "fr"];

/**
 * Resolves the display language based solely on the current URL's hostname.
 * No cookies, no localStorage, no navigator/browser language, no other
 * state is consulted — the domain extension is the single source of truth,
 * every time the page loads.
 *
 * - hostname ending in ".at" -> "de" (German).
 * - hostname ending in ".fr" -> "fr" (French).
 * - everything else (".io", localhost, previews, etc.) -> "en" (English).
 */
export function resolveInitialLanguage() {
  const hostname = typeof window !== "undefined" ? window.location.hostname : "";

  if (hostname.endsWith(".at")) return "de";
  if (hostname.endsWith(".fr")) return "fr";

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
