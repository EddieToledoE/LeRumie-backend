const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: {type: String, required: true},
  members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  createdBy: {
    type: String,
    required: true,
  },
  isFixedExpenses: {type: Boolean, default: false},
  billingDay: {type: Number, min: 1, max: 31},
  billingPeriod: {
    type: String,
    enum: ['monthly', 'bimonthly', 'quarterly', 'yearly'],
  },
  nextBillingDate: {type: Date},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

GroupSchema.pre('save', function (next) {
  if (this.isFixedExpenses && this.billingDay && this.billingPeriod) {
    const now = new Date();
    let nextDate = new Date(now.getFullYear(), now.getMonth(), this.billingDay);

    // Si la fecha ya pasó este mes, mover a la próxima facturación
    if (now > nextDate) {
      if (this.billingPeriod === 'monthly') {
        nextDate.setMonth(nextDate.getMonth() + 1);
      } else if (this.billingPeriod === 'bimonthly') {
        nextDate.setMonth(nextDate.getMonth() + 2);
      } else if (this.billingPeriod === 'quarterly') {
        nextDate.setMonth(nextDate.getMonth() + 3);
      } else if (this.billingPeriod === 'yearly') {
        nextDate.setFullYear(nextDate.getFullYear() + 1);
      }
    }

    this.nextBillingDate = nextDate;
  }
  next();
});

module.exports = mongoose.model('Group', GroupSchema);
