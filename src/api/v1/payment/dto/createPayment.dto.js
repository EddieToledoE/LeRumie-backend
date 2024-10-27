const joi = require('joi');

const createPaymentSchema = joi.object({
  expenseUserId: joi.string().required(),
  payer: joi.string().required(),
  amount: joi.number().required(),
});

module.exports = createPaymentSchema;
