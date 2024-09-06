import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaLaptopCode,FaGraduationCap  } from "react-icons/fa";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (optional)
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <section
      //py-20 text-white bg-gradient-to-r from-blue-700 to-purple-700
      className="py-20 text-white bg-gradient-to-r from-blue-700 to-purple-700"
      id="about"
    >
      <div className="container flex flex-col items-center justify-center h-full px-8 mx-auto md:px-16 lg:px-24">
        <h2
          className="mb-12 text-4xl font-extrabold tracking-tight text-center shadow-lg font-ex-trabold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          About Me
        </h2>
        <div className="flex flex-col items-center md:items-center">
          <div className="w-full md:w-2/3">
            <p
              className="mb-8 text-xl font-medium text-center text-white lg:mb-16 sm:text-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I am a passionate Web & App Developer with a strong focus on
              building modern, responsive web and app applications. With a solid
              foundation in both front-end and back-end technologies, I strive
              to create seamless and efficient user experiences.
            </p>
            <div className="space-y-8">
              <h2
                className="text-4xl font-bold shadow-md"
                data-aos="fade-up"
                data-aos-delay="400"
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
                className="text-4xl font-extrabold shadow-md"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Education
              </h1>
              <div
                className="p-8 mt-8 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-blue-600"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-2xl">
                    {/* Add an icon for education */}
                    <FaGraduationCap />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold">
                      S.E. in Software Engineering
                    </h3>
                    <p className="mt-2 text-lg font-medium text-white">
                      <span className="block">
                        Beltei International University, currently three years
                      </span>
                      <span className="block mt-4">
                        <strong>Relevant Coursework:</strong> Web Development,
                        Data Structures, Database Management
                      </span>
                      <span className="block mt-2">
                        <strong>Achievements:</strong> Dean's List, Assignment
                        Project
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <h1
                className="mt-12 text-4xl font-extrabold shadow-md"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Experience
              </h1>
              <div
                className="p-8 mt-8 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-blue-600"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-2xl">
                    {/* You can use icons from any library like FontAwesome */}
                    <FaLaptopCode />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold">
                      Software Developer Intern
                    </h3>
                    <p className="mt-2 text-lg font-medium text-white">
                    <span className="block">
                        Three month - 2024
                      </span>
                      <span className="block">
                        Researched documents for analytics database.
                      </span>
                      <span className="block mt-2">
                        Developed a mobile project using Flutter.
                      </span>
                      <span className="block mt-2">
                        Utilized Firebase for data storage and user
                        authentication.
                      </span>
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
  return (
    <div className="flex items-center" data-aos="fade-left">
      <span className="w-3/12 text-left">{skill}</span>
      <div className="relative w-9/12 h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-md">
        <div
          className="absolute top-0 left-0 h-full transition-transform duration-300 transform rounded-full bg-gradient-to-r from-pink-400 to-blue-500 hover:scale-105"
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
}

export default About;
