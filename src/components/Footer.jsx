import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className=" text-slate-100 py-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Section: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/boriskalev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/boris-kalev-977972278/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-cyan-400 transition-colors" />
          </a>
        </div>

        {/* Right Section: Copyright */}
        <div className="flex flex-col items-center mt-6 md:mt-0">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {t("rights")}
          </p>
        </div>
      </div>

      <div className="relative w-full h-[1px] max-w-6xl mt-3 bg-cyan-400 mx-auto">
        <div className="absolute inset-0 h-[1px] bg-cyan-400 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-full after:transform after:-translate-x-1/2 after:bg-cyan-400 after:blur-[6px] after:opacity-60 after:shadow-[0_0_20px_10px_rgba(34,211,238,0.5)]"></div>
      </div>
    </footer>
  );
};

export default Footer;
