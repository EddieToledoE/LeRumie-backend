const deviceService = require('../../../services/device.service');
const registerDeviceSchema = require('./dto/registerDevice.dto');

const registerDevice = async (req, res) => {
  try {
    const {error} = registerDeviceSchema.validate(req.body);
    if (error) {
      return res.status(400).json({message: error.details[0].message});
    }
    
    const device = await deviceService.registerDevice(req.body);
    res.status(201).json(device);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

const sendNotification = async (req, res) => {
  try {
    const {deviceId} = req.params;
    const {message} = req.body;
    
    await deviceService.sendNotification(deviceId, message);
    res.status(200).json({message: 'Notificación enviada correctamente'});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

module.exports = {
  registerDevice,
  sendNotification,
}; 