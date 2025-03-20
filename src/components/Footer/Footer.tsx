import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

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
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-verde-primario-400 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-verde-primario-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-gray-400 hover:text-verde-primario-400 transition-colors"
              title="Email"
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
