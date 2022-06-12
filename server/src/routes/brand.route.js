
const express = require("express");

const router = express.Router();

const { getProductById, createBrand } = require("../controllers/brand.controller");

router.get("/get/:id", getProductById);
router.post("/create/:id", createBrand);

module.exports = router;