import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiFlutter, SiFramer, SiNestjs, SiFlask, SiTensorflow } from 'react-icons/si';
import { api } from '../api';

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  js: FaJs,
  react: FaReact,
  node: FaNodeJs,
  mongodb: FaDatabase,
  express: FaNodeJs,
  html5: FaHtml5,
  css3: FaCss3Alt,
  git: FaGitAlt,
  github: FaGithub,
  flutter: SiFlutter,
  framer: SiFramer,
  'framer (no-code)': SiFramer,
  'framer (No-Code)': SiFramer,
  nestjs: SiNestjs,
  NestJS: SiNestjs,
  flask: SiFlask,
  Flask: SiFlask,
  ml: SiTensorflow,
  'machine learning': SiTensorflow,
  'Machine Learning': SiTensorflow,
};

type Skill = { name: string; icon: string };

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    api.get('/api/skills').then(res => {
      console.log('Skills API response:', res.data);
      setSkills(Array.isArray(res.data) ? res.data : []);
    });
  }, []);

  const safeSkills = Array.isArray(skills) ? skills : [];

  return (
    <section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}
      >
        Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}
      >
        {safeSkills.map(skill => {
          const Icon = iconMap[skill.icon.toLowerCase()] || iconMap[skill.icon] || FaJs;
          return (
            <div key={skill.name} style={{ textAlign: 'center' }}>
              <Icon size={48} style={{ marginBottom: 8 }} />
              <div style={{ fontWeight: 600 }}>{skill.name}</div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills; 