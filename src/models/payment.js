const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  expenseUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ExpenseUser',
    required: true,
  },
  payer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  isConfirmed: {
    type: Boolean,
    default: false, // false significa que el pago está pendiente
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Payment', PaymentSchema);
