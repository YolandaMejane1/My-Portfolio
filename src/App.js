import React from 'react';
import { MotionConfig } from 'framer-motion';
import useTheme from './hooks/useTheme';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ProjectsPage from './components/ProjectsPage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    // reducedMotion="user": animations switch off for visitors who ask for less motion
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Homepage />
          <AboutMe />
          <Experience />
          <Skills />
          <ProjectsPage />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
