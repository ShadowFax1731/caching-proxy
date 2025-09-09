const { cache } = require("../utils/cache");
const options = require("../utils/cli");

const handleProxy = async (req, res) => {
    const key = `${req.method}:${req.originalUrl}`;
    const cachedResponse = cache.get(key);
    const ORIGIN = options.origin;

    if (cachedResponse) {
        // ✅ Serve from cache
        const { body, headers, status } = cachedResponse;
        console.log(`Cache HIT for ${key}`);
        res.set(headers);
        res.setHeader("X-Cache", "HIT");
        return res.status(status).send(body);
    }

    try {
        // ✅ Forward to origin server
        const response = await fetch(`${ORIGIN}${req.originalUrl}`, {
            method: req.method,
            headers: {
                ...req.headers,
                host: new URL(ORIGIN).host, // replace host header
            },
        });

        console.log(`Cache MISS for ${key}`);
        const body = await response.text();

        const headers = Object.fromEntries(response.headers.entries());

        cache.set(key, { body, headers, status: response.status });

        res.set(headers);
        res.setHeader("X-Cache", "MISS");
        res.status(response.status).send(body);
    } catch (error) {
        console.error("Proxy error:", error.message);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = handleProxy;
