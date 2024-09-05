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
  return (
    <div
      className="flex justify-between items-center py-10 w-full mx-auto lg-max:px-7 text-white z-50 relative bg-black/30 backdrop-blur-lg font-poppins"
      id="navbar"
    >
      <div className="relative -rotate-6">
        <h1 className="text-2xl p-1 font-bold ">Boris Kalev</h1>

        <div className="relative w-full h-[1px] bg-cyan-400 ">
          <div className="absolute inset-0 h-[1px] bg-cyan-400 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-full after:transform after:-translate-x-1/2 after:bg-cyan-400 after:blur-[6px] after:opacity-60 after:shadow-[0_0_20px_10px_rgba(34,211,238,0.5)]"></div>
        </div>
      </div>

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
