import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = t("howItWorks.steps", { returnObjects: true });

  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="tagline text-secondary text-sm mb-4">{t("howItWorks.tagline")}</p>
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">
          {t("howItWorks.title")}
        </h2>
        <p className="mt-4 text-lg text-text-slate">{t("howItWorks.subtitle")}</p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="group relative rounded-card border border-border-light bg-neutral-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
          >
            <span className="font-data text-4xl font-bold text-secondary/20 transition-colors group-hover:text-accent/30">
              {String(index + 1).padStart(2, "0")}
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
