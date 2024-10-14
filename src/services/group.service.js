const groupResource = require('../api/v1/groups/group.resource');
const userGroupService = require('../services/userGroup.service');

const createGroup = async (groupData) => {
  const {name, members, createdBy} = groupData;

  // Crear el grupo
  const group = await groupResource.createGroup({name, createdBy});

  // Crear relaciones en UserGroup para cada miembro
  // prettier-ignore
  const userGroupPromises = members.map((userId) =>
    userGroupService.createUserGroup({
      userId,
      groupId: group._id,
      role: userId === createdBy ? 'admin' : 'member',
    }),
  );

  await Promise.all(userGroupPromises); // Ejecuta todas las promesas en paralelo
  return group;
};

const changeUserRole = async (userId, groupId, newRole) => {
  return await userGroupService.changeUserRole(userId, groupId, newRole);
};

const getGroupById = async (groupId) => {
  return await groupResource.getGroupById(groupId);
};

const getGroups = async () => {
  return await groupResource.getGroups();
};

const updateGroup = async (groupId, updateData) => {
  const {name, members} = updateData;

  // Actualizar el nombre del grupo si se proporciona
  const updatedGroup = await groupResource.updateGroup(groupId, {name});

  if (members && members.length > 0) {
    // Obtener los miembros actuales del grupo desde UserGroup
    const existingMembers = await userGroupService.getMembersByGroupId(groupId);

    // Filtrar los nuevos miembros que aún no están en UserGroup
    // prettier-ignore
    const newMembers = members.filter(
        (userId) => !existingMembers.includes(userId.toString()),
    );

    // Crear relaciones en UserGroup solo para los nuevos miembros
    // prettier-ignore
    const userGroupPromises = newMembers.map((userId) =>
      userGroupService.createUserGroup({
        userId,
        groupId,
        role: 'member',
      }),
    );

    await Promise.all(userGroupPromises); // Ejecuta todas las promesas en paralelo
  }

  return updatedGroup;
};

// Eliminar un grupo y todas sus relaciones en UserGroup
const deleteGroup = async (groupId) => {
  // Eliminar todas las relaciones con este grupo
  await userGroupService.deleteUserGroupByGroupId(groupId);

  // Eliminar el grupo
  return await groupResource.deleteGroup(groupId);
};

module.exports = {
  createGroup,
  getGroupById,
  getGroups,
  updateGroup,
  deleteGroup,
  changeUserRole,
};
