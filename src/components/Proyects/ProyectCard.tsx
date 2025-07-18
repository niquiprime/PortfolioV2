import { ReactNode, memo } from "react";

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
    <div className="flex flex-col md:flex-row justify-center items-center bg-verde-primario-800/80 rounded-lg shadow-md p-3 md:p-5 w-full">
      <img
        src={img}
        alt={`Mockup proyecto ${title}`}
        className="w-full md:w-96 h-48 md:h-full object-cover rounded-lg mb-4 md:mb-0"
      />
      <div className="flex flex-col justify-between items-start md:ml-5 p-2 md:p-4 leading-normal w-full">
        <h3 className="font-bold text-xl md:text-2xl mb-2">{title}</h3>
        <p className="text-base md:text-lg mb-6 md:mb-10">{description}</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 md:gap-0">
          <div className="flex gap-2 md:gap-4 mb-2 md:mb-0">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-3 py-2 md:px-4 md:py-2 rounded hover:bg-gray-700 transition duration-300 text-sm md:text-base"
            >
              Ver Proyecto
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-3 py-2 md:px-4 md:py-2 rounded hover:bg-gray-700 transition duration-300 text-sm md:text-base"
            >
              Ver Código
            </a>
          </div>
          <div className="flex gap-2">
            {tecnologies &&
              tecnologies.map((tech, index) => (
                <span key={index} className="text-xl md:text-2xl">
                  {tech}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProyectCard);
