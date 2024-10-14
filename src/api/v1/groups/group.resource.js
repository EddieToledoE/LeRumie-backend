const Group = require('../../../models/group');

const createGroup = async (groupData) => {
  const group = new Group(groupData);
  return await group.save();
};

const getGroupById = async (groupId) => {
  return await Group.findById(groupId);
};

const getGroups = async () => {
  return await Group.find();
};

const updateGroup = async (groupId, updateData) => {
  return await Group.findByIdAndUpdate(groupId, updateData, {new: true});
};

const deleteGroup = async (groupId) => {
  return await Group.findByIdAndDelete(groupId);
};

module.exports = {
  createGroup,
  getGroupById,
  getGroups,
  updateGroup,
  deleteGroup,
};
