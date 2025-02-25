const deviceResource = require('../api/v1/devices/device.resource');

const registerDevice = async (deviceData) => {
  // Verificar si el dispositivo ya existe
  const existingDevice = await deviceResource.getDeviceById(deviceData.id);
  if (existingDevice) {
    throw new Error('El dispositivo ya está registrado');
  }

  return await deviceResource.registerDevice(deviceData);
};

const sendNotification = async (deviceId, message) => {
  // Verificar si el dispositivo existe
  const device = await deviceResource.getDeviceById(deviceId);
  if (!device) {
    throw new Error('Dispositivo no encontrado');
  }

  // Aquí iría la lógica para enviar la notificación al dispositivo
  // Por ejemplo, usando Firebase Cloud Messaging u otro servicio similar
  
  // Por ahora solo simulamos el envío
  console.log(`Notificación enviada al dispositivo ${deviceId}: ${message}`);
  
  return true;
};

module.exports = {
  registerDevice,
  sendNotification,
}; 