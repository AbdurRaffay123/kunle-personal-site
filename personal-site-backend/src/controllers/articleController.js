const articleService = require('../services/articleService');
const { validationResult } = require('express-validator');

/**
 * Create a new article
 */
const createArticle = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { title, description, category, status, authors, tags } = req.body;
    
    const articleData = {
      title,
      description,
      category,
      status: status || 'ongoing',
      authors: authors || [],
      tags: tags || []
    };
    
    const article = await articleService.createArticle(articleData);
    
    res.status(201).json({
      success: true,
      message: 'Article created successfully',
      data: article
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error creating article:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get all articles with filtering
 */
const getArticles = async (req, res) => {
  try {
    const { status, category, tags, author, search } = req.query;
    
    // Handle search separately
    if (search) {
      const articles = await articleService.searchArticles(search);
      return res.status(200).json({
        success: true,
        message: 'Articles search completed',
        data: articles,
        count: articles.length
      });
    }
    
    const options = {
      status,
      category,
      tags,
      author
    };
    
    const articles = await articleService.getAllArticles(options);
    
    res.status(200).json({
      success: true,
      message: 'Articles retrieved successfully',
      data: articles,
      count: articles.length
    });

  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get a single article by ID
 */
const getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const article = await articleService.getArticleById(id);
    
    res.status(200).json({
      success: true,
      message: 'Article retrieved successfully',
      data: article
    });

  } catch (error) {
    if (error.message === 'Article not found' || error.message === 'Invalid article ID') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error fetching article:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Update an article
 */
const updateArticle = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { id } = req.params;
    const { title, description, category, status, authors, tags } = req.body;
    
    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (category !== undefined) updateData.category = category;
    if (status !== undefined) updateData.status = status;
    if (authors !== undefined) updateData.authors = authors;
    if (tags !== undefined) updateData.tags = tags;
    
    const article = await articleService.updateArticle(id, updateData);
    
    res.status(200).json({
      success: true,
      message: 'Article updated successfully',
      data: article
    });

  } catch (error) {
    if (error.message === 'Article not found' || error.message === 'Invalid article ID') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error updating article:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Delete an article
 */
const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await articleService.deleteArticle(id);
    
    res.status(200).json({
      success: true,
      message: result.message,
      data: { deletedArticle: result.deletedArticle }
    });

  } catch (error) {
    if (error.message === 'Article not found' || error.message === 'Invalid article ID') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error deleting article:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get article statistics
 */
const getArticleStats = async (req, res) => {
  try {
    const stats = await articleService.getArticleStats();
    
    res.status(200).json({
      success: true,
      message: 'Article statistics retrieved successfully',
      data: stats
    });

  } catch (error) {
    console.error('Error fetching article stats:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get published articles
 */
const getPublishedArticles = async (req, res) => {
  try {
    const articles = await articleService.getPublishedArticles();
    
    res.status(200).json({
      success: true,
      message: 'Published articles retrieved successfully',
      data: articles,
      count: articles.length
    });

  } catch (error) {
    console.error('Error fetching published articles:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  getArticleStats,
  getPublishedArticles
};