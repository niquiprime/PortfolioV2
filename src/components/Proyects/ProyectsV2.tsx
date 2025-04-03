import ProyectCard from "./ProyectCard.tsx";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandAstro } from "react-icons/tb";

const proyects = [
  {
    title: "Poliestirec Landing Page",
    img: "/mockup-poliestirec.webp",
    description:
      "Desarrollo de una landing page para Poliestirec, una empresa dedicada a la venta de pintura ecológica en base al reciclaje y uso del plumavit.",
    link: "https://poliestirecchile.cl/",
    github: "https://github.com/niquiprime/Poliestirec_landingPage",
    tecnologies: [
      <SiTailwindcss className="text-2xl" />,
      <TbBrandAstro className="text-2xl" />,
    ],
  },
];

const ProjectsV2: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-5 flex items-start justify-center flex-col max-w-4xl mx-auto text-start"
    >
      <h2 className="text-4xl font-bold bg-clip-text">Proyectos</h2>
      <div className="gap-4 mt-5">
        {proyects.map((proyect, index) => (
          <ProyectCard
            key={index}
            title={proyect.title}
            img={proyect.img}
            description={proyect.description}
            github={proyect.github}
            link={proyect.link}
            tecnologies={proyect.tecnologies}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsV2;
