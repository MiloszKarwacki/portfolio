'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Test = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = () => {
    const newLocale = locale === 'en' ? 'pl' : 'en';
    // Pobieramy aktualną ścieżkę i zamieniamy w niej tylko część językową
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    // Używamy replace zamiast push i dodajemy scroll: false
    router.replace(newPath, { scroll: false });
  };

  return (
    <div className='flex flex-col w-full h-24 justify-center items-center bg-white text-black'>
      <h1 className='p-2'>{t('intro.title')}</h1>
      <p className='p-2'>{t('intro.subtitle')}</p>
    </div>
  );
};

export default Test;