import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true });
  const values = t("about.values", { returnObjects: true });

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <div>
          <p className="tagline text-secondary text-sm mb-4">{t("about.tagline")}</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            {t("about.title")}
          </h2>

          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`${index === 0 ? "mt-6" : "mt-4"} text-lg leading-relaxed text-text-slate`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-6">
          {values.map((value) => (
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
