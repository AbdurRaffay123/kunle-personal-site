const authService = require('../services/authService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // Call auth service
    const result = await authService.login(email, password);

    // Set secure cookie with token
    res.cookie('token', result.token, {
      httpOnly: true,          // Prevents XSS attacks
      secure: process.env.NODE_ENV === 'production', // HTTPS only in production
      sameSite: 'strict',      // CSRF protection
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      path: '/'               // Available throughout the app
    });

    // Return response without token (since it's in cookie)
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: result.user // Only return user data, not token
      }
    });

  } catch (error) {
    if (error.message === 'Invalid credentials') {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

const logout = async (req, res) => {
  try {
    // Get user ID from the authenticated request
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    // Call auth service
    const result = await authService.logout(userId);

    // Clear the token cookie
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/'
    });

    res.status(200).json({
      success: true,
      message: 'Logout successful',
      data: result
    });

  } catch (error) {
    if (error.message === 'User not found') {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

module.exports = {
  login,
  logout
};