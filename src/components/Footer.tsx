import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { href: "https://github.com/giftsonprince", Icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/giftsonprince", Icon: SiLeetcode, label: "LeetCode" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Giftson Prince &mdash; Designed &amp; Built by me
          </p>
          <div className="flex items-center gap-5">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:text-btn"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
