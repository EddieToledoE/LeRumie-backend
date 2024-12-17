const notificationService = require('../../../services/notification.service');

const getNotificationsByUserId = async (req, res) => {
  try {
    const {userId} = req.params;

    const notifications = await notificationService.getNotificationsByUserId(
        userId,
    );

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({error: 'No se pudieron obtener las notificaciones.'});
  }
};

const getNotificationsByReceiverId = async (req, res) => {
  try {
    const {receiverId} = req.params;

    const notifications =
      await notificationService.getNotificationsByReceiverId(receiverId);

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({error: 'No se pudieron obtener las notificaciones.'});
  }
};

const markNotificationAsRead = async (req, res) => {
  try {
    const {id} = req.params;

    await notificationService.markNotificationAsReadEasier(id);

    res.status(200).json({message: 'Notificación marcada como leída'});
  } catch (error) {
    res
        .status(500)
        .json({error: 'No se pudo marcar la notificación como leída'});
  }
};

module.exports = {
  getNotificationsByUserId,
  getNotificationsByReceiverId,
  markNotificationAsRead,
};
