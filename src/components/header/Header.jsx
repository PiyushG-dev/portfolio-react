import React from "react";
import "./Header.css";
import DarkOverlay from "../../styles/darkoverlay/DarkOverlay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { menuSlide, slide, scale } from "../../utils/anim";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const btn = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);

    gsap.to(btn.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(btn.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(btn.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },

    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <section className="h-wrapper">
      <DarkOverlay isActive={isActive} />
      <div className="navigation">
        <div className="logo">© Code by me</div>
        <div className="menu">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div
          ref={btn}
          onClick={toggleMenu}
          style={{ backgroundColor: isActive ? "#455CE9" : "" }}
          className="button"
        >
          <div className={`burger ${isActive ? `burgerActive` : ``}`}></div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="mobile-navigation"
          >
            <div className="nav-container">
              <div className="nav-heading">navigation</div>
              <div className="mobile-menu">
                <motion.a
                  variants={slide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  href="#"
                >
                  Home
                </motion.a>
                <motion.a
                  variants={slide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  href="#"
                >
                  Work
                </motion.a>
                <motion.a
                  variants={slide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  href="#"
                >
                  About
                </motion.a>
                <motion.a
                  variants={slide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  href="#"
                >
                  Contact
                </motion.a>
              </div>
              <div className="socials-container">
                <div className="socials-heading">socials</div>
                <div className="socials">
                  <a href="#">Awwwards</a>
                  <a href="#">Instagram</a>
                  <a href="#">Twitter</a>
                  <a href="#">Linkedln</a>
                </div>
              </div>
            </div>
            <svg className="svgCurve">
              <motion.path
                variants={curve}
                initial="initial"
                animate="enter"
                exit="exit"
              ></motion.path>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="slider-container">
        <div ref={slider} className="slider">
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
