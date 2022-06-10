
const express = require("express");

const router = express.Router();

const { getAllProduct, createNewProduct } = require("../controllers/product.controller");

const { uploadFiles } = require("../middlewares/uploadImage");

router.get("", getAllProduct);
router.post("/create", createNewProduct);


module.exports = router;