
import Navigation from "../components/Navigation";
import HamburgerMenu from "../components/HamburgerMenu";
import { links } from "@/lib/data";

const Header = () => {
  return (
    <header>
      <HamburgerMenu links={links} />
      <Navigation links={links} />
    </header>
  );
};

export default Header;
