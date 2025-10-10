const Article = require('../models/Article');

/**
 * Create a new article
 * @param {Object} data - Article data
 * @returns {Object} - Created article
 */
const createArticle = async (data) => {
  try {
    const article = new Article(data);
    const savedArticle = await article.save();
    
    return savedArticle.toJSON();
  } catch (error) {
    throw error;
  }
};

/**
 * Get all articles with optional filtering
 * @param {Object} options - Query options (status, category, tags)
 * @returns {Array} - Articles array
 */
const getAllArticles = async (options = {}) => {
  try {
    const { status, category, tags, author } = options;
    
    // Build query
    const query = {};
    
    if (status && ['ongoing', 'completed', 'published'].includes(status)) {
      query.status = status;
    }
    
    if (category) {
      query.category = new RegExp(category, 'i'); // Case-insensitive search
    }
    
    if (tags) {
      const tagArray = Array.isArray(tags) ? tags : [tags];
      query.tags = { $in: tagArray.map(tag => new RegExp(tag, 'i')) };
    }
    
    if (author) {
      query.authors = { $in: [new RegExp(author, 'i')] };
    }
    
    // Get articles sorted by most recent first
    const articles = await Article.find(query)
      .sort({ createdAt: -1 })
      .lean(); // Return plain JavaScript objects
    
    return articles;
  } catch (error) {
    throw error;
  }
};

/**
 * Get a single article by ID
 * @param {string} articleId - Article ID
 * @returns {Object} - Article object
 */
const getArticleById = async (articleId) => {
  try {
    const article = await Article.findById(articleId).lean();
    
    if (!article) {
      throw new Error('Article not found');
    }
    
    return article;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid article ID');
    }
    throw error;
  }
};

/**
 * Update an article
 * @param {string} articleId - Article ID
 * @param {Object} data - Updated article data
 * @returns {Object} - Updated article
 */
const updateArticle = async (articleId, data) => {
  try {
    const article = await Article.findByIdAndUpdate(
      articleId,
      { ...data },
      { 
        new: true, 
        runValidators: true 
      }
    ).lean();
    
    if (!article) {
      throw new Error('Article not found');
    }
    
    return article;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid article ID');
    }
    throw error;
  }
};

/**
 * Delete an article
 * @param {string} articleId - Article ID
 * @returns {Object} - Deletion result
 */
const deleteArticle = async (articleId) => {
  try {
    const article = await Article.findByIdAndDelete(articleId).lean();
    
    if (!article) {
      throw new Error('Article not found');
    }
    
    return { message: 'Article deleted successfully', deletedArticle: article };
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid article ID');
    }
    throw error;
  }
};

/**
 * Get article statistics
 * @returns {Object} - Article stats
 */
const getArticleStats = async () => {
  try {
    const totalArticles = await Article.countDocuments();
    const ongoingArticles = await Article.countDocuments({ status: 'ongoing' });
    const completedArticles = await Article.countDocuments({ status: 'completed' });
    const publishedArticles = await Article.countDocuments({ status: 'published' });
    
    // Get most used categories
    const categoryStats = await Article.aggregate([
      { $match: { category: { $ne: '' } } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);
    
    // Get most used tags
    const tagStats = await Article.aggregate([
      { $unwind: '$tags' },
      { $group: { _id: '$tags', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);
    
    return {
      total: totalArticles,
      ongoing: ongoingArticles,
      completed: completedArticles,
      published: publishedArticles,
      topCategories: categoryStats,
      topTags: tagStats
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Get published articles
 * @returns {Array} - Published articles
 */
const getPublishedArticles = async () => {
  try {
    const articles = await Article.find({ status: 'published' })
      .sort({ createdAt: -1 })
      .lean();
    
    return articles;
  } catch (error) {
    throw error;
  }
};

/**
 * Search articles by title or description
 * @param {string} searchTerm - Search term
 * @returns {Array} - Matching articles
 */
const searchArticles = async (searchTerm) => {
  try {
    const articles = await Article.find({
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } }
      ]
    })
    .sort({ createdAt: -1 })
    .lean();
    
    return articles;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  getArticleStats,
  getPublishedArticles,
  searchArticles
};