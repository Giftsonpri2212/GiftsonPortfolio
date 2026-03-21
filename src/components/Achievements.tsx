"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCode, FaMedal, FaRobot, FaTrophy } from "react-icons/fa";
import { achievements } from "@/data/achievements";

const iconMap = {
  medal: FaTrophy,
  bronze: FaMedal,
  code: FaCode,
  hackathon: FaRobot,
};

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="w-full pb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex py-5 items-center">
        <h1 className="text-3xl font-bold pr-5">Achievements</h1>
        <div className="flex-grow border-t border-white/20" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.article
              key={item.title}
              className="overflow-hidden border border-white/10 bg-slate-800/40"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <div className="relative h-72 w-full border-b border-white/10 bg-slate-900/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <Icon className="mb-3 text-xl text-btn" />
                <h3 className="mb-2 text-lg font-medium text-slate-100">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
