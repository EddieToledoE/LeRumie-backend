TaskResource = require('../api/v1/tasks/task.resource');

const createTask = async (taskData) => {
  return await TaskResource.createTask(taskData);
};

const getTaskById = async (taskId) => {
  return await TaskResource.getTaskById(taskId);
};

const getTasks = async () => {
  return await TaskResource.getTasks();
};

const updateTask = async (taskId, updateData) => {
  return await TaskResource.updateTask(taskId, updateData);
};

const deleteTask = async (taskId) => {
  return await TaskResource.deleteTask(taskId);
};

module.exports = {
  createTask,
  getTaskById,
  getTasks,
  updateTask,
  deleteTask,
};
