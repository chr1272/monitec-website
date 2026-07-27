// Region / Domain / Language configuration
// Drives the domain suffix shown in the logo and the i18n language code
// used when a visitor manually picks a region from the switcher.

export const REGIONS = [
  {
    code: "io",
    domain: ".io",
    lang: "EN",
    langCode: "en",
    label: "International",
  },
  {
    code: "at",
    domain: ".at",
    lang: "DE",
    langCode: "de",
    label: "Österreich",
  },
  {
    code: "fr",
    domain: ".fr",
    lang: "FR",
    langCode: "fr",
    label: "France",
  },
];

export const DEFAULT_REGION_CODE = "io";

// Maps an i18n language code back to its corresponding region, so the UI
// (logo domain suffix, switcher highlight) stays in sync with the active
// i18next language regardless of how it was resolved (saved choice, domain
// rule, or browser language).
export function regionForLanguage(langCode) {
  return REGIONS.find((r) => r.langCode === langCode) ?? REGIONS[0];
}
