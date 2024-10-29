"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.95,
  });

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (inView) {
      // Opóźnienie animacji o 1 sekundę po wejściu sekcji Contact w viewport
      const timer = setTimeout(() => {
        setIsVisible(true);
        controls.start({ opacity: 1 });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={`mt-auto py-6 text-center text-text-muted-light dark:text-text-muted-dark transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <p className="text-sm">
          Copyright © {currentYear} Miłosz Karwacki. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
