import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 py-20">
      <ul className="flex items-center justify-center space-x-2">
        <li>
          <Link href="https://github.com/OpenYong">
            <a
              className="flex items-center justify-center space-x-2 text-lg text-gray-500 transition duration-300 hover:text-black"
              target="_blank"
            >
              <FiGithub size="1.5em" title="GitHub" />
              <span>GitHub</span>
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
