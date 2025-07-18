import React from "react";

const CTABanner: React.FC = () => {
  return (
    <section className="bg-transparent">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-verde-primario-100">
          ¿Listo para llevar tu proyecto al siguiente nivel?
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg">
          Hablemos y descubre cómo puedo ayudarte a destacar en el mundo digital.
          </p>
          <a
            href="#contact"
            className="text-verde-primario-50 bg-verde-primario-700 hover:bg-verde-primario-800 focus:ring-4 focus:ring-verde-primario-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-verde-primario-600 dark:hover:bg-verde-primario-700 focus:outline-none dark:focus:ring-verde-primario-800"
          >
            Trabajemos juntos!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
