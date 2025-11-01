"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowLeft,
    ChevronDown,
    ChevronRight,
    Folder,
    Circle,
    List,
} from 'lucide-react';

// MUI-style Circular Progress Component
const CircularProgress = ({ size = 40, thickness = 4, className = "" }) => {
    return (
        <div 
            className={`relative inline-flex ${className}`}
            style={{ width: size, height: size }}
        >
            {/* Background circle */}
            <svg
                className="absolute inset-0"
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={(size - thickness) / 2}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={thickness}
                    className="opacity-20"
                />
            </svg>
            
            {/* Animated circle */}
            <svg
                className="absolute inset-0 animate-spin"
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                style={{
                    animation: 'mui-circular-rotate 1.4s linear infinite'
                }}
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={(size - thickness) / 2}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={thickness}
                    strokeLinecap="round"
                    strokeDasharray={`${Math.PI * (size - thickness)} ${Math.PI * (size - thickness)}`}
                    strokeDashoffset={0}
                    className="opacity-75"
                    style={{
                        animation: 'mui-circular-dash 1.4s ease-in-out infinite'
                    }}
                />
            </svg>
            
            <style jsx>{`
                @keyframes mui-circular-rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                
                @keyframes mui-circular-dash {
                    0% {
                        stroke-dasharray: 1px, ${Math.PI * (size - thickness)}px;
                        stroke-dashoffset: 0px;
                    }
                    50% {
                        stroke-dasharray: ${Math.PI * (size - thickness) * 0.5}px, ${Math.PI * (size - thickness)}px;
                        stroke-dashoffset: -${Math.PI * (size - thickness) * 0.25}px;
                    }
                    100% {
                        stroke-dasharray: ${Math.PI * (size - thickness) * 0.5}px, ${Math.PI * (size - thickness)}px;
                        stroke-dashoffset: -${Math.PI * (size - thickness) * 0.75}px;
                    }
                }
            `}</style>
        </div>
    );
};



interface Page {
    id: string;
    externalId?: string;
    title: string;
    subtitle?: string;
    content?: string;
    sections?: string[];
    blocks?: any[];
}

interface TOCHeading {
    id: string;
    text: string;
    level: number;
    element?: HTMLElement;
}

