// Region / Domain / Language configuration
// Drives the domain suffix shown in the logo and the navbar translations.

export const REGIONS = [
  {
    code: "io",
    domain: ".io",
    lang: "EN",
    label: "International",
    tagline: "TELEMETRY DATA & ANALYSIS",

    nav: {
      howItWorks: "How it Works",
      dataReports: "Data & Reports",
      solutions: "Solutions",
      about: "About",
      privacy: "Privacy & GDPR",
      cta: "Request Demo",

    },
  },
  {
    code: "at",
    domain: ".at",
    lang: "DE",
    label: "Österreich",
    tagline: "TELEMETRIE-DATEN & ANALYSE",

    nav: {
      howItWorks: "So funktioniert's",
      dataReports: "Daten & Berichte",
      solutions: "Lösungen",
      about: "Über uns",
      privacy: "Datenschutz & DSGVO",
      cta: "Demo anfordern",

    },
  },
  {
    code: "fr",
    domain: ".fr",
    lang: "FR",
    label: "France",
    tagline: "DONNÉES DE TÉLÉMÉTRIE & ANALYSE",

    nav: {
      howItWorks: "Comment ça marche",
      dataReports: "Données & Rapports",
      solutions: "Solutions",
      about: "À propos",
      privacy: "Confidentialité & RGPD",
      cta: "Demander une démo",

    },
  },
];

export const DEFAULT_REGION_CODE = "io";
