import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; 
import { Link } from 'react-scroll';

function Navbar({ toggleDarkMode, darkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setIsVisible(false);  
        } else {
            setIsVisible(true);  
        }
        setLastScrollY(window.scrollY);
        setIsScrolling(true);  
    };

    const stopScroll = () => {
        if (isScrolling) {
            setIsScrolling(false);
            setIsVisible(true);  
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        
        const timeout = setTimeout(stopScroll, 100);  
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);  
        };
    }, [lastScrollY, isScrolling]);

    return (
        <nav className={`fixed top-0 left-0 right-0 p-4 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-transform duration-300 ${isVisible ? 'transform-none' : '-translate-y-full'} z-50`}>
            <div className="flex justify-between items-center">
                <div className={`font-serif text-4xl ${darkMode ? 'text-white' : 'text-black'} md:text-3xl pl-6`}>
                    <span className="font-bold">Yolanda</span>
                    <span className={`text-purple-600 ${darkMode ? 'text-purple-400' : 'text-purple-600'} text-5xl`}>.</span>
                </div>
                <div className="hidden md:flex justify-center flex-grow text-lg space-x-7 mx-6">
                    <Link to="homepage" smooth={true} duration={600} className="font-thin text-decoration-none font-serif" onClick={handleLinkClick}>Home</Link>
                    <Link to="aboutme" smooth={true} duration={600} className="font-thin text-decoration-none font-serif" onClick={handleLinkClick}>About Me</Link>
                    <Link to="skills" smooth={true} duration={600} className="font-thin text-decoration-none  font-serif" onClick={handleLinkClick}>Skills</Link>
                    <Link to="projects" smooth={true} duration={600} className="font-thin text-decoration-none font-serif" onClick={handleLinkClick}>Projects</Link>
                    <Link to="contact" smooth={true} duration={600} className="font-thin text-decoration-none font-serif" onClick={handleLinkClick}>Contact</Link>
                </div>
                <div className="hidden md:flex items-center space-x-4 pr-6">
                    <button onClick={toggleDarkMode} className="p-2">
                        {darkMode ? <FaSun /> : <FaMoon />} 
                    </button>
                    <button className="p-2 border rounded-3xl">
                        Contact Me
                    </button>
                </div>
                <div className="flex items-center space-x-4 md:hidden">
                    <button onClick={toggleMenu} className="p-2">
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center space-y-4">
                    <Link to="homepage" smooth={true} duration={500} className="font-thin font-serif text-xl text-white" onClick={handleLinkClick}>Home</Link>
                    <Link to="aboutme" smooth={true} duration={500} className="font-thin font-serif text-xl text-white" onClick={handleLinkClick}>About Me</Link>
                    <Link to="skills" smooth={true} duration={500} className="font-thin font-serif text-xl text-white" onClick={handleLinkClick}>Skills</Link>
                    <Link to="projects" smooth={true} duration={500} className="font-thin font-serif text-xl text-white" onClick={handleLinkClick}>Projects</Link>
                    <Link to="contact" smooth={true} duration={500} className="font-thin font-serif text-xl text-white" onClick={handleLinkClick}>Contact</Link>
                    <div className="flex justify-between w-full px-4 mt-4">
                        <button onClick={toggleDarkMode} className="p-2 border rounded-full text-white w-full md:w-auto">
                            {darkMode ? <FaSun /> : <FaMoon />} 
                        </button>
                        <button className="p-2 border rounded-3xl text-white w-full md:w-auto">
                            Contact Me
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;