import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { gsap } from "gsap";
import { HeaderObjects } from "./canvas";
import "./styles/Header.css"

const Header = () => {
  {/*Animating Background*/}
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothMouse = {
    x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
    y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
  }

  const manageMouse = e => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth
    const y = clientY / innerHeight
    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouse)
    return () => window.removeEventListener("mousemove", manageMouse)
  }, [])

  useEffect(() => {
    gsap.fromTo("#headerAnimatedBg", 
      {
        opacity: 0,
      },
      { 
        delay: 3.5,
        opacity: 1
      }
    )
  })
  

  {/*Animating text*/}
  const headerAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 5.5,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const paragraphAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 7,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div id="header-div" className=" h-screen flex justify-center items-center">
      <div id="header-bg" className="h-screen flex justify-center items-center absolute z-10 w-full">
        <div className="z-2 p-3">
          <motion.h1
          className="family-montserrat text-dark md:text-8xl sm:text-4xl text-5xl text-center font-bold"
          initial="hidden"
          animate="visible"
          variants={headerAnimation}
          >
            TVORIME <span className="text-secondary">VAŠU FANTÁZIU</span> <br/> PRE VÁŠ BIZNIS
          </motion.h1>
          <motion.p
            className="text-dark md:text-2xl sm:text-xl text-md text-center font-medium"
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
          >
            Dajte nám vašu predstavu a my jej dáme tu správnu cestu
          </motion.p>

          <div className="absolute">

          </div>
        </div>
       
      </div>
      <Canvas className="border-black" id="headerAnimatedBg" style={{background: "#e0e0e2"}} orthographic camera={{position: [0, 0, 200], zoom: 10}}>
        <HeaderObjects mouse={smoothMouse}/>
        <Environment preset="studio"/>
      </Canvas>
    </div>
  );
}

export default Header;