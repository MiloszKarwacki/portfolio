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
    // Here you would typically handle the form submission
    // For example, send the data to your server

    // For demonstration, we'll just set isSubmitted to true
    setIsSubmitted(true);

    // Reset the form
    e.currentTarget.reset();

    // Hide the notification after 3 seconds
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
        <p className="text-gray-700 -mt-6 dark:text-white/80">
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
          className="mt-10 flex flex-col items-center dark:text-black"
          onSubmit={handleSubmit}
        >
          <input
            className="h-14 px-4 rounded-lg border-black dark:bg-white dark:text-black w-full"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={"Your email"}
          />
          <textarea
            ref={messageRef}
            className="h-52 my-3 rounded-lg resize-none border-black p-4 w-full"
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
            className="fixed bottom-4 left-0 right-0 mx-auto w-max bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50"
          >
            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact;
