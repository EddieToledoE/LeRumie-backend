const PaymentResource = require('../api/v1/payment/payment.resource');
const userExpenseService = require('../services/expenseUser.service');
const notificationService = require('../services/notification.service');

const createPayment = async (paymentData) => {
  const payment = await PaymentResource.createPayment(paymentData);

  await notificationService.createPaymentNotification(payment);

  return paymentData;
};

const rejectPayment = async (paymentId) => {
  const payment = await PaymentResource.getPaymentById(paymentId);

  if (!payment) {
    throw new Error('Pago no encontrado');
  }

  await PaymentResource.deletePayment(paymentId);

  return payment;
};

const confirmPayment = async (paymentId) => {
  const payment = await PaymentResource.getPaymentById(paymentId);

  if (!payment) {
    throw new Error('Pago no encontrado');
  }

  // Actualizar el campo isConfirmed a true
  await PaymentResource.updatePayment(paymentId, {isConfirmed: true});

  // Obtener el registro de ExpenseUser para el usuario y validar su existencia
  const expenseUser = await userExpenseService.getExpenseUserById(
      payment.expenseUserId,
  );
  if (!expenseUser) {
    throw new Error('Gasto del usuario no encontrado');
  }

  // Validar que el monto del pago no sea mayor que el monto adeudado
  const paymentAmount = payment.amount;
  if (paymentAmount > expenseUser.amountOwed) {
    throw new Error('El pago excede el monto adeudado');
  }

  if (paymentAmount <= 0) {
    throw new Error('El monto del pago debe ser mayor que cero');
  }

  // Calcular el nuevo monto adeudado y establecer el estado de pago si se cubre completamente
  const newAmountOwed = expenseUser.amountOwed - paymentAmount;
  const isPaid = newAmountOwed <= 0;

  // Actualizar el ExpenseUser con el nuevo monto adeudado y el estado de pago
  await userExpenseService.updateExpenseUser(expenseUser._id, {
    amountOwed: newAmountOwed,
    paid: isPaid,
  });

  return payment;
};

const getPaymentById = async (paymentId) => {
  return await PaymentResource.getPaymentById(paymentId);
};

const getPayments = async () => {
  return await PaymentResource.getPayments();
};

const getPaymentsByUserId = async (userId) => {
  return await PaymentResource.getPaymentsByUserId(userId);
};

const updatePayment = async (paymentId, updateData) => {
  return await PaymentResource.updatePayment(paymentId, updateData);
};

const deletePayment = async (paymentId) => {
  return await PaymentResource.deletePayment(paymentId);
};

module.exports = {
  createPayment,
  confirmPayment,
  rejectPayment,
  getPaymentById,
  getPayments,
  getPaymentsByUserId,
  updatePayment,
  deletePayment,
};
