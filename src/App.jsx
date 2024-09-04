import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white font- px-5">
        <div className="max-w-6xl mx-auto">
          <Navbar />
          <Hero />
          <Work />
          <Skills />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
