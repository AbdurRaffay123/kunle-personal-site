'use client'
import React, { useState, useMemo } from 'react'

// Move projects data to a separate function or file for better organization
const getProjectsData = () => {
  return [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "/images/projects/ecommerce-preview.jpg", // Use actual image paths
      category: "web",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Task Management Mobile App",
      description: "React Native app for task management with offline sync, push notifications, and collaborative features.",
      image: "/images/projects/task-app-preview.jpg",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://play.google.com",
      githubUrl: "https://github.com/example",
      featured: true,
      createdAt: "2024-02-20"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Machine learning model that generates creative content using natural language processing and deep learning.",
      image: "/images/projects/ai-content-preview.jpg",
      category: "ai",
      technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      createdAt: "2024-03-10"
    },
    {
      id: 4,
      title: "Research Data Visualization",
      description: "Interactive dashboard for visualizing complex research data with real-time updates and collaborative analysis tools.",
      image: "/images/projects/data-viz-preview.jpg",
      category: "research",
      technologies: ["D3.js", "React", "Python", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      createdAt: "2024-04-05"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Comprehensive social media management platform with analytics, scheduling, and multi-platform posting.",
      image: "/images/projects/social-dashboard-preview.jpg",
      category: "web",
      technologies: ["Vue.js", "Node.js", "Redis", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      createdAt: "2024-05-12"
    },
    {
      id: 6,
      title: "IoT Home Automation",
      description: "Smart home automation system with mobile app control, voice commands, and energy monitoring.",
      image: "/images/projects/iot-home-preview.jpg",
      category: "mobile",
      technologies: ["Flutter", "Arduino", "MQTT", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      createdAt: "2024-06-18"
    }
  ]
}

const ProjectPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  // Use useMemo to optimize filtering performance
  const projects = useMemo(() => getProjectsData(), [])
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'research', label: 'Research' }
  ]

  const filteredProjects = useMemo(() => {
    return activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter)
  }, [projects, activeFilter])

  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.featured)
  }, [projects])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl font-serif">
            My Projects
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto font-source">
            Explore my portfolio of web applications, mobile apps, AI projects, and research work. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed font-source">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">All Projects</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-serif">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed font-source line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V9a4 4 0 00-4-4H9a4 4 0 00-4 4v4h14V6z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different filter category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
            Interested in Working Together?
          </h2>
          <p className="text-gray-600 mb-6 font-source">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage