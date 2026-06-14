const express = require("express");
const category = require("../controllers/categoryController");

const router = express.Router();

// Category routes
router.post("/", category.createCategory);
router.get("/", category.getAllCategories);

router.get("/:id", category.getCategoryById);
router.patch("/:id", category.updateCategory);
router.put("/:id", category.updateCategory);
router.delete("/:id", category.deleteCategory);

module.exports = router;
