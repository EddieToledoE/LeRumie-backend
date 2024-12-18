const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paidBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  splitBetween: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      customAmountOwed: {type: Number, required: true},
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// validar que los montos de customAmountOwed sumen el total del gasto

ExpenseSchema.path('splitBetween').validate(function(value) {
  const totalAmountOwed = value.reduce(
      (acc, user) => acc + user.customAmountOwed,
      0,
  );
  return totalAmountOwed === this.amount;
}, 'La suma de los montos a deber debe ser igual al monto total del gasto');
module.exports = mongoose.model('Expense', ExpenseSchema);
