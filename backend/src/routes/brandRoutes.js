const express = require("express");
const brand = require("../controllers/brandController");

const router = express.Router();

// Brand routes
router.post("/", brand.createBrand);
router.get("/", brand.getAllBrands);

router.get("/:id", brand.getBrandById);
router.patch("/:id", brand.updateBrand);
router.put("/:id", brand.updateBrand);
router.delete("/:id", brand.deleteBrand);

module.exports = router;
