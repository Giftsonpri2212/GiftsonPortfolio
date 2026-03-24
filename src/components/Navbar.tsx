"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const desktopLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const mobileLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ showTransition }: { showTransition: boolean }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState<string>("home");
  const prevScroll = useRef(0);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(initialTheme);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      if (curr <= 60) {
        setHasShadow(false);
        setShowNavbar(true);
      } else {
        setHasShadow(true);
        if (Math.abs(curr - prevScroll.current) >= 60) {
          setShowNavbar(curr < prevScroll.current);
          setMenuOpen(false);
        }
      }
      prevScroll.current = curr;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(nextTheme);
  };

  return (
    <nav
      className={`block w-full sticky top-0 z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full absolute"
      }`}
    >
      <div
        className={`flex flex-wrap items-center justify-between px-5 sm:px-9 py-4 bg-slate-900/90 backdrop-blur-sm transition-shadow duration-300 ${
          hasShadow ? "shadow-lg shadow-black/20" : ""
        }`}
      >
        <a href="#home">
          <div
            className={`flex items-center space-x-1 drop-shadow-lg bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent transition-all duration-500 ${
              showTransition ? "opacity-100 blur-0" : "opacity-0 blur-sm"
            }`}
          >
            <span className="text-xl font-bold">&lt;</span>
            <span className="text-4xl md:text-5xl" id="custom-logo">Giftson</span>
            <span className="text-xl font-bold">/&gt;</span>
          </div>
        </a>

        <div className="hidden xl:block xl:w-auto">
          <ul className="flex items-center space-x-6">
            {desktopLinks.map((link, i) => (
              <li
                key={link.label}
                className={`transition-all duration-500 ${showTransition ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
                style={{ transitionDelay: `${50 + i * 50}ms` }}
              >
                <a
                  href={link.href}
                  className={`transition-colors duration-200 text-base hover:text-link ${activeSection === link.href.slice(1) ? "text-link" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li
              className={`transition-all duration-500 ${showTransition ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
              style={{ transitionDelay: "350ms" }}
            >
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark and light mode"
                className="inline-flex items-center justify-center border border-white/20 p-2 text-slate-300 hover:text-link"
              >
                {theme === "dark" ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
              </button>
            </li>
            <li
              className={`transition-all duration-500 ${showTransition ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
              style={{ transitionDelay: "380ms" }}
            >
              <a href="/Giftson_Prince_Resume.pdf" target="_blank" rel="noreferrer">
                <button className="py-2 px-6 bg-transparent border border-btn shadow-sm shadow-btn text-btn transition ease-in-out hover:bg-btn hover:text-white focus:bg-btn focus:text-white active:bg-btn active:text-white duration-300 text-base">
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>

        <button
          aria-label="Toggle menu"
          className={`inline-flex items-center p-2 text-slate-300 xl:hidden transition-all duration-500 ${showTransition ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes className="h-7 w-7" /> : <FaBars className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="block w-full absolute xl:hidden px-5 sm:px-9 pb-4 bg-slate-900/95 backdrop-blur-sm z-40">
          <ul>
            {mobileLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 hover:text-link transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className="block w-full text-center py-2 px-6 mt-5 border border-white/20 text-slate-300"
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
            <li>
              <a href="/Giftson_Prince_Resume.pdf" target="_blank" rel="noreferrer">
                <button className="block w-full text-center py-2 px-6 mt-5 bg-transparent border border-btn shadow-sm shadow-btn text-btn transition ease-in-out hover:bg-btn hover:text-white focus:bg-btn focus:text-white active:bg-btn active:text-white duration-300">
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
