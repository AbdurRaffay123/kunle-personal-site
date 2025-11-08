# Personal Website - Client Documentation

## 📋 Project Overview

This is a full-stack personal website built with modern web technologies, featuring a content management system (CMS) for managing blog posts, research papers, projects, and notes. The website includes an admin dashboard for content management and a public-facing site for visitors.

## 🏗️ Architecture

### Frontend
- **Framework**: Next.js 15.5.4 (React-based)
- **Styling**: Tailwind CSS
- **Editor**: Tiptap (Rich text editor with Notion-like features)
- **Language**: TypeScript

### Backend
- **Framework**: Express.js (Node.js)
- **Database**: MongoDB Atlas (Cloud database)
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer (for image uploads)

## ✨ Key Features

### Public-Facing Features

1. **Home Page**
   - Hero section with profile information
   - Featured projects and research
   - Recent blog posts

2. **Blog Section**
   - Blog post listings with pagination
   - Individual blog post pages with:
     - Table of Contents
     - Comments section
     - Related posts
     - Metadata (published date, category, tags)

3. **Research Section**
   - Research paper listings
   - Individual research pages with full content
   - Preview cards with descriptions

4. **Projects Section**
   - Project portfolio with preview cards
   - Detailed project pages
   - Image galleries

5. **Notes Section**
   - Personal notes with rich text formatting
   - Table of Contents
   - Search functionality
   - Reading time estimation

6. **About Page**
   - Profile information
   - Professional background

7. **Contact Page**
   - Contact form
   - Social media links

### Admin Dashboard Features

1. **Authentication**
   - Secure login system
   - JWT token-based authentication
   - Protected admin routes

2. **Content Management**
   - **Blog Management**: Create, edit, delete blog posts
   - **Research Management**: Manage research papers
   - **Project Management**: Manage project portfolio
   - **Notes Management**: Create and edit notes with rich text editor
   - **Profile Management**: Update profile information

3. **Rich Text Editor (Notepad)**
   - Full-featured Tiptap editor with:
     - Text formatting (bold, italic, underline, strikethrough)
     - Headings (H1-H6)
     - Lists (ordered, unordered, to-do lists)
     - Code blocks (with syntax highlighting)
     - Inline code (grey styling)
     - Math expressions (center-aligned)
     - Blockquotes (thin border styling)
     - Tables
     - Images (drag & drop, paste support)
     - Links
     - YouTube embeds
     - Text alignment
     - Text colors and highlights
     - Superscript and subscript

4. **Dashboard Statistics**
   - Blog post statistics
   - Activity logs
   - Content metrics

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Fully responsive across all devices (mobile, tablet, desktop)
- Adaptive layouts for different screen sizes

### Dark Mode Support
- Complete dark mode implementation
- Automatic theme switching
- Consistent styling across all components

### SEO Optimization
- Meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration
- Canonical URLs

## 🔧 Technical Details

### Environment Variables

#### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
NODE_ENV=production
```

#### Frontend (.env.production)
```
NEXT_PUBLIC_API_URL=your_backend_url
NEXT_PUBLIC_SITE_URL=your_frontend_url
```

### Deployment

#### Backend (Render)
- **Build Command**: `cd personal-site-backend && npm install`
- **Start Command**: `cd personal-site-backend && npm start`
- **Environment**: Node.js
- **Port**: 5000 (automatically assigned by Render)

#### Frontend (Render)
- **Build Command**: `cd personal-site-frontend && npm install && npm run build`
- **Start Command**: `cd personal-site-frontend && npm start`
- **Environment**: Node.js
- **Port**: 3000 (automatically assigned by Render)

### Database
- **Provider**: MongoDB Atlas
- **Connection**: Cloud-hosted MongoDB cluster
- **Collections**: Users, Blogs, Research, Projects, Notes, UserProfile, Comments

## 📝 Content Management Guide

### Creating a Blog Post

1. Log in to the admin dashboard
2. Navigate to "Blog" section
3. Click "Create New Blog"
4. Fill in:
   - Title
   - Description
   - Content (using rich text editor)
   - Category
   - Tags
   - Featured image (optional)
5. Click "Save" or "Publish"

### Creating a Research Paper

1. Log in to the admin dashboard
2. Navigate to "Research" section
3. Click "Create New Research"
4. Fill in:
   - Title
   - Description
   - Content (using rich text editor)
   - Category
   - Tags
   - Image (optional)
5. Click "Save"

### Creating a Project

1. Log in to the admin dashboard
2. Navigate to "Projects" section
3. Click "Create New Project"
4. Fill in:
   - Title
   - Description
   - Content (using rich text editor)
   - Tags
   - Image (optional)
   - Link (optional)
5. Click "Save"

### Creating a Note

1. Log in to the admin dashboard
2. Navigate to "Notepad" section
3. Start typing in the rich text editor
4. Use the toolbar to format text:
   - Bold, italic, underline
   - Headings
   - Lists (including to-do lists)
   - Code blocks
   - Math expressions
   - Images (drag & drop)
   - And more...
5. Click "Save" to save the note

### Rich Text Editor Features

#### Text Formatting
- **Bold**: Select text and click Bold button (or Ctrl/Cmd + B)
- **Italic**: Select text and click Italic button (or Ctrl/Cmd + I)
- **Underline**: Select text and click Underline button
- **Strikethrough**: Select text and click Strikethrough button
- **Inline Code**: Select text and click Code button (grey styling)

#### Headings
- Use the heading dropdown to select H1-H6
- Or type `#` followed by space for H1, `##` for H2, etc.

