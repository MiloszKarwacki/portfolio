"use client";

import { useTheme } from "@/containers/ThemeContext";
import React from "react";
import Switch from "./ColorSwitch";
import { Moon, Sun } from "lucide-react";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const ThemeController = () => {
  const { theme, toggleTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = () => {
    const newLocale = locale === 'en' ? 'pl' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPath, { scroll: false });
  };

  return (
    <div className="fixed bottom-5 right-10 flex items-center gap-4">
      {/* Przełącznik języka */}
      <Switch
        activeButton={
          <span className="text-xl">{locale === 'en' ? '🇬🇧' : '🇵🇱'}</span>
        }
        hiddenButton={
          <span className="text-xl">{locale === 'en' ? '🇵🇱' : '🇬🇧'}</span>
        }
        setActiveButton={handleLanguageChange}
      />

      {/* Przełącznik motywu */}
      <Switch
        activeButton={theme === "light" ? <Sun /> : <Moon />}
        hiddenButton={
          theme === "light" ? <Moon size={14} /> : <Sun size={14} />
        }
        setActiveButton={toggleTheme}
      />
    </div>
  );
};

export default ThemeController;