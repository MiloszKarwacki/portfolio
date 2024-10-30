"use client";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { useActiveSectionContext } from "../containers/activeSection";
import { useTranslations } from 'next-intl';

const Intro = () => {
  const { ref } = useSectionInView("home", 0.7);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const t = useTranslations('intro');

  const handleConnectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection("#contact");
    setTimeOfLastClick(Date.now());

    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      const messageTextarea = document.querySelector(
        'textarea[name="message"]'
      ) as HTMLTextAreaElement;
      messageTextarea?.focus();
    }, 300);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[75rem] text-center sm:mb-0"
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <Image
              src="/boy.png"
              alt="boy"
              width={480}
              height={480}
              quality={100}
              priority
              className="rounded-full shadow-xl object-cover"
            />
          </motion.div>
          <motion.span
            className="text-6xl absolute bottom-8 right-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h1 className="mb-12 mt-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5]">
            {t('title')}
          </span>{" "}
          <p className="text-[14px]">
            {t('subtitle')}
          </p>
        </h1>
      </Fade>
      <motion.div
        className="flex sm:flex-row gap-4 justify-center items-center px-4 text-xl font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
          onClick={handleConnectClick}
        >
          {t('connect')} <Mail color={"#9ca3af"} />
        </Link>
        <a
          href="https://instagram.com"
          target="_blank"
          className="bg-gray-900 text-white p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsInstagram />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="bg-gray-900 text-white p-4 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;