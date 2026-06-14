const express = require("express");
const customer = require("../controllers/customerController");

const router = express.Router();

// Customer routes
router.post("/", customer.createCustomer);
router.get("/", customer.getAllCustomers);

router.get("/:id", customer.getCustomerById);
router.patch("/:id", customer.updateCustomer);
router.put("/:id", customer.updateCustomer);
router.delete("/:id", customer.deleteCustomer);

module.exports = router;
