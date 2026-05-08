import Link from "next/link";
const Nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/Events">Events</Link>
      <Link href="/BookTable">Book table</Link>
      <Link href="/ContactUs">Contact us</Link>
    </nav>
  );
};

export default Nav;
