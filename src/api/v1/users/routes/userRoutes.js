const {Router} = require('express');
const {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  addFriend,
} = require('../user.controller');
const authenticateToken = require('../../middleware/auth.middleware');
const router = Router();

router.post('/create', authenticateToken, createUser);
router.get('/:id', authenticateToken, getUserById);
router.put('/:id', authenticateToken, updateUserById);
router.delete('/:id', authenticateToken, deleteUserById);
router.post('/friend/:id', addFriend);
module.exports = router;
