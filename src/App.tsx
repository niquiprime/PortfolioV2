import { lazy, Suspense } from "react";
import HeroV2 from "./components/Hero/HeroV2";
import NavBar from "./components/NavBar/NavBar";

// ─── Lazy-loaded components/sections ──────────────────────────────────────────
const LightRays  = lazy(() => import("./components/ui/light-rays").then(m => ({ default: m.LightRays })));
const TechGrid   = lazy(() => import("./components/Skills/TechGrid"));
const ProjectsV2 = lazy(() => import("./components/Proyects/ProyectsV2"));
const CTABanner  = lazy(() => import("./components/Contact/CTABanner"));
const AboutMe    = lazy(() => import("./components/AboutMe/AboutMe"));
const Contact    = lazy(() => import("./components/Contact/Contact"));
const Footer     = lazy(() => import("./components/Footer/Footer"));

// Minimal fallback — invisible, just preserves layout flow
const SectionFallback = () => (
  <div className="w-full py-16" aria-hidden="true" />
);

function App() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden text-verde-primario-50">
        <div className="fixed inset-0 h-full w-full bg-fondo -z-10">
          {/* Light Rays Effect */}
          <Suspense fallback={null}>
            <LightRays
              color="rgba(96, 108, 56, 0.25)"
              count={6}
              blur={40}
              speed={18}
              length="85vh"
            />
          </Suspense>

          {/* Textura de ruido */}
          <div className="absolute inset-0 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjI1Ii8+PC9zdmc+')] opacity-20"></div>
        </div>
        <NavBar />
        <main>
          {/* HeroV2 is eagerly loaded — it IS the LCP element */}
          <HeroV2 />

          {/* Everything below the fold is lazy-loaded */}
          <Suspense fallback={<SectionFallback />}>
            <TechGrid />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ProjectsV2 />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CTABanner />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <AboutMe />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
