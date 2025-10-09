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

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: result
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

    // Clear the token cookie if using cookies
    res.clearCookie('token');

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