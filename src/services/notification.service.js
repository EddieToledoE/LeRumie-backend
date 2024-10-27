const NotificationResource = require('../api/v1/notifications/notification.resource');

const createNotification = async (notificationData) => {
  return await NotificationResource.createNotification(notificationData);
};

const createPaymentNotification = async (payment) => {
  const notificationData = {
    userId: payment.payer, // ID del usuario que realizó el pago
    message: `Se ha registrado un nuevo pago de ${payment.amount}`,
    type: 'NEW_PAYMENT', // Tipo de notificación
    referenceId: payment._id, // ID de referencia del pago
  };
  return await createNotification(notificationData);
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
        referenceId,
    );
  if (notification) {
    notification.read = true;
    await notification.save();
  }
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
};
