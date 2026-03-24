"use client";

import { motion } from "framer-motion";
import { FaCode, FaGithub, FaHackerrank } from "react-icons/fa";

const profiles = [
  {
    title: "LeetCode",
    subtitle: "400+ problems solved",
    href: "https://leetcode.com/u/giftsonprince2212/",
    icon: FaCode,
  },
  {
    title: "GitHub",
    subtitle: "Projects and repositories",
    href: "https://github.com/Giftsonpri2212",
    icon: FaGithub,
  },
  {
    title: "HackerRank",
    subtitle: "3 star rating",
    href: "https://hackerrank.com",
    icon: FaHackerrank,
  },
];

export default function CodingProfiles() {
  return (
    <motion.section
      id="coding"
      className="w-full pb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex py-5 items-center">
        <h1 className="text-3xl font-bold pr-5">Coding Profiles</h1>
        <div className="flex-grow border-t border-white/20" />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {profiles.map((profile) => (
          <a
            key={profile.title}
            href={profile.href}
            target="_blank"
            rel="noreferrer"
            className="border border-white/10 bg-slate-800/40 p-5 transition hover:border-btn"
          >
            <profile.icon className="mb-3 text-xl text-btn" />
            <h3 className="text-lg font-medium text-slate-100">{profile.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{profile.subtitle}</p>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
