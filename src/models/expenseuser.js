const mongoose = require('mongoose');

const ExpenseUserSchema = new mongoose.Schema({
  expenseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Expense',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amountOwed: {
    type: Number,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false, // false significa que aún no se ha pagado la deuda
  },
});

module.exports = mongoose.model('ExpenseUser', ExpenseUserSchema);
