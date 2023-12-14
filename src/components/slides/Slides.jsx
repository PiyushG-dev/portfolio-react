import React from "react";
import "./Slides.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Slides = () => {
  const wrapper = useRef(null);
  const firstRow = useRef(null);
  const secondtRow = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      firstRow.current,
      {
        x: "-10%",
      },
      {
        x: "5%",
        scrollTrigger: {
          trigger: firstRow.current,
          scrub: 1.5,
        },
      }
    );
    gsap.fromTo(
      secondtRow.current,
      {
        x: "10%",
      },
      {
        x: "-5%",
        scrollTrigger: {
          trigger: secondtRow.current,
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <section ref={wrapper} className="s-wrapper">
      <div ref={firstRow} className="first-row">
        <div className="box">
          <img src="src/images/c2montreal.png" alt="p1" />
        </div>
        <div className="box">
          <img src="src/images/funny.jpg" alt="p2" />
        </div>
        <div className="box">
          <img src="src/images/powell.jpg" alt="p3" />
        </div>
        <div className="box">
          <img src="src/images/locomotive.png" alt="p4" />
        </div>
      </div>
      <div ref={secondtRow} className="second-row">
        <div className="box">
          <img src="src/images/silencio.png" alt="p5" />
        </div>
        <div className="box">
          <img src="src/images/officestudio.png" alt="p6" />
        </div>
        <div className="box">
          <img src="src/images/wix.jpg" alt="p7" />
        </div>
        <div className="box">
          <img src="src/images/panda.jpg" alt="p8" />
        </div>
      </div>
      {/* <motion.div style={{ height }} className="circle-container">
        <div className="circle"></div>
      </motion.div> */}
    </section>
  );
};

export default Slides;
