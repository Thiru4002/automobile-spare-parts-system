const express = require("express");
const product = require("../controllers/productController");

const router = express.Router();

// Product routes
router.post("/", product.createProduct);
router.get("/", product.getAllProducts);

router.get("/:id", product.getProductById);
router.patch("/:id", product.updateProduct);
router.put("/:id", product.updateProduct);
router.delete("/:id", product.deleteProduct);

module.exports = router;
