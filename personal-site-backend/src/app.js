const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
const profileRoutes = require('./routes/profileRoutes');
const blogRoutes = require('./routes/blogRoutes');
const projectRoutes = require('./routes/projectRoutes');
const articleRoutes = require('./routes/articleRoutes');
const commentRoutes = require('./routes/commentRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const uploadErrorHandler = require('./middleware/uploadErrorHandler');
const researchRoutes = require('./routes/researchRoutes');
// In app.js or index.js
const mainPageRoutes = require('./routes/mainPageRoutes');


const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(morgan('combined'));
// CORS configuration
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:3000',
  'https://kunle-personal-site-frontend.onrender.com',
  'https://website-2025-backend-1.onrender.com',
  'http://localhost:3000',
  'http://localhost:3001'
];

// Log allowed origins for debugging
console.log('Allowed CORS origins:', allowedOrigins);

app.use(cors({
  origin: function (origin, callback) {
    console.log('CORS request from origin:', origin);
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      console.log('No origin provided, allowing request');
      return callback(null, true);
    }
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      console.log('Origin allowed:', origin);
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
  preflightContinue: false,
  optionsSuccessStatus: 200
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files
app.use('/stored-files', express.static(path.join(__dirname, '../stored-files')));

// Handle preflight requests manually
app.options('*', (req, res) => {
  console.log('Handling preflight request for:', req.path);
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie, X-Requested-With, Accept, Origin');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(200);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/research', researchRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/main', mainPageRoutes);

// Root route
app.get('/', (req, res) => {
  res.status(200).json({ 
    success: true,
    message: 'Backend API is running!',
    data: {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      availableEndpoints: [
        '/api/auth',
        '/api/notes',
        '/api/profile',
        '/api/blogs',
        '/api/projects',
        '/api/research',
        '/api/comments',
        '/api/dashboard',
        '/api/main',
        '/health'
      ]
    }
  });
});

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
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

module.exports = app;