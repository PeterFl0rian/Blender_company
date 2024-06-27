import { useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/Navbar.css"
import { styles } from "../styles";
import { navLinks } from "../constants";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin);

const Navbar = () => {
  //State of icons and mobile version
  const [active, setActive] = useState(false)
  const [navbarColor, setNavbarColor] = useState("bg-navbar"); // Initial color

  const HandleActive = () => {
    setActive(!active)
    console.log(active)
  }

  //Get data (check null)

  //Handle animation
  const containerVariants = {
    hidden: { maxHeight: 0 },
    visible: {
      maxHeight: 500,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      maxHeight: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut', delay: 4, },
    },
  };

  //Handle scrool
  const handleScrollTo = (id) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: `#${id}`, autoKill: true },
      ease: "power3.inOut",
    });
  };

  useGSAP (() => {
    {/*Change active text on section*/}

    {/*Change text on section*/}
    gsap.to("#navbar-text", {
      scrollTrigger: {
        trigger: "#about-us",
        scrub: true,
        start: "top center",
        end: "+=300",
      },
      color: "#fff",
    })

    {/*Change span on section*/}
    gsap.to("#navbar-span", {
      scrollTrigger: {
        trigger: "#about-us",
        scrub: true,
        start: "top center",
        end: "+=300",
      },
      background: "#fff",
    })
  })
  

  return (
    <motion.nav
      className={`${styles.paddingX} w-screen flex items-center py-5 fixed top-0 z-20 bg-navbar backdrop-blur-md xl:backdrop-blur-none bg-opacity-50 xl:bg-transparent navbar hidden`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="w-full flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
          
        {/*Logo*/}
          <div className="flex items-center gap-2">
            <a href="/">
                <img className="w-32" src="../../src/assets/Logo.png" alt="" />
            </a>
          </div>

        {/*Navlinks*/}
        <ul className="list-none hidden xl:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}
              id="navbar-text">
              <a
                className={`font-bold cursor-pointer navbar-${link.id}`}
                onClick={() => handleScrollTo(link.id)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/*Button contact us*/}
        <div className="hidden xl:flex items-center justify-center">
          <button id="contact-button" onClick={() => handleScrollTo("contact")} className="outline-none rounded-full w-40 h-12 leading-3 font-bold text-white p-5">ZAČAŤ TERAZ</button>
        </div>

        {/*For mobile*/}
        <div className="xl:hidden">
          <label htmlFor="check">
            <input onClick={HandleActive}  type="checkbox" id="check" className=""/>
            <span id="navbar-span"></span>
            <span id="navbar-span"></span>
            <span id="navbar-span"></span>
          </label>
        </div>

        <motion.div
           initial="hidden"
           animate={active ? "visible" : "exit"}
           variants={containerVariants}
           className="flex basis-full flex-col items-center overflow-hidden"
        >
          <ul className="list-none flex-col gap-5 flex items-center">
            {navLinks.map((link) => (
              <motion.li 
                key={link.id}
                variants={itemVariants}
              >
                <a 
                  id="navbar-text"
                  className="text-dark font-bold cursor-pointer"
                  onClick={() => handleScrollTo(link.id)}
                >
                  {link.title}
                </a>
              </motion.li>
            ))}
            <motion.button
              id="contact-button"
              className="outline-none rounded-full w-40 h-12 leading-3 font-bold text-white p-5"
              variants={itemVariants}
              onClick={() => handleScrollTo("contact")}
            >
              ZAČAŤ TERAZ 
            </motion.button>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  )
};

export default Navbar;