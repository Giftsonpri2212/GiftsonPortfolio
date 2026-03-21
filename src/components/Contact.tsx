"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { href: "https://github.com/giftsonprince", Icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/giftsonprince", Icon: SiLeetcode, label: "LeetCode" },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="w-full pb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex py-5 items-center justify-center">
        <div className="flex-grow border-t border-white/20" />
        <h1 className="text-3xl font-bold px-5">Contact</h1>
        <div className="flex-grow border-t border-white/20" />
      </div>

      <div className="mx-auto max-w-3xl py-16 text-center">
        <h2 className="text-4xl font-bold text-slate-50">Get in Touch</h2>
        <p className="mt-4 text-slate-300">
          My inbox is always open. Whether you have a question or just want to say hello,
          I will try my best to get back to you.
        </p>

        <div className="mt-8">
          <a href="mailto:giftson@example.com">
            <button className="py-2 px-6 bg-transparent border border-btn shadow-sm shadow-btn text-btn transition ease-in-out hover:bg-btn hover:text-white focus:bg-btn focus:text-white active:bg-btn active:text-white duration-300">
              Send an Email
            </button>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-btn"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
