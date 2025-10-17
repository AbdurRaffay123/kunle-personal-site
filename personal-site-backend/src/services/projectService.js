const Project = require('../models/Project');

// Create new project
const createProject = async (projectData) => {
  const project = new Project({
    title: projectData.title,
    description: projectData.description,
    link: projectData.link,
    technologies: projectData.technologies || [],
  });
  return await project.save();
};

// Get all projects
const getProjects = async () => {
  return await Project.find().sort({ createdAt: -1 });
};

// Get project by ID
const getProjectById = async (id) => {
  return await Project.findById(id);
};

// Update project
const updateProject = async (id, updateData) => {
  return await Project.findByIdAndUpdate(
    id,
    {
      $set: {
        title: updateData.title,
        description: updateData.description,
        link: updateData.link,
        technologies: updateData.technologies,
      }
    },
    { new: true }
  );
};

// Delete project
const deleteProject = async (id) => {
  return await Project.findByIdAndDelete(id);
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};