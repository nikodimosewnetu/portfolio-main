import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => (
  <section id="hero">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ textAlign: 'center', padding: '4rem 0 2rem 0' }}
    >
      <h1 style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '0.04em', marginBottom: '0.5em' }}>
        Nikodimos Ewnetu
      </h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.2em', color: '#bbb' }}>
        Software Developer
      </h2>
      <p style={{ maxWidth: 600, margin: '0 auto 2em auto', fontSize: '1.15rem', color: '#e0e0e0' }}>
        I am passionate about building modern, scalable, and beautiful web and mobile applications. I love working with the latest technologies and turning ideas into reality through code. Let's connect and create something amazing!
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <motion.a
          href="#contact"
          className="btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
        >Contact Me</motion.a>
        <motion.a
          href="/api/cv/download"
          className="btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
        >Download CV</motion.a>
      </div>
    </motion.div>
  </section>
);

export default Hero; 