import React from "react";

const Title = ({ text, className }) => {
  return (
    <div className={className}>
      <div>
        <h1 className="text-3xl font-bold font-poppins group-hover:text-teal-300 transition-all">
          {text}
        </h1>
        <div className="relative w-full h-[1px] max-w-6xl bg-cyan-400 mx-auto">
          <div className="absolute inset-0 h-[1px] bg-cyan-400 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-full after:transform after:-translate-x-1/2 after:bg-cyan-400 after:blur-[6px] after:opacity-60 after:shadow-[0_0_20px_10px_rgba(34,211,238,0.5)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
