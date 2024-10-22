import Image from "next/image";
import { ProjectInfo } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-background-elevated-light max-w-[42rem] 
        border border-ui-border-light rounded-lg overflow-hidden 
        sm:pr-8 relative sm:h-[20rem] 
        hover:bg-background-hover-light transition 
        sm:group-even:pl-8 
        dark:text-text-primary-dark 
        dark:bg-background-transparent-dark 
        dark:hover:bg-background-hover-dark"
      >
        <div className="pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li
                key={tag}
                className="bg-ui-tag-base-light px-3 py-1 
                  text-[0.7rem] uppercase tracking-wider 
                  text-ui-tag-text-light rounded-full 
                  dark:bg-ui-tag-base-dark 
                  dark:text-text-muted-dark"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I Worked"
          quality={95}
          width={400}
          height={100}
          className="absolute hidden sm:block top-8 -right-40 
            rounded-t-lg shadow-xl dark:shadow-xl-dark
            transition 
            group-hover:scale-[1.04] 
            group-hover:-translate-x-3 
            group-hover:translate-y-3 
            group-hover:-rotate-2 
            group-even:group-hover:translate-x-3 
            group-even:group-hover:translate-y-3 
            group-even:group-hover:rotate-2 
            group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
