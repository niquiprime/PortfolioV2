import React from "react";

const NavBar: React.FC = () => {
  const navItems = [
    { name: "Proyectos", href: "/" },
    { name: "Sobre mi", href: "#about" },
    { name: "Habilidades", href: "#projects" },
    { name: "Contáctame", href: "#contact" },
  ];

  return (
    <nav className="text-verde-primario-50 fixed top-0 z-50 w-full ">
      <div className="container mx-auto px-4 py-3 bg-fondo backdrop-blur-sm shadow-md bg-opacity-10 rounded-b-xl">
        <ul className="flex items-center justify-center space-x-8">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a
                href={item.href}
                className="text-verde-primario-50 hover:text-verde-primario-300 transition-colors duration-200 font-medium text-sm md:text-base"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
