import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { api } from '../api';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    try {
      await api.post('/api/contact', { name, email, message });
      setSent(true);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}
      >
        Contact
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        style={{ maxWidth: 420, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
      >
        <input name="name" type="text" placeholder="Name" required style={{ padding: '0.7em', borderRadius: 8, border: '1.5px solid #222', background: '#181818', color: '#fff', fontSize: '1rem' }} />
        <input name="email" type="email" placeholder="Email" required style={{ padding: '0.7em', borderRadius: 8, border: '1.5px solid #222', background: '#181818', color: '#fff', fontSize: '1rem' }} />
        <textarea name="message" placeholder="Message" required rows={5} style={{ padding: '0.7em', borderRadius: 8, border: '1.5px solid #222', background: '#181818', color: '#fff', fontSize: '1rem', resize: 'vertical' }} />
        <button className="btn" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {sent && <div style={{ color: '#fff', textAlign: 'center', marginTop: 10 }}>Thank you! Your message has been sent.</div>}
        {error && <div style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{error}</div>}
      </motion.form>
    </section>
  );
};

export default Contact; 