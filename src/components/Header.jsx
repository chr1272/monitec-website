import { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import RegionSwitcher from "./RegionSwitcher";
import { regionForLanguage } from "../data/regions";

const NAV_ITEMS = [
  { key: "howItWorks", href: "#how-it-works" },
  { key: "dataReports", href: "#data-reports" },
  { key: "solutions", href: "#solutions" },
  { key: "about", href: "#about" },
  { key: "privacy", href: "#privacy" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const activeRegion = regionForLanguage(i18n.language);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light bg-neutral-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="flex h-full shrink-0 items-center py-2">
          <Logo domain={activeRegion.domain} className="h-full" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-3 lg:flex xl:gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-semibold text-text-slate transition-colors hover:text-secondary xl:text-sm"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        {/* Right side: region switcher + CTA */}
        <div className="hidden items-center gap-2 lg:flex xl:gap-4">
          <RegionSwitcher activeRegion={activeRegion} />
          <a
            href="#request-kit"
            className="whitespace-nowrap rounded-button bg-accent px-4 py-2.5 text-[13px] font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md xl:px-5 xl:text-sm"
          >
            {t("nav.cta")}
          </a>
        </div>


        {/* Mobile menu button */}
        <button
          type="button"
          className="flex items-center justify-center rounded-button p-2 text-primary lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border-light bg-neutral-white px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-button px-2 py-3 text-sm font-semibold text-text-slate hover:bg-neutral-light hover:text-secondary"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-3">
            <RegionSwitcher activeRegion={activeRegion} />
            <a
              href="#request-kit"
              onClick={() => setMobileOpen(false)}
              className="rounded-button bg-accent px-5 py-3 text-center text-sm font-semibold text-primary shadow-sm"
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
