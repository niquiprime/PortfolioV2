import React from "react";
import { motion } from "motion/react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaDatabase } from "react-icons/fa";
import {
  SiMongodb,
  SiVite,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandAstro } from "react-icons/tb";
import type { IconType } from "react-icons";

// ─── Static data (outside component to avoid re-creation) ───
// Using component references instead of inline JSX per react-perf skill

interface TechItem {
  Icon: IconType;
  name: string;
  color: string;
}

interface TechGroup {
  title: string;
  /** Grid column span at md+ breakpoint */
  colSpan: string;
  techs: TechItem[];
}

const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    colSpan: "md:col-span-2",
    techs: [
      { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
      { Icon: FaCss3, name: "CSS3", color: "#1572B6" },
      { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
      { Icon: FaReact, name: "React", color: "#61DAFB" },
      { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
      { Icon: TbBrandAstro, name: "Astro", color: "#FF5D01" },
      { Icon: SiVite, name: "Vite", color: "#646CFF" },
      { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    ],
  },
  {
    title: "Base de Datos",
    colSpan: "md:col-span-1",
    techs: [
      { Icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
      { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { Icon: FaDatabase, name: "SQL", color: "#60A5FA" },
      { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    ],
  },
  {
    title: "Herramientas",
    colSpan: "md:col-span-1",
    techs: [{ Icon: FaGitAlt, name: "Git", color: "#F05032" }],
  },
];

// ─── Memoized TechCard (react-perf: avoids re-renders) ───

interface TechCardProps {
  Icon: IconType;
  name: string;
  color: string;
}

const TechCard = React.memo<TechCardProps>(({ Icon, name, color }) => {
  return (
    <div
      className="group/card relative flex flex-col items-center justify-center gap-3 rounded-xl
        bg-verde-primario-950/40 backdrop-blur-md
        border border-verde-primario-700/20
        p-5 cursor-default
        transition-all duration-300 ease-out
        hover:bg-verde-primario-900/50
        hover:border-verde-primario-500/40
        hover:shadow-[0_0_20px_rgba(236,131,40,0.12)]
        hover:scale-[1.03]"
    >
      <Icon
        className="text-3xl sm:text-4xl transition-transform duration-300 group-hover/card:scale-110"
        style={{ color }}
        aria-hidden="true"
      />
      <span className="text-sm font-medium text-verde-primario-100 group-hover/card:text-cafe-secundario transition-colors duration-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
});

TechCard.displayName = "TechCard";

// ─── Stagger animation variants (ui-ux-pro-max: 30-50ms stagger) ───

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const, // Expo.out per design system
    },
  },
};

// ─── Bento Group Card ───

interface BentoGroupProps {
  group: TechGroup;
  index: number;
}

const BentoGroup = React.memo<BentoGroupProps>(({ group, index }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl
        bg-verde-primario-950/30 backdrop-blur-xl
        border border-verde-primario-600/20
        p-6 sm:p-8
        ${group.colSpan}
        transition-shadow duration-300
        hover:shadow-[0_0_30px_rgba(96,108,56,0.1)]`}
      variants={cardVariants}
    >
      {/* Ambient glow blob */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            index === 0
              ? "radial-gradient(circle, #EC8328, transparent)"
              : "radial-gradient(circle, #606c38, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Category title */}
      <h3 className="text-lg sm:text-xl font-semibold text-verde-primario-200 font-nombre mb-5 tracking-wide">
        {group.title}
      </h3>

      {/* Tech cards grid */}
      <div
        className={`grid gap-3 ${
          group.techs.length === 1
            ? "grid-cols-1 max-w-[120px]"
            : group.techs.length <= 4
              ? "grid-cols-2"
              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {group.techs.map((tech) => (
          <TechCard
            key={tech.name}
            Icon={tech.Icon}
            name={tech.name}
            color={tech.color}
          />
        ))}
      </div>
    </motion.div>
  );
});

BentoGroup.displayName = "BentoGroup";

// ─── Main TechGrid ───

const TechGrid: React.FC = () => {
  return (
    <section
      id="stack"
      className="w-full max-w-5xl mx-auto py-16 sm:py-20 px-4 sm:px-6"
    >
      {/* Section heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-12 text-left font-nombre tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        Stack Tecnológico
      </motion.h2>

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {techGroups.map((group, index) => (
          <BentoGroup key={group.title} group={group} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default TechGrid;