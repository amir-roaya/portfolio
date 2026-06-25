"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
type HeaderProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const [isHeaderShow, setIsHeaderShow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMenuOpen) {
        setIsHeaderShow(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY < 100) {
        setIsHeaderShow(true);
        lastScrollY = currentScrollY;
        return;
      }

      const scrollDifference = currentScrollY - lastScrollY;

      if (Math.abs(scrollDifference) < 20) {
        return;
      }

      if (scrollDifference > 0) {
        setIsHeaderShow(false);
      } else {
        setIsHeaderShow(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClick = (e: PointerEvent) => {
      const element = e.target as HTMLElement;

      if (element.tagName !== "use" && element.tagName !== "svg") {
        if (!element.classList.contains("mobile-menu")) {
          setIsMenuOpen(false);
        }
      }
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [setIsMenuOpen]);

  const scrollByAmount = (amount: number) => {
    window.scrollTo(0, amount);
  };

  return (
    <header
      className={`bg-[#230f3d] max-md:h-24 h-28 fixed top-0 left-0 right-0 z-15 shadow-menu ${isHeaderShow ? "" : "translate-y-[-62%]"} header-transition`}
    >
      <div className="container">
        <nav className="font-poppins-medium flex justify-between items-center max-md:h-24 h-28 text-xl max-lg:text-[16px]">
          <p className="select-none hover:skew-3 transition-all overflow-x-hidden">
            &lt;Dev /&gt;
          </p>

          <ul className="flex justify-between items-center w-4/7 max-md:w-3/5 max-sm:hidden">
            <li>
              <Link
                className="hover:text-text-color main-transition"
                href=""
                onClick={() => scrollByAmount(139)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                onClick={() => scrollByAmount(1140)}
                className="hover:text-text-color main-transition"
                href=""
              >
                About
              </Link>
            </li>

            <li>
              <Link
                onClick={() => scrollByAmount(1841)}
                className="hover:text-text-color main-transition"
                href=""
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                onClick={() => scrollByAmount(2518)}
                className="hover:text-text-color main-transition"
                href=""
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                onClick={() => scrollByAmount(3600)}
                className="hover:text-text-color main-transition"
                href=""
              >
                Contect
              </Link>
            </li>
          </ul>

          <ul
            className={`flex-col items-center fixed ${isMenuOpen ? "right-5" : "-right-60"} top-28 p-8 gap-8 backdrop-blur-sm w-56 shadow-menu-mobile menu-transition hidden max-sm:flex z-20 mobile-menu`}
          >
            <li>
              <Link
                className="hover:text-text-color main-transition mobile-menu"
                href=""
                onClick={() => scrollByAmount(93)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                onClick={() => scrollByAmount(761)}
                className="hover:text-text-color main-transition mobile-menu"
                href=""
              >
                About
              </Link>
            </li>

            <li>
              <Link
                onClick={() => scrollByAmount(1299)}
                className="hover:text-text-color main-transition mobile-menu"
                href=""
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                onClick={() => scrollByAmount(1799)}
                className="hover:text-text-color main-transition mobile-menu"
                href=""
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                onClick={() => scrollByAmount(2562)}
                className="hover:text-text-color main-transition mobile-menu"
                href=""
              >
                Contect
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="cursor-pointer hidden max-sm:block"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg>
              <use href={isMenuOpen ? "#close" : "#menu"}></use>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
