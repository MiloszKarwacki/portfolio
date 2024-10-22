import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/containers/languageContext";

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const switchVariants = {
    visible: { scale: 1, opacity: 1, y: -15, x: 25 },
    hover: { scale: 1.1 },
    hidden: { scale: 0.5, opacity: 0, y: 50, x: 25 },
  };

  const commonButtonClasses = `
    flex justify-center items-center 
    rounded-full 
    backdrop-blur-md
    bg-background-transparent-light
    border border-ui-border-light
    dark:bg-background-transparent-dark
    dark:border-ui-border-dark
    text-text-primary-light
    dark:text-text-primary-dark
    transition-colors
  `;

  return (
    <div>
      <AnimatePresence>
        {isHovered && (
          <motion.button
            key="languageSwitcher"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={switchVariants}
            transition={{ duration: 0.3 }}
            className={`hidden md:flex w-[2rem] h-[2rem] ${commonButtonClasses}`}
          >
            {language === "en" ? "EN" : "PL"}
          </motion.button>
        )}
      </AnimatePresence>
      <motion.button
        className={`w-[3rem] h-[3rem] shadow-xl dark:shadow-xl-dark ${commonButtonClasses}`}
        variants={switchVariants}
        initial="visible"
        whileHover="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setLanguage(language === "en" ? "pl" : "en")}
      >
        {language === "en" ? "PL" : "EN"}
      </motion.button>
    </div>
  );
};

export default LanguageSwitch;
