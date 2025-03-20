import React from "react";
import FotoPerfil from "../../assets/Perfil.webp";

const AboutMe: React.FC = () => {
  return (
    <div id="about" className="container mx-auto py-16 max-w-3xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Contenido izquierdo */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold bg-clip-text">Sobre mi</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error
            similique dolor sequi sit magni! Tempore, quam adipisci dolor
            distinctio, ab ullam quod molestiae rem dolores ipsa libero? Dicta,
            voluptas!
          </p>
        </div>

        {/* Imagen derecha */}
        <div className="flex-shrink-0 group">
          <div className="relative p-2">
            <div className="absolute inset-0 bg-verde-primario-400/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
            <img
              src={FotoPerfil}
              alt="Nicolas Urrea dev"
              className="relative w-64 h-64 object-cover rounded-lg border-4 border-verde-primario-400 shadow-lg shadow-verde-primario-400/50 transform transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
