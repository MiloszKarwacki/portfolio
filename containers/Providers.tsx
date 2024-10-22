import ActiveSectionContextProvider from "./activeSection";
import React from "react";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Prvider({ children }: ProvidersProps) {
  return (
    <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
  );
}
