const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /api/github?username=USERNAME
router.get('/', async (req, res) => {
  const { username } = req.query;
  if (!username) return res.status(400).json({ message: 'Username is required' });
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/events/public`);
    const events = response.data.slice(0, 10); // Limit to 10 recent events
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch GitHub history', error: error.message });
  }
});

module.exports = router; 