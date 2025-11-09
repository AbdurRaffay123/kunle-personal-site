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

## 🔑 How to Change Admin Email or Password

This section explains how to change your admin login email or password using the seeder file. **Important**: Only do this if you need to change your login credentials. This process will create a new admin account or update an existing one.

### What You Need Before Starting

1. **Access to the code** (either on your computer or through GitHub)
2. **A code editor** (like Visual Studio Code, Notepad++, or any text editor)
3. **Node.js installed** on your computer (if running locally)
4. **Your MongoDB connection string** (the same one used in your `.env` file)

### Step-by-Step Instructions

#### Step 1: Locate the Seeder File

1. Open your project folder on your computer
2. Navigate to: `personal-site-backend/src/seeders/`
3. Find the file named: `adminSeeder.js`
4. Right-click on it and choose "Open with" → your text editor (like Notepad or Visual Studio Code)

#### Step 2: Understand the File Structure

When you open the file, you will see something like this at the top:

```javascript
// ============================================
// IMPORTANT: Change these values to update your admin credentials
// ============================================
// Your NEW email address (the one you want to use for login)
const ADMIN_EMAIL = 'admin@blog.co';

// Your NEW password (the one you want to use for login)
const ADMIN_PASSWORD = 'Hx12890#@12341';

// OPTIONAL: Your OLD email address (only fill this if you're changing your email)
// If you're only changing your password, leave this empty: const OLD_EMAIL = '';
// If you're changing your email, put your current/old email here
const OLD_EMAIL = '';
// ============================================
```

- **`ADMIN_EMAIL`**: This is your **NEW** admin login email address (the one you want to use)
- **`ADMIN_PASSWORD`**: This is your **NEW** admin login password (the one you want to use)
- **`OLD_EMAIL`**: This is **OPTIONAL** - only use this if you're changing your email address

**Good news!** The improved seeder file can now:
- ✅ Update your existing admin account (password or email)
- ✅ Create a new admin account (if no admin exists)
- ✅ Change both email and password easily
- ✅ Handle email changes by finding your old admin account

#### Step 3: Change Your Email or Password

**Scenario A: Changing ONLY your password (keeping the same email)**

