import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center h-16 w-full px-4 border-b">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about">
                <a className="text-base font-medium">소개</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-base font-medium">연락하기</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
