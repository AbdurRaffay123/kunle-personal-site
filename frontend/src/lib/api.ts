/**
 * API client for backend communication with mock data fallback
 */

import type { APIResponse, NoteMeta, Note, BlogMeta, Blog, Project, ContactFormData } from "@/types";
import { mockNotes, mockBlogs, mockProjects } from "@/data/mockData";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";
const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true";

// Log mock data status once on startup
let hasLoggedMockDataStatus = false;
function logMockDataStatus() {
  if (!hasLoggedMockDataStatus && process.env.NODE_ENV === 'development') {
    hasLoggedMockDataStatus = true;
    if (USE_MOCK_DATA) {
      console.log('🎨 Running with MOCK DATA (NEXT_PUBLIC_USE_MOCK_DATA=true)');
    } else {
      console.log(`🌐 API configured: ${API_BASE_URL} (will fallback to mock data if unavailable)`);
    }
  }
}

class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public data?: unknown,
  ) {
    super(message);
    this.name = "APIError";
  }
}

async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new APIError(
        `API request failed: ${response.statusText}`,
        response.status,
        await response.json().catch(() => null),
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}

// Notes API
export async function getNotes(): Promise<NoteMeta[]> {
  logMockDataStatus();
  
  if (USE_MOCK_DATA) {
    return Promise.resolve(mockNotes);
  }
  
  try {
    const response = await fetchAPI<APIResponse<NoteMeta[]>>("/api/v1/notes", {
      cache: "no-store",
    });
    return response.data;
  } catch (error) {
    // Silent fallback to mock data
    return mockNotes;
  }
}

export async function getNoteBySlug(slug: string): Promise<Note> {
  logMockDataStatus();
  
  if (USE_MOCK_DATA) {
    const note = mockNotes.find((n) => n.slug === slug);
    if (!note) throw new Error("Note not found");
    return {
      ...note,
      content: generateMockContent(note.title),
    };
  }
  
  try {
    const response = await fetchAPI<APIResponse<Note>>(`/api/v1/notes/${slug}`, {
      cache: "no-store",
    });
    return response.data;
  } catch (error) {
    // Silent fallback to mock data
    const note = mockNotes.find((n) => n.slug === slug);
    if (!note) throw error;
    return {
      ...note,
      content: generateMockContent(note.title),
    };
  }
}

// Blogs API
export async function getBlogs(): Promise<BlogMeta[]> {
  logMockDataStatus();
  
  if (USE_MOCK_DATA) {
    return Promise.resolve(mockBlogs);
  }
  
  try {
    const response = await fetchAPI<APIResponse<BlogMeta[]>>("/api/v1/blogs", {
      cache: "no-store",
    });
    return response.data;
  } catch (error) {
    // Silent fallback to mock data
    return mockBlogs;
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
  logMockDataStatus();
  
  if (USE_MOCK_DATA) {
    const blog = mockBlogs.find((b) => b.slug === slug);
    if (!blog) throw new Error("Blog not found");
    return {
      ...blog,
      content: generateMockContent(blog.title),
    };
  }
  
  try {
    const response = await fetchAPI<APIResponse<Blog>>(`/api/v1/blogs/${slug}`, {
      cache: "no-store",
    });
    return response.data;
  } catch (error) {
    // Silent fallback to mock data
    const blog = mockBlogs.find((b) => b.slug === slug);
    if (!blog) throw error;
    return {
      ...blog,
      content: generateMockContent(blog.title),
    };
  }
}

// Projects API
export async function getProjects(): Promise<Project[]> {
  logMockDataStatus();
  
  if (USE_MOCK_DATA) {
    return Promise.resolve(mockProjects);
  }
  
  try {
    const response = await fetchAPI<APIResponse<Project[]>>("/api/v1/projects", {
      cache: "no-store",
    });
    return response.data;
  } catch (error) {
    // Silent fallback to mock data
    return mockProjects;
  }
}

// Contact API
export async function submitContact(data: ContactFormData): Promise<{ message: string }> {
  if (USE_MOCK_DATA) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { message: "Thank you for your message! (Demo mode - message not sent)" };
  }
  
  const response = await fetchAPI<{ message: string }>("/api/v1/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response;
}

// Helper function to generate mock content
function generateMockContent(title: string): string {
  return `# ${title}

This is a **demo content** generated for development purposes. The actual content will be loaded from the backend API once it's connected.

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

## Key Concepts

- **Concept 1**: Important foundational idea
- **Concept 2**: Building on the basics
- **Concept 3**: Advanced applications

### Code Example

\`\`\`python
def example_function():
    """
    This is a sample code block to demonstrate
    syntax highlighting in the markdown renderer.
    """
    result = sum([1, 2, 3, 4, 5])
    return result

# Usage
output = example_function()
print(f"Result: {output}")
\`\`\`

## Mathematical Notation

Here's an example of inline math: $E = mc^2$

And a block equation:

$$
\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}
$$

## Conclusion

This mock content demonstrates all the features of our markdown renderer including:

1. Headers and formatting
2. Code syntax highlighting
3. Mathematical equations with KaTeX
4. Lists and tables

> **Note**: Connect the backend API to see real content!

---

*This is demo content. Real content will be much more detailed and informative.*
`;
}


