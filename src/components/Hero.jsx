import React from "react";
import { LampContainer } from "./ui/lamp";
import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <LampContainer className="relative text-3xl h-screen">
        <div className="max-w-2xl text-center font-poppins ">
          <p className="relative 3xl:bottom-16 sm-max:text-2xl bg-gradient-to-t from-[#949494] to-[#ffffff] text-transparent bg-clip-text text-center text-4xl font-medium tracking-tight">
            {t("intro")}
          </p>
          <div className="relative top-7 flex justify-center items-center font-bold">
            <CiLocationOn className="relative 3xl:bottom-12 bottom-[2px]" />
            <span className="relative 3xl:bottom-12 ml-2 bg-gradient-to-t from-[#949494] to-[#ffffff] text-transparent bg-clip-text text-center text-3xl font-medium tracking-tight">
              {t("location")}
            </span>
          </div>
        </div>
        <a
          className="relative  text-sm 3xl:top-12 top-24 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          href="mailto:boris_kalev_14@hotmail.com"
        >
          {t("button")}
        </a>
      </LampContainer>
    </>
  );
}

export default Hero;
