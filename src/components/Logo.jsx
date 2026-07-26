import { useEffect, useRef } from "react";
import logoAllRaw from "../assets/logos/monitec-all.svg?raw";

const LANG_BY_DOMAIN = {
  ".io": "IO",
  ".at": "AT",
  ".fr": "FR",
};

/**
 * Monitec Logo — renders the single official brand SVG (monitec-all.svg),
 * which contains a "bg" layer (always visible: icon/graph/road artwork)
 * plus three language layers (IO / AT / FR) each holding the wordmark and
 * localized tagline. Only the layer matching the active region is shown.
 */
export default function Logo({ domain = ".io", className = "" }) {
  const containerRef = useRef(null);
  const lang = LANG_BY_DOMAIN[domain] ?? "IO";

  useEffect(() => {
    const svg = containerRef.current?.querySelector("svg");
    if (!svg) return;

    const layers = svg.querySelectorAll("[inkscape\\:label]");
    layers.forEach((layer) => {
      const label = layer.getAttribute("inkscape:label");
      if (label === "bg") return;
      layer.style.display = label === lang ? "inline" : "none";
    });
  }, [lang]);

  return (
    <div
      ref={containerRef}
      className={`select-none [&_svg]:h-10 [&_svg]:w-auto ${className}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: logoAllRaw }}
      aria-label={`Monitec${domain}`}
      role="img"
    />
  );
}
