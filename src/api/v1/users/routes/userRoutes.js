const {Router} = require('express');
const {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  addFriend,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  searchUsersByUsername,
} = require('../user.controller');
const authenticateToken = require('../../middleware/auth.middleware');
const router = Router();

router.post('/create', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);
// router.post('/friend/:id', addFriend); desactualizado
router.post('/friend/request/:id', sendFriendRequest);
router.post('/friend/accept/:id', acceptFriendRequest);
router.post('/friend/reject/:id', rejectFriendRequest);
router.get('/friend/search', searchUsersByUsername);
module.exports = router;
