import React from "react";
import { NeonGradientCard } from "../magicui/neon-gradient-card";

interface SkillCardProps {
  category: string;
  technologies: {
    name: string;
    icon: React.ElementType;
    level: string;
  }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ category, technologies }) => {
  return (
    <>
      <NeonGradientCard
        neonColors={{ firstColor: "#bbc591", secondColor: "#606c38" }}
        borderRadius={20}
        borderSize={1}
      >
        <h3 className="text-xl font-bold mb-4 ">{category}</h3>
        <div className="grid grid-cols-2 gap-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-2"
              >
                <Icon className="text-2xl" />
                <div>
                  <p className="font-medium ">{tech.name}</p>
                  <p className="text-sm text-verde-primario-300">
                    {tech.level}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </NeonGradientCard>
    </>
  );
};

export default SkillCard;
