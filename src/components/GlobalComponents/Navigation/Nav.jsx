import Link from "next/link";
const Nav = () => {
    return ( 
        <nav>
            <Link href="/">Home</Link>
            <Link href="/">Events</Link>
            <Link href="/">Book table</Link>
            <Link href="/">Contact us</Link>
        </nav>
     );
}
 
export default Nav;