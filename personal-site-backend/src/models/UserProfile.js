const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true // Ensure one profile per user
  },
  name: {
    type: String,
    trim: true,
    default: '',
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  designation: {
    type: String,
    trim: true,
    default: '',
    maxlength: [150, 'Designation cannot exceed 150 characters']
  },
  bio: {
    type: String,
    trim: true,
    default: '',
    maxlength: [500, 'Bio cannot exceed 500 characters']
  },
  socialLinks: {
    linkedin: {
      type: String,
      trim: true,
      default: '',
      validate: {
        validator: function(v) {
          return !v || /^https?:\/\/(www\.)?linkedin\.com\//.test(v);
        },
        message: 'Please enter a valid LinkedIn URL'
      }
    },
    github: {
      type: String,
      trim: true,
      default: '',
      validate: {
        validator: function(v) {
          return !v || /^https?:\/\/(www\.)?github\.com\//.test(v);
        },
        message: 'Please enter a valid GitHub URL'
      }
    },
    twitter: {
      type: String,
      trim: true,
      default: '',
      validate: {
        validator: function(v) {
          return !v || /^https?:\/\/(www\.)?twitter\.com\//.test(v);
        },
        message: 'Please enter a valid Twitter URL'
      }
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: '',
      validate: {
        validator: function(v) {
          return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Please enter a valid email address'
      }
    }
  },
  image: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true,
  collection: 'user_profiles'
});

// Index for better query performance
userProfileSchema.index({ user: 1 });

// Remove sensitive data from JSON output
userProfileSchema.methods.toJSON = function() {
  const profileObject = this.toObject();
  return profileObject;
};

module.exports = mongoose.model('UserProfile', userProfileSchema);