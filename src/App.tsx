import HeroV2 from "./components/Hero/HeroV2";
import NavBar from "./components/NavBar/NavBar";
import ProjectsV2 from "./components/Proyects/ProyectsV2";
import TechGrid from "./components/Skills/TechGrid";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CTABanner from "./components/Contact/CTABanner";
import { LightRays } from "./components/ui/light-rays";

function App() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden text-verde-primario-50">
        <div className="fixed inset-0 h-full w-full bg-fondo -z-10">
          {/* Light Rays Effect */}
          <LightRays
            color="rgba(96, 108, 56, 0.25)"
            count={12}
            blur={80}
            speed={18}
            length="85vh"
          />

          {/* Textura de ruido */}
          <div className="absolute inset-0 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjI1Ii8+PC9zdmc+')] opacity-20"></div>
        </div>
        <NavBar />
        <main>
          <HeroV2 />
          <TechGrid />
          <ProjectsV2 />
          <CTABanner />
          <AboutMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
