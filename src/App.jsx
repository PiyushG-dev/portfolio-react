import React from "react";
import "./App.css";
import { useEffect } from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Slides from "./components/slides/Slides";
import Footer from "./components/footer/Footer";

const App = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className="App">
      <Header />
      <About />
      <Slides />
      <Footer />
    </div>
  );
};

export default App;
