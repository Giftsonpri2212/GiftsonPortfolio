"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { FaExternalLinkAlt } from "react-icons/fa";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
};

const username = "giftsonprince";

export default function GithubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=4`,
        );
        if (!response.ok) {
          return;
        }
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch {
        setRepos([]);
      }
    };

    fetchRepos();
  }, []);

  return (
    <motion.section
      id="github-activity"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-8 text-2xl font-semibold text-slate-100 sm:text-3xl">GitHub Activity</h2>
      <div className="space-y-6">
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-800 p-5">
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            blockSize={13}
            blockMargin={5}
            fontSize={12}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-slate-800 p-5 transition hover:-translate-y-1 hover:border-indigo-400/40"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-base font-medium text-slate-100">{repo.name}</h3>
                <FaExternalLinkAlt className="text-xs text-slate-300" />
              </div>
              <p className="mb-2 text-sm text-slate-300">{repo.description ?? "No description available"}</p>
              <p className="text-xs text-slate-400">
                {repo.language ?? "Unknown"} · {repo.stargazers_count} stars
              </p>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
