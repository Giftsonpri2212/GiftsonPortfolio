"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiCplusplus, SiExpress, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostgresql, SiPostman, SiTailwindcss } from "react-icons/si";
import { skillGroups } from "@/data/skills";

function getSkillIcon(skill: string) {
  const className = "skill-icon h-3.5 w-3.5";
  const icons: Record<string, JSX.Element> = {
    C: <FaCode className={className} style={{ color: "#2563eb" }} />,
    "C++": <SiCplusplus className={className} style={{ color: "#0ea5e9" }} />,
    Python: <FaPython className={className} style={{ color: "#facc15" }} />,
    JavaScript: <SiJavascript className={className} style={{ color: "#f7df1e" }} />,
    React: <FaReact className={className} style={{ color: "#61dafb" }} />,
    "Next.js": <SiNextdotjs className={className} style={{ color: "#f8fafc" }} />,
    HTML: <FaHtml5 className={className} style={{ color: "#f97316" }} />,
    CSS: <FaCss3Alt className={className} style={{ color: "#3b82f6" }} />,
    Tailwind: <SiTailwindcss className={className} style={{ color: "#38bdf8" }} />,
    "Node.js": <FaNodeJs className={className} style={{ color: "#22c55e" }} />,
    Express: <SiExpress className={className} style={{ color: "#e2e8f0" }} />,
    MongoDB: <SiMongodb className={className} style={{ color: "#22c55e" }} />,
    MySQL: <SiMysql className={className} style={{ color: "#0ea5e9" }} />,
    PostgreSQL: <SiPostgresql className={className} style={{ color: "#60a5fa" }} />,
    GitHub: <FaGithub className={className} style={{ color: "#cbd5e1" }} />,
    Docker: <FaDocker className={className} style={{ color: "#38bdf8" }} />,
    Postman: <SiPostman className={className} style={{ color: "#fb923c" }} />,
    "VS Code": <FaCode className={className} style={{ color: "#3b82f6" }} />,
  };

  return icons[skill] ?? <FaDatabase className={className} style={{ color: "#94a3b8" }} />;
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="w-full pb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex py-5 items-center">
        <h1 className="text-3xl font-bold pr-5">Skills</h1>
        <div className="flex-grow border-t border-white/20" />
      </div>

      <p className="mb-5 text-sm text-slate-400">Core stack I use frequently.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="border border-white/10 bg-slate-800/40 p-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: skillGroups.indexOf(group) * 0.1 }}
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="skill-chip inline-flex items-center gap-1.5 border border-white/20 px-3 py-1 text-xs text-slate-300 transition-all duration-200 hover:border-transparent hover:text-white cursor-default"
                  style={{ position: "relative" }}
                >
                  {getSkillIcon(skill)}
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
