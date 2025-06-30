import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CVManager from './components/CVManager';
import GithubHistory from './components/GithubHistory';
import Contact from './components/Contact';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Skills />
          <Projects />
          <CVManager />
          <GithubHistory />
          <Contact />
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default App;
