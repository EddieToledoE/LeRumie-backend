const Router = require('express').Router;
const {
  createGroup,
  getGroupById,
  getGroups,
  updateGroupById,
  deleteGroupById,
} = require('../group.controller');

const router = Router();

router.post('/create', createGroup);
router.get('/:id', getGroupById);
router.get('/', getGroups);
router.put('/:id', updateGroupById);
router.delete('/:id', deleteGroupById);

module.exports = router;
