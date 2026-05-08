import Image from "next/image";
import Nav from "./Navigation/Nav";

const Header = () => {
  return (
    <nav>
      <Image src="/assets/Logo.png" width={184} height={45} alt="logo" />
      <Nav />
    </nav>
  );
};

export default Header;
