const mongoose = require('mongoose');

const connectDB = async () => {
  const maxRetries = 3;
  let retryCount = 0;

  while (retryCount < maxRetries) {
    try {
      console.log(`Attempting to connect to MongoDB Atlas (attempt ${retryCount + 1}/${maxRetries})...`);
      
      // MongoDB Atlas connection options
      const options = {
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 30000, // Keep trying to send operations for 30 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        connectTimeoutMS: 30000, // Connection timeout
        bufferCommands: false, // Disable mongoose buffering
        retryWrites: true, // Enable retryable writes
        retryReads: true, // Enable retryable reads
      };

      const conn = await mongoose.connect(process.env.MONGODB_URI, options);
      
      console.log('MongoDB Atlas connected successfully');
      console.log(`Database: ${conn.connection.name}`);
      console.log(`Host: ${conn.connection.host}`);
      
      // Handle connection events
      mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
      });

      mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected');
      });

      mongoose.connection.on('reconnected', () => {
        console.log('MongoDB reconnected');
      });

      // Graceful shutdown
      process.on('SIGINT', async () => {
        await mongoose.connection.close();
        console.log('MongoDB connection closed through app termination');
        process.exit(0);
      });

      return; // Success, exit the retry loop

    } catch (error) {
      retryCount++;
      console.error(`MongoDB connection attempt ${retryCount} failed:`, error.message);
      
      if (retryCount >= maxRetries) {
        console.error('Failed to connect to MongoDB Atlas after all retry attempts');
        console.error('Please check your internet connection and MongoDB Atlas configuration');
        process.exit(1);
      }
      
      console.log(`Retrying in 5 seconds...`);
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
};

module.exports = connectDB;