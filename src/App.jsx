import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <Navbar />
          <Hero />
          <div className="px-3">
            <Work />
            <Skills />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
