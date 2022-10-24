import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 py-20">
      <ul className="flex space-x-2 justify-center items-center">
        <li>
          <Link href="https://github.com/OpenYong">
            <a
              className=" transition flex text-lg justify-center items-center space-x-2 text-gray-500 hover:text-black duration-300"
              target="_blank"
            >
              <IoLogoGithub size="1.5em" title="GitHub" />
              <span>GitHub</span>
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
