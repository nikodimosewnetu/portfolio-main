import React from 'react';
import { motion } from 'framer-motion';

const CVManager: React.FC = () => {
  return (
    <section id="cv">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}
      >
        Download My CV
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}
      >
        <a href="/api/cv/download" className="btn" target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
        <div style={{ color: '#b5b5c3', fontSize: '1rem', marginTop: 10 }}>
          My CV is available for download only. Portfolio content is managed by the site owner.
        </div>
      </motion.div>
    </section>
  );
};

export default CVManager; 
 