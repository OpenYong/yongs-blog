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
              <Link href="/about">
                <a>소개</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>연락하기</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
