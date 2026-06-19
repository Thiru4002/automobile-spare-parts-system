const express = require("express");
const purchase = require("../controllers/purchaseController");

const router = express.Router();

// Purchase routes
router.post("/", purchase.createPurchase);
router.get("/", purchase.getAllPurchases);
router.get("/:id", purchase.getPurchaseById);

module.exports = router;
