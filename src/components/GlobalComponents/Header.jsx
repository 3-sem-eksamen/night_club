import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-[1rlh] max-w-[25rem] md:max-w-6xl mx-auto">
      <Image src="/assets/Logo.png" width={184} height={45} alt="logo" />
    <nav>
    <div id="menu" popover="auto" className="menu-wrapper">
    <button popovertarget="menu" popovertargetaction="toggle" className="menu-btn close-btn">
      <ImCross className="text-white w-8 h-8" />
    </button>

    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/Events">Events</Link></li>
      <li><Link href="/BookTable">Book table</Link></li>
      <li><Link href="/ContactUs">Contact us</Link></li>
    </ul>
    </div>

    <button popovertarget="menu" popovertargetaction="toggle" className="menu-btn open-btn">
      <IoIosMenu className="text-white w-16 h-16" />
    </button>
</nav>
    </header>
  );
};

export default Header;
