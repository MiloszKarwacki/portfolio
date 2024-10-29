import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "../globals.css";
import Providers from "@/containers/Providers";
import ThemeSwitch from "@/components/ThemeControler";
import ThemeContextProvider from "@/containers/ThemeContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextIntlClientProvider, useMessages } from "next-intl";

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
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} className="!scroll-smooth">
      <body className={`${sora.variable} font-Sora flex flex-col bg-background-base-light text-text-primary-light relative dark:bg-background-base-dark dark:text-text-primary-dark dark:text-opacity-90 antialiased`}>
        <div className="bg-primary-light absolute top-[-6rem] flex-1 -z-[10] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-primary-dark"></div>
        <div className="bg-secondary-light absolute top-[-1rem] -z-[10] flex-1 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-secondary-dark"></div>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
            <ThemeContextProvider>
              <Header />
              {children}
              <ThemeSwitch />
              <Footer />
            </ThemeContextProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
