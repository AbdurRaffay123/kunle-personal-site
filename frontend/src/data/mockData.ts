/**
 * Mock data for development and API fallback
 */

import { NoteMeta, BlogMeta, Project } from "@/types";

export const mockNotes: NoteMeta[] = [
  {
    _id: "mock-1",
    slug: "intro-to-transformers",
    title: "Introduction to Transformer Architecture",
    excerpt:
      "A comprehensive guide to understanding the transformer architecture that powers modern LLMs like GPT and BERT.",
    tags: ["Deep Learning", "NLP", "Transformers", "AI"],
    topic: "Machine Learning",
    updatedAt: "2025-09-15T10:00:00Z",
    createdAt: "2025-09-01T10:00:00Z",
    readingTime: 12,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
  {
    _id: "mock-2",
    slug: "recommender-systems-deep-dive",
    title: "Building Scalable Recommender Systems",
    excerpt:
      "Learn how to build production-ready recommender systems using collaborative filtering and deep learning techniques.",
    tags: ["Recommender Systems", "ML", "Python", "Production"],
    topic: "Machine Learning",
    updatedAt: "2025-08-22T14:30:00Z",
    createdAt: "2025-08-20T10:00:00Z",
    readingTime: 15,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    _id: "mock-3",
    slug: "anomaly-detection-techniques",
    title: "Advanced Anomaly Detection Techniques",
    excerpt:
      "Explore statistical and ML-based approaches for detecting anomalies in time series and high-dimensional data.",
    tags: ["Anomaly Detection", "Statistics", "ML", "Time Series"],
    topic: "Machine Learning",
    updatedAt: "2025-07-10T09:00:00Z",
    createdAt: "2025-07-05T10:00:00Z",
    readingTime: 10,
  },
  {
    _id: "mock-4",
    slug: "python-async-patterns",
    title: "Async Programming Patterns in Python",
    excerpt:
      "Master asynchronous programming in Python with asyncio, including common patterns and best practices.",
    tags: ["Python", "Async", "Programming", "Best Practices"],
    topic: "Software Engineering",
    updatedAt: "2025-06-18T16:00:00Z",
    createdAt: "2025-06-15T10:00:00Z",
    readingTime: 8,
  },
  {
    _id: "mock-5",
    slug: "optimization-algorithms",
    title: "Optimization Algorithms for ML",
    excerpt:
      "Understanding gradient descent, Adam, and other optimization algorithms used in training machine learning models.",
    tags: ["Optimization", "Algorithms", "ML", "Theory"],
    topic: "Machine Learning",
    updatedAt: "2025-05-25T11:00:00Z",
    createdAt: "2025-05-20T10:00:00Z",
    readingTime: 14,
  },
  {
    _id: "mock-6",
    slug: "docker-kubernetes-guide",
    title: "Containerization with Docker & Kubernetes",
    excerpt:
      "Complete guide to containerizing ML applications and deploying them at scale using Kubernetes.",
    tags: ["Docker", "Kubernetes", "DevOps", "Deployment"],
    topic: "Software Engineering",
    updatedAt: "2025-04-12T13:00:00Z",
    createdAt: "2025-04-10T10:00:00Z",
    readingTime: 18,
  },
];

export const mockBlogs: BlogMeta[] = [
  {
    slug: "future-of-llms",
    title: "The Future of Large Language Models",
    description:
      "Exploring the next generation of LLMs and their potential impact on AI applications",
    excerpt:
      "As we witness the rapid evolution of large language models, it's crucial to understand where this technology is heading and what challenges lie ahead.",
    tags: ["LLM", "AI", "Future Tech", "Research"],
    thumbnail: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800",
    updatedAt: "2025-10-01T10:00:00Z",
    createdAt: "2025-10-01T10:00:00Z",
    readingTime: 8,
    author: "Olukunle Owolabi",
  },
  {
    slug: "ml-production-lessons",
    title: "Lessons from Deploying ML at Scale",
    description:
      "Real-world insights from building and maintaining production ML systems serving millions of users",
    excerpt:
      "After years of deploying ML systems at Meta and beyond, here are the critical lessons I've learned about production ML.",
    tags: ["ML Engineering", "Production", "Best Practices", "Meta"],
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
    updatedAt: "2025-09-20T14:00:00Z",
    createdAt: "2025-09-20T14:00:00Z",
    readingTime: 12,
    author: "Olukunle Owolabi",
  },
  {
    slug: "fraud-detection-systems",
    title: "Building Real-Time Fraud Detection Systems",
    description:
      "A deep dive into architecting and deploying fraud detection systems that operate at scale",
    excerpt:
      "Fraud detection requires a unique combination of speed, accuracy, and adaptability. Here's how to build systems that deliver all three.",
    tags: ["Fraud Detection", "Real-Time", "ML Systems", "Security"],
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    updatedAt: "2025-08-15T16:00:00Z",
    createdAt: "2025-08-15T16:00:00Z",
    readingTime: 15,
    author: "Olukunle Owolabi",
  },
  {
    slug: "phd-journey-tufts",
    title: "My PhD Journey: From Research to Industry",
    description:
      "Reflections on transitioning from academic research at Tufts to applied AI engineering at Meta",
    excerpt:
      "The journey from PhD research to industry AI engineering taught me invaluable lessons about bridging theory and practice.",
    tags: ["PhD", "Career", "Research", "Industry"],
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    updatedAt: "2025-07-05T10:00:00Z",
    createdAt: "2025-07-05T10:00:00Z",
    readingTime: 10,
    author: "Olukunle Owolabi",
  },
];

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Neural Recommender System",
    description:
      "A production-ready recommender system using deep learning and collaborative filtering, serving 10M+ users with sub-100ms latency.",
    tech: ["Python", "TensorFlow", "PyTorch", "Redis", "Kubernetes"],
    tags: ["ML", "Production", "Scale"],
    repoUrl: "https://github.com/olukunle/neural-recommender",
    liveUrl: "https://demo.neural-recommender.io",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    featured: true,
  },
  {
    id: "2",
    title: "Real-Time Anomaly Detection Platform",
    description:
      "End-to-end platform for detecting anomalies in streaming data using ensemble methods and autoencoders.",
    tech: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "FastAPI"],
    tags: ["ML", "Real-Time", "Detection"],
    repoUrl: "https://github.com/olukunle/anomaly-platform",
    liveUrl: "https://anomaly-demo.owolabi.ai",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
    featured: true,
  },
  {
    id: "3",
    title: "LLM Fine-Tuning Pipeline",
    description:
      "Automated pipeline for fine-tuning large language models on custom datasets with distributed training support.",
    tech: ["Python", "Hugging Face", "DeepSpeed", "Ray", "MLflow"],
    tags: ["LLM", "NLP", "Training"],
    repoUrl: "https://github.com/olukunle/llm-pipeline",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800",
    featured: true,
  },
  {
    id: "4",
    title: "Time Series Forecasting API",
    description:
      "RESTful API for forecasting time series data using ARIMA, Prophet, and LSTM models with automatic model selection.",
    tech: ["Python", "FastAPI", "Prophet", "LSTM", "Docker"],
    tags: ["Forecasting", "API", "ML"],
    repoUrl: "https://github.com/olukunle/forecast-api",
    liveUrl: "https://forecast-api.owolabi.ai",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    featured: false,
  },
  {
    id: "5",
    title: "ML Model Monitoring Dashboard",
    description:
      "Comprehensive dashboard for monitoring ML model performance, data drift, and system health in production.",
    tech: ["React", "TypeScript", "Python", "Prometheus", "Grafana"],
    tags: ["Monitoring", "MLOps", "Dashboard"],
    repoUrl: "https://github.com/olukunle/ml-monitor",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    featured: false,
  },
  {
    id: "6",
    title: "Distributed Training Framework",
    description:
      "Framework for distributed deep learning training across multiple GPUs and nodes with fault tolerance.",
    tech: ["Python", "PyTorch", "Horovod", "NCCL", "Ray"],
    tags: ["Distributed", "Training", "GPU"],
    repoUrl: "https://github.com/olukunle/distributed-training",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    featured: false,
  },
];