1. Find the line that says: `const ADMIN_EMAIL = 'admin@blog.co';`
2. **Keep the same email** that you currently use (don't change this line)
3. Find the line that says: `const ADMIN_PASSWORD = 'Hx12890#@12341';`
4. Replace `'Hx12890#@12341'` with your new password
5. Make sure to keep the quotes and semicolon `;`
6. Find the line that says: `const OLD_EMAIL = '';`
7. **Leave it empty** (don't change this line)
8. Example:
   ```javascript
   const ADMIN_EMAIL = 'admin@blog.co';  // Same email
   const ADMIN_PASSWORD = 'MyNewPassword123!@#';  // New password
   const OLD_EMAIL = '';  // Leave empty
   ```

**Scenario B: Changing ONLY your email (keeping the same password)**

1. Find the line that says: `const ADMIN_EMAIL = 'admin@blog.co';`
2. Replace `'admin@blog.co'` with your **new email address**
3. Find the line that says: `const ADMIN_PASSWORD = 'Hx12890#@12341';`
4. **Keep the same password** or change it to a new one
5. **IMPORTANT**: Find the line that says: `const OLD_EMAIL = '';`
6. Replace the empty quotes `''` with your **current/old email address**
7. Example:
   ```javascript
   const ADMIN_EMAIL = 'newemail@example.com';  // New email
   const ADMIN_PASSWORD = 'Hx12890#@12341';  // Same or new password
   const OLD_EMAIL = 'admin@blog.co';  // Your current email
   ```

**Scenario C: Changing BOTH email and password**

1. Find the line that says: `const ADMIN_EMAIL = 'admin@blog.co';`
2. Replace `'admin@blog.co'` with your **new email address**
3. Find the line that says: `const ADMIN_PASSWORD = 'Hx12890#@12341';`
4. Replace `'Hx12890#@12341'` with your **new password**
5. **IMPORTANT**: Find the line that says: `const OLD_EMAIL = '';`
6. Replace the empty quotes `''` with your **current/old email address**
7. Example:
   ```javascript
   const ADMIN_EMAIL = 'newemail@example.com';  // New email
   const ADMIN_PASSWORD = 'MyNewPassword123!@#';  // New password
   const OLD_EMAIL = 'admin@blog.co';  // Your current email
   ```

**Password Requirements:**
- At least 8 characters long
- Mix of uppercase and lowercase letters
- At least one number
- At least one special character (!, @, #, $, %, etc.)
- Example of a strong password: `MyNewPassword123!@#`

**Important Notes:**
- **If you're only changing the password**: Leave `OLD_EMAIL` empty (as `''`)
- **If you're changing the email**: You **MUST** fill in `OLD_EMAIL` with your current email address, otherwise the seeder won't find your existing admin account
- The seeder will automatically find your existing admin account and update it
- All your existing data and content will remain intact

#### Step 4: Save the File

1. After making your changes, save the file
2. Press `Ctrl + S` (Windows/Linux) or `Cmd + S` (Mac)
3. Make sure the file is saved successfully

#### Step 5: How the Seeder Works

**The seeder automatically handles all scenarios:**

1. **If you're only changing your password:**
   - The seeder finds your admin account using the email in `ADMIN_EMAIL`
   - It updates your password
   - Your email remains the same
   - All your data stays intact

2. **If you're changing your email (and filled in OLD_EMAIL):**
   - The seeder first looks for an admin with the new email
   - If not found, it looks for an admin with the old email (from `OLD_EMAIL`)
   - It updates both the email and password
   - All your data stays intact

3. **If no admin exists:**
   - The seeder creates a new admin account
   - You can use the new email and password to log in

**What happens to your data?**
- ✅ All your blog posts, research, projects, and notes remain unchanged
- ✅ Your profile information stays the same
- ✅ Only your login credentials (email and/or password) are updated
- ✅ You can immediately log in with your new credentials

#### Step 6: Run the Seeder File

**If you're running this on your local computer:**

1. Open a terminal or command prompt
2. Navigate to your backend folder:
   ```
   cd personal-site-backend
   ```
3. Make sure you have a `.env` file in the `personal-site-backend` folder with your `MONGODB_URI`
4. Run the seeder command:
   ```
   npm run seed:admin
   ```
5. Wait for one of these messages:
   - "🎉 Admin user created successfully!" (if it's a new admin)
   - "🔄 Admin user updated successfully!" (if it updated an existing admin)
   - "🔄 Admin password updated successfully!" (if only password was updated)
6. You should see your email displayed in the terminal
   - If you changed your email, you'll see: "📧 Email changed from: old@email.com to: new@email.com"
   - If you only changed your password, you'll see: "📧 Email: your@email.com"
7. The process will complete and close automatically

**If you're deploying to production (Render):**

1. **First, modify the seeder file on your computer** (Steps 1-4 above)
2. **Push your changes to GitHub:**
   - Open terminal/command prompt
   - Navigate to your project folder
   - Run these commands:
     ```
     git add personal-site-backend/src/seeders/adminSeeder.js
     git commit -m "Update admin credentials"
     git push origin main
     ```
3. **On Render dashboard:**
   - Go to your backend service on Render
   - Navigate to "Settings" → "Environment"
   - Add a new environment variable (temporarily) to run the seeder:
     - Variable: `RUN_SEEDER`
     - Value: `true`
   - Or use Render's Shell/SSH feature to run: `npm run seed:admin`
   - **Note**: After running the seeder, you may want to remove the environment variable

#### Step 7: Test Your New Credentials

1. Go to your website's admin login page
2. Try logging in with your new email and password
3. If it works, you're all set!
4. If it doesn't work, check:
   - Did you save the file correctly?
   - Did you run the seeder command?
   - Are there any error messages in the terminal?

### Important Warnings

⚠️ **Security Tips:**
- Never share your admin password with anyone
- Use a strong, unique password
- Don't commit passwords to GitHub (make sure `.env` files are in `.gitignore`)
- Change your password regularly

⚠️ **Before Changing Credentials:**
- Make sure you have access to your new email address
- Write down your new password in a secure location
- Test the new credentials immediately after changing them

⚠️ **If Something Goes Wrong:**
- Don't panic! Your website data is safe
- Contact your developer if you get stuck
- You can always revert to the previous seeder file from GitHub

### Troubleshooting

**Problem: "Admin user already exists" (Old message)**
- **Solution**: This message should not appear with the improved seeder. If you see it, the seeder will automatically update the existing admin. If you're trying to change the email and this message appears, the seeder found an admin with the new email you specified. Make sure the email in the seeder file matches the email you want to update.

**Problem: "Cannot connect to MongoDB"**
- **Solution**: Check your `.env` file and make sure `MONGODB_URI` is correct and accessible.

**Problem: "Command not found: npm"**
- **Solution**: Make sure Node.js is installed on your computer. Download it from nodejs.org if needed.

**Problem: "Permission denied"**
- **Solution**: Make sure you have write permissions to the file and the project folder.

### Need Help?

If you encounter any issues or feel unsure about any step, please contact your development team. They can help you change your credentials safely.

---

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
- [ ] Test admin login with current credentials
- [ ] Store admin credentials securely (if changed)
