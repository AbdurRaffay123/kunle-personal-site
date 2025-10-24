(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/PageCompnent/project/ProjectPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Move projects data to a separate function or file for better organization
const getProjectsData = ()=>{
    return [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
            image: "/images/projects/ecommerce-preview.jpg",
            category: "web",
            technologies: [
                "Next.js",
                "TypeScript",
                "Stripe",
                "PostgreSQL"
            ],
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
            technologies: [
                "React Native",
                "Firebase",
                "Redux"
            ],
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
            technologies: [
                "Python",
                "TensorFlow",
                "FastAPI",
                "Docker"
            ],
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
            technologies: [
                "D3.js",
                "React",
                "Python",
                "MongoDB"
            ],
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
            technologies: [
                "Vue.js",
                "Node.js",
                "Redis",
                "AWS"
            ],
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
            technologies: [
                "Flutter",
                "Arduino",
                "MQTT",
                "Firebase"
            ],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: false,
            createdAt: "2024-06-18"
        }
    ];
};
const ProjectPage = ()=>{
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    // Use useMemo to optimize filtering performance
    const projects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectPage.useMemo[projects]": ()=>getProjectsData()
    }["ProjectPage.useMemo[projects]"], []);
    const filters = [
        {
            id: 'all',
            label: 'All Projects'
        },
        {
            id: 'web',
            label: 'Web Development'
        },
        {
            id: 'mobile',
            label: 'Mobile Apps'
        },
        {
            id: 'ai',
            label: 'AI/ML'
        },
        {
            id: 'research',
            label: 'Research'
        }
    ];
    const filteredProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectPage.useMemo[filteredProjects]": ()=>{
            return activeFilter === 'all' ? projects : projects.filter({
                "ProjectPage.useMemo[filteredProjects]": (project)=>project.category === activeFilter
            }["ProjectPage.useMemo[filteredProjects]"]);
        }
    }["ProjectPage.useMemo[filteredProjects]"], [
        projects,
        activeFilter
    ]);
    const featuredProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectPage.useMemo[featuredProjects]": ()=>{
            return projects.filter({
                "ProjectPage.useMemo[featuredProjects]": (project)=>project.featured
            }["ProjectPage.useMemo[featuredProjects]"]);
        }
    }["ProjectPage.useMemo[featuredProjects]"], [
        projects
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl font-serif",
                            children: "My Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto font-source",
                            children: "Explore my portfolio of web applications, mobile apps, AI projects, and research work. Each project represents a unique challenge and learning experience."
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-8 font-serif",
                            children: "Featured Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                            children: featuredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-video bg-gray-200 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: project.image,
                                                    alt: project.title,
                                                    className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 left-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium",
                                                        children: "Featured"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-900 mb-3 font-serif",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mb-4 leading-relaxed font-source",
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2 mb-4",
                                                    children: project.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm",
                                                            children: tech
                                                        }, tech, false, {
                                                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: project.liveUrl,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200",
                                                            children: "Live Demo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: project.githubUrl,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200",
                                                            children: "GitHub"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, project.id, true, {
                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-gray-900 mb-6 font-serif",
                            children: "All Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 sm:gap-4",
                            children: filters.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveFilter(filter.id),
                                    className: "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ".concat(activeFilter === filter.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'),
                                    children: filter.label
                                }, filter.id, false, {
                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8",
                    children: filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-video bg-gray-200 relative overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: project.image,
                                        alt: project.title,
                                        className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-gray-900 mb-2 font-serif",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4 text-sm leading-relaxed font-source line-clamp-3",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1 mb-4",
                                            children: [
                                                project.technologies.slice(0, 3).map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs",
                                                        children: tech
                                                    }, tech, false, {
                                                        fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                project.technologies.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs",
                                                    children: [
                                                        "+",
                                                        project.technologies.length - 3,
                                                        " more"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: project.liveUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm",
                                                    children: "Live Demo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: project.githubUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex-1 border border-gray-300 text-gray-700 text-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm",
                                                    children: "GitHub"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, project.id, true, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                filteredProjects.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-400 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "mx-auto h-12 w-12",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V9a4 4 0 00-4-4H9a4 4 0 00-4 4v4h14V6z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                    lineNumber: 250,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "No projects found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "Try selecting a different filter category."
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                    lineNumber: 247,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 text-center bg-white rounded-xl p-8 shadow-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-900 mb-4 font-serif",
                            children: "Interested in Working Together?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6 font-source",
                            children: "I'm always open to discussing new opportunities and exciting projects."
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium",
                            children: "Get In Touch"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/PageCompnent/project/ProjectPage.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProjectPage, "LfezHyXg7FySAEBF5lixblnO5C0=");
_c = ProjectPage;
const __TURBOPACK__default__export__ = ProjectPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_PageCompnent_project_ProjectPage_tsx_060af9ab._.js.map