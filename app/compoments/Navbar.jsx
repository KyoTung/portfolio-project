"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import "../globals.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScroll, setIsCroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsCroll(true);
      } else {
        setIsCroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image className="w-full" src={assets.header_bg_color} alt="" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] 
      py-4 flex items-center justify-between z-50 ${
        isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
      }`}
      >
        <a href="#top">
          <span className="font-extrabold text-4xl cursor-pointer mr-14">
            Tung
          </span>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : " bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image className="w-6" src={assets.moon_icon} alt="" />
          </button>
          <a
            className="font-ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gary-500 rounded-full ml-4"
            href="#contact"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="" />
          </a>

          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="block md:hidden ml-3"
          >
            <Image className="w-6" src={assets.menu_black} alt="" />
          </button>
        </div>

        {/* --------mobile menu------------  */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 
          bottom-0 w-54 h-screen bg-rose-50 transition duration-500 z-50
          ${isOpenMenu ? "right-0" : "-right-54"}`}
        >
          <div
            className="absolute right-6 top-6 "
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <Image
              className="w-5 cursor-pointer"
              src={assets.close_black}
              alt=""
            />
          </div>
          <li onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <a className="font-ovo" href="#about">
              About me
            </a>
          </li>
          <li onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <a className="font-ovo" href="#services">
              Services
            </a>
          </li>
          <li onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <a className="font-ovo" href="#work">
              My Work
            </a>
          </li>
          <li onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <a className="font-ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
