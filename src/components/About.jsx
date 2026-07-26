const VALUES = [
  {
    title: "Privacy by Design",
    description:
      "Every product decision starts with anonymization — we build systems that measure behavior, not identity.",
  },
  {
    title: "Self-Install Simplicity",
    description:
      "Hardware that ships in a box and works out of it — no technicians, no downtime, no complexity.",
  },
  {
    title: "Decision-Ready Data",
    description:
      "We don't just collect data — we transform it into reports municipalities and planners can act on immediately.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <div>
          <p className="tagline text-secondary text-sm mb-4">About Monitec</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Built for Trustworthy, Actionable Traffic Intelligence
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-text-slate">
            Monitec designs diagnostic telemetry and decision-support systems that help
            municipalities, planners, and infrastructure teams understand how vehicles
            move through their roads — without compromising the privacy of the people
            behind the wheel.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-slate">
            Our compact, self-installable sensor kits are shipped directly to customers,
            powered by standard 230V, 12V battery, or solar setups, and return fully
            anonymized statistical reports — never video, never license plates, never
            audio recordings of conversations.
          </p>
        </div>

        <div className="space-y-6">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-card border border-border-light bg-neutral-light p-6"
            >
              <h3 className="text-lg font-bold text-primary">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-slate">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
