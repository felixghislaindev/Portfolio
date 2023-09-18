/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGitSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      {/* profile image */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpeg"
              alt="Felix portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-contain shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 font-medium text-2xl 
      !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Felix.</span> I'm a{" "}
        <span className="font-bold">front end engineer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      {/* buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center 
      gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110
           hover:bg-gray-950 active-scale-105 transition"
          onClick={() => {
            setActiveSection("Contact"), setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/cv.pdf"
          download
          className=" group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110
        active-scale-105 transition 
        cursor-pointer border border-black/10 dark:bg-white/10"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 " />
        </a>
        <a
          href="https://www.linkedin.com/in/felix-ghislain-5421b2163"
          target="_blank"
          className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
          active-scale-105 dark:text-white/60 dark:bg-white/10 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/felixghislaindev"
          target="_blank"
          className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
          active-scale-105 dark:text-white/60 dark:bg-white/10 transition cursor-pointer border border-black/10"
        >
          <FaGitSquare />
        </a>
      </motion.div>
    </section>
  );
}
