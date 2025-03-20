import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import SkillCard from "./SkillCard";

// Definimos la interfaz para una tecnología individual
interface Technology {
  name: string;
  icon: React.ElementType;
  level: string;
}

// Definimos la interfaz para una categoría de habilidades
interface SkillCategory {
  category: string;
  technologies: Technology[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      technologies: [
        {
          name: "HTML",
          icon: FaHtml5,
          level: "Avanzado",
        },
        {
          name: "CSS",
          icon: FaCss3,
          level: "Medio",
        },
        {
          name: "JavaScript",
          icon: FaJs,
          level: "Medio",
        },
        {
          name: "React",
          icon: FaReact,
          level: "Medio",
        },
      ],
    },
    // Puedes agregar más categorías como:
    {
      category: "Backend",
      technologies: [
        {
          name: "MongoDB",
          icon: SiMongodb,
          level: "Básico",
        },
        {
          name: "ExpressJS",
          icon: SiExpress,
          level: "Básico",
        },
      ],
    },
    // ... más categorías
  ];

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="flex flex-col items-start py-16">
        <h2 className="font-bold text-3xl">Habilidades</h2>
      </div>

      <div className="grid grid-cols-4 grid-rows-6 gap-4 ">
        {skillCategories.map((category, index) => (
          <div key={index} className="col-span-2 row-span-3">
            <SkillCard {...category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
