import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import CareerGoals from './components/CareerGoals';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update page title
    document.title = 'Naveen Kethavath - Portfolio';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="education">
          <Education />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="career-goals">
          <CareerGoals />
        </div>
        
        <div id="internships">
          <Internships />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="achievements">
          <Achievements />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;