const Expense = require('../../../models/expense');

const createExpense = async (expenseData) => {
  const expense = new Expense(expenseData);
  return await expense.save();
};

const getExpenseById = async (expenseId) => {
  return await Expense.findById(expenseId).lean();
};

const getExpenses = async () => {
  return await Expense.find();
};

const getExpensesByUserId = async (userId) => {
  return await Expense.find({userId});
};

const getExpensesByGroupId = async (groupId) => {
  return await Expense.find({groupId});
};

const updateExpense = async (expenseId, updateData) => {
  return await Expense.findByIdAndUpdate(expenseId, updateData, {new: true});
};

const deleteExpense = async (expenseId) => {
  return await Expense.findByIdAndDelete(expenseId);
};

module.exports = {
  createExpense,
  getExpenseById,
  getExpensesByUserId,
  getExpensesByGroupId,
  getExpenses,
  updateExpense,
  deleteExpense,
};
