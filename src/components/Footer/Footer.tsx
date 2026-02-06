import React from "react";
import { Github, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Texto principal */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>por Nicolás</span>
          </div>

          {/* Enlaces sociales */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/niquiprime"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-verde-primario-400 transition-colors"
              title="GitHub"
              aria-label="Visitar perfil de GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:nicolas.u.a35@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-verde-primario-400 transition-colors"
              title="Email"
              aria-label="Enviar correo electrónico"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
