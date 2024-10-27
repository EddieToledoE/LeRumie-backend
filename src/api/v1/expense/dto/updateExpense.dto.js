const joi = require('joi');

const updateExpenseSchema = joi.object({
  description: joi.string(),
  paidBy: joi.string(),
});

module.exports = updateExpenseSchema;
