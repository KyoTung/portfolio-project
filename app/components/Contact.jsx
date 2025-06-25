"use client";
import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c00f2dd7-45aa-42c6-8119-94cb5af891c5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? "bg-gray-950" : ""}`}>
      <h4
        className={`text-center mb-2 text-lg font-Ovo ${
          isDarkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        Contact me
      </h4>
      <h2
        className={`text-center text-5xl font-Ovo ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Get In Touch
      </h2>

      <p
        className={`mb-10 max-w-2xl font-Ovo mx-auto mt-5 text-center ${
          isDarkMode ? "text-gray-300" : "text-gray-800"
        }`}
      >
        Have a project in mind or want to discuss potential opportunities? Feel
        free to reach out!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3
            className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Contact Information
          </h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div
                className={`${
                  isDarkMode ? "bg-amber-900/30" : "bg-amber-100"
                } p-3 rounded-full mr-4`}
              >
                <FiMail className="text-amber-600" size={20} />
              </div>
              <div>
                <h4
                  className={`font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  Email
                </h4>
                <a
                  href="mailto:hoangthanhtung.ac1@gmail.com"
                  className={`${
                    isDarkMode
                      ? "text-gray-400 hover:text-amber-400"
                      : "text-gray-600 hover:text-amber-600"
                  }`}
                >
                  hoangthanhtung.ac1@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div
                className={`${
                  isDarkMode ? "bg-amber-900/30" : "bg-amber-100"
                } p-3 rounded-full mr-4`}
              >
                <FiPhone className="text-amber-600" size={20} />
              </div>
              <div>
                <h4
                  className={`font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  Phone
                </h4>
                <a
                  href="tel:+84559584093"
                  className={`${
                    isDarkMode
                      ? "text-gray-400 hover:text-amber-400"
                      : "text-gray-600 hover:text-amber-600"
                  }`}
                >
                  +84 559584093
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div
                className={`${
                  isDarkMode ? "bg-amber-900/30" : "bg-amber-100"
                } p-3 rounded-full mr-4`}
              >
                <FiMapPin className="text-amber-600" size={20} />
              </div>
              <div>
                <h4
                  className={`font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  Location
                </h4>
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Hanoi, Vietnam
                </p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className={`block mb-2 ${
                  isDarkMode ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent
                  ${
                    isDarkMode
                      ? "bg-gray-900 text-gray-100 border-gray-700"
                      : "bg-white text-gray-900 border-gray-300"
                  }
                `}
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block mb-2 ${
                  isDarkMode ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent
                  ${
                    isDarkMode
                      ? "bg-gray-900 text-gray-100 border-gray-700"
                      : "bg-white text-gray-900 border-gray-300"
                  }
                `}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block mb-2 ${
                isDarkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent
                ${
                  isDarkMode
                    ? "bg-gray-900 text-gray-100 border-gray-700"
                    : "bg-white text-gray-900 border-gray-300"
                }
              `}
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors w-full"
          >
            Send Message
          </button>
          <span
            className={`text-center block ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            {result}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
