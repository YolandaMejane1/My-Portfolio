import React from "react";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa"; 
import { useInView } from "react-intersection-observer";
import ProfileImage from "../assets/ProfileImage.png";

function AboutMe({ darkMode }) {
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.2,
  });
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2,
  });
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.2,
  });

  return (
    <div
      id="aboutme"
      className={`flex flex-col md:flex-row items-center justify-center p-6 gap-8 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        ref={imgRef}
        className="flex justify-center items-center"
        style={{
          backgroundColor: "#FCE1E1",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
        }}
      >
        <img
          src={ProfileImage}
          alt="Your Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
        <h6
          ref={headingRef}
          className={`text-md font-sm mb-4 transform transition duration-700 font-serif ${
            headingInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          Introduction
        </h6>
        <h1
          className={`text-3xl font-bold mb-4 transform transition duration-700 font-serif ${
            headingInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          About Me
        </h1>
        <p
          ref={textRef}
          className={`text-lg mb-6 transform transition duration-700 font-serif ${
            textInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          I’m a passionate junior developer, constantly exploring new
          technologies and building innovative solutions. I have had the
          privilege of being surrounded by dedicated mentors and attending a
          top-performing coding bootcamp, which has contributed to my growth
          and learning.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            className={`p-4 rounded-lg shadow-md text-center transform transition duration-700 ${
              textInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            } ${
              darkMode ? "bg-black text-gray-300 border border-white" : "bg-white text-black"
            }`}
          >
            <FaCode className="text-3xl mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p>HTML, CSS, JavaScript, React and Node.js</p>
          </div>
          <div
            className={`p-4 rounded-lg shadow-md text-center transform transition duration-700 ${
              textInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            } ${
              darkMode ? "bg-black text-gray-300 border border-white" : "bg-white text-black"
            }`}
          >
            <FaGraduationCap className="text-3xl mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>Bootcamp in Software Development, AWS cloud certification, IT degree in progress</p>
          </div>
          <div
            className={`p-4 rounded-lg shadow-md text-center transform transition duration-700 ${
              textInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            } ${
              darkMode ? "bg-black text-gray-300 border border-white" : "bg-white text-black"
            }`}
          >
            <FaBriefcase className="text-3xl mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p>Built more than 10 projects. Uses MERN stack and can implement JWT Authentication</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;