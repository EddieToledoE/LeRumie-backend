const Joi = require('joi');

const createTaskSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(10).required(),
});

module.exports = createTaskSchema;
