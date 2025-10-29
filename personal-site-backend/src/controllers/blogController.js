const blogService = require('../services/blogService');
const { validationResult } = require('express-validator');

/**
 * Create a new blog
 */
const createBlog = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { title, description, category, content, tags, fileType, fileUrl, fileName, fileSize } = req.body;
    const blogData = { title, description, category, content, tags, fileType, fileUrl, fileName, fileSize };

    const blog = await blogService.createBlog(blogData);

    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: blog
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error creating blog:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get all blogs with filtering and pagination
 */
const getBlogs = async (req, res) => {
  try {
    const { page, limit } = req.query;

    const options = {
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 10
    };

    const result = await blogService.getAllBlogs(options);

    res.status(200).json({
      success: true,
      message: 'Blogs retrieved successfully',
      data: result.blogs,
      pagination: result.pagination
    });

  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get a single blog by ID
 */
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await blogService.getBlogById(id);

    res.status(200).json({
      success: true,
      message: 'Blog retrieved successfully',
      data: blog
    });

  } catch (error) {
    if (error.message === 'Blog not found' || error.message === 'Invalid blog ID') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error fetching blog:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Update a blog
 */
const updateBlog = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { id } = req.params;
    const { title, description, category, content, tags, fileType, fileUrl, fileName, fileSize } = req.body;
    const updateData = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (category) updateData.category = category;
    if (content) updateData.content = content;
    if (tags) updateData.tags = tags;
    if (fileType) updateData.fileType = fileType;
    if (fileUrl) updateData.fileUrl = fileUrl;
    if (fileName) updateData.fileName = fileName;
    if (fileSize) updateData.fileSize = fileSize;

    const blog = await blogService.updateBlog(id, updateData);

    res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      data: blog
    });

  } catch (error) {
    if (error.message === 'Blog not found' || error.message === 'Invalid blog ID') {
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

    console.error('Error updating blog:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Delete a blog
 */
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await blogService.deleteBlog(id);

    res.status(200).json({
      success: true,
      message: result.message,
      data: { deletedBlog: result.deletedBlog }
    });

  } catch (error) {
    if (error.message === 'Blog not found' || error.message === 'Invalid blog ID') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error deleting blog:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get blog statistics
 */
const getBlogStats = async (req, res) => {
  try {
    const stats = await blogService.getBlogStats();

    res.status(200).json({
      success: true,
      message: 'Blog statistics retrieved successfully',
      data: stats
    });

  } catch (error) {
    console.error('Error fetching blog stats:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get a blog by slug
 */
const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    
    const blog = await blogService.getBlogBySlug(slug);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      success: true,
      data: { blog }
    });

  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
  getBlogStats
};