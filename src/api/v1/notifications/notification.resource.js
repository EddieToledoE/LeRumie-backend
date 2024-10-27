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

module.exports = {
  createNotification,
  getNotifications,
  getNotificationById,
  deleteNotification,
  getNotificationByTypeAndReference,
};
