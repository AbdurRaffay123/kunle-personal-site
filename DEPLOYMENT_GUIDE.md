# 🚀 Render Deployment Guide

This guide will help you deploy both the backend and frontend of your personal website to Render.

## 📋 Prerequisites

- GitHub repository with your code
- MongoDB Atlas cluster (already configured)
- Render account

## 🔧 Backend Deployment

### Step 1: Create Backend Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `kunle-personal-site-backend`
   - **Root Directory**: `personal-site-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Step 2: Environment Variables

Add these environment variables in Render dashboard:

```
NODE_ENV=production
PORT=4000
MONGODB_URI=mongodb+srv://kraffay96_db_user:yWBYIenmNxhRmmgr@kunle-personal-site.t5ykszd.mongodb.net/notes?retryWrites=true&w=majority&appName=Kunle-Personal-site
JWT_SECRET=c47df51804d067e3abc1b51d811a2ddbe2715b1b911eb3f47a409827f2fe657f46eb6d01c50b7d5fa47f14911c96821fccf6699460f1522127b60656b32cf4ae
JWT_EXPIRES_IN=1d
CLIENT_URL=https://kunle-personal-site-frontend.onrender.com
BCRYPT_SALT_ROUNDS=12
BASE_URL=https://kunle-personal-site-backend.onrender.com
MAX_FILE_SIZE=10485760
MAX_AVATAR_SIZE=2097152
MAX_DOCUMENT_SIZE=26214400
ALLOWED_IMAGE_TYPES=image/jpeg,image/jpg,image/png,image/gif,image/webp
ALLOWED_DOCUMENT_TYPES=application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,text/markdown
```

### Step 3: Deploy Backend

1. Click "Create Web Service"
2. Wait for deployment to complete
3. Note the backend URL (e.g., `https://kunle-personal-site-backend.onrender.com`)

## 🎨 Frontend Deployment

### Step 1: Create Frontend Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `kunle-personal-site-frontend`
   - **Root Directory**: `personal-site-frontend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

### Step 2: Environment Variables

Add these environment variables in Render dashboard:

```
NEXT_PUBLIC_API_URL=https://kunle-personal-site-backend.onrender.com
NEXT_PUBLIC_API_BASE_URL=https://kunle-personal-site-backend.onrender.com
NEXT_PUBLIC_SITE_URL=https://kunle-personal-site-frontend.onrender.com
NEXT_PUBLIC_GISCUS_REPO=
NEXT_PUBLIC_GISCUS_REPO_ID=
NEXT_PUBLIC_GISCUS_CATEGORY=
NEXT_PUBLIC_GISCUS_CATEGORY_ID=
```

### Step 3: Deploy Frontend

1. Click "Create Web Service"
2. Wait for deployment to complete
3. Note the frontend URL (e.g., `https://kunle-personal-site-frontend.onrender.com`)

## 🔄 Update URLs After Deployment

### Step 1: Update Backend CORS

After both services are deployed, update the backend CORS settings:

1. Go to your backend service in Render
2. Update the `CLIENT_URL` environment variable to your actual frontend URL
3. Redeploy the backend service

### Step 2: Update Frontend API URL

1. Go to your frontend service in Render
2. Update the `NEXT_PUBLIC_API_URL` environment variable to your actual backend URL
3. Redeploy the frontend service

## 🧪 Testing Deployment

### Backend Health Check
```bash
curl https://your-backend-url.onrender.com/health
```

### Frontend Access
Visit your frontend URL in a browser to test the complete application.

## 🔒 MongoDB Atlas Configuration

### Network Access
1. Go to MongoDB Atlas → Network Access
2. Add IP Address: `0.0.0.0/0` (Allow access from anywhere)
3. Or add Render's IP ranges if available

### Database User
- User: `kraffay96_db_user` (already configured)
- Ensure read/write permissions are enabled

## 📁 File Structure

```
kunle-personal-site/
├── personal-site-backend/
│   ├── .env.production
│   ├── package.json (updated)
│   └── src/
│       ├── app.js (CORS updated)
│       └── ...
├── personal-site-frontend/
│   ├── .env.production
│   ├── next.config.ts (updated)
│   ├── package.json (updated)
│   └── src/
│       ├── axios/Axios.ts (updated)
│       └── ...
└── DEPLOYMENT_GUIDE.md
```

## 🚨 Important Notes

1. **Environment Variables**: Never commit `.env` files to GitHub
2. **CORS**: Make sure CORS allows your frontend domain
3. **SSL**: Render provides free SSL certificates automatically
4. **File Uploads**: Consider using cloud storage for production file uploads
5. **Database**: MongoDB Atlas is already configured and ready

## 🔧 Troubleshooting

### Common Issues

1. **CORS Errors**: Update CORS settings in backend
2. **API Connection**: Check environment variables
3. **Build Failures**: Check Node.js version compatibility
4. **Database Connection**: Verify MongoDB Atlas network access

### Logs

Check Render service logs for debugging:
1. Go to your service dashboard
2. Click "Logs" tab
3. Review error messages and stack traces

## ✅ Deployment Checklist

- [ ] Backend deployed successfully
- [ ] Frontend deployed successfully
- [ ] Environment variables configured
- [ ] CORS settings updated
- [ ] API endpoints working
- [ ] Database connection verified
- [ ] File uploads working (if applicable)
- [ ] Authentication working
- [ ] All CRUD operations tested

## 🎉 Success!

Your personal website should now be live on Render with:
- Backend: `https://kunle-personal-site-backend.onrender.com`
- Frontend: `https://kunle-personal-site-frontend.onrender.com`
- Database: MongoDB Atlas (cloud-hosted)

Remember to update the URLs in this guide with your actual Render URLs after deployment!
