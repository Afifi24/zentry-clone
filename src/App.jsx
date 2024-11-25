import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <main className="relative w-screen overflow-x-hidden min-h-screen ">
      <Hero />
      <About />
    </main>
  );
};

export default App;
