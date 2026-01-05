import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import OurClients from "./components/OurClients";
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-matte text-slate-300 selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <OurClients />
      <Projects />
      <Leadership />
      <Contact />
    </div>
  );
};


export default App;
