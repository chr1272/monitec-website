import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import DataReports from "./components/DataReports";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Privacy from "./components/Privacy";
import RequestKit from "./components/RequestKit";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Header />

      <main id="top">
        <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <p className="tagline text-secondary text-sm mb-4">
            Empirical Traffic &amp; Acoustic Ground Truth
          </p>
          <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
            Empirical Traffic &amp; Acoustic Ground Truth
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-slate">
            Autonomous roadside telemetry stations delivered by carrier.
            Collect precise vehicle counts, speed vectors, decibel frequency
            bands, and weather data for decision support.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#request-kit"
              className="rounded-button bg-accent px-6 py-3 font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              Request Demo
            </a>
            <a
              href="#solutions"
              className="rounded-button border border-secondary px-6 py-3 font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white"
            >
              Explore Platform
            </a>
          </div>
        </section>

        <HowItWorks />
        <DataReports />
        <Solutions />
        <About />
        <Privacy />
        <RequestKit />
      </main>

      <Footer />
    </div>
  );
}

export default App;

