const express = require('express');
const axios = require('axios');
const router = express.Router();

const GITHUB_USERNAME = 'nikodimosewnetu';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=50&sort=updated`);
    // Remove duplicates by name and filter out 'kifya' and 'config'
    const seen = new Set();
    let projects = response.data.filter(repo => {
      if (repo.name.toLowerCase().includes('kifya')) return false;
      if (repo.name.toLowerCase() === 'config') return false;
      if (repo.name.toLowerCase() === 'nikodimosewnetu') return false;
      if (seen.has(repo.name)) return false;
      seen.add(repo.name);
      return true;
    });
    // Find 'chat-app-MERN', 'LMS', and 'Truck-Route-backend' and pin them at the top if they exist
    const chatApp = response.data.find(repo => repo.name === 'chat-app-MERN');
    const lmsRepo = response.data.find(repo => repo.name === 'LMS');
    const truckRoute = response.data.find(repo => repo.name === 'Truck-Route-backend');
    const pinned = [];
    if (chatApp) pinned.push({
      ...chatApp,
      description: 'A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js). Features user authentication, group and private messaging, and a modern responsive UI. Built for seamless communication and collaboration.'
    });
    if (lmsRepo && (!chatApp || lmsRepo.name !== chatApp.name)) pinned.push({
      ...lmsRepo,
      description: 'A full-featured Learning Management System (LMS) built with the MERN stack. Supports course creation, user enrollment, progress tracking, quizzes, and admin dashboards. Designed for educators and learners to manage and participate in online courses efficiently.'
    });
    if (truckRoute && !pinned.some(pin => pin.name === truckRoute.name)) pinned.push({
      ...truckRoute,
      description: truckRoute.description || 'A backend for a truck route planner application, helping logistics companies optimize delivery routes and fleet management.'
    });
    // Remove pinned from the rest
    projects = projects.filter(p => !pinned.some(pin => pin.name === p.name));
    // Combine pinned and the rest, limit to 8
    projects = [...pinned, ...projects].slice(0, 8).map(repo => ({
      title: repo.name,
      description: repo.description || 'No description provided.',
      link: repo.html_url,
      image: repo.owner.avatar_url
    }));
    // Custom descriptions for specific repos
    const customDescriptions = {
      'Hospital-Management-System-MERN-main': "A comprehensive hospital management system built with the MERN stack. Features modules for patient registration, appointment scheduling, doctor management, billing, and real-time updates to streamline hospital operations and improve patient care.",
      'Kifiya-Ai-masteri-week2': "A project focused on practical AI and machine learning solutions, developed as part of the Kifiya AI Mastery program (Week 2). Includes hands-on exercises and implementations of core ML concepts for real-world business applications.",
      'Assitive-mobile-app-ml-integrated': "An assistive mobile application integrated with machine learning capabilities to enhance accessibility and user experience. Designed to support users with special needs through intelligent features such as voice recognition and smart assistance.",
      'Kifiya-AIM-Week-1': "A collection of AI and machine learning projects and exercises from Week 1 of the Kifiya AI Mastery program. Covers foundational ML techniques and their application to practical problems.",
      'Kifiya-AIM-Week-0': "Introductory projects and resources from Week 0 of the Kifiya AI Mastery program, focusing on setting up the development environment and understanding the basics of AI and machine learning workflows."
    };
    // Apply custom descriptions if present
    projects = projects.map(repo => {
      if (customDescriptions[repo.title]) {
        return { ...repo, description: customDescriptions[repo.title] };
      }
      return repo;
    });
    return res.json(projects);
  } catch (error) {
    // fallback to static projects if GitHub API fails
    const projects = [
      {
        title: "chat-app-MERN",
        description: "A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js). Features secure user authentication, group and private messaging, emoji support, and a sleek, responsive UI for seamless communication and collaboration.",
        link: "https://github.com/nikodimosewnetu/chat-app-MERN",
        image: "https://avatars.githubusercontent.com/u/nikodimosewnetu?v=4"
      },
      {
        title: "LMS",
        description: "A comprehensive Learning Management System (LMS) built with the MERN stack. Enables educators to create and manage courses, track student progress, administer quizzes, and provide a robust online learning experience for both teachers and students.",
        link: "https://github.com/nikodimosewnetu/LMS",
        image: "https://avatars.githubusercontent.com/u/nikodimosewnetu?v=4"
      },
      {
        title: "Truck-Route-backend",
        description: "A backend service for a truck route planner application, designed to help logistics companies optimize delivery routes, manage fleets, and improve operational efficiency with real-time data and advanced route optimization algorithms.",
        link: "https://github.com/nikodimosewnetu/Truck-Route-backend",
        image: "https://avatars.githubusercontent.com/u/nikodimosewnetu?v=4"
      },
      {
        title: "Restaurant Website",
        description: "A visually engaging and fully responsive restaurant website that showcases the menu, enables online reservations, displays customer reviews, and provides essential contact information. Designed to enhance the digital presence of modern dining establishments.",
        link: "https://github.com/Praneeth2025/zenith-bistro",
        image: "https://placehold.co/400x300?text=Restaurant"
      },
      {
        title: "Chess Image Recognizer",
        description: "An AI-powered chess system that leverages computer vision to recognize physical chess pieces and board states, allowing users to play against an autonomous engine. Integrates advanced game algorithms for challenging and interactive gameplay.",
        link: "https://github.com/Praneeth2025/chess-image-recognizer",
        image: "https://placehold.co/400x300?text=Chess"
      },
      {
        title: "Gesture Snake Game",
        description: "A creative reimagining of the classic snake game, where players control the snake's movement using real-time hand gesture recognition. Combines fun gameplay with innovative computer vision technology for a unique user experience.",
        link: "https://github.com/Praneeth2025/Gesture-Snake",
        image: "https://placehold.co/400x300?text=Snake"
      },
      {
        title: "WiseWay",
        description: "A smart web application that calculates the most cost-effective and efficient routes between two points using advanced algorithms. Ideal for travelers and logistics planners seeking to minimize travel time and expenses.",
        link: "https://github.com/Praneeth2025/WiseWay-website",
        image: "https://placehold.co/400x300?text=WiseWay"
      }
    ];
    return res.json(projects);
  }
});

module.exports = router; 