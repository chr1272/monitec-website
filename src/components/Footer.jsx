import { useTranslation } from "react-i18next";
import Logo from "./Logo";

export default function Footer({ domain = ".io" }) {
  const { t } = useTranslation();
  const emailDomainSuffix = domain.replace(/^\./, "");
  const contactEmail = `info@monitec.${emailDomainSuffix}`;

  return (

    <footer className="border-t border-border-light bg-neutral-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Logo domain={domain} />
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-text-slate">
            <a href="#how-it-works" className="hover:text-secondary">
              {t("nav.howItWorks")}
            </a>
            <a href="#data-reports" className="hover:text-secondary">
              {t("nav.dataReports")}
            </a>
            <a href="#solutions" className="hover:text-secondary">
              {t("nav.solutions")}
            </a>
            <a href="#about" className="hover:text-secondary">
              {t("nav.about")}
            </a>
            <a href="#privacy" className="hover:text-secondary">
              {t("nav.privacy")}
            </a>
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border-light pt-8 text-xs text-text-slate/70 sm:flex-row sm:items-center">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <a href={`mailto:${contactEmail}`} className="hover:text-secondary">
            {contactEmail}
          </a>
          <p>{t("footer.complianceNote")}</p>
        </div>

      </div>
    </footer>
  );
}
