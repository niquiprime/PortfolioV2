import React from "react";
import { Mail, User, Send } from "lucide-react"; // Asegúrate de tener lucide-react instalado

const ContactForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full pl-10 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700 focus:ring-1 focus:ring-verde-primario-400 focus:border-transparent transition-all outline-none"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full pl-10 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700 focus:ring-1 focus:ring-verde-primario-400 focus:border-transparent transition-all outline-none"
          />
        </div>

        <textarea
          placeholder="Tu mensaje"
          rows={4}
          className="w-full p-3 bg-neutral-800/50 rounded-lg border border-neutral-700 focus:ring-1 focus:ring-verde-primario-400 focus:border-transparent transition-all outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full p-3 flex items-center justify-center gap-2 bg-gradient-to-r bg-cafe-secundario/50 text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        <Send className="w-5 h-5" />
        Enviar mensaje
      </button>
    </form>
  );
};

export default ContactForm;
