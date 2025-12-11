"use client";
import React from "react";
import Image from "next/image";
import { assets, infoList } from "@/assets/assets";

const About = ({ isDarkMode }) => {
  const skills = [
    "React.js",
    "Laravel",
    "JavaScript (ES6+)",
    "PHP",
    "MySQL",
    "RESTful APIs",
    "HTML5/CSS3",
    "Git/GitHub",
  ];
  return (
    <div
      id="about"
      className={`w-full px-[12%] py-10 scroll-mt-20 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h4
        className={`text-center mb-2 text-lg font-Ovo ${
          isDarkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        Introdution
      </h4>
      <h2
        className={`text-center text-5xl font-Ovo ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        About me
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-2-none">
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1 ">
          <p
            className={`mb-10 max-w-2xl font-Ovo ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            With hands-on experience in building web applications, I turn
            concepts into functional products. Seeking opportunities to innovate
            and grow in professional environments.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className={`border-[0.5px] rounded-xl p-6 w-36 cursor-pointer group hover:bg-amber-600 hover:-translate-y-1 duration-500 ${
                  isDarkMode
                    ? "border-gray-600 bg-gray-900"
                    : "border-gray-400 bg-white"
                }`}
              >
                <Image
                  src={icon}
                  alt={title}
                  className={`w-7 mt-3 group-hover:invert group-hover:brightness-200 ${
                    isDarkMode ? "invert brightness-200" : ""
                  }`}
                />
                <h3
                  className={`my-4 font-semibold group-hover:text-white ${
                    isDarkMode ? "text-white" : ""
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm group-hover:text-white ${
                    isDarkMode ? "text-gray-200" : ""
                  }`}
                >
                  {description}
                </p>
                <span className="group-hover:text-white">``</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
