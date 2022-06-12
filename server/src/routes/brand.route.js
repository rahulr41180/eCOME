
const express = require("express");

const router = express.Router();

const { getProductById } = require("../controllers/brand.controller");

router.get("/get/:id", getProductById);

module.exports = router;