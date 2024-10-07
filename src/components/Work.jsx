import React from "react";
import { PinContainer } from "./ui/3d-pin";
import cryptopia from "../assets/cryptopia.png";
import surfago from "../assets/surfago.png";
import Netflix from "../assets/Netflix.png";
import Aspiro from "../assets/Aspiro.png";
import Title from "./Title";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";
import { BiCodeBlock } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export default function AnimatedPin() {
  const { t } = useTranslation();

  const AnimatedPinInformation = [
    {
      title: "Cryptopia",
      descriptionCard: `${t("cryptopia-card")}`,
      img: cryptopia,
      link: "https://cryptopia.boriskalev.com/",
      description: `${t("cryptopia-desc")}`,
      languages: ["React", "Tailwind", "API"],
      githubLink: "https://github.com/BorisKalev/cryptotopia",
    },
    {
      title: "Surfago",
      descriptionCard: `${t("surfago-card")}`,
      img: surfago,
      link: "https://surfago.boriskalev.com/",
      description: `${t("surfago-desc")}`,
      languages: ["React", "Node.js", "Tailwind"],
      githubLink: "https://github.com/BorisKalev/surfago-app",
    },
    {
      title: "Aspiro",
      descriptionCard: `${t("aspiro-card")}`,
      img: Aspiro,
      link: "https://aspiro.vercel.app/",
      description: `${t("aspiro-desc")}`,
      languages: ["NextJS", "Framer", "Tailwind"],
      githubLink: "https://github.com/BorisKalev/Aspiro",
    },
    {
      title: "Netflix",
      descriptionCard: `${t("netflix-card")}`,
      img: Netflix,
      link: "https://netflix-react-copy.firebaseapp.com/",
      description: `${t("netflix-desc")}`,
      languages: ["React", "Firebase", "API", "Tailwind"],
      githubLink: "https://github.com/BorisKalev/Netflix",
    },
  ];

  return (
    <>
      <div className="-mt-20" />
      <Title
        text={t("projects")}
        className="flex flex-col items-center justify-center mt-8"
      />
      <div className="w-full flex flex-col gap-8 items-center justify-center mt-10">
        {AnimatedPinInformation.map((card, idx) => (
          <div
            key={idx}
            className={`w-full flex md-max:flex-col justify-between items-center max-w-5xl px-8 mt-10 mx-auto ${
              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
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
                    {lang === "NextJS" && (
                      <SiNextdotjs className="text-white mr-2" />
                    )}
                    {lang === "Framer" && (
                      <SiFramer className="text-white mr-2" />
                    )}
                    <p className="text-sm font-medium">{lang}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center mx-auto gap-x-1 mt-8">
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  {t("liveDemo")}
                </a>
                <BsBoxArrowUpRight />
                <a
                  href={card.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center ml-5 gap-x-1 cursor-pointer"
                >
                  <p>Code</p>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
