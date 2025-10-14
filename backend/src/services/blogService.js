const Blog = require("../models/Blog");

/**
 * Create a new blog
 * @param {Object} data - Blog data (title, description, category, link)
 * @returns {Object} - Created blog
 */
const createBlog = async (data) => {
  try {
    const blog = new Blog(data);
    const savedBlog = await blog.save();
    return savedBlog;
  } catch (error) {
    throw error;
  }
};

/**
 * Get all blogs with optional pagination
 * @param {Object} options - Query options (page, limit)
 * @returns {Object} - Blogs array and metadata
 */
const getAllBlogs = async (options = {}) => {
  try {
    const { page = 1, limit = 10 } = options;

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Get blogs with pagination
    const blogs = await Blog.find({})
      .sort({ createdAt: -1 }) // Latest first
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const total = await Blog.countDocuments({});

    return {
      blogs,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalBlogs: total,
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1,
      },
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
      throw new Error("Blog not found");
    }

    return blog;
  } catch (error) {
    if (error.name === "CastError") {
      throw new Error("Invalid blog ID");
    }
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
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      { ...data },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!blog) {
      throw new Error("Blog not found");
    }

    return blog;
  } catch (error) {
    if (error.name === "CastError") {
      throw new Error("Invalid blog ID");
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
      throw new Error("Blog not found");
    }

    return { message: "Blog deleted successfully", deletedBlog: blog };
  } catch (error) {
    if (error.name === "CastError") {
      throw new Error("Invalid blog ID");
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
    return {
      total: totalBlogs,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getBlogStats,
};
