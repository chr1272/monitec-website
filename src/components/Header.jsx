import { useEffect, useState } from "react";
import Logo from "./Logo";
import RegionSwitcher from "./RegionSwitcher";
import { REGIONS, DEFAULT_REGION_CODE } from "../data/regions";

const NAV_ITEMS = [
  { key: "howItWorks", href: "#how-it-works" },
  { key: "dataReports", href: "#data-reports" },
  { key: "solutions", href: "#solutions" },
  { key: "about", href: "#about" },
  { key: "privacy", href: "#privacy" },
];

export default function Header() {
  const [activeRegion, setActiveRegion] = useState(
    REGIONS.find((r) => r.code === DEFAULT_REGION_CODE) ?? REGIONS[0]
  );
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-neutral-white/90 backdrop-blur-md shadow-sm border-b border-border-light"
          : "bg-neutral-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        {/* Logo */}
        <a href="#top" className="shrink-0">
          <Logo domain={activeRegion.domain} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-semibold text-text-slate transition-colors hover:text-secondary"
            >
              {activeRegion.nav[item.key]}
            </a>
          ))}
        </nav>

        {/* Right side: region switcher + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <RegionSwitcher activeRegion={activeRegion} onChange={setActiveRegion} />
          <a
            href="#request-kit"
            className="rounded-button bg-accent px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            {activeRegion.nav.cta}
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
                {activeRegion.nav[item.key]}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-3">
            <RegionSwitcher activeRegion={activeRegion} onChange={setActiveRegion} />
            <a
              href="#request-kit"
              onClick={() => setMobileOpen(false)}
              className="rounded-button bg-accent px-5 py-3 text-center text-sm font-semibold text-primary shadow-sm"
            >
              {activeRegion.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
