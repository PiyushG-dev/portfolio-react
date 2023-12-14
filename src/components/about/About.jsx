import React from "react";
import "./About.css";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const wrapper = useRef(null);
  const head = useRef(null);
  const subHead = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      head.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top 5%",
        },
      }
    );
    gsap.fromTo(
      subHead.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top 5%",
        },
      }
    );
  }, []);

  return (
    <section ref={wrapper} className="a-wrapper">
      <div className="a-container">
        <div ref={head} className="a-heading">
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </div>
        <div className="a-sub-heading-container">
          <div ref={subHead} className="a-sub-heading">
            The combination of my passion for design, code &amp; interaction
            positions me in a unique place in the web design world.
          </div>
          <div data-scroll data-scroll-speed={0.1} className="a-button">
            About me
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
