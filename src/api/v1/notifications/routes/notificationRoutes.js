const Router = require('express').Router;
const {
  getNotificationsByUserId,
  getNotificationsByReceiverId,
  markNotificationAsRead,
} = require('../notification.controller');

const router = Router();

router.get('/user/:userId', getNotificationsByUserId);
router.get('/receiver/:receiverId', getNotificationsByReceiverId);
router.put('/read/:id', markNotificationAsRead);
module.exports = router;
