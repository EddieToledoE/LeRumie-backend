const joi = require('joi');

// prettier-ignore
const UpdateGroupSchema = joi
    .object({
      name: joi.string().min(3).max(30),
      members: joi.array().items(joi.string().required()),
    })
    .min(1);

module.exports = UpdateGroupSchema;
