(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/Admin/AdminSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Admin Sidebar - Navigation menu
 * Updated to include Notepad link
 */ __turbopack_context__.s([
    "default",
    ()=>AdminSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/HomeIcon.js [app-client] (ecmascript) <export default as HomeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript) <export default as DocumentTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/BookOpenIcon.js [app-client] (ecmascript) <export default as BookOpenIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$FolderIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/FolderIcon.js [app-client] (ecmascript) <export default as FolderIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/AcademicCapIcon.js [app-client] (ecmascript) <export default as AcademicCapIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-client] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-client] (ecmascript) <export default as UserIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const navigation = [
    {
        name: "Dashboard",
        href: "/admin/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeIcon$3e$__["HomeIcon"]
    },
    {
        name: "Blogs",
        href: "/admin/dashboard/blogs",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"]
    },
    {
        name: "Notes",
        href: "/admin/dashboard/notes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"]
    },
    {
        name: "Projects",
        href: "/admin/dashboard/projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$FolderIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__["FolderIcon"]
    },
    {
        name: "Research",
        href: "/admin/dashboard/research",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__["AcademicCapIcon"]
    },
    {
        name: "Comments",
        href: "/admin/dashboard/comments",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"]
    },
    {
        name: "About",
        href: "/admin/dashboard/about",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"]
    }
];
function AdminSidebar(param) {
    let { isOpen, onClose } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-y-0 left-0 z-50 w-16 md:w-20 lg:w-64 transform transition-all duration-300 ease-in-out md:translate-x-0 ".concat(isOpen ? "translate-x-0" : "-translate-x-full"),
                style: {
                    backgroundColor: 'var(--surface)',
                    color: 'var(--foreground)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-16 px-2 md:px-4 lg:px-6 border-b",
                            style: {
                                borderColor: 'var(--border)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "hidden lg:block text-xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent",
                                    children: "Admin Panel"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:hidden w-8 h-8 bg-gradient-to-r from-blue-400 to-sky-400 rounded-lg flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold text-sm",
                                        children: "A"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex-1 px-2 md:px-3 lg:px-6 py-6 space-y-2",
                            children: navigation.map((item)=>{
                                // Check if current path matches exactly or starts with the href for nested routes
                                const isActive = pathname === item.href || item.href !== "/admin/dashboard" && pathname.startsWith(item.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: onClose,
                                    className: "flex items-center px-2 md:px-3 lg:px-4 py-3 rounded-md text-base font-medium transition-all group relative ".concat(isActive ? "bg-blue-700 shadow-md" : "hover:bg-slate-700"),
                                    style: {
                                        color: isActive ? 'white' : 'var(--text-primary)'
                                    },
                                    title: item.name,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            className: "h-5 w-5 lg:mr-3 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden lg:block",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 lg:hidden",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-4 border-t",
                            style: {
                                borderColor: 'var(--border)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                style: {
                                    color: 'var(--text-secondary)'
                                },
                                children: "Admin Panel v1.0"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminSidebar.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AdminSidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AdminSidebar;
var _c;
__turbopack_context__.k.register(_c, "AdminSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Admin/LogoutModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Logout Confirmation Modal
 */ __turbopack_context__.s([
    "default",
    ()=>LogoutModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function LogoutModal(param) {
    let { isOpen, onClose, onConfirm, isLoading = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-lg shadow-xl z-50 p-6",
                    style: {
                        backgroundColor: 'var(--card)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-6 w-6 text-red-600 dark:text-red-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "1.5",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                                        lineNumber: 47,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold mb-2",
                                style: {
                                    color: 'var(--text-primary)'
                                },
                                children: "Confirm Logout"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-6",
                                style: {
                                    color: 'var(--text-primary)'
                                },
                                children: "Are you sure you want to logout? You will be redirected to the login page."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        disabled: isLoading,
                                        className: "px-4 py-2 text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                        style: {
                                            color: 'var(--text-primary)',
                                            backgroundColor: 'var(--surface)',
                                            borderColor: 'var(--border)',
                                            border: '1px solid'
                                        },
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onConfirm,
                                        disabled: isLoading,
                                        className: "px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 23
                                                }, this),
                                                "Logging out..."
                                            ]
                                        }, void 0, true) : "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Admin/LogoutModal.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = LogoutModal;
var _c;
__turbopack_context__.k.register(_c, "LogoutModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Admin/AdminHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js [app-client] (ecmascript) <export default as Bars3Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$LogoutModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Admin/LogoutModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UI/ThemeToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AdminHeader(param) {
    let { title, onMenuClick } = param;
    _s();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showLogoutModal, setShowLogoutModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = ()=>{
        setShowLogoutModal(true);
    };
    const confirmLogout = ()=>{
        logout();
        setShowLogoutModal(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex justify-between items-center py-4 px-6 lg:px-8 shadow-md border-b",
        style: {
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onMenuClick,
                        className: "md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors",
                        style: {
                            color: 'var(--text-primary)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__["Bars3Icon"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold",
                        style: {
                            color: 'var(--text-primary)'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:flex items-center gap-2 text-sm px-5",
                        style: {
                            color: 'var(--text-primary)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Welcome,"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: user.email || "Admin"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "minimal"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogout,
                        className: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors font-medium cursor-pointer hover:scale-105",
                        children: "Sign Out"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$LogoutModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showLogoutModal,
                onClose: ()=>setShowLogoutModal(false),
                onConfirm: confirmLogout
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Admin/AdminHeader.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(AdminHeader, "ilssYPqLRbfVJtJP9i3DUiky50o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AdminHeader;
var _c;
__turbopack_context__.k.register(_c, "AdminHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Admin/AdminLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Admin Layout - Shared layout for all admin pages
 */ __turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Admin/AdminSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Admin/AdminHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AdminLayout(param) {
    let { children, title } = param;
    _s();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Redirect to login if not authenticated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminLayout.useEffect": ()=>{
            if (!isLoading && !isAuthenticated) {
                router.push("/admin/login");
            }
        }
    }["AdminLayout.useEffect"], [
        isAuthenticated,
        isLoading,
        router
    ]);
    // Show loading while checking authentication
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            style: {
                background: 'var(--loading-bg)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Admin/AdminLayout.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'var(--text-primary)'
                        },
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Admin/AdminLayout.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Admin/AdminLayout.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/Admin/AdminLayout.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    // Don't render if not authenticated
    if (!isAuthenticated) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen",
        style: {
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: sidebarOpen,
                onClose: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminLayout.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",
                onClick: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminLayout.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col md:ml-16 lg:ml-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: title,
                        onMenuClick: ()=>setSidebarOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Admin/AdminLayout.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-4 sm:p-6 lg:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminLayout.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Admin/AdminLayout.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Admin/AdminLayout.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Admin/AdminLayout.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(AdminLayout, "7XQgs1aqeQAnIxiBTPSAfkjcVWw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminLayout;
var _c;
__turbopack_context__.k.register(_c, "AdminLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Admin/AdminCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Admin Card - Dashboard summary card
 */ __turbopack_context__.s([
    "default",
    ()=>AdminCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function AdminCard(param) {
    let { title, value, icon, color = "blue" } = param;
    const colorClasses = {
        blue: "bg-blue-500 dark:bg-blue-600",
        green: "bg-green-500 dark:bg-green-600",
        yellow: "bg-yellow-500 dark:bg-yellow-600",
        red: "bg-red-500 dark:bg-red-600",
        purple: "bg-purple-500 dark:bg-purple-600"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow",
        style: {
            backgroundColor: 'var(--admin-card-bg)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium",
                            style: {
                                color: 'var(--admin-card-text)'
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminCard.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-3xl font-bold",
                            style: {
                                color: 'var(--admin-card-text)'
                            },
                            children: value
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminCard.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Admin/AdminCard.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 rounded-full ".concat(colorClasses[color]),
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Admin/AdminCard.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/Admin/AdminCard.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Admin/AdminCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = AdminCard;
var _c;
__turbopack_context__.k.register(_c, "AdminCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mock data for development and API fallback
 */ __turbopack_context__.s([
    "mockBlogs",
    ()=>mockBlogs,
    "mockNotes",
    ()=>mockNotes,
    "mockProjects",
    ()=>mockProjects
]);
const mockNotes = [
    {
        _id: "mock-1",
        slug: "intro-to-transformers",
        title: "Introduction to Transformer Architecture",
        excerpt: "A comprehensive guide to understanding the transformer architecture that powers modern LLMs like GPT and BERT.",
        tags: [
            "Deep Learning",
            "NLP",
            "Transformers",
            "AI"
        ],
        topic: "Machine Learning",
        updatedAt: "2025-09-15T10:00:00Z",
        createdAt: "2025-09-01T10:00:00Z",
        readingTime: 12,
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
    },
    {
        _id: "mock-2",
        slug: "recommender-systems-deep-dive",
        title: "Building Scalable Recommender Systems",
        excerpt: "Learn how to build production-ready recommender systems using collaborative filtering and deep learning techniques.",
        tags: [
            "Recommender Systems",
            "ML",
            "Python",
            "Production"
        ],
        topic: "Machine Learning",
        updatedAt: "2025-08-22T14:30:00Z",
        createdAt: "2025-08-20T10:00:00Z",
        readingTime: 15,
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    },
    {
        _id: "mock-3",
        slug: "anomaly-detection-techniques",
        title: "Advanced Anomaly Detection Techniques",
        excerpt: "Explore statistical and ML-based approaches for detecting anomalies in time series and high-dimensional data.",
        tags: [
            "Anomaly Detection",
            "Statistics",
            "ML",
            "Time Series"
        ],
        topic: "Machine Learning",
        updatedAt: "2025-07-10T09:00:00Z",
        createdAt: "2025-07-05T10:00:00Z",
        readingTime: 10
    },
    {
        _id: "mock-4",
        slug: "python-async-patterns",
        title: "Async Programming Patterns in Python",
        excerpt: "Master asynchronous programming in Python with asyncio, including common patterns and best practices.",
        tags: [
            "Python",
            "Async",
            "Programming",
            "Best Practices"
        ],
        topic: "Software Engineering",
        updatedAt: "2025-06-18T16:00:00Z",
        createdAt: "2025-06-15T10:00:00Z",
        readingTime: 8
    },
    {
        _id: "mock-5",
        slug: "optimization-algorithms",
        title: "Optimization Algorithms for ML",
        excerpt: "Understanding gradient descent, Adam, and other optimization algorithms used in training machine learning models.",
        tags: [
            "Optimization",
            "Algorithms",
            "ML",
            "Theory"
        ],
        topic: "Machine Learning",
        updatedAt: "2025-05-25T11:00:00Z",
        createdAt: "2025-05-20T10:00:00Z",
        readingTime: 14
    },
    {
        _id: "mock-6",
        slug: "docker-kubernetes-guide",
        title: "Containerization with Docker & Kubernetes",
        excerpt: "Complete guide to containerizing ML applications and deploying them at scale using Kubernetes.",
        tags: [
            "Docker",
            "Kubernetes",
            "DevOps",
            "Deployment"
        ],
        topic: "Software Engineering",
        updatedAt: "2025-04-12T13:00:00Z",
        createdAt: "2025-04-10T10:00:00Z",
        readingTime: 18
    }
];
const mockBlogs = [
    {
        _id: "future-of-llms",
        title: "The Future of Large Language Models",
        description: "Exploring the next generation of LLMs and their potential impact on AI applications",
        category: "AI",
        link: "https://example.com/future-of-llms",
        updatedAt: "2025-10-01T10:00:00Z",
        createdAt: "2025-10-01T10:00:00Z"
    },
    {
        _id: "ml-production-lessons",
        title: "Lessons from Deploying ML at Scale",
        description: "Real-world insights from building and maintaining production ML systems serving millions of users",
        category: "ML",
        link: "https://example.com/ml-production-lessons",
        updatedAt: "2025-09-20T14:00:00Z",
        createdAt: "2025-09-20T14:00:00Z"
    },
    {
        _id: "fraud-detection-systems",
        title: "Building Real-Time Fraud Detection Systems",
        description: "A deep dive into architecting and deploying fraud detection systems that operate at scale",
        category: "Security",
        link: "https://example.com/fraud-detection-systems",
        updatedAt: "2025-08-15T16:00:00Z",
        createdAt: "2025-08-15T16:00:00Z"
    },
    {
        _id: "phd-journey-tufts",
        title: "My PhD Journey: From Research to Industry",
        description: "Reflections on transitioning from academic research at Tufts to applied AI engineering at Meta",
        category: "Career",
        link: "https://example.com/phd-journey-tufts",
        updatedAt: "2025-07-05T10:00:00Z",
        createdAt: "2025-07-05T10:00:00Z"
    }
];
const mockProjects = [
    {
        id: "1",
        title: "Neural Recommender System",
        description: "A production-ready recommender system using deep learning and collaborative filtering, serving 10M+ users with sub-100ms latency.",
        tech: [
            "Python",
            "TensorFlow",
            "PyTorch",
            "Redis",
            "Kubernetes"
        ],
        tags: [
            "ML",
            "Production",
            "Scale"
        ],
        repoUrl: "https://github.com/olukunle/neural-recommender",
        liveUrl: "https://demo.neural-recommender.io",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        featured: true
    },
    {
        id: "2",
        title: "Real-Time Anomaly Detection Platform",
        description: "End-to-end platform for detecting anomalies in streaming data using ensemble methods and autoencoders.",
        tech: [
            "Python",
            "Apache Kafka",
            "PostgreSQL",
            "Docker",
            "FastAPI"
        ],
        tags: [
            "ML",
            "Real-Time",
            "Detection"
        ],
        repoUrl: "https://github.com/olukunle/anomaly-platform",
        liveUrl: "https://anomaly-demo.owolabi.ai",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
        featured: true
    },
    {
        id: "3",
        title: "LLM Fine-Tuning Pipeline",
        description: "Automated pipeline for fine-tuning large language models on custom datasets with distributed training support.",
        tech: [
            "Python",
            "Hugging Face",
            "DeepSpeed",
            "Ray",
            "MLflow"
        ],
        tags: [
            "LLM",
            "NLP",
            "Training"
        ],
        repoUrl: "https://github.com/olukunle/llm-pipeline",
        image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800",
        featured: true
    },
    {
        id: "4",
        title: "Time Series Forecasting API",
        description: "RESTful API for forecasting time series data using ARIMA, Prophet, and LSTM models with automatic model selection.",
        tech: [
            "Python",
            "FastAPI",
            "Prophet",
            "LSTM",
            "Docker"
        ],
        tags: [
            "Forecasting",
            "API",
            "ML"
        ],
        repoUrl: "https://github.com/olukunle/forecast-api",
        liveUrl: "https://forecast-api.owolabi.ai",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        featured: false
    },
    {
        id: "5",
        title: "ML Model Monitoring Dashboard",
        description: "Comprehensive dashboard for monitoring ML model performance, data drift, and system health in production.",
        tech: [
            "React",
            "TypeScript",
            "Python",
            "Prometheus",
            "Grafana"
        ],
        tags: [
            "Monitoring",
            "MLOps",
            "Dashboard"
        ],
        repoUrl: "https://github.com/olukunle/ml-monitor",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        featured: false
    },
    {
        id: "6",
        title: "Distributed Training Framework",
        description: "Framework for distributed deep learning training across multiple GPUs and nodes with fault tolerance.",
        tech: [
            "Python",
            "PyTorch",
            "Horovod",
            "NCCL",
            "Ray"
        ],
        tags: [
            "Distributed",
            "Training",
            "GPU"
        ],
        repoUrl: "https://github.com/olukunle/distributed-training",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
        featured: false
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API client for backend communication with mock data fallback
 */ __turbopack_context__.s([
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "getAdminNotes",
    ()=>getAdminNotes,
    "getBlogs",
    ()=>getBlogs,
    "getDashboardStats",
    ()=>getDashboardStats,
    "getNoteBySlug",
    ()=>getNoteBySlug,
    "getNotes",
    ()=>getNotes,
    "getProjects",
    ()=>getProjects,
    "getRecentActivity",
    ()=>getRecentActivity,
    "submitContact",
    ()=>submitContact,
    "updateNote",
    ()=>updateNote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/mockData.ts [app-client] (ecmascript)");
;
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";
const USE_MOCK_DATA = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_USE_MOCK_DATA === "true";
// Log mock data status once on startup
let hasLoggedMockDataStatus = false;
function logMockDataStatus() {
    if (!hasLoggedMockDataStatus && ("TURBOPACK compile-time value", "development") === 'development') {
        hasLoggedMockDataStatus = true;
        if (USE_MOCK_DATA) {
            console.log('🎨 Running with MOCK DATA (NEXT_PUBLIC_USE_MOCK_DATA=true)');
        } else {
            console.log("🌐 API configured: ".concat(API_BASE_URL, " (will fallback to mock data if unavailable)"));
        }
    }
}
class APIError extends Error {
    constructor(message, status, data){
        super(message), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "status", void 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "data", void 0), this.status = status, this.data = data;
        this.name = "APIError";
    }
}
async function fetchAPI(endpoint, options) {
    const url = "".concat(API_BASE_URL).concat(endpoint);
    try {
        const response = await fetch(url, {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                ...options === null || options === void 0 ? void 0 : options.headers
            },
            ...options
        });
        if (!response.ok) {
            throw new APIError("API request failed: ".concat(response.statusText), response.status, await response.json().catch(()=>null));
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof APIError) {
            throw error;
        }
        throw new APIError(error instanceof Error ? error.message : "Unknown error occurred");
    }
}
async function getNotes() {
    logMockDataStatus();
    if (USE_MOCK_DATA) {
        return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockNotes"]);
    }
    try {
        const response = await fetchAPI("/api/notes/public", {
            cache: "no-store"
        });
        return response.data.notes;
    } catch (error) {
        // Silent fallback to mock data
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockNotes"];
    }
}
async function getNoteBySlug(id) {
    logMockDataStatus();
    if (USE_MOCK_DATA) {
        const note = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockNotes"].find((n)=>n._id === id);
        if (!note) throw new Error("Note not found");
        return {
            ...note,
            content: generateMockContent(note.title)
        };
    }
    try {
        const response = await fetchAPI("/api/notes/public/".concat(id), {
            cache: "no-store"
        });
        return response.data.note;
    } catch (error) {
        // Silent fallback to mock data
        const note = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockNotes"].find((n)=>n._id === id);
        if (!note) throw error;
        return {
            ...note,
            content: generateMockContent(note.title)
        };
    }
}
async function getBlogs() {
    logMockDataStatus();
    if (USE_MOCK_DATA) {
        return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBlogs"]);
    }
    try {
        const response = await fetchAPI("/api/v1/blogs", {
            cache: "no-store"
        });
        return response.data;
    } catch (error) {
        // Silent fallback to mock data
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBlogs"];
    }
}
async function getProjects() {
    logMockDataStatus();
    if (USE_MOCK_DATA) {
        return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProjects"]);
    }
    try {
        const response = await fetchAPI("/api/v1/projects", {
            cache: "no-store"
        });
        return response.data;
    } catch (error) {
        // Silent fallback to mock data
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProjects"];
    }
}
async function createNote(data) {
    const response = await fetchAPI("/api/notes", {
        method: "POST",
        body: JSON.stringify(data)
    });
    return response.data.note;
}
async function updateNote(id, data) {
    const response = await fetchAPI("/api/notes/".concat(id), {
        method: "PUT",
        body: JSON.stringify(data)
    });
    return response.data.note;
}
async function deleteNote(id) {
    const response = await fetchAPI("/api/notes/".concat(id), {
        method: "DELETE"
    });
    return {
        message: response.data.deletedNote ? "Note deleted successfully" : "Note deleted"
    };
}
async function getAdminNotes() {
    const response = await fetchAPI("/api/notes", {
        cache: "no-store"
    });
    return response.data.notes;
}
async function submitContact(data) {
    if (USE_MOCK_DATA) {
        // Simulate API delay
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        return {
            message: "Thank you for your message! (Demo mode - message not sent)"
        };
    }
    const response = await fetchAPI("/api/v1/contact", {
        method: "POST",
        body: JSON.stringify(data)
    });
    return response;
}
// Helper function to generate mock content
function generateMockContent(title) {
    return "# ".concat(title, '\n\nThis is a **demo content** generated for development purposes. The actual content will be loaded from the backend API once it\'s connected.\n\n## Introduction\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n\n## Key Concepts\n\n- **Concept 1**: Important foundational idea\n- **Concept 2**: Building on the basics\n- **Concept 3**: Advanced applications\n\n### Code Example\n\n```python\ndef example_function():\n    """\n    This is a sample code block to demonstrate\n    syntax highlighting in the markdown renderer.\n    """\n    result = sum([1, 2, 3, 4, 5])\n    return result\n\n# Usage\noutput = example_function()\nprint(f"Result: {output}")\n```\n\n## Mathematical Notation\n\nHere\'s an example of inline math: $E = mc^2$\n\nAnd a block equation:\n\n$$\n\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\n$$\n\n## Conclusion\n\nThis mock content demonstrates all the features of our markdown renderer including:\n\n1. Headers and formatting\n2. Code syntax highlighting\n3. Mathematical equations with KaTeX\n4. Lists and tables\n\n> **Note**: Connect the backend API to see real content!\n\n---\n\n*This is demo content. Real content will be much more detailed and informative.*\n');
}
const getDashboardStats = async ()=>{
    try {
        const response = await fetchAPI('/api/dashboard/stats', {
            method: 'GET'
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
            totalComments: 24
        };
    }
};
const getRecentActivity = async function() {
    let limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
    try {
        const response = await fetchAPI("/api/dashboard/activity?limit=".concat(limit), {
            method: 'GET'
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
                createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
                type: "blog",
                user: "You"
            },
            {
                id: '2',
                action: "Comment approved",
                title: "Great article on React hooks!",
                createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
                type: "comment",
                user: "John Doe"
            },
            {
                id: '3',
                action: "Project updated",
                title: "Personal Portfolio Website",
                createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
                type: "project",
                user: "You"
            },
            {
                id: '4',
                action: "Note created",
                title: "Meeting notes from client call",
                createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
                type: "note",
                user: "You"
            },
            {
                id: '5',
                action: "Research item added",
                title: "AI in Web Development",
                createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
                type: "research",
                user: "You"
            }
        ];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Admin/AdminDashboardPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Admin Dashboard Page - Clean Component without Auth Logic
 */ __turbopack_context__.s([
    "default",
    ()=>AdminDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Admin/AdminLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Admin/AdminCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript) <export default as DocumentTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/BookOpenIcon.js [app-client] (ecmascript) <export default as BookOpenIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$FolderIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/FolderIcon.js [app-client] (ecmascript) <export default as FolderIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/AcademicCapIcon.js [app-client] (ecmascript) <export default as AcademicCapIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-client] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-client] (ecmascript) <export default as ArrowRightIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AdminDashboardPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        totalBlogs: 0,
        totalNotes: 0,
        totalProjects: 0,
        totalResearch: 0,
        totalComments: 0
    });
    const [activities, setActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Fetch dashboard data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardPage.useEffect": ()=>{
            const fetchDashboardData = {
                "AdminDashboardPage.useEffect.fetchDashboardData": async ()=>{
                    try {
                        setLoading(true);
                        const [statsData, activityData] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDashboardStats"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecentActivity"])(5)
                        ]);
                        setStats(statsData);
                        setActivities(activityData);
                    } catch (error) {
                        console.error('Error fetching dashboard data:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AdminDashboardPage.useEffect.fetchDashboardData"];
            fetchDashboardData();
        }
    }["AdminDashboardPage.useEffect"], []);
    // Format stats for display
    const statsCards = [
        {
            title: "Total Blogs",
            value: stats.totalBlogs.toString(),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                className: "h-6 w-6 text-white"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            color: "blue"
        },
        {
            title: "Total Notes",
            value: stats.totalNotes.toString(),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
                className: "h-6 w-6 text-white"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            color: "green"
        },
        {
            title: "Total Projects",
            value: stats.totalProjects.toString(),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$FolderIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__["FolderIcon"], {
                className: "h-6 w-6 text-white"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            color: "yellow"
        },
        {
            title: "Research Items",
            value: stats.totalResearch.toString(),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__["AcademicCapIcon"], {
                className: "h-6 w-6 text-white"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            color: "purple"
        },
        {
            title: "Total Comments",
            value: stats.totalComments.toString(),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                className: "h-6 w-6 text-white"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            color: "red"
        }
    ];
    // Quick action handlers
    const handleQuickAction = (action)=>{
        switch(action){
            case 'blog':
                router.push('/admin/dashboard/blogs');
                break;
            case 'note':
                router.push('/admin/dashboard/notes');
                break;
            case 'project':
                router.push('/admin/dashboard/projects');
                break;
            case 'research':
                router.push('/admin/dashboard/research');
                break;
            default:
                break;
        }
    };
    // Format time ago
    const formatTimeAgo = (dateString)=>{
        const now = new Date();
        const date = new Date(dateString);
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return "".concat(Math.floor(diffInSeconds / 60), " minutes ago");
        if (diffInSeconds < 86400) return "".concat(Math.floor(diffInSeconds / 3600), " hours ago");
        return "".concat(Math.floor(diffInSeconds / 86400), " days ago");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Dashboard",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl p-8",
                    style: {
                        backgroundColor: 'var(--admin-card-bg)',
                        color: 'var(--admin-card-text)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold mb-2",
                            children: "Welcome Back!"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-1",
                            style: {
                                color: 'var(--text-secondary)'
                            },
                            children: [
                                "Hello, ",
                                (user === null || user === void 0 ? void 0 : user.email) || 'Admin',
                                " 👋"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: 'var(--text-secondary)'
                            },
                            children: "Manage your content, monitor activity, and keep your site updated."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-sm",
                            style: {
                                color: 'var(--text-secondary)'
                            },
                            children: [
                                "Last login: ",
                                new Date().toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold mb-6",
                            style: {
                                color: 'var(--text-primary)'
                            },
                            children: "Content Overview"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6",
                            children: [
                                ...Array(5)
                            ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-pulse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-200 dark:bg-slate-700 rounded-lg h-24"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                        lineNumber: 173,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6",
                            children: statsCards.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: stat.title,
                                    value: stat.value,
                                    icon: stat.icon,
                                    color: stat.color
                                }, index, false, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300",
                    style: {
                        backgroundColor: 'var(--admin-quick-actions-bg)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold mb-6",
                            style: {
                                color: 'var(--text-primary)'
                            },
                            children: "Quick Actions"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleQuickAction('blog'),
                                    className: "flex items-center p-4 hover:shadow-md rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer",
                                    style: {
                                        backgroundColor: 'var(--admin-quick-action-card-bg)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                                            className: "h-8 w-8 text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200",
                                                    style: {
                                                        color: 'var(--text-primary)'
                                                    },
                                                    children: "New Blog Post"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200",
                                                    style: {
                                                        color: 'var(--text-primary)'
                                                    },
                                                    children: "Create a new article"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                            className: "h-5 w-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleQuickAction('note'),
                                    className: "flex items-center p-4 hover:shadow-md rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer",
                                    style: {
                                        backgroundColor: 'var(--admin-quick-action-card-bg)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
                                            className: "h-8 w-8 text-green-600 dark:text-green-400 mr-3 group-hover:scale-110 transition-transform duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200",
                                                    style: {
                                                        color: 'var(--text-primary)'
                                                    },
                                                    children: "Add Note"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200",
                                                    style: {
                                                        color: 'var(--text-primary)'
                                                    },
                                                    children: "Write a quick note"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                            className: "h-5 w-5 text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleQuickAction('project'),
                                    className: "flex items-center p-4 hover:shadow-md rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer",
                                    style: {
                                        backgroundColor: 'var(--admin-quick-action-card-bg)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$FolderIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__["FolderIcon"], {
                                            className: "h-8 w-8 text-yellow-600 dark:text-yellow-400 mr-3 group-hover:scale-110 transition-transform duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200",
                                                    style: {
                                                        color: 'var(--text-primary)'
                                                    },
                                                    children: "New Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200",
                                                    style: {
                                                        color: 'var(--text-primary)'
                                                    },
                                                    children: "Add a project"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                            className: "h-5 w-5 text-slate-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleQuickAction('research'),
                                    className: "flex items-center p-4 hover:shadow-md rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer",
                                    style: {
                                        backgroundColor: 'var(--admin-quick-action-card-bg)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__["AcademicCapIcon"], {
                                            className: "h-8 w-8 text-purple-600 dark:text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200",
                                                    style: {
                                                        color: 'var(--text-primary)'
                                                    },
                                                    children: "Research"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200",
                                                    style: {
                                                        color: 'var(--text-primary)'
                                                    },
                                                    children: "Add research item"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                            className: "h-5 w-5 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300",
                    style: {
                        backgroundColor: 'var(--admin-recent-activity-bg)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-semibold",
                                style: {
                                    color: 'var(--text-primary)'
                                },
                                children: "Recent Activity"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                ...Array(5)
                            ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-pulse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 bg-slate-200 dark:bg-slate-600 rounded w-3/4 mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-3 bg-slate-200 dark:bg-slate-600 rounded w-1/2 mb-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-3 bg-slate-200 dark:bg-slate-600 rounded w-1/4"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 280,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                        lineNumber: 279,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                    lineNumber: 278,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this) : activities.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: activities.map((activity, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between p-4 rounded-lg hover:shadow-md transition-all duration-300 group cursor-pointer",
                                    style: {
                                        backgroundColor: 'var(--admin-quick-action-card-bg)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200",
                                                            style: {
                                                                color: 'var(--text-primary)'
                                                            },
                                                            children: activity.action
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 group-hover:scale-105 ".concat(activity.type === "blog" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/70" : activity.type === "comment" ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200 group-hover:bg-green-200 dark:group-hover:bg-green-900/70" : activity.type === "project" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/70" : activity.type === "note" ? "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/70" : "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/70"),
                                                            children: activity.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mb-1 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200",
                                                    style: {
                                                        color: 'var(--text-primary)'
                                                    },
                                                    children: [
                                                        '"',
                                                        activity.title,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-xs group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-200",
                                                    style: {
                                                        color: 'var(--text-primary)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "by ",
                                                                activity.user
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: formatTimeAgo(activity.updatedAt)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                                lineNumber: 318,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                            lineNumber: 317,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, activity.id || index, true, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                    lineNumber: 292,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 dark:text-slate-400",
                                children: "No recent activity found"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                                lineNumber: 325,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Admin/AdminDashboardPage.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(AdminDashboardPage, "0ISZESEFL+zPPeXfccEEPBMd/g0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AdminDashboardPage;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_2195d1ea._.js.map