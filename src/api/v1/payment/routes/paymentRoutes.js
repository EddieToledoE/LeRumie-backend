const router = require('express').Router();
const {
  createPayment,
  getPaymentById,
  getPayments,
  updatePayment,
  deletePayment,
  getPaymentsByUserId,
  confirmPayment,
  rejectPayment,
} = require('../payment.controller');

router.post('/create', createPayment);
router.post('/confirm/:paymentId', confirmPayment);
router.post('/reject/:paymentId', rejectPayment);
router.get('/', getPayments);
router.get('/:paymentId', getPaymentById);
router.get('/userid/:userId', getPaymentsByUserId);
router.put('/:paymentId', updatePayment);
router.delete('/:paymentId', deletePayment);

module.exports = router;
