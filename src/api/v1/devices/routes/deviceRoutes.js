const Router = require('express').Router;
const {
  registerDevice,
  sendNotification,
} = require('../device.controller');

const router = Router();

router.post('/register', registerDevice);
router.post('/notify/:deviceId', sendNotification);

module.exports = router; 