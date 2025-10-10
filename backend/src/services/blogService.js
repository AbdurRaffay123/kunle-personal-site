const Blog = require('../models/Blog');

/**
 * Create a new blog
 * @param {Object} data - Blog data (title, slug, status)
 * @returns {Object} - Created blog
 */
const createBlog = async (data) => {
  try {
    // Check for duplicate slug
    if (data.slug) {
      const existingBlog = await Blog.findOne({ slug: data.slug });
      if (existingBlog) {
        throw new Error('A blog with this slug already exists');
      }
    }

    const blog = new Blog(data);
    const savedBlog = await blog.save();
    
    return savedBlog;
  } catch (error) {
    throw error;
  }
};

/**
 * Get all blogs with optional filtering and pagination
 * @param {Object} options - Query options (status, page, limit)
 * @returns {Object} - Blogs array and metadata
 */
const getAllBlogs = async (options = {}) => {
  try {
    const { status, page = 1, limit = 10 } = options;
    
    // Build query
    const query = {};
    if (status && ['draft', 'published'].includes(status)) {
      query.status = status;
    }
    
    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Get blogs with pagination
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 }) // Latest first
      .skip(skip)
      .limit(parseInt(limit));
    
    // Get total count for pagination
    const total = await Blog.countDocuments(query);
    
    return {
      blogs,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalBlogs: total,
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1
      }
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Get a single blog by ID
 * @param {string} blogId - Blog ID
 * @returns {Object} - Blog object
 */
const getBlogById = async (blogId) => {
  try {
    const blog = await Blog.findById(blogId);
    
    if (!blog) {
      throw new Error('Blog not found');
    }
    
    return blog;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid blog ID');
    }
    throw error;
  }
};

/**
 * Get a single blog by slug
 * @param {string} slug - Blog slug
 * @returns {Object} - Blog object
 */
const getBlogBySlug = async (slug) => {
  try {
    const blog = await Blog.findOne({ slug });
    
    if (!blog) {
      throw new Error('Blog not found');
    }
    
    return blog;
  } catch (error) {
    throw error;
  }
};

/**
 * Update a blog
 * @param {string} blogId - Blog ID
 * @param {Object} data - Updated blog data
 * @returns {Object} - Updated blog
 */
const updateBlog = async (blogId, data) => {
  try {
    // Check for duplicate slug if slug is being updated
    if (data.slug) {
      const existingBlog = await Blog.findOne({ 
        slug: data.slug, 
        _id: { $ne: blogId } 
      });
      if (existingBlog) {
        throw new Error('A blog with this slug already exists');
      }
    }
    
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      { ...data },
      { 
        new: true, 
        runValidators: true 
      }
    );
    
    if (!blog) {
      throw new Error('Blog not found');
    }
    
    return blog;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid blog ID');
    }
    throw error;
  }
};

/**
 * Delete a blog
 * @param {string} blogId - Blog ID
 * @returns {Object} - Deletion result
 */
const deleteBlog = async (blogId) => {
  try {
    const blog = await Blog.findByIdAndDelete(blogId);
    
    if (!blog) {
      throw new Error('Blog not found');
    }
    
    return { message: 'Blog deleted successfully', deletedBlog: blog };
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid blog ID');
    }
    throw error;
  }
};

/**
 * Publish a blog (change status from draft to published)
 * @param {string} blogId - Blog ID
 * @returns {Object} - Updated blog
 */
const publishBlog = async (blogId) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      { status: 'published' },
      { new: true, runValidators: true }
    );
    
    if (!blog) {
      throw new Error('Blog not found');
    }
    
    return blog;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid blog ID');
    }
    throw error;
  }
};

/**
 * Get blog statistics
 * @returns {Object} - Blog stats
 */
const getBlogStats = async () => {
  try {
    const totalBlogs = await Blog.countDocuments();
    const publishedBlogs = await Blog.countDocuments({ status: 'published' });
    const draftBlogs = await Blog.countDocuments({ status: 'draft' });
    
    return {
      total: totalBlogs,
      published: publishedBlogs,
      drafts: draftBlogs
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
  publishBlog,
  getBlogStats
};