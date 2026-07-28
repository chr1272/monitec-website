import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { regionForLanguage } from "../data/regions";

// Google Calendar Appointment Scheduling booking link.
// Used both as the primary CTA target (new tab, avoids Safari/macOS
// third-party-cookie iframe blocking) and as the source for Google's
// official scheduling popup script/button.
const GOOGLE_CALENDAR_URL = "https://calendar.app.google/Suixxch7oeqBf6Gw8";

const SCHEDULING_CSS_HREF = "https://calendar.google.com/calendar/scheduling-button.css";
const SCHEDULING_JS_SRC = "https://calendar.google.com/calendar/scheduling-button.js";

export default function RequestKit() {
  const { t, i18n } = useTranslation();
  const activeRegion = regionForLanguage(i18n.language);
  const contactEmail = `info@monitec${activeRegion.domain}`;
  const popupButtonRef = useRef(null);

  useEffect(() => {
    // Load Google's official scheduling button stylesheet (idempotent).
    if (!document.querySelector(`link[href="${SCHEDULING_CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.href = SCHEDULING_CSS_HREF;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    let cancelled = false;

    const renderButton = () => {
      if (cancelled || !popupButtonRef.current) return;
      if (window.calendar?.schedulingButton && !popupButtonRef.current.dataset.rendered) {
        try {
          window.calendar.schedulingButton.load({
            url: GOOGLE_CALENDAR_URL,
            color: "#00C1D5",
            label: t("requestKit.calendarCta"),
            target: popupButtonRef.current,
          });
          popupButtonRef.current.dataset.rendered = "true";
        } catch {
          // Silently ignore — the always-visible fallback link below still works.
        }
      }
    };

    let script = document.querySelector(`script[src="${SCHEDULING_JS_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SCHEDULING_JS_SRC;
      script.async = true;
      script.addEventListener("load", renderButton);
      document.body.appendChild(script);
    } else {
      renderButton();
      script.addEventListener("load", renderButton);
    }

    return () => {
      cancelled = true;
      script?.removeEventListener("load", renderButton);
    };
  }, [t]);

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

        {/* Google Calendar booking card — replaces the raw iframe embed,
            which is blocked by default in Safari/macOS due to strict
            third-party cookie controls. */}
        <div className="mx-auto mt-10 max-w-2xl rounded-card border border-white/10 bg-white/5 px-6 py-10 text-center backdrop-blur-sm sm:px-10">
          <h3 className="text-xl font-bold text-neutral-white sm:text-2xl">
            {t("requestKit.calendarTitle")}
          </h3>

          {/* Always-visible, one-click fallback: opens Google Calendar in a
              new tab so it works even when the embedded popup script is
              blocked by cookie/tracking protections. */}
          <a
            href={GOOGLE_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-button bg-accent px-8 py-4 text-base font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            {t("requestKit.calendarCta")}
          </a>

          {/* Optional: Google's official scheduling popup button, rendered
              here if the script loads successfully. The fallback link above
              is always shown regardless, so booking never depends on it. */}
          <div ref={popupButtonRef} className="mt-4 flex justify-center" />

          <p className="mx-auto mt-4 max-w-md text-sm text-neutral-light/60">
            {t("requestKit.calendarFallbackNote")}
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-neutral-light/60">
          {t("requestKit.note")}
        </p>
        <div className="mx-auto mt-4 flex max-w-md justify-center">
          <a
            href={`mailto:${contactEmail}?subject=Product%20Demo%20Request`}
            className="shrink-0 rounded-button bg-accent px-6 py-3 font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >

            {t("requestKit.emailCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
