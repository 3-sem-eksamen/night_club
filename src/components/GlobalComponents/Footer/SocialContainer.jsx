import { FaFacebookF } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const SocialContainer = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <p >Stay Connected With Us</p>

        <div className="flex space-x-4">
        <Link
          href="https://www.facebook.com/"
          className="text-white border border-white p-3 text-2xl"
        >
          <FaFacebookF />
        </Link>

        <Link
          href="https://www.snapchat.com/"
          className="text-white border border-white p-3 text-2xl"
        >
          <FaSnapchatGhost />
        </Link>

        <Link
          href="https://www.instagram.com/?hl=da"
          className="text-white border border-white p-3 text-2xl"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default SocialContainer;
