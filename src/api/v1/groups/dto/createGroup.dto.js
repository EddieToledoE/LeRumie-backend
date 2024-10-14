const Joi = require('joi');

const createGroupSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  members: Joi.array().items(Joi.string().required()),
  createdBy: Joi.string().required(),
});

module.exports = createGroupSchema;
