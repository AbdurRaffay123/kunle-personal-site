const UserProfile = require('../models/UserProfile');
const Portfolio = require('../models/Portfolio');
const mongoose = require('mongoose');

const getMainPageData = async () => {
  // Check if database is connected
  if (mongoose.connection.readyState !== 1) {
    throw new Error('Database not connected');
  }

  // Execute queries in parallel for better performance
  const [profile, portfolioItems] = await Promise.all([
    UserProfile.findOne({}, { _id: 0, password: 0 }).lean(),
    Portfolio.find({})
      .sort({ createdAt: -1 })
      .limit(6)
      .lean() // Use lean() for better performance
      .select('title description type technologies tags category githubUrl researchLink image createdAt updatedAt')
  ]);

  // Separate projects and research efficiently
  const projects = portfolioItems.filter(item => item.type === 'project').slice(0, 3);
  const research = portfolioItems.filter(item => item.type === 'research').slice(0, 3);

  return { profile, research, projects };
};

module.exports = { getMainPageData };