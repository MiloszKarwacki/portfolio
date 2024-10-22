"use client";
import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { Link } from "@/lib/types";
import { useActiveSectionContext } from "@/containers/activeSection";
//Animation
import { motion } from "framer-motion";

type HeaderProps = { links: Link[] };

const Header = ({ links }: HeaderProps) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="hidden md:flex items-center justify-center fixed z-[999] w-full mt-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex p-1 rounded-none sm:rounded-full 
          border border-ui-border-light border-opacity-40
          bg-background-transparent-light
          backdrop-blur-[0.5rem] 
          shadow-xl dark:shadow-xl-dark
          dark:bg-background-transparent-dark
          dark:border-ui-border-dark
          transition-colors"
      >
        <motion.ul
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-wrap items-center justify-center gap-y-1 
            text-[0.9rem] font-medium 
            text-text-muted-light"
        >
          {links.map((link) => (
            <li
              className="flex items-center justify-center relative"
              key={link.hash}
            >
              <NextLink
                className={clsx(
                  "flex w-full items-center justify-center px-3 transition",
                  "hover:text-text-primary-light dark:hover:text-text-primary-dark",
                  {
                    "text-text-primary-light dark:text-text-primary-dark":
                      activeSection === link.hash,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.hash);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.nameEng}
                {link.hash === activeSection && (
                  <motion.span
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    layoutId="activeSection"
                    className="bg-background-hover-light 
                      dark:bg-background-hover-dark 
                      rounded-full absolute inset-0 -z-10"
                  ></motion.span>
                )}
              </NextLink>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </header>
  );
};

export default Header;
