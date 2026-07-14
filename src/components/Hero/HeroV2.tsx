import FotoPerfil from "/FotoPerfil.webp";

const HeroV2: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen mx-auto max-w-full sm:max-w-[95vw] md:max-w-[740px] px-4 sm:px-8 py-32 sm:py-40 md:py-44 flex flex-col md:flex-row items-center md:items-center justify-center"
    >
      {/* Foto a la izquierda en desktop */}
      <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto mb-6 md:mb-0 md:mr-10">
        <img
          className="bg-gradient-to-br from-slate-200 to-verde-primario-300 ring-4 ring-verde-primario-500 rounded-full p-1 w-24 h-24 sm:w-20 sm:h-20 md:w-32 md:h-32 object-cover"
          src={FotoPerfil}
          alt="Nicolás Urrea, FullStack Developer de Puerto Varas, Chile"
          width={128}
          height={128}
          fetchPriority="high"
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
        <p className="my-6 sm:my-8 text-base sm:text-lg md:text-xl text-wrap opacity-80 max-w-full sm:max-w-[500px]">
          Desarrollador FullStack de{" "}
          <span className="text-cafe-secundario">
            Puerto Varas, Chile
          </span>
          . Especializado en crear{" "}
          <span className="text-verde-primario-300">soluciones web y móviles</span>{" "}
          que transforman ideas en productos digitales funcionales.
        </p>
        <nav className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center md:items-start justify-center md:justify-start">
          <a
            href="https://github.com/niquiprime"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center rounded-full flex items-center gap-1 border-verde-primario-50/20 border p-3 sm:p-4 bg-verde-primario-800/50 h-12 sm:h-10 text-base sm:text-sm hover:bg-verde-primario-700/50 transition-colors"
          >
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path
                d="M7.49933 0.25C3.4962 0.25 0.25 3.49593 0.25 7.50067C0.25 10.703 2.327 13.4193 5.20617 14.3779C5.56877 14.445 5.70035 14.2194 5.70035 14.0301C5.70035 13.8613 5.69467 13.4141 5.69138 12.8224C3.67434 13.2599 3.2492 11.8522 3.2492 11.8522C2.92005 11.0163 2.4449 10.7937 2.4449 10.7937C1.78673 10.3444 2.49479 10.3533 2.49479 10.3533C3.2229 10.4045 3.6063 11.0999 3.6063 11.0999C4.25308 12.2078 5.30457 11.8876 5.71963 11.7013C5.78548 11.2322 5.9728 10.9125 6.17982 10.7317C4.56947 10.5491 2.87652 9.92723 2.87652 7.15064C2.87652 6.35967 3.1589 5.71261 3.62312 5.20573C3.54823 5.02241 3.29955 4.28582 3.69429 3.29172C3.69429 3.29172 4.30225 3.09722 5.6833 4.03223C6.26085 3.87153 6.8797 3.79182 7.4955 3.7885C8.1113 3.79182 8.73016 3.87153 9.30944 4.03223C10.6888 3.09722 11.2949 3.29172 11.2949 3.29172C11.6914 4.28582 11.4427 5.02241 11.3681 5.20573C11.8338 5.71261 12.1145 6.35967 12.1145 7.15064C12.1145 9.9348 10.4192 10.5466 8.80357 10.7255C9.0631 10.9495 9.29462 11.3917 9.29462 12.0664C9.29462 13.0323 9.28575 13.8118 9.28575 14.0301C9.28575 14.2213 9.41584 14.4485 9.78368 14.3761C12.6612 13.4157 14.7367 10.7013 14.7367 7.50067C14.7367 3.49593 11.4905 0.25 7.49933 0.25Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="mailto:nicolas.u.a35@gmail.com"
            className="w-full sm:w-auto justify-center rounded-full flex items-center gap-1 border-verde-primario-50/20 border p-3 sm:p-4 bg-verde-primario-800/50 h-12 sm:h-10 text-base sm:text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="truncate">nicolas.u.a35@gmail.com</span>
          </a>
        </nav>
      </div>
      <div className="absolute bottom-4 sm:bottom-2 left-1/2 -translate-x-1/2 transform animate-bounce">
        <a
          href="#projects"
          className="text-verde-50 flex items-center gap-2 rounded-full p-2"
          aria-label="Ir a la sección de proyectos"
        >
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path
              d="M3.13523 6.15767C3.3241 5.95677 3.64057 5.94632 3.84147 6.1352L7.5 9.57018L11.1585 6.1352C11.3594 5.94632 11.6759 5.95677 11.8648 6.15767C12.0537 6.35857 12.0432 6.67504 11.8423 6.86392L7.84233 10.621C7.64614 10.8055 7.35386 10.8055 7.15767 10.621L3.15767 6.86392C2.95677 6.67504 2.94632 6.35857 3.13523 6.15767Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroV2;
