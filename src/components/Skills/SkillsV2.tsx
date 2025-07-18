import React from "react";
import { Marquee } from "../magicui/marquee";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiVite, SiTailwindcss } from "react-icons/si";
import { TbBrandAstro } from "react-icons/tb";

const skills = [
  {
    icono: <FaHtml5 />,
    nombre: "HTML5",
  },
  {
    icono: <FaCss3 />,
    nombre: "CSS3",
  },
  {
    icono: <FaJs />,
    nombre: "JavaScript",
  },
  {
    icono: <FaReact />,
    nombre: "React",
  },
  {
    icono: <SiMongodb />,
    nombre: "MongoDB",
  },
  {
    icono: <SiExpress />,
    nombre: "Express",
  },
  {
    icono: <TbBrandAstro />,
    nombre: "Astro",
  },
  {
    icono: <SiVite />,
    nombre: "Vite",
  },
  {
    icono: <SiTailwindcss />,
    nombre: "Tailwind",
  },
];

const SkillsV2: React.FC = () => {
  return (
    <section className="flex w-full items-center justify-center flex-col mx-auto py-5 sm:py-5 max-w-4xl px-2 sm:px-4 text-start">
        <h2 className="text-4xl font-bold text-left w-full">Tecnologías que uso</h2>
      <Marquee className="[--duration:20s] mt-5">
        {skills.map((skill, index) => (
          <div className="flex items-center gap-5 " key={index}>
            <span className="text-5xl">{skill.icono}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SkillsV2;
