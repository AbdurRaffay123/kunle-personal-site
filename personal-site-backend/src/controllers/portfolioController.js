const Portfolio = require('../models/Portfolio');
const { validationResult } = require('express-validator');

// Get all portfolio items
const getAllPortfolioItems = async (req, res) => {
  try {
    const startTime = Date.now();
    const { type, search, page = 1, limit = 10 } = req.query;
    
    // Build filter object
    const filter = {};
    if (type && type !== 'all') {
      filter.type = type;
    }
    if (search) {
      // Use simple regex search for better performance
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (page - 1) * limit;
    const limitNum = parseInt(limit);
    
    console.log('Portfolio query filter:', filter);
    console.log('Portfolio query started at:', new Date().toISOString());
    
    // Execute queries in parallel for better performance
    const [portfolioItems, total] = await Promise.all([
      Portfolio.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .lean() // Use lean() for better performance
        .select('title description type technologies tags category githubUrl researchLink image createdAt updatedAt'),
      Portfolio.countDocuments(filter) // Proper count query
    ]);

    const endTime = Date.now();
    console.log(`Portfolio query completed in ${endTime - startTime}ms`);

    res.status(200).json({
      success: true,
      data: portfolioItems,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / limitNum),
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
    
    const portfolioItem = await Portfolio.findById(id).lean();
    
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

// Get portfolio statistics - Optimized with single aggregation
const getPortfolioStats = async (req, res) => {
  try {
    // Single aggregation query for all stats
    const stats = await Portfolio.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          projects: {
            $sum: { $cond: [{ $eq: ['$type', 'project'] }, 1, 0] }
          },
          research: {
            $sum: { $cond: [{ $eq: ['$type', 'research'] }, 1, 0] }
          }
        }
      }
    ]);

    const result = stats[0] || { total: 0, projects: 0, research: 0 };

    res.status(200).json({
      success: true,
      data: {
        total: result.total,
        projects: result.projects,
        research: result.research,
        typeBreakdown: [
          { _id: 'project', count: result.projects },
          { _id: 'research', count: result.research }
        ]
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
