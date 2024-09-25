const Joi = require('joi');

const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  password: Joi.string().min(6),
});

module.exports = updateUserSchema;
