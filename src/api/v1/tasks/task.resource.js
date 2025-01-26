const Task = require('../../../models/task');

const createTask = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

const getTaskById = async (taskId) => {
  return await Task.findById(taskId);
};

const getTasks = async () => {
  return await Task.find();
};

const updateTask = async (taskId, updateData) => {
  return await Task.findByIdAndUpdate(taskId, updateData, {new: true});
};

const deleteTask = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};

module.exports = {
  createTask,
  getTaskById,
  getTasks,
  updateTask,
  deleteTask,
};
