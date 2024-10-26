import { FC } from "react";
import Navigation from "../components/Navigation";
import HamburgerMenu from "../components/HamburgerMenu";
import { links } from "@/lib/data";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <HamburgerMenu links={links} />
      <Navigation links={links} />
    </header>
  );
};

export default Header;
