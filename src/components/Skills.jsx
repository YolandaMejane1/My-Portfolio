import React from "react";
import { FaGithub, FaGit, FaNode, FaAws, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaChartBar } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";
import { useInView } from "react-intersection-observer";

function Skills({ darkMode }) {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div
      id="skills"
      className={`p-8 ${darkMode ? "bg-black text-white " : "bg-white text-black"}`}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">My Toolkit</h1>
      <div
        ref={skillsRef}
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 ${
          skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transform transition duration-700 ease-out`}
      >
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <FaGithub className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">GitHub</p>
        </div>
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <FaGit className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">Git</p>
        </div>
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <FaReact className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">React</p>
        </div>
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <FaHtml5 className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">HTML</p>
        </div>
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <FaCss3Alt className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">CSS</p>
        </div>
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <SiTailwindcss className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">Tailwind CSS</p>
        </div>
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <FaNode className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">Node.js</p>
        </div>
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <FaAws className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">AWS In-Progress</p>
        </div>
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <FaBootstrap className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">Bootstrap</p>
        </div>
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <FaChartBar className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">Chart.js</p>
        </div>
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <SiMongodb className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">MongoDB</p>
        </div>
        <div className="text-center skill-item p-3 rounded-full border-2 border-black">
          <SiJavascript className="text-3xl mb-2 mx-auto" />
          <p className="text-sm">JavaScript</p>
        </div>
      </div>
      <style jsx>{`
        .skill-item {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .skill-item p {
          transition: transform 0.3s ease;
        }
        .skill-item:hover {
          transform: scale(1.1);
        }
        .skill-item:hover p {
          transform: translateY(5px);
        }
      `}</style>
    </div>
  );
}

export default Skills;