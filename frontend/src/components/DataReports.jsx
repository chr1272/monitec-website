const METRICS = [
  { label: "Vehicle Count", value: "12,480", unit: "/ week", trend: "+4.2%" },
  { label: "Avg. Speed", value: "38.6", unit: "km/h", trend: "-1.8%" },
  { label: "Peak Noise Level", value: "71.2", unit: "dB", trend: "+0.6%" },
  { label: "Weather-Correlated Events", value: "214", unit: "flagged", trend: "+12%" },
];

const REPORT_FEATURES = [
  "Vehicle counts & classification by time-of-day",
  "Speed distribution histograms & percentile breakdowns",
  "Acoustic frequency spectrum analysis",
  "Weather correlation overlays (rain, fog, temperature)",
  "Automated PDF export & shareable web dashboard",
];

export default function DataReports() {
  return (
    <section id="data-reports" className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: copy + feature list */}
          <div>
            <p className="tagline text-accent text-sm mb-4">Data &amp; Reports</p>
            <h2 className="text-3xl font-bold text-neutral-white sm:text-4xl">
              Decision-Ready Insights, Automatically Generated
            </h2>
            <p className="mt-4 text-lg text-neutral-light/80">
              Every deployment produces a structured analysis report designed to support
              municipal and infrastructure decisions — no manual data crunching required.
            </p>

            <ul className="mt-8 space-y-3">
              {REPORT_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-neutral-light/90">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#request-kit"
              className="mt-10 inline-block rounded-button bg-accent px-6 py-3 font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              See a Sample Report
            </a>
          </div>

          {/* Right: telemetry metric cards */}
          <div className="grid grid-cols-2 gap-4">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-card border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-light/60">
                  {metric.label}
                </p>
                <p className="mt-3 font-data text-3xl font-bold text-neutral-white">
                  {metric.value}
                  <span className="ml-1 text-sm font-normal text-neutral-light/60">
                    {metric.unit}
                  </span>
                </p>
                <p
                  className={`mt-2 text-xs font-semibold ${
                    metric.trend.startsWith("-") ? "text-red-300" : "text-accent"
                  }`}
                >
                  {metric.trend} vs. last period
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
