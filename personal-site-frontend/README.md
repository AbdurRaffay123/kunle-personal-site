# Olukunle Owolabi - Personal Website Frontend

A modern, production-grade Next.js frontend for a personal portfolio and blog site featuring AI/ML projects, technical notes, and blog posts.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom component library
- **Markdown**: react-markdown with KaTeX and syntax highlighting
- **Theme**: next-themes (light/dark mode)
- **Comments**: Giscus integration (optional)
- **Animations**: Framer Motion

## 📋 Features

- ✅ Fully componentized architecture
- ✅ Server-side rendering (SSR) and Static Site Generation (SSG)
- ✅ Dark mode support with system preference detection
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with Open Graph and Twitter Cards
- ✅ Markdown rendering with:
  - Code syntax highlighting
  - KaTeX math equations
  - GitHub Flavored Markdown (GFM)
  - Image optimization with Next/Image
- ✅ Advanced filtering and search for notes and blog posts
- ✅ Giscus comments integration
- ✅ Accessible UI (WCAG compliant)
- ✅ TypeScript for type safety
- ✅ Modern blue-themed design system

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About/Contact page
│   │   ├── blog/              # Blog listing and detail pages
│   │   ├── notes/             # Notes listing and detail pages
│   │   ├── project/           # Projects page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Card/              # Card components (Blog, Note, Project)
│   │   ├── Comments/          # Giscus comments
│   │   ├── Footer/            # Site footer
│   │   ├── Header/            # Navigation header
│   │   ├── Hero/              # Hero section
│   │   ├── Layout/            # Layout components
│   │   ├── Markdown/          # Markdown renderer
│   │   ├── SEO/               # SEO meta tags
│   │   └── UI/                # Reusable UI components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions and API client
│   ├── providers/             # Context providers
│   ├── styles/                # Theme configuration
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
├── .env.example              # Environment variables template
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and npm
- A running backend API (see backend folder)

### Installation Steps

1. **Clone the repository** (if not already done):
   ```bash
   cd /path/to/kunle-personal-site/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your values:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Optional: Giscus comments
   NEXT_PUBLIC_GISCUS_REPO=your-github-username/your-repo
   NEXT_PUBLIC_GISCUS_REPO_ID=your-repo-id
   NEXT_PUBLIC_GISCUS_CATEGORY=General
   NEXT_PUBLIC_GISCUS_CATEGORY_ID=your-category-id
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (includes linting and type-checking)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check
- `npm run format` - Format code with Prettier

## 🔧 Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NEXT_PUBLIC_API_BASE_URL` | Yes | `http://localhost:4000` | Backend API base URL |
| `NEXT_PUBLIC_SITE_URL` | Yes | `http://localhost:3000` | Public site URL for SEO |
| `NEXT_PUBLIC_USE_MOCK_DATA` | No | `false` | Use mock data instead of API (dev mode) |
| `NEXT_PUBLIC_GISCUS_REPO` | No | - | GitHub repo for Giscus comments |
| `NEXT_PUBLIC_GISCUS_REPO_ID` | No | - | Giscus repository ID |
| `NEXT_PUBLIC_GISCUS_CATEGORY` | No | - | Giscus discussion category |
| `NEXT_PUBLIC_GISCUS_CATEGORY_ID` | No | - | Giscus category ID |

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#2563EB` (blue-600)
- **Primary Dark**: `#1D4ED8` (blue-700)
- **Accent Cyan**: `#06B6D4`
- **Neutral Light**: `#F8FAFC`
- **Neutral Dark**: `#0B1220`

### Typography

- **UI Font**: Inter
- **Heading Font**: Lora
- **Code Font**: Fira Code

## 🧪 Mock Data & Fallback States

The frontend includes **automatic fallback to mock data** for development without a backend!

### Using Mock Data Mode

Set in `.env.local`:
```env
NEXT_PUBLIC_USE_MOCK_DATA=true
```

**With mock data enabled:**
- ✅ 6 sample notes with full Markdown content
- ✅ 4 sample blog posts with images
- ✅ 6 sample projects (3 featured)
- ✅ All features work without backend
- ✅ Perfect for frontend development and demos

### Automatic Fallback

Even without mock mode, the frontend automatically falls back to mock data if:
- API is unreachable
- Backend returns errors
- Network issues occur

**Mock data location:** `src/data/mockData.ts`

### UI States

The frontend handles all states gracefully:

1. **Loading State** - Animated spinner with accessible labels
2. **Error State** - User-friendly error messages with retry button
3. **Empty State** - Helpful messages when no content matches filters
4. **Success State** - Beautiful card layouts with animations

See `UI_ENHANCEMENTS.md` for detailed information about the enhanced UI.

## 📡 API Integration

The frontend consumes these backend API endpoints:

- `GET /api/v1/notes` - List all notes
- `GET /api/v1/notes/:slug` - Get single note
- `GET /api/v1/blogs` - List all blog posts
- `GET /api/v1/blogs/:slug` - Get single blog post
- `GET /api/v1/projects` - List all projects
- `POST /api/v1/contact` - Submit contact form

## 🧪 Backend Setup

Ensure your backend is running and returns data in this format:

```typescript
// Notes response
GET /api/v1/notes
{
  "data": [
    {
      "slug": "example-note",
      "title": "Example Note",
      "excerpt": "Short description",
      "tags": ["tag1", "tag2"],
      "topic": "Category",
      "updatedAt": "2025-10-09T00:00:00Z",
      "readingTime": 5
    }
  ]
}

// Similar structure for blogs and projects
```

## 🔗 Giscus Comments Setup (Optional)

1. Go to [giscus.app](https://giscus.app)
2. Configure your GitHub repository
3. Enable Discussions in your repo settings
4. Copy the generated configuration values
5. Add them to your `.env.local`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the production bundle:
```bash
npm run build
npm run start
```

Ensure environment variables are set in your hosting platform.

## 🎯 Performance

- Lighthouse score: 90+
- Uses Next.js Image optimization
- Server-side rendering for fast initial load
- Code splitting for smaller bundles
- Lazy loading for images and components

## 🤝 Contributing

1. Follow the existing code structure
2. Ensure TypeScript types are defined
3. Run linting before committing: `npm run lint`
4. Format code: `npm run format`

## 📄 License

Private project for Olukunle Owolabi.

## 💬 Support

For issues or questions, please contact the development team.

---

**Built with ❤️ using Next.js and TypeScript**
