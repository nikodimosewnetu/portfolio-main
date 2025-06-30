import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { api } from '../api';

type GithubEvent = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
};

const GITHUB_USERNAME = 'nikodimosewnetu';

const GithubHistory: React.FC = () => {
  const [events, setEvents] = useState<GithubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/github?username=nikodimosewnetu').then(res => {
      console.log('Github API response:', res.data);
      setEvents(Array.isArray(res.data) ? res.data : []);
    })
    .finally(() => setLoading(false));
  }, []);

  const safeEvents = Array.isArray(events) ? events : [];

  return (
    <section id="github">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}
      >
        GitHub History
      </motion.h2>
      {loading ? (
        <div style={{ textAlign: 'center', color: '#bbb' }}>Loading...</div>
      ) : (
        <motion.ul
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ listStyle: 'none', padding: 0, maxWidth: 700, margin: '0 auto' }}
        >
          {safeEvents.map(event => (
            <li key={event.id} style={{ marginBottom: 24, borderLeft: '2px solid #222', paddingLeft: 18 }}>
              <div style={{ fontWeight: 600, color: '#fff' }}>{event.type.replace('Event', '')}</div>
              <div style={{ color: '#bbb', fontSize: '1.05rem' }}>{event.repo.name}</div>
              <div style={{ color: '#888', fontSize: '0.95rem' }}>{new Date(event.created_at).toLocaleString()}</div>
            </li>
          ))}
        </motion.ul>
      )}
    </section>
  );
};

export default GithubHistory; 