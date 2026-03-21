"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageOnLeft = project.alignLeft ?? false;

  return (
    <motion.article
      className="w-full"
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative lg:grid lg:grid-cols-12 lg:items-center">
        <div
          className={`lg:col-span-7 ${
            imageOnLeft ? "lg:col-start-1" : "lg:col-start-6"
          }`}
        >
          <ProjectImage project={project} />
        </div>

        <div
          className={`mt-4 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-[52%] ${
            imageOnLeft ? "lg:right-0 lg:text-right" : "lg:left-0 lg:text-left"
          }`}
        >
          <p className="text-sm text-slate-400">Featured Project · {project.yearCompleted ?? "2024"}</p>
          <h3 className="mt-1 text-2xl font-bold text-slate-50">{project.title}</h3>

          <div className="mt-3 border border-white/10 bg-slate-900/90 p-4 shadow-lg shadow-black/20">
            <p className="text-sm text-slate-300">{project.description}</p>
          </div>

          <div className={`mt-3 flex flex-wrap gap-2 ${imageOnLeft ? "lg:justify-end" : "lg:justify-start"}`}>
            {project.tech.map((item) => (
              <span key={item} className="text-xs text-slate-300">
                {item}
              </span>
            ))}
          </div>

          <div className={`mt-3 flex items-center gap-4 ${imageOnLeft ? "lg:justify-end" : "lg:justify-start"}`}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-link transition-colors"
            >
              <FaGithub />
              <span className="text-sm">Code</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-link transition-colors"
            >
              <FaExternalLinkAlt />
              <span className="text-sm">Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectImage({ project }: { project: Project }) {
  if (!project.image) return null;

  return (
    <div className="overflow-hidden border border-white/10 bg-slate-800/40 shadow-md transition duration-300 hover:opacity-90 -mx-2 lg:-mx-4">
      <div className="relative w-full h-72 md:h-80 lg:h-96">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}
