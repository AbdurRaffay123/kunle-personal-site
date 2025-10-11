const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST']
  }
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join a specific post's comment room
  socket.on('join-post', (postId) => {
    socket.join(`post-${postId}`);
    console.log(`User ${socket.id} joined post-${postId}`);
  });

  // Leave a post's comment room
  socket.on('leave-post', (postId) => {
    socket.leave(`post-${postId}`);
    console.log(`User ${socket.id} left post-${postId}`);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Make io available to routes
app.set('io', io);

server.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`);
});

