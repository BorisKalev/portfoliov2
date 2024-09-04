"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiCsharp,
  SiDotnet,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTypescript,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
const Skills = () => {
  const { t } = useTranslation();
  const skills = [
    { text: "React", Icon: SiReact, color: "#57c3dd" },
    { text: "Node.js", Icon: SiNodedotjs, color: "#80bd00" },
    { text: "Javascript", Icon: SiJavascript, color: "#f7e018" },
    { text: "Typescript", Icon: SiTypescript, color: "#3178c6" },
    { text: "Tailwind CSS", Icon: SiTailwindcss, color: "#00b6d6" },
    { text: "CSS3", Icon: SiCss3, color: "#1b73ba" },
    { text: "HTML5", Icon: SiHtml5, color: "#e44f25" },
    { text: "C#", Icon: SiCsharp, color: "#67217a" },
    { text: ".Net", Icon: SiDotnet, color: "#512bd4" },
  ];

  return (
    <div className="mt-32 max-w-5xl mx-auto px-8">
      <Title
        text={t("skills")}
        className="flex flex-col items-center justify-center "
      />

      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
