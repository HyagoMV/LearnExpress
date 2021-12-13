const express = require("express");
const router = express.Router()

router.use((req, res, next) =>
    next()
);

router.get("/", (req, res) =>
    res.send("HTTP GET Z")
);

router.post("/", (req, res) =>
    res.send("HTTP POST Z")
);

module.exports = router;