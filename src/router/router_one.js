const express = require("express");
const router = express.Router()

router.use((req, res, next) =>
    next()
);

router.get("/", (req, res) =>
    res.send("HTTP GET O")
);

router.post("/", (req, res) =>
    res.send("HTTP POST O")
);

module.exports = router;