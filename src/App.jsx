import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
