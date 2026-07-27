import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { REGIONS } from "../data/regions";

/**
 * Dynamic Region / Language Switcher toggle.
 * Lets visitors pick between .io (EN), .at (DE) and .fr (FR).
 * Selecting a region navigates to the matching domain (or, in local/dev
 * environments where regional domains aren't available, switches the
 * in-memory i18next language directly). The URL's domain extension is the
 * sole source of truth for the display language — nothing is persisted.
 */
// The real production hostnames the site is deployed to, derived from the
// region domain suffixes (e.g. "monitec.io", "monitec.at", "monitec.fr").
const PRODUCTION_HOSTNAMES = REGIONS.map((region) => `monitec${region.domain}`);

export default function RegionSwitcher({ activeRegion }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(region) {
    const targetHostname = `monitec${region.domain}`;
    const currentHostname = window.location.hostname;
    const onProductionDomain = PRODUCTION_HOSTNAMES.includes(currentHostname);

    // On a real monitec.* production domain: navigate the browser to the
    // matching regional domain so the address bar reflects the chosen
    // language/region. The domain rule in i18n.js will pick up the correct
    // language on load. This causes a full page reload by design.
    if (onProductionDomain && currentHostname !== targetHostname) {
      window.location.href = `${window.location.protocol}//${targetHostname}${window.location.pathname}${window.location.search}${window.location.hash}`;
      return;
    }

    // Local/dev/preview environments (e.g. localhost, *.web.app) don't have
    // the regional domains available, so just switch the language in place.
    // Strip any anchor hash from the address bar and scroll cleanly to the
    // top before switching languages, so the new language content isn't
    // rendered mid-page at a now-stale anchor position.
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });

    i18n.changeLanguage(region.langCode);
    setOpen(false);
  }



  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-button border border-border-light px-3 py-1.5 text-sm font-semibold text-primary hover:border-accent hover:text-secondary transition-colors"
      >
        <span className="font-data tracking-wide">{activeRegion.domain}</span>
        <span className="text-xs text-secondary">/{activeRegion.lang}</span>
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-44 overflow-hidden rounded-card border border-border-light bg-neutral-white shadow-lg z-50"
        >
          {REGIONS.map((region) => (
            <li key={region.code}>
              <button
                type="button"
                role="option"
                aria-selected={region.code === activeRegion.code}
                onClick={() => handleSelect(region)}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                  region.code === activeRegion.code
                    ? "bg-neutral-light text-secondary font-semibold"
                    : "text-text-slate hover:bg-neutral-light"
                }`}
              >
                <span className="font-data">{region.domain}</span>
                <span className="text-xs uppercase text-secondary">{region.lang}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
