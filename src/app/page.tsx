"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorSpotlight from "@/components/CursorSpotlight";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { href: "https://github.com/Giftsonpri2212", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/giftson-prince-p-6a6684230/", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/u/giftsonprince2212/", Icon: SiLeetcode, label: "LeetCode" },
  { href: "mailto:giftsonprincep2212@gmail.com", Icon: FaEnvelope, label: "Email" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShow(true), 100);
    }, 2400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-slate-900 text-slate-50 text-base md:text-xl">
          <CursorSpotlight />
          <Navbar showTransition={show} />

          <div className="mx-5 sm:mx-10">
            <div className="flex flex-col md:grid md:grid-cols-6 min-h-full">

              {/* Left — fixed vertical social icons */}
              <div className="col-span-1 flex-initial relative mx-auto md:mx-0 order-2 md:order-none">
                <ul className="md:fixed md:bottom-0 mb-7 flex items-center space-x-8 md:flex-col md:space-y-5 md:space-x-0">
                  {socialLinks.map(({ href, Icon, label }, i) => (
                    <li
                      key={label}
                      className={`transition-all duration-500 ${show ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" aria-label={label}>
                        <Icon className="h-7 w-7 md:h-9 md:w-9 text-slate-300 transition ease-out hover:-translate-y-1 hover:text-btn duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center — all page sections */}
              <div className="col-span-4 flex-1 flex-col order-1 md:order-none">
                <div className="container mx-auto max-w-full 2xl:max-w-5xl">
                  <Hero showTransition={show} />
                  <About />
                  <Experience />
                  <Achievements />
                  <Skills />
                  <Projects />
                  <Contact />
                </div>
              </div>

              {/* Right — rotated location text */}
              <div className="hidden col-span-1 md:flex flex-initial relative order-2 text-center md:order-none">
                <p
                  className={`fixed bottom-3 right-10 origin-top-right rotate-90 text-sm text-slate-400 transition-all duration-500 ${show ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
                >
                  📍 Based in India
                </p>
              </div>

            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
