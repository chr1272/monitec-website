const STEPS = [
  {
    number: "01",
    title: "Deploy the Sensor Kit",
    description:
      "Unbox and self-install the compact roadside unit in minutes. Power it with the included 230V adapter, a 12V battery, or a solar panel — no technician visit required.",
  },
  {
    number: "02",
    title: "Collect Telemetry Data",
    description:
      "The device continuously and anonymously measures vehicle counts, speed distribution, and acoustic frequency spectrum, correlating it with live weather conditions.",
  },
  {
    number: "03",
    title: "Return & Sync",
    description:
      "Ship the unit back using the prepaid return box, or sync remotely where connectivity allows. All data is encrypted and 100% anonymized — no video, no license plates.",
  },
  {
    number: "04",
    title: "Get Your Report",
    description:
      "Receive an automated PDF & web analysis report with actionable insights — ready to support municipal decisions, traffic planning, and safety investments.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="tagline text-secondary text-sm mb-4">Simple. Fast. Compliant.</p>
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">How It Works</h2>
        <p className="mt-4 text-lg text-text-slate">
          From unboxing to insight in four straightforward steps — no installation crew,
          no complex integration.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="group relative rounded-card border border-border-light bg-neutral-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
          >
            <span className="font-data text-4xl font-bold text-secondary/20 transition-colors group-hover:text-accent/30">
              {step.number}
            </span>
            <h3 className="mt-4 text-lg font-bold text-primary">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-slate">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
