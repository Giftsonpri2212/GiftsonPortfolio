"use client";

import { motion } from "framer-motion";

type Token = { text: string; color: string };

const codeLines: Token[][] = [
  [
    { text: "const ", color: "#c792ea" },
    { text: "developer", color: "#82aaff" },
    { text: " = {", color: "#89ddff" },
  ],
  [
    { text: "  name", color: "#f07178" },
    { text: ": ", color: "#89ddff" },
    { text: '"Giftson Prince"', color: "#c3e88d" },
    { text: ",", color: "#89ddff" },
  ],
  [
    { text: "  title", color: "#f07178" },
    { text: ": ", color: "#89ddff" },
    { text: '"Full Stack Developer"', color: "#c3e88d" },
    { text: ",", color: "#89ddff" },
  ],
  [
    { text: "  stack", color: "#f07178" },
    { text: ": [", color: "#89ddff" },
    { text: '"Node.js"', color: "#c3e88d" },
    { text: ", ", color: "#89ddff" },
    { text: '"React"', color: "#c3e88d" },
    { text: ", ", color: "#89ddff" },
    { text: '"TypeScript"', color: "#c3e88d" },
    { text: "],", color: "#89ddff" },
  ],
  [
    { text: "  db", color: "#f07178" },
    { text: ": [", color: "#89ddff" },
    { text: '"PostgreSQL"', color: "#c3e88d" },
    { text: ", ", color: "#89ddff" },
    { text: '"MongoDB"', color: "#c3e88d" },
    { text: "],", color: "#89ddff" },
  ],
  [
    { text: "  tools", color: "#f07178" },
    { text: ": [", color: "#89ddff" },
    { text: '"Redis"', color: "#c3e88d" },
    { text: ", ", color: "#89ddff" },
    { text: '"Docker"', color: "#c3e88d" },
    { text: "],", color: "#89ddff" },
  ],
  [
    { text: "  available", color: "#f07178" },
    { text: ": ", color: "#89ddff" },
    { text: "true", color: "#ff9cac" },
    { text: ",", color: "#89ddff" },
  ],
  [
    { text: "};", color: "#89ddff" },
  ],
];

export default function TechCloud() {
  return (
    <motion.div
      className="relative flex-shrink-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Ambient glow */}
      <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-[#fa3205]/15 to-[#5301c5]/20 blur-3xl pointer-events-none" />

      {/* Editor window */}
      <div className="relative w-72 md:w-[22rem] rounded-2xl border border-white/10 bg-[#1e1e2e] shadow-2xl shadow-black/60 overflow-hidden">

        {/* Titlebar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#181825] border-b border-white/5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-auto text-xs text-slate-500 font-mono">developer.ts</span>
        </div>

        {/* Code lines */}
        <div className="px-3.5 py-3.5 font-mono text-xs md:text-sm leading-6 md:leading-7 select-none">
          {codeLines.map((line, lineIdx) => (
            <motion.div
              key={lineIdx}
              className="flex items-baseline"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + lineIdx * 0.11, duration: 0.28, ease: "easeOut" }}
            >
              {/* Line number */}
              <span className="w-5 mr-4 text-right text-slate-600 text-xs select-none flex-shrink-0">
                {lineIdx + 1}
              </span>
              {/* Tokens */}
              <span>
                {line.map((token, i) => (
                  <span key={i} style={{ color: token.color }}>{token.text}</span>
                ))}
                {lineIdx === codeLines.length - 1 && (
                  <motion.span
                    className="inline-block w-[2px] h-[15px] bg-slate-300 ml-0.5 align-middle"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear", times: [0, 0.5, 0.5, 1] }}
                  />
                )}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center gap-3 px-4 py-1.5 bg-gradient-to-r from-[#fa3205] to-[#5301c5] text-[11px] text-white/90 font-mono">
          <span className="opacity-90">TypeScript</span>
          <span className="ml-auto opacity-70">UTF-8</span>
          <span className="opacity-70">Ln 8, Col 3</span>
        </div>
      </div>
    </motion.div>
  );
}
