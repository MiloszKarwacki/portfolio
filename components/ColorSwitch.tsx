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
    initial: { 
      scale: 0.5, 
      opacity: 0, 
      y: 0,
      x: 10, 
    },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: -35, 
      x: 10,
    },
    exit: { 
      scale: 0.5, 
      opacity: 0, 
      y: 0,
      x: 10,
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isHovered && (
          <motion.button
            key="languageSwitcher"
            initial="initial"
            animate="visible"
            exit="exit"
            variants={switchVariants}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center justify-center w-[2rem] h-[2rem]
              rounded-full
              bg-background-transparent-light backdrop-blur-md
              dark:bg-background-transparent-dark
              absolute"
          >
            {hiddenButton}
          </motion.button>
        )}
      </AnimatePresence>
      
      <motion.button
        className="w-[3rem] h-[3rem] flex justify-center items-center
          rounded-full
          bg-background-transparent-light backdrop-blur-md
          shadow-xl dark:shadow-xl-dark
          dark:bg-background-transparent-dark
          relative z-20"
        variants={{
          hover: { scale: 1.1 }
        }}
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