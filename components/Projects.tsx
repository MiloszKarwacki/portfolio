"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./ProjectCard";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";

const Projects = () => {
  const { ref } = useSectionInView("#projects", 0.1);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projects"
      className="scroll-mt-28 mb-28 text-text-primary-light dark:text-text-primary-dark"
    >
      <SectionHeading>My Projects</SectionHeading>

      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
