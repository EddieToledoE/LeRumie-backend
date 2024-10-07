const {Router} = require('express');
const {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../user.controller');

const router = Router();

router.post('/create', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

module.exports = router;
