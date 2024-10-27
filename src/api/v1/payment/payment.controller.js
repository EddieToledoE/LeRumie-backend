const paymentService = require('../../../services/payment.service');
const createPaymentSchema = require('./dto/createPayment.dto');
const NotificationService = require('../../../services/notification.service');
const createPayment = async (req, res) => {
  try {
    const {error} = createPaymentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({message: error.message});
    }
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await paymentService.getPayments();
    res.status(200).json(payments);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

const getPaymentById = async (req, res) => {
  try {
    const payment = await paymentService.getPaymentById(req.params.paymentId);
    if (!payment) {
      return res.status(404).json({message: 'Pago no encontrado'});
    }
    res.status(200).json(payment);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};
// prettier-ignore
const getPaymentsByUserId = async (req, res) => {
  try {
    const payments = await paymentService.getPaymentsByUserId(
        req.params.userId,
    );
    if (!payments) {
      return res.status(404).json({message: 'Pagos no encontrado'});
    }
    res.status(200).json(payments);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};
// prettier-ignore
const updatePayment = async (req, res) => {
  try {
    const payment = await paymentService.updatePayment(
        req.params.paymentId,
        req.body,
    );
    if (!payment) {
      return res.status(404).json({message: 'Pago no encontrado'});
    }
    res.status(200).json(payment);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

const deletePayment = async (req, res) => {
  try {
    const payment = await paymentService.deletePayment(req.params.paymentId);
    if (!payment) {
      return res.status(404).json({message: 'Payment not found'});
    }
    res.status(200).json(payment);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};
// prettier-ignore
const confirmPayment = async (req, res) => {
  try {
    const {paymentId} = req.params;

    // Confirmar el pago y actualizar el estado de isConfirmed en Payment
    const payment = await paymentService.confirmPayment(paymentId);

    // Marcar la notificación como leída
    await NotificationService.markNotificationAsRead(
        payment.payer,
        'NEW_PAYMENT',
        payment._id,
    );

    await NotificationService.createConfirmedPaymentNotification(payment);

    res
        .status(200)
        .json({message: 'Pago confirmado y monto adeudado actualizado', payment});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

// pretier-ignore
const rejectPayment = async (req, res) => {
  try {
    const {paymentId} = req.params;
    const payment = await paymentService.getPaymentById(paymentId);

    // Marcar la notificación como leída
    await NotificationService.markNotificationAsRead(
        payment.payer,
        'NEW_PAYMENT',
        payment._id,
    );

    await NotificationService.createRejectedPaymentNotification(payment);
    await paymentService.rejectPayment(paymentId);
    res.status(200).json({message: 'Pago rechazado', payment});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = {
  createPayment,
  getPayments,
  getPaymentById,
  getPaymentsByUserId,
  updatePayment,
  deletePayment,
  confirmPayment,
  rejectPayment,
};
