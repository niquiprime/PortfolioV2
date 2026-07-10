import FotoPerfil from "/FOTO.webp";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="mx-auto py-10 sm:py-16 max-w-4xl px-3 sm:px-6">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 font-nombre">
        {/* Contenido izquierdo */}
        <div className="flex-1 space-y-6 mt-6 md:mt-0 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-center md:text-left font-nombre">Sobre mi</h2>
          <div className="text-base sm:text-lg text-gray-300 leading-relaxed space-y-4 text-center md:text-left">
            <p>
              Soy Nicolás Urrea, desarrollador FullStack de Puerto Varas, Chile.
              Mi pasión por la tecnología comenzó desde pequeño y hoy estoy{" "}
              <strong className="text-cafe-secundario">
                a punto de egresar
              </strong>{" "}
              de Ingeniería Civil Informática en la Universidad Católica de Temuco.
            </p>
            <p>
              Me especializo en convertir ideas en{" "}
              <strong className="text-cafe-secundario">
                productos digitales reales
              </strong>{" "}
              usando tecnologías modernas como React, Next.js y Supabase. Mi enfoque
              es claro: ayudar a startups y emprendedores a despegar digitalmente,
              creando soluciones web que escalan con su crecimiento.
            </p>
          </div>
        </div>

        {/* Imagen derecha */}
        <div className="relative p-2 flex-shrink-0 group">
          <div className="absolute inset-0 bg-verde-primario-400/20 rounded-lg blur-xl group-hover:blur-2xl transition-[filter] duration-300" />
          <img
            src={FotoPerfil}
            alt="Nicolás Urrea, desarrollador FullStack e Ingeniero Civil Informático de Puerto Varas, Chile"
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-lg border-4 bg-gradient-to-br from-slate-200 to-verde-primario-300 ring-4 ring-verde-primario-500 shadow-lg shadow-verde-primario-400/50 transform transition-transform duration-300 group-hover:scale-105 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
