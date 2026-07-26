import logoIo from "../assets/logos/monitec-io.svg";
import logoAt from "../assets/logos/monitec-at.svg";
import logoFr from "../assets/logos/monitec-fr.svg";

const LOGO_BY_DOMAIN = {
  ".io": logoIo,
  ".at": logoAt,
  ".fr": logoFr,
};

/**
 * Monitec Logo — uses the official brand SVG lockups (bar-chart + road icon
 * with the "monitec" wordmark, domain suffix, and localized tagline baked
 * in), swapping the asset based on the active region (.io / .at / .fr).
 */
export default function Logo({ domain = ".io", className = "" }) {
  const src = LOGO_BY_DOMAIN[domain] ?? logoIo;

  return (
    <img
      src={src}
      alt={`Monitec${domain}`}
      className={`h-10 w-auto select-none ${className}`}
    />
  );
}
