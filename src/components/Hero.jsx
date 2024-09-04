import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Profile from "../assets/photo_2024-09-03_23-25-36.jpg";

function Hero() {
  const { ref: imgRef, inView: isImgInView } = useInView({
    triggerOnce: false, // Allow animation to trigger every time the element comes into view
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
    <div className="py-8 mb-10 text-center text-black bg-slate-50">
      <motion.img 
        src={Profile} 
        alt="Profile Picture" 
        className="object-cover w-48 h-48 mx-auto mb-8 rounded-full mt-14"
        ref={imgRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isImgInView ? 1 : 0, scale: isImgInView ? 1 : 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.h1
        className="mb-3 text-4xl"
        ref={titleRef}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: isTitleInView ? 0 : -50, opacity: isTitleInView ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        I'm Sengleang 
      </motion.h1>
      <motion.span
        className="text-4xl font-extrabold text-transparent bg-blue-700 bg-clip-text"
        ref={spanRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isSpanInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        Web & App Developer
      </motion.span>
      <motion.p
        className="px-4 mt-4 text-lg text-gray-700"
        ref={paraRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isParaInView ? 1 : 0, y: isParaInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        I specialize in building modern and responsive web applications.
      </motion.p>
      <div className="mt-8 space-x-4">
        <motion.button
          className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-t from-green-400 to-blue-500 md:inline hover:scale-105"
          ref={btn1Ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isBtn1InView ? 1 : 0, scale: isBtn1InView ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          Contact with me
        </motion.button>
        <motion.button
          className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-t from-pink-400 to-blue-500 md:inline hover:scale-105"
          ref={btn2Ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isBtn2InView ? 1 : 0, scale: isBtn2InView ? 1 : 0.8 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          Resume
        </motion.button>
      </div>
    </div>
  );
}

export default Hero;
