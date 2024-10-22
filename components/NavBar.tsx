import React from "react";
import Header from "../components/Header";
import HamburgerMenu from "../components/HamburgerMenu";
import { links } from "@/lib/data";

export default function NavBar() {
  return (
    <nav>
      <HamburgerMenu links={links} />
      <Header links={links} />
    </nav>
  );
}
