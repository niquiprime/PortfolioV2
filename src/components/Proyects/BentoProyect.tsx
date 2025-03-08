import React, { memo } from "react";
import { Code } from "lucide-react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

interface BentoProyectProps {
  Icon: React.ElementType;
  name: string;
  description: string;
  href: string;
  cta: string;
  background: JSX.Element;
  className: string;
}

const MemorizeBentoProyect = memo(BentoCard);

const BentoProyect: React.FC = () => {
  const ProjectsContent: BentoProyectProps[] = [
    {
      Icon: Code,
      name: "Proyecto 1",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Ver codigo",
      background: (
        <img
          className="absolute inset-0 w-full h-full object-cover [--duration:20s] [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]"
          src="https://images.unsplash.com/photo-1648134859179-ed0c98f54519?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      ),
      className:
        "col-span-2 row-span-4 bg-verde-primario-800 col-start-1 row-start-1 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10",
    },
    {
      Icon: Code,
      name: "Proyecto 2",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Ver codigo",
      background: (
        <img
          className="absolute inset-0 w-full h-full object-cover [--duration:20s] [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]"
          src="https://images.unsplash.com/photo-1648134859179-ed0c98f54519?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      ),
      className:
        "col-span-3 row-span-4 col-start-3 bg-verde-primario-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10",
    },
    {
      Icon: Code,
      name: "Proyecto 3",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Ver codigo",
      background: (
        <img
          className="absolute inset-0 w-full h-full object-cover [--duration:20s] [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]"
          src="https://images.unsplash.com/photo-1648134859179-ed0c98f54519?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      ),
      className:
        "col-span-3 row-span-4 row-start-5 bg-verde-primario-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10",
    },
    {
      Icon: Code,
      name: "Proyecto 4",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Ver codigo",
      background: (
        <img
          className="absolute inset-0 w-full h-full object-cover [--duration:20s] [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]"
          src="https://images.unsplash.com/photo-1648134859179-ed0c98f54519?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      ),
      className:
        "col-span-2 row-span-4 col-start-4 row-start-5 border-verde-primario-50/10 border p-4 bg-verde-primario-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10",
    },
  ];

  return (
    <BentoGrid className="grid grid-cols-5 grid-rows-8 gap-4 h-[600px] ">
      {ProjectsContent.map((content, index) => (
        <MemorizeBentoProyect key={index} {...content} />
      ))}
    </BentoGrid>
  );
};

export default BentoProyect;
