const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const profileRoutes = require('./routes/profileRoutes');
const uploadErrorHandler = require('./middleware/uploadErrorHandler');

const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files
app.use('/stored-files', express.static(path.join(__dirname, 'stored-files')));
app.use('/uploads', express.static(path.join(__dirname, '../uploads'))); // Profile images

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/profile', profileRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ 
    success: true,
    message: 'Server is running!',
    data: {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV
    }
  });
});

// Upload error handling
app.use(uploadErrorHandler);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

module.exports = app;