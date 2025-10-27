const Portfolio = require('../models/Portfolio');
const { validationResult } = require('express-validator');

// Get all portfolio items
const getAllPortfolioItems = async (req, res) => {
  try {
    const { type, search, page = 1, limit = 10 } = req.query;
    
    // Build filter object
    const filter = {};
    if (type && type !== 'all') {
      filter.type = type;
    }
    if (search) {
      // Use simple regex search instead of text search for better performance
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (page - 1) * limit;
    
    // Highly optimized query for production
    const portfolioItems = await Portfolio.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .lean() // Use lean() for better performance
      .select('title description type technologies tags category githubUrl researchLink image createdAt updatedAt');

    // Skip count for now to improve performance
    const total = portfolioItems.length; // Temporary fix

    res.status(200).json({
      success: true,
      data: portfolioItems,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / limit),
        total
      }
    });
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio items',
      error: error.message
    });
  }
};

// Get single portfolio item
const getPortfolioItem = async (req, res) => {
  try {
    const { id } = req.params;
    
    const portfolioItem = await Portfolio.findById(id);
    
    if (!portfolioItem) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    res.status(200).json({
      success: true,
      data: portfolioItem
    });
  } catch (error) {
    console.error('Error fetching portfolio item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio item',
      error: error.message
    });
  }
};

// Create new portfolio item
const createPortfolioItem = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const portfolioData = {
      ...req.body,
      createdBy: req.user.id,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const portfolioItem = new Portfolio(portfolioData);
    await portfolioItem.save();

    res.status(201).json({
      success: true,
      message: 'Portfolio item created successfully',
      data: portfolioItem
    });
  } catch (error) {
    console.error('Error creating portfolio item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create portfolio item',
      error: error.message
    });
  }
};

// Update portfolio item
const updatePortfolioItem = async (req, res) => {
  try {
    const { id } = req.params;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const updateData = {
      ...req.body,
      updatedAt: new Date()
    };

    const portfolioItem = await Portfolio.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!portfolioItem) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Portfolio item updated successfully',
      data: portfolioItem
    });
  } catch (error) {
    console.error('Error updating portfolio item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update portfolio item',
      error: error.message
    });
  }
};

// Delete portfolio item
const deletePortfolioItem = async (req, res) => {
  try {
    const { id } = req.params;
    
    const portfolioItem = await Portfolio.findByIdAndDelete(id);
    
    if (!portfolioItem) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Portfolio item deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting portfolio item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete portfolio item',
      error: error.message
    });
  }
};

// Get portfolio statistics
const getPortfolioStats = async (req, res) => {
  try {
    const totalItems = await Portfolio.countDocuments();
    const projectsCount = await Portfolio.countDocuments({ type: 'project' });
    const researchCount = await Portfolio.countDocuments({ type: 'research' });
    
    const typeStats = await Portfolio.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: {
        total: totalItems,
        projects: projectsCount,
        research: researchCount,
        typeBreakdown: typeStats
      }
    });
  } catch (error) {
    console.error('Error fetching portfolio stats:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio statistics',
      error: error.message
    });
  }
};

module.exports = {
  getAllPortfolioItems,
  getPortfolioItem,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
  getPortfolioStats
};
