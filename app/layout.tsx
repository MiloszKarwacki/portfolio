import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "../containers/Providers";
import NavBar from "@/components/NavBar";
import ThemeSwitch from "@/components/ThemeControler";
import ThemeContextProvider from "@/containers/theme-context";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Miłosz Karwacki Portfolio",
  description: "Programmer Portfolio Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${sora.variable} font-Sora flex flex-col 
        bg-background-base-light text-text-primary-light relative
        dark:bg-background-base-dark dark:text-text-primary-dark dark:text-opacity-90 
        antialiased`}
      >
        {/* Gradient BG Color */}
        <div
          className="bg-primary-light absolute top-[-6rem] flex-1 -z-[10] right-[11rem] 
          h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w[68.75rem] 
          dark:bg-primary-dark"
        ></div>
        <div
          className="bg-secondary-light absolute top-[-1rem] -z-[10] flex-1 left-[-35rem] 
          h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75] 
          md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 
          dark:bg-secondary-dark"
        ></div>
        <ThemeContextProvider>
          <Providers>
            <NavBar />
            {children}
            <ThemeSwitch />
          </Providers>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
