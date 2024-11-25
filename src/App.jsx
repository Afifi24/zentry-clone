import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

const App = () => {
  return (
    <main className="relative w-screen overflow-x-hidden min-h-screen ">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
