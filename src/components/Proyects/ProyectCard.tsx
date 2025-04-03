import React, { ReactNode } from "react";

interface ProyectCardProps {
  title: string;
  img?: string; // Optional property for image
  description: string;
  link: string;
  github: string;
  tecnologies: ReactNode[]; // Optional property for technologies
}

const ProyectCard: React.FC<ProyectCardProps> = ({
  title,
  img,
  description,
  link,
  github,
  tecnologies,
}) => {
  return (
    <div className="flex flex-row justify-center items-center bg-verde-primario-800/80 rounded-lg shadow-md p-5">
      <img
        src={img}
        alt={`Mockup proyecto ${title}`}
        className="aspect-auto w-96 h-full object-cover rounded-lg"
      />
      <div className="flex flex-col justify-between items-start ml-5 p-4 leading-normal">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p className="text-lg mb-10">{description}</p>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
            >
              Ver Proyecto
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
            >
              Ver Código
            </a>
          </div>
          <div className="flex gap-2">
            {tecnologies &&
              tecnologies.map((tech, index) => (
                <span key={index} className="text-2xl">
                  {tech}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
