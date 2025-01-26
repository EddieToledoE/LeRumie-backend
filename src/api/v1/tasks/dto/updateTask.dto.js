const Joi = require('joi');

const updateTaskSchema = Joi.object({
  title: Joi.string().min(3).max(30),
  description: Joi.string().min(6),
  status: Joi.string().valid('pending', 'in progress', 'completed'),
}).min(1);

module.exports = updateTaskSchema;
