module.exports = [
"[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$reading$2d$time$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/reading-time/index.js [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs);
}
function calculateReadingTime(text) {
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$reading$2d$time$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(text);
    return Math.ceil(stats.minutes);
}
function formatDate(date, format = "long") {
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
function extractHeadings(markdown) {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings = [];
    let match;
    while((match = headingRegex.exec(markdown)) !== null){
        const level = match[1].length;
        const text = match[2].trim();
        const id = slugify(text);
        headings.push({
            id,
            text,
            level
        });
    }
    return headings;
}
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = ()=>{
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
}),
"[project]/frontend/src/components/UI/Container.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Container component for layout and max-width control
 */ __turbopack_context__.s([
    "default",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Container({ children, size = "lg", className, as: Component = "div" }) {
    const sizes = {
        sm: "max-w-2xl",
        md: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-full"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className),
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/UI/Container.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/UI/Spinner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Loading spinner component
 */ __turbopack_context__.s([
    "default",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Spinner({ size = "md", className, label = "Loading..." }) {
    const sizes = {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-2",
        lg: "h-12 w-12 border-3",
        xl: "h-16 w-16 border-4"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center",
        role: "status",
        "aria-label": label,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("animate-spin rounded-full border-primary border-t-transparent", sizes[size], className)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/UI/Spinner.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: label
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/UI/Spinner.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/UI/Spinner.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/UI/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Button component with various styles and sizes
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, variant = "primary", size = "md", isLoading = false, fullWidth = false, className, disabled, as: Component = "button", ...props }, ref)=>{
    const variants = {
        primary: "bg-primary text-white hover:bg-primary-700 focus:ring-primary-500 disabled:bg-primary-300",
        secondary: "bg-accent text-white hover:bg-accent-700 focus:ring-accent-500 disabled:bg-accent-300",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-500 dark:border-primary-400 dark:text-primary-400",
        ghost: "text-primary hover:bg-primary-50 focus:ring-primary-500 dark:hover:bg-primary-900/20",
        link: "text-primary underline-offset-4 hover:underline"
    };
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };
    const commonProps = {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center gap-2 rounded-lg font-medium", "transition-all duration-200 ease-in-out", "focus:outline-none focus:ring-2 focus:ring-offset-2", "disabled:cursor-not-allowed disabled:opacity-50", variants[variant], variant !== "link" && sizes[size], fullWidth && "w-full", className)
    };
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-4 w-4 animate-spin",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/UI/Button.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/UI/Button.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/UI/Button.tsx",
                lineNumber: 70,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true);
    if (Component === "button") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ...commonProps,
            disabled: disabled || isLoading,
            ...props,
            children: content
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/UI/Button.tsx",
            lineNumber: 98,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ...commonProps,
        ...props,
        children: content
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/UI/Button.tsx",
        lineNumber: 109,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
const __TURBOPACK__default__export__ = Button;
}),
"[project]/frontend/src/components/UI/EmptyState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Empty state component for when no data is available
 */ __turbopack_context__.s([
    "default",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UI/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
function EmptyState({ icon, title, description, actionLabel, actionHref, onAction }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-12 text-center shadow-xl backdrop-blur-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-900",
        role: "status",
        "aria-live": "polite",
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 text-gray-400 dark:text-gray-500",
                "aria-hidden": "true",
                children: icon
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/UI/EmptyState.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-3 text-2xl font-bold text-gray-900 dark:text-white",
                children: title
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/UI/EmptyState.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6 max-w-md text-gray-600 dark:text-gray-400",
                children: description
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/UI/EmptyState.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            actionLabel && (actionHref || onAction) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: actionHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                    href: actionHref,
                    variant: "primary",
                    children: actionLabel
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/UI/EmptyState.tsx",
                    lineNumber: 49,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onClick: onAction,
                    variant: "primary",
                    children: actionLabel
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/UI/EmptyState.tsx",
                    lineNumber: 53,
                    columnNumber: 13
                }, this)
            }, void 0, false)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/UI/EmptyState.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/UI/ErrorState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Error state component for displaying errors
 */ __turbopack_context__.s([
    "default",
    ()=>ErrorState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UI/Button.tsx [app-ssr] (ecmascript)");
;
;
function ErrorState({ title = "Something went wrong", message, onRetry, showRetry = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-12 text-center shadow-xl backdrop-blur-sm dark:border-red-800 dark:from-red-900/20 dark:to-gray-900",
        role: "alert",
        "aria-live": "assertive",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-16 w-16 text-red-500 dark:text-red-400",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/UI/ErrorState.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/UI/ErrorState.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/UI/ErrorState.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-3 text-2xl font-bold text-red-900 dark:text-red-200",
                children: title
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/UI/ErrorState.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6 max-w-md text-red-700 dark:text-red-300",
                children: message
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/UI/ErrorState.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            showRetry && onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClick: onRetry,
                variant: "primary",
                children: "Try Again"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/UI/ErrorState.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/UI/ErrorState.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/hooks/useFetch.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Custom hook for data fetching with loading and error states
 */ __turbopack_context__.s([
    "useFetch",
    ()=>useFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useFetch(fetcher, options) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        data: null,
        loading: !options?.skip,
        error: null
    });
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setState((prev)=>({
                    ...prev,
                    loading: true,
                    error: null
                }));
            const result = await fetcher();
            setState({
                data: result,
                loading: false,
                error: null
            });
        } catch (err) {
            setState({
                data: null,
                loading: false,
                error: err instanceof Error ? err.message : "Unknown error"
            });
        }
    }, [
        fetcher
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (options?.skip) {
            return;
        }
        fetchData();
    }, [
        options?.skip,
        fetchData
    ]);
    return {
        ...state,
        refetch: fetchData
    };
}
}),
"[project]/frontend/src/apis/Research/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createResearch",
    ()=>createResearch,
    "deleteResearch",
    ()=>deleteResearch,
    "getAllResearch",
    ()=>getAllResearch,
    "getResearchByCategory",
    ()=>getResearchByCategory,
    "getResearchById",
    ()=>getResearchById,
    "getResearchByTag",
    ()=>getResearchByTag,
    "getResearchCategories",
    ()=>getResearchCategories,
    "getResearchTags",
    ()=>getResearchTags,
    "updateResearch",
    ()=>updateResearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/axios/Axios.ts [app-ssr] (ecmascript)");
