import React from "react";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";

function About() {
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
        <h2
          className={`mb-12 text-4xl font-extrabold tracking-tight text-center ${
            isTitleInView ? "opacity-100" : "opacity-0"
          }`}
          ref={titleRef}
          style={{ transition: "opacity 0.5s ease-out" }}
        >
          About Me
        </h2>
        <div className="flex flex-col items-center md:items-center">
          <div className="w-full md:w-2/3">
            <p
              className={`mb-8 text-xl font-medium text-center text-white lg:mb-16 sm:text-2xl ${
                isParagraphInView ? "opacity-100" : "opacity-0"
              } ${isParagraphInView ? "translate-y-0" : "translate-y-5"}`}
              ref={paragraphRef}
              style={{
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              }}
            >
              I am a passionate Web & App Developer with a strong focus on
              building modern, responsive web and app applications. With a solid
              foundation in both front-end and back-end technologies, I strive
              to create seamless and efficient user experiences.
            </p>
            <div className="space-y-8">
              <h2
                className={`text-4xl font-bold shadow-md ${
                  isSkillsInView ? "opacity-100" : "opacity-0"
                } ${isSkillsInView ? "translate-y-0" : "translate-y-5"}`}
                ref={skillsRef}
                style={{
                  transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                }}
              >
                Skills
              </h2>
              <SkillProgress skill="React Js" level="70%" />
              <SkillProgress skill="PHP & Laravel" level="75%" />
              <SkillProgress skill="SQL & Mysql" level="70%" />
              <SkillProgress skill="Flutter" level="55%" />
              <SkillProgress skill="Firebase" level="55%" />
              <SkillProgress skill="Figma" level="65%" />
              {/* Add more skills as needed */}
            </div>
            <div className="mt-12">
              {/* Education Section */}
              <h1
                className="text-2xl font-extrabold shadow-md sm:text-3xl md:text-4xl"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Education
              </h1>
              <div
                className="p-4 mt-6 rounded-lg shadow-lg sm:p-6 md:p-8 md:mt-8 bg-gradient-to-r from-purple-600 to-blue-600"
                data-aos="fade-up"
              >
                <div
                  className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
                  data-aos="fade-up"
                >
                  <div className="text-2xl">
                    <FaGraduationCap />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold sm:text-xl md:text-2xl">
                      S.E. in Software Engineering
                    </h3>
                    <p className="mt-2 text-base font-medium text-white sm:text-lg">
                      <span className="block">
                        Beltei International University, currently in progress
                      </span>
                      <span className="block mt-4">Web Development</span>
                      <span className="block mt-4">Data Structures</span>
                      <span className="block mt-4">Database Management</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <h1
                className="mt-12 text-2xl font-extrabold shadow-md sm:text-3xl md:text-4xl"
                data-aos="fade-up"
              >
                Experience
              </h1>
              <div
                className="p-4 mt-6 rounded-lg shadow-lg sm:p-6 md:p-8 md:mt-8 bg-gradient-to-r from-purple-600 to-blue-600"
                data-aos="fade-up"
              >
                <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                  <div className="text-2xl">
                    <FaLaptopCode />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold sm:text-xl md:text-2xl">
                      P-Hearth Project (Volunteer 3 months)
                    </h3>
                    <p className="mt-2 text-base font-medium text-white sm:text-lg">
                      <span className="block mt-4">
                        I work as software developer
                      </span>
                      <span className="block mt-4">
                        Create mobile app using flutter and firebase
                      </span>
                      <span className="block mt-4">
                        Create prototype using figma
                      </span>
                      <span className="block mt-4">Analytics database</span>
                    </p>
                  </div>
                </div>
              </div>
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
    <div
      className="flex items-center"
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <span className="w-3/12 text-left">{skill}</span>
      <div className="relative w-9/12 h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-md">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-blue-500 hover:scale-105"
          style={{ width: level, transition: "width 0.5s ease-out" }}
        ></div>
      </div>
    </div>
  );
}

export default About;