const Support = () => {
    const [pageData, setPageData] = useState<Page | null>(null);
    const [pageLoading, setPageLoading] = useState(false);
    
    const [selectedPage, setSelectedPage] = useState<Page | null>(null);
    const [selectedPageId, setSelectedPageId] = useState<string | null>(null);
    const [expandedCollections, setExpandedCollections] = useState<{[key: string]: boolean}>({});
    const [collectionPagesMap, setCollectionPagesMap] = useState<{[key: string]: any[]}>({});
    const [tocHeadings, setTocHeadings] = useState<TOCHeading[]>([]);
    const [activeHeading, setActiveHeading] = useState<string>('');

    const contentRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Extract headings from content
    const extractHeadings = (content: string): TOCHeading[] => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

        return Array.from(headingElements).map((heading, index) => {
            const level = parseInt(heading.tagName.substring(1));
            const text = heading.textContent || '';
            const id = heading.id || `heading-${index}`;

            return {
                id,
                text,
                level,
            };
        });
    };

    // Process content and add IDs to headings
    const processContentWithIds = (content: string): string => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

        headingElements.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `heading-${index}`;
            }
        });

        return doc.body.innerHTML;
    };

    // Setup intersection observer for active heading detection
    useEffect(() => {
        if (!contentRef.current || tocHeadings.length === 0) return;

        // Clean up previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -35% 0px',
            threshold: [0, 0.25, 0.5, 0.75, 1],
        };

        const headingPositions = new Map();

        observerRef.current = new IntersectionObserver((entries) => {
            // Update positions for all entries
            entries.forEach(entry => {
                headingPositions.set(entry.target.id, {
                    isIntersecting: entry.isIntersecting,
                    boundingClientRect: entry.boundingClientRect,
                    intersectionRatio: entry.intersectionRatio
                });
            });

            // Find all currently intersecting headings
            const intersecting = Array.from(headingPositions.entries())
                .filter(([id, data]) => data.isIntersecting)
                .map(([id, data]) => ({ id, ...data }));

            if (intersecting.length > 0) {
                // Sort by top position and take the one closest to the top
                intersecting.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                const activeId = intersecting[0].id;

                if (activeId !== activeHeading) {
                    setActiveHeading(activeId);
                }
            } else {
                // If no headings are intersecting, find the one just above the viewport
                const allPositions = Array.from(headingPositions.entries())
                    .map(([id, data]) => ({ id, top: data.boundingClientRect.top }))
                    .filter(item => item.top < window.innerHeight);

                if (allPositions.length > 0) {
                    allPositions.sort((a, b) => b.top - a.top); // Sort by top position, descending
                    const activeId = allPositions[0].id;

                    if (activeId !== activeHeading) {
                        setActiveHeading(activeId);
                    }
                }
            }
        }, observerOptions);

        // Wait for content to be rendered, then observe headings
        const timer = setTimeout(() => {
            tocHeadings.forEach((heading) => {
                const element = document.getElementById(heading.id);
                if (element && observerRef.current) {
                    observerRef.current.observe(element);
                }
            });
        }, 500);

        return () => {
            clearTimeout(timer);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [tocHeadings, activeHeading]);

    // Update TOC when page content changes
    useEffect(() => {
        if (selectedPage) {
            let allContent = '';

            // Combine content from blocks
            if (selectedPage.blocks && selectedPage.blocks.length > 0) {
                allContent += selectedPage.blocks.map(block => block.content).join('');
            }

            // Add raw content if available
            if (selectedPage.content) {
                allContent += selectedPage.content;
            }

            if (allContent) {
                const headings = extractHeadings(allContent);
                setTocHeadings(headings);
                if (headings.length > 0) {
                    setActiveHeading(headings[0].id);
                }
            } else {
                setTocHeadings([]);
                setActiveHeading('');
            }
        }
    }, [selectedPage]);

  

    // Update selected page when pageData changes
    useEffect(() => {
        if (pageData && selectedPageId) {
            setSelectedPage(pageData);
        }
    }, [pageData, selectedPageId]);

  

  

    const handleTOCClick = (headingId: string) => {
        const element = document.getElementById(headingId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
            setActiveHeading(headingId);
        }
    };

    const renderContent = (selectedPage: Page) => {
        let allContent = '';

        // Combine and process content from blocks
        if (selectedPage.blocks && selectedPage.blocks.length > 0) {
            allContent += selectedPage.blocks.map(block => block.content).join('');
        }

        // Add raw content if available
        if (selectedPage.content) {
            allContent += selectedPage.content;
        }

        if (allContent) {
            const processedContent = processContentWithIds(allContent);
            return (
                <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                />
            );
        }

        return null;
    };

  

    return (
        <div className="flex h-screen pt-20">
            {/* Sidebar */}
            <div className="w-96 bg-[#030047] text-white flex flex-col">
         

              
            </div>

            {/* Main Content */}
            <div className="flex-1 flex bg-white">
                {/* Content Area */}
                <div className="flex-1 overflow-y-auto" ref={contentRef}>
                    <div className="max-w-4xl mx-auto p-8">
                        {pageLoading ? (
                            <div className="flex items-center justify-center h-64">
                                <CircularProgress size={50} thickness={4} className="text-primary" />
                                {/* <span className="ml-3">Loading page...</span> */}
                            </div>
                        ) : selectedPage ? (
                            <div>
                                {/* Header */}
                                <h1 className="text-4xl font-semibold text-gray-900 mb-4">
                                    {selectedPage.title}
                                </h1>

                                {selectedPage.subtitle && (
                                    <p className="text-gray-600 italic text-lg mb-8 leading-relaxed">
                                        {selectedPage.subtitle}
                                    </p>
                                )}

                                <hr className="border-gray-200 mb-8" />

                                {/* Content */}
                                {renderContent(selectedPage)}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-64">
                                <div className="text-center">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                                        Select a page to view
                                    </h2>
                                    <p className="text-gray-600">
                                        Choose a page from the sidebar to see its content here.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Table of Contents - Right Sidebar */}
                {selectedPage && tocHeadings.length > 0 && (
                    <div className="w-80 bg-gray-50 border-l border-gray-200">
                        <div className="sticky top-0 p-6">
                            <div className="flex items-center mb-4">
                                <List className="w-5 h-5 mr-2 text-gray-600" />
                                <h3 className="text-lg font-semibold text-gray-900">
                                    In this article
                                </h3>
                            </div>

                            <nav className="space-y-1">
                                {tocHeadings.map((heading, index) => (
                                    <div
                                        key={heading.id}
                                        onClick={() => handleTOCClick(heading.id)}
                                        className={`py-2 px-3 text-sm transition-all duration-200 cursor-pointer hover:text-blue-600 ${
                                            activeHeading === heading.id
                                                ? 'text-blue-700 border-l-2 border-blue-500 font-medium bg-blue-50'
                                                : 'text-gray-600'
                                        }`}
                                        style={{
                                            paddingLeft: `${(heading.level - 1) * 12 + 12}px`,
                                        }}
                                    >
                                        <span className="line-clamp-2">
                                            {heading.text}
                                        </span>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Support;