// Import necessary modules
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

// Set up Express app
const app = express();
const PORT = 3000;

// Enable CORS to allow requests from the frontend
app.use(cors());

// Set up storage engine for multer to save files to 'uploads' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    // Create the 'uploads' folder if it does not exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Set up multer middleware
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Accept only wav files
    if (file.mimetype === 'audio/wav') {
      cb(null, true);
    } else {
      cb(new Error('Only .wav files are allowed!'), false);
    }
  }
});

// Serve static files for your frontend
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle file uploads
app.post('/upload', upload.single('sample'), (req, res) => {
  if (req.file) {
    res.json({ success: true, message: 'File uploaded successfully!', filePath: `/uploads/${req.file.filename}` });
  } else {
    res.status(400).json({ success: false, message: 'File upload failed.' });
  }
});

// Serve the 'uploads' folder so that files can be accessed by the web app
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/instrument', express.static('public'));  // Serve static files from the 'public' folder for /instrument


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});