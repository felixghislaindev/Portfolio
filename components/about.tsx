"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center 
      leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        Hi, I'm <span className="font-medium">Felix</span>. I graduated with a
        degree in <span className="font-medium">Computer Science</span> and,
        interestingly, my journey into web development didn't start until my
        second year of college. It was during that time when I fell in love with
        web development after building a project using{" "}
        <span className="italic">JavaScript</span> and discovering the power of
        the js ecosystem.
      </p>
      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and spending time doing some jit-jutsu. I
        also have a keen interest in
        <span className="font-medium">history and philosophy</span> and am
        currently exploring those subjects. Additionally, I'm in the process of
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
