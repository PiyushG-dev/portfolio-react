import React from "react";
import "./Footer.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

const Footer = () => {
  const wrapper = useRef(null);
  const btn = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      btn.current,
      { x: -150 },
      {
        x: 0,
        scrollTrigger: {
          trigger: wrapper.current,
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <motion.section style={{ y }} ref={wrapper} className="f-wrapper">
      <div className="f-container">
        <div>
          <img src="src/images/prof.jpg" alt="profile" />
          <h1>Let's work</h1>
        </div>
        <div>
          <h1>together</h1>
        </div>
        <div>
          <div ref={btn} className="f-button">
            Get in touch
          </div>
        </div>
        <div className="contact">
          <button className="email">info@piyushgoswami.com</button>
          <button className="phone">+91 8638572320</button>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
