import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaDatabase } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandAstro } from "react-icons/tb";
import { Marquee } from "../ui/marquee";

const techGroups = [
  {
    title: "Frontend",
    techs: [
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
      { icon: <FaCss3 className="text-blue-500" />, name: "CSS3" },
      { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
      { icon: <TbBrandAstro className="text-orange-400" />, name: "Astro" },
      { icon: <SiVite className="text-purple-400" />, name: "Vite" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
    ],
  },
  {
    title: "Base de datos",
    techs: [
      { icon: <SiSupabase className="text-emerald-400" />, name: "Supabase" },
      { icon: <SiPostgresql className="text-sky-500" />, name: "PostgreSQL" },
      { icon: <FaDatabase className="text-blue-400" />, name: "SQL" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    ],
  },
  {
    title: "Herramientas",
    techs: [{ icon: <FaGitAlt className="text-orange-600" />, name: "Git" }],
  },
];

const TechCard = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) => {
  return (
    <div className="flex items-center gap-3 bg-verde-primario-800/60 backdrop-blur-sm rounded-xl px-5 py-3 border border-verde-primario-600/30 hover:bg-verde-primario-700/80 hover:border-verde-primario-500/50 transition-all duration-300 group cursor-default">
      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="text-base font-medium text-verde-primario-50 group-hover:text-cafe-secundario transition-colors duration-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

const TechGrid = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-10 px-2 sm:px-4">
      <h2 className="text-3xl font-bold mb-10 text-left font-nombre">
        Stack Tecnológico
      </h2>
      <div className="flex flex-col gap-8">
        {techGroups.map((group, index) => (
          <div key={group.title} className="space-y-3">
            <h3 className="text-xl font-semibold text-verde-primario-200 font-nombre">
              {group.title}
            </h3>
            <div className="relative">
              {/* Gradient fade on edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-verde-primario-950 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-verde-primario-950 to-transparent z-10" />

              <Marquee
                pauseOnHover
                reverse={index % 2 === 1}
                className="[--duration:25s]"
              >
                {group.techs.map((tech) => (
                  <TechCard key={tech.name} icon={tech.icon} name={tech.name} />
                ))}
              </Marquee>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechGrid;