"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/useInView";
import SubmitButton from "./SubmitButton";
//Animation
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const { ref } = useSectionInView("#contact", 0.6);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <motion.section className="mb-16 relative" id="contact" ref={ref}>
      <Fade
        direction="up"
        delay={200}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <SectionHeading>{"Contact Me"}</SectionHeading>
      </Fade>
      <Fade
        direction="up"
        delay={300}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <p className="text-text-muted-light -mt-6 dark:text-text-muted-dark">
          {"Feel free to contact me directly through this form"}
        </p>
      </Fade>
      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <form
          className="mt-10 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="h-14 px-4 rounded-lg 
              border border-ui-border-light
              bg-background-elevated-light
              text-text-primary-light
              dark:border-ui-border-dark
              dark:bg-background-elevated-dark
              dark:text-text-primary-dark
              w-full
              focus:outline-none
              focus:ring-2
              focus:ring-primary-light
              dark:focus:ring-primary-dark
              transition-colors"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={"Your email"}
          />
          <textarea
            ref={messageRef}
            className="h-52 my-3 rounded-lg resize-none 
              border border-ui-border-light
              bg-background-elevated-light
              text-text-primary-light
              dark:border-ui-border-dark
              dark:bg-background-elevated-dark
              dark:text-text-primary-dark
              p-4 w-full
              focus:outline-none
              focus:ring-2
              focus:ring-primary-light
              dark:focus:ring-primary-dark
              transition-colors"
            name="message"
            placeholder={"Your message"}
            required
            maxLength={5000}
          />
          <div className="mt-2">
            <SubmitButton text={"Submit"} />
          </div>
        </form>
      </Fade>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-4 left-0 right-0 mx-auto w-max 
              bg-state-success text-text-inverse-light 
              px-6 py-3 rounded-full 
              shadow-xl dark:shadow-xl-dark 
              z-50"
          >
            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact;
