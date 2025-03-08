import React from "react";
import BentoProyect from "./BentoProyect";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-3xl mx-auto py-16 px-4">
      <div className="mb-8 flex items-start">
        <h2 className="text-verde-primario-50 text-3xl font-semibold">
          Proyectos
        </h2>
      </div>
      <BentoProyect />
    </section>
  );
};

export default Projects;
