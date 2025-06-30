import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { api } from '../api';

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get('/api/projects').then(res => {
      console.log('Projects API response:', res.data);
      setProjects(Array.isArray(res.data) ? res.data : []);
    });
  }, []);

  const safeProjects = Array.isArray(projects) ? projects : [];

  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}
      >
        Projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}
      >
        {safeProjects.map(project => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.04, boxShadow: '0 4px 32px #0004' }}
            style={{
              background: '#181818',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow)',
              width: 320,
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              border: '1.5px solid #222',
              minHeight: 420
            }}
          >
            <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: 10, marginBottom: 18 }} />
            <h3 style={{ fontWeight: 700, fontSize: '1.2rem', margin: '0.5em 0' }}>{project.title}</h3>
            <p style={{ color: '#ccc', fontSize: '1rem', marginBottom: 18 }}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
              View on GitHub
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects; 