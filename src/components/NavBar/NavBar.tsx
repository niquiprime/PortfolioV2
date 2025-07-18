import React, { useState } from "react";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Proyectos", href: "#projects" },
    { name: "Sobre mi", href: "#about" },
  ];

  // Maneja la visibilidad para la animación de salida
  const handleMenuToggle = () => {
    if (!menuOpen) {
      setMenuVisible(true);
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
      setTimeout(() => setMenuVisible(false), 250); // Debe coincidir con la duración de la transición
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full mt-2 justify-center flex">
      <div className="max-w-2xl w-full mx-auto px-4 py-3 bg-fondo bg-opacity-40 backdrop-blur-sm shadow-md rounded-full">
        <div className="flex items-center justify-between w-full">
          {/* Mobile: Hamburguesa + Nombre a la izquierda */}
          <div className="flex items-center md:space-x-4">
            <div className="md:hidden flex items-center mr-2">
              <button
                onClick={handleMenuToggle}
                className="focus:outline-none p-2"
                aria-label="Abrir menú"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <a href="#home">
              <span className="text-verde-primario-400 font-nombre text-base md:text-lg">
                Nicolas Urrea
              </span>
            </a>
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-verde-primario-400 transition-colors duration-200 font-medium text-sm md:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Botón Contáctame solo en desktop */}
          <a
            href="#contact"
            className="hidden md:inline-block py-1 px-4 text-sm md:text-base font-medium text bg-verde-primario-500/50 rounded-full shadow-md hover:bg-verde-primario-500 transition-colors duration-200 border-verde-primario-50/20 border"
          >
            Contáctame
          </a>
        </div>
        {/* Mobile menu dropdown con animación */}
        {menuVisible && (
          <div
            className={`md:hidden absolute left-0 right-0 mt-2 bg-fondo bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg py-4 px-6 flex flex-col items-center space-y-4 z-50 transition-all duration-300
              ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block w-full text-center py-2 text-base font-medium hover:text-verde-primario-400 transition-colors duration-200"
                onClick={handleMenuToggle}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="w-full text-center py-2 text-base font-medium bg-verde-primario-500/50 rounded-full shadow-md hover:bg-verde-primario-500 transition-colors duration-200 border-verde-primario-50/20 border mt-2"
              onClick={handleMenuToggle}
            >
              Contáctame
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
