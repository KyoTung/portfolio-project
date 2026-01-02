import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Infomation = ({ isDarkMode }) => {
  return (
    <div
      className={`w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4
        ${isDarkMode ? "bg-gray-950 text-slate-100" : "bg-white text-gray-900"}
      `}
    >
      <div>
        <Image src={assets.user_image} className="rounded-full w-32" alt="" />
      </div>
      <h3
        className={`flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo ${
          isDarkMode ? "text-slate-100" : "text-gray-900"
        }`}
      >
        Hi! I'm Hoang Thanh Tung
        <Image src={assets.hand_icon} className="w-6" alt="" />
      </h3>
      <h1
        className={`text-3xl sm:text-6xl lg:text-[66px] font-Ovo ${
          isDarkMode ? "text-slate-50" : "text-gray-900"
        }`}
      >
        Full-Stack web developer.
      </h1>
      <p
        className={`max-w-2xl mx-auto font-Ovo ${
          isDarkMode ? "text-slate-200" : "text-gray-700"
        }`}
      >
        Computer Science student specializing in modern web development.
        Equipped with practical experience building ReactJS and NodeJS
        applications, I transform ideas into functional solutions. Eager to
        contribute technical skills and embrace new challenges in professional
        settings.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className={`px-10 py-3 border rounded-full flex items-center gap-2
            ${
              isDarkMode
                ? "border-slate-200 bg-gray-900 text-white"
                : "border-white bg-black text-white"
            }
          hover:bg-amber-600`}
        >
          Contact me
          <Image src={assets.right_arrow_white} className="w-4" alt="" />
        </a>
        <a
          href="/cv.pdf"
          download
          className={`px-10 py-3 border rounded-full flex items-center gap-2
            ${
              isDarkMode
                ? "border-slate-400 bg-gray-950 text-slate-100"
                : "border-gray-500 bg-white text-gray-900"
            }
          hover:bg-amber-600`}
        >
          My resume
          <Image src={assets.download_icon} className="w-4" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Infomation;
