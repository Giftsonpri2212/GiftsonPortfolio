"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type AboutPhotoProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

function AboutPhoto({ src, fallbackSrc, alt, width, height, className }: AboutPhotoProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (imageSrc !== fallbackSrc) setImageSrc(fallbackSrc);
      }}
    />
  );
}

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen w-full"
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Section header */}
      <div className="relative flex py-5 items-center">
        <h1 className="text-3xl font-bold pr-5">About Me</h1>
        <div className="flex-grow border-t border-white/20" />
      </div>

      {/* Content grid */}
      <div className="flex flex-col gap-y-4 xl:grid xl:grid-cols-2 xl:gap-x-5 xl:gap-y-0 mb-36 text-slate-300">

        {/* Text + checklist (left) */}
        <div className="order-2 xl:order-none space-y-4">
          <p className="text-justify">
            {"I'm a Full Stack Developer from Tamil Nadu who enjoys building practical, "
            + "reliable products. I focus on backend systems, full-stack web apps, and tools "
            + "that make workflows faster and easier."}
          </p>
          <p className="text-justify">
            {"I also have a mechatronics background and have competed at state and national "
            + "levels, which helped me develop strong problem-solving and execution under deadlines."}
          </p>
        </div>

        {/* 4-photo collage grid (right) */}
        <div className="order-1 xl:order-none mt-5 xl:mt-0 h-[550px]">
          {/* Top section: Photo1 large (left) + Photo2&Photo3 stacked (right) */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Photo1 - large left image spanning 2 rows */}
            <div className="col-span-1 row-span-2 overflow-hidden rounded-lg shadow-lg h-[280px]">
              <AboutPhoto
                src="/portraits/Photo1.png"
                fallbackSrc="/portraits/Photo1.png"
                alt="Giftson holding IndiaSkills certificate and medal"
                width={200}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Photo2 - top right */}
            <div className="col-span-2 overflow-hidden rounded-lg shadow-lg h-[130px]">
              <AboutPhoto
                src="/portraits/Photo2.jpg"
                fallbackSrc="/portraits/Photo2.jpg"
                alt="IndiaSkills bronze medal close-up"
                width={400}
                height={130}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Photo3 - bottom right */}
            <div className="col-span-2 overflow-hidden rounded-lg shadow-lg h-[130px]">
              <AboutPhoto
                src="/portraits/Photo3.jpg"
                fallbackSrc="/portraits/Photo3.jpg"
                alt="Giftson with teammates at IndiaSkills"
                width={400}
                height={130}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          {/* Bottom section: Photo4 full width */}
          <div className="overflow-hidden rounded-lg shadow-lg h-[200px]">
            <AboutPhoto
              src="/portraits/Photo4.jpg"
              fallbackSrc="/portraits/Photo4.jpg"
              alt="Giftson with faculty and team"
              width={600}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </motion.section>
  );
}
