import { gsap } from 'gsap/gsap-core';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./styles/AboutUs.css"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const AboutUs = () => {

  {/*HandleScrool*/}
  useGSAP (() => {
    gsap.to("#about-us-h2", {
      scrollTrigger: "#about-us-h2",
      opacity: 1,
      x: 0,
      duration: 2,
    });

    gsap.to("#about-us-text", {
      scrollTrigger: "#about-us-text",
      delay: 1,
      opacity: 1,
      x: 0,
      duration: 2,
    });
  })

  return (
    <section id='about-us' className="bg-dark">
      <div className="text-white md:h-screen flex justify-center items-center flex-col px-5 py-28 md:p-0">
        <div className='w-2/3'>
          <h2 id='about-us-h2' className='text-tertiary md:text-3xl text-xl text-tertiary py-8 tracking-customtight'>O NÁS</h2>
          <p id='about-us-text' className='md:text-8xl text-2xl'>Vitajte vo <span className='text-secondary'>V-NNN</span> tam, kde sa fantázia mení na realitu! Sme skupinka technických kuzelnikov, ktorí menia sny na realitu.  </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs