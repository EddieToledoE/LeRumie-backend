const Joi = require('joi');
// prettier-ignore
const createExpenseSchema = Joi.object({
  amount: Joi.number().required(),
  description: Joi.string().required(),
  paidBy: Joi.string().required(),
  groupId: Joi.string().required(),
  splitBetween: Joi.array().items(
      Joi.object({
        userId: Joi.string().required(),
        customAmountOwed: Joi.number().required(),
      }),
  ),
});

module.exports = createExpenseSchema;
