# Quick Start Guide

Get the frontend running in 3 minutes!

## Prerequisites

- Node.js 18+ and npm installed
- Backend API running (or will mock data for now)

## Steps

### 1. Install Dependencies

```bash
cd /path/to/kunle-personal-site/frontend
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## What You'll See

- **Home** (`/`) - Hero section with quick links and latest content previews
- **Projects** (`/project`) - Projects listing with filtering
- **Notes** (`/notes`) - Technical notes with search and topic filtering
- **Blog** (`/blog`) - Blog posts with pagination
- **About** (`/about`) - Contact form and bio

## Common Commands

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # Run TypeScript checks
npm run format       # Format code with Prettier
```

## Testing Without Backend

If your backend isn't ready yet, the frontend will gracefully handle API errors and show empty states. You can:

1. Start the frontend anyway - it will show "no content available" messages
2. Mock the API responses by updating `src/lib/api.ts` to return dummy data
3. Or wait for the backend to be ready

## Dark Mode

Click the sun/moon icon in the header to toggle between light and dark themes!

## File Structure Overview

```
src/
├── app/              # Pages (Next.js App Router)
├── components/       # React components
│   ├── Card/        # Card components
│   ├── UI/          # Reusable UI (Button, Tag, etc.)
│   ├── Header/      # Navigation
│   └── ...
├── lib/             # Utilities and API client
├── hooks/           # Custom React hooks
├── types/           # TypeScript types
└── styles/          # Theme config
```

## Need Help?

- Check `README.md` for detailed documentation
- Check `KNOWN_ISSUES.md` for known compatibility issues
- Check `FRONTEND_IMPLEMENTATION_SUMMARY.md` for complete implementation details

## Next Steps

1. ✅ Frontend is running
2. 🔧 Start the backend API
3. 📝 Populate content (notes, blogs, projects)
4. 🎨 Customize colors in `tailwind.config.ts`
5. 🚀 Deploy to Vercel or your preferred platform

Happy coding! 🚀

