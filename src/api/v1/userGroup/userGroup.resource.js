const UserGroup = require('../../../models/usergroup');

const createUserGroup = async (userGroupData) => {
  const userGroup = new UserGroup(userGroupData);
  return await userGroup.save();
};

const getUserGroupById = async (userGroupId) => {
  return await UserGroup.findById(userGroupId);
};

const deleteUserGroup = async (userGroupId) => {
  return await UserGroup.findByIdAndDelete(userGroupId);
};

const getMembersByGroupId = async (groupId) => {
  const userGroups = await UserGroup.find({groupId}).select('userId');
  return userGroups.map((userGroup) => userGroup.userId.toString());
};

module.exports = {
  createUserGroup,
  getUserGroupById,
  deleteUserGroup,
  getMembersByGroupId,
};
