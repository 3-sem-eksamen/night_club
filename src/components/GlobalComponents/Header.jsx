import Image from "next/image";
import Nav from "./Navigation/Nav";

const Header = () => {
  return (
    <nav className="flex justify-between max-w-6xl mx-auto w-full items-center py-6 px-4">
      <Image src="/assets/Logo.png" width={184} height={45} alt="logo" />
      <Nav />
    </nav>
  );
};

export default Header;
