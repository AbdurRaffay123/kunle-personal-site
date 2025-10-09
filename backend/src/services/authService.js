const User = require('../models/User');
const { generateAccessToken } = require('../config/jwt');

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

    // Generate token using JWT service
    const token = generateAccessToken(user._id);

    // Return user data without password (using toJSON method from model)
    return { 
      token, 
      user: user.toJSON() 
    };
  } catch (error) {
    throw error;
  }
};

const logout = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Update user's last logout time
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
  logout
};