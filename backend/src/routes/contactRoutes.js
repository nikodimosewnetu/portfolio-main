const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Debug: log environment variables (do not log actual password in production)
console.log('EMAIL USER:', process.env.CONTACT_EMAIL_USER);
console.log('EMAIL PASS:', process.env.CONTACT_EMAIL_PASS ? '***' : 'MISSING');

// Configure transporter (use environment variables for real credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.CONTACT_EMAIL_USER, // your Gmail address
    pass: process.env.CONTACT_EMAIL_PASS  // your Gmail app password
  }
});

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    await transporter.sendMail({
      from: email,
      to: 'nikodimosewnetu@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

module.exports = router; 