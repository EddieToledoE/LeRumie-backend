const {Router} = require('express');

const {
  createTask,
  getTaskById,
  getTasks,
  updateTaskById,
  deleteTaskById,
} = require('../task.controller');

const authenticateToken = require('../../middleware/auth.middleware');

const router = Router();

router.post('/create', createTask);
router.get('/:id', getTaskById);
router.get('/', getTasks);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);

module.exports = router;
