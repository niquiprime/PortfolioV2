import React from "react";
import FotoPerfil from "../../assets/Perfil.webp";
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
      className="relative w-full min-h-screen mx-auto lg:w-[740px] py-44"
    >
      <img
        className="rounded-full p-1 w-14 h-14 object-cover mb-3"
        src={FotoPerfil}
        alt="Foto Nicolas Urrea"
      />
      <h1 className="text-4xl md:text-4xl font-semibold">
        Hola,{" "}
        <span className="text-verde-primario-500">
          soy <span className="font-nombre">Nicolás</span>
        </span>
      </h1>
      <h2 className="text-lg md:text-xl mt-1 text-verde-primario-200">
        FullStack Developer
      </h2>
      <h3 className="my-8 text-xl text-wrap opacity-80 max-w-[500px]">
        Estudiante de{" "}
        <span className="text-cafe-secundario">
          Ingeniería en Civil Informática
        </span>{" "}
        de Puerto Varas, Chile. con experiencia en{" "}
        <span className="text-verde-primario-300">desarrollo web y móvil.</span>
      </h3>
      <nav className="flex gap-3">
        <a
          href="#"
          className="rounded-full flex items-center gap-1 border-verde-primario-50/20 border p-4 bg-verde-primario-800/50 h-10"
        >
          <GitHubLogoIcon className="w-6 h-6" />
          <span>GitHub</span>
        </a>
        <a
          href="#"
          className="rounded-full flex items-center gap-1 border-verde-primario-50/20 border p-4 bg-verde-primario-800/50 h-10"
        >
          <LinkedInLogoIcon className="w-6 h-6" />
          <span>Linkedin</span>
        </a>
        <a
          href="#"
          className="rounded-full flex items-center gap-1 border-verde-primario-50/20 border p-4 bg-verde-primario-800/50 h-10"
        >
          <Mail className="w-6 h-6" />
          <span>nicolas.u.a35@gmail.com</span>
        </a>
      </nav>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 transform animate-bounce">
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
