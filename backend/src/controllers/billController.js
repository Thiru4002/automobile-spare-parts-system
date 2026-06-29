const Bill = require("../models/bill");
const Product = require("../models/product");
const Customer = require("../models/customer");
const mongoose = require("mongoose");

const createBill = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { customer, items, paymentStatus } = req.body;

    // Validate if customer exists
    const customerExists = await Customer.findById(customer);
    if (!customerExists) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ status: "error", message: "Customer not found" });
    }

    let totalAmount = 0;
    const validatedItems = [];

    // Validate products and stock
    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) {
        throw new Error(`Product ${item.product} not found`);
      }
      if (product.currentStock < item.quantity) {
        throw new Error(`Insufficient stock for product: ${product.name}`);
      }

      const lineTotal = item.quantity * item.sellingPriceAtSaleTime;
      totalAmount += lineTotal;

      validatedItems.push({
        product: item.product,
        quantity: item.quantity,
        sellingPriceAtSaleTime: item.sellingPriceAtSaleTime,
        lineTotal: lineTotal
      });

      // Decrement stock
      product.currentStock -= item.quantity;
      await product.save({ session });
    }

    const bill = await Bill.create([{
      customer,
      items: validatedItems,
      totalAmount,
      paymentStatus
    }], { session });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      status: "success",
      data: bill[0],
      message: "Bill created and stock updated",
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getAllBills = async (req, res) => {
  try {
    const bills = await Bill.find().populate("customer items.product");
    res.status(200).json({
      status: "success",
      count: bills.length,
      data: bills,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  createBill,
  getAllBills,
};
