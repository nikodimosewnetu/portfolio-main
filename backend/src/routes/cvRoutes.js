const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, 'resume.pdf'); // Always overwrite with the latest
  }
});
const upload = multer({ storage });

// Upload CV
router.post('/upload', upload.single('cv'), (req, res) => {
  res.json({ message: 'CV uploaded successfully', filename: req.file.filename });
});

// Download CV
router.get('/download', (req, res) => {
  const filePath = path.join(__dirname, '../../uploads/resume.pdf');
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ message: 'CV not found' });
  }
});

// Delete CV
router.delete('/delete', (req, res) => {
  const filePath = path.join(__dirname, '../../uploads/resume.pdf');
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.json({ message: 'CV deleted successfully' });
  } else {
    res.status(404).json({ message: 'CV not found' });
  }
});

module.exports = router; 