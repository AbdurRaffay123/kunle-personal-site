const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters'],
    default: ''
  },
  link: {
    type: String,
    required: [true, 'Project link is required'],
    trim: true,
    validate: {
      validator: function(url) {
        // Basic URL validation
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        return urlPattern.test(url);
      },
      message: 'Please provide a valid URL'
    }
  },
  technologies: {
    type: [String],
    default: [],
    validate: {
      validator: function(technologies) {
        return technologies.every(tech => 
          typeof tech === 'string' && tech.trim().length > 0
        );
      },
      message: 'Each technology must be a non-empty string'
    }
  }
}, {
  timestamps: true
});

// Index for better query performance
projectSchema.index({ createdAt: -1 });

// Clean up technologies array before saving
projectSchema.pre('save', function(next) {
  if (this.technologies) {
    this.technologies = this.technologies
      .map(tech => tech.trim())
      .filter(tech => tech.length > 0);
  }
  next();
});

// Remove duplicates from technologies
projectSchema.pre('save', function(next) {
  if (this.technologies) {
    this.technologies = [...new Set(this.technologies)];
  }
  next();
});

module.exports = mongoose.model('Project', projectSchema);