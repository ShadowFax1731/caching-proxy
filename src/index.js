#!/usr/bin/env node

const express = require("express");
const options = require("./utils/cli");
const router = require("./routes/proxyRoutes");

const app = express();
app.use(express.json());
app.use("/", router);

const PORT = options.port;
const ORIGIN = options.origin;

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
    console.log(`Forwarding requests to: ${ORIGIN}`);
});
