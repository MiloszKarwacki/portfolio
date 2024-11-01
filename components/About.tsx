"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from 'next-intl';

const About = () => {
  const { ref } = useSectionInView("#about", 0.5);
  const t = useTranslations('about');

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
    >
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={200}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <SectionHeading>{t('title')}</SectionHeading>
        </Fade>

        <div className="grid xl:grid-cols-2 lg:text-start">
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
                <Fade
                  direction="up"
                  delay={250}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">{t('mission.title')}</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={300}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    {t('mission.description')}
                  </p>
                </Fade>
                <Fade
                  direction="up"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">{t('vision.title')}</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={500}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    {t('vision.description')}
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div>
            <Fade
              direction="right"
              delay={300}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Image
                src="/about.png"
                alt="About Me"
                width={600}
                height={600}
                quality={100}
                priority
                className="rounded-full mt-8 object-cover"
              />
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;