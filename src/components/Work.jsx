import React from "react";
import { PinContainer } from "./ui/3d-pin";
import cryptopia from "../assets/cryptopia.png";
import surfago from "../assets/surfago.png";
import Netflix from "../assets/Netflix.png";
import Title from "./Title";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { BiCodeBlock } from "react-icons/bi";
const AnimatedPinInformation = [
  {
    title: "Cryptopia",
    descriptionCard: "A crypto website",
    img: cryptopia,
    link: "https://cryptopia.boriskalev.com/",
    description:
      "A crypto website where you can search and track different crypto coins with a focus on design.",
    languages: ["React", "Tailwind", "API"],
  },
  {
    title: "Surfago",
    descriptionCard:
      "Browse equipment & accessories related to Surf and lifestyle",
    img: surfago,
    link: "https://surfago.boriskalev.com/",
    description:
      "A website where you can find and browse different surfing equipment, gear, and accessories. It offers a variety of lifestyle products that are focused on the surf community.",
    languages: ["React", "Node.js", "Tailwind"],
  },
  {
    title: "Netflix",
    descriptionCard: "A Netflix clone to browse movies",
    img: Netflix,
    link: "https://netflix-react-copy.web.app/",
    description:
      "A Netflix clone where users can browse different movies, add them to their must-watch list, and discover more features in a similar Netflix-like interface.",
    languages: ["React", "Firebase", "API", "Tailwind"],
  },
];

export default function AnimatedPin() {
  return (
    <>
      <div className="-mt-20" />
      <Title
        text={"Projects"}
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="w-full flex flex-col gap-8 items-center justify-center mt-10">
        {AnimatedPinInformation.map((card, idx) => (
          <div
            key={idx}
            className={`w-full flex md-max:flex-col justify-between items-center max-w-5xl px-8 mt-10 mx-auto ${
              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Pin Container */}
            <PinContainer
              title={card.link}
              href={card.link}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs font-bold text-base text-slate-100 pb-2 m-0">
                  {card.title}
                </h3>
                <div className="text-base m-0 p-0 font-normal">
                  <span className="text-slate-500">{card.descriptionCard}</span>
                </div>
                <div className="relative flex flex-1 w-full rounded-lg mt-4 bg-black border border-white/[0.2] group-hover/pin:border-white/[0.2] ">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="object-contain rounded-lg p-1"
                  />
                </div>
              </div>
            </PinContainer>

            {/* Information Section */}
            <div className="flex flex-col items-start text-left text-slate-100 ml-6 md-max:mt-20 md-max:items-center md-max:justify-center md-max:text-center md-max:mx-auto md-max:w-full">
              <h4 className="text-xl font-semibold mx-auto">{card.title}</h4>
              <p className="text-md text-slate-300 mt-5 max-w-[500px] md-max:w-96 sm-max:w-full ">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-3 mx-auto mt-8">
                {card.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500 to-cyan-900 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-200 ease-in-out"
                  >
                    {/* Optionally add icons */}
                    {lang === "React" && (
                      <FaReact className="text-white mr-2" />
                    )}
                    {lang === "Tailwind" && (
                      <SiTailwindcss className="text-white mr-2" />
                    )}
                    {lang === "Node.js" && (
                      <FaNodeJs className="text-white mr-2" />
                    )}
                    {lang === "Firebase" && (
                      <SiFirebase className="text-white mr-2" />
                    )}
                    {lang === "API" && (
                      <BiCodeBlock className="text-white mr-2" />
                    )}
                    <p className="text-sm font-medium">{lang}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center mx-auto gap-x-1 mt-8">
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <BsBoxArrowUpRight />
                <div className="flex items-center ml-2 gap-x-1 cursor-pointer">
                  <p>Code</p>
                  <FaGithub />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
