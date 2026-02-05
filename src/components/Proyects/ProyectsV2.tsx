import ProyectCard from "./ProyectCard.tsx";

// Tipo para tecnologías - solo strings/identifiers
interface Project {
  title: string;
  img: string;
  description: string;
  link: string;
  github: string;
  technologies: string[]; // Array de nombres de tecnologías
}

const projects: Project[] = [
  {
    title: "Poliestirec Landing Page",
    img: "/mockup-poliestirec.webp",
    description:
      "Landing page y cotizador automatizado para Poliestirec, empresa de pintura ecológica sustentable del sur de Chile. Optimicé la captación de clientes y la visibilidad online mediante una interfaz moderna, automatizando el proceso de presupuestos para escalar sus ventas digitales.",
    link: "https://poliestirecchile.cl/",
    github: "https://github.com/niquiprime/Poliestirec_landingPage",
    technologies: ["tailwind", "astro", "react"],
  },
];

const ProjectsV2: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-5 flex items-start justify-center flex-col max-w-4xl mx-auto text-start px-2 sm:px-4"
    >
      <h2 className="text-4xl font-bold bg-clip-text font-nombre">Proyectos</h2>
      <div className="flex flex-col gap-6 mt-5 w-full">
        {projects.map((project) => (
          <ProyectCard
            key={project.title}
            title={project.title}
            img={project.img}
            description={project.description}
            github={project.github}
            link={project.link}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsV2;
