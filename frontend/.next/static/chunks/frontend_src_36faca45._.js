(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/Hero/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Premium hero section with striking visual design
 */ __turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const BACKEND_URL = ("TURBOPACK compile-time value", "http://localhost:4000/") || "http://localhost:4000";
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        }
    }
};
function Hero() {
    _s();
    const mainData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"])();
    const profile = mainData === null || mainData === void 0 ? void 0 : mainData.profile;
    const projects = (mainData === null || mainData === void 0 ? void 0 : mainData.projects) || [];
    const research = (mainData === null || mainData === void 0 ? void 0 : mainData.research) || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: [
                                1,
                                1.2,
                                1
                            ],
                            rotate: [
                                0,
                                90,
                                0
                            ],
                            opacity: [
                                0.3,
                                0.5,
                                0.3
                            ]
                        },
                        transition: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "absolute -left-96 -top-96 h-[800px] w-[800px] rounded-full bg-blue-400 opacity-30 blur-3xl dark:bg-blue-500 dark:opacity-20"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: [
                                1,
                                1.3,
                                1
                            ],
                            rotate: [
                                0,
                                -90,
                                0
                            ],
                            opacity: [
                                0.2,
                                0.4,
                                0.2
                            ]
                        },
                        transition: {
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "absolute -bottom-96 -right-96 h-[800px] w-[800px] rounded-full bg-sky-300 opacity-25 blur-3xl dark:bg-sky-400 dark:opacity-20"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: containerVariants,
                    initial: "hidden",
                    animate: "visible",
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-left pl-0 lg:pl-8 order-2 lg:order-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    variants: itemVariants,
                                    className: "text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 dark:from-blue-400 dark:via-sky-400 dark:to-blue-500",
                                    children: [
                                        "Hi, I'm",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-900 dark:text-white",
                                            children: (profile === null || profile === void 0 ? void 0 : profile.name) || "Your Name"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                (profile === null || profile === void 0 ? void 0 : profile.designation) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    variants: itemVariants,
                                    className: "text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6",
                                    children: profile.designation
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    variants: itemVariants,
                                    className: "text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-slate-300 max-w-3xl mb-8",
                                    children: (profile === null || profile === void 0 ? void 0 : profile.bio) || "Your bio goes here."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: itemVariants,
                                    className: "flex flex-wrap gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/project",
                                                className: "inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 rounded-full shadow-lg shadow-blue-500/40 hover:shadow-blue-400/60 hover:from-blue-700 hover:to-sky-600 transition-all duration-300",
                                                children: [
                                                    "View Projects",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "ml-2 h-5 w-5",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-white bg-white/80 dark:bg-white/10 backdrop-blur-sm border-2 border-gray-200 dark:border-white/20 rounded-full hover:bg-white dark:hover:bg-white/20 hover:border-gray-300 dark:hover:border-white/30 transition-all duration-300",
                                                children: "Get in Touch"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemVariants,
                            className: "flex justify-center lg:justify-end order-1 lg:order-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.8,
                                    rotateY: -15
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    rotateY: 0
                                },
                                transition: {
                                    delay: 0.6,
                                    duration: 0.8,
                                    ease: [
                                        0.4,
                                        0,
                                        0.2,
                                        1
                                    ]
                                },
                                whileHover: {
                                    scale: 1.05,
                                    rotateY: 5,
                                    transition: {
                                        duration: 0.3
                                    }
                                },
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 opacity-30 blur-xl scale-110 animate-pulse dark:opacity-20"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/40 dark:border-white/20 shadow-2xl shadow-blue-500/30 dark:shadow-blue-500/30 bg-gradient-to-br from-blue-100/50 to-sky-100/50 dark:from-blue-500/20 dark:to-sky-500/20 backdrop-blur-sm",
                                        children: [
                                            (profile === null || profile === void 0 ? void 0 : profile.image) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: profile.image.startsWith("http") ? profile.image : "".concat(BACKEND_URL.replace(/\/$/, "")).concat(profile.image.startsWith("/") ? "" : "/").concat(profile.image),
                                                alt: (profile === null || profile === void 0 ? void 0 : profile.name) || "Profile",
                                                fill: true,
                                                className: "object-cover object-center",
                                                priority: true,
                                                sizes: "(max-width: 768px) 320px, (max-width: 1024px) 384px, 384px"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent dark:from-blue-900/20"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            delay: 1.2,
                                            duration: 0.6
                                        },
                                        className: "absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg border-2 border-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: "🤖"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            delay: 1.4,
                                            duration: 0.6
                                        },
                                        className: "absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-sky-600 to-sky-800 flex items-center justify-center shadow-lg border-2 border-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: "📊"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            delay: 1.6,
                                            duration: 0.6
                                        },
                                        className: "absolute top-1/2 -left-8 w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-sky-700 flex items-center justify-center shadow-lg border-2 border-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            delay: 1.8,
                                            duration: 0.6
                                        },
                                        className: "absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-gradient-to-br from-sky-700 to-blue-900 flex items-center justify-center shadow-lg border-2 border-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg",
                                            children: "📈"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Hero/Hero.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Hero, "iMtUbOmA6ipzaa8TCaerjT4dKj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility functions
 */ __turbopack_context__.s([
    "calculateReadingTime",
    ()=>calculateReadingTime,
    "cn",
    ()=>cn,
    "debounce",
    ()=>debounce,
    "extractHeadings",
    ()=>extractHeadings,
    "formatDate",
    ()=>formatDate,
    "slugify",
    ()=>slugify,
    "truncate",
    ()=>truncate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$reading$2d$time$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/reading-time/index.js [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs);
}
function calculateReadingTime(text) {
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$reading$2d$time$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(text);
    return Math.ceil(stats.minutes);
}
function formatDate(date) {
    let format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "long";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    if (format === "short") {
        return dateObj.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    }
    return dateObj.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function truncate(text, length) {
    if (text.length <= length) return text;
    return text.slice(0, length).trim() + "...";
}
function slugify(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function extractHeadings(html) {
    const headings = [];
    // Parse HTML to extract h1-h6 tags
    const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h\1>/gi;
    let match;
    while((match = headingRegex.exec(html)) !== null){
        const level = parseInt(match[1]);
        // Strip any HTML tags from the heading text
        const text = match[2].replace(/<[^>]*>/g, '').trim();
        const id = slugify(text);
        if (text) {
            headings.push({
                id,
                text,
                level
            });
        }
    }
    return headings;
}
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const later = ()=>{
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/UI/CardImage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Reusable Card Image Component
 * Provides consistent image handling across all card types
 * Ensures unique image assignment across all cards
 */ __turbopack_context__.s([
    "default",
    ()=>CardImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$ImageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/contexts/ImageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CardImage(param) {
    let { src, alt, category, title, className = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110", fallbackText } = param;
    _s();
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { getUniqueImage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$ImageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageManager"])();
    // Determine the image source - use custom src if provided, otherwise get unique image
    const imageSrc = src || getUniqueImage(category, title);
    // Handle image load error
    const handleImageError = ()=>{
        setImageError(true);
    };
    // If image failed to load, show fallback
    if (imageError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center ".concat(className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-4xl mb-2",
                        children: "📝"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/UI/CardImage.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-600 dark:text-slate-400 text-sm font-medium",
                        children: fallbackText || (category === null || category === void 0 ? void 0 : category.toUpperCase()) || 'TECH'
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/UI/CardImage.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/UI/CardImage.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/UI/CardImage.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: imageSrc,
        alt: alt,
        className: className,
        loading: "lazy",
        onError: handleImageError
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/UI/CardImage.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(CardImage, "qXCE2qnX2kuVgEpF2LNkquOz4oA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$contexts$2f$ImageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageManager"]
    ];
});
_c = CardImage;
var _c;
__turbopack_context__.k.register(_c, "CardImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Card/NoteCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Premium Note Card with images and glassmorphism design
 */ __turbopack_context__.s([
    "default",
    ()=>NoteCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$CardImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UI/CardImage.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// Helper function to extract text preview from HTML content
function getTextPreview(html) {
    let maxLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 150;
    if (!html) return '';
    // Remove HTML tags
    const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length <= maxLength) return text;
    // Cut at word boundary
    return text.substring(0, maxLength).split(' ').slice(0, -1).join(' ') + '...';
}
function NoteCard(param) {
    let { note, index = 0 } = param;
    // Get content preview from the note content if no excerpt is provided
    const preview = note.excerpt || note.content ? getTextPreview(note.content || note.excerpt || '', 150) : '';
    // Determine category for image selection
    const category = note.topic || 'notes';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-50px"
        },
        transition: {
            duration: 0.4,
            delay: index * 0.1
        },
        whileHover: {
            scale: 1.02,
            y: -4,
            transition: {
                duration: 0.3
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/notes/".concat(note._id),
            className: "group block h-full overflow-hidden rounded-xl bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200/40 dark:border-slate-700/30 shadow-lg hover:shadow-xl hover:shadow-gray-300/30 dark:hover:shadow-blue-500/20 transition-all duration-300",
            "aria-label": "Read note: ".concat(note.title),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-40 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$CardImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: note.image,
                            alt: note.title,
                            category: category,
                            title: note.title,
                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                            fallbackText: category.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        note.topic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-3 left-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 text-xs font-medium bg-blue-600/90 dark:bg-blue-500/90 text-white rounded-full backdrop-blur-sm",
                                children: note.topic
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2",
                            children: note.title
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed",
                            children: preview
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                    dateTime: note.updatedAt,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(note.updatedAt, "short")
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                note.readingTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-4 w-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        note.readingTime,
                                                        " min read"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        note.tags && note.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700",
                            children: [
                                note.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)),
                                note.tags.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",
                                    children: [
                                        "+",
                                        note.tags.length - 3
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Card/NoteCard.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = NoteCard;
var _c;
__turbopack_context__.k.register(_c, "NoteCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Card/BlogCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Premium Blog Card with reusable CardImage component
 */ __turbopack_context__.s([
    "default",
    ()=>BlogCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$CardImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UI/CardImage.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function BlogCard(param) {
    let { blog, featured = false, index = 0 } = param;
    var _blog_category;
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ]
            }
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: cardVariants,
        initial: "hidden",
        animate: "visible",
        whileHover: "hover",
        className: "group relative overflow-hidden rounded-xl bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200/40 dark:border-slate-700/30 shadow-lg hover:shadow-xl hover:shadow-gray-300/30 dark:hover:shadow-blue-500/20 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$CardImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: blog.image,
                        alt: blog.title,
                        category: blog.category,
                        title: blog.title,
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                        fallbackText: ((_blog_category = blog.category) === null || _blog_category === void 0 ? void 0 : _blog_category.toUpperCase()) || 'BLOG'
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-1 text-xs font-medium bg-blue-600/90 dark:bg-blue-500/90 text-white rounded-full backdrop-blur-sm",
                            children: blog.category || 'General'
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                        children: blog.title
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3",
                        children: blog.description
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3 h-3",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(blog.createdAt)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: blog.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800",
                        children: [
                            "Check Blog",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Card/BlogCard.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = BlogCard;
var _c;
__turbopack_context__.k.register(_c, "BlogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Card/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Premium Project Card with images and glassmorphism design
 */ __turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$CardImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UI/CardImage.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ProjectCard(param) {
    let { project, index = 0 } = param;
    var _project_technologies_, _project_technologies;
    // Determine category for image selection
    const category = ((_project_technologies = project.technologies) === null || _project_technologies === void 0 ? void 0 : (_project_technologies_ = _project_technologies[0]) === null || _project_technologies_ === void 0 ? void 0 : _project_technologies_.toLowerCase()) || 'projects';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-50px"
        },
        transition: {
            duration: 0.4,
            delay: index * 0.1
        },
        whileHover: {
            scale: 1.02,
            y: -4,
            transition: {
                duration: 0.3
            }
        },
        className: "group overflow-hidden rounded-xl bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200/40 dark:border-slate-700/30 shadow-lg hover:shadow-xl hover:shadow-gray-300/30 dark:hover:shadow-blue-500/20 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-40 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$CardImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: project.image,
                        alt: project.title,
                        category: category,
                        title: project.title,
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                        fallbackText: "PROJECT"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    project.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 right-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm ".concat(project.status === 'completed' ? 'bg-green-600/90 dark:bg-green-500/90 text-white' : project.status === 'in-progress' ? 'bg-yellow-600/90 dark:bg-yellow-500/90 text-white' : 'bg-blue-600/90 dark:bg-blue-500/90 text-white'),
                            children: project.status
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-3 text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3",
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    project.technologies && project.technologies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-wrap gap-2",
                        role: "list",
                        "aria-label": "Technologies used",
                        children: [
                            project.technologies.slice(0, 4).map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2.5 py-1 text-xs font-medium rounded-md bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300",
                                    children: tech
                                }, tech, false, {
                                    fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)),
                            project.technologies.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",
                                children: [
                                    "+",
                                    project.technologies.length - 4
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            project.githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.githubUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors",
                                "aria-label": "View ".concat(project.title, " on GitHub"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    "GitHub"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            (project.liveUrl || project.link) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.liveUrl || project.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",
                                "aria-label": "View ".concat(project.liveUrl ? 'live demo' : 'project', " of ").concat(project.title),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    project.liveUrl ? 'Live Demo' : 'View Project'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Card/ProjectCard.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Card/ResearchCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Premium Research Card with images and glassmorphism design
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$CardImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UI/CardImage.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const ResearchCard = (param)=>{
    let { research, index = 0 } = param;
    var _research_category;
    // Determine category for image selection
    const category = ((_research_category = research.category) === null || _research_category === void 0 ? void 0 : _research_category.toLowerCase()) || 'research';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-50px"
        },
        transition: {
            duration: 0.4,
            delay: index * 0.1
        },
        whileHover: {
            scale: 1.02,
            y: -4,
            transition: {
                duration: 0.3
            }
        },
        className: "group overflow-hidden rounded-xl bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200/40 dark:border-slate-700/30 shadow-lg hover:shadow-xl hover:shadow-gray-300/30 dark:hover:shadow-blue-500/20 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-40 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$CardImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: research.image,
                        alt: research.title,
                        category: category,
                        title: research.title,
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                        fallbackText: "RESEARCH"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    research.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-1 text-xs font-medium bg-purple-600/90 dark:bg-purple-500/90 text-white rounded-full backdrop-blur-sm",
                            children: research.category
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2",
                        children: research.title
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed",
                        children: research.description
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    research.tags && research.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-wrap gap-2",
                        children: [
                            research.tags.slice(0, 3).map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2.5 py-1 text-xs font-medium rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
                                    children: tag
                                }, idx, false, {
                                    fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            research.tags.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",
                                children: [
                                    "+",
                                    research.tags.length - 3
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: research.researchLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800",
                        children: [
                            "View Research",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 text-xs text-slate-500 dark:text-slate-400",
                        children: research.formattedDate || new Date(research.createdAt).toLocaleDateString()
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ResearchCard;
const __TURBOPACK__default__export__ = ResearchCard;
var _c;
__turbopack_context__.k.register(_c, "ResearchCard");
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
        slug: "future-of-llms",
        title: "The Future of Large Language Models",
        description: "Exploring the next generation of LLMs and their potential impact on AI applications",
        excerpt: "As we witness the rapid evolution of large language models, it's crucial to understand where this technology is heading and what challenges lie ahead.",
        tags: [
            "LLM",
            "AI",
            "Future Tech",
            "Research"
        ],
        thumbnail: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800",
        updatedAt: "2025-10-01T10:00:00Z",
        createdAt: "2025-10-01T10:00:00Z",
        readingTime: 8,
        author: "Olukunle Owolabi"
    },
    {
        slug: "ml-production-lessons",
        title: "Lessons from Deploying ML at Scale",
        description: "Real-world insights from building and maintaining production ML systems serving millions of users",
        excerpt: "After years of deploying ML systems at Meta and beyond, here are the critical lessons I've learned about production ML.",
        tags: [
            "ML Engineering",
            "Production",
            "Best Practices",
            "Meta"
        ],
        thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
        updatedAt: "2025-09-20T14:00:00Z",
        createdAt: "2025-09-20T14:00:00Z",
        readingTime: 12,
        author: "Olukunle Owolabi"
    },
    {
        slug: "fraud-detection-systems",
        title: "Building Real-Time Fraud Detection Systems",
        description: "A deep dive into architecting and deploying fraud detection systems that operate at scale",
        excerpt: "Fraud detection requires a unique combination of speed, accuracy, and adaptability. Here's how to build systems that deliver all three.",
        tags: [
            "Fraud Detection",
            "Real-Time",
            "ML Systems",
            "Security"
        ],
        thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
        updatedAt: "2025-08-15T16:00:00Z",
        createdAt: "2025-08-15T16:00:00Z",
        readingTime: 15,
        author: "Olukunle Owolabi"
    },
    {
        slug: "phd-journey-tufts",
        title: "My PhD Journey: From Research to Industry",
        description: "Reflections on transitioning from academic research at Tufts to applied AI engineering at Meta",
        excerpt: "The journey from PhD research to industry AI engineering taught me invaluable lessons about bridging theory and practice.",
        tags: [
            "PhD",
            "Career",
            "Research",
            "Industry"
        ],
        thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
        updatedAt: "2025-07-05T10:00:00Z",
        createdAt: "2025-07-05T10:00:00Z",
        readingTime: 10,
        author: "Olukunle Owolabi"
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
"[project]/frontend/src/apis/Blog/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBlog",
    ()=>createBlog,
    "deleteBlog",
    ()=>deleteBlog,
    "getBlogById",
    ()=>getBlogById,
    "getBlogStats",
    ()=>getBlogStats,
    "getBlogs",
    ()=>getBlogs,
    "updateBlog",
    ()=>updateBlog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/axios/Axios.ts [app-client] (ecmascript)");
;
const API_BASE_URL = "/api/blogs";
const createBlog = async (data)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(API_BASE_URL, data, {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    });
    return response.data;
};
const getBlogs = async function() {
    let page = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    console.log('Making API call to:', "".concat(API_BASE_URL, "?page=").concat(page, "&limit=").concat(limit));
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE_URL, "?page=").concat(page, "&limit=").concat(limit), {
        withCredentials: true
    });
    console.log('API response:', response.data);
    // Return the data array directly from the response
    return response.data.data || response.data;
};
const getBlogById = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE_URL, "/").concat(id), {
        withCredentials: true
    });
    return response.data;
};
const updateBlog = async (id, data)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_BASE_URL, "/").concat(id), data, {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    });
    return response.data;
};
const deleteBlog = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("".concat(API_BASE_URL, "/").concat(id), {
        withCredentials: true
    });
    return response.data;
};
const getBlogStats = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE_URL, "/stats"), {
        withCredentials: true
    });
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/apis/About/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOrUpdateProfile",
    ()=>createOrUpdateProfile,
    "getMainPageData",
    ()=>getMainPageData,
    "getProfile",
    ()=>getProfile,
    "getPublicProfile",
    ()=>getPublicProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/axios/Axios.ts [app-client] (ecmascript)");
;
const getProfile = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/profile");
        return response.data;
    } catch (error) {
        var _error_response;
        throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || {
            success: false,
            message: "Failed to fetch profile"
        };
    }
};
const createOrUpdateProfile = async (formData)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/profile/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        var _error_response;
        throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || {
            success: false,
            message: "Failed to save profile"
        };
    }
};
const getPublicProfile = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/profile/public");
        return response.data;
    } catch (error) {
        var _error_response;
        throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || {
            success: false,
            message: "Failed to fetch profile"
        };
    }
};
const getMainPageData = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/main");
        return response.data;
    } catch (error) {
        var _error_response;
        throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || {
            success: false,
            message: "Failed to fetch main page data"
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Debug/ThemeDebug.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeDebug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeDebug() {
    _s();
    const { theme, setTheme, systemTheme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [htmlClass, setHtmlClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeDebug.useEffect": ()=>{
            setMounted(true);
            setHtmlClass(document.documentElement.className);
        }
    }["ThemeDebug.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeDebug.useEffect": ()=>{
            setHtmlClass(document.documentElement.className);
        }
    }["ThemeDebug.useEffect"], [
        theme
    ]);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading theme debug..."
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/Debug/ThemeDebug.tsx",
            lineNumber: 21,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-20 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold mb-2",
                children: "Theme Debug"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Debug/ThemeDebug.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Theme: ",
                            theme
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Debug/ThemeDebug.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Resolved: ",
                            resolvedTheme
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Debug/ThemeDebug.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "System: ",
                            systemTheme
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Debug/ThemeDebug.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "HTML Class: ",
                            htmlClass
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Debug/ThemeDebug.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
                        className: "mt-2 px-3 py-1 bg-blue-500 text-white rounded text-xs",
                        children: "Toggle Theme"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Debug/ThemeDebug.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Debug/ThemeDebug.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Debug/ThemeDebug.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(ThemeDebug, "aVPbYycE2IBvVTNTXhTLX5GMOfc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeDebug;
var _c;
__turbopack_context__.k.register(_c, "ThemeDebug");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Home page with premium layout and proper desktop width
 */ __turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Hero$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Hero/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Card$2f$NoteCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Card/NoteCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Card$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Card/BlogCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Card$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Card/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Card$2f$ResearchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Card/ResearchCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$apis$2f$Blog$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/apis/Blog/api.ts [app-client] (ecmascript)"); // <-- Use the new blog API
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$apis$2f$About$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/apis/About/api.ts [app-client] (ecmascript)"); // <-- Import your profile API
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Debug$2f$ThemeDebug$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Debug/ThemeDebug.tsx [app-client] (ecmascript)");
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
function Home() {
    _s();
    // State for data
    const [latestBlogs, setLatestBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [latestNotes, setLatestNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [featuredProjects, setFeaturedProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [latestResearch, setLatestResearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Fetch data on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const fetchData = {
                "Home.useEffect.fetchData": async ()=>{
                    try {
                        var _profile_projects, _profile_research;
                        setLoading(true);
                        // Fetch blogs from database
                        console.log('Home page: Fetching blogs from database...');
                        const blogs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$apis$2f$Blog$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlogs"])();
                        console.log('Home page: Blogs received:', blogs);
                        setLatestBlogs(blogs.slice(0, 3));
                        // Fetch notes
                        const notes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotes"])();
                        setLatestNotes(notes.slice(0, 3));
                        // Fetch user profile (which includes projects and research)
                        const profileRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$apis$2f$About$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainPageData"])();
                        const profile = (profileRes === null || profileRes === void 0 ? void 0 : profileRes.data) || {};
                        setFeaturedProjects(((_profile_projects = profile.projects) === null || _profile_projects === void 0 ? void 0 : _profile_projects.slice(0, 3)) || []);
                        setLatestResearch(((_profile_research = profile.research) === null || _profile_research === void 0 ? void 0 : _profile_research.slice(0, 3)) || []);
                    } catch (error) {
                        console.error('Home page: Error fetching data:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["Home.useEffect.fetchData"];
            fetchData();
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white dark:bg-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Debug$2f$ThemeDebug$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Hero$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 px-8 sm:px-12 lg:px-16 xl:px-24 bg-white dark:bg-slate-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-screen-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4",
                                    children: "Explore My Work"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto",
                                    children: "Discover my projects, technical notes, and insights on AI & ML"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
                            children: [
                                {
                                    title: "Projects",
                                    description: "Explore my research and development work",
                                    href: "/project",
                                    icon: "🚀",
                                    gradient: "from-blue-600 to-blue-800"
                                },
                                {
                                    title: "Notes",
                                    description: "Technical notes and learning resources",
                                    href: "/notes",
                                    icon: "📝",
                                    gradient: "from-sky-600 to-sky-800"
                                },
                                {
                                    title: "Blog",
                                    description: "Articles and insights on AI/ML",
                                    href: "/blog",
                                    icon: "✍️",
                                    gradient: "from-blue-700 to-sky-700"
                                },
                                {
                                    title: "About",
                                    description: "Get to know more about me",
                                    href: "/about",
                                    icon: "👋",
                                    gradient: "from-sky-700 to-blue-900"
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "group relative overflow-hidden rounded-xl bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200/40 dark:border-slate-700/30 p-8 shadow-lg hover:shadow-xl hover:shadow-gray-300/30 dark:hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-br ".concat(item.gradient, " opacity-0 group-hover:opacity-10 transition-opacity duration-300")
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4 text-5xl",
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/page.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-600 dark:text-slate-400",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.title, true, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            featuredProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 px-8 sm:px-12 lg:px-16 xl:px-24 bg-gray-50 dark:bg-slate-900/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-screen-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-2",
                                            children: "Featured Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-slate-600 dark:text-slate-400",
                                            children: "Showcasing my latest work in AI/ML"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/project",
                                    className: "hidden sm:inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
                                    children: [
                                        "View All",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
                            children: featuredProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Card$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    project: project,
                                    index: index
                                }, project._id || "project-".concat(index), false, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this),
            latestResearch.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 px-8 sm:px-12 lg:px-16 xl:px-24 bg-white dark:bg-slate-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-screen-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-2",
                                            children: "Latest Research"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-slate-600 dark:text-slate-400",
                                            children: "Recent technical insights and learning resources"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/research",
                                    className: "hidden sm:inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
                                    children: [
                                        "View All",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
                            children: latestResearch.map((research, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Card$2f$ResearchCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    research: research,
                                    index: index
                                }, research._id || "research-".concat(index), false, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 164,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this),
            latestNotes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 px-8 sm:px-12 lg:px-16 xl:px-24 bg-slate-900 dark:bg-slate-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-screen-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl sm:text-5xl font-bold text-blue-400 mb-2",
                                            children: "Latest Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-slate-300",
                                            children: "Quick thoughts and technical notes"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/notes",
                                    className: "hidden sm:inline-flex items-center gap-2 px-6 py-3 text-blue-400 font-semibold hover:text-blue-300 transition-colors",
                                    children: [
                                        "View All",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
                            children: latestNotes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Card$2f$NoteCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    note: note,
                                    index: index
                                }, note._id || "note-".concat(index), false, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 196,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 px-8 sm:px-12 lg:px-16 xl:px-24 bg-gray-50 dark:bg-slate-900/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-screen-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-2",
                                            children: "Latest Blog Posts"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-slate-600 dark:text-slate-400",
                                            children: "Articles and insights on AI, ML, and technology"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blog",
                                    className: "hidden sm:inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
                                    children: [
                                        "View All",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
                            children: [
                                1,
                                2,
                                3
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-200 dark:bg-slate-700 rounded-xl h-64 mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 252,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-200 dark:bg-slate-700 rounded h-4 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-200 dark:bg-slate-700 rounded h-3 w-3/4"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this) : latestBlogs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
                            children: latestBlogs.map((blog, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Card$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    blog: blog,
                                    index: index
                                }, blog._id || "blog-".concat(index), false, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 dark:text-slate-400 text-lg",
                                children: "No blog posts available at the moment."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/page.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/page.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(Home, "4+b8HNS6ZYV9SrXyNzaPAJATfRA=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_36faca45._.js.map