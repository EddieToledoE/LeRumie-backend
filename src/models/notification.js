const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      'PAYMENT_CONFIRMATION',
      'PAYMENT_REJECTED',
      'NEW_PAYMENT',
      'NEW_EXPENSE',
      'NEW_FRIEND',
      'NEW_GROUP',
      'REMINDER',
    ], // Lista de tipos permitidos
  },
  referenceId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'type', // Indica la entidad de referencia (en este caso, Payment)
  },
  read: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Notification', NotificationSchema);
