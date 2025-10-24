(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/axios/Axios.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const instance = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:4000/") || "http://localhost:4000",
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});
// Request interceptor
instance.interceptors.request.use((config)=>{
    return config;
}, (error)=>{
    return Promise.reject(error);
});
// Response interceptor - Remove automatic redirects to prevent conflicts
instance.interceptors.response.use((response)=>{
    return response;
}, (error)=>{
    // Just return the error, let the AuthContext handle redirects
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = instance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/apis/Auth/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser,
    "loginUser",
    ()=>loginUser,
    "logoutUser",
    ()=>logoutUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/axios/Axios.ts [app-client] (ecmascript)");
;
const loginUser = async (credentials)=>{
    try {
        // Make sure cookies are included in the request
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/auth/login', credentials, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        var _error_response;
        // Handle axios error
        if ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) {
            throw error.response.data;
        }
        // Handle network or other errors
        throw {
            success: false,
            message: error.message || 'Network error occurred'
        };
    }
};
const logoutUser = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/auth/logout', {}, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        var _error_response;
        if ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) {
            throw error.response.data;
        }
        throw {
            success: false,
            message: error.message || 'Network error occurred'
        };
    }
};
const getCurrentUser = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$axios$2f$Axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/auth/me', {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        var _error_response;
        if ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) {
            throw error.response.data;
        }
        throw {
            success: false,
            message: error.message || 'Network error occurred'
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/contexts/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$apis$2f$Auth$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/apis/Auth/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider(param) {
    let { children } = param;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const login = async (credentials)=>{
        setIsLoading(true);
        setError("");
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$apis$2f$Auth$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUser"])(credentials);
            if (response.success) {
                setUser(response.data.user);
                return true;
            } else {
                setError(response.message || "Login failed. Please try again.");
                return false;
            }
        } catch (error) {
            const apiError = error;
            let errorMessage = "An unexpected error occurred. Please try again.";
            if (apiError.message) {
                if (apiError.message.includes("Invalid") || apiError.message.includes("credentials")) {
                    errorMessage = "Invalid email or password. Please check your credentials and try again.";
                } else if (apiError.message.includes("Network")) {
                    errorMessage = "Unable to connect to the server. Please check your internet connection.";
                } else {
                    errorMessage = apiError.message;
                }
            }
            setError(errorMessage);
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    const logout = async ()=>{
        setIsLoading(true);
        try {
            // Clear user state first
            setUser(null);
            // Call logout API to clear server-side cookie
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$apis$2f$Auth$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutUser"])();
        } catch (error) {
            console.error("Logout error:", error);
            // Even if API fails, ensure user is cleared locally
            setUser(null);
        } finally{
            setIsLoading(false);
            // Navigate to login page
            router.replace("/admin/login");
        }
    };
    // New function to check authentication - called manually from dashboard
    const checkAuth = async ()=>{
        setIsLoading(true);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$apis$2f$Auth$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            if (response.success && response.data) {
                setUser(response.data);
                return true;
            } else {
                setUser(null);
                return false;
            }
        } catch (error) {
            var _apiError_response;
            const apiError = error;
            // Only log non-401 errors
            if (((_apiError_response = apiError.response) === null || _apiError_response === void 0 ? void 0 : _apiError_response.status) !== 401) {
                var _apiError_response1;
                console.error("Auth check error:", {
                    message: apiError.message || "Unknown error",
                    status: (_apiError_response1 = apiError.response) === null || _apiError_response1 === void 0 ? void 0 : _apiError_response1.status
                });
            }
            setUser(null);
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    const clearError = ()=>{
        setError("");
    };
    const value = {
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        login,
        logout,
        checkAuth,
        clearError
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/contexts/AuthContext.tsx",
        lineNumber: 135,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "0xpzP9D20ruYURLnG4bWsXmthZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_c76e6196._.js.map