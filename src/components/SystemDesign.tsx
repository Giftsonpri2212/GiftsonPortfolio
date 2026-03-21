"use client";

import { motion } from "framer-motion";

const flow = [
  "Client",
  "Load Balancer",
  "API Servers",
  "Redis Cache",
  "PostgreSQL",
  "Analytics Queue",
  "Workers",
];

export default function SystemDesign() {
  return (
    <motion.section
      id="system-design"
      className="w-full pb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex py-5 items-center">
        <h1 className="text-3xl font-bold pr-5">System Design</h1>
        <div className="flex-grow border-t border-white/20" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="border border-white/10 bg-slate-800/40 p-5">
          <div className="flex flex-col items-center">
            {flow.map((node, index) => (
              <div key={node} className="flex flex-col items-center">
                <div className="min-w-52 border border-white/20 bg-slate-900 px-5 py-2.5 text-center text-sm text-slate-200">
                  {node}
                </div>
                {index !== flow.length - 1 && <span className="my-2 text-btn">v</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="border border-white/10 bg-slate-800/40 p-5">
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            This URL shortener architecture keeps redirects fast with Redis caching, persists short-link
            data in PostgreSQL, and pushes click events into a BullMQ analytics queue. Workers process
            analytics asynchronously so redirect latency remains low under heavy traffic.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
