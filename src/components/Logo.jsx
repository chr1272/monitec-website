import { useLayoutEffect, useRef } from "react";
import logoAllRaw from "../assets/logos/monitec-all.svg?raw";

// Maps the active region domain to the corresponding Inkscape layer id
// inside monitec-all.svg (layer1 = "bg", always visible).
const LAYER_ID_BY_DOMAIN = {
  ".io": "layer2",
  ".at": "layer3",
  ".fr": "layer4",
};

const LANGUAGE_LAYER_IDS = ["layer2", "layer3", "layer4"];

/**
 * Monitec Logo — renders the single official brand SVG (monitec-all.svg),
 * which contains a "bg" layer (always visible: icon/graph/road artwork)
 * plus three language layers (IO / AT / FR) each holding the wordmark and
 * localized tagline. Only the layer matching the active region is shown.
 *
 * The layer visibility is re-applied on every render (not just when the
 * domain prop changes) via useLayoutEffect with no dependency array, so
 * the correct layer is guaranteed to be shown at all times — including
 * after unrelated re-renders (e.g. header scroll state changes) — and it
 * runs synchronously before paint to avoid any flash of the wrong layer.
 */
export default function Logo({ domain = ".io", className = "h-10" }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const svg = containerRef.current?.querySelector("svg");
    if (!svg) return;

    const activeLayerId = LAYER_ID_BY_DOMAIN[domain] ?? "layer2";

    LANGUAGE_LAYER_IDS.forEach((id) => {
      const layer = svg.querySelector(`#${id}`);
      if (layer) {
        layer.style.display = id === activeLayerId ? "inline" : "none";
      }
    });
  });

  return (
    <div
      ref={containerRef}
      className={`select-none [&_svg]:h-full [&_svg]:w-auto ${className}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: logoAllRaw }}
      aria-label={`Monitec${domain}`}
      role="img"
    />
  );
}
