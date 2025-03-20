import React from "react";

const NavBar: React.FC = () => {
  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Proyectos", href: "#projects" },
    { name: "Sobre mi", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full mt-2 justify-center flex">
      <div className="max-w-2xl w-full mx-auto px-4 py-3 bg-fondo bg-opacity-40 backdrop-blur-sm shadow-md rounded-full">
        <ul className="flex items-center justify-between">
          <a href="#home">
            <span className="text-verde-primario-400 font-nombre">
              Nicolas Urrea
            </span>
          </a>
          <div className="flex items-center space-x-4">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  href={item.href}
                  className=" hover:text-verde-primario-400 transition-colors duration-200 font-medium text-sm md:text-base"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </div>

          <a
            href="#contact"
            className="py-1 px-4 text-sm md:text-base font-medium text bg-verde-primario-500/50  rounded-full shadow-md hover:bg-verde-primario-500 transition-colors duration-200 border-verde-primario-50/20 border"
          >
            Contáctame
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