#### Lists
- **Bulleted List**: Click the bullet list button
- **Numbered List**: Click the numbered list button
- **To-do List**: Click the to-do list button (checkboxes with strikethrough when checked)

#### Code Blocks
- Click the code block button for multi-line code
- Code blocks support syntax highlighting
- Special code blocks with dark theme available

#### Math Expressions
- Click the math block button
- Math expressions are center-aligned
- Supports mathematical notation

#### Blockquotes
- Click the blockquote button
- Thin left border styling
- Italic text

#### Images
- Click the image button or drag & drop images
- Paste images directly from clipboard
- Images are automatically uploaded and optimized

#### Tables
- Click the table button
- Resizable columns
- Full editing support

## 🔐 Security Features

1. **Authentication**
   - JWT token-based authentication
   - Secure password hashing (bcrypt)
   - HTTP-only cookies for token storage
   - Secure cookie settings for production

2. **Authorization**
   - Protected admin routes
   - Role-based access control
   - API endpoint protection

3. **Data Validation**
   - Input validation on both frontend and backend
   - XSS protection (DOMPurify)
   - SQL injection prevention (MongoDB)
   - File upload validation

## 🚀 Performance Optimizations

1. **Frontend**
   - Next.js server-side rendering (SSR)
   - Image optimization
   - Code splitting
   - Lazy loading
   - Caching strategies

2. **Backend**
   - Database connection pooling
   - Query optimization
   - Response caching
   - Efficient file upload handling

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Recent Updates & Improvements

### Editor Improvements
- **Blockquote Styling**: Changed to single thin line border (2px) for cleaner look
- **Inline Code**: Updated to grey color for both light and dark modes
- **Math Expressions**: Center-aligned for better readability
- **To-do Lists**: Strikethrough when checked, improved styling
- **Code Blocks**: Enhanced syntax highlighting and styling

### UI/UX Improvements
- **Table of Contents**: Sticky positioning, improved scroll behavior
- **Responsive Design**: Enhanced mobile and tablet layouts
- **Dark Mode**: Consistent styling across all components
- **Preview Cards**: Improved description truncation (45 words)
- **Portfolio Cards**: Cleaner design without type badges

### Technical Improvements
- **MongoDB Connection**: Improved connection handling with retry logic
- **Error Handling**: Better error messages and logging
- **Performance**: Optimized database queries
- **SEO**: Enhanced meta tags and structured data

## 📞 Support & Maintenance

### Regular Maintenance Tasks

1. **Content Updates**
   - Regularly update blog posts
   - Add new projects and research
   - Update profile information

2. **Security Updates**
   - Keep dependencies updated
   - Monitor security advisories
   - Regular security audits

3. **Performance Monitoring**
   - Monitor website performance
   - Check database performance
   - Optimize images and assets

### Backup Strategy

1. **Database Backups**
   - MongoDB Atlas provides automatic backups
   - Regular manual backups recommended
   - Backup before major updates

2. **Code Backups**
   - Code is stored in GitHub repositories
   - Regular commits and pushes
   - Branch protection for main branch

## 📚 Additional Resources

### Documentation Files
- `README.md`: Basic setup instructions
- `CLIENT_DOCUMENTATION.md`: This file (comprehensive client guide)

### API Documentation
- Backend API endpoints are documented in the code
- RESTful API design
- Standard HTTP status codes

### Deployment
- Both frontend and backend are deployed on Render
- Automatic deployments from GitHub
- Environment variables configured in Render dashboard

## 🎯 Future Enhancements (Optional)

1. **Features**
   - Search functionality across all content
   - Newsletter subscription
   - Comment moderation
   - Analytics dashboard
   - Multi-language support

2. **Improvements**
   - Enhanced image gallery
   - Video support
   - Social media integration
   - RSS feed
   - Email notifications

## 📋 Checklist for Client

- [ ] Review all content sections (Blog, Research, Projects, Notes)
- [ ] Update profile information in admin dashboard
- [ ] Configure environment variables in deployment platform
- [ ] Set up domain name and SSL certificate
- [ ] Test all admin features (create, edit, delete content)
- [ ] Verify responsive design on mobile devices
- [ ] Test dark mode functionality
- [ ] Review SEO settings and meta tags
- [ ] Set up monitoring and analytics
- [ ] Review security settings
- [ ] Test file uploads (images)
- [ ] Verify email functionality (if applicable)

## 📧 Contact Information

For technical support or questions about the website, please contact your development team.

---

**Last Updated**: December 2024
**Version**: 1.0.0

