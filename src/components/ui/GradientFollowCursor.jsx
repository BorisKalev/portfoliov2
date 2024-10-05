import React, { useState, useEffect } from "react";

export const GradientFollowCursor = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0))`,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none", // Ensures that the gradient does not block clicks
    zIndex: 1, // Ensures the gradient stays behind the content
  };

  return (
    <div className="relative">
      <div style={gradientStyle} className="gradient-cursor"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientFollowCursor;
