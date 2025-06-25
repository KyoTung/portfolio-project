"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import "../globals.css";
import { useEffect, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScroll, setIsCroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsCroll(true);
      } else {
        setIsCroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Có thể bỏ useEffect đọc localStorage ở đây, chỉ nhận prop isDarkMode

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]"></div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
          ${
            isScroll
              ? isDarkMode
                ? "bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-sm"
                : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
              : isDarkMode
              ? "bg-gray-900 bg-opacity-70"
              : ""
          }`}
      >
        <a href="#top">
          <span
            className={`font-extrabold text-4xl cursor-pointer mr-14 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Tung
          </span>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
            ${
              isScroll
                ? "bg-transparent"
                : isDarkMode
                ? "bg-gray-900 shadow-none bg-opacity-70"
                : "bg-white shadow-sm bg-opacity-50"
            }`}
        >
          <li>
            <a
              className={`font-ovo ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              } hover:text-amber-600`}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`font-ovo ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              } hover:text-amber-600`}
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className={`font-ovo ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              } hover:text-amber-600`}
              href="#projects"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className={`font-ovo ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              } hover:text-amber-600`}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              className={`w-6 ${isDarkMode ? "invert" : ""}`}
              src={assets.moon_icon}
              alt=""
            />
          </button>
          <a
            className={`font-ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4
              ${
                isDarkMode
                  ? "border-gray-400 text-gray-100"
                  : "border-gray-500 text-gray-900"
              }
            hover:bg-amber-600`}
            href="#contact"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              className={`w-3 ${isDarkMode ? "invert" : ""}`}
              alt=""
            />
          </a>

          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="block md:hidden ml-3"
          >
            <Image
              className={`w-6 ${isDarkMode ? "invert" : ""}`}
              src={assets.menu_black}
              alt=""
            />
          </button>
        </div>

        {/* --------mobile menu------------  */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0
            bottom-0 w-54 h-screen transition duration-500 z-50
            ${isDarkMode ? "bg-gray-900" : "bg-rose-50"}
            ${isOpenMenu ? "right-0" : "-right-54"}`}
        >
          <div
            className="absolute right-6 top-6"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <Image
              className={`w-5 cursor-pointer ${isDarkMode ? "invert" : ""}`}
              src={assets.close_black}
              alt=""
            />
          </div>
          <li onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <a
              className={`font-ovo ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
              href="#top"
            >
              Home
            </a>
          </li>
          <li onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <a
              className={`font-ovo ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
              href="#about"
            >
              About me
            </a>
          </li>
          <li onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <a
              className={`font-ovo ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
              href="#services"
            >
              Services
            </a>
          </li>
          <li onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <a
              className={`font-ovo ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
              href="#work"
            >
              My Work
            </a>
          </li>
          <li onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <a
              className={`font-ovo ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
