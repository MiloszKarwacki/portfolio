"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { Mail } from "lucide-react";

//Animation
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { useActiveSectionContext } from "@/containers/activeSection";

export default function Intro() {
  const { ref } = useSectionInView("home", 0.7);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

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
            Grow your business with a new website.
          </span>{" "}
          <p className="text-[14px]">
            Frontend is a full-service creative studio creating beautifull
            digital experiences and products
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
          className="group bg-ui-button-primary-light text-text-inverse-light 
            px-7 py-3 flex items-center gap-2 rounded-full outline-none 
            focus:scale-110 hover:scale-110 
            hover:bg-ui-button-primary-hover-light 
            dark:bg-background-transparent-dark 
            dark:text-text-inverse-light
            active:scale-105 transition"
          onClick={handleConnectClick}
        >
          Connect <Mail className="text-text-muted-light" />
        </Link>

        <a
          href="#"
          target="_blank"
          className="bg-ui-button-primary-light text-text-inverse-light 
            p-4 flex items-center gap-2 rounded-full 
            focus:scale-[1.15] hover:scale-[1.15] 
            active:scale-105 transition cursor-pointer 
            dark:bg-background-transparent-dark 
            dark:text-text-muted-dark"
        >
          <BsInstagram />
        </a>
        <a
          href="#"
          target="_blank"
          className="bg-ui-button-primary-light text-text-inverse-light 
            p-4 text-[1.35rem] flex items-center gap-2 rounded-full 
            focus:scale-[1.15] hover:scale-[1.15] 
            active:scale-105 transition cursor-pointer 
            dark:bg-background-transparent-dark 
            dark:text-text-muted-dark"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
