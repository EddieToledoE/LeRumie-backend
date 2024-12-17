const Router = require('express').Router;
const {
  getNotificationsByUserId,
  getNotificationsByReceiverId,
} = require('../notification.controller');

const router = Router();

router.get('/user/:userId', getNotificationsByUserId);
router.get('/receiver/:receiverId', getNotificationsByReceiverId);

module.exports = router;
