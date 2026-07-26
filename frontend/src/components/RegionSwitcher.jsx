import { useEffect, useRef, useState } from "react";
import { REGIONS } from "../data/regions";

/**
 * Dynamic Region / Domain Switcher toggle.
 * Lets visitors pick between .io (EN), .at (DE) and .fr (FR).
 * Selecting a region updates the logo domain suffix and navbar
 * language in real time via the onChange callback.
 */
export default function RegionSwitcher({ activeRegion, onChange }) {
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
        <span className="text-xs text-secondary">/ {activeRegion.lang}</span>
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
                onClick={() => {
                  onChange(region);
                  setOpen(false);
                }}
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
