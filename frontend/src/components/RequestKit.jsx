export default function RequestKit() {
  return (
    <section id="request-kit" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="overflow-hidden rounded-card bg-primary px-8 py-16 text-center sm:px-16">
        <p className="tagline text-accent text-sm mb-4">Get Started</p>
        <h2 className="text-3xl font-bold text-neutral-white sm:text-4xl">
          Request Your Deployment Kit
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-light/80">
          Tell us about your project and we'll ship a self-install sensor kit tailored to
          your region and use case — no commitment required.
        </p>
        <form className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row">
          <input
            type="email"
            required
            placeholder="Work email address"
            className="w-full rounded-button border border-white/20 bg-white/5 px-4 py-3 text-neutral-white placeholder:text-neutral-light/50 focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-button bg-accent px-6 py-3 font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            Request Kit
          </button>
        </form>
      </div>
    </section>
  );
}
