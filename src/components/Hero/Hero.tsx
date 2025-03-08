import React from "react";
import FotoPerfil from "../../assets/Perfil.webp";
import {
  GitHubLogoIcon,
  ChevronDownIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

import { Mail } from "lucide-react";

interface HeroProps {
  // Add props here if needed
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      className="text-verde-primario-50 relative flex min-h-screen w-full flex-col justify-center overflow-hidden"
    >
      <div className="mx-auto max-w-3xl px-4 py-32">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Contenido de texto */}
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-4xl font-semibold">
              Hola, <span className="text-verde-primario-500">soy Nicolás</span>
            </h1>
            <p className="text-lg md:text-xl mt-1 text-verde-primario-200">
              FullStack Developer
            </p>
            <p className="mt-8 mb-8 text-xl md:text-xl">
              Estudiante de{" "}
              <span className="text-cafe-secundario">
                Ingeniería en Civil Informática
              </span>
              , apasionado por la tecnología y el desarrollo de software.{" "}
              <span className="text-verde-primario-400">
                En constante aprendizaje y en busca de nuevos desafíos.
              </span>
            </p>
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
          </div>

          {/* Imagen */}
          <div className="md:w-1/4 flex justify-center">
            <div className="border-verde-primario-600/20 aspect-square overflow-hidden rounded-full border-4 shadow-2xl w-full max-w-xs">
              <img
                src={FotoPerfil}
                alt="Nicolás Urrea"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 transform animate-bounce">
              <a
                href="#projects"
                className="text-swamp-200 flex items-center gap-2 rounded-full p-2"
                aria-label="Ver Proyectos"
              >
                <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
