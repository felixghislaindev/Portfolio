"use client";
import React, { useEffect } from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <div id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, idx) => (
          <React.Fragment key={idx}>
            <Project {...project}></Project>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
