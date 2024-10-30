"use client";

import { useState } from "react";
import { Link } from "@/lib/types";
import NextLink from "next/link";
import Hamburger from "hamburger-react";
import { useActiveSectionContext } from "../containers/activeSection";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { useTranslations } from 'next-intl';

interface HamburgerMenuProps {
  links: Link[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const t = useTranslations('navigation');

  const menuTrigger = {
    visible: { scale: 1, opacity: 0.7, y: 0 },
    tap: { scale: 0.85 },
    hover: { scale: 1.2 },
  };

  const menuList = {
    start: { scale: 0.6, opacity: 0.7, y: -20 },
    visible: { scale: 1, opacity: 0.9, y: 0 },
  };

  return (
    <motion.div className="md:hidden top-5 right-5 fixed z-[999] flex flex-col items-end gap-2">
      <motion.button
        variants={menuTrigger}
        initial="visible"
        whileTap="tap"
        whileHover="hover"
        className="w-[3rem] h-[3rem] flex items-center justify-center
          bg-background-elevated-light
          backdrop-blur-[0.5rem]
          border border-ui-border-light border-opacity-40
          shadow-xl dark:shadow-xl-dark
          rounded-full
          dark:bg-background-elevated-dark
          dark:border-ui-border-dark"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuList}
            initial="start"
            animate="visible"
            exit="start"
            className="w-full overflow-hidden p-1
              bg-background-elevated-light
              border border-ui-border-light border-opacity-60
              shadow-xl dark:shadow-xl-dark
              rounded-2xl
              dark:bg-background-elevated-dark
              dark:border-ui-border-dark
              flex flex-col items-center justify-center"
          >
            {links.map((link, index) => (
              <motion.div
                className="w-full"
                key={link.hash}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
              >
                <NextLink
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3",
                    "text-text-primary-light hover:text-text-primary-light",
                    "dark:text-text-muted-dark dark:hover:text-text-primary-dark",
                    "transition cursor-pointer",
                    {
                      "text-text-primary-light bg-background-hover-light dark:text-text-primary-dark dark:bg-background-hover-dark rounded":
                        activeSection === link.hash,
                      "rounded-t-xl": index === 0,
                      "rounded-b-xl": index === links.length - 1,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection(link.hash);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {t(link.hash.replace('#', ''))}
                </NextLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HamburgerMenu;