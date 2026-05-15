import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";


const Header = () => {
  return (
   <header>
   <Image src="/assets/Logo.png" width={184} height={45} alt="logo" />
  <nav>
           <button popovertarget="menu"><IoIosMenu /></button>
    <ul popover id="menu" popover="auto">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/Events">Events</Link>
      </li>
      <li>
        <Link href="/BookTable">Book table</Link>
      </li>
      <li>
        <Link href="/ContactUs">Contact us</Link>
      </li>
  </ul> 
  </nav>
</header>
  );
};

export default Header;
