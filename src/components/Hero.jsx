import React from "react";
import { LampContainer } from "./ui/lamp";
import { MdLocationPin } from "react-icons/md";

export function Hero() {
  return (
    <>
      <LampContainer className="text-3xl">
        <div className="max-w-2xl text-center font-poppins ">
          <p className="realtive top-3 lg-max:top-0 bg-gradient-to-br from-slate-100 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent">
            I am an aspiring software developer specializing in building and
            occasionally designing exceptional digital experiences.
          </p>
          <div className="relative top-7 flex justify-center items-center font-bold">
            <MdLocationPin className="" />
            <span className="ml-2 bg-gradient-to-br from-slate-100 to-slate-500 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent">
              Montréal, Qc
            </span>
          </div>
        </div>
        <a
          className="relative text-sm top-20 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          href="mailto:boris_kalev_14@hotmail.com"
        >
          Get in touch
        </a>
      </LampContainer>
    </>
  );
}

export default Hero;
