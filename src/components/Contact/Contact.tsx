import React, { useState } from "react";
import { Copy, CheckCheck, Mail, Download } from "lucide-react";
import { IconCloudDemo } from "./Globe";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "nicolas.u.a35@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar el correo:", err);
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center mx-auto py-10 sm:py-16 max-w-4xl px-3 sm:px-6"
    >
      <div className="w-full max-w-6xl p-8 flex space-y-8 flex-col md:flex-row gap-10">
        {/* Columna Izquierda */}
        <div className="flex-1 space-y-6 flex flex-col justify-center">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-verde-primario-400 to-cafe-secundario bg-clip-text text-transparent font-nombre">
              ¿Interesado en contactarme?
            </h2>
            <p className="text-gray-400">Envíame un mensaje</p>
          </div>

          <div className="relative">
            <div className="flex items-center gap-2 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
              <input
                type="text"
                value={email}
                readOnly
                className="w-full bg-transparent outline-none text-gray-300"
              />
              <button
                onClick={handleCopyEmail}
                className="p-2 hover:bg-neutral-700 rounded-md transition-colors"
                title="Copiar email"
              >
                {copied ? (
                  <CheckCheck className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
            <div className="flex gap-4 mt-5">
              <a
                href={`mailto:${email}`}
                className="flex-1 flex items-center justify-center gap-2 p-3 bg-verde-primario-400 hover:bg-verde-primario-500 text-black font-medium rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
                Enviar Email
              </a>

              <a
                href="/CV_NicolasUrrea.pdf" // Reemplaza con la ruta real a tu CV
                download="NicolasUrrea-CV.pdf" // Nombre del archivo al descargar
                className="flex-1 flex items-center justify-center gap-2 p-3 border-2 border-verde-primario-400 text-verde-primario-400 hover:bg-verde-primario-400 hover:text-black font-medium rounded-lg transition-colors"
              >
                <Download className="w-5 h-5" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="flex-1">
          <IconCloudDemo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
