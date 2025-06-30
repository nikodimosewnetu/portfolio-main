import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'CV', href: '#cv' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => (
  <motion.nav
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, type: 'spring' }}
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(17,17,17,0.98)',
      borderBottom: '1.5px solid #222',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.7rem 2.5rem',
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
    }}
  >
    <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '0.04em' }}>
      MyPortfolio
    </span>
    <div style={{ display: 'flex', gap: '2rem' }}>
      {navLinks.map(link => (
        <a key={link.href} href={link.href} style={{ fontWeight: 500, fontSize: '1.1rem' }}>
          {link.label}
        </a>
      ))}
    </div>
  </motion.nav>
);

export default Navbar; 