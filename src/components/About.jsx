import React from "react";

function About() {
  return (
    <section className="py-20 text-white bg-blue-700" id="about">
      <div className="container flex flex-col items-center justify-center h-full px-8 mx-auto md:px-16 lg:px-24">
        <h2 className="mb-12 text-4xl font-bold text-center">About Me</h2>
        <div className="flex flex-col items-center md:items-center">
          {/* Text and Skills Section */}
          <div className="w-full md:w-2/3">
            <p className="mb-8 text-lg text-center md:text-center">
              I am a passionate Web & App Developer with a strong focus on
              building modern, responsive web and app applications. With a solid
              foundation in both front-end and back-end technologies, I strive
              to create seamless and efficient user experiences.
            </p>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Skills</h2>
              <SkillProgress skill="React Js" level="75%" />
              <SkillProgress skill="PHP & Laravel" level="75%" />
              <SkillProgress skill="SQL & Mysql" level="75%" />
              <SkillProgress skill="Flutter" level="60%" />
              <SkillProgress skill="Figma" level="75%" />
              {/* Add more skills as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillProgress({ skill, level }) {
  return (
    <div className="flex items-center">
      <span className="w-3/12 text-left">{skill}</span>
      <div className="relative w-9/12 h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full transition-transform duration-300 transform rounded-full bg-gradient-to-r from-pink-400 to-blue-500 hover:scale-105"
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
}

export default About;
