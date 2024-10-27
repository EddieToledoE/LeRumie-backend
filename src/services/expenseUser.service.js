const ExpenseUserResource = require('../api/v1/expenseUser/expenseUser.resource');

const createExpenseUser = async (expenseUserData) => {
  return await ExpenseUserResource.createExpenseUser(expenseUserData);
};

const getExpenseUserById = async (expenseUserId) => {
  return await ExpenseUserResource.getExpenseUserById(expenseUserId);
};

const getExpensesUsers = async () => {
  return await ExpenseUserResource.getExpensesUsers();
};

const getExpenseUserByUserId = async (userId) => {
  return await ExpenseUserResource.getExpenseUserByUserId(userId);
};

const updateExpenseUser = async (expenseUserId, updateData) => {
  return await ExpenseUserResource.updateExpenseUser(expenseUserId, updateData);
};

const deleteExpenseUser = async (expenseUserId) => {
  return await ExpenseUserResource.deleteExpenseUser(expenseUserId);
};

const deleteExpenseUsersByExpenseId = async (expenseId) => {
  return await ExpenseUserResource.deleteExpenseUsersByExpenseId(expenseId);
};

module.exports = {
  createExpenseUser,
  getExpenseUserById,
  getExpensesUsers,
  getExpenseUserByUserId,
  updateExpenseUser,
  deleteExpenseUser,
  deleteExpenseUsersByExpenseId,
};
