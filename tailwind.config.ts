// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main theme colors
        primary: {
          light: '#fbe2e3',  // Light pink gradient
          dark: '#946263',   // Dark pink gradient
        },
        secondary: {
          light: '#dbd7fb',  // Light purple gradient
          dark: '#676394',   // Dark purple gradient
        },

        // Background colors
        background: {
          base: {
            light: '#f9fafb',  // gray-50
            dark: '#111827',   // gray-900
          },
          elevated: {
            light: '#ffffff',  // white
            dark: '#1f2937',   // gray-800
          },
          hover: {
            light: '#f3f4f6',  // gray-100
            dark: '#374151',   // gray-700
          },
          transparent: {
            light: 'rgba(255, 255, 255, 0.8)',
            dark: 'rgba(255, 255, 255, 0.1)',
          }
        },

        // Text colors
        text: {
          primary: {
            light: '#111827',    // gray-950
            dark: '#f9fafb',     // gray-50
          },
          muted: {
            light: '#4b5563',    // gray-700
            dark: 'rgba(255, 255, 255, 0.7)',
          },
          inverse: {
            light: '#ffffff',    // white
            dark: '#111827',     // gray-900
          }
        },

        // State colors
        state: {
          success: '#22c55e',     // green-500
          error: '#ef4444',       // red-500
          warning: '#f59e0b',     // amber-500
          info: '#3b82f6',        // blue-500
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        Sora: ['var(--font-sora)', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;