/**
 * Monitec Logo — vector SVG combining a bar-chart (data analysis) with a
 * road icon (telematics / vehicles), plus a dynamic domain suffix that
 * updates in real time based on the active region (.io / .at / .fr).
 */
export default function Logo({
  domain = ".io",
  tagline,
  className = "",
  dark = false,
}) {
  const primaryTextColor = dark ? "#F4F7FA" : "#071C33";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>

      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Road icon base */}
        <path
          d="M10 40 L18 8 H30 L38 40"
          stroke="#0F75BC"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Road center dashes */}
        <line
          x1="24"
          y1="14"
          x2="24"
          y2="19"
          stroke="#0F75BC"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="24"
          x2="24"
          y2="29"
          stroke="#0F75BC"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="34"
          x2="24"
          y2="38"
          stroke="#0F75BC"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Bar chart bars (data analysis) rising from the road */}
        <rect x="6" y="30" width="4" height="10" rx="1" fill="#0F75BC" />
        <rect x="13" y="24" width="4" height="16" rx="1" fill="#00C1D5" />
        <rect x="31" y="20" width="4" height="20" rx="1" fill="#00C1D5" />
        <rect x="38" y="27" width="4" height="13" rx="1" fill="#0F75BC" />

        {/* Connected graph node highlight dot */}
        <circle cx="24" cy="8" r="3" fill="#00C1D5" />
      </svg>

      <div className="flex flex-col">
        <span className="flex items-baseline font-heading font-bold text-xl leading-none tracking-tight">
          <span style={{ color: primaryTextColor }}>monitec</span>
          <span className="text-accent">{domain}</span>
        </span>
        {tagline && (
          <span
            className="tagline mt-0.5 text-[10px] leading-none text-secondary"
            style={{ letterSpacing: "1.5px" }}
          >
            {tagline}
          </span>
        )}
      </div>
    </div>
  );
}

