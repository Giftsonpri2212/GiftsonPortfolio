"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BAR_MAX = 20;
const CHAR = "#";

function LoaderInner() {
  const [filled, setFilled] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let count = 0;
    const id = window.setInterval(() => {
      count += 1;
      setFilled(count);
      if (count >= BAR_MAX) {
        window.clearInterval(id);
        setDone(true);
      }
    }, 65);
    return () => window.clearInterval(id);
  }, []);

  const percentage = Math.floor((filled / BAR_MAX) * 100);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="select-none">
        <div className="flex items-center space-x-3 font-mono text-lg sm:text-2xl">
          <span className="text-slate-300">[</span>
          <span className="inline-block w-[20ch] text-left text-btn">
            {CHAR.repeat(filled)}
          </span>
          <span className="text-slate-300">]</span>
          <span className="tabular-nums text-slate-300 w-12 text-right">{percentage}%</span>
        </div>
        <p
          className={`mt-3 text-center font-mono text-base transition-colors duration-300 ${
            done ? "text-green-400" : "text-slate-400"
          }`}
        >
          {done ? "SUCCESS!" : "LOADING..."}
        </p>
      </div>
    </motion.div>
  );
}

export default function Loader() {
  return <LoaderInner />;
}
