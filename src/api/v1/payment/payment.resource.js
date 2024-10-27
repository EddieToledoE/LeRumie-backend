const PaymentSchema = require('../../../models/payment');

const createPayment = async (paymentData) => {
  const payment = new PaymentSchema(paymentData);
  return await payment.save();
};

const getPaymentById = async (paymentId) => {
  return await PaymentSchema.findById(paymentId).lean();
};

const getPaymentsByUserId = async (userId) => {
  return await PaymentSchema.find((payer = userId));
};

const getPayments = async () => {
  return await PaymentSchema.find();
};

const updatePayment = async (paymentId, updateData) => {
  return await PaymentSchema.findByIdAndUpdate(paymentId, updateData, {
    new: true,
  });
};

const deletePayment = async (paymentId) => {
  return await PaymentSchema.findByIdAndDelete(paymentId);
};

module.exports = {
  createPayment,
  getPaymentById,
  getPayments,
  updatePayment,
  deletePayment,
  getPaymentsByUserId,
};
