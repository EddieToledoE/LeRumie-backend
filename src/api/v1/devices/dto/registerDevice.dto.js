const Joi = require('joi');

const registerDeviceSchema = Joi.object({
  id: Joi.string().required(),
});

module.exports = registerDeviceSchema; 