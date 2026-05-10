import Link from "next/link";
const Nav = () => {
  return (
    <div className="flex gap-8">
      <Link href="/">Home</Link>
      <Link href="/Events">Events</Link>
      <Link href="/BookTable">Book table</Link>
      <Link href="/ContactUs">Contact us</Link>
    </div>
  );
};

export default Nav;
