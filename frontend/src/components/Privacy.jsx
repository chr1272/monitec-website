const GUARANTEES = [
  {
    title: "No Video or Image Storage",
    description:
      "Our sensors process signals in real time and never store video footage or still images of vehicles or people.",
  },
  {
    title: "No License Plate Recognition",
    description:
      "Vehicle identification is never performed — data is captured and reported purely as anonymized statistics.",
  },
  {
    title: "GDPR & CNIL Compliant",
    description:
      "Fully aligned with EU GDPR and French CNIL requirements, as well as Austrian DSGVO standards for municipal deployments.",
  },
  {
    title: "100% Anonymized Statistics",
    description:
      "All outputs — counts, speed distributions, acoustic spectrums — are aggregate statistical data with no personal identifiers.",
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="bg-neutral-light py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="tagline text-secondary text-sm mb-4">Privacy &amp; GDPR</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Compliance Built Into Every Layer
          </h2>
          <p className="mt-4 text-lg text-text-slate">
            Monitec is engineered from the ground up to respect the privacy of every
            individual on the road, while still delivering the insights decision-makers
            need.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map((item) => (
            <div
              key={item.title}
              className="rounded-card border border-border-light bg-neutral-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-bold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-slate">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
