/**
 * Dashboard Controller - Statistics and Recent Activity
 */

const Blog = require('../models/Blog');
const Note = require('../models/Note');
const Project = require('../models/Project');
const Research = require('../models/Research');
const Comment = require('../models/Comment');
const authMiddleware = require('../middleware/authMiddleware');

// Get dashboard statistics
const getDashboardStats = async (req, res) => {
  try {
    const [
      totalBlogs,
      totalNotes,
      totalProjects,
      totalResearch,
      totalComments
    ] = await Promise.all([
      Blog.countDocuments(),
      Note.countDocuments(),
      Project.countDocuments(),
      Research.countDocuments(),
      Comment.countDocuments()
    ]);

    res.json({
      success: true,
      data: {
        totalBlogs,
        totalNotes,
        totalProjects,
        totalResearch,
        totalComments
      }
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard statistics'
    });
  }
};

// Get recent activity
const getRecentActivity = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    
    // Get recent activities from all collections
    const [recentBlogs, recentNotes, recentProjects, recentResearch, recentComments] = await Promise.all([
      Blog.find()
        .select('title createdAt updatedAt')
        .sort({ updatedAt: -1 })
        .limit(5),
      Note.find()
        .select('title createdAt updatedAt')
        .sort({ updatedAt: -1 })
        .limit(5),
      Project.find()
        .select('title createdAt updatedAt')
        .sort({ updatedAt: -1 })
        .limit(5),
      Research.find()
        .select('title createdAt updatedAt')
        .sort({ updatedAt: -1 })
        .limit(5),
      Comment.find()
        .select('content createdAt postId postType')
        .sort({ createdAt: -1 })
        .limit(5)
    ]);

    // Format activities
    const activities = [];

    // Add blog activities
    recentBlogs.forEach(blog => {
      activities.push({
        id: blog._id,
        type: 'blog',
        action: 'Blog post published',
        title: blog.title,
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt,
        user: 'You'
      });
    });

    // Add note activities
    recentNotes.forEach(note => {
      activities.push({
        id: note._id,
        type: 'note',
        action: 'Note created',
        title: note.title,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
        user: 'You'
      });
    });

    // Add project activities
    recentProjects.forEach(project => {
      activities.push({
        id: project._id,
        type: 'project',
        action: 'Project updated',
        title: project.title,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
        user: 'You'
      });
    });

    // Add research activities
    recentResearch.forEach(research => {
      activities.push({
        id: research._id,
        type: 'research',
        action: 'Research item added',
        title: research.title,
        createdAt: research.createdAt,
        updatedAt: research.updatedAt,
        user: 'You'
      });
    });

    // Add comment activities
    recentComments.forEach(comment => {
      activities.push({
        id: comment._id,
        type: 'comment',
        action: 'New comment',
        title: comment.content.substring(0, 50) + (comment.content.length > 50 ? '...' : ''),
        createdAt: comment.createdAt,
        updatedAt: comment.createdAt,
        user: comment.email || 'Anonymous',
        postId: comment.postId,
        postType: comment.postType
      });
    });

    // Sort all activities by date (most recent first) and limit
    activities.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    const recentActivities = activities.slice(0, limit);

    res.json({
      success: true,
      data: {
        activities: recentActivities
      }
    });
  } catch (error) {
    console.error('Error fetching recent activity:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch recent activity'
    });
  }
};

module.exports = {
  getDashboardStats,
  getRecentActivity
};
