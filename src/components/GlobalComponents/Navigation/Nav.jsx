import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

const Nav = () => {
  return (
  <nav>
          <button popovertarget="menu"><IoIosMenu /></button>
    <ul popover id="menu">
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

  );
};

export default Nav;
