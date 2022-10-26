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
      <header className="sticky top-0 flex h-16 w-full items-center justify-around border-b bg-white px-4">
        <nav>
          <ul className="flex space-x-2">
            <li>
              <Link href="/">
                <a
                  className={`duration-0 rounded-md p-2 text-base transition ease-in-out ${
                    router.pathname === "/"
                      ? "font-bold text-sky-500"
                      : "font-normal"
                  } duration-300 hover:bg-slate-100`}
                >
                  홈
                </a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a
                  className={`duration-0 rounded-md p-2 text-base transition ease-in-out ${
                    router.pathname === "/posts"
                      ? "font-bold text-sky-500"
                      : "font-normal"
                  } duration-300 hover:bg-slate-100`}
                >
                  블로그
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a
                  className={`duration-0 rounded-md p-2 text-base transition ease-in-out ${
                    router.pathname === "/projects"
                      ? "font-bold text-sky-500"
                      : "font-normal"
                  } duration-300 hover:bg-slate-100`}
                >
                  프로젝트
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={`duration-0 rounded-md p-2 text-base transition ease-in-out ${
                    router.pathname === "/about"
                      ? "font-bold text-sky-500"
                      : "font-normal"
                  } duration-300 hover:bg-slate-100`}
                >
                  소개
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={`duration-0 rounded-md p-2 text-base transition ease-in-out ${
                    router.pathname === "/contact"
                      ? "font-bold text-sky-500"
                      : "font-normal"
                  } duration-300 hover:bg-slate-100`}
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
