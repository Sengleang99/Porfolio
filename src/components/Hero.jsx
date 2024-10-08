import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Profile from "../assets/photo_2024-09-03_23-25-36.jpg";

function Hero() {
  const { ref: imgRef, inView: isImgInView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const { ref: titleRef, inView: isTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const { ref: spanRef, inView: isSpanInView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const { ref: paraRef, inView: isParaInView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const { ref: btn1Ref, inView: isBtn1InView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const { ref: btn2Ref, inView: isBtn2InView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <div className="container px-4 py-12 mx-auto text-center md:px-8 lg:px-16">
      <motion.img 
        src={Profile} 
        alt="Profile Picture" 
        className="object-cover w-48 h-48 mx-auto mb-8 border-4 border-white rounded-full shadow-lg"
        ref={imgRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isImgInView ? 1 : 0, scale: isImgInView ? 1 : 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.h1
        className="mb-3 text-5xl font-extrabold text-center"
        ref={titleRef}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: isTitleInView ? 0 : -50, opacity: isTitleInView ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Hello! {""}
        <span className="mb-3 text-5xl font-extrabold text-center">I'm Sengleang</span>
      </motion.h1>
      <motion.span
        className="mb-3 text-5xl font-extrabold text-center text-blue-800"
        ref={spanRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isSpanInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        Web & App Developer
      </motion.span>
      <motion.p
        className="max-w-xl px-4 mx-auto mt-6 mb-8 font-light text-center text-gray-400 lg:mb-10 sm:text-xl"
        ref={paraRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isParaInView ? 1 : 0, y: isParaInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        I specialize in building modern and responsive web applications that bring ideas to life.
      </motion.p>
      <div className="space-x-4">
        <motion.button
          className="px-6 py-3 text-blue-600 border border-blue-600 bg-white transition-transform duration-300 transform rounded-full shadow-lg hover:bg-blue-600 hover:text-white hover:scale-105"
          ref={btn1Ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isBtn1InView ? 1 : 0, scale: isBtn1InView ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          Contact Me
        </motion.button>
        <motion.button
          className="px-6 py-3 text-pink-600 border border-pink-600 bg-white transition-transform duration-300 transform rounded-full shadow-lg hover:bg-pink-600 hover:text-white hover:scale-105"
          ref={btn2Ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isBtn2InView ? 1 : 0, scale: isBtn2InView ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </motion.button>
      </div>
    </div>
  );
}

export default Hero;
