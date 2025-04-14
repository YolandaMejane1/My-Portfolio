import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import weatherAppImage from "../assets/Weather App.png";
import ticTacToeImage from "../assets/Tic Tac Toe.png";
import ecommerceImage from "../assets/E-commerce Store.png";
import dashboardImage from "../assets/E-commerce Dashboard.png";
import KodemorImage from "../assets/Kodemor.png";
import FitnessTrackerImage from "../assets/FitnessTracker.png";

function Projects({ darkMode }) {
    const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.2 });

    const projects = [
        { title: "My Weather App", description: "A modern weather app.", image: weatherAppImage, demoLink: "https://yolandamejane1.github.io/My-Weather-App/", codeLink: "https://github.com/YolandaMejane1/My-Weather-App" },
        { title: "Tic Tac Toe", description: "A react tic tac toe game", image: ticTacToeImage, demoLink: "https://yolandamejane1.github.io/TicTacToeGame/", codeLink: "https://github.com/YolandaMejane1/TicTacToeGame" },
        { title: "E-commerce Store", description: "An E-commerce platform.", image: ecommerceImage, demoLink: "https://ecommerce-website-drab-rho.vercel.app/", codeLink: "https://github.com/YolandaMejane1/ecommerce-website" },
        { title: "Dashboard page", description: "E-commerce Dashboard page group project. Login: user@example.com and password123", image: dashboardImage, demoLink: "https://e-commerce-dashboard-s4rr.onrender.com/", codeLink: "https://github.com/UnathiPakade/E-Commerce-Dashboard" },
        { title: "Kodemor Blog website", description: "A blog website where users can post blogs", image: KodemorImage, demoLink: "https://blog-website-qiol-audq8ue15-yolandamejane1s-projects.vercel.app/", codeLink: "https://github.com/YolandaMejane1/Blog-Website" },
        { title: "Fitness Tracker", description: "A Fitness app where users can login and update their workout stats", image: FitnessTrackerImage, demoLink: "https://fitness-tracker-app-1-6eco.onrender.com", codeLink: "https://github.com/YolandaMejane1/Fitness-Tracker-App" }
    ];

    return (
        <div id="projects" className={`p-8 ${darkMode ? "bg-black text-white" : "bg-white text-black"} font-serif`}>
            <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
            <div
                ref={projectsRef}
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-transform duration-700 ease-out`}
            >
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col items-center space-y-3">
                        <div className="relative w-54 h-48 rounded-lg overflow-hidden shadow-lg border-1 border-black">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center space-x-4 opacity-0 hover:opacity-100 transition-opacity">
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white text-black flex justify-center items-center rounded-full shadow-md hover:bg-gray-200">
                                    <FaExternalLinkAlt />
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white text-black flex justify-center items-center rounded-full shadow-md hover:bg-gray-200">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                        <h2 className="text-base font-semibold text-center">{project.title}</h2>
                        <p className="text-sm text-center max-w-xs">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;