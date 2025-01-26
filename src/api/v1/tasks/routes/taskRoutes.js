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

router.post('/create', authenticateToken, createTask);
router.get('/:id', authenticateToken, getTaskById);
router.get('/', authenticateToken, getTasks);
router.put('/:id', authenticateToken, updateTaskById);
router.delete('/:id', authenticateToken, deleteTaskById);

module.exports = router;
