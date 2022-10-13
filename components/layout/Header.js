import Link from "next/link";
import Logo from "./Logo";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul className={classes.list}>
            <li className={classes["list__item"]}>
              <Link href="/about">소개</Link>
            </li>
            <li>
              <Link href="/contact">연락하기</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
