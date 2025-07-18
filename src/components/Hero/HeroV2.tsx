import FotoPerfil from "/Perfil.webp";
import {
  GitHubLogoIcon,
  ChevronDownIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

import { Mail } from "lucide-react";

const HeroV2: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen mx-auto max-w-full sm:max-w-[95vw] md:max-w-[740px] px-4 sm:px-8 py-32 sm:py-40 md:py-44 flex flex-col md:flex-row items-center md:items-center justify-center"
    >
      {/* Foto a la izquierda en desktop */}
      <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto mb-6 md:mb-0 md:mr-10">
        <img
          className="rounded-full p-1 w-24 h-24 sm:w-20 sm:h-20 md:w-32 md:h-32 object-cover"
          src={FotoPerfil}
          alt="Foto Nicolas Urrea"
        />
      </div>
      {/* Contenido a la derecha en desktop */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-nombre">
          Hola,{" "}
          <span className="text-verde-primario-500">
            soy <span className="font-nombre">Nicolás</span>
          </span>
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl mt-2 sm:mt-1 text-verde-primario-200">
          FullStack Developer
        </h2>
        <h3 className="my-6 sm:my-8 text-base sm:text-lg md:text-xl text-wrap opacity-80 max-w-full sm:max-w-[500px]">
          Estudiante de{" "}
          <span className="text-cafe-secundario">
            Ingeniería en Civil Informática
          </span>{" "}
          de Puerto Varas, Chile. con experiencia en{" "}
          <span className="text-verde-primario-300">desarrollo web y móvil.</span>
        </h3>
        <nav className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center md:items-start justify-center md:justify-start">
          <a
            href="#"
            className="w-full sm:w-auto justify-center rounded-full flex items-center gap-1 border-verde-primario-50/20 border p-3 sm:p-4 bg-verde-primario-800/50 h-12 sm:h-10 text-base sm:text-sm"
          >
            <GitHubLogoIcon className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a
            href="#"
            className="w-full sm:w-auto justify-center rounded-full flex items-center gap-1 border-verde-primario-50/20 border p-3 sm:p-4 bg-verde-primario-800/50 h-12 sm:h-10 text-base sm:text-sm"
          >
            <LinkedInLogoIcon className="w-6 h-6" />
            <span>Linkedin</span>
          </a>
          <a
            href="mailto:nicolas.u.a35@gmail.com"
            className="w-full sm:w-auto justify-center rounded-full flex items-center gap-1 border-verde-primario-50/20 border p-3 sm:p-4 bg-verde-primario-800/50 h-12 sm:h-10 text-base sm:text-sm"
          >
            <Mail className="w-6 h-6" />
            <span className="truncate">nicolas.u.a35@gmail.com</span>
          </a>
        </nav>
      </div>
      <div className="absolute bottom-4 sm:bottom-2 left-1/2 -translate-x-1/2 transform animate-bounce">
        <a
          href="#projects"
          className="text-verde-50 flex items-center gap-2 rounded-full p-2"
          aria-label="Ver Proyectos"
        >
          <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default HeroV2;
