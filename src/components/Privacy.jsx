import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();
  const guarantees = t("privacy.guarantees", { returnObjects: true });

  return (
    <section id="privacy" className="bg-neutral-light py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="tagline text-secondary text-sm mb-4">{t("privacy.tagline")}</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            {t("privacy.title")}
          </h2>
          <p className="mt-4 text-lg text-text-slate">{t("privacy.subtitle")}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item) => (
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
