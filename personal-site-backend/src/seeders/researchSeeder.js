const mongoose = require('mongoose');
const Research = require('../models/Research');
const User = require('../models/User');
require('dotenv').config();

const seedResearch = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Get admin user
    const adminUser = await User.findOne({ email: 'admin@blog.co' });
    if (!adminUser) {
      console.log('❌ Admin user not found. Please run adminSeeder first.');
      return;
    }

    // Check if research already exists
    const existingResearch = await Research.findOne();
    if (existingResearch) {
      console.log('⚠️  Research data already exists');
      return;
    }

    // Sample research data
    const researchData = [
      {
        title: "Advanced Machine Learning Techniques for Natural Language Processing",
        description: "This research explores cutting-edge ML techniques for improving NLP model performance, including transformer architectures, attention mechanisms, and transfer learning approaches.",
        category: "Machine Learning",
        researchLink: "https://arxiv.org/abs/2023.12345",
        tags: ["Machine Learning", "NLP", "Transformers", "Deep Learning"],
        isPublished: true,
        createdBy: adminUser._id
      },
      {
        title: "Computer Vision Applications in Medical Diagnosis",
        description: "A comprehensive study on the application of computer vision and deep learning techniques for automated medical image analysis and disease detection.",
        category: "Computer Vision",
        researchLink: "https://ieeexplore.ieee.org/document/2023.67890",
        tags: ["Computer Vision", "Medical AI", "Deep Learning", "Healthcare"],
        isPublished: true,
        createdBy: adminUser._id
      },
      {
        title: "Reinforcement Learning for Autonomous Systems",
        description: "Research on implementing reinforcement learning algorithms for autonomous vehicle navigation and decision-making systems.",
        category: "Reinforcement Learning",
        researchLink: "https://www.nature.com/articles/2023.11111",
        tags: ["Reinforcement Learning", "Autonomous Systems", "Robotics", "AI"],
        isPublished: true,
        createdBy: adminUser._id
      },
      {
        title: "Blockchain Technology in Supply Chain Management",
        description: "An analysis of blockchain applications for improving transparency, traceability, and efficiency in supply chain operations.",
        category: "Blockchain",
        researchLink: "https://www.sciencedirect.com/science/article/2023.22222",
        tags: ["Blockchain", "Supply Chain", "Distributed Systems", "Technology"],
        isPublished: true,
        createdBy: adminUser._id
      },
      {
        title: "Quantum Computing Algorithms for Optimization Problems",
        description: "Exploring quantum algorithms and their potential applications in solving complex optimization problems in various domains.",
        category: "Quantum Computing",
        researchLink: "https://quantum-journal.org/papers/2023.33333/",
        tags: ["Quantum Computing", "Algorithms", "Optimization", "Physics"],
        isPublished: true,
        createdBy: adminUser._id
      },
      {
        title: "Edge Computing for IoT Applications",
        description: "Research on edge computing architectures and their role in enabling real-time processing for Internet of Things applications.",
        category: "Edge Computing",
        researchLink: "https://dl.acm.org/doi/10.1145/2023.44444",
        tags: ["Edge Computing", "IoT", "Distributed Systems", "Networking"],
        isPublished: true,
        createdBy: adminUser._id
      }
    ];

    // Create research entries
    const createdResearch = await Research.insertMany(researchData);
    console.log(`🎉 Created ${createdResearch.length} research entries successfully!`);
    
    createdResearch.forEach((research, index) => {
      console.log(`${index + 1}. ${research.title}`);
      console.log(`   Category: ${research.category}`);
      console.log(`   Tags: ${research.tags.join(', ')}`);
      console.log(`   Link: ${research.researchLink}`);
      console.log('');
    });

  } catch (error) {
    console.error('❌ Error creating research data:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
};

seedResearch();
