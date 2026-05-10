import Link from "next/link";
const Nav = () => {
  return (
    <ul className="flex gap-8">
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
  );
};

export default Nav;
