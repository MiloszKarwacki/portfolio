import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SwitchProps {
  activeButton: React.ReactNode;
  hiddenButton: React.ReactNode;
  setActiveButton: () => void;
}

export default function Switch({
  activeButton,
  hiddenButton,
  setActiveButton,
}: SwitchProps) {
  const [isHovered, setIsHovered] = useState(false);

  const switchVariants = {
    visible: { scale: 1, opacity: 1, y: -15, x: 25 },
    hover: { scale: 1.1 },
    hidden: { scale: 0.5, opacity: 0, y: 50, x: 25 },
  };

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
            className="hidden md:flex items-center justify-center w-[2rem] h-[2rem] rounded-full bg-opacity-20 backdrop-blur-md bg-white dark:bg-gray-800 dark:bg-opacity-20 border border-gray-200 dark:border-gray-700"
          >
            {hiddenButton}
          </motion.button>
        )}
      </AnimatePresence>
      <motion.button
        className="w-[3rem] h-[3rem] flex justify-center items-center rounded-full bg-opacity-20 backdrop-blur-md bg-white dark:bg-gray-800 dark:bg-opacity-20 border border-gray-200 dark:border-gray-700 shadow-lg"
        variants={switchVariants}
        initial="visible"
        whileHover="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={setActiveButton}
      >
        {activeButton}
      </motion.button>
    </div>
  );
}
