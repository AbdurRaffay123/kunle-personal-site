const Research = require('../models/Research');

// Create new research
const createResearch = async (researchData, userId) => {
  const research = new Research({
    ...researchData,
    createdBy: userId
  });

  const savedResearch = await research.save();
  return savedResearch;
};

// Get all research with pagination and filtering
const getAllResearch = async (options = {}) => {
  const {
    page = 1,
    limit = 10,
    category,
    tags,
    search,
    sortBy = 'createdAt',
    sortOrder = 'desc'
  } = options;

  // Build filter object
  const filter = { isPublished: true };
  
  if (category) {
    filter.category = new RegExp(category, 'i');
  }
  
  if (tags && tags.length > 0) {
    filter.tags = { $in: tags.map(tag => new RegExp(tag, 'i')) };
  }
  
  if (search) {
    filter.$or = [
      { title: new RegExp(search, 'i') },
      { description: new RegExp(search, 'i') },
      { category: new RegExp(search, 'i') }
    ];
  }

  // Calculate skip value for pagination
  const skip = (page - 1) * limit;

  // Build sort object
  const sort = {};
  sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

  // Execute query with pagination
  const research = await Research.find(filter)
    .populate('createdBy', 'email')
    .sort(sort)
    .skip(skip)
    .limit(parseInt(limit));

  const totalCount = await Research.countDocuments(filter);

  return {
    research,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalCount / limit),
      totalCount,
      hasNextPage: page * limit < totalCount,
      hasPrevPage: page > 1
    }
  };
};

// Get research by ID
const getResearchById = async (id) => {
  const research = await Research.findById(id)
    .populate('createdBy', 'email');
  
  return research;
};

// Update research
const updateResearch = async (id, updateData, userId) => {
  const research = await Research.findById(id);
  
  if (!research) {
    return null;
  }

  // Check if user owns this research
  if (research.createdBy.toString() !== userId.toString()) {
    throw new Error('Not authorized to update this research');
  }

  const updatedResearch = await Research.findByIdAndUpdate(
    id,
    { ...updateData, updatedAt: Date.now() },
    { new: true, runValidators: true }
  ).populate('createdBy', 'email');

  return updatedResearch;
};

// Delete research
const deleteResearch = async (id, userId) => {
  const research = await Research.findById(id);
  
  if (!research) {
    throw new Error('Research not found');
  }

  // Check if user owns this research
  if (research.createdBy.toString() !== userId.toString()) {
    throw new Error('Not authorized to delete this research');
  }

  await Research.findByIdAndDelete(id);
  return { message: 'Research deleted successfully' };
};

// Get research by category
const getResearchByCategory = async (category) => {
  const research = await Research.find({ 
    category: new RegExp(category, 'i'),
    isPublished: true 
  })
    .populate('createdBy', 'email')
    .sort({ createdAt: -1 });
  
  return research;
};

// Get unique categories
const getCategories = async () => {
  const categories = await Research.distinct('category', { isPublished: true });
  return categories.sort();
};

// Get unique tags
const getTags = async () => {
  const tags = await Research.distinct('tags', { isPublished: true });
  return tags.sort();
};

module.exports = {
  createResearch,
  getAllResearch,
  getResearchById,
  updateResearch,
  deleteResearch,
  getResearchByCategory,
  getCategories,
  getTags
};