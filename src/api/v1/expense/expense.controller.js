const ExpenseService = require('./../../../services/expense.service');
const CreateExpenseSchema = require('./dto/createExpense.dto');
const UpdateExpenseSchema = require('./dto/updateExpense.dto');
const createExpense = async (req, res) => {
  try {
    const {error} = CreateExpenseSchema.validate(req.body);
    if (error) {
      return res.status(400).json({message: error.message});
    }
    const expenseData = req.body;
    const expense = await ExpenseService.createExpense(expenseData);
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

const getExpenseById = async (req, res) => {
  try {
    const {expenseId} = req.params;
    const expense = await ExpenseService.getExpenseById(expenseId);
    res.status(200).json(expense);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseService.getExpenses();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};
// Esta no sirve
const getExpensesByUserId = async (req, res) => {
  try {
    const {userId} = req.params;
    const expenses = await ExpenseService.getExpensesByUserId(userId);
    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

const getExpensesByGroupId = async (req, res) => {
  try {
    const {groupId} = req.params;
    const expenses = await ExpenseService.getExpensesByGroupId(groupId);
    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

const updateExpense = async (req, res) => {
  try {
    const {error} = UpdateExpenseSchema.validate(req.body);
    if (error) {
      return res.status(400).json({message: error.message});
    }
    const {expenseId} = req.params;
    const updateData = req.body;
    const expense = await ExpenseService.updateExpense(expenseId, updateData);
    res.status(200).json(expense);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

const deleteExpense = async (req, res) => {
  try {
    const {expenseId} = req.params;

    // verificar si el gasto existe
    const expense = await ExpenseService.getExpenseById(expenseId);
    if (!expense) {
      return res.status(404).json({message: 'El gasto no existe'});
    }

    await ExpenseService.deleteExpense(expenseId);
    res.status(204).json({message: 'Gasto eliminado correctamente'});
  } catch (error) {
    res.status(404).json({message: error.message});
  }
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
