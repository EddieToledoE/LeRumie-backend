const NotificationSchema = require('../../../models/notification');

const createNotification = async (notificationData) => {
  return await NotificationSchema.create(notificationData);
};

const getNotifications = async () => {
  return await NotificationSchema.find();
};

const getNotificationById = async (notificationId) => {
  return await NotificationSchema.findById(notificationId);
};

const deleteNotification = async (notificationId) => {
  return await NotificationSchema.findByIdAndDelete(notificationId);
};

const getNotificationByTypeAndReference = async (userId, type, referenceId) => {
  return await NotificationSchema.findOne({userId, type, referenceId});
};

const getNotificationsByUserId = async (userId) => {
  return await Notification.find({userId}).sort({createdAt: -1}); // Ordena por fecha descendente
};

// Obtener notificaciones por receiverId
const getNotificationsByReceiverId = async (receiverId) => {
  return await Notification.find({receiverId}).sort({createdAt: -1}); // Ordena por fecha descendente
};

module.exports = {
  createNotification,
  getNotifications,
  getNotificationById,
  deleteNotification,
  getNotificationByTypeAndReference,
  getNotificationsByUserId,
  getNotificationsByReceiverId,
};
