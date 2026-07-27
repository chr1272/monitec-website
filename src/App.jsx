import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";

import HowItWorks from "./components/HowItWorks";
import DataReports from "./components/DataReports";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Privacy from "./components/Privacy";
import RequestKit from "./components/RequestKit";
import Footer from "./components/Footer";
import { regionForLanguage } from "./data/regions";

function App() {
  const { t, i18n } = useTranslation();
  const activeRegion = regionForLanguage(i18n.language);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t("meta.title");
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", t("meta.description"));
  }, [i18n.language, t]);



  return (
    <div className="min-h-screen bg-neutral-light">
      <Header />

      <main id="top">
        <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <p className="tagline text-secondary text-sm mb-4">{t("hero.tagline")}</p>
          <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-slate">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#request-kit"
              className="rounded-button bg-accent px-6 py-3 font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              {t("hero.ctaDemo")}
            </a>
            <a
              href="#data-reports"
              className="rounded-button border border-secondary px-6 py-3 font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white"
            >
              {t("hero.ctaReport")}
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

      <Footer domain={activeRegion.domain} />
    </div>

  );
}

export default App;
