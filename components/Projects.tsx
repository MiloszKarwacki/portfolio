"use client";

import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./ProjectCard";
import { useSectionInView } from "@/lib/useInView";
import { useTranslations } from 'next-intl';

const Projects = () => {
  const { ref } = useSectionInView("#projects", 0.6);
  const t = useTranslations('projects');

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t('title')}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;