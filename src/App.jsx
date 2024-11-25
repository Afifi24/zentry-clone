import React from "react";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative w-screen overflow-x-hidden min-h-screen ">
      <Hero />
      <section className="min-h-screen bg-blue-600"></section>
    </main>
  );
};

export default App;
