const express = require("express");
const supplier = require("../controllers/supplierController");

const router = express.Router();

// Supplier routes
router.post("/", supplier.createSupplier);
router.get("/", supplier.getAllSuppliers);

router.get("/:id", supplier.getSupplierById);
router.patch("/:id", supplier.updateSupplier);
router.put("/:id", supplier.updateSupplier);
router.delete("/:id", supplier.deleteSupplier);

module.exports = router;
