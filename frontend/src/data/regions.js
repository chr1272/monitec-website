// Region / Domain / Language configuration
// Drives the domain suffix shown in the logo and the navbar translations.

export const REGIONS = [
  {
    code: "io",
    domain: ".io",
    lang: "EN",
    label: "International",
    nav: {
      howItWorks: "How it Works",
      dataReports: "Data & Reports",
      solutions: "Solutions",
      about: "About",
      privacy: "Privacy & GDPR",
      cta: "Request Deployment Kit",
    },
  },
  {
    code: "at",
    domain: ".at",
    lang: "DE",
    label: "Österreich",
    nav: {
      howItWorks: "So funktioniert's",
      dataReports: "Daten & Berichte",
      solutions: "Lösungen",
      about: "Über uns",
      privacy: "Datenschutz & DSGVO",
      cta: "Deployment-Kit anfordern",
    },
  },
  {
    code: "fr",
    domain: ".fr",
    lang: "FR",
    label: "France",
    nav: {
      howItWorks: "Comment ça marche",
      dataReports: "Données & Rapports",
      solutions: "Solutions",
      about: "À propos",
      privacy: "Confidentialité & RGPD",
      cta: "Demander le kit de déploiement",
    },
  },
];

export const DEFAULT_REGION_CODE = "io";
