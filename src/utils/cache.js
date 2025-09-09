const cache = new Map();

/**
 * Get cached response by key
 * @param {string} key - The cache key (method + url)
 * @returns {object|null} - Cached response or null if not found
 */
function get(key) {
    return cache.has(key) ? cache.get(key) : null;
}

/**
 * Set a response in cache
 * @param {string} key - The cache key
 * @param {object} value - The value to store (e.g., { body, headers })
 */
function set(key, value) {
    cache.set(key, value);
}

/**
 * Clear the entire cache
 */
function clear() {
    cache.clear();
}

module.exports = {
    cache,
    get,
    set,
    clear,
};
