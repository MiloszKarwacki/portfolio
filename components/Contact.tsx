"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/useInView";
import SubmitButton from "./SubmitButton";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from 'next-intl';

interface FormState {
  isSending: boolean;
  isSuccess: boolean;
  error: string;
}

interface FormData {
  email: string | null;
  message: string | null;
}

const Contact = () => {
  const { ref } = useSectionInView("#contact", 0.6);
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslations('contact');
  const [formState, setFormState] = useState<FormState>({
    isSending: false,
    isSuccess: false,
    error: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSending: true, error: "" }));

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data: FormData = {
      email: formData.get("senderEmail") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(t('notifications.error'));
      }

      form.reset();
      setFormState(prev => ({ ...prev, isSuccess: true }));
      setTimeout(() => setFormState(prev => ({ ...prev, isSuccess: false })), 3000);
    } catch (error) { // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormState(prev => ({ ...prev, error: t('notifications.error') }));
      setTimeout(() => setFormState(prev => ({ ...prev, error: "" })), 3000);
    } finally {
      setFormState(prev => ({ ...prev, isSending: false }));
    }
  };

  return (
    <motion.section className="mb-16 relative" id="contact" ref={ref}>
      <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
        <SectionHeading>{t('title')}</SectionHeading>
      </Fade>

      <Fade direction="up" delay={300} cascade damping={1e-1} triggerOnce={true}>
        <p className="text-text-muted-light dark:text-text-muted-dark -mt-6">
          {t('subtitle')}
        </p>
      </Fade>

      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <form
          ref={formRef}
          className="mt-10 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="h-14 px-4 rounded-lg w-full
              bg-background-elevated-light
              text-text-primary-light
              border border-ui-border-light
              focus:outline-none focus:ring-2
              focus:ring-primary-light
              dark:bg-background-elevated-dark
              dark:text-text-primary-dark
              dark:border-ui-border-dark
              dark:focus:ring-primary-dark
              transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={t('form.email')}
            disabled={formState.isSending}
          />
          <textarea
            className="h-52 my-3 rounded-lg resize-none w-full p-4
              bg-background-elevated-light
              text-text-primary-light
              border border-ui-border-light
              focus:outline-none focus:ring-2
              focus:ring-primary-light
              dark:bg-background-elevated-dark
              dark:text-text-primary-dark
              dark:border-ui-border-dark
              dark:focus:ring-primary-dark
              transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed"
            name="message"
            placeholder={t('form.message')}
            required
            maxLength={5000}
            disabled={formState.isSending}
          />
          <div className="mt-2">
            <SubmitButton 
              text={formState.isSending ? t('form.sending') : t('form.submit')} 
            />
          </div>
        </form>
      </Fade>

      <AnimatePresence>
        {formState.isSuccess && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-4 left-0 right-0 mx-auto w-max
              bg-state-success text-text-inverse-light
              px-6 py-3 rounded-full shadow-xl dark:shadow-xl-dark z-50"
          >
            {t('notifications.success')}
          </motion.div>
        )}
        {formState.error && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-4 left-0 right-0 mx-auto w-max
              bg-state-error text-text-inverse-light
              px-6 py-3 rounded-full shadow-xl dark:shadow-xl-dark z-50"
          >
            {t('notifications.error')}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact;