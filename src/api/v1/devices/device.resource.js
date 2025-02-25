const DeviceId = require('../../../models/devicesId');

const registerDevice = async (deviceData) => {
  const device = new DeviceId(deviceData);
  return await device.save();
};

const getDeviceById = async (id) => {
  return await DeviceId.findOne({id});
};

const deleteDevice = async (id) => {
  return await DeviceId.findOneAndDelete({id});
};

module.exports = {
  registerDevice,
  getDeviceById,
  deleteDevice,
}; 