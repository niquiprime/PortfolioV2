import FotoPerfil from "/Perfil.webp";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="mx-auto py-10 sm:py-16 max-w-4xl px-3 sm:px-6">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 font-nombre">
        {/* Contenido izquierdo */}
        <div className="flex-1 space-y-6 mt-6 md:mt-0 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-center md:text-left">Sobre mi</h2>
          <div className="text-base sm:text-lg text-gray-300 leading-relaxed space-y-4 text-center md:text-left">
            <p>
              Me llamo Nicolás Urrea. Empecé en el mundo de la informática
              gracias a los videojuegos y al uso de computador desde pequeño.
              Actualmente estoy {" "}
              <strong className="text-cafe-secundario">
                cursando mis ultimos años de la carrera
              </strong>{" "}
              Ingeniería Civil Informática en la Universidad Católica de Temuco.
            </p>
            <p>
              En el largo de la carrera descubrí mi pasión hacia el mundo del
              desarrollo de soluciones tecnológicas, especialmente en la web. Mi
              objetivo es {" "}
              <strong className="text-cafe-secundario">
                desarrollar soluciones
              </strong>{" "}
              y brindar apoyo a empresas emergentes y startups, ayudándolas a
              crecer y alcanzar su máximo potencial.
            </p>
          </div>
        </div>

        {/* Imagen derecha */}
        <div className="relative p-2 flex-shrink-0 group">
          <div className="absolute inset-0 bg-verde-primario-400/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
          <img
            src={FotoPerfil}
            alt="Nicolas Urrea dev"
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-lg border-4 border-verde-primario-500 shadow-lg shadow-verde-primario-400/50 transform transition-all duration-300 group-hover:scale-105 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
