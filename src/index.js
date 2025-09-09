#!/usr/bin/env node

const express = require("express");
const options = require("./utils/cli");
const router = require("./routes/proxyRoutes");
const { cache } = require("./utils/cache");

const app = express();
app.use(express.json());
app.use("/", router);

const PORT = options.port;
const ORIGIN = options.origin;

if (options.clearCache) {
    cache.clear();
    console.log("Cache cleared successfully");
    process.exit(0);
}

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
    console.log(`Forwarding requests to: ${ORIGIN}`);
});
