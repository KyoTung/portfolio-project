"use client";
import React from "react";
import Image from "next/image";
import { assets, infoList } from "@/assets/assets"; 

const About = ({ isDarkMode }) => {
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
        Introduction
      </h4>
      <h2
        className={`text-center text-5xl font-Ovo ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        About me
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-start gap-20 my-20">

        <div className="w-64 sm:w-80 rounded-3xl max-w-none mx-auto lg:mx-0">
          <Image
            src={assets.user_image}
            alt="User"
            className="w-full rounded-3xl"
          />
        </div>

 
        <div className="flex-1">
          <p
            className={`mb-10 max-w-2xl font-Ovo text-center lg:text-left ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            With hands-on experience in building web applications, I turn
            concepts into functional products. Seeking opportunities to innovate
            and grow in professional environments.
          </p>


          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className={`border-[0.5px] rounded-xl p-6 cursor-pointer group hover:bg-amber-600 hover:-translate-y-1 duration-500 flex flex-col items-start ${
                  isDarkMode
                    ? "border-gray-600 bg-gray-900"
                    : "border-gray-400 bg-white"
                }`}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />

                <h3
                  className={`my-4 font-semibold text-lg group-hover:text-white ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {title}
                </h3>

                <p
                  className={`text-sm leading-6 group-hover:text-white ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;