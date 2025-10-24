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
"[project]/frontend/src/components/Admin/AdminTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Admin Table - Reusable table component
 * Updated: Added optional loading prop for showing loading state.
 */ __turbopack_context__.s([
    "default",
    ()=>AdminTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function AdminTable(param) {
    let { columns, data, onEdit, onDelete, onApprove, showActions = true, customActions = [], loading = false } = param;
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full rounded-lg shadow-md overflow-hidden",
            style: {
                backgroundColor: 'var(--card)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg",
                    style: {
                        color: 'var(--text-secondary)'
                    },
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block rounded-lg shadow-md overflow-hidden",
                style: {
                    backgroundColor: 'var(--card)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            style: {
                                backgroundColor: 'var(--nav-text)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left font-medium",
                                            style: {
                                                color: 'white'
                                            },
                                            children: column.label
                                        }, column.key, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)),
                                    showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left font-medium",
                                        style: {
                                            color: 'white'
                                        },
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-slate-200 dark:divide-slate-700",
                            children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                style: {
                                                    color: 'var(--text-primary)'
                                                },
                                                children: column.render ? column.render(item[column.key], item) : item[column.key]
                                            }, column.key, false, {
                                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)),
                                        showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            style: {
                                                color: 'var(--text-primary)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2",
                                                children: [
                                                    onEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onEdit(item),
                                                        className: "px-3 py-1.5 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 cursor-pointer",
                                                        style: {
                                                            backgroundColor: '#10B981',
                                                            color: 'white'
                                                        },
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, this),
                                                    customActions.map((action, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>action.onClick(item),
                                                            className: action.className || "px-3 py-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/40 hover:text-purple-700 dark:hover:text-purple-300 hover:border-purple-300 dark:hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 cursor-pointer",
                                                            children: action.label
                                                        }, index, false, {
                                                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 25
                                                        }, this)),
                                                    onApprove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onApprove(item),
                                                        className: "px-3 py-1.5 text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md hover:bg-green-100 dark:hover:bg-green-900/40 hover:text-green-700 dark:hover:text-green-300 hover:border-green-300 dark:hover:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 cursor-pointer",
                                                        children: "Approve"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 23
                                                    }, this),
                                                    onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onDelete(item),
                                                        className: "px-3 py-1.5 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 cursor-pointer",
                                                        style: {
                                                            backgroundColor: '#EF4444',
                                                            color: 'white'
                                                        },
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item._id || item.id || index, true, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                            lineNumber: 70,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                    lineNumber: 51,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block lg:hidden bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            style: {
                                backgroundColor: 'var(--nav-text)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    columns.filter((col)=>[
                                            'title',
                                            'email',
                                            'category',
                                            'postTitle',
                                            'postType',
                                            'parentCommentId'
                                        ].includes(col.key)).map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-3 text-left font-medium text-sm",
                                            style: {
                                                color: 'white'
                                            },
                                            children: column.label
                                        }, column.key, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)),
                                    showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left font-medium text-sm",
                                        style: {
                                            color: 'white'
                                        },
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-slate-200 dark:divide-slate-700",
                            children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        columns.filter((col)=>[
                                                'title',
                                                'email',
                                                'category',
                                                'postTitle',
                                                'postType',
                                                'parentCommentId'
                                            ].includes(col.key)).map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-sm",
                                                style: {
                                                    color: 'var(--text-primary)'
                                                },
                                                children: column.key === 'title' && item.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-w-[200px] truncate font-medium",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 23
                                                }, this) : column.key === 'email' && item.email ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-w-[150px] truncate font-medium",
                                                    children: item.email
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 23
                                                }, this) : column.key === 'category' && item.category ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
                                                    children: item.category
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 23
                                                }, this) : column.key === 'postTitle' && item.postTitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-w-[150px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium truncate",
                                                            style: {
                                                                color: 'var(--text-primary)'
                                                            },
                                                            children: item.postTitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs",
                                                            style: {
                                                                color: 'var(--text-secondary)'
                                                            },
                                                            children: item.postType
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 23
                                                }, this) : column.key === 'parentCommentId' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 text-xs rounded-full ".concat(item.parentCommentId ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'),
                                                    children: item.parentCommentId ? 'Reply' : 'Comment'
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 23
                                                }, this) : column.render ? column.render(item[column.key], item) : item[column.key]
                                            }, column.key, false, {
                                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this)),
                                        showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            style: {
                                                color: 'var(--text-primary)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-1",
                                                children: [
                                                    onEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onEdit(item),
                                                        className: "px-2 py-1 text-xs font-medium rounded transition-all duration-200 cursor-pointer",
                                                        style: {
                                                            backgroundColor: '#10B981',
                                                            color: 'white'
                                                        },
                                                        title: "Edit",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 25
                                                    }, this),
                                                    onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onDelete(item),
                                                        className: "px-2 py-1 text-xs font-medium rounded transition-all duration-200 cursor-pointer",
                                                        style: {
                                                            backgroundColor: '#EF4444',
                                                            color: 'white'
                                                        },
                                                        title: "Delete",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item._id || item.id || index, true, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden space-y-4",
                children: data.map((item, index)=>{
                    // Check if this is a comment item (has email field)
                    const isComment = item.email !== undefined;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg shadow-md p-4 border",
                        style: {
                            backgroundColor: 'var(--card)',
                            borderColor: 'var(--border)'
                        },
                        children: [
                            isComment ? // Comment Card Layout
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                                                style: {
                                                    backgroundColor: 'var(--tag-bg)',
                                                    color: 'var(--tag-text)'
                                                },
                                                children: item.parentCommentId ? 'Reply' : 'Comment'
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                lineNumber: 234,
                                                columnNumber: 21
                                            }, this),
                                            item.createdAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                style: {
                                                    color: 'var(--text-secondary)'
                                                },
                                                children: new Date(item.createdAt).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                lineNumber: 238,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 233,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-2",
                                        style: {
                                            color: 'var(--text-primary)'
                                        },
                                        children: item.email
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 245,
                                        columnNumber: 19
                                    }, this),
                                    item.postTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                style: {
                                                    color: 'var(--text-primary)'
                                                },
                                                children: [
                                                    "On: ",
                                                    item.postTitle
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                lineNumber: 252,
                                                columnNumber: 23
                                            }, this),
                                            item.postType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-700",
                                                style: {
                                                    color: 'var(--text-secondary)'
                                                },
                                                children: item.postType
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                lineNumber: 256,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 251,
                                        columnNumber: 21
                                    }, this),
                                    item.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mb-4 line-clamp-3",
                                        style: {
                                            color: 'var(--text-primary)'
                                        },
                                        children: item.content
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 265,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true) : // Blog/General Card Layout
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-2 line-clamp-2",
                                        style: {
                                            color: 'var(--text-primary)'
                                        },
                                        children: item.title || 'Untitled'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 274,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-4 mb-3",
                                        children: [
                                            item.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                                                style: {
                                                    backgroundColor: 'var(--tag-bg)',
                                                    color: 'var(--tag-text)'
                                                },
                                                children: item.category
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                lineNumber: 281,
                                                columnNumber: 23
                                            }, this),
                                            item.createdAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                style: {
                                                    color: 'var(--text-secondary)'
                                                },
                                                children: new Date(item.createdAt).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                lineNumber: 286,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 279,
                                        columnNumber: 19
                                    }, this),
                                    item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mb-4 line-clamp-2",
                                        style: {
                                            color: 'var(--text-primary)'
                                        },
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 294,
                                        columnNumber: 21
                                    }, this),
                                    item.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: item.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 mr-1",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 25
                                                }, this),
                                                "View Link"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                            lineNumber: 302,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 301,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true),
                            showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-2 pt-3 border-t",
                                style: {
                                    borderColor: 'var(--border)'
                                },
                                children: [
                                    onEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onEdit(item),
                                        className: "w-full px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer",
                                        style: {
                                            backgroundColor: '#10B981',
                                            color: 'white'
                                        },
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 322,
                                        columnNumber: 21
                                    }, this),
                                    customActions.map((action, actionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>action.onClick(item),
                                            className: action.className || "w-full px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/40 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-200 cursor-pointer",
                                            children: action.label
                                        }, actionIndex, false, {
                                            fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                            lineNumber: 331,
                                            columnNumber: 21
                                        }, this)),
                                    onApprove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onApprove(item),
                                        className: "w-full px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md hover:bg-green-100 dark:hover:bg-green-900/40 hover:text-green-700 dark:hover:text-green-300 transition-all duration-200 cursor-pointer",
                                        children: "Approve"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 340,
                                        columnNumber: 21
                                    }, this),
                                    onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDelete(item),
                                        className: "w-full px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer",
                                        style: {
                                            backgroundColor: '#EF4444',
                                            color: 'white'
                                        },
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                        lineNumber: 348,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                                lineNumber: 320,
                                columnNumber: 17
                            }, this)
                        ]
                    }, item._id || item.id || index, true, {
                        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                        lineNumber: 228,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Admin/AdminTable.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c = AdminTable;
var _c;
__turbopack_context__.k.register(_c, "AdminTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Admin/AdminModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Admin Modal - Generic modal for forms
 */ __turbopack_context__.s([
    "default",
    ()=>AdminModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-client] (ecmascript) <export default as XMarkIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AdminModal(param) {
    let { isOpen, onClose, title, children } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminModal.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
            return ({
                "AdminModal.useEffect": ()=>{
                    document.body.style.overflow = "unset";
                }
            })["AdminModal.useEffect"];
        }
    }["AdminModal.useEffect"], [
        isOpen
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center p-2 md:p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Admin/AdminModal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-lg md:rounded-xl shadow-xl w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto",
                    style: {
                        backgroundColor: 'var(--card)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 md:p-6 border-b border-slate-200 dark:border-slate-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg md:text-xl font-semibold",
                                    style: {
                                        color: 'var(--text-primary)'
                                    },
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminModal.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Admin/AdminModal.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Admin/AdminModal.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Admin/AdminModal.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 md:p-6",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/AdminModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Admin/AdminModal.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/Admin/AdminModal.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Admin/AdminModal.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(AdminModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AdminModal;
var _c;
__turbopack_context__.k.register(_c, "AdminModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Delete Confirmation Modal Component
 * 
 * A reusable modal for confirming delete actions
 */ __turbopack_context__.s([
    "default",
    ()=>DeleteConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-client] (ecmascript) <export default as XMarkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js [app-client] (ecmascript) <export default as ExclamationTriangleIcon>");
"use client";
;
;
function DeleteConfirmModal(param) {
    let { isOpen, onClose, onConfirm, title, message, itemName, isDeleting = false } = param;
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-full items-center justify-center p-2 md:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-lg shadow-xl max-w-md w-full p-4 md:p-6",
                    style: {
                        backgroundColor: 'var(--card)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "absolute top-3 right-3 md:top-4 md:right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300",
                            disabled: isDeleting,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                className: "h-5 w-5 md:h-6 md:w-6"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full mb-3 md:mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__["ExclamationTriangleIcon"], {
                                className: "h-5 w-5 md:h-6 md:w-6 text-red-600 dark:text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base md:text-lg font-semibold text-center mb-2",
                            style: {
                                color: 'var(--text-primary)'
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm md:text-base text-center mb-2",
                            style: {
                                color: 'var(--text-primary)'
                            },
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        itemName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm md:text-base font-medium text-center mb-4 md:mb-6",
                            style: {
                                color: 'var(--text-primary)'
                            },
                            children: [
                                '"',
                                itemName,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs md:text-sm text-center mb-4 md:mb-6",
                            style: {
                                color: 'var(--text-secondary)'
                            },
                            children: "This action cannot be undone."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-2 md:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "w-full md:flex-1 px-4 py-2 border rounded-md transition-colors",
                                    style: {
                                        borderColor: 'var(--border)',
                                        color: 'var(--text-primary)',
                                        backgroundColor: 'var(--card)'
                                    },
                                    disabled: isDeleting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onConfirm,
                                    className: "w-full md:flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    disabled: isDeleting,
                                    children: isDeleting ? 'Deleting...' : 'Delete'
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = DeleteConfirmModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/services/notepadService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Notepad Service Layer
 * 
 * This service provides a clean abstraction for note management.
 * Currently uses LocalStorage but can be easily swapped for backend API calls.
 * 
 * TODO: Replace LocalStorage implementation with backend API calls
 * - Change getAllNotes() to fetch from /api/notes
 * - Change createNote() to POST /api/notes
 * - Change updateNote() to PUT /api/notes/:id
 * - Change deleteNote() to DELETE /api/notes/:id
 * - Implement uploadImage() to POST /api/upload with file upload
 */ __turbopack_context__.s([
    "notepadService",
    ()=>notepadService
]);
const STORAGE_KEY = 'notepad-notes';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'image/svg+xml'
];
class LocalStorageNotepadService {
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    getStoredNotes() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error reading notes from localStorage:', error);
            return [];
        }
    }
    saveNotes(notes) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
        } catch (error) {
            console.error('Error saving notes to localStorage:', error);
        }
    }
    stripHtml(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    }
    async getAllNotes() {
        const notes = this.getStoredNotes();
        return notes.map((note)=>({
                id: note.id,
                title: note.title,
                updatedAt: note.updatedAt,
                createdAt: note.createdAt,
                tags: note.tags,
                isFavorite: note.isFavorite,
                excerpt: this.stripHtml(note.content).substring(0, 150)
            })).sort((a, b)=>new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    }
    async getNote(id) {
        const notes = this.getStoredNotes();
        return notes.find((note)=>note.id === id) || null;
    }
    async createNote(noteData) {
        const now = new Date().toISOString();
        const newNote = {
            ...noteData,
            id: this.generateId(),
            createdAt: now,
            updatedAt: now
        };
        const notes = this.getStoredNotes();
        notes.push(newNote);
        this.saveNotes(notes);
        return newNote;
    }
    async updateNote(id, noteData) {
        const notes = this.getStoredNotes();
        const noteIndex = notes.findIndex((note)=>note.id === id);
        if (noteIndex === -1) {
            throw new Error('Note not found');
        }
        const updatedNote = {
            ...notes[noteIndex],
            ...noteData,
            id,
            updatedAt: new Date().toISOString()
        };
        notes[noteIndex] = updatedNote;
        this.saveNotes(notes);
        return updatedNote;
    }
    async deleteNote(id) {
        const notes = this.getStoredNotes();
        const filteredNotes = notes.filter((note)=>note.id !== id);
        if (filteredNotes.length === notes.length) {
            return false; // Note not found
        }
        this.saveNotes(filteredNotes);
        return true;
    }
    async uploadImage(file) {
        // Validate file
        if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
            return {
                success: false,
                error: "Unsupported file type. Allowed types: ".concat(ALLOWED_IMAGE_TYPES.join(', '))
            };
        }
        if (file.size > MAX_FILE_SIZE) {
            return {
                success: false,
                error: "File too large. Maximum size: ".concat(MAX_FILE_SIZE / (1024 * 1024), "MB")
            };
        }
        try {
            // Convert to data URL for LocalStorage
            const dataUrl = await this.fileToDataUrl(file);
            // TODO: Replace with server upload
            // const response = await fetch('/api/upload', {
            //   method: 'POST',
            //   body: formData
            // });
            // const result = await response.json();
            // return { success: true, url: result.url };
            return {
                success: true,
                url: dataUrl
            };
        } catch (error) {
            return {
                success: false,
                error: 'Failed to process image file'
            };
        }
    }
    fileToDataUrl(file) {
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ()=>resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
    async searchNotes(query) {
        const notes = await this.getAllNotes();
        const lowercaseQuery = query.toLowerCase();
        return notes.filter((note)=>{
            var _note_excerpt, _note_tags;
            return note.title.toLowerCase().includes(lowercaseQuery) || ((_note_excerpt = note.excerpt) === null || _note_excerpt === void 0 ? void 0 : _note_excerpt.toLowerCase().includes(lowercaseQuery)) || ((_note_tags = note.tags) === null || _note_tags === void 0 ? void 0 : _note_tags.some((tag)=>tag.toLowerCase().includes(lowercaseQuery)));
        });
    }
    async getNotesByTag(tag) {
        const notes = await this.getAllNotes();
        return notes.filter((note)=>{
            var _note_tags;
            return (_note_tags = note.tags) === null || _note_tags === void 0 ? void 0 : _note_tags.includes(tag);
        });
    }
    async getFavoriteNotes() {
        const notes = await this.getAllNotes();
        return notes.filter((note)=>note.isFavorite);
    }
}
const notepadService = new LocalStorageNotepadService(); // TODO: Replace with backend service when ready
 // export const notepadService = new BackendNotepadService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Notepad/ImageInsertModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Image Insert Modal Component
 * 
 * Provides three ways to insert images:
 * 1. Image via URL
 * 2. Local file upload
 * 3. Drag and drop support
 */ __turbopack_context__.s([
    "ImageInsertModal",
    ()=>ImageInsertModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$notepadService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/services/notepadService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ImageInsertModal(param) {
    let { isOpen, onClose, onInsert } = param;
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('url');
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [alt, setAlt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleUrlSubmit = (e)=>{
        e.preventDefault();
        if (url.trim() && alt.trim()) {
            onInsert(url.trim(), alt.trim());
            resetForm();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Please provide both URL and alt text');
        }
    };
    const handleFileSelect = async (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (!file) return;
        setIsUploading(true);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$notepadService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notepadService"].uploadImage(file);
            if (result.success && result.url) {
                setPreview(result.url);
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Image ready to insert');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.error || 'Failed to process image');
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to process image');
        } finally{
            setIsUploading(false);
        }
    };
    const handleFileInsert = ()=>{
        if (preview && alt.trim()) {
            onInsert(preview, alt.trim());
            resetForm();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Please provide alt text');
        }
    };
    const resetForm = ()=>{
        setUrl('');
        setAlt('');
        setPreview(null);
        setIsUploading(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const handleClose = ()=>{
        resetForm();
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-slate-900 dark:text-white",
                            children: "Insert Image"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex border-b border-slate-200 dark:border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('url'),
                            className: "flex-1 px-4 py-3 text-sm font-medium transition-colors ".concat(activeTab === 'url' ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                    className: "w-4 h-4 inline mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                "From URL"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('upload'),
                            className: "flex-1 px-4 py-3 text-sm font-medium transition-colors ".concat(activeTab === 'upload' ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "w-4 h-4 inline mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                "Upload File"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        activeTab === 'url' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleUrlSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",
                                            children: "Image URL"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: url,
                                            onChange: (e)=>setUrl(e.target.value),
                                            placeholder: "https://example.com/image.jpg",
                                            className: "w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",
                                            children: "Alt Text (for accessibility)"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: alt,
                                            onChange: (e)=>setAlt(e.target.value),
                                            placeholder: "Describe the image",
                                            className: "w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",
                                            children: "Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-slate-300 dark:border-slate-600 rounded-md p-2 bg-slate-50 dark:bg-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: url,
                                                    alt: "Preview",
                                                    className: "max-w-full h-32 object-contain mx-auto",
                                                    onError: (e)=>{
                                                        var _e_currentTarget_nextElementSibling;
                                                        e.currentTarget.style.display = 'none';
                                                        (_e_currentTarget_nextElementSibling = e.currentTarget.nextElementSibling) === null || _e_currentTarget_nextElementSibling === void 0 ? void 0 : _e_currentTarget_nextElementSibling.classList.remove('hidden');
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden text-center text-slate-500 dark:text-slate-400 py-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                            className: "w-8 h-8 mx-auto mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Invalid image URL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleClose,
                                            className: "px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                                            children: "Insert Image"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        activeTab === 'upload' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",
                                            children: "Choose Image File"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: fileInputRef,
                                            type: "file",
                                            accept: "image/png,image/jpeg,image/jpg,image/webp,image/svg+xml",
                                            onChange: handleFileSelect,
                                            className: "w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400 mt-1",
                                            children: "Supported formats: PNG, JPEG, WebP, SVG. Max size: 5MB"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this),
                                isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-600 dark:text-slate-400 mt-2",
                                            children: "Processing image..."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, this),
                                preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",
                                            children: "Alt Text (for accessibility)"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: alt,
                                            onChange: (e)=>setAlt(e.target.value),
                                            placeholder: "Describe the image",
                                            className: "w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this),
                                preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",
                                            children: "Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-slate-300 dark:border-slate-600 rounded-md p-2 bg-slate-50 dark:bg-slate-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: preview,
                                                alt: "Preview",
                                                className: "max-w-full h-32 object-contain mx-auto"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                                lineNumber: 251,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 250,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleClose,
                                            className: "px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleFileInsert,
                                            disabled: !preview || !alt.trim(),
                                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: "Insert Image"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Notepad/ImageInsertModal.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(ImageInsertModal, "nbH6DAgHlHpo5KCZdvWD4LeDVvo=");
_c = ImageInsertModal;
var _c;
__turbopack_context__.k.register(_c, "ImageInsertModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Notepad/NotepadToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Notepad Toolbar Component
 * 
 * Provides rich text editing controls for the Tiptap editor
 * Includes image insertion, formatting, and other editing tools
 */ __turbopack_context__.s([
    "NotepadToolbar",
    ()=>NotepadToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/bold.js [app-client] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/italic.js [app-client] (ecmascript) <export default as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/underline.js [app-client] (ecmascript) <export default as Underline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/list-ordered.js [app-client] (ecmascript) <export default as ListOrdered>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/table.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/undo.js [app-client] (ecmascript) <export default as Undo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/redo.js [app-client] (ecmascript) <export default as Redo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/text-align-start.js [app-client] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/text-align-center.js [app-client] (ecmascript) <export default as AlignCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/text-align-end.js [app-client] (ecmascript) <export default as AlignRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$justify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignJustify$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/text-align-justify.js [app-client] (ecmascript) <export default as AlignJustify>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/highlighter.js [app-client] (ecmascript) <export default as Highlighter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/sigma.js [app-client] (ecmascript) <export default as Sigma>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Notepad$2f$ImageInsertModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Notepad/ImageInsertModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NotepadToolbar(param) {
    let { editor } = param;
    _s();
    const [showImageModal, setShowImageModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!editor) {
        return null;
    }
    const ToolbarButton = (param)=>{
        let { onClick, isActive = false, disabled = false, children, title } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            disabled: disabled,
            title: title,
            className: "p-2 rounded-md transition-colors ".concat(isActive ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'hover:bg-slate-100 dark:hover:bg-slate-700', " ").concat(disabled ? 'opacity-50 cursor-not-allowed' : ''),
            style: {
                color: isActive ? undefined : 'var(--foreground)'
            },
            "aria-label": title,
            children: children
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, this);
    };
    const Separator = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
            lineNumber: 77,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-1 p-3 border-b border-slate-200 dark:border-slate-700",
                style: {
                    backgroundColor: 'var(--card)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().toggleBold().run(),
                        isActive: editor.isActive('bold'),
                        title: "Bold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().toggleItalic().run(),
                        isActive: editor.isActive('italic'),
                        title: "Italic",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().toggleUnderline().run(),
                        isActive: editor.isActive('underline'),
                        title: "Underline",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__["Underline"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: editor.getAttributes('heading').level || 'paragraph',
                        onChange: (e)=>{
                            const level = e.target.value;
                            if (level === 'paragraph') {
                                editor.chain().focus().setParagraph().run();
                            } else {
                                editor.chain().focus().toggleHeading({
                                    level: parseInt(level)
                                }).run();
                            }
                        },
                        className: "px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded",
                        style: {
                            backgroundColor: 'var(--card)',
                            color: 'var(--foreground)'
                        },
                        title: "Text Style",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "paragraph",
                                children: "Paragraph"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "1",
                                children: "Heading 1"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "2",
                                children: "Heading 2"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "3",
                                children: "Heading 3"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "4",
                                children: "Heading 4"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "5",
                                children: "Heading 5"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "6",
                                children: "Heading 6"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>{
                            console.log('Bullet list clicked');
                            console.log('Current HTML:', editor.getHTML());
                            editor.chain().focus().toggleBulletList().run();
                            console.log('After bullet list HTML:', editor.getHTML());
                        },
                        isActive: editor.isActive('bulletList'),
                        title: "Bullet List",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>{
                            console.log('Ordered list clicked');
                            console.log('Current HTML:', editor.getHTML());
                            editor.chain().focus().toggleOrderedList().run();
                            console.log('After ordered list HTML:', editor.getHTML());
                        },
                        isActive: editor.isActive('orderedList'),
                        title: "Numbered List",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__["ListOrdered"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().toggleBlockquote().run(),
                        isActive: editor.isActive('blockquote'),
                        title: "Quote",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().toggleCodeBlock().run(),
                        isActive: editor.isActive('codeBlock'),
                        title: "Code Block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().toggleMathBlock().run(),
                        isActive: editor.isActive('mathBlock'),
                        title: "Mark as Mathematical Expression (will be highlighted specially)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().toggleSpecialCodeBlock().run(),
                        isActive: editor.isActive('specialCodeBlock'),
                        title: "Mark as Special Code Block (enhanced styling)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().setTextAlign('left').run(),
                        isActive: editor.isActive({
                            textAlign: 'left'
                        }),
                        title: "Align Left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().setTextAlign('center').run(),
                        isActive: editor.isActive({
                            textAlign: 'center'
                        }),
                        title: "Align Center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__["AlignCenter"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().setTextAlign('right').run(),
                        isActive: editor.isActive({
                            textAlign: 'right'
                        }),
                        title: "Align Right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__["AlignRight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().setTextAlign('justify').run(),
                        isActive: editor.isActive({
                            textAlign: 'justify'
                        }),
                        title: "Justify",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$justify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignJustify$3e$__["AlignJustify"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "color",
                                onChange: (e)=>editor.chain().focus().setColor(e.target.value).run(),
                                value: editor.getAttributes('textStyle').color || '#000000',
                                className: "w-8 h-8 border border-slate-300 dark:border-slate-600 rounded cursor-pointer",
                                title: "Text Color"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                onClick: ()=>editor.chain().focus().unsetColor().run(),
                                title: "Remove Text Color",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "color",
                                onChange: (e)=>editor.chain().focus().setHighlight({
                                        color: e.target.value
                                    }).run(),
                                value: editor.getAttributes('highlight').color || '#ffff00',
                                className: "w-8 h-8 border border-slate-300 dark:border-slate-600 rounded cursor-pointer",
                                title: "Highlight Color"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                onClick: ()=>editor.chain().focus().unsetHighlight().run(),
                                title: "Remove Highlight",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__["Highlighter"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>{
                            const url = window.prompt('Enter URL:');
                            if (url) {
                                editor.chain().focus().setLink({
                                    href: url
                                }).run();
                            }
                        },
                        isActive: editor.isActive('link'),
                        title: "Insert Link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>setShowImageModal(true),
                        title: "Insert Image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().insertTable({
                                rows: 3,
                                cols: 3,
                                withHeaderRow: true
                            }).run(),
                        title: "Insert Table",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().undo().run(),
                        disabled: !editor.can().undo(),
                        title: "Undo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__["Undo"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        onClick: ()=>editor.chain().focus().redo().run(),
                        disabled: !editor.can().redo(),
                        title: "Redo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__["Redo"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Notepad$2f$ImageInsertModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageInsertModal"], {
                isOpen: showImageModal,
                onClose: ()=>setShowImageModal(false),
                onInsert: (src, alt)=>{
                    editor.chain().focus().setImage({
                        src,
                        alt
                    }).run();
                    setShowImageModal(false);
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Notepad/NotepadToolbar.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(NotepadToolbar, "83jF2omxuD2vOhI0jg+38cJxBOM=");
_c = NotepadToolbar;
var _c;
__turbopack_context__.k.register(_c, "NotepadToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Notepad/extensions/MathBlock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Custom Tiptap Extension for Mathematical Expressions
 * Allows users to explicitly mark text as mathematical content
 */ __turbopack_context__.s([
    "MathBlock",
    ()=>MathBlock,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
const MathBlock = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: 'mathBlock',
    group: 'block',
    content: 'inline*',
    parseHTML () {
        return [
            {
                tag: 'div[data-type="math-block"]'
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes } = param;
        return [
            'div',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(HTMLAttributes, {
                'data-type': 'math-block',
                'data-math': 'true',
                class: 'math-block-content'
            }),
            0
        ];
    },
    addCommands () {
        return {
            setMathBlock: ()=>(param)=>{
                    let { commands } = param;
                    return commands.setNode(this.name);
                },
            toggleMathBlock: ()=>(param)=>{
                    let { commands } = param;
                    return commands.toggleNode(this.name, 'paragraph');
                }
        };
    }
});
const __TURBOPACK__default__export__ = MathBlock;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Notepad/extensions/SpecialCodeBlock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Custom Tiptap Extension for Special Code Blocks
 * Allows users to explicitly mark code blocks with enhanced styling
 */ __turbopack_context__.s([
    "SpecialCodeBlock",
    ()=>SpecialCodeBlock,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
const SpecialCodeBlock = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: 'specialCodeBlock',
    group: 'block',
    content: 'text*',
    marks: '',
    code: true,
    defining: true,
    addOptions () {
        return {
            languagePrefixes: [],
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: 'pre[data-type="special-code"]',
                preserveWhitespace: 'full'
            }
        ];
    },
    renderHTML (param) {
        let { HTMLAttributes } = param;
        return [
            'pre',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes, {
                'data-type': 'special-code',
                'data-enhanced': 'true'
            }),
            [
                'code',
                {},
                0
            ]
        ];
    },
    addCommands () {
        return {
            setSpecialCodeBlock: ()=>(param)=>{
                    let { commands } = param;
                    return commands.setNode(this.name);
                },
            toggleSpecialCodeBlock: ()=>(param)=>{
                    let { commands } = param;
                    return commands.toggleNode(this.name, 'paragraph');
                }
        };
    },
    addInputRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textblockTypeInputRule"])({
                find: /^```special$/,
                type: this.type
            })
        ];
    }
});
const __TURBOPACK__default__export__ = SpecialCodeBlock;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Notepad/NotepadEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Notepad Editor Component
 * 
 * Main Tiptap editor with image support, drag-and-drop, and paste functionality
 */ __turbopack_context__.s([
    "NotepadEditor",
    ()=>NotepadEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-image/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-table/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$row$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-table-row/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$cell$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-table-cell/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2d$header$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-table-header/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-color/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$style$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-text-style/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-underline/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$highlight$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-highlight/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-text-align/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$placeholder$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extension-placeholder/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extensions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tiptap/extensions/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Notepad$2f$NotepadToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Notepad/NotepadToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$notepadService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/services/notepadService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Notepad$2f$extensions$2f$MathBlock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Notepad/extensions/MathBlock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Notepad$2f$extensions$2f$SpecialCodeBlock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Notepad/extensions/SpecialCodeBlock.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
;
;
;
;
;
function NotepadEditor(param) {
    let { content = '', onChange, placeholder = 'Start writing your note…' } = param;
    _s();
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                HTMLAttributes: {
                    class: 'max-w-md h-auto rounded-lg mx-auto block'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-blue-600 hover:text-blue-800 underline'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"].configure({
                resizable: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"],
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"],
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$table$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"],
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$style$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"],
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$style$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextStyle"],
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Underline"],
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$highlight$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Highlight"].configure({
                multicolor: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlign"].configure({
                types: [
                    'heading',
                    'paragraph'
                ]
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$extensions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Placeholder"].configure({
                placeholder
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Notepad$2f$extensions$2f$MathBlock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Notepad$2f$extensions$2f$SpecialCodeBlock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ],
        content,
        immediatelyRender: false,
        onUpdate: {
            "NotepadEditor.useEditor[editor]": (param)=>{
                let { editor } = param;
                const html = editor.getHTML();
                onChange === null || onChange === void 0 ? void 0 : onChange(html);
            }
        }["NotepadEditor.useEditor[editor]"],
        editorProps: {
            attributes: {
                class: 'prose prose-slate dark:prose-invert max-w-none focus:outline-none min-h-[400px] p-4'
            },
            handleDrop: {
                "NotepadEditor.useEditor[editor]": (view, event, slice, moved)=>{
                    if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
                        const file = event.dataTransfer.files[0];
                        // Check if it's an image file
                        if (file.type.startsWith('image/')) {
                            event.preventDefault();
                            handleImageUpload(file);
                            return true;
                        }
                    }
                    return false;
                }
            }["NotepadEditor.useEditor[editor]"],
            handlePaste: {
                "NotepadEditor.useEditor[editor]": (view, event, slice)=>{
                    var _event_clipboardData;
                    const items = Array.from(((_event_clipboardData = event.clipboardData) === null || _event_clipboardData === void 0 ? void 0 : _event_clipboardData.items) || []);
                    for (const item of items){
                        if (item.type.startsWith('image/')) {
                            event.preventDefault();
                            const file = item.getAsFile();
                            if (file) {
                                handleImageUpload(file);
                            }
                            return true;
                        }
                    }
                    return false;
                }
            }["NotepadEditor.useEditor[editor]"]
        }
    });
    const handleImageUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotepadEditor.useCallback[handleImageUpload]": async (file)=>{
            try {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$notepadService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notepadService"].uploadImage(file);
                if (result.success && result.url) {
                    // Prompt for alt text
                    const alt = prompt('Enter alt text for the image (for accessibility):') || 'Image';
                    editor === null || editor === void 0 ? void 0 : editor.chain().focus().setImage({
                        src: result.url,
                        alt
                    }).run();
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Image inserted successfully');
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.error || 'Failed to upload image');
                }
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to process image');
            }
        }
    }["NotepadEditor.useCallback[handleImageUpload]"], [
        editor
    ]);
    // Update editor content when content prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotepadEditor.useEffect": ()=>{
            if (editor && content !== undefined) {
                const currentContent = editor.getHTML();
                // Only update if content is different to avoid unnecessary re-renders
                if (currentContent !== content) {
                    editor.commands.setContent(content);
                }
            }
        }
    }["NotepadEditor.useEffect"], [
        editor,
        content
    ]);
    // Apply list styles after editor is created
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotepadEditor.useEffect": ()=>{
            if (editor) {
                const applyListStyles = {
                    "NotepadEditor.useEffect.applyListStyles": ()=>{
                        const editorElement = document.querySelector('.ProseMirror');
                        if (editorElement) {
                            const lists = editorElement.querySelectorAll('ul, ol');
                            lists.forEach({
                                "NotepadEditor.useEffect.applyListStyles": (list)=>{
                                    list.style.listStyleType = list.tagName === 'UL' ? 'disc' : 'decimal';
                                    list.style.paddingLeft = '1.5rem';
                                    list.style.margin = '1rem 0';
                                    const items = list.querySelectorAll('li');
                                    items.forEach({
                                        "NotepadEditor.useEffect.applyListStyles": (li)=>{
                                            li.style.margin = '0.25rem 0';
                                            li.style.lineHeight = '1.6';
                                            li.style.color = 'rgb(51 65 85)';
                                        }
                                    }["NotepadEditor.useEffect.applyListStyles"]);
                                }
                            }["NotepadEditor.useEffect.applyListStyles"]);
                        }
                    }
                }["NotepadEditor.useEffect.applyListStyles"];
                // Apply styles immediately
                applyListStyles();
                // Apply styles on update
                editor.on('update', applyListStyles);
                editor.on('selectionUpdate', applyListStyles);
                return ({
                    "NotepadEditor.useEffect": ()=>{
                        editor.off('update', applyListStyles);
                        editor.off('selectionUpdate', applyListStyles);
                    }
                })["NotepadEditor.useEffect"];
            }
        }
    }["NotepadEditor.useEffect"], [
        editor
    ]);
    if (!editor) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
            lineNumber: 183,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm",
        style: {
            backgroundColor: 'var(--card)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: "\n          .ProseMirror {\n            color: var(--foreground) !important;\n            background-color: var(--card) !important;\n          }\n          .ProseMirror ul {\n            list-style-type: disc !important;\n            padding-left: 1.5rem !important;\n            margin: 1rem 0 !important;\n          }\n          .ProseMirror ol {\n            list-style-type: decimal !important;\n            padding-left: 1.5rem !important;\n            margin: 1rem 0 !important;\n          }\n          .ProseMirror li {\n            margin: 0.25rem 0 !important;\n            line-height: 1.6 !important;\n            color: var(--foreground) !important;\n          }\n          .ProseMirror h1, .ProseMirror h2, .ProseMirror h3, .ProseMirror h4, .ProseMirror h5, .ProseMirror h6 {\n            color: var(--foreground) !important;\n          }\n          .ProseMirror p {\n            color: var(--foreground) !important;\n          }\n          .ProseMirror strong {\n            color: var(--foreground) !important;\n          }\n          .ProseMirror em {\n            color: var(--foreground) !important;\n          }\n          .ProseMirror code {\n            color: var(--foreground) !important;\n          }\n        "
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Notepad$2f$NotepadToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotepadToolbar"], {
                editor: editor
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                        editor: editor,
                        className: "min-h-[400px] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 rounded-b-lg"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-blue-50 dark:bg-blue-900/20 border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-b-lg flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-200",
                        onDragOver: (e)=>{
                            e.preventDefault();
                            e.currentTarget.classList.remove('opacity-0');
                            e.currentTarget.classList.add('opacity-100');
                        },
                        onDragLeave: (e)=>{
                            e.preventDefault();
                            e.currentTarget.classList.remove('opacity-100');
                            e.currentTarget.classList.add('opacity-0');
                        },
                        onDrop: (e)=>{
                            e.preventDefault();
                            e.currentTarget.classList.remove('opacity-100');
                            e.currentTarget.classList.add('opacity-0');
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-blue-600 dark:text-blue-400 mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-12 h-12 mx-auto",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-600 dark:text-blue-400 font-medium",
                                    children: "Drop image here to insert"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Notepad/NotepadEditor.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s(NotepadEditor, "WKSjiUVNU8LjOIzU9FI2LijPZkM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
_c = NotepadEditor;
var _c;
__turbopack_context__.k.register(_c, "NotepadEditor");
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
"[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Admin Notes Management Page
 */ __turbopack_context__.s([
    "default",
    ()=>AdminNotesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-client] (ecmascript) <export default as ArrowLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Admin/AdminLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Admin/AdminTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Admin/AdminModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$DeleteConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Admin/DeleteConfirmModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Notepad$2f$NotepadEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Notepad/NotepadEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function AdminNotesPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isEditorMode, setIsEditorMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentNote, setCurrentNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editorContent, setEditorContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAutoSaving, setIsAutoSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const autoSaveTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingNote, setEditingNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noteToDelete, setNoteToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load notes from backend
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminNotesPage.useEffect": ()=>{
            const loadNotes = {
                "AdminNotesPage.useEffect.loadNotes": async ()=>{
                    if (!isAuthenticated) return;
                    try {
                        setLoading(true);
                        const fetchedNotes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAdminNotes"])();
                        setNotes(fetchedNotes);
                    } catch (error) {
                        console.error('Error loading notes:', error);
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to load notes');
                    } finally{
                        setLoading(false);
                    }
                }
            }["AdminNotesPage.useEffect.loadNotes"];
            loadNotes();
        }
    }["AdminNotesPage.useEffect"], [
        isAuthenticated
    ]);
    const columns = [
        {
            key: "title",
            label: "Title"
        },
        {
            key: "topic",
            label: "Topic"
        },
        {
            key: "tags",
            label: "Tags",
            render: (tags)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-1",
                    children: [
                        tags.slice(0, 2).map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs rounded-full",
                                children: tag
                            }, index, false, {
                                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)),
                        tags.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-1 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 text-xs rounded-full",
                            children: [
                                "+",
                                tags.length - 2
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
        },
        {
            key: "createdAt",
            label: "Created"
        }
    ];
    const filteredNotes = notes.filter((note)=>note.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.topic.toLowerCase().includes(searchTerm.toLowerCase()) || note.tags.some((tag)=>tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const handleEdit = (note)=>{
        setEditingNote(note);
        setIsModalOpen(true);
    };
    const handleEditContent = (note)=>{
        setCurrentNote(note);
        setEditorContent(note.content || '');
        setIsEditorMode(true);
    };
    const handleDelete = (note)=>{
        setNoteToDelete(note);
        setIsDeleteModalOpen(true);
    };
    const confirmDelete = async ()=>{
        if (!isAuthenticated || !noteToDelete) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Authentication required');
            return;
        }
        try {
            setIsDeleting(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteNote"])(noteToDelete._id);
            setNotes(notes.filter((n)=>n._id !== noteToDelete._id));
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Note deleted successfully');
            setIsDeleteModalOpen(false);
            setNoteToDelete(null);
        } catch (error) {
            console.error('Error deleting note:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to delete note');
        } finally{
            setIsDeleting(false);
        }
    };
    const cancelDelete = ()=>{
        setIsDeleteModalOpen(false);
        setNoteToDelete(null);
    };
    const handleSave = async (noteData)=>{
        if (!isAuthenticated) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Authentication required');
            return;
        }
        if (editingNote) {
            // For editing existing notes, save directly
            try {
                const updatedNote = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateNote"])(editingNote._id, noteData);
                setNotes(notes.map((note)=>note._id === editingNote._id ? updatedNote : note));
                setIsModalOpen(false);
                setEditingNote(null);
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Note updated successfully');
            } catch (error) {
                console.error('Error updating note:', error);
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to update note');
            }
        } else {
            // For new notes, create the note and show editor
            const newNote = {
                _id: 'temp-' + Date.now(),
                title: noteData.title || "",
                topic: noteData.topic || "",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                tags: noteData.tags || []
            };
            setCurrentNote(newNote);
            setIsModalOpen(false);
            setIsEditorMode(true);
        }
    };
    const handleEditorSave = async ()=>{
        if (!currentNote || !isAuthenticated) return;
        try {
            if (currentNote._id.startsWith('temp-')) {
                // Create new note
                const newNote = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNote"])({
                    title: currentNote.title,
                    content: editorContent,
                    topic: currentNote.topic,
                    tags: currentNote.tags
                });
                setNotes([
                    newNote,
                    ...notes
                ]);
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Note created successfully');
            } else {
                // Update existing note
                const updatedNote = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateNote"])(currentNote._id, {
                    content: editorContent
                });
                setNotes(notes.map((note)=>note._id === currentNote._id ? updatedNote : note));
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Note updated successfully');
            }
            setIsEditorMode(false);
            setCurrentNote(null);
            setEditorContent('');
        } catch (error) {
            console.error('Error saving note:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to save note');
        }
    };
    const handleEditorCancel = ()=>{
        setIsEditorMode(false);
        setCurrentNote(null);
        setEditorContent('');
    };
    // Auto-save functionality
    const autoSave = async (content)=>{
        if (!currentNote || !content.trim() || currentNote._id.startsWith('temp-')) return;
        setIsAutoSaving(true);
        try {
            // Actually save to backend
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateNote"])(currentNote._id, {
                content
            });
            console.log('Auto-saved content for note:', currentNote.title);
        } catch (error) {
            console.error('Auto-save failed:', error);
        } finally{
            setIsAutoSaving(false);
        }
    };
    // Debounced auto-save effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminNotesPage.useEffect": ()=>{
            if (autoSaveTimeoutRef.current) {
                clearTimeout(autoSaveTimeoutRef.current);
            }
            if (editorContent && isEditorMode) {
                autoSaveTimeoutRef.current = setTimeout({
                    "AdminNotesPage.useEffect": ()=>{
                        autoSave(editorContent);
                    }
                }["AdminNotesPage.useEffect"], 2000); // Auto-save after 2 seconds of inactivity
            }
            return ({
                "AdminNotesPage.useEffect": ()=>{
                    if (autoSaveTimeoutRef.current) {
                        clearTimeout(autoSaveTimeoutRef.current);
                    }
                }
            })["AdminNotesPage.useEffect"];
        }
    }["AdminNotesPage.useEffect"], [
        editorContent,
        isEditorMode
    ]);
    // Show editor mode if active
    if (isEditorMode && currentNote) {
        const isEditingExisting = !currentNote._id.startsWith('temp-');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: isEditingExisting ? "Edit Note Content" : "Create New Note",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setIsEditorMode(false);
                                setCurrentNote(null);
                                setEditorContent('');
                            },
                            className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__["ArrowLeftIcon"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                "Back to Notes List"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-slate-900 dark:text-slate-100",
                                        children: currentNote.title
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 dark:text-slate-400 mt-1",
                                        children: [
                                            "Topic: ",
                                            currentNote.topic,
                                            " • ",
                                            currentNote.tags.length > 0 && "Tags: ".concat(currentNote.tags.join(', '))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    isAutoSaving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-sm text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this),
                                            "Auto-saving..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, this),
                                    !isAutoSaving && editorContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-green-600 dark:text-green-400",
                                        children: "✓ Auto-saved"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                        lineNumber: 296,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleEditorCancel,
                                        className: "px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleEditorSave,
                                        className: "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:scale-105 text-white px-4 py-2 rounded-md transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer",
                                        children: "Save & Finish"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Notepad$2f$NotepadEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotepadEditor"], {
                        content: editorContent,
                        placeholder: "Start writing your note content...",
                        onChange: (content)=>{
                            setEditorContent(content);
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                lineNumber: 261,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
            lineNumber: 260,
            columnNumber: 7
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "Manage Notes",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                lineNumber: 335,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 dark:text-slate-400",
                                children: "Loading notes..."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                lineNumber: 336,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 334,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                    lineNumber: 333,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                lineNumber: 332,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
            lineNumber: 331,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Manage Notes",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold text-slate-900 dark:text-white",
                                    children: "Technical Notes"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'var(--text-primary)'
                                    },
                                    children: "Manage your technical notes and learning resources"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setEditingNote(null);
                                setIsModalOpen(true);
                            },
                            className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-200 font-medium cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800",
                            children: "Add New Note"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 rounded-lg shadow-md",
                    style: {
                        backgroundColor: 'var(--search-bg)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search notes...",
                        value: searchTerm,
                        onChange: (e)=>setSearchTerm(e.target.value),
                        className: "w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        style: {
                            backgroundColor: 'var(--card)',
                            borderColor: 'var(--search-border)',
                            color: 'var(--search-text)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    columns: columns,
                    data: filteredNotes,
                    onEdit: handleEdit,
                    onDelete: handleDelete,
                    customActions: [
                        {
                            label: "Edit Notes",
                            onClick: handleEditContent
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$AdminModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isModalOpen,
                    onClose: ()=>{
                        setIsModalOpen(false);
                        setEditingNote(null);
                    },
                    title: editingNote ? "Edit Note" : "Add New Note",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoteForm, {
                        note: editingNote,
                        onSave: handleSave,
                        onCancel: ()=>{
                            setIsModalOpen(false);
                            setEditingNote(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Admin$2f$DeleteConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isDeleteModalOpen,
                    onClose: cancelDelete,
                    onConfirm: confirmDelete,
                    title: "Delete Note",
                    message: "Are you sure you want to delete this note?",
                    itemName: noteToDelete === null || noteToDelete === void 0 ? void 0 : noteToDelete.title,
                    isDeleting: isDeleting
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                    lineNumber: 418,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
            lineNumber: 346,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
_s(AdminNotesPage, "own7cp83mUEDD/30GJxrooo0yBo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AdminNotesPage;
// Note Form Component
function NoteForm(param) {
    let { note, onSave, onCancel } = param;
    _s1();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: (note === null || note === void 0 ? void 0 : note.title) || "",
        topic: (note === null || note === void 0 ? void 0 : note.topic) || "",
        tags: (note === null || note === void 0 ? void 0 : note.tags) || []
    });
    const [tagInput, setTagInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSave(formData);
    };
    const addTag = ()=>{
        if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
            setFormData({
                ...formData,
                tags: [
                    ...formData.tags,
                    tagInput.trim()
                ]
            });
            setTagInput("");
        }
    };
    const removeTag = (tagToRemove)=>{
        setFormData({
            ...formData,
            tags: formData.tags.filter((tag)=>tag !== tagToRemove)
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-2",
                        style: {
                            color: 'var(--text-primary)'
                        },
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: formData.title,
                        onChange: (e)=>setFormData({
                                ...formData,
                                title: e.target.value
                            }),
                        className: "w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        style: {
                            backgroundColor: 'var(--card)',
                            color: 'var(--foreground)',
                            borderColor: 'var(--border)'
                        },
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-2",
                        style: {
                            color: 'var(--text-primary)'
                        },
                        children: "Topic"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: formData.topic,
                        onChange: (e)=>setFormData({
                                ...formData,
                                topic: e.target.value
                            }),
                        className: "w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        style: {
                            backgroundColor: 'var(--card)',
                            color: 'var(--foreground)',
                            borderColor: 'var(--border)'
                        },
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 497,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                lineNumber: 493,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-2",
                        style: {
                            color: 'var(--text-primary)'
                        },
                        children: "Tags"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-2",
                        children: formData.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm rounded-full",
                                children: [
                                    tag,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>removeTag(tag),
                                        className: "ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-100",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                        lineNumber: 522,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                lineNumber: 517,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: tagInput,
                                onChange: (e)=>setTagInput(e.target.value),
                                onKeyPress: (e)=>e.key === 'Enter' && (e.preventDefault(), addTag()),
                                placeholder: "Add a tag...",
                                className: "flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                style: {
                                    backgroundColor: 'var(--card)',
                                    color: 'var(--foreground)',
                                    borderColor: 'var(--border)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                lineNumber: 533,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: addTag,
                                className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer",
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end space-x-3 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 558,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:scale-105 text-white px-4 py-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer",
                        children: note ? "Update" : "Create"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
                lineNumber: 557,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/admin/dashboard/notes/AdminNotesPage.tsx",
        lineNumber: 473,
        columnNumber: 5
    }, this);
}
_s1(NoteForm, "oLiUPxXF47PL8ZVZRSWihC32k04=");
_c1 = NoteForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdminNotesPage");
__turbopack_context__.k.register(_c1, "NoteForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_921a9521._.js.map