"use client";

import { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import TechCloud from "@/components/TechCloud";

const roles = ["Full Stack Developer", "Coder", "Backend Engineer"];

export default function Hero({ showTransition }: { showTransition: boolean }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1600);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh*0.80)] w-full relative flex justify-center mb-52"
    >
      <div className="flex items-center space-x-0 space-y-7 md:space-y-0 md:space-x-14 flex-col md:flex-row m-auto">

        {/* Text block — LEFT */}
        <div
          className={`flex flex-col space-y-3 transition-all duration-700 ${
            showTransition ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <p className="text-lg lg:text-xl text-slate-300">Hi there, I&apos;m</p>

          {/* Gradient name */}
          <h1
            className="text-2xl lg:text-4xl font-bold"
            style={{
              background: "linear-gradient(90deg, #fa3205, #5301c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Giftson Prince
          </h1>

          {/* Open to work badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-slate-400">Open to work</span>
          </div>

          {/* Typewriter role */}
          <p className="text-base lg:text-lg font-mono min-h-[1.75rem]" style={{ color: "#8b5cf6" }}>
            {displayed}<span className="animate-pulse">|</span>
          </p>

          <p className="text-sm lg:text-base text-justify text-slate-300 max-w-lg">
            {"I'm a Full Stack Developer skilled in Node.js, React, MongoDB, and PostgreSQL. "}
            Passionate about building developer tools, analytics platforms, and scalable
            backend systems.
          </p>
        </div>

        {/* Tech Cloud — RIGHT */}
        <div
          className={`relative flex-shrink-0 transition-all duration-700 ${
            showTransition ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <TechCloud />
          <a
            href="https://leetcode.com/giftsonprince"
            target="_blank"
            rel="noreferrer"
            className="absolute -right-2 bottom-0 border border-white/20 bg-slate-900/85 px-3 py-2 text-xs text-slate-200 backdrop-blur-sm hover:border-btn"
          >
            <span className="inline-flex items-center gap-2">
              <SiLeetcode className="h-3.5 w-3.5" />
              LeetCode: 400+ solved
            </span>
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-700 ${
          showTransition ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <span className="text-xs text-slate-400 tracking-widest uppercase">scroll</span>
        <span className="animate-bounce text-slate-400">↓</span>
      </div>
    </section>
  );
}
