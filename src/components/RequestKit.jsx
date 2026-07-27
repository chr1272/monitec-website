import { useTranslation } from "react-i18next";

// Google Calendar Appointment Scheduling booking link.
const GOOGLE_CALENDAR_EMBED_URL = "https://calendar.app.google/Suixxch7oeqBf6Gw8";

export default function RequestKit() {
  const { t } = useTranslation();

  return (
    <section id="request-kit" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="overflow-hidden rounded-card bg-primary px-8 py-16 sm:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="tagline text-accent text-sm mb-4">{t("requestKit.tagline")}</p>
          <h2 className="text-3xl font-bold text-neutral-white sm:text-4xl">
            {t("requestKit.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-light/80">
            {t("requestKit.subtitle")}
          </p>
        </div>

        {/* Google Calendar Appointment Scheduling embed */}
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-card border border-white/10 bg-neutral-white shadow-lg">
          <iframe
            src={GOOGLE_CALENDAR_EMBED_URL}
            title={t("requestKit.iframeTitle")}
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-neutral-light/60">
          {t("requestKit.note")}
        </p>
        <div className="mx-auto mt-4 flex max-w-md justify-center">
          <a
            href="mailto:hello@monitec.io?subject=Product%20Demo%20Request"
            className="shrink-0 rounded-button bg-accent px-6 py-3 font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            {t("requestKit.emailCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
