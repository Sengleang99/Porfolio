import { useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function About() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (optional)
      once: false, // Whether animation should happen only once
    });
  }, []);
  
  const { ref: titleRef, inView: isTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: paragraphRef, inView: isParagraphInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: skillsRef, inView: isSkillsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      className="py-20 text-white bg-gradient-to-r from-blue-700 to-purple-700"
      id="about"
    >
      <div className="container flex flex-col items-center justify-center h-full px-8 mx-auto md:px-16 lg:px-24">
        <motion.h2
          className="mb-12 text-5xl font-extrabold tracking-tight text-center shadow-lg"
          ref={titleRef}
          initial={{ opacity: 1 }} // Start as visible
          animate={{
            opacity: isTitleInView ? 1 : 1, // Keep it always visible
            y: isTitleInView ? 0 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col items-center md:items-center">
          <div className="w-full md:w-2/3">
            <motion.p
              className="mb-8 text-xl font-medium text-center text-white lg:mb-16 sm:text-2xl"
              ref={paragraphRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isParagraphInView ? 1 : 0,
                y: isParagraphInView ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              I am a passionate Web & App Developer with a strong focus on
              building modern, responsive web and app applications. With a solid
              foundation in both front-end and back-end technologies, I strive
              to create seamless and efficient user experiences.
            </motion.p>
            <div className="space-y-8">
              <motion.h2
                className="text-4xl font-bold shadow-md"
                ref={skillsRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isSkillsInView ? 1 : 0,
                  y: isSkillsInView ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                Skills
              </motion.h2>
              <SkillProgress skill="React Js" level="75%" />
              <SkillProgress skill="PHP & Laravel" level="75%" />
              <SkillProgress skill="SQL & Mysql" level="75%" />
              <SkillProgress skill="Flutter" level="60%" />
              <SkillProgress skill="Figma" level="75%" />
              {/* Add more skills as needed */}
            </div>
            <div className="mt-12">
              <motion.h1
                className="text-4xl font-extrabold shadow-md"
                ref={skillsRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isSkillsInView ? 1 : 0,
                  y: isSkillsInView ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                Education
              </motion.h1>
              <motion.p
                className="mt-4 text-xl font-medium text-white sm:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                B.S. in Software Engineering, Beltei International University, 2024
                <br />
                Relevant Coursework: Web Development, Data Structures, Database
                Management
                <br />
                Achievements: Dean's List, Assignment Project
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillProgress({ skill, level }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="flex items-center"
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="w-3/12 text-left">{skill}</span>
      <div className="relative w-9/12 h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-md">
        <motion.div
          className="absolute top-0 left-0 h-full transition-transform duration-300 transform rounded-full bg-gradient-to-r from-pink-400 to-blue-500 hover:scale-105"
          style={{ width: level }}
          initial={{ width: 0 }}
          animate={{ width: inView ? level : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default About;
