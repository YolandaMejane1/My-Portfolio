import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ProjectPage from './components/ProjectsPage';
import Contact from './components/Contact';
import HomePage from './components/Homepage';
import AboutMe from './components/AboutMe';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);  
        }, 3000);  

        return () => clearTimeout(timer); 
    }, []);

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <HomePage darkMode={darkMode} />
                    <AboutMe darkMode={darkMode} />
                    <Skills darkMode={darkMode} />
                    <ProjectPage darkMode={darkMode} />
                    <Contact darkMode={darkMode} />
                </>
            )}
        </div>
    );
}

export default App;