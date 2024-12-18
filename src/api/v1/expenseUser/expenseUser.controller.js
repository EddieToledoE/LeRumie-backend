const ExpenseUserServices = require('../../../services/expenseUser.service');

const getExpenseUserByUserId = async (req, res) => {
  try {
    const {userId} = req.params;
    const expenses = await ExpenseUserServices.getExpenseUserByUserId(userId);
    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

const getExpenseUserById = async (req, res) => {
  try {
    const {expenseUserId} = req.params;
    const expense = await ExpenseUserServices.getExpenseUserById(expenseUserId);
    res.status(200).json(expense);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

const getExpenseUserByExpenseId = async (req, res) => {
  try {
    const {expenseId} = req.params;
    const expenses = await ExpenseUserServices.getExpenseUserByExpenseId(
        expenseId,
    );
    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

module.exports = {
  getExpenseUserByUserId,
  getExpenseUserById,
  getExpenseUserByExpenseId,
};
