import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiVite, SiTailwindcss } from "react-icons/si";
import { TbBrandAstro } from "react-icons/tb";

const techGroups = [
  {
    title: "Frontend",
    techs: [
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
      { icon: <FaCss3 className="text-blue-500" />, name: "CSS3" },
      { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <TbBrandAstro className="text-orange-400" />, name: "Astro" },
      { icon: <SiVite className="text-purple-400" />, name: "Vite" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { icon: <SiExpress className="text-gray-400" />, name: "Express" },
    ],
  },
  {
    title: "Base de datos",
    techs: [
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    ],
  },
  {
    title: "Manejo de versiones",
    techs: [
      { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
    ],
  },
];

const TechGrid = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-10 px-2 sm:px-4">
      <h2 className="text-3xl font-bold mb-8 text-left font-nombre">Stack Tecnológico</h2>
      <div className="flex flex-col gap-10">
        {techGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-4 text-verde-primario-200 font-nombre">{group.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.techs.map((tech, tIdx) => (
                <div
                  key={tIdx}
                  className="flex flex-col items-center justify-center bg-verde-primario-800/60 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:bg-verde-primario-700/80 group"
                >
                  <span className="text-5xl mb-2 group-hover:animate-pulse">{tech.icon}</span>
                  <span className="text-base font-medium text-verde-primario-50 mt-1 group-hover:text-cafe-secundario transition-colors duration-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechGrid; 