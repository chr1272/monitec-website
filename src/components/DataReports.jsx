import { useTranslation } from "react-i18next";

const METRIC_KEYS = ["vehicleCount", "avgSpeed", "peakNoise", "weatherEvents"];

const METRIC_VALUES = {
  vehicleCount: { value: "12,480", trend: "+4.2%" },
  avgSpeed: { value: "38.6", trend: "-1.8%" },
  peakNoise: { value: "71.2", trend: "+0.6%" },
  weatherEvents: { value: "214", trend: "+12%" },
};

export default function DataReports() {
  const { t } = useTranslation();
  const features = t("dataReports.features", { returnObjects: true });
  const metrics = t("dataReports.metrics", { returnObjects: true });

  return (
    <section id="data-reports" className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: copy + feature list */}
          <div>
            <p className="tagline text-accent text-sm mb-4">{t("dataReports.tagline")}</p>
            <h2 className="text-3xl font-bold text-neutral-white sm:text-4xl">
              {t("dataReports.title")}
            </h2>
            <p className="mt-4 text-lg text-neutral-light/80">{t("dataReports.subtitle")}</p>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
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
              {t("dataReports.cta")}
            </a>
          </div>

          {/* Right: telemetry metric cards */}
          <div className="grid grid-cols-2 gap-4">
            {METRIC_KEYS.map((key) => {
              const metric = metrics[key];
              const { value, trend } = METRIC_VALUES[key];
              return (
                <div
                  key={key}
                  className="rounded-card border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-light/60">
                    {metric.label}
                  </p>
                  <p className="mt-3 font-data text-3xl font-bold text-neutral-white">
                    {value}
                    <span className="ml-1 text-sm font-normal text-neutral-light/60">
                      {metric.unit}
                    </span>
                  </p>
                  <p
                    className={`mt-2 text-xs font-semibold ${
                      trend.startsWith("-") ? "text-red-300" : "text-accent"
                    }`}
                  >
                    {trend} {t("dataReports.trendSuffix")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
