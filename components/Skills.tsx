"use client";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
//Animation
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("#skills", 0.7);

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{"My Skills"}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-text-primary-light">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="bg-background-elevated-light 
              border border-ui-border-light 
              rounded-xl px-5 py-3 
              dark:bg-background-transparent-dark 
              dark:text-text-muted-dark
              hover:bg-background-hover-light
              dark:hover:bg-background-hover-dark
              transition-colors"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
