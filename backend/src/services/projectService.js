const Project = require('../models/Project');

/**
 * Create a new project
 * @param {Object} data - Project data
 * @returns {Object} - Created project
 */
const createProject = async (data) => {
  try {
    const project = new Project(data);
    const savedProject = await project.save();
    
    return savedProject;
  } catch (error) {
    throw error;
  }
};

/**
 * Get all projects with optional filtering
 * @param {Object} options - Query options (status, featured)
 * @returns {Array} - Projects array
 */
const getAllProjects = async (options = {}) => {
  try {
    const { status, featured } = options;
    
    // Build query
    const query = {};
    
    if (status && ['active', 'completed', 'archived'].includes(status)) {
      query.status = status;
    }
    
    if (featured !== undefined) {
      query.featured = featured === 'true' || featured === true;
    }
    
    // Get projects sorted by most recent first
    const projects = await Project.find(query)
      .sort({ createdAt: -1 });
    
    return projects;
  } catch (error) {
    throw error;
  }
};

/**
 * Get a single project by ID
 * @param {string} projectId - Project ID
 * @returns {Object} - Project object
 */
const getProjectById = async (projectId) => {
  try {
    const project = await Project.findById(projectId);
    
    if (!project) {
      throw new Error('Project not found');
    }
    
    return project;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid project ID');
    }
    throw error;
  }
};

/**
 * Update a project
 * @param {string} projectId - Project ID
 * @param {Object} data - Updated project data
 * @returns {Object} - Updated project
 */
const updateProject = async (projectId, data) => {
  try {
    const project = await Project.findByIdAndUpdate(
      projectId,
      { ...data },
      { 
        new: true, 
        runValidators: true 
      }
    );
    
    if (!project) {
      throw new Error('Project not found');
    }
    
    return project;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid project ID');
    }
    throw error;
  }
};

/**
 * Delete a project
 * @param {string} projectId - Project ID
 * @returns {Object} - Deletion result
 */
const deleteProject = async (projectId) => {
  try {
    const project = await Project.findByIdAndDelete(projectId);
    
    if (!project) {
      throw new Error('Project not found');
    }
    
    return { message: 'Project deleted successfully', deletedProject: project };
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid project ID');
    }
    throw error;
  }
};

/**
 * Toggle project featured status
 * @param {string} projectId - Project ID
 * @returns {Object} - Updated project
 */
const toggleProjectFeatured = async (projectId) => {
  try {
    const project = await Project.findById(projectId);
    
    if (!project) {
      throw new Error('Project not found');
    }
    
    project.featured = !project.featured;
    const updatedProject = await project.save();
    
    return updatedProject;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid project ID');
    }
    throw error;
  }
};

/**
 * Get project statistics
 * @returns {Object} - Project stats
 */
const getProjectStats = async () => {
  try {
    const totalProjects = await Project.countDocuments();
    const activeProjects = await Project.countDocuments({ status: 'active' });
    const completedProjects = await Project.countDocuments({ status: 'completed' });
    const archivedProjects = await Project.countDocuments({ status: 'archived' });
    const featuredProjects = await Project.countDocuments({ featured: true });
    
    return {
      total: totalProjects,
      active: activeProjects,
      completed: completedProjects,
      archived: archivedProjects,
      featured: featuredProjects
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Get featured projects
 * @returns {Array} - Featured projects
 */
const getFeaturedProjects = async () => {
  try {
    const projects = await Project.find({ featured: true })
      .sort({ createdAt: -1 });
    
    return projects;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  toggleProjectFeatured,
  getProjectStats,
  getFeaturedProjects
};