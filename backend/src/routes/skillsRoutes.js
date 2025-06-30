const express = require('express');
const router = express.Router();

// Example static skills
const skills = [
  { name: 'JavaScript', icon: 'js' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'node' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Express', icon: 'express' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'Framer (No-Code)', icon: 'framer' },
  {
    name: "NestJS",
    icon: "nestjs"
  },
  {
    name: "Flask",
    icon: "flask"
  },
  {
    name: "Machine Learning",
    icon: "ml"
  },
];

router.get('/', (req, res) => {
  res.json(skills);
});

module.exports = router; 