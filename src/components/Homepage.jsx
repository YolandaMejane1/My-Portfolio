import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import profilePicture from "../assets/profile picture.jpeg";
import { FaDownload} from "react-icons/fa";

function HomePage({ darkMode }) {
    const { ref: imgRef, inView: imgInView } = useInView({ threshold: 0.2 });
    const { ref: textRef, inView: textInView } = useInView({ threshold: 0.2 });
    const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2 });
    const [typewriterPlayed, setTypewriterPlayed] = useState(false);

    if (headingInView && !typewriterPlayed) {
        setTypewriterPlayed(true); 
    }

    return (
        <div
            id="homepage"
            className={`flex flex-col items-center justify-center min-h-screen px-6 ${darkMode ? "bg-black text-gray-200" : "bg-gray-50 text-gray-800"} font-serif`}
        >
            <div
                ref={imgRef}
                className={`w-24 h-24 sm:w-30 sm:h-30 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg mb-6 mt-6 ${
                    imgInView ? "animate-slideUp" : "opacity-0"
                }`}
            >
                <img
                    src={profilePicture}
                    alt="Yolanda Mejane"
                    className="w-full h-full object-cover max-w-full max-h-full"
                />
            </div>

            <h1
                ref={headingRef}
                className={`text-lg sm:text-2xl md:text-2xl font-bold mt-4 md:mt-6 text-center ${
                    headingInView ? "animate-fadeUp" : "opacity-0"
                }`}
            >
                {typewriterPlayed && (
                    <Typewriter
                        words={["Hi! I'm Yolanda Mejane "]}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                )}
            </h1>

            <h1
                ref={textRef}
                className={`text-xl sm:text-lg md:text-4xl font-large mt-4 text-center ${
                    textInView ? "animate-fadeIn" : "opacity-0"
                }`}
            >
                Frontend Web Developer <br /> Based in South Africa
            </h1>

            <p
                className={`text-center text-sm sm:text-base md:text-md mt-4 max-w-md md:max-w-2xl mx-6 ${
                    textInView ? "animate-fadeUp" : "opacity-0"
                }`}
            >
                I specialize in creating modern, responsive, and user-friendly web applications. I am Passionate about coding, design, and bringing ideas to life with creativity.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mt-6">
            <button
              onClick={() => {
                 document.getElementById('contact').scrollIntoView({behavior: 'smooth'
                 });
                  }}
                 className="px-6 py-2 bg-black border border-white text-white rounded-full hover:bg-black transition w-full sm:w-auto">
                   Contact Me
                    </button>
                    <button className="flex items-center px-6 py-2 border-2 border-black text-black bg-white rounded-full hover:bg-gray-100 transition w-full sm:w-auto">
  <a
    href="/Yolanda_Mejane_Resume.pdf" 
    target="_blank" 
    className="flex items-center w-full"
  >
    My Resume 
     <FaDownload className="ml-2" /> 
  </a>
</button>
            </div>
        </div>
    );
}

export default HomePage;
