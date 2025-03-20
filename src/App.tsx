import HeroV2 from "./components/Hero/HeroV2";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Proyects/Proyects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden text-verde-primario-50">
        <div className="fixed inset-0 h-full w-full bg-fondo -z-10">
          {/* Efecto de resplandor pulsante */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,#606c3815,transparent)] animate-pulse"></div>

          {/* Textura de ruido */}
          <div className="absolute inset-0 [background-image:url(&#x27;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjI1Ii8+PC9zdmc+&#x27;)] opacity-30"></div>

          {/* Gradiente principal verde */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,#41492b30,transparent)]"></div>

          {/* Gradiente secundario en esquina */}
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,#606c3820,transparent)]"></div>
        </div>
        <NavBar />
        <main>
          <HeroV2 />
        </main>
        <Projects />
        <Skills />
      </div>
    </>
  );
}

export default App;
