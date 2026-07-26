const SOLUTIONS = [
  {
    title: "Municipalities & Local Government",
    description:
      "Support municipalities, citizen organizations, and traffic-calming initiatives with objective, anonymized data — ready for council presentations and community advocacy alike.",

    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"
      />
    ),
  },
  {
    title: "Traffic Planning & Engineering",
    description:
      "Get granular speed, volume, and acoustic data to model interventions, validate road-design changes, and quantify their real-world impact.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M4 19l6-14 4 8 3-4 3 10M4 19h16"
      />
    ),
  },
  {
    title: "Real Estate & Noise Compliance",
    description:
      "Document acoustic frequency spectrums near developments to support noise-impact assessments and regulatory compliance filings.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M11 5L6 9H2v6h4l5 4V5zM19 8a5 5 0 010 8M16.5 10a2.5 2.5 0 010 4"
      />
    ),
  },
  {
    title: "Research & Environmental Studies",
    description:
      "Correlate traffic behavior with live weather conditions across long-term deployments to power academic and environmental research.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 3v6m0 0l-3 3m3-3l3 3M5 21h14M7 21v-4a5 5 0 0110 0v4"
      />
    ),
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="tagline text-secondary text-sm mb-4">Who It's For</p>
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">Solutions</h2>
        <p className="mt-4 text-lg text-text-slate">
          A single telemetry platform, tailored to the decisions that matter most across
          public and private stakeholders.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {SOLUTIONS.map((solution) => (
          <div
            key={solution.title}
            className="flex gap-5 rounded-card border border-border-light bg-neutral-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-secondary/10 text-secondary">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                {solution.icon}
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">{solution.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-slate">
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
