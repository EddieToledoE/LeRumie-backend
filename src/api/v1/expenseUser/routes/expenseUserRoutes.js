const Router = require('express').Router;

const {
  getExpenseUserByUserId,
  getExpenseUserById,
  getExpenseUserByExpenseId,
} = require('../expenseUser.controller');

const router = Router();

router.get('/userid/:userId', getExpenseUserByUserId); // ready
router.get('/:expenseUserId', getExpenseUserById); // ready
router.get('/expenseid/:expenseId', getExpenseUserByExpenseId); // ready

module.exports = router;
