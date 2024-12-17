const ExpenseResource = require('../api/v1/expense/expense.resource');
const ExpenseUserService = require('./expenseUser.service');

const createExpense = async (expenseData) => {
  const {groupId, description, amount, paidBy, splitBetween} = expenseData;

  // Crear el Expense
  const expense = await ExpenseResource.createExpense({
    groupId,
    description,
    amount,
    paidBy,
    splitBetween,
  });

  // Crear las relaciones en ExpenseUser
  const userExpensePromises = splitBetween.map(({userId, customAmountOwed}) =>
    ExpenseUserService.createExpenseUser({
      userId,
      expenseId: expense._id,
      amountOwed: customAmountOwed,
      initialAmount: customAmountOwed,
    }),
  );

  await Promise.all(userExpensePromises); // Ejecutar todas las promesas en paralelo
  return expense;
};

const getExpenseById = async (expenseId) => {
  return await ExpenseResource.getExpenseById(expenseId);
};

const getExpensesByUserId = async (userId) => {
  return await ExpenseResource.getExpensesByUserId(userId);
};

const getExpensesByGroupId = async (groupId) => {
  return await ExpenseResource.getExpensesByGroupId(groupId);
};

const getExpenses = async () => {
  return await ExpenseResource.getExpenses();
};

const updateExpense = async (expenseId, updateData) => {
  return await ExpenseResource.updateExpense(expenseId, updateData);
};

const deleteExpense = async (expenseId) => {
  // Eliminar las relaciones en ExpenseUser
  await ExpenseUserService.deleteExpenseUsersByExpenseId(expenseId);

  return await ExpenseResource.deleteExpense(expenseId);
};

module.exports = {
  createExpense,
  getExpenseById,
  getExpenses,
  getExpensesByUserId,
  getExpensesByGroupId,
  updateExpense,
  deleteExpense,
};
