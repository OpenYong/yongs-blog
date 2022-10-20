import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const customButton = () => {
    return (
      <a
        className={`text-base ${
          router.pathname === "/about"
            ? "font-medium text-sky-500"
            : "font-normal"
        }`}
      >
        소개
      </a>
    );
  };

  return (
    <>
      <header className="flex justify-around items-center h-16 w-full px-4 border-b">
        <nav>
          <ul className="flex space-x-2">
            <li>
              <Link href="/">
                <a
                  className={`p-2 transition rounded-md duration-0 ease-in-out text-base ${
                    router.pathname === "/"
                      ? "font-bold text-sky-500"
                      : "font-normal"
                  } hover:bg-slate-100 duration-300`}
                >
                  홈
                </a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a
                  className={`p-2 transition rounded-md duration-0 ease-in-out text-base ${
                    router.pathname === "/posts"
                      ? "font-bold text-sky-500"
                      : "font-normal"
                  } hover:bg-slate-100 duration-300`}
                >
                  블로그
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={`p-2 transition rounded-md duration-0 ease-in-out text-base ${
                    router.pathname === "/about"
                      ? "font-bold text-sky-500"
                      : "font-normal"
                  } hover:bg-slate-100 duration-300`}
                >
                  소개
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={`p-2 transition rounded-md duration-0 ease-in-out text-base ${
                    router.pathname === "/contact"
                      ? "font-bold text-sky-500"
                      : "font-normal"
                  } hover:bg-slate-100 duration-300`}
                >
                  연락하기
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
