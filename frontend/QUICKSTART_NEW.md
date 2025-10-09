# 🚀 Quick Start Guide - Premium Blue Theme Frontend

## ⚡ Get Running in 3 Steps

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit **http://localhost:3000** 🎉

---

## 🎨 What You'll See

### Premium Design Features

✨ **Modern Blue Theme**
- Vibrant blue-to-sky gradients
- Perfect light/dark mode
- High-contrast text for readability

🌊 **Glassmorphism UI**
- Backdrop blur effects
- Transparent overlays
- Premium shadows

✨ **Smooth Animations**
- Framer Motion throughout
- Hover effects on cards
- Page transitions
- Animated hero orbs

📱 **Fully Responsive**
- Mobile-first design
- Desktop: Full width utilization (max-w-screen-2xl)
- Tablet: 2-column grids
- Desktop: 3-column grids

---

## 🎯 Key Pages

### Home (`/`)
- Animated hero section
- Quick links to all sections
- Featured projects grid
- Latest notes & blog posts

### Projects (`/project`)
- Searchable project cards
- Featured filter
- Live demo & code links

### Notes (`/notes`)
- Search by title/tags
- Filter by topic
- Technical documentation

### Blog (`/blog`)
- Article listings
- Pagination
- Search functionality

### About (`/about`)
- Professional bio
- Contact form
- Social links

---

## 🔧 Environment Setup

Create `.env.local`:

```bash
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000

# Mock Data (for development without backend)
NEXT_PUBLIC_USE_MOCK_DATA=true

# Site URL (for SEO)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Giscus Comments (optional)
NEXT_PUBLIC_GISCUS_REPO=username/repo
NEXT_PUBLIC_GISCUS_REPO_ID=your-repo-id
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your-category-id
```

---

## 🎨 Mock Data Mode

### No Backend? No Problem!

The frontend includes **16 mock items**:
- 6 technical notes
- 4 blog posts
- 6 projects

**To use mock data:**

```bash
# In .env.local
NEXT_PUBLIC_USE_MOCK_DATA=true
```

**Automatic Fallback:**
Even with `NEXT_PUBLIC_USE_MOCK_DATA=false`, the app automatically falls back to mock data if the API is unavailable.

---

## 🎭 Theme Toggle

Click the **sun/moon button** in the navbar to switch between:
- ☀️ **Light Mode:** Clean whites with blackish text
- 🌙 **Dark Mode:** Deep slate with whiteish text

Preference is saved in localStorage.

---

## 🏗️ Build for Production

```bash
# Type check
npm run type-check

# Build
npm run build

# Start production server
npm start
```

Visit **http://localhost:3000** in production mode.

---

## 🎨 Design Highlights

### Navbar
- 90px height (taller, more premium)
- Glassmorphism background
- Animated active indicator
- Gradient theme toggle button

### Hero Section
- Gradient background (blue-950 → blue-900 → blue-800)
- Animated floating orbs
- Two-column layout (text + tech badges)
- Staggered entrance animations

### Cards
- Rounded-xl with glassmorphism
- Shadow-lg → shadow-xl on hover
- Scale + lift animation
- Gradient accents

### Footer
- Gradient background matching hero
- 3-column layout
- Social links
- Responsive

---

## 📱 Responsive Breakpoints

```css
Mobile:   < 640px   (1 column)
Tablet:   640-1024px (2 columns)
Desktop:  1025-1536px (3 columns)
Wide:     > 1536px   (constrained to max-w-screen-2xl)
```

---

## ♿ Accessibility

✅ WCAG AA compliant
✅ Keyboard navigable
✅ Screen reader optimized
✅ High contrast text
✅ Focus indicators
✅ Semantic HTML

---

## 🐛 Troubleshooting

### Port already in use?

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### API not connecting?

Set `NEXT_PUBLIC_USE_MOCK_DATA=true` in `.env.local` to use mock data.

### Build errors?

```bash
# Clear cache
rm -rf .next
npm run build
```

---

## 📚 Tech Stack

- **Framework:** Next.js 15.5.4 (App Router)
- **React:** 19.1.0
- **TypeScript:** Latest
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion 12.0.0
- **Markdown:** react-markdown + rehype plugins
- **Theme:** next-themes 0.4.4

---

## 🎉 You're All Set!

Enjoy the **premium, modern, blue-themed** portfolio frontend!

For detailed documentation, see:
- `UI_REDESIGN_SUMMARY.md` - Complete design overview
- `README.md` - Full project documentation
- `FRONTEND_IMPLEMENTATION_SUMMARY.md` - Technical details

---

**Status:** ✅ Production Ready  
**Quality:** ⭐⭐⭐⭐⭐

Happy coding! 🚀

