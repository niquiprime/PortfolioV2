import { memo } from "react";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandAstro } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

// Mapa de tecnologías a iconos
const techIcons: Record<string, React.ReactNode> = {
  tailwind: <SiTailwindcss className="text-sky-400" />,
  astro: <TbBrandAstro className="text-orange-400" />,
  react: <FaReact className="text-cyan-400" />,
};

interface ProyectCardProps {
  title: string;
  img?: string;
  description: string;
  link: string;
  github: string;
  technologies: string[];
}

const ProyectCard: React.FC<ProyectCardProps> = ({
  title,
  img,
  description,
  link,
  github,
  technologies,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-verde-primario-800/80 rounded-lg shadow-md p-3 md:p-5 w-full">
      <img
        src={img}
        alt={`Mockup proyecto ${title}`}
        className="w-full md:w-96 aspect-video object-cover rounded-lg mb-4 md:mb-0"
      />
      <div className="flex flex-col justify-between items-start md:ml-5 p-2 md:p-4 leading-normal w-full">
        <h3 className="font-bold text-xl md:text-2xl mb-1">{title}</h3>
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
            {technologies.map((tech) => (
              <span key={tech} className="text-xl md:text-2xl">
                {techIcons[tech] || tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProyectCard);
