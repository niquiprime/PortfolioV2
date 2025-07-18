import React from "react";

const CTABanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-verde-primario-700/20 via-verde-primario-600/30 to-verde-primario-800/40 shadow-xl rounded-2xl my-8 py-10 sm:py-16 max-w-4xl px-3 sm:px-6 mx-auto">
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className="mb-4 text-4xl sm:text-5xl tracking-tight font-extrabold leading-tight text-verde-primario-50 drop-shadow-lg">
          ¿Listo para llevar tu proyecto al siguiente nivel?
        </h2>
        <p className="mb-8 font-medium text-verde-primario-100 md:text-xl drop-shadow">
          Hablemos y descubre cómo puedo ayudarte a destacar en el mundo digital.
        </p>
        <a
          href="#contact"
          className="text-lg sm:text-xl font-bold text-verde-primario-900 bg-verde-primario-50 hover:bg-verde-primario-200 focus:ring-4 focus:ring-verde-primario-300 rounded-full px-8 py-4 shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none"
        >
          ¡Trabajemos Juntos!
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
