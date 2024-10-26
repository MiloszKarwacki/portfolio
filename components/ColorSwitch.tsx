import { type FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SwitchProps {
  activeButton: React.ReactNode;
  hiddenButton: React.ReactNode;
  setActiveButton: () => void;
}

const Switch: FC<SwitchProps> = ({ activeButton, hiddenButton, setActiveButton }) => {
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
            className="hidden md:flex items-center justify-center w-[2rem] h-[2rem]
              rounded-full
              bg-background-transparent-light backdrop-blur-md
              border border-ui-border-light
              dark:bg-background-transparent-dark
              dark:border-ui-border-dark"
          >
            {hiddenButton}
          </motion.button>
        )}
      </AnimatePresence>
      
      <motion.button
        className="w-[3rem] h-[3rem] flex justify-center items-center
          rounded-full
          bg-background-transparent-light backdrop-blur-md
          border border-ui-border-light
          shadow-xl dark:shadow-xl-dark
          dark:bg-background-transparent-dark
          dark:border-ui-border-dark"
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
};

export default Switch;