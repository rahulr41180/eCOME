
const express = require("express");

const router = express.Router();

const { getAllCate, createCate } = require("../controllers/categories.controller");

router.get("", getAllCate);
router.post("/create", createCate);

module.exports = router;