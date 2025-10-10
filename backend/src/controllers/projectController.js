const projectService = require('../services/projectService');
const { validationResult } = require('express-validator');

/**
 * Create a new project
 */
const createProject = async (req, res) => {
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

    const { title, description, status, technologies, featured } = req.body;
    
    const projectData = {
      title,
      description,
      status: status || 'active',
      technologies: technologies || [],
      featured: featured || false
    };
    
    const project = await projectService.createProject(projectData);
    
    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: project
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error creating project:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get all projects with filtering
 */
const getProjects = async (req, res) => {
  try {
    const { status, featured } = req.query;
    
    const options = {
      status,
      featured
    };
    
    const projects = await projectService.getAllProjects(options);
    
    res.status(200).json({
      success: true,
      message: 'Projects retrieved successfully',
      data: projects,
      count: projects.length
    });

  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get a single project by ID
 */
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const project = await projectService.getProjectById(id);
    
    res.status(200).json({
      success: true,
      message: 'Project retrieved successfully',
      data: project
    });

  } catch (error) {
    if (error.message === 'Project not found' || error.message === 'Invalid project ID') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Update a project
 */
const updateProject = async (req, res) => {
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
    const { title, description, status, technologies, featured } = req.body;
    
    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (status !== undefined) updateData.status = status;
    if (technologies !== undefined) updateData.technologies = technologies;
    if (featured !== undefined) updateData.featured = featured;
    
    const project = await projectService.updateProject(id, updateData);
    
    res.status(200).json({
      success: true,
      message: 'Project updated successfully',
      data: project
    });

  } catch (error) {
    if (error.message === 'Project not found' || error.message === 'Invalid project ID') {
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

    console.error('Error updating project:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Delete a project
 */
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await projectService.deleteProject(id);
    
    res.status(200).json({
      success: true,
      message: result.message,
      data: { deletedProject: result.deletedProject }
    });

  } catch (error) {
    if (error.message === 'Project not found' || error.message === 'Invalid project ID') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error deleting project:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Toggle project featured status
 */
const toggleProjectFeatured = async (req, res) => {
  try {
    const { id } = req.params;
    
    const project = await projectService.toggleProjectFeatured(id);
    
    const message = project.featured 
      ? 'Project marked as featured' 
      : 'Project unmarked as featured';
    
    res.status(200).json({
      success: true,
      message,
      data: project
    });

  } catch (error) {
    if (error.message === 'Project not found' || error.message === 'Invalid project ID') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error toggling project featured status:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get project statistics
 */
const getProjectStats = async (req, res) => {
  try {
    const stats = await projectService.getProjectStats();
    
    res.status(200).json({
      success: true,
      message: 'Project statistics retrieved successfully',
      data: stats
    });

  } catch (error) {
    console.error('Error fetching project stats:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get featured projects
 */
const getFeaturedProjects = async (req, res) => {
  try {
    const projects = await projectService.getFeaturedProjects();
    
    res.status(200).json({
      success: true,
      message: 'Featured projects retrieved successfully',
      data: projects,
      count: projects.length
    });

  } catch (error) {
    console.error('Error fetching featured projects:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  toggleProjectFeatured,
  getProjectStats,
  getFeaturedProjects
};