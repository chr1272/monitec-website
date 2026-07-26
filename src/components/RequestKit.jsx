// Google Calendar Appointment Scheduling embed URL.
// Replace this with your own appointment schedule's public embed link:
// Google Calendar → Settings → Appointment schedules → [your schedule] → "Share" → "Embed" tab → copy the src URL.
const GOOGLE_CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2wL0qsRxLxNc6RgU3z2xL6xGx5ExamplePlaceholder?gv=true";

export default function RequestKit() {
  return (
    <section id="request-kit" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="overflow-hidden rounded-card bg-primary px-8 py-16 sm:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="tagline text-accent text-sm mb-4">Product Demo</p>
          <h2 className="text-3xl font-bold text-neutral-white sm:text-4xl">
            Schedule Your Product Demo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-light/80">
            Interested in seeing Monitec in action? Pick a time that works for you
            directly on our calendar below, and we'll walk you through a live
            deployment kit demo tailored to your use case — no commitment required.
          </p>
        </div>

        {/* Google Calendar Appointment Scheduling embed */}
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-card border border-white/10 bg-neutral-white shadow-lg">
          <iframe
            src={GOOGLE_CALENDAR_EMBED_URL}
            title="Schedule a Monitec product demo"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-neutral-light/60">
          Prefer email? You can also reach us directly and we'll help you find a slot.
        </p>
        <div className="mx-auto mt-4 flex max-w-md justify-center">
          <a
            href="mailto:hello@monitec.io?subject=Product%20Demo%20Request"
            className="shrink-0 rounded-button bg-accent px-6 py-3 font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            Email Us Instead
          </a>
        </div>
      </div>
    </section>
  );
}
