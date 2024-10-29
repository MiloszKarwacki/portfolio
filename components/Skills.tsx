"use client";

import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

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

const Skills = () => {
  const { ref } = useSectionInView("#skills", 0.7);
  const t = useTranslations('skills');

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{t('title')}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            custom={index}
            key={index}
            className="bg-white border border-black/5 rounded-xl px-5 py-3
              hover:bg-gray-50 hover:border-black/10
              dark:bg-white/10 dark:text-white/80 dark:border-white/5
              dark:hover:bg-white/[0.15] dark:hover:border-white/10 
              transition-colors"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;