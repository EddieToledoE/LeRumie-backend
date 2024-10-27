const Router = require('express').Router;

const {
  createExpense,
  getExpenseById,
  getExpenses,
  // getExpensesByUserId,
  getExpensesByGroupId,
  updateExpense,
  deleteExpense,
} = require('../expense.controller');

const router = Router();

router.post('/create', createExpense); // ready
router.get('/:expenseId', getExpenseById); // ready
// router.get('/user/:userId', getExpensesByUserId); Expenses no tiene userId
router.get('/group/:groupId', getExpensesByGroupId); // ready
router.get('/', getExpenses); // ready
router.put('/:expenseId', updateExpense); // ready solo cambia description y paidBy
router.delete('/:expenseId', deleteExpense); // ready

module.exports = router;
