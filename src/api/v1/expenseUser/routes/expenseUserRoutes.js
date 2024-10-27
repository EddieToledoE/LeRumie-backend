const Router = require('express').Router;

const {
  getExpenseUserByUserId,
  getExpenseUserById,
} = require('../expenseUser.controller');

const router = Router();

router.get('/userid/:userId', getExpenseUserByUserId); // ready
router.get('/:expenseUserId', getExpenseUserById); // ready

module.exports = router;
