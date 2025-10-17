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
      credentials: 'include', // Include cookies for authentication
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
    const response = await fetchAPI<{ success: boolean; data: { notes: NoteMeta[] } }>("/api/notes/public", {
      cache: "no-store",
    });
    return response.data.notes;
  } catch (error) {
    // Silent fallback to mock data
    return mockNotes;
  }
}

export async function getNoteBySlug(id: string): Promise<Note> {
  logMockDataStatus();
  
  if (USE_MOCK_DATA) {
    const note = mockNotes.find((n) => n._id === id);
    if (!note) throw new Error("Note not found");
    return {
      ...note,
      content: generateMockContent(note.title),
    };
  }
  
  try {
    const response = await fetchAPI<{ success: boolean; data: { note: Note } }>(`/api/notes/public/${id}`, {
      cache: "no-store",
    });
    return response.data.note;
  } catch (error) {
    // Silent fallback to mock data
    const note = mockNotes.find((n) => n._id === id);
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

// Note: getBlogBySlug function removed since blogs now link directly to external sites
// No blog detail pages are needed anymore

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

// Admin Notes API (requires authentication via cookies)
export async function createNote(data: { title: string; content: string; topic: string; tags?: string[] }): Promise<Note> {
  const response = await fetchAPI<{ success: boolean; data: { note: Note } }>("/api/notes", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.data.note;
}

export async function updateNote(id: string, data: Partial<{ title: string; content: string; topic: string; tags: string[] }>): Promise<Note> {
  const response = await fetchAPI<{ success: boolean; data: { note: Note } }>(`/api/notes/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return response.data.note;
}

export async function deleteNote(id: string): Promise<{ message: string }> {
  const response = await fetchAPI<{ success: boolean; data: { deletedNote: any } }>(`/api/notes/${id}`, {
    method: "DELETE",
  });
  return { message: response.data.deletedNote ? "Note deleted successfully" : "Note deleted" };
}

export async function getAdminNotes(): Promise<Note[]> {
  const response = await fetchAPI<{ success: boolean; data: { notes: Note[] } }>("/api/notes", {
    cache: "no-store",
  });
  return response.data.notes;
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

// Dashboard API functions
export const getDashboardStats = async (): Promise<{
  totalBlogs: number;
  totalNotes: number;
  totalProjects: number;
  totalResearch: number;
  totalComments: number;
}> => {
  try {
    const response = await fetchAPI<{
      success: boolean;
      data: {
        totalBlogs: number;
        totalNotes: number;
        totalProjects: number;
        totalResearch: number;
        totalComments: number;
      };
    }>('/api/dashboard/stats', {
      method: 'GET',
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    // Return mock data as fallback
    return {
      totalBlogs: 12,
      totalNotes: 8,
      totalProjects: 15,
      totalResearch: 6,
      totalComments: 24,
    };
  }
};

export const getRecentActivity = async (limit: number = 10): Promise<Array<{
  id: string;
  type: string;
  action: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  user: string;
  postId?: string;
  postType?: string;
}>> => {
  try {
    const response = await fetchAPI<{
      success: boolean;
      data: {
        activities: Array<{
          id: string;
          type: string;
          action: string;
          title: string;
          createdAt: string;
          updatedAt: string;
          user: string;
          postId?: string;
          postType?: string;
        }>;
      };
    }>(`/api/dashboard/activity?limit=${limit}`, {
      method: 'GET',
    });
    return response.data.activities;
  } catch (error) {
    console.error('Error fetching recent activity:', error);
    // Return mock data as fallback
    return [
      { 
        id: '1',
        action: "New blog post published", 
        title: "Getting Started with Next.js",
        createdAt: "2025-01-15T14:00:00Z",
        updatedAt: "2025-01-15T14:00:00Z",
        type: "blog",
        user: "You"
      },
      { 
        id: '2',
        action: "Comment approved", 
        title: "Great article on React hooks!",
        createdAt: "2025-01-15T12:00:00Z",
        updatedAt: "2025-01-15T12:00:00Z",
        type: "comment",
        user: "John Doe"
      },
      { 
        id: '3',
        action: "Project updated", 
        title: "Personal Portfolio Website",
        createdAt: "2025-01-15T10:00:00Z",
        updatedAt: "2025-01-15T10:00:00Z",
        type: "project",
        user: "You"
      },
      { 
        id: '4',
        action: "Note created", 
        title: "Meeting notes from client call",
        createdAt: "2025-01-14T16:00:00Z",
        updatedAt: "2025-01-14T16:00:00Z",
        type: "note",
        user: "You"
      },
      { 
        id: '5',
        action: "Research item added", 
        title: "AI in Web Development",
        createdAt: "2025-01-13T09:00:00Z",
        updatedAt: "2025-01-13T09:00:00Z",
        type: "research",
        user: "You"
      },
    ];
  }
};
