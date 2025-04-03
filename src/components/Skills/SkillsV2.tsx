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
    <section className="py-10 flex w-full items-center justify-center flex-col">
      <div className="flex mx-auto max-w-4xl items-start justify-start flex-col w-full">
        <h2 className="text-4xl font-bold">Habilidades</h2>
      </div>
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
