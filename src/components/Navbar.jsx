import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "../animation/animation.css";
const Navbar = () => {
  const { i18n } = useTranslation();

  const language = i18n.language === "fr";

  const handleLanguageChange = () => {
    const newLang = language ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  const [emoji, setEmoji] = useState("👨🏻‍💻");

  return (
    <div
      className="flex justify-between items-center py-10 w-full mx-auto lg-max:px-7 text-white z-50 relative bg-black/30 backdrop-blur-lg font-poppins"
      id="navbar"
    >
      <h1
        className="text-2xl p-1  font-bold underline underline-offset-8 decoration-cyan-400 -rotate-2 text-underline-bg"
        onMouseEnter={() => setEmoji("🙋🏻‍♂️")}
        onMouseLeave={() => setEmoji("👨🏻‍💻")}
      >
        Boris Kalev {emoji}
      </h1>
      <div className="flex gap-5 items-center text-lg">
        <button className="" onClick={handleLanguageChange}>
          {language ? "EN" : "FR"}
        </button>

        <a
          href="https://www.linkedin.com/in/boris-kalev-977972278/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:scale-125 transition-all duration-300 cursor-pointer" />
        </a>
        <a
          href="https://github.com/BorisKalev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:scale-125 transition-all duration-300 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
