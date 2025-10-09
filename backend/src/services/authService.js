const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

const login = async (email, password) => {
  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Generate token
    const token = generateToken(user._id);

    // Return user data without password
    const userResponse = {
      id: user._id,
      email: user.email,
      createdAt: user.createdAt
    };

    return { token, user: userResponse };
  } catch (error) {
    throw error;
  }
};

const logout = async (userId) => {
  try {
    // In a stateless JWT system, logout is handled client-side
    // But you can add server-side logic here if needed
    // For example: blacklist tokens, update user last_logout, etc.
    
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Optional: Update user's last logout time
    await User.findByIdAndUpdate(userId, { 
      lastLogout: new Date() 
    });

    return { message: 'Logout successful' };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
  logout,
  generateToken
};