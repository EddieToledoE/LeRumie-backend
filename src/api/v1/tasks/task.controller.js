const TaskService = require('../../../services/task.service');
const createTaskSchema = require('./dto/createTask.dto');
const updateTaskSchema = require('./dto/updateTask.dto');

const createTask = async (req, res) => {
  try {
    const {error} = createTaskSchema.validate(req.body);
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    const task = await TaskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await TaskService.getTaskById(req.params.id);
    if (!task) {
      return res.status(404).json({error: 'Task not found'});
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getTasks();
    res.json(tasks);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const updateTaskById = async (req, res) => {
  try {
    const {error} = updateTaskSchema.validate(req.body);
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    const task = await TaskService.updateTask(req.params.id, req.body);
    if (!task) {
      return res.status(404).json({error: 'Task not found'});
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const task = await TaskService.deleteTask(req.params.id);
    if (!task) {
      return res.status(404).json({error: 'Task not found'});
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = {
  createTask,
  getTaskById,
  getTasks,
  updateTaskById,
  deleteTaskById,
};
