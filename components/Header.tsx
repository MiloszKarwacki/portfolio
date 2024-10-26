import React from "react";
import Navigation from "../components/Navigation";
import HamburgerMenu from "../components/HamburgerMenu";
import { links } from "@/lib/data";

export default function Header() {
  return (
    <header>
      <HamburgerMenu links={links} />
      <Navigation links={links} />
    </header>
  );
}
