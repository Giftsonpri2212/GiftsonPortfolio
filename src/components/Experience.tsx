"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Project Intern",
    org: "Dotworld Technologies",
    period: "2023 - 2024",
    summary:
      "Worked on robotics and automation workflows connected to IndiaSkills preparation projects.",
    points: [
      "Built and tested control flow modules for pick-and-place style motion sequences.",
      "Collaborated on system debugging during mechatronics practice rounds.",
      "Contributed to integration tasks used in IndiaSkills-aligned project demos.",
    ],
  },
  {
    role: "Autonomous Mobile Robotics Competitor",
    org: "IndiaSkills",
    period: "2023",
    summary:
      "Represented project work in a national competition context, including ML-driven robotics features, and shipped stable prototypes under time constraints.",
    points: [
      "Executed team-based build iterations with strict performance checkpoints.",
      "Worked on machine learning-assisted object detection and decision support in robotics workflows.",
      "Focused on reliability tuning, test cycles, and quick defect resolution.",
      "Delivered functional outcomes that supported medal-winning performance.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="w-full pb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex py-5 items-center">
        <h1 className="text-3xl font-bold pr-5">Experience</h1>
        <div className="flex-grow border-t border-white/20" />
      </div>

      <div className="relative space-y-6">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/20 md:block" />
        {experiences.map((item, idx) => (
          <article
            key={item.org + item.role}
            className={`relative ${idx % 2 === 0 ? "md:pr-[54%]" : "md:pl-[54%]"}`}
          >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-btn md:block" />
            <div className="border border-white/10 bg-slate-800/40 p-5">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="text-lg font-semibold text-slate-100">
                  {item.role} · {item.org}
                </h3>
                <p className="text-sm text-slate-400">{item.period}</p>
              </div>
              <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-btn">{idx === 0 ? ">" : "*"}</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
