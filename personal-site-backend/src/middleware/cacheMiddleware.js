const NodeCache = require('node-cache');

// Create cache instance with 5 minute TTL
const cache = new NodeCache({ stdTTL: 300 });

// Cache middleware for GET requests
const cacheMiddleware = (duration = 300) => {
  return (req, res, next) => {
    // Only cache GET requests
    if (req.method !== 'GET') {
      return next();
    }

    // Create cache key from URL and query params
    const cacheKey = `${req.originalUrl}`;
    
    // Check if data exists in cache
    const cachedData = cache.get(cacheKey);
    
    if (cachedData) {
      console.log('Cache hit for:', cacheKey);
      return res.json(cachedData);
    }

    // Store original json method
    const originalJson = res.json;
    
    // Override json method to cache response
    res.json = function(data) {
      // Cache the response
      cache.set(cacheKey, data, duration);
      console.log('Cached response for:', cacheKey);
      
      // Call original json method
      return originalJson.call(this, data);
    };

    next();
  };
};

// Clear cache for specific patterns
const clearCache = (pattern) => {
  const keys = cache.keys();
  const matchingKeys = keys.filter(key => key.includes(pattern));
  
  if (matchingKeys.length > 0) {
    cache.del(matchingKeys);
    console.log(`Cleared ${matchingKeys.length} cache entries for pattern: ${pattern}`);
  }
};

// Clear all cache
const clearAllCache = () => {
  cache.flushAll();
  console.log('All cache cleared');
};

module.exports = {
  cacheMiddleware,
  clearCache,
  clearAllCache
};
