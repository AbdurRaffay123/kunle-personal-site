import ProjectPage from '@/components/PageCompnent/project/ProjectPage';
import { Metadata } from 'next';

// Static metadata for SEO
export const metadata: Metadata = {
  title: 'Projects | Full-Stack Development Portfolio',
  description: 'Explore my portfolio of web applications, mobile apps, AI projects, and research work. Each project showcases different technologies and problem-solving approaches.',
  keywords: ['projects', 'portfolio', 'web development', 'mobile apps', 'AI', 'machine learning', 'React', 'Next.js'],
  openGraph: {
    title: 'Projects | Kunle\'s Portfolio',
    description: 'Explore my portfolio of web applications, mobile apps, AI projects, and research work.',
    type: 'website',
  },
}

// This makes the page statically generated at build time
export default function ProjectsPage() {
  return <ProjectPage />
}

// Optional: Generate static params if you have dynamic routes
export async function generateStaticParams() {
  // If you have dynamic project routes, you can generate them here
  // For now, this is just for the main projects page
  return []
}