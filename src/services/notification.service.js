const NotificationResource = require('../api/v1/notifications/notification.resource');
const ExpenseUser = require('../../src/models/expenseuser');
const createNotification = async (notificationData) => {
  return await NotificationResource.createNotification(notificationData);
};

const createPaymentNotification = async (payment) => {
  try {
    // 1. Obtener el ExpenseUser asociado al pago
    const expenseUser = await ExpenseUser.findById(
      payment.expenseUserId
    ).populate({
      path: 'expenseId',
      select: 'paidBy', // Solo obtenemos el campo 'paidBy' del gasto
    });

    if (!expenseUser) {
      throw new Error('ExpenseUser no encontrado');
    }

    // 2. Extraer el receiverId del campo 'paidBy' del Expense
    const receiverId = expenseUser.expenseId.paidBy;

    // 3. Crear la notificación con los datos
    const notificationData = {
      userId: payment.payer, // El usuario que realizó el pago
      receiverId: receiverId, // El usuario que recibe la notificación
      message: `Se ha registrado un nuevo pago de ${payment.amount}`,
      type: 'NEW_PAYMENT',
      referenceId: payment._id,
    };

    // 4. Guardar la notificación en la base de datos
    return await createNotification(notificationData);
  } catch (error) {
    console.error('Error al crear la notificación:', error.message);
    throw new Error('No se pudo crear la notificación');
  }
};

const createConfirmedPaymentNotification = async (payment) => {
  const notificationData = {
    userId: payment.payer, // ID del usuario que realizó el pago
    message: `El pago de ${payment.amount} ha sido confirmado`,
    type: 'PAYMENT_CONFIRMATION', // Tipo de notificación
    referenceId: payment._id, // ID de referencia del pago
  };
  return await createNotification(notificationData);
};

const createRejectedPaymentNotification = async (payment) => {
  const notificationData = {
    userId: payment.payer, // ID del usuario que realizó el pago
    message: `El pago de ${payment.amount} ha sido rechazado`,
    type: 'PAYMENT_REJECTED', // Tipo de notificación
    referenceId: payment._id, // ID de referencia del pago
  };
  return await createNotification(notificationData);
};

const getNotifications = async () => {
  return await NotificationResource.getNotifications();
};

const getNotificationById = async (notificationId) => {
  return await NotificationResource.getNotificationById(notificationId);
};

const deleteNotification = async (notificationId) => {
  return await NotificationResource.deleteNotification(notificationId);
};

const markNotificationAsRead = async (userId, type, referenceId) => {
  const notification =
    await NotificationResource.getNotificationByTypeAndReference(
      userId,
      type,
      referenceId
    );
  if (notification) {
    notification.read = true;
    await notification.save();
  }
};

const markNotificationAsReadEasier = async (notificationId) => {
  const notification = await NotificationResource.getNotificationById(
    notificationId
  );
  if (notification) {
    notification.read = true;
    await notification.save();
  }
};

const getNotificationsByUserId = async (userId) => {
  return await NotificationResource.getNotificationsByUserId(userId);
};

const getNotificationsByReceiverId = async (receiverId) => {
  return await NotificationResource.getNotificationsByReceiverId(receiverId);
};

module.exports = {
  createNotification,
  createPaymentNotification,
  createConfirmedPaymentNotification,
  createRejectedPaymentNotification,
  getNotifications,
  getNotificationById,
  deleteNotification,
  markNotificationAsRead,
  getNotificationsByUserId,
  getNotificationsByReceiverId,
  markNotificationAsReadEasier,
};
