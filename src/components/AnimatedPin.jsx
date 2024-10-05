import React from "react";
import { PinContainer } from "./ui/3d-pin";
import cryptopia from "../assets/cryptopia.png";
import surfago from "../assets/surfago.png";
import Netflix from "../assets/Netflix.png";

const AnimatedPinInformation = [
  {
    title: "Cryptopia",
    description:
      "A crypto website where you can search and track different crypto coins with a focus on design",
    img: cryptopia,
    link: "https://cryptopia.boriskalev.com/",
  },
  {
    title: "Surfago",
    description:
      "A website where you can browse different equipments & accessories related to Surf and lifestyle",
    img: surfago,
    link: "https://surfago.boriskalev.com/",
  },
  {
    title: "Netflix",
    description:
      "A Netflix copy where you can browse different movies, add them to a must-watch list and other options",
    img: Netflix,
    link: "https://netflix-react-copy.web.app/",
  },
];

export default function AnimatedPin() {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center">
      {AnimatedPinInformation.map((card, idx) => (
        <div key={idx} className="w-full flex justify-between items-center">
          {/* Pin Container */}
          <PinContainer title={card.link} href={card.link} key={idx}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs font-bold text-base text-slate-100 pb-2 m-0">
                {card.title}
              </h3>
              <div className="text-base m-0 p-0 font-normal">
                <span className="text-slate-500">{card.description}</span>
              </div>
              <div className="relative flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-teal-500 via-gray-500 to-blue-500">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover rounded-lg p-1"
                />
              </div>
            </div>
          </PinContainer>

          {/* Information Section */}
          <div className="flex flex-col items-start justify-start text-left text-slate-100 ml-6">
            <h4 className="text-xl font-semibold">{card.title}</h4>
            <p className="text-sm text-slate-300">{card.description}</p>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-teal-400 hover:underline"
            >
              Visit Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
