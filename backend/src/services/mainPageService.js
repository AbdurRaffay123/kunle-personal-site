const UserProfile = require('../models/UserProfile');
const Research = require('../models/Research');
const Project = require('../models/Project');

const getMainPageData = async () => {
  // Get profile (exclude _id and sensitive fields)
  const profile = await UserProfile.findOne({}, { _id: 0, password: 0 });

  // Get latest 3 research items
  const research = await Research.find({ isPublished: true })
    .sort({ createdAt: -1 })
    .limit(3)
    .select('-_id -author'); // Exclude _id and author if needed

  // Get latest 3 projects
  const projects = await Project.find({ isPublished: true })
    .sort({ createdAt: -1 })
    .limit(3)
    .select('-_id');

  return { profile, research, projects };
};

module.exports = { getMainPageData };