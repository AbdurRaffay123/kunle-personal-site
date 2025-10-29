const NodeCache = require('node-cache');

// Cache for storing like data
// Key format: "blog:{blogId}:likes" -> Set of IPs
// Key format: "ip:{ip}:cooldown" -> timestamp
const likeCache = new NodeCache({ stdTTL: 86400 }); // 24 hours TTL
const cooldownCache = new NodeCache({ stdTTL: 300 }); // 5 minutes TTL

/**
 * Get client IP address from request
 * @param {Object} req - Express request object
 * @returns {string} - Client IP address
 */
const getClientIP = (req) => {
  return req.ip || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress ||
         (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
         req.headers['x-forwarded-for']?.split(',')[0] ||
         '127.0.0.1';
};

/**
 * Check if IP is in cooldown period
 * @param {string} ip - Client IP address
 * @returns {boolean} - True if in cooldown
 */
const isInCooldown = (ip) => {
  const cooldownKey = `ip:${ip}:cooldown`;
  return cooldownCache.has(cooldownKey);
};

/**
 * Set cooldown for IP
 * @param {string} ip - Client IP address
 */
const setCooldown = (ip) => {
  const cooldownKey = `ip:${ip}:cooldown`;
  cooldownCache.set(cooldownKey, Date.now());
};

/**
 * Get likes data for a blog
 * @param {string} blogId - Blog ID
 * @returns {Set} - Set of IPs that liked this blog
 */
const getBlogLikes = (blogId) => {
  const likesKey = `blog:${blogId}:likes`;
  const likes = likeCache.get(likesKey);
  return likes ? new Set(likes) : new Set();
};

/**
 * Set likes data for a blog
 * @param {string} blogId - Blog ID
 * @param {Set} likesSet - Set of IPs that liked this blog
 */
const setBlogLikes = (blogId, likesSet) => {
  const likesKey = `blog:${blogId}:likes`;
  likeCache.set(likesKey, Array.from(likesSet));
};

/**
 * Toggle like for a blog by IP
 * @param {string} blogId - Blog ID
 * @param {string} ip - Client IP address
 * @returns {Object} - Result object with action and new count
 */
const toggleLike = (blogId, ip) => {
  const likesSet = getBlogLikes(blogId);
  const hasLiked = likesSet.has(ip);
  
  if (hasLiked) {
    // Unlike: remove IP from set
    likesSet.delete(ip);
    setBlogLikes(blogId, likesSet);
    return {
      action: 'unliked',
      newCount: likesSet.size,
      userLiked: false
    };
  } else {
    // Like: add IP to set
    likesSet.add(ip);
    setBlogLikes(blogId, likesSet);
    return {
      action: 'liked',
      newCount: likesSet.size,
      userLiked: true
    };
  }
};

/**
 * Check if user has liked a blog
 * @param {string} blogId - Blog ID
 * @param {string} ip - Client IP address
 * @returns {boolean} - True if user has liked
 */
const hasUserLiked = (blogId, ip) => {
  const likesSet = getBlogLikes(blogId);
  return likesSet.has(ip);
};

/**
 * Get like statistics for a blog
 * @param {string} blogId - Blog ID
 * @param {string} ip - Client IP address
 * @returns {Object} - Like statistics
 */
const getLikeStats = (blogId, ip) => {
  const likesSet = getBlogLikes(blogId);
  return {
    totalLikes: likesSet.size,
    userLiked: likesSet.has(ip)
  };
};

module.exports = {
  getClientIP,
  isInCooldown,
  setCooldown,
  toggleLike,
  hasUserLiked,
  getLikeStats
};
