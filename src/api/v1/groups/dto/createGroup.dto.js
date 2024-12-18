const Joi = require('joi');

const createGroupSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  members: Joi.array().items(Joi.string().required()).min(1), // Al menos un miembro
  createdBy: Joi.string().required(),
  isFixedExpenses: Joi.boolean().default(false),
  billingDay: Joi.when('isFixedExpenses', {
    is: true,
    then: Joi.number().integer().min(1).max(31).required(),
    otherwise: Joi.optional(),
  }),
  billingPeriod: Joi.when('isFixedExpenses', {
    is: true,
    then: Joi.string()
      .valid('monthly', 'bimonthly', 'quarterly', 'semiannual', 'annual')
      .required(),
    otherwise: Joi.optional(),
  }),
});

module.exports = createGroupSchema;
