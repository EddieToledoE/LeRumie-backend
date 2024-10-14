const groupService = require('../api/v1/groups/group.resource');

const createGroup = async (groupData) => {
  return await groupService.createGroup(groupData);
};

const getGroupById = async (groupId) => {
  return await groupService.getGroupById(groupId);
};

const getGroups = async () => {
  return await groupService.getGroups();
};

const updateGroup = async (groupId, updateData) => {
  return await groupService.updateGroup(groupId, updateData);
};

const deleteGroup = async (groupId) => {
  return await groupService.deleteGroup(groupId);
};

module.exports = {
  createGroup,
  getGroupById,
  getGroups,
  updateGroup,
  deleteGroup,
};
