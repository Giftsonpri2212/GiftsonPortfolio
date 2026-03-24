"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type AboutPhotoProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

function AboutPhoto({ src, fallbackSrc, alt, width, height, className }: AboutPhotoProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (imageSrc !== fallbackSrc) setImageSrc(fallbackSrc);
      }}
    />
  );
}

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen w-full pb-24"
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Section header */}
      <div className="relative flex py-5 items-center">
        <h1 className="text-3xl font-bold pr-5">About Me</h1>
        <div className="flex-grow border-t border-white/20" />
      </div>

      {/* Content grid */}
      <div className="flex flex-col gap-y-4 xl:grid xl:grid-cols-2 xl:gap-x-5 xl:gap-y-0 mb-20 text-slate-300">

        {/* Text + checklist (left) */}
        <div className="order-2 xl:order-none space-y-4 text-[0.98rem] sm:text-base">
          <p className="text-justify text-sm sm:text-base font-semibold dark:font-medium leading-relaxed text-slate-100">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-slate-100 dark:text-white">
              Giftson Prince
            </span>
            , a developer passionate about building
            <span className="font-semibold text-slate-100 dark:text-white">
              {" scalable and impactful applications."}
            </span>
          </p>

          <div className="flex flex-wrap gap-2 text-[11px] font-semibold dark:font-medium">
            <span className="about-skill-chip px-2.5 py-1 rounded-full border-2 border-slate-900 bg-slate-400 ring-1 ring-slate-700/40 shadow-md shadow-slate-700/45 dark:border-btn/40 dark:bg-btn/10 dark:shadow-btn/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-500 hover:border-slate-950 dark:hover:bg-btn/20 dark:hover:border-btn/70">
              Frontend Development
            </span>
            <span className="about-skill-chip px-2.5 py-1 rounded-full border-2 border-cyan-900 bg-cyan-500 ring-1 ring-cyan-700/40 shadow-md shadow-cyan-700/45 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:border-cyan-950 dark:hover:bg-cyan-400/20 dark:hover:border-cyan-400/60">
              System Design
            </span>
            <span className="about-skill-chip px-2.5 py-1 rounded-full border-2 border-emerald-900 bg-emerald-500 ring-1 ring-emerald-700/40 shadow-md shadow-emerald-700/45 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:shadow-emerald-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:border-emerald-950 dark:hover:bg-emerald-400/20 dark:hover:border-emerald-400/60">
              Backend Scalability
            </span>
            <span className="about-skill-chip px-2.5 py-1 rounded-full border-2 border-amber-900 bg-amber-500 ring-1 ring-amber-700/40 shadow-md shadow-amber-700/45 dark:border-amber-300/30 dark:bg-amber-300/10 dark:shadow-amber-300/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:border-amber-950 dark:hover:bg-amber-300/20 dark:hover:border-amber-300/60">
              Problem Solving
            </span>
          </div>

          <p className="text-justify font-medium dark:font-normal">
            {"I work across modern web technologies and enjoy exploring system design through projects "
            + "like URL shorteners and backend systems that handle real-world scale. I'm also interested "
            + "in deep learning and intelligent systems."}
          </p>
          <p className="text-justify font-medium dark:font-normal">
            {"I have participated in IndiaSkills and TNSkills competitions, where I worked on real-world "
            + "problem scenarios and strengthened my ability to solve problems under pressure."}
          </p>
          <p className="text-justify font-medium dark:font-normal">
            {"I enjoy working both independently and in team environments, and I continuously gain practical "
            + "experience through projects, hackathons, and coding challenges. I am always curious to learn "
            + "new technologies, build meaningful solutions, and grow as a developer with the goal of "
            + "contributing to innovative and high-impact products."}
          </p>
        </div>

        {/* 4-photo collage grid (right) */}
        <div className="order-1 xl:order-none mt-5 xl:mt-0 h-[550px]">
          {/* Top section: Photo1 large (left) + Photo2&Photo3 stacked (right) */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Photo1 - large left image spanning 2 rows */}
            <div className="col-span-1 row-span-2 overflow-hidden rounded-lg shadow-lg h-[280px]">
              <AboutPhoto
                src="/portraits/Photo1.png"
                fallbackSrc="/portraits/Photo1.png"
                alt="Giftson holding IndiaSkills certificate and medal"
                width={200}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Photo2 - top right */}
            <div className="col-span-2 overflow-hidden rounded-lg shadow-lg h-[130px]">
              <AboutPhoto
                src="/portraits/Photo2.jpg"
                fallbackSrc="/portraits/Photo2.jpg"
                alt="IndiaSkills bronze medal close-up"
                width={400}
                height={130}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Photo3 - bottom right */}
            <div className="col-span-2 overflow-hidden rounded-lg shadow-lg h-[130px]">
              <AboutPhoto
                src="/portraits/Photo3.jpg"
                fallbackSrc="/portraits/Photo3.jpg"
                alt="Giftson with teammates at IndiaSkills"
                width={400}
                height={130}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          {/* Bottom section: Photo4 full width */}
          <div className="overflow-hidden rounded-lg shadow-lg h-[200px]">
            <AboutPhoto
              src="/portraits/Photo4.jpg"
              fallbackSrc="/portraits/Photo4.jpg"
              alt="Giftson with faculty and team"
              width={600}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </motion.section>
  );
}
