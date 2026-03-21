"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <motion.section
      id="projects"
      className="w-full pb-28"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex py-5 items-center">
        <h1 className="text-3xl font-bold pr-5">Projects</h1>
        <div className="flex-grow border-t border-white/20" />
        <a
          href="https://github.com/giftsonprince?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="pl-5 text-sm text-slate-400 hover:text-link transition-colors"
        >
          Visit Archive
        </a>
      </div>

      <div className="flex flex-col space-y-12">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="py-2 px-6 bg-transparent border border-btn shadow-sm shadow-btn text-btn transition ease-in-out hover:bg-btn hover:text-white focus:bg-btn focus:text-white active:bg-btn active:text-white duration-300"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </motion.section>
  );
}
