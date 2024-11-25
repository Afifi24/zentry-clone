import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="relative w-screen overflow-x-hidden min-h-screen ">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
