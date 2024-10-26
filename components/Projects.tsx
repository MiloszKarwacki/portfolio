"use client";
import { FC } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./ProjectCard";
import { useSectionInView } from "@/lib/useInView";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  const { ref } = useSectionInView("#projects", 0.6);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
