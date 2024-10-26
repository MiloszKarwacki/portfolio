"use client";

import { useTheme } from "@/containers/ThemeContext";
import React from "react";
import Switch from "./ColorSwitch";
import { Moon, Sun } from "lucide-react";

const ThemeContext = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-5 right-12 flex items-center space-x-4">
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

export default ThemeContext;
