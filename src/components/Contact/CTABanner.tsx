import React from "react";

const CTABanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-verde-primario-700/20 via-verde-primario-600/30 to-verde-primario-800/40 shadow-xl rounded-2xl my-8 py-8 sm:py-12 md:py-16 max-w-4xl w-full px-2 sm:px-6 mx-auto flex items-center justify-center">
      <div className="w-full max-w-xl flex flex-col items-center text-center gap-6">
        <h2 className="mb-2 sm:mb-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold leading-tight text-verde-primario-50 drop-shadow-lg font-nombre">
          ¿Listo para llevar tu proyecto al siguiente nivel?
        </h2>
        <p className="mb-4 sm:mb-8 font-medium text-verde-primario-100 text-base sm:text-lg md:text-xl drop-shadow">
          Hablemos y descubre cómo puedo ayudarte a destacar en el mundo digital.
        </p>
        <a
          href="#contact"
          className="text-base sm:text-lg md:text-xl font-bold text-verde-primario-900 bg-verde-primario-50 hover:bg-verde-primario-200 focus:ring-4 focus:ring-verde-primario-300 rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none w-full max-w-xs"
        >
          ¡Trabajemos Juntos!
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
