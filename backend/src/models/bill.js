const mongoose = require('mongoose');

const billItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
  sellingPriceAtSaleTime: { type: Number, required: true },
  lineTotal: { type: Number, required: true }
});

const billSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  items: [billItemSchema],
  totalAmount: { type: Number, required: true },
  paymentStatus: { 
    type: String, 
    enum: ['PAID', 'PARTIAL', 'PENDING'], 
    default: 'PENDING' 
  },
  billDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bill', billSchema);
