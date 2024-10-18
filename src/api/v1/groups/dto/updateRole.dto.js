const joi = require('joi');

// prettier-ignore
const UpdateRoleSchema = joi
    .object({
      newRole: joi.string().min(5).max(6),
      userId: joi.string().required(),
      groupId: joi.string().required(),
    })
    .min(3);

module.exports = UpdateRoleSchema;
