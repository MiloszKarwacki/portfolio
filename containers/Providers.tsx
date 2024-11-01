"use client";

import { FC, ReactNode } from "react";
import ActiveSectionContextProvider from "./activeSection";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>;
};

export default Providers;