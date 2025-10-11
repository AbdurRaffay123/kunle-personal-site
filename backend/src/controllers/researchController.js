const {
  createResearch,
  getAllResearch,
  getResearchById,
  updateResearch,
  deleteResearch,
  getResearchByCategory,
  getCategories,
  getTags
} = require('../services/researchService');

// Create new research
const createResearchController = async (req, res) => {
  try {
    const { title, description, category, researchLink, tags } = req.body;
    
    // Simple validation
    if (!title || !description || !category || !researchLink) {
      return res.status(400).json({
        success: false,
        message: 'Title, description, category, and research link are required'
      });
    }

    const researchData = {
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      researchLink: researchLink.trim(),
      tags: tags || []
    };

    const research = await createResearch(researchData, req.user.id);

    res.status(201).json({
      success: true,
      message: 'Research created successfully',
      data: research
    });
  } catch (error) {
    console.error('Create research error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create research'
    });
  }
};

// Get all research
const getAllResearchController = async (req, res) => {
  try {
    const options = {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
      category: req.query.category,
      tags: req.query.tags ? req.query.tags.split(',') : undefined,
      search: req.query.search,
      sortBy: req.query.sortBy || 'createdAt',
      sortOrder: req.query.sortOrder || 'desc'
    };

    const result = await getAllResearch(options);

    res.status(200).json({
      success: true,
      message: 'Research fetched successfully',
      data: result.research,
      pagination: result.pagination
    });
  } catch (error) {
    console.error('Get all research error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch research'
    });
  }
};

// Get research by ID
const getResearchByIdController = async (req, res) => {
  try {
    const research = await getResearchById(req.params.id);

    if (!research) {
      return res.status(404).json({
        success: false,
        message: 'Research not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Research fetched successfully',
      data: research
    });
  } catch (error) {
    console.error('Get research by ID error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch research'
    });
  }
};

// Update research
const updateResearchController = async (req, res) => {
  try {
    const { title, description, category, researchLink, tags } = req.body;
    
    const updateData = {};
    
    if (title) updateData.title = title.trim();
    if (description) updateData.description = description.trim();
    if (category) updateData.category = category.trim();
    if (researchLink) updateData.researchLink = researchLink.trim();
    if (tags) updateData.tags = tags;

    const research = await updateResearch(req.params.id, updateData, req.user.id);

    if (!research) {
      return res.status(404).json({
        success: false,
        message: 'Research not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Research updated successfully',
      data: research
    });
  } catch (error) {
    console.error('Update research error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update research'
    });
  }
};

// Delete research
const deleteResearchController = async (req, res) => {
  try {
    const result = await deleteResearch(req.params.id, req.user.id);

    res.status(200).json({
      success: true,
      message: 'Research deleted successfully'
    });
  } catch (error) {
    console.error('Delete research error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete research'
    });
  }
};

// Get research by category
const getResearchByCategoryController = async (req, res) => {
  try {
    const research = await getResearchByCategory(req.params.category);

    res.status(200).json({
      success: true,
      message: 'Research fetched successfully',
      data: research
    });
  } catch (error) {
    console.error('Get research by category error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch research by category'
    });
  }
};

// Get categories
const getCategoriesController = async (req, res) => {
  try {
    const categories = await getCategories();

    res.status(200).json({
      success: true,
      message: 'Categories fetched successfully',
      data: categories
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories'
    });
  }
};

// Get tags
const getTagsController = async (req, res) => {
  try {
    const tags = await getTags();

    res.status(200).json({
      success: true,
      message: 'Tags fetched successfully',
      data: tags
    });
  } catch (error) {
    console.error('Get tags error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch tags'
    });
  }
};

module.exports = {
  createResearch: createResearchController,
  getAllResearch: getAllResearchController,
  getResearchById: getResearchByIdController,
  updateResearch: updateResearchController,
  deleteResearch: deleteResearchController,
  getResearchByCategory: getResearchByCategoryController,
  getCategories: getCategoriesController,
  getTags: getTagsController
};