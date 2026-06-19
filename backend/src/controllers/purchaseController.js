const Purchase = require("../models/purchase");
const Product = require("../models/product");
const Supplier = require("../models/supplier");

const createPurchase = async (req, res) => {
  try {
    const { product, supplier, quantity, costPrice } = req.body;

    // Validate if product exists
    const productExists = await Product.findById(product);
    if (!productExists) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }

    // Validate if supplier exists
    const supplierExists = await Supplier.findById(supplier);
    if (!supplierExists) {
      return res.status(404).json({
        status: "error",
        message: "Supplier not found",
      });
    }

    const purchase = await Purchase.create({
      product,
      supplier,
      quantity,
      costPrice,
    });

    // Update product stock
    productExists.currentStock += quantity;
    await productExists.save();

    res.status(201).json({
      status: "success",
      data: purchase,
      message: "Purchase recorded and stock updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find().populate("product supplier");

    res.status(200).json({
      status: "success",
      count: purchases.length,
      data: purchases,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const getPurchaseById = async (req, res) => {
  try {
    const { id } = req.params;

    const purchase = await Purchase.findById(id).populate("product supplier");

    if (!purchase) {
      return res.status(404).json({
        status: "error",
        message: "Purchase not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: purchase,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  createPurchase,
  getAllPurchases,
  getPurchaseById,
};