;
const createResearch = async (researchData)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/api/research/create', researchData);
        return response.data;
    } catch (error) {
        console.error('Create research error:', error);
        throw {
            success: false,
            message: error.response?.data?.message || 'Failed to create research',
            errors: error.response?.data?.errors || []
        };
    }
};
const getAllResearch = async (params)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/api/research', {
            params
        });
        return response.data;
    } catch (error) {
        console.error('Get all research error:', error);
        throw {
            success: false,
            message: error.response?.data?.message || 'Failed to fetch research',
            errors: error.response?.data?.errors || []
        };
    }
};
const getResearchById = async (id)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/research/${id}`);
        return response.data;
    } catch (error) {
        console.error('Get research by ID error:', error);
        throw {
            success: false,
            message: error.response?.data?.message || 'Failed to fetch research',
            errors: error.response?.data?.errors || []
        };
    }
};
const updateResearch = async (id, researchData)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/api/research/update/${id}`, researchData);
        return response.data;
    } catch (error) {
        console.error('Update research error:', error);
        throw {
            success: false,
            message: error.response?.data?.message || 'Failed to update research',
            errors: error.response?.data?.errors || []
        };
    }
};
const deleteResearch = async (id)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/api/research/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('Delete research error:', error);
        throw {
            success: false,
            message: error.response?.data?.message || 'Failed to delete research',
            errors: error.response?.data?.errors || []
        };
    }
};
const getResearchCategories = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/api/research/categories');
        return response.data;
    } catch (error) {
        console.error('Get research categories error:', error);
        throw {
            success: false,
            message: error.response?.data?.message || 'Failed to fetch categories',
            errors: error.response?.data?.errors || []
        };
    }
};
const getResearchTags = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/api/research/tags');
        return response.data;
    } catch (error) {
        console.error('Get research tags error:', error);
        throw {
            success: false,
            message: error.response?.data?.message || 'Failed to fetch tags',
            errors: error.response?.data?.errors || []
        };
    }
};
const getResearchByCategory = async (category)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/research/category/${category}`);
        return response.data;
    } catch (error) {
        console.error('Get research by category error:', error);
        throw {
            success: false,
            message: error.response?.data?.message || 'Failed to fetch research by category',
            errors: error.response?.data?.errors || []
        };
    }
};
const getResearchByTag = async (tag)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/research/tag/${tag}`);
        return response.data;
    } catch (error) {
        console.error('Get research by tag error:', error);
        throw {
            success: false,
            message: error.response?.data?.message || 'Failed to fetch research by tag',
            errors: error.response?.data?.errors || []
        };
    }
};
}),
"[project]/frontend/src/components/Card/ResearchCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ResearchCard = ({ research })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 flex flex-col h-full transition hover:scale-[1.02] hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2",
                children: research.title
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-700 dark:text-slate-300 mb-3 line-clamp-3",
                children: research.description
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium mr-2",
                        children: research.category
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    research.tags && research.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex flex-wrap gap-1",
                        children: [
                            research.tags.slice(0, 3).map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs font-medium",
                                    children: tag
                                }, idx, false, {
                                    fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            research.tags.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full text-xs font-medium",
                                children: [
                                    "+",
                                    research.tags.length - 3
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: research.researchLink,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "mt-auto text-blue-600 dark:text-blue-400 underline text-sm font-medium hover:text-blue-800 dark:hover:text-blue-300",
                children: "View Research"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-xs text-slate-500 dark:text-slate-400",
                children: research.formattedDate || new Date(research.createdAt).toLocaleDateString()
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Card/ResearchCard.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ResearchCard;
}),
"[project]/frontend/src/app/research/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResearchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UI/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UI/Spinner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UI/EmptyState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$ErrorState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/UI/ErrorState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useFetch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/hooks/useFetch.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$apis$2f$Research$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/apis/Research/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Card$2f$ResearchCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Card/ResearchCard.tsx [app-ssr] (ecmascript)"); // You should create this similar to ProjectCard
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
const TAG_FILTERS = [
    "All",
    "LLM & Deep Learning",
    "NLP",
    "Forecasting",
    "ML",
    "Others"
];
function ResearchPage() {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showFeaturedOnly, setShowFeaturedOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTag, setActiveTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const fetchResearchList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (activeTag && activeTag !== "All") {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$apis$2f$Research$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getResearchByTag"])(activeTag);
            return res.data;
        } else {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$apis$2f$Research$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllResearch"])();
            return res.data;
        }
    }, [
        activeTag
    ]);
    const { data: researchList, loading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useFetch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFetch"])(fetchResearchList);
    // Filter researches (only by search, tag filtering is now handled by API)
    const filteredResearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!researchList) return [];
        return researchList.filter((research)=>{
            return !searchTerm || research.title.toLowerCase().includes(searchTerm.toLowerCase()) || research.description?.toLowerCase().includes(searchTerm.toLowerCase()) || research.category?.toLowerCase().includes(searchTerm.toLowerCase()) || research.tags?.some((tag)=>tag.toLowerCase().includes(searchTerm.toLowerCase()));
        });
    }, [
        researchList,
        searchTerm
    ]);
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["debounce"])((value)=>{
        setSearchTerm(value);
    }, 300);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-50 dark:bg-slate-900 pt-32",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$ErrorState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    message: error,
                    onRetry: refetch
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/research/page.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/research/page.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/research/page.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "mb-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-700 dark:text-blue-400 mb-4",
                            children: "Researches"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/research/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto",
                            children: "Explore my published and ongoing research in AI, ML, and more."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/research/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/research/page.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.1
                    },
                    className: "mb-10 rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 p-6 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/research/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/research/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "search",
                                    placeholder: "Search research by title, description, category, or tag...",
                                    onChange: (e)=>handleSearch(e.target.value),
                                    className: "w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-3 pl-12 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all",
                                    "aria-label": "Search research"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/research/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/research/page.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/research/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/research/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex flex-wrap gap-3 justify-center",
                    children: TAG_FILTERS.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTag(tag),
                            className: `px-4 py-2 rounded-full font-medium text-sm transition ${activeTag === tag ? "bg-blue-600 text-white shadow" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900"}`,
                            children: tag
                        }, tag, false, {
                            fileName: "[project]/frontend/src/app/research/page.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/research/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                !loading && researchList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "mb-6 text-slate-600 dark:text-slate-400",
                    children: [
                        filteredResearch.length,
                        " ",
                        filteredResearch.length === 1 ? "research" : "researches",
                        " found"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/research/page.tsx",
                    lineNumber: 144,
                    columnNumber: 11
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        size: "lg",
                        className: "mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/research/page.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/research/page.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this),
                !loading && filteredResearch.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
                    children: filteredResearch.map((research, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Card$2f$ResearchCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            research: research,
                            index: index
                        }, research._id || index, false, {
                            fileName: "[project]/frontend/src/app/research/page.tsx",
                            lineNumber: 164,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/research/page.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this),
                !loading && filteredResearch.length === 0 && researchList && researchList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "No Research found",
                    description: "Try adjusting your search or filter criteria"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/research/page.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this),
                !loading && (!researchList || researchList.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$UI$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "No Research found",
                    description: "Check back soon for new research publications"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/research/page.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/research/page.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/research/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/frontend/node_modules/reading-time/lib/reading-time.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */ /**
 * @typedef {import('reading-time').Options['wordBound']} WordBoundFunction
 */ /**
 * @param {number} number
 * @param {number[][]} arrayOfRanges
 */ function codeIsInRanges(number, arrayOfRanges) {
    return arrayOfRanges.some(([lowerBound, upperBound])=>lowerBound <= number && number <= upperBound);
}
/**
 * @type {WordBoundFunction}
 */ function isCJK(c) {
    if ('string' !== typeof c) {
        return false;
    }
    const charCode = c.charCodeAt(0);
    // Help wanted!
    // This should be good for most cases, but if you find it unsatisfactory
    // (e.g. some other language where each character should be standalone words),
    // contributions welcome!
    return codeIsInRanges(charCode, [
        // Hiragana (Katakana not included on purpose,
        // context: https://github.com/ngryman/reading-time/pull/35#issuecomment-853364526)
        // If you think Katakana should be included and have solid reasons, improvement is welcomed
        [
            0x3040,
            0x309f
        ],
        // CJK Unified ideographs
        [
            0x4e00,
            0x9fff
        ],
        // Hangul
        [
            0xac00,
            0xd7a3
        ],
        // CJK extensions
        [
            0x20000,
            0x2ebe0
        ]
    ]);
}
/**
 * @type {WordBoundFunction}
 */ function isAnsiWordBound(c) {
    return ' \n\r\t'.includes(c);
}
/**
 * @type {WordBoundFunction}
 */ function isPunctuation(c) {
    if ('string' !== typeof c) {
        return false;
    }
    const charCode = c.charCodeAt(0);
    return codeIsInRanges(charCode, [
        [
            0x21,
            0x2f
        ],
        [
            0x3a,
            0x40
        ],
        [
            0x5b,
            0x60
        ],
        [
            0x7b,
            0x7e
        ],
        // CJK Symbols and Punctuation
        [
            0x3000,
            0x303f
        ],
        // Full-width ASCII punctuation variants
        [
            0xff00,
            0xffef
        ]
    ]);
}
/**
 * @type {import('reading-time').default}
 */ function readingTime(text, options = {}) {
    let words = 0, start = 0, end = text.length - 1;
    // use provided value if available
    const wordsPerMinute = options.wordsPerMinute || 200;
    // use provided function if available
    const isWordBound = options.wordBound || isAnsiWordBound;
    // fetch bounds
    while(isWordBound(text[start]))start++;
    while(isWordBound(text[end]))end--;
    // Add a trailing word bound to make handling edges more convenient
    const normalizedText = `${text}\n`;
    // calculate the number of words
    for(let i = start; i <= end; i++){
        // A CJK character is a always word;
        // A non-word bound followed by a word bound / CJK is the end of a word.
        if (isCJK(normalizedText[i]) || !isWordBound(normalizedText[i]) && (isWordBound(normalizedText[i + 1]) || isCJK(normalizedText[i + 1]))) {
            words++;
        }
        // In case of CJK followed by punctuations, those characters have to be eaten as well
        if (isCJK(normalizedText[i])) {
            while(i <= end && (isPunctuation(normalizedText[i + 1]) || isWordBound(normalizedText[i + 1]))){
                i++;
            }
        }
    }
    // reading time stats
    const minutes = words / wordsPerMinute;
    // Math.round used to resolve floating point funkyness
    //   http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
    const time = Math.round(minutes * 60 * 1000);
    const displayed = Math.ceil(minutes.toFixed(2));
    return {
        text: displayed + ' min read',
        minutes: minutes,
        time: time,
        words: words
    };
}
/**
 * Export
 */ module.exports = readingTime;
}),
"[project]/frontend/node_modules/reading-time/lib/stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */ /**
 * Module dependencies.
 */ const readingTime = __turbopack_context__.r("[project]/frontend/node_modules/reading-time/lib/reading-time.js [app-ssr] (ecmascript)");
const Transform = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Transform;
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * @typedef {import('reading-time').Options} Options
 * @typedef {import('reading-time').Options['wordBound']} WordBoundFunction
 * @typedef {import('reading-time').readingTimeStream} ReadingTimeStream
 * @typedef {import('stream').TransformCallback} TransformCallback
 */ /**
 * @param {Options} options
 * @returns {ReadingTimeStream}
 */ function ReadingTimeStream(options) {
    // allow use without new
    if (!(this instanceof ReadingTimeStream)) {
        return new ReadingTimeStream(options);
    }
    Transform.call(this, {
        objectMode: true
    });
    this.options = options || {};
    this.stats = {
        minutes: 0,
        time: 0,
        words: 0
    };
}
util.inherits(ReadingTimeStream, Transform);
/**
 * @param {Buffer} chunk
 * @param {BufferEncoding} encoding
 * @param {TransformCallback} callback
 */ ReadingTimeStream.prototype._transform = function(chunk, encoding, callback) {
    const stats = readingTime(chunk.toString(encoding), this.options);
    this.stats.minutes += stats.minutes;
    this.stats.time += stats.time;
    this.stats.words += stats.words;
    callback();
};
/**
 * @param {TransformCallback} callback
 */ ReadingTimeStream.prototype._flush = function(callback) {
    this.stats.text = Math.ceil(this.stats.minutes.toFixed(2)) + ' min read';
    this.push(this.stats);
    callback();
};
/**
 * Export
 */ module.exports = ReadingTimeStream;
}),
"[project]/frontend/node_modules/reading-time/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports.default = module.exports = __turbopack_context__.r("[project]/frontend/node_modules/reading-time/lib/reading-time.js [app-ssr] (ecmascript)");
module.exports.readingTimeStream = __turbopack_context__.r("[project]/frontend/node_modules/reading-time/lib/stream.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=frontend_9577c292._.js.map