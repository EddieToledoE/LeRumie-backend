const userGroupResource = require('../api/v1/userGroup/userGroup.resource');

const createUserGroup = async (userGroupData) => {
  return await userGroupResource.createUserGroup(userGroupData);
};

const getUserGroupById = async (userGroupId) => {
  return await userGroupResource.getUserGroupById(userGroupId);
};

const deleteUserGroup = async (userGroupId) => {
  return await userGroupResource.deleteUserGroup(userGroupId);
};
// prettier-ignore
const deleteUserGroupByUserIdAndGroupId = async (userId, groupId) => {
  return await userGroupResource.deleteUserGroupByUserIdAndGroupId(
      userId,
      groupId,
  );
};

const changeUserRole = async (userId, groupId, newRole) => {
  // Elimina la relación anterior
  await deleteUserGroupByUserIdAndGroupId(userId, groupId);

  // Crear una nueva relación con el nuevo rol
  return await createUserGroup({userId, groupId, role: newRole});
};

const getMembersByGroupId = async (groupId) => {
  return await userGroupResource.getMembersByGroupId(groupId);
};

module.exports = {
  createUserGroup,
  getUserGroupById,
  deleteUserGroup,
  changeUserRole,
  getMembersByGroupId,
};
