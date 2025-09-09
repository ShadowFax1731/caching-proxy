const express = require("express");
const proxyController = require("../controllers/proxyController");

const router = express.Router();

router.use("/", proxyController);

module.exports = router;
