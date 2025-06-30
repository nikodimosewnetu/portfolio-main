require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors({
  origin: 'https://portfolio-main-six-ochre.vercel.app', // <-- Add your deployed frontend URL here
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded CVs statically
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// Centralized API routes
app.use('/api/cv', require('./routes/cvRoutes'));
app.use('/api/skills', require('./routes/skillsRoutes'));
app.use('/api/projects', require('./routes/projectsRoutes'));
app.use('/api/github', require('./routes/githubRoutes'));
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Catch-all: send back React's index.html for any non-API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

// Start server
const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 